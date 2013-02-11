/**
* wp-core.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, window, document, undefined ){

var WebPro = {
    // Version of the framework.
    version: 0.1,

    // Utility method for wiring up derived class prototypes.

    inherit: function( derived, base ) {
        var anon = function(){};
        anon.prototype = base.prototype;
        derived.prototype = new anon();
        derived.prototype.constructor = derived;
        derived.prototype._super = base;
    },

    ensureArray: function() {
        var results = [],
            len = arguments.length;
        if ( len > 0 ) {
            if ( len > 1 ||      !$.isArray( arguments[ 0 ] ) ) {
                results = $.makeArray( arguments );
            } else {
                results = arguments[ 0 ];
            }
        }
        return results;
    },

    // When similar markup structures, that use the same class names,
    // are nested, it becomes very difficult to find the right set of
    // elements for the outer structures. scopedFind() allows you to search
    // for elements via a selector, within a context element, it then filters
    // the elements in the resulting collection, down to those that have the
    // specified parent, with the specified class name, as their closest ancestor.

    scopedFind: function( contextEle, selector, parentClassName, parent ) {
        // Muse used to provide this same functionality with:
        //
        //             var scopedFind = function($start, selector, scopeSelector, $scope) {
        //                         return $start.find(selector).filter(function() { return $(this).closest(scopeSelector).get(0) == $scope.get(0); })
        //             }
        //
        // It is very compact and easy to read, but unfortunately it is extremely slow. The code
        // below ends up being about 7 times faster by avoiding the use of selectors and minimizing
        // the number of function calls that could occur when trying to scope a selector that
        // ends up matching lots of elements.

        // Use spaces before and after the parentClassName so that we
        // don't accidentally match any other classes that start with the
        // same name.

        var className = ' ' + parentClassName + ' ',

            // results will hold the resulting elements after they've been filtered.

            results = [],

            // Find all the elements within the specified context element that
            // match the selector. Note that this collection may also contain
            // elements for nested structures.

            $matches = $( contextEle ).find( selector ),

            // Cache the length of the collection so we can reduce the number
            // of symbol/js-interpreter lookups during each iteration of the
            // loop below.

            numMatches = $matches.length;

        // Make sure our parent is an element and not a selector or collection.

        parent = $( parent )[ 0 ];

        // Run through all elements in the collection and find those that
        // have the specified parent as their closest ancestor.

        for ( var i = 0; i < numMatches; i++ ) {
            // Cache the current element we're going to work with.

            var m = $matches[ i ],
                p = m;

            // Loop through the parent hierarchy of the current element
            // until we find an element with the classname we were given.

            while ( p ) {
                // Does the element have the specified classname? Note
                // that we are purposely not using $.fn.hasClass() because
                // we want this function to be fast.
    
                if ( p.className && ( ' ' + p.className + ' ' ).indexOf( className ) !== -1 ) {
                    // Do we have an ancestor that matches the parent we
                    // are interested in?

                    if ( p === parent ) {
                        results.push( m );
                    }
                    // We found an ancestor that has the specified class
                    // so we are done traversing up the ancestor hierarchy.

                    break;
                }

                // We haven't found a matching ancestor, so go up
                // another level.

                p = p.parentNode;
            }
        }

        // Return a jQuery collection that contains our results.

        return $( results );
    },

      getAlignmentAdjustment: function ( align, refDim, posDim ) {
            var value = 0;
            switch( align ) {
                  case 'left':
                  case 'top':
                        value = 0;
                        break;
                  case 'right':
                  case 'bottom':
                        value = refDim - posDim;
                        break;
                  case 'center':
                  default:
                        value = ( refDim - posDim ) / 2;
                        break;
            }
            return value;
      },

      // Calculate the position of an element if it were to
      // be positioned around another reference-element.
      // Return the position in terms of the coordinate space
      // of the element's offsetParent.

      positionElementAroundAnother: function( refElement, posElement, options ) {
            
            options = $.extend({
                        // Where to position the posElement relative to the
                        // refElement. Possible values are:
                        //
                        //            'right', 'left', 'above', or 'below'
                        //
                        // The default value is 'right'.

                        position: 'right',

                        // The amount of offset to add to the calculated position
                        // of the posElement. If position is 'right' or 'left'
                        // a positive value moves the posElement away from the
                        // refElement in the horizontal direction. If position is
                        // 'above' or 'below' a positive value moves the refElement
                        // away from the refElement in the vertical direction.
                        //
                        // The default value is zero, which means the posElement
                        // will be touching the refElement.

                        positionOffset: 0,

                        // Decide how to align the side of the refElement that is
                        // closest to the refElement. The allowed value of this
                        // property depends on the value of the position property.
                        // If position is 'right' or 'left', then allowed values
                        // for the align property are 'top', 'bottom' or 'center'.
                        // If position is 'above' or 'below', then allowed values
                        // are 'left', 'right' or 'center'.

                        align: 'center',

                        // The amount of offset to apply to the calculated
                        // alignment. If the align attribute adjusts the
                        // horizontal direction, a positive value shifts
                        // the posElement to the left. If the align attribute
                        // adjusts the vertical direction, a positive value
                        // shifts the posElement down.

                        alignOffset: 0
                  }, options );

            var $ref = $( refElement ), // reference-element
                        $ele = $( posElement ), // the element to position
                        $offsetParent = $ele.offsetParent();

            $ele.removeClass( 'above below left right' );

            var rOffset = $ref.offset(),
                        rWidth = $ref.outerWidth(),
                        rHeight = $ref.outerHeight(),
                        pOffset = $offsetParent.offset(),
                        wWidth = $ele.outerWidth(),
                        wHeight = $ele.outerHeight(),

                        positionOffset = options.positionOffset,
                        align = options.align,
                        alignOffset = options.alignOffset,

                        // Calculate an initial position where the top-left corner of
                        // the posElement is the same as the refElement.

                        x = rOffset.left - pOffset.left,
                        y = rOffset.top - pOffset.top;


            // Calculate the position based on the specified
            // position value.
            
            switch( options.position ) {
                  case 'above':
                        x = x + WebPro.getAlignmentAdjustment( align, rWidth, wWidth ) + alignOffset;
                        y = y - wHeight - positionOffset;
                        break;
                  case 'below':
                        x = x + WebPro.getAlignmentAdjustment( align, rWidth, wWidth ) + alignOffset;
                        y = y + rHeight + positionOffset;
                        break;
                  case 'left':
                        x = x - wWidth - positionOffset;
                        y = y + WebPro.getAlignmentAdjustment( align, rHeight, wHeight ) + alignOffset;
                        break;
                  case 'right':
                  default:
                        x = x + rWidth + positionOffset;
                        y = y + WebPro.getAlignmentAdjustment( align, rHeight, wHeight ) + alignOffset;
                        break;
            }

            return { x: x, y: y };
      },

      // Calculate the coordinates necessary to place an element
      // at the specified x and y values which are relative to
      // the upper-left corner of a reference-element. The coordinates
      // returned are in terms of the coordinate system for the
      // offsetParent of the element.
      //
      // Possible values for x are: <number>|'left'|'center'|'right'
      //
      // Possible values for y are: <number>|'top'|'center'|'bottom'

      positionElementInsideAnother: function( refElement, posElement, x, y ) {
                  var $ref = $( refElement ),
                              $ele = $( posElement ),
                              $offsetParent = $ele.offsetParent(),
                              rOffset = $ref.offset(),
                              pOffset = $offsetParent.offset(),

                              // Calculate the coordinate of the upper-left
                              // corner of the refElement in terms of the
                              // offsetParent's coordinate system.

                              originX = rOffset.left - pOffset.left,
                              originY = rOffset.top - pOffset.top;

                  switch ( x ) {
                        case "left":
                        case "center":
                        case "right":
                              x = originX + WebPro.getAlignmentAdjustment( x, $ref.outerWidth(), $ele.outerWidth() );
                              break;
                        default:
                              x = x || 0;
                  }

                  switch ( y ) {
                        case "top":
                        case "center":
                        case "bottom":
                              y = originY + WebPro.getAlignmentAdjustment( y, $ref.outerHeight(), $ele.outerHeight() );
                              break;
                        default:
                              y = y || 0;
                  }

                  return { x: x, y: y };
      },

      calcTotalWidthOfObjects: function( list ) {
          var total = 0, $item;
          for ( var i in list ) {
              $item = $( list[ i ] );
              total += $item.outerWidth();
          }
          return total;
      }

};


//////////////////// EventDispatcher ////////////////////


// EventDispatcher is a utility class that other classes
// that wish to dispatch events can derive from. We use
// it to hide the actual underlying mechanism used so
// we can swap it out at any time. This version simply uses
// jQuery's event mechanism.

function EventDispatcher()
{
}

$.extend(EventDispatcher.prototype, {
    bind: function( name, callback, data ) {
        return $( this ).bind( name, callback, data );
    },
    
    unbind: function( name, callback ) {
        return $( this ).unbind( name, callback );
    },

    trigger: function( name, data ) {
        // We want to give the caller access to the preventDefault and/or
        // stopPropagation status of the event they just triggered, so we
        // create a custom event, use it to dispatch the notification, then
        // return the event object itself from this method.

        var e = $.Event( name );
        $( this ).trigger( e, data );
        return e;
    }
});

WebPro.EventDispatcher = EventDispatcher;


//////////////////// Expose WebPro to the World      ////////////////////


window.WebPro = WebPro;


})( jQuery, window, document );



/**
* wp-node.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/


// A component class that mimics the DOM Node API for the purposes of
// maintaining object relationships as a tree.

var WebPro = WebPro || {};

(function( WebPro, window ) {

WebPro.Node = function() {
    this.parentNode = null;
    this.firstChild = null;
    this.lastChild = null;
    this.previousSibling = null;
    this.nextSibling = null;
}

var proto = WebPro.Node.prototype;

proto.removeChild = function( child ) {
    if ( child.parentNode === this ) {
        var p = child.previousSibling,
            n = child.nextSibling;

        if ( this.firstChild === child ) {
            this.firstChild = n;
        }

        if ( this.lastChild === child ) {
            this.lastChild = p;
        }

        if ( p ) {
            p.nextSibling = n;
        }

        if ( n ) {
            n.previousSibling = p;
        }

        child.parentNode = child.previousSibling = child.nextSibling = null;
    }

    return child;
};

proto.appendChild = function( child ) {
    if ( child && ( child.parentNode !== this || child !== this.lastChild ) ) {
        var lc = this.lastChild;
        if ( child.parentNode ) {
            child.parentNode.removeChild( child );
        }

        if ( !lc ) {
            this.firstChild = child;
        } else {
            lc.nextSibling = child;
            child.previousSibling = lc;
        }

        this.lastChild = child;
        child.parentNode = this;
    }

    return child;
};

proto.insertBefore = function( child, ref ) {
    if ( child && child !== ref ) {
        if ( child.parentNode ) {
            child.parentNode.removeChild( child );
        }

        if ( !ref ) {
            this.appendChild( child );
        } else {
            if ( this.firstChild === ref ) {
                this.firstChild = child;
            }

            var p = ref.previousSibling;
            child.previousSibling = p;
            child.nextSibling = ref;
            ref.previousSibling = child;
            if ( p ) {
                p.nextSibling = child;
            }
            child.parentNode = this;
        }
    }

    return child;
};

proto.insertAfter = function( child, ref ) {
    return this.insertBefore( child, ( ref && ref.nextSibling ) || null );
};

proto.childNodes = function() {
    var nodes = [], c = this.firstChild;
    while ( c ) {
        nodes.push( c );
        c = c.nextSibling;
    }
    return nodes;
};

})(WebPro, window);



/*
* jQuery Mobile Framework v1.2.0
* http://jquerymobile.com
*
* Copyright 2012 jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
*/

(function ( root, doc, factory ) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define( [ "jquery" ], function ( $ ) {
            factory( $, root, doc );
            return $.mobile;
        });
    } else {
        // Browser globals
        factory( root.jQuery, root, doc );
    }
}( this, document, function ( jQuery, window, document, undefined ) {

// This plugin is an experiment for abstracting away the touch and mouse
// events so that developers don't have to worry about which method of input
// the device their document is loaded on supports.
//
// The idea here is to allow the developer to register listeners for the
// basic mouse events, such as mousedown, mousemove, mouseup, and click,
// and the plugin will take care of registering the correct listeners
// behind the scenes to invoke the listener at the fastest possible time
// for that device, while still retaining the order of event firing in
// the traditional mouse environment, should multiple handlers be registered
// on the same element for different events.
//
// The current version exposes the following virtual events to jQuery bind methods:
// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

(function( $, window, document, undefined ) {

var dataPropertyName = "virtualMouseBindings",
    touchTargetPropertyName = "virtualTouchID",
    virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
    touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
    mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
    mouseEventProps = $.event.props.concat( mouseHookProps ),
    activeDocHandlers = {},
    resetTimerID = 0,
    startX = 0,
    startY = 0,
    didScroll = false,
    clickBlockList = [],
    blockMouseTriggers = false,
    blockTouchTriggers = false,
    eventCaptureSupported = "addEventListener" in document,
    $document = $( document ),
    nextTouchID = 1,
    lastTouchID = 0, threshold;

$.vmouse = {
    moveDistanceThreshold: 10,
    clickDistanceThreshold: 10,
    resetTimerDuration: 1500
};

function getNativeEvent( event ) {

    while ( event && typeof event.originalEvent !== "undefined" ) {
        event = event.originalEvent;
    }
    return event;
}

function createVirtualEvent( event, eventType ) {

    var t = event.type,
        oe, props, ne, prop, ct, touch, i, j, len;

    event = $.Event( event );
    event.type = eventType;

    oe = event.originalEvent;
    props = $.event.props;

    // addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
    // https://github.com/jquery/jquery-mobile/issues/3280
    if ( t.search( /^(mouse|click)/ ) > -1 ) {
        props = mouseEventProps;
    }

    // copy original event properties over to the new event
    // this would happen if we could call $.event.fix instead of $.Event
    // but we don't have a way to force an event to be fixed multiple times
    if ( oe ) {
        for ( i = props.length, prop; i; ) {
            prop = props[ --i ];
            event[ prop ] = oe[ prop ];
        }
    }

    // make sure that if the mouse and click virtual events are generated
    // without a .which one is defined
    if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ) {
        event.which = 1;
    }

    if ( t.search(/^touch/) !== -1 ) {
        ne = getNativeEvent( oe );
        t = ne.touches;
        ct = ne.changedTouches;
        touch = ( t && t.length ) ? t[0] : ( ( ct && ct.length ) ? ct[ 0 ] : undefined );

        if ( touch ) {
            for ( j = 0, len = touchEventProps.length; j < len; j++) {
                prop = touchEventProps[ j ];
                event[ prop ] = touch[ prop ];
            }
        }
    }

    return event;
}

function getVirtualBindingFlags( element ) {

    var flags = {},
        b, k;

    while ( element ) {

        b = $.data( element, dataPropertyName );

        for (      k in b ) {
            if ( b[ k ] ) {
                flags[ k ] = flags.hasVirtualBinding = true;
            }
        }
        element = element.parentNode;
    }
    return flags;
}

function getClosestElementWithVirtualBinding( element, eventType ) {
    var b;
    while ( element ) {

        b = $.data( element, dataPropertyName );

        if ( b && ( !eventType || b[ eventType ] ) ) {
            return element;
        }
        element = element.parentNode;
    }
    return null;
}

function enableTouchBindings() {
    blockTouchTriggers = false;
}

function disableTouchBindings() {
    blockTouchTriggers = true;
}

function enableMouseBindings() {
    lastTouchID = 0;
    clickBlockList.length = 0;
    blockMouseTriggers = false;

    // When mouse bindings are enabled, our
    // touch bindings are disabled.
    disableTouchBindings();
}

function disableMouseBindings() {
    // When mouse bindings are disabled, our
    // touch bindings are enabled.
    enableTouchBindings();
}

function startResetTimer() {
    clearResetTimer();
    resetTimerID = setTimeout( function() {
        resetTimerID = 0;
        enableMouseBindings();
    }, $.vmouse.resetTimerDuration );
}

function clearResetTimer() {
    if ( resetTimerID ) {
        clearTimeout( resetTimerID );
        resetTimerID = 0;
    }
}

function triggerVirtualEvent( eventType, event, flags ) {
    var ve;

    if ( ( flags && flags[ eventType ] ) ||
                ( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

        ve = createVirtualEvent( event, eventType );

        $( event.target).trigger( ve );
    }

    return ve;
}

function mouseEventCallback( event ) {
    var touchID = $.data( event.target, touchTargetPropertyName );

    if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ) {
        var ve = triggerVirtualEvent( "v" + event.type, event );
        if ( ve ) {
            if ( ve.isDefaultPrevented() ) {
                event.preventDefault();
            }
            if ( ve.isPropagationStopped() ) {
                event.stopPropagation();
            }
            if ( ve.isImmediatePropagationStopped() ) {
                event.stopImmediatePropagation();
            }
        }
    }
}

function handleTouchStart( event ) {

    var touches = getNativeEvent( event ).touches,
        target, flags;

    if ( touches && touches.length === 1 ) {

        target = event.target;
        flags = getVirtualBindingFlags( target );

        if ( flags.hasVirtualBinding ) {

            lastTouchID = nextTouchID++;
            $.data( target, touchTargetPropertyName, lastTouchID );

            clearResetTimer();

            disableMouseBindings();
            didScroll = false;

            var t = getNativeEvent( event ).touches[ 0 ];
            startX = t.pageX;
            startY = t.pageY;

            triggerVirtualEvent( "vmouseover", event, flags );
            triggerVirtualEvent( "vmousedown", event, flags );
        }
    }
}

function handleScroll( event ) {
    if ( blockTouchTriggers ) {
        return;
    }

    if ( !didScroll ) {
        triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
    }

    didScroll = true;
    startResetTimer();
}

function handleTouchMove( event ) {
    if ( blockTouchTriggers ) {
        return;
    }

    var t = getNativeEvent( event ).touches[ 0 ],
        didCancel = didScroll,
        moveThreshold = $.vmouse.moveDistanceThreshold,
        flags = getVirtualBindingFlags( event.target );

        didScroll = didScroll ||
            ( Math.abs( t.pageX - startX ) > moveThreshold ||
                Math.abs( t.pageY - startY ) > moveThreshold );


    if ( didScroll && !didCancel ) {
        triggerVirtualEvent( "vmousecancel", event, flags );
    }

    triggerVirtualEvent( "vmousemove", event, flags );
    startResetTimer();
}

function handleTouchEnd( event ) {
    if ( blockTouchTriggers ) {
        return;
    }

    disableTouchBindings();

    var flags = getVirtualBindingFlags( event.target ),
        t;
    triggerVirtualEvent( "vmouseup", event, flags );

    if ( !didScroll ) {
        var ve = triggerVirtualEvent( "vclick", event, flags );
        if ( ve && ve.isDefaultPrevented() ) {
            // The target of the mouse events that follow the touchend
            // event don't necessarily match the target used during the
            // touch. This means we need to rely on coordinates for blocking
            // any click that is generated.
            t = getNativeEvent( event ).changedTouches[ 0 ];
            clickBlockList.push({
                touchID: lastTouchID,
                x: t.clientX,
                y: t.clientY
            });

            // Prevent any mouse events that follow from triggering
            // virtual event notifications.
            blockMouseTriggers = true;
        }
    }
    triggerVirtualEvent( "vmouseout", event, flags);
    didScroll = false;

    startResetTimer();
}

function hasVirtualBindings( ele ) {
    var bindings = $.data( ele, dataPropertyName ),
        k;

    if ( bindings ) {
        for ( k in bindings ) {
            if ( bindings[ k ] ) {
                return true;
            }
        }
    }
    return false;
}

function dummyMouseHandler() {}

function getSpecialEventObject( eventType ) {
    var realType = eventType.substr( 1 );

    return {
        setup: function( data, namespace ) {
            // If this is the first virtual mouse binding for this element,
            // add a bindings object to its data.

            if ( !hasVirtualBindings( this ) ) {
                $.data( this, dataPropertyName, {} );
            }

            // If setup is called, we know it is the first binding for this
            // eventType, so initialize the count for the eventType to zero.
            var bindings = $.data( this, dataPropertyName );
            bindings[ eventType ] = true;

            // If this is the first virtual mouse event for this type,
            // register a global handler on the document.

            activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

            if ( activeDocHandlers[ eventType ] === 1 ) {
                $document.bind( realType, mouseEventCallback );
            }

            // Some browsers, like Opera Mini, won't dispatch mouse/click events
            // for elements unless they actually have handlers registered on them.
            // To get around this, we register dummy handlers on the elements.

            $( this ).bind( realType, dummyMouseHandler );

            // For now, if event capture is not supported, we rely on mouse handlers.
            if ( eventCaptureSupported ) {
                // If this is the first virtual mouse binding for the document,
                // register our touchstart handler on the document.

                activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

                if ( activeDocHandlers[ "touchstart" ] === 1 ) {
                    $document.bind( "touchstart", handleTouchStart )
                        .bind( "touchend", handleTouchEnd )

                        // On touch platforms, touching the screen and then dragging your finger
                        // causes the window content to scroll after some distance threshold is
                        // exceeded. On these platforms, a scroll prevents a click event from being
                        // dispatched, and on some platforms, even the touchend is suppressed. To
                        // mimic the suppression of the click event, we need to watch for a scroll
                        // event. Unfortunately, some platforms like iOS don't dispatch scroll
                        // events until *AFTER* the user lifts their finger (touchend). This means
                        // we need to watch both scroll and touchmove events to figure out whether
                        // or not a scroll happenens before the touchend event is fired.

                        .bind( "touchmove", handleTouchMove )
                        .bind( "scroll", handleScroll );
                }
            }
        },

        teardown: function( data, namespace ) {
            // If this is the last virtual binding for this eventType,
            // remove its global handler from the document.

            --activeDocHandlers[ eventType ];

            if ( !activeDocHandlers[ eventType ] ) {
                $document.unbind( realType, mouseEventCallback );
            }

            if ( eventCaptureSupported ) {
                // If this is the last virtual mouse binding in existence,
                // remove our document touchstart listener.

                --activeDocHandlers[ "touchstart" ];

                if ( !activeDocHandlers[ "touchstart" ] ) {
                    $document.unbind( "touchstart", handleTouchStart )
                        .unbind( "touchmove", handleTouchMove )
                        .unbind( "touchend", handleTouchEnd )
                        .unbind( "scroll", handleScroll );
                }
            }

            var $this = $( this ),
                bindings = $.data( this, dataPropertyName );

            // teardown may be called when an element was
            // removed from the DOM. If this is the case,
            // jQuery core may have already stripped the element
            // of any data bindings so we need to check it before
            // using it.
            if ( bindings ) {
                bindings[ eventType ] = false;
            }

            // Unregister the dummy event handler.

            $this.unbind( realType, dummyMouseHandler );

            // If this is the last virtual mouse binding on the
            // element, remove the binding data from the element.

            if ( !hasVirtualBindings( this ) ) {
                $this.removeData( dataPropertyName );
            }
        }
    };
}

// Expose our custom events to the jQuery bind/unbind mechanism.

for ( var i = 0; i < virtualEventNames.length; i++ ) {
    $.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
}

// Add a capture click handler to block clicks.
// Note that we require event capture support for this so if the device
// doesn't support it, we punt for now and rely solely on mouse events.
if ( eventCaptureSupported ) {
    document.addEventListener( "click", function( e ) {
        var cnt = clickBlockList.length,
            target = e.target,
            x, y, ele, i, o, touchID;

        if ( cnt ) {
            x = e.clientX;
            y = e.clientY;
            threshold = $.vmouse.clickDistanceThreshold;

            // The idea here is to run through the clickBlockList to see if
            // the current click event is in the proximity of one of our
            // vclick events that had preventDefault() called on it. If we find
            // one, then we block the click.
            //
            // Why do we have to rely on proximity?
            //
            // Because the target of the touch event that triggered the vclick
            // can be different from the target of the click event synthesized
            // by the browser. The target of a mouse/click event that is syntehsized
            // from a touch event seems to be implementation specific. For example,
            // some browsers will fire mouse/click events for a link that is near
            // a touch event, even though the target of the touchstart/touchend event
            // says the user touched outside the link. Also, it seems that with most
            // browsers, the target of the mouse/click event is not calculated until the
            // time it is dispatched, so if you replace an element that you touched
            // with another element, the target of the mouse/click will be the new
            // element underneath that point.
            //
            // Aside from proximity, we also check to see if the target and any
            // of its ancestors were the ones that blocked a click. This is necessary
            // because of the strange mouse/click target calculation done in the
            // Android 2.1 browser, where if you click on an element, and there is a
            // mouse/click handler on one of its ancestors, the target will be the
            // innermost child of the touched element, even if that child is no where
            // near the point of touch.

            ele = target;

            while ( ele ) {
                for ( i = 0; i < cnt; i++ ) {
                    o = clickBlockList[ i ];
                    touchID = 0;

                    if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
                                $.data( ele, touchTargetPropertyName ) === o.touchID ) {
                        // XXX: We may want to consider removing matches from the block list
                        //                  instead of waiting for the reset timer to fire.
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                }
                ele = ele.parentNode;
            }
        }
    }, true);
}
})( jQuery, window, document );

}));


/**
* wp-image-loader.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

// Each request is assigned a request id to provide a stable sort.
var nextRequestId = 1;

WebPro.ImageLoader = function( options ) {
    WebPro.EventDispatcher.call();

    var self = this;

    this.options = $.extend( {}, this.defaultOptions, options );
    this._currentEntry = null;
    this._queue = [];
    this._needsSort = false;
    this._isRunning = false;

    this._loader = new Image();
    this._loadFunc = function() { self._handleLoad(); };
    this._loadErrorFunc = function() { self._handleError(); };
    this._timeoutFunc = function() {
            self.trigger( "wp-image-loader-timeout", this._currentEntry );
            self._loadNext();
        };
};

WebPro.inherit( WebPro.ImageLoader, WebPro.EventDispatcher );

$.extend( WebPro.ImageLoader.prototype, {
    defaultOptions: {
            createNewImageOnReset: false,
            timeoutInterval: -1
        },

    add: function( url, options ) {
        if ( url ) {
            // The add() method can actually be called with a single URL or an
            // array of URLs. Normalize things so that we are always dealing with
            // an array.

            urls = WebPro.ensureArray( url );
    
            for ( var i = 0; i < urls.length; i++ ) {
                // Push the request into the queue.

                var entry = $.extend( { reqId: nextRequestId++, src: urls[ i ], width: 0, height: 0, priority: 50, callback: null, data: null }, options );
                this._queue.push( entry );

                // We've added a new request to the queue. We'll need to resort
                // the queue by priority when the next request is fired-off.

                this._needsSort = true;

                // Tell our listeners that a new entry has been added to the queue.

                this.trigger( "wp-image-loader-add", entry );
            }

            // If the loader is running, and we aren't waiting for a request,
            // go ahead and load whatever is on the top of the queue.
 
            if ( this._isRunning && !this._currentEntry ) {
                this._loadNext();
            }
        }
    },
    
    start: function() {
        if ( !this._isRunning ) {
            // Set _isRunning to true so that subsequent calls to start() will
            // be ignored.

            this._isRunning = true;

            // Kick-off a request for the first item in our queue.
 
            this._loadNext();

            // Tell our listeners that the loader was started.

            this.trigger( "wp-image-loader-start" );
        }
    },
    
    stop: function() {
        if ( this._isRunning ) {
            // If we're in the midst of attempting to load something,
            // place it back into the queue.

            if ( this._currentEntry ) {
                this._queue.unshift( this._currentEntry );
            }

            // Reset our loader so that any pending requests are killed.

            this._resetLoader();

            // Set _isRunning to false so that a call to start() will
            // actually allow it to kick-start loading.

            this._isRunning = false;

            // Tell our listeners that the loader was stopped.

            this.trigger( "wp-image-loader-stop" );
        }
    },

    clearQueue: function() {
        // If we're running note it so we can restart
        // loader when we're done.

        var isRunning = this._isRunning;

        // Stop any pending requests.

        this.stop();

        // Clear the queue by truncating it with a zero length.

        this._queue.length = 0;

        // If the loader was running, restart it so that it
        // is ready to service any new requests immediately.

        if ( isRunning ) {
            this.start();
        }
    },

    _loadNext: function() {
        // Before we attempt to load the next request in the queue,
        // reset our image loader object so that when we set its src
        // property, a request is actually made.

        this._resetLoader();

        var q = this._queue;

        if ( q.length ) {
            // If the queue needs sorting, sort it now.

            if ( this._needsSort ) {
                q = this._queue = q.sort(function( a, b ) {
                    // Sort by priority. If the priorities
                    // are the same, sort by the request-id.

                    var result = a.priority - b.priority;
                    return result ? result : a.reqId - b.reqId;
                });

                this._needsSort = false;
            }

            // Grab the next request from the queue.

            var entry = q.shift();
            this._currentEntry = entry;

            // Fire-off the load timeout timer.

            if ( this.options.timeoutInterval ) {
                this.timeoutTimerId = setTimeout( this._timeoutFunc, this.options.timeoutInterval );
            }

            // Fire-off the request.

            var loader = this._loader;
            loader.onload = this._loadFunc;
            loader.onerror = this._loadErrorFunc;
            loader.src = entry.src;
        }
    },

    _resetLoader: function() {
        // We re-use the same image object to load all images.
        // Some image implementations will only trigger a load
        // if you set the src property to something that is
        // different than what its current value is. For this
        // reason, we need to clear the src attribute between
        // requests, just in case the user attempts to reload
        // the same URL in the case of a "retry" when the initial
        // request failed. Before clearing the src property,
        // we set the load and error properties to NULL because
        // some implementations, like Safari, will attempt to load
        // the current document if you set the src to null or an
        // empty string. Un-hooking the load and error handlers
        // prevents us from entering a circular pattern of continuous
        // attempts to load the document, triggering the error handler,
        // which then in turn clears the src, triggering the cycle to
        // start over.

        var loader = this._loader;
        loader.onload = null;
        loader.onerror = null;
        loader.src = null;

        // If the same image object is used to load different URLs,
        // IE9 eventually starts reporting bogus image width/height
        // dimensions. For this reason, we provide an option where
        // the caller can specify that they want a new image object
        // to be used for each request.

        if ( this.options.createNewImageOnReset ) {
            this._loader = new Image();
        }

        // Clear the current entry.

        this._currentEntry = null;

        // Kill any load timeout timer that may be pending.

        if ( this._timeoutTimerId ) {
            clearTimeout( this._timeoutTimerId );
            this._timeoutTimerId = 0;
        }
    },

    _handleLoad: function() {
        var loader = this._loader,
            entry = this._currentEntry;

        // Clear the _currentEntry property here. We don't
        // want a call to stop(), from any callbacks, to
        // re-queue this request.

        this._currentEntry = null;

        // Set the width and height properties for the entry so that
        // listeners can access them when we fire off the success notification.

        entry.width = loader.width;
        entry.height = loader.height;

        // Fire-off any callback associated with this entry.

        if ( entry.callback ) {
            entry.callback( entry.src, entry.width, entry.height, entry.data );
        }

        // Tell listeners that this entry has loaded successfully.

        this.trigger( "wp-image-loader-load-success", entry );

        // Attempt to load the next request in the queue.

        this._loadNext();
    },

    _handleError: function() {
        // Tell listeners the current entry failed to load.

        this.trigger( "wp-image-loader-load-error", this._currentEntry );

        // Attempt to load the next request in the queue.

        this._loadNext();
    }
});

})( jQuery, WebPro, window, document );



/**
* wp-selection.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

var WebPro = WebPro || {};

(function( $, WebPro, window ) {

function SelectionManager( options )
{
    this.selectedItems = [];
    this.options = $.extend( {}, SelectionManager.options, options );
}

SelectionManager.options = {
    multiSelect: false,
    selectTogglesState: false
};

$.extend( SelectionManager.prototype, {
    clear: function() {
        var prev = this.selectedItems;
        $( this ).trigger( "selectionbeforeclear", { current: prev, delta: prev } );
        this.selectedItems = [];
        $( this ).trigger( "selectionclear", { prev: prev, current: [], delta: prev } );
    },

    select: function( items ) {
        items = this._ensureArray( items );
        var prev = this.selectedItems,
            data = { current: prev, delta: items };

        $( this ).trigger( "selectionbeforeset", data );

        this.selectedItems = data.delta.slice(0);

        $( this ).trigger( "selectionset", { prev: prev, current: data.delta, delta: data.delta } );
},

    add: function( items ) {
        items = this._ensureArray( items );
        var len = items.length,
            prev = this.selectedItems.slice( 0 ),
            data = { current: prev, delta: items },
            index, i;

        $( this ).trigger( "selectionbeforeadd", data );

        items = data.delta || [];

        for ( i = 0; i < len; i++ ) {
            index = this.getItemIndex( items[ i ] );
            if ( index < 0 ) {
                this.selectedItems.push( items[ i ] );
            }
        }

        $( this ).trigger( "selectionadd", { prev: prev, current: this.selectedItems.slice( 0 ), delta: items } );
    },

    remove: function( items ) {
        items = this._ensureArray( items );

        var len = items.length,
            prev = this.selectedItems.slice( 0 ),
            data = { current: prev, delta: items },
            index, i;

        $( this ).trigger( "selectionbeforeremove", data );

        items = data.delta;

        for ( i = 0; i < len; i++ ) {
            index = this.getItemIndex( items[ i ] );
            if ( index >= 0 ) {
                this.selectedItems.splice(index, 1);
            }
        }
        $( this ).trigger( "selectionremove", { prev: prev, current: this.selectedItems.slice( 0 ), delta: items } );
    },
    
    getSelection: function() {
        return this.selectedItems.slice(0);
    },

    getItemIndex: function( item ) {
        var items = this.selectedItems,
            len = items.length,
            i;
        
        for ( i = 0; i < len; i++ ) {
            if ( item === items[ i ] ) {
                return i;
            }
        }

        return -1;
    },

    itemIsSelected: function( item ) {
        return this.getItemIndex( item ) !== -1;
    },

    selectionExists: function() {
        return this.selectedItems.length > 0;
    },

    _ensureArray: function( item ) {
        // Normalize item so that it is an array. Note that this
        // method also takes into account the multiSelect option.
        // If multiSelect is true, this method only returns an
        // array with a single item in it.

        return $.isArray( item ) ? ( this.options.multiSelect ? item : [ item[ 0 ] ] ) : [ item ];
    }
});

// Expose module public functions/objects.

window.WebPro = WebPro;
window.WebPro.SelectionManager = SelectionManager;

})( jQuery, WebPro, window);



/**
* wp-selection-outline.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

var WebPro = WebPro || {};

( function( $, WebPro, window ) {

WebPro.SelectionOutline = function( element ) {
    this.element = element;
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.borderWidth = 1;
    this.handleWidth = 5 + ( 2 * this.borderWidth );

    this.outline = document.createElement( "div" );
    this.outline.className = "selection-outline";
    //this.outline.innerHTML = '<div class="selection-top"><div class="selection-handle-top-left"></div><div class="selection-handle-top"></div><div class="selection-handle-top-right"></div></div><div class="selection-right"><div class="selection-handle-right"></div></div><div class="selection-bottom"><div class="selection-handle-bottom-left"></div><div class="selection-handle-bottom"></div><div class="selection-handle-bottom-right"></div></div><div class="selection-left"><div class="selection-handle-left"></div></div>';

    // Create the borders.

    this.topBorder = createBorder( "top" );
    this.rightBorder = createBorder( "right" );
    this.bottomBorder = createBorder( "bottom" );
    this.leftBorder = createBorder( "left" );

    // Create the handles.

    this.topLeftHandle = createHandle( "top-left" );
    this.topHandle = createHandle( "top" );
    this.topRightHandle = createHandle( "top-right" );
    this.rightHandle = createHandle( "right" );
    this.bottomLeftHandle = createHandle( "bottom-left" );
    this.bottomHandle = createHandle( "bottom" );
    this.bottomRightHandle = createHandle( "bottom-right" );
    this.leftHandle = createHandle( "left" );

    // Add the handles to the top border.

    var ele = this.topBorder;
    ele.appendChild( this.topLeftHandle );
    ele.appendChild( this.topHandle );
    ele.appendChild( this.topRightHandle );

    // Add the handles to the bottom border.

    var ele = this.bottomBorder;
    ele.appendChild( this.bottomLeftHandle );
    ele.appendChild( this.bottomHandle );
    ele.appendChild( this.bottomRightHandle );

    // Add handles to the side borders.

    this.leftBorder.appendChild( this.leftHandle );
    this.rightBorder.appendChild( this.rightHandle );

    // Add all the borders to the outline outline.

    this.outline.appendChild( this.topBorder );
    this.outline.appendChild( this.rightBorder );
    this.outline.appendChild( this.bottomBorder );
    this.outline.appendChild( this.leftBorder );

    if ( this.element ) {
        this.update();
    }
};

var proto = WebPro.SelectionOutline.prototype;

proto.show = function() {
    document.body.appendChild( this.outline );
};

proto.hide = function() {
    document.body.removeChild( this.outline );
};

proto.attach = function( ele ) {
    this.element = ele;
    this.update();
};

proto.detach = function( ele ) {
    this.element = null;
    this.hide;
};

proto.update = function() {
    var ele = $( this.element ),
        offset = ele.offset();

    this.setPosition( offset.left, offset.top, ele.outerWidth(), ele.outerHeight() );
};

proto.setPosition = function( x, y, w, h ) {
    var bw = this.borderWidth,
        wx = this.borderWidth * 2,
        hndlw = this.handleWidth / 2 ,
        hw = ( ( w + wx ) / 2 ) - hndlw,
        hh = ( ( h + wx ) / 2 ) - hndlw;

    this.left = x;
    this.top = y;
    this.width = w;
    this.height = h;

    // Set the dimensions of the outline.

    this.topBorder.style.width = this.bottomBorder.style.width = w + wx + "px";
    this.leftBorder.style.height = this.rightBorder.style.height = h + wx + "px";

    // Set the position of the outline.

    this.outline.style.top = y - bw + "px";
    this.outline.style.left = x - bw + "px";
    this.bottomBorder.style.top = h + bw + "px";
    this.rightBorder.style.left = w + bw + "px";

    // Fix up the midpoint handles.

    this.topHandle.style.left = this.bottomHandle.style.left = hw + "px";
    this.leftHandle.style.top = this.rightHandle.style.top = hh + "px";
    
}

function createBorder( borderName ) {
    var div = document.createElement( "div" );
    div.className = "selection-" + borderName;
    return div;
}

function createHandle( handleName ) {
    var div = document.createElement( "div" );
    div.className = "selection-handle-" + handleName;
    return div;
}

})( jQuery, WebPro, window);



/**
* wp-drag-tracker.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

// A component class that handles the DOM events necessary to simulate someone dragging
// an element on screen. Developers can either derive from this class and define the following
// methods:
//
//            DerivedClass.prototype.dragStart      = function( dx, dy ) { ... };
//            DerivedClass.prototype.dragUpdate = function( dx, dy ) { ... };
//            DerivedClass.prototype.dragStop       = function( dx, dy ) { ... };
//
// Or, they can simply create an instance of this class and pass in some callback handlers:
//
//        var dt = new DragTracker( someElement, {
//                dragStart:      function( tracker, dx, dy ) { ... },
//                dragUpdate: function( tracker, dx, dy ) { ... },
//                dragStop:       function( tracker, dx, dy ) { ... },
//            });
//
// It should be noted that this class does *NOT* move anything on screen. It merely tracks
// when the mouse goes down on a specific element, and then it dispatches the x/y position
// of the mouse, as it moves, relative to the point at which the mouse was clicked. This
// class was meant to encapsulate the event code that every developer writes/re-writes
// whenever they implement drag & drop, or selection marquee/outline/movement.

var WebPro = WebPro || {};

(function( $, WebPro, window ) {


WebPro.DragTracker = function( element, options ) {
    var self = this;

    this.element = element;

    this.options = $.extend( {}, WebPro.DragTracker.prototype.defaultOptions, options );
    this.dragStarted = false;
    this.enabled = true;

    this.mdFunc = function( e, data ) { return self._startDrag( e, data); };
    this.mmFunc = function( e, data ) { return self._handleDrag( e, data); };
    this.muFunc = function( e, data ) { return self._stopDrag( e, data); };

    this.startX = 0;
    this.startY = 0;

    $( element ).bind( this.options.startEvent, this.mdFunc );
};

$.extend( WebPro.DragTracker.prototype, {
    defaultOptions: {
        dragThreshold: 5,         // Must exceed this many pixels in any direction to start drag.
        ignoreX: false,           // If true don't report any changes in the x-direction.
        ignoreY: false,           // If true don't report any changes in the y-direction.
        dragStart: null,          // callback
        dragUpdate: null,         // callback
        dragStop: null,           // callback
        startEvent: "mousedown",  // Event that triggers the installation of drag handlers.
        updateEvent: "mousemove", // Event that triggers drag update events.
        stopEvent: "mouseup",     // Event that triggers the end of a drag.
        eventXProp: "pageX",      // The name of the event's x property value to use.
        eventYProp: "pageY"       // The name of the event's y property value to use.
    },

    enable: function() {
        this.enabled = true;
    },

    disable: function() {
        this.enabled = false;
        this._removeDragHandlers();
    },

    dragStart: function( dx, dy ) {
        // Base class implementation simply calls
        // any callback defined.

        var o = this.options;
        if ( o.dragStart ) {
            o.dragStart( this, dx, dy );
        }
    },

    dragUpdate: function( dx, dy ) {
        // Base class implementation simply calls
        // any callback defined.

        var o = this.options;
        if ( o.dragUpdate ) {
            o.dragUpdate( this, dx, dy );
        }
    },

    dragStop: function( dx, dy ) {
        // Base class implementation simply calls
        // any callback defined.

        var o = this.options;
        if ( o.dragStop ) {
            o.dragStop( this, dx, dy );
        }
    },

    _installDragHandlers: function() {
        var opts = this.options;
        $( document )
            .bind( opts.updateEvent, this.mmFunc )
            .bind( opts.stopEvent, this.muFunc );
    },

    _removeDragHandlers: function() {
        var opts = this.options;
        $( document )
            .unbind( opts.updateEvent, this.mmFunc )
            .unbind( opts.stopeEvent, this.muFunc );
    },

    _getPageOffset: function( ele ) {
        return $( ele ).offset();
    },

    _startDrag: function( e, data ) {
        if ( !this.enabled ) {
            return;
        }

        this.dragStarted = false;
        this.startX = e[ this.options.eventXProp ];
        this.startY = e[ this.options.eventYProp ];

        this._installDragHandlers();

        return false;
    },

    _handleDrag: function( e, data ) {
        var dx = e[ this.options.eventXProp ] - this.startX,
            dy = e[ this.options.eventYProp ] - this.startY,
            o = this.options;

        if ( !this.dragStarted ) {
            if ( ( !o.ignoreX && Math.abs( dx ) < o.dragThreshold ) && ( !o.ignoreY && Math.abs( dy ) < o.dragThreshold ) ) {
                return false;
            }

            this.dragStarted = true;

            this.dragStart( 0, 0 );
        }

        this.dragUpdate( o.ignoreX ? 0 : dx, o.ignoreY ? 0 : dy );

        return false;
    },

    _stopDrag: function( e, data ) {
        this._removeDragHandlers();

        if ( this.dragStarted ) {
            var dx = e[ this.options.eventXProp ] - this.startX,
                dy = e[ this.options.eventYProp ] - this.startY,
                o = this.options;

            this.dragStop( o.ignoreX ? 0 : dx, o.ignoreY ? 0 : dy );
        }

        this.dragStarted = false;

        return false;
    }
});


})( jQuery, WebPro, window );


/**
* wp-swipe-tracker.js - version 0.1 - WebPro Release 0.1
*
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window ) {

    WebPro.SwipeTracker = function( element, options ) {
        options = $.extend( {}, WebPro.DragTracker.prototype.defaultOptions, WebPro.SwipeTracker.prototype.defaultOptions, options );
        WebPro.DragTracker.call( this, $( element ), options );
        this.$element = $( options.swipeElement || 'body' );
        this.events = options.swipeEvents;
        this.globalSwipeEvent = this.options.globalSwipeEvent;
    };

    WebPro.inherit( WebPro.SwipeTracker, WebPro.DragTracker );

    $.extend(WebPro.SwipeTracker.prototype, {
        defaultOptions: {
            swipeElement: null,
            swipeEvents: null,
            angleThreshold: 10,
            displayTracker: false,
            globalSwipeEvent: 'wp-swipe',
            startEvent: 'vmousedown',
            updateEvent: 'vmousemove',
            stopEvent: 'vmouseup'
        },
        dragStart: function( dx, dy ) {
            if ( this.options.displayTracker ) {
                this.$tracker = $( '<div style="background-color: cyan;border-radius: 20px; width: 40px; height: 40px; position: absolute;box-shadow: 0 0 5px 5px cyan"></div>' );
                $( 'body' ).append( this.$tracker );
                this.$tracker.css({
                    left: this.startX - 20,
                    top: this.startY - 20
                });
            }
        },
        dragUpdate: function( dx, dy ) {
            if ( this.options.displayTracker ) {
                this.$tracker.css({
                    left: this.startX + dx - 20,
                    top: this.startY + dy - 20
                });
            }
        },
        dragStop: function( dx, dy ) {
            if ( this.options.displayTracker ) {
                this.$tracker.remove();
            }
            $( 'body' ).trigger( this.globalSwipeEvent );
            var startX = this.startX,
                startY = this.startY,
                totalWidth = this.$element.width(),
                totalHeight = this.$element.height(),
                angle = Math.abs( Math.atan2( -dy, dx ) * ( 180 / Math.PI ) ),
                angleThreshold = this.options.angleThreshold,
                yThreshold, xThreshold, top, left, bottom, right,
                event, x, y, width, height;

            for ( event in this.events ) {
                params = this.events[ event ];
                x = params.halign;
                y = params.valign;
                width = params.width || totalWidth;
                height = params.height || totalHeight;
                xThreshold = params.xThreshold;
                yThreshold = params.yThreshold;

                switch ( x ) {
                    case "left":
                    case "center":
                    case "right":
                        x = WebPro.getAlignmentAdjustment( x, totalWidth, width );
                        break;
                    default:
                        x = x || 0;
                        break;
                }

                switch ( y ) {
                    case "top":
                    case "center":
                    case "bottom":
                        y = WebPro.getAlignmentAdjustment( y, totalHeight, height );
                        break;
                    default:
                        y = y || 0;
                        break;
                }
                left = x;
                top = y;
                right = left + ( width || totalWidth );
                bottom = top + ( height || totalHeight );
                correctDirection = xThreshold && ( xThreshold < 0 && dx < xThreshold && angle > ( 180 - angleThreshold ) || xThreshold > 0 && dx > xThreshold && angle < angleThreshold ) ||
                    yThreshold && angle < ( 90 + angleThreshold ) && angle > ( 80 - angleThreshold ) && ( yThreshold < 0 && dy < yThreshold || yThreshold > 0 && dy > yThreshold );
                insideRegion = startX < right && startX > left && startY > top && startY < bottom;
                if ( insideRegion && correctDirection ) {
                    $( 'body' ).trigger( event );
                }
            }
        }
    });

})( jQuery, WebPro, window );


/**
* wp-widgets.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){


//////////////////// Widget ////////////////////


function Widget()
{
    WebPro.EventDispatcher.call( this );

    this._initialize.apply( this, arguments );
}

WebPro.inherit( Widget, WebPro.EventDispatcher );

$.extend(Widget.prototype, {

    defaultOptions: { },

    _widgetName: "Widget",

    _initialize: function() {
        var options;
    
        this.plugins = [];
    
        // PHASE 1 - Setup
        //
        // Execute any widget code that must run prior to plugins
        // initializing. Note that widget constructors are allowed
        // to take any number of arguments. The setUp() method is
        // the only means that any derived class has of accessing
        // the arguments passed into the constructor. Also note that
        // there is no required argument ordering enforced so it is
        // up to the _setUp() method to return any options object that
        // may have been passed into the constructor. This is an important
        // detail that derived classes with a _setUp() override
        // must implement. Failing to return an options object specified
        // at construction time will result in the defaultOptions
        // being used.
    
        var e = this.trigger( "before-setup" );
        if ( ! e.isDefaultPrevented() ) {
            options = this._setUp.apply( this, arguments );
            this.trigger( "setup" )
        }
    
        // PHASE 2 - Plugin Initialization
        //
        // First thing we do is call initializePlugins. We pass it
        // the options object we were given so that it can add or
        // remove options prior to the widget initializing itself.
    
        var e = this.trigger( "before-init-plugins" );
        if ( ! e.isDefaultPrevented() ) {
            this._initializePlugins( options );
            this.trigger( "init-plugins" )
        }
    
        // Save a copy of the options we were given. We start
        // with the default set of options specified within
        // the prototype, and then add in the options passed in
        // by the caller.
    
        this.options = $.extend( {}, this.defaultOptions, options );
    
        // PHASE 3 - Data Extraction
        //
        // Allow the widget to extract data from it's sources. This
        // includes any markup the widget might be attached to.
    
        e = this.trigger( "before-extract-data" );
        if ( ! e.isDefaultPrevented() ) {
            this._extractData();
            this.trigger( "extract-data" )
        }
    
        // PHASE 4 - Transform Markup
        //
        // Allow the widget to modify any associated markup.
        
        e = this.trigger( "before-transform-markup" );
        if ( ! e.isDefaultPrevented() ) {
            this._transformMarkup();
            this.trigger( "transform-markup" )
        }
    
        // PHASE 5 - Attach Behavior
        //
        // Attach any event handlers, etc on the newly transformed
        // widget markup.
    
        e = this.trigger( "before-attach-behavior" );
        if ( ! e.isDefaultPrevented() ) {
            this._attachBehavior();
            this.trigger( "attach-behavior" )
        }
    
        // PHASE 6 - Ready
        //
        // Allow the widget to execute any other initialization code
        // after the markup is transformed and behavior is attached.
    
        e = this.trigger( "before-ready" );
        if ( ! e.isDefaultPrevented() ) {
            this._ready();
            this.trigger( "ready" )
        }
    },

    _setUp: function( element, options ) {
        this.$element = $( element );
        return options;
    },

    _initializePlugins: function( opts ) {
        opts = opts || {};

        // Widgets can have a defaultPlugins property specified on their
        // prototypes. The user can prevent these plugins from running
        // for a specific widget instance, by passing a useDefaultPlugins:false
        // option property into the widget constructor.

        var useDefaults = typeof opts.useDefaultPlugins === "undefined" ? true : opts.useDefaultPlugins,
            defaultPlugins = ( useDefaults && this.defaultPlugins ) ? this.defaultPlugins : [],
            plugins = defaultPlugins.concat( opts.plugins || [] );

        // We sort the merged list of default and option specified plugins
        // based on priority (ascending order). Plugins with a lower-number
        // for priority execute first. If no priority is specified they are
        // given a default of 50.

        plugins = plugins.sort( function( a, b ) {
            a = typeof a.priority === "number" ? a.priority : 50;
            b = typeof b.priority === "number" ? b.priority : 50;
            return a - b;
        });

        // Now that we have a list of plugins sorted by priority,
        // execute them in the order they appear in the plugins array.

        for ( var i = 0; i < plugins.length; i++ ) {
            var p = plugins[ i ];
            if ( p && p.initialize ) {
                p.initialize( this, opts );
            }
        }

        this.plugins = plugins;
    },
    
    _extractData: function() {
        // Base class no-op.
    },

    _transformMarkup: function() {
        // Base class no-op.
    },

    _attachBehavior: function () {
        // Base class no-op.
    },

    _ready: function() {
        // Base class no-op.
    }
});

// Expose our Widget base class.

WebPro.Widget = Widget;


//////////////////// Widget Constructor Factory ////////////////////


// Expose our Widget constructor factory. We want all WebPro widgets to
// declare themselves using this factory so that they all follow the same
// Widget construction phases. This gives plugin authors a predictable
// initialization sequence they can hook into to extend functionality.

WebPro.widget = function( name, base, prototype ) {
    // The base and prototype args are optional, so make sure
    // we use default values when appropriate.

    var baseClass = ( prototype && base ) || WebPro.Widget,
        methods = prototype || base || {},

        // Declare the constructor for the widget. All widgets invoke the
        // base class constructor. Widgets muse make use of the Widget's
        // phase methods for initializing themselves.

        constructor = function() {
            baseClass.apply( this, arguments );

            this._widgetName = name;
        };

    // Simulate inheritance by setting up the class prototype chain.

    WebPro.inherit( constructor, baseClass );

    // Copy all of the methods for this widget on to its prototype object.

    $.extend( constructor.prototype, methods );

    // At this point the options object in the constructor's prototype
    // is either undefined, or pointing to one that is specified in the
    // methods dictionary. We need to create a new options object that is
    // a merged version of the options from the base class, and the one
    // that was specified in the methods dictionary.

    constructor.prototype.defaultOptions = $.extend( {}, baseClass.prototype.defaultOptions, methods.defaultOptions );

    // Now add it to our WebPro namespace.

    var nsArray = name.split( "." ),
        len = nsArray.length;
        namespace = ( len > 1 && nsArray[ 0 ] ) || "Widget",
        name = nsArray[ len - 1 ];

    WebPro[ namespace ][ name ] = constructor;
};

})( jQuery, WebPro, window, document );



/**
* wp-button.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.Button", WebPro.Widget, {
    defaultOptions: {
        hoverClass: "wp-button-hover",
        activeClass: "wp-button-down",
        disabledClass: "wp-button-disabled",
        disabled: false,
        callback: null,
        overEvent: 'mouseover',
        downEvent: 'mousedown',
        upEvent: 'mouseup',
        outEvent: 'mouseout',
        clickEvent: 'click'
    },

    _attachBehavior: function() {
        var self = this,
            options = this.options,
            muFunc = function( e ){
                    self.mouseDown = false;
                    self.$element.removeClass( self.options.activeClass );
                    $( document ).off( options.upEvent, muFunc );
                };

        this.mouseDown = false;

        this.$element
            .on( options.overEvent, function( e ){
                    if ( !self.options.disabled ) {
                        self.$element.addClass( self.options.hoverClass + ( self.mouseDown ? " " + self.options.activeClass : "" ) );
                    }
                })
            .on( options.outEvent, function( e ){
                    self.$element.removeClass( self.options.hoverClass + " " + self.options.activeClass );
                })
            .on( options.downEvent, function( e ){
                    if ( !self.options.disabled ) {
                        self.mouseDown = true;
                        self.$element.addClass( self.options.activeClass );
                        $( document ).on( options.upEvent, muFunc );
                    }
                })
            .on( options.clickEvent, function( e ) {
                    if ( !self.options.disabled && self.options.callback ) {
                        self.options.callback.call( this, e );
                    }

                    e.preventDefault();
                });

            this.disabled( this.options.disabled );
    },


    disabled: function( val ) {
        if ( typeof val === "boolean" ) {
            this.options.disabled = val;
            this.$element[ val ? "addClass" : "removeClass" ]( this.options.disabledClass );
        }

        return this.options.disabled;
    }
});


// Add a convenience method to the jQuery Collection prototype,
// that applies our Button behavior to all the elements in the collection.

$.fn.wpButton = function( options ) {
    this.each( function() {
        var b = new WebPro.Widget.Button( this, options );
        // XXX: We need to associate the Button instance object with
        //                  the element.
    });

    return this;
};

})( jQuery, WebPro, window, document );



/**
* wp-radio-group.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

// The RadioGroup widget is a class that manages the "checked" state for
// a group of buttons. The intent is to encapsulate this behavior in
// a re-useable class so that it can be used as the basis for other
// UI patterns, for example a Tab Group for tabbed panels or accordions.

WebPro.widget( "Widget.RadioGroup", WebPro.Widget, {
    _widgetName: "radio-group",

    defaultOptions: {
        defaultIndex: 0,
        hoverClass: "wp-radio-hover",
        downClass: "wp-radio-down",
        disabledClass: "wp-radio-disabled",
        checkedClass: "wp-radio-checked",
        disabled: false,
        toggleStateEnabled: false,
        overEvent: 'mouseover',
        downEvent: 'mousedown',
        upEvent: 'mouseup',
        outEvent: 'mouseout',
        clickEvent: 'click'
    },

    _attachBehavior: function() {
        var self = this;

        this.buttons = [];
        this.activeElement = null;
        this.activeIndex = -1;

        // The $element property for our radio-group is actually a collection of all the
        // elements that are part of the radio-group.

        this.$element.each(function() {
            self.buttons.push( self._addButtonBehavior( this ) );
        });

        // Set up the disabled state across all buttons that are part of
        // the radio-group.

        this.disabled( this.options.disabled );

        // If a defaultIndex is specified, check the
        // corresponding button.

        var defaultIndex = this.options.defaultIndex;
        if ( typeof defaultIndex === "number" && defaultIndex >= 0 ) {
            this.checkButton( defaultIndex );
        }
    },

    _addButtonBehavior: function( ele ) {
        var self = this,
            options = this.options,
            btn = new WebPro.Widget.Button( ele, {
                hoverClass: options.hoverClass,
                downClass: options.downClass,
                disabledClass: options.disabledClass,
                callback: function( e ) {
                    return self._handleClick( e, btn, ele );
                },
                overEvent: options.overEvent,
                downEvent: options.downEvent,
                upEvent: options.upEvent,
                outEvent: options.outEvent,
                clickEvent: options.clickEvent
            });

        return btn;
    },

    _handleClick: function( e, btn, ele ) {
        if ( !this.options.disabled ) {
            this.checkButton( ele );
        }
    },

    _getElementIndex: function( ele ) {
        return ele ? $.inArray( ele, this.$element.get() ) : -1;
    },

    _getElementByIndex: function( index ) {
        return this.$element.eq( index )[ 0 ];
    },
    
    _getElement: function( indexOrEle ) {
        return ( typeof indexOrEle === "number" ) ? this._getElementByIndex( indexOrEle ) : indexOrEle;
    },

    checkButton: function( indexOrEle ) {
        var ele = this._getElement( indexOrEle ),
            activeEle = this.activeElement,
            checkedClass = this.options.checkedClass;
        if ( ele ) {
            if ( ele !== activeEle ) {
                if ( activeEle ) {
                    $( activeEle ).removeClass( checkedClass );
                }
                $( ele ).addClass( checkedClass );
            } else if ( this.options.toggleStateEnabled ) {
                $( ele ).removeClass( checkedClass );
                ele = null;
            }

            this.activeElement = ele;
            this.activeIndex = this._getElementIndex( ele );
        }
    },

    disabled: function( val ) {
        if ( typeof val === "boolean" ) {
            this.options.disabled = val;
            $.each( this.buttons, function() {
                this.disabled( val );
            });
        }

        return this.options.disabled;
    }
});


// Add a convenience method to the jQuery Collection prototype,
// that applies our RadioGroup behavior to all the elements in the collection.

$.fn.wpRadioGroup = function( options ) {
    var rg = new WebPro.Widget.RadioGroup( this, options );
    return this;
};

})( jQuery, WebPro, window, document );



/**
* wp-tab-group.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.TabGroup", WebPro.Widget.RadioGroup, {
    defaultOptions: {
        defaultIndex: 0,
        hoverClass: "wp-tab-hover",
        downClass: "wp-tab-down",
        disabledClass: "wp-tab-disabled",
        checkedClass: "wp-tab-active",
        disabled: false,
        toggleStateEnabled: false
    },

    selectTab: function( indexOrElement ) {
        this.checkButton( indexOrElement );
    },

    checkButton: function( indexOrElement ) {
        var ele = this._getElement( indexOrElement ),
            eleIndex = this._getElementIndex( ele ),
            data = { tab: ele, tabIndex: eleIndex };

        this.trigger( "wp-tab-before-select", data );

        WebPro.Widget.TabGroup.prototype._super.prototype.checkButton.apply( this, arguments );

        this.trigger( "wp-tab-select", data );
    }
});


// Add a convenience method to the jQuery Collection prototype,
// that applies our RadioGroup behavior to all the elements in the collection.

$.fn.wpTabGroup = function( options ) {
    var rg = new WebPro.Widget.TabGroup( this, options );
    return this;
};

})( jQuery, WebPro, window, document );



/**
* wp-panel-group.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.PanelGroup", WebPro.Widget, {
    _widgetName: "panel-group",

    defaultOptions: {
        defaultIndex: 0,
        panelClass: "wp-panel",
        activeClass: "wp-panel-active",
        toggleStateEnabled: false,
        tabGroups: null
    },

    _setUp: function() {
        var self = this;

        this.tabGroups = [];
        this._tabCallback = function( e, data) {
            self._handleTabSelect( e, data );
        };

        this.showLock = 0;
        this.tabDriver = null;

        return WebPro.Widget.PanelGroup.prototype._super.prototype._setUp.apply( this, arguments );
    },

    _attachBehavior: function() {
        var self = this;

        this.activeElement = null;
        this.activeIndex = -1;

        this.$element.addClass( this.options.panelClass );

        // If a defaultIndex is specified, check the
        // corresponding button.

        var defaultIndex = this.options.defaultIndex;
        if ( typeof defaultIndex === "number" && defaultIndex >= 0 ) {
            this.showPanel( defaultIndex );
        }

        this.addTabGroup( this.options.tabGroups );
    },

    _getElementIndex: function( ele ) {
        return ele ? $.inArray( ele, this.$element.get() ) : -1;
    },

    _getElementByIndex: function( index ) {
        return this.$element.eq( index )[ 0 ];
    },
    
    _getElement: function( indexOrEle ) {
        return ( typeof indexOrEle === "number" ) ? this._getElementByIndex( indexOrEle ) : indexOrEle;
    },

    showPanel: function( indexOrEle ) {
        if ( !this.showLock ) {
            ++this.showLock;

            var ele = this._getElement( indexOrEle ),
                activeEle = this.activeElement,
                activeClass = this.options.activeClass;
            if ( ele ) {
                if ( ele !== activeEle ) {
                    var data = { panel: ele, panelIndex: this._getElementIndex( ele ) };

                    this.trigger( "wp-panel-before-show", data );

                    if ( activeEle ) {
                        this.hidePanel( activeEle );
                    }
                    $( ele ).addClass( activeClass );
                    this.activeElement = ele;
                    this.activeIndex = this._getElementIndex( ele );
    
                    var groups = this.tabGroups;
                    for ( var i = 0; i < groups.length; i++ ) {
                        var tg = groups[ i ];
                        if ( tg !== this.tabDriver ) {
                            tg.selectTab( this.activeIndex );
                        }
                    }

                    this.trigger( "wp-panel-show", data );
                } else if ( this.options.toggleStateEnabled ) {
                    this.hidePanel( ele );
                }
            }

            --this.showLock;
        }
    },

    hidePanel: function( indexOrEle ) {
        var ele = ( typeof indexOrEle === "number" ) ? this.$element.eq( indexOrEle )[ 0 ] : indexOrEle;
        if ( ele ) {
            var data = { panel: ele, panelIndex: this._getElementIndex( ele ) };

            this.trigger( "wp-panel-before-hide", data );

            $( ele ).removeClass( this.options.activeClass );
            if ( ele === this.activeElement ) {
                this.activeElement = null;
                this.activeIndex = -1;
            }

            this.trigger( "wp-panel-hide", data );
        }
    },

    _handleTabSelect: function( e, data ) {
        if ( !this.showLock ) {
            this.tabDriver = e.target;
            this.showPanel( data.tabIndex );
            this.tabDriver = null;
        }
    },

    addTabGroup: function( tabGroup ) {
        if ( tabGroup ) {
            tabGroup = WebPro.ensureArray( tabGroup );
            var len = tabGroup.length;
            for ( var i = 0; i < len; i++ ) {
                var tg = tabGroup[ i ];
                if ( $.inArray( this.tabGroups, tg ) === -1 ) {
                    this.tabGroups.push( tg );
                    tg.selectTab( this.activeIndex );
                    tg.bind( "wp-tab-select", this._tabCallback );
                }
            }
        }
    },

    removeTabGroup: function( tabGroup ) {
        tabGroup = WebPro.ensureArray( tabGroup );

        var len = tabGroup.length;

        for ( var i = 0; i < len; i++ ) {
            var tg = tabGroup[ i ]
                sets = this.tabGroups,
                loc = $.inArray( sets, tg );
            if ( loc !== -1 ) {
                sets.splice( loc, 1 );
            }
        }
    }
});


// Add a convenience method to the jQuery Collection prototype,
// that applies our RadioGroup behavior to all the elements in the collection.

$.fn.wpPanelGroup = function( options ) {
    var rg = new WebPro.Widget.PanelGroup( this, options );
    return this;
};

})( jQuery, WebPro, window, document );



/**
* wp-disclosure-widget.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

// A Disclosure widget is a composite widget that connects
// a set of tabs with a set of panels.

WebPro.widget( "Widget.Disclosure", WebPro.Widget, {
    defaultOptions: {
        widgetClassName:                  "wp-disclosure-panels",
        tabClassName:                         "wp-disclosure-panels-tab",
        tabHoverClassName:            "wp-disclosure-panels-tab-hover",
        tabDownClassName:             "wp-disclosure-panels-tab-down",
        panelClassName:                   "wp-disclosure-panels-panel",
        tabActiveClassName:       "wp-disclosure-panels-tab-active",
        panelActiveClassName: "wp-disclosure-panels-panel-active",
        defaultIndex:                         0,
        toggleStateEnabled:       false
    },

    _attachBehavior: function() {
        var root = this.$element[ 0 ],
            rclass = this.options.widgetClassName,
            $tabs = WebPro.scopedFind( root, "." + this.options.tabClassName, rclass, root ),
            $panels = WebPro.scopedFind( root, "." + this.options.panelClassName, rclass, root );

        this.tabs = new WebPro.Widget.TabGroup( $tabs, {
                            hoverClass:                         this.options.tabHoverClassName,
                            downClass:                              this.options.tabDownClassName,
                            checkedClass:                   this.options.tabActiveClassName
                        });

        this.panels = new WebPro.Widget.PanelGroup( $panels, {
                            panelClass:                         this.options.panelClassName,
                            activeClass:                        this.options.panelActiveClassName,
                            defaultIndex:                   this.options.defaultIndex,
                            toggleStateEnabled: this.options.toggleStateEnabled
                        });

        this.panels.addTabGroup( this.tabs );
    }
});

// A TabbedPanels widget is basically a disclosure widget, but we declare a formal
// widget so that it uses a different set of class names, and allows users to set
// default plugins that are specific to just accordions.

WebPro.widget( "Widget.TabbedPanels", WebPro.Widget.Disclosure, {
    defaultOptions: {
        widgetClassName:                  "wp-tabbed-panels-panels",
        tabClassName:                         "wp-tabbed-panels-panels-tab",
        tabHoverClassName:            "wp-tabbed-panels-panels-tab-hover",
        tabDownClassName:             "wp-tabbed-panels-panels-tab-down",
        tabActiveClassName:       "wp-tabbed-panels-panels-tab-active",
        panelClassName:                   "wp-tabbed-panels-panels-panel",
        panelActiveClassName: "wp-tabbed-panels-panels-panel-active",
        toggleStateEnabled:       false
    }
});

// An Accordion is basically a disclosure widget, but we declare a formal
// widget so that it uses a different set of class names, and allows
// users to set default plugins that are specific to just accordions.

WebPro.widget( "Widget.Accordion", WebPro.Widget.Disclosure, {
    defaultOptions: {
        widgetClassName:                  "wp-accordion",
        tabClassName:                         "wp-accordion-tab",
        tabHoverClassName:            "wp-accordion-tab-hover",
        tabDownClassName:             "wp-accordion-tab-down",
        tabActiveClassName:       "wp-accordion-tab-active",
        panelClassName:                   "wp-accordion-panel",
        panelActiveClassName: "wp-accordion-panel-active",
        toggleStateEnabled:       false
    }
});

})( jQuery, WebPro, window, document );



/**
* wp-disclosure-widget-plugins.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

// This is a disclosure widget plugin that simply manipulates the CSS display
// property to hide and show the widget panels. Ideally this would be done
// using CSS classes, but this plugin is provided for those environments where
// the display must be manipulated via javascript.

WebPro.Widget.Disclosure.DisplayPropertyTransitionPlugin = {
    defaultOptions: {
    },

    initialize: function( widget, options ) {
        var plugin = this;

        // The idea here is that we only want to override props that aren't already
        // specified in the options we were      given. We then write back the merged
        // results into the original options object so the caller gets our changes.

        $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

        // Attach our behavior after the widget attaches its behaviors.

        widget.bind( "attach-behavior", function() {
            plugin._attachBehavior( widget );
        });
    },

    _attachBehavior: function( widget ) {
        var plugin = this,
            panels = widget.panels,
            $panels = panels.$element,
            activeIndex = panels.activeIndex;

        // Set the display property of any panel to
        // be shown to block.

        panels.bind( "wp-panel-show", function( e, data ) {
            data.panel.style.display = "block";
        });

        // Set the display property of any panel to
        // be hidden to none.

        panels.bind( "wp-panel-hide", function( e, data ) {
            data.panel.style.display = "none";
        });

        // Set the initial display of each panel.

        $panels.each( function( index, ele ) {
            this.style.display = ( index !== activeIndex ) ? "none" : "block";
        });
    }
};

// This is a disclosure widget plugin that uses javascript to animate the
// open and closing of the widget panels. Ideally CSS3 transitions/animations
// would be used, but if content is supposed to animate in older browsers that
// don't support CSS3, this plugin can be used.

WebPro.Widget.Disclosure.AccordionTransitionPlugin = {
    defaultOptions: {
        transitionDirection: "vertical", // "vertical" | "horizontal" | "both"
        transitionDuration:      500                         // msecs
    },

    initialize: function( widget, options ) {
        var plugin = this;

        // The idea here is that we only want to override props that aren't already
        // specified in the options we were      given. We then write back the merged
        // results into the original options object so the caller gets our changes.

        $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

        // Attach our behavior after the widget attaches its behaviors.

        widget.bind( "attach-behavior", function() {
            plugin._attachBehavior( widget );
        });
    },

    _attachBehavior: function( widget ) {
        var plugin = this,
            panels = widget.panels,
            $panels = panels.$element,
            activeIndex = panels.activeIndex,
            direction = widget.options.transitionDirection;

        // Make sure the panel elements are all set to overflow:hidden.

        $panels.css( "overflow", "hidden" );

        // Fire-off a transition that opens a panel whenever
        // a panel-show event is recieved.

        panels.bind( "wp-panel-show", function( e, data ) {
            plugin._showPanel( widget, data );
        });

        // Fire-off a transition that closes a panel whenever
        // a panel-hide event is recieved.

        panels.bind( "wp-panel-hide", function( e, data ) {
            plugin._hidePanel( widget, data );
        });


        $panels.each( function( index, ele ) {
            if ( index !== activeIndex ) {
                if ( direction === "vertical" || direction === "both" ) {
                    this.style.height = "0";
                }
        
                if ( direction === "horizontal" || direction === "both" ) {
                    this.style.width = "0";
                }
            }
        });
    },

    _showPanel: function( widget, data ) {
        var opts = widget.options,
            direction = opts.transitionDirection,
            $panel = $( data.panel ),
            props = {};

        if ( direction === "vertical" || direction === "both" ) {
            props.height = $panel[ 0 ].scrollHeight + "px";
        }

        if ( direction === "horizontal" || direction === "both" ) {
            props.width = $panel[ 0 ].scrollWidth + "px";
        }

        $panel
                // Force any previous animations to jump to their end.
        
                .stop( true, true )

                // Fire off a new open animation.

                .animate( props, {
                        duration: opts.transitionDuration,
                        complete: function() {
                                var props = {};

                                if ( direction === "vertical" || direction === "both" ) {
                                    props.height = "auto";
                                }
                        
                                if ( direction === "horizontal" || direction === "both" ) {
                                    props.width = "auto";
                                }
        
                                $panel.css( props );
                            }
                    });
    },

    _hidePanel: function( widget, data ) {
        var opts = widget.options,
            direction = opts.transitionDirection,
            $panel = $( data.panel ),
            props = {};

        if ( direction === "vertical" || direction === "both" ) {
            props.height = "0";
        }

        if ( direction === "horizontal" || direction === "both" ) {
            props.width = "0";
        }

        $panel
                // Force any previous animations to jump to their end.
        
                .stop( true, true )

                // Fire off a new close animation.

                .animate( props, { duration: opts.transitionDuration } );
    }
};

})( jQuery, WebPro, window, document );



/**
* wp-slideshow.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.SlideShowBase", WebPro.Widget, {
    _widgetName: "slideshow-base",

    defaultOptions: {
        displayInterval: 6000,
        autoPlay: false
    },

    _setUp: function() {
        var self = this;

        this._ssTimer = 0;
        this._ssTimerTriggered = false;
        this._ssTimerCallback = function() {
            self._ssTimerTriggered = true;
            self.next();
            self._ssTimerTriggered = false;
        };

        return WebPro.Widget.prototype._setUp.apply( this, arguments );
    },

    _ready: function() {
        if ( this.options.autoPlay ) {
            this.play();
        }
    },

    play: function() {
        e = this.trigger( "wp-slideshow-before-play" );
        if ( ! e.isDefaultPrevented() ) {
            this._startTimer();
            this.trigger( "wp-slideshow-play" );
        }
    },

    stop: function() {
        e = this.trigger( "wp-slideshow-before-stop" );
        if ( ! e.isDefaultPrevented() ) {
            this._stopTimer();
            this.trigger( "wp-slideshow-stop" );
        }
    },

    isPlaying: function() {
        return this._ssTimer !== 0;
    },

    _startTimer: function() {
        this._stopTimer();
        this._ssTimer = setTimeout( this._ssTimerCallback, this.options.displayInterval );
    },

    _stopTimer: function() {
        if ( this._ssTimer ) {
            clearTimeout( this._ssTimer );
        }
        this._ssTimer = 0;
    },

    _executeCall: function( name, args ) {
        e = this.trigger( "wp-slideshow-before-" + name );
        if ( ! e.isDefaultPrevented() ) {
            // There are a couple of ways the slideshow can be stopped.
            // The first is to simply call stop() at any time. The 2nd,
            // is to simply return a true value from the method being
            // called.

            if ( this[ "_" + name ].apply( this, args) ) {
                this.stop();
            }

            // If we're still in slideshow mode, restart the timer
            // for the next slide.

            if ( this.isPlaying() ) {
                this._startTimer();
            }

            this.trigger( "wp-slideshow-" + name );
        }
    },

    first: function() {
        return this._executeCall( "first", arguments );
    },

    last: function() {
        return this._executeCall( "last", arguments );
    },

    previous: function() {
        return this._executeCall( "previous", arguments );
    },

    next: function() {
        return this._executeCall( "next", arguments );
    },

    goTo: function() {
        return this._executeCall( "goTo", arguments );
    },

    _first: function() {
        // Derived class must provide an implementation.
    },

    _last: function() {
        // Derived class must provide an implementation.
    },

    _previous: function() {
        // Derived class must provide an implementation.
    },

    _next: function() {
        // Derived class must provide an implementation.
    },

    _goTo: function() {
        // Derived class must provide an implementation.
    }
});

})( jQuery, WebPro, window, document );



/**
* wp-content-slideshow.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.ContentSlideShow", WebPro.Widget.SlideShowBase, {
    _widgetName: "content-slideshow",

    defaultOptions: {
        slideshowClassName:      "wp-slideshow",
        clipClassName:                   "wp-slideshow-clip",
        viewClassName:                   "wp-slideshow-view",
        slideClassName:                  "wp-slideshow-slide",
        slideLinkClassName:      "wp-slideshow-slide-link",
        firstBtnClassName:       "wp-slideshow-first-btn",
        lastBtnClassName:            "wp-slideshow-last-btn",
        prevBtnClassName:            "wp-slideshow-prev-btn",
        nextBtnClassName:            "wp-slideshow-next-btn",
        playBtnClassName:            "wp-slideshow-play-btn",
        stopBtnClassName:            "wp-slideshow-stop-btn",
        playingClassName:            "wp-slideshow-playing"
    },

    _findWidgetElements: function( selector ) {
        var ssEle = this.$element[ 0 ];
        return WebPro.scopedFind( ssEle, selector, this.options.slideshowClassName, ssEle );
    },

    _attachBtnHandler: function( className, funcName ) {
        var self = this;

        // Attach a handler to buttons with the specified
        // class name. The handler will invoke a method on
        // the slideshow specified by funcName. After finding
        // the buttons, store a reference to them on the slideshow
        // so we don't have to search for them again.

        this[ "$" + funcName + "Btn" ] = this._findWidgetElements( "." + className )
            .bind( "click", function( e ) {
                self[ funcName ]();
                e.preventDefault();
            });
    },

    _attachBehavior: function() {
        var self = this,
            opts = this.options;

        WebPro.Widget.ContentSlideShow.prototype._super.prototype._attachBehavior.call( this );

        this._panelShowCallback = function( e, data) {
            if ( !self._ssTimerTriggered ) {
                // The current panel changed but it wasn't due
                // to our slideshow timer callback. If the slideshow
                // is running, reset the timer so the user has time
                // to view the content on the new panel.
    
                if ( self.isPlaying() ) {
                    self._startTimer();
                }
            }
        };

        // Add our internal class to the top-level slideshow element, we
        // will use this to ehlp us filter out any slides/controls in any
        // nested slideshows.

        this.$element.addClass( opts.slideshowClassName );

        var $slides = this._findWidgetElements( "." + opts.slideClassName ),
            $tabs =       this._findWidgetElements( "." + opts.slideLinkClassName );

        this.slides = new WebPro.Widget.PanelGroup( $slides, {
                                defaultIndex: ( opts.defaultIndex || 0 )
                            });
        this.slides.bind( "wp-panel-show", this._panelShowCallback );

        this.tabs = null;

        if ( $tabs.length ) {
            this.tabs = new WebPro.Widget.TabGroup( $tabs );
            this.slides.addTabGroup( this.tabs );
        }

        this._attachBtnHandler( opts.firstBtnClassName, "first" );
        this._attachBtnHandler( opts.lastBtnClassName, "last" );
        this._attachBtnHandler( opts.prevBtnClassName, "previous" );
        this._attachBtnHandler( opts.nextBtnClassName, "next" );
        this._attachBtnHandler( opts.playBtnClassName, "play" );
        this._attachBtnHandler( opts.stopBtnClassName, "stop" );

        // Bind to the play and stop events so we can add and remove
        // a class on the slideshow element that indicates whether
        // or not it is in play mode. We use listeners instead of
        // overriding the play() and stop() methods because we want
        // to give plugins a chance to cancel play/stop requests. If
        // the play and stop events fire, then we know it is okay
        // to add/remove the class.

        this.bind( "wp-slideshow-play", function() {
                this.$element.addClass( opts.playingClassName );
            });
        this.bind( "wp-slideshow-stop", function() {
                this.$element.removeClass( opts.playingClassName );
            });
    },

    _first: function() {
        this.slides.showPanel( 0 );
    },

    _last: function() {
        var slides = this.slides;
        slides.showPanel( slides.$element.length - 1 );
    },

    _previous: function() {
        var slides = this.slides,
            ai = slides.activeIndex;
        slides.showPanel( ( ai < 1 ? slides.$element.length : ai ) - 1 );
    },

    _next: function() {
        var slides = this.slides,
            ai = slides.activeIndex;
        slides.showPanel( ( ai + 1 ) % slides.$element.length );
    },

    _goTo: function() {
        this.slides.showPanel.apply( this.slides, arguments );
    }
});

})( jQuery, WebPro, window, document );



/**
* wp-content-slideshow-plugins.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){


//////////////////// Fading Transition Plugin ////////////////////


WebPro.Widget.ContentSlideShow.fadingTransitionPlugin = {
    defaultOptions: {
        transitionDuration: 500
    },

    initialize: function( slideshow, options ) {
        var plugin = this;

        // The idea here is that we only want to override props
        // that aren't already specified in the options we were
        // given. We then write back the merged results into the
        // original options object so the caller gets our changes.

        $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

        // Hook into the point in time immediately after
        // the slideshow attaches it's behaviors, so
        // we can attach our own behaviors.

        slideshow.bind( "attach-behavior", function() {
            plugin.attachBehavior( slideshow );
        });
    },

    attachBehavior: function( slideshow ) {
        var plugin = this,
            slides = slideshow.slides,
            slideEles = slides.$element,
            activeIndex = slides.activeIndex;

        // Attach some listeners to the slideshow's internal
        // panel-group widget that manages which slide is showing.
        // We want to know whenever it hides or shows a slide so
        // we can fire off a transition for them.

        slides
            .bind( "wp-panel-show", function( e, data ) {
                plugin.handleShowSlide( slideshow, data );
            })
            .bind( "wp-panel-hide", function( e, data ) {
                plugin.handleHideSlide( slideshow, data );
            });

        // Make sure all slides, except the initial one,
        //      start off hidden.

        for ( var i = 0; i < slideEles.length; i++ ) {
            if ( i !== activeIndex ) {
                slideEles[ i ].style.display = "none";
            }
        }
    },

    handleShowSlide: function( slideshow, slideInfo ) {
        $( slideInfo.panel )

            // Force any animation running for the given slide
            // to jump to its end. This allows any callbacks
            // registered on the animation to fire.

            .stop( false, true )

            // Kick off a fade-in animation.

            .fadeIn( slideshow.options.transitionDuration );
    },

    handleHideSlide: function( slideshow, slideInfo ) {
        $( slideInfo.panel )

            // Force any animation running for the given slide
            // to jump to its end. This allows any callbacks
            // registered on the animation to fire.

            .stop( false, true )

            // Kick off a fade-out animation.

            .fadeOut( slideshow.options.transitionDuration );
    }
};


//////////////////// Filmstrip Transition Plugin ////////////////////


WebPro.Widget.ContentSlideShow.filmstripTransitionPlugin = {
    defaultOptions: {
        transitionDuration: 500,
        transitionStyle:            "horizontal" // "horizontal" || "vertical"
    },

    initialize: function( slideshow, options ) {
        var plugin = this;

        // The idea here is that we only want to override props
        // that aren't already specified in the options we were
        // given. We then write back the merged results into the
        // original options object so the caller gets our changes.

        $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

        // Hook into the point in time immediately after
        // the slideshow attaches it's behaviors, so
        // we can attach our own behaviors.

        slideshow.bind( "attach-behavior", function() {
            plugin.attachBehavior( slideshow );
        });
    },

    attachBehavior: function( slideshow ) {
        var plugin = this,
            opts = slideshow.options,
            isHorz = ( opts.transitionStyle === "horizontal" ),
            slides = slideshow.slides,
            $slideEles = slides.$element,
            $clip = slideshow._findWidgetElements( "." + opts.clipClassName ),
            $view = slideshow._findWidgetElements( "." + opts.viewClassName ),
            clipWidth = $clip.width(),
            clipHeight = $clip.height(),
            offsetSize = isHorz ? clipWidth : clipHeight,
            offset = 0,
            viewProps = {
                    top: "0",
                    left: "0"
                };

        // We position the view relative to the clip so make sure
        // the clip has a positioning context on it.

        if ( $clip.css( "position" ) !== "absolute" ) {
            $clip.css( "position", "relative" );
        }

        // Make sure the view can be positioned.

        if ( $view.css( "position" ) !== "absolute" ) {
            viewProps[ "position" ] = "relative";
        }

        slideshow._fstp$Clip = $clip;
        slideshow._fstp$View = $view;
        slideshow._fstpStyleProp = isHorz ? "left" : "top";
        slideshow._fstpStylePropZero = isHorz ? "top" : "left";

        // Attach some listeners to the slideshow's internal
        // panel-group widget that manages which slide is showing.
        // We want to know whenever it hides or shows a slide so
        // we can fire off a transition for them.

        slides
            .bind( "wp-panel-show", function( e, data ) {
                plugin._goToSlide( slideshow, data.panel );
            });

        // We need to know whenever a previous/next request is
        // made so that we can perform a wrap-around transition
        // if necessary.

        slideshow._fstpRequestType = null;

        slideshow
            .bind( "wp-slideshow-before-previous wp-slideshow-before-next", function( e ) {
                slideshow._fstpRequestType = e.type.replace( /.*-/, "" );
                slideshow._fstpOldActiveIndex = slideshow.slides.activeIndex;
            })
            .bind( "wp-slideshow-previous wp-slideshow-next", function( e ) {
                slideshow._fstpRequestType = null;
                slideshow._fstpOldActiveIndex = -1;
            });

        // Position each slide within the slides-container
        // to give the appearance of a film-strip.

        var prop = slideshow._fstpStyleProp,
            propZero = slideshow._fstpStylePropZero;

        for ( var i = 0; i < $slideEles.length; i++ ) {
            var style = $slideEles[ i ].style;

            style[ propZero ] =       "0";
            style[ prop ]             =       offset + "px";
            style[ "margin" ] =       "0";
            style[ "position" ] = "absolute";

            offset += offsetSize;
        }

        viewProps[ isHorz ? "width"      : "height" ] = offset + "px";
        viewProps[ isHorz ? "height" : "width"      ] = ( isHorz ? clipHeight : clipWidth ) + "px";

        // If there is no active element, position the view offscreen.

        if ( !slides.activeElement ) {
            viewProps[ prop ] = ( isHorz ? clipWidth : clipHeight ) + "px";
            viewProps[ propZero ] = "0";
        }

        // We need to make sure that the view has overflow:visible to accomodate
        // the wrap-around scenario where we temporarily place a slide before the first
        // or after the last slide.

        viewProps[ "overflow" ] = "visible";

        $view.css( viewProps );
        
        plugin._goToSlide( slideshow, slides.activeElement );
    },

    _goToSlide: function( slideshow, slideEle ) {
        if ( slideshow ) {
            var $slide = $( slideEle),
                $view = slideshow._fstp$View,
                prop = slideshow._fstpStyleProp,
                offsetEdge = ( prop === "left" ) ? "offsetLeft" : "offsetTop",
                offsetDimension =      ( prop === "left" ) ? "offsetWidth" : "offsetHeight",
                viewOffset = slideEle ? -slideEle[ offsetEdge ] : slideshow._fstp$Clip[ 0 ][ offsetDimension ],
                props = {};
    
            props[ prop ] = viewOffset + "px";

            // Check to see if we should do a wrap-around animation.

            var reqType = slideshow._fstpRequestType,
                oldActiveIndex = slideshow._fstpOldActiveIndex;

            if ( reqType && oldActiveIndex !== -1 ) {
                var activeIndex = slideshow.slides.activeIndex,
                    lastIndex = slideshow.slides.$element.length - 1;

                if ( activeIndex !== oldActiveIndex ) {
                    var posChange = 0;

                    // Verify the oldActiveIndex and current activeIndex
                    // against the request type, just in case there is some
                    // slide randomizer plugin in effect. We really only want
                    // to wrap-around when going from start-to-end or end-to-start.

                    if ( reqType === "previous" && oldActiveIndex === 0 && activeIndex === lastIndex ) {
                        // Calculate the offset that positions the last slide before the first slide.

                        posChange = -slideEle[ offsetDimension ];
                    } else if ( reqType === "next" && oldActiveIndex === lastIndex && activeIndex === 0 ) {
                        // Calculate the offset that positions the 1st slide after the last slide.

                        var prevSlide = slideshow.slides.$element[ oldActiveIndex ];
                        posChange = prevSlide[ offsetEdge ] + prevSlide[ offsetDimension ];
                    }

                    if ( posChange ) {
                        // Update our animation props object so that we animate to
                        // the new wrap-around position for the current slide.

                        props[ prop ] = -posChange + "px";

                        // Move the current slide now. We will reset it back to its original
                        // position after our transition animation.

                        $slide.css( prop, posChange + "px" );
                    }
                }
            }

            $view
    
                // Force any animation running for the given slide
                // to jump to its end. This allows any callbacks
                // registered on the animation to fire.
    
                .stop( false, true )
    
                // Kick off an animation that scrolls the filmstrip.
    
                .animate( props, slideshow.options.transitionDuration, function() {
                    if ( posChange ) {
                        // We just completed a wrap-around animation, move the slide we
                        // just transitioned to, back to its original position.

                        $slide.css( prop, -viewOffset + "px" );

                        // Now re-position the view so that it is displaying the
                        // current slide in its new position.

                        $view.css( prop, viewOffset + "px" );
                    }
                });
        }
    }
};


//////////////////// Image Include Plugin ////////////////////


WebPro.Widget.ContentSlideShow.slideImageIncludePlugin = {
    defaultOptions: {
            imageIncludeClassName: "wp-slideshow-slide-image-include",
            slideLoadingClassName: "wp-slideshow-slide-loading"
        },

    initialize: function( slideshow, options ) {
        var plugin = this;

        // Resolve the options for this widget. The idea here is that we only want to override props
        // that aren't already specified in the options we were      given. We then write back the merged
        // results into the original options object so the caller gets our changes.

        $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

        // Create an image loader and store it on the slideshow.

        slideshow._cssilLoader = new WebPro.ImageLoader();

        // Listen for the slideshow's attach-behavior notification so
        // we can hook in our own behaviors.

        slideshow.bind( "attach-behavior", function() {
            plugin._attachBehavior( slideshow );
        });
    },

    _attachBehavior: function( slideshow ) {
        var plugin = this,
            loader = slideshow._cssilLoader,

            // Find the slides within the slideshow.

            $slides = slideshow._findWidgetElements( "." + slideshow.options.slideClassName ),
            count = $slides.length,

            // Find the image-include elements within the slideshow.

            imageIncludeSelector = "." + slideshow.options.imageIncludeClassName,

            // We'll place this class name on every slide so we can show
            // a loading indicator.

            slideLoadingClassName = slideshow.options.slideLoadingClassName,

            callback = function( src, w, h, data ) { plugin._handleImageLoad( slideshow, src, w, h, data ); };

        for ( var i = 0; i < count; i++ ) {
            var $slide = $slides.eq( i ),
                $ele = $slide.find( imageIncludeSelector );
                ele = $ele[ 0 ];

            if ( ele ) {
                // Grab the href off the link. If this isn't a link then check
                // for a data-src attribute.

                var src = ele.href || $ele.data( "src" );
                if ( src ) {
        
                        // Stuff any include data attribute values into the
                        // data object we are going to pass to the image-loader.
                        // When the image actually loads, we'll use this data to
                        // set attributes on the image element we create to replace
                        // the actual include element.
        
                    var data = {
                                id: $ele.data( "id" ) || "",
                                width: $ele.data( "width" ),
                                height: $ele.data( "height" ),
                                $ele: $ele,
                                $slide: $slide
                            };
    
                    // Hide the include link.
    
                    ele.style.visibility = "hidden";
    
                    // Add a request for this image to our image-loader.
        
                    loader.add( src, { callback: callback, data: data } );

                    // Mark the slide as loading.

                    $slide.addClass( slideLoadingClassName );
                }
            }
        }

        // The slideshow is all done initializing, so kick-off
        // any image-include requests.

        slideshow._cssilLoader.start();
    },

    _handleImageLoad: function( slideshow, src, w, h, data ) {
        data.$ele.replaceWith('<img id="' + ( data.id || '' ) + '" src="' + src + '" width="' + ( data.width || w ) + '" height="' + ( data.height || h ) + '">');
        data.$slide.removeClass( slideshow.options.slideLoadingClassName );
    }
};


//////////////////// Play Once Plugin ////////////////////


WebPro.Widget.ContentSlideShow.playOncePlugin = {
    defaultOptions: {
            playOnce: false
        },

    initialize: function( slideshow, options ) {
        var plugin = this;

        // When the slideshow play-mode is started, we track
        // the number of slides that are within the slideshow.

        slideshow._plpNumSlides = 0;

        // When the slideshow play-mode is started, we start
        // tracking the number of slides that are shown. Once
        // our count is equivalent to the number of slides,
        // play-mode is stopped. We do it this way because we
        // can't just rely on a sequential visit to each slide
        // due to the use of the play-shuffle plugin.

        slideshow._plpSlideCount = 0;

        // Listen for the slideshow's attach-behavior notification so
        // we can hook in our own behaviors.

        slideshow.bind( "attach-behavior", function() {
            plugin._attachBehavior( slideshow );
        });
    },

    _attachBehavior: function( slideshow ) {
        // Boolean value that determines whether or not our play-count
        // is enabled or not.

        var enabled = false;

        // Attach a play handler so that we can turn on play-count tracking.

        slideshow.bind( 'wp-slideshow-play', function( e, data ) {
            // If the slideshow doesn't loop forever, then
            // go ahead and turn on our play-count tracking.

            if ( slideshow.options.playOnce ) {
                // Initialize the slidecount.
        
                slideshow._plpSlideCount = 1;
        
                // Cache the number of slides we need to see
                // before we call stop.
        
                slideshow._plpNumSlides = slideshow.slides.$element.length;
    
                // Turn on our play-count tracking.
    
                enabled = true;
            }
        });

        // Attach a stop handler so that we can turn off play-count tracking.

        slideshow.bind( 'wp-slideshow-stop', function( e, data ) {
            // Turn off our play-count tracking.

            enabled = false;
        });

        // Attach a show handler on the slides so that we can count the
        // number of slides that are shown during play-mode.

        slideshow.slides.bind( 'wp-panel-show',function() {
            // We stop the slideshow when the play-count feature is enabled,and
            // our play-count reaches the number of slides within the slideshow.
            // We also stop the slideshow if a slide is told to show and it was
            // *NOT* triggered by the slideshow timer. This would indicate that
            // a user gesture caused a change in the current slide being shown.s

            if ( enabled && ( !slideshow._ssTimerTriggered || ++slideshow._plpSlideCount >= slideshow._plpNumSlides ) ) {
                enabled = false;
                slideshow.stop();
            }
        });
    }
};

//////////////////// Shuffle Play Plugin ////////////////////


WebPro.Widget.ContentSlideShow.shufflePlayPlugin = {
    defaultOptions: {
            randomDefaultIndex: true
        },

    initialize: function( slideshow, options ) {
        var plugin = this;


        // The idea here is that we only want to override props
        // that aren't already specified in the options we were
        // given. We then write back the merged results into the
        // original options object so the caller gets our changes.

        $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

        // This is an array that we use to randomize slide indexes.
        // We use an array as opposed to calulating a random index on
        // the fly when next() is called, to make sure that we actually
        // display *every* slide before we cycle.

        slideshow._shuffleArray = [];

        // After we randomize the slide indexes, we create a quick
        // lookup dictionary that tells us what the next shuffle
        // order index should be for any slide.

        slideshow._shuffleNextDict = {};

        // We override the slideshow's _next() method so that we can
        // randomize the next slide when the slideshow is playing. We
        // tuck away the original _next() method so that we can call it
        // if we aren't in slideshow play mode.

        slideshow._realNext = slideshow._next;
        slideshow._next = function() { plugin._handleNext( slideshow ); };

        // We keep track of the number of slides that have been played
        // in slideshow mode. When this count reaches the slide count,
        // we re-shuffle again.

        slideshow._shufflePlayCount = 0;

        // Every time the slideshow is played, we want to reshuffle the
        // slide play order.

        slideshow.bind( 'wp-slideshow-before-play', function( e, data ) {
            return plugin._reshuffle( slideshow );
        });

        // We want to generate a random default slide index if the user
        // has not specified a default index. The actual index will be
        // generated just before the behavior attachment phase.

        if ( options.randomDefaultIndex && typeof options.defaultIndex === 'undefined' ) {
            slideshow.bind( 'before-attach-behavior', function( e ) {
                // Because we are being invoked before the the slideshow widget's
                // attachBehavior() method, we have to manually search for the slide
                // elements ourselves.

                var numSlides = slideshow._findWidgetElements( "." + slideshow.options.slideClassName ).length,

                    // Generate a random integer between 0 and the last slide index.

                    i = Math.floor( Math.random() * numSlides );

                // Set the default index to the random index we just calculated.
                // Make sure to clip the value of the random index so that it
                // is always within the valid range.

                slideshow.options.defaultIndex = i >= numSlides ? numSlides - 1 : i;
            });
        }
    },

    _fisherYatesArrayShuffle: function( arr ) {
        if ( arr && arr.length ) {
            var i = arr.length;
            while ( --i ) {
                var j = Math.floor( Math.random() * ( i + 1 ) ),
                    tmp = arr[ j ];
                arr[ j ] = arr[ i ];
                arr[ i ] = tmp;
            }
        }
    },

    _reshuffle: function( slideshow ) {
        var arr = slideshow._shuffleArray,
            dict = {},
            numSlides = slideshow.slides.$element.length;

        if ( arr.length !== numSlides ) {
            // The size of our shuffle array has to match
            // the number of slides. If there is a mismatch,
            // re-initialize the shuffle array.
    
            arr.length = 0;
            for ( var i = 0; i < numSlides; i++ ) {
                arr[ i ] = i;
            }
        }

        // Shuffle the values in the array.

        this._fisherYatesArrayShuffle( arr );

        // Now build up a dictionary that given a slide index,
        // tells us what the 'next' slide in our shuffle order
        // would be.

        for ( var i = 0; i < numSlides; i++ ) {
            dict[ arr[ i ] ] = arr[ ( i + 1 )      % numSlides ];
        }

        slideshow._shuffleNextDict = dict;
        slideshow._shufflePlayCount = 0;
    },

    _handleNext: function( slideshow ) {
        if ( slideshow.isPlaying() ) {
            // The slideshow is in play mode, lookup the next slide to
            // go to based on the current active index and call the slideshow's
            // goTo() method.

            slideshow._goTo( slideshow._shuffleNextDict[ slideshow.slides.activeIndex ] || 0 );

            // If we've seen all the slides, re-shuffle the indexes so we get
            // a different order for the next cycle.

            if ( ++slideshow._shufflePlayCount >= slideshow.slides.$element.length ) {
                this._reshuffle( slideshow );
            }

        } else {
            // The slideshow isn't playing so just call the slideshow's
            // original next method.

            slideshow._realNext();
        }
    }
};


//////////////////// Toggle Play Plugin ////////////////////


WebPro.Widget.ContentSlideShow.togglePlayPlugin = {
    defaultOptions: {
        },

    initialize: function( slideshow, options ) {
        // Add a listener on the slideshow so that we can prevent
        // a play() request if necessary.

        slideshow.bind( 'wp-slideshow-before-play', function( e, data ) {
            if ( slideshow.isPlaying() ) {
                slideshow.stop();
                e.preventDefault();
            }
        });

        // The default implementation of the content-slideshow places a
        // playing class on the slideshow element itself whenever the slideshow
        // mode is turned on. Some folks may want this class to go directly
        // on the play button instead of relying on a contextual selector.
        // Listen for a successful play/stop request and add/remove the
        // playing class directly on the play button element.

        slideshow.bind( 'wp-slideshow-play', function( e, data ) {
            if ( slideshow.$playBtn ) {
                slideshow.$playBtn.addClass( slideshow.options.playingClassName );
            }
        });

        slideshow.bind( 'wp-slideshow-stop', function( e, data ) {
            if ( slideshow.$playBtn ) {
                slideshow.$playBtn.removeClass( slideshow.options.playingClassName );
            }
        });
    }
};


//////////////////// Swipe Plugin ////////////////////


WebPro.Widget.ContentSlideShow.swipePlugin = {

    defaultOptions: {
        swipeEvents: {
            'wp-swipe-slideshow-prev': {
                xThreshold: 60
            },
            'wp-swipe-slideshow-next': {
                xThreshold: -60
            }
        }
    },

    initialize: function( slideshow, options ) {
        var plugin = this;
        this.options = $.extend( {}, this.defaultOptions, options );
        slideshow.swipeTracker = new WebPro.SwipeTracker( slideshow.$element, {
            angleThreshold: 30,
            swipeEvents: this.options.swipeEvents
        });
        $( slideshow ).on( 'attach-behavior', function() {
            plugin.attachBehavior( slideshow );
        });
    },

    attachBehavior: function( ss ) {
        $( 'body' ).on( 'wp-swipe-slideshow-next', function() {
            ss.next();
        });
        $( 'body' ).on( 'wp-swipe-slideshow-prev', function() {
            ss.previous();
        });
    }

};


//////////////////// Next Prev Plugin ////////////////////


WebPro.Widget.ContentSlideShow.nextPrevPlugin = {

    defaultOptions: {
        nextClassName: 'wp-slideshow-next',
        prevClassName: 'wp-slideshow-prev'
    },

    initialize: function( slideshow, options ) {
        var plugin = this;
        this.options = $.extend( {}, this.defaultOptions, options );
        $( slideshow ).on( 'attach-behavior', function() {
            plugin.attachBehavior( slideshow );
        });
    },

    attachBehavior: function( ss ) {
        var plugin = this;
            $view = ss.$element.find( '.' + ss.options.viewClassName ),
            $slides = ss.slides.$element,
            oldIndex = ss.slides.activeIndex;

        $( ss.slides ).on( 'wp-panel-before-show', function( evt, data ) {
            var ss = this,
                activeIndex = data.panelIndex,
                slideCount = $slides.length,
                nextEvent = activeIndex - oldIndex == 1 || ( activeIndex - oldIndex ) == ( 1 - slideCount ),
                $next = $slides.eq( ( activeIndex + 1 ) % slideCount ),
                $prev = $slides.eq( ( activeIndex - 1 ) % slideCount );
            $slides.removeClass( plugin.options.nextClassName + ' ' + plugin.options.prevClassName );
            $view.removeClass( plugin.options.nextClassName + ' ' + plugin.options.prevClassName );
            if ( nextEvent ) {
                $next.addClass( plugin.options.nextClassName );
                $prev.addClass( plugin.options.prevClassName );
                $view.addClass( plugin.options.nextClassName );
            } else {
                $prev.addClass( plugin.options.nextClassName );
                $next.addClass( plugin.options.prevClassName );
                $view.addClass( plugin.options.prevClassName );
            }
            oldIndex = activeIndex;
        });
    }

};


//////////////////// View Dimension Plugin ////////////////////


WebPro.Widget.ContentSlideShow.viewDimensionPlugin = {

    defaultOptions: {
        viewDimension: 'width'
    },

    initialize: function( slideshow, options ) {
        var plugin = this;
        this.loader = new WebPro.ImageLoader();
        this.options = $.extend( {}, this.defaultOptions, options, slideshow.defaultOptions );
        $( slideshow ).on( 'attach-behavior', function() {
            plugin.attachBehavior( slideshow );
        });
    },

    attachBehavior: function( slideshow ) {
        var plugin = this,
            $images = slideshow.slides.$element.find( 'img' );
        this.imageCount = $images.length;
        this.loadedCount = 0;
        $images.each( function() {
            $( this ).load( function() {
                plugin.imageLoaded( slideshow );
            });
        });
    },

    imageLoaded: function( slideshow ) {
        if ( this.loadedCount < this.imageCount - 1 ) {
            this.loadedCount++;
            return;
        }
        this.adjustDimension( slideshow );
    },

    adjustDimension: function( slideshow ) {
        var $view = slideshow.$element.find( '.' + this.options.viewClassName ),
            $slides = $view.find( '.' + this.options.slideClassName );
        if ( this.options.viewDimension == 'width' ) {
            var totalWidth = 0;
            $slides.each( function() {
                totalWidth += $( this ).outerWidth();
            });
            $view.width( totalWidth );
        } else {
            var totalHeight = 0;
            $slides.each( function() {
                totalHeight += $( this ).outerHeight();
            });
            $view.height( totalHeight );
        }
    }

};


//////////////////// Carousel Plugin ////////////////////


WebPro.Widget.ContentSlideShow.carouselPlugin = {

    defaultOptions: {
        imageThreshold: 3
    },

    initialize: function( slideshow, options ) {
        // require nextPrevPlugin
        var nextPrev = WebPro.Widget.ContentSlideShow.nextPrevPlugin;
        nextPrev.initialize( slideshow, options );

        var plugin = this;
        this.options = $.extend( {}, this.defaultOptions, nextPrev.defaultOptions, slideshow.defaultOptions, options );
        $( slideshow ).on( 'attach-behavior', function() {
            plugin.attachBehavior( slideshow );
        });
    },

    attachBehavior: function( slideshow ) {
        var opts = this.options,
            $view = slideshow.$element.find( '.' + opts.viewClassName ),
            $slides = slideshow.slides.$element,
            slideCount = $slides.length,
            $slide, oldIndex = 0;

        if ( slideCount < opts.imageThreshold ) {
            // duplicate slides
        } else {
            // initialize slides
            for ( var i = 0; i < Math.floor( ( opts.imageThreshold - 1 ) / 2 ); i++ ) {
                $slide = $view.find( '.' + opts.slideClassName + ':eq(' + ( slideCount - 1 ) + ')' );
                $slide.remove();
                $view.prepend( $slide );
            }
        }

        slideshow._cpssIsAnimating = false;

        slideshow.$element.find( '.' + opts.viewClassName ).on( 'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend', function( evt ) {
            var $this = $( this ),
                nextEvent = $this.hasClass( opts.nextClassName ),
                prevEvent = $this.hasClass( opts.prevClassName );
            if ( $this[0] == evt.target ) {
                if ( nextEvent ) {
                    $slide = $view.find( '.' + opts.slideClassName + ':eq(0)' );
                    $slide.remove();
                    $view.append( $slide );
                    $view.removeClass( opts.nextClassName );
                    slideshow._cpssIsAnimating = false;
                } else if ( prevEvent ) {
                    $slide = $view.find( '.' + opts.slideClassName + ':eq(' + ( slideCount - 1 ) + ')' );
                    $slide.remove();
                    $view.prepend( $slide );
                    $view.removeClass( opts.prevClassName );
                    slideshow._cpssIsAnimating = false;
                }
            }
        });
        $( slideshow.slides ).on( 'wp-panel-before-show', function( evt, data ) {
            $slides.removeClass( 'wp-slideshow-constant-large wp-slideshow-constant-small' );
        });

        // We want to know any time the slideshow is asked to
        // navigate to a different slide.

        slideshow.bind( 'wp-slideshow-before-first wp-slideshow-before-last wp-slideshow-before-previous wp-slideshow-before-next wp-slideshow-before-goTo', function( evt, data ) {
            // If we're animating, we want to block any requests
            // to move on to the next slide until we're done.

            if ( slideshow._cpssIsAnimating ) {
                // Calling prevent default on the event prevents
                // the slideshow from navigating.

                evt.preventDefault();
            } else {
                // Set our animation flag. It will get turned off in our
                // animation end handler.

                slideshow._cpssIsAnimating = true;
            }
        });
    }

};


//////////////////// Disable Thumbs Plugin ////////////////////


WebPro.Widget.ContentSlideShow.disableThumbsPlugin = {

    initialize: function( slideshow, options ) {
        var plugin = this;
        this.options = $.extend( {}, slideshow.DefaultOptions, options );
        slideshow.bind( 'attach-behavior', function() {
            if ( plugin.options.thumbsDisabled ) {
                slideshow.tabs.disabled( true );
            }
        });
    }

};


})( jQuery, WebPro, window, document );



/**
* wp-slider.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

// XXX: This still needs to be made generic so that we can use
//                  this in a horizontal, vertical, and both mode.

WebPro.widget( "Widget.Slider", WebPro.Widget, {
    _widgetName: "slider",

    defaultOptions: {
        trackClassName: 'wp-slider-track',
        thumbClassName: 'wp-slider-thumb'
    },

    _attachBehavior: function() {
        var self = this,
            opts = this.options;

        this.$track = this.$element.find( '.' + opts.trackClassName );
        this.$thumb = this.$element.find( '.' + opts.thumbClassName );

        var trackWidth = this.$track.width(),
            thumbWidth = this.$track.width();

        this.percentage = 0; // % value in the range from zero to one.
        this.position = 0; // px

        this._resetConstraints();

        this.tracker = new      WebPro.DragTracker( this.$thumb[ 0 ], {
                dragStart: function( dt, dx, dy ) { self._handleDragStart( dx, dy ); },
                dragUpdate: function( dt, dx, dy ) { self._handleDragUpdate( dx, dy ); },
                dragStop: function( dt, dx, dy ) { self._handleDragStop( dx, dy ); }
            });
    },

    _handleDragStart: function( dx, dy ) {
        this._startPos = this.position;
    },

    _handleDragUpdate: function( dx, dy ) {
        this.setPositionByPixel( this._startPos + dx );
    },

    _handleDragStop: function( dx, dy ) {
        this._startPos = 0;
    },

    _resetConstraints: function() {
        var trackWidth = this.$track.width(),
            thumbWidth = this.$thumb.width();

        this.maxPos = trackWidth - thumbWidth;

        // Reset the thumb based on our new width.

        this.setPositionByPixel( this.percentage * this.maxPos );
    },

    setPositionByPixel: function( pos )
    {
        // Clip the value we were given to our pixel range.

        pos = Math.round( pos || 0 );
        pos = pos < 0 ? 0 : ( pos > this.maxPos ? this.maxPos : pos );

        this._setThumbPosition( pos );
    },

    setPositionByPercentage: function( percent ) {
        this.percentage = percent < 0 ? 0 : ( percent < 1 ? percent : 1 );
        this._setThumbPosition( Math.round( this.percentage * this.maxPos ) );
    },

    _setThumbPosition: function( pos ) {
        this.percentage = pos / this.maxPos;
        this.position = pos;

        this.$thumb.css( 'left', pos + 'px');
        this.update();
    },

    update: function() {
        this._update();
        this.trigger( 'wp-slider-update', { position: this.position, percentage: this.percentage } );
    },

    _update: function() {
        // Stub function to be used by derived class.
    }
});

// Add a convenience method to the jQuery Collection prototype,
// that applies our Slider behavior to all the elements in the collection.

$.fn.wpSlider = function( options ) {
    $( this ).each( function() {
        $( this ).data( 'wpSlider', new WebPro.Widget.Slider( this, options ) );
    });

    return this;
};

})( jQuery, WebPro, window, document );



/**
* wp-form.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){
    
WebPro.widget( "Widget.Form", WebPro.Widget, {
    _widgetName: "form",

    defaultOptions: {
        validationEvent: "blur",
        errorStateSensitivity: "low",
        ajaxSubmit: true,
        
        fieldWrapperClass: "field",
        
        formErrorClass: "form-error",
        formSubmittedClass: "form-submitted",
        formDeliveredClass: "form-delivered",
        focusClass: "focus",
        notEmptyClass: "not-empty",
        emptyClass: "empty",
        validClass: "valid",
        invalidClass: "invalid",
        requiredClass: "required"
    },

    validationTypes: {
        "always-valid": /.*/,
        
        "email": /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        
        "alpha": /^[A-z\s]+$/,
        
        "numeric": /^[0-9]+$/,
        
        "phone": /^([0-9])?(\s)?(\([0-9]{3}\)|[0-9]{3}(\-)?)(\s)?[0-9]{3}(\s|\-)?[0-9]{4}(\s|\sext|\sx)?(\s)?[0-9]*$/,
        
        "time": function( $field ) {
            var time = $field.val().replace( /[^0-9:APM]/g, "" );
            if ( time.indexOf( ":" ) != -1 && time.match( /:/ ).length == 1 ) {
                var timeArr = time.split( ":" ),
                    hour = parseInt( timeArr[0] ),
                    minute = parseInt( timeArr[1] );
                    
                if ( hour < 0 || hour > 24 ) {
                    return true;
                }
                
                if ( minute < 0 || minute > 59 ) {
                    return true;
                }
            } else {
                return false;
            }
            $field.val( time );
            return true;
        }
    },
    
    _extractData: function() {
        //shortening variable names
        this.event = this.options.validationEvent;
        this.errorSensitivity = this.options.errorStateSensitivity;
        this.classNames = {
            focus: this.options.focusClass,
            blur: this.options.emptyClass,
            keydown: this.options.notEmptyClass
        };
    },
    
    _attachBehavior: function() {
        var self = this;
        
        this.$element.find( "input, textarea" ).each( function() {
            if ( $( this ).val() != "empty" ) {
                $( this ).removeClass( self.options.emptyClass );
            }
        });
        
        this.$element.find( "." + this.options.fieldWrapperClass ).each( function() {
            var control = $( this ).find( "input, textarea" );
            if ( control.val() != "" ) {
                $( this ).addClass( self.classNames.keydown );
            }
        });
        
        this.$element.find( "input, textarea" ).bind( "focus blur keydown change propertychange", function(e) {
            var className = self.classNames[ e.type ],
                focus = self.classNames[ "focus" ],
                keydown = self.classNames[ "keydown" ],
                blur = self.classNames[ "blur" ],
                $this = $( this ),
                $field = $this.closest( "." + self.options.fieldWrapperClass );
            
            switch ( e.type ) {
                case "focus":
                    $field.addClass( className ).removeClass( blur );
                    break;
                case "blur":
                    $field.removeClass( focus );
                    if ( $this.val() == "" ) {
                        $field.addClass( className ).removeClass( keydown );
                    }
                    break;
                case "keydown":
                    $field.addClass( className ).removeClass( blur );
                    break;
                case "change":
                case "propertychange":
                    if ( $this.val() != "" ) {
                        $field.addClass( keydown ).removeClass( blur );
                    } else {
                        $field.addClass( blur ).removeClass( keydown );
                    }
                default:
                    break;
            }
        });
        
        switch( this.event ) {
            case "blur":
            case "keyup":
                this.$element.find( "." + this.options.fieldWrapperClass + " input, ." + this.options.fieldWrapperClass + " textarea" ).bind( this.event, function() {
                    self._validate( $( this ).closest( "." + self.options.fieldWrapperClass ) );
                });
            case "submit":
                this.$element.submit( function(e) {
                    var idx = 0, formValid = true,
                        fieldCount = self.$element.find( "." + self.options.fieldWrapperClass ).length - 1;
                    self.$element.find( "." + self.options.fieldWrapperClass ).each(function( idx ) {
                        formValid = self._validate( $(this) ) ? formValid : false;
                        
                        if ( formValid && idx == fieldCount ) {
                            if ( self.options.ajaxSubmit ) {
                                e.preventDefault();
                                self._submitForm();
                            }    
                        }
                        
                        if ( !formValid ) {
                            e.preventDefault();
                        }
                    });
                });
                break;
            default:
                break;
        }
    },
    
    _submitForm: function() {
        var self = this,
            submitted = this.options.formSubmittedClass,
            delivered = this.options.formDeliveredClass,
            error = this.options.formErrorClass,
            allClasses = submitted + ' ' + delivered + ' ' + error,
            buttons = this.$element.find( "input[type=submit], button" );
        $.ajax({
            url: this.$element.attr( "action" ),
            type: "post",
            data: this.$element.serialize(),
            beforeSend: function() {
                self.$element.removeClass( allClasses );
                self.$element.addClass( submitted );
                self.$element.find( "." + self.options.fieldWrapperClass ).removeClass( self.options.focusClass );
                buttons.attr( "disabled", "disabled" );
            },
            success: function( response ) {
                self.$element.addClass( delivered ).removeClass( submitted );
                self.$element.find( "input:not([type=submit]), textarea" ).each( function() {
                    $( this ).val( "" );
                })
                buttons.removeAttr( "disabled" );
            },
            error: function( response ) {
                self.$element.addClass( error ).removeClass( submitted )
                buttons.removeAttr( "disabled" );
            }
        })
    },
    
    _validate: function( $field, requiredOnly ) {
        var type = $field.attr( "data-type" ) || "always-valid",
            control = $field.find( "input, textarea" ),
            requiredOnly = requiredOnly || false,
            validObj = this.validationTypes[ type ],
            isRequired = $field.attr( "data-required" ) === "true",
            isEmpty = control.val() == "",
            isValid = (validObj instanceof RegExp) ? Boolean( control.val().match( validObj ) ) : validObj( control );
        
        if ( isRequired && isEmpty ) {
            return this._switchState( "required", $field );
        }
        if( !isValid && !requiredOnly ) {
            return this._switchState( "invalid", $field );
        }
        
        return this._switchState( "valid", $field );
    },
    
    _switchState: function( state, $field ) {
        var valid = this.options.validClass,
            invalid = this.options.invalidClass,
            required = this.options.requiredClass,
            allClasses = valid + " " + invalid + " " + required;
            
        $field.removeClass( allClasses );
        if ( state == "required" || state == "invalid" ) {
            if( state == "invalid" ) {
                $field.addClass( invalid );
            } else {
                $field.addClass( required );
                var requiredOnly = true;
            }
            if ( this.errorSensitivity != "low" ) {
                var self = this,
                    event;
                if ( this.errorSensitivity == "high" ) {
                    event = "keyup";
                } else {
                    //medium
                    event = "blur";
                }
                
                if ( !$field.data( "error-state" ) ) {
                    $field.data( "error-state", true );
                    $field.find( "input, textarea" ).bind( event, function() {
                        self._validate( $field, requiredOnly );
                    });
                }
            }
            return false;
        }
        if ( $field.data( "error-state" ) ) {
            if ( this.errorSensitivity == "high" ) {
                if ( this.event != "keyup" ) {
                    $field.data( "error-state", false ).find( "input, textarea" ).unbind( "keyup" );
                }
            } else if ( this.errorSensitivity == "medium" ) {
                //medium
                if ( this.event != "blur" ) {
                    $field.data( "error-state", false ).find( "input, textarea" ).unbind( "blur" );
                }
            }
        }
        $field.addClass( valid );
        return true;
    }
});

$.fn.wpForm = function( options ) {
    this.each( function() {
        var valid = new WebPro.Widget.Form( this, options );
    });
    return this;
};
    
})( jQuery, WebPro, window, document );

/**
* wp-animator.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/


// A component class for triggering functionality at an interpolated interval.

var WebPro = WebPro || {};

( function( $, WebPro, window, document, undefined ) {

WebPro.Animator = function( callback, options )
{
      this.options = $.extend( {}, WebPro.Animator.prototype.defaultOptions, options );
      this._startTime = 0;
      this._timer = 0;
      this._callback = callback;
      this._running = false;

      if ( this.options.easingFunc ) {
            this._easingFunc = this.options.easingFunc;
      } else {
            var easing = this.options.easing || 'linear';
            this._easingFunc = this.easings[ easing ] || this.easings[ 'linear' ];
      }

      var animator = this;
      this._updateCallback = function() {
                  animator._handleUpdate();
            };
}

$.extend( WebPro.Animator.prototype, {
      defaultOptions: {
                  interval: 1000 / 60, // FPS
                  duration: 1000,
                  easing: 'linear',
                  easingFunc: null
            },

      easings: {
                  'linear': function( x, t, b, c, d ) {
                              return b + ( ( c - b ) * t / d );
                        },
                  'ease-in': function( x, t, b, c, d ) {
                              return c*((t=t/d-1)*t*t + 1) + b;
                        },
                  'ease-out': function( x, t, b, c, d ) {
                              return c*(t/=d)*t*t + b;
                        }
            },

      start: function() {
            if ( !this._running ) {
                  $( this ).trigger( 'animator-start' );
                  this._startTime = ( new Date() ).getTime();
                  this._handleUpdate();
            }
      },

      stop: function() {
            this._running = false;

            if ( this._timer ) {
                  clearTimeout( this._timer );
                  this._timer = 0;
                  $( this ).trigger( 'animator-stop' );
            }
      },

      _handleUpdate: function() {
            var startTime = this._startTime,
                        elapsed = ( new Date() ).getTime() - startTime,
                        duration = this.options.duration;

            elapsed = elapsed > duration ? duration : elapsed;

            var interpolationConstant = this._easingFunc( 0, elapsed, 0, 1, duration );

            $( this ).trigger( 'animator-update', { interpolationConstant: interpolationConstant } );

            if ( this._callback ) {
                  this._callback( interpolationConstant );
            }

            if ( elapsed === duration ) {
                  if ( this.options.complete ) {
                        this.options.complete();
                  }
                  $( this ).trigger( 'animator-complete' );
                  this.stop();
            } else {
                  this._timer = setTimeout( this._updateCallback, this.options.interval );
            }
      }
});

})( jQuery, WebPro, window, document );


/**
* wp-scrollview.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

( function( $, WebPro, window, document, undefined ) {

WebPro.widget( 'Widget.ScrollView', WebPro.Widget, {
      defaultOptions: {
                  smoothScroll: true,
                  method: 'scroll' // scroll | offset | transform
            },

      _attachBehavior: function() {
            this._scrollX = 0;
            this._scrollY = 0;

            this.$inner = this.$element.children().first();
      },

      _ready: function() {
            // Set the initial position of the
            // scrolling view.

            this.scrollTo( this._scrollX, this._scrollY );
      },

      // Scroll to the specified x,y position.

      scrollTo: function( x, y ) {
            this.trigger( 'scroll-start', {
                        x: this._scrollX,
                        y: this._scrollY
                  });

            this._setScrollPosition( x, y );

            this.trigger( 'scroll-stop', {
                        x: this._scrollX,
                        y: this._scrollY
                  });
      },

      // Set an inline CSS3 transform style value.

      _setElementTransform: function( ele, val ) {
            // XXX: Ideally we would check what browser we're
            //                  running in and just set the appropriate transform prop.
      
            $( ele ).css({
                  '-webkit-transform': val,
                  '-moz-transform': val,
                  '-o-transform': val,
                  '-ms-transform': val,
                  'transform': val
            });
      },

      _translate3d: function( x, y ) {
            this._setElementTransform( this.$inner, 'translate3d(' + x + 'px,' + y + 'px, 0)' );
      },

      // Position the view inside the scrolling
      // viewport at the specified x,y position.

      _setScrollPosition: function( x, y ) {
            x = x > 0 ? x : 0;
            y = y > 0 ? y : 0;

            switch ( this.options.method ) {
                  case 'offset':
                        this.$inner.css({
                                    left: ( -x ) + 'px',
                                    top: ( -y ) + 'px'
                              });
                        break;
                  case 'scroll':
                        this.$element[ 0 ].scrollLeft = x;
                        this.$element[ 0 ].scrollTop = y;
                        break;
                  case 'transform':
                        this._translate3d( -x, -y );
                        break;
            }

            this._scrollX = x;
            this._scrollY = y;

            this.trigger( 'scroll', {
                        x: this._scrollX,
                        y: this._scrollY
                  });
      },

      // Get the width of the scrolling viewport.

      getWidth: function() {
            return this.$element.width();
      },

      // Get the height of the scrolling viewport.

      getHeight: function() {
            return this.$element.height();
      },

      // Get the width of the content view
      // inside the scrolling viewport.

      getScrollWidth: function() {
            return this.options.method === 'scroll' ? this.$element[ 0 ].scrollWidth : this.$inner[ 0 ].offsetWidth;
      },

      // Get the height of the content view
      // inside the scrolling viewport.

      getScrollHeight: function() {
            return this.options.method === 'scroll' ? this.$element[ 0 ].scrollHeight : this.$inner[ 0 ].offsetHeight;
      },

      // Get the max scroll position in the
      // horizontal direction.

      getScrollMaxX: function() {
            var width = this.getScrollWidth() - this.getWidth();
            return width < 0 ? 0 : width;
      },

      // Get the max scroll position in the
      // vertical direction.

      getScrollMaxY: function() {
            var height = this.getScrollHeight() - this.getHeight();
            return height < 0 ? 0 : height;
      },

      // Get the current x,y scroll position of
      // the scrolling view.

      getPosition: function() {
            return {
                        x: this._scrollX,
                        y: this._scrollY
                  };
      }
});

$.fn.wpScrollView = function( options ) {
      var isAPICall = typeof arguments[ 0 ] === 'string',
                  fname = isAPICall ? arguments[ 0 ] : '',
                  args = isAPICall ? arguments.slice( 1 ) : null;

      this.each( function() {
                  if ( isAPICall ) {
                        var widget = $( this ).data( 'wpScrollView' );
                        if ( widget && widget[ fname ] ) {
                              widget[ fname ].apply( widget, args );
                        }
                  } else {
                        $( this ).data( 'wpScrollView',
                                          new WebPro.Widget.ScrollView( this, options ) );
                  }
            });

      return this;
};

})( jQuery, WebPro, window, document );


/**
* wp-display.js - version 0.1 - WebPro Release 0.1
*
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.Display", WebPro.Widget, {
    _widgetName: "display",

    defaultOptions: {
        trigger: null,
        displayClass: "wp-display-show",
        hiddenClass: "wp-display-hide",
        activeClass: "wp-display-toggle-active",
        toggle: true,
        autoFocus: false,
        displayEvent: 'click',
        hideEvent: null,
        positionAround: {
            position: 'below',
            positionOffset: 10,
            align: 'right'
        },
    },

    _attachBehavior: function() {
        var self = this,
            opts = this.options;
        this.options.hideEvent = this.options.hideEvent || this.options.displayEvent;
        this.show = this.options.displayClass;
        this.hide = this.options.hideClass;
        this.$display = this.$element;
        if ( opts.trigger ) {
            this.$trigger = typeof opts.trigger == "string" ? $( opts.trigger ) : opts.trigger;
        } else {
            this.$trigger = $( 'body' );
        }

        this.$trigger.on( this.options.displayEvent, function( evt ) {
            self._handleEvent( evt );
        });
    },

    _handleEvent: function( evt ) {
        evt.preventDefault();
        var self = this;
        if ( this._displayIsHidden() ) {
            this._showDisplay();
            this._handleGlobalEvent = function( evt ) {
                var $target = $( evt.target );
                if ( !self._displayIsHidden() && ( !self.options.trigger || self.$trigger == $( 'body' ) ||
                    !$target.closest( self.$trigger ).length && !$target.closest( self.$display ).length ) ) {
                    self._hideDisplay();
                }
            };
            $( document ).on( self.options.hideEvent, self._handleGlobalEvent );
        } else {
            if ( this.options.toggle ) {
                this._hideDisplay();
            }
        }
    },

    _hideDisplay: function() {
        this.$display.removeClass( this.show ).addClass( this.hide );
        $( document ).off( this.options.hideEvent, this._handleGlobalEvent );
        this.$display.trigger( 'wp-display-hide' );
        this.$trigger.removeClass( this.options.activeClass );
    },

    _showDisplay: function() {
        this.$display.removeClass( this.hide ).addClass( this.show );
        if ( this.options.positionAround.length ) {
            pos = WebPro.positionElementAroundAnother( this.$trigger, this.$display, this.options.positionAround );
            this.$display.css({ left: pos.x + 'px', top: pos.y + 'px' });
        }
        this.$display.trigger( 'wp-display-show' );
        this.$trigger.addClass( this.options.activeClass );
        if ( this.options.autoFocus ) {
            this.$display.find( 'input[type=text]:first' ).focus();
        }
    },

    _displayIsHidden: function() {
        return !this.$display.hasClass( this.show );
    }

});

})( jQuery, WebPro, window, document );


/**
* wp-swipe-panel-group.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*       * Neither the name of Adobe Systems Incorporated nor the names of its
*             contributors may be used to endorse or promote products derived from this
*             software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined){

function SwipePanelGroupDragTracker( element, options )
{
    options = $.extend( {}, SwipePanelGroupDragTracker.prototype.defaultOptions, options );

    WebPro.DragTracker.call( this, element, options );
}

WebPro.inherit( SwipePanelGroupDragTracker, WebPro.DragTracker );

$.extend( SwipePanelGroupDragTracker.prototype, {
    defaultOptions: {
        angleThreshold: 30,     // angle less than or equal to 90 degrees
        direction: 'horizontal' // horizontal || vertical
    },

    _startDrag: function( e, data ) {
        this._isNativeScroller = $( e.target ).closest( '.scrollable' ).length != 0;
        this._eventTarget = e.target;

        // The default implementation of _startDrag() always
        // returns false to the caller which results in the
        // event getting preventDefault() and stopPropagation()
        // getting called on it. We don't want to do this all
        // the time because it breaks native scroll regions. 
        
        WebPro.DragTracker.prototype._startDrag.call( this, e, data );

        return this._isNativeScroller;
    },

    _handleDrag: function( e, data ) {
        // XXX: When using -webkit-overflow-scrolling:touch on iOS devices, the browser
        //      fires random mousemove events targeted at random elements, and each event
        //      has pageX/pageY/clientX/clientY values that are always zero. This causes
        //      problems because usually touchevents are targeted at the same element until the
        //      user's finger goes up. Filter out the bogus events for now.

        if ( e.target !== this._eventTarget ) {
            return;
        }
 
        // The default implementation of _handleDrag() always returns
        // false to the caller which breaks native scroll regions. What
        // we really want to do, is prevent scrolling until we can figure
        // out if this is a drag we want to actually deal with.

        var dx = e.pageX - this.startX,
            dy = e.pageY - this.startY,
            o = this.options;

        if ( !this.dragStarted ) {
            // If a drag hasn't been started yet, check to see if we've
            // exceeded the drag threshold. If so, then check to see if
            // the angle of the drag is within the angle of tolerance from
            // the axis (horizontal or vertical) we are dragging along.

            var aDX = Math.abs( dx ),
                aDY = Math.abs( dy );

            if ( aDX >= o.dragThreshold || aDY >= o.dragThreshold ) {
                var angle = 360,
                    isHorizontal = o.direction === 'horizontal',
                    rise = isHorizontal ? aDY : aDX,
                    run =  isHorizontal ? aDX : aDY;

                if ( run > 0 ) {
                    angle =  Math.abs( Math.atan( rise / run ) ) * ( 180 / Math.PI );
                }

                if ( angle > o.angleThreshold ) {
                    // The drag exceeds our angle threshold. If the
                    // drag started in a native scrolling view, un-register
                    // our handlers so the scrolling view can take over handling
                    // of the drag events.

                    if ( this._isNativeScroller ) {
                        this._removeDragHandlers();
                    }

                    // If the drag wasn't started in a native scrolling view,
                    // we need to return false so that the current panel
                    // eats this event.

                    return this._isNativeScroller;
                }
            }
        }

        return WebPro.DragTracker.prototype._handleDrag.call( this, e, data );
    },

    _stopDrag: function( e, data ) {
        return WebPro.DragTracker.prototype._stopDrag.call( this, e, data );
    }
});

WebPro.widget( 'Widget.SwipePanelGroup', WebPro.Widget.PanelGroup, {
    _widgetName: 'swipe-panel-group',

    defaultOptions: {
            defaultIndex:  0,
            direction:     'horizontal', // 'horizontal' || 'vertical'
            duration:      300, // msecs
            animateClass:  'wp-animate',
            widgetClass:   'wp-swipe-panel-group',
            viewClass:     'wp-swipe-panel-group-view',
            panelClass:    'wp-swipe-panel-group-panel',
            previousClass: 'wp-previous',
            nextClass:     'wp-next'
        },

    _setUp: function( element, options ) {
        var options = $.extend( {}, this.defaultOptions, options );

        // The first arg of the PanelGroup widget is actually a selector or collection
        // of panel elements. In our case, our first arg is actually the top-level element
        // of the widget which serves as the clip.

        this.$clip = $( element );

        // Find the panels for our widget and then pass them on to our base class constructor.

        var clip = this.$clip[ 0 ],
            $panels = WebPro.scopedFind( clip, '.' + options.panelClass, options.widgetClass, clip );

        // Find the view class we'll use to move the panels around on screen.

        this.$view = WebPro.scopedFind( clip, '.' + options.viewClass, options.widgetClass, clip );

        this._blockShowPanel = true;

        return WebPro.Widget.SwipePanelGroup.prototype._super.prototype._setUp.call( this, $panels, options );
    },

    _attachBehavior: function() {
        WebPro.Widget.SwipePanelGroup.prototype._super.prototype._attachBehavior.apply( this, arguments );

        var widget = this;

        this._blockShowPanel = false;
        this._position = 0;
        this._startPosition = 0;
        this._snapPosition = 0;
        this._lastDelta = 0;
        this._tracker = new SwipePanelGroupDragTracker( this.$clip[ 0 ], {
                startEvent: 'vmousedown',
                updateEvent: 'vmousemove',
                stopEvent: 'vmouseup',
                dragStart: function( dt, dx, dy ) {
                        return widget._handleDragStart( dx, dy );
                    },
                dragUpdate: function( dt, dx, dy ) {
                        return widget._handleDragUpdate( dx, dy );
                    },
                dragStop: function( dt, dx, dy ) {
                        return widget._handleDragStop( dx, dy );
                    }
            });
        this._isHorizontal = this.options.direction !== 'vertical';

        this.$view.on( 'webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function( e ) {
                return widget._handleTransitionEnd( e );
            });
    },

    _ready: function() {
        this._postShowPanel( this.options.defaultIndex );
    },

    _setUpBeforeAndAfterPanels: function() {
        var options = this.options,
            $clip = this.$clip,
            $panels = this.$element,
            curIndex = this.activeIndex,
            beforeIndex = curIndex - 1,
            afterIndex = curIndex + 1,
            $beforeEle = beforeIndex >= 0 ? $panels.eq( beforeIndex ) : $(),
            $currentEle = $panels.eq( curIndex ),
            $afterEle = afterIndex < $panels.length ? $panels.eq( afterIndex ) : $();

        // Remove the animate class so that transitions aren't used
        // when we reposition the next set of panels.

        this.$clip.removeClass( options.animateClass );

        // Hide the old set of views that were visible.

        $panels.removeClass(
                options.activeClass
                + ' ' + options.previousClass
                + ' ' + options.nextClass
            );

        // Reset the position of the view so that it is at zero.

        this._setViewPosition( 0 );

        // Make the active panel and the panels before and
        // after it, visible.

        $beforeEle.addClass( options.previousClass );
        $currentEle.addClass( options.activeClass );
        $afterEle.addClass( options.nextClass );
    },

    _setElementTransform: function( ele, val )
    {
        // XXX: Ideally we would check what browser we're
        //            running in and just set the appropriate transform prop.
    
        $( ele ).css({
            '-webkit-transform': val,
            '-moz-transform': val,
            '-o-transform': val,
            '-ms-transform': val,
            'transform': val
        });
    },

    _setElementPosition: function( ele, position, options ) {
        var x = this._isHorizontal ? position : 0,
            y = this._isHorizontal ? 0 : position,
            opts = $.extend( { unit: 'px' }, options );

        this._setElementTransform( ele, 'translate3d(' + x + opts.unit + ',' + y + opts.unit + ',0)');
    },

    _setViewPosition: function( position ) {
        this._position = position;
        this._setElementPosition( this.$view, position );
    },

    _updateSnapPosition: function( delta ) {
        var length = this._isHorizontal ? this.$clip.width() : this.$clip.height(),
            lastDelta = this._lastDelta;

        if ( lastDelta <= 0 && delta < lastDelta ) {
            this._snapPosition = -length;
        } else if ( lastDelta >= 0 && delta > lastDelta ) {
            this._snapPosition = length;
        } else {
            this._snapPosition = 0;
        }

        // If the user is trying to swipe past the first or last panel
        // make sure we snap back.

        var panelIndex = this.activeIndex;
        if ( ( panelIndex === 0 && this._snapPosition > 0 )
                || ( ( panelIndex + 1 ) === this.$element.length && this._snapPosition < 0 ) ) {
            this._snapPosition = 0;
        }
    },

    _postShowPanel: function( indexOrEle ) {
        // Call the base class showPanel() method so the
        // activeIndex and activeElement get updated.

        WebPro.Widget.SwipePanelGroup.prototype._super.prototype.showPanel.apply( this, arguments );

        // Make sure the panels before and after the
        // activeElement are in place.

        this._setUpBeforeAndAfterPanels();
    },

    showPanel: function( indexOrEle ) {
        if ( this._blockShowPanel ) {
            return;
        }

        if ( typeof indexOrEle != 'number' ) {
            indexOrEle = this._getElementIndex( indexOrEle );
        }
    
        if ( indexOrEle > -1 && indexOrEle !== this.activeIndex ) {
            var length = this._isHorizontal ? this.$clip.width() : this.$clip.height(),
                swipeLeft = indexOrEle > this.activeIndex,
                position = swipeLeft ? -length : length,
                className = swipeLeft ? this.options.nextClass : this.options.previousClass;
;
            this._snapIndex = indexOrEle;

            this.$element.removeClass( className );
            $( this._getElement( indexOrEle) ).addClass( className );

            this._animatePanels( position );
        }
    },

    _handleTransitionEnd: function( e ) {
        this._postShowPanel( this._snapIndex );
        this._tracker.enable();
    },

    _handleDragStart: function( dx, dy ) {
        this.$clip.removeClass( this.options.animateClass );
        this._lastDelta = 0;
        this._startPosition = this._position;
        this._handleDragUpdate( dx, dy );
    },

    _handleDragUpdate: function( dx, dy ) {
        var delta = this._isHorizontal ? dx : dy,
            currentPanelIndex = this.activeIndex;

        // If the user is trying to swipe before the first panel,
        // or after the last panel compress the distance by 60%.

        if ( ( currentPanelIndex === 0 && dx > 0 ) || ( ( currentPanelIndex + 1 ) >= this.$element.length ) ) {
            delta *= .4;
        }

        this._updateSnapPosition( delta );
        this._setViewPosition( this._startPosition + delta );

        this._lastDelta = delta;
    },

    _animatePanels: function( position ) {
        this._tracker.disable();
        this.$clip.addClass( this.options.animateClass );
        this._setViewPosition( position );
    },

    _handleDragStop: function( dx, dy ) {
        this._snapIndex = this.activeIndex;

        if ( this._snapPosition > 0 ) {
            --this._snapIndex;
        }
        else if ( this._snapPosition < 0 ) {
            ++this._snapIndex;
        }

        this._animatePanels( this._snapPosition );
    },
});

$.fn.wpSwipePanelGroup = function( options ) {
    this.each( function() {
            var $this = $( this );

            $this.data( 'wpSwipePanelGroup', new WebPro.Widget.SwipePanelGroup( $this, options ) );
        });
    return this;
};

})( jQuery, WebPro, window, document );


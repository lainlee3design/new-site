/**
* wp-core.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name of Adobe Systems Incorporated nor the names of its
*     contributors may be used to endorse or promote products derived from this
*     software without specific prior written permission.
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
			if ( len > 1 ||  !$.isArray( arguments[ 0 ] ) ) {
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
		//     var scopedFind = function($start, selector, scopeSelector, $scope) {
		//         return $start.find(selector).filter(function() { return $(this).closest(scopeSelector).get(0) == $scope.get(0); })
		//     }
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


//////////////////// Expose WebPro to the World  ////////////////////


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
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name of Adobe Systems Incorporated nor the names of its
*     contributors may be used to endorse or promote products derived from this
*     software without specific prior written permission.
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

/**
* wp-widgets.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name of Adobe Systems Incorporated nor the names of its
*     contributors may be used to endorse or promote products derived from this
*     software without specific prior written permission.
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
* wp-form.js - version 0.1 - WebPro Release 0.1
*
* Copyright (c) 2012. Adobe Systems Incorporated.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name of Adobe Systems Incorporated nor the names of its
*     contributors may be used to endorse or promote products derived from this
*     software without specific prior written permission.
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
	var valid = new WebPro.Widget.Form( this, options );
	return this;
};
	
})( jQuery, WebPro, window, document );

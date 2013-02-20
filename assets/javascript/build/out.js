/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
$(function() {

  $( '.top-button' ).click( function() {
    $( 'html, body' ).animate({
      scrollTop: $( 'body' ).offset().top
    }, 300);
  });

  $( '#newsletter-signup' ).wpForm({
    ajaxSubmit: false
  });

  $( '.search-bar form' ).wpForm({ ajaxSubmit: false });


  $( '.fb-like-box iframe' ).on( 'load', function() {
    $( '.fb-like-wrapper' ).animate({
      height: 256,
      marginBottom: 20
    }, 1000);
  });

  $(".tweets-inner").tweet({
    join_text: "auto",
    username: "lainlee3design",
    fetch: 20,
    count: 3,
    filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
    template: "{time} {text}"
  });

  $( '.collab-contact' ).click( function( evt ) {
      var $form = $( '#contact form' )
          $item = $( this ).closest( '.collab-item' ),
          title = $item.find( 'h3:first' ).text(),
          $message = $form.find( '[name=text]' );

      $message.text( "Responding to " + title + " - " );
  });

  var scrollTo = function( $el ) {
    $( 'html, body' ).animate({
      scrollTop: $el.offset().top
    }, 300);
  }

  var initialHash = window.location.hash.substring(1);
  if ( initialHash ) {
    scrollTo( $( '#' + initialHash ) );
  }

  $( '[data-scroll-to]' ).click( function( evt ) {
    console.log('test');
    var $this = $( this ),
      id = $this.attr( 'data-scroll-to' ),
      $target = $( id );

    if ( $target.length ) {
      evt.preventDefault();
      $( 'html, body' ).animate({ scrollTop: $target.offset().top }, 300 );
    }
  });

  $( '.top.button' ).click( function( evt ) {
    evt.preventDefault();
    scrollTo( $( 'body' ) );
  });

});

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


// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); // AMD support for RequireJS etc.
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
      outro_text: null,                         // [string]   do you want text AFTER your tweets?
      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
      auto_join_text_default: " I said, ",      // [string]   auto text for non verb: "I said" bullocks
      auto_join_text_ed: " I ",                 // [string]   auto text for past tense: "I" surfed
      auto_join_text_ing: " I am ",             // [string]   auto tense for present tense: "I was" surfing
      auto_join_text_reply: " I replied to ",   // [string]   auto tense for replies: "I replied to" @someone "with"
      auto_join_text_url: " I was looking at ", // [string]   auto tense for urls: "I was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null,                   // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join} {text}",  // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2["tweet_time"] - tweet1["tweet_time"];
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
      // You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
      //   "loaded" -- triggered when tweets have been fetched and rendered
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.split('{'+key+'}').join(val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+
                         ((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+
                         '" class="tweet_hashtag">#$1</a>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
      });
    }

    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function extract_relative_time(date) {
      var toInt = function(val) { return parseInt(val, 10); };
      var relative_to = new Date();
      var delta = toInt((relative_to.getTime() - date) / 1000);
      if (delta < 1) delta = 0;
      return {
        days:    toInt(delta / 86400),
        hours:   toInt(delta / 3600),
        minutes: toInt(delta / 60),
        seconds: toInt(delta)
      };
    }

    function format_relative_time(time_ago) {
      if ( time_ago.days > 2 )     return 'about ' + time_ago.days + ' days ago';
      if ( time_ago.hours > 24 )   return 'about a day ago';
      if ( time_ago.hours > 2 )    return 'about ' + time_ago.hours + ' hours ago';
      if ( time_ago.minutes > 45 ) return 'about an hour ago';
      if ( time_ago.minutes > 2 )  return 'about ' + time_ago.minutes + ' minutes ago';
      if ( time_ago.seconds > 1 )  return 'about ' + time_ago.seconds + ' seconds ago';
      return 'just now';
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .*/im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .*/i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }

    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/1/favorites.json?screen_name="+s.username[0]+"&page="+s.page+"&count="+count+common_params;
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      // The actual user name is not returned by all Twitter APIs, so please do not
      // file an issue if it is empty:
      o.name = item.from_user_name || item.user.name;
      o.retweet = typeof(item.retweeted_status) != 'undefined';

      o.tweet_time = parse_date(item.created_at);
      o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = format_relative_time(extract_relative_time(o.tweet_time));
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.retweeted_tweet_text = $([linkURLs(item.text, o.entities)]).linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(o.retweet ? item.retweeted_status : item, (document.location.protocol === 'https:'));
      o.avatar_screen_name = o.retweet ? o.retweeted_screen_name : o.screen_name;
      o.avatar_profile_url = o.twitter_base+o.avatar_screen_name;

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.join = s.join_text ? t('<span class="tweet_join">{join_text}</span>', o) : '';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
      o.retweeted_text = t('<span class="tweet_text">{retweeted_tweet_text}</span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
      return o;
    }

    function render_tweets(widget, tweets) {
      var list = $('<ul class="tweet_list">');
      list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
        children('li:first').addClass('tweet_first').end().
        children('li:odd').addClass('tweet_even').end().
        children('li:even').addClass('tweet_odd');

      $(widget).empty().append(list);
      if (s.intro_text) list.before('<p class="tweet_intro">'+s.intro_text+'</p>');
      if (s.outro_text) list.after('<p class="tweet_outro">'+s.outro_text+'</p>');

      $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
      if (s.refresh_interval) {
        window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
      }
    }

    function load(widget) {
      var loading = $('<p class="loading">'+s.loading_text+'</p>');
      if (s.loading_text) $(widget).not(":has(.tweet_list)").empty().append(loading);
      $.getJSON(build_api_url(), function(data){
        var tweets = $.map(data.results || data, extract_template_data);
        tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
        $(widget).trigger("tweet:retrieved", [tweets]);
      });
    }

    return this.each(function(i, widget){
      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").
        bind({
          "tweet:load": function() { load(widget); },
          "tweet:retrieved": function(ev, tweets) {
            $(widget).trigger("tweet:render", [tweets])
          },
          "tweet:render": function(ev, tweets) {
            render_tweets($(widget), tweets);
          }
        }).trigger("tweet:load");
    });
  };
}));


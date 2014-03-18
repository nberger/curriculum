/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c,g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal = (function(){

	'use strict';

	var SLIDES_SELECTOR = '.reveal .slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
		VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

		// Configurations defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: null,

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// A delay used to activate the overview mode
		activateOverviewTimeout = 0,

		// A delay used to deactivate the overview mode
		deactivateOverviewTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

	}


    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Cache references to key DOM elements
		dom.theme = document.querySelector( '#theme' );
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// State background element [DEPRECATED]
		createSingletonNode( dom.wrapper, 'div', 'state-background', null );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		var node = container.querySelector( '.' + classname );
		if( !node ) {
			node = document.createElement( tagname );
			node.classList.add( classname );
			if( innerHTML !== null ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );
		}
		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		if( isPrintingPDF() ) {
			document.body.classList.add( 'print-pdf' );
		}

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Helper method for creating a background element for the
		// given slide
		function _createBackground( slide, container ) {

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' )
			};

			var element = document.createElement( 'div' );
			element.className = 'slide-background';

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
					element.style.backgroundImage = 'url('+ data.background +')';
				}
				else {
					element.style.background = data.background;
				}
			}

			if( data.background || data.backgroundColor || data.backgroundImage ) {
				element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
			if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			container.appendChild( element );

			return element;

		}

		// Iterate over all horizontal slides
		toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( isPrintingPDF() ) {
				backgroundStack = _createBackground( slideh, slideh );
			}
			else {
				backgroundStack = _createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( isPrintingPDF() ) {
					_createBackground( slidev, slidev );
				}
				else {
					_createBackground( slidev, backgroundStack );
				}

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Auto-slide playback controls
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}
		else if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Load the theme in the config, if it's not already loaded
		if( config.theme && dom.theme ) {
			var themeURL = dom.theme.getAttribute( 'href' );
			var themeFinder = /[^\/]*?(?=\.css)/;
			var themeName = themeURL.match(themeFinder)[0];

			if(  config.theme !== themeName ) {
				themeURL = themeURL.replace(themeFinder, config.theme);
				dom.theme.setAttribute( 'href', themeURL );
			}
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisiblityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( child.style.position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element after subtracting the height of all
	 * siblings.
	 *
	 * remaining height = [parent height] - [ siblings height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var parent = element.parentNode;
			var siblings = parent.childNodes;

			// Subtract the height of each sibling
			toArray( siblings ).forEach( function( sibling ) {

				if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

					var styles = window.getComputedStyle( sibling ),
						marginTop = parseInt( styles.marginTop, 10 ),
						marginBottom = parseInt( styles.marginBottom, 10 );

					height -= sibling.offsetHeight + marginTop + marginBottom;

				}

			} );

			var elementStyles = window.getComputedStyle( element );

			// Subtract the margins of the target element
			height -= parseInt( elementStyles.marginTop, 10 ) +
						parseInt( elementStyles.marginBottom, 10 );

		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, properties ) {

		var event = document.createEvent( "HTMLEvents", 1, 2 );
		event.initEvent( type, true, true );
		extend( event, properties );
		dom.wrapper.dispatchEvent( event );

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function openPreview( url ) {

		closePreview();

		dom.preview = document.createElement( 'div' );
		dom.preview.classList.add( 'preview-link-overlay' );
		dom.wrapper.appendChild( dom.preview );

		dom.preview.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.preview.classList.add( 'loaded' );
		}, false );

		dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closePreview();
			event.preventDefault();
		}, false );

		dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closePreview();
		}, false );

		setTimeout( function() {
			dom.preview.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Closes the iframe preview window.
	 */
	function closePreview() {

		if( dom.preview ) {
			dom.preview.setAttribute( 'src', '' );
			dom.preview.parentNode.removeChild( dom.preview );
			dom.preview = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			// Available space to scale within
			var availableWidth = dom.wrapper.offsetWidth,
				availableHeight = dom.wrapper.offsetHeight;

			// Reduce available space by margin
			availableWidth -= ( availableHeight * config.margin );
			availableHeight -= ( availableHeight * config.margin );

			// Dimensions of the content
			var slideWidth = config.width,
				slideHeight = config.height,
				slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			// Slide width may be a percentage of available width
			if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
				slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
				slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
			}

			dom.slides.style.width = slideWidth + 'px';
			dom.slides.style.height = slideHeight + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Prefer applying scale via zoom since Chrome blurs scaled content
			// with nested transforms
			if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
				dom.slides.style.zoom = scale;
			}
			// Apply scale transform as a fallback
			else {
				transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by
	 * scaling down and arranging all slide elements.
	 *
	 * Experimental feature, might be dropped if perf
	 * can't be improved.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			var wasActive = dom.wrapper.classList.contains( 'overview' );

			// Vary the depth of the overview based on screen size
			var depth = window.innerWidth < 400 ? 1000 : 2500;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			// Not the pretties solution, but need to let the overview
			// class apply first so that slides are measured accurately
			// before we can position them
			activateOverviewTimeout = setTimeout( function() {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

				for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
					var hslide = horizontalSlides[i],
						hoffset = config.rtl ? -105 : 105;

					hslide.setAttribute( 'data-index-h', i );

					// Apply CSS transform
					transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

					if( hslide.classList.contains( 'stack' ) ) {

						var verticalSlides = hslide.querySelectorAll( 'section' );

						for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
							var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

							var vslide = verticalSlides[j];

							vslide.setAttribute( 'data-index-h', i );
							vslide.setAttribute( 'data-index-v', j );

							// Apply CSS transform
							transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

							// Navigate to this slide on click
							vslide.addEventListener( 'click', onOverviewSlideClicked, true );
						}

					}
					else {

						// Navigate to this slide on click
						hslide.addEventListener( 'click', onOverviewSlideClicked, true );

					}
				}

				updateSlidesVisibility();

				layout();

				if( !wasActive ) {
					// Notify observers of the overview showing
					dispatchEvent( 'overviewshown', {
						'indexh': indexh,
						'indexv': indexv,
						'currentSlide': currentSlide
					} );
				}

			}, 10 );

		}

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			dom.wrapper.classList.remove( 'overview' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			deactivateOverviewTimeout = setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Select all slides
			toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				// Resets all transforms to use the external styles
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			slide( indexh, indexv );

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return dom.wrapper.classList.contains( 'overview' );

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullScreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );

		cancelAutoSlide();
		dom.wrapper.classList.add( 'paused' );

		if( wasPaused === false ) {
			dispatchEvent( 'paused' );
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause() {

		if( isPaused() ) {
			resume();
		}
		else {
			pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// If the overview is active, re-activate it to update positions
		if( isOverview() ) {
			activateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( document.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

					// Show all fragments on prior slides
					while( pastFragments.length ) {
						var pastFragment = pastFragments.pop();
						pastFragment.classList.add( 'visible' );
						pastFragment.classList.remove( 'current-fragment' );
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

					// No fragments in future slides should be visible ahead of time
					while( futureFragments.length ) {
						var futureFragment = futureFragments.pop();
						futureFragment.classList.remove( 'visible' );
						futureFragment.classList.remove( 'current-fragment' );
					}
				}

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 1;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Loops so that it measures 1 between the first and last slides
				distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

				// Show the horizontal slide if it's within the view distance
				horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

						verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progress ) {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past and total slides
			var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Display the number of the page using 'indexh - indexv' format
			var indexString = indexh;
			if( indexv > 0 ) {
				indexString += ' - ' + indexv;
			}

			dom.slideNumber.innerHTML = indexString;
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			if( h < indexh ) {
				backgroundh.className = 'slide-background ' + horizontalPast;
			}
			else if ( h > indexh ) {
				backgroundh.className = 'slide-background ' + horizontalFuture;
			}
			else {
				backgroundh.className = 'slide-background present';

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

					if( v < indexv ) {
						backgroundv.className = 'slide-background past';
					}
					else if ( v > indexv ) {
						backgroundv.className = 'slide-background future';
					}
					else {
						backgroundv.className = 'slide-background present';

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Don't transition between identical backgrounds. This
		// prevents unwanted flicker.
		if( currentBackground ) {
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth;
			var horizontalSlideCount = horizontalSlides.length;
			var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

			var slideHeight = dom.background.offsetHeight;
			var verticalSlideCount = verticalSlides.length;
			var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.play();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:start', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) ) {
					el.pause();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			// Find the slide with the specified name
			var element = document.querySelector( '#' + name );

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else {
				var url = '/';

				// If the current slide has an ID, use that as a named link
				if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
					url = '/' + currentSlide.getAttribute( 'id' );
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
				f = visibleFragments.length - 1;
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current slide's data-autoslide
			// 2. Parent slide's data-autoslide
			// 3. Global autoSlide setting
			if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media
			toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					if( autoSlide && el.duration * 1000 > autoSlide ) {
						autoSlide = ( el.duration * 1000 ) + 1000;
					}
				}
			} );

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		autoSlidePaused = true;
		clearTimeout( autoSlideTimeout );

		if( autoSlidePlayer ) {
			autoSlidePlayer.setPlaying( false );
		}

	}

	function resumeAutoSlide() {

		autoSlidePaused = false;
		cueAutoSlide();

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * Same as #navigatePrev() but navigates forwards.
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			availableRoutes().down ? navigateDown() : navigateRight();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// b, period, Logitech presenter tools "black screen" button
				case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.preview ) {
				closePreview();
			}
			else {
				toggleOverview();
			}

			event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			document.activeElement.blur();
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		var url = event.target.getAttribute( 'href' );
		if( url ) {
			openPreview( url );
			event.preventDefault();
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	return {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns the slide at the specified index, y is optional
		getSlide: function( x, y ) {
			var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( typeof y !== 'undefined' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;
		},

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = unescape( value );

				if( value === 'null' ) query[ i ] = null;
				else if( value === 'true' ) query[ i ] = true;
				else if( value === 'false' ) query[ i ] = false;
				else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		}
	};

})();

var CLOSURE_NO_DEPS=true;var COMPILED=false;var goog=goog||{};goog.global=this;goog.DEBUG=true;goog.LOCALE="en";goog.TRUSTED_SITE=true;goog.provide=function(name){if(!COMPILED){if(goog.isProvided_(name))throw Error('Namespace "'+name+'" already declared.');delete goog.implicitNamespaces_[name];var namespace=name;while(namespace=namespace.substring(0,namespace.lastIndexOf("."))){if(goog.getObjectByName(namespace))break;goog.implicitNamespaces_[namespace]=true}}goog.exportPath_(name)};
goog.setTestOnly=function(opt_message){if(COMPILED&&!goog.DEBUG){opt_message=opt_message||"";throw Error("Importing test-only code into non-debug environment"+opt_message?": "+opt_message:".");}};if(!COMPILED){goog.isProvided_=function(name){return!goog.implicitNamespaces_[name]&&!!goog.getObjectByName(name)};goog.implicitNamespaces_={}}
goog.exportPath_=function(name,opt_object,opt_objectToExportTo){var parts=name.split(".");var cur=opt_objectToExportTo||goog.global;if(!(parts[0]in cur)&&cur.execScript)cur.execScript("var "+parts[0]);for(var part;parts.length&&(part=parts.shift());)if(!parts.length&&goog.isDef(opt_object))cur[part]=opt_object;else if(cur[part])cur=cur[part];else cur=cur[part]={}};
goog.getObjectByName=function(name,opt_obj){var parts=name.split(".");var cur=opt_obj||goog.global;for(var part;part=parts.shift();)if(goog.isDefAndNotNull(cur[part]))cur=cur[part];else return null;return cur};goog.globalize=function(obj,opt_global){var global=opt_global||goog.global;for(var x in obj)global[x]=obj[x]};
goog.addDependency=function(relPath,provides,requires){if(!COMPILED){var provide,require;var path=relPath.replace(/\\/g,"/");var deps=goog.dependencies_;for(var i=0;provide=provides[i];i++){deps.nameToPath[provide]=path;if(!(path in deps.pathToNames))deps.pathToNames[path]={};deps.pathToNames[path][provide]=true}for(var j=0;require=requires[j];j++){if(!(path in deps.requires))deps.requires[path]={};deps.requires[path][require]=true}}};goog.ENABLE_DEBUG_LOADER=true;
goog.require=function(name){if(!COMPILED){if(goog.isProvided_(name))return;if(goog.ENABLE_DEBUG_LOADER){var path=goog.getPathFromDeps_(name);if(path){goog.included_[path]=true;goog.writeScripts_();return}}var errorMessage="goog.require could not find: "+name;if(goog.global.console)goog.global.console["error"](errorMessage);throw Error(errorMessage);}};goog.basePath="";goog.global.CLOSURE_BASE_PATH;goog.global.CLOSURE_NO_DEPS;goog.global.CLOSURE_IMPORT_SCRIPT;goog.nullFunction=function(){};
goog.identityFunction=function(opt_returnValue,var_args){return opt_returnValue};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(ctor){ctor.getInstance=function(){if(ctor.instance_)return ctor.instance_;if(goog.DEBUG)goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=ctor;return ctor.instance_=new ctor}};goog.instantiatedSingletons_=[];
if(!COMPILED&&goog.ENABLE_DEBUG_LOADER){goog.included_={};goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}};goog.inHtmlDocument_=function(){var doc=goog.global.document;return typeof doc!="undefined"&&"write"in doc};goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH){goog.basePath=goog.global.CLOSURE_BASE_PATH;return}else if(!goog.inHtmlDocument_())return;var doc=goog.global.document;var scripts=doc.getElementsByTagName("script");for(var i=scripts.length-
1;i>=0;--i){var src=scripts[i].src;var qmark=src.lastIndexOf("?");var l=qmark==-1?src.length:qmark;if(src.substr(l-7,7)=="base.js"){goog.basePath=src.substr(0,l-7);return}}};goog.importScript_=function(src){var importScript=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;if(!goog.dependencies_.written[src]&&importScript(src))goog.dependencies_.written[src]=true};goog.writeScriptTag_=function(src){if(goog.inHtmlDocument_()){var doc=goog.global.document;if(doc.readyState=="complete"){var isDeps=
/\bdeps.js$/.test(src);if(isDeps)return false;else throw Error('Cannot write "'+src+'" after document load');}doc.write('\x3cscript type\x3d"text/javascript" src\x3d"'+src+'"\x3e\x3c/'+"script\x3e");return true}else return false};goog.writeScripts_=function(){var scripts=[];var seenScript={};var deps=goog.dependencies_;function visitNode(path){if(path in deps.written)return;if(path in deps.visited){if(!(path in seenScript)){seenScript[path]=true;scripts.push(path)}return}deps.visited[path]=true;if(path in
deps.requires)for(var requireName in deps.requires[path])if(!goog.isProvided_(requireName))if(requireName in deps.nameToPath)visitNode(deps.nameToPath[requireName]);else throw Error("Undefined nameToPath for "+requireName);if(!(path in seenScript)){seenScript[path]=true;scripts.push(path)}}for(var path in goog.included_)if(!deps.written[path])visitNode(path);for(var i=0;i<scripts.length;i++)if(scripts[i])goog.importScript_(goog.basePath+scripts[i]);else throw Error("Undefined script input");};goog.getPathFromDeps_=
function(rule){if(rule in goog.dependencies_.nameToPath)return goog.dependencies_.nameToPath[rule];else return null};goog.findBasePath_();if(!goog.global.CLOSURE_NO_DEPS)goog.importScript_(goog.basePath+"deps.js")}
goog.typeOf=function(value){var s=typeof value;if(s=="object")if(value){if(value instanceof Array)return"array";else if(value instanceof Object)return s;var className=Object.prototype.toString.call((value));if(className=="[object Window]")return"object";if(className=="[object Array]"||typeof value.length=="number"&&(typeof value.splice!="undefined"&&(typeof value.propertyIsEnumerable!="undefined"&&!value.propertyIsEnumerable("splice"))))return"array";if(className=="[object Function]"||typeof value.call!=
"undefined"&&(typeof value.propertyIsEnumerable!="undefined"&&!value.propertyIsEnumerable("call")))return"function"}else return"null";else if(s=="function"&&typeof value.call=="undefined")return"object";return s};goog.isDef=function(val){return val!==undefined};goog.isNull=function(val){return val===null};goog.isDefAndNotNull=function(val){return val!=null};goog.isArray=function(val){return goog.typeOf(val)=="array"};
goog.isArrayLike=function(val){var type=goog.typeOf(val);return type=="array"||type=="object"&&typeof val.length=="number"};goog.isDateLike=function(val){return goog.isObject(val)&&typeof val.getFullYear=="function"};goog.isString=function(val){return typeof val=="string"};goog.isBoolean=function(val){return typeof val=="boolean"};goog.isNumber=function(val){return typeof val=="number"};goog.isFunction=function(val){return goog.typeOf(val)=="function"};
goog.isObject=function(val){var type=typeof val;return type=="object"&&val!=null||type=="function"};goog.getUid=function(obj){return obj[goog.UID_PROPERTY_]||(obj[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(obj){if("removeAttribute"in obj)obj.removeAttribute(goog.UID_PROPERTY_);try{delete obj[goog.UID_PROPERTY_]}catch(ex){}};goog.UID_PROPERTY_="closure_uid_"+(Math.random()*1E9>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;
goog.cloneObject=function(obj){var type=goog.typeOf(obj);if(type=="object"||type=="array"){if(obj.clone)return obj.clone();var clone=type=="array"?[]:{};for(var key in obj)clone[key]=goog.cloneObject(obj[key]);return clone}return obj};goog.bindNative_=function(fn,selfObj,var_args){return(fn.call.apply(fn.bind,arguments))};
goog.bindJs_=function(fn,selfObj,var_args){if(!fn)throw new Error;if(arguments.length>2){var boundArgs=Array.prototype.slice.call(arguments,2);return function(){var newArgs=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(newArgs,boundArgs);return fn.apply(selfObj,newArgs)}}else return function(){return fn.apply(selfObj,arguments)}};
goog.bind=function(fn,selfObj,var_args){if(Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1)goog.bind=goog.bindNative_;else goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};goog.partial=function(fn,var_args){var args=Array.prototype.slice.call(arguments,1);return function(){var newArgs=Array.prototype.slice.call(arguments);newArgs.unshift.apply(newArgs,args);return fn.apply(this,newArgs)}};
goog.mixin=function(target,source){for(var x in source)target[x]=source[x]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(script){if(goog.global.execScript)goog.global.execScript(script,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _et_ \x3d 1;");if(typeof goog.global["_et_"]!="undefined"){delete goog.global["_et_"];goog.evalWorksForGlobals_=true}else goog.evalWorksForGlobals_=false}if(goog.evalWorksForGlobals_)goog.global.eval(script);else{var doc=goog.global.document;var scriptElt=doc.createElement("script");scriptElt.type="text/javascript";
scriptElt.defer=false;scriptElt.appendChild(doc.createTextNode(script));doc.body.appendChild(scriptElt);doc.body.removeChild(scriptElt)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.cssNameMapping_;goog.cssNameMappingStyle_;
goog.getCssName=function(className,opt_modifier){var getMapping=function(cssName){return goog.cssNameMapping_[cssName]||cssName};var renameByParts=function(cssName){var parts=cssName.split("-");var mapped=[];for(var i=0;i<parts.length;i++)mapped.push(getMapping(parts[i]));return mapped.join("-")};var rename;if(goog.cssNameMapping_)rename=goog.cssNameMappingStyle_=="BY_WHOLE"?getMapping:renameByParts;else rename=function(a){return a};if(opt_modifier)return className+"-"+rename(opt_modifier);else return rename(className)};
goog.setCssNameMapping=function(mapping,opt_style){goog.cssNameMapping_=mapping;goog.cssNameMappingStyle_=opt_style};goog.global.CLOSURE_CSS_NAME_MAPPING;if(!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING)goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING;goog.getMsg=function(str,opt_values){var values=opt_values||{};for(var key in values){var value=(""+values[key]).replace(/\$/g,"$$$$");str=str.replace(new RegExp("\\{\\$"+key+"\\}","gi"),value)}return str};
goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(publicPath,object,opt_objectToExportTo){goog.exportPath_(publicPath,object,opt_objectToExportTo)};goog.exportProperty=function(object,publicName,symbol){object[publicName]=symbol};goog.inherits=function(childCtor,parentCtor){function tempCtor(){}tempCtor.prototype=parentCtor.prototype;childCtor.superClass_=parentCtor.prototype;childCtor.prototype=new tempCtor;childCtor.prototype.constructor=childCtor};
goog.base=function(me,opt_methodName,var_args){var caller=arguments.callee.caller;if(caller.superClass_)return caller.superClass_.constructor.apply(me,Array.prototype.slice.call(arguments,1));var args=Array.prototype.slice.call(arguments,2);var foundCaller=false;for(var ctor=me.constructor;ctor;ctor=ctor.superClass_&&ctor.superClass_.constructor)if(ctor.prototype[opt_methodName]===caller)foundCaller=true;else if(foundCaller)return ctor.prototype[opt_methodName].apply(me,args);if(me[opt_methodName]===
caller)return me.constructor.prototype[opt_methodName].apply(me,args);else throw Error("goog.base called from a method of one name "+"to a method of a different name");};goog.scope=function(fn){fn.call(goog.global)};goog.provide("goog.string");goog.provide("goog.string.Unicode");goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(str,prefix){return str.lastIndexOf(prefix,0)==0};goog.string.endsWith=function(str,suffix){var l=str.length-suffix.length;return l>=0&&str.indexOf(suffix,l)==l};goog.string.caseInsensitiveStartsWith=function(str,prefix){return goog.string.caseInsensitiveCompare(prefix,str.substr(0,prefix.length))==0};
goog.string.caseInsensitiveEndsWith=function(str,suffix){return goog.string.caseInsensitiveCompare(suffix,str.substr(str.length-suffix.length,suffix.length))==0};goog.string.subs=function(str,var_args){for(var i=1;i<arguments.length;i++){var replacement=String(arguments[i]).replace(/\$/g,"$$$$");str=str.replace(/\%s/,replacement)}return str};goog.string.collapseWhitespace=function(str){return str.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmpty=function(str){return/^[\s\xa0]*$/.test(str)};
goog.string.isEmptySafe=function(str){return goog.string.isEmpty(goog.string.makeSafe(str))};goog.string.isBreakingWhitespace=function(str){return!/[^\t\n\r ]/.test(str)};goog.string.isAlpha=function(str){return!/[^a-zA-Z]/.test(str)};goog.string.isNumeric=function(str){return!/[^0-9]/.test(str)};goog.string.isAlphaNumeric=function(str){return!/[^a-zA-Z0-9]/.test(str)};goog.string.isSpace=function(ch){return ch==" "};
goog.string.isUnicodeChar=function(ch){return ch.length==1&&(ch>=" "&&ch<="~")||ch>="\u0080"&&ch<="\ufffd"};goog.string.stripNewlines=function(str){return str.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(str){return str.replace(/(\r\n|\r|\n)/g,"\n")};goog.string.normalizeWhitespace=function(str){return str.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(str){return str.replace(/\xa0|[ \t]+/g," ")};
goog.string.collapseBreakingSpaces=function(str){return str.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=function(str){return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(str){return str.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(str){return str.replace(/[\s\xa0]+$/,"")};
goog.string.caseInsensitiveCompare=function(str1,str2){var test1=String(str1).toLowerCase();var test2=String(str2).toLowerCase();if(test1<test2)return-1;else if(test1==test2)return 0;else return 1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(str1,str2){if(str1==str2)return 0;if(!str1)return-1;if(!str2)return 1;var tokens1=str1.toLowerCase().match(goog.string.numerateCompareRegExp_);var tokens2=str2.toLowerCase().match(goog.string.numerateCompareRegExp_);var count=Math.min(tokens1.length,tokens2.length);for(var i=0;i<count;i++){var a=tokens1[i];var b=tokens2[i];if(a!=b){var num1=parseInt(a,10);if(!isNaN(num1)){var num2=parseInt(b,10);if(!isNaN(num2)&&num1-num2)return num1-num2}return a<b?-1:1}}if(tokens1.length!=
tokens2.length)return tokens1.length-tokens2.length;return str1<str2?-1:1};goog.string.urlEncode=function(str){return encodeURIComponent(String(str))};goog.string.urlDecode=function(str){return decodeURIComponent(str.replace(/\+/g," "))};goog.string.newLineToBr=function(str,opt_xml){return str.replace(/(\r\n|\r|\n)/g,opt_xml?"\x3cbr /\x3e":"\x3cbr\x3e")};
goog.string.htmlEscape=function(str,opt_isLikelyToContainHtmlChars){if(opt_isLikelyToContainHtmlChars)return str.replace(goog.string.amperRe_,"\x26amp;").replace(goog.string.ltRe_,"\x26lt;").replace(goog.string.gtRe_,"\x26gt;").replace(goog.string.quotRe_,"\x26quot;");else{if(!goog.string.allRe_.test(str))return str;if(str.indexOf("\x26")!=-1)str=str.replace(goog.string.amperRe_,"\x26amp;");if(str.indexOf("\x3c")!=-1)str=str.replace(goog.string.ltRe_,"\x26lt;");if(str.indexOf("\x3e")!=-1)str=str.replace(goog.string.gtRe_,
"\x26gt;");if(str.indexOf('"')!=-1)str=str.replace(goog.string.quotRe_,"\x26quot;");return str}};goog.string.amperRe_=/&/g;goog.string.ltRe_=/</g;goog.string.gtRe_=/>/g;goog.string.quotRe_=/\"/g;goog.string.allRe_=/[&<>\"]/;goog.string.unescapeEntities=function(str){if(goog.string.contains(str,"\x26"))if("document"in goog.global)return goog.string.unescapeEntitiesUsingDom_(str);else return goog.string.unescapePureXmlEntities_(str);return str};
goog.string.unescapeEntitiesUsingDom_=function(str){var seen={"\x26amp;":"\x26","\x26lt;":"\x3c","\x26gt;":"\x3e","\x26quot;":'"'};var div=document.createElement("div");return str.replace(goog.string.HTML_ENTITY_PATTERN_,function(s,entity){var value=seen[s];if(value)return value;if(entity.charAt(0)=="#"){var n=Number("0"+entity.substr(1));if(!isNaN(n))value=String.fromCharCode(n)}if(!value){div.innerHTML=s+" ";value=div.firstChild.nodeValue.slice(0,-1)}return seen[s]=value})};
goog.string.unescapePureXmlEntities_=function(str){return str.replace(/&([^;]+);/g,function(s,entity){switch(entity){case "amp":return"\x26";case "lt":return"\x3c";case "gt":return"\x3e";case "quot":return'"';default:if(entity.charAt(0)=="#"){var n=Number("0"+entity.substr(1));if(!isNaN(n))return String.fromCharCode(n)}return s}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(str,opt_xml){return goog.string.newLineToBr(str.replace(/  /g," \x26#160;"),opt_xml)};
goog.string.stripQuotes=function(str,quoteChars){var length=quoteChars.length;for(var i=0;i<length;i++){var quoteChar=length==1?quoteChars:quoteChars.charAt(i);if(str.charAt(0)==quoteChar&&str.charAt(str.length-1)==quoteChar)return str.substring(1,str.length-1)}return str};
goog.string.truncate=function(str,chars,opt_protectEscapedCharacters){if(opt_protectEscapedCharacters)str=goog.string.unescapeEntities(str);if(str.length>chars)str=str.substring(0,chars-3)+"...";if(opt_protectEscapedCharacters)str=goog.string.htmlEscape(str);return str};
goog.string.truncateMiddle=function(str,chars,opt_protectEscapedCharacters,opt_trailingChars){if(opt_protectEscapedCharacters)str=goog.string.unescapeEntities(str);if(opt_trailingChars&&str.length>chars){if(opt_trailingChars>chars)opt_trailingChars=chars;var endPoint=str.length-opt_trailingChars;var startPoint=chars-opt_trailingChars;str=str.substring(0,startPoint)+"..."+str.substring(endPoint)}else if(str.length>chars){var half=Math.floor(chars/2);var endPos=str.length-half;half+=chars%2;str=str.substring(0,
half)+"..."+str.substring(endPos)}if(opt_protectEscapedCharacters)str=goog.string.htmlEscape(str);return str};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(s){s=String(s);if(s.quote)return s.quote();else{var sb=['"'];for(var i=0;i<s.length;i++){var ch=s.charAt(i);var cc=ch.charCodeAt(0);sb[i+1]=goog.string.specialEscapeChars_[ch]||(cc>31&&cc<127?ch:goog.string.escapeChar(ch))}sb.push('"');return sb.join("")}};goog.string.escapeString=function(str){var sb=[];for(var i=0;i<str.length;i++)sb[i]=goog.string.escapeChar(str.charAt(i));return sb.join("")};
goog.string.escapeChar=function(c){if(c in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[c];if(c in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[c]=goog.string.specialEscapeChars_[c];var rv=c;var cc=c.charCodeAt(0);if(cc>31&&cc<127)rv=c;else{if(cc<256){rv="\\x";if(cc<16||cc>256)rv+="0"}else{rv="\\u";if(cc<4096)rv+="0"}rv+=cc.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[c]=rv};
goog.string.toMap=function(s){var rv={};for(var i=0;i<s.length;i++)rv[s.charAt(i)]=true;return rv};goog.string.contains=function(s,ss){return s.indexOf(ss)!=-1};goog.string.countOf=function(s,ss){return s&&ss?s.split(ss).length-1:0};goog.string.removeAt=function(s,index,stringLength){var resultStr=s;if(index>=0&&(index<s.length&&stringLength>0))resultStr=s.substr(0,index)+s.substr(index+stringLength,s.length-index-stringLength);return resultStr};
goog.string.remove=function(s,ss){var re=new RegExp(goog.string.regExpEscape(ss),"");return s.replace(re,"")};goog.string.removeAll=function(s,ss){var re=new RegExp(goog.string.regExpEscape(ss),"g");return s.replace(re,"")};goog.string.regExpEscape=function(s){return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(string,length){return(new Array(length+1)).join(string)};
goog.string.padNumber=function(num,length,opt_precision){var s=goog.isDef(opt_precision)?num.toFixed(opt_precision):String(num);var index=s.indexOf(".");if(index==-1)index=s.length;return goog.string.repeat("0",Math.max(0,length-index))+s};goog.string.makeSafe=function(obj){return obj==null?"":String(obj)};goog.string.buildString=function(var_args){return Array.prototype.join.call(arguments,"")};
goog.string.getRandomString=function(){var x=2147483648;return Math.floor(Math.random()*x).toString(36)+Math.abs(Math.floor(Math.random()*x)^goog.now()).toString(36)};
goog.string.compareVersions=function(version1,version2){var order=0;var v1Subs=goog.string.trim(String(version1)).split(".");var v2Subs=goog.string.trim(String(version2)).split(".");var subCount=Math.max(v1Subs.length,v2Subs.length);for(var subIdx=0;order==0&&subIdx<subCount;subIdx++){var v1Sub=v1Subs[subIdx]||"";var v2Sub=v2Subs[subIdx]||"";var v1CompParser=new RegExp("(\\d*)(\\D*)","g");var v2CompParser=new RegExp("(\\d*)(\\D*)","g");do{var v1Comp=v1CompParser.exec(v1Sub)||["","",""];var v2Comp=
v2CompParser.exec(v2Sub)||["","",""];if(v1Comp[0].length==0&&v2Comp[0].length==0)break;var v1CompNum=v1Comp[1].length==0?0:parseInt(v1Comp[1],10);var v2CompNum=v2Comp[1].length==0?0:parseInt(v2Comp[1],10);order=goog.string.compareElements_(v1CompNum,v2CompNum)||(goog.string.compareElements_(v1Comp[2].length==0,v2Comp[2].length==0)||goog.string.compareElements_(v1Comp[2],v2Comp[2]))}while(order==0)}return order};
goog.string.compareElements_=function(left,right){if(left<right)return-1;else if(left>right)return 1;return 0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(str){var result=0;for(var i=0;i<str.length;++i){result=31*result+str.charCodeAt(i);result%=goog.string.HASHCODE_MAX_}return result};goog.string.uniqueStringCounter_=Math.random()*2147483648|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(str){var num=Number(str);if(num==0&&goog.string.isEmpty(str))return NaN;return num};goog.string.toCamelCase=function(str){return String(str).replace(/\-([a-z])/g,function(all,match){return match.toUpperCase()})};goog.string.toSelectorCase=function(str){return String(str).replace(/([A-Z])/g,"-$1").toLowerCase()};
goog.string.toTitleCase=function(str,opt_delimiters){var delimiters=goog.isString(opt_delimiters)?goog.string.regExpEscape(opt_delimiters):"\\s";delimiters=delimiters?"|["+delimiters+"]+":"";var regexp=new RegExp("(^"+delimiters+")([a-z])","g");return str.replace(regexp,function(all,p1,p2){return p1+p2.toUpperCase()})};goog.string.parseInt=function(value){if(isFinite(value))value=String(value);if(goog.isString(value))return/^\s*-?0x/i.test(value)?parseInt(value,16):parseInt(value,10);return NaN};goog.provide("goog.debug.Error");goog.debug.Error=function(opt_msg){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else this.stack=(new Error).stack||"";if(opt_msg)this.message=String(opt_msg)};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.provide("goog.asserts");goog.provide("goog.asserts.AssertionError");goog.require("goog.debug.Error");goog.require("goog.string");goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(messagePattern,messageArgs){messageArgs.unshift(messagePattern);goog.debug.Error.call(this,goog.string.subs.apply(null,messageArgs));messageArgs.shift();this.messagePattern=messagePattern};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);
goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.doAssertFailure_=function(defaultMessage,defaultArgs,givenMessage,givenArgs){var message="Assertion failed";if(givenMessage){message+=": "+givenMessage;var args=givenArgs}else if(defaultMessage){message+=": "+defaultMessage;args=defaultArgs}throw new goog.asserts.AssertionError(""+message,args||[]);};
goog.asserts.assert=function(condition,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!condition)goog.asserts.doAssertFailure_("",null,opt_message,Array.prototype.slice.call(arguments,2));return condition};goog.asserts.fail=function(opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS)throw new goog.asserts.AssertionError("Failure"+(opt_message?": "+opt_message:""),Array.prototype.slice.call(arguments,1));};
goog.asserts.assertNumber=function(value,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(value))goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(value),value],opt_message,Array.prototype.slice.call(arguments,2));return(value)};
goog.asserts.assertString=function(value,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!goog.isString(value))goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(value),value],opt_message,Array.prototype.slice.call(arguments,2));return(value)};
goog.asserts.assertFunction=function(value,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(value))goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(value),value],opt_message,Array.prototype.slice.call(arguments,2));return(value)};
goog.asserts.assertObject=function(value,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!goog.isObject(value))goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(value),value],opt_message,Array.prototype.slice.call(arguments,2));return(value)};
goog.asserts.assertArray=function(value,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!goog.isArray(value))goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(value),value],opt_message,Array.prototype.slice.call(arguments,2));return(value)};
goog.asserts.assertBoolean=function(value,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(value))goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(value),value],opt_message,Array.prototype.slice.call(arguments,2));return(value)};
goog.asserts.assertInstanceof=function(value,type,opt_message,var_args){if(goog.asserts.ENABLE_ASSERTS&&!(value instanceof type))goog.asserts.doAssertFailure_("instanceof check failed.",null,opt_message,Array.prototype.slice.call(arguments,3));return(value)};goog.provide("goog.array");goog.provide("goog.array.ArrayLike");goog.require("goog.asserts");goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ArrayLike;goog.array.peek=function(array){return array[array.length-1]};goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.indexOf?function(arr,obj,opt_fromIndex){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(arr,obj,opt_fromIndex)}:function(arr,obj,opt_fromIndex){var fromIndex=opt_fromIndex==null?0:opt_fromIndex<0?Math.max(0,arr.length+opt_fromIndex):opt_fromIndex;if(goog.isString(arr)){if(!goog.isString(obj)||obj.length!=1)return-1;return arr.indexOf(obj,fromIndex)}for(var i=fromIndex;i<arr.length;i++)if(i in
arr&&arr[i]===obj)return i;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.lastIndexOf?function(arr,obj,opt_fromIndex){goog.asserts.assert(arr.length!=null);var fromIndex=opt_fromIndex==null?arr.length-1:opt_fromIndex;return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(arr,obj,fromIndex)}:function(arr,obj,opt_fromIndex){var fromIndex=opt_fromIndex==null?arr.length-1:opt_fromIndex;if(fromIndex<0)fromIndex=Math.max(0,arr.length+fromIndex);if(goog.isString(arr)){if(!goog.isString(obj)||obj.length!=
1)return-1;return arr.lastIndexOf(obj,fromIndex)}for(var i=fromIndex;i>=0;i--)if(i in arr&&arr[i]===obj)return i;return-1};goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.forEach?function(arr,f,opt_obj){goog.asserts.assert(arr.length!=null);goog.array.ARRAY_PROTOTYPE_.forEach.call(arr,f,opt_obj)}:function(arr,f,opt_obj){var l=arr.length;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=0;i<l;i++)if(i in arr2)f.call(opt_obj,arr2[i],i,arr)};
goog.array.forEachRight=function(arr,f,opt_obj){var l=arr.length;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=l-1;i>=0;--i)if(i in arr2)f.call(opt_obj,arr2[i],i,arr)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.filter?function(arr,f,opt_obj){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.filter.call(arr,f,opt_obj)}:function(arr,f,opt_obj){var l=arr.length;var res=[];var resLength=0;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=0;i<l;i++)if(i in arr2){var val=arr2[i];if(f.call(opt_obj,val,i,arr))res[resLength++]=val}return res};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.map?function(arr,f,opt_obj){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.map.call(arr,f,opt_obj)}:function(arr,f,opt_obj){var l=arr.length;var res=new Array(l);var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=0;i<l;i++)if(i in arr2)res[i]=f.call(opt_obj,arr2[i],i,arr);return res};
goog.array.reduce=function(arr,f,val,opt_obj){if(arr.reduce)if(opt_obj)return arr.reduce(goog.bind(f,opt_obj),val);else return arr.reduce(f,val);var rval=val;goog.array.forEach(arr,function(val,index){rval=f.call(opt_obj,rval,val,index,arr)});return rval};
goog.array.reduceRight=function(arr,f,val,opt_obj){if(arr.reduceRight)if(opt_obj)return arr.reduceRight(goog.bind(f,opt_obj),val);else return arr.reduceRight(f,val);var rval=val;goog.array.forEachRight(arr,function(val,index){rval=f.call(opt_obj,rval,val,index,arr)});return rval};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.some?function(arr,f,opt_obj){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.some.call(arr,f,opt_obj)}:function(arr,f,opt_obj){var l=arr.length;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=0;i<l;i++)if(i in arr2&&f.call(opt_obj,arr2[i],i,arr))return true;return false};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.every?function(arr,f,opt_obj){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.every.call(arr,f,opt_obj)}:function(arr,f,opt_obj){var l=arr.length;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=0;i<l;i++)if(i in arr2&&!f.call(opt_obj,arr2[i],i,arr))return false;return true};
goog.array.count=function(arr,f,opt_obj){var count=0;goog.array.forEach(arr,function(element,index,arr){if(f.call(opt_obj,element,index,arr))++count},opt_obj);return count};goog.array.find=function(arr,f,opt_obj){var i=goog.array.findIndex(arr,f,opt_obj);return i<0?null:goog.isString(arr)?arr.charAt(i):arr[i]};goog.array.findIndex=function(arr,f,opt_obj){var l=arr.length;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=0;i<l;i++)if(i in arr2&&f.call(opt_obj,arr2[i],i,arr))return i;return-1};
goog.array.findRight=function(arr,f,opt_obj){var i=goog.array.findIndexRight(arr,f,opt_obj);return i<0?null:goog.isString(arr)?arr.charAt(i):arr[i]};goog.array.findIndexRight=function(arr,f,opt_obj){var l=arr.length;var arr2=goog.isString(arr)?arr.split(""):arr;for(var i=l-1;i>=0;i--)if(i in arr2&&f.call(opt_obj,arr2[i],i,arr))return i;return-1};goog.array.contains=function(arr,obj){return goog.array.indexOf(arr,obj)>=0};goog.array.isEmpty=function(arr){return arr.length==0};
goog.array.clear=function(arr){if(!goog.isArray(arr))for(var i=arr.length-1;i>=0;i--)delete arr[i];arr.length=0};goog.array.insert=function(arr,obj){if(!goog.array.contains(arr,obj))arr.push(obj)};goog.array.insertAt=function(arr,obj,opt_i){goog.array.splice(arr,opt_i,0,obj)};goog.array.insertArrayAt=function(arr,elementsToAdd,opt_i){goog.partial(goog.array.splice,arr,opt_i,0).apply(null,elementsToAdd)};
goog.array.insertBefore=function(arr,obj,opt_obj2){var i;if(arguments.length==2||(i=goog.array.indexOf(arr,opt_obj2))<0)arr.push(obj);else goog.array.insertAt(arr,obj,i)};goog.array.remove=function(arr,obj){var i=goog.array.indexOf(arr,obj);var rv;if(rv=i>=0)goog.array.removeAt(arr,i);return rv};goog.array.removeAt=function(arr,i){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.splice.call(arr,i,1).length==1};
goog.array.removeIf=function(arr,f,opt_obj){var i=goog.array.findIndex(arr,f,opt_obj);if(i>=0){goog.array.removeAt(arr,i);return true}return false};goog.array.concat=function(var_args){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(object){var length=object.length;if(length>0){var rv=new Array(length);for(var i=0;i<length;i++)rv[i]=object[i];return rv}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(arr1,var_args){for(var i=1;i<arguments.length;i++){var arr2=arguments[i];var isArrayLike;if(goog.isArray(arr2)||(isArrayLike=goog.isArrayLike(arr2))&&Object.prototype.hasOwnProperty.call(arr2,"callee"))arr1.push.apply(arr1,arr2);else if(isArrayLike){var len1=arr1.length;var len2=arr2.length;for(var j=0;j<len2;j++)arr1[len1+j]=arr2[j]}else arr1.push(arr2)}};
goog.array.splice=function(arr,index,howMany,var_args){goog.asserts.assert(arr.length!=null);return goog.array.ARRAY_PROTOTYPE_.splice.apply(arr,goog.array.slice(arguments,1))};goog.array.slice=function(arr,start,opt_end){goog.asserts.assert(arr.length!=null);if(arguments.length<=2)return goog.array.ARRAY_PROTOTYPE_.slice.call(arr,start);else return goog.array.ARRAY_PROTOTYPE_.slice.call(arr,start,opt_end)};
goog.array.removeDuplicates=function(arr,opt_rv){var returnArray=opt_rv||arr;var seen={},cursorInsert=0,cursorRead=0;while(cursorRead<arr.length){var current=arr[cursorRead++];var key=goog.isObject(current)?"o"+goog.getUid(current):(typeof current).charAt(0)+current;if(!Object.prototype.hasOwnProperty.call(seen,key)){seen[key]=true;returnArray[cursorInsert++]=current}}returnArray.length=cursorInsert};
goog.array.binarySearch=function(arr,target,opt_compareFn){return goog.array.binarySearch_(arr,opt_compareFn||goog.array.defaultCompare,false,target)};goog.array.binarySelect=function(arr,evaluator,opt_obj){return goog.array.binarySearch_(arr,evaluator,true,undefined,opt_obj)};
goog.array.binarySearch_=function(arr,compareFn,isEvaluator,opt_target,opt_selfObj){var left=0;var right=arr.length;var found;while(left<right){var middle=left+right>>1;var compareResult;if(isEvaluator)compareResult=compareFn.call(opt_selfObj,arr[middle],middle,arr);else compareResult=compareFn(opt_target,arr[middle]);if(compareResult>0)left=middle+1;else{right=middle;found=!compareResult}}return found?left:~left};
goog.array.sort=function(arr,opt_compareFn){goog.asserts.assert(arr.length!=null);goog.array.ARRAY_PROTOTYPE_.sort.call(arr,opt_compareFn||goog.array.defaultCompare)};
goog.array.stableSort=function(arr,opt_compareFn){for(var i=0;i<arr.length;i++)arr[i]={index:i,value:arr[i]};var valueCompareFn=opt_compareFn||goog.array.defaultCompare;function stableCompareFn(obj1,obj2){return valueCompareFn(obj1.value,obj2.value)||obj1.index-obj2.index}goog.array.sort(arr,stableCompareFn);for(var i=0;i<arr.length;i++)arr[i]=arr[i].value};
goog.array.sortObjectsByKey=function(arr,key,opt_compareFn){var compare=opt_compareFn||goog.array.defaultCompare;goog.array.sort(arr,function(a,b){return compare(a[key],b[key])})};goog.array.isSorted=function(arr,opt_compareFn,opt_strict){var compare=opt_compareFn||goog.array.defaultCompare;for(var i=1;i<arr.length;i++){var compareResult=compare(arr[i-1],arr[i]);if(compareResult>0||compareResult==0&&opt_strict)return false}return true};
goog.array.equals=function(arr1,arr2,opt_equalsFn){if(!goog.isArrayLike(arr1)||(!goog.isArrayLike(arr2)||arr1.length!=arr2.length))return false;var l=arr1.length;var equalsFn=opt_equalsFn||goog.array.defaultCompareEquality;for(var i=0;i<l;i++)if(!equalsFn(arr1[i],arr2[i]))return false;return true};goog.array.compare=function(arr1,arr2,opt_equalsFn){return goog.array.equals(arr1,arr2,opt_equalsFn)};
goog.array.compare3=function(arr1,arr2,opt_compareFn){var compare=opt_compareFn||goog.array.defaultCompare;var l=Math.min(arr1.length,arr2.length);for(var i=0;i<l;i++){var result=compare(arr1[i],arr2[i]);if(result!=0)return result}return goog.array.defaultCompare(arr1.length,arr2.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};
goog.array.binaryInsert=function(array,value,opt_compareFn){var index=goog.array.binarySearch(array,value,opt_compareFn);if(index<0){goog.array.insertAt(array,value,-(index+1));return true}return false};goog.array.binaryRemove=function(array,value,opt_compareFn){var index=goog.array.binarySearch(array,value,opt_compareFn);return index>=0?goog.array.removeAt(array,index):false};
goog.array.bucket=function(array,sorter){var buckets={};for(var i=0;i<array.length;i++){var value=array[i];var key=sorter(value,i,array);if(goog.isDef(key)){var bucket=buckets[key]||(buckets[key]=[]);bucket.push(value)}}return buckets};goog.array.toObject=function(arr,keyFunc,opt_obj){var ret={};goog.array.forEach(arr,function(element,index){ret[keyFunc.call(opt_obj,element,index,arr)]=element});return ret};
goog.array.range=function(startOrEnd,opt_end,opt_step){var array=[];var start=0;var end=startOrEnd;var step=opt_step||1;if(opt_end!==undefined){start=startOrEnd;end=opt_end}if(step*(end-start)<0)return[];if(step>0)for(var i=start;i<end;i+=step)array.push(i);else for(var i=start;i>end;i+=step)array.push(i);return array};goog.array.repeat=function(value,n){var array=[];for(var i=0;i<n;i++)array[i]=value;return array};
goog.array.flatten=function(var_args){var result=[];for(var i=0;i<arguments.length;i++){var element=arguments[i];if(goog.isArray(element))result.push.apply(result,goog.array.flatten.apply(null,element));else result.push(element)}return result};goog.array.rotate=function(array,n){goog.asserts.assert(array.length!=null);if(array.length){n%=array.length;if(n>0)goog.array.ARRAY_PROTOTYPE_.unshift.apply(array,array.splice(-n,n));else if(n<0)goog.array.ARRAY_PROTOTYPE_.push.apply(array,array.splice(0,-n))}return array};
goog.array.zip=function(var_args){if(!arguments.length)return[];var result=[];for(var i=0;true;i++){var value=[];for(var j=0;j<arguments.length;j++){var arr=arguments[j];if(i>=arr.length)return result;value.push(arr[i])}result.push(value)}};goog.array.shuffle=function(arr,opt_randFn){var randFn=opt_randFn||Math.random;for(var i=arr.length-1;i>0;i--){var j=Math.floor(randFn()*(i+1));var tmp=arr[i];arr[i]=arr[j];arr[j]=tmp}};goog.provide("goog.object");goog.object.forEach=function(obj,f,opt_obj){for(var key in obj)f.call(opt_obj,obj[key],key,obj)};goog.object.filter=function(obj,f,opt_obj){var res={};for(var key in obj)if(f.call(opt_obj,obj[key],key,obj))res[key]=obj[key];return res};goog.object.map=function(obj,f,opt_obj){var res={};for(var key in obj)res[key]=f.call(opt_obj,obj[key],key,obj);return res};goog.object.some=function(obj,f,opt_obj){for(var key in obj)if(f.call(opt_obj,obj[key],key,obj))return true;return false};
goog.object.every=function(obj,f,opt_obj){for(var key in obj)if(!f.call(opt_obj,obj[key],key,obj))return false;return true};goog.object.getCount=function(obj){var rv=0;for(var key in obj)rv++;return rv};goog.object.getAnyKey=function(obj){for(var key in obj)return key};goog.object.getAnyValue=function(obj){for(var key in obj)return obj[key]};goog.object.contains=function(obj,val){return goog.object.containsValue(obj,val)};
goog.object.getValues=function(obj){var res=[];var i=0;for(var key in obj)res[i++]=obj[key];return res};goog.object.getKeys=function(obj){var res=[];var i=0;for(var key in obj)res[i++]=key;return res};goog.object.getValueByKeys=function(obj,var_args){var isArrayLike=goog.isArrayLike(var_args);var keys=isArrayLike?var_args:arguments;for(var i=isArrayLike?0:1;i<keys.length;i++){obj=obj[keys[i]];if(!goog.isDef(obj))break}return obj};goog.object.containsKey=function(obj,key){return key in obj};
goog.object.containsValue=function(obj,val){for(var key in obj)if(obj[key]==val)return true;return false};goog.object.findKey=function(obj,f,opt_this){for(var key in obj)if(f.call(opt_this,obj[key],key,obj))return key;return undefined};goog.object.findValue=function(obj,f,opt_this){var key=goog.object.findKey(obj,f,opt_this);return key&&obj[key]};goog.object.isEmpty=function(obj){for(var key in obj)return false;return true};goog.object.clear=function(obj){for(var i in obj)delete obj[i]};
goog.object.remove=function(obj,key){var rv;if(rv=key in obj)delete obj[key];return rv};goog.object.add=function(obj,key,val){if(key in obj)throw Error('The object already contains the key "'+key+'"');goog.object.set(obj,key,val)};goog.object.get=function(obj,key,opt_val){if(key in obj)return obj[key];return opt_val};goog.object.set=function(obj,key,value){obj[key]=value};goog.object.setIfUndefined=function(obj,key,value){return key in obj?obj[key]:obj[key]=value};
goog.object.clone=function(obj){var res={};for(var key in obj)res[key]=obj[key];return res};goog.object.unsafeClone=function(obj){var type=goog.typeOf(obj);if(type=="object"||type=="array"){if(obj.clone)return obj.clone();var clone=type=="array"?[]:{};for(var key in obj)clone[key]=goog.object.unsafeClone(obj[key]);return clone}return obj};goog.object.transpose=function(obj){var transposed={};for(var key in obj)transposed[obj[key]]=key;return transposed};
goog.object.PROTOTYPE_FIELDS_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];goog.object.extend=function(target,var_args){var key,source;for(var i=1;i<arguments.length;i++){source=arguments[i];for(key in source)target[key]=source[key];for(var j=0;j<goog.object.PROTOTYPE_FIELDS_.length;j++){key=goog.object.PROTOTYPE_FIELDS_[j];if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}}};
goog.object.create=function(var_args){var argLength=arguments.length;if(argLength==1&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(argLength%2)throw Error("Uneven number of arguments");var rv={};for(var i=0;i<argLength;i+=2)rv[arguments[i]]=arguments[i+1];return rv};
goog.object.createSet=function(var_args){var argLength=arguments.length;if(argLength==1&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);var rv={};for(var i=0;i<argLength;i++)rv[arguments[i]]=true;return rv};goog.object.createImmutableView=function(obj){var result=obj;if(Object.isFrozen&&!Object.isFrozen(obj)){result=Object.create(obj);Object.freeze(result)}return result};goog.object.isImmutableView=function(obj){return!!Object.isFrozen&&Object.isFrozen(obj)};goog.provide("goog.string.StringBuffer");goog.string.StringBuffer=function(opt_a1,var_args){if(opt_a1!=null)this.append.apply(this,arguments)};goog.string.StringBuffer.prototype.buffer_="";goog.string.StringBuffer.prototype.set=function(s){this.buffer_=""+s};goog.string.StringBuffer.prototype.append=function(a1,opt_a2,var_args){this.buffer_+=a1;if(opt_a2!=null)for(var i=1;i<arguments.length;i++)this.buffer_+=arguments[i];return this};
goog.string.StringBuffer.prototype.clear=function(){this.buffer_=""};goog.string.StringBuffer.prototype.getLength=function(){return this.buffer_.length};goog.string.StringBuffer.prototype.toString=function(){return this.buffer_};goog.provide("cljs.core");goog.require("goog.array");goog.require("goog.array");goog.require("goog.object");goog.require("goog.object");goog.require("goog.string.StringBuffer");goog.require("goog.string.StringBuffer");goog.require("goog.string");goog.require("goog.string");cljs.core._STAR_clojurescript_version_STAR_="0.0-2156";cljs.core._STAR_unchecked_if_STAR_=false;
cljs.core._STAR_print_fn_STAR_=function _STAR_print_fn_STAR_(_){throw new Error("No *print-fn* fn set for evaluation environment");};cljs.core.set_print_fn_BANG_=function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_=f};cljs.core._STAR_flush_on_newline_STAR_=true;cljs.core._STAR_print_newline_STAR_=true;cljs.core._STAR_print_readably_STAR_=true;cljs.core._STAR_print_meta_STAR_=false;cljs.core._STAR_print_dup_STAR_=false;cljs.core._STAR_print_length_STAR_=null;
cljs.core._STAR_print_level_STAR_=null;
cljs.core.pr_opts=function pr_opts(){return new cljs.core.PersistentArrayMap(null,5,[new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",4441712502),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",1014004081),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length",
"print-length",3960797560),cljs.core._STAR_print_length_STAR_],null)};
cljs.core.enable_console_print_BANG_=function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_=false;return cljs.core._STAR_print_fn_STAR_=function(){var G__9239__delegate=function(args){return console.log.apply(console,cljs.core.into_array.call(null,args))};var G__9239=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9239__delegate.call(this,args)};G__9239.cljs$lang$maxFixedArity=0;G__9239.cljs$lang$applyTo=
function(arglist__9240){var args=cljs.core.seq(arglist__9240);return G__9239__delegate(args)};G__9239.cljs$core$IFn$_invoke$arity$variadic=G__9239__delegate;return G__9239}()};cljs.core.truth_=function truth_(x){return x!=null&&x!==false};cljs.core.not_native=null;cljs.core.identical_QMARK_=function identical_QMARK_(x,y){return x===y};cljs.core.nil_QMARK_=function nil_QMARK_(x){return x==null};cljs.core.array_QMARK_=function array_QMARK_(x){return x instanceof Array};
cljs.core.number_QMARK_=function number_QMARK_(n){return typeof n==="number"};cljs.core.not=function not(x){if(cljs.core.truth_(x))return false;else return true};cljs.core.object_QMARK_=function object_QMARK_(x){if(!(x==null))return x.constructor===Object;else return false};cljs.core.string_QMARK_=function string_QMARK_(x){return goog.isString(x)};
cljs.core.native_satisfies_QMARK_=function native_satisfies_QMARK_(p,x){var x__$1=x==null?null:x;if(p[goog.typeOf(x__$1)])return true;else if(p["_"])return true;else if(new cljs.core.Keyword(null,"else","else",1017020587))return false;else return null};cljs.core.is_proto_=function is_proto_(x){return x.constructor.prototype===x};cljs.core._STAR_main_cli_fn_STAR_=null;cljs.core.type=function type(x){if(x==null)return null;else return x.constructor};
cljs.core.missing_protocol=function missing_protocol(proto,obj){var ty=cljs.core.type.call(null,obj);var ty__$1=cljs.core.truth_(function(){var and__6720__auto__=ty;if(cljs.core.truth_(and__6720__auto__))return ty.cljs$lang$type;else return and__6720__auto__}())?ty.cljs$lang$ctorStr:goog.typeOf(obj);return new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join(""))};
cljs.core.type__GT_str=function type__GT_str(ty){var temp__4090__auto__=ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4090__auto__)){var s=temp__4090__auto__;return s}else return[cljs.core.str(ty)].join("")};
cljs.core.make_array=function(){var make_array=null;var make_array__1=function(size){return new Array(size)};var make_array__2=function(type,size){return make_array.call(null,size)};make_array=function(type,size){switch(arguments.length){case 1:return make_array__1.call(this,type);case 2:return make_array__2.call(this,type,size)}throw new Error("Invalid arity: "+arguments.length);};make_array.cljs$core$IFn$_invoke$arity$1=make_array__1;make_array.cljs$core$IFn$_invoke$arity$2=make_array__2;return make_array}();
cljs.core.aclone=function aclone(arr){var len=arr.length;var new_arr=new Array(len);var n__7580__auto___9241=len;var i_9242=0;while(true){if(i_9242<n__7580__auto___9241){new_arr[i_9242]=arr[i_9242];var G__9243=i_9242+1;i_9242=G__9243;continue}else;break}return new_arr};cljs.core.array=function array(var_args){return Array.prototype.slice.call(arguments)};
cljs.core.aget=function(){var aget=null;var aget__2=function(array,i){return array[i]};var aget__3=function(){var G__9244__delegate=function(array,i,idxs){return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs)};var G__9244=function(array,i,var_args){var idxs=null;if(arguments.length>2)idxs=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9244__delegate.call(this,array,i,idxs)};G__9244.cljs$lang$maxFixedArity=2;G__9244.cljs$lang$applyTo=function(arglist__9245){var array=
cljs.core.first(arglist__9245);arglist__9245=cljs.core.next(arglist__9245);var i=cljs.core.first(arglist__9245);var idxs=cljs.core.rest(arglist__9245);return G__9244__delegate(array,i,idxs)};G__9244.cljs$core$IFn$_invoke$arity$variadic=G__9244__delegate;return G__9244}();aget=function(array,i,var_args){var idxs=var_args;switch(arguments.length){case 2:return aget__2.call(this,array,i);default:return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+
arguments.length);};aget.cljs$lang$maxFixedArity=2;aget.cljs$lang$applyTo=aget__3.cljs$lang$applyTo;aget.cljs$core$IFn$_invoke$arity$2=aget__2;aget.cljs$core$IFn$_invoke$arity$variadic=aget__3.cljs$core$IFn$_invoke$arity$variadic;return aget}();
cljs.core.aset=function(){var aset=null;var aset__3=function(array,i,val){return array[i]=val};var aset__4=function(){var G__9246__delegate=function(array,idx,idx2,idxv){return cljs.core.apply.call(null,aset,array[idx],idx2,idxv)};var G__9246=function(array,idx,idx2,var_args){var idxv=null;if(arguments.length>3)idxv=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9246__delegate.call(this,array,idx,idx2,idxv)};G__9246.cljs$lang$maxFixedArity=3;G__9246.cljs$lang$applyTo=function(arglist__9247){var array=
cljs.core.first(arglist__9247);arglist__9247=cljs.core.next(arglist__9247);var idx=cljs.core.first(arglist__9247);arglist__9247=cljs.core.next(arglist__9247);var idx2=cljs.core.first(arglist__9247);var idxv=cljs.core.rest(arglist__9247);return G__9246__delegate(array,idx,idx2,idxv)};G__9246.cljs$core$IFn$_invoke$arity$variadic=G__9246__delegate;return G__9246}();aset=function(array,idx,idx2,var_args){var idxv=var_args;switch(arguments.length){case 3:return aset__3.call(this,array,idx,idx2);default:return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,
idx,idx2,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};aset.cljs$lang$maxFixedArity=3;aset.cljs$lang$applyTo=aset__4.cljs$lang$applyTo;aset.cljs$core$IFn$_invoke$arity$3=aset__3;aset.cljs$core$IFn$_invoke$arity$variadic=aset__4.cljs$core$IFn$_invoke$arity$variadic;return aset}();cljs.core.alength=function alength(array){return array.length};
cljs.core.into_array=function(){var into_array=null;var into_array__1=function(aseq){return into_array.call(null,null,aseq)};var into_array__2=function(type,aseq){return cljs.core.reduce.call(null,function(a,x){a.push(x);return a},[],aseq)};into_array=function(type,aseq){switch(arguments.length){case 1:return into_array__1.call(this,type);case 2:return into_array__2.call(this,type,aseq)}throw new Error("Invalid arity: "+arguments.length);};into_array.cljs$core$IFn$_invoke$arity$1=into_array__1;into_array.cljs$core$IFn$_invoke$arity$2=
into_array__2;return into_array}();cljs.core.Fn=function(){var obj9249={};return obj9249}();cljs.core.IFn=function(){var obj9251={};return obj9251}();
cljs.core._invoke=function(){var _invoke=null;var _invoke__1=function(this$){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$1;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$1(this$);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$)}};var _invoke__2=function(this$,a){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$2;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$2(this$,a);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a)}};var _invoke__3=function(this$,a,b){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$3;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];
if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b)}};var _invoke__4=function(this$,a,b,c){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$4;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);else{var x__7359__auto__=
this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c)}};var _invoke__5=function(this$,a,b,c,d){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$5;
else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d)}};var _invoke__6=function(this$,
a,b,c,d,e){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$6;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e)}};var _invoke__7=function(this$,a,b,c,d,e,f){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$7;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f)}};var _invoke__8=function(this$,a,b,c,d,e,f,g){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$8;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=
cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g)}};var _invoke__9=function(this$,a,b,c,d,e,f,g,h){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$9;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$9(this$,
a,b,c,d,e,f,g,h);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h)}};var _invoke__10=function(this$,a,b,c,d,e,f,g,h,i){if(function(){var and__6720__auto__=this$;
if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$10;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",
this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i)}};var _invoke__11=function(this$,a,b,c,d,e,f,g,h,i,j){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$11;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j)}};var _invoke__12=function(this$,a,b,c,d,e,f,g,h,i,j,k){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$12;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);else{var x__7359__auto__=this$==null?null:this$;
return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k)}};var _invoke__13=function(this$,a,b,c,d,e,f,g,h,i,j,k,l){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$13;
else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,
k,l)}};var _invoke__14=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$14;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m)}};var _invoke__15=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$15;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=
cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n)}};var _invoke__16=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$16;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$16(this$,
a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)}};var _invoke__17=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(function(){var and__6720__auto__=
this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$17;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}};var _invoke__18=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$18;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];
if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q)}};var _invoke__19=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$19;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$19(this$,
a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s)}};var _invoke__20=function(this$,a,b,c,d,e,f,g,h,i,j,
k,l,m,n,o,p,q,s,t){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$20;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t)}};var _invoke__21=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IFn$_invoke$arity$21;else return and__6720__auto__}())return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=
cljs.core._invoke[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._invoke["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);}}().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest)}};_invoke=function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){switch(arguments.length){case 1:return _invoke__1.call(this,this$);case 2:return _invoke__2.call(this,
this$,a);case 3:return _invoke__3.call(this,this$,a,b);case 4:return _invoke__4.call(this,this$,a,b,c);case 5:return _invoke__5.call(this,this$,a,b,c,d);case 6:return _invoke__6.call(this,this$,a,b,c,d,e);case 7:return _invoke__7.call(this,this$,a,b,c,d,e,f);case 8:return _invoke__8.call(this,this$,a,b,c,d,e,f,g);case 9:return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);case 10:return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);case 11:return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);case 12:return _invoke__12.call(this,
this$,a,b,c,d,e,f,g,h,i,j,k);case 13:return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);case 14:return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);case 15:return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);case 16:return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);case 17:return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);case 18:return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);case 19:return _invoke__19.call(this,
this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);case 20:return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);case 21:return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest)}throw new Error("Invalid arity: "+arguments.length);};_invoke.cljs$core$IFn$_invoke$arity$1=_invoke__1;_invoke.cljs$core$IFn$_invoke$arity$2=_invoke__2;_invoke.cljs$core$IFn$_invoke$arity$3=_invoke__3;_invoke.cljs$core$IFn$_invoke$arity$4=_invoke__4;_invoke.cljs$core$IFn$_invoke$arity$5=_invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6=_invoke__6;_invoke.cljs$core$IFn$_invoke$arity$7=_invoke__7;_invoke.cljs$core$IFn$_invoke$arity$8=_invoke__8;_invoke.cljs$core$IFn$_invoke$arity$9=_invoke__9;_invoke.cljs$core$IFn$_invoke$arity$10=_invoke__10;_invoke.cljs$core$IFn$_invoke$arity$11=_invoke__11;_invoke.cljs$core$IFn$_invoke$arity$12=_invoke__12;_invoke.cljs$core$IFn$_invoke$arity$13=_invoke__13;_invoke.cljs$core$IFn$_invoke$arity$14=_invoke__14;_invoke.cljs$core$IFn$_invoke$arity$15=_invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16=_invoke__16;_invoke.cljs$core$IFn$_invoke$arity$17=_invoke__17;_invoke.cljs$core$IFn$_invoke$arity$18=_invoke__18;_invoke.cljs$core$IFn$_invoke$arity$19=_invoke__19;_invoke.cljs$core$IFn$_invoke$arity$20=_invoke__20;_invoke.cljs$core$IFn$_invoke$arity$21=_invoke__21;return _invoke}();cljs.core.ICloneable=function(){var obj9253={};return obj9253}();
cljs.core._clone=function _clone(value){if(function(){var and__6720__auto__=value;if(and__6720__auto__)return value.cljs$core$ICloneable$_clone$arity$1;else return and__6720__auto__}())return value.cljs$core$ICloneable$_clone$arity$1(value);else{var x__7359__auto__=value==null?null:value;return function(){var or__6732__auto__=cljs.core._clone[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._clone["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ICloneable.-clone",value);}}().call(null,value)}};cljs.core.ICounted=function(){var obj9255={};return obj9255}();
cljs.core._count=function _count(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ICounted$_count$arity$1;else return and__6720__auto__}())return coll.cljs$core$ICounted$_count$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._count[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._count["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);}}().call(null,coll)}};cljs.core.IEmptyableCollection=function(){var obj9257={};return obj9257}();
cljs.core._empty=function _empty(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IEmptyableCollection$_empty$arity$1;else return and__6720__auto__}())return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._empty[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._empty["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);}}().call(null,coll)}};cljs.core.ICollection=function(){var obj9259={};return obj9259}();
cljs.core._conj=function _conj(coll,o){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ICollection$_conj$arity$2;else return and__6720__auto__}())return coll.cljs$core$ICollection$_conj$arity$2(coll,o);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._conj[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._conj["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);}}().call(null,coll,o)}};cljs.core.IIndexed=function(){var obj9261={};return obj9261}();
cljs.core._nth=function(){var _nth=null;var _nth__2=function(coll,n){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IIndexed$_nth$arity$2;else return and__6720__auto__}())return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._nth[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._nth["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);}}().call(null,coll,n)}};var _nth__3=function(coll,n,not_found){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IIndexed$_nth$arity$3;else return and__6720__auto__}())return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._nth[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;
else{var or__6732__auto____$1=cljs.core._nth["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);}}().call(null,coll,n,not_found)}};_nth=function(coll,n,not_found){switch(arguments.length){case 2:return _nth__2.call(this,coll,n);case 3:return _nth__3.call(this,coll,n,not_found)}throw new Error("Invalid arity: "+arguments.length);};_nth.cljs$core$IFn$_invoke$arity$2=_nth__2;_nth.cljs$core$IFn$_invoke$arity$3=_nth__3;return _nth}();
cljs.core.ASeq=function(){var obj9263={};return obj9263}();cljs.core.ISeq=function(){var obj9265={};return obj9265}();
cljs.core._first=function _first(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISeq$_first$arity$1;else return and__6720__auto__}())return coll.cljs$core$ISeq$_first$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._first[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._first["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);}}().call(null,coll)}};
cljs.core._rest=function _rest(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISeq$_rest$arity$1;else return and__6720__auto__}())return coll.cljs$core$ISeq$_rest$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._rest[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._rest["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"ISeq.-rest",coll);}}().call(null,coll)}};cljs.core.INext=function(){var obj9267={};return obj9267}();
cljs.core._next=function _next(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$INext$_next$arity$1;else return and__6720__auto__}())return coll.cljs$core$INext$_next$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._next[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._next["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"INext.-next",coll);}}().call(null,coll)}};cljs.core.ILookup=function(){var obj9269={};return obj9269}();
cljs.core._lookup=function(){var _lookup=null;var _lookup__2=function(o,k){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$ILookup$_lookup$arity$2;else return and__6720__auto__}())return o.cljs$core$ILookup$_lookup$arity$2(o,k);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._lookup[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._lookup["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);}}().call(null,o,k)}};var _lookup__3=function(o,k,not_found){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$ILookup$_lookup$arity$3;else return and__6720__auto__}())return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._lookup[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._lookup["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);}}().call(null,o,k,not_found)}};_lookup=function(o,k,not_found){switch(arguments.length){case 2:return _lookup__2.call(this,o,k);case 3:return _lookup__3.call(this,o,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};_lookup.cljs$core$IFn$_invoke$arity$2=_lookup__2;_lookup.cljs$core$IFn$_invoke$arity$3=_lookup__3;return _lookup}();
cljs.core.IAssociative=function(){var obj9271={};return obj9271}();
cljs.core._contains_key_QMARK_=function _contains_key_QMARK_(coll,k){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;else return and__6720__auto__}())return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._contains_key_QMARK_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._contains_key_QMARK_["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);}}().call(null,coll,k)}};
cljs.core._assoc=function _assoc(coll,k,v){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IAssociative$_assoc$arity$3;else return and__6720__auto__}())return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._assoc[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._assoc["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);}}().call(null,coll,k,v)}};cljs.core.IMap=function(){var obj9273={};return obj9273}();
cljs.core._dissoc=function _dissoc(coll,k){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IMap$_dissoc$arity$2;else return and__6720__auto__}())return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._dissoc[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._dissoc["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);}}().call(null,coll,k)}};cljs.core.IMapEntry=function(){var obj9275={};return obj9275}();
cljs.core._key=function _key(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IMapEntry$_key$arity$1;else return and__6720__auto__}())return coll.cljs$core$IMapEntry$_key$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._key[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._key["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);}}().call(null,coll)}};
cljs.core._val=function _val(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IMapEntry$_val$arity$1;else return and__6720__auto__}())return coll.cljs$core$IMapEntry$_val$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._val[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._val["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);}}().call(null,coll)}};cljs.core.ISet=function(){var obj9277={};return obj9277}();
cljs.core._disjoin=function _disjoin(coll,v){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISet$_disjoin$arity$2;else return and__6720__auto__}())return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._disjoin[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._disjoin["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);}}().call(null,coll,v)}};cljs.core.IStack=function(){var obj9279={};return obj9279}();
cljs.core._peek=function _peek(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IStack$_peek$arity$1;else return and__6720__auto__}())return coll.cljs$core$IStack$_peek$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._peek[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._peek["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);}}().call(null,coll)}};
cljs.core._pop=function _pop(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IStack$_pop$arity$1;else return and__6720__auto__}())return coll.cljs$core$IStack$_pop$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._pop[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._pop["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IStack.-pop",coll);}}().call(null,coll)}};cljs.core.IVector=function(){var obj9281={};return obj9281}();
cljs.core._assoc_n=function _assoc_n(coll,n,val){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IVector$_assoc_n$arity$3;else return and__6720__auto__}())return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._assoc_n[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._assoc_n["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);}}().call(null,coll,n,val)}};cljs.core.IDeref=function(){var obj9283={};return obj9283}();
cljs.core._deref=function _deref(o){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IDeref$_deref$arity$1;else return and__6720__auto__}())return o.cljs$core$IDeref$_deref$arity$1(o);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._deref[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._deref["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IDeref.-deref",o);}}().call(null,o)}};cljs.core.IDerefWithTimeout=function(){var obj9285={};return obj9285}();
cljs.core._deref_with_timeout=function _deref_with_timeout(o,msec,timeout_val){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;else return and__6720__auto__}())return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._deref_with_timeout[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;
else{var or__6732__auto____$1=cljs.core._deref_with_timeout["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);}}().call(null,o,msec,timeout_val)}};cljs.core.IMeta=function(){var obj9287={};return obj9287}();
cljs.core._meta=function _meta(o){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IMeta$_meta$arity$1;else return and__6720__auto__}())return o.cljs$core$IMeta$_meta$arity$1(o);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._meta[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._meta["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IMeta.-meta",o);}}().call(null,o)}};cljs.core.IWithMeta=function(){var obj9289={};return obj9289}();
cljs.core._with_meta=function _with_meta(o,meta){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IWithMeta$_with_meta$arity$2;else return and__6720__auto__}())return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._with_meta[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._with_meta["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);}}().call(null,o,meta)}};cljs.core.IReduce=function(){var obj9291={};return obj9291}();
cljs.core._reduce=function(){var _reduce=null;var _reduce__2=function(coll,f){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IReduce$_reduce$arity$2;else return and__6720__auto__}())return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._reduce[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._reduce["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);}}().call(null,coll,f)}};var _reduce__3=function(coll,f,start){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IReduce$_reduce$arity$3;else return and__6720__auto__}())return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._reduce[goog.typeOf(x__7359__auto__)];
if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._reduce["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);}}().call(null,coll,f,start)}};_reduce=function(coll,f,start){switch(arguments.length){case 2:return _reduce__2.call(this,coll,f);case 3:return _reduce__3.call(this,coll,f,start)}throw new Error("Invalid arity: "+arguments.length);};_reduce.cljs$core$IFn$_invoke$arity$2=_reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3=_reduce__3;return _reduce}();cljs.core.IKVReduce=function(){var obj9293={};return obj9293}();
cljs.core._kv_reduce=function _kv_reduce(coll,f,init){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;else return and__6720__auto__}())return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._kv_reduce[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._kv_reduce["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);}}().call(null,coll,f,init)}};cljs.core.IEquiv=function(){var obj9295={};return obj9295}();
cljs.core._equiv=function _equiv(o,other){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IEquiv$_equiv$arity$2;else return and__6720__auto__}())return o.cljs$core$IEquiv$_equiv$arity$2(o,other);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._equiv[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._equiv["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IEquiv.-equiv",o);}}().call(null,o,other)}};cljs.core.IHash=function(){var obj9297={};return obj9297}();
cljs.core._hash=function _hash(o){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IHash$_hash$arity$1;else return and__6720__auto__}())return o.cljs$core$IHash$_hash$arity$1(o);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._hash[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._hash["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IHash.-hash",o);}}().call(null,o)}};cljs.core.ISeqable=function(){var obj9299={};return obj9299}();
cljs.core._seq=function _seq(o){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$ISeqable$_seq$arity$1;else return and__6720__auto__}())return o.cljs$core$ISeqable$_seq$arity$1(o);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._seq[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._seq["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"ISeqable.-seq",o);}}().call(null,o)}};cljs.core.ISequential=function(){var obj9301={};return obj9301}();cljs.core.IList=function(){var obj9303={};return obj9303}();cljs.core.IRecord=function(){var obj9305={};return obj9305}();cljs.core.IReversible=function(){var obj9307={};return obj9307}();
cljs.core._rseq=function _rseq(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IReversible$_rseq$arity$1;else return and__6720__auto__}())return coll.cljs$core$IReversible$_rseq$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._rseq[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._rseq["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);}}().call(null,coll)}};cljs.core.ISorted=function(){var obj9309={};return obj9309}();
cljs.core._sorted_seq=function _sorted_seq(coll,ascending_QMARK_){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISorted$_sorted_seq$arity$2;else return and__6720__auto__}())return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._sorted_seq[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._sorted_seq["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);}}().call(null,coll,ascending_QMARK_)}};
cljs.core._sorted_seq_from=function _sorted_seq_from(coll,k,ascending_QMARK_){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;else return and__6720__auto__}())return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._sorted_seq_from[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._sorted_seq_from["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);}}().call(null,coll,k,ascending_QMARK_)}};
cljs.core._entry_key=function _entry_key(coll,entry){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISorted$_entry_key$arity$2;else return and__6720__auto__}())return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._entry_key[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._entry_key["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);}}().call(null,coll,entry)}};
cljs.core._comparator=function _comparator(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$ISorted$_comparator$arity$1;else return and__6720__auto__}())return coll.cljs$core$ISorted$_comparator$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._comparator[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._comparator["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);}}().call(null,coll)}};cljs.core.IWriter=function(){var obj9311={};return obj9311}();
cljs.core._write=function _write(writer,s){if(function(){var and__6720__auto__=writer;if(and__6720__auto__)return writer.cljs$core$IWriter$_write$arity$2;else return and__6720__auto__}())return writer.cljs$core$IWriter$_write$arity$2(writer,s);else{var x__7359__auto__=writer==null?null:writer;return function(){var or__6732__auto__=cljs.core._write[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._write["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);}}().call(null,writer,s)}};
cljs.core._flush=function _flush(writer){if(function(){var and__6720__auto__=writer;if(and__6720__auto__)return writer.cljs$core$IWriter$_flush$arity$1;else return and__6720__auto__}())return writer.cljs$core$IWriter$_flush$arity$1(writer);else{var x__7359__auto__=writer==null?null:writer;return function(){var or__6732__auto__=cljs.core._flush[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._flush["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);}}().call(null,writer)}};cljs.core.IPrintWithWriter=function(){var obj9313={};return obj9313}();
cljs.core._pr_writer=function _pr_writer(o,writer,opts){if(function(){var and__6720__auto__=o;if(and__6720__auto__)return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;else return and__6720__auto__}())return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);else{var x__7359__auto__=o==null?null:o;return function(){var or__6732__auto__=cljs.core._pr_writer[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._pr_writer["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);}}().call(null,o,writer,opts)}};cljs.core.IPending=function(){var obj9315={};return obj9315}();
cljs.core._realized_QMARK_=function _realized_QMARK_(d){if(function(){var and__6720__auto__=d;if(and__6720__auto__)return d.cljs$core$IPending$_realized_QMARK_$arity$1;else return and__6720__auto__}())return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);else{var x__7359__auto__=d==null?null:d;return function(){var or__6732__auto__=cljs.core._realized_QMARK_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._realized_QMARK_["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);}}().call(null,d)}};cljs.core.IWatchable=function(){var obj9317={};return obj9317}();
cljs.core._notify_watches=function _notify_watches(this$,oldval,newval){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IWatchable$_notify_watches$arity$3;else return and__6720__auto__}())return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._notify_watches[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._notify_watches["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);}}().call(null,this$,oldval,newval)}};
cljs.core._add_watch=function _add_watch(this$,key,f){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IWatchable$_add_watch$arity$3;else return and__6720__auto__}())return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._add_watch[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._add_watch["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);}}().call(null,this$,key,f)}};
cljs.core._remove_watch=function _remove_watch(this$,key){if(function(){var and__6720__auto__=this$;if(and__6720__auto__)return this$.cljs$core$IWatchable$_remove_watch$arity$2;else return and__6720__auto__}())return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);else{var x__7359__auto__=this$==null?null:this$;return function(){var or__6732__auto__=cljs.core._remove_watch[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._remove_watch["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);}}().call(null,this$,key)}};cljs.core.IEditableCollection=function(){var obj9319={};return obj9319}();
cljs.core._as_transient=function _as_transient(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IEditableCollection$_as_transient$arity$1;else return and__6720__auto__}())return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._as_transient[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._as_transient["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);}}().call(null,coll)}};cljs.core.ITransientCollection=function(){var obj9321={};return obj9321}();
cljs.core._conj_BANG_=function _conj_BANG_(tcoll,val){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;else return and__6720__auto__}())return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._conj_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._conj_BANG_["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);}}().call(null,tcoll,val)}};
cljs.core._persistent_BANG_=function _persistent_BANG_(tcoll){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;else return and__6720__auto__}())return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._persistent_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._persistent_BANG_["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);}}().call(null,tcoll)}};cljs.core.ITransientAssociative=function(){var obj9323={};return obj9323}();
cljs.core._assoc_BANG_=function _assoc_BANG_(tcoll,key,val){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;else return and__6720__auto__}())return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._assoc_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._assoc_BANG_["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);}}().call(null,tcoll,key,val)}};cljs.core.ITransientMap=function(){var obj9325={};return obj9325}();
cljs.core._dissoc_BANG_=function _dissoc_BANG_(tcoll,key){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;else return and__6720__auto__}())return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._dissoc_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._dissoc_BANG_["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);}}().call(null,tcoll,key)}};cljs.core.ITransientVector=function(){var obj9327={};return obj9327}();
cljs.core._assoc_n_BANG_=function _assoc_n_BANG_(tcoll,n,val){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;else return and__6720__auto__}())return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._assoc_n_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._assoc_n_BANG_["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);}}().call(null,tcoll,n,val)}};
cljs.core._pop_BANG_=function _pop_BANG_(tcoll){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;else return and__6720__auto__}())return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._pop_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._pop_BANG_["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);}}().call(null,tcoll)}};cljs.core.ITransientSet=function(){var obj9329={};return obj9329}();
cljs.core._disjoin_BANG_=function _disjoin_BANG_(tcoll,v){if(function(){var and__6720__auto__=tcoll;if(and__6720__auto__)return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;else return and__6720__auto__}())return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);else{var x__7359__auto__=tcoll==null?null:tcoll;return function(){var or__6732__auto__=cljs.core._disjoin_BANG_[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._disjoin_BANG_["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);}}().call(null,tcoll,v)}};cljs.core.IComparable=function(){var obj9331={};return obj9331}();
cljs.core._compare=function _compare(x,y){if(function(){var and__6720__auto__=x;if(and__6720__auto__)return x.cljs$core$IComparable$_compare$arity$2;else return and__6720__auto__}())return x.cljs$core$IComparable$_compare$arity$2(x,y);else{var x__7359__auto__=x==null?null:x;return function(){var or__6732__auto__=cljs.core._compare[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._compare["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);}}().call(null,x,y)}};cljs.core.IChunk=function(){var obj9333={};return obj9333}();
cljs.core._drop_first=function _drop_first(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IChunk$_drop_first$arity$1;else return and__6720__auto__}())return coll.cljs$core$IChunk$_drop_first$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._drop_first[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._drop_first["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);}}().call(null,coll)}};cljs.core.IChunkedSeq=function(){var obj9335={};return obj9335}();
cljs.core._chunked_first=function _chunked_first(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;else return and__6720__auto__}())return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._chunked_first[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._chunked_first["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);}}().call(null,coll)}};
cljs.core._chunked_rest=function _chunked_rest(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;else return and__6720__auto__}())return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._chunked_rest[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._chunked_rest["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);}}().call(null,coll)}};cljs.core.IChunkedNext=function(){var obj9337={};return obj9337}();
cljs.core._chunked_next=function _chunked_next(coll){if(function(){var and__6720__auto__=coll;if(and__6720__auto__)return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;else return and__6720__auto__}())return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);else{var x__7359__auto__=coll==null?null:coll;return function(){var or__6732__auto__=cljs.core._chunked_next[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._chunked_next["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);}}().call(null,coll)}};cljs.core.INamed=function(){var obj9339={};return obj9339}();
cljs.core._name=function _name(x){if(function(){var and__6720__auto__=x;if(and__6720__auto__)return x.cljs$core$INamed$_name$arity$1;else return and__6720__auto__}())return x.cljs$core$INamed$_name$arity$1(x);else{var x__7359__auto__=x==null?null:x;return function(){var or__6732__auto__=cljs.core._name[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._name["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"INamed.-name",x);}}().call(null,x)}};
cljs.core._namespace=function _namespace(x){if(function(){var and__6720__auto__=x;if(and__6720__auto__)return x.cljs$core$INamed$_namespace$arity$1;else return and__6720__auto__}())return x.cljs$core$INamed$_namespace$arity$1(x);else{var x__7359__auto__=x==null?null:x;return function(){var or__6732__auto__=cljs.core._namespace[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._namespace["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"INamed.-namespace",x);}}().call(null,x)}};cljs.core.StringBufferWriter=function(sb){this.sb=sb;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=1073741824};cljs.core.StringBufferWriter.cljs$lang$type=true;cljs.core.StringBufferWriter.cljs$lang$ctorStr="cljs.core/StringBufferWriter";cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/StringBufferWriter")};
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2=function(_,s){var self__=this;var ___$1=this;return self__.sb.append(s)};cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1=function(_){var self__=this;var ___$1=this;return null};cljs.core.__GT_StringBufferWriter=function __GT_StringBufferWriter(sb){return new cljs.core.StringBufferWriter(sb)};
cljs.core.pr_str_STAR_=function pr_str_STAR_(obj){var sb=new goog.string.StringBuffer;var writer=new cljs.core.StringBufferWriter(sb);cljs.core._pr_writer.call(null,obj,writer,cljs.core.pr_opts.call(null));cljs.core._flush.call(null,writer);return[cljs.core.str(sb)].join("")};cljs.core.instance_QMARK_=function instance_QMARK_(t,o){return o instanceof t};cljs.core.symbol_QMARK_=function symbol_QMARK_(x){return x instanceof cljs.core.Symbol};
cljs.core.hash_symbol=function hash_symbol(sym){return cljs.core.hash_combine.call(null,cljs.core.hash.call(null,sym.ns),cljs.core.hash.call(null,sym.name))};
cljs.core.compare_symbols=function compare_symbols(a,b){if(cljs.core.truth_(cljs.core._EQ_.call(null,a,b)))return 0;else if(cljs.core.truth_(function(){var and__6720__auto__=cljs.core.not.call(null,a.ns);if(and__6720__auto__)return b.ns;else return and__6720__auto__}()))return-1;else if(cljs.core.truth_(a.ns))if(cljs.core.not.call(null,b.ns))return 1;else{var nsc=cljs.core.compare.call(null,a.ns,b.ns);if(nsc===0)return cljs.core.compare.call(null,a.name,b.name);else return nsc}else if(new cljs.core.Keyword(null,
"default","default",2558708147))return cljs.core.compare.call(null,a.name,b.name);else return null};cljs.core.Symbol=function(ns,name,str,_hash,_meta){this.ns=ns;this.name=name;this.str=str;this._hash=_hash;this._meta=_meta;this.cljs$lang$protocol_mask$partition0$=2154168321;this.cljs$lang$protocol_mask$partition1$=4096};cljs.core.Symbol.cljs$lang$type=true;cljs.core.Symbol.cljs$lang$ctorStr="cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Symbol")};cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(o,writer,_){var self__=this;var o__$1=this;return cljs.core._write.call(null,writer,self__.str)};cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1=function(_){var self__=this;var ___$1=this;return self__.name};
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1=function(_){var self__=this;var ___$1=this;return self__.ns};cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1=function(sym){var self__=this;var sym__$1=this;var h__7143__auto__=self__._hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_symbol.call(null,sym__$1);self__._hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(_,new_meta){var self__=this;var ___$1=this;return new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta)};cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1=function(_){var self__=this;var ___$1=this;return self__._meta};
cljs.core.Symbol.prototype.call=function(){var G__9341=null;var G__9341__2=function(self__,coll){var self__=this;var self____$1=this;var sym=self____$1;return cljs.core._lookup.call(null,coll,sym,null)};var G__9341__3=function(self__,coll,not_found){var self__=this;var self____$1=this;var sym=self____$1;return cljs.core._lookup.call(null,coll,sym,not_found)};G__9341=function(self__,coll,not_found){switch(arguments.length){case 2:return G__9341__2.call(this,self__,coll);case 3:return G__9341__3.call(this,
self__,coll,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9341}();cljs.core.Symbol.prototype.apply=function(self__,args9340){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9340)))};cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1=function(coll){var self__=this;var sym=this;return cljs.core._lookup.call(null,coll,sym,null)};
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2=function(coll,not_found){var self__=this;var sym=this;return cljs.core._lookup.call(null,coll,sym,not_found)};cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2=function(_,other){var self__=this;var ___$1=this;if(other instanceof cljs.core.Symbol)return self__.str===other.str;else return false};cljs.core.Symbol.prototype.toString=function(){var self__=this;var _=this;return self__.str};
cljs.core.__GT_Symbol=function __GT_Symbol(ns,name,str,_hash,_meta){return new cljs.core.Symbol(ns,name,str,_hash,_meta)};
cljs.core.symbol=function(){var symbol=null;var symbol__1=function(name){if(name instanceof cljs.core.Symbol)return name;else return symbol.call(null,null,name)};var symbol__2=function(ns,name){var sym_str=!(ns==null)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(""):name;return new cljs.core.Symbol(ns,name,sym_str,null,null)};symbol=function(ns,name){switch(arguments.length){case 1:return symbol__1.call(this,ns);case 2:return symbol__2.call(this,ns,name)}throw new Error("Invalid arity: "+
arguments.length);};symbol.cljs$core$IFn$_invoke$arity$1=symbol__1;symbol.cljs$core$IFn$_invoke$arity$2=symbol__2;return symbol}();cljs.core.clone=function clone(value){return cljs.core._clone.call(null,value)};
cljs.core.cloneable_QMARK_=function cloneable_QMARK_(value){var G__9343=value;if(G__9343){var bit__7382__auto__=G__9343.cljs$lang$protocol_mask$partition1$&8192;if(bit__7382__auto__||G__9343.cljs$core$ICloneable$)return true;else if(!G__9343.cljs$lang$protocol_mask$partition1$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__9343);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__9343)};
cljs.core.seq=function seq(coll){if(coll==null)return null;else if(function(){var G__9345=coll;if(G__9345){var bit__7375__auto__=G__9345.cljs$lang$protocol_mask$partition0$&8388608;if(bit__7375__auto__||G__9345.cljs$core$ISeqable$)return true;else return false}else return false}())return cljs.core._seq.call(null,coll);else if(coll instanceof Array)if(coll.length===0)return null;else return new cljs.core.IndexedSeq(coll,0);else if(typeof coll==="string")if(coll.length===0)return null;else return new cljs.core.IndexedSeq(coll,
0);else if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,coll))return cljs.core._seq.call(null,coll);else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error([cljs.core.str(coll),cljs.core.str("is not ISeqable")].join(""));else return null};
cljs.core.first=function first(coll){if(coll==null)return null;else if(function(){var G__9347=coll;if(G__9347){var bit__7375__auto__=G__9347.cljs$lang$protocol_mask$partition0$&64;if(bit__7375__auto__||G__9347.cljs$core$ISeq$)return true;else return false}else return false}())return cljs.core._first.call(null,coll);else{var s=cljs.core.seq.call(null,coll);if(s==null)return null;else return cljs.core._first.call(null,s)}};
cljs.core.rest=function rest(coll){if(!(coll==null))if(function(){var G__9349=coll;if(G__9349){var bit__7375__auto__=G__9349.cljs$lang$protocol_mask$partition0$&64;if(bit__7375__auto__||G__9349.cljs$core$ISeq$)return true;else return false}else return false}())return cljs.core._rest.call(null,coll);else{var s=cljs.core.seq.call(null,coll);if(s)return cljs.core._rest.call(null,s);else return cljs.core.List.EMPTY}else return cljs.core.List.EMPTY};
cljs.core.next=function next(coll){if(coll==null)return null;else if(function(){var G__9351=coll;if(G__9351){var bit__7375__auto__=G__9351.cljs$lang$protocol_mask$partition0$&128;if(bit__7375__auto__||G__9351.cljs$core$INext$)return true;else return false}else return false}())return cljs.core._next.call(null,coll);else return cljs.core.seq.call(null,cljs.core.rest.call(null,coll))};
cljs.core._EQ_=function(){var _EQ_=null;var _EQ___1=function(x){return true};var _EQ___2=function(x,y){if(x==null)return y==null;else return x===y||cljs.core._equiv.call(null,x,y)};var _EQ___3=function(){var G__9352__delegate=function(x,y,more){while(true){if(_EQ_.call(null,x,y))if(cljs.core.next.call(null,more)){var G__9353=y;var G__9354=cljs.core.first.call(null,more);var G__9355=cljs.core.next.call(null,more);x=G__9353;y=G__9354;more=G__9355;continue}else return _EQ_.call(null,y,cljs.core.first.call(null,
more));else return false;break}};var G__9352=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9352__delegate.call(this,x,y,more)};G__9352.cljs$lang$maxFixedArity=2;G__9352.cljs$lang$applyTo=function(arglist__9356){var x=cljs.core.first(arglist__9356);arglist__9356=cljs.core.next(arglist__9356);var y=cljs.core.first(arglist__9356);var more=cljs.core.rest(arglist__9356);return G__9352__delegate(x,y,more)};G__9352.cljs$core$IFn$_invoke$arity$variadic=
G__9352__delegate;return G__9352}();_EQ_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return _EQ___1.call(this,x);case 2:return _EQ___2.call(this,x,y);default:return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_EQ_.cljs$lang$maxFixedArity=2;_EQ_.cljs$lang$applyTo=_EQ___3.cljs$lang$applyTo;_EQ_.cljs$core$IFn$_invoke$arity$1=_EQ___1;_EQ_.cljs$core$IFn$_invoke$arity$2=_EQ___2;_EQ_.cljs$core$IFn$_invoke$arity$variadic=
_EQ___3.cljs$core$IFn$_invoke$arity$variadic;return _EQ_}();cljs.core.ICounted["null"]=true;cljs.core._count["null"]=function(_){return 0};Date.prototype.cljs$core$IEquiv$=true;Date.prototype.cljs$core$IEquiv$_equiv$arity$2=function(o,other){var o__$1=this;return other instanceof Date&&o__$1.toString()===other.toString()};cljs.core.IEquiv["number"]=true;cljs.core._equiv["number"]=function(x,o){return x===o};cljs.core.IMeta["function"]=true;cljs.core._meta["function"]=function(_){return null};
cljs.core.Fn["function"]=true;cljs.core.IHash["_"]=true;cljs.core._hash["_"]=function(o){return goog.getUid(o)};cljs.core.inc=function inc(x){return x+1};cljs.core.Reduced=function(val){this.val=val;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32768};cljs.core.Reduced.cljs$lang$type=true;cljs.core.Reduced.cljs$lang$ctorStr="cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Reduced")};cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1=function(o){var self__=this;var o__$1=this;return self__.val};cljs.core.__GT_Reduced=function __GT_Reduced(val){return new cljs.core.Reduced(val)};cljs.core.reduced=function reduced(x){return new cljs.core.Reduced(x)};
cljs.core.reduced_QMARK_=function reduced_QMARK_(r){return r instanceof cljs.core.Reduced};
cljs.core.ci_reduce=function(){var ci_reduce=null;var ci_reduce__2=function(cicoll,f){var cnt=cljs.core._count.call(null,cicoll);if(cnt===0)return f.call(null);else{var val=cljs.core._nth.call(null,cicoll,0);var n=1;while(true){if(n<cnt){var nval=f.call(null,val,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))return cljs.core.deref.call(null,nval);else{var G__9357=nval;var G__9358=n+1;val=G__9357;n=G__9358;continue}}else return val;break}}};var ci_reduce__3=function(cicoll,
f,val){var cnt=cljs.core._count.call(null,cicoll);var val__$1=val;var n=0;while(true){if(n<cnt){var nval=f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))return cljs.core.deref.call(null,nval);else{var G__9359=nval;var G__9360=n+1;val__$1=G__9359;n=G__9360;continue}}else return val__$1;break}};var ci_reduce__4=function(cicoll,f,val,idx){var cnt=cljs.core._count.call(null,cicoll);var val__$1=val;var n=idx;while(true){if(n<cnt){var nval=f.call(null,
val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))return cljs.core.deref.call(null,nval);else{var G__9361=nval;var G__9362=n+1;val__$1=G__9361;n=G__9362;continue}}else return val__$1;break}};ci_reduce=function(cicoll,f,val,idx){switch(arguments.length){case 2:return ci_reduce__2.call(this,cicoll,f);case 3:return ci_reduce__3.call(this,cicoll,f,val);case 4:return ci_reduce__4.call(this,cicoll,f,val,idx)}throw new Error("Invalid arity: "+arguments.length);};ci_reduce.cljs$core$IFn$_invoke$arity$2=
ci_reduce__2;ci_reduce.cljs$core$IFn$_invoke$arity$3=ci_reduce__3;ci_reduce.cljs$core$IFn$_invoke$arity$4=ci_reduce__4;return ci_reduce}();
cljs.core.array_reduce=function(){var array_reduce=null;var array_reduce__2=function(arr,f){var cnt=arr.length;if(arr.length===0)return f.call(null);else{var val=arr[0];var n=1;while(true){if(n<cnt){var nval=f.call(null,val,arr[n]);if(cljs.core.reduced_QMARK_.call(null,nval))return cljs.core.deref.call(null,nval);else{var G__9363=nval;var G__9364=n+1;val=G__9363;n=G__9364;continue}}else return val;break}}};var array_reduce__3=function(arr,f,val){var cnt=arr.length;var val__$1=val;var n=0;while(true){if(n<
cnt){var nval=f.call(null,val__$1,arr[n]);if(cljs.core.reduced_QMARK_.call(null,nval))return cljs.core.deref.call(null,nval);else{var G__9365=nval;var G__9366=n+1;val__$1=G__9365;n=G__9366;continue}}else return val__$1;break}};var array_reduce__4=function(arr,f,val,idx){var cnt=arr.length;var val__$1=val;var n=idx;while(true){if(n<cnt){var nval=f.call(null,val__$1,arr[n]);if(cljs.core.reduced_QMARK_.call(null,nval))return cljs.core.deref.call(null,nval);else{var G__9367=nval;var G__9368=n+1;val__$1=
G__9367;n=G__9368;continue}}else return val__$1;break}};array_reduce=function(arr,f,val,idx){switch(arguments.length){case 2:return array_reduce__2.call(this,arr,f);case 3:return array_reduce__3.call(this,arr,f,val);case 4:return array_reduce__4.call(this,arr,f,val,idx)}throw new Error("Invalid arity: "+arguments.length);};array_reduce.cljs$core$IFn$_invoke$arity$2=array_reduce__2;array_reduce.cljs$core$IFn$_invoke$arity$3=array_reduce__3;array_reduce.cljs$core$IFn$_invoke$arity$4=array_reduce__4;
return array_reduce}();cljs.core.counted_QMARK_=function counted_QMARK_(x){var G__9370=x;if(G__9370){var bit__7382__auto__=G__9370.cljs$lang$protocol_mask$partition0$&2;if(bit__7382__auto__||G__9370.cljs$core$ICounted$)return true;else if(!G__9370.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__9370);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__9370)};
cljs.core.indexed_QMARK_=function indexed_QMARK_(x){var G__9372=x;if(G__9372){var bit__7382__auto__=G__9372.cljs$lang$protocol_mask$partition0$&16;if(bit__7382__auto__||G__9372.cljs$core$IIndexed$)return true;else if(!G__9372.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__9372);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__9372)};
cljs.core.IndexedSeq=function(arr,i){this.arr=arr;this.i=i;this.cljs$lang$protocol_mask$partition0$=166199550;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.IndexedSeq.cljs$lang$type=true;cljs.core.IndexedSeq.cljs$lang$ctorStr="cljs.core/IndexedSeq";cljs.core.IndexedSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/IndexedSeq")};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.hash_coll.call(null,coll__$1)};cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1=function(_){var self__=this;var ___$1=this;if(self__.i+1<self__.arr.length)return new cljs.core.IndexedSeq(self__.arr,self__.i+1);else return null};
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1=function(coll){var self__=this;var coll__$1=this;var c=cljs.core._count.call(null,coll__$1);if(c>0)return new cljs.core.RSeq(coll__$1,c-1,null);else return null};
cljs.core.IndexedSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.array_reduce.call(null,self__.arr,f,self__.arr[self__.i],self__.i+1)};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.i)};cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(this$){var self__=this;var this$__$1=this;return this$__$1};cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1=function(_){var self__=this;var ___$1=this;return self__.arr.length-self__.i};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1=function(_){var self__=this;var ___$1=this;return self__.arr[self__.i]};cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(_){var self__=this;var ___$1=this;if(self__.i+1<self__.arr.length)return new cljs.core.IndexedSeq(self__.arr,self__.i+1);else return cljs.core.List.EMPTY};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.IndexedSeq(self__.arr,self__.i)};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2=function(coll,n){var self__=this;var coll__$1=this;var i__$1=n+self__.i;if(i__$1<self__.arr.length)return self__.arr[i__$1];else return null};cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3=function(coll,n,not_found){var self__=this;var coll__$1=this;var i__$1=n+self__.i;if(i__$1<self__.arr.length)return self__.arr[i__$1];else return not_found};
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.List.EMPTY};cljs.core.__GT_IndexedSeq=function __GT_IndexedSeq(arr,i){return new cljs.core.IndexedSeq(arr,i)};
cljs.core.prim_seq=function(){var prim_seq=null;var prim_seq__1=function(prim){return prim_seq.call(null,prim,0)};var prim_seq__2=function(prim,i){if(i<prim.length)return new cljs.core.IndexedSeq(prim,i);else return null};prim_seq=function(prim,i){switch(arguments.length){case 1:return prim_seq__1.call(this,prim);case 2:return prim_seq__2.call(this,prim,i)}throw new Error("Invalid arity: "+arguments.length);};prim_seq.cljs$core$IFn$_invoke$arity$1=prim_seq__1;prim_seq.cljs$core$IFn$_invoke$arity$2=
prim_seq__2;return prim_seq}();
cljs.core.array_seq=function(){var array_seq=null;var array_seq__1=function(array){return cljs.core.prim_seq.call(null,array,0)};var array_seq__2=function(array,i){return cljs.core.prim_seq.call(null,array,i)};array_seq=function(array,i){switch(arguments.length){case 1:return array_seq__1.call(this,array);case 2:return array_seq__2.call(this,array,i)}throw new Error("Invalid arity: "+arguments.length);};array_seq.cljs$core$IFn$_invoke$arity$1=array_seq__1;array_seq.cljs$core$IFn$_invoke$arity$2=array_seq__2;
return array_seq}();cljs.core.RSeq=function(ci,i,meta){this.ci=ci;this.i=i;this.meta=meta;this.cljs$lang$protocol_mask$partition0$=32374862;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.RSeq.cljs$lang$type=true;cljs.core.RSeq.cljs$lang$ctorStr="cljs.core/RSeq";cljs.core.RSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/RSeq")};
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.hash_coll.call(null,coll__$1)};cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};cljs.core.RSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(col,f){var self__=this;var col__$1=this;return cljs.core.seq_reduce.call(null,f,col__$1)};cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(col,f,start){var self__=this;var col__$1=this;return cljs.core.seq_reduce.call(null,f,start,col__$1)};cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.i+1};cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,self__.ci,self__.i)};cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.i>0)return new cljs.core.RSeq(self__.ci,self__.i-1,null);else return null};
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,new_meta){var self__=this;var coll__$1=this;return new cljs.core.RSeq(self__.ci,self__.i,new_meta)};cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.RSeq(self__.ci,self__.i,self__.meta)};
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.__GT_RSeq=function __GT_RSeq(ci,i,meta){return new cljs.core.RSeq(ci,i,meta)};
cljs.core.second=function second(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll))};cljs.core.ffirst=function ffirst(coll){return cljs.core.first.call(null,cljs.core.first.call(null,coll))};cljs.core.nfirst=function nfirst(coll){return cljs.core.next.call(null,cljs.core.first.call(null,coll))};cljs.core.fnext=function fnext(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll))};
cljs.core.nnext=function nnext(coll){return cljs.core.next.call(null,cljs.core.next.call(null,coll))};cljs.core.last=function last(s){while(true){var sn=cljs.core.next.call(null,s);if(!(sn==null)){var G__9373=sn;s=G__9373;continue}else return cljs.core.first.call(null,s);break}};cljs.core.IEquiv["_"]=true;cljs.core._equiv["_"]=function(x,o){return x===o};
cljs.core.conj=function(){var conj=null;var conj__2=function(coll,x){if(!(coll==null))return cljs.core._conj.call(null,coll,x);else return cljs.core._conj.call(null,cljs.core.List.EMPTY,x)};var conj__3=function(){var G__9374__delegate=function(coll,x,xs){while(true){if(cljs.core.truth_(xs)){var G__9375=conj.call(null,coll,x);var G__9376=cljs.core.first.call(null,xs);var G__9377=cljs.core.next.call(null,xs);coll=G__9375;x=G__9376;xs=G__9377;continue}else return conj.call(null,coll,x);break}};var G__9374=
function(coll,x,var_args){var xs=null;if(arguments.length>2)xs=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9374__delegate.call(this,coll,x,xs)};G__9374.cljs$lang$maxFixedArity=2;G__9374.cljs$lang$applyTo=function(arglist__9378){var coll=cljs.core.first(arglist__9378);arglist__9378=cljs.core.next(arglist__9378);var x=cljs.core.first(arglist__9378);var xs=cljs.core.rest(arglist__9378);return G__9374__delegate(coll,x,xs)};G__9374.cljs$core$IFn$_invoke$arity$variadic=G__9374__delegate;
return G__9374}();conj=function(coll,x,var_args){var xs=var_args;switch(arguments.length){case 2:return conj__2.call(this,coll,x);default:return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};conj.cljs$lang$maxFixedArity=2;conj.cljs$lang$applyTo=conj__3.cljs$lang$applyTo;conj.cljs$core$IFn$_invoke$arity$2=conj__2;conj.cljs$core$IFn$_invoke$arity$variadic=conj__3.cljs$core$IFn$_invoke$arity$variadic;return conj}();
cljs.core.empty=function empty(coll){if(coll==null)return null;else return cljs.core._empty.call(null,coll)};cljs.core.accumulating_seq_count=function accumulating_seq_count(coll){var s=cljs.core.seq.call(null,coll);var acc=0;while(true){if(cljs.core.counted_QMARK_.call(null,s))return acc+cljs.core._count.call(null,s);else{var G__9379=cljs.core.next.call(null,s);var G__9380=acc+1;s=G__9379;acc=G__9380;continue}break}};
cljs.core.count=function count(coll){if(!(coll==null))if(function(){var G__9382=coll;if(G__9382){var bit__7375__auto__=G__9382.cljs$lang$protocol_mask$partition0$&2;if(bit__7375__auto__||G__9382.cljs$core$ICounted$)return true;else return false}else return false}())return cljs.core._count.call(null,coll);else if(coll instanceof Array)return coll.length;else if(typeof coll==="string")return coll.length;else if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,coll))return cljs.core._count.call(null,
coll);else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.accumulating_seq_count.call(null,coll);else return null;else return 0};
cljs.core.linear_traversal_nth=function(){var linear_traversal_nth=null;var linear_traversal_nth__2=function(coll,n){while(true){if(coll==null)throw new Error("Index out of bounds");else if(n===0)if(cljs.core.seq.call(null,coll))return cljs.core.first.call(null,coll);else throw new Error("Index out of bounds");else if(cljs.core.indexed_QMARK_.call(null,coll))return cljs.core._nth.call(null,coll,n);else if(cljs.core.seq.call(null,coll)){var G__9383=cljs.core.next.call(null,coll);var G__9384=n-1;coll=
G__9383;n=G__9384;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error("Index out of bounds");else return null;break}};var linear_traversal_nth__3=function(coll,n,not_found){while(true){if(coll==null)return not_found;else if(n===0)if(cljs.core.seq.call(null,coll))return cljs.core.first.call(null,coll);else return not_found;else if(cljs.core.indexed_QMARK_.call(null,coll))return cljs.core._nth.call(null,coll,n,not_found);else if(cljs.core.seq.call(null,coll)){var G__9385=
cljs.core.next.call(null,coll);var G__9386=n-1;var G__9387=not_found;coll=G__9385;n=G__9386;not_found=G__9387;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null;break}};linear_traversal_nth=function(coll,n,not_found){switch(arguments.length){case 2:return linear_traversal_nth__2.call(this,coll,n);case 3:return linear_traversal_nth__3.call(this,coll,n,not_found)}throw new Error("Invalid arity: "+arguments.length);};linear_traversal_nth.cljs$core$IFn$_invoke$arity$2=
linear_traversal_nth__2;linear_traversal_nth.cljs$core$IFn$_invoke$arity$3=linear_traversal_nth__3;return linear_traversal_nth}();
cljs.core.nth=function(){var nth=null;var nth__2=function(coll,n){if(coll==null)return null;else if(function(){var G__9392=coll;if(G__9392){var bit__7375__auto__=G__9392.cljs$lang$protocol_mask$partition0$&16;if(bit__7375__auto__||G__9392.cljs$core$IIndexed$)return true;else return false}else return false}())return cljs.core._nth.call(null,coll,n);else if(coll instanceof Array)if(n<coll.length)return coll[n];else return null;else if(typeof coll==="string")if(n<coll.length)return coll[n];else return null;
else if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))return cljs.core._nth.call(null,coll,n);else if(new cljs.core.Keyword(null,"else","else",1017020587))if(function(){var G__9393=coll;if(G__9393){var bit__7382__auto__=G__9393.cljs$lang$protocol_mask$partition0$&64;if(bit__7382__auto__||G__9393.cljs$core$ISeq$)return true;else if(!G__9393.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__9393);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.ISeq,G__9393)}())return cljs.core.linear_traversal_nth.call(null,coll,n);else throw new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join(""));else return null};var nth__3=function(coll,n,not_found){if(!(coll==null))if(function(){var G__9394=coll;if(G__9394){var bit__7375__auto__=G__9394.cljs$lang$protocol_mask$partition0$&16;if(bit__7375__auto__||G__9394.cljs$core$IIndexed$)return true;else return false}else return false}())return cljs.core._nth.call(null,
coll,n,not_found);else if(coll instanceof Array)if(n<coll.length)return coll[n];else return not_found;else if(typeof coll==="string")if(n<coll.length)return coll[n];else return not_found;else if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))return cljs.core._nth.call(null,coll,n);else if(new cljs.core.Keyword(null,"else","else",1017020587))if(function(){var G__9395=coll;if(G__9395){var bit__7382__auto__=G__9395.cljs$lang$protocol_mask$partition0$&64;if(bit__7382__auto__||G__9395.cljs$core$ISeq$)return true;
else if(!G__9395.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__9395);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__9395)}())return cljs.core.linear_traversal_nth.call(null,coll,n,not_found);else throw new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join(""));else return null;else return not_found};nth=
function(coll,n,not_found){switch(arguments.length){case 2:return nth__2.call(this,coll,n);case 3:return nth__3.call(this,coll,n,not_found)}throw new Error("Invalid arity: "+arguments.length);};nth.cljs$core$IFn$_invoke$arity$2=nth__2;nth.cljs$core$IFn$_invoke$arity$3=nth__3;return nth}();
cljs.core.get=function(){var get=null;var get__2=function(o,k){if(o==null)return null;else if(function(){var G__9398=o;if(G__9398){var bit__7375__auto__=G__9398.cljs$lang$protocol_mask$partition0$&256;if(bit__7375__auto__||G__9398.cljs$core$ILookup$)return true;else return false}else return false}())return cljs.core._lookup.call(null,o,k);else if(o instanceof Array)if(k<o.length)return o[k];else return null;else if(typeof o==="string")if(k<o.length)return o[k];else return null;else if(cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.ILookup,o))return cljs.core._lookup.call(null,o,k);else if(new cljs.core.Keyword(null,"else","else",1017020587))return null;else return null};var get__3=function(o,k,not_found){if(!(o==null))if(function(){var G__9399=o;if(G__9399){var bit__7375__auto__=G__9399.cljs$lang$protocol_mask$partition0$&256;if(bit__7375__auto__||G__9399.cljs$core$ILookup$)return true;else return false}else return false}())return cljs.core._lookup.call(null,o,k,not_found);else if(o instanceof Array)if(k<o.length)return o[k];
else return not_found;else if(typeof o==="string")if(k<o.length)return o[k];else return not_found;else if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))return cljs.core._lookup.call(null,o,k,not_found);else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null;else return not_found};get=function(o,k,not_found){switch(arguments.length){case 2:return get__2.call(this,o,k);case 3:return get__3.call(this,o,k,not_found)}throw new Error("Invalid arity: "+
arguments.length);};get.cljs$core$IFn$_invoke$arity$2=get__2;get.cljs$core$IFn$_invoke$arity$3=get__3;return get}();
cljs.core.assoc=function(){var assoc=null;var assoc__3=function(coll,k,v){if(!(coll==null))return cljs.core._assoc.call(null,coll,k,v);else return cljs.core.PersistentHashMap.fromArrays.call(null,[k],[v])};var assoc__4=function(){var G__9400__delegate=function(coll,k,v,kvs){while(true){var ret=assoc.call(null,coll,k,v);if(cljs.core.truth_(kvs)){var G__9401=ret;var G__9402=cljs.core.first.call(null,kvs);var G__9403=cljs.core.second.call(null,kvs);var G__9404=cljs.core.nnext.call(null,kvs);coll=G__9401;
k=G__9402;v=G__9403;kvs=G__9404;continue}else return ret;break}};var G__9400=function(coll,k,v,var_args){var kvs=null;if(arguments.length>3)kvs=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9400__delegate.call(this,coll,k,v,kvs)};G__9400.cljs$lang$maxFixedArity=3;G__9400.cljs$lang$applyTo=function(arglist__9405){var coll=cljs.core.first(arglist__9405);arglist__9405=cljs.core.next(arglist__9405);var k=cljs.core.first(arglist__9405);arglist__9405=cljs.core.next(arglist__9405);
var v=cljs.core.first(arglist__9405);var kvs=cljs.core.rest(arglist__9405);return G__9400__delegate(coll,k,v,kvs)};G__9400.cljs$core$IFn$_invoke$arity$variadic=G__9400__delegate;return G__9400}();assoc=function(coll,k,v,var_args){var kvs=var_args;switch(arguments.length){case 3:return assoc__3.call(this,coll,k,v);default:return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};assoc.cljs$lang$maxFixedArity=
3;assoc.cljs$lang$applyTo=assoc__4.cljs$lang$applyTo;assoc.cljs$core$IFn$_invoke$arity$3=assoc__3;assoc.cljs$core$IFn$_invoke$arity$variadic=assoc__4.cljs$core$IFn$_invoke$arity$variadic;return assoc}();
cljs.core.dissoc=function(){var dissoc=null;var dissoc__1=function(coll){return coll};var dissoc__2=function(coll,k){if(coll==null)return null;else return cljs.core._dissoc.call(null,coll,k)};var dissoc__3=function(){var G__9406__delegate=function(coll,k,ks){while(true){if(coll==null)return null;else{var ret=dissoc.call(null,coll,k);if(cljs.core.truth_(ks)){var G__9407=ret;var G__9408=cljs.core.first.call(null,ks);var G__9409=cljs.core.next.call(null,ks);coll=G__9407;k=G__9408;ks=G__9409;continue}else return ret}break}};
var G__9406=function(coll,k,var_args){var ks=null;if(arguments.length>2)ks=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9406__delegate.call(this,coll,k,ks)};G__9406.cljs$lang$maxFixedArity=2;G__9406.cljs$lang$applyTo=function(arglist__9410){var coll=cljs.core.first(arglist__9410);arglist__9410=cljs.core.next(arglist__9410);var k=cljs.core.first(arglist__9410);var ks=cljs.core.rest(arglist__9410);return G__9406__delegate(coll,k,ks)};G__9406.cljs$core$IFn$_invoke$arity$variadic=
G__9406__delegate;return G__9406}();dissoc=function(coll,k,var_args){var ks=var_args;switch(arguments.length){case 1:return dissoc__1.call(this,coll);case 2:return dissoc__2.call(this,coll,k);default:return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};dissoc.cljs$lang$maxFixedArity=2;dissoc.cljs$lang$applyTo=dissoc__3.cljs$lang$applyTo;dissoc.cljs$core$IFn$_invoke$arity$1=dissoc__1;dissoc.cljs$core$IFn$_invoke$arity$2=
dissoc__2;dissoc.cljs$core$IFn$_invoke$arity$variadic=dissoc__3.cljs$core$IFn$_invoke$arity$variadic;return dissoc}();
cljs.core.fn_QMARK_=function fn_QMARK_(f){var or__6732__auto__=goog.isFunction(f);if(or__6732__auto__)return or__6732__auto__;else{var G__9414=f;if(G__9414){var bit__7382__auto__=null;if(cljs.core.truth_(function(){var or__6732__auto____$1=bit__7382__auto__;if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else return G__9414.cljs$core$Fn$}()))return true;else if(!G__9414.cljs$lang$protocol_mask$partition$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__9414);
else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__9414)}};
cljs.core.with_meta=function with_meta(o,meta){if(cljs.core.fn_QMARK_.call(null,o)&&!function(){var G__9422=o;if(G__9422){var bit__7382__auto__=G__9422.cljs$lang$protocol_mask$partition0$&262144;if(bit__7382__auto__||G__9422.cljs$core$IWithMeta$)return true;else if(!G__9422.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9422);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9422)}())return with_meta.call(null,
function(){if(typeof cljs.core.t9423!=="undefined");else{cljs.core.t9423=function(meta,o,with_meta,meta9424){this.meta=meta;this.o=o;this.with_meta=with_meta;this.meta9424=meta9424;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=393217};cljs.core.t9423.cljs$lang$type=true;cljs.core.t9423.cljs$lang$ctorStr="cljs.core/t9423";cljs.core.t9423.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,
writer__7300__auto__,"cljs.core/t9423")};cljs.core.t9423.prototype.call=function(){var G__9427__delegate=function(self__,args){var self____$1=this;var _=self____$1;return cljs.core.apply.call(null,self__.o,args)};var G__9427=function(self__,var_args){var self__=this;var args=null;if(arguments.length>1)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return G__9427__delegate.call(this,self__,args)};G__9427.cljs$lang$maxFixedArity=1;G__9427.cljs$lang$applyTo=function(arglist__9428){var self__=
cljs.core.first(arglist__9428);var args=cljs.core.rest(arglist__9428);return G__9427__delegate(self__,args)};G__9427.cljs$core$IFn$_invoke$arity$variadic=G__9427__delegate;return G__9427}();cljs.core.t9423.prototype.apply=function(self__,args9426){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9426)))};cljs.core.t9423.prototype.cljs$core$IFn$_invoke$arity$2=function(){var G__9429__delegate=function(args){var _=this;return cljs.core.apply.call(null,
self__.o,args)};var G__9429=function(var_args){var self__=this;var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9429__delegate.call(this,args)};G__9429.cljs$lang$maxFixedArity=0;G__9429.cljs$lang$applyTo=function(arglist__9430){var args=cljs.core.seq(arglist__9430);return G__9429__delegate(args)};G__9429.cljs$core$IFn$_invoke$arity$variadic=G__9429__delegate;return G__9429}();cljs.core.t9423.prototype.cljs$core$Fn$=true;cljs.core.t9423.prototype.cljs$core$IMeta$_meta$arity$1=
function(_9425){var self__=this;var _9425__$1=this;return self__.meta9424};cljs.core.t9423.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(_9425,meta9424__$1){var self__=this;var _9425__$1=this;return new cljs.core.t9423(self__.meta,self__.o,self__.with_meta,meta9424__$1)};cljs.core.__GT_t9423=function __GT_t9423(meta__$1,o__$1,with_meta__$1,meta9424){return new cljs.core.t9423(meta__$1,o__$1,with_meta__$1,meta9424)}}return new cljs.core.t9423(meta,o,with_meta,null)}(),meta);else if(o==
null)return null;else return cljs.core._with_meta.call(null,o,meta)};
cljs.core.meta=function meta(o){if(function(){var and__6720__auto__=!(o==null);if(and__6720__auto__){var G__9434=o;if(G__9434){var bit__7382__auto__=G__9434.cljs$lang$protocol_mask$partition0$&131072;if(bit__7382__auto__||G__9434.cljs$core$IMeta$)return true;else if(!G__9434.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__9434);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__9434)}else return and__6720__auto__}())return cljs.core._meta.call(null,
o);else return null};cljs.core.peek=function peek(coll){if(coll==null)return null;else return cljs.core._peek.call(null,coll)};cljs.core.pop=function pop(coll){if(coll==null)return null;else return cljs.core._pop.call(null,coll)};
cljs.core.disj=function(){var disj=null;var disj__1=function(coll){return coll};var disj__2=function(coll,k){if(coll==null)return null;else return cljs.core._disjoin.call(null,coll,k)};var disj__3=function(){var G__9435__delegate=function(coll,k,ks){while(true){if(coll==null)return null;else{var ret=disj.call(null,coll,k);if(cljs.core.truth_(ks)){var G__9436=ret;var G__9437=cljs.core.first.call(null,ks);var G__9438=cljs.core.next.call(null,ks);coll=G__9436;k=G__9437;ks=G__9438;continue}else return ret}break}};
var G__9435=function(coll,k,var_args){var ks=null;if(arguments.length>2)ks=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9435__delegate.call(this,coll,k,ks)};G__9435.cljs$lang$maxFixedArity=2;G__9435.cljs$lang$applyTo=function(arglist__9439){var coll=cljs.core.first(arglist__9439);arglist__9439=cljs.core.next(arglist__9439);var k=cljs.core.first(arglist__9439);var ks=cljs.core.rest(arglist__9439);return G__9435__delegate(coll,k,ks)};G__9435.cljs$core$IFn$_invoke$arity$variadic=
G__9435__delegate;return G__9435}();disj=function(coll,k,var_args){var ks=var_args;switch(arguments.length){case 1:return disj__1.call(this,coll);case 2:return disj__2.call(this,coll,k);default:return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};disj.cljs$lang$maxFixedArity=2;disj.cljs$lang$applyTo=disj__3.cljs$lang$applyTo;disj.cljs$core$IFn$_invoke$arity$1=disj__1;disj.cljs$core$IFn$_invoke$arity$2=disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic=disj__3.cljs$core$IFn$_invoke$arity$variadic;return disj}();cljs.core.string_hash_cache=function(){var obj9441={};return obj9441}();cljs.core.string_hash_cache_count=0;cljs.core.add_to_string_hash_cache=function add_to_string_hash_cache(k){var h=goog.string.hashCode(k);cljs.core.string_hash_cache[k]=h;cljs.core.string_hash_cache_count=cljs.core.string_hash_cache_count+1;return h};
cljs.core.check_string_hash_cache=function check_string_hash_cache(k){if(cljs.core.string_hash_cache_count>255){cljs.core.string_hash_cache=function(){var obj9445={};return obj9445}();cljs.core.string_hash_cache_count=0}else;var h=cljs.core.string_hash_cache[k];if(typeof h==="number")return h;else return cljs.core.add_to_string_hash_cache.call(null,k)};
cljs.core.hash=function hash(o){if(function(){var G__9447=o;if(G__9447){var bit__7375__auto__=G__9447.cljs$lang$protocol_mask$partition0$&4194304;if(bit__7375__auto__||G__9447.cljs$core$IHash$)return true;else return false}else return false}())return cljs.core._hash.call(null,o);else if(typeof o==="number")return Math.floor(o)%2147483647;else if(o===true)return 1;else if(o===false)return 0;else if(typeof o==="string")return cljs.core.check_string_hash_cache.call(null,o);else if(o==null)return 0;else if(new cljs.core.Keyword(null,
"else","else",1017020587))return cljs.core._hash.call(null,o);else return null};cljs.core.empty_QMARK_=function empty_QMARK_(coll){return coll==null||cljs.core.not.call(null,cljs.core.seq.call(null,coll))};
cljs.core.coll_QMARK_=function coll_QMARK_(x){if(x==null)return false;else{var G__9449=x;if(G__9449){var bit__7382__auto__=G__9449.cljs$lang$protocol_mask$partition0$&8;if(bit__7382__auto__||G__9449.cljs$core$ICollection$)return true;else if(!G__9449.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__9449);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__9449)}};
cljs.core.set_QMARK_=function set_QMARK_(x){if(x==null)return false;else{var G__9451=x;if(G__9451){var bit__7382__auto__=G__9451.cljs$lang$protocol_mask$partition0$&4096;if(bit__7382__auto__||G__9451.cljs$core$ISet$)return true;else if(!G__9451.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__9451);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__9451)}};
cljs.core.associative_QMARK_=function associative_QMARK_(x){var G__9453=x;if(G__9453){var bit__7382__auto__=G__9453.cljs$lang$protocol_mask$partition0$&512;if(bit__7382__auto__||G__9453.cljs$core$IAssociative$)return true;else if(!G__9453.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__9453);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__9453)};
cljs.core.sequential_QMARK_=function sequential_QMARK_(x){var G__9455=x;if(G__9455){var bit__7382__auto__=G__9455.cljs$lang$protocol_mask$partition0$&16777216;if(bit__7382__auto__||G__9455.cljs$core$ISequential$)return true;else if(!G__9455.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__9455);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__9455)};
cljs.core.sorted_QMARK_=function sorted_QMARK_(x){var G__9457=x;if(G__9457){var bit__7382__auto__=G__9457.cljs$lang$protocol_mask$partition0$&268435456;if(bit__7382__auto__||G__9457.cljs$core$ISorted$)return true;else if(!G__9457.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__9457);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__9457)};
cljs.core.reduceable_QMARK_=function reduceable_QMARK_(x){var G__9459=x;if(G__9459){var bit__7382__auto__=G__9459.cljs$lang$protocol_mask$partition0$&524288;if(bit__7382__auto__||G__9459.cljs$core$IReduce$)return true;else if(!G__9459.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__9459);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__9459)};
cljs.core.map_QMARK_=function map_QMARK_(x){if(x==null)return false;else{var G__9461=x;if(G__9461){var bit__7382__auto__=G__9461.cljs$lang$protocol_mask$partition0$&1024;if(bit__7382__auto__||G__9461.cljs$core$IMap$)return true;else if(!G__9461.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__9461);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__9461)}};
cljs.core.vector_QMARK_=function vector_QMARK_(x){var G__9463=x;if(G__9463){var bit__7382__auto__=G__9463.cljs$lang$protocol_mask$partition0$&16384;if(bit__7382__auto__||G__9463.cljs$core$IVector$)return true;else if(!G__9463.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__9463);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__9463)};
cljs.core.chunked_seq_QMARK_=function chunked_seq_QMARK_(x){var G__9465=x;if(G__9465){var bit__7375__auto__=G__9465.cljs$lang$protocol_mask$partition1$&512;if(bit__7375__auto__||G__9465.cljs$core$IChunkedSeq$)return true;else return false}else return false};
cljs.core.js_obj=function(){var js_obj=null;var js_obj__0=function(){var obj9469={};return obj9469};var js_obj__1=function(){var G__9470__delegate=function(keyvals){return cljs.core.apply.call(null,goog.object.create,keyvals)};var G__9470=function(var_args){var keyvals=null;if(arguments.length>0)keyvals=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9470__delegate.call(this,keyvals)};G__9470.cljs$lang$maxFixedArity=0;G__9470.cljs$lang$applyTo=function(arglist__9471){var keyvals=
cljs.core.seq(arglist__9471);return G__9470__delegate(keyvals)};G__9470.cljs$core$IFn$_invoke$arity$variadic=G__9470__delegate;return G__9470}();js_obj=function(var_args){var keyvals=var_args;switch(arguments.length){case 0:return js_obj__0.call(this);default:return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments,0))}throw new Error("Invalid arity: "+arguments.length);};js_obj.cljs$lang$maxFixedArity=0;js_obj.cljs$lang$applyTo=js_obj__1.cljs$lang$applyTo;js_obj.cljs$core$IFn$_invoke$arity$0=
js_obj__0;js_obj.cljs$core$IFn$_invoke$arity$variadic=js_obj__1.cljs$core$IFn$_invoke$arity$variadic;return js_obj}();cljs.core.js_keys=function js_keys(obj){var keys=[];goog.object.forEach(obj,function(val,key,obj__$1){return keys.push(key)});return keys};cljs.core.js_delete=function js_delete(obj,key){return delete obj[key]};
cljs.core.array_copy=function array_copy(from,i,to,j,len){var i__$1=i;var j__$1=j;var len__$1=len;while(true){if(len__$1===0)return to;else{to[j__$1]=from[i__$1];var G__9472=i__$1+1;var G__9473=j__$1+1;var G__9474=len__$1-1;i__$1=G__9472;j__$1=G__9473;len__$1=G__9474;continue}break}};
cljs.core.array_copy_downward=function array_copy_downward(from,i,to,j,len){var i__$1=i+(len-1);var j__$1=j+(len-1);var len__$1=len;while(true){if(len__$1===0)return to;else{to[j__$1]=from[i__$1];var G__9475=i__$1-1;var G__9476=j__$1-1;var G__9477=len__$1-1;i__$1=G__9475;j__$1=G__9476;len__$1=G__9477;continue}break}};cljs.core.lookup_sentinel=function(){var obj9479={};return obj9479}();cljs.core.false_QMARK_=function false_QMARK_(x){return x===false};
cljs.core.true_QMARK_=function true_QMARK_(x){return x===true};cljs.core.undefined_QMARK_=function undefined_QMARK_(x){return void 0===x};
cljs.core.seq_QMARK_=function seq_QMARK_(s){if(s==null)return false;else{var G__9481=s;if(G__9481){var bit__7382__auto__=G__9481.cljs$lang$protocol_mask$partition0$&64;if(bit__7382__auto__||G__9481.cljs$core$ISeq$)return true;else if(!G__9481.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__9481);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__9481)}};
cljs.core.seqable_QMARK_=function seqable_QMARK_(s){var G__9483=s;if(G__9483){var bit__7382__auto__=G__9483.cljs$lang$protocol_mask$partition0$&8388608;if(bit__7382__auto__||G__9483.cljs$core$ISeqable$)return true;else if(!G__9483.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9483);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9483)};
cljs.core.boolean$=function boolean$(x){if(cljs.core.truth_(x))return true;else return false};
cljs.core.ifn_QMARK_=function ifn_QMARK_(f){var or__6732__auto__=cljs.core.fn_QMARK_.call(null,f);if(or__6732__auto__)return or__6732__auto__;else{var G__9487=f;if(G__9487){var bit__7382__auto__=G__9487.cljs$lang$protocol_mask$partition0$&1;if(bit__7382__auto__||G__9487.cljs$core$IFn$)return true;else if(!G__9487.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__9487);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,
G__9487)}};cljs.core.integer_QMARK_=function integer_QMARK_(n){return typeof n==="number"&&(!isNaN(n)&&(!(n===Infinity)&&parseFloat(n)===parseInt(n,10)))};cljs.core.contains_QMARK_=function contains_QMARK_(coll,v){if(cljs.core.get.call(null,coll,v,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel)return false;else return true};
cljs.core.find=function find(coll,k){if(!(coll==null)&&(cljs.core.associative_QMARK_.call(null,coll)&&cljs.core.contains_QMARK_.call(null,coll,k)))return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[k,cljs.core.get.call(null,coll,k)],null);else return null};
cljs.core.distinct_QMARK_=function(){var distinct_QMARK_=null;var distinct_QMARK___1=function(x){return true};var distinct_QMARK___2=function(x,y){return!cljs.core._EQ_.call(null,x,y)};var distinct_QMARK___3=function(){var G__9488__delegate=function(x,y,more){if(!cljs.core._EQ_.call(null,x,y)){var s=cljs.core.PersistentHashSet.fromArray([y,x],true);var xs=more;while(true){var x__$1=cljs.core.first.call(null,xs);var etc=cljs.core.next.call(null,xs);if(cljs.core.truth_(xs))if(cljs.core.contains_QMARK_.call(null,
s,x__$1))return false;else{var G__9489=cljs.core.conj.call(null,s,x__$1);var G__9490=etc;s=G__9489;xs=G__9490;continue}else return true;break}}else return false};var G__9488=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9488__delegate.call(this,x,y,more)};G__9488.cljs$lang$maxFixedArity=2;G__9488.cljs$lang$applyTo=function(arglist__9491){var x=cljs.core.first(arglist__9491);arglist__9491=cljs.core.next(arglist__9491);
var y=cljs.core.first(arglist__9491);var more=cljs.core.rest(arglist__9491);return G__9488__delegate(x,y,more)};G__9488.cljs$core$IFn$_invoke$arity$variadic=G__9488__delegate;return G__9488}();distinct_QMARK_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return distinct_QMARK___1.call(this,x);case 2:return distinct_QMARK___2.call(this,x,y);default:return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+
arguments.length);};distinct_QMARK_.cljs$lang$maxFixedArity=2;distinct_QMARK_.cljs$lang$applyTo=distinct_QMARK___3.cljs$lang$applyTo;distinct_QMARK_.cljs$core$IFn$_invoke$arity$1=distinct_QMARK___1;distinct_QMARK_.cljs$core$IFn$_invoke$arity$2=distinct_QMARK___2;distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic=distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;return distinct_QMARK_}();
cljs.core.sequence=function sequence(coll){if(cljs.core.seq_QMARK_.call(null,coll))return coll;else{var or__6732__auto__=cljs.core.seq.call(null,coll);if(or__6732__auto__)return or__6732__auto__;else return cljs.core.List.EMPTY}};
cljs.core.compare=function compare(x,y){if(x===y)return 0;else if(x==null)return-1;else if(y==null)return 1;else if(cljs.core.type.call(null,x)===cljs.core.type.call(null,y))if(function(){var G__9493=x;if(G__9493){var bit__7375__auto__=G__9493.cljs$lang$protocol_mask$partition1$&2048;if(bit__7375__auto__||G__9493.cljs$core$IComparable$)return true;else return false}else return false}())return cljs.core._compare.call(null,x,y);else return goog.array.defaultCompare(x,y);else if(new cljs.core.Keyword(null,
"else","else",1017020587))throw new Error("compare on non-nil objects of different types");else return null};
cljs.core.compare_indexed=function(){var compare_indexed=null;var compare_indexed__2=function(xs,ys){var xl=cljs.core.count.call(null,xs);var yl=cljs.core.count.call(null,ys);if(xl<yl)return-1;else if(xl>yl)return 1;else if(new cljs.core.Keyword(null,"else","else",1017020587))return compare_indexed.call(null,xs,ys,xl,0);else return null};var compare_indexed__4=function(xs,ys,len,n){while(true){var d=cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));if(d===0&&
n+1<len){var G__9494=xs;var G__9495=ys;var G__9496=len;var G__9497=n+1;xs=G__9494;ys=G__9495;len=G__9496;n=G__9497;continue}else return d;break}};compare_indexed=function(xs,ys,len,n){switch(arguments.length){case 2:return compare_indexed__2.call(this,xs,ys);case 4:return compare_indexed__4.call(this,xs,ys,len,n)}throw new Error("Invalid arity: "+arguments.length);};compare_indexed.cljs$core$IFn$_invoke$arity$2=compare_indexed__2;compare_indexed.cljs$core$IFn$_invoke$arity$4=compare_indexed__4;return compare_indexed}();
cljs.core.fn__GT_comparator=function fn__GT_comparator(f){if(cljs.core._EQ_.call(null,f,cljs.core.compare))return cljs.core.compare;else return function(x,y){var r=f.call(null,x,y);if(typeof r==="number")return r;else if(cljs.core.truth_(r))return-1;else if(cljs.core.truth_(f.call(null,y,x)))return 1;else return 0}};
cljs.core.sort=function(){var sort=null;var sort__1=function(coll){return sort.call(null,cljs.core.compare,coll)};var sort__2=function(comp,coll){if(cljs.core.seq.call(null,coll)){var a=cljs.core.to_array.call(null,coll);goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));return cljs.core.seq.call(null,a)}else return cljs.core.List.EMPTY};sort=function(comp,coll){switch(arguments.length){case 1:return sort__1.call(this,comp);case 2:return sort__2.call(this,comp,coll)}throw new Error("Invalid arity: "+
arguments.length);};sort.cljs$core$IFn$_invoke$arity$1=sort__1;sort.cljs$core$IFn$_invoke$arity$2=sort__2;return sort}();
cljs.core.sort_by=function(){var sort_by=null;var sort_by__2=function(keyfn,coll){return sort_by.call(null,keyfn,cljs.core.compare,coll)};var sort_by__3=function(keyfn,comp,coll){return cljs.core.sort.call(null,function(x,y){return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y))},coll)};sort_by=function(keyfn,comp,coll){switch(arguments.length){case 2:return sort_by__2.call(this,keyfn,comp);case 3:return sort_by__3.call(this,keyfn,comp,coll)}throw new Error("Invalid arity: "+
arguments.length);};sort_by.cljs$core$IFn$_invoke$arity$2=sort_by__2;sort_by.cljs$core$IFn$_invoke$arity$3=sort_by__3;return sort_by}();
cljs.core.seq_reduce=function(){var seq_reduce=null;var seq_reduce__2=function(f,coll){var temp__4090__auto__=cljs.core.seq.call(null,coll);if(temp__4090__auto__){var s=temp__4090__auto__;return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s))}else return f.call(null)};var seq_reduce__3=function(f,val,coll){var val__$1=val;var coll__$1=cljs.core.seq.call(null,coll);while(true){if(coll__$1){var nval=f.call(null,val__$1,cljs.core.first.call(null,coll__$1));if(cljs.core.reduced_QMARK_.call(null,
nval))return cljs.core.deref.call(null,nval);else{var G__9498=nval;var G__9499=cljs.core.next.call(null,coll__$1);val__$1=G__9498;coll__$1=G__9499;continue}}else return val__$1;break}};seq_reduce=function(f,val,coll){switch(arguments.length){case 2:return seq_reduce__2.call(this,f,val);case 3:return seq_reduce__3.call(this,f,val,coll)}throw new Error("Invalid arity: "+arguments.length);};seq_reduce.cljs$core$IFn$_invoke$arity$2=seq_reduce__2;seq_reduce.cljs$core$IFn$_invoke$arity$3=seq_reduce__3;
return seq_reduce}();cljs.core.shuffle=function shuffle(coll){var a=cljs.core.to_array.call(null,coll);goog.array.shuffle(a);return cljs.core.vec.call(null,a)};
cljs.core.reduce=function(){var reduce=null;var reduce__2=function(f,coll){if(function(){var G__9502=coll;if(G__9502){var bit__7375__auto__=G__9502.cljs$lang$protocol_mask$partition0$&524288;if(bit__7375__auto__||G__9502.cljs$core$IReduce$)return true;else return false}else return false}())return cljs.core._reduce.call(null,coll,f);else if(coll instanceof Array)return cljs.core.array_reduce.call(null,coll,f);else if(typeof coll==="string")return cljs.core.array_reduce.call(null,coll,f);else if(cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IReduce,coll))return cljs.core._reduce.call(null,coll,f);else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.seq_reduce.call(null,f,coll);else return null};var reduce__3=function(f,val,coll){if(function(){var G__9503=coll;if(G__9503){var bit__7375__auto__=G__9503.cljs$lang$protocol_mask$partition0$&524288;if(bit__7375__auto__||G__9503.cljs$core$IReduce$)return true;else return false}else return false}())return cljs.core._reduce.call(null,coll,f,val);else if(coll instanceof
Array)return cljs.core.array_reduce.call(null,coll,f,val);else if(typeof coll==="string")return cljs.core.array_reduce.call(null,coll,f,val);else if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))return cljs.core._reduce.call(null,coll,f,val);else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.seq_reduce.call(null,f,val,coll);else return null};reduce=function(f,val,coll){switch(arguments.length){case 2:return reduce__2.call(this,f,val);case 3:return reduce__3.call(this,
f,val,coll)}throw new Error("Invalid arity: "+arguments.length);};reduce.cljs$core$IFn$_invoke$arity$2=reduce__2;reduce.cljs$core$IFn$_invoke$arity$3=reduce__3;return reduce}();cljs.core.reduce_kv=function reduce_kv(f,init,coll){if(!(coll==null))return cljs.core._kv_reduce.call(null,coll,f,init);else return init};
cljs.core._PLUS_=function(){var _PLUS_=null;var _PLUS___0=function(){return 0};var _PLUS___1=function(x){return x};var _PLUS___2=function(x,y){return x+y};var _PLUS___3=function(){var G__9504__delegate=function(x,y,more){return cljs.core.reduce.call(null,_PLUS_,x+y,more)};var G__9504=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9504__delegate.call(this,x,y,more)};G__9504.cljs$lang$maxFixedArity=2;G__9504.cljs$lang$applyTo=
function(arglist__9505){var x=cljs.core.first(arglist__9505);arglist__9505=cljs.core.next(arglist__9505);var y=cljs.core.first(arglist__9505);var more=cljs.core.rest(arglist__9505);return G__9504__delegate(x,y,more)};G__9504.cljs$core$IFn$_invoke$arity$variadic=G__9504__delegate;return G__9504}();_PLUS_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 0:return _PLUS___0.call(this);case 1:return _PLUS___1.call(this,x);case 2:return _PLUS___2.call(this,x,y);default:return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,
y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_PLUS_.cljs$lang$maxFixedArity=2;_PLUS_.cljs$lang$applyTo=_PLUS___3.cljs$lang$applyTo;_PLUS_.cljs$core$IFn$_invoke$arity$0=_PLUS___0;_PLUS_.cljs$core$IFn$_invoke$arity$1=_PLUS___1;_PLUS_.cljs$core$IFn$_invoke$arity$2=_PLUS___2;_PLUS_.cljs$core$IFn$_invoke$arity$variadic=_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;return _PLUS_}();
cljs.core._=function(){var _=null;var ___1=function(x){return-x};var ___2=function(x,y){return x-y};var ___3=function(){var G__9506__delegate=function(x,y,more){return cljs.core.reduce.call(null,_,x-y,more)};var G__9506=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9506__delegate.call(this,x,y,more)};G__9506.cljs$lang$maxFixedArity=2;G__9506.cljs$lang$applyTo=function(arglist__9507){var x=cljs.core.first(arglist__9507);
arglist__9507=cljs.core.next(arglist__9507);var y=cljs.core.first(arglist__9507);var more=cljs.core.rest(arglist__9507);return G__9506__delegate(x,y,more)};G__9506.cljs$core$IFn$_invoke$arity$variadic=G__9506__delegate;return G__9506}();_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return ___1.call(this,x);case 2:return ___2.call(this,x,y);default:return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);
};_.cljs$lang$maxFixedArity=2;_.cljs$lang$applyTo=___3.cljs$lang$applyTo;_.cljs$core$IFn$_invoke$arity$1=___1;_.cljs$core$IFn$_invoke$arity$2=___2;_.cljs$core$IFn$_invoke$arity$variadic=___3.cljs$core$IFn$_invoke$arity$variadic;return _}();
cljs.core._STAR_=function(){var _STAR_=null;var _STAR___0=function(){return 1};var _STAR___1=function(x){return x};var _STAR___2=function(x,y){return x*y};var _STAR___3=function(){var G__9508__delegate=function(x,y,more){return cljs.core.reduce.call(null,_STAR_,x*y,more)};var G__9508=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9508__delegate.call(this,x,y,more)};G__9508.cljs$lang$maxFixedArity=2;G__9508.cljs$lang$applyTo=
function(arglist__9509){var x=cljs.core.first(arglist__9509);arglist__9509=cljs.core.next(arglist__9509);var y=cljs.core.first(arglist__9509);var more=cljs.core.rest(arglist__9509);return G__9508__delegate(x,y,more)};G__9508.cljs$core$IFn$_invoke$arity$variadic=G__9508__delegate;return G__9508}();_STAR_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 0:return _STAR___0.call(this);case 1:return _STAR___1.call(this,x);case 2:return _STAR___2.call(this,x,y);default:return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,
y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_STAR_.cljs$lang$maxFixedArity=2;_STAR_.cljs$lang$applyTo=_STAR___3.cljs$lang$applyTo;_STAR_.cljs$core$IFn$_invoke$arity$0=_STAR___0;_STAR_.cljs$core$IFn$_invoke$arity$1=_STAR___1;_STAR_.cljs$core$IFn$_invoke$arity$2=_STAR___2;_STAR_.cljs$core$IFn$_invoke$arity$variadic=_STAR___3.cljs$core$IFn$_invoke$arity$variadic;return _STAR_}();
cljs.core._SLASH_=function(){var _SLASH_=null;var _SLASH___1=function(x){return _SLASH_.call(null,1,x)};var _SLASH___2=function(x,y){return x/y};var _SLASH___3=function(){var G__9510__delegate=function(x,y,more){return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more)};var G__9510=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9510__delegate.call(this,x,y,more)};G__9510.cljs$lang$maxFixedArity=
2;G__9510.cljs$lang$applyTo=function(arglist__9511){var x=cljs.core.first(arglist__9511);arglist__9511=cljs.core.next(arglist__9511);var y=cljs.core.first(arglist__9511);var more=cljs.core.rest(arglist__9511);return G__9510__delegate(x,y,more)};G__9510.cljs$core$IFn$_invoke$arity$variadic=G__9510__delegate;return G__9510}();_SLASH_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return _SLASH___1.call(this,x);case 2:return _SLASH___2.call(this,x,y);default:return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,
y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_SLASH_.cljs$lang$maxFixedArity=2;_SLASH_.cljs$lang$applyTo=_SLASH___3.cljs$lang$applyTo;_SLASH_.cljs$core$IFn$_invoke$arity$1=_SLASH___1;_SLASH_.cljs$core$IFn$_invoke$arity$2=_SLASH___2;_SLASH_.cljs$core$IFn$_invoke$arity$variadic=_SLASH___3.cljs$core$IFn$_invoke$arity$variadic;return _SLASH_}();
cljs.core._LT_=function(){var _LT_=null;var _LT___1=function(x){return true};var _LT___2=function(x,y){return x<y};var _LT___3=function(){var G__9512__delegate=function(x,y,more){while(true){if(x<y)if(cljs.core.next.call(null,more)){var G__9513=y;var G__9514=cljs.core.first.call(null,more);var G__9515=cljs.core.next.call(null,more);x=G__9513;y=G__9514;more=G__9515;continue}else return y<cljs.core.first.call(null,more);else return false;break}};var G__9512=function(x,y,var_args){var more=null;if(arguments.length>
2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9512__delegate.call(this,x,y,more)};G__9512.cljs$lang$maxFixedArity=2;G__9512.cljs$lang$applyTo=function(arglist__9516){var x=cljs.core.first(arglist__9516);arglist__9516=cljs.core.next(arglist__9516);var y=cljs.core.first(arglist__9516);var more=cljs.core.rest(arglist__9516);return G__9512__delegate(x,y,more)};G__9512.cljs$core$IFn$_invoke$arity$variadic=G__9512__delegate;return G__9512}();_LT_=function(x,y,var_args){var more=
var_args;switch(arguments.length){case 1:return _LT___1.call(this,x);case 2:return _LT___2.call(this,x,y);default:return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_LT_.cljs$lang$maxFixedArity=2;_LT_.cljs$lang$applyTo=_LT___3.cljs$lang$applyTo;_LT_.cljs$core$IFn$_invoke$arity$1=_LT___1;_LT_.cljs$core$IFn$_invoke$arity$2=_LT___2;_LT_.cljs$core$IFn$_invoke$arity$variadic=_LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_}();
cljs.core._LT__EQ_=function(){var _LT__EQ_=null;var _LT__EQ___1=function(x){return true};var _LT__EQ___2=function(x,y){return x<=y};var _LT__EQ___3=function(){var G__9517__delegate=function(x,y,more){while(true){if(x<=y)if(cljs.core.next.call(null,more)){var G__9518=y;var G__9519=cljs.core.first.call(null,more);var G__9520=cljs.core.next.call(null,more);x=G__9518;y=G__9519;more=G__9520;continue}else return y<=cljs.core.first.call(null,more);else return false;break}};var G__9517=function(x,y,var_args){var more=
null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9517__delegate.call(this,x,y,more)};G__9517.cljs$lang$maxFixedArity=2;G__9517.cljs$lang$applyTo=function(arglist__9521){var x=cljs.core.first(arglist__9521);arglist__9521=cljs.core.next(arglist__9521);var y=cljs.core.first(arglist__9521);var more=cljs.core.rest(arglist__9521);return G__9517__delegate(x,y,more)};G__9517.cljs$core$IFn$_invoke$arity$variadic=G__9517__delegate;return G__9517}();_LT__EQ_=
function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return _LT__EQ___1.call(this,x);case 2:return _LT__EQ___2.call(this,x,y);default:return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_LT__EQ_.cljs$lang$maxFixedArity=2;_LT__EQ_.cljs$lang$applyTo=_LT__EQ___3.cljs$lang$applyTo;_LT__EQ_.cljs$core$IFn$_invoke$arity$1=_LT__EQ___1;_LT__EQ_.cljs$core$IFn$_invoke$arity$2=_LT__EQ___2;_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic=
_LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;return _LT__EQ_}();
cljs.core._GT_=function(){var _GT_=null;var _GT___1=function(x){return true};var _GT___2=function(x,y){return x>y};var _GT___3=function(){var G__9522__delegate=function(x,y,more){while(true){if(x>y)if(cljs.core.next.call(null,more)){var G__9523=y;var G__9524=cljs.core.first.call(null,more);var G__9525=cljs.core.next.call(null,more);x=G__9523;y=G__9524;more=G__9525;continue}else return y>cljs.core.first.call(null,more);else return false;break}};var G__9522=function(x,y,var_args){var more=null;if(arguments.length>
2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9522__delegate.call(this,x,y,more)};G__9522.cljs$lang$maxFixedArity=2;G__9522.cljs$lang$applyTo=function(arglist__9526){var x=cljs.core.first(arglist__9526);arglist__9526=cljs.core.next(arglist__9526);var y=cljs.core.first(arglist__9526);var more=cljs.core.rest(arglist__9526);return G__9522__delegate(x,y,more)};G__9522.cljs$core$IFn$_invoke$arity$variadic=G__9522__delegate;return G__9522}();_GT_=function(x,y,var_args){var more=
var_args;switch(arguments.length){case 1:return _GT___1.call(this,x);case 2:return _GT___2.call(this,x,y);default:return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_GT_.cljs$lang$maxFixedArity=2;_GT_.cljs$lang$applyTo=_GT___3.cljs$lang$applyTo;_GT_.cljs$core$IFn$_invoke$arity$1=_GT___1;_GT_.cljs$core$IFn$_invoke$arity$2=_GT___2;_GT_.cljs$core$IFn$_invoke$arity$variadic=_GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_}();
cljs.core._GT__EQ_=function(){var _GT__EQ_=null;var _GT__EQ___1=function(x){return true};var _GT__EQ___2=function(x,y){return x>=y};var _GT__EQ___3=function(){var G__9527__delegate=function(x,y,more){while(true){if(x>=y)if(cljs.core.next.call(null,more)){var G__9528=y;var G__9529=cljs.core.first.call(null,more);var G__9530=cljs.core.next.call(null,more);x=G__9528;y=G__9529;more=G__9530;continue}else return y>=cljs.core.first.call(null,more);else return false;break}};var G__9527=function(x,y,var_args){var more=
null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9527__delegate.call(this,x,y,more)};G__9527.cljs$lang$maxFixedArity=2;G__9527.cljs$lang$applyTo=function(arglist__9531){var x=cljs.core.first(arglist__9531);arglist__9531=cljs.core.next(arglist__9531);var y=cljs.core.first(arglist__9531);var more=cljs.core.rest(arglist__9531);return G__9527__delegate(x,y,more)};G__9527.cljs$core$IFn$_invoke$arity$variadic=G__9527__delegate;return G__9527}();_GT__EQ_=
function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return _GT__EQ___1.call(this,x);case 2:return _GT__EQ___2.call(this,x,y);default:return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_GT__EQ_.cljs$lang$maxFixedArity=2;_GT__EQ_.cljs$lang$applyTo=_GT__EQ___3.cljs$lang$applyTo;_GT__EQ_.cljs$core$IFn$_invoke$arity$1=_GT__EQ___1;_GT__EQ_.cljs$core$IFn$_invoke$arity$2=_GT__EQ___2;_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic=
_GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;return _GT__EQ_}();cljs.core.dec=function dec(x){return x-1};
cljs.core.max=function(){var max=null;var max__1=function(x){return x};var max__2=function(x,y){var x__7039__auto__=x;var y__7040__auto__=y;return x__7039__auto__>y__7040__auto__?x__7039__auto__:y__7040__auto__};var max__3=function(){var G__9532__delegate=function(x,y,more){return cljs.core.reduce.call(null,max,function(){var x__7039__auto__=x;var y__7040__auto__=y;return x__7039__auto__>y__7040__auto__?x__7039__auto__:y__7040__auto__}(),more)};var G__9532=function(x,y,var_args){var more=null;if(arguments.length>
2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9532__delegate.call(this,x,y,more)};G__9532.cljs$lang$maxFixedArity=2;G__9532.cljs$lang$applyTo=function(arglist__9533){var x=cljs.core.first(arglist__9533);arglist__9533=cljs.core.next(arglist__9533);var y=cljs.core.first(arglist__9533);var more=cljs.core.rest(arglist__9533);return G__9532__delegate(x,y,more)};G__9532.cljs$core$IFn$_invoke$arity$variadic=G__9532__delegate;return G__9532}();max=function(x,y,var_args){var more=
var_args;switch(arguments.length){case 1:return max__1.call(this,x);case 2:return max__2.call(this,x,y);default:return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};max.cljs$lang$maxFixedArity=2;max.cljs$lang$applyTo=max__3.cljs$lang$applyTo;max.cljs$core$IFn$_invoke$arity$1=max__1;max.cljs$core$IFn$_invoke$arity$2=max__2;max.cljs$core$IFn$_invoke$arity$variadic=max__3.cljs$core$IFn$_invoke$arity$variadic;return max}();
cljs.core.min=function(){var min=null;var min__1=function(x){return x};var min__2=function(x,y){var x__7046__auto__=x;var y__7047__auto__=y;return x__7046__auto__<y__7047__auto__?x__7046__auto__:y__7047__auto__};var min__3=function(){var G__9534__delegate=function(x,y,more){return cljs.core.reduce.call(null,min,function(){var x__7046__auto__=x;var y__7047__auto__=y;return x__7046__auto__<y__7047__auto__?x__7046__auto__:y__7047__auto__}(),more)};var G__9534=function(x,y,var_args){var more=null;if(arguments.length>
2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9534__delegate.call(this,x,y,more)};G__9534.cljs$lang$maxFixedArity=2;G__9534.cljs$lang$applyTo=function(arglist__9535){var x=cljs.core.first(arglist__9535);arglist__9535=cljs.core.next(arglist__9535);var y=cljs.core.first(arglist__9535);var more=cljs.core.rest(arglist__9535);return G__9534__delegate(x,y,more)};G__9534.cljs$core$IFn$_invoke$arity$variadic=G__9534__delegate;return G__9534}();min=function(x,y,var_args){var more=
var_args;switch(arguments.length){case 1:return min__1.call(this,x);case 2:return min__2.call(this,x,y);default:return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};min.cljs$lang$maxFixedArity=2;min.cljs$lang$applyTo=min__3.cljs$lang$applyTo;min.cljs$core$IFn$_invoke$arity$1=min__1;min.cljs$core$IFn$_invoke$arity$2=min__2;min.cljs$core$IFn$_invoke$arity$variadic=min__3.cljs$core$IFn$_invoke$arity$variadic;return min}();
cljs.core.byte$=function byte$(x){return x};cljs.core.char$=function char$(x){if(typeof x==="number")return String.fromCharCode(x);else if(typeof x==="string"&&x.length===1)return x;else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error("Argument to char must be a character or number");else return null};cljs.core.short$=function short$(x){return x};cljs.core.float$=function float$(x){return x};cljs.core.double$=function double$(x){return x};cljs.core.unchecked_byte=function unchecked_byte(x){return x};
cljs.core.unchecked_char=function unchecked_char(x){return x};cljs.core.unchecked_short=function unchecked_short(x){return x};cljs.core.unchecked_float=function unchecked_float(x){return x};cljs.core.unchecked_double=function unchecked_double(x){return x};
cljs.core.unchecked_add=function(){var unchecked_add=null;var unchecked_add__0=function(){return 0};var unchecked_add__1=function(x){return x};var unchecked_add__2=function(x,y){return x+y};var unchecked_add__3=function(){var G__9536__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_add,x+y,more)};var G__9536=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9536__delegate.call(this,x,y,more)};
G__9536.cljs$lang$maxFixedArity=2;G__9536.cljs$lang$applyTo=function(arglist__9537){var x=cljs.core.first(arglist__9537);arglist__9537=cljs.core.next(arglist__9537);var y=cljs.core.first(arglist__9537);var more=cljs.core.rest(arglist__9537);return G__9536__delegate(x,y,more)};G__9536.cljs$core$IFn$_invoke$arity$variadic=G__9536__delegate;return G__9536}();unchecked_add=function(x,y,var_args){var more=var_args;switch(arguments.length){case 0:return unchecked_add__0.call(this);case 1:return unchecked_add__1.call(this,
x);case 2:return unchecked_add__2.call(this,x,y);default:return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_add.cljs$lang$maxFixedArity=2;unchecked_add.cljs$lang$applyTo=unchecked_add__3.cljs$lang$applyTo;unchecked_add.cljs$core$IFn$_invoke$arity$0=unchecked_add__0;unchecked_add.cljs$core$IFn$_invoke$arity$1=unchecked_add__1;unchecked_add.cljs$core$IFn$_invoke$arity$2=unchecked_add__2;unchecked_add.cljs$core$IFn$_invoke$arity$variadic=
unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;return unchecked_add}();
cljs.core.unchecked_add_int=function(){var unchecked_add_int=null;var unchecked_add_int__0=function(){return 0};var unchecked_add_int__1=function(x){return x};var unchecked_add_int__2=function(x,y){return x+y};var unchecked_add_int__3=function(){var G__9538__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_add_int,x+y,more)};var G__9538=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9538__delegate.call(this,
x,y,more)};G__9538.cljs$lang$maxFixedArity=2;G__9538.cljs$lang$applyTo=function(arglist__9539){var x=cljs.core.first(arglist__9539);arglist__9539=cljs.core.next(arglist__9539);var y=cljs.core.first(arglist__9539);var more=cljs.core.rest(arglist__9539);return G__9538__delegate(x,y,more)};G__9538.cljs$core$IFn$_invoke$arity$variadic=G__9538__delegate;return G__9538}();unchecked_add_int=function(x,y,var_args){var more=var_args;switch(arguments.length){case 0:return unchecked_add_int__0.call(this);case 1:return unchecked_add_int__1.call(this,
x);case 2:return unchecked_add_int__2.call(this,x,y);default:return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_add_int.cljs$lang$maxFixedArity=2;unchecked_add_int.cljs$lang$applyTo=unchecked_add_int__3.cljs$lang$applyTo;unchecked_add_int.cljs$core$IFn$_invoke$arity$0=unchecked_add_int__0;unchecked_add_int.cljs$core$IFn$_invoke$arity$1=unchecked_add_int__1;unchecked_add_int.cljs$core$IFn$_invoke$arity$2=
unchecked_add_int__2;unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic=unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;return unchecked_add_int}();cljs.core.unchecked_dec=function unchecked_dec(x){return x-1};cljs.core.unchecked_dec_int=function unchecked_dec_int(x){return x-1};
cljs.core.unchecked_divide_int=function(){var unchecked_divide_int=null;var unchecked_divide_int__1=function(x){return unchecked_divide_int.call(null,1,x)};var unchecked_divide_int__2=function(x,y){return x/y};var unchecked_divide_int__3=function(){var G__9540__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_divide_int,unchecked_divide_int.call(null,x,y),more)};var G__9540=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,
2),0);return G__9540__delegate.call(this,x,y,more)};G__9540.cljs$lang$maxFixedArity=2;G__9540.cljs$lang$applyTo=function(arglist__9541){var x=cljs.core.first(arglist__9541);arglist__9541=cljs.core.next(arglist__9541);var y=cljs.core.first(arglist__9541);var more=cljs.core.rest(arglist__9541);return G__9540__delegate(x,y,more)};G__9540.cljs$core$IFn$_invoke$arity$variadic=G__9540__delegate;return G__9540}();unchecked_divide_int=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return unchecked_divide_int__1.call(this,
x);case 2:return unchecked_divide_int__2.call(this,x,y);default:return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_divide_int.cljs$lang$maxFixedArity=2;unchecked_divide_int.cljs$lang$applyTo=unchecked_divide_int__3.cljs$lang$applyTo;unchecked_divide_int.cljs$core$IFn$_invoke$arity$1=unchecked_divide_int__1;unchecked_divide_int.cljs$core$IFn$_invoke$arity$2=unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic=unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;return unchecked_divide_int}();cljs.core.unchecked_inc=function unchecked_inc(x){return x+1};cljs.core.unchecked_inc_int=function unchecked_inc_int(x){return x+1};
cljs.core.unchecked_multiply=function(){var unchecked_multiply=null;var unchecked_multiply__0=function(){return 1};var unchecked_multiply__1=function(x){return x};var unchecked_multiply__2=function(x,y){return x*y};var unchecked_multiply__3=function(){var G__9542__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_multiply,x*y,more)};var G__9542=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9542__delegate.call(this,
x,y,more)};G__9542.cljs$lang$maxFixedArity=2;G__9542.cljs$lang$applyTo=function(arglist__9543){var x=cljs.core.first(arglist__9543);arglist__9543=cljs.core.next(arglist__9543);var y=cljs.core.first(arglist__9543);var more=cljs.core.rest(arglist__9543);return G__9542__delegate(x,y,more)};G__9542.cljs$core$IFn$_invoke$arity$variadic=G__9542__delegate;return G__9542}();unchecked_multiply=function(x,y,var_args){var more=var_args;switch(arguments.length){case 0:return unchecked_multiply__0.call(this);
case 1:return unchecked_multiply__1.call(this,x);case 2:return unchecked_multiply__2.call(this,x,y);default:return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_multiply.cljs$lang$maxFixedArity=2;unchecked_multiply.cljs$lang$applyTo=unchecked_multiply__3.cljs$lang$applyTo;unchecked_multiply.cljs$core$IFn$_invoke$arity$0=unchecked_multiply__0;unchecked_multiply.cljs$core$IFn$_invoke$arity$1=
unchecked_multiply__1;unchecked_multiply.cljs$core$IFn$_invoke$arity$2=unchecked_multiply__2;unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic=unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;return unchecked_multiply}();
cljs.core.unchecked_multiply_int=function(){var unchecked_multiply_int=null;var unchecked_multiply_int__0=function(){return 1};var unchecked_multiply_int__1=function(x){return x};var unchecked_multiply_int__2=function(x,y){return x*y};var unchecked_multiply_int__3=function(){var G__9544__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_multiply_int,x*y,more)};var G__9544=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,
2),0);return G__9544__delegate.call(this,x,y,more)};G__9544.cljs$lang$maxFixedArity=2;G__9544.cljs$lang$applyTo=function(arglist__9545){var x=cljs.core.first(arglist__9545);arglist__9545=cljs.core.next(arglist__9545);var y=cljs.core.first(arglist__9545);var more=cljs.core.rest(arglist__9545);return G__9544__delegate(x,y,more)};G__9544.cljs$core$IFn$_invoke$arity$variadic=G__9544__delegate;return G__9544}();unchecked_multiply_int=function(x,y,var_args){var more=var_args;switch(arguments.length){case 0:return unchecked_multiply_int__0.call(this);
case 1:return unchecked_multiply_int__1.call(this,x);case 2:return unchecked_multiply_int__2.call(this,x,y);default:return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_multiply_int.cljs$lang$maxFixedArity=2;unchecked_multiply_int.cljs$lang$applyTo=unchecked_multiply_int__3.cljs$lang$applyTo;unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0=unchecked_multiply_int__0;unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1=
unchecked_multiply_int__1;unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2=unchecked_multiply_int__2;unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic=unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;return unchecked_multiply_int}();cljs.core.unchecked_negate=function unchecked_negate(x){return-x};cljs.core.unchecked_negate_int=function unchecked_negate_int(x){return-x};
cljs.core.unchecked_remainder_int=function unchecked_remainder_int(x,n){return cljs.core.mod.call(null,x,n)};
cljs.core.unchecked_substract=function(){var unchecked_substract=null;var unchecked_substract__1=function(x){return-x};var unchecked_substract__2=function(x,y){return x-y};var unchecked_substract__3=function(){var G__9546__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_substract,x-y,more)};var G__9546=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9546__delegate.call(this,x,y,more)};
G__9546.cljs$lang$maxFixedArity=2;G__9546.cljs$lang$applyTo=function(arglist__9547){var x=cljs.core.first(arglist__9547);arglist__9547=cljs.core.next(arglist__9547);var y=cljs.core.first(arglist__9547);var more=cljs.core.rest(arglist__9547);return G__9546__delegate(x,y,more)};G__9546.cljs$core$IFn$_invoke$arity$variadic=G__9546__delegate;return G__9546}();unchecked_substract=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return unchecked_substract__1.call(this,x);case 2:return unchecked_substract__2.call(this,
x,y);default:return unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_substract.cljs$lang$maxFixedArity=2;unchecked_substract.cljs$lang$applyTo=unchecked_substract__3.cljs$lang$applyTo;unchecked_substract.cljs$core$IFn$_invoke$arity$1=unchecked_substract__1;unchecked_substract.cljs$core$IFn$_invoke$arity$2=unchecked_substract__2;unchecked_substract.cljs$core$IFn$_invoke$arity$variadic=unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract}();
cljs.core.unchecked_substract_int=function(){var unchecked_substract_int=null;var unchecked_substract_int__1=function(x){return-x};var unchecked_substract_int__2=function(x,y){return x-y};var unchecked_substract_int__3=function(){var G__9548__delegate=function(x,y,more){return cljs.core.reduce.call(null,unchecked_substract_int,x-y,more)};var G__9548=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9548__delegate.call(this,
x,y,more)};G__9548.cljs$lang$maxFixedArity=2;G__9548.cljs$lang$applyTo=function(arglist__9549){var x=cljs.core.first(arglist__9549);arglist__9549=cljs.core.next(arglist__9549);var y=cljs.core.first(arglist__9549);var more=cljs.core.rest(arglist__9549);return G__9548__delegate(x,y,more)};G__9548.cljs$core$IFn$_invoke$arity$variadic=G__9548__delegate;return G__9548}();unchecked_substract_int=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return unchecked_substract_int__1.call(this,
x);case 2:return unchecked_substract_int__2.call(this,x,y);default:return unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};unchecked_substract_int.cljs$lang$maxFixedArity=2;unchecked_substract_int.cljs$lang$applyTo=unchecked_substract_int__3.cljs$lang$applyTo;unchecked_substract_int.cljs$core$IFn$_invoke$arity$1=unchecked_substract_int__1;unchecked_substract_int.cljs$core$IFn$_invoke$arity$2=
unchecked_substract_int__2;unchecked_substract_int.cljs$core$IFn$_invoke$arity$variadic=unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic;return unchecked_substract_int}();cljs.core.fix=function fix(q){if(q>=0)return Math.floor.call(null,q);else return Math.ceil.call(null,q)};cljs.core.int$=function int$(x){return x|0};cljs.core.unchecked_int=function unchecked_int(x){return cljs.core.fix.call(null,x)};cljs.core.long$=function long$(x){return cljs.core.fix.call(null,x)};
cljs.core.unchecked_long=function unchecked_long(x){return cljs.core.fix.call(null,x)};cljs.core.booleans=function booleans(x){return x};cljs.core.bytes=function bytes(x){return x};cljs.core.chars=function chars(x){return x};cljs.core.shorts=function shorts(x){return x};cljs.core.ints=function ints(x){return x};cljs.core.floats=function floats(x){return x};cljs.core.doubles=function doubles(x){return x};cljs.core.longs=function longs(x){return x};cljs.core.js_mod=function js_mod(n,d){return n%d};
cljs.core.mod=function mod(n,d){return(n%d+d)%d};cljs.core.quot=function quot(n,d){var rem=n%d;return cljs.core.fix.call(null,(n-rem)/d)};cljs.core.rem=function rem(n,d){var q=cljs.core.quot.call(null,n,d);return n-d*q};
cljs.core.rand=function(){var rand=null;var rand__0=function(){return Math.random.call(null)};var rand__1=function(n){return n*rand.call(null)};rand=function(n){switch(arguments.length){case 0:return rand__0.call(this);case 1:return rand__1.call(this,n)}throw new Error("Invalid arity: "+arguments.length);};rand.cljs$core$IFn$_invoke$arity$0=rand__0;rand.cljs$core$IFn$_invoke$arity$1=rand__1;return rand}();
cljs.core.rand_int=function rand_int(n){return cljs.core.fix.call(null,cljs.core.rand.call(null,n))};cljs.core.bit_xor=function bit_xor(x,y){return x^y};cljs.core.bit_and=function bit_and(x,y){return x&y};cljs.core.bit_or=function bit_or(x,y){return x|y};cljs.core.bit_and_not=function bit_and_not(x,y){return x&~y};cljs.core.bit_clear=function bit_clear(x,n){return x&~(1<<n)};cljs.core.bit_flip=function bit_flip(x,n){return x^1<<n};cljs.core.bit_not=function bit_not(x){return~x};
cljs.core.bit_set=function bit_set(x,n){return x|1<<n};cljs.core.bit_test=function bit_test(x,n){return(x&1<<n)!=0};cljs.core.bit_shift_left=function bit_shift_left(x,n){return x<<n};cljs.core.bit_shift_right=function bit_shift_right(x,n){return x>>n};cljs.core.bit_shift_right_zero_fill=function bit_shift_right_zero_fill(x,n){return x>>>n};cljs.core.unsigned_bit_shift_right=function unsigned_bit_shift_right(x,n){return x>>>n};
cljs.core.bit_count=function bit_count(v){var v__$1=v-(v>>1&1431655765);var v__$2=(v__$1&858993459)+(v__$1>>2&858993459);return(v__$2+(v__$2>>4)&252645135)*16843009>>24};
cljs.core._EQ__EQ_=function(){var _EQ__EQ_=null;var _EQ__EQ___1=function(x){return true};var _EQ__EQ___2=function(x,y){return cljs.core._equiv.call(null,x,y)};var _EQ__EQ___3=function(){var G__9550__delegate=function(x,y,more){while(true){if(_EQ__EQ_.call(null,x,y))if(cljs.core.next.call(null,more)){var G__9551=y;var G__9552=cljs.core.first.call(null,more);var G__9553=cljs.core.next.call(null,more);x=G__9551;y=G__9552;more=G__9553;continue}else return _EQ__EQ_.call(null,y,cljs.core.first.call(null,
more));else return false;break}};var G__9550=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9550__delegate.call(this,x,y,more)};G__9550.cljs$lang$maxFixedArity=2;G__9550.cljs$lang$applyTo=function(arglist__9554){var x=cljs.core.first(arglist__9554);arglist__9554=cljs.core.next(arglist__9554);var y=cljs.core.first(arglist__9554);var more=cljs.core.rest(arglist__9554);return G__9550__delegate(x,y,more)};G__9550.cljs$core$IFn$_invoke$arity$variadic=
G__9550__delegate;return G__9550}();_EQ__EQ_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return _EQ__EQ___1.call(this,x);case 2:return _EQ__EQ___2.call(this,x,y);default:return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};_EQ__EQ_.cljs$lang$maxFixedArity=2;_EQ__EQ_.cljs$lang$applyTo=_EQ__EQ___3.cljs$lang$applyTo;_EQ__EQ_.cljs$core$IFn$_invoke$arity$1=_EQ__EQ___1;_EQ__EQ_.cljs$core$IFn$_invoke$arity$2=
_EQ__EQ___2;_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic=_EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;return _EQ__EQ_}();cljs.core.pos_QMARK_=function pos_QMARK_(n){return n>0};cljs.core.zero_QMARK_=function zero_QMARK_(n){return n===0};cljs.core.neg_QMARK_=function neg_QMARK_(x){return x<0};
cljs.core.nthnext=function nthnext(coll,n){var n__$1=n;var xs=cljs.core.seq.call(null,coll);while(true){if(xs&&n__$1>0){var G__9555=n__$1-1;var G__9556=cljs.core.next.call(null,xs);n__$1=G__9555;xs=G__9556;continue}else return xs;break}};
cljs.core.str=function(){var str=null;var str__0=function(){return""};var str__1=function(x){if(x==null)return"";else return x.toString()};var str__2=function(){var G__9557__delegate=function(x,ys){var sb=new goog.string.StringBuffer(str.call(null,x));var more=ys;while(true){if(cljs.core.truth_(more)){var G__9558=sb.append(str.call(null,cljs.core.first.call(null,more)));var G__9559=cljs.core.next.call(null,more);sb=G__9558;more=G__9559;continue}else return sb.toString();break}};var G__9557=function(x,
var_args){var ys=null;if(arguments.length>1)ys=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return G__9557__delegate.call(this,x,ys)};G__9557.cljs$lang$maxFixedArity=1;G__9557.cljs$lang$applyTo=function(arglist__9560){var x=cljs.core.first(arglist__9560);var ys=cljs.core.rest(arglist__9560);return G__9557__delegate(x,ys)};G__9557.cljs$core$IFn$_invoke$arity$variadic=G__9557__delegate;return G__9557}();str=function(x,var_args){var ys=var_args;switch(arguments.length){case 0:return str__0.call(this);
case 1:return str__1.call(this,x);default:return str__2.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq(arguments,1))}throw new Error("Invalid arity: "+arguments.length);};str.cljs$lang$maxFixedArity=1;str.cljs$lang$applyTo=str__2.cljs$lang$applyTo;str.cljs$core$IFn$_invoke$arity$0=str__0;str.cljs$core$IFn$_invoke$arity$1=str__1;str.cljs$core$IFn$_invoke$arity$variadic=str__2.cljs$core$IFn$_invoke$arity$variadic;return str}();
cljs.core.subs=function(){var subs=null;var subs__2=function(s,start){return s.substring(start)};var subs__3=function(s,start,end){return s.substring(start,end)};subs=function(s,start,end){switch(arguments.length){case 2:return subs__2.call(this,s,start);case 3:return subs__3.call(this,s,start,end)}throw new Error("Invalid arity: "+arguments.length);};subs.cljs$core$IFn$_invoke$arity$2=subs__2;subs.cljs$core$IFn$_invoke$arity$3=subs__3;return subs}();
cljs.core.equiv_sequential=function equiv_sequential(x,y){return cljs.core.boolean$.call(null,cljs.core.sequential_QMARK_.call(null,y)?function(){var xs=cljs.core.seq.call(null,x);var ys=cljs.core.seq.call(null,y);while(true){if(xs==null)return ys==null;else if(ys==null)return false;else if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){var G__9561=cljs.core.next.call(null,xs);var G__9562=cljs.core.next.call(null,ys);xs=G__9561;ys=G__9562;continue}else if(new cljs.core.Keyword(null,
"else","else",1017020587))return false;else return null;break}}():null)};cljs.core.hash_combine=function hash_combine(seed,hash){return seed^hash+2654435769+(seed<<6)+(seed>>2)};
cljs.core.hash_coll=function hash_coll(coll){if(cljs.core.seq.call(null,coll)){var res=cljs.core.hash.call(null,cljs.core.first.call(null,coll));var s=cljs.core.next.call(null,coll);while(true){if(s==null)return res;else{var G__9563=cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));var G__9564=cljs.core.next.call(null,s);res=G__9563;s=G__9564;continue}break}}else return 0};
cljs.core.hash_imap=function hash_imap(m){var h=0;var s=cljs.core.seq.call(null,m);while(true){if(s){var e=cljs.core.first.call(null,s);var G__9565=(h+(cljs.core.hash.call(null,cljs.core.key.call(null,e))^cljs.core.hash.call(null,cljs.core.val.call(null,e))))%4503599627370496;var G__9566=cljs.core.next.call(null,s);h=G__9565;s=G__9566;continue}else return h;break}};
cljs.core.hash_iset=function hash_iset(s){var h=0;var s__$1=cljs.core.seq.call(null,s);while(true){if(s__$1){var e=cljs.core.first.call(null,s__$1);var G__9567=(h+cljs.core.hash.call(null,e))%4503599627370496;var G__9568=cljs.core.next.call(null,s__$1);h=G__9567;s__$1=G__9568;continue}else return h;break}};
cljs.core.extend_object_BANG_=function extend_object_BANG_(obj,fn_map){var seq__9575_9581=cljs.core.seq.call(null,fn_map);var chunk__9576_9582=null;var count__9577_9583=0;var i__9578_9584=0;while(true){if(i__9578_9584<count__9577_9583){var vec__9579_9585=cljs.core._nth.call(null,chunk__9576_9582,i__9578_9584);var key_name_9586=cljs.core.nth.call(null,vec__9579_9585,0,null);var f_9587=cljs.core.nth.call(null,vec__9579_9585,1,null);var str_name_9588=cljs.core.name.call(null,key_name_9586);obj[str_name_9588]=
f_9587;var G__9589=seq__9575_9581;var G__9590=chunk__9576_9582;var G__9591=count__9577_9583;var G__9592=i__9578_9584+1;seq__9575_9581=G__9589;chunk__9576_9582=G__9590;count__9577_9583=G__9591;i__9578_9584=G__9592;continue}else{var temp__4092__auto___9593=cljs.core.seq.call(null,seq__9575_9581);if(temp__4092__auto___9593){var seq__9575_9594__$1=temp__4092__auto___9593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9575_9594__$1)){var c__7480__auto___9595=cljs.core.chunk_first.call(null,seq__9575_9594__$1);
var G__9596=cljs.core.chunk_rest.call(null,seq__9575_9594__$1);var G__9597=c__7480__auto___9595;var G__9598=cljs.core.count.call(null,c__7480__auto___9595);var G__9599=0;seq__9575_9581=G__9596;chunk__9576_9582=G__9597;count__9577_9583=G__9598;i__9578_9584=G__9599;continue}else{var vec__9580_9600=cljs.core.first.call(null,seq__9575_9594__$1);var key_name_9601=cljs.core.nth.call(null,vec__9580_9600,0,null);var f_9602=cljs.core.nth.call(null,vec__9580_9600,1,null);var str_name_9603=cljs.core.name.call(null,
key_name_9601);obj[str_name_9603]=f_9602;var G__9604=cljs.core.next.call(null,seq__9575_9594__$1);var G__9605=null;var G__9606=0;var G__9607=0;seq__9575_9581=G__9604;chunk__9576_9582=G__9605;count__9577_9583=G__9606;i__9578_9584=G__9607;continue}}else;}break}return obj};cljs.core.List=function(meta,first,rest,count,__hash){this.meta=meta;this.first=first;this.rest=rest;this.count=count;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=65937646;this.cljs$lang$protocol_mask$partition1$=8192};
cljs.core.List.cljs$lang$type=true;cljs.core.List.cljs$lang$ctorStr="cljs.core/List";cljs.core.List.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/List")};
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.List.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.count===1)return null;else return self__.rest};
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return new cljs.core.List(self__.meta,o,coll__$1,self__.count+1,null)};cljs.core.List.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.count};
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.first};cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._rest.call(null,coll__$1)};cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.first};
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.count===1)return cljs.core.List.EMPTY;else return self__.rest};cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash)};cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash)};
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.List.EMPTY};cljs.core.__GT_List=function __GT_List(meta,first,rest,count,__hash){return new cljs.core.List(meta,first,rest,count,__hash)};
cljs.core.EmptyList=function(meta){this.meta=meta;this.cljs$lang$protocol_mask$partition0$=65937614;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.EmptyList.cljs$lang$type=true;cljs.core.EmptyList.cljs$lang$ctorStr="cljs.core/EmptyList";cljs.core.EmptyList.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/EmptyList")};
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;return 0};cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;return null};cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return new cljs.core.List(self__.meta,o,null,1,null)};
cljs.core.EmptyList.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return null};cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return 0};cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1=function(coll){var self__=this;var coll__$1=this;return null};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1=function(coll){var self__=this;var coll__$1=this;throw new Error("Can't pop empty list");};cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return null};cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.List.EMPTY};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.EmptyList(meta__$1)};cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.EmptyList(self__.meta)};
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};cljs.core.__GT_EmptyList=function __GT_EmptyList(meta){return new cljs.core.EmptyList(meta)};cljs.core.List.EMPTY=new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_=function reversible_QMARK_(coll){var G__9609=coll;if(G__9609){var bit__7382__auto__=G__9609.cljs$lang$protocol_mask$partition0$&134217728;if(bit__7382__auto__||G__9609.cljs$core$IReversible$)return true;else if(!G__9609.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__9609);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__9609)};
cljs.core.rseq=function rseq(coll){return cljs.core._rseq.call(null,coll)};cljs.core.reverse=function reverse(coll){if(cljs.core.reversible_QMARK_.call(null,coll))return cljs.core.rseq.call(null,coll);else return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll)};
cljs.core.list=function(){var list__delegate=function(xs){var arr=xs instanceof cljs.core.IndexedSeq&&xs.i===0?xs.arr:function(){var arr=[];var xs__$1=xs;while(true){if(!(xs__$1==null)){arr.push(cljs.core._first.call(null,xs__$1));var G__9610=cljs.core._next.call(null,xs__$1);xs__$1=G__9610;continue}else return arr;break}}();var i=arr.length;var r=cljs.core.List.EMPTY;while(true){if(i>0){var G__9611=i-1;var G__9612=cljs.core._conj.call(null,r,arr[i-1]);i=G__9611;r=G__9612;continue}else return r;break}};
var list=function(var_args){var xs=null;if(arguments.length>0)xs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return list__delegate.call(this,xs)};list.cljs$lang$maxFixedArity=0;list.cljs$lang$applyTo=function(arglist__9613){var xs=cljs.core.seq(arglist__9613);return list__delegate(xs)};list.cljs$core$IFn$_invoke$arity$variadic=list__delegate;return list}();
cljs.core.Cons=function(meta,first,rest,__hash){this.meta=meta;this.first=first;this.rest=rest;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=65929452;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.Cons.cljs$lang$type=true;cljs.core.Cons.cljs$lang$ctorStr="cljs.core/Cons";cljs.core.Cons.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Cons")};
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.rest==null)return null;else return cljs.core.seq.call(null,self__.rest)};
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return new cljs.core.Cons(null,o,coll__$1,self__.__hash)};cljs.core.Cons.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.first};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.rest==null)return cljs.core.List.EMPTY;else return self__.rest};cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash)};cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash)};cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.__GT_Cons=function __GT_Cons(meta,first,rest,__hash){return new cljs.core.Cons(meta,first,rest,__hash)};
cljs.core.cons=function cons(x,coll){if(function(){var or__6732__auto__=coll==null;if(or__6732__auto__)return or__6732__auto__;else{var G__9617=coll;if(G__9617){var bit__7375__auto__=G__9617.cljs$lang$protocol_mask$partition0$&64;if(bit__7375__auto__||G__9617.cljs$core$ISeq$)return true;else return false}else return false}}())return new cljs.core.Cons(null,x,coll,null);else return new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null)};
cljs.core.list_QMARK_=function list_QMARK_(x){var G__9619=x;if(G__9619){var bit__7382__auto__=G__9619.cljs$lang$protocol_mask$partition0$&33554432;if(bit__7382__auto__||G__9619.cljs$core$IList$)return true;else if(!G__9619.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__9619);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__9619)};
cljs.core.Keyword=function(ns,name,fqn,_hash){this.ns=ns;this.name=name;this.fqn=fqn;this._hash=_hash;this.cljs$lang$protocol_mask$partition0$=2153775105;this.cljs$lang$protocol_mask$partition1$=4096};cljs.core.Keyword.cljs$lang$type=true;cljs.core.Keyword.cljs$lang$ctorStr="cljs.core/Keyword";cljs.core.Keyword.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Keyword")};
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(o,writer,_){var self__=this;var o__$1=this;return cljs.core._write.call(null,writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(""))};cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1=function(_){var self__=this;var ___$1=this;return self__.name};cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1=function(_){var self__=this;var ___$1=this;return self__.ns};
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1=function(_){var self__=this;var ___$1=this;if(self__._hash==null){self__._hash=cljs.core.hash_combine.call(null,cljs.core.hash.call(null,self__.ns),cljs.core.hash.call(null,self__.name))+2654435769;return self__._hash}else return self__._hash};
cljs.core.Keyword.prototype.call=function(){var G__9621=null;var G__9621__2=function(self__,coll){var self__=this;var self____$1=this;var kw=self____$1;return cljs.core.get.call(null,coll,kw)};var G__9621__3=function(self__,coll,not_found){var self__=this;var self____$1=this;var kw=self____$1;return cljs.core.get.call(null,coll,kw,not_found)};G__9621=function(self__,coll,not_found){switch(arguments.length){case 2:return G__9621__2.call(this,self__,coll);case 3:return G__9621__3.call(this,self__,coll,
not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9621}();cljs.core.Keyword.prototype.apply=function(self__,args9620){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9620)))};cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1=function(coll){var self__=this;var kw=this;return cljs.core.get.call(null,coll,kw)};
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2=function(coll,not_found){var self__=this;var kw=this;return cljs.core.get.call(null,coll,kw,not_found)};cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2=function(_,other){var self__=this;var ___$1=this;if(other instanceof cljs.core.Keyword)return self__.fqn===other.fqn;else return false};cljs.core.Keyword.prototype.toString=function(){var self__=this;var _=this;return[cljs.core.str(":"),cljs.core.str(self__.fqn)].join("")};
cljs.core.__GT_Keyword=function __GT_Keyword(ns,name,fqn,_hash){return new cljs.core.Keyword(ns,name,fqn,_hash)};cljs.core.keyword_QMARK_=function keyword_QMARK_(x){return x instanceof cljs.core.Keyword};cljs.core.keyword_identical_QMARK_=function keyword_identical_QMARK_(x,y){if(x===y)return true;else if(x instanceof cljs.core.Keyword&&y instanceof cljs.core.Keyword)return x.fqn===y.fqn;else return false};
cljs.core.namespace=function namespace(x){if(function(){var G__9623=x;if(G__9623){var bit__7375__auto__=G__9623.cljs$lang$protocol_mask$partition1$&4096;if(bit__7375__auto__||G__9623.cljs$core$INamed$)return true;else return false}else return false}())return cljs.core._namespace.call(null,x);else throw new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join(""));};
cljs.core.keyword=function(){var keyword=null;var keyword__1=function(name){if(name instanceof cljs.core.Keyword)return name;else if(name instanceof cljs.core.Symbol)return new cljs.core.Keyword(cljs.core.namespace.call(null,name),cljs.core.name.call(null,name),name.str,null);else if(typeof name==="string"){var parts=name.split("/");if(parts.length===2)return new cljs.core.Keyword(parts[0],parts[1],name,null);else return new cljs.core.Keyword(null,parts[0],name,null)}else return null};var keyword__2=
function(ns,name){return new cljs.core.Keyword(ns,name,[cljs.core.str(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(""):null),cljs.core.str(name)].join(""),null)};keyword=function(ns,name){switch(arguments.length){case 1:return keyword__1.call(this,ns);case 2:return keyword__2.call(this,ns,name)}throw new Error("Invalid arity: "+arguments.length);};keyword.cljs$core$IFn$_invoke$arity$1=keyword__1;keyword.cljs$core$IFn$_invoke$arity$2=keyword__2;return keyword}();
cljs.core.LazySeq=function(meta,fn,s,__hash){this.meta=meta;this.fn=fn;this.s=s;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374988};cljs.core.LazySeq.cljs$lang$type=true;cljs.core.LazySeq.cljs$lang$ctorStr="cljs.core/LazySeq";cljs.core.LazySeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/LazySeq")};
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;cljs.core._seq.call(null,coll__$1);if(self__.s==null)return null;else return cljs.core.next.call(null,self__.s)};cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};cljs.core.LazySeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.LazySeq.prototype.sval=function(){var self__=this;var coll=this;if(self__.fn==null)return self__.s;else{self__.s=self__.fn.call(null);self__.fn=null;return self__.s}};cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;coll__$1.sval();if(self__.s==null)return null;else{var ls=self__.s;while(true){if(ls instanceof cljs.core.LazySeq){var G__9624=ls.sval();ls=G__9624;continue}else{self__.s=ls;return cljs.core.seq.call(null,self__.s)}break}}};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;cljs.core._seq.call(null,coll__$1);if(self__.s==null)return null;else return cljs.core.first.call(null,self__.s)};cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;cljs.core._seq.call(null,coll__$1);if(!(self__.s==null))return cljs.core.rest.call(null,self__.s);else return cljs.core.List.EMPTY};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash)};cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.__GT_LazySeq=function __GT_LazySeq(meta,fn,s,__hash){return new cljs.core.LazySeq(meta,fn,s,__hash)};cljs.core.ChunkBuffer=function(buf,end){this.buf=buf;this.end=end;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2};cljs.core.ChunkBuffer.cljs$lang$type=true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr="cljs.core/ChunkBuffer";cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ChunkBuffer")};cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1=function(_){var self__=this;var ___$1=this;return self__.end};
cljs.core.ChunkBuffer.prototype.add=function(o){var self__=this;var _=this;self__.buf[self__.end]=o;return self__.end=self__.end+1};cljs.core.ChunkBuffer.prototype.chunk=function(o){var self__=this;var _=this;var ret=new cljs.core.ArrayChunk(self__.buf,0,self__.end);self__.buf=null;return ret};cljs.core.__GT_ChunkBuffer=function __GT_ChunkBuffer(buf,end){return new cljs.core.ChunkBuffer(buf,end)};
cljs.core.chunk_buffer=function chunk_buffer(capacity){return new cljs.core.ChunkBuffer(new Array(capacity),0)};cljs.core.ArrayChunk=function(arr,off,end){this.arr=arr;this.off=off;this.end=end;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=524306};cljs.core.ArrayChunk.cljs$lang$type=true;cljs.core.ArrayChunk.cljs$lang$ctorStr="cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ArrayChunk")};cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.array_reduce.call(null,self__.arr,f,self__.arr[self__.off],self__.off+1)};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off)};cljs.core.ArrayChunk.prototype.cljs$core$IChunk$=true;cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.off===self__.end)throw new Error("-drop-first of empty chunk");else return new cljs.core.ArrayChunk(self__.arr,self__.off+1,self__.end)};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2=function(coll,i){var self__=this;var coll__$1=this;return self__.arr[self__.off+i]};cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3=function(coll,i,not_found){var self__=this;var coll__$1=this;if(i>=0&&i<self__.end-self__.off)return self__.arr[self__.off+i];else return not_found};cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1=function(_){var self__=this;var ___$1=this;return self__.end-self__.off};
cljs.core.__GT_ArrayChunk=function __GT_ArrayChunk(arr,off,end){return new cljs.core.ArrayChunk(arr,off,end)};
cljs.core.array_chunk=function(){var array_chunk=null;var array_chunk__1=function(arr){return new cljs.core.ArrayChunk(arr,0,arr.length)};var array_chunk__2=function(arr,off){return new cljs.core.ArrayChunk(arr,off,arr.length)};var array_chunk__3=function(arr,off,end){return new cljs.core.ArrayChunk(arr,off,end)};array_chunk=function(arr,off,end){switch(arguments.length){case 1:return array_chunk__1.call(this,arr);case 2:return array_chunk__2.call(this,arr,off);case 3:return array_chunk__3.call(this,
arr,off,end)}throw new Error("Invalid arity: "+arguments.length);};array_chunk.cljs$core$IFn$_invoke$arity$1=array_chunk__1;array_chunk.cljs$core$IFn$_invoke$arity$2=array_chunk__2;array_chunk.cljs$core$IFn$_invoke$arity$3=array_chunk__3;return array_chunk}();cljs.core.ChunkedCons=function(chunk,more,meta,__hash){this.chunk=chunk;this.more=more;this.meta=meta;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=31850732;this.cljs$lang$protocol_mask$partition1$=1536};
cljs.core.ChunkedCons.cljs$lang$type=true;cljs.core.ChunkedCons.cljs$lang$ctorStr="cljs.core/ChunkedCons";cljs.core.ChunkedCons.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ChunkedCons")};
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;if(cljs.core._count.call(null,self__.chunk)>1)return new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null);else{var more__$1=cljs.core._seq.call(null,self__.more);if(more__$1==null)return null;else return more__$1}};
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2=function(this$,o){var self__=this;var this$__$1=this;return cljs.core.cons.call(null,o,this$__$1)};cljs.core.ChunkedCons.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,self__.chunk,0)};cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(cljs.core._count.call(null,self__.chunk)>1)return new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null);else if(self__.more==null)return cljs.core.List.EMPTY;else return self__.more};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.more==null)return null;else return self__.more};cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,m){var self__=this;var coll__$1=this;return new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash)};cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.chunk};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.more==null)return cljs.core.List.EMPTY;else return self__.more};cljs.core.__GT_ChunkedCons=function __GT_ChunkedCons(chunk,more,meta,__hash){return new cljs.core.ChunkedCons(chunk,more,meta,__hash)};cljs.core.chunk_cons=function chunk_cons(chunk,rest){if(cljs.core._count.call(null,chunk)===0)return rest;else return new cljs.core.ChunkedCons(chunk,rest,null,null)};
cljs.core.chunk_append=function chunk_append(b,x){return b.add(x)};cljs.core.chunk=function chunk(b){return b.chunk()};cljs.core.chunk_first=function chunk_first(s){return cljs.core._chunked_first.call(null,s)};cljs.core.chunk_rest=function chunk_rest(s){return cljs.core._chunked_rest.call(null,s)};
cljs.core.chunk_next=function chunk_next(s){if(function(){var G__9626=s;if(G__9626){var bit__7375__auto__=G__9626.cljs$lang$protocol_mask$partition1$&1024;if(bit__7375__auto__||G__9626.cljs$core$IChunkedNext$)return true;else return false}else return false}())return cljs.core._chunked_next.call(null,s);else return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s))};
cljs.core.to_array=function to_array(s){var ary=[];var s__$1=s;while(true){if(cljs.core.seq.call(null,s__$1)){ary.push(cljs.core.first.call(null,s__$1));var G__9627=cljs.core.next.call(null,s__$1);s__$1=G__9627;continue}else return ary;break}};
cljs.core.to_array_2d=function to_array_2d(coll){var ret=new Array(cljs.core.count.call(null,coll));var i_9628=0;var xs_9629=cljs.core.seq.call(null,coll);while(true){if(xs_9629){ret[i_9628]=cljs.core.to_array.call(null,cljs.core.first.call(null,xs_9629));var G__9630=i_9628+1;var G__9631=cljs.core.next.call(null,xs_9629);i_9628=G__9630;xs_9629=G__9631;continue}else;break}return ret};
cljs.core.int_array=function(){var int_array=null;var int_array__1=function(size_or_seq){if(typeof size_or_seq==="number")return int_array.call(null,size_or_seq,null);else return cljs.core.into_array.call(null,size_or_seq)};var int_array__2=function(size,init_val_or_seq){var a=new Array(size);if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){var s=cljs.core.seq.call(null,init_val_or_seq);var i=0;var s__$1=s;while(true){if(s__$1&&i<size){a[i]=cljs.core.first.call(null,s__$1);var G__9632=i+1;var G__9633=
cljs.core.next.call(null,s__$1);i=G__9632;s__$1=G__9633;continue}else return a;break}}else{var n__7580__auto___9634=size;var i_9635=0;while(true){if(i_9635<n__7580__auto___9634){a[i_9635]=init_val_or_seq;var G__9636=i_9635+1;i_9635=G__9636;continue}else;break}return a}};int_array=function(size,init_val_or_seq){switch(arguments.length){case 1:return int_array__1.call(this,size);case 2:return int_array__2.call(this,size,init_val_or_seq)}throw new Error("Invalid arity: "+arguments.length);};int_array.cljs$core$IFn$_invoke$arity$1=
int_array__1;int_array.cljs$core$IFn$_invoke$arity$2=int_array__2;return int_array}();
cljs.core.long_array=function(){var long_array=null;var long_array__1=function(size_or_seq){if(typeof size_or_seq==="number")return long_array.call(null,size_or_seq,null);else return cljs.core.into_array.call(null,size_or_seq)};var long_array__2=function(size,init_val_or_seq){var a=new Array(size);if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){var s=cljs.core.seq.call(null,init_val_or_seq);var i=0;var s__$1=s;while(true){if(s__$1&&i<size){a[i]=cljs.core.first.call(null,s__$1);var G__9637=i+1;
var G__9638=cljs.core.next.call(null,s__$1);i=G__9637;s__$1=G__9638;continue}else return a;break}}else{var n__7580__auto___9639=size;var i_9640=0;while(true){if(i_9640<n__7580__auto___9639){a[i_9640]=init_val_or_seq;var G__9641=i_9640+1;i_9640=G__9641;continue}else;break}return a}};long_array=function(size,init_val_or_seq){switch(arguments.length){case 1:return long_array__1.call(this,size);case 2:return long_array__2.call(this,size,init_val_or_seq)}throw new Error("Invalid arity: "+arguments.length);
};long_array.cljs$core$IFn$_invoke$arity$1=long_array__1;long_array.cljs$core$IFn$_invoke$arity$2=long_array__2;return long_array}();
cljs.core.double_array=function(){var double_array=null;var double_array__1=function(size_or_seq){if(typeof size_or_seq==="number")return double_array.call(null,size_or_seq,null);else return cljs.core.into_array.call(null,size_or_seq)};var double_array__2=function(size,init_val_or_seq){var a=new Array(size);if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){var s=cljs.core.seq.call(null,init_val_or_seq);var i=0;var s__$1=s;while(true){if(s__$1&&i<size){a[i]=cljs.core.first.call(null,s__$1);var G__9642=
i+1;var G__9643=cljs.core.next.call(null,s__$1);i=G__9642;s__$1=G__9643;continue}else return a;break}}else{var n__7580__auto___9644=size;var i_9645=0;while(true){if(i_9645<n__7580__auto___9644){a[i_9645]=init_val_or_seq;var G__9646=i_9645+1;i_9645=G__9646;continue}else;break}return a}};double_array=function(size,init_val_or_seq){switch(arguments.length){case 1:return double_array__1.call(this,size);case 2:return double_array__2.call(this,size,init_val_or_seq)}throw new Error("Invalid arity: "+arguments.length);
};double_array.cljs$core$IFn$_invoke$arity$1=double_array__1;double_array.cljs$core$IFn$_invoke$arity$2=double_array__2;return double_array}();
cljs.core.object_array=function(){var object_array=null;var object_array__1=function(size_or_seq){if(typeof size_or_seq==="number")return object_array.call(null,size_or_seq,null);else return cljs.core.into_array.call(null,size_or_seq)};var object_array__2=function(size,init_val_or_seq){var a=new Array(size);if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){var s=cljs.core.seq.call(null,init_val_or_seq);var i=0;var s__$1=s;while(true){if(s__$1&&i<size){a[i]=cljs.core.first.call(null,s__$1);var G__9647=
i+1;var G__9648=cljs.core.next.call(null,s__$1);i=G__9647;s__$1=G__9648;continue}else return a;break}}else{var n__7580__auto___9649=size;var i_9650=0;while(true){if(i_9650<n__7580__auto___9649){a[i_9650]=init_val_or_seq;var G__9651=i_9650+1;i_9650=G__9651;continue}else;break}return a}};object_array=function(size,init_val_or_seq){switch(arguments.length){case 1:return object_array__1.call(this,size);case 2:return object_array__2.call(this,size,init_val_or_seq)}throw new Error("Invalid arity: "+arguments.length);
};object_array.cljs$core$IFn$_invoke$arity$1=object_array__1;object_array.cljs$core$IFn$_invoke$arity$2=object_array__2;return object_array}();cljs.core.bounded_count=function bounded_count(s,n){if(cljs.core.counted_QMARK_.call(null,s))return cljs.core.count.call(null,s);else{var s__$1=s;var i=n;var sum=0;while(true){if(i>0&&cljs.core.seq.call(null,s__$1)){var G__9652=cljs.core.next.call(null,s__$1);var G__9653=i-1;var G__9654=sum+1;s__$1=G__9652;i=G__9653;sum=G__9654;continue}else return sum;break}}};
cljs.core.spread=function spread(arglist){if(arglist==null)return null;else if(cljs.core.next.call(null,arglist)==null)return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));else return null};
cljs.core.concat=function(){var concat=null;var concat__0=function(){return new cljs.core.LazySeq(null,function(){return null},null,null)};var concat__1=function(x){return new cljs.core.LazySeq(null,function(){return x},null,null)};var concat__2=function(x,y){return new cljs.core.LazySeq(null,function(){var s=cljs.core.seq.call(null,x);if(s)if(cljs.core.chunked_seq_QMARK_.call(null,s))return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,
s),y));else return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));else return y},null,null)};var concat__3=function(){var G__9655__delegate=function(x,y,zs){var cat=function cat(xys,zs__$1){return new cljs.core.LazySeq(null,function(){var xys__$1=cljs.core.seq.call(null,xys);if(xys__$1)if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1))return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,
xys__$1),zs__$1));else return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));else if(cljs.core.truth_(zs__$1))return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));else return null},null,null)};return cat.call(null,concat.call(null,x,y),zs)};var G__9655=function(x,y,var_args){var zs=null;if(arguments.length>2)zs=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9655__delegate.call(this,
x,y,zs)};G__9655.cljs$lang$maxFixedArity=2;G__9655.cljs$lang$applyTo=function(arglist__9656){var x=cljs.core.first(arglist__9656);arglist__9656=cljs.core.next(arglist__9656);var y=cljs.core.first(arglist__9656);var zs=cljs.core.rest(arglist__9656);return G__9655__delegate(x,y,zs)};G__9655.cljs$core$IFn$_invoke$arity$variadic=G__9655__delegate;return G__9655}();concat=function(x,y,var_args){var zs=var_args;switch(arguments.length){case 0:return concat__0.call(this);case 1:return concat__1.call(this,
x);case 2:return concat__2.call(this,x,y);default:return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};concat.cljs$lang$maxFixedArity=2;concat.cljs$lang$applyTo=concat__3.cljs$lang$applyTo;concat.cljs$core$IFn$_invoke$arity$0=concat__0;concat.cljs$core$IFn$_invoke$arity$1=concat__1;concat.cljs$core$IFn$_invoke$arity$2=concat__2;concat.cljs$core$IFn$_invoke$arity$variadic=concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat}();
cljs.core.list_STAR_=function(){var list_STAR_=null;var list_STAR___1=function(args){return cljs.core.seq.call(null,args)};var list_STAR___2=function(a,args){return cljs.core.cons.call(null,a,args)};var list_STAR___3=function(a,b,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args))};var list_STAR___4=function(a,b,c,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)))};var list_STAR___5=function(){var G__9657__delegate=function(a,
b,c,d,more){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))))};var G__9657=function(a,b,c,d,var_args){var more=null;if(arguments.length>4)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0);return G__9657__delegate.call(this,a,b,c,d,more)};G__9657.cljs$lang$maxFixedArity=4;G__9657.cljs$lang$applyTo=function(arglist__9658){var a=cljs.core.first(arglist__9658);arglist__9658=cljs.core.next(arglist__9658);
var b=cljs.core.first(arglist__9658);arglist__9658=cljs.core.next(arglist__9658);var c=cljs.core.first(arglist__9658);arglist__9658=cljs.core.next(arglist__9658);var d=cljs.core.first(arglist__9658);var more=cljs.core.rest(arglist__9658);return G__9657__delegate(a,b,c,d,more)};G__9657.cljs$core$IFn$_invoke$arity$variadic=G__9657__delegate;return G__9657}();list_STAR_=function(a,b,c,d,var_args){var more=var_args;switch(arguments.length){case 1:return list_STAR___1.call(this,a);case 2:return list_STAR___2.call(this,
a,b);case 3:return list_STAR___3.call(this,a,b,c);case 4:return list_STAR___4.call(this,a,b,c,d);default:return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d,cljs.core.array_seq(arguments,4))}throw new Error("Invalid arity: "+arguments.length);};list_STAR_.cljs$lang$maxFixedArity=4;list_STAR_.cljs$lang$applyTo=list_STAR___5.cljs$lang$applyTo;list_STAR_.cljs$core$IFn$_invoke$arity$1=list_STAR___1;list_STAR_.cljs$core$IFn$_invoke$arity$2=list_STAR___2;list_STAR_.cljs$core$IFn$_invoke$arity$3=
list_STAR___3;list_STAR_.cljs$core$IFn$_invoke$arity$4=list_STAR___4;list_STAR_.cljs$core$IFn$_invoke$arity$variadic=list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;return list_STAR_}();cljs.core.transient$=function transient$(coll){return cljs.core._as_transient.call(null,coll)};cljs.core.persistent_BANG_=function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_.call(null,tcoll)};
cljs.core.conj_BANG_=function(){var conj_BANG_=null;var conj_BANG___2=function(tcoll,val){return cljs.core._conj_BANG_.call(null,tcoll,val)};var conj_BANG___3=function(){var G__9659__delegate=function(tcoll,val,vals){while(true){var ntcoll=cljs.core._conj_BANG_.call(null,tcoll,val);if(cljs.core.truth_(vals)){var G__9660=ntcoll;var G__9661=cljs.core.first.call(null,vals);var G__9662=cljs.core.next.call(null,vals);tcoll=G__9660;val=G__9661;vals=G__9662;continue}else return ntcoll;break}};var G__9659=
function(tcoll,val,var_args){var vals=null;if(arguments.length>2)vals=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9659__delegate.call(this,tcoll,val,vals)};G__9659.cljs$lang$maxFixedArity=2;G__9659.cljs$lang$applyTo=function(arglist__9663){var tcoll=cljs.core.first(arglist__9663);arglist__9663=cljs.core.next(arglist__9663);var val=cljs.core.first(arglist__9663);var vals=cljs.core.rest(arglist__9663);return G__9659__delegate(tcoll,val,vals)};G__9659.cljs$core$IFn$_invoke$arity$variadic=
G__9659__delegate;return G__9659}();conj_BANG_=function(tcoll,val,var_args){var vals=var_args;switch(arguments.length){case 2:return conj_BANG___2.call(this,tcoll,val);default:return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};conj_BANG_.cljs$lang$maxFixedArity=2;conj_BANG_.cljs$lang$applyTo=conj_BANG___3.cljs$lang$applyTo;conj_BANG_.cljs$core$IFn$_invoke$arity$2=conj_BANG___2;conj_BANG_.cljs$core$IFn$_invoke$arity$variadic=
conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;return conj_BANG_}();
cljs.core.assoc_BANG_=function(){var assoc_BANG_=null;var assoc_BANG___3=function(tcoll,key,val){return cljs.core._assoc_BANG_.call(null,tcoll,key,val)};var assoc_BANG___4=function(){var G__9664__delegate=function(tcoll,key,val,kvs){while(true){var ntcoll=cljs.core._assoc_BANG_.call(null,tcoll,key,val);if(cljs.core.truth_(kvs)){var G__9665=ntcoll;var G__9666=cljs.core.first.call(null,kvs);var G__9667=cljs.core.second.call(null,kvs);var G__9668=cljs.core.nnext.call(null,kvs);tcoll=G__9665;key=G__9666;
val=G__9667;kvs=G__9668;continue}else return ntcoll;break}};var G__9664=function(tcoll,key,val,var_args){var kvs=null;if(arguments.length>3)kvs=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9664__delegate.call(this,tcoll,key,val,kvs)};G__9664.cljs$lang$maxFixedArity=3;G__9664.cljs$lang$applyTo=function(arglist__9669){var tcoll=cljs.core.first(arglist__9669);arglist__9669=cljs.core.next(arglist__9669);var key=cljs.core.first(arglist__9669);arglist__9669=cljs.core.next(arglist__9669);
var val=cljs.core.first(arglist__9669);var kvs=cljs.core.rest(arglist__9669);return G__9664__delegate(tcoll,key,val,kvs)};G__9664.cljs$core$IFn$_invoke$arity$variadic=G__9664__delegate;return G__9664}();assoc_BANG_=function(tcoll,key,val,var_args){var kvs=var_args;switch(arguments.length){case 3:return assoc_BANG___3.call(this,tcoll,key,val);default:return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);
};assoc_BANG_.cljs$lang$maxFixedArity=3;assoc_BANG_.cljs$lang$applyTo=assoc_BANG___4.cljs$lang$applyTo;assoc_BANG_.cljs$core$IFn$_invoke$arity$3=assoc_BANG___3;assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic=assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;return assoc_BANG_}();
cljs.core.dissoc_BANG_=function(){var dissoc_BANG_=null;var dissoc_BANG___2=function(tcoll,key){return cljs.core._dissoc_BANG_.call(null,tcoll,key)};var dissoc_BANG___3=function(){var G__9670__delegate=function(tcoll,key,ks){while(true){var ntcoll=cljs.core._dissoc_BANG_.call(null,tcoll,key);if(cljs.core.truth_(ks)){var G__9671=ntcoll;var G__9672=cljs.core.first.call(null,ks);var G__9673=cljs.core.next.call(null,ks);tcoll=G__9671;key=G__9672;ks=G__9673;continue}else return ntcoll;break}};var G__9670=
function(tcoll,key,var_args){var ks=null;if(arguments.length>2)ks=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9670__delegate.call(this,tcoll,key,ks)};G__9670.cljs$lang$maxFixedArity=2;G__9670.cljs$lang$applyTo=function(arglist__9674){var tcoll=cljs.core.first(arglist__9674);arglist__9674=cljs.core.next(arglist__9674);var key=cljs.core.first(arglist__9674);var ks=cljs.core.rest(arglist__9674);return G__9670__delegate(tcoll,key,ks)};G__9670.cljs$core$IFn$_invoke$arity$variadic=
G__9670__delegate;return G__9670}();dissoc_BANG_=function(tcoll,key,var_args){var ks=var_args;switch(arguments.length){case 2:return dissoc_BANG___2.call(this,tcoll,key);default:return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};dissoc_BANG_.cljs$lang$maxFixedArity=2;dissoc_BANG_.cljs$lang$applyTo=dissoc_BANG___3.cljs$lang$applyTo;dissoc_BANG_.cljs$core$IFn$_invoke$arity$2=dissoc_BANG___2;dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic=
dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;return dissoc_BANG_}();cljs.core.pop_BANG_=function pop_BANG_(tcoll){return cljs.core._pop_BANG_.call(null,tcoll)};
cljs.core.disj_BANG_=function(){var disj_BANG_=null;var disj_BANG___2=function(tcoll,val){return cljs.core._disjoin_BANG_.call(null,tcoll,val)};var disj_BANG___3=function(){var G__9675__delegate=function(tcoll,val,vals){while(true){var ntcoll=cljs.core._disjoin_BANG_.call(null,tcoll,val);if(cljs.core.truth_(vals)){var G__9676=ntcoll;var G__9677=cljs.core.first.call(null,vals);var G__9678=cljs.core.next.call(null,vals);tcoll=G__9676;val=G__9677;vals=G__9678;continue}else return ntcoll;break}};var G__9675=
function(tcoll,val,var_args){var vals=null;if(arguments.length>2)vals=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9675__delegate.call(this,tcoll,val,vals)};G__9675.cljs$lang$maxFixedArity=2;G__9675.cljs$lang$applyTo=function(arglist__9679){var tcoll=cljs.core.first(arglist__9679);arglist__9679=cljs.core.next(arglist__9679);var val=cljs.core.first(arglist__9679);var vals=cljs.core.rest(arglist__9679);return G__9675__delegate(tcoll,val,vals)};G__9675.cljs$core$IFn$_invoke$arity$variadic=
G__9675__delegate;return G__9675}();disj_BANG_=function(tcoll,val,var_args){var vals=var_args;switch(arguments.length){case 2:return disj_BANG___2.call(this,tcoll,val);default:return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};disj_BANG_.cljs$lang$maxFixedArity=2;disj_BANG_.cljs$lang$applyTo=disj_BANG___3.cljs$lang$applyTo;disj_BANG_.cljs$core$IFn$_invoke$arity$2=disj_BANG___2;disj_BANG_.cljs$core$IFn$_invoke$arity$variadic=
disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;return disj_BANG_}();
cljs.core.apply_to=function apply_to(f,argc,args){var args__$1=cljs.core.seq.call(null,args);if(argc===0)return f.call(null);else{var a=cljs.core._first.call(null,args__$1);var args__$2=cljs.core._rest.call(null,args__$1);if(argc===1)if(f.cljs$core$IFn$_invoke$arity$1)return f.cljs$core$IFn$_invoke$arity$1(a);else return f.call(null,a);else{var b=cljs.core._first.call(null,args__$2);var args__$3=cljs.core._rest.call(null,args__$2);if(argc===2)if(f.cljs$core$IFn$_invoke$arity$2)return f.cljs$core$IFn$_invoke$arity$2(a,
b);else return f.call(null,a,b);else{var c=cljs.core._first.call(null,args__$3);var args__$4=cljs.core._rest.call(null,args__$3);if(argc===3)if(f.cljs$core$IFn$_invoke$arity$3)return f.cljs$core$IFn$_invoke$arity$3(a,b,c);else return f.call(null,a,b,c);else{var d=cljs.core._first.call(null,args__$4);var args__$5=cljs.core._rest.call(null,args__$4);if(argc===4)if(f.cljs$core$IFn$_invoke$arity$4)return f.cljs$core$IFn$_invoke$arity$4(a,b,c,d);else return f.call(null,a,b,c,d);else{var e=cljs.core._first.call(null,
args__$5);var args__$6=cljs.core._rest.call(null,args__$5);if(argc===5)if(f.cljs$core$IFn$_invoke$arity$5)return f.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e);else return f.call(null,a,b,c,d,e);else{var f__$1=cljs.core._first.call(null,args__$6);var args__$7=cljs.core._rest.call(null,args__$6);if(argc===6)if(f__$1.cljs$core$IFn$_invoke$arity$6)return f__$1.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1);else return f__$1.call(null,a,b,c,d,e,f__$1);else{var g=cljs.core._first.call(null,args__$7);var args__$8=
cljs.core._rest.call(null,args__$7);if(argc===7)if(f__$1.cljs$core$IFn$_invoke$arity$7)return f__$1.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g);else return f__$1.call(null,a,b,c,d,e,f__$1,g);else{var h=cljs.core._first.call(null,args__$8);var args__$9=cljs.core._rest.call(null,args__$8);if(argc===8)if(f__$1.cljs$core$IFn$_invoke$arity$8)return f__$1.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h);else{var i=cljs.core._first.call(null,args__$9);
var args__$10=cljs.core._rest.call(null,args__$9);if(argc===9)if(f__$1.cljs$core$IFn$_invoke$arity$9)return f__$1.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i);else{var j=cljs.core._first.call(null,args__$10);var args__$11=cljs.core._rest.call(null,args__$10);if(argc===10)if(f__$1.cljs$core$IFn$_invoke$arity$10)return f__$1.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j);else{var k=
cljs.core._first.call(null,args__$11);var args__$12=cljs.core._rest.call(null,args__$11);if(argc===11)if(f__$1.cljs$core$IFn$_invoke$arity$11)return f__$1.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);else{var l=cljs.core._first.call(null,args__$12);var args__$13=cljs.core._rest.call(null,args__$12);if(argc===12)if(f__$1.cljs$core$IFn$_invoke$arity$12)return f__$1.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);else return f__$1.call(null,
a,b,c,d,e,f__$1,g,h,i,j,k,l);else{var m=cljs.core._first.call(null,args__$13);var args__$14=cljs.core._rest.call(null,args__$13);if(argc===13)if(f__$1.cljs$core$IFn$_invoke$arity$13)return f__$1.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);else{var n=cljs.core._first.call(null,args__$14);var args__$15=cljs.core._rest.call(null,args__$14);if(argc===14)if(f__$1.cljs$core$IFn$_invoke$arity$14)return f__$1.cljs$core$IFn$_invoke$arity$14(a,
b,c,d,e,f__$1,g,h,i,j,k,l,m,n);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);else{var o=cljs.core._first.call(null,args__$15);var args__$16=cljs.core._rest.call(null,args__$15);if(argc===15)if(f__$1.cljs$core$IFn$_invoke$arity$15)return f__$1.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);else{var p=cljs.core._first.call(null,args__$16);var args__$17=cljs.core._rest.call(null,args__$16);if(argc===16)if(f__$1.cljs$core$IFn$_invoke$arity$16)return f__$1.cljs$core$IFn$_invoke$arity$16(a,
b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);else{var q=cljs.core._first.call(null,args__$17);var args__$18=cljs.core._rest.call(null,args__$17);if(argc===17)if(f__$1.cljs$core$IFn$_invoke$arity$17)return f__$1.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);else{var r=cljs.core._first.call(null,args__$18);var args__$19=cljs.core._rest.call(null,args__$18);
if(argc===18)if(f__$1.cljs$core$IFn$_invoke$arity$18)return f__$1.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);else{var s=cljs.core._first.call(null,args__$19);var args__$20=cljs.core._rest.call(null,args__$19);if(argc===19)if(f__$1.cljs$core$IFn$_invoke$arity$19)return f__$1.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,
l,m,n,o,p,q,r,s);else{var t=cljs.core._first.call(null,args__$20);var args__$21=cljs.core._rest.call(null,args__$20);if(argc===20)if(f__$1.cljs$core$IFn$_invoke$arity$20)return f__$1.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);else return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);else throw new Error("Only up to 20 arguments supported on functions");}}}}}}}}}}}}}}}}}}}}};
cljs.core.apply=function(){var apply=null;var apply__2=function(f,args){var fixed_arity=f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo){var bc=cljs.core.bounded_count.call(null,args,fixed_arity+1);if(bc<=fixed_arity)return cljs.core.apply_to.call(null,f,bc,args);else return f.cljs$lang$applyTo(args)}else return f.apply(f,cljs.core.to_array.call(null,args))};var apply__3=function(f,x,args){var arglist=cljs.core.list_STAR_.call(null,x,args);var fixed_arity=f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo){var bc=
cljs.core.bounded_count.call(null,arglist,fixed_arity+1);if(bc<=fixed_arity)return cljs.core.apply_to.call(null,f,bc,arglist);else return f.cljs$lang$applyTo(arglist)}else return f.apply(f,cljs.core.to_array.call(null,arglist))};var apply__4=function(f,x,y,args){var arglist=cljs.core.list_STAR_.call(null,x,y,args);var fixed_arity=f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo){var bc=cljs.core.bounded_count.call(null,arglist,fixed_arity+1);if(bc<=fixed_arity)return cljs.core.apply_to.call(null,
f,bc,arglist);else return f.cljs$lang$applyTo(arglist)}else return f.apply(f,cljs.core.to_array.call(null,arglist))};var apply__5=function(f,x,y,z,args){var arglist=cljs.core.list_STAR_.call(null,x,y,z,args);var fixed_arity=f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo){var bc=cljs.core.bounded_count.call(null,arglist,fixed_arity+1);if(bc<=fixed_arity)return cljs.core.apply_to.call(null,f,bc,arglist);else return f.cljs$lang$applyTo(arglist)}else return f.apply(f,cljs.core.to_array.call(null,arglist))};
var apply__6=function(){var G__9680__delegate=function(f,a,b,c,d,args){var arglist=cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));var fixed_arity=f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo){var bc=cljs.core.bounded_count.call(null,arglist,fixed_arity+1);if(bc<=fixed_arity)return cljs.core.apply_to.call(null,f,bc,arglist);else return f.cljs$lang$applyTo(arglist)}else return f.apply(f,cljs.core.to_array.call(null,
arglist))};var G__9680=function(f,a,b,c,d,var_args){var args=null;if(arguments.length>5)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,5),0);return G__9680__delegate.call(this,f,a,b,c,d,args)};G__9680.cljs$lang$maxFixedArity=5;G__9680.cljs$lang$applyTo=function(arglist__9681){var f=cljs.core.first(arglist__9681);arglist__9681=cljs.core.next(arglist__9681);var a=cljs.core.first(arglist__9681);arglist__9681=cljs.core.next(arglist__9681);var b=cljs.core.first(arglist__9681);arglist__9681=
cljs.core.next(arglist__9681);var c=cljs.core.first(arglist__9681);arglist__9681=cljs.core.next(arglist__9681);var d=cljs.core.first(arglist__9681);var args=cljs.core.rest(arglist__9681);return G__9680__delegate(f,a,b,c,d,args)};G__9680.cljs$core$IFn$_invoke$arity$variadic=G__9680__delegate;return G__9680}();apply=function(f,a,b,c,d,var_args){var args=var_args;switch(arguments.length){case 2:return apply__2.call(this,f,a);case 3:return apply__3.call(this,f,a,b);case 4:return apply__4.call(this,f,
a,b,c);case 5:return apply__5.call(this,f,a,b,c,d);default:return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d,cljs.core.array_seq(arguments,5))}throw new Error("Invalid arity: "+arguments.length);};apply.cljs$lang$maxFixedArity=5;apply.cljs$lang$applyTo=apply__6.cljs$lang$applyTo;apply.cljs$core$IFn$_invoke$arity$2=apply__2;apply.cljs$core$IFn$_invoke$arity$3=apply__3;apply.cljs$core$IFn$_invoke$arity$4=apply__4;apply.cljs$core$IFn$_invoke$arity$5=apply__5;apply.cljs$core$IFn$_invoke$arity$variadic=
apply__6.cljs$core$IFn$_invoke$arity$variadic;return apply}();
cljs.core.vary_meta=function(){var vary_meta=null;var vary_meta__2=function(obj,f){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj)))};var vary_meta__3=function(obj,f,a){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a))};var vary_meta__4=function(obj,f,a,b){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b))};var vary_meta__5=function(obj,f,a,b,c){return cljs.core.with_meta.call(null,obj,f.call(null,
cljs.core.meta.call(null,obj),a,b,c))};var vary_meta__6=function(obj,f,a,b,c,d){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c,d))};var vary_meta__7=function(){var G__9682__delegate=function(obj,f,a,b,c,d,args){return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),a,b,c,d,args))};var G__9682=function(obj,f,a,b,c,d,var_args){var args=null;if(arguments.length>6)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,
6),0);return G__9682__delegate.call(this,obj,f,a,b,c,d,args)};G__9682.cljs$lang$maxFixedArity=6;G__9682.cljs$lang$applyTo=function(arglist__9683){var obj=cljs.core.first(arglist__9683);arglist__9683=cljs.core.next(arglist__9683);var f=cljs.core.first(arglist__9683);arglist__9683=cljs.core.next(arglist__9683);var a=cljs.core.first(arglist__9683);arglist__9683=cljs.core.next(arglist__9683);var b=cljs.core.first(arglist__9683);arglist__9683=cljs.core.next(arglist__9683);var c=cljs.core.first(arglist__9683);
arglist__9683=cljs.core.next(arglist__9683);var d=cljs.core.first(arglist__9683);var args=cljs.core.rest(arglist__9683);return G__9682__delegate(obj,f,a,b,c,d,args)};G__9682.cljs$core$IFn$_invoke$arity$variadic=G__9682__delegate;return G__9682}();vary_meta=function(obj,f,a,b,c,d,var_args){var args=var_args;switch(arguments.length){case 2:return vary_meta__2.call(this,obj,f);case 3:return vary_meta__3.call(this,obj,f,a);case 4:return vary_meta__4.call(this,obj,f,a,b);case 5:return vary_meta__5.call(this,
obj,f,a,b,c);case 6:return vary_meta__6.call(this,obj,f,a,b,c,d);default:return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d,cljs.core.array_seq(arguments,6))}throw new Error("Invalid arity: "+arguments.length);};vary_meta.cljs$lang$maxFixedArity=6;vary_meta.cljs$lang$applyTo=vary_meta__7.cljs$lang$applyTo;vary_meta.cljs$core$IFn$_invoke$arity$2=vary_meta__2;vary_meta.cljs$core$IFn$_invoke$arity$3=vary_meta__3;vary_meta.cljs$core$IFn$_invoke$arity$4=vary_meta__4;vary_meta.cljs$core$IFn$_invoke$arity$5=
vary_meta__5;vary_meta.cljs$core$IFn$_invoke$arity$6=vary_meta__6;vary_meta.cljs$core$IFn$_invoke$arity$variadic=vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;return vary_meta}();
cljs.core.not_EQ_=function(){var not_EQ_=null;var not_EQ___1=function(x){return false};var not_EQ___2=function(x,y){return!cljs.core._EQ_.call(null,x,y)};var not_EQ___3=function(){var G__9684__delegate=function(x,y,more){return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more))};var G__9684=function(x,y,var_args){var more=null;if(arguments.length>2)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9684__delegate.call(this,x,y,more)};G__9684.cljs$lang$maxFixedArity=
2;G__9684.cljs$lang$applyTo=function(arglist__9685){var x=cljs.core.first(arglist__9685);arglist__9685=cljs.core.next(arglist__9685);var y=cljs.core.first(arglist__9685);var more=cljs.core.rest(arglist__9685);return G__9684__delegate(x,y,more)};G__9684.cljs$core$IFn$_invoke$arity$variadic=G__9684__delegate;return G__9684}();not_EQ_=function(x,y,var_args){var more=var_args;switch(arguments.length){case 1:return not_EQ___1.call(this,x);case 2:return not_EQ___2.call(this,x,y);default:return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,
y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};not_EQ_.cljs$lang$maxFixedArity=2;not_EQ_.cljs$lang$applyTo=not_EQ___3.cljs$lang$applyTo;not_EQ_.cljs$core$IFn$_invoke$arity$1=not_EQ___1;not_EQ_.cljs$core$IFn$_invoke$arity$2=not_EQ___2;not_EQ_.cljs$core$IFn$_invoke$arity$variadic=not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;return not_EQ_}();cljs.core.not_empty=function not_empty(coll){if(cljs.core.seq.call(null,coll))return coll;else return null};
cljs.core.every_QMARK_=function every_QMARK_(pred,coll){while(true){if(cljs.core.seq.call(null,coll)==null)return true;else if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll)))){var G__9686=pred;var G__9687=cljs.core.next.call(null,coll);pred=G__9686;coll=G__9687;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587))return false;else return null;break}};cljs.core.not_every_QMARK_=function not_every_QMARK_(pred,coll){return!cljs.core.every_QMARK_.call(null,pred,coll)};
cljs.core.some=function some(pred,coll){while(true){if(cljs.core.seq.call(null,coll)){var or__6732__auto__=pred.call(null,cljs.core.first.call(null,coll));if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var G__9688=pred;var G__9689=cljs.core.next.call(null,coll);pred=G__9688;coll=G__9689;continue}}else return null;break}};cljs.core.not_any_QMARK_=function not_any_QMARK_(pred,coll){return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll))};
cljs.core.even_QMARK_=function even_QMARK_(n){if(cljs.core.integer_QMARK_.call(null,n))return(n&1)===0;else throw new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join(""));};cljs.core.odd_QMARK_=function odd_QMARK_(n){return!cljs.core.even_QMARK_.call(null,n)};cljs.core.identity=function identity(x){return x};
cljs.core.complement=function complement(f){return function(){var G__9690=null;var G__9690__0=function(){return cljs.core.not.call(null,f.call(null))};var G__9690__1=function(x){return cljs.core.not.call(null,f.call(null,x))};var G__9690__2=function(x,y){return cljs.core.not.call(null,f.call(null,x,y))};var G__9690__3=function(){var G__9691__delegate=function(x,y,zs){return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs))};var G__9691=function(x,y,var_args){var zs=null;if(arguments.length>
2)zs=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9691__delegate.call(this,x,y,zs)};G__9691.cljs$lang$maxFixedArity=2;G__9691.cljs$lang$applyTo=function(arglist__9692){var x=cljs.core.first(arglist__9692);arglist__9692=cljs.core.next(arglist__9692);var y=cljs.core.first(arglist__9692);var zs=cljs.core.rest(arglist__9692);return G__9691__delegate(x,y,zs)};G__9691.cljs$core$IFn$_invoke$arity$variadic=G__9691__delegate;return G__9691}();G__9690=function(x,y,var_args){var zs=
var_args;switch(arguments.length){case 0:return G__9690__0.call(this);case 1:return G__9690__1.call(this,x);case 2:return G__9690__2.call(this,x,y);default:return G__9690__3.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};G__9690.cljs$lang$maxFixedArity=2;G__9690.cljs$lang$applyTo=G__9690__3.cljs$lang$applyTo;return G__9690}()};
cljs.core.constantly=function constantly(x){return function(){var G__9693__delegate=function(args){return x};var G__9693=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9693__delegate.call(this,args)};G__9693.cljs$lang$maxFixedArity=0;G__9693.cljs$lang$applyTo=function(arglist__9694){var args=cljs.core.seq(arglist__9694);return G__9693__delegate(args)};G__9693.cljs$core$IFn$_invoke$arity$variadic=G__9693__delegate;
return G__9693}()};
cljs.core.comp=function(){var comp=null;var comp__0=function(){return cljs.core.identity};var comp__1=function(f){return f};var comp__2=function(f,g){return function(){var G__9695=null;var G__9695__0=function(){return f.call(null,g.call(null))};var G__9695__1=function(x){return f.call(null,g.call(null,x))};var G__9695__2=function(x,y){return f.call(null,g.call(null,x,y))};var G__9695__3=function(x,y,z){return f.call(null,g.call(null,x,y,z))};var G__9695__4=function(){var G__9696__delegate=function(x,
y,z,args){return f.call(null,cljs.core.apply.call(null,g,x,y,z,args))};var G__9696=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9696__delegate.call(this,x,y,z,args)};G__9696.cljs$lang$maxFixedArity=3;G__9696.cljs$lang$applyTo=function(arglist__9697){var x=cljs.core.first(arglist__9697);arglist__9697=cljs.core.next(arglist__9697);var y=cljs.core.first(arglist__9697);arglist__9697=cljs.core.next(arglist__9697);
var z=cljs.core.first(arglist__9697);var args=cljs.core.rest(arglist__9697);return G__9696__delegate(x,y,z,args)};G__9696.cljs$core$IFn$_invoke$arity$variadic=G__9696__delegate;return G__9696}();G__9695=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return G__9695__0.call(this);case 1:return G__9695__1.call(this,x);case 2:return G__9695__2.call(this,x,y);case 3:return G__9695__3.call(this,x,y,z);default:return G__9695__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,
3))}throw new Error("Invalid arity: "+arguments.length);};G__9695.cljs$lang$maxFixedArity=3;G__9695.cljs$lang$applyTo=G__9695__4.cljs$lang$applyTo;return G__9695}()};var comp__3=function(f,g,h){return function(){var G__9698=null;var G__9698__0=function(){return f.call(null,g.call(null,h.call(null)))};var G__9698__1=function(x){return f.call(null,g.call(null,h.call(null,x)))};var G__9698__2=function(x,y){return f.call(null,g.call(null,h.call(null,x,y)))};var G__9698__3=function(x,y,z){return f.call(null,
g.call(null,h.call(null,x,y,z)))};var G__9698__4=function(){var G__9699__delegate=function(x,y,z,args){return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)))};var G__9699=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9699__delegate.call(this,x,y,z,args)};G__9699.cljs$lang$maxFixedArity=3;G__9699.cljs$lang$applyTo=function(arglist__9700){var x=cljs.core.first(arglist__9700);arglist__9700=
cljs.core.next(arglist__9700);var y=cljs.core.first(arglist__9700);arglist__9700=cljs.core.next(arglist__9700);var z=cljs.core.first(arglist__9700);var args=cljs.core.rest(arglist__9700);return G__9699__delegate(x,y,z,args)};G__9699.cljs$core$IFn$_invoke$arity$variadic=G__9699__delegate;return G__9699}();G__9698=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return G__9698__0.call(this);case 1:return G__9698__1.call(this,x);case 2:return G__9698__2.call(this,x,y);case 3:return G__9698__3.call(this,
x,y,z);default:return G__9698__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};G__9698.cljs$lang$maxFixedArity=3;G__9698.cljs$lang$applyTo=G__9698__4.cljs$lang$applyTo;return G__9698}()};var comp__4=function(){var G__9701__delegate=function(f1,f2,f3,fs){var fs__$1=cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));return function(){var G__9702__delegate=function(args){var ret=cljs.core.apply.call(null,
cljs.core.first.call(null,fs__$1),args);var fs__$2=cljs.core.next.call(null,fs__$1);while(true){if(fs__$2){var G__9703=cljs.core.first.call(null,fs__$2).call(null,ret);var G__9704=cljs.core.next.call(null,fs__$2);ret=G__9703;fs__$2=G__9704;continue}else return ret;break}};var G__9702=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9702__delegate.call(this,args)};G__9702.cljs$lang$maxFixedArity=0;G__9702.cljs$lang$applyTo=
function(arglist__9705){var args=cljs.core.seq(arglist__9705);return G__9702__delegate(args)};G__9702.cljs$core$IFn$_invoke$arity$variadic=G__9702__delegate;return G__9702}()};var G__9701=function(f1,f2,f3,var_args){var fs=null;if(arguments.length>3)fs=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9701__delegate.call(this,f1,f2,f3,fs)};G__9701.cljs$lang$maxFixedArity=3;G__9701.cljs$lang$applyTo=function(arglist__9706){var f1=cljs.core.first(arglist__9706);arglist__9706=
cljs.core.next(arglist__9706);var f2=cljs.core.first(arglist__9706);arglist__9706=cljs.core.next(arglist__9706);var f3=cljs.core.first(arglist__9706);var fs=cljs.core.rest(arglist__9706);return G__9701__delegate(f1,f2,f3,fs)};G__9701.cljs$core$IFn$_invoke$arity$variadic=G__9701__delegate;return G__9701}();comp=function(f1,f2,f3,var_args){var fs=var_args;switch(arguments.length){case 0:return comp__0.call(this);case 1:return comp__1.call(this,f1);case 2:return comp__2.call(this,f1,f2);case 3:return comp__3.call(this,
f1,f2,f3);default:return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};comp.cljs$lang$maxFixedArity=3;comp.cljs$lang$applyTo=comp__4.cljs$lang$applyTo;comp.cljs$core$IFn$_invoke$arity$0=comp__0;comp.cljs$core$IFn$_invoke$arity$1=comp__1;comp.cljs$core$IFn$_invoke$arity$2=comp__2;comp.cljs$core$IFn$_invoke$arity$3=comp__3;comp.cljs$core$IFn$_invoke$arity$variadic=comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp}();
cljs.core.partial=function(){var partial=null;var partial__1=function(f){return f};var partial__2=function(f,arg1){return function(){var G__9707__delegate=function(args){return cljs.core.apply.call(null,f,arg1,args)};var G__9707=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9707__delegate.call(this,args)};G__9707.cljs$lang$maxFixedArity=0;G__9707.cljs$lang$applyTo=function(arglist__9708){var args=cljs.core.seq(arglist__9708);
return G__9707__delegate(args)};G__9707.cljs$core$IFn$_invoke$arity$variadic=G__9707__delegate;return G__9707}()};var partial__3=function(f,arg1,arg2){return function(){var G__9709__delegate=function(args){return cljs.core.apply.call(null,f,arg1,arg2,args)};var G__9709=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9709__delegate.call(this,args)};G__9709.cljs$lang$maxFixedArity=0;G__9709.cljs$lang$applyTo=function(arglist__9710){var args=
cljs.core.seq(arglist__9710);return G__9709__delegate(args)};G__9709.cljs$core$IFn$_invoke$arity$variadic=G__9709__delegate;return G__9709}()};var partial__4=function(f,arg1,arg2,arg3){return function(){var G__9711__delegate=function(args){return cljs.core.apply.call(null,f,arg1,arg2,arg3,args)};var G__9711=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9711__delegate.call(this,args)};G__9711.cljs$lang$maxFixedArity=
0;G__9711.cljs$lang$applyTo=function(arglist__9712){var args=cljs.core.seq(arglist__9712);return G__9711__delegate(args)};G__9711.cljs$core$IFn$_invoke$arity$variadic=G__9711__delegate;return G__9711}()};var partial__5=function(){var G__9713__delegate=function(f,arg1,arg2,arg3,more){return function(){var G__9714__delegate=function(args){return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args))};var G__9714=function(var_args){var args=null;if(arguments.length>0)args=
cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9714__delegate.call(this,args)};G__9714.cljs$lang$maxFixedArity=0;G__9714.cljs$lang$applyTo=function(arglist__9715){var args=cljs.core.seq(arglist__9715);return G__9714__delegate(args)};G__9714.cljs$core$IFn$_invoke$arity$variadic=G__9714__delegate;return G__9714}()};var G__9713=function(f,arg1,arg2,arg3,var_args){var more=null;if(arguments.length>4)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0);return G__9713__delegate.call(this,
f,arg1,arg2,arg3,more)};G__9713.cljs$lang$maxFixedArity=4;G__9713.cljs$lang$applyTo=function(arglist__9716){var f=cljs.core.first(arglist__9716);arglist__9716=cljs.core.next(arglist__9716);var arg1=cljs.core.first(arglist__9716);arglist__9716=cljs.core.next(arglist__9716);var arg2=cljs.core.first(arglist__9716);arglist__9716=cljs.core.next(arglist__9716);var arg3=cljs.core.first(arglist__9716);var more=cljs.core.rest(arglist__9716);return G__9713__delegate(f,arg1,arg2,arg3,more)};G__9713.cljs$core$IFn$_invoke$arity$variadic=
G__9713__delegate;return G__9713}();partial=function(f,arg1,arg2,arg3,var_args){var more=var_args;switch(arguments.length){case 1:return partial__1.call(this,f);case 2:return partial__2.call(this,f,arg1);case 3:return partial__3.call(this,f,arg1,arg2);case 4:return partial__4.call(this,f,arg1,arg2,arg3);default:return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,cljs.core.array_seq(arguments,4))}throw new Error("Invalid arity: "+arguments.length);};partial.cljs$lang$maxFixedArity=
4;partial.cljs$lang$applyTo=partial__5.cljs$lang$applyTo;partial.cljs$core$IFn$_invoke$arity$1=partial__1;partial.cljs$core$IFn$_invoke$arity$2=partial__2;partial.cljs$core$IFn$_invoke$arity$3=partial__3;partial.cljs$core$IFn$_invoke$arity$4=partial__4;partial.cljs$core$IFn$_invoke$arity$variadic=partial__5.cljs$core$IFn$_invoke$arity$variadic;return partial}();
cljs.core.fnil=function(){var fnil=null;var fnil__2=function(f,x){return function(){var G__9717=null;var G__9717__1=function(a){return f.call(null,a==null?x:a)};var G__9717__2=function(a,b){return f.call(null,a==null?x:a,b)};var G__9717__3=function(a,b,c){return f.call(null,a==null?x:a,b,c)};var G__9717__4=function(){var G__9718__delegate=function(a,b,c,ds){return cljs.core.apply.call(null,f,a==null?x:a,b,c,ds)};var G__9718=function(a,b,c,var_args){var ds=null;if(arguments.length>3)ds=cljs.core.array_seq(Array.prototype.slice.call(arguments,
3),0);return G__9718__delegate.call(this,a,b,c,ds)};G__9718.cljs$lang$maxFixedArity=3;G__9718.cljs$lang$applyTo=function(arglist__9719){var a=cljs.core.first(arglist__9719);arglist__9719=cljs.core.next(arglist__9719);var b=cljs.core.first(arglist__9719);arglist__9719=cljs.core.next(arglist__9719);var c=cljs.core.first(arglist__9719);var ds=cljs.core.rest(arglist__9719);return G__9718__delegate(a,b,c,ds)};G__9718.cljs$core$IFn$_invoke$arity$variadic=G__9718__delegate;return G__9718}();G__9717=function(a,
b,c,var_args){var ds=var_args;switch(arguments.length){case 1:return G__9717__1.call(this,a);case 2:return G__9717__2.call(this,a,b);case 3:return G__9717__3.call(this,a,b,c);default:return G__9717__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};G__9717.cljs$lang$maxFixedArity=3;G__9717.cljs$lang$applyTo=G__9717__4.cljs$lang$applyTo;return G__9717}()};var fnil__3=function(f,x,y){return function(){var G__9720=null;
var G__9720__2=function(a,b){return f.call(null,a==null?x:a,b==null?y:b)};var G__9720__3=function(a,b,c){return f.call(null,a==null?x:a,b==null?y:b,c)};var G__9720__4=function(){var G__9721__delegate=function(a,b,c,ds){return cljs.core.apply.call(null,f,a==null?x:a,b==null?y:b,c,ds)};var G__9721=function(a,b,c,var_args){var ds=null;if(arguments.length>3)ds=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9721__delegate.call(this,a,b,c,ds)};G__9721.cljs$lang$maxFixedArity=3;
G__9721.cljs$lang$applyTo=function(arglist__9722){var a=cljs.core.first(arglist__9722);arglist__9722=cljs.core.next(arglist__9722);var b=cljs.core.first(arglist__9722);arglist__9722=cljs.core.next(arglist__9722);var c=cljs.core.first(arglist__9722);var ds=cljs.core.rest(arglist__9722);return G__9721__delegate(a,b,c,ds)};G__9721.cljs$core$IFn$_invoke$arity$variadic=G__9721__delegate;return G__9721}();G__9720=function(a,b,c,var_args){var ds=var_args;switch(arguments.length){case 2:return G__9720__2.call(this,
a,b);case 3:return G__9720__3.call(this,a,b,c);default:return G__9720__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};G__9720.cljs$lang$maxFixedArity=3;G__9720.cljs$lang$applyTo=G__9720__4.cljs$lang$applyTo;return G__9720}()};var fnil__4=function(f,x,y,z){return function(){var G__9723=null;var G__9723__2=function(a,b){return f.call(null,a==null?x:a,b==null?y:b)};var G__9723__3=function(a,b,c){return f.call(null,
a==null?x:a,b==null?y:b,c==null?z:c)};var G__9723__4=function(){var G__9724__delegate=function(a,b,c,ds){return cljs.core.apply.call(null,f,a==null?x:a,b==null?y:b,c==null?z:c,ds)};var G__9724=function(a,b,c,var_args){var ds=null;if(arguments.length>3)ds=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9724__delegate.call(this,a,b,c,ds)};G__9724.cljs$lang$maxFixedArity=3;G__9724.cljs$lang$applyTo=function(arglist__9725){var a=cljs.core.first(arglist__9725);arglist__9725=cljs.core.next(arglist__9725);
var b=cljs.core.first(arglist__9725);arglist__9725=cljs.core.next(arglist__9725);var c=cljs.core.first(arglist__9725);var ds=cljs.core.rest(arglist__9725);return G__9724__delegate(a,b,c,ds)};G__9724.cljs$core$IFn$_invoke$arity$variadic=G__9724__delegate;return G__9724}();G__9723=function(a,b,c,var_args){var ds=var_args;switch(arguments.length){case 2:return G__9723__2.call(this,a,b);case 3:return G__9723__3.call(this,a,b,c);default:return G__9723__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c,cljs.core.array_seq(arguments,
3))}throw new Error("Invalid arity: "+arguments.length);};G__9723.cljs$lang$maxFixedArity=3;G__9723.cljs$lang$applyTo=G__9723__4.cljs$lang$applyTo;return G__9723}()};fnil=function(f,x,y,z){switch(arguments.length){case 2:return fnil__2.call(this,f,x);case 3:return fnil__3.call(this,f,x,y);case 4:return fnil__4.call(this,f,x,y,z)}throw new Error("Invalid arity: "+arguments.length);};fnil.cljs$core$IFn$_invoke$arity$2=fnil__2;fnil.cljs$core$IFn$_invoke$arity$3=fnil__3;fnil.cljs$core$IFn$_invoke$arity$4=
fnil__4;return fnil}();
cljs.core.map_indexed=function map_indexed(f,coll){var mapi=function mapi(idx,coll__$1){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll__$1);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s)){var c=cljs.core.chunk_first.call(null,s);var size=cljs.core.count.call(null,c);var b=cljs.core.chunk_buffer.call(null,size);var n__7580__auto___9726=size;var i_9727=0;while(true){if(i_9727<n__7580__auto___9726){cljs.core.chunk_append.call(null,b,
f.call(null,idx+i_9727,cljs.core._nth.call(null,c,i_9727)));var G__9728=i_9727+1;i_9727=G__9728;continue}else;break}return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),mapi.call(null,idx+size,cljs.core.chunk_rest.call(null,s)))}else return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s)),mapi.call(null,idx+1,cljs.core.rest.call(null,s)))}else return null},null,null)};return mapi.call(null,0,coll)};
cljs.core.keep=function keep(f,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s)){var c=cljs.core.chunk_first.call(null,s);var size=cljs.core.count.call(null,c);var b=cljs.core.chunk_buffer.call(null,size);var n__7580__auto___9729=size;var i_9730=0;while(true){if(i_9730<n__7580__auto___9729){var x_9731=f.call(null,cljs.core._nth.call(null,c,i_9730));if(x_9731==
null);else cljs.core.chunk_append.call(null,b,x_9731);var G__9732=i_9730+1;i_9730=G__9732;continue}else;break}return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keep.call(null,f,cljs.core.chunk_rest.call(null,s)))}else{var x=f.call(null,cljs.core.first.call(null,s));if(x==null)return keep.call(null,f,cljs.core.rest.call(null,s));else return cljs.core.cons.call(null,x,keep.call(null,f,cljs.core.rest.call(null,s)))}}else return null},null,null)};
cljs.core.keep_indexed=function keep_indexed(f,coll){var keepi=function keepi(idx,coll__$1){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll__$1);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s)){var c=cljs.core.chunk_first.call(null,s);var size=cljs.core.count.call(null,c);var b=cljs.core.chunk_buffer.call(null,size);var n__7580__auto___9733=size;var i_9734=0;while(true){if(i_9734<n__7580__auto___9733){var x_9735=
f.call(null,idx+i_9734,cljs.core._nth.call(null,c,i_9734));if(x_9735==null);else cljs.core.chunk_append.call(null,b,x_9735);var G__9736=i_9734+1;i_9734=G__9736;continue}else;break}return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keepi.call(null,idx+size,cljs.core.chunk_rest.call(null,s)))}else{var x=f.call(null,idx,cljs.core.first.call(null,s));if(x==null)return keepi.call(null,idx+1,cljs.core.rest.call(null,s));else return cljs.core.cons.call(null,x,keepi.call(null,idx+1,cljs.core.rest.call(null,
s)))}}else return null},null,null)};return keepi.call(null,0,coll)};
cljs.core.every_pred=function(){var every_pred=null;var every_pred__1=function(p){return function(){var ep1=null;var ep1__0=function(){return true};var ep1__1=function(x){return cljs.core.boolean$.call(null,p.call(null,x))};var ep1__2=function(x,y){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=p.call(null,x);if(cljs.core.truth_(and__6720__auto__))return p.call(null,y);else return and__6720__auto__}())};var ep1__3=function(x,y,z){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=
p.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p.call(null,y);if(cljs.core.truth_(and__6720__auto____$1))return p.call(null,z);else return and__6720__auto____$1}else return and__6720__auto__}())};var ep1__4=function(){var G__9743__delegate=function(x,y,z,args){return cljs.core.boolean$.call(null,ep1.call(null,x,y,z)&&cljs.core.every_QMARK_.call(null,p,args))};var G__9743=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,
3),0);return G__9743__delegate.call(this,x,y,z,args)};G__9743.cljs$lang$maxFixedArity=3;G__9743.cljs$lang$applyTo=function(arglist__9744){var x=cljs.core.first(arglist__9744);arglist__9744=cljs.core.next(arglist__9744);var y=cljs.core.first(arglist__9744);arglist__9744=cljs.core.next(arglist__9744);var z=cljs.core.first(arglist__9744);var args=cljs.core.rest(arglist__9744);return G__9743__delegate(x,y,z,args)};G__9743.cljs$core$IFn$_invoke$arity$variadic=G__9743__delegate;return G__9743}();ep1=function(x,
y,z,var_args){var args=var_args;switch(arguments.length){case 0:return ep1__0.call(this);case 1:return ep1__1.call(this,x);case 2:return ep1__2.call(this,x,y);case 3:return ep1__3.call(this,x,y,z);default:return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};ep1.cljs$lang$maxFixedArity=3;ep1.cljs$lang$applyTo=ep1__4.cljs$lang$applyTo;ep1.cljs$core$IFn$_invoke$arity$0=ep1__0;ep1.cljs$core$IFn$_invoke$arity$1=
ep1__1;ep1.cljs$core$IFn$_invoke$arity$2=ep1__2;ep1.cljs$core$IFn$_invoke$arity$3=ep1__3;ep1.cljs$core$IFn$_invoke$arity$variadic=ep1__4.cljs$core$IFn$_invoke$arity$variadic;return ep1}()};var every_pred__2=function(p1,p2){return function(){var ep2=null;var ep2__0=function(){return true};var ep2__1=function(x){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=p1.call(null,x);if(cljs.core.truth_(and__6720__auto__))return p2.call(null,x);else return and__6720__auto__}())};var ep2__2=
function(x,y){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=p1.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p1.call(null,y);if(cljs.core.truth_(and__6720__auto____$1)){var and__6720__auto____$2=p2.call(null,x);if(cljs.core.truth_(and__6720__auto____$2))return p2.call(null,y);else return and__6720__auto____$2}else return and__6720__auto____$1}else return and__6720__auto__}())};var ep2__3=function(x,y,z){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=
p1.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p1.call(null,y);if(cljs.core.truth_(and__6720__auto____$1)){var and__6720__auto____$2=p1.call(null,z);if(cljs.core.truth_(and__6720__auto____$2)){var and__6720__auto____$3=p2.call(null,x);if(cljs.core.truth_(and__6720__auto____$3)){var and__6720__auto____$4=p2.call(null,y);if(cljs.core.truth_(and__6720__auto____$4))return p2.call(null,z);else return and__6720__auto____$4}else return and__6720__auto____$3}else return and__6720__auto____$2}else return and__6720__auto____$1}else return and__6720__auto__}())};
var ep2__4=function(){var G__9745__delegate=function(x,y,z,args){return cljs.core.boolean$.call(null,ep2.call(null,x,y,z)&&cljs.core.every_QMARK_.call(null,function(p1__9737_SHARP_){var and__6720__auto__=p1.call(null,p1__9737_SHARP_);if(cljs.core.truth_(and__6720__auto__))return p2.call(null,p1__9737_SHARP_);else return and__6720__auto__},args))};var G__9745=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9745__delegate.call(this,
x,y,z,args)};G__9745.cljs$lang$maxFixedArity=3;G__9745.cljs$lang$applyTo=function(arglist__9746){var x=cljs.core.first(arglist__9746);arglist__9746=cljs.core.next(arglist__9746);var y=cljs.core.first(arglist__9746);arglist__9746=cljs.core.next(arglist__9746);var z=cljs.core.first(arglist__9746);var args=cljs.core.rest(arglist__9746);return G__9745__delegate(x,y,z,args)};G__9745.cljs$core$IFn$_invoke$arity$variadic=G__9745__delegate;return G__9745}();ep2=function(x,y,z,var_args){var args=var_args;
switch(arguments.length){case 0:return ep2__0.call(this);case 1:return ep2__1.call(this,x);case 2:return ep2__2.call(this,x,y);case 3:return ep2__3.call(this,x,y,z);default:return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};ep2.cljs$lang$maxFixedArity=3;ep2.cljs$lang$applyTo=ep2__4.cljs$lang$applyTo;ep2.cljs$core$IFn$_invoke$arity$0=ep2__0;ep2.cljs$core$IFn$_invoke$arity$1=ep2__1;ep2.cljs$core$IFn$_invoke$arity$2=
ep2__2;ep2.cljs$core$IFn$_invoke$arity$3=ep2__3;ep2.cljs$core$IFn$_invoke$arity$variadic=ep2__4.cljs$core$IFn$_invoke$arity$variadic;return ep2}()};var every_pred__3=function(p1,p2,p3){return function(){var ep3=null;var ep3__0=function(){return true};var ep3__1=function(x){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=p1.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p2.call(null,x);if(cljs.core.truth_(and__6720__auto____$1))return p3.call(null,
x);else return and__6720__auto____$1}else return and__6720__auto__}())};var ep3__2=function(x,y){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=p1.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p2.call(null,x);if(cljs.core.truth_(and__6720__auto____$1)){var and__6720__auto____$2=p3.call(null,x);if(cljs.core.truth_(and__6720__auto____$2)){var and__6720__auto____$3=p1.call(null,y);if(cljs.core.truth_(and__6720__auto____$3)){var and__6720__auto____$4=
p2.call(null,y);if(cljs.core.truth_(and__6720__auto____$4))return p3.call(null,y);else return and__6720__auto____$4}else return and__6720__auto____$3}else return and__6720__auto____$2}else return and__6720__auto____$1}else return and__6720__auto__}())};var ep3__3=function(x,y,z){return cljs.core.boolean$.call(null,function(){var and__6720__auto__=p1.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p2.call(null,x);if(cljs.core.truth_(and__6720__auto____$1)){var and__6720__auto____$2=
p3.call(null,x);if(cljs.core.truth_(and__6720__auto____$2)){var and__6720__auto____$3=p1.call(null,y);if(cljs.core.truth_(and__6720__auto____$3)){var and__6720__auto____$4=p2.call(null,y);if(cljs.core.truth_(and__6720__auto____$4)){var and__6720__auto____$5=p3.call(null,y);if(cljs.core.truth_(and__6720__auto____$5)){var and__6720__auto____$6=p1.call(null,z);if(cljs.core.truth_(and__6720__auto____$6)){var and__6720__auto____$7=p2.call(null,z);if(cljs.core.truth_(and__6720__auto____$7))return p3.call(null,
z);else return and__6720__auto____$7}else return and__6720__auto____$6}else return and__6720__auto____$5}else return and__6720__auto____$4}else return and__6720__auto____$3}else return and__6720__auto____$2}else return and__6720__auto____$1}else return and__6720__auto__}())};var ep3__4=function(){var G__9747__delegate=function(x,y,z,args){return cljs.core.boolean$.call(null,ep3.call(null,x,y,z)&&cljs.core.every_QMARK_.call(null,function(p1__9738_SHARP_){var and__6720__auto__=p1.call(null,p1__9738_SHARP_);
if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p2.call(null,p1__9738_SHARP_);if(cljs.core.truth_(and__6720__auto____$1))return p3.call(null,p1__9738_SHARP_);else return and__6720__auto____$1}else return and__6720__auto__},args))};var G__9747=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9747__delegate.call(this,x,y,z,args)};G__9747.cljs$lang$maxFixedArity=3;G__9747.cljs$lang$applyTo=function(arglist__9748){var x=
cljs.core.first(arglist__9748);arglist__9748=cljs.core.next(arglist__9748);var y=cljs.core.first(arglist__9748);arglist__9748=cljs.core.next(arglist__9748);var z=cljs.core.first(arglist__9748);var args=cljs.core.rest(arglist__9748);return G__9747__delegate(x,y,z,args)};G__9747.cljs$core$IFn$_invoke$arity$variadic=G__9747__delegate;return G__9747}();ep3=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return ep3__0.call(this);case 1:return ep3__1.call(this,x);case 2:return ep3__2.call(this,
x,y);case 3:return ep3__3.call(this,x,y,z);default:return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};ep3.cljs$lang$maxFixedArity=3;ep3.cljs$lang$applyTo=ep3__4.cljs$lang$applyTo;ep3.cljs$core$IFn$_invoke$arity$0=ep3__0;ep3.cljs$core$IFn$_invoke$arity$1=ep3__1;ep3.cljs$core$IFn$_invoke$arity$2=ep3__2;ep3.cljs$core$IFn$_invoke$arity$3=ep3__3;ep3.cljs$core$IFn$_invoke$arity$variadic=ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3}()};var every_pred__4=function(){var G__9749__delegate=function(p1,p2,p3,ps){var ps__$1=cljs.core.list_STAR_.call(null,p1,p2,p3,ps);return function(){var epn=null;var epn__0=function(){return true};var epn__1=function(x){return cljs.core.every_QMARK_.call(null,function(p1__9739_SHARP_){return p1__9739_SHARP_.call(null,x)},ps__$1)};var epn__2=function(x,y){return cljs.core.every_QMARK_.call(null,function(p1__9740_SHARP_){var and__6720__auto__=p1__9740_SHARP_.call(null,x);if(cljs.core.truth_(and__6720__auto__))return p1__9740_SHARP_.call(null,
y);else return and__6720__auto__},ps__$1)};var epn__3=function(x,y,z){return cljs.core.every_QMARK_.call(null,function(p1__9741_SHARP_){var and__6720__auto__=p1__9741_SHARP_.call(null,x);if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=p1__9741_SHARP_.call(null,y);if(cljs.core.truth_(and__6720__auto____$1))return p1__9741_SHARP_.call(null,z);else return and__6720__auto____$1}else return and__6720__auto__},ps__$1)};var epn__4=function(){var G__9750__delegate=function(x,y,z,args){return cljs.core.boolean$.call(null,
epn.call(null,x,y,z)&&cljs.core.every_QMARK_.call(null,function(p1__9742_SHARP_){return cljs.core.every_QMARK_.call(null,p1__9742_SHARP_,args)},ps__$1))};var G__9750=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9750__delegate.call(this,x,y,z,args)};G__9750.cljs$lang$maxFixedArity=3;G__9750.cljs$lang$applyTo=function(arglist__9751){var x=cljs.core.first(arglist__9751);arglist__9751=cljs.core.next(arglist__9751);
var y=cljs.core.first(arglist__9751);arglist__9751=cljs.core.next(arglist__9751);var z=cljs.core.first(arglist__9751);var args=cljs.core.rest(arglist__9751);return G__9750__delegate(x,y,z,args)};G__9750.cljs$core$IFn$_invoke$arity$variadic=G__9750__delegate;return G__9750}();epn=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return epn__0.call(this);case 1:return epn__1.call(this,x);case 2:return epn__2.call(this,x,y);case 3:return epn__3.call(this,x,y,z);default:return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,
y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};epn.cljs$lang$maxFixedArity=3;epn.cljs$lang$applyTo=epn__4.cljs$lang$applyTo;epn.cljs$core$IFn$_invoke$arity$0=epn__0;epn.cljs$core$IFn$_invoke$arity$1=epn__1;epn.cljs$core$IFn$_invoke$arity$2=epn__2;epn.cljs$core$IFn$_invoke$arity$3=epn__3;epn.cljs$core$IFn$_invoke$arity$variadic=epn__4.cljs$core$IFn$_invoke$arity$variadic;return epn}()};var G__9749=function(p1,p2,p3,var_args){var ps=null;if(arguments.length>
3)ps=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9749__delegate.call(this,p1,p2,p3,ps)};G__9749.cljs$lang$maxFixedArity=3;G__9749.cljs$lang$applyTo=function(arglist__9752){var p1=cljs.core.first(arglist__9752);arglist__9752=cljs.core.next(arglist__9752);var p2=cljs.core.first(arglist__9752);arglist__9752=cljs.core.next(arglist__9752);var p3=cljs.core.first(arglist__9752);var ps=cljs.core.rest(arglist__9752);return G__9749__delegate(p1,p2,p3,ps)};G__9749.cljs$core$IFn$_invoke$arity$variadic=
G__9749__delegate;return G__9749}();every_pred=function(p1,p2,p3,var_args){var ps=var_args;switch(arguments.length){case 1:return every_pred__1.call(this,p1);case 2:return every_pred__2.call(this,p1,p2);case 3:return every_pred__3.call(this,p1,p2,p3);default:return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};every_pred.cljs$lang$maxFixedArity=3;every_pred.cljs$lang$applyTo=every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1=every_pred__1;every_pred.cljs$core$IFn$_invoke$arity$2=every_pred__2;every_pred.cljs$core$IFn$_invoke$arity$3=every_pred__3;every_pred.cljs$core$IFn$_invoke$arity$variadic=every_pred__4.cljs$core$IFn$_invoke$arity$variadic;return every_pred}();
cljs.core.some_fn=function(){var some_fn=null;var some_fn__1=function(p){return function(){var sp1=null;var sp1__0=function(){return null};var sp1__1=function(x){return p.call(null,x)};var sp1__2=function(x,y){var or__6732__auto__=p.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return p.call(null,y)};var sp1__3=function(x,y,z){var or__6732__auto__=p.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var or__6732__auto____$1=p.call(null,
y);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else return p.call(null,z)}};var sp1__4=function(){var G__9759__delegate=function(x,y,z,args){var or__6732__auto__=sp1.call(null,x,y,z);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.some.call(null,p,args)};var G__9759=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9759__delegate.call(this,x,y,z,args)};
G__9759.cljs$lang$maxFixedArity=3;G__9759.cljs$lang$applyTo=function(arglist__9760){var x=cljs.core.first(arglist__9760);arglist__9760=cljs.core.next(arglist__9760);var y=cljs.core.first(arglist__9760);arglist__9760=cljs.core.next(arglist__9760);var z=cljs.core.first(arglist__9760);var args=cljs.core.rest(arglist__9760);return G__9759__delegate(x,y,z,args)};G__9759.cljs$core$IFn$_invoke$arity$variadic=G__9759__delegate;return G__9759}();sp1=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return sp1__0.call(this);
case 1:return sp1__1.call(this,x);case 2:return sp1__2.call(this,x,y);case 3:return sp1__3.call(this,x,y,z);default:return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};sp1.cljs$lang$maxFixedArity=3;sp1.cljs$lang$applyTo=sp1__4.cljs$lang$applyTo;sp1.cljs$core$IFn$_invoke$arity$0=sp1__0;sp1.cljs$core$IFn$_invoke$arity$1=sp1__1;sp1.cljs$core$IFn$_invoke$arity$2=sp1__2;sp1.cljs$core$IFn$_invoke$arity$3=sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic=sp1__4.cljs$core$IFn$_invoke$arity$variadic;return sp1}()};var some_fn__2=function(p1,p2){return function(){var sp2=null;var sp2__0=function(){return null};var sp2__1=function(x){var or__6732__auto__=p1.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return p2.call(null,x)};var sp2__2=function(x,y){var or__6732__auto__=p1.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var or__6732__auto____$1=
p1.call(null,y);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else{var or__6732__auto____$2=p2.call(null,x);if(cljs.core.truth_(or__6732__auto____$2))return or__6732__auto____$2;else return p2.call(null,y)}}};var sp2__3=function(x,y,z){var or__6732__auto__=p1.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var or__6732__auto____$1=p1.call(null,y);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else{var or__6732__auto____$2=
p1.call(null,z);if(cljs.core.truth_(or__6732__auto____$2))return or__6732__auto____$2;else{var or__6732__auto____$3=p2.call(null,x);if(cljs.core.truth_(or__6732__auto____$3))return or__6732__auto____$3;else{var or__6732__auto____$4=p2.call(null,y);if(cljs.core.truth_(or__6732__auto____$4))return or__6732__auto____$4;else return p2.call(null,z)}}}}};var sp2__4=function(){var G__9761__delegate=function(x,y,z,args){var or__6732__auto__=sp2.call(null,x,y,z);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;
else return cljs.core.some.call(null,function(p1__9753_SHARP_){var or__6732__auto____$1=p1.call(null,p1__9753_SHARP_);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else return p2.call(null,p1__9753_SHARP_)},args)};var G__9761=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9761__delegate.call(this,x,y,z,args)};G__9761.cljs$lang$maxFixedArity=3;G__9761.cljs$lang$applyTo=function(arglist__9762){var x=
cljs.core.first(arglist__9762);arglist__9762=cljs.core.next(arglist__9762);var y=cljs.core.first(arglist__9762);arglist__9762=cljs.core.next(arglist__9762);var z=cljs.core.first(arglist__9762);var args=cljs.core.rest(arglist__9762);return G__9761__delegate(x,y,z,args)};G__9761.cljs$core$IFn$_invoke$arity$variadic=G__9761__delegate;return G__9761}();sp2=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return sp2__0.call(this);case 1:return sp2__1.call(this,x);case 2:return sp2__2.call(this,
x,y);case 3:return sp2__3.call(this,x,y,z);default:return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};sp2.cljs$lang$maxFixedArity=3;sp2.cljs$lang$applyTo=sp2__4.cljs$lang$applyTo;sp2.cljs$core$IFn$_invoke$arity$0=sp2__0;sp2.cljs$core$IFn$_invoke$arity$1=sp2__1;sp2.cljs$core$IFn$_invoke$arity$2=sp2__2;sp2.cljs$core$IFn$_invoke$arity$3=sp2__3;sp2.cljs$core$IFn$_invoke$arity$variadic=sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2}()};var some_fn__3=function(p1,p2,p3){return function(){var sp3=null;var sp3__0=function(){return null};var sp3__1=function(x){var or__6732__auto__=p1.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var or__6732__auto____$1=p2.call(null,x);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else return p3.call(null,x)}};var sp3__2=function(x,y){var or__6732__auto__=p1.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;
else{var or__6732__auto____$1=p2.call(null,x);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else{var or__6732__auto____$2=p3.call(null,x);if(cljs.core.truth_(or__6732__auto____$2))return or__6732__auto____$2;else{var or__6732__auto____$3=p1.call(null,y);if(cljs.core.truth_(or__6732__auto____$3))return or__6732__auto____$3;else{var or__6732__auto____$4=p2.call(null,y);if(cljs.core.truth_(or__6732__auto____$4))return or__6732__auto____$4;else return p3.call(null,y)}}}}};var sp3__3=
function(x,y,z){var or__6732__auto__=p1.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var or__6732__auto____$1=p2.call(null,x);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else{var or__6732__auto____$2=p3.call(null,x);if(cljs.core.truth_(or__6732__auto____$2))return or__6732__auto____$2;else{var or__6732__auto____$3=p1.call(null,y);if(cljs.core.truth_(or__6732__auto____$3))return or__6732__auto____$3;else{var or__6732__auto____$4=p2.call(null,
y);if(cljs.core.truth_(or__6732__auto____$4))return or__6732__auto____$4;else{var or__6732__auto____$5=p3.call(null,y);if(cljs.core.truth_(or__6732__auto____$5))return or__6732__auto____$5;else{var or__6732__auto____$6=p1.call(null,z);if(cljs.core.truth_(or__6732__auto____$6))return or__6732__auto____$6;else{var or__6732__auto____$7=p2.call(null,z);if(cljs.core.truth_(or__6732__auto____$7))return or__6732__auto____$7;else return p3.call(null,z)}}}}}}}};var sp3__4=function(){var G__9763__delegate=
function(x,y,z,args){var or__6732__auto__=sp3.call(null,x,y,z);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.some.call(null,function(p1__9754_SHARP_){var or__6732__auto____$1=p1.call(null,p1__9754_SHARP_);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else{var or__6732__auto____$2=p2.call(null,p1__9754_SHARP_);if(cljs.core.truth_(or__6732__auto____$2))return or__6732__auto____$2;else return p3.call(null,p1__9754_SHARP_)}},args)};var G__9763=
function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9763__delegate.call(this,x,y,z,args)};G__9763.cljs$lang$maxFixedArity=3;G__9763.cljs$lang$applyTo=function(arglist__9764){var x=cljs.core.first(arglist__9764);arglist__9764=cljs.core.next(arglist__9764);var y=cljs.core.first(arglist__9764);arglist__9764=cljs.core.next(arglist__9764);var z=cljs.core.first(arglist__9764);var args=cljs.core.rest(arglist__9764);return G__9763__delegate(x,
y,z,args)};G__9763.cljs$core$IFn$_invoke$arity$variadic=G__9763__delegate;return G__9763}();sp3=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return sp3__0.call(this);case 1:return sp3__1.call(this,x);case 2:return sp3__2.call(this,x,y);case 3:return sp3__3.call(this,x,y,z);default:return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};sp3.cljs$lang$maxFixedArity=3;sp3.cljs$lang$applyTo=
sp3__4.cljs$lang$applyTo;sp3.cljs$core$IFn$_invoke$arity$0=sp3__0;sp3.cljs$core$IFn$_invoke$arity$1=sp3__1;sp3.cljs$core$IFn$_invoke$arity$2=sp3__2;sp3.cljs$core$IFn$_invoke$arity$3=sp3__3;sp3.cljs$core$IFn$_invoke$arity$variadic=sp3__4.cljs$core$IFn$_invoke$arity$variadic;return sp3}()};var some_fn__4=function(){var G__9765__delegate=function(p1,p2,p3,ps){var ps__$1=cljs.core.list_STAR_.call(null,p1,p2,p3,ps);return function(){var spn=null;var spn__0=function(){return null};var spn__1=function(x){return cljs.core.some.call(null,
function(p1__9755_SHARP_){return p1__9755_SHARP_.call(null,x)},ps__$1)};var spn__2=function(x,y){return cljs.core.some.call(null,function(p1__9756_SHARP_){var or__6732__auto__=p1__9756_SHARP_.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return p1__9756_SHARP_.call(null,y)},ps__$1)};var spn__3=function(x,y,z){return cljs.core.some.call(null,function(p1__9757_SHARP_){var or__6732__auto__=p1__9757_SHARP_.call(null,x);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;
else{var or__6732__auto____$1=p1__9757_SHARP_.call(null,y);if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else return p1__9757_SHARP_.call(null,z)}},ps__$1)};var spn__4=function(){var G__9766__delegate=function(x,y,z,args){var or__6732__auto__=spn.call(null,x,y,z);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.some.call(null,function(p1__9758_SHARP_){return cljs.core.some.call(null,p1__9758_SHARP_,args)},ps__$1)};var G__9766=function(x,y,
z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9766__delegate.call(this,x,y,z,args)};G__9766.cljs$lang$maxFixedArity=3;G__9766.cljs$lang$applyTo=function(arglist__9767){var x=cljs.core.first(arglist__9767);arglist__9767=cljs.core.next(arglist__9767);var y=cljs.core.first(arglist__9767);arglist__9767=cljs.core.next(arglist__9767);var z=cljs.core.first(arglist__9767);var args=cljs.core.rest(arglist__9767);return G__9766__delegate(x,
y,z,args)};G__9766.cljs$core$IFn$_invoke$arity$variadic=G__9766__delegate;return G__9766}();spn=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return spn__0.call(this);case 1:return spn__1.call(this,x);case 2:return spn__2.call(this,x,y);case 3:return spn__3.call(this,x,y,z);default:return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};spn.cljs$lang$maxFixedArity=3;spn.cljs$lang$applyTo=
spn__4.cljs$lang$applyTo;spn.cljs$core$IFn$_invoke$arity$0=spn__0;spn.cljs$core$IFn$_invoke$arity$1=spn__1;spn.cljs$core$IFn$_invoke$arity$2=spn__2;spn.cljs$core$IFn$_invoke$arity$3=spn__3;spn.cljs$core$IFn$_invoke$arity$variadic=spn__4.cljs$core$IFn$_invoke$arity$variadic;return spn}()};var G__9765=function(p1,p2,p3,var_args){var ps=null;if(arguments.length>3)ps=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__9765__delegate.call(this,p1,p2,p3,ps)};G__9765.cljs$lang$maxFixedArity=
3;G__9765.cljs$lang$applyTo=function(arglist__9768){var p1=cljs.core.first(arglist__9768);arglist__9768=cljs.core.next(arglist__9768);var p2=cljs.core.first(arglist__9768);arglist__9768=cljs.core.next(arglist__9768);var p3=cljs.core.first(arglist__9768);var ps=cljs.core.rest(arglist__9768);return G__9765__delegate(p1,p2,p3,ps)};G__9765.cljs$core$IFn$_invoke$arity$variadic=G__9765__delegate;return G__9765}();some_fn=function(p1,p2,p3,var_args){var ps=var_args;switch(arguments.length){case 1:return some_fn__1.call(this,
p1);case 2:return some_fn__2.call(this,p1,p2);case 3:return some_fn__3.call(this,p1,p2,p3);default:return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};some_fn.cljs$lang$maxFixedArity=3;some_fn.cljs$lang$applyTo=some_fn__4.cljs$lang$applyTo;some_fn.cljs$core$IFn$_invoke$arity$1=some_fn__1;some_fn.cljs$core$IFn$_invoke$arity$2=some_fn__2;some_fn.cljs$core$IFn$_invoke$arity$3=some_fn__3;some_fn.cljs$core$IFn$_invoke$arity$variadic=
some_fn__4.cljs$core$IFn$_invoke$arity$variadic;return some_fn}();
cljs.core.map=function(){var map=null;var map__2=function(f,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s)){var c=cljs.core.chunk_first.call(null,s);var size=cljs.core.count.call(null,c);var b=cljs.core.chunk_buffer.call(null,size);var n__7580__auto___9770=size;var i_9771=0;while(true){if(i_9771<n__7580__auto___9770){cljs.core.chunk_append.call(null,
b,f.call(null,cljs.core._nth.call(null,c,i_9771)));var G__9772=i_9771+1;i_9771=G__9772;continue}else;break}return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),map.call(null,f,cljs.core.chunk_rest.call(null,s)))}else return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s)),map.call(null,f,cljs.core.rest.call(null,s)))}else return null},null,null)};var map__3=function(f,c1,c2){return new cljs.core.LazySeq(null,function(){var s1=cljs.core.seq.call(null,c1);var s2=cljs.core.seq.call(null,
c2);if(s1&&s2)return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2)));else return null},null,null)};var map__4=function(f,c1,c2,c3){return new cljs.core.LazySeq(null,function(){var s1=cljs.core.seq.call(null,c1);var s2=cljs.core.seq.call(null,c2);var s3=cljs.core.seq.call(null,c3);if(s1&&(s2&&s3))return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,
s2),cljs.core.first.call(null,s3)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2),cljs.core.rest.call(null,s3)));else return null},null,null)};var map__5=function(){var G__9773__delegate=function(f,c1,c2,c3,colls){var step=function step(cs){return new cljs.core.LazySeq(null,function(){var ss=map.call(null,cljs.core.seq,cs);if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss),step.call(null,map.call(null,
cljs.core.rest,ss)));else return null},null,null)};return map.call(null,function(p1__9769_SHARP_){return cljs.core.apply.call(null,f,p1__9769_SHARP_)},step.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)))};var G__9773=function(f,c1,c2,c3,var_args){var colls=null;if(arguments.length>4)colls=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0);return G__9773__delegate.call(this,f,c1,c2,c3,colls)};G__9773.cljs$lang$maxFixedArity=4;G__9773.cljs$lang$applyTo=function(arglist__9774){var f=
cljs.core.first(arglist__9774);arglist__9774=cljs.core.next(arglist__9774);var c1=cljs.core.first(arglist__9774);arglist__9774=cljs.core.next(arglist__9774);var c2=cljs.core.first(arglist__9774);arglist__9774=cljs.core.next(arglist__9774);var c3=cljs.core.first(arglist__9774);var colls=cljs.core.rest(arglist__9774);return G__9773__delegate(f,c1,c2,c3,colls)};G__9773.cljs$core$IFn$_invoke$arity$variadic=G__9773__delegate;return G__9773}();map=function(f,c1,c2,c3,var_args){var colls=var_args;switch(arguments.length){case 2:return map__2.call(this,
f,c1);case 3:return map__3.call(this,f,c1,c2);case 4:return map__4.call(this,f,c1,c2,c3);default:return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3,cljs.core.array_seq(arguments,4))}throw new Error("Invalid arity: "+arguments.length);};map.cljs$lang$maxFixedArity=4;map.cljs$lang$applyTo=map__5.cljs$lang$applyTo;map.cljs$core$IFn$_invoke$arity$2=map__2;map.cljs$core$IFn$_invoke$arity$3=map__3;map.cljs$core$IFn$_invoke$arity$4=map__4;map.cljs$core$IFn$_invoke$arity$variadic=map__5.cljs$core$IFn$_invoke$arity$variadic;
return map}();cljs.core.take=function take(n,coll){return new cljs.core.LazySeq(null,function(){if(n>0){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,s),take.call(null,n-1,cljs.core.rest.call(null,s)))}else return null}else return null},null,null)};
cljs.core.drop=function drop(n,coll){var step=function(n__$1,coll__$1){while(true){var s=cljs.core.seq.call(null,coll__$1);if(n__$1>0&&s){var G__9775=n__$1-1;var G__9776=cljs.core.rest.call(null,s);n__$1=G__9775;coll__$1=G__9776;continue}else return s;break}};return new cljs.core.LazySeq(null,function(){return step.call(null,n,coll)},null,null)};
cljs.core.drop_last=function(){var drop_last=null;var drop_last__1=function(s){return drop_last.call(null,1,s)};var drop_last__2=function(n,s){return cljs.core.map.call(null,function(x,_){return x},s,cljs.core.drop.call(null,n,s))};drop_last=function(n,s){switch(arguments.length){case 1:return drop_last__1.call(this,n);case 2:return drop_last__2.call(this,n,s)}throw new Error("Invalid arity: "+arguments.length);};drop_last.cljs$core$IFn$_invoke$arity$1=drop_last__1;drop_last.cljs$core$IFn$_invoke$arity$2=
drop_last__2;return drop_last}();cljs.core.take_last=function take_last(n,coll){var s=cljs.core.seq.call(null,coll);var lead=cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));while(true){if(lead){var G__9777=cljs.core.next.call(null,s);var G__9778=cljs.core.next.call(null,lead);s=G__9777;lead=G__9778;continue}else return s;break}};
cljs.core.drop_while=function drop_while(pred,coll){var step=function(pred__$1,coll__$1){while(true){var s=cljs.core.seq.call(null,coll__$1);if(cljs.core.truth_(function(){var and__6720__auto__=s;if(and__6720__auto__)return pred__$1.call(null,cljs.core.first.call(null,s));else return and__6720__auto__}())){var G__9779=pred__$1;var G__9780=cljs.core.rest.call(null,s);pred__$1=G__9779;coll__$1=G__9780;continue}else return s;break}};return new cljs.core.LazySeq(null,function(){return step.call(null,
pred,coll)},null,null)};cljs.core.cycle=function cycle(coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;return cljs.core.concat.call(null,s,cycle.call(null,s))}else return null},null,null)};cljs.core.split_at=function split_at(n,coll){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)],null)};
cljs.core.repeat=function(){var repeat=null;var repeat__1=function(x){return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,x,repeat.call(null,x))},null,null)};var repeat__2=function(n,x){return cljs.core.take.call(null,n,repeat.call(null,x))};repeat=function(n,x){switch(arguments.length){case 1:return repeat__1.call(this,n);case 2:return repeat__2.call(this,n,x)}throw new Error("Invalid arity: "+arguments.length);};repeat.cljs$core$IFn$_invoke$arity$1=repeat__1;repeat.cljs$core$IFn$_invoke$arity$2=
repeat__2;return repeat}();cljs.core.replicate=function replicate(n,x){return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x))};
cljs.core.repeatedly=function(){var repeatedly=null;var repeatedly__1=function(f){return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f))},null,null)};var repeatedly__2=function(n,f){return cljs.core.take.call(null,n,repeatedly.call(null,f))};repeatedly=function(n,f){switch(arguments.length){case 1:return repeatedly__1.call(this,n);case 2:return repeatedly__2.call(this,n,f)}throw new Error("Invalid arity: "+arguments.length);};repeatedly.cljs$core$IFn$_invoke$arity$1=
repeatedly__1;repeatedly.cljs$core$IFn$_invoke$arity$2=repeatedly__2;return repeatedly}();cljs.core.iterate=function iterate(f,x){return cljs.core.cons.call(null,x,new cljs.core.LazySeq(null,function(){return iterate.call(null,f,f.call(null,x))},null,null))};
cljs.core.interleave=function(){var interleave=null;var interleave__2=function(c1,c2){return new cljs.core.LazySeq(null,function(){var s1=cljs.core.seq.call(null,c1);var s2=cljs.core.seq.call(null,c2);if(s1&&s2)return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));else return null},null,null)};var interleave__3=function(){var G__9781__delegate=function(c1,
c2,colls){return new cljs.core.LazySeq(null,function(){var ss=cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss)));else return null},null,null)};var G__9781=function(c1,c2,var_args){var colls=null;if(arguments.length>2)colls=cljs.core.array_seq(Array.prototype.slice.call(arguments,
2),0);return G__9781__delegate.call(this,c1,c2,colls)};G__9781.cljs$lang$maxFixedArity=2;G__9781.cljs$lang$applyTo=function(arglist__9782){var c1=cljs.core.first(arglist__9782);arglist__9782=cljs.core.next(arglist__9782);var c2=cljs.core.first(arglist__9782);var colls=cljs.core.rest(arglist__9782);return G__9781__delegate(c1,c2,colls)};G__9781.cljs$core$IFn$_invoke$arity$variadic=G__9781__delegate;return G__9781}();interleave=function(c1,c2,var_args){var colls=var_args;switch(arguments.length){case 2:return interleave__2.call(this,
c1,c2);default:return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};interleave.cljs$lang$maxFixedArity=2;interleave.cljs$lang$applyTo=interleave__3.cljs$lang$applyTo;interleave.cljs$core$IFn$_invoke$arity$2=interleave__2;interleave.cljs$core$IFn$_invoke$arity$variadic=interleave__3.cljs$core$IFn$_invoke$arity$variadic;return interleave}();
cljs.core.interpose=function interpose(sep,coll){return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll))};
cljs.core.flatten1=function flatten1(colls){var cat=function cat(coll,colls__$1){return new cljs.core.LazySeq(null,function(){var temp__4090__auto__=cljs.core.seq.call(null,coll);if(temp__4090__auto__){var coll__$1=temp__4090__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,coll__$1),cat.call(null,cljs.core.rest.call(null,coll__$1),colls__$1))}else if(cljs.core.seq.call(null,colls__$1))return cat.call(null,cljs.core.first.call(null,colls__$1),cljs.core.rest.call(null,colls__$1));
else return null},null,null)};return cat.call(null,null,colls)};
cljs.core.mapcat=function(){var mapcat=null;var mapcat__2=function(f,coll){return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll))};var mapcat__3=function(){var G__9783__delegate=function(f,coll,colls){return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls))};var G__9783=function(f,coll,var_args){var colls=null;if(arguments.length>2)colls=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return G__9783__delegate.call(this,f,coll,colls)};
G__9783.cljs$lang$maxFixedArity=2;G__9783.cljs$lang$applyTo=function(arglist__9784){var f=cljs.core.first(arglist__9784);arglist__9784=cljs.core.next(arglist__9784);var coll=cljs.core.first(arglist__9784);var colls=cljs.core.rest(arglist__9784);return G__9783__delegate(f,coll,colls)};G__9783.cljs$core$IFn$_invoke$arity$variadic=G__9783__delegate;return G__9783}();mapcat=function(f,coll,var_args){var colls=var_args;switch(arguments.length){case 2:return mapcat__2.call(this,f,coll);default:return mapcat__3.cljs$core$IFn$_invoke$arity$variadic(f,
coll,cljs.core.array_seq(arguments,2))}throw new Error("Invalid arity: "+arguments.length);};mapcat.cljs$lang$maxFixedArity=2;mapcat.cljs$lang$applyTo=mapcat__3.cljs$lang$applyTo;mapcat.cljs$core$IFn$_invoke$arity$2=mapcat__2;mapcat.cljs$core$IFn$_invoke$arity$variadic=mapcat__3.cljs$core$IFn$_invoke$arity$variadic;return mapcat}();
cljs.core.filter=function filter(pred,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s)){var c=cljs.core.chunk_first.call(null,s);var size=cljs.core.count.call(null,c);var b=cljs.core.chunk_buffer.call(null,size);var n__7580__auto___9785=size;var i_9786=0;while(true){if(i_9786<n__7580__auto___9785){if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,
c,i_9786))))cljs.core.chunk_append.call(null,b,cljs.core._nth.call(null,c,i_9786));else;var G__9787=i_9786+1;i_9786=G__9787;continue}else;break}return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),filter.call(null,pred,cljs.core.chunk_rest.call(null,s)))}else{var f=cljs.core.first.call(null,s);var r=cljs.core.rest.call(null,s);if(cljs.core.truth_(pred.call(null,f)))return cljs.core.cons.call(null,f,filter.call(null,pred,r));else return filter.call(null,pred,r)}}else return null},null,
null)};cljs.core.remove=function remove(pred,coll){return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll)};cljs.core.tree_seq=function tree_seq(branch_QMARK_,children,root){var walk=function walk(node){return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,node,cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null)},null,null)};return walk.call(null,root)};
cljs.core.flatten=function flatten(x){return cljs.core.filter.call(null,function(p1__9788_SHARP_){return!cljs.core.sequential_QMARK_.call(null,p1__9788_SHARP_)},cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)))};
cljs.core.into=function into(to,from){if(!(to==null))if(function(){var G__9790=to;if(G__9790){var bit__7375__auto__=G__9790.cljs$lang$protocol_mask$partition1$&4;if(bit__7375__auto__||G__9790.cljs$core$IEditableCollection$)return true;else return false}else return false}())return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));else return cljs.core.reduce.call(null,cljs.core._conj,to,from);else return cljs.core.reduce.call(null,
cljs.core.conj,cljs.core.List.EMPTY,from)};
cljs.core.mapv=function(){var mapv=null;var mapv__2=function(f,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,function(v,o){return cljs.core.conj_BANG_.call(null,v,f.call(null,o))},cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll))};var mapv__3=function(f,c1,c2){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2))};var mapv__4=function(f,c1,c2,c3){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,
cljs.core.map.call(null,f,c1,c2,c3))};var mapv__5=function(){var G__9791__delegate=function(f,c1,c2,c3,colls){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls))};var G__9791=function(f,c1,c2,c3,var_args){var colls=null;if(arguments.length>4)colls=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0);return G__9791__delegate.call(this,f,c1,c2,c3,colls)};G__9791.cljs$lang$maxFixedArity=4;G__9791.cljs$lang$applyTo=function(arglist__9792){var f=
cljs.core.first(arglist__9792);arglist__9792=cljs.core.next(arglist__9792);var c1=cljs.core.first(arglist__9792);arglist__9792=cljs.core.next(arglist__9792);var c2=cljs.core.first(arglist__9792);arglist__9792=cljs.core.next(arglist__9792);var c3=cljs.core.first(arglist__9792);var colls=cljs.core.rest(arglist__9792);return G__9791__delegate(f,c1,c2,c3,colls)};G__9791.cljs$core$IFn$_invoke$arity$variadic=G__9791__delegate;return G__9791}();mapv=function(f,c1,c2,c3,var_args){var colls=var_args;switch(arguments.length){case 2:return mapv__2.call(this,
f,c1);case 3:return mapv__3.call(this,f,c1,c2);case 4:return mapv__4.call(this,f,c1,c2,c3);default:return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3,cljs.core.array_seq(arguments,4))}throw new Error("Invalid arity: "+arguments.length);};mapv.cljs$lang$maxFixedArity=4;mapv.cljs$lang$applyTo=mapv__5.cljs$lang$applyTo;mapv.cljs$core$IFn$_invoke$arity$2=mapv__2;mapv.cljs$core$IFn$_invoke$arity$3=mapv__3;mapv.cljs$core$IFn$_invoke$arity$4=mapv__4;mapv.cljs$core$IFn$_invoke$arity$variadic=
mapv__5.cljs$core$IFn$_invoke$arity$variadic;return mapv}();cljs.core.filterv=function filterv(pred,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,function(v,o){if(cljs.core.truth_(pred.call(null,o)))return cljs.core.conj_BANG_.call(null,v,o);else return v},cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll))};
cljs.core.partition=function(){var partition=null;var partition__2=function(n,coll){return partition.call(null,n,n,coll)};var partition__3=function(n,step,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;var p=cljs.core.take.call(null,n,s);if(n===cljs.core.count.call(null,p))return cljs.core.cons.call(null,p,partition.call(null,n,step,cljs.core.drop.call(null,step,s)));else return null}else return null},
null,null)};var partition__4=function(n,step,pad,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;var p=cljs.core.take.call(null,n,s);if(n===cljs.core.count.call(null,p))return cljs.core.cons.call(null,p,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s)));else return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,n,cljs.core.concat.call(null,p,pad)))}else return null},
null,null)};partition=function(n,step,pad,coll){switch(arguments.length){case 2:return partition__2.call(this,n,step);case 3:return partition__3.call(this,n,step,pad);case 4:return partition__4.call(this,n,step,pad,coll)}throw new Error("Invalid arity: "+arguments.length);};partition.cljs$core$IFn$_invoke$arity$2=partition__2;partition.cljs$core$IFn$_invoke$arity$3=partition__3;partition.cljs$core$IFn$_invoke$arity$4=partition__4;return partition}();
cljs.core.get_in=function(){var get_in=null;var get_in__2=function(m,ks){return get_in.call(null,m,ks,null)};var get_in__3=function(m,ks,not_found){var sentinel=cljs.core.lookup_sentinel;var m__$1=m;var ks__$1=cljs.core.seq.call(null,ks);while(true){if(ks__$1)if(!function(){var G__9794=m__$1;if(G__9794){var bit__7382__auto__=G__9794.cljs$lang$protocol_mask$partition0$&256;if(bit__7382__auto__||G__9794.cljs$core$ILookup$)return true;else if(!G__9794.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.ILookup,G__9794);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__9794)}())return not_found;else{var m__$2=cljs.core.get.call(null,m__$1,cljs.core.first.call(null,ks__$1),sentinel);if(sentinel===m__$2)return not_found;else{var G__9795=sentinel;var G__9796=m__$2;var G__9797=cljs.core.next.call(null,ks__$1);sentinel=G__9795;m__$1=G__9796;ks__$1=G__9797;continue}}else return m__$1;break}};get_in=function(m,ks,not_found){switch(arguments.length){case 2:return get_in__2.call(this,
m,ks);case 3:return get_in__3.call(this,m,ks,not_found)}throw new Error("Invalid arity: "+arguments.length);};get_in.cljs$core$IFn$_invoke$arity$2=get_in__2;get_in.cljs$core$IFn$_invoke$arity$3=get_in__3;return get_in}();
cljs.core.assoc_in=function assoc_in(m,p__9798,v){var vec__9800=p__9798;var k=cljs.core.nth.call(null,vec__9800,0,null);var ks=cljs.core.nthnext.call(null,vec__9800,1);if(ks)return cljs.core.assoc.call(null,m,k,assoc_in.call(null,cljs.core.get.call(null,m,k),ks,v));else return cljs.core.assoc.call(null,m,k,v)};
cljs.core.update_in=function(){var update_in=null;var update_in__3=function(m,p__9801,f){var vec__9811=p__9801;var k=cljs.core.nth.call(null,vec__9811,0,null);var ks=cljs.core.nthnext.call(null,vec__9811,1);if(ks)return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f));else return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)))};var update_in__4=function(m,p__9802,f,a){var vec__9812=p__9802;var k=cljs.core.nth.call(null,vec__9812,0,null);
var ks=cljs.core.nthnext.call(null,vec__9812,1);if(ks)return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a));else return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a))};var update_in__5=function(m,p__9803,f,a,b){var vec__9813=p__9803;var k=cljs.core.nth.call(null,vec__9813,0,null);var ks=cljs.core.nthnext.call(null,vec__9813,1);if(ks)return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b));
else return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b))};var update_in__6=function(m,p__9804,f,a,b,c){var vec__9814=p__9804;var k=cljs.core.nth.call(null,vec__9814,0,null);var ks=cljs.core.nthnext.call(null,vec__9814,1);if(ks)return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b,c));else return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b,c))};var update_in__7=function(){var G__9816__delegate=function(m,
p__9805,f,a,b,c,args){var vec__9815=p__9805;var k=cljs.core.nth.call(null,vec__9815,0,null);var ks=cljs.core.nthnext.call(null,vec__9815,1);if(ks)return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k),ks,f,a,b,c,args));else return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),a,b,c,args))};var G__9816=function(m,p__9805,f,a,b,c,var_args){var args=null;if(arguments.length>6)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,
6),0);return G__9816__delegate.call(this,m,p__9805,f,a,b,c,args)};G__9816.cljs$lang$maxFixedArity=6;G__9816.cljs$lang$applyTo=function(arglist__9817){var m=cljs.core.first(arglist__9817);arglist__9817=cljs.core.next(arglist__9817);var p__9805=cljs.core.first(arglist__9817);arglist__9817=cljs.core.next(arglist__9817);var f=cljs.core.first(arglist__9817);arglist__9817=cljs.core.next(arglist__9817);var a=cljs.core.first(arglist__9817);arglist__9817=cljs.core.next(arglist__9817);var b=cljs.core.first(arglist__9817);
arglist__9817=cljs.core.next(arglist__9817);var c=cljs.core.first(arglist__9817);var args=cljs.core.rest(arglist__9817);return G__9816__delegate(m,p__9805,f,a,b,c,args)};G__9816.cljs$core$IFn$_invoke$arity$variadic=G__9816__delegate;return G__9816}();update_in=function(m,p__9805,f,a,b,c,var_args){var args=var_args;switch(arguments.length){case 3:return update_in__3.call(this,m,p__9805,f);case 4:return update_in__4.call(this,m,p__9805,f,a);case 5:return update_in__5.call(this,m,p__9805,f,a,b);case 6:return update_in__6.call(this,
m,p__9805,f,a,b,c);default:return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__9805,f,a,b,c,cljs.core.array_seq(arguments,6))}throw new Error("Invalid arity: "+arguments.length);};update_in.cljs$lang$maxFixedArity=6;update_in.cljs$lang$applyTo=update_in__7.cljs$lang$applyTo;update_in.cljs$core$IFn$_invoke$arity$3=update_in__3;update_in.cljs$core$IFn$_invoke$arity$4=update_in__4;update_in.cljs$core$IFn$_invoke$arity$5=update_in__5;update_in.cljs$core$IFn$_invoke$arity$6=update_in__6;update_in.cljs$core$IFn$_invoke$arity$variadic=
update_in__7.cljs$core$IFn$_invoke$arity$variadic;return update_in}();cljs.core.VectorNode=function(edit,arr){this.edit=edit;this.arr=arr};cljs.core.VectorNode.cljs$lang$type=true;cljs.core.VectorNode.cljs$lang$ctorStr="cljs.core/VectorNode";cljs.core.VectorNode.cljs$lang$ctorPrWriter=function(this__7302__auto__,writer__7303__auto__,opts__7304__auto__){return cljs.core._write.call(null,writer__7303__auto__,"cljs.core/VectorNode")};
cljs.core.__GT_VectorNode=function __GT_VectorNode(edit,arr){return new cljs.core.VectorNode(edit,arr)};cljs.core.pv_fresh_node=function pv_fresh_node(edit){return new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])};cljs.core.pv_aget=function pv_aget(node,idx){return node.arr[idx]};cljs.core.pv_aset=function pv_aset(node,idx,val){return node.arr[idx]=val};
cljs.core.pv_clone_node=function pv_clone_node(node){return new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr))};cljs.core.tail_off=function tail_off(pv){var cnt=pv.cnt;if(cnt<32)return 0;else return cnt-1>>>5<<5};
cljs.core.new_path=function new_path(edit,level,node){var ll=level;var ret=node;while(true){if(ll===0)return ret;else{var embed=ret;var r=cljs.core.pv_fresh_node.call(null,edit);var _=cljs.core.pv_aset.call(null,r,0,embed);var G__9818=ll-5;var G__9819=r;ll=G__9818;ret=G__9819;continue}break}};
cljs.core.push_tail=function push_tail(pv,level,parent,tailnode){var ret=cljs.core.pv_clone_node.call(null,parent);var subidx=pv.cnt-1>>>level&31;if(5===level){cljs.core.pv_aset.call(null,ret,subidx,tailnode);return ret}else{var child=cljs.core.pv_aget.call(null,parent,subidx);if(!(child==null)){var node_to_insert=push_tail.call(null,pv,level-5,child,tailnode);cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);return ret}else{var node_to_insert=cljs.core.new_path.call(null,null,level-5,tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);return ret}}};cljs.core.vector_index_out_of_bounds=function vector_index_out_of_bounds(i,cnt){throw new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join(""));};
cljs.core.array_for=function array_for(pv,i){if(0<=i&&i<pv.cnt)if(i>=cljs.core.tail_off.call(null,pv))return pv.tail;else{var node=pv.root;var level=pv.shift;while(true){if(level>0){var G__9820=cljs.core.pv_aget.call(null,node,i>>>level&31);var G__9821=level-5;node=G__9820;level=G__9821;continue}else return node.arr;break}}else return cljs.core.vector_index_out_of_bounds.call(null,i,pv.cnt)};
cljs.core.do_assoc=function do_assoc(pv,level,node,i,val){var ret=cljs.core.pv_clone_node.call(null,node);if(level===0){cljs.core.pv_aset.call(null,ret,i&31,val);return ret}else{var subidx=i>>>level&31;cljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,level-5,cljs.core.pv_aget.call(null,node,subidx),i,val));return ret}};
cljs.core.pop_tail=function pop_tail(pv,level,node){var subidx=pv.cnt-2>>>level&31;if(level>5){var new_child=pop_tail.call(null,pv,level-5,cljs.core.pv_aget.call(null,node,subidx));if(new_child==null&&subidx===0)return null;else{var ret=cljs.core.pv_clone_node.call(null,node);cljs.core.pv_aset.call(null,ret,subidx,new_child);return ret}}else if(subidx===0)return null;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var ret=cljs.core.pv_clone_node.call(null,node);cljs.core.pv_aset.call(null,
ret,subidx,null);return ret}else return null};cljs.core.PersistentVector=function(meta,cnt,shift,root,tail,__hash){this.meta=meta;this.cnt=cnt;this.shift=shift;this.root=root;this.tail=tail;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=167668511};cljs.core.PersistentVector.cljs$lang$type=true;cljs.core.PersistentVector.cljs$lang$ctorStr="cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentVector")};cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(coll){var self__=this;var coll__$1=this;return new cljs.core.TransientVector(self__.cnt,self__.shift,cljs.core.tv_editable_root.call(null,self__.root),cljs.core.tv_editable_tail.call(null,self__.tail))};
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,k,null)};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,k,not_found)};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3=function(coll,k,v){var self__=this;var coll__$1=this;if(0<=k&&k<self__.cnt)if(cljs.core.tail_off.call(null,coll__$1)<=k){var new_tail=cljs.core.aclone.call(null,self__.tail);new_tail[k&31]=v;return new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null)}else return new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc.call(null,coll__$1,self__.shift,self__.root,
k,v),self__.tail,null);else if(k===self__.cnt)return cljs.core._conj.call(null,coll__$1,v);else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join(""));else return null};
cljs.core.PersistentVector.prototype.call=function(){var G__9823=null;var G__9823__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k)};var G__9823__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found)};G__9823=function(self__,k,not_found){switch(arguments.length){case 2:return G__9823__2.call(this,self__,k);case 3:return G__9823__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9823}();cljs.core.PersistentVector.prototype.apply=function(self__,args9822){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9822)))};cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k)};
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found)};
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(v,f,init){var self__=this;var v__$1=this;var step_init=[0,init];var i=0;while(true){if(i<self__.cnt){var arr=cljs.core.array_for.call(null,v__$1,i);var len=arr.length;var init__$1=function(){var j=0;var init__$1=step_init[1];while(true){if(j<len){var init__$2=f.call(null,init__$1,j+i,arr[j]);if(cljs.core.reduced_QMARK_.call(null,init__$2))return init__$2;else{var G__9824=j+1;var G__9825=init__$2;j=G__9824;init__$1=
G__9825;continue}}else{step_init[0]=len;step_init[1]=init__$1;return init__$1}break}}();if(cljs.core.reduced_QMARK_.call(null,init__$1))return cljs.core.deref.call(null,init__$1);else{var G__9826=i+step_init[0];i=G__9826;continue}}else return step_init[1];break}};
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;if(self__.cnt-cljs.core.tail_off.call(null,coll__$1)<32){var len=self__.tail.length;var new_tail=new Array(len+1);var n__7580__auto___9827=len;var i_9828=0;while(true){if(i_9828<n__7580__auto___9827){new_tail[i_9828]=self__.tail[i_9828];var G__9829=i_9828+1;i_9828=G__9829;continue}else;break}new_tail[len]=o;return new cljs.core.PersistentVector(self__.meta,self__.cnt+1,self__.shift,
self__.root,new_tail,null)}else{var root_overflow_QMARK_=self__.cnt>>>5>1<<self__.shift;var new_shift=root_overflow_QMARK_?self__.shift+5:self__.shift;var new_root=root_overflow_QMARK_?function(){var n_r=cljs.core.pv_fresh_node.call(null,null);cljs.core.pv_aset.call(null,n_r,0,self__.root);cljs.core.pv_aset.call(null,n_r,1,cljs.core.new_path.call(null,null,self__.shift,new cljs.core.VectorNode(null,self__.tail)));return n_r}():cljs.core.push_tail.call(null,coll__$1,self__.shift,self__.root,new cljs.core.VectorNode(null,
self__.tail));return new cljs.core.PersistentVector(self__.meta,self__.cnt+1,new_shift,new_root,[o],null)}};cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt>0)return new cljs.core.RSeq(coll__$1,self__.cnt-1,null);else return null};cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,0)};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,1)};cljs.core.PersistentVector.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2=function(v,f){var self__=this;var v__$1=this;return cljs.core.ci_reduce.call(null,v__$1,f)};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3=function(v,f,start){var self__=this;var v__$1=this;return cljs.core.ci_reduce.call(null,v__$1,f,start)};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt===0)return null;else if(self__.cnt<32)return cljs.core.array_seq.call(null,self__.tail);else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.chunked_seq.call(null,coll__$1,0,0);else return null};cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.cnt};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt>0)return cljs.core._nth.call(null,coll__$1,self__.cnt-1);else return null};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt===0)throw new Error("Can't pop empty vector");else if(1===self__.cnt)return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);else if(1<self__.cnt-cljs.core.tail_off.call(null,coll__$1))return new cljs.core.PersistentVector(self__.meta,self__.cnt-1,self__.shift,self__.root,self__.tail.slice(0,-1),null);else if(new cljs.core.Keyword(null,"else",
"else",1017020587)){var new_tail=cljs.core.array_for.call(null,coll__$1,self__.cnt-2);var nr=cljs.core.pop_tail.call(null,coll__$1,self__.shift,self__.root);var new_root=nr==null?cljs.core.PersistentVector.EMPTY_NODE:nr;var cnt_1=self__.cnt-1;if(5<self__.shift&&cljs.core.pv_aget.call(null,new_root,1)==null)return new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift-5,cljs.core.pv_aget.call(null,new_root,0),new_tail,null);else return new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,
new_root,new_tail,null)}else return null};cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3=function(coll,n,val){var self__=this;var coll__$1=this;return cljs.core._assoc.call(null,coll__$1,n,val)};cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash)};cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash)};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2=function(coll,n){var self__=this;var coll__$1=this;return cljs.core.array_for.call(null,coll__$1,n)[n&31]};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3=function(coll,n,not_found){var self__=this;var coll__$1=this;if(0<=n&&n<self__.cnt)return cljs.core._nth.call(null,coll__$1,n);else return not_found};cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta)};
cljs.core.__GT_PersistentVector=function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash)};cljs.core.PersistentVector.EMPTY_NODE=new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);
cljs.core.PersistentVector.EMPTY=new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0);
cljs.core.PersistentVector.fromArray=function(xs,no_clone){var l=xs.length;var xs__$1=no_clone?xs:cljs.core.aclone.call(null,xs);if(l<32)return new cljs.core.PersistentVector(null,l,5,cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null);else{var node=xs__$1.slice(0,32);var v=new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node,null);var i=32;var out=cljs.core._as_transient.call(null,v);while(true){if(i<l){var G__9830=i+1;var G__9831=cljs.core.conj_BANG_.call(null,out,
xs__$1[i]);i=G__9830;out=G__9831;continue}else return cljs.core.persistent_BANG_.call(null,out);break}}};cljs.core.vec=function vec(coll){return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll))};
cljs.core.vector=function(){var vector__delegate=function(args){if(args instanceof cljs.core.IndexedSeq&&args.i===0)return cljs.core.PersistentVector.fromArray.call(null,args.arr,true);else return cljs.core.vec.call(null,args)};var vector=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return vector__delegate.call(this,args)};vector.cljs$lang$maxFixedArity=0;vector.cljs$lang$applyTo=function(arglist__9832){var args=cljs.core.seq(arglist__9832);
return vector__delegate(args)};vector.cljs$core$IFn$_invoke$arity$variadic=vector__delegate;return vector}();cljs.core.ChunkedSeq=function(vec,node,i,off,meta,__hash){this.vec=vec;this.node=node;this.i=i;this.off=off;this.meta=meta;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=32243948;this.cljs$lang$protocol_mask$partition1$=1536};cljs.core.ChunkedSeq.cljs$lang$type=true;cljs.core.ChunkedSeq.cljs$lang$ctorStr="cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ChunkedSeq")};cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.off+1<self__.node.length){var s=cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off+1);if(s==null)return null;else return s}else return cljs.core._chunked_next.call(null,coll__$1)};cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};
cljs.core.ChunkedSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,self__.i+self__.off,cljs.core.count.call(null,self__.vec)),f)};
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,self__.i+self__.off,cljs.core.count.call(null,self__.vec)),f,start)};cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.node[self__.off]};cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.off+1<self__.node.length){var s=cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off+1);if(s==null)return cljs.core.List.EMPTY;else return s}else return cljs.core._chunked_rest.call(null,coll__$1)};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1=function(coll){var self__=this;var coll__$1=this;var l=self__.node.length;var s=self__.i+l<cljs.core._count.call(null,self__.vec)?cljs.core.chunked_seq.call(null,self__.vec,self__.i+l,0):null;if(s==null)return null;else return s};cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,m){var self__=this;var coll__$1=this;return cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m)};cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta)};cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.array_chunk.call(null,self__.node,self__.off)};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1=function(coll){var self__=this;var coll__$1=this;var l=self__.node.length;var s=self__.i+l<cljs.core._count.call(null,self__.vec)?cljs.core.chunked_seq.call(null,self__.vec,self__.i+l,0):null;if(s==null)return cljs.core.List.EMPTY;else return s};cljs.core.__GT_ChunkedSeq=function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash)};
cljs.core.chunked_seq=function(){var chunked_seq=null;var chunked_seq__3=function(vec,i,off){return new cljs.core.ChunkedSeq(vec,cljs.core.array_for.call(null,vec,i),i,off,null,null)};var chunked_seq__4=function(vec,node,i,off){return new cljs.core.ChunkedSeq(vec,node,i,off,null,null)};var chunked_seq__5=function(vec,node,i,off,meta){return new cljs.core.ChunkedSeq(vec,node,i,off,meta,null)};chunked_seq=function(vec,node,i,off,meta){switch(arguments.length){case 3:return chunked_seq__3.call(this,
vec,node,i);case 4:return chunked_seq__4.call(this,vec,node,i,off);case 5:return chunked_seq__5.call(this,vec,node,i,off,meta)}throw new Error("Invalid arity: "+arguments.length);};chunked_seq.cljs$core$IFn$_invoke$arity$3=chunked_seq__3;chunked_seq.cljs$core$IFn$_invoke$arity$4=chunked_seq__4;chunked_seq.cljs$core$IFn$_invoke$arity$5=chunked_seq__5;return chunked_seq}();
cljs.core.Subvec=function(meta,v,start,end,__hash){this.meta=meta;this.v=v;this.start=start;this.end=end;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=32400159;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.Subvec.cljs$lang$type=true;cljs.core.Subvec.cljs$lang$ctorStr="cljs.core/Subvec";cljs.core.Subvec.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Subvec")};
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,k,null)};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,k,not_found)};
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3=function(coll,key,val){var self__=this;var coll__$1=this;var v_pos=self__.start+key;return cljs.core.build_subvec.call(null,self__.meta,cljs.core.assoc.call(null,self__.v,v_pos,val),self__.start,function(){var x__7039__auto__=self__.end;var y__7040__auto__=v_pos+1;return x__7039__auto__>y__7040__auto__?x__7039__auto__:y__7040__auto__}(),null)};
cljs.core.Subvec.prototype.call=function(){var G__9834=null;var G__9834__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k)};var G__9834__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found)};G__9834=function(self__,k,not_found){switch(arguments.length){case 2:return G__9834__2.call(this,self__,k);case 3:return G__9834__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9834}();cljs.core.Subvec.prototype.apply=function(self__,args9833){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9833)))};cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k)};
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found)};cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,self__.end+1,null)};
cljs.core.Subvec.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.ci_reduce.call(null,coll__$1,f)};cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start__$1){var self__=this;var coll__$1=this;return cljs.core.ci_reduce.call(null,coll__$1,f,start__$1)};
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;var subvec_seq=function subvec_seq(i){if(i===self__.end)return null;else return cljs.core.cons.call(null,cljs.core._nth.call(null,self__.v,i),new cljs.core.LazySeq(null,function(){return subvec_seq.call(null,i+1)},null,null))};return subvec_seq.call(null,self__.start)};
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.end-self__.start};cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,self__.v,self__.end-1)};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.start===self__.end)throw new Error("Can't pop empty vector");else return cljs.core.build_subvec.call(null,self__.meta,self__.v,self__.start,self__.end-1,null)};cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3=function(coll,n,val){var self__=this;var coll__$1=this;return cljs.core._assoc.call(null,coll__$1,n,val)};
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash)};
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash)};cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2=function(coll,n){var self__=this;var coll__$1=this;if(n<0||self__.end<=self__.start+n)return cljs.core.vector_index_out_of_bounds.call(null,n,self__.end-self__.start);else return cljs.core._nth.call(null,self__.v,self__.start+n)};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3=function(coll,n,not_found){var self__=this;var coll__$1=this;if(n<0||self__.end<=self__.start+n)return not_found;else return cljs.core._nth.call(null,self__.v,self__.start+n,not_found)};cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta)};
cljs.core.__GT_Subvec=function __GT_Subvec(meta,v,start,end,__hash){return new cljs.core.Subvec(meta,v,start,end,__hash)};
cljs.core.build_subvec=function build_subvec(meta,v,start,end,__hash){while(true){if(v instanceof cljs.core.Subvec){var G__9835=meta;var G__9836=v.v;var G__9837=v.start+start;var G__9838=v.start+end;var G__9839=__hash;meta=G__9835;v=G__9836;start=G__9837;end=G__9838;__hash=G__9839;continue}else{var c=cljs.core.count.call(null,v);if(start<0||(end<0||(start>c||end>c)))throw new Error("Index out of bounds");else;return new cljs.core.Subvec(meta,v,start,end,__hash)}break}};
cljs.core.subvec=function(){var subvec=null;var subvec__2=function(v,start){return subvec.call(null,v,start,cljs.core.count.call(null,v))};var subvec__3=function(v,start,end){return cljs.core.build_subvec.call(null,null,v,start,end,null)};subvec=function(v,start,end){switch(arguments.length){case 2:return subvec__2.call(this,v,start);case 3:return subvec__3.call(this,v,start,end)}throw new Error("Invalid arity: "+arguments.length);};subvec.cljs$core$IFn$_invoke$arity$2=subvec__2;subvec.cljs$core$IFn$_invoke$arity$3=
subvec__3;return subvec}();cljs.core.tv_ensure_editable=function tv_ensure_editable(edit,node){if(edit===node.edit)return node;else return new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr))};cljs.core.tv_editable_root=function tv_editable_root(node){return new cljs.core.VectorNode(function(){var obj9843={};return obj9843}(),cljs.core.aclone.call(null,node.arr))};
cljs.core.tv_editable_tail=function tv_editable_tail(tl){var ret=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy.call(null,tl,0,ret,0,tl.length);return ret};
cljs.core.tv_push_tail=function tv_push_tail(tv,level,parent,tail_node){var ret=cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);var subidx=tv.cnt-1>>>level&31;cljs.core.pv_aset.call(null,ret,subidx,level===5?tail_node:function(){var child=cljs.core.pv_aget.call(null,ret,subidx);if(!(child==null))return tv_push_tail.call(null,tv,level-5,child,tail_node);else return cljs.core.new_path.call(null,tv.root.edit,level-5,tail_node)}());return ret};
cljs.core.tv_pop_tail=function tv_pop_tail(tv,level,node){var node__$1=cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);var subidx=tv.cnt-2>>>level&31;if(level>5){var new_child=tv_pop_tail.call(null,tv,level-5,cljs.core.pv_aget.call(null,node__$1,subidx));if(new_child==null&&subidx===0)return null;else{cljs.core.pv_aset.call(null,node__$1,subidx,new_child);return node__$1}}else if(subidx===0)return null;else if(new cljs.core.Keyword(null,"else","else",1017020587)){cljs.core.pv_aset.call(null,
node__$1,subidx,null);return node__$1}else return null};
cljs.core.editable_array_for=function editable_array_for(tv,i){if(0<=i&&i<tv.cnt)if(i>=cljs.core.tail_off.call(null,tv))return tv.tail;else{var root=tv.root;var node=root;var level=tv.shift;while(true){if(level>0){var G__9844=cljs.core.tv_ensure_editable.call(null,root.edit,cljs.core.pv_aget.call(null,node,i>>>level&31));var G__9845=level-5;node=G__9844;level=G__9845;continue}else return node.arr;break}}else throw new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),
cljs.core.str(tv.cnt)].join(""));};cljs.core.TransientVector=function(cnt,shift,root,tail){this.cnt=cnt;this.shift=shift;this.root=root;this.tail=tail;this.cljs$lang$protocol_mask$partition0$=275;this.cljs$lang$protocol_mask$partition1$=88};cljs.core.TransientVector.cljs$lang$type=true;cljs.core.TransientVector.cljs$lang$ctorStr="cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/TransientVector")};
cljs.core.TransientVector.prototype.call=function(){var G__9847=null;var G__9847__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9847__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9847=function(self__,k,not_found){switch(arguments.length){case 2:return G__9847__2.call(this,self__,k);case 3:return G__9847__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9847}();cljs.core.TransientVector.prototype.apply=function(self__,args9846){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9846)))};cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,k,null)};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;return cljs.core._nth.call(null,coll__$1,k,not_found)};cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2=function(coll,n){var self__=this;var coll__$1=this;if(self__.root.edit)return cljs.core.array_for.call(null,coll__$1,n)[n&31];else throw new Error("nth after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3=function(coll,n,not_found){var self__=this;var coll__$1=this;if(0<=n&&n<self__.cnt)return cljs.core._nth.call(null,coll__$1,n);else return not_found};cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.root.edit)return self__.cnt;else throw new Error("count after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3=function(tcoll,n,val){var self__=this;var tcoll__$1=this;if(self__.root.edit)if(0<=n&&n<self__.cnt)if(cljs.core.tail_off.call(null,tcoll__$1)<=n){self__.tail[n&31]=val;return tcoll__$1}else{var new_root=function go(level,node){var node__$1=cljs.core.tv_ensure_editable.call(null,self__.root.edit,node);if(level===0){cljs.core.pv_aset.call(null,node__$1,n&31,val);return node__$1}else{var subidx=n>>>level&31;cljs.core.pv_aset.call(null,
node__$1,subidx,go.call(null,level-5,cljs.core.pv_aget.call(null,node__$1,subidx)));return node__$1}}.call(null,self__.shift,self__.root);self__.root=new_root;return tcoll__$1}else if(n===self__.cnt)return cljs.core._conj_BANG_.call(null,tcoll__$1,val);else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join(""));else return null;else throw new Error("assoc! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;if(self__.root.edit)if(self__.cnt===0)throw new Error("Can't pop empty vector");else if(1===self__.cnt){self__.cnt=0;return tcoll__$1}else if((self__.cnt-1&31)>0){self__.cnt=self__.cnt-1;return tcoll__$1}else if(new cljs.core.Keyword(null,"else","else",1017020587)){var new_tail=cljs.core.editable_array_for.call(null,tcoll__$1,self__.cnt-2);var new_root=function(){var nr=cljs.core.tv_pop_tail.call(null,
tcoll__$1,self__.shift,self__.root);if(!(nr==null))return nr;else return new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}();if(5<self__.shift&&cljs.core.pv_aget.call(null,new_root,1)==null){var new_root__$1=cljs.core.tv_ensure_editable.call(null,self__.root.edit,cljs.core.pv_aget.call(null,new_root,0));self__.root=new_root__$1;self__.shift=self__.shift-
5;self__.cnt=self__.cnt-1;self__.tail=new_tail;return tcoll__$1}else{self__.root=new_root;self__.cnt=self__.cnt-1;self__.tail=new_tail;return tcoll__$1}}else return null;else throw new Error("pop! after persistent!");};cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3=function(tcoll,key,val){var self__=this;var tcoll__$1=this;return cljs.core._assoc_n_BANG_.call(null,tcoll__$1,key,val)};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(tcoll,o){var self__=this;var tcoll__$1=this;if(self__.root.edit)if(self__.cnt-cljs.core.tail_off.call(null,tcoll__$1)<32){self__.tail[self__.cnt&31]=o;self__.cnt=self__.cnt+1;return tcoll__$1}else{var tail_node=new cljs.core.VectorNode(self__.root.edit,self__.tail);var new_tail=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,null];new_tail[0]=o;self__.tail=new_tail;if(self__.cnt>>>5>1<<self__.shift){var new_root_array=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift=self__.shift+5;new_root_array[0]=self__.root;new_root_array[1]=cljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node);self__.root=new cljs.core.VectorNode(self__.root.edit,new_root_array);
self__.shift=new_shift;self__.cnt=self__.cnt+1;return tcoll__$1}else{var new_root=cljs.core.tv_push_tail.call(null,tcoll__$1,self__.shift,self__.root,tail_node);self__.root=new_root;self__.cnt=self__.cnt+1;return tcoll__$1}}else throw new Error("conj! after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;if(self__.root.edit){self__.root.edit=null;var len=self__.cnt-cljs.core.tail_off.call(null,tcoll__$1);var trimmed_tail=new Array(len);cljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,len);return new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null)}else throw new Error("persistent! called twice");};
cljs.core.__GT_TransientVector=function __GT_TransientVector(cnt,shift,root,tail){return new cljs.core.TransientVector(cnt,shift,root,tail)};cljs.core.PersistentQueueSeq=function(meta,front,rear,__hash){this.meta=meta;this.front=front;this.rear=rear;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=31850572};cljs.core.PersistentQueueSeq.cljs$lang$type=true;cljs.core.PersistentQueueSeq.cljs$lang$ctorStr="cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentQueueSeq")};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};
cljs.core.PersistentQueueSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.first.call(null,self__.front)};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;var temp__4090__auto__=cljs.core.next.call(null,self__.front);if(temp__4090__auto__){var f1=temp__4090__auto__;return new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null)}else if(self__.rear==null)return cljs.core._empty.call(null,coll__$1);else return new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null)};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash)};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.__GT_PersistentQueueSeq=function __GT_PersistentQueueSeq(meta,front,rear,__hash){return new cljs.core.PersistentQueueSeq(meta,front,rear,__hash)};
cljs.core.PersistentQueue=function(meta,count,front,rear,__hash){this.meta=meta;this.count=count;this.front=front;this.rear=rear;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=31858766;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.PersistentQueue.cljs$lang$type=true;cljs.core.PersistentQueue.cljs$lang$ctorStr="cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentQueue")};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;if(cljs.core.truth_(self__.front))return new cljs.core.PersistentQueue(self__.meta,self__.count+1,self__.front,cljs.core.conj.call(null,function(){var or__6732__auto__=self__.rear;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.PersistentVector.EMPTY}(),o),null);else return new cljs.core.PersistentQueue(self__.meta,self__.count+1,cljs.core.conj.call(null,
self__.front,o),cljs.core.PersistentVector.EMPTY,null)};cljs.core.PersistentQueue.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;var rear__$1=cljs.core.seq.call(null,self__.rear);if(cljs.core.truth_(function(){var or__6732__auto__=self__.front;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return rear__$1}()))return new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq.call(null,rear__$1),null);else return null};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.count};cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.first.call(null,self__.front)};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1=function(coll){var self__=this;var coll__$1=this;if(cljs.core.truth_(self__.front)){var temp__4090__auto__=cljs.core.next.call(null,self__.front);if(temp__4090__auto__){var f1=temp__4090__auto__;return new cljs.core.PersistentQueue(self__.meta,self__.count-1,f1,self__.rear,null)}else return new cljs.core.PersistentQueue(self__.meta,self__.count-1,cljs.core.seq.call(null,self__.rear),cljs.core.PersistentVector.EMPTY,null)}else return coll__$1};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.first.call(null,self__.front)};cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.rest.call(null,cljs.core.seq.call(null,coll__$1))};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash)};
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1=function(coll){var self__=this;var coll__$1=this;return new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash)};cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.PersistentQueue.EMPTY};
cljs.core.__GT_PersistentQueue=function __GT_PersistentQueue(meta,count,front,rear,__hash){return new cljs.core.PersistentQueue(meta,count,front,rear,__hash)};cljs.core.PersistentQueue.EMPTY=new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0);cljs.core.NeverEquiv=function(){this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2097152};cljs.core.NeverEquiv.cljs$lang$type=true;cljs.core.NeverEquiv.cljs$lang$ctorStr="cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/NeverEquiv")};cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2=function(o,other){var self__=this;var o__$1=this;return false};cljs.core.__GT_NeverEquiv=function __GT_NeverEquiv(){return new cljs.core.NeverEquiv};cljs.core.never_equiv=new cljs.core.NeverEquiv;
cljs.core.equiv_map=function equiv_map(x,y){return cljs.core.boolean$.call(null,cljs.core.map_QMARK_.call(null,y)?cljs.core.count.call(null,x)===cljs.core.count.call(null,y)?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,function(xkv){return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv))},x)):null:null)};
cljs.core.scan_array=function scan_array(incr,k,array){var len=array.length;var i=0;while(true){if(i<len)if(k===array[i])return i;else{var G__9848=i+incr;i=G__9848;continue}else return null;break}};cljs.core.obj_map_compare_keys=function obj_map_compare_keys(a,b){var a__$1=cljs.core.hash.call(null,a);var b__$1=cljs.core.hash.call(null,b);if(a__$1<b__$1)return-1;else if(a__$1>b__$1)return 1;else if(new cljs.core.Keyword(null,"else","else",1017020587))return 0;else return null};
cljs.core.obj_map__GT_hash_map=function obj_map__GT_hash_map(m,k,v){var ks=m.keys;var len=ks.length;var so=m.strobj;var mm=cljs.core.meta.call(null,m);var i=0;var out=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){if(i<len){var k__$1=ks[i];var G__9849=i+1;var G__9850=cljs.core.assoc_BANG_.call(null,out,k__$1,so[k__$1]);i=G__9849;out=G__9850;continue}else return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out,k,v)),
mm);break}};cljs.core.obj_clone=function obj_clone(obj,ks){var new_obj=function(){var obj9854={};return obj9854}();var l=ks.length;var i_9855=0;while(true){if(i_9855<l){var k_9856=ks[i_9855];new_obj[k_9856]=obj[k_9856];var G__9857=i_9855+1;i_9855=G__9857;continue}else;break}return new_obj};
cljs.core.ObjMap=function(meta,keys,strobj,update_count,__hash){this.meta=meta;this.keys=keys;this.strobj=strobj;this.update_count=update_count;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=4;this.cljs$lang$protocol_mask$partition0$=16123663};cljs.core.ObjMap.cljs$lang$type=true;cljs.core.ObjMap.cljs$lang$ctorStr="cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ObjMap")};cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1))};
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_imap.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._lookup.call(null,coll__$1,k,null)};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;if(goog.isString(k)&&!(cljs.core.scan_array.call(null,1,k,self__.keys)==null))return self__.strobj[k];else return not_found};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(coll,k,v){var self__=this;var coll__$1=this;if(goog.isString(k))if(self__.update_count>cljs.core.ObjMap.HASHMAP_THRESHOLD||self__.keys.length>=cljs.core.ObjMap.HASHMAP_THRESHOLD)return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);else if(!(cljs.core.scan_array.call(null,1,k,self__.keys)==null)){var new_strobj=cljs.core.obj_clone.call(null,self__.strobj,self__.keys);new_strobj[k]=v;return new cljs.core.ObjMap(self__.meta,
self__.keys,new_strobj,self__.update_count+1,null)}else{var new_strobj=cljs.core.obj_clone.call(null,self__.strobj,self__.keys);var new_keys=cljs.core.aclone.call(null,self__.keys);new_strobj[k]=v;new_keys.push(k);return new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,self__.update_count+1,null)}else return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v)};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(coll,k){var self__=this;var coll__$1=this;if(goog.isString(k)&&!(cljs.core.scan_array.call(null,1,k,self__.keys)==null))return true;else return false};
cljs.core.ObjMap.prototype.call=function(){var G__9860=null;var G__9860__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9860__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9860=function(self__,k,not_found){switch(arguments.length){case 2:return G__9860__2.call(this,self__,k);case 3:return G__9860__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9860}();cljs.core.ObjMap.prototype.apply=function(self__,args9859){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9859)))};cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(coll,f,init){var self__=this;var coll__$1=this;var len=self__.keys.length;var keys__$1=self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1=init;while(true){if(cljs.core.seq.call(null,keys__$1)){var k=cljs.core.first.call(null,keys__$1);var init__$2=f.call(null,init__$1,k,self__.strobj[k]);if(cljs.core.reduced_QMARK_.call(null,init__$2))return cljs.core.deref.call(null,init__$2);else{var G__9861=cljs.core.rest.call(null,
keys__$1);var G__9862=init__$2;keys__$1=G__9861;init__$1=G__9862;continue}}else return init__$1;break}};cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,entry){var self__=this;var coll__$1=this;if(cljs.core.vector_QMARK_.call(null,entry))return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));else return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry)};
cljs.core.ObjMap.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.keys.length>0)return cljs.core.map.call(null,function(p1__9858_SHARP_){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__9858_SHARP_,self__.strobj[p1__9858_SHARP_]],null)},self__.keys.sort(cljs.core.obj_map_compare_keys));else return null};
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.keys.length};cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_map.call(null,coll__$1,other)};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash)};cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,self__.meta)};
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(coll,k){var self__=this;var coll__$1=this;if(goog.isString(k)&&!(cljs.core.scan_array.call(null,1,k,self__.keys)==null)){var new_keys=cljs.core.aclone.call(null,self__.keys);var new_strobj=cljs.core.obj_clone.call(null,self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array.call(null,1,k,new_keys),1);delete new_strobj[k];return new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,self__.update_count+1,null)}else return coll__$1};
cljs.core.__GT_ObjMap=function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash)};cljs.core.ObjMap.EMPTY=new cljs.core.ObjMap(null,[],function(){var obj9864={};return obj9864}(),0,0);cljs.core.ObjMap.HASHMAP_THRESHOLD=8;cljs.core.ObjMap.fromObject=function(ks,obj){return new cljs.core.ObjMap(null,ks,obj,0,null)};
cljs.core.array_map_index_of_nil_QMARK_=function array_map_index_of_nil_QMARK_(arr,m,k){var len=arr.length;var i=0;while(true){if(len<=i)return-1;else if(arr[i]==null)return i;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var G__9865=i+2;i=G__9865;continue}else return null;break}};
cljs.core.array_map_index_of_keyword_QMARK_=function array_map_index_of_keyword_QMARK_(arr,m,k){var len=arr.length;var kstr=k.fqn;var i=0;while(true){if(len<=i)return-1;else if(function(){var k_SINGLEQUOTE_=arr[i];return k_SINGLEQUOTE_ instanceof cljs.core.Keyword&&kstr===k_SINGLEQUOTE_.fqn}())return i;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var G__9866=i+2;i=G__9866;continue}else return null;break}};
cljs.core.array_map_index_of_symbol_QMARK_=function array_map_index_of_symbol_QMARK_(arr,m,k){var len=arr.length;var kstr=k.str;var i=0;while(true){if(len<=i)return-1;else if(function(){var k_SINGLEQUOTE_=arr[i];return k_SINGLEQUOTE_ instanceof cljs.core.Symbol&&kstr===k_SINGLEQUOTE_.str}())return i;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var G__9867=i+2;i=G__9867;continue}else return null;break}};
cljs.core.array_map_index_of_identical_QMARK_=function array_map_index_of_identical_QMARK_(arr,m,k){var len=arr.length;var i=0;while(true){if(len<=i)return-1;else if(k===arr[i])return i;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var G__9868=i+2;i=G__9868;continue}else return null;break}};
cljs.core.array_map_index_of_equiv_QMARK_=function array_map_index_of_equiv_QMARK_(arr,m,k){var len=arr.length;var i=0;while(true){if(len<=i)return-1;else if(cljs.core._EQ_.call(null,k,arr[i]))return i;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var G__9869=i+2;i=G__9869;continue}else return null;break}};
cljs.core.array_map_index_of=function array_map_index_of(m,k){var arr=m.arr;if(k instanceof cljs.core.Keyword)return cljs.core.array_map_index_of_keyword_QMARK_.call(null,arr,m,k);else if(goog.isString(k)||typeof k==="number")return cljs.core.array_map_index_of_identical_QMARK_.call(null,arr,m,k);else if(k instanceof cljs.core.Symbol)return cljs.core.array_map_index_of_symbol_QMARK_.call(null,arr,m,k);else if(k==null)return cljs.core.array_map_index_of_nil_QMARK_.call(null,arr,m,k);else if(new cljs.core.Keyword(null,
"else","else",1017020587))return cljs.core.array_map_index_of_equiv_QMARK_.call(null,arr,m,k);else return null};cljs.core.array_map_extend_kv=function array_map_extend_kv(m,k,v){var arr=m.arr;var l=arr.length;var narr=new Array(l+2);var i_9870=0;while(true){if(i_9870<l){narr[i_9870]=arr[i_9870];var G__9871=i_9870+1;i_9870=G__9871;continue}else;break}narr[l]=k;narr[l+1]=v;return narr};
cljs.core.PersistentArrayMapSeq=function(arr,i,_meta){this.arr=arr;this.i=i;this._meta=_meta;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374990};cljs.core.PersistentArrayMapSeq.cljs$lang$type=true;cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr="cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentArrayMapSeq")};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.hash_coll.call(null,coll__$1)};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.i<self__.arr.length-2)return new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i+2,self__._meta);else return null};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};
cljs.core.PersistentArrayMapSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return(self__.arr.length-self__.i)/2};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.arr[self__.i],self__.arr[self__.i+1]],null)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.i<self__.arr.length-2)return new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i+2,self__._meta);else return cljs.core.List.EMPTY};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,new_meta){var self__=this;var coll__$1=this;return new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta)};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__._meta};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta)};cljs.core.__GT_PersistentArrayMapSeq=function __GT_PersistentArrayMapSeq(arr,i,_meta){return new cljs.core.PersistentArrayMapSeq(arr,i,_meta)};
cljs.core.persistent_array_map_seq=function persistent_array_map_seq(arr,i,_meta){if(i<=arr.length-2)return new cljs.core.PersistentArrayMapSeq(arr,i,_meta);else return null};cljs.core.PersistentArrayMap=function(meta,cnt,arr,__hash){this.meta=meta;this.cnt=cnt;this.arr=arr;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=16123663};cljs.core.PersistentArrayMap.cljs$lang$type=true;cljs.core.PersistentArrayMap.cljs$lang$ctorStr="cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentArrayMap")};cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(coll){var self__=this;var coll__$1=this;return new cljs.core.TransientArrayMap(function(){var obj9874={};return obj9874}(),self__.arr.length,cljs.core.aclone.call(null,self__.arr))};
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_imap.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._lookup.call(null,coll__$1,k,null)};cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;var idx=cljs.core.array_map_index_of.call(null,coll__$1,k);if(idx===-1)return not_found;else return self__.arr[idx+1]};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(coll,k,v){var self__=this;var coll__$1=this;var idx=cljs.core.array_map_index_of.call(null,coll__$1,k);if(idx===-1)if(self__.cnt<cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD){var arr__$1=cljs.core.array_map_extend_kv.call(null,coll__$1,k,v);return new cljs.core.PersistentArrayMap(self__.meta,self__.cnt+1,arr__$1,null)}else return cljs.core._with_meta.call(null,cljs.core._assoc.call(null,cljs.core.into.call(null,
cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);else if(v===self__.arr[idx+1])return coll__$1;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var arr__$1=function(){var G__9875=cljs.core.aclone.call(null,self__.arr);G__9875[idx+1]=v;return G__9875}();return new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null)}else return null};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(coll,k){var self__=this;var coll__$1=this;return!(cljs.core.array_map_index_of.call(null,coll__$1,k)===-1)};
cljs.core.PersistentArrayMap.prototype.call=function(){var G__9876=null;var G__9876__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9876__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9876=function(self__,k,not_found){switch(arguments.length){case 2:return G__9876__2.call(this,self__,k);case 3:return G__9876__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9876}();cljs.core.PersistentArrayMap.prototype.apply=function(self__,args9872){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9872)))};cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(coll,f,init){var self__=this;var coll__$1=this;var len=self__.arr.length;var i=0;var init__$1=init;while(true){if(i<len){var init__$2=f.call(null,init__$1,self__.arr[i],self__.arr[i+1]);if(cljs.core.reduced_QMARK_.call(null,init__$2))return cljs.core.deref.call(null,init__$2);else{var G__9877=i+2;var G__9878=init__$2;i=G__9877;init__$1=G__9878;continue}}else return init__$1;break}};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,entry){var self__=this;var coll__$1=this;if(cljs.core.vector_QMARK_.call(null,entry))return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));else return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry)};cljs.core.PersistentArrayMap.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.persistent_array_map_seq.call(null,self__.arr,0,null)};cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.cnt};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_map.call(null,coll__$1,other)};cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash)};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash)};cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.meta)};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(coll,k){var self__=this;var coll__$1=this;var idx=cljs.core.array_map_index_of.call(null,coll__$1,k);if(idx>=0){var len=self__.arr.length;var new_len=len-2;if(new_len===0)return cljs.core._empty.call(null,coll__$1);else{var new_arr=new Array(new_len);var s=0;var d=0;while(true){if(s>=len)return new cljs.core.PersistentArrayMap(self__.meta,self__.cnt-1,new_arr,null);else if(cljs.core._EQ_.call(null,k,self__.arr[s])){var G__9879=
s+2;var G__9880=d;s=G__9879;d=G__9880;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587)){new_arr[d]=self__.arr[s];new_arr[d+1]=self__.arr[s+1];var G__9881=s+2;var G__9882=d+2;s=G__9881;d=G__9882;continue}else return null;break}}}else return coll__$1};cljs.core.__GT_PersistentArrayMap=function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash)};cljs.core.PersistentArrayMap.EMPTY=new cljs.core.PersistentArrayMap(null,0,[],null);
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD=8;
cljs.core.PersistentArrayMap.fromArray=function(arr,no_clone,no_check){var arr__$1=no_clone?arr:cljs.core.aclone.call(null,arr);if(no_check){var cnt=arr__$1.length/2;return new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null)}else{var len=arr__$1.length;var i=0;var ret=cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){if(i<len){var G__9883=i+2;var G__9884=cljs.core._assoc_BANG_.call(null,ret,arr__$1[i],arr__$1[i+1]);i=G__9883;ret=G__9884;continue}else return cljs.core._persistent_BANG_.call(null,
ret);break}}};cljs.core.TransientArrayMap=function(editable_QMARK_,len,arr){this.editable_QMARK_=editable_QMARK_;this.len=len;this.arr=arr;this.cljs$lang$protocol_mask$partition1$=56;this.cljs$lang$protocol_mask$partition0$=258};cljs.core.TransientArrayMap.cljs$lang$type=true;cljs.core.TransientArrayMap.cljs$lang$ctorStr="cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/TransientArrayMap")};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2=function(tcoll,key){var self__=this;var tcoll__$1=this;if(cljs.core.truth_(self__.editable_QMARK_)){var idx=cljs.core.array_map_index_of.call(null,tcoll__$1,key);if(idx>=0){self__.arr[idx]=self__.arr[self__.len-2];self__.arr[idx+1]=self__.arr[self__.len-1];var G__9885_9887=self__.arr;G__9885_9887.pop();G__9885_9887.pop();self__.len=self__.len-2}else;return tcoll__$1}else throw new Error("dissoc! after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3=function(tcoll,key,val){var self__=this;var tcoll__$1=this;if(cljs.core.truth_(self__.editable_QMARK_)){var idx=cljs.core.array_map_index_of.call(null,tcoll__$1,key);if(idx===-1)if(self__.len+2<=2*cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD){self__.len=self__.len+2;self__.arr.push(key);self__.arr.push(val);return tcoll__$1}else return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,self__.len,
self__.arr),key,val);else if(val===self__.arr[idx+1])return tcoll__$1;else{self__.arr[idx+1]=val;return tcoll__$1}}else throw new Error("assoc! after persistent!");};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(tcoll,o){var self__=this;var tcoll__$1=this;if(cljs.core.truth_(self__.editable_QMARK_))if(function(){var G__9886=o;if(G__9886){var bit__7382__auto__=G__9886.cljs$lang$protocol_mask$partition0$&2048;if(bit__7382__auto__||G__9886.cljs$core$IMapEntry$)return true;else if(!G__9886.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__9886);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IMapEntry,G__9886)}())return cljs.core._assoc_BANG_.call(null,tcoll__$1,cljs.core.key.call(null,o),cljs.core.val.call(null,o));else{var es=cljs.core.seq.call(null,o);var tcoll__$2=tcoll__$1;while(true){var temp__4090__auto__=cljs.core.first.call(null,es);if(cljs.core.truth_(temp__4090__auto__)){var e=temp__4090__auto__;var G__9888=cljs.core.next.call(null,es);var G__9889=cljs.core._assoc_BANG_.call(null,tcoll__$2,cljs.core.key.call(null,e),cljs.core.val.call(null,e));es=G__9888;tcoll__$2=
G__9889;continue}else return tcoll__$2;break}}else throw new Error("conj! after persistent!");};cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;if(cljs.core.truth_(self__.editable_QMARK_)){self__.editable_QMARK_=false;return new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,self__.len,2),self__.arr,null)}else throw new Error("persistent! called twice");};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(tcoll,k){var self__=this;var tcoll__$1=this;return cljs.core._lookup.call(null,tcoll__$1,k,null)};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(tcoll,k,not_found){var self__=this;var tcoll__$1=this;if(cljs.core.truth_(self__.editable_QMARK_)){var idx=cljs.core.array_map_index_of.call(null,tcoll__$1,k);if(idx===-1)return not_found;else return self__.arr[idx+1]}else throw new Error("lookup after persistent!");};
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;if(cljs.core.truth_(self__.editable_QMARK_))return cljs.core.quot.call(null,self__.len,2);else throw new Error("count after persistent!");};cljs.core.__GT_TransientArrayMap=function __GT_TransientArrayMap(editable_QMARK_,len,arr){return new cljs.core.TransientArrayMap(editable_QMARK_,len,arr)};
cljs.core.array__GT_transient_hash_map=function array__GT_transient_hash_map(len,arr){var out=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);var i=0;while(true){if(i<len){var G__9890=cljs.core.assoc_BANG_.call(null,out,arr[i],arr[i+1]);var G__9891=i+2;out=G__9890;i=G__9891;continue}else return out;break}};cljs.core.Box=function(val){this.val=val};cljs.core.Box.cljs$lang$type=true;cljs.core.Box.cljs$lang$ctorStr="cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter=function(this__7302__auto__,writer__7303__auto__,opts__7304__auto__){return cljs.core._write.call(null,writer__7303__auto__,"cljs.core/Box")};cljs.core.__GT_Box=function __GT_Box(val){return new cljs.core.Box(val)};
cljs.core.key_test=function key_test(key,other){if(key===other)return true;else if(cljs.core.keyword_identical_QMARK_.call(null,key,other))return true;else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core._EQ_.call(null,key,other);else return null};cljs.core.mask=function mask(hash,shift){return hash>>>shift&31};
cljs.core.clone_and_set=function(){var clone_and_set=null;var clone_and_set__3=function(arr,i,a){var G__9894=cljs.core.aclone.call(null,arr);G__9894[i]=a;return G__9894};var clone_and_set__5=function(arr,i,a,j,b){var G__9895=cljs.core.aclone.call(null,arr);G__9895[i]=a;G__9895[j]=b;return G__9895};clone_and_set=function(arr,i,a,j,b){switch(arguments.length){case 3:return clone_and_set__3.call(this,arr,i,a);case 5:return clone_and_set__5.call(this,arr,i,a,j,b)}throw new Error("Invalid arity: "+arguments.length);
};clone_and_set.cljs$core$IFn$_invoke$arity$3=clone_and_set__3;clone_and_set.cljs$core$IFn$_invoke$arity$5=clone_and_set__5;return clone_and_set}();cljs.core.remove_pair=function remove_pair(arr,i){var new_arr=new Array(arr.length-2);cljs.core.array_copy.call(null,arr,0,new_arr,0,2*i);cljs.core.array_copy.call(null,arr,2*(i+1),new_arr,2*i,new_arr.length-2*i);return new_arr};
cljs.core.bitmap_indexed_node_index=function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count.call(null,bitmap&bit-1)};cljs.core.bitpos=function bitpos(hash,shift){return 1<<(hash>>>shift&31)};
cljs.core.edit_and_set=function(){var edit_and_set=null;var edit_and_set__4=function(inode,edit,i,a){var editable=inode.ensure_editable(edit);editable.arr[i]=a;return editable};var edit_and_set__6=function(inode,edit,i,a,j,b){var editable=inode.ensure_editable(edit);editable.arr[i]=a;editable.arr[j]=b;return editable};edit_and_set=function(inode,edit,i,a,j,b){switch(arguments.length){case 4:return edit_and_set__4.call(this,inode,edit,i,a);case 6:return edit_and_set__6.call(this,inode,edit,i,a,j,b)}throw new Error("Invalid arity: "+
arguments.length);};edit_and_set.cljs$core$IFn$_invoke$arity$4=edit_and_set__4;edit_and_set.cljs$core$IFn$_invoke$arity$6=edit_and_set__6;return edit_and_set}();
cljs.core.inode_kv_reduce=function inode_kv_reduce(arr,f,init){var len=arr.length;var i=0;var init__$1=init;while(true){if(i<len){var init__$2=function(){var k=arr[i];if(!(k==null))return f.call(null,init__$1,k,arr[i+1]);else{var node=arr[i+1];if(!(node==null))return node.kv_reduce(f,init__$1);else return init__$1}}();if(cljs.core.reduced_QMARK_.call(null,init__$2))return cljs.core.deref.call(null,init__$2);else{var G__9896=i+2;var G__9897=init__$2;i=G__9896;init__$1=G__9897;continue}}else return init__$1;
break}};cljs.core.BitmapIndexedNode=function(edit,bitmap,arr){this.edit=edit;this.bitmap=bitmap;this.arr=arr};cljs.core.BitmapIndexedNode.cljs$lang$type=true;cljs.core.BitmapIndexedNode.cljs$lang$ctorStr="cljs.core/BitmapIndexedNode";cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/BitmapIndexedNode")};
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair=function(e,bit,i){var self__=this;var inode=this;if(self__.bitmap===bit)return null;else{var editable=inode.ensure_editable(e);var earr=editable.arr;var len=earr.length;editable.bitmap=bit^editable.bitmap;cljs.core.array_copy.call(null,earr,2*(i+1),earr,2*i,len-2*(i+1));earr[len-2]=null;earr[len-1]=null;return editable}};
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_=function(edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__=this;var inode=this;var bit=1<<(hash>>>shift&31);var idx=cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);if((self__.bitmap&bit)===0){var n=cljs.core.bit_count.call(null,self__.bitmap);if(2*n<self__.arr.length){var editable=inode.ensure_editable(edit__$1);var earr=editable.arr;added_leaf_QMARK_.val=true;cljs.core.array_copy_downward.call(null,earr,2*idx,earr,2*
(idx+1),2*(n-idx));earr[2*idx]=key;earr[2*idx+1]=val;editable.bitmap=editable.bitmap|bit;return editable}else if(n>=16){var nodes=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx=hash>>>shift&31;nodes[jdx]=cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,shift+5,hash,key,val,added_leaf_QMARK_);var i_9898=0;var j_9899=0;while(true){if(i_9898<32)if((self__.bitmap>>>i_9898&
1)===0){var G__9900=i_9898+1;var G__9901=j_9899;i_9898=G__9900;j_9899=G__9901;continue}else{nodes[i_9898]=!(self__.arr[j_9899]==null)?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,shift+5,cljs.core.hash.call(null,self__.arr[j_9899]),self__.arr[j_9899],self__.arr[j_9899+1],added_leaf_QMARK_):self__.arr[j_9899+1];var G__9902=i_9898+1;var G__9903=j_9899+2;i_9898=G__9902;j_9899=G__9903;continue}else;break}return new cljs.core.ArrayNode(edit__$1,n+1,nodes)}else if(new cljs.core.Keyword(null,
"else","else",1017020587)){var new_arr=new Array(2*(n+4));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,2*idx);new_arr[2*idx]=key;new_arr[2*idx+1]=val;cljs.core.array_copy.call(null,self__.arr,2*idx,new_arr,2*(idx+1),2*(n-idx));added_leaf_QMARK_.val=true;var editable=inode.ensure_editable(edit__$1);editable.arr=new_arr;editable.bitmap=editable.bitmap|bit;return editable}else return null}else{var key_or_nil=self__.arr[2*idx];var val_or_node=self__.arr[2*idx+1];if(key_or_nil==null){var n=val_or_node.inode_assoc_BANG_(edit__$1,
shift+5,hash,key,val,added_leaf_QMARK_);if(n===val_or_node)return inode;else return cljs.core.edit_and_set.call(null,inode,edit__$1,2*idx+1,n)}else if(cljs.core.key_test.call(null,key,key_or_nil))if(val===val_or_node)return inode;else return cljs.core.edit_and_set.call(null,inode,edit__$1,2*idx+1,val);else if(new cljs.core.Keyword(null,"else","else",1017020587)){added_leaf_QMARK_.val=true;return cljs.core.edit_and_set.call(null,inode,edit__$1,2*idx,null,2*idx+1,cljs.core.create_node.call(null,edit__$1,
shift+5,key_or_nil,val_or_node,hash,key,val))}else return null}};cljs.core.BitmapIndexedNode.prototype.inode_seq=function(){var self__=this;var inode=this;return cljs.core.create_inode_seq.call(null,self__.arr)};
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_=function(edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__=this;var inode=this;var bit=1<<(hash>>>shift&31);if((self__.bitmap&bit)===0)return inode;else{var idx=cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil=self__.arr[2*idx];var val_or_node=self__.arr[2*idx+1];if(key_or_nil==null){var n=val_or_node.inode_without_BANG_(edit__$1,shift+5,hash,key,removed_leaf_QMARK_);if(n===val_or_node)return inode;else if(!(n==
null))return cljs.core.edit_and_set.call(null,inode,edit__$1,2*idx+1,n);else if(self__.bitmap===bit)return null;else if(new cljs.core.Keyword(null,"else","else",1017020587))return inode.edit_and_remove_pair(edit__$1,bit,idx);else return null}else if(cljs.core.key_test.call(null,key,key_or_nil)){removed_leaf_QMARK_[0]=true;return inode.edit_and_remove_pair(edit__$1,bit,idx)}else if(new cljs.core.Keyword(null,"else","else",1017020587))return inode;else return null}};
cljs.core.BitmapIndexedNode.prototype.ensure_editable=function(e){var self__=this;var inode=this;if(e===self__.edit)return inode;else{var n=cljs.core.bit_count.call(null,self__.bitmap);var new_arr=new Array(n<0?4:2*(n+1));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,2*n);return new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr)}};cljs.core.BitmapIndexedNode.prototype.kv_reduce=function(f,init){var self__=this;var inode=this;return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init)};
cljs.core.BitmapIndexedNode.prototype.inode_find=function(shift,hash,key,not_found){var self__=this;var inode=this;var bit=1<<(hash>>>shift&31);if((self__.bitmap&bit)===0)return not_found;else{var idx=cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil=self__.arr[2*idx];var val_or_node=self__.arr[2*idx+1];if(key_or_nil==null)return val_or_node.inode_find(shift+5,hash,key,not_found);else if(cljs.core.key_test.call(null,key,key_or_nil))return new cljs.core.PersistentVector(null,
2,5,cljs.core.PersistentVector.EMPTY_NODE,[key_or_nil,val_or_node],null);else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null}};
cljs.core.BitmapIndexedNode.prototype.inode_without=function(shift,hash,key){var self__=this;var inode=this;var bit=1<<(hash>>>shift&31);if((self__.bitmap&bit)===0)return inode;else{var idx=cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil=self__.arr[2*idx];var val_or_node=self__.arr[2*idx+1];if(key_or_nil==null){var n=val_or_node.inode_without(shift+5,hash,key);if(n===val_or_node)return inode;else if(!(n==null))return new cljs.core.BitmapIndexedNode(null,self__.bitmap,
cljs.core.clone_and_set.call(null,self__.arr,2*idx+1,n));else if(self__.bitmap===bit)return null;else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.BitmapIndexedNode(null,self__.bitmap^bit,cljs.core.remove_pair.call(null,self__.arr,idx));else return null}else if(cljs.core.key_test.call(null,key,key_or_nil))return new cljs.core.BitmapIndexedNode(null,self__.bitmap^bit,cljs.core.remove_pair.call(null,self__.arr,idx));else if(new cljs.core.Keyword(null,"else","else",1017020587))return inode;
else return null}};
cljs.core.BitmapIndexedNode.prototype.inode_assoc=function(shift,hash,key,val,added_leaf_QMARK_){var self__=this;var inode=this;var bit=1<<(hash>>>shift&31);var idx=cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);if((self__.bitmap&bit)===0){var n=cljs.core.bit_count.call(null,self__.bitmap);if(n>=16){var nodes=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx=hash>>>
shift&31;nodes[jdx]=cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift+5,hash,key,val,added_leaf_QMARK_);var i_9904=0;var j_9905=0;while(true){if(i_9904<32)if((self__.bitmap>>>i_9904&1)===0){var G__9906=i_9904+1;var G__9907=j_9905;i_9904=G__9906;j_9905=G__9907;continue}else{nodes[i_9904]=!(self__.arr[j_9905]==null)?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift+5,cljs.core.hash.call(null,self__.arr[j_9905]),self__.arr[j_9905],self__.arr[j_9905+1],added_leaf_QMARK_):self__.arr[j_9905+1];var G__9908=
i_9904+1;var G__9909=j_9905+2;i_9904=G__9908;j_9905=G__9909;continue}else;break}return new cljs.core.ArrayNode(null,n+1,nodes)}else{var new_arr=new Array(2*(n+1));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,2*idx);new_arr[2*idx]=key;new_arr[2*idx+1]=val;cljs.core.array_copy.call(null,self__.arr,2*idx,new_arr,2*(idx+1),2*(n-idx));added_leaf_QMARK_.val=true;return new cljs.core.BitmapIndexedNode(null,self__.bitmap|bit,new_arr)}}else{var key_or_nil=self__.arr[2*idx];var val_or_node=self__.arr[2*
idx+1];if(key_or_nil==null){var n=val_or_node.inode_assoc(shift+5,hash,key,val,added_leaf_QMARK_);if(n===val_or_node)return inode;else return new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,2*idx+1,n))}else if(cljs.core.key_test.call(null,key,key_or_nil))if(val===val_or_node)return inode;else return new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,2*idx+1,val));else if(new cljs.core.Keyword(null,"else",
"else",1017020587)){added_leaf_QMARK_.val=true;return new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,2*idx,null,2*idx+1,cljs.core.create_node.call(null,shift+5,key_or_nil,val_or_node,hash,key,val)))}else return null}};
cljs.core.BitmapIndexedNode.prototype.inode_lookup=function(shift,hash,key,not_found){var self__=this;var inode=this;var bit=1<<(hash>>>shift&31);if((self__.bitmap&bit)===0)return not_found;else{var idx=cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil=self__.arr[2*idx];var val_or_node=self__.arr[2*idx+1];if(key_or_nil==null)return val_or_node.inode_lookup(shift+5,hash,key,not_found);else if(cljs.core.key_test.call(null,key,key_or_nil))return val_or_node;else if(new cljs.core.Keyword(null,
"else","else",1017020587))return not_found;else return null}};cljs.core.__GT_BitmapIndexedNode=function __GT_BitmapIndexedNode(edit,bitmap,arr){return new cljs.core.BitmapIndexedNode(edit,bitmap,arr)};cljs.core.BitmapIndexedNode.EMPTY=new cljs.core.BitmapIndexedNode(null,0,[]);
cljs.core.pack_array_node=function pack_array_node(array_node,edit,idx){var arr=array_node.arr;var len=2*(array_node.cnt-1);var new_arr=new Array(len);var i=0;var j=1;var bitmap=0;while(true){if(i<len)if(!(i===idx)&&!(arr[i]==null)){new_arr[j]=arr[i];var G__9910=i+1;var G__9911=j+2;var G__9912=bitmap|1<<i;i=G__9910;j=G__9911;bitmap=G__9912;continue}else{var G__9913=i+1;var G__9914=j;var G__9915=bitmap;i=G__9913;j=G__9914;bitmap=G__9915;continue}else return new cljs.core.BitmapIndexedNode(edit,bitmap,
new_arr);break}};cljs.core.ArrayNode=function(edit,cnt,arr){this.edit=edit;this.cnt=cnt;this.arr=arr};cljs.core.ArrayNode.cljs$lang$type=true;cljs.core.ArrayNode.cljs$lang$ctorStr="cljs.core/ArrayNode";cljs.core.ArrayNode.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ArrayNode")};
cljs.core.ArrayNode.prototype.inode_assoc_BANG_=function(edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__=this;var inode=this;var idx=hash>>>shift&31;var node=self__.arr[idx];if(node==null){var editable=cljs.core.edit_and_set.call(null,inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,shift+5,hash,key,val,added_leaf_QMARK_));editable.cnt=editable.cnt+1;return editable}else{var n=node.inode_assoc_BANG_(edit__$1,shift+5,hash,key,val,added_leaf_QMARK_);if(n===node)return inode;
else return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n)}};cljs.core.ArrayNode.prototype.inode_seq=function(){var self__=this;var inode=this;return cljs.core.create_array_node_seq.call(null,self__.arr)};
cljs.core.ArrayNode.prototype.inode_without_BANG_=function(edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__=this;var inode=this;var idx=hash>>>shift&31;var node=self__.arr[idx];if(node==null)return inode;else{var n=node.inode_without_BANG_(edit__$1,shift+5,hash,key,removed_leaf_QMARK_);if(n===node)return inode;else if(n==null)if(self__.cnt<=8)return cljs.core.pack_array_node.call(null,inode,edit__$1,idx);else{var editable=cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);editable.cnt=
editable.cnt-1;return editable}else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);else return null}};cljs.core.ArrayNode.prototype.ensure_editable=function(e){var self__=this;var inode=this;if(e===self__.edit)return inode;else return new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone.call(null,self__.arr))};
cljs.core.ArrayNode.prototype.kv_reduce=function(f,init){var self__=this;var inode=this;var len=self__.arr.length;var i=0;var init__$1=init;while(true){if(i<len){var node=self__.arr[i];if(!(node==null)){var init__$2=node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_.call(null,init__$2))return cljs.core.deref.call(null,init__$2);else{var G__9916=i+1;var G__9917=init__$2;i=G__9916;init__$1=G__9917;continue}}else{var G__9918=i+1;var G__9919=init__$1;i=G__9918;init__$1=G__9919;continue}}else return init__$1;
break}};cljs.core.ArrayNode.prototype.inode_find=function(shift,hash,key,not_found){var self__=this;var inode=this;var idx=hash>>>shift&31;var node=self__.arr[idx];if(!(node==null))return node.inode_find(shift+5,hash,key,not_found);else return not_found};
cljs.core.ArrayNode.prototype.inode_without=function(shift,hash,key){var self__=this;var inode=this;var idx=hash>>>shift&31;var node=self__.arr[idx];if(!(node==null)){var n=node.inode_without(shift+5,hash,key);if(n===node)return inode;else if(n==null)if(self__.cnt<=8)return cljs.core.pack_array_node.call(null,inode,null,idx);else return new cljs.core.ArrayNode(null,self__.cnt-1,cljs.core.clone_and_set.call(null,self__.arr,idx,n));else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.ArrayNode(null,
self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n));else return null}else return inode};
cljs.core.ArrayNode.prototype.inode_assoc=function(shift,hash,key,val,added_leaf_QMARK_){var self__=this;var inode=this;var idx=hash>>>shift&31;var node=self__.arr[idx];if(node==null)return new cljs.core.ArrayNode(null,self__.cnt+1,cljs.core.clone_and_set.call(null,self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift+5,hash,key,val,added_leaf_QMARK_)));else{var n=node.inode_assoc(shift+5,hash,key,val,added_leaf_QMARK_);if(n===node)return inode;else return new cljs.core.ArrayNode(null,
self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n))}};cljs.core.ArrayNode.prototype.inode_lookup=function(shift,hash,key,not_found){var self__=this;var inode=this;var idx=hash>>>shift&31;var node=self__.arr[idx];if(!(node==null))return node.inode_lookup(shift+5,hash,key,not_found);else return not_found};cljs.core.__GT_ArrayNode=function __GT_ArrayNode(edit,cnt,arr){return new cljs.core.ArrayNode(edit,cnt,arr)};
cljs.core.hash_collision_node_find_index=function hash_collision_node_find_index(arr,cnt,key){var lim=2*cnt;var i=0;while(true){if(i<lim)if(cljs.core.key_test.call(null,key,arr[i]))return i;else{var G__9920=i+2;i=G__9920;continue}else return-1;break}};cljs.core.HashCollisionNode=function(edit,collision_hash,cnt,arr){this.edit=edit;this.collision_hash=collision_hash;this.cnt=cnt;this.arr=arr};cljs.core.HashCollisionNode.cljs$lang$type=true;cljs.core.HashCollisionNode.cljs$lang$ctorStr="cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/HashCollisionNode")};
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_=function(edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__=this;var inode=this;if(hash===self__.collision_hash){var idx=cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if(idx===-1)if(self__.arr.length>2*self__.cnt){var editable=cljs.core.edit_and_set.call(null,inode,edit__$1,2*self__.cnt,key,2*self__.cnt+1,val);added_leaf_QMARK_.val=true;editable.cnt=editable.cnt+1;return editable}else{var len=self__.arr.length;
var new_arr=new Array(len+2);cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);new_arr[len]=key;new_arr[len+1]=val;added_leaf_QMARK_.val=true;return inode.ensure_editable_array(edit__$1,self__.cnt+1,new_arr)}else if(self__.arr[idx+1]===val)return inode;else return cljs.core.edit_and_set.call(null,inode,edit__$1,idx+1,val)}else return(new cljs.core.BitmapIndexedNode(edit__$1,1<<(self__.collision_hash>>>shift&31),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_)};
cljs.core.HashCollisionNode.prototype.inode_seq=function(){var self__=this;var inode=this;return cljs.core.create_inode_seq.call(null,self__.arr)};
cljs.core.HashCollisionNode.prototype.inode_without_BANG_=function(edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__=this;var inode=this;var idx=cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if(idx===-1)return inode;else{removed_leaf_QMARK_[0]=true;if(self__.cnt===1)return null;else{var editable=inode.ensure_editable(edit__$1);var earr=editable.arr;earr[idx]=earr[2*self__.cnt-2];earr[idx+1]=earr[2*self__.cnt-1];earr[2*self__.cnt-1]=null;earr[2*self__.cnt-2]=null;
editable.cnt=editable.cnt-1;return editable}}};cljs.core.HashCollisionNode.prototype.ensure_editable=function(e){var self__=this;var inode=this;if(e===self__.edit)return inode;else{var new_arr=new Array(2*(self__.cnt+1));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,2*self__.cnt);return new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr)}};
cljs.core.HashCollisionNode.prototype.kv_reduce=function(f,init){var self__=this;var inode=this;return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init)};
cljs.core.HashCollisionNode.prototype.inode_find=function(shift,hash,key,not_found){var self__=this;var inode=this;var idx=cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if(idx<0)return not_found;else if(cljs.core.key_test.call(null,key,self__.arr[idx]))return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.arr[idx],self__.arr[idx+1]],null);else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null};
cljs.core.HashCollisionNode.prototype.inode_without=function(shift,hash,key){var self__=this;var inode=this;var idx=cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if(idx===-1)return inode;else if(self__.cnt===1)return null;else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt-1,cljs.core.remove_pair.call(null,self__.arr,cljs.core.quot.call(null,idx,2)));else return null};
cljs.core.HashCollisionNode.prototype.inode_assoc=function(shift,hash,key,val,added_leaf_QMARK_){var self__=this;var inode=this;if(hash===self__.collision_hash){var idx=cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if(idx===-1){var len=2*self__.cnt;var new_arr=new Array(len+2);cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);new_arr[len]=key;new_arr[len+1]=val;added_leaf_QMARK_.val=true;return new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt+
1,new_arr)}else if(cljs.core._EQ_.call(null,self__.arr[idx],val))return inode;else return new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx+1,val))}else return(new cljs.core.BitmapIndexedNode(null,1<<(self__.collision_hash>>>shift&31),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_)};
cljs.core.HashCollisionNode.prototype.inode_lookup=function(shift,hash,key,not_found){var self__=this;var inode=this;var idx=cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if(idx<0)return not_found;else if(cljs.core.key_test.call(null,key,self__.arr[idx]))return self__.arr[idx+1];else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null};
cljs.core.HashCollisionNode.prototype.ensure_editable_array=function(e,count,array){var self__=this;var inode=this;if(e===self__.edit){self__.arr=array;self__.cnt=count;return inode}else return new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array)};cljs.core.__GT_HashCollisionNode=function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr)};
cljs.core.create_node=function(){var create_node=null;var create_node__6=function(shift,key1,val1,key2hash,key2,val2){var key1hash=cljs.core.hash.call(null,key1);if(key1hash===key2hash)return new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]);else{var added_leaf_QMARK_=new cljs.core.Box(false);return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_)}};var create_node__7=function(edit,
shift,key1,val1,key2hash,key2,val2){var key1hash=cljs.core.hash.call(null,key1);if(key1hash===key2hash)return new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]);else{var added_leaf_QMARK_=new cljs.core.Box(false);return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_)}};create_node=function(edit,shift,key1,val1,key2hash,key2,val2){switch(arguments.length){case 6:return create_node__6.call(this,
edit,shift,key1,val1,key2hash,key2);case 7:return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2)}throw new Error("Invalid arity: "+arguments.length);};create_node.cljs$core$IFn$_invoke$arity$6=create_node__6;create_node.cljs$core$IFn$_invoke$arity$7=create_node__7;return create_node}();
cljs.core.NodeSeq=function(meta,nodes,i,s,__hash){this.meta=meta;this.nodes=nodes;this.i=i;this.s=s;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374860};cljs.core.NodeSeq.cljs$lang$type=true;cljs.core.NodeSeq.cljs$lang$ctorStr="cljs.core/NodeSeq";cljs.core.NodeSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/NodeSeq")};
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};
cljs.core.NodeSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(this$){var self__=this;var this$__$1=this;return this$__$1};cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.s==null)return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.nodes[self__.i],self__.nodes[self__.i+1]],null);else return cljs.core.first.call(null,self__.s)};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.s==null)return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i+2,null);else return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s))};cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash)};cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.__GT_NodeSeq=function __GT_NodeSeq(meta,nodes,i,s,__hash){return new cljs.core.NodeSeq(meta,nodes,i,s,__hash)};
cljs.core.create_inode_seq=function(){var create_inode_seq=null;var create_inode_seq__1=function(nodes){return create_inode_seq.call(null,nodes,0,null)};var create_inode_seq__3=function(nodes,i,s){if(s==null){var len=nodes.length;var j=i;while(true){if(j<len)if(!(nodes[j]==null))return new cljs.core.NodeSeq(null,nodes,j,null,null);else{var temp__4090__auto__=nodes[j+1];if(cljs.core.truth_(temp__4090__auto__)){var node=temp__4090__auto__;var temp__4090__auto____$1=node.inode_seq();if(cljs.core.truth_(temp__4090__auto____$1)){var node_seq=
temp__4090__auto____$1;return new cljs.core.NodeSeq(null,nodes,j+2,node_seq,null)}else{var G__9921=j+2;j=G__9921;continue}}else{var G__9922=j+2;j=G__9922;continue}}else return null;break}}else return new cljs.core.NodeSeq(null,nodes,i,s,null)};create_inode_seq=function(nodes,i,s){switch(arguments.length){case 1:return create_inode_seq__1.call(this,nodes);case 3:return create_inode_seq__3.call(this,nodes,i,s)}throw new Error("Invalid arity: "+arguments.length);};create_inode_seq.cljs$core$IFn$_invoke$arity$1=
create_inode_seq__1;create_inode_seq.cljs$core$IFn$_invoke$arity$3=create_inode_seq__3;return create_inode_seq}();cljs.core.ArrayNodeSeq=function(meta,nodes,i,s,__hash){this.meta=meta;this.nodes=nodes;this.i=i;this.s=s;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374860};cljs.core.ArrayNodeSeq.cljs$lang$type=true;cljs.core.ArrayNodeSeq.cljs$lang$ctorStr="cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ArrayNodeSeq")};cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};cljs.core.ArrayNodeSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(this$){var self__=this;var this$__$1=this;return this$__$1};cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.first.call(null,self__.s)};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s))};cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash)};cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};cljs.core.__GT_ArrayNodeSeq=function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash)};
cljs.core.create_array_node_seq=function(){var create_array_node_seq=null;var create_array_node_seq__1=function(nodes){return create_array_node_seq.call(null,null,nodes,0,null)};var create_array_node_seq__4=function(meta,nodes,i,s){if(s==null){var len=nodes.length;var j=i;while(true){if(j<len){var temp__4090__auto__=nodes[j];if(cljs.core.truth_(temp__4090__auto__)){var nj=temp__4090__auto__;var temp__4090__auto____$1=nj.inode_seq();if(cljs.core.truth_(temp__4090__auto____$1)){var ns=temp__4090__auto____$1;
return new cljs.core.ArrayNodeSeq(meta,nodes,j+1,ns,null)}else{var G__9923=j+1;j=G__9923;continue}}else{var G__9924=j+1;j=G__9924;continue}}else return null;break}}else return new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null)};create_array_node_seq=function(meta,nodes,i,s){switch(arguments.length){case 1:return create_array_node_seq__1.call(this,meta);case 4:return create_array_node_seq__4.call(this,meta,nodes,i,s)}throw new Error("Invalid arity: "+arguments.length);};create_array_node_seq.cljs$core$IFn$_invoke$arity$1=
create_array_node_seq__1;create_array_node_seq.cljs$core$IFn$_invoke$arity$4=create_array_node_seq__4;return create_array_node_seq}();cljs.core.PersistentHashMap=function(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){this.meta=meta;this.cnt=cnt;this.root=root;this.has_nil_QMARK_=has_nil_QMARK_;this.nil_val=nil_val;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=16123663};cljs.core.PersistentHashMap.cljs$lang$type=true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr="cljs.core/PersistentHashMap";cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentHashMap")};
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(coll){var self__=this;var coll__$1=this;return new cljs.core.TransientHashMap(function(){var obj9927={};return obj9927}(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val)};
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_imap.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._lookup.call(null,coll__$1,k,null)};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;if(k==null)if(self__.has_nil_QMARK_)return self__.nil_val;else return not_found;else if(self__.root==null)return not_found;else if(new cljs.core.Keyword(null,"else","else",1017020587))return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);else return null};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(coll,k,v){var self__=this;var coll__$1=this;if(k==null)if(self__.has_nil_QMARK_&&v===self__.nil_val)return coll__$1;else return new cljs.core.PersistentHashMap(self__.meta,self__.has_nil_QMARK_?self__.cnt:self__.cnt+1,self__.root,true,v,null);else{var added_leaf_QMARK_=new cljs.core.Box(false);var new_root=(self__.root==null?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljs.core.hash.call(null,k),
k,v,added_leaf_QMARK_);if(new_root===self__.root)return coll__$1;else return new cljs.core.PersistentHashMap(self__.meta,added_leaf_QMARK_.val?self__.cnt+1:self__.cnt,new_root,self__.has_nil_QMARK_,self__.nil_val,null)}};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(coll,k){var self__=this;var coll__$1=this;if(k==null)return self__.has_nil_QMARK_;else if(self__.root==null)return false;else if(new cljs.core.Keyword(null,"else","else",1017020587))return!(self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel);else return null};
cljs.core.PersistentHashMap.prototype.call=function(){var G__9928=null;var G__9928__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9928__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9928=function(self__,k,not_found){switch(arguments.length){case 2:return G__9928__2.call(this,self__,k);case 3:return G__9928__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9928}();cljs.core.PersistentHashMap.prototype.apply=function(self__,args9925){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9925)))};cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(coll,f,init){var self__=this;var coll__$1=this;var init__$1=self__.has_nil_QMARK_?f.call(null,init,null,self__.nil_val):init;if(cljs.core.reduced_QMARK_.call(null,init__$1))return cljs.core.deref.call(null,init__$1);else if(!(self__.root==null))return self__.root.kv_reduce(f,init__$1);else if(new cljs.core.Keyword(null,"else","else",1017020587))return init__$1;else return null};
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,entry){var self__=this;var coll__$1=this;if(cljs.core.vector_QMARK_.call(null,entry))return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));else return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry)};cljs.core.PersistentHashMap.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt>0){var s=!(self__.root==null)?self__.root.inode_seq():null;if(self__.has_nil_QMARK_)return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[null,self__.nil_val],null),s);else return s}else return null};
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.cnt};cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_map.call(null,coll__$1,other)};
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash)};cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash)};
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,self__.meta)};
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(coll,k){var self__=this;var coll__$1=this;if(k==null)if(self__.has_nil_QMARK_)return new cljs.core.PersistentHashMap(self__.meta,self__.cnt-1,self__.root,false,null,null);else return coll__$1;else if(self__.root==null)return coll__$1;else if(new cljs.core.Keyword(null,"else","else",1017020587)){var new_root=self__.root.inode_without(0,cljs.core.hash.call(null,k),k);if(new_root===self__.root)return coll__$1;else return new cljs.core.PersistentHashMap(self__.meta,
self__.cnt-1,new_root,self__.has_nil_QMARK_,self__.nil_val,null)}else return null};cljs.core.__GT_PersistentHashMap=function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash)};cljs.core.PersistentHashMap.EMPTY=new cljs.core.PersistentHashMap(null,0,null,false,null,0);
cljs.core.PersistentHashMap.fromArrays=function(ks,vs){var len=ks.length;var i=0;var out=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){if(i<len){var G__9929=i+1;var G__9930=cljs.core._assoc_BANG_.call(null,out,ks[i],vs[i]);i=G__9929;out=G__9930;continue}else return cljs.core.persistent_BANG_.call(null,out);break}};
cljs.core.TransientHashMap=function(edit,root,count,has_nil_QMARK_,nil_val){this.edit=edit;this.root=root;this.count=count;this.has_nil_QMARK_=has_nil_QMARK_;this.nil_val=nil_val;this.cljs$lang$protocol_mask$partition1$=56;this.cljs$lang$protocol_mask$partition0$=258};cljs.core.TransientHashMap.cljs$lang$type=true;cljs.core.TransientHashMap.cljs$lang$ctorStr="cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/TransientHashMap")};cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2=function(tcoll,key){var self__=this;var tcoll__$1=this;return tcoll__$1.without_BANG_(key)};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3=function(tcoll,key,val){var self__=this;var tcoll__$1=this;return tcoll__$1.assoc_BANG_(key,val)};cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(tcoll,val){var self__=this;var tcoll__$1=this;return tcoll__$1.conj_BANG_(val)};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;return tcoll__$1.persistent_BANG_()};cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(tcoll,k){var self__=this;var tcoll__$1=this;if(k==null)if(self__.has_nil_QMARK_)return self__.nil_val;else return null;else if(self__.root==null)return null;else return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k)};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(tcoll,k,not_found){var self__=this;var tcoll__$1=this;if(k==null)if(self__.has_nil_QMARK_)return self__.nil_val;else return not_found;else if(self__.root==null)return not_found;else return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found)};
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.edit)return self__.count;else throw new Error("count after persistent!");};
cljs.core.TransientHashMap.prototype.conj_BANG_=function(o){var self__=this;var tcoll=this;if(self__.edit)if(function(){var G__9931=o;if(G__9931){var bit__7382__auto__=G__9931.cljs$lang$protocol_mask$partition0$&2048;if(bit__7382__auto__||G__9931.cljs$core$IMapEntry$)return true;else if(!G__9931.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__9931);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,
G__9931)}())return tcoll.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));else{var es=cljs.core.seq.call(null,o);var tcoll__$1=tcoll;while(true){var temp__4090__auto__=cljs.core.first.call(null,es);if(cljs.core.truth_(temp__4090__auto__)){var e=temp__4090__auto__;var G__9932=cljs.core.next.call(null,es);var G__9933=tcoll__$1.assoc_BANG_(cljs.core.key.call(null,e),cljs.core.val.call(null,e));es=G__9932;tcoll__$1=G__9933;continue}else return tcoll__$1;break}}else throw new Error("conj! after persistent");
};
cljs.core.TransientHashMap.prototype.assoc_BANG_=function(k,v){var self__=this;var tcoll=this;if(self__.edit)if(k==null){if(self__.nil_val===v);else self__.nil_val=v;if(self__.has_nil_QMARK_);else{self__.count=self__.count+1;self__.has_nil_QMARK_=true}return tcoll}else{var added_leaf_QMARK_=new cljs.core.Box(false);var node=(self__.root==null?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);if(node===self__.root);else self__.root=node;
if(added_leaf_QMARK_.val)self__.count=self__.count+1;else;return tcoll}else throw new Error("assoc! after persistent!");};
cljs.core.TransientHashMap.prototype.without_BANG_=function(k){var self__=this;var tcoll=this;if(self__.edit)if(k==null)if(self__.has_nil_QMARK_){self__.has_nil_QMARK_=false;self__.nil_val=null;self__.count=self__.count-1;return tcoll}else return tcoll;else if(self__.root==null)return tcoll;else{var removed_leaf_QMARK_=new cljs.core.Box(false);var node=self__.root.inode_without_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK_);if(node===self__.root);else self__.root=node;if(cljs.core.truth_(removed_leaf_QMARK_[0]))self__.count=
self__.count-1;else;return tcoll}else throw new Error("dissoc! after persistent!");};cljs.core.TransientHashMap.prototype.persistent_BANG_=function(){var self__=this;var tcoll=this;if(self__.edit){self__.edit=null;return new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null)}else throw new Error("persistent! called twice");};
cljs.core.__GT_TransientHashMap=function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val)};cljs.core.tree_map_seq_push=function tree_map_seq_push(node,stack,ascending_QMARK_){var t=node;var stack__$1=stack;while(true){if(!(t==null)){var G__9934=ascending_QMARK_?t.left:t.right;var G__9935=cljs.core.conj.call(null,stack__$1,t);t=G__9934;stack__$1=G__9935;continue}else return stack__$1;break}};
cljs.core.PersistentTreeMapSeq=function(meta,stack,ascending_QMARK_,cnt,__hash){this.meta=meta;this.stack=stack;this.ascending_QMARK_=ascending_QMARK_;this.cnt=cnt;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374862};cljs.core.PersistentTreeMapSeq.cljs$lang$type=true;cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr="cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentTreeMapSeq")};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};
cljs.core.PersistentTreeMapSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(this$){var self__=this;var this$__$1=this;return this$__$1};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt<0)return cljs.core.count.call(null,cljs.core.next.call(null,coll__$1))+1;else return self__.cnt};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1=function(this$){var self__=this;var this$__$1=this;return cljs.core.peek.call(null,self__.stack)};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(this$){var self__=this;var this$__$1=this;var t=cljs.core.first.call(null,self__.stack);var next_stack=cljs.core.tree_map_seq_push.call(null,self__.ascending_QMARK_?t.right:t.left,cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);if(!(next_stack==null))return new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,self__.cnt-1,null);else return cljs.core.List.EMPTY};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash)};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};
cljs.core.__GT_PersistentTreeMapSeq=function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash)};cljs.core.create_tree_map_seq=function create_tree_map_seq(tree,ascending_QMARK_,cnt){return new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null)};
cljs.core.balance_left=function balance_left(key,val,ins,right){if(ins instanceof cljs.core.RedNode)if(ins.left instanceof cljs.core.RedNode)return new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),new cljs.core.BlackNode(key,val,ins.right,right,null),null);else if(ins.right instanceof cljs.core.RedNode)return new cljs.core.RedNode(ins.right.key,ins.right.val,new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null),new cljs.core.BlackNode(key,val,ins.right.right,right,null),null);
else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.BlackNode(key,val,ins,right,null);else return null;else return new cljs.core.BlackNode(key,val,ins,right,null)};
cljs.core.balance_right=function balance_right(key,val,left,ins){if(ins instanceof cljs.core.RedNode)if(ins.right instanceof cljs.core.RedNode)return new cljs.core.RedNode(ins.key,ins.val,new cljs.core.BlackNode(key,val,left,ins.left,null),ins.right.blacken(),null);else if(ins.left instanceof cljs.core.RedNode)return new cljs.core.RedNode(ins.left.key,ins.left.val,new cljs.core.BlackNode(key,val,left,ins.left.left,null),new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null),null);
else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.BlackNode(key,val,left,ins,null);else return null;else return new cljs.core.BlackNode(key,val,left,ins,null)};
cljs.core.balance_left_del=function balance_left_del(key,val,del,right){if(del instanceof cljs.core.RedNode)return new cljs.core.RedNode(key,val,del.blacken(),right,null);else if(right instanceof cljs.core.BlackNode)return cljs.core.balance_right.call(null,key,val,del,right.redden());else if(right instanceof cljs.core.RedNode&&right.left instanceof cljs.core.BlackNode)return new cljs.core.RedNode(right.left.key,right.left.val,new cljs.core.BlackNode(key,val,del,right.left.left,null),cljs.core.balance_right.call(null,
right.key,right.val,right.left.right,right.right.redden()),null);else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error("red-black tree invariant violation");else return null};
cljs.core.balance_right_del=function balance_right_del(key,val,left,del){if(del instanceof cljs.core.RedNode)return new cljs.core.RedNode(key,val,left,del.blacken(),null);else if(left instanceof cljs.core.BlackNode)return cljs.core.balance_left.call(null,key,val,left.redden(),del);else if(left instanceof cljs.core.RedNode&&left.right instanceof cljs.core.BlackNode)return new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),
new cljs.core.BlackNode(key,val,left.right.right,del,null),null);else if(new cljs.core.Keyword(null,"else","else",1017020587))throw new Error("red-black tree invariant violation");else return null};
cljs.core.tree_map_kv_reduce=function tree_map_kv_reduce(node,f,init){var init__$1=!(node.left==null)?tree_map_kv_reduce.call(null,node.left,f,init):init;if(cljs.core.reduced_QMARK_.call(null,init__$1))return cljs.core.deref.call(null,init__$1);else{var init__$2=f.call(null,init__$1,node.key,node.val);if(cljs.core.reduced_QMARK_.call(null,init__$2))return cljs.core.deref.call(null,init__$2);else{var init__$3=!(node.right==null)?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2;if(cljs.core.reduced_QMARK_.call(null,
init__$3))return cljs.core.deref.call(null,init__$3);else return init__$3}}};cljs.core.BlackNode=function(key,val,left,right,__hash){this.key=key;this.val=val;this.left=left;this.right=right;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32402207};cljs.core.BlackNode.cljs$lang$type=true;cljs.core.BlackNode.cljs$lang$ctorStr="cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/BlackNode")};cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2=function(node,k){var self__=this;var node__$1=this;return cljs.core._nth.call(null,node__$1,k,null)};cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3=function(node,k,not_found){var self__=this;var node__$1=this;return cljs.core._nth.call(null,node__$1,k,not_found)};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3=function(node,k,v){var self__=this;var node__$1=this;return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val],null),k,v)};
cljs.core.BlackNode.prototype.call=function(){var G__9937=null;var G__9937__2=function(self__,k){var self__=this;var self____$1=this;var node=self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9937__3=function(self__,k,not_found){var self__=this;var self____$1=this;var node=self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9937=function(self__,k,not_found){switch(arguments.length){case 2:return G__9937__2.call(this,self__,k);case 3:return G__9937__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9937}();cljs.core.BlackNode.prototype.apply=function(self__,args9936){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9936)))};cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var node=this;return node.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var node=this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2=function(node,o){var self__=this;var node__$1=this;return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val,o],null)};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1=function(node){var self__=this;var node__$1=this;return self__.key};cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1=function(node){var self__=this;var node__$1=this;return self__.val};cljs.core.BlackNode.prototype.add_right=function(ins){var self__=this;var node=this;return ins.balance_right(node)};
cljs.core.BlackNode.prototype.redden=function(){var self__=this;var node=this;return new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null)};cljs.core.BlackNode.prototype.remove_right=function(del){var self__=this;var node=this;return cljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del)};
cljs.core.BlackNode.prototype.replace=function(key__$1,val__$1,left__$1,right__$1){var self__=this;var node=this;return new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null)};cljs.core.BlackNode.prototype.kv_reduce=function(f,init){var self__=this;var node=this;return cljs.core.tree_map_kv_reduce.call(null,node,f,init)};cljs.core.BlackNode.prototype.remove_left=function(del){var self__=this;var node=this;return cljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right)};
cljs.core.BlackNode.prototype.add_left=function(ins){var self__=this;var node=this;return ins.balance_left(node)};cljs.core.BlackNode.prototype.balance_left=function(parent){var self__=this;var node=this;return new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null)};cljs.core.BlackNode.prototype.balance_right=function(parent){var self__=this;var node=this;return new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null)};
cljs.core.BlackNode.prototype.blacken=function(){var self__=this;var node=this;return node};cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2=function(node,f){var self__=this;var node__$1=this;return cljs.core.ci_reduce.call(null,node__$1,f)};cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3=function(node,f,start){var self__=this;var node__$1=this;return cljs.core.ci_reduce.call(null,node__$1,f,start)};
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1=function(node){var self__=this;var node__$1=this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key)};cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1=function(node){var self__=this;var node__$1=this;return 2};cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1=function(node){var self__=this;var node__$1=this;return self__.val};
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1=function(node){var self__=this;var node__$1=this;return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key],null)};cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3=function(node,n,v){var self__=this;var node__$1=this;return(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val],null)).cljs$core$IVector$_assoc_n$arity$3(null,n,v)};
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(node,meta){var self__=this;var node__$1=this;return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val],null),meta)};
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1=function(node){var self__=this;var node__$1=this;return null};cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2=function(node,n){var self__=this;var node__$1=this;if(n===0)return self__.key;else if(n===1)return self__.val;else if(new cljs.core.Keyword(null,"else","else",1017020587))return null;else return null};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3=function(node,n,not_found){var self__=this;var node__$1=this;if(n===0)return self__.key;else if(n===1)return self__.val;else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null};cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(node){var self__=this;var node__$1=this;return cljs.core.PersistentVector.EMPTY};
cljs.core.__GT_BlackNode=function __GT_BlackNode(key,val,left,right,__hash){return new cljs.core.BlackNode(key,val,left,right,__hash)};cljs.core.RedNode=function(key,val,left,right,__hash){this.key=key;this.val=val;this.left=left;this.right=right;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32402207};cljs.core.RedNode.cljs$lang$type=true;cljs.core.RedNode.cljs$lang$ctorStr="cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/RedNode")};cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2=function(node,k){var self__=this;var node__$1=this;return cljs.core._nth.call(null,node__$1,k,null)};cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3=function(node,k,not_found){var self__=this;var node__$1=this;return cljs.core._nth.call(null,node__$1,k,not_found)};
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3=function(node,k,v){var self__=this;var node__$1=this;return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val],null),k,v)};
cljs.core.RedNode.prototype.call=function(){var G__9939=null;var G__9939__2=function(self__,k){var self__=this;var self____$1=this;var node=self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9939__3=function(self__,k,not_found){var self__=this;var self____$1=this;var node=self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9939=function(self__,k,not_found){switch(arguments.length){case 2:return G__9939__2.call(this,self__,k);case 3:return G__9939__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9939}();cljs.core.RedNode.prototype.apply=function(self__,args9938){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9938)))};cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var node=this;return node.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var node=this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2=function(node,o){var self__=this;var node__$1=this;return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val,o],null)};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1=function(node){var self__=this;var node__$1=this;return self__.key};cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1=function(node){var self__=this;var node__$1=this;return self__.val};cljs.core.RedNode.prototype.add_right=function(ins){var self__=this;var node=this;return new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null)};
cljs.core.RedNode.prototype.redden=function(){var self__=this;var node=this;throw new Error("red-black tree invariant violation");};cljs.core.RedNode.prototype.remove_right=function(del){var self__=this;var node=this;return new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null)};cljs.core.RedNode.prototype.replace=function(key__$1,val__$1,left__$1,right__$1){var self__=this;var node=this;return new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null)};
cljs.core.RedNode.prototype.kv_reduce=function(f,init){var self__=this;var node=this;return cljs.core.tree_map_kv_reduce.call(null,node,f,init)};cljs.core.RedNode.prototype.remove_left=function(del){var self__=this;var node=this;return new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null)};cljs.core.RedNode.prototype.add_left=function(ins){var self__=this;var node=this;return new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null)};
cljs.core.RedNode.prototype.balance_left=function(parent){var self__=this;var node=this;if(self__.left instanceof cljs.core.RedNode)return new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null),null);else if(self__.right instanceof cljs.core.RedNode)return new cljs.core.RedNode(self__.right.key,self__.right.val,new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null),new cljs.core.BlackNode(parent.key,
parent.val,self__.right.right,parent.right,null),null);else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null);else return null};
cljs.core.RedNode.prototype.balance_right=function(parent){var self__=this;var node=this;if(self__.right instanceof cljs.core.RedNode)return new cljs.core.RedNode(self__.key,self__.val,new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null),self__.right.blacken(),null);else if(self__.left instanceof cljs.core.RedNode)return new cljs.core.RedNode(self__.left.key,self__.left.val,new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null),new cljs.core.BlackNode(self__.key,
self__.val,self__.left.right,self__.right,null),null);else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null);else return null};cljs.core.RedNode.prototype.blacken=function(){var self__=this;var node=this;return new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null)};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2=function(node,f){var self__=this;var node__$1=this;return cljs.core.ci_reduce.call(null,node__$1,f)};cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3=function(node,f,start){var self__=this;var node__$1=this;return cljs.core.ci_reduce.call(null,node__$1,f,start)};
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1=function(node){var self__=this;var node__$1=this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key)};cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1=function(node){var self__=this;var node__$1=this;return 2};cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1=function(node){var self__=this;var node__$1=this;return self__.val};
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1=function(node){var self__=this;var node__$1=this;return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key],null)};cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3=function(node,n,v){var self__=this;var node__$1=this;return(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val],null)).cljs$core$IVector$_assoc_n$arity$3(null,n,v)};
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(node,meta){var self__=this;var node__$1=this;return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[self__.key,self__.val],null),meta)};
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1=function(node){var self__=this;var node__$1=this;return null};cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2=function(node,n){var self__=this;var node__$1=this;if(n===0)return self__.key;else if(n===1)return self__.val;else if(new cljs.core.Keyword(null,"else","else",1017020587))return null;else return null};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3=function(node,n,not_found){var self__=this;var node__$1=this;if(n===0)return self__.key;else if(n===1)return self__.val;else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null};cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(node){var self__=this;var node__$1=this;return cljs.core.PersistentVector.EMPTY};
cljs.core.__GT_RedNode=function __GT_RedNode(key,val,left,right,__hash){return new cljs.core.RedNode(key,val,left,right,__hash)};
cljs.core.tree_map_add=function tree_map_add(comp,tree,k,v,found){if(tree==null)return new cljs.core.RedNode(k,v,null,null,null);else{var c=comp.call(null,k,tree.key);if(c===0){found[0]=tree;return null}else if(c<0){var ins=tree_map_add.call(null,comp,tree.left,k,v,found);if(!(ins==null))return tree.add_left(ins);else return null}else if(new cljs.core.Keyword(null,"else","else",1017020587)){var ins=tree_map_add.call(null,comp,tree.right,k,v,found);if(!(ins==null))return tree.add_right(ins);else return null}else return null}};
cljs.core.tree_map_append=function tree_map_append(left,right){if(left==null)return right;else if(right==null)return left;else if(left instanceof cljs.core.RedNode)if(right instanceof cljs.core.RedNode){var app=tree_map_append.call(null,left.right,right.left);if(app instanceof cljs.core.RedNode)return new cljs.core.RedNode(app.key,app.val,new cljs.core.RedNode(left.key,left.val,left.left,app.left,null),new cljs.core.RedNode(right.key,right.val,app.right,right.right,null),null);else return new cljs.core.RedNode(left.key,
left.val,left.left,new cljs.core.RedNode(right.key,right.val,app,right.right,null),null)}else return new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null);else if(right instanceof cljs.core.RedNode)return new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null);else if(new cljs.core.Keyword(null,"else","else",1017020587)){var app=tree_map_append.call(null,left.right,right.left);if(app instanceof cljs.core.RedNode)return new cljs.core.RedNode(app.key,
app.val,new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null),new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null),null);else return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,new cljs.core.BlackNode(right.key,right.val,app,right.right,null))}else return null};
cljs.core.tree_map_remove=function tree_map_remove(comp,tree,k,found){if(!(tree==null)){var c=comp.call(null,k,tree.key);if(c===0){found[0]=tree;return cljs.core.tree_map_append.call(null,tree.left,tree.right)}else if(c<0){var del=tree_map_remove.call(null,comp,tree.left,k,found);if(!(del==null)||!(found[0]==null))if(tree.left instanceof cljs.core.BlackNode)return cljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);else return new cljs.core.RedNode(tree.key,tree.val,del,tree.right,
null);else return null}else if(new cljs.core.Keyword(null,"else","else",1017020587)){var del=tree_map_remove.call(null,comp,tree.right,k,found);if(!(del==null)||!(found[0]==null))if(tree.right instanceof cljs.core.BlackNode)return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);else return new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null);else return null}else return null}else return null};
cljs.core.tree_map_replace=function tree_map_replace(comp,tree,k,v){var tk=tree.key;var c=comp.call(null,k,tk);if(c===0)return tree.replace(tk,v,tree.left,tree.right);else if(c<0)return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);else if(new cljs.core.Keyword(null,"else","else",1017020587))return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));else return null};
cljs.core.PersistentTreeMap=function(comp,tree,cnt,meta,__hash){this.comp=comp;this.tree=tree;this.cnt=cnt;this.meta=meta;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=418776847;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.PersistentTreeMap.cljs$lang$type=true;cljs.core.PersistentTreeMap.cljs$lang$ctorStr="cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentTreeMap")};
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_imap.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,k){var self__=this;var coll__$1=this;return cljs.core._lookup.call(null,coll__$1,k,null)};cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,k,not_found){var self__=this;var coll__$1=this;var n=coll__$1.entry_at(k);if(!(n==null))return n.val;else return not_found};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(coll,k,v){var self__=this;var coll__$1=this;var found=[null];var t=cljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);if(t==null){var found_node=cljs.core.nth.call(null,found,0);if(cljs.core._EQ_.call(null,v,found_node.val))return coll__$1;else return new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null)}else return new cljs.core.PersistentTreeMap(self__.comp,
t.blacken(),self__.cnt+1,self__.meta,null)};cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(coll,k){var self__=this;var coll__$1=this;return!(coll__$1.entry_at(k)==null)};
cljs.core.PersistentTreeMap.prototype.call=function(){var G__9941=null;var G__9941__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9941__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9941=function(self__,k,not_found){switch(arguments.length){case 2:return G__9941__2.call(this,self__,k);case 3:return G__9941__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9941}();cljs.core.PersistentTreeMap.prototype.apply=function(self__,args9940){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9940)))};cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(coll,f,init){var self__=this;var coll__$1=this;if(!(self__.tree==null))return cljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);else return init};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,entry){var self__=this;var coll__$1=this;if(cljs.core.vector_QMARK_.call(null,entry))return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));else return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry)};
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt>0)return cljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);else return null};cljs.core.PersistentTreeMap.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.PersistentTreeMap.prototype.entry_at=function(k){var self__=this;var coll=this;var t=self__.tree;while(true){if(!(t==null)){var c=self__.comp.call(null,k,t.key);if(c===0)return t;else if(c<0){var G__9942=t.left;t=G__9942;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587)){var G__9943=t.right;t=G__9943;continue}else return null}else return null;break}};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2=function(coll,ascending_QMARK_){var self__=this;var coll__$1=this;if(self__.cnt>0)return cljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);else return null};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3=function(coll,k,ascending_QMARK_){var self__=this;var coll__$1=this;if(self__.cnt>0){var stack=null;var t=self__.tree;while(true){if(!(t==null)){var c=self__.comp.call(null,k,t.key);if(c===0)return new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,-1,null);else if(cljs.core.truth_(ascending_QMARK_))if(c<0){var G__9944=cljs.core.conj.call(null,stack,t);var G__9945=t.left;stack=
G__9944;t=G__9945;continue}else{var G__9946=stack;var G__9947=t.right;stack=G__9946;t=G__9947;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587))if(c>0){var G__9948=cljs.core.conj.call(null,stack,t);var G__9949=t.right;stack=G__9948;t=G__9949;continue}else{var G__9950=stack;var G__9951=t.left;stack=G__9950;t=G__9951;continue}else return null}else if(stack==null)return null;else return new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null);break}}else return null};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2=function(coll,entry){var self__=this;var coll__$1=this;return cljs.core.key.call(null,entry)};cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.comp};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;if(self__.cnt>0)return cljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);else return null};cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.cnt};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_map.call(null,coll__$1,other)};cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash)};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash)};cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,self__.meta)};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(coll,k){var self__=this;var coll__$1=this;var found=[null];var t=cljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);if(t==null)if(cljs.core.nth.call(null,found,0)==null)return coll__$1;else return new cljs.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null);else return new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),self__.cnt-1,self__.meta,null)};
cljs.core.__GT_PersistentTreeMap=function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash)};cljs.core.PersistentTreeMap.EMPTY=new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0);
cljs.core.hash_map=function(){var hash_map__delegate=function(keyvals){var in$=cljs.core.seq.call(null,keyvals);var out=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){if(in$){var G__9952=cljs.core.nnext.call(null,in$);var G__9953=cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));in$=G__9952;out=G__9953;continue}else return cljs.core.persistent_BANG_.call(null,out);break}};var hash_map=function(var_args){var keyvals=null;
if(arguments.length>0)keyvals=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return hash_map__delegate.call(this,keyvals)};hash_map.cljs$lang$maxFixedArity=0;hash_map.cljs$lang$applyTo=function(arglist__9954){var keyvals=cljs.core.seq(arglist__9954);return hash_map__delegate(keyvals)};hash_map.cljs$core$IFn$_invoke$arity$variadic=hash_map__delegate;return hash_map}();
cljs.core.array_map=function(){var array_map__delegate=function(keyvals){return new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null)};var array_map=function(var_args){var keyvals=null;if(arguments.length>0)keyvals=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return array_map__delegate.call(this,keyvals)};array_map.cljs$lang$maxFixedArity=0;array_map.cljs$lang$applyTo=function(arglist__9955){var keyvals=
cljs.core.seq(arglist__9955);return array_map__delegate(keyvals)};array_map.cljs$core$IFn$_invoke$arity$variadic=array_map__delegate;return array_map}();
cljs.core.obj_map=function(){var obj_map__delegate=function(keyvals){var ks=[];var obj=function(){var obj9959={};return obj9959}();var kvs=cljs.core.seq.call(null,keyvals);while(true){if(kvs){ks.push(cljs.core.first.call(null,kvs));obj[cljs.core.first.call(null,kvs)]=cljs.core.second.call(null,kvs);var G__9960=cljs.core.nnext.call(null,kvs);kvs=G__9960;continue}else return cljs.core.ObjMap.fromObject.call(null,ks,obj);break}};var obj_map=function(var_args){var keyvals=null;if(arguments.length>0)keyvals=
cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return obj_map__delegate.call(this,keyvals)};obj_map.cljs$lang$maxFixedArity=0;obj_map.cljs$lang$applyTo=function(arglist__9961){var keyvals=cljs.core.seq(arglist__9961);return obj_map__delegate(keyvals)};obj_map.cljs$core$IFn$_invoke$arity$variadic=obj_map__delegate;return obj_map}();
cljs.core.sorted_map=function(){var sorted_map__delegate=function(keyvals){var in$=cljs.core.seq.call(null,keyvals);var out=cljs.core.PersistentTreeMap.EMPTY;while(true){if(in$){var G__9962=cljs.core.nnext.call(null,in$);var G__9963=cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));in$=G__9962;out=G__9963;continue}else return out;break}};var sorted_map=function(var_args){var keyvals=null;if(arguments.length>0)keyvals=cljs.core.array_seq(Array.prototype.slice.call(arguments,
0),0);return sorted_map__delegate.call(this,keyvals)};sorted_map.cljs$lang$maxFixedArity=0;sorted_map.cljs$lang$applyTo=function(arglist__9964){var keyvals=cljs.core.seq(arglist__9964);return sorted_map__delegate(keyvals)};sorted_map.cljs$core$IFn$_invoke$arity$variadic=sorted_map__delegate;return sorted_map}();
cljs.core.sorted_map_by=function(){var sorted_map_by__delegate=function(comparator,keyvals){var in$=cljs.core.seq.call(null,keyvals);var out=new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,comparator),null,0,null,0);while(true){if(in$){var G__9965=cljs.core.nnext.call(null,in$);var G__9966=cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));in$=G__9965;out=G__9966;continue}else return out;break}};var sorted_map_by=function(comparator,
var_args){var keyvals=null;if(arguments.length>1)keyvals=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return sorted_map_by__delegate.call(this,comparator,keyvals)};sorted_map_by.cljs$lang$maxFixedArity=1;sorted_map_by.cljs$lang$applyTo=function(arglist__9967){var comparator=cljs.core.first(arglist__9967);var keyvals=cljs.core.rest(arglist__9967);return sorted_map_by__delegate(comparator,keyvals)};sorted_map_by.cljs$core$IFn$_invoke$arity$variadic=sorted_map_by__delegate;return sorted_map_by}();
cljs.core.KeySeq=function(mseq,_meta){this.mseq=mseq;this._meta=_meta;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374988};cljs.core.KeySeq.cljs$lang$type=true;cljs.core.KeySeq.cljs$lang$ctorStr="cljs.core/KeySeq";cljs.core.KeySeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/KeySeq")};
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.hash_coll.call(null,coll__$1)};
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;var nseq=function(){var G__9968=self__.mseq;if(G__9968){var bit__7382__auto__=G__9968.cljs$lang$protocol_mask$partition0$&128;if(bit__7382__auto__||G__9968.cljs$core$INext$)return true;else if(!G__9968.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__9968);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,
G__9968)}()?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq);if(nseq==null)return null;else return new cljs.core.KeySeq(nseq,self__._meta)};cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};cljs.core.KeySeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;var me=cljs.core._first.call(null,self__.mseq);return cljs.core._key.call(null,me)};
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;var nseq=function(){var G__9969=self__.mseq;if(G__9969){var bit__7382__auto__=G__9969.cljs$lang$protocol_mask$partition0$&128;if(bit__7382__auto__||G__9969.cljs$core$INext$)return true;else if(!G__9969.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__9969);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,
G__9969)}()?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq);if(!(nseq==null))return new cljs.core.KeySeq(nseq,self__._meta);else return cljs.core.List.EMPTY};cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,new_meta){var self__=this;var coll__$1=this;return new cljs.core.KeySeq(self__.mseq,new_meta)};cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__._meta};cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta)};
cljs.core.__GT_KeySeq=function __GT_KeySeq(mseq,_meta){return new cljs.core.KeySeq(mseq,_meta)};cljs.core.keys=function keys(hash_map){var temp__4092__auto__=cljs.core.seq.call(null,hash_map);if(temp__4092__auto__){var mseq=temp__4092__auto__;return new cljs.core.KeySeq(mseq,null)}else return null};cljs.core.key=function key(map_entry){return cljs.core._key.call(null,map_entry)};
cljs.core.ValSeq=function(mseq,_meta){this.mseq=mseq;this._meta=_meta;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374988};cljs.core.ValSeq.cljs$lang$type=true;cljs.core.ValSeq.cljs$lang$ctorStr="cljs.core/ValSeq";cljs.core.ValSeq.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/ValSeq")};
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.hash_coll.call(null,coll__$1)};
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1=function(coll){var self__=this;var coll__$1=this;var nseq=function(){var G__9970=self__.mseq;if(G__9970){var bit__7382__auto__=G__9970.cljs$lang$protocol_mask$partition0$&128;if(bit__7382__auto__||G__9970.cljs$core$INext$)return true;else if(!G__9970.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__9970);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,
G__9970)}()?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq);if(nseq==null)return null;else return new cljs.core.ValSeq(nseq,self__._meta)};cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return cljs.core.cons.call(null,o,coll__$1)};cljs.core.ValSeq.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(coll,f){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,coll__$1)};cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(coll,f,start){var self__=this;var coll__$1=this;return cljs.core.seq_reduce.call(null,f,start,coll__$1)};cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return coll__$1};
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1=function(coll){var self__=this;var coll__$1=this;var me=cljs.core._first.call(null,self__.mseq);return cljs.core._val.call(null,me)};
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(coll){var self__=this;var coll__$1=this;var nseq=function(){var G__9971=self__.mseq;if(G__9971){var bit__7382__auto__=G__9971.cljs$lang$protocol_mask$partition0$&128;if(bit__7382__auto__||G__9971.cljs$core$INext$)return true;else if(!G__9971.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__9971);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,
G__9971)}()?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq);if(!(nseq==null))return new cljs.core.ValSeq(nseq,self__._meta);else return cljs.core.List.EMPTY};cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.equiv_sequential.call(null,coll__$1,other)};
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,new_meta){var self__=this;var coll__$1=this;return new cljs.core.ValSeq(self__.mseq,new_meta)};cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__._meta};cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta)};
cljs.core.__GT_ValSeq=function __GT_ValSeq(mseq,_meta){return new cljs.core.ValSeq(mseq,_meta)};cljs.core.vals=function vals(hash_map){var temp__4092__auto__=cljs.core.seq.call(null,hash_map);if(temp__4092__auto__){var mseq=temp__4092__auto__;return new cljs.core.ValSeq(mseq,null)}else return null};cljs.core.val=function val(map_entry){return cljs.core._val.call(null,map_entry)};
cljs.core.merge=function(){var merge__delegate=function(maps){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))return cljs.core.reduce.call(null,function(p1__9972_SHARP_,p2__9973_SHARP_){return cljs.core.conj.call(null,function(){var or__6732__auto__=p1__9972_SHARP_;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.PersistentArrayMap.EMPTY}(),p2__9973_SHARP_)},maps);else return null};var merge=function(var_args){var maps=null;if(arguments.length>
0)maps=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return merge__delegate.call(this,maps)};merge.cljs$lang$maxFixedArity=0;merge.cljs$lang$applyTo=function(arglist__9974){var maps=cljs.core.seq(arglist__9974);return merge__delegate(maps)};merge.cljs$core$IFn$_invoke$arity$variadic=merge__delegate;return merge}();
cljs.core.merge_with=function(){var merge_with__delegate=function(f,maps){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){var merge_entry=function(m,e){var k=cljs.core.first.call(null,e);var v=cljs.core.second.call(null,e);if(cljs.core.contains_QMARK_.call(null,m,k))return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));else return cljs.core.assoc.call(null,m,k,v)};var merge2=function(merge_entry){return function(m1,m2){return cljs.core.reduce.call(null,
merge_entry,function(){var or__6732__auto__=m1;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.PersistentArrayMap.EMPTY}(),cljs.core.seq.call(null,m2))}}(merge_entry);return cljs.core.reduce.call(null,merge2,maps)}else return null};var merge_with=function(f,var_args){var maps=null;if(arguments.length>1)maps=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return merge_with__delegate.call(this,f,maps)};merge_with.cljs$lang$maxFixedArity=1;merge_with.cljs$lang$applyTo=
function(arglist__9975){var f=cljs.core.first(arglist__9975);var maps=cljs.core.rest(arglist__9975);return merge_with__delegate(f,maps)};merge_with.cljs$core$IFn$_invoke$arity$variadic=merge_with__delegate;return merge_with}();
cljs.core.select_keys=function select_keys(map,keyseq){var ret=cljs.core.PersistentArrayMap.EMPTY;var keys=cljs.core.seq.call(null,keyseq);while(true){if(keys){var key=cljs.core.first.call(null,keys);var entry=cljs.core.get.call(null,map,key,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",4155500789));var G__9976=cljs.core.not_EQ_.call(null,entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",4155500789))?cljs.core.assoc.call(null,ret,key,entry):ret;var G__9977=
cljs.core.next.call(null,keys);ret=G__9976;keys=G__9977;continue}else return ret;break}};cljs.core.PersistentHashSet=function(meta,hash_map,__hash){this.meta=meta;this.hash_map=hash_map;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=15077647};cljs.core.PersistentHashSet.cljs$lang$type=true;cljs.core.PersistentHashSet.cljs$lang$ctorStr="cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentHashSet")};cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(coll){var self__=this;var coll__$1=this;return new cljs.core.TransientHashSet(cljs.core._as_transient.call(null,self__.hash_map))};
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_iset.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,v){var self__=this;var coll__$1=this;return cljs.core._lookup.call(null,coll__$1,v,null)};cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,v,not_found){var self__=this;var coll__$1=this;if(cljs.core._contains_key_QMARK_.call(null,self__.hash_map,v))return v;else return not_found};
cljs.core.PersistentHashSet.prototype.call=function(){var G__9980=null;var G__9980__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9980__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9980=function(self__,k,not_found){switch(arguments.length){case 2:return G__9980__2.call(this,self__,k);case 3:return G__9980__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9980}();cljs.core.PersistentHashSet.prototype.apply=function(self__,args9979){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9979)))};cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.call(null,self__.hash_map,o,null),null)};
cljs.core.PersistentHashSet.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.keys.call(null,self__.hash_map)};
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2=function(coll,v){var self__=this;var coll__$1=this;return new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc.call(null,self__.hash_map,v),null)};cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._count.call(null,self__.hash_map)};
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.set_QMARK_.call(null,other)&&(cljs.core.count.call(null,coll__$1)===cljs.core.count.call(null,other)&&cljs.core.every_QMARK_.call(null,function(p1__9978_SHARP_){return cljs.core.contains_QMARK_.call(null,coll__$1,p1__9978_SHARP_)},other))};
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash)};cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash)};
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,self__.meta)};cljs.core.__GT_PersistentHashSet=function __GT_PersistentHashSet(meta,hash_map,__hash){return new cljs.core.PersistentHashSet(meta,hash_map,__hash)};
cljs.core.PersistentHashSet.EMPTY=new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,0);
cljs.core.PersistentHashSet.fromArray=function(items,no_clone){var len=items.length;if(len<=cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD){var arr=no_clone?items:cljs.core.aclone.call(null,items);var i=0;var out=cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){if(i<len){var G__9981=i+1;var G__9982=cljs.core._assoc_BANG_.call(null,out,items[i],null);i=G__9981;out=G__9982;continue}else return new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_.call(null,out),
null);break}}else{var i=0;var out=cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){if(i<len){var G__9983=i+1;var G__9984=cljs.core._conj_BANG_.call(null,out,items[i]);i=G__9983;out=G__9984;continue}else return cljs.core._persistent_BANG_.call(null,out);break}}};cljs.core.TransientHashSet=function(transient_map){this.transient_map=transient_map;this.cljs$lang$protocol_mask$partition0$=259;this.cljs$lang$protocol_mask$partition1$=136};
cljs.core.TransientHashSet.cljs$lang$type=true;cljs.core.TransientHashSet.cljs$lang$ctorStr="cljs.core/TransientHashSet";cljs.core.TransientHashSet.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/TransientHashSet")};
cljs.core.TransientHashSet.prototype.call=function(){var G__9986=null;var G__9986__2=function(self__,k){var self__=this;var self____$1=this;var tcoll=self____$1;if(cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel)return null;else return k};var G__9986__3=function(self__,k,not_found){var self__=this;var self____$1=this;var tcoll=self____$1;if(cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel)return not_found;
else return k};G__9986=function(self__,k,not_found){switch(arguments.length){case 2:return G__9986__2.call(this,self__,k);case 3:return G__9986__3.call(this,self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9986}();cljs.core.TransientHashSet.prototype.apply=function(self__,args9985){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9985)))};
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var tcoll=this;if(cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel)return null;else return k};cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var tcoll=this;if(cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel)return not_found;else return k};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2=function(tcoll,v){var self__=this;var tcoll__$1=this;return cljs.core._lookup.call(null,tcoll__$1,v,null)};cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3=function(tcoll,v,not_found){var self__=this;var tcoll__$1=this;if(cljs.core._lookup.call(null,self__.transient_map,v,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel)return not_found;else return v};
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;return cljs.core.count.call(null,self__.transient_map)};cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2=function(tcoll,v){var self__=this;var tcoll__$1=this;self__.transient_map=cljs.core.dissoc_BANG_.call(null,self__.transient_map,v);return tcoll__$1};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(tcoll,o){var self__=this;var tcoll__$1=this;self__.transient_map=cljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);return tcoll__$1};cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(tcoll){var self__=this;var tcoll__$1=this;return new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,self__.transient_map),null)};
cljs.core.__GT_TransientHashSet=function __GT_TransientHashSet(transient_map){return new cljs.core.TransientHashSet(transient_map)};cljs.core.PersistentTreeSet=function(meta,tree_map,__hash){this.meta=meta;this.tree_map=tree_map;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=417730831;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.PersistentTreeSet.cljs$lang$type=true;cljs.core.PersistentTreeSet.cljs$lang$ctorStr="cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/PersistentTreeSet")};
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1=function(coll){var self__=this;var coll__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_iset.call(null,coll__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2=function(coll,v){var self__=this;var coll__$1=this;return cljs.core._lookup.call(null,coll__$1,v,null)};cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,v,not_found){var self__=this;var coll__$1=this;var n=self__.tree_map.entry_at(v);if(!(n==null))return n.key;else return not_found};
cljs.core.PersistentTreeSet.prototype.call=function(){var G__9989=null;var G__9989__2=function(self__,k){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};var G__9989__3=function(self__,k,not_found){var self__=this;var self____$1=this;var coll=self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};G__9989=function(self__,k,not_found){switch(arguments.length){case 2:return G__9989__2.call(this,self__,k);case 3:return G__9989__3.call(this,
self__,k,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9989}();cljs.core.PersistentTreeSet.prototype.apply=function(self__,args9988){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9988)))};cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1=function(k){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2=function(k,not_found){var self__=this;var coll=this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found)};cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2=function(coll,o){var self__=this;var coll__$1=this;return new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.call(null,self__.tree_map,o,null),null)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1=function(coll){var self__=this;var coll__$1=this;if(cljs.core.count.call(null,self__.tree_map)>0)return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.tree_map));else return null};cljs.core.PersistentTreeSet.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2=function(coll,ascending_QMARK_){var self__=this;var coll__$1=this;return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_))};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3=function(coll,k,ascending_QMARK_){var self__=this;var coll__$1=this;return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_))};cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2=function(coll,entry){var self__=this;var coll__$1=this;return entry};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core._comparator.call(null,self__.tree_map)};cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.keys.call(null,self__.tree_map)};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2=function(coll,v){var self__=this;var coll__$1=this;return new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.call(null,self__.tree_map,v),null)};cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.count.call(null,self__.tree_map)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2=function(coll,other){var self__=this;var coll__$1=this;return cljs.core.set_QMARK_.call(null,other)&&(cljs.core.count.call(null,coll__$1)===cljs.core.count.call(null,other)&&cljs.core.every_QMARK_.call(null,function(p1__9987_SHARP_){return cljs.core.contains_QMARK_.call(null,coll__$1,p1__9987_SHARP_)},other))};
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(coll,meta__$1){var self__=this;var coll__$1=this;return new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash)};cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1=function(coll){var self__=this;var coll__$1=this;return self__.meta};cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,self__.meta)};cljs.core.__GT_PersistentTreeSet=function __GT_PersistentTreeSet(meta,tree_map,__hash){return new cljs.core.PersistentTreeSet(meta,tree_map,__hash)};
cljs.core.PersistentTreeSet.EMPTY=new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,0);
cljs.core.set_from_indexed_seq=function set_from_indexed_seq(iseq){var arr=iseq.arr;var ret=function(){var a__7574__auto__=arr;var i=0;var res=cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){if(i<a__7574__auto__.length){var G__9990=i+1;var G__9991=cljs.core._conj_BANG_.call(null,res,arr[i]);i=G__9990;res=G__9991;continue}else return res;break}}();return cljs.core._persistent_BANG_.call(null,ret)};
cljs.core.set=function set(coll){var in$=cljs.core.seq.call(null,coll);if(in$==null)return cljs.core.PersistentHashSet.EMPTY;else if(in$ instanceof cljs.core.IndexedSeq&&in$.i===0)return cljs.core.set_from_indexed_seq.call(null,in$);else if(new cljs.core.Keyword(null,"else","else",1017020587)){var in$__$1=in$;var out=cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){if(!(in$__$1==null)){var G__9992=cljs.core._next.call(null,in$__$1);var G__9993=cljs.core._conj_BANG_.call(null,
out,cljs.core._first.call(null,in$__$1));in$__$1=G__9992;out=G__9993;continue}else return cljs.core._persistent_BANG_.call(null,out);break}}else return null};
cljs.core.hash_set=function(){var hash_set=null;var hash_set__0=function(){return cljs.core.PersistentHashSet.EMPTY};var hash_set__1=function(){var G__9994__delegate=function(keys){return cljs.core.set.call(null,keys)};var G__9994=function(var_args){var keys=null;if(arguments.length>0)keys=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9994__delegate.call(this,keys)};G__9994.cljs$lang$maxFixedArity=0;G__9994.cljs$lang$applyTo=function(arglist__9995){var keys=cljs.core.seq(arglist__9995);
return G__9994__delegate(keys)};G__9994.cljs$core$IFn$_invoke$arity$variadic=G__9994__delegate;return G__9994}();hash_set=function(var_args){var keys=var_args;switch(arguments.length){case 0:return hash_set__0.call(this);default:return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments,0))}throw new Error("Invalid arity: "+arguments.length);};hash_set.cljs$lang$maxFixedArity=0;hash_set.cljs$lang$applyTo=hash_set__1.cljs$lang$applyTo;hash_set.cljs$core$IFn$_invoke$arity$0=
hash_set__0;hash_set.cljs$core$IFn$_invoke$arity$variadic=hash_set__1.cljs$core$IFn$_invoke$arity$variadic;return hash_set}();
cljs.core.sorted_set=function(){var sorted_set__delegate=function(keys){return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys)};var sorted_set=function(var_args){var keys=null;if(arguments.length>0)keys=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return sorted_set__delegate.call(this,keys)};sorted_set.cljs$lang$maxFixedArity=0;sorted_set.cljs$lang$applyTo=function(arglist__9996){var keys=cljs.core.seq(arglist__9996);return sorted_set__delegate(keys)};
sorted_set.cljs$core$IFn$_invoke$arity$variadic=sorted_set__delegate;return sorted_set}();
cljs.core.sorted_set_by=function(){var sorted_set_by__delegate=function(comparator,keys){return cljs.core.reduce.call(null,cljs.core._conj,new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0),keys)};var sorted_set_by=function(comparator,var_args){var keys=null;if(arguments.length>1)keys=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return sorted_set_by__delegate.call(this,comparator,keys)};sorted_set_by.cljs$lang$maxFixedArity=1;sorted_set_by.cljs$lang$applyTo=
function(arglist__9997){var comparator=cljs.core.first(arglist__9997);var keys=cljs.core.rest(arglist__9997);return sorted_set_by__delegate(comparator,keys)};sorted_set_by.cljs$core$IFn$_invoke$arity$variadic=sorted_set_by__delegate;return sorted_set_by}();
cljs.core.replace=function replace(smap,coll){if(cljs.core.vector_QMARK_.call(null,coll)){var n=cljs.core.count.call(null,coll);return cljs.core.reduce.call(null,function(v,i){var temp__4090__auto__=cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));if(cljs.core.truth_(temp__4090__auto__)){var e=temp__4090__auto__;return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e))}else return v},coll,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.inc,0)))}else return cljs.core.map.call(null,
function(p1__9998_SHARP_){var temp__4090__auto__=cljs.core.find.call(null,smap,p1__9998_SHARP_);if(cljs.core.truth_(temp__4090__auto__)){var e=temp__4090__auto__;return cljs.core.second.call(null,e)}else return p1__9998_SHARP_},coll)};
cljs.core.distinct=function distinct(coll){var step=function step(xs,seen){return new cljs.core.LazySeq(null,function(){return function(p__10005,seen__$1){while(true){var vec__10006=p__10005;var f=cljs.core.nth.call(null,vec__10006,0,null);var xs__$1=vec__10006;var temp__4092__auto__=cljs.core.seq.call(null,xs__$1);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.contains_QMARK_.call(null,seen__$1,f)){var G__10007=cljs.core.rest.call(null,s);var G__10008=seen__$1;p__10005=G__10007;seen__$1=
G__10008;continue}else return cljs.core.cons.call(null,f,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f)))}else return null;break}}.call(null,xs,seen)},null,null)};return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY)};
cljs.core.butlast=function butlast(s){var ret=cljs.core.PersistentVector.EMPTY;var s__$1=s;while(true){if(cljs.core.next.call(null,s__$1)){var G__10009=cljs.core.conj.call(null,ret,cljs.core.first.call(null,s__$1));var G__10010=cljs.core.next.call(null,s__$1);ret=G__10009;s__$1=G__10010;continue}else return cljs.core.seq.call(null,ret);break}};
cljs.core.name=function name(x){if(function(){var G__10012=x;if(G__10012){var bit__7375__auto__=G__10012.cljs$lang$protocol_mask$partition1$&4096;if(bit__7375__auto__||G__10012.cljs$core$INamed$)return true;else return false}else return false}())return cljs.core._name.call(null,x);else if(typeof x==="string")return x;else throw new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join(""));};
cljs.core.zipmap=function zipmap(keys,vals){var map=cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var ks=cljs.core.seq.call(null,keys);var vs=cljs.core.seq.call(null,vals);while(true){if(ks&&vs){var G__10013=cljs.core.assoc_BANG_.call(null,map,cljs.core.first.call(null,ks),cljs.core.first.call(null,vs));var G__10014=cljs.core.next.call(null,ks);var G__10015=cljs.core.next.call(null,vs);map=G__10013;ks=G__10014;vs=G__10015;continue}else return cljs.core.persistent_BANG_.call(null,
map);break}};
cljs.core.max_key=function(){var max_key=null;var max_key__2=function(k,x){return x};var max_key__3=function(k,x,y){if(k.call(null,x)>k.call(null,y))return x;else return y};var max_key__4=function(){var G__10018__delegate=function(k,x,y,more){return cljs.core.reduce.call(null,function(p1__10016_SHARP_,p2__10017_SHARP_){return max_key.call(null,k,p1__10016_SHARP_,p2__10017_SHARP_)},max_key.call(null,k,x,y),more)};var G__10018=function(k,x,y,var_args){var more=null;if(arguments.length>3)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,
3),0);return G__10018__delegate.call(this,k,x,y,more)};G__10018.cljs$lang$maxFixedArity=3;G__10018.cljs$lang$applyTo=function(arglist__10019){var k=cljs.core.first(arglist__10019);arglist__10019=cljs.core.next(arglist__10019);var x=cljs.core.first(arglist__10019);arglist__10019=cljs.core.next(arglist__10019);var y=cljs.core.first(arglist__10019);var more=cljs.core.rest(arglist__10019);return G__10018__delegate(k,x,y,more)};G__10018.cljs$core$IFn$_invoke$arity$variadic=G__10018__delegate;return G__10018}();
max_key=function(k,x,y,var_args){var more=var_args;switch(arguments.length){case 2:return max_key__2.call(this,k,x);case 3:return max_key__3.call(this,k,x,y);default:return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};max_key.cljs$lang$maxFixedArity=3;max_key.cljs$lang$applyTo=max_key__4.cljs$lang$applyTo;max_key.cljs$core$IFn$_invoke$arity$2=max_key__2;max_key.cljs$core$IFn$_invoke$arity$3=max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic=max_key__4.cljs$core$IFn$_invoke$arity$variadic;return max_key}();
cljs.core.min_key=function(){var min_key=null;var min_key__2=function(k,x){return x};var min_key__3=function(k,x,y){if(k.call(null,x)<k.call(null,y))return x;else return y};var min_key__4=function(){var G__10022__delegate=function(k,x,y,more){return cljs.core.reduce.call(null,function(p1__10020_SHARP_,p2__10021_SHARP_){return min_key.call(null,k,p1__10020_SHARP_,p2__10021_SHARP_)},min_key.call(null,k,x,y),more)};var G__10022=function(k,x,y,var_args){var more=null;if(arguments.length>3)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,
3),0);return G__10022__delegate.call(this,k,x,y,more)};G__10022.cljs$lang$maxFixedArity=3;G__10022.cljs$lang$applyTo=function(arglist__10023){var k=cljs.core.first(arglist__10023);arglist__10023=cljs.core.next(arglist__10023);var x=cljs.core.first(arglist__10023);arglist__10023=cljs.core.next(arglist__10023);var y=cljs.core.first(arglist__10023);var more=cljs.core.rest(arglist__10023);return G__10022__delegate(k,x,y,more)};G__10022.cljs$core$IFn$_invoke$arity$variadic=G__10022__delegate;return G__10022}();
min_key=function(k,x,y,var_args){var more=var_args;switch(arguments.length){case 2:return min_key__2.call(this,k,x);case 3:return min_key__3.call(this,k,x,y);default:return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};min_key.cljs$lang$maxFixedArity=3;min_key.cljs$lang$applyTo=min_key__4.cljs$lang$applyTo;min_key.cljs$core$IFn$_invoke$arity$2=min_key__2;min_key.cljs$core$IFn$_invoke$arity$3=min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic=min_key__4.cljs$core$IFn$_invoke$arity$variadic;return min_key}();
cljs.core.partition_all=function(){var partition_all=null;var partition_all__2=function(n,coll){return partition_all.call(null,n,n,coll)};var partition_all__3=function(n,step,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;return cljs.core.cons.call(null,cljs.core.take.call(null,n,s),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s)))}else return null},null,null)};partition_all=function(n,
step,coll){switch(arguments.length){case 2:return partition_all__2.call(this,n,step);case 3:return partition_all__3.call(this,n,step,coll)}throw new Error("Invalid arity: "+arguments.length);};partition_all.cljs$core$IFn$_invoke$arity$2=partition_all__2;partition_all.cljs$core$IFn$_invoke$arity$3=partition_all__3;return partition_all}();
cljs.core.take_while=function take_while(pred,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s))))return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_while.call(null,pred,cljs.core.rest.call(null,s)));else return null}else return null},null,null)};
cljs.core.mk_bound_fn=function mk_bound_fn(sc,test,key){return function(e){var comp=cljs.core._comparator.call(null,sc);return test.call(null,comp.call(null,cljs.core._entry_key.call(null,sc,e),key),0)}};
cljs.core.subseq=function(){var subseq=null;var subseq__3=function(sc,test,key){var include=cljs.core.mk_bound_fn.call(null,sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_],true).call(null,test))){var temp__4092__auto__=cljs.core._sorted_seq_from.call(null,sc,key,true);if(cljs.core.truth_(temp__4092__auto__)){var vec__10026=temp__4092__auto__;var e=cljs.core.nth.call(null,vec__10026,0,null);var s=vec__10026;if(cljs.core.truth_(include.call(null,
e)))return s;else return cljs.core.next.call(null,s)}else return null}else return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,true))};var subseq__5=function(sc,start_test,start_key,end_test,end_key){var temp__4092__auto__=cljs.core._sorted_seq_from.call(null,sc,start_key,true);if(cljs.core.truth_(temp__4092__auto__)){var vec__10027=temp__4092__auto__;var e=cljs.core.nth.call(null,vec__10027,0,null);var s=vec__10027;return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,
sc,end_test,end_key),cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljs.core.next.call(null,s))}else return null};subseq=function(sc,start_test,start_key,end_test,end_key){switch(arguments.length){case 3:return subseq__3.call(this,sc,start_test,start_key);case 5:return subseq__5.call(this,sc,start_test,start_key,end_test,end_key)}throw new Error("Invalid arity: "+arguments.length);};subseq.cljs$core$IFn$_invoke$arity$3=subseq__3;subseq.cljs$core$IFn$_invoke$arity$5=
subseq__5;return subseq}();
cljs.core.rsubseq=function(){var rsubseq=null;var rsubseq__3=function(sc,test,key){var include=cljs.core.mk_bound_fn.call(null,sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_],true).call(null,test))){var temp__4092__auto__=cljs.core._sorted_seq_from.call(null,sc,key,false);if(cljs.core.truth_(temp__4092__auto__)){var vec__10030=temp__4092__auto__;var e=cljs.core.nth.call(null,vec__10030,0,null);var s=vec__10030;if(cljs.core.truth_(include.call(null,e)))return s;
else return cljs.core.next.call(null,s)}else return null}else return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,false))};var rsubseq__5=function(sc,start_test,start_key,end_test,end_key){var temp__4092__auto__=cljs.core._sorted_seq_from.call(null,sc,end_key,false);if(cljs.core.truth_(temp__4092__auto__)){var vec__10031=temp__4092__auto__;var e=cljs.core.nth.call(null,vec__10031,0,null);var s=vec__10031;return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,
sc,start_test,start_key),cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljs.core.next.call(null,s))}else return null};rsubseq=function(sc,start_test,start_key,end_test,end_key){switch(arguments.length){case 3:return rsubseq__3.call(this,sc,start_test,start_key);case 5:return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key)}throw new Error("Invalid arity: "+arguments.length);};rsubseq.cljs$core$IFn$_invoke$arity$3=rsubseq__3;rsubseq.cljs$core$IFn$_invoke$arity$5=
rsubseq__5;return rsubseq}();cljs.core.Range=function(meta,start,end,step,__hash){this.meta=meta;this.start=start;this.end=end;this.step=step;this.__hash=__hash;this.cljs$lang$protocol_mask$partition0$=32375006;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.Range.cljs$lang$type=true;cljs.core.Range.cljs$lang$ctorStr="cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Range")};cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1=function(rng){var self__=this;var rng__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_coll.call(null,rng__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1=function(rng){var self__=this;var rng__$1=this;if(self__.step>0)if(self__.start+self__.step<self__.end)return new cljs.core.Range(self__.meta,self__.start+self__.step,self__.end,self__.step,null);else return null;else if(self__.start+self__.step>self__.end)return new cljs.core.Range(self__.meta,self__.start+self__.step,self__.end,self__.step,null);else return null};
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2=function(rng,o){var self__=this;var rng__$1=this;return cljs.core.cons.call(null,o,rng__$1)};cljs.core.Range.prototype.toString=function(){var self__=this;var coll=this;return cljs.core.pr_str_STAR_.call(null,coll)};cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2=function(rng,f){var self__=this;var rng__$1=this;return cljs.core.ci_reduce.call(null,rng__$1,f)};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3=function(rng,f,s){var self__=this;var rng__$1=this;return cljs.core.ci_reduce.call(null,rng__$1,f,s)};cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1=function(rng){var self__=this;var rng__$1=this;if(self__.step>0)if(self__.start<self__.end)return rng__$1;else return null;else if(self__.start>self__.end)return rng__$1;else return null};
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1=function(rng){var self__=this;var rng__$1=this;if(cljs.core.not.call(null,cljs.core._seq.call(null,rng__$1)))return 0;else return Math.ceil((self__.end-self__.start)/self__.step)};cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1=function(rng){var self__=this;var rng__$1=this;if(cljs.core._seq.call(null,rng__$1)==null)return null;else return self__.start};
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1=function(rng){var self__=this;var rng__$1=this;if(!(cljs.core._seq.call(null,rng__$1)==null))return new cljs.core.Range(self__.meta,self__.start+self__.step,self__.end,self__.step,null);else return cljs.core.List.EMPTY};cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2=function(rng,other){var self__=this;var rng__$1=this;return cljs.core.equiv_sequential.call(null,rng__$1,other)};
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(rng,meta__$1){var self__=this;var rng__$1=this;return new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash)};cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1=function(_){var self__=this;var ___$1=this;return new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash)};
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1=function(rng){var self__=this;var rng__$1=this;return self__.meta};cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2=function(rng,n){var self__=this;var rng__$1=this;if(n<cljs.core._count.call(null,rng__$1))return self__.start+n*self__.step;else if(self__.start>self__.end&&self__.step===0)return self__.start;else throw new Error("Index out of bounds");};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3=function(rng,n,not_found){var self__=this;var rng__$1=this;if(n<cljs.core._count.call(null,rng__$1))return self__.start+n*self__.step;else if(self__.start>self__.end&&self__.step===0)return self__.start;else return not_found};cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(rng){var self__=this;var rng__$1=this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta)};
cljs.core.__GT_Range=function __GT_Range(meta,start,end,step,__hash){return new cljs.core.Range(meta,start,end,step,__hash)};
cljs.core.range=function(){var range=null;var range__0=function(){return range.call(null,0,Number.MAX_VALUE,1)};var range__1=function(end){return range.call(null,0,end,1)};var range__2=function(start,end){return range.call(null,start,end,1)};var range__3=function(start,end,step){return new cljs.core.Range(null,start,end,step,null)};range=function(start,end,step){switch(arguments.length){case 0:return range__0.call(this);case 1:return range__1.call(this,start);case 2:return range__2.call(this,start,
end);case 3:return range__3.call(this,start,end,step)}throw new Error("Invalid arity: "+arguments.length);};range.cljs$core$IFn$_invoke$arity$0=range__0;range.cljs$core$IFn$_invoke$arity$1=range__1;range.cljs$core$IFn$_invoke$arity$2=range__2;range.cljs$core$IFn$_invoke$arity$3=range__3;return range}();
cljs.core.take_nth=function take_nth(n,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_nth.call(null,n,cljs.core.drop.call(null,n,s)))}else return null},null,null)};
cljs.core.split_with=function split_with(pred,coll){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)],null)};
cljs.core.partition_by=function partition_by(f,coll){return new cljs.core.LazySeq(null,function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;var fst=cljs.core.first.call(null,s);var fv=f.call(null,fst);var run=cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,function(fst,fv){return function(p1__10032_SHARP_){return cljs.core._EQ_.call(null,fv,f.call(null,p1__10032_SHARP_))}}(fst,fv),cljs.core.next.call(null,s)));return cljs.core.cons.call(null,
run,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))))}else return null},null,null)};cljs.core.frequencies=function frequencies(coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,function(counts,x){return cljs.core.assoc_BANG_.call(null,counts,x,cljs.core.get.call(null,counts,x,0)+1)},cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll))};
cljs.core.reductions=function(){var reductions=null;var reductions__2=function(f,coll){return new cljs.core.LazySeq(null,function(){var temp__4090__auto__=cljs.core.seq.call(null,coll);if(temp__4090__auto__){var s=temp__4090__auto__;return reductions.call(null,f,cljs.core.first.call(null,s),cljs.core.rest.call(null,s))}else return cljs.core._conj.call(null,cljs.core.List.EMPTY,f.call(null))},null,null)};var reductions__3=function(f,init,coll){return cljs.core.cons.call(null,init,new cljs.core.LazySeq(null,
function(){var temp__4092__auto__=cljs.core.seq.call(null,coll);if(temp__4092__auto__){var s=temp__4092__auto__;return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s)),cljs.core.rest.call(null,s))}else return null},null,null))};reductions=function(f,init,coll){switch(arguments.length){case 2:return reductions__2.call(this,f,init);case 3:return reductions__3.call(this,f,init,coll)}throw new Error("Invalid arity: "+arguments.length);};reductions.cljs$core$IFn$_invoke$arity$2=reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3=reductions__3;return reductions}();
cljs.core.juxt=function(){var juxt=null;var juxt__1=function(f){return function(){var G__10043=null;var G__10043__0=function(){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null)],null)};var G__10043__1=function(x){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x)],null)};var G__10043__2=function(x,y){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,
y)],null)};var G__10043__3=function(x,y,z){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z)],null)};var G__10043__4=function(){var G__10044__delegate=function(x,y,z,args){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args)],null)};var G__10044=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);
return G__10044__delegate.call(this,x,y,z,args)};G__10044.cljs$lang$maxFixedArity=3;G__10044.cljs$lang$applyTo=function(arglist__10045){var x=cljs.core.first(arglist__10045);arglist__10045=cljs.core.next(arglist__10045);var y=cljs.core.first(arglist__10045);arglist__10045=cljs.core.next(arglist__10045);var z=cljs.core.first(arglist__10045);var args=cljs.core.rest(arglist__10045);return G__10044__delegate(x,y,z,args)};G__10044.cljs$core$IFn$_invoke$arity$variadic=G__10044__delegate;return G__10044}();
G__10043=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return G__10043__0.call(this);case 1:return G__10043__1.call(this,x);case 2:return G__10043__2.call(this,x,y);case 3:return G__10043__3.call(this,x,y,z);default:return G__10043__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};G__10043.cljs$lang$maxFixedArity=3;G__10043.cljs$lang$applyTo=G__10043__4.cljs$lang$applyTo;return G__10043}()};
var juxt__2=function(f,g){return function(){var G__10046=null;var G__10046__0=function(){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null)],null)};var G__10046__1=function(x){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x)],null)};var G__10046__2=function(x,y){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,
x,y)],null)};var G__10046__3=function(x,y,z){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z)],null)};var G__10046__4=function(){var G__10047__delegate=function(x,y,z,args){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args)],null)};var G__10047=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=
cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__10047__delegate.call(this,x,y,z,args)};G__10047.cljs$lang$maxFixedArity=3;G__10047.cljs$lang$applyTo=function(arglist__10048){var x=cljs.core.first(arglist__10048);arglist__10048=cljs.core.next(arglist__10048);var y=cljs.core.first(arglist__10048);arglist__10048=cljs.core.next(arglist__10048);var z=cljs.core.first(arglist__10048);var args=cljs.core.rest(arglist__10048);return G__10047__delegate(x,y,z,args)};G__10047.cljs$core$IFn$_invoke$arity$variadic=
G__10047__delegate;return G__10047}();G__10046=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return G__10046__0.call(this);case 1:return G__10046__1.call(this,x);case 2:return G__10046__2.call(this,x,y);case 3:return G__10046__3.call(this,x,y,z);default:return G__10046__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};G__10046.cljs$lang$maxFixedArity=3;G__10046.cljs$lang$applyTo=G__10046__4.cljs$lang$applyTo;
return G__10046}()};var juxt__3=function(f,g,h){return function(){var G__10049=null;var G__10049__0=function(){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null),h.call(null)],null)};var G__10049__1=function(x){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x),h.call(null,x)],null)};var G__10049__2=function(x,y){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,
[f.call(null,x,y),g.call(null,x,y),h.call(null,x,y)],null)};var G__10049__3=function(x,y,z){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z)],null)};var G__10049__4=function(){var G__10050__delegate=function(x,y,z,args){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,
h,x,y,z,args)],null)};var G__10050=function(x,y,z,var_args){var args=null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__10050__delegate.call(this,x,y,z,args)};G__10050.cljs$lang$maxFixedArity=3;G__10050.cljs$lang$applyTo=function(arglist__10051){var x=cljs.core.first(arglist__10051);arglist__10051=cljs.core.next(arglist__10051);var y=cljs.core.first(arglist__10051);arglist__10051=cljs.core.next(arglist__10051);var z=cljs.core.first(arglist__10051);
var args=cljs.core.rest(arglist__10051);return G__10050__delegate(x,y,z,args)};G__10050.cljs$core$IFn$_invoke$arity$variadic=G__10050__delegate;return G__10050}();G__10049=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return G__10049__0.call(this);case 1:return G__10049__1.call(this,x);case 2:return G__10049__2.call(this,x,y);case 3:return G__10049__3.call(this,x,y,z);default:return G__10049__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+
arguments.length);};G__10049.cljs$lang$maxFixedArity=3;G__10049.cljs$lang$applyTo=G__10049__4.cljs$lang$applyTo;return G__10049}()};var juxt__4=function(){var G__10052__delegate=function(f,g,h,fs){var fs__$1=cljs.core.list_STAR_.call(null,f,g,h,fs);return function(){var G__10053=null;var G__10053__0=function(){return cljs.core.reduce.call(null,function(p1__10033_SHARP_,p2__10034_SHARP_){return cljs.core.conj.call(null,p1__10033_SHARP_,p2__10034_SHARP_.call(null))},cljs.core.PersistentVector.EMPTY,
fs__$1)};var G__10053__1=function(x){return cljs.core.reduce.call(null,function(p1__10035_SHARP_,p2__10036_SHARP_){return cljs.core.conj.call(null,p1__10035_SHARP_,p2__10036_SHARP_.call(null,x))},cljs.core.PersistentVector.EMPTY,fs__$1)};var G__10053__2=function(x,y){return cljs.core.reduce.call(null,function(p1__10037_SHARP_,p2__10038_SHARP_){return cljs.core.conj.call(null,p1__10037_SHARP_,p2__10038_SHARP_.call(null,x,y))},cljs.core.PersistentVector.EMPTY,fs__$1)};var G__10053__3=function(x,y,z){return cljs.core.reduce.call(null,
function(p1__10039_SHARP_,p2__10040_SHARP_){return cljs.core.conj.call(null,p1__10039_SHARP_,p2__10040_SHARP_.call(null,x,y,z))},cljs.core.PersistentVector.EMPTY,fs__$1)};var G__10053__4=function(){var G__10054__delegate=function(x,y,z,args){return cljs.core.reduce.call(null,function(p1__10041_SHARP_,p2__10042_SHARP_){return cljs.core.conj.call(null,p1__10041_SHARP_,cljs.core.apply.call(null,p2__10042_SHARP_,x,y,z,args))},cljs.core.PersistentVector.EMPTY,fs__$1)};var G__10054=function(x,y,z,var_args){var args=
null;if(arguments.length>3)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__10054__delegate.call(this,x,y,z,args)};G__10054.cljs$lang$maxFixedArity=3;G__10054.cljs$lang$applyTo=function(arglist__10055){var x=cljs.core.first(arglist__10055);arglist__10055=cljs.core.next(arglist__10055);var y=cljs.core.first(arglist__10055);arglist__10055=cljs.core.next(arglist__10055);var z=cljs.core.first(arglist__10055);var args=cljs.core.rest(arglist__10055);return G__10054__delegate(x,
y,z,args)};G__10054.cljs$core$IFn$_invoke$arity$variadic=G__10054__delegate;return G__10054}();G__10053=function(x,y,z,var_args){var args=var_args;switch(arguments.length){case 0:return G__10053__0.call(this);case 1:return G__10053__1.call(this,x);case 2:return G__10053__2.call(this,x,y);case 3:return G__10053__3.call(this,x,y,z);default:return G__10053__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+arguments.length);};G__10053.cljs$lang$maxFixedArity=
3;G__10053.cljs$lang$applyTo=G__10053__4.cljs$lang$applyTo;return G__10053}()};var G__10052=function(f,g,h,var_args){var fs=null;if(arguments.length>3)fs=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0);return G__10052__delegate.call(this,f,g,h,fs)};G__10052.cljs$lang$maxFixedArity=3;G__10052.cljs$lang$applyTo=function(arglist__10056){var f=cljs.core.first(arglist__10056);arglist__10056=cljs.core.next(arglist__10056);var g=cljs.core.first(arglist__10056);arglist__10056=cljs.core.next(arglist__10056);
var h=cljs.core.first(arglist__10056);var fs=cljs.core.rest(arglist__10056);return G__10052__delegate(f,g,h,fs)};G__10052.cljs$core$IFn$_invoke$arity$variadic=G__10052__delegate;return G__10052}();juxt=function(f,g,h,var_args){var fs=var_args;switch(arguments.length){case 1:return juxt__1.call(this,f);case 2:return juxt__2.call(this,f,g);case 3:return juxt__3.call(this,f,g,h);default:return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h,cljs.core.array_seq(arguments,3))}throw new Error("Invalid arity: "+
arguments.length);};juxt.cljs$lang$maxFixedArity=3;juxt.cljs$lang$applyTo=juxt__4.cljs$lang$applyTo;juxt.cljs$core$IFn$_invoke$arity$1=juxt__1;juxt.cljs$core$IFn$_invoke$arity$2=juxt__2;juxt.cljs$core$IFn$_invoke$arity$3=juxt__3;juxt.cljs$core$IFn$_invoke$arity$variadic=juxt__4.cljs$core$IFn$_invoke$arity$variadic;return juxt}();
cljs.core.dorun=function(){var dorun=null;var dorun__1=function(coll){while(true){if(cljs.core.seq.call(null,coll)){var G__10057=cljs.core.next.call(null,coll);coll=G__10057;continue}else return null;break}};var dorun__2=function(n,coll){while(true){if(cljs.core.seq.call(null,coll)&&n>0){var G__10058=n-1;var G__10059=cljs.core.next.call(null,coll);n=G__10058;coll=G__10059;continue}else return null;break}};dorun=function(n,coll){switch(arguments.length){case 1:return dorun__1.call(this,n);case 2:return dorun__2.call(this,
n,coll)}throw new Error("Invalid arity: "+arguments.length);};dorun.cljs$core$IFn$_invoke$arity$1=dorun__1;dorun.cljs$core$IFn$_invoke$arity$2=dorun__2;return dorun}();
cljs.core.doall=function(){var doall=null;var doall__1=function(coll){cljs.core.dorun.call(null,coll);return coll};var doall__2=function(n,coll){cljs.core.dorun.call(null,n,coll);return coll};doall=function(n,coll){switch(arguments.length){case 1:return doall__1.call(this,n);case 2:return doall__2.call(this,n,coll)}throw new Error("Invalid arity: "+arguments.length);};doall.cljs$core$IFn$_invoke$arity$1=doall__1;doall.cljs$core$IFn$_invoke$arity$2=doall__2;return doall}();
cljs.core.regexp_QMARK_=function regexp_QMARK_(o){return o instanceof RegExp};cljs.core.re_matches=function re_matches(re,s){var matches=re.exec(s);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches),s))if(cljs.core.count.call(null,matches)===1)return cljs.core.first.call(null,matches);else return cljs.core.vec.call(null,matches);else return null};
cljs.core.re_find=function re_find(re,s){var matches=re.exec(s);if(matches==null)return null;else if(cljs.core.count.call(null,matches)===1)return cljs.core.first.call(null,matches);else return cljs.core.vec.call(null,matches)};
cljs.core.re_seq=function re_seq(re,s){var match_data=cljs.core.re_find.call(null,re,s);var match_idx=s.search(re);var match_str=cljs.core.coll_QMARK_.call(null,match_data)?cljs.core.first.call(null,match_data):match_data;var post_match=cljs.core.subs.call(null,s,match_idx+cljs.core.count.call(null,match_str));if(cljs.core.truth_(match_data))return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,match_data,cljs.core.seq.call(null,post_match)?re_seq.call(null,re,post_match):null)},
null,null);else return null};cljs.core.re_pattern=function re_pattern(s){var vec__10061=cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _=cljs.core.nth.call(null,vec__10061,0,null);var flags=cljs.core.nth.call(null,vec__10061,1,null);var pattern=cljs.core.nth.call(null,vec__10061,2,null);return new RegExp(pattern,flags)};
cljs.core.pr_sequential_writer=function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_10063=cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_=cljs.core._STAR_print_level_STAR_==null?null:cljs.core._STAR_print_level_STAR_-1;if(!(cljs.core._STAR_print_level_STAR_==null)&&cljs.core._STAR_print_level_STAR_<0)return cljs.core._write.call(null,writer,"#");else{cljs.core._write.call(null,writer,begin);if(cljs.core.seq.call(null,coll))print_one.call(null,
cljs.core.first.call(null,coll),writer,opts);else;var coll_10064__$1=cljs.core.next.call(null,coll);var n_10065=(new cljs.core.Keyword(null,"print-length","print-length",3960797560)).cljs$core$IFn$_invoke$arity$1(opts);while(true){if(coll_10064__$1&&(n_10065==null||!(n_10065===0))){cljs.core._write.call(null,writer,sep);print_one.call(null,cljs.core.first.call(null,coll_10064__$1),writer,opts);var G__10066=cljs.core.next.call(null,coll_10064__$1);var G__10067=n_10065-1;coll_10064__$1=G__10066;n_10065=
G__10067;continue}else;break}if(cljs.core.truth_((new cljs.core.Keyword(null,"print-length","print-length",3960797560)).cljs$core$IFn$_invoke$arity$1(opts))){cljs.core._write.call(null,writer,sep);print_one.call(null,"...",writer,opts)}else;return cljs.core._write.call(null,writer,end)}}finally{cljs.core._STAR_print_level_STAR_=_STAR_print_level_STAR_10063}};
cljs.core.write_all=function(){var write_all__delegate=function(writer,ss){var seq__10072=cljs.core.seq.call(null,ss);var chunk__10073=null;var count__10074=0;var i__10075=0;while(true){if(i__10075<count__10074){var s=cljs.core._nth.call(null,chunk__10073,i__10075);cljs.core._write.call(null,writer,s);var G__10076=seq__10072;var G__10077=chunk__10073;var G__10078=count__10074;var G__10079=i__10075+1;seq__10072=G__10076;chunk__10073=G__10077;count__10074=G__10078;i__10075=G__10079;continue}else{var temp__4092__auto__=
cljs.core.seq.call(null,seq__10072);if(temp__4092__auto__){var seq__10072__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10072__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10072__$1);var G__10080=cljs.core.chunk_rest.call(null,seq__10072__$1);var G__10081=c__7480__auto__;var G__10082=cljs.core.count.call(null,c__7480__auto__);var G__10083=0;seq__10072=G__10080;chunk__10073=G__10081;count__10074=G__10082;i__10075=G__10083;continue}else{var s=cljs.core.first.call(null,
seq__10072__$1);cljs.core._write.call(null,writer,s);var G__10084=cljs.core.next.call(null,seq__10072__$1);var G__10085=null;var G__10086=0;var G__10087=0;seq__10072=G__10084;chunk__10073=G__10085;count__10074=G__10086;i__10075=G__10087;continue}}else return null}break}};var write_all=function(writer,var_args){var ss=null;if(arguments.length>1)ss=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return write_all__delegate.call(this,writer,ss)};write_all.cljs$lang$maxFixedArity=1;write_all.cljs$lang$applyTo=
function(arglist__10088){var writer=cljs.core.first(arglist__10088);var ss=cljs.core.rest(arglist__10088);return write_all__delegate(writer,ss)};write_all.cljs$core$IFn$_invoke$arity$variadic=write_all__delegate;return write_all}();cljs.core.string_print=function string_print(x){cljs.core._STAR_print_fn_STAR_.call(null,x);return null};cljs.core.flush=function flush(){return null};
cljs.core.char_escapes=function(){var obj10090={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj10090}();cljs.core.quote_string=function quote_string(s){return[cljs.core.str('"'),cljs.core.str(s.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(match){return cljs.core.char_escapes[match]})),cljs.core.str('"')].join("")};
cljs.core.pr_writer=function pr_writer(obj,writer,opts){if(obj==null)return cljs.core._write.call(null,writer,"nil");else if(void 0===obj)return cljs.core._write.call(null,writer,"#\x3cundefined\x3e");else if(new cljs.core.Keyword(null,"else","else",1017020587)){if(cljs.core.truth_(function(){var and__6720__auto__=cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"meta","meta",1017252215));if(cljs.core.truth_(and__6720__auto__)){var and__6720__auto____$1=function(){var G__10096=obj;if(G__10096){var bit__7382__auto__=
G__10096.cljs$lang$protocol_mask$partition0$&131072;if(bit__7382__auto__||G__10096.cljs$core$IMeta$)return true;else if(!G__10096.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__10096);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__10096)}();if(and__6720__auto____$1)return cljs.core.meta.call(null,obj);else return and__6720__auto____$1}else return and__6720__auto__}())){cljs.core._write.call(null,
writer,"^");pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);cljs.core._write.call(null,writer," ")}else;if(obj==null)return cljs.core._write.call(null,writer,"nil");else if(obj.cljs$lang$type)return obj.cljs$lang$ctorPrWriter(obj,writer,opts);else if(function(){var G__10097=obj;if(G__10097){var bit__7375__auto__=G__10097.cljs$lang$protocol_mask$partition0$&2147483648;if(bit__7375__auto__||G__10097.cljs$core$IPrintWithWriter$)return true;else return false}else return false}())return cljs.core._pr_writer.call(null,
obj,writer,opts);else if(cljs.core.type.call(null,obj)===Boolean||typeof obj==="number")return cljs.core._write.call(null,writer,[cljs.core.str(obj)].join(""));else if(cljs.core.object_QMARK_.call(null,obj)){cljs.core._write.call(null,writer,"#js ");return cljs.core.print_map.call(null,cljs.core.map.call(null,function(k){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,k),obj[k]],null)},cljs.core.js_keys.call(null,obj)),pr_writer,writer,
opts)}else if(obj instanceof Array)return cljs.core.pr_sequential_writer.call(null,writer,pr_writer,"#js ["," ","]",opts,obj);else if(goog.isString(obj))if(cljs.core.truth_((new cljs.core.Keyword(null,"readably","readably",4441712502)).cljs$core$IFn$_invoke$arity$1(opts)))return cljs.core._write.call(null,writer,cljs.core.quote_string.call(null,obj));else return cljs.core._write.call(null,writer,obj);else if(cljs.core.fn_QMARK_.call(null,obj))return cljs.core.write_all.call(null,writer,"#\x3c",[cljs.core.str(obj)].join(""),
"\x3e");else if(obj instanceof Date){var normalize=function(n,len){var ns=[cljs.core.str(n)].join("");while(true){if(cljs.core.count.call(null,ns)<len){var G__10099=[cljs.core.str("0"),cljs.core.str(ns)].join("");ns=G__10099;continue}else return ns;break}};return cljs.core.write_all.call(null,writer,'#inst "',[cljs.core.str(obj.getUTCFullYear())].join(""),"-",normalize.call(null,obj.getUTCMonth()+1,2),"-",normalize.call(null,obj.getUTCDate(),2),"T",normalize.call(null,obj.getUTCHours(),2),":",normalize.call(null,
obj.getUTCMinutes(),2),":",normalize.call(null,obj.getUTCSeconds(),2),".",normalize.call(null,obj.getUTCMilliseconds(),3),"-",'00:00"')}else if(cljs.core.regexp_QMARK_.call(null,obj))return cljs.core.write_all.call(null,writer,'#"',obj.source,'"');else if(function(){var G__10098=obj;if(G__10098){var bit__7382__auto__=G__10098.cljs$lang$protocol_mask$partition0$&2147483648;if(bit__7382__auto__||G__10098.cljs$core$IPrintWithWriter$)return true;else if(!G__10098.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IPrintWithWriter,G__10098);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__10098)}())return cljs.core._pr_writer.call(null,obj,writer,opts);else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.core.write_all.call(null,writer,"#\x3c",[cljs.core.str(obj)].join(""),"\x3e");else return null}else return null};
cljs.core.pr_seq_writer=function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);var seq__10104=cljs.core.seq.call(null,cljs.core.next.call(null,objs));var chunk__10105=null;var count__10106=0;var i__10107=0;while(true){if(i__10107<count__10106){var obj=cljs.core._nth.call(null,chunk__10105,i__10107);cljs.core._write.call(null,writer," ");cljs.core.pr_writer.call(null,obj,writer,opts);var G__10108=seq__10104;var G__10109=chunk__10105;var G__10110=
count__10106;var G__10111=i__10107+1;seq__10104=G__10108;chunk__10105=G__10109;count__10106=G__10110;i__10107=G__10111;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10104);if(temp__4092__auto__){var seq__10104__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10104__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10104__$1);var G__10112=cljs.core.chunk_rest.call(null,seq__10104__$1);var G__10113=c__7480__auto__;var G__10114=cljs.core.count.call(null,
c__7480__auto__);var G__10115=0;seq__10104=G__10112;chunk__10105=G__10113;count__10106=G__10114;i__10107=G__10115;continue}else{var obj=cljs.core.first.call(null,seq__10104__$1);cljs.core._write.call(null,writer," ");cljs.core.pr_writer.call(null,obj,writer,opts);var G__10116=cljs.core.next.call(null,seq__10104__$1);var G__10117=null;var G__10118=0;var G__10119=0;seq__10104=G__10116;chunk__10105=G__10117;count__10106=G__10118;i__10107=G__10119;continue}}else return null}break}};
cljs.core.pr_sb_with_opts=function pr_sb_with_opts(objs,opts){var sb=new goog.string.StringBuffer;var writer=new cljs.core.StringBufferWriter(sb);cljs.core.pr_seq_writer.call(null,objs,writer,opts);cljs.core._flush.call(null,writer);return sb};cljs.core.pr_str_with_opts=function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_.call(null,objs))return"";else return[cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join("")};
cljs.core.prn_str_with_opts=function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_.call(null,objs))return"\n";else{var sb=cljs.core.pr_sb_with_opts.call(null,objs,opts);sb.append("\n");return[cljs.core.str(sb)].join("")}};cljs.core.pr_with_opts=function pr_with_opts(objs,opts){return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts))};
cljs.core.newline=function newline(opts){cljs.core.string_print.call(null,"\n");if(cljs.core.truth_(cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857))))return cljs.core.flush.call(null);else return null};
cljs.core.pr_str=function(){var pr_str__delegate=function(objs){return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null))};var pr_str=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return pr_str__delegate.call(this,objs)};pr_str.cljs$lang$maxFixedArity=0;pr_str.cljs$lang$applyTo=function(arglist__10120){var objs=cljs.core.seq(arglist__10120);return pr_str__delegate(objs)};pr_str.cljs$core$IFn$_invoke$arity$variadic=
pr_str__delegate;return pr_str}();
cljs.core.prn_str=function(){var prn_str__delegate=function(objs){return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null))};var prn_str=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return prn_str__delegate.call(this,objs)};prn_str.cljs$lang$maxFixedArity=0;prn_str.cljs$lang$applyTo=function(arglist__10121){var objs=cljs.core.seq(arglist__10121);return prn_str__delegate(objs)};prn_str.cljs$core$IFn$_invoke$arity$variadic=
prn_str__delegate;return prn_str}();
cljs.core.pr=function(){var pr__delegate=function(objs){return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null))};var pr=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return pr__delegate.call(this,objs)};pr.cljs$lang$maxFixedArity=0;pr.cljs$lang$applyTo=function(arglist__10122){var objs=cljs.core.seq(arglist__10122);return pr__delegate(objs)};pr.cljs$core$IFn$_invoke$arity$variadic=pr__delegate;return pr}();
cljs.core.print=function(){var cljs_core_print__delegate=function(objs){return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false))};var cljs_core_print=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return cljs_core_print__delegate.call(this,objs)};cljs_core_print.cljs$lang$maxFixedArity=0;cljs_core_print.cljs$lang$applyTo=
function(arglist__10123){var objs=cljs.core.seq(arglist__10123);return cljs_core_print__delegate(objs)};cljs_core_print.cljs$core$IFn$_invoke$arity$variadic=cljs_core_print__delegate;return cljs_core_print}();
cljs.core.print_str=function(){var print_str__delegate=function(objs){return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false))};var print_str=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return print_str__delegate.call(this,objs)};print_str.cljs$lang$maxFixedArity=0;print_str.cljs$lang$applyTo=function(arglist__10124){var objs=
cljs.core.seq(arglist__10124);return print_str__delegate(objs)};print_str.cljs$core$IFn$_invoke$arity$variadic=print_str__delegate;return print_str}();
cljs.core.println=function(){var println__delegate=function(objs){cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false));if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));else return null};var println=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);
return println__delegate.call(this,objs)};println.cljs$lang$maxFixedArity=0;println.cljs$lang$applyTo=function(arglist__10125){var objs=cljs.core.seq(arglist__10125);return println__delegate(objs)};println.cljs$core$IFn$_invoke$arity$variadic=println__delegate;return println}();
cljs.core.println_str=function(){var println_str__delegate=function(objs){return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false))};var println_str=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return println_str__delegate.call(this,objs)};println_str.cljs$lang$maxFixedArity=0;println_str.cljs$lang$applyTo=
function(arglist__10126){var objs=cljs.core.seq(arglist__10126);return println_str__delegate(objs)};println_str.cljs$core$IFn$_invoke$arity$variadic=println_str__delegate;return println_str}();
cljs.core.prn=function(){var prn__delegate=function(objs){cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));else return null};var prn=function(var_args){var objs=null;if(arguments.length>0)objs=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return prn__delegate.call(this,objs)};prn.cljs$lang$maxFixedArity=0;prn.cljs$lang$applyTo=function(arglist__10127){var objs=
cljs.core.seq(arglist__10127);return prn__delegate(objs)};prn.cljs$core$IFn$_invoke$arity$variadic=prn__delegate;return prn}();cljs.core.print_map=function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer.call(null,writer,function(e,w,opts__$1){print_one.call(null,cljs.core.key.call(null,e),w,opts__$1);cljs.core._write.call(null,w," ");return print_one.call(null,cljs.core.val.call(null,e),w,opts__$1)},"{",", ","}",opts,cljs.core.seq.call(null,m))};
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1)};
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts)};cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts)};
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll__$1))};cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1)};cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1)};
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts)};cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1)};cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1)};cljs.core.List.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core._write.call(null,writer,"()")};cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1)};
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.Range.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$=true;cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$=true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var coll__$1=this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1)};cljs.core.PersistentVector.prototype.cljs$core$IComparable$=true;cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2=function(x,y){var x__$1=this;return cljs.core.compare_indexed.call(null,x__$1,y)};
cljs.core.Subvec.prototype.cljs$core$IComparable$=true;cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2=function(x,y){var x__$1=this;return cljs.core.compare_indexed.call(null,x__$1,y)};cljs.core.Keyword.prototype.cljs$core$IComparable$=true;cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2=function(x,y){var x__$1=this;return cljs.core.compare_symbols.call(null,x__$1,y)};cljs.core.Symbol.prototype.cljs$core$IComparable$=true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2=function(x,y){var x__$1=this;return cljs.core.compare_symbols.call(null,x__$1,y)};cljs.core.Atom=function(state,meta,validator,watches){this.state=state;this.meta=meta;this.validator=validator;this.watches=watches;this.cljs$lang$protocol_mask$partition0$=2153938944;this.cljs$lang$protocol_mask$partition1$=2};cljs.core.Atom.cljs$lang$type=true;cljs.core.Atom.cljs$lang$ctorStr="cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Atom")};cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1=function(this$){var self__=this;var this$__$1=this;return goog.getUid(this$__$1)};
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3=function(this$,oldval,newval){var self__=this;var this$__$1=this;var seq__10128=cljs.core.seq.call(null,self__.watches);var chunk__10129=null;var count__10130=0;var i__10131=0;while(true){if(i__10131<count__10130){var vec__10132=cljs.core._nth.call(null,chunk__10129,i__10131);var key=cljs.core.nth.call(null,vec__10132,0,null);var f=cljs.core.nth.call(null,vec__10132,1,null);f.call(null,key,this$__$1,oldval,newval);var G__10134=
seq__10128;var G__10135=chunk__10129;var G__10136=count__10130;var G__10137=i__10131+1;seq__10128=G__10134;chunk__10129=G__10135;count__10130=G__10136;i__10131=G__10137;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10128);if(temp__4092__auto__){var seq__10128__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10128__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10128__$1);var G__10138=cljs.core.chunk_rest.call(null,seq__10128__$1);var G__10139=
c__7480__auto__;var G__10140=cljs.core.count.call(null,c__7480__auto__);var G__10141=0;seq__10128=G__10138;chunk__10129=G__10139;count__10130=G__10140;i__10131=G__10141;continue}else{var vec__10133=cljs.core.first.call(null,seq__10128__$1);var key=cljs.core.nth.call(null,vec__10133,0,null);var f=cljs.core.nth.call(null,vec__10133,1,null);f.call(null,key,this$__$1,oldval,newval);var G__10142=cljs.core.next.call(null,seq__10128__$1);var G__10143=null;var G__10144=0;var G__10145=0;seq__10128=G__10142;
chunk__10129=G__10143;count__10130=G__10144;i__10131=G__10145;continue}}else return null}break}};cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3=function(this$,key,f){var self__=this;var this$__$1=this;return this$__$1.watches=cljs.core.assoc.call(null,self__.watches,key,f)};cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2=function(this$,key){var self__=this;var this$__$1=this;return this$__$1.watches=cljs.core.dissoc.call(null,self__.watches,key)};
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,writer,opts){var self__=this;var a__$1=this;cljs.core._write.call(null,writer,"#\x3cAtom: ");cljs.core.pr_writer.call(null,self__.state,writer,opts);return cljs.core._write.call(null,writer,"\x3e")};cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1=function(_){var self__=this;var ___$1=this;return self__.meta};cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1=function(_){var self__=this;var ___$1=this;return self__.state};
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2=function(o,other){var self__=this;var o__$1=this;return o__$1===other};cljs.core.__GT_Atom=function __GT_Atom(state,meta,validator,watches){return new cljs.core.Atom(state,meta,validator,watches)};
cljs.core.atom=function(){var atom=null;var atom__1=function(x){return new cljs.core.Atom(x,null,null,null)};var atom__2=function(){var G__10149__delegate=function(x,p__10146){var map__10148=p__10146;var map__10148__$1=cljs.core.seq_QMARK_.call(null,map__10148)?cljs.core.apply.call(null,cljs.core.hash_map,map__10148):map__10148;var validator=cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta=cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,
"meta","meta",1017252215));return new cljs.core.Atom(x,meta,validator,null)};var G__10149=function(x,var_args){var p__10146=null;if(arguments.length>1)p__10146=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return G__10149__delegate.call(this,x,p__10146)};G__10149.cljs$lang$maxFixedArity=1;G__10149.cljs$lang$applyTo=function(arglist__10150){var x=cljs.core.first(arglist__10150);var p__10146=cljs.core.rest(arglist__10150);return G__10149__delegate(x,p__10146)};G__10149.cljs$core$IFn$_invoke$arity$variadic=
G__10149__delegate;return G__10149}();atom=function(x,var_args){var p__10146=var_args;switch(arguments.length){case 1:return atom__1.call(this,x);default:return atom__2.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq(arguments,1))}throw new Error("Invalid arity: "+arguments.length);};atom.cljs$lang$maxFixedArity=1;atom.cljs$lang$applyTo=atom__2.cljs$lang$applyTo;atom.cljs$core$IFn$_invoke$arity$1=atom__1;atom.cljs$core$IFn$_invoke$arity$variadic=atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom}();
cljs.core.reset_BANG_=function reset_BANG_(a,new_value){var validate_10151=a.validator;if(validate_10151==null);else if(cljs.core.truth_(validate_10151.call(null,new_value)));else throw new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1233162959,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join(""));var old_value_10152=
a.state;a.state=new_value;if(a.watches==null);else cljs.core._notify_watches.call(null,a,old_value_10152,new_value);return new_value};
cljs.core.swap_BANG_=function(){var swap_BANG_=null;var swap_BANG___2=function(a,f){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state))};var swap_BANG___3=function(a,f,x){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x))};var swap_BANG___4=function(a,f,x,y){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y))};var swap_BANG___5=function(a,f,x,y,z){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z))};var swap_BANG___6=function(){var G__10153__delegate=
function(a,f,x,y,z,more){return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more))};var G__10153=function(a,f,x,y,z,var_args){var more=null;if(arguments.length>5)more=cljs.core.array_seq(Array.prototype.slice.call(arguments,5),0);return G__10153__delegate.call(this,a,f,x,y,z,more)};G__10153.cljs$lang$maxFixedArity=5;G__10153.cljs$lang$applyTo=function(arglist__10154){var a=cljs.core.first(arglist__10154);arglist__10154=cljs.core.next(arglist__10154);var f=cljs.core.first(arglist__10154);
arglist__10154=cljs.core.next(arglist__10154);var x=cljs.core.first(arglist__10154);arglist__10154=cljs.core.next(arglist__10154);var y=cljs.core.first(arglist__10154);arglist__10154=cljs.core.next(arglist__10154);var z=cljs.core.first(arglist__10154);var more=cljs.core.rest(arglist__10154);return G__10153__delegate(a,f,x,y,z,more)};G__10153.cljs$core$IFn$_invoke$arity$variadic=G__10153__delegate;return G__10153}();swap_BANG_=function(a,f,x,y,z,var_args){var more=var_args;switch(arguments.length){case 2:return swap_BANG___2.call(this,
a,f);case 3:return swap_BANG___3.call(this,a,f,x);case 4:return swap_BANG___4.call(this,a,f,x,y);case 5:return swap_BANG___5.call(this,a,f,x,y,z);default:return swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y,z,cljs.core.array_seq(arguments,5))}throw new Error("Invalid arity: "+arguments.length);};swap_BANG_.cljs$lang$maxFixedArity=5;swap_BANG_.cljs$lang$applyTo=swap_BANG___6.cljs$lang$applyTo;swap_BANG_.cljs$core$IFn$_invoke$arity$2=swap_BANG___2;swap_BANG_.cljs$core$IFn$_invoke$arity$3=
swap_BANG___3;swap_BANG_.cljs$core$IFn$_invoke$arity$4=swap_BANG___4;swap_BANG_.cljs$core$IFn$_invoke$arity$5=swap_BANG___5;swap_BANG_.cljs$core$IFn$_invoke$arity$variadic=swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;return swap_BANG_}();cljs.core.compare_and_set_BANG_=function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.call(null,a.state,oldval)){cljs.core.reset_BANG_.call(null,a,newval);return true}else return false};
cljs.core.deref=function deref(o){return cljs.core._deref.call(null,o)};cljs.core.set_validator_BANG_=function set_validator_BANG_(iref,val){return iref.validator=val};cljs.core.get_validator=function get_validator(iref){return iref.validator};
cljs.core.alter_meta_BANG_=function(){var alter_meta_BANG___delegate=function(iref,f,args){return iref.meta=cljs.core.apply.call(null,f,iref.meta,args)};var alter_meta_BANG_=function(iref,f,var_args){var args=null;if(arguments.length>2)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);return alter_meta_BANG___delegate.call(this,iref,f,args)};alter_meta_BANG_.cljs$lang$maxFixedArity=2;alter_meta_BANG_.cljs$lang$applyTo=function(arglist__10155){var iref=cljs.core.first(arglist__10155);
arglist__10155=cljs.core.next(arglist__10155);var f=cljs.core.first(arglist__10155);var args=cljs.core.rest(arglist__10155);return alter_meta_BANG___delegate(iref,f,args)};alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic=alter_meta_BANG___delegate;return alter_meta_BANG_}();cljs.core.reset_meta_BANG_=function reset_meta_BANG_(iref,m){return iref.meta=m};cljs.core.add_watch=function add_watch(iref,key,f){return cljs.core._add_watch.call(null,iref,key,f)};
cljs.core.remove_watch=function remove_watch(iref,key){return cljs.core._remove_watch.call(null,iref,key)};cljs.core.gensym_counter=null;
cljs.core.gensym=function(){var gensym=null;var gensym__0=function(){return gensym.call(null,"G__")};var gensym__1=function(prefix_string){if(cljs.core.gensym_counter==null)cljs.core.gensym_counter=cljs.core.atom.call(null,0);else;return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(""))};gensym=function(prefix_string){switch(arguments.length){case 0:return gensym__0.call(this);case 1:return gensym__1.call(this,
prefix_string)}throw new Error("Invalid arity: "+arguments.length);};gensym.cljs$core$IFn$_invoke$arity$0=gensym__0;gensym.cljs$core$IFn$_invoke$arity$1=gensym__1;return gensym}();cljs.core.fixture1=1;cljs.core.fixture2=2;cljs.core.Delay=function(state,f){this.state=state;this.f=f;this.cljs$lang$protocol_mask$partition1$=1;this.cljs$lang$protocol_mask$partition0$=32768};cljs.core.Delay.cljs$lang$type=true;cljs.core.Delay.cljs$lang$ctorStr="cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/Delay")};cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1=function(d){var self__=this;var d__$1=this;return(new cljs.core.Keyword(null,"done","done",1016993524)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))};
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1=function(_){var self__=this;var ___$1=this;return(new cljs.core.Keyword(null,"value","value",1125876963)).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,self__.state,function(p__10156){var map__10157=p__10156;var map__10157__$1=cljs.core.seq_QMARK_.call(null,map__10157)?cljs.core.apply.call(null,cljs.core.hash_map,map__10157):map__10157;var curr_state=map__10157__$1;var done=cljs.core.get.call(null,map__10157__$1,new cljs.core.Keyword(null,
"done","done",1016993524));if(cljs.core.truth_(done))return curr_state;else return new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,"done","done",1016993524),true,new cljs.core.Keyword(null,"value","value",1125876963),self__.f.call(null)],null)}))};cljs.core.__GT_Delay=function __GT_Delay(state,f){return new cljs.core.Delay(state,f)};cljs.core.delay_QMARK_=function delay_QMARK_(x){return x instanceof cljs.core.Delay};
cljs.core.force=function force(x){if(cljs.core.delay_QMARK_.call(null,x))return cljs.core.deref.call(null,x);else return x};cljs.core.realized_QMARK_=function realized_QMARK_(d){return cljs.core._realized_QMARK_.call(null,d)};cljs.core.IEncodeJS=function(){var obj10159={};return obj10159}();
cljs.core._clj__GT_js=function _clj__GT_js(x){if(function(){var and__6720__auto__=x;if(and__6720__auto__)return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;else return and__6720__auto__}())return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);else{var x__7359__auto__=x==null?null:x;return function(){var or__6732__auto__=cljs.core._clj__GT_js[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._clj__GT_js["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IEncodeJS.-clj-\x3ejs",x);}}().call(null,x)}};
cljs.core._key__GT_js=function _key__GT_js(x){if(function(){var and__6720__auto__=x;if(and__6720__auto__)return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;else return and__6720__auto__}())return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);else{var x__7359__auto__=x==null?null:x;return function(){var or__6732__auto__=cljs.core._key__GT_js[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._key__GT_js["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IEncodeJS.-key-\x3ejs",x);}}().call(null,x)}};
cljs.core.key__GT_js=function key__GT_js(k){if(function(){var G__10161=k;if(G__10161){var bit__7382__auto__=null;if(cljs.core.truth_(function(){var or__6732__auto__=bit__7382__auto__;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return G__10161.cljs$core$IEncodeJS$}()))return true;else if(!G__10161.cljs$lang$protocol_mask$partition$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__10161);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IEncodeJS,G__10161)}())return cljs.core._clj__GT_js.call(null,k);else if(typeof k==="string"||(typeof k==="number"||(k instanceof cljs.core.Keyword||k instanceof cljs.core.Symbol)))return cljs.core.clj__GT_js.call(null,k);else return cljs.core.pr_str.call(null,k)};
cljs.core.clj__GT_js=function clj__GT_js(x){if(x==null)return null;else if(function(){var G__10175=x;if(G__10175){var bit__7382__auto__=null;if(cljs.core.truth_(function(){var or__6732__auto__=bit__7382__auto__;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return G__10175.cljs$core$IEncodeJS$}()))return true;else if(!G__10175.cljs$lang$protocol_mask$partition$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__10175);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IEncodeJS,G__10175)}())return cljs.core._clj__GT_js.call(null,x);else if(x instanceof cljs.core.Keyword)return cljs.core.name.call(null,x);else if(x instanceof cljs.core.Symbol)return[cljs.core.str(x)].join("");else if(cljs.core.map_QMARK_.call(null,x)){var m=function(){var obj10177={};return obj10177}();var seq__10178_10188=cljs.core.seq.call(null,x);var chunk__10179_10189=null;var count__10180_10190=0;var i__10181_10191=0;while(true){if(i__10181_10191<count__10180_10190){var vec__10182_10192=
cljs.core._nth.call(null,chunk__10179_10189,i__10181_10191);var k_10193=cljs.core.nth.call(null,vec__10182_10192,0,null);var v_10194=cljs.core.nth.call(null,vec__10182_10192,1,null);m[cljs.core.key__GT_js.call(null,k_10193)]=clj__GT_js.call(null,v_10194);var G__10195=seq__10178_10188;var G__10196=chunk__10179_10189;var G__10197=count__10180_10190;var G__10198=i__10181_10191+1;seq__10178_10188=G__10195;chunk__10179_10189=G__10196;count__10180_10190=G__10197;i__10181_10191=G__10198;continue}else{var temp__4092__auto___10199=
cljs.core.seq.call(null,seq__10178_10188);if(temp__4092__auto___10199){var seq__10178_10200__$1=temp__4092__auto___10199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10178_10200__$1)){var c__7480__auto___10201=cljs.core.chunk_first.call(null,seq__10178_10200__$1);var G__10202=cljs.core.chunk_rest.call(null,seq__10178_10200__$1);var G__10203=c__7480__auto___10201;var G__10204=cljs.core.count.call(null,c__7480__auto___10201);var G__10205=0;seq__10178_10188=G__10202;chunk__10179_10189=G__10203;count__10180_10190=
G__10204;i__10181_10191=G__10205;continue}else{var vec__10183_10206=cljs.core.first.call(null,seq__10178_10200__$1);var k_10207=cljs.core.nth.call(null,vec__10183_10206,0,null);var v_10208=cljs.core.nth.call(null,vec__10183_10206,1,null);m[cljs.core.key__GT_js.call(null,k_10207)]=clj__GT_js.call(null,v_10208);var G__10209=cljs.core.next.call(null,seq__10178_10200__$1);var G__10210=null;var G__10211=0;var G__10212=0;seq__10178_10188=G__10209;chunk__10179_10189=G__10210;count__10180_10190=G__10211;
i__10181_10191=G__10212;continue}}else;}break}return m}else if(cljs.core.coll_QMARK_.call(null,x)){var arr=[];var seq__10184_10213=cljs.core.seq.call(null,cljs.core.map.call(null,clj__GT_js,x));var chunk__10185_10214=null;var count__10186_10215=0;var i__10187_10216=0;while(true){if(i__10187_10216<count__10186_10215){var x_10217__$1=cljs.core._nth.call(null,chunk__10185_10214,i__10187_10216);arr.push(x_10217__$1);var G__10218=seq__10184_10213;var G__10219=chunk__10185_10214;var G__10220=count__10186_10215;
var G__10221=i__10187_10216+1;seq__10184_10213=G__10218;chunk__10185_10214=G__10219;count__10186_10215=G__10220;i__10187_10216=G__10221;continue}else{var temp__4092__auto___10222=cljs.core.seq.call(null,seq__10184_10213);if(temp__4092__auto___10222){var seq__10184_10223__$1=temp__4092__auto___10222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10184_10223__$1)){var c__7480__auto___10224=cljs.core.chunk_first.call(null,seq__10184_10223__$1);var G__10225=cljs.core.chunk_rest.call(null,seq__10184_10223__$1);
var G__10226=c__7480__auto___10224;var G__10227=cljs.core.count.call(null,c__7480__auto___10224);var G__10228=0;seq__10184_10213=G__10225;chunk__10185_10214=G__10226;count__10186_10215=G__10227;i__10187_10216=G__10228;continue}else{var x_10229__$1=cljs.core.first.call(null,seq__10184_10223__$1);arr.push(x_10229__$1);var G__10230=cljs.core.next.call(null,seq__10184_10223__$1);var G__10231=null;var G__10232=0;var G__10233=0;seq__10184_10213=G__10230;chunk__10185_10214=G__10231;count__10186_10215=G__10232;
i__10187_10216=G__10233;continue}}else;}break}return arr}else if(new cljs.core.Keyword(null,"else","else",1017020587))return x;else return null};cljs.core.IEncodeClojure=function(){var obj10235={};return obj10235}();
cljs.core._js__GT_clj=function _js__GT_clj(x,options){if(function(){var and__6720__auto__=x;if(and__6720__auto__)return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;else return and__6720__auto__}())return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);else{var x__7359__auto__=x==null?null:x;return function(){var or__6732__auto__=cljs.core._js__GT_clj[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._js__GT_clj["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IEncodeClojure.-js-\x3eclj",x);}}().call(null,x,options)}};
cljs.core.js__GT_clj=function(){var js__GT_clj=null;var js__GT_clj__1=function(x){return js__GT_clj.call(null,x,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),false],null))};var js__GT_clj__2=function(){var G__10256__delegate=function(x,opts){if(function(){var G__10246=x;if(G__10246){var bit__7382__auto__=null;if(cljs.core.truth_(function(){var or__6732__auto__=bit__7382__auto__;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;
else return G__10246.cljs$core$IEncodeClojure$}()))return true;else if(!G__10246.cljs$lang$protocol_mask$partition$)return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__10246);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__10246)}())return cljs.core._js__GT_clj.call(null,x,cljs.core.apply.call(null,cljs.core.array_map,opts));else if(cljs.core.seq.call(null,opts)){var map__10247=opts;var map__10247__$1=cljs.core.seq_QMARK_.call(null,
map__10247)?cljs.core.apply.call(null,cljs.core.hash_map,map__10247):map__10247;var keywordize_keys=cljs.core.get.call(null,map__10247__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672));var keyfn=cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str;var f=function(map__10247,map__10247__$1,keywordize_keys,keyfn){return function thisfn(x__$1){if(cljs.core.seq_QMARK_.call(null,x__$1))return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x__$1));else if(cljs.core.coll_QMARK_.call(null,
x__$1))return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,thisfn,x__$1));else if(x__$1 instanceof Array)return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x__$1));else if(cljs.core.type.call(null,x__$1)===Object)return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){var iter__7449__auto__=function(map__10247,map__10247__$1,keywordize_keys,keyfn){return function iter__10252(s__10253){return new cljs.core.LazySeq(null,function(map__10247,
map__10247__$1,keywordize_keys,keyfn){return function(){var s__10253__$1=s__10253;while(true){var temp__4092__auto__=cljs.core.seq.call(null,s__10253__$1);if(temp__4092__auto__){var s__10253__$2=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10253__$2)){var c__7447__auto__=cljs.core.chunk_first.call(null,s__10253__$2);var size__7448__auto__=cljs.core.count.call(null,c__7447__auto__);var b__10255=cljs.core.chunk_buffer.call(null,size__7448__auto__);if(function(){var i__10254=0;while(true){if(i__10254<
size__7448__auto__){var k=cljs.core._nth.call(null,c__7447__auto__,i__10254);cljs.core.chunk_append.call(null,b__10255,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[keyfn.call(null,k),thisfn.call(null,x__$1[k])],null));var G__10257=i__10254+1;i__10254=G__10257;continue}else return true;break}}())return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10255),iter__10252.call(null,cljs.core.chunk_rest.call(null,s__10253__$2)));else return cljs.core.chunk_cons.call(null,
cljs.core.chunk.call(null,b__10255),null)}else{var k=cljs.core.first.call(null,s__10253__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[keyfn.call(null,k),thisfn.call(null,x__$1[k])],null),iter__10252.call(null,cljs.core.rest.call(null,s__10253__$2)))}}else return null;break}}}(map__10247,map__10247__$1,keywordize_keys,keyfn),null,null)}}(map__10247,map__10247__$1,keywordize_keys,keyfn);return iter__7449__auto__.call(null,cljs.core.js_keys.call(null,
x__$1))}());else if(new cljs.core.Keyword(null,"else","else",1017020587))return x__$1;else return null}}(map__10247,map__10247__$1,keywordize_keys,keyfn);return f.call(null,x)}else return null};var G__10256=function(x,var_args){var opts=null;if(arguments.length>1)opts=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return G__10256__delegate.call(this,x,opts)};G__10256.cljs$lang$maxFixedArity=1;G__10256.cljs$lang$applyTo=function(arglist__10258){var x=cljs.core.first(arglist__10258);
var opts=cljs.core.rest(arglist__10258);return G__10256__delegate(x,opts)};G__10256.cljs$core$IFn$_invoke$arity$variadic=G__10256__delegate;return G__10256}();js__GT_clj=function(x,var_args){var opts=var_args;switch(arguments.length){case 1:return js__GT_clj__1.call(this,x);default:return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq(arguments,1))}throw new Error("Invalid arity: "+arguments.length);};js__GT_clj.cljs$lang$maxFixedArity=1;js__GT_clj.cljs$lang$applyTo=js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1=js__GT_clj__1;js__GT_clj.cljs$core$IFn$_invoke$arity$variadic=js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;return js__GT_clj}();
cljs.core.memoize=function memoize(f){var mem=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return function(){var G__10259__delegate=function(args){var temp__4090__auto__=cljs.core.get.call(null,cljs.core.deref.call(null,mem),args);if(cljs.core.truth_(temp__4090__auto__)){var v=temp__4090__auto__;return v}else{var ret=cljs.core.apply.call(null,f,args);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,ret);return ret}};var G__10259=function(var_args){var args=null;if(arguments.length>
0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__10259__delegate.call(this,args)};G__10259.cljs$lang$maxFixedArity=0;G__10259.cljs$lang$applyTo=function(arglist__10260){var args=cljs.core.seq(arglist__10260);return G__10259__delegate(args)};G__10259.cljs$core$IFn$_invoke$arity$variadic=G__10259__delegate;return G__10259}()};
cljs.core.trampoline=function(){var trampoline=null;var trampoline__1=function(f){while(true){var ret=f.call(null);if(cljs.core.fn_QMARK_.call(null,ret)){var G__10261=ret;f=G__10261;continue}else return ret;break}};var trampoline__2=function(){var G__10262__delegate=function(f,args){return trampoline.call(null,function(){return cljs.core.apply.call(null,f,args)})};var G__10262=function(f,var_args){var args=null;if(arguments.length>1)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),
0);return G__10262__delegate.call(this,f,args)};G__10262.cljs$lang$maxFixedArity=1;G__10262.cljs$lang$applyTo=function(arglist__10263){var f=cljs.core.first(arglist__10263);var args=cljs.core.rest(arglist__10263);return G__10262__delegate(f,args)};G__10262.cljs$core$IFn$_invoke$arity$variadic=G__10262__delegate;return G__10262}();trampoline=function(f,var_args){var args=var_args;switch(arguments.length){case 1:return trampoline__1.call(this,f);default:return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f,
cljs.core.array_seq(arguments,1))}throw new Error("Invalid arity: "+arguments.length);};trampoline.cljs$lang$maxFixedArity=1;trampoline.cljs$lang$applyTo=trampoline__2.cljs$lang$applyTo;trampoline.cljs$core$IFn$_invoke$arity$1=trampoline__1;trampoline.cljs$core$IFn$_invoke$arity$variadic=trampoline__2.cljs$core$IFn$_invoke$arity$variadic;return trampoline}();
cljs.core.rand=function(){var rand=null;var rand__0=function(){return rand.call(null,1)};var rand__1=function(n){return Math.random.call(null)*n};rand=function(n){switch(arguments.length){case 0:return rand__0.call(this);case 1:return rand__1.call(this,n)}throw new Error("Invalid arity: "+arguments.length);};rand.cljs$core$IFn$_invoke$arity$0=rand__0;rand.cljs$core$IFn$_invoke$arity$1=rand__1;return rand}();
cljs.core.rand_int=function rand_int(n){return Math.floor.call(null,Math.random.call(null)*n)};cljs.core.rand_nth=function rand_nth(coll){return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)))};
cljs.core.group_by=function group_by(f,coll){return cljs.core.reduce.call(null,function(ret,x){var k=f.call(null,x);return cljs.core.assoc.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),x))},cljs.core.PersistentArrayMap.EMPTY,coll)};
cljs.core.make_hierarchy=function make_hierarchy(){return new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"descendants","descendants",768214664),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ancestors","ancestors",889955442),cljs.core.PersistentArrayMap.EMPTY],null)};cljs.core._global_hierarchy=null;
cljs.core.get_global_hierarchy=function get_global_hierarchy(){if(cljs.core._global_hierarchy==null)cljs.core._global_hierarchy=cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));else;return cljs.core._global_hierarchy};
cljs.core.swap_global_hierarchy_BANG_=function(){var swap_global_hierarchy_BANG___delegate=function(f,args){return cljs.core.apply.call(null,cljs.core.swap_BANG_,cljs.core.get_global_hierarchy.call(null),f,args)};var swap_global_hierarchy_BANG_=function(f,var_args){var args=null;if(arguments.length>1)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return swap_global_hierarchy_BANG___delegate.call(this,f,args)};swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity=1;swap_global_hierarchy_BANG_.cljs$lang$applyTo=
function(arglist__10264){var f=cljs.core.first(arglist__10264);var args=cljs.core.rest(arglist__10264);return swap_global_hierarchy_BANG___delegate(f,args)};swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic=swap_global_hierarchy_BANG___delegate;return swap_global_hierarchy_BANG_}();
cljs.core.isa_QMARK_=function(){var isa_QMARK_=null;var isa_QMARK___2=function(child,parent){return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),child,parent)};var isa_QMARK___3=function(h,child,parent){var or__6732__auto__=cljs.core._EQ_.call(null,child,parent);if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(h).call(null,
child),parent);if(or__6732__auto____$1)return or__6732__auto____$1;else{var and__6720__auto__=cljs.core.vector_QMARK_.call(null,parent);if(and__6720__auto__){var and__6720__auto____$1=cljs.core.vector_QMARK_.call(null,child);if(and__6720__auto____$1){var and__6720__auto____$2=cljs.core.count.call(null,parent)===cljs.core.count.call(null,child);if(and__6720__auto____$2){var ret=true;var i=0;while(true){if(!ret||i===cljs.core.count.call(null,parent))return ret;else{var G__10265=isa_QMARK_.call(null,
h,child.call(null,i),parent.call(null,i));var G__10266=i+1;ret=G__10265;i=G__10266;continue}break}}else return and__6720__auto____$2}else return and__6720__auto____$1}else return and__6720__auto__}}};isa_QMARK_=function(h,child,parent){switch(arguments.length){case 2:return isa_QMARK___2.call(this,h,child);case 3:return isa_QMARK___3.call(this,h,child,parent)}throw new Error("Invalid arity: "+arguments.length);};isa_QMARK_.cljs$core$IFn$_invoke$arity$2=isa_QMARK___2;isa_QMARK_.cljs$core$IFn$_invoke$arity$3=
isa_QMARK___3;return isa_QMARK_}();
cljs.core.parents=function(){var parents=null;var parents__1=function(tag){return parents.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag)};var parents__2=function(h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(h),tag))};parents=function(h,tag){switch(arguments.length){case 1:return parents__1.call(this,h);case 2:return parents__2.call(this,h,tag)}throw new Error("Invalid arity: "+
arguments.length);};parents.cljs$core$IFn$_invoke$arity$1=parents__1;parents.cljs$core$IFn$_invoke$arity$2=parents__2;return parents}();
cljs.core.ancestors=function(){var ancestors=null;var ancestors__1=function(tag){return ancestors.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag)};var ancestors__2=function(h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(h),tag))};ancestors=function(h,tag){switch(arguments.length){case 1:return ancestors__1.call(this,h);case 2:return ancestors__2.call(this,
h,tag)}throw new Error("Invalid arity: "+arguments.length);};ancestors.cljs$core$IFn$_invoke$arity$1=ancestors__1;ancestors.cljs$core$IFn$_invoke$arity$2=ancestors__2;return ancestors}();
cljs.core.descendants=function(){var descendants=null;var descendants__1=function(tag){return descendants.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag)};var descendants__2=function(h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,(new cljs.core.Keyword(null,"descendants","descendants",768214664)).cljs$core$IFn$_invoke$arity$1(h),tag))};descendants=function(h,tag){switch(arguments.length){case 1:return descendants__1.call(this,h);case 2:return descendants__2.call(this,
h,tag)}throw new Error("Invalid arity: "+arguments.length);};descendants.cljs$core$IFn$_invoke$arity$1=descendants__1;descendants.cljs$core$IFn$_invoke$arity$2=descendants__2;return descendants}();
cljs.core.derive=function(){var derive=null;var derive__2=function(tag,parent){if(cljs.core.truth_(cljs.core.namespace.call(null,parent)));else throw new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",-388313324,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null))))].join(""));cljs.core.swap_global_hierarchy_BANG_.call(null,derive,tag,parent);return null};var derive__3=function(h,tag,
parent){if(cljs.core.not_EQ_.call(null,tag,parent));else throw new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not\x3d","not\x3d",-1637144189,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null))))].join(""));var tp=(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(h);var td=(new cljs.core.Keyword(null,"descendants",
"descendants",768214664)).cljs$core$IFn$_invoke$arity$1(h);var ta=(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(h);var tf=function(tp,td,ta){return function(m,source,sources,target,targets){return cljs.core.reduce.call(null,function(tp,td,ta){return function(ret,k){return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,
target))))}}(tp,td,ta),m,cljs.core.cons.call(null,source,sources.call(null,source)))}}(tp,td,ta);var or__6732__auto__=cljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent)?null:function(){if(cljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent))throw new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join(""));else;if(cljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag))throw new Error([cljs.core.str("Cyclic derivation:"),
cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join(""));else;return new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.assoc.call(null,(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",889955442),tf.call(null,
(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",768214664),tf.call(null,(new cljs.core.Keyword(null,"descendants","descendants",768214664)).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)],null)}();if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return h};derive=function(h,tag,parent){switch(arguments.length){case 2:return derive__2.call(this,h,tag);case 3:return derive__3.call(this,
h,tag,parent)}throw new Error("Invalid arity: "+arguments.length);};derive.cljs$core$IFn$_invoke$arity$2=derive__2;derive.cljs$core$IFn$_invoke$arity$3=derive__3;return derive}();
cljs.core.underive=function(){var underive=null;var underive__2=function(tag,parent){cljs.core.swap_global_hierarchy_BANG_.call(null,underive,tag,parent);return null};var underive__3=function(h,tag,parent){var parentMap=(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(h);var childsParents=cljs.core.truth_(parentMap.call(null,tag))?cljs.core.disj.call(null,parentMap.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY;var newParents=cljs.core.truth_(cljs.core.not_empty.call(null,
childsParents))?cljs.core.assoc.call(null,parentMap,tag,childsParents):cljs.core.dissoc.call(null,parentMap,tag);var deriv_seq=cljs.core.flatten.call(null,cljs.core.map.call(null,function(parentMap,childsParents,newParents){return function(p1__10267_SHARP_){return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10267_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10267_SHARP_),cljs.core.second.call(null,p1__10267_SHARP_)))}}(parentMap,childsParents,newParents),cljs.core.seq.call(null,
newParents)));if(cljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))return cljs.core.reduce.call(null,function(p1__10268_SHARP_,p2__10269_SHARP_){return cljs.core.apply.call(null,cljs.core.derive,p1__10268_SHARP_,p2__10269_SHARP_)},cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq));else return h};underive=function(h,tag,parent){switch(arguments.length){case 2:return underive__2.call(this,h,tag);case 3:return underive__3.call(this,h,tag,parent)}throw new Error("Invalid arity: "+
arguments.length);};underive.cljs$core$IFn$_invoke$arity$2=underive__2;underive.cljs$core$IFn$_invoke$arity$3=underive__3;return underive}();cljs.core.reset_cache=function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.call(null,method_cache,function(_){return cljs.core.deref.call(null,method_table)});return cljs.core.swap_BANG_.call(null,cached_hierarchy,function(_){return cljs.core.deref.call(null,hierarchy)})};
cljs.core.prefers_STAR_=function prefers_STAR_(x,y,prefer_table){var xprefs=cljs.core.deref.call(null,prefer_table).call(null,x);var or__6732__auto__=cljs.core.truth_(function(){var and__6720__auto__=xprefs;if(cljs.core.truth_(and__6720__auto__))return xprefs.call(null,y);else return and__6720__auto__}())?true:null;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else{var or__6732__auto____$1=function(){var ps=cljs.core.parents.call(null,y);while(true){if(cljs.core.count.call(null,ps)>
0){if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps),prefer_table)));else;var G__10270=cljs.core.rest.call(null,ps);ps=G__10270;continue}else return null;break}}();if(cljs.core.truth_(or__6732__auto____$1))return or__6732__auto____$1;else{var or__6732__auto____$2=function(){var ps=cljs.core.parents.call(null,x);while(true){if(cljs.core.count.call(null,ps)>0){if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps),y,prefer_table)));else;var G__10271=cljs.core.rest.call(null,
ps);ps=G__10271;continue}else return null;break}}();if(cljs.core.truth_(or__6732__auto____$2))return or__6732__auto____$2;else return false}}};cljs.core.dominates=function dominates(x,y,prefer_table){var or__6732__auto__=cljs.core.prefers_STAR_.call(null,x,y,prefer_table);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.core.isa_QMARK_.call(null,x,y)};
cljs.core.find_and_cache_best_method=function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry=cljs.core.reduce.call(null,function(be,p__10274){var vec__10275=p__10274;var k=cljs.core.nth.call(null,vec__10275,0,null);var _=cljs.core.nth.call(null,vec__10275,1,null);var e=vec__10275;if(cljs.core.isa_QMARK_.call(null,cljs.core.deref.call(null,hierarchy),dispatch_val,k)){var be2=cljs.core.truth_(function(){var or__6732__auto__=
be==null;if(or__6732__auto__)return or__6732__auto__;else return cljs.core.dominates.call(null,k,cljs.core.first.call(null,be),prefer_table)}())?e:be;if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2),k,prefer_table)));else throw new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -\x3e "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,
be2)),cljs.core.str(", and neither is preferred")].join(""));return be2}else return be},null,cljs.core.deref.call(null,method_table));if(cljs.core.truth_(best_entry))if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))){cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry));return cljs.core.second.call(null,best_entry)}else{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,
hierarchy);return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy)}else return null};cljs.core.IMultiFn=function(){var obj10277={};return obj10277}();
cljs.core._reset=function _reset(mf){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_reset$arity$1;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_reset$arity$1(mf);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._reset[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._reset["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,
"IMultiFn.-reset",mf);}}().call(null,mf)}};
cljs.core._add_method=function _add_method(mf,dispatch_val,method){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_add_method$arity$3;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._add_method[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._add_method["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);}}().call(null,mf,dispatch_val,method)}};
cljs.core._remove_method=function _remove_method(mf,dispatch_val){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_remove_method$arity$2;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._remove_method[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._remove_method["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);}}().call(null,mf,dispatch_val)}};
cljs.core._prefer_method=function _prefer_method(mf,dispatch_val,dispatch_val_y){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_prefer_method$arity$3;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._prefer_method[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=
cljs.core._prefer_method["_"];if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);}}().call(null,mf,dispatch_val,dispatch_val_y)}};
cljs.core._get_method=function _get_method(mf,dispatch_val){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_get_method$arity$2;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._get_method[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._get_method["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);}}().call(null,mf,dispatch_val)}};
cljs.core._methods=function _methods(mf){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_methods$arity$1;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_methods$arity$1(mf);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._methods[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._methods["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);}}().call(null,mf)}};
cljs.core._prefers=function _prefers(mf){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_prefers$arity$1;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._prefers[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._prefers["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);}}().call(null,mf)}};
cljs.core._dispatch=function _dispatch(mf,args){if(function(){var and__6720__auto__=mf;if(and__6720__auto__)return mf.cljs$core$IMultiFn$_dispatch$arity$2;else return and__6720__auto__}())return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);else{var x__7359__auto__=mf==null?null:mf;return function(){var or__6732__auto__=cljs.core._dispatch[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.core._dispatch["_"];if(or__6732__auto____$1)return or__6732__auto____$1;
else throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);}}().call(null,mf,args)}};
cljs.core.do_dispatch=function do_dispatch(mf,name,dispatch_fn,args){var dispatch_val=cljs.core.apply.call(null,dispatch_fn,args);var target_fn=cljs.core._get_method.call(null,mf,dispatch_val);if(cljs.core.truth_(target_fn));else throw new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join(""));return cljs.core.apply.call(null,target_fn,args)};
cljs.core.MultiFn=function(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){this.name=name;this.dispatch_fn=dispatch_fn;this.default_dispatch_val=default_dispatch_val;this.hierarchy=hierarchy;this.method_table=method_table;this.prefer_table=prefer_table;this.method_cache=method_cache;this.cached_hierarchy=cached_hierarchy;this.cljs$lang$protocol_mask$partition0$=4194304;this.cljs$lang$protocol_mask$partition1$=256};
cljs.core.MultiFn.cljs$lang$type=true;cljs.core.MultiFn.cljs$lang$ctorStr="cljs.core/MultiFn";cljs.core.MultiFn.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/MultiFn")};cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1=function(this$){var self__=this;var this$__$1=this;return goog.getUid(this$__$1)};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1=function(mf){var self__=this;var mf__$1=this;cljs.core.swap_BANG_.call(null,self__.method_table,function(mf__$2){return cljs.core.PersistentArrayMap.EMPTY});cljs.core.swap_BANG_.call(null,self__.method_cache,function(mf__$2){return cljs.core.PersistentArrayMap.EMPTY});cljs.core.swap_BANG_.call(null,self__.prefer_table,function(mf__$2){return cljs.core.PersistentArrayMap.EMPTY});cljs.core.swap_BANG_.call(null,self__.cached_hierarchy,function(mf__$2){return null});
return mf__$1};cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3=function(mf,dispatch_val,method){var self__=this;var mf__$1=this;cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.assoc,dispatch_val,method);cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);return mf__$1};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2=function(mf,dispatch_val){var self__=this;var mf__$1=this;cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.dissoc,dispatch_val);cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);return mf__$1};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2=function(mf,dispatch_val){var self__=this;var mf__$1=this;if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.cached_hierarchy),cljs.core.deref.call(null,self__.hierarchy)));else cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);var temp__4090__auto__=cljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);if(cljs.core.truth_(temp__4090__auto__)){var target_fn=
temp__4090__auto__;return target_fn}else{var temp__4090__auto____$1=cljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4090__auto____$1)){var target_fn=temp__4090__auto____$1;return target_fn}else return cljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val)}};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3=function(mf,dispatch_val_x,dispatch_val_y){var self__=this;var mf__$1=this;if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))throw new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join(""));else;cljs.core.swap_BANG_.call(null,
self__.prefer_table,function(old){return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y))});return cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy)};cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1=function(mf){var self__=this;var mf__$1=this;return cljs.core.deref.call(null,self__.method_table)};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1=function(mf){var self__=this;var mf__$1=this;return cljs.core.deref.call(null,self__.prefer_table)};cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2=function(mf,args){var self__=this;var mf__$1=this;return cljs.core.do_dispatch.call(null,mf__$1,self__.name,self__.dispatch_fn,args)};
cljs.core.__GT_MultiFn=function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy)};
cljs.core.MultiFn.prototype.call=function(){var G__10278__delegate=function(_,args){var self=this;return cljs.core._dispatch.call(null,self,args)};var G__10278=function(_,var_args){var args=null;if(arguments.length>1)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return G__10278__delegate.call(this,_,args)};G__10278.cljs$lang$maxFixedArity=1;G__10278.cljs$lang$applyTo=function(arglist__10279){var _=cljs.core.first(arglist__10279);var args=cljs.core.rest(arglist__10279);return G__10278__delegate(_,
args)};G__10278.cljs$core$IFn$_invoke$arity$variadic=G__10278__delegate;return G__10278}();cljs.core.MultiFn.prototype.apply=function(_,args){var self=this;return cljs.core._dispatch.call(null,self,args)};cljs.core.remove_all_methods=function remove_all_methods(multifn){return cljs.core._reset.call(null,multifn)};cljs.core.remove_method=function remove_method(multifn,dispatch_val){return cljs.core._remove_method.call(null,multifn,dispatch_val)};
cljs.core.prefer_method=function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y)};cljs.core.methods$=function methods$(multifn){return cljs.core._methods.call(null,multifn)};cljs.core.get_method=function get_method(multifn,dispatch_val){return cljs.core._get_method.call(null,multifn,dispatch_val)};cljs.core.prefers=function prefers(multifn){return cljs.core._prefers.call(null,multifn)};
cljs.core.UUID=function(uuid){this.uuid=uuid;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2153775104};cljs.core.UUID.cljs$lang$type=true;cljs.core.UUID.cljs$lang$ctorStr="cljs.core/UUID";cljs.core.UUID.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.core/UUID")};
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1=function(this$){var self__=this;var this$__$1=this;return goog.string.hashCode(cljs.core.pr_str.call(null,this$__$1))};cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(_,writer,___$1){var self__=this;var ___$2=this;return cljs.core._write.call(null,writer,[cljs.core.str('#uuid "'),cljs.core.str(self__.uuid),cljs.core.str('"')].join(""))};
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2=function(_,other){var self__=this;var ___$1=this;return other instanceof cljs.core.UUID&&self__.uuid===other.uuid};cljs.core.__GT_UUID=function __GT_UUID(uuid){return new cljs.core.UUID(uuid)};cljs.core.ExceptionInfo=function(message,data,cause){this.message=message;this.data=data;this.cause=cause};cljs.core.ExceptionInfo.cljs$lang$type=true;cljs.core.ExceptionInfo.cljs$lang$ctorStr="cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter=function(this__7302__auto__,writer__7303__auto__,opts__7304__auto__){return cljs.core._write.call(null,writer__7303__auto__,"cljs.core/ExceptionInfo")};cljs.core.__GT_ExceptionInfo=function __GT_ExceptionInfo(message,data,cause){return new cljs.core.ExceptionInfo(message,data,cause)};cljs.core.ExceptionInfo.prototype=new Error;cljs.core.ExceptionInfo.prototype.constructor=cljs.core.ExceptionInfo;
cljs.core.ex_info=function(){var ex_info=null;var ex_info__2=function(msg,map){return new cljs.core.ExceptionInfo(msg,map,null)};var ex_info__3=function(msg,map,cause){return new cljs.core.ExceptionInfo(msg,map,cause)};ex_info=function(msg,map,cause){switch(arguments.length){case 2:return ex_info__2.call(this,msg,map);case 3:return ex_info__3.call(this,msg,map,cause)}throw new Error("Invalid arity: "+arguments.length);};ex_info.cljs$core$IFn$_invoke$arity$2=ex_info__2;ex_info.cljs$core$IFn$_invoke$arity$3=
ex_info__3;return ex_info}();cljs.core.ex_data=function ex_data(ex){if(ex instanceof cljs.core.ExceptionInfo)return ex.data;else return null};cljs.core.ex_message=function ex_message(ex){if(ex instanceof Error)return ex.message;else return null};cljs.core.ex_cause=function ex_cause(ex){if(ex instanceof cljs.core.ExceptionInfo)return ex.cause;else return null};
cljs.core.comparator=function comparator(pred){return function(x,y){if(cljs.core.truth_(pred.call(null,x,y)))return-1;else if(cljs.core.truth_(pred.call(null,y,x)))return 1;else if(new cljs.core.Keyword(null,"else","else",1017020587))return 0;else return null}};
cljs.core.special_symbol_QMARK_=function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null,new cljs.core.PersistentArrayMap(null,19,[new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"\x26","\x26",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),
null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,
"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"try","try",-1640416396,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null],null),null),x)};goog.provide("cljs.reader");goog.require("cljs.core");goog.require("goog.string");goog.require("goog.string");cljs.reader.PushbackReader=function(){var obj9137={};return obj9137}();
cljs.reader.read_char=function read_char(reader){if(function(){var and__6720__auto__=reader;if(and__6720__auto__)return reader.cljs$reader$PushbackReader$read_char$arity$1;else return and__6720__auto__}())return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);else{var x__7359__auto__=reader==null?null:reader;return function(){var or__6732__auto__=cljs.reader.read_char[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.reader.read_char["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);}}().call(null,reader)}};
cljs.reader.unread=function unread(reader,ch){if(function(){var and__6720__auto__=reader;if(and__6720__auto__)return reader.cljs$reader$PushbackReader$unread$arity$2;else return and__6720__auto__}())return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);else{var x__7359__auto__=reader==null?null:reader;return function(){var or__6732__auto__=cljs.reader.unread[goog.typeOf(x__7359__auto__)];if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.reader.unread["_"];
if(or__6732__auto____$1)return or__6732__auto____$1;else throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);}}().call(null,reader,ch)}};cljs.reader.StringPushbackReader=function(s,buffer,idx){this.s=s;this.buffer=buffer;this.idx=idx};cljs.reader.StringPushbackReader.cljs$lang$type=true;cljs.reader.StringPushbackReader.cljs$lang$ctorStr="cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"cljs.reader/StringPushbackReader")};cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$=true;cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1=function(reader){var self__=this;var reader__$1=this;if(self__.buffer.length===0){self__.idx=self__.idx+1;return self__.s[self__.idx]}else return self__.buffer.pop()};
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2=function(reader,ch){var self__=this;var reader__$1=this;return self__.buffer.push(ch)};cljs.reader.__GT_StringPushbackReader=function __GT_StringPushbackReader(s,buffer,idx){return new cljs.reader.StringPushbackReader(s,buffer,idx)};cljs.reader.push_back_reader=function push_back_reader(s){return new cljs.reader.StringPushbackReader(s,[],-1)};
cljs.reader.whitespace_QMARK_=function whitespace_QMARK_(ch){var or__6732__auto__=goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return","===ch};cljs.reader.numeric_QMARK_=function numeric_QMARK_(ch){return goog.string.isNumeric(ch)};cljs.reader.comment_prefix_QMARK_=function comment_prefix_QMARK_(ch){return";"===ch};
cljs.reader.number_literal_QMARK_=function number_literal_QMARK_(reader,initch){return cljs.reader.numeric_QMARK_.call(null,initch)||("+"===initch||"-"===initch)&&cljs.reader.numeric_QMARK_.call(null,function(){var next_ch=cljs.reader.read_char.call(null,reader);cljs.reader.unread.call(null,reader,next_ch);return next_ch}())};
cljs.reader.reader_error=function(){var reader_error__delegate=function(rdr,msg){throw new Error(cljs.core.apply.call(null,cljs.core.str,msg));};var reader_error=function(rdr,var_args){var msg=null;if(arguments.length>1)msg=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return reader_error__delegate.call(this,rdr,msg)};reader_error.cljs$lang$maxFixedArity=1;reader_error.cljs$lang$applyTo=function(arglist__9138){var rdr=cljs.core.first(arglist__9138);var msg=cljs.core.rest(arglist__9138);
return reader_error__delegate(rdr,msg)};reader_error.cljs$core$IFn$_invoke$arity$variadic=reader_error__delegate;return reader_error}();cljs.reader.macro_terminating_QMARK_=function macro_terminating_QMARK_(ch){var and__6720__auto__=!(ch==="#");if(and__6720__auto__){var and__6720__auto____$1=!(ch==="'");if(and__6720__auto____$1){var and__6720__auto____$2=!(ch===":");if(and__6720__auto____$2)return cljs.reader.macros.call(null,ch);else return and__6720__auto____$2}else return and__6720__auto____$1}else return and__6720__auto__};
cljs.reader.read_token=function read_token(rdr,initch){var sb=new goog.string.StringBuffer(initch);var ch=cljs.reader.read_char.call(null,rdr);while(true){if(ch==null||(cljs.reader.whitespace_QMARK_.call(null,ch)||cljs.reader.macro_terminating_QMARK_.call(null,ch))){cljs.reader.unread.call(null,rdr,ch);return sb.toString()}else{var G__9139=function(){sb.append(ch);return sb}();var G__9140=cljs.reader.read_char.call(null,rdr);sb=G__9139;ch=G__9140;continue}break}};
cljs.reader.skip_line=function skip_line(reader,_){while(true){var ch=cljs.reader.read_char.call(null,reader);if(ch==="\n"||(ch==="\r"||ch==null))return reader;else continue;break}};cljs.reader.int_pattern=cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");cljs.reader.ratio_pattern=cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");cljs.reader.float_pattern=cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern=cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");cljs.reader.re_find_STAR_=function re_find_STAR_(re,s){var matches=re.exec(s);if(matches==null)return null;else if(matches.length===1)return matches[0];else return matches};
cljs.reader.match_int=function match_int(s){var groups=cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);var group3=groups[2];if(!(group3==null||group3.length<1))return 0;else{var negate="-"===groups[1]?-1:1;var a=cljs.core.truth_(groups[3])?[groups[3],10]:cljs.core.truth_(groups[4])?[groups[4],16]:cljs.core.truth_(groups[5])?[groups[5],8]:cljs.core.truth_(groups[7])?[groups[7],parseInt(groups[7])]:new cljs.core.Keyword(null,"default","default",2558708147)?[null,null]:null;var n=a[0];
var radix=a[1];if(n==null)return null;else return negate*parseInt(n,radix)}};cljs.reader.match_ratio=function match_ratio(s){var groups=cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);var numinator=groups[1];var denominator=groups[2];return parseInt(numinator)/parseInt(denominator)};cljs.reader.match_float=function match_float(s){return parseFloat(s)};
cljs.reader.re_matches_STAR_=function re_matches_STAR_(re,s){var matches=re.exec(s);if(!(matches==null)&&matches[0]===s)if(matches.length===1)return matches[0];else return matches;else return null};
cljs.reader.match_number=function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))return cljs.reader.match_int.call(null,s);else if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))return cljs.reader.match_ratio.call(null,s);else if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))return cljs.reader.match_float.call(null,s);else return null};
cljs.reader.escape_char_map=function escape_char_map(c){if(c==="t")return"\t";else if(c==="r")return"\r";else if(c==="n")return"\n";else if(c==="\\")return"\\";else if(c==='"')return'"';else if(c==="b")return"\b";else if(c==="f")return"\f";else if(new cljs.core.Keyword(null,"else","else",1017020587))return null;else return null};cljs.reader.read_2_chars=function read_2_chars(reader){return(new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString()};
cljs.reader.read_4_chars=function read_4_chars(reader){return(new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString()};cljs.reader.unicode_2_pattern=cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");cljs.reader.unicode_4_pattern=cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape=function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))return unicode_str;else return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str)};cljs.reader.make_unicode_char=function make_unicode_char(code_str){var code=parseInt(code_str,16);return String.fromCharCode(code)};
cljs.reader.escape_char=function escape_char(buffer,reader){var ch=cljs.reader.read_char.call(null,reader);var mapresult=cljs.reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))return mapresult;else if(ch==="x")return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));else if(ch==="u")return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,
cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));else if(cljs.reader.numeric_QMARK_.call(null,ch))return String.fromCharCode(ch);else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);else return null};
cljs.reader.read_past=function read_past(pred,rdr){var ch=cljs.reader.read_char.call(null,rdr);while(true){if(cljs.core.truth_(pred.call(null,ch))){var G__9141=cljs.reader.read_char.call(null,rdr);ch=G__9141;continue}else return ch;break}};
cljs.reader.read_delimited_list=function read_delimited_list(delim,rdr,recursive_QMARK_){var a=cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){var ch=cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch));else cljs.reader.reader_error.call(null,rdr,"EOF while reading");if(delim===ch)return cljs.core.persistent_BANG_.call(null,a);else{var temp__4090__auto__=cljs.reader.macros.call(null,ch);if(cljs.core.truth_(temp__4090__auto__)){var macrofn=
temp__4090__auto__;var mret=macrofn.call(null,rdr,ch);var G__9142=mret===rdr?a:cljs.core.conj_BANG_.call(null,a,mret);a=G__9142;continue}else{cljs.reader.unread.call(null,rdr,ch);var o=cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);var G__9143=o===rdr?a:cljs.core.conj_BANG_.call(null,a,o);a=G__9143;continue}}break}};cljs.reader.not_implemented=function not_implemented(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet")};
cljs.reader.read_dispatch=function read_dispatch(rdr,_){var ch=cljs.reader.read_char.call(null,rdr);var dm=cljs.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))return dm.call(null,rdr,_);else{var temp__4090__auto__=cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4090__auto__)){var obj=temp__4090__auto__;return obj}else return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch)}};
cljs.reader.read_unmatched_delimiter=function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch)};cljs.reader.read_list=function read_list(rdr,_){return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true))};cljs.reader.read_comment=cljs.reader.skip_line;cljs.reader.read_vector=function read_vector(rdr,_){return cljs.reader.read_delimited_list.call(null,"]",rdr,true)};
cljs.reader.read_map=function read_map(rdr,_){var l=cljs.reader.read_delimited_list.call(null,"}",rdr,true);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");else;return cljs.core.apply.call(null,cljs.core.hash_map,l)};
cljs.reader.read_number=function read_number(reader,initch){var buffer=new goog.string.StringBuffer(initch);var ch=cljs.reader.read_char.call(null,reader);while(true){if(cljs.core.truth_(function(){var or__6732__auto__=ch==null;if(or__6732__auto__)return or__6732__auto__;else{var or__6732__auto____$1=cljs.reader.whitespace_QMARK_.call(null,ch);if(or__6732__auto____$1)return or__6732__auto____$1;else return cljs.reader.macros.call(null,ch)}}())){cljs.reader.unread.call(null,reader,ch);var s=buffer.toString();
var or__6732__auto__=cljs.reader.match_number.call(null,s);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]")}else{var G__9144=function(){buffer.append(ch);return buffer}();var G__9145=cljs.reader.read_char.call(null,reader);buffer=G__9144;ch=G__9145;continue}break}};
cljs.reader.read_string_STAR_=function read_string_STAR_(reader,_){var buffer=new goog.string.StringBuffer;var ch=cljs.reader.read_char.call(null,reader);while(true){if(ch==null)return cljs.reader.reader_error.call(null,reader,"EOF while reading");else if("\\"===ch){var G__9146=function(){buffer.append(cljs.reader.escape_char.call(null,buffer,reader));return buffer}();var G__9147=cljs.reader.read_char.call(null,reader);buffer=G__9146;ch=G__9147;continue}else if('"'===ch)return buffer.toString();else if(new cljs.core.Keyword(null,
"default","default",2558708147)){var G__9148=function(){buffer.append(ch);return buffer}();var G__9149=cljs.reader.read_char.call(null,reader);buffer=G__9148;ch=G__9149;continue}else return null;break}};cljs.reader.special_symbols=function special_symbols(t,not_found){if(t==="nil")return null;else if(t==="true")return true;else if(t==="false")return false;else if(new cljs.core.Keyword(null,"else","else",1017020587))return not_found;else return null};
cljs.reader.read_symbol=function read_symbol(reader,initch){var token=cljs.reader.read_token.call(null,reader,initch);if(cljs.core.truth_(goog.string.contains(token,"/")))return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,token.indexOf("/")+1,token.length));else return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token))};
cljs.reader.read_keyword=function read_keyword(reader,initch){var token=cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));var a=cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);var token__$1=a[0];var ns=a[1];var name=a[2];if(!(void 0===ns)&&ns.substring(ns.length-2,ns.length)===":/"||(name[name.length-1]===":"||!(token__$1.indexOf("::",1)===-1)))return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);else if(!(ns==null)&&
ns.length>0)return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);else return cljs.core.keyword.call(null,token__$1)};
cljs.reader.desugar_meta=function desugar_meta(f){if(f instanceof cljs.core.Symbol)return new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"tag","tag",1014018828),f],null);else if(typeof f==="string")return new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"tag","tag",1014018828),f],null);else if(f instanceof cljs.core.Keyword)return new cljs.core.PersistentArrayMap.fromArray([f,true],true,false);else if(new cljs.core.Keyword(null,"else","else",1017020587))return f;
else return null};cljs.reader.wrapping_reader=function wrapping_reader(sym){return function(rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,rdr,true,null,true)),sym)}};cljs.reader.throwing_reader=function throwing_reader(msg){return function(rdr,_){return cljs.reader.reader_error.call(null,rdr,msg)}};
cljs.reader.read_meta=function read_meta(rdr,_){var m=cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m));else cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");var o=cljs.reader.read.call(null,rdr,true,null,true);if(function(){var G__9151=o;if(G__9151){var bit__7382__auto__=G__9151.cljs$lang$protocol_mask$partition0$&262144;if(bit__7382__auto__||G__9151.cljs$core$IWithMeta$)return true;else if(!G__9151.cljs$lang$protocol_mask$partition0$)return cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IWithMeta,G__9151);else return false}else return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9151)}())return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));else return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas")};cljs.reader.read_set=function read_set(rdr,_){return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true))};
cljs.reader.read_regex=function read_regex(rdr,ch){return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch))};cljs.reader.read_discard=function read_discard(rdr,_){cljs.reader.read.call(null,rdr,true,null,true);return rdr};
cljs.reader.macros=function macros(c){if(c==='"')return cljs.reader.read_string_STAR_;else if(c===":")return cljs.reader.read_keyword;else if(c===";")return cljs.reader.read_comment;else if(c==="'")return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));else if(c==="@")return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));else if(c==="^")return cljs.reader.read_meta;else if(c==="`")return cljs.reader.not_implemented;
else if(c==="~")return cljs.reader.not_implemented;else if(c==="(")return cljs.reader.read_list;else if(c===")")return cljs.reader.read_unmatched_delimiter;else if(c==="[")return cljs.reader.read_vector;else if(c==="]")return cljs.reader.read_unmatched_delimiter;else if(c==="{")return cljs.reader.read_map;else if(c==="}")return cljs.reader.read_unmatched_delimiter;else if(c==="\\")return cljs.reader.read_char;else if(c==="#")return cljs.reader.read_dispatch;else if(new cljs.core.Keyword(null,"else",
"else",1017020587))return null;else return null};cljs.reader.dispatch_macros=function dispatch_macros(s){if(s==="{")return cljs.reader.read_set;else if(s==="\x3c")return cljs.reader.throwing_reader.call(null,"Unreadable form");else if(s==='"')return cljs.reader.read_regex;else if(s==="!")return cljs.reader.read_comment;else if(s==="_")return cljs.reader.read_discard;else if(new cljs.core.Keyword(null,"else","else",1017020587))return null;else return null};
cljs.reader.read=function read(reader,eof_is_error,sentinel,is_recursive){while(true){var ch=cljs.reader.read_char.call(null,reader);if(ch==null)if(cljs.core.truth_(eof_is_error))return cljs.reader.reader_error.call(null,reader,"EOF while reading");else return sentinel;else if(cljs.reader.whitespace_QMARK_.call(null,ch)){var G__9152=reader;var G__9153=eof_is_error;var G__9154=sentinel;var G__9155=is_recursive;reader=G__9152;eof_is_error=G__9153;sentinel=G__9154;is_recursive=G__9155;continue}else if(cljs.reader.comment_prefix_QMARK_.call(null,
ch)){var G__9156=cljs.reader.read_comment.call(null,reader,ch);var G__9157=eof_is_error;var G__9158=sentinel;var G__9159=is_recursive;reader=G__9156;eof_is_error=G__9157;sentinel=G__9158;is_recursive=G__9159;continue}else if(new cljs.core.Keyword(null,"else","else",1017020587)){var f=cljs.reader.macros.call(null,ch);var res=cljs.core.truth_(f)?f.call(null,reader,ch):cljs.reader.number_literal_QMARK_.call(null,reader,ch)?cljs.reader.read_number.call(null,reader,ch):new cljs.core.Keyword(null,"else",
"else",1017020587)?cljs.reader.read_symbol.call(null,reader,ch):null;if(res===reader){var G__9160=reader;var G__9161=eof_is_error;var G__9162=sentinel;var G__9163=is_recursive;reader=G__9160;eof_is_error=G__9161;sentinel=G__9162;is_recursive=G__9163;continue}else return res}else return null;break}};cljs.reader.read_string=function read_string(s){var r=cljs.reader.push_back_reader.call(null,s);return cljs.reader.read.call(null,r,true,null,false)};
cljs.reader.zero_fill_right_and_truncate=function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))return s;else if(width<cljs.core.count.call(null,s))return cljs.core.subs.call(null,s,0,width);else if(new cljs.core.Keyword(null,"else","else",1017020587)){var b=new goog.string.StringBuffer(s);while(true){if(b.getLength()<width){var G__9164=b.append("0");b=G__9164;continue}else return b.toString();break}}else return null};
cljs.reader.divisible_QMARK_=function divisible_QMARK_(num,div){return cljs.core.mod.call(null,num,div)===0};cljs.reader.indivisible_QMARK_=function indivisible_QMARK_(num,div){return!cljs.reader.divisible_QMARK_.call(null,num,div)};cljs.reader.leap_year_QMARK_=function leap_year_QMARK_(year){return cljs.reader.divisible_QMARK_.call(null,year,4)&&(cljs.reader.indivisible_QMARK_.call(null,year,100)||cljs.reader.divisible_QMARK_.call(null,year,400))};
cljs.reader.days_in_month=function(){var dim_norm=new cljs.core.PersistentVector(null,13,5,cljs.core.PersistentVector.EMPTY_NODE,[null,31,28,31,30,31,30,31,31,30,31,30,31],null);var dim_leap=new cljs.core.PersistentVector(null,13,5,cljs.core.PersistentVector.EMPTY_NODE,[null,31,29,31,30,31,30,31,31,30,31,30,31],null);return function(month,leap_year_QMARK_){return cljs.core.get.call(null,cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm,month)}}();cljs.reader.timestamp_regex=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int=function parse_int(s){var n=parseInt(s);if(cljs.core.not.call(null,isNaN(n)))return n;else return null};cljs.reader.check=function check(low,n,high,msg){if(low<=n&&n<=high);else cljs.reader.reader_error.call(null,null,[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("\x3c\x3d"),cljs.core.str(n),cljs.core.str("\x3c\x3d"),cljs.core.str(high)].join(""));return n};
cljs.reader.parse_and_validate_timestamp=function parse_and_validate_timestamp(s){var vec__9166=cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);var _=cljs.core.nth.call(null,vec__9166,0,null);var years=cljs.core.nth.call(null,vec__9166,1,null);var months=cljs.core.nth.call(null,vec__9166,2,null);var days=cljs.core.nth.call(null,vec__9166,3,null);var hours=cljs.core.nth.call(null,vec__9166,4,null);var minutes=cljs.core.nth.call(null,vec__9166,5,null);var seconds=cljs.core.nth.call(null,
vec__9166,6,null);var fraction=cljs.core.nth.call(null,vec__9166,7,null);var offset_sign=cljs.core.nth.call(null,vec__9166,8,null);var offset_hours=cljs.core.nth.call(null,vec__9166,9,null);var offset_minutes=cljs.core.nth.call(null,vec__9166,10,null);var v=vec__9166;if(cljs.core.not.call(null,v))return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join(""));else{var years__$1=cljs.reader.parse_int.call(null,years);var months__$1=function(){var or__6732__auto__=
cljs.reader.parse_int.call(null,months);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 1}();var days__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,days);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 1}();var hours__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,hours);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 0}();var minutes__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,
minutes);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 0}();var seconds__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,seconds);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 0}();var fraction__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,3));if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 0}();var offset_sign__$1=cljs.core._EQ_.call(null,
offset_sign,"-")?-1:1;var offset_hours__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,offset_hours);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 0}();var offset_minutes__$1=function(){var or__6732__auto__=cljs.reader.parse_int.call(null,offset_minutes);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 0}();var offset=offset_sign__$1*(offset_hours__$1*60+offset_minutes__$1);return new cljs.core.PersistentVector(null,8,5,cljs.core.PersistentVector.EMPTY_NODE,
[years__$1,cljs.reader.check.call(null,1,months__$1,12,"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,1,days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,0,hours__$1,23,"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,0,minutes__$1,59,"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,
0,seconds__$1,cljs.core._EQ_.call(null,minutes__$1,59)?60:59,"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,0,fraction__$1,999,"timestamp millisecond field must be in range 0..999"),offset],null)}};
cljs.reader.parse_timestamp=function parse_timestamp(ts){var temp__4090__auto__=cljs.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__)){var vec__9168=temp__4090__auto__;var years=cljs.core.nth.call(null,vec__9168,0,null);var months=cljs.core.nth.call(null,vec__9168,1,null);var days=cljs.core.nth.call(null,vec__9168,2,null);var hours=cljs.core.nth.call(null,vec__9168,3,null);var minutes=cljs.core.nth.call(null,vec__9168,4,null);var seconds=cljs.core.nth.call(null,
vec__9168,5,null);var ms=cljs.core.nth.call(null,vec__9168,6,null);var offset=cljs.core.nth.call(null,vec__9168,7,null);return new Date(Date.UTC(years,months-1,days,hours,minutes,seconds,ms)-offset*60*1E3)}else return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(""))};
cljs.reader.read_date=function read_date(s){if(typeof s==="string")return cljs.reader.parse_timestamp.call(null,s);else return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.")};cljs.reader.read_queue=function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);else return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.")};
cljs.reader.read_js=function read_js(form){if(cljs.core.vector_QMARK_.call(null,form)){var arr=[];var seq__9181_9193=cljs.core.seq.call(null,form);var chunk__9182_9194=null;var count__9183_9195=0;var i__9184_9196=0;while(true){if(i__9184_9196<count__9183_9195){var x_9197=cljs.core._nth.call(null,chunk__9182_9194,i__9184_9196);arr.push(x_9197);var G__9198=seq__9181_9193;var G__9199=chunk__9182_9194;var G__9200=count__9183_9195;var G__9201=i__9184_9196+1;seq__9181_9193=G__9198;chunk__9182_9194=G__9199;
count__9183_9195=G__9200;i__9184_9196=G__9201;continue}else{var temp__4092__auto___9202=cljs.core.seq.call(null,seq__9181_9193);if(temp__4092__auto___9202){var seq__9181_9203__$1=temp__4092__auto___9202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9181_9203__$1)){var c__7480__auto___9204=cljs.core.chunk_first.call(null,seq__9181_9203__$1);var G__9205=cljs.core.chunk_rest.call(null,seq__9181_9203__$1);var G__9206=c__7480__auto___9204;var G__9207=cljs.core.count.call(null,c__7480__auto___9204);var G__9208=
0;seq__9181_9193=G__9205;chunk__9182_9194=G__9206;count__9183_9195=G__9207;i__9184_9196=G__9208;continue}else{var x_9209=cljs.core.first.call(null,seq__9181_9203__$1);arr.push(x_9209);var G__9210=cljs.core.next.call(null,seq__9181_9203__$1);var G__9211=null;var G__9212=0;var G__9213=0;seq__9181_9193=G__9210;chunk__9182_9194=G__9211;count__9183_9195=G__9212;i__9184_9196=G__9213;continue}}else;}break}return arr}else if(cljs.core.map_QMARK_.call(null,form)){var obj=function(){var obj9186={};return obj9186}();
var seq__9187_9214=cljs.core.seq.call(null,form);var chunk__9188_9215=null;var count__9189_9216=0;var i__9190_9217=0;while(true){if(i__9190_9217<count__9189_9216){var vec__9191_9218=cljs.core._nth.call(null,chunk__9188_9215,i__9190_9217);var k_9219=cljs.core.nth.call(null,vec__9191_9218,0,null);var v_9220=cljs.core.nth.call(null,vec__9191_9218,1,null);obj[cljs.core.name.call(null,k_9219)]=v_9220;var G__9221=seq__9187_9214;var G__9222=chunk__9188_9215;var G__9223=count__9189_9216;var G__9224=i__9190_9217+
1;seq__9187_9214=G__9221;chunk__9188_9215=G__9222;count__9189_9216=G__9223;i__9190_9217=G__9224;continue}else{var temp__4092__auto___9225=cljs.core.seq.call(null,seq__9187_9214);if(temp__4092__auto___9225){var seq__9187_9226__$1=temp__4092__auto___9225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9187_9226__$1)){var c__7480__auto___9227=cljs.core.chunk_first.call(null,seq__9187_9226__$1);var G__9228=cljs.core.chunk_rest.call(null,seq__9187_9226__$1);var G__9229=c__7480__auto___9227;var G__9230=
cljs.core.count.call(null,c__7480__auto___9227);var G__9231=0;seq__9187_9214=G__9228;chunk__9188_9215=G__9229;count__9189_9216=G__9230;i__9190_9217=G__9231;continue}else{var vec__9192_9232=cljs.core.first.call(null,seq__9187_9226__$1);var k_9233=cljs.core.nth.call(null,vec__9192_9232,0,null);var v_9234=cljs.core.nth.call(null,vec__9192_9232,1,null);obj[cljs.core.name.call(null,k_9233)]=v_9234;var G__9235=cljs.core.next.call(null,seq__9187_9226__$1);var G__9236=null;var G__9237=0;var G__9238=0;seq__9187_9214=
G__9235;chunk__9188_9215=G__9236;count__9189_9216=G__9237;i__9190_9217=G__9238;continue}}else;}break}return obj}else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.reader.reader_error.call(null,null,[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join(""));else return null};
cljs.reader.read_uuid=function read_uuid(uuid){if(typeof uuid==="string")return new cljs.core.UUID(uuid);else return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.")};cljs.reader._STAR_tag_table_STAR_=cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null,4,["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js],null));
cljs.reader._STAR_default_data_reader_fn_STAR_=cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type=function maybe_read_tagged_type(rdr,initch){var tag=cljs.reader.read_symbol.call(null,rdr,initch);var pfn=cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),[cljs.core.str(tag)].join(""));var dfn=cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(pfn))return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));else if(cljs.core.truth_(dfn))return dfn.call(null,tag,cljs.reader.read.call(null,
rdr,true,null,false));else if(new cljs.core.Keyword(null,"else","else",1017020587))return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",[cljs.core.str(tag)].join("")," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));else return null};
cljs.reader.register_tag_parser_BANG_=function register_tag_parser_BANG_(tag,f){var tag__$1=[cljs.core.str(tag)].join("");var old_parser=cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);return old_parser};
cljs.reader.deregister_tag_parser_BANG_=function deregister_tag_parser_BANG_(tag){var tag__$1=[cljs.core.str(tag)].join("");var old_parser=cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);return old_parser};
cljs.reader.register_default_tag_parser_BANG_=function register_default_tag_parser_BANG_(f){var old_parser=cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,function(_){return f});return old_parser};
cljs.reader.deregister_default_tag_parser_BANG_=function deregister_default_tag_parser_BANG_(){var old_parser=cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,function(_){return null});return old_parser};goog.provide("tailrecursion.priority_map");goog.require("cljs.core");goog.require("cljs.reader");goog.require("cljs.reader");goog.require("cljs.core");goog.require("cljs.core");
tailrecursion.priority_map.PersistentPriorityMap=function(priority__GT_set_of_items,item__GT_priority,meta,__hash){this.priority__GT_set_of_items=priority__GT_set_of_items;this.item__GT_priority=item__GT_priority;this.meta=meta;this.__hash=__hash;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2565220111};tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type=true;tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr="tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"tailrecursion.priority-map/PersistentPriorityMap")};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1=function(this$){var self__=this;var this$__$1=this;var h__7143__auto__=self__.__hash;if(!(h__7143__auto__==null))return h__7143__auto__;else{var h__7143__auto____$1=cljs.core.hash_imap.call(null,this$__$1);self__.__hash=h__7143__auto____$1;return h__7143__auto____$1}};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(this$,item){var self__=this;var this$__$1=this;return cljs.core.get.call(null,self__.item__GT_priority,item)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(coll,item,not_found){var self__=this;var coll__$1=this;return cljs.core.get.call(null,self__.item__GT_priority,item,not_found)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(this$,item,priority){var self__=this;var this$__$1=this;var temp__4090__auto__=cljs.core.get.call(null,self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4090__auto__)){var current_priority=temp__4090__auto__;if(cljs.core._EQ_.call(null,current_priority,priority))return this$__$1;else{var item_set=cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);if(cljs.core._EQ_.call(null,
cljs.core.count.call(null,item_set),1))return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null);else return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,
self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null)}}else return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,
priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(this$,item){var self__=this;var this$__$1=this;return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.call=function(){var G__9123=null;var G__9123__2=function(self__,item){var self__=this;var self____$1=this;var this$=self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item)};var G__9123__3=function(self__,item,not_found){var self__=this;var self____$1=this;var this$=self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found)};G__9123=function(self__,item,not_found){switch(arguments.length){case 2:return G__9123__2.call(this,
self__,item);case 3:return G__9123__3.call(this,self__,item,not_found)}throw new Error("Invalid arity: "+arguments.length);};return G__9123}();tailrecursion.priority_map.PersistentPriorityMap.prototype.apply=function(self__,args9098){var self__=this;var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9098)))};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1=function(item){var self__=this;var this$=this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2=function(item,not_found){var self__=this;var this$=this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(coll,writer,opts){var self__=this;var coll__$1=this;var pr_pair=function(keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval)};return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2=function(this$,entry){var self__=this;var this$__$1=this;if(cljs.core.vector_QMARK_.call(null,entry))return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));else return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1=function(coll){var self__=this;var coll__$1=this;return cljs.core.seq.call(null,function(){var iter__7449__auto__=function iter__9099(s__9100){return new cljs.core.LazySeq(null,function(){var s__9100__$1=s__9100;while(true){var temp__4092__auto__=cljs.core.seq.call(null,s__9100__$1);if(temp__4092__auto__){var xs__4579__auto__=temp__4092__auto__;var vec__9106=cljs.core.first.call(null,xs__4579__auto__);var priority=
cljs.core.nth.call(null,vec__9106,0,null);var item_set=cljs.core.nth.call(null,vec__9106,1,null);var iterys__7445__auto__=function(s__9100__$1,vec__9106,priority,item_set,xs__4579__auto__,temp__4092__auto__){return function iter__9101(s__9102){return new cljs.core.LazySeq(null,function(s__9100__$1,vec__9106,priority,item_set,xs__4579__auto__,temp__4092__auto__){return function(){var s__9102__$1=s__9102;while(true){var temp__4092__auto____$1=cljs.core.seq.call(null,s__9102__$1);if(temp__4092__auto____$1){var s__9102__$2=
temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9102__$2)){var c__7447__auto__=cljs.core.chunk_first.call(null,s__9102__$2);var size__7448__auto__=cljs.core.count.call(null,c__7447__auto__);var b__9104=cljs.core.chunk_buffer.call(null,size__7448__auto__);if(function(){var i__9103=0;while(true){if(i__9103<size__7448__auto__){var item=cljs.core._nth.call(null,c__7447__auto__,i__9103);cljs.core.chunk_append.call(null,b__9104,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
[item,priority],null));var G__9124=i__9103+1;i__9103=G__9124;continue}else return true;break}}())return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9104),iter__9101.call(null,cljs.core.chunk_rest.call(null,s__9102__$2)));else return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9104),null)}else{var item=cljs.core.first.call(null,s__9102__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[item,priority],null),
iter__9101.call(null,cljs.core.rest.call(null,s__9102__$2)))}}else return null;break}}}(s__9100__$1,vec__9106,priority,item_set,xs__4579__auto__,temp__4092__auto__),null,null)}}(s__9100__$1,vec__9106,priority,item_set,xs__4579__auto__,temp__4092__auto__);var fs__7446__auto__=cljs.core.seq.call(null,iterys__7445__auto__.call(null,item_set));if(fs__7446__auto__)return cljs.core.concat.call(null,fs__7446__auto__,iter__9099.call(null,cljs.core.rest.call(null,s__9100__$1)));else{var G__9125=cljs.core.rest.call(null,
s__9100__$1);s__9100__$1=G__9125;continue}}else return null;break}},null,null)};return iter__7449__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items))}())};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2=function(this$,ascending_QMARK_){var self__=this;var this$__$1=this;return(cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3=function(this$,k,ascending_QMARK_){var self__=this;var this$__$1=this;var sets=cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k);return cljs.core.seq.call(null,function(){var iter__7449__auto__=function iter__9107(s__9108){return new cljs.core.LazySeq(null,
function(){var s__9108__$1=s__9108;while(true){var temp__4092__auto__=cljs.core.seq.call(null,s__9108__$1);if(temp__4092__auto__){var xs__4579__auto__=temp__4092__auto__;var vec__9114=cljs.core.first.call(null,xs__4579__auto__);var priority=cljs.core.nth.call(null,vec__9114,0,null);var item_set=cljs.core.nth.call(null,vec__9114,1,null);var iterys__7445__auto__=function(s__9108__$1,vec__9114,priority,item_set,xs__4579__auto__,temp__4092__auto__){return function iter__9109(s__9110){return new cljs.core.LazySeq(null,
function(s__9108__$1,vec__9114,priority,item_set,xs__4579__auto__,temp__4092__auto__){return function(){var s__9110__$1=s__9110;while(true){var temp__4092__auto____$1=cljs.core.seq.call(null,s__9110__$1);if(temp__4092__auto____$1){var s__9110__$2=temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9110__$2)){var c__7447__auto__=cljs.core.chunk_first.call(null,s__9110__$2);var size__7448__auto__=cljs.core.count.call(null,c__7447__auto__);var b__9112=cljs.core.chunk_buffer.call(null,
size__7448__auto__);if(function(){var i__9111=0;while(true){if(i__9111<size__7448__auto__){var item=cljs.core._nth.call(null,c__7447__auto__,i__9111);cljs.core.chunk_append.call(null,b__9112,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[item,priority],null));var G__9126=i__9111+1;i__9111=G__9126;continue}else return true;break}}())return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9112),iter__9109.call(null,cljs.core.chunk_rest.call(null,s__9110__$2)));
else return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9112),null)}else{var item=cljs.core.first.call(null,s__9110__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[item,priority],null),iter__9109.call(null,cljs.core.rest.call(null,s__9110__$2)))}}else return null;break}}}(s__9108__$1,vec__9114,priority,item_set,xs__4579__auto__,temp__4092__auto__),null,null)}}(s__9108__$1,vec__9114,priority,item_set,xs__4579__auto__,
temp__4092__auto__);var fs__7446__auto__=cljs.core.seq.call(null,iterys__7445__auto__.call(null,item_set));if(fs__7446__auto__)return cljs.core.concat.call(null,fs__7446__auto__,iter__9107.call(null,cljs.core.rest.call(null,s__9108__$1)));else{var G__9127=cljs.core.rest.call(null,s__9108__$1);s__9108__$1=G__9127;continue}}else return null;break}},null,null)};return iter__7449__auto__.call(null,sets)}())};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2=function(this$,entry){var self__=this;var this$__$1=this;return cljs.core.val.call(null,entry)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1=function(this$){var self__=this;var this$__$1=this;return cljs.core.compare};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(this$){var self__=this;var this$__$1=this;return cljs.core.seq.call(null,function(){var iter__7449__auto__=function iter__9115(s__9116){return new cljs.core.LazySeq(null,function(){var s__9116__$1=s__9116;while(true){var temp__4092__auto__=cljs.core.seq.call(null,s__9116__$1);if(temp__4092__auto__){var xs__4579__auto__=temp__4092__auto__;var vec__9122=cljs.core.first.call(null,xs__4579__auto__);var priority=
cljs.core.nth.call(null,vec__9122,0,null);var item_set=cljs.core.nth.call(null,vec__9122,1,null);var iterys__7445__auto__=function(s__9116__$1,vec__9122,priority,item_set,xs__4579__auto__,temp__4092__auto__){return function iter__9117(s__9118){return new cljs.core.LazySeq(null,function(s__9116__$1,vec__9122,priority,item_set,xs__4579__auto__,temp__4092__auto__){return function(){var s__9118__$1=s__9118;while(true){var temp__4092__auto____$1=cljs.core.seq.call(null,s__9118__$1);if(temp__4092__auto____$1){var s__9118__$2=
temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9118__$2)){var c__7447__auto__=cljs.core.chunk_first.call(null,s__9118__$2);var size__7448__auto__=cljs.core.count.call(null,c__7447__auto__);var b__9120=cljs.core.chunk_buffer.call(null,size__7448__auto__);if(function(){var i__9119=0;while(true){if(i__9119<size__7448__auto__){var item=cljs.core._nth.call(null,c__7447__auto__,i__9119);cljs.core.chunk_append.call(null,b__9120,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
[item,priority],null));var G__9128=i__9119+1;i__9119=G__9128;continue}else return true;break}}())return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9120),iter__9117.call(null,cljs.core.chunk_rest.call(null,s__9118__$2)));else return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9120),null)}else{var item=cljs.core.first.call(null,s__9118__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[item,priority],null),
iter__9117.call(null,cljs.core.rest.call(null,s__9118__$2)))}}else return null;break}}}(s__9116__$1,vec__9122,priority,item_set,xs__4579__auto__,temp__4092__auto__),null,null)}}(s__9116__$1,vec__9122,priority,item_set,xs__4579__auto__,temp__4092__auto__);var fs__7446__auto__=cljs.core.seq.call(null,iterys__7445__auto__.call(null,item_set));if(fs__7446__auto__)return cljs.core.concat.call(null,fs__7446__auto__,iter__9115.call(null,cljs.core.rest.call(null,s__9116__$1)));else{var G__9129=cljs.core.rest.call(null,
s__9116__$1);s__9116__$1=G__9129;continue}}else return null;break}},null,null)};return iter__7449__auto__.call(null,self__.priority__GT_set_of_items)}())};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1=function(this$){var self__=this;var this$__$1=this;return cljs.core.count.call(null,self__.item__GT_priority)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1=function(this$){var self__=this;var this$__$1=this;if(cljs.core.count.call(null,self__.item__GT_priority)===0)return null;else{var f=cljs.core.first.call(null,self__.priority__GT_set_of_items);return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)],null)}};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1=function(this$){var self__=this;var this$__$1=this;if(cljs.core.count.call(null,self__.item__GT_priority)===0)throw new Error("Can't pop empty priority map");else{var f=cljs.core.first.call(null,self__.priority__GT_set_of_items);var item_set=cljs.core.val.call(null,f);var item=cljs.core.first.call(null,item_set);var priority=cljs.core.key.call(null,f);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),
1))return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null);else return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null)}};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(this$,other){var self__=this;var this$__$1=this;return cljs.core._equiv.call(null,self__.item__GT_priority,other)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(this$,meta__$1){var self__=this;var this$__$1=this;return new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1=function(this$){var self__=this;var this$__$1=this;return self__.meta};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(this$){var self__=this;var this$__$1=this;return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(this$,item){var self__=this;var this$__$1=this;var priority=self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644));if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644)))return this$__$1;else{var item_set=
self__.priority__GT_set_of_items.call(null,priority);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null);else return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,
self__.item__GT_priority,item),self__.meta,null)}};tailrecursion.priority_map.__GT_PersistentPriorityMap=function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){return new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash)};
tailrecursion.priority_map.PersistentPriorityMap.EMPTY=new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null);tailrecursion.priority_map.pm_empty_by=function pm_empty_by(comparator){return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null)};
tailrecursion.priority_map.read_priority_map=function read_priority_map(elems){if(cljs.core.map_QMARK_.call(null,elems))return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);else return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.")};cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
tailrecursion.priority_map.priority_map=function(){var priority_map__delegate=function(keyvals){var in$=cljs.core.seq.call(null,keyvals);var out=tailrecursion.priority_map.PersistentPriorityMap.EMPTY;while(true){if(in$){var G__9130=cljs.core.nnext.call(null,in$);var G__9131=cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));in$=G__9130;out=G__9131;continue}else return out;break}};var priority_map=function(var_args){var keyvals=null;if(arguments.length>0)keyvals=
cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return priority_map__delegate.call(this,keyvals)};priority_map.cljs$lang$maxFixedArity=0;priority_map.cljs$lang$applyTo=function(arglist__9132){var keyvals=cljs.core.seq(arglist__9132);return priority_map__delegate(keyvals)};priority_map.cljs$core$IFn$_invoke$arity$variadic=priority_map__delegate;return priority_map}();
tailrecursion.priority_map.priority_map_by=function(){var priority_map_by__delegate=function(comparator,keyvals){var in$=cljs.core.seq.call(null,keyvals);var out=tailrecursion.priority_map.pm_empty_by.call(null,comparator);while(true){if(in$){var G__9133=cljs.core.nnext.call(null,in$);var G__9134=cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));in$=G__9133;out=G__9134;continue}else return out;break}};var priority_map_by=function(comparator,var_args){var keyvals=
null;if(arguments.length>1)keyvals=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return priority_map_by__delegate.call(this,comparator,keyvals)};priority_map_by.cljs$lang$maxFixedArity=1;priority_map_by.cljs$lang$applyTo=function(arglist__9135){var comparator=cljs.core.first(arglist__9135);var keyvals=cljs.core.rest(arglist__9135);return priority_map_by__delegate(comparator,keyvals)};priority_map_by.cljs$core$IFn$_invoke$arity$variadic=priority_map_by__delegate;return priority_map_by}();goog.provide("tailrecursion.javelin");goog.require("cljs.core");goog.require("tailrecursion.priority_map");goog.require("tailrecursion.priority_map");
tailrecursion.javelin.bf_seq=function bf_seq(branch_QMARK_,children,root){var walk=function walk(queue){var temp__4092__auto__=cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4092__auto__)){var node=temp__4092__auto__;return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null)))},null,null)}else return null};return walk.call(null,
cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root))};tailrecursion.javelin.last_rank=cljs.core.atom.call(null,0);tailrecursion.javelin.next_rank=function next_rank(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc)};tailrecursion.javelin.deref_STAR_=function deref_STAR_(x){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))return cljs.core.deref.call(null,x);else return x};
tailrecursion.javelin.propagate_BANG_=function propagate_BANG_(cell){var queue=tailrecursion.priority_map.priority_map.call(null,cell,cell.rank);while(true){if(cljs.core.seq.call(null,queue)){var next=cljs.core.key.call(null,cljs.core.peek.call(null,queue));var value=next.thunk.call(null);var continue_QMARK_=cljs.core.not_EQ_.call(null,value,next.prev);var reducer=function(queue,next,value,continue_QMARK_){return function(p1__8908_SHARP_,p2__8909_SHARP_){return cljs.core.assoc.call(null,p1__8908_SHARP_,
p2__8909_SHARP_,p2__8909_SHARP_.rank)}}(queue,next,value,continue_QMARK_);var siblings=cljs.core.pop.call(null,queue);var children=next.sinks;if(continue_QMARK_)next.prev=value;else;var G__8910=continue_QMARK_?cljs.core.reduce.call(null,reducer,siblings,children):siblings;queue=G__8910;continue}else return null;break}};
tailrecursion.javelin.destroy_cell_BANG_=function destroy_cell_BANG_(this$){var srcs=this$.sources;this$.sources=cljs.core.PersistentVector.EMPTY;this$.watches=cljs.core.PersistentArrayMap.EMPTY;var seq__8915=cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__8916=null;var count__8917=0;var i__8918=0;while(true){if(i__8918<count__8917){var src=cljs.core._nth.call(null,chunk__8916,i__8918);src.sinks=cljs.core.disj.call(null,src.sinks,this$);var G__8919=
seq__8915;var G__8920=chunk__8916;var G__8921=count__8917;var G__8922=i__8918+1;seq__8915=G__8919;chunk__8916=G__8920;count__8917=G__8921;i__8918=G__8922;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__8915);if(temp__4092__auto__){var seq__8915__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8915__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__8915__$1);var G__8923=cljs.core.chunk_rest.call(null,seq__8915__$1);var G__8924=c__7480__auto__;var G__8925=
cljs.core.count.call(null,c__7480__auto__);var G__8926=0;seq__8915=G__8923;chunk__8916=G__8924;count__8917=G__8925;i__8918=G__8926;continue}else{var src=cljs.core.first.call(null,seq__8915__$1);src.sinks=cljs.core.disj.call(null,src.sinks,this$);var G__8927=cljs.core.next.call(null,seq__8915__$1);var G__8928=null;var G__8929=0;var G__8930=0;seq__8915=G__8927;chunk__8916=G__8928;count__8917=G__8929;i__8918=G__8930;continue}}else return null}break}};
tailrecursion.javelin.set_formula_BANG_=function(){var set_formula_BANG___delegate=function(this$,p__8935){var vec__8956=p__8935;var f=cljs.core.nth.call(null,vec__8956,0,null);var sources=cljs.core.nth.call(null,vec__8956,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);this$.sources=cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources);var seq__8957_8976=cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,
this$.sources));var chunk__8958_8977=null;var count__8959_8978=0;var i__8960_8979=0;while(true){if(i__8960_8979<count__8959_8978){var source_8980=cljs.core._nth.call(null,chunk__8958_8977,i__8960_8979);source_8980.sinks=cljs.core.conj.call(null,source_8980.sinks,this$);if(source_8980.rank>this$.rank){var seq__8961_8981=cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,function(seq__8957_8976,chunk__8958_8977,count__8959_8978,i__8960_8979,source_8980){return function(p1__8931_SHARP_){return p1__8931_SHARP_.sinks}}(seq__8957_8976,
chunk__8958_8977,count__8959_8978,i__8960_8979,source_8980),source_8980));var chunk__8962_8982=null;var count__8963_8983=0;var i__8964_8984=0;while(true){if(i__8964_8984<count__8963_8983){var dep_8985=cljs.core._nth.call(null,chunk__8962_8982,i__8964_8984);dep_8985.rank=tailrecursion.javelin.next_rank.call(null);var G__8986=seq__8961_8981;var G__8987=chunk__8962_8982;var G__8988=count__8963_8983;var G__8989=i__8964_8984+1;seq__8961_8981=G__8986;chunk__8962_8982=G__8987;count__8963_8983=G__8988;i__8964_8984=
G__8989;continue}else{var temp__4092__auto___8990=cljs.core.seq.call(null,seq__8961_8981);if(temp__4092__auto___8990){var seq__8961_8991__$1=temp__4092__auto___8990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8961_8991__$1)){var c__7480__auto___8992=cljs.core.chunk_first.call(null,seq__8961_8991__$1);var G__8993=cljs.core.chunk_rest.call(null,seq__8961_8991__$1);var G__8994=c__7480__auto___8992;var G__8995=cljs.core.count.call(null,c__7480__auto___8992);var G__8996=0;seq__8961_8981=G__8993;chunk__8962_8982=
G__8994;count__8963_8983=G__8995;i__8964_8984=G__8996;continue}else{var dep_8997=cljs.core.first.call(null,seq__8961_8991__$1);dep_8997.rank=tailrecursion.javelin.next_rank.call(null);var G__8998=cljs.core.next.call(null,seq__8961_8991__$1);var G__8999=null;var G__9000=0;var G__9001=0;seq__8961_8981=G__8998;chunk__8962_8982=G__8999;count__8963_8983=G__9000;i__8964_8984=G__9001;continue}}else;}break}}else;var G__9002=seq__8957_8976;var G__9003=chunk__8958_8977;var G__9004=count__8959_8978;var G__9005=
i__8960_8979+1;seq__8957_8976=G__9002;chunk__8958_8977=G__9003;count__8959_8978=G__9004;i__8960_8979=G__9005;continue}else{var temp__4092__auto___9006=cljs.core.seq.call(null,seq__8957_8976);if(temp__4092__auto___9006){var seq__8957_9007__$1=temp__4092__auto___9006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8957_9007__$1)){var c__7480__auto___9008=cljs.core.chunk_first.call(null,seq__8957_9007__$1);var G__9009=cljs.core.chunk_rest.call(null,seq__8957_9007__$1);var G__9010=c__7480__auto___9008;
var G__9011=cljs.core.count.call(null,c__7480__auto___9008);var G__9012=0;seq__8957_8976=G__9009;chunk__8958_8977=G__9010;count__8959_8978=G__9011;i__8960_8979=G__9012;continue}else{var source_9013=cljs.core.first.call(null,seq__8957_9007__$1);source_9013.sinks=cljs.core.conj.call(null,source_9013.sinks,this$);if(source_9013.rank>this$.rank){var seq__8965_9014=cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,function(seq__8957_8976,chunk__8958_8977,count__8959_8978,
i__8960_8979,source_9013,seq__8957_9007__$1,temp__4092__auto___9006){return function(p1__8931_SHARP_){return p1__8931_SHARP_.sinks}}(seq__8957_8976,chunk__8958_8977,count__8959_8978,i__8960_8979,source_9013,seq__8957_9007__$1,temp__4092__auto___9006),source_9013));var chunk__8966_9015=null;var count__8967_9016=0;var i__8968_9017=0;while(true){if(i__8968_9017<count__8967_9016){var dep_9018=cljs.core._nth.call(null,chunk__8966_9015,i__8968_9017);dep_9018.rank=tailrecursion.javelin.next_rank.call(null);
var G__9019=seq__8965_9014;var G__9020=chunk__8966_9015;var G__9021=count__8967_9016;var G__9022=i__8968_9017+1;seq__8965_9014=G__9019;chunk__8966_9015=G__9020;count__8967_9016=G__9021;i__8968_9017=G__9022;continue}else{var temp__4092__auto___9023__$1=cljs.core.seq.call(null,seq__8965_9014);if(temp__4092__auto___9023__$1){var seq__8965_9024__$1=temp__4092__auto___9023__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8965_9024__$1)){var c__7480__auto___9025=cljs.core.chunk_first.call(null,seq__8965_9024__$1);
var G__9026=cljs.core.chunk_rest.call(null,seq__8965_9024__$1);var G__9027=c__7480__auto___9025;var G__9028=cljs.core.count.call(null,c__7480__auto___9025);var G__9029=0;seq__8965_9014=G__9026;chunk__8966_9015=G__9027;count__8967_9016=G__9028;i__8968_9017=G__9029;continue}else{var dep_9030=cljs.core.first.call(null,seq__8965_9024__$1);dep_9030.rank=tailrecursion.javelin.next_rank.call(null);var G__9031=cljs.core.next.call(null,seq__8965_9024__$1);var G__9032=null;var G__9033=0;var G__9034=0;seq__8965_9014=
G__9031;chunk__8966_9015=G__9032;count__8967_9016=G__9033;i__8968_9017=G__9034;continue}}else;}break}}else;var G__9035=cljs.core.next.call(null,seq__8957_9007__$1);var G__9036=null;var G__9037=0;var G__9038=0;seq__8957_8976=G__9035;chunk__8958_8977=G__9036;count__8959_8978=G__9037;i__8960_8979=G__9038;continue}}else;}break}var compute=function(p1__8932_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8932_SHARP_)),cljs.core.map.call(null,
tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__8932_SHARP_)))};var thunk=function(compute){return function(){var x=this$.state;var y=compute.call(null,this$.sources);var seq__8969_9039=cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__8970_9040=null;var count__8971_9041=0;var i__8972_9042=0;while(true){if(i__8972_9042<count__8971_9041){var vec__8973_9043=cljs.core._nth.call(null,
chunk__8970_9040,i__8972_9042);var k_9044=cljs.core.nth.call(null,vec__8973_9043,0,null);var f_9045__$1=cljs.core.nth.call(null,vec__8973_9043,1,null);f_9045__$1.call(null,k_9044,this$,x,y);var G__9046=seq__8969_9039;var G__9047=chunk__8970_9040;var G__9048=count__8971_9041;var G__9049=i__8972_9042+1;seq__8969_9039=G__9046;chunk__8970_9040=G__9047;count__8971_9041=G__9048;i__8972_9042=G__9049;continue}else{var temp__4092__auto___9050=cljs.core.seq.call(null,seq__8969_9039);if(temp__4092__auto___9050){var seq__8969_9051__$1=
temp__4092__auto___9050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8969_9051__$1)){var c__7480__auto___9052=cljs.core.chunk_first.call(null,seq__8969_9051__$1);var G__9053=cljs.core.chunk_rest.call(null,seq__8969_9051__$1);var G__9054=c__7480__auto___9052;var G__9055=cljs.core.count.call(null,c__7480__auto___9052);var G__9056=0;seq__8969_9039=G__9053;chunk__8970_9040=G__9054;count__8971_9041=G__9055;i__8972_9042=G__9056;continue}else{var vec__8974_9057=cljs.core.first.call(null,seq__8969_9051__$1);
var k_9058=cljs.core.nth.call(null,vec__8974_9057,0,null);var f_9059__$1=cljs.core.nth.call(null,vec__8974_9057,1,null);f_9059__$1.call(null,k_9058,this$,x,y);var G__9060=cljs.core.next.call(null,seq__8969_9051__$1);var G__9061=null;var G__9062=0;var G__9063=0;seq__8969_9039=G__9060;chunk__8970_9040=G__9061;count__8971_9041=G__9062;i__8972_9042=G__9063;continue}}else;}break}return this$.state=y}}(compute);var err_mesg="formula cell can't be updated via swap! or reset!";cljs.core._add_watch.call(null,
this$,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),cljs.core.truth_(f)?function(){throw new Error(err_mesg);}:function(p1__8934_SHARP_,p2__8933_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__8933_SHARP_)});this$.input_QMARK_=cljs.core.truth_(f)?false:true;this$.thunk=cljs.core.truth_(f)?thunk:function(){return cljs.core.deref.call(null,this$)};var G__8975=this$;tailrecursion.javelin.propagate_BANG_.call(null,G__8975);return G__8975};
var set_formula_BANG_=function(this$,var_args){var p__8935=null;if(arguments.length>1)p__8935=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return set_formula_BANG___delegate.call(this,this$,p__8935)};set_formula_BANG_.cljs$lang$maxFixedArity=1;set_formula_BANG_.cljs$lang$applyTo=function(arglist__9064){var this$=cljs.core.first(arglist__9064);var p__8935=cljs.core.rest(arglist__9064);return set_formula_BANG___delegate(this$,p__8935)};set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic=
set_formula_BANG___delegate;return set_formula_BANG_}();tailrecursion.javelin.Cell=function(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){this.meta=meta;this.state=state;this.rank=rank;this.prev=prev;this.sources=sources;this.sinks=sinks;this.thunk=thunk;this.watches=watches;this.input_QMARK_=input_QMARK_;this.cljs$lang$protocol_mask$partition1$=2;this.cljs$lang$protocol_mask$partition0$=2147647488};tailrecursion.javelin.Cell.cljs$lang$type=true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr="tailrecursion.javelin/Cell";tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter=function(this__7299__auto__,writer__7300__auto__,opt__7301__auto__){return cljs.core._write.call(null,writer__7300__auto__,"tailrecursion.javelin/Cell")};
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3=function(this$,oldval,newval){var self__=this;var this$__$1=this;var seq__9065=cljs.core.seq.call(null,self__.watches);var chunk__9066=null;var count__9067=0;var i__9068=0;while(true){if(i__9068<count__9067){var vec__9069=cljs.core._nth.call(null,chunk__9066,i__9068);var key=cljs.core.nth.call(null,vec__9069,0,null);var f=cljs.core.nth.call(null,vec__9069,1,null);f.call(null,key,this$__$1,oldval,newval);var G__9071=
seq__9065;var G__9072=chunk__9066;var G__9073=count__9067;var G__9074=i__9068+1;seq__9065=G__9071;chunk__9066=G__9072;count__9067=G__9073;i__9068=G__9074;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__9065);if(temp__4092__auto__){var seq__9065__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9065__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__9065__$1);var G__9075=cljs.core.chunk_rest.call(null,seq__9065__$1);var G__9076=c__7480__auto__;var G__9077=
cljs.core.count.call(null,c__7480__auto__);var G__9078=0;seq__9065=G__9075;chunk__9066=G__9076;count__9067=G__9077;i__9068=G__9078;continue}else{var vec__9070=cljs.core.first.call(null,seq__9065__$1);var key=cljs.core.nth.call(null,vec__9070,0,null);var f=cljs.core.nth.call(null,vec__9070,1,null);f.call(null,key,this$__$1,oldval,newval);var G__9079=cljs.core.next.call(null,seq__9065__$1);var G__9080=null;var G__9081=0;var G__9082=0;seq__9065=G__9079;chunk__9066=G__9080;count__9067=G__9081;i__9068=
G__9082;continue}}else return null}break}};tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3=function(this$,key,f){var self__=this;var this$__$1=this;return this$__$1.watches=cljs.core.assoc.call(null,self__.watches,key,f)};tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2=function(this$,key){var self__=this;var this$__$1=this;return this$__$1.watches=cljs.core.dissoc.call(null,self__.watches,key)};
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1=function(this$){var self__=this;var this$__$1=this;return this$__$1.state};tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1=function(this$){var self__=this;var this$__$1=this;return self__.meta};
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(this$,writer,opts){var self__=this;var this$__$1=this;return cljs.core.write_all.call(null,writer,"#\x3cCell: ",cljs.core.pr_str.call(null,self__.state),"\x3e")};tailrecursion.javelin.__GT_Cell=function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){return new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_)};
tailrecursion.javelin.lift=function lift(f){return function(){var G__9083__delegate=function(sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources)};var G__9083=function(var_args){var sources=null;if(arguments.length>0)sources=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9083__delegate.call(this,sources)};G__9083.cljs$lang$maxFixedArity=
0;G__9083.cljs$lang$applyTo=function(arglist__9084){var sources=cljs.core.seq(arglist__9084);return G__9083__delegate(sources)};G__9083.cljs$core$IFn$_invoke$arity$variadic=G__9083__delegate;return G__9083}()};
tailrecursion.javelin.cell=function cell(x){return tailrecursion.javelin.set_formula_BANG_.call(null,new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null))};tailrecursion.javelin.cell_QMARK_=function cell_QMARK_(c){if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))return c;else return null};
tailrecursion.javelin.input_QMARK_=function input_QMARK_(c){if(cljs.core.truth_(function(){var and__6720__auto__=tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__6720__auto__))return c.input_QMARK_;else return and__6720__auto__}()))return c;else return null};tailrecursion.javelin.set_cell_BANG_=function set_cell_BANG_(c,x){c.state=x;return tailrecursion.javelin.set_formula_BANG_.call(null,c)};
tailrecursion.javelin.alts_BANG_=function(){var alts_BANG___delegate=function(cells){var olds=cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)));var tag_neq=function(olds){return function(p1__9085_SHARP_,p2__9086_SHARP_){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__9085_SHARP_,p2__9086_SHARP_),p2__9086_SHARP_],
null)}}(olds);var diff=function(olds,tag_neq){return function(p1__9088_SHARP_,p2__9087_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__9088_SHARP_,p2__9087_SHARP_))))}}(olds,tag_neq);var proc=function(olds,tag_neq,diff){return function(){var G__9090__delegate=function(rest__9089_SHARP_){var news=diff.call(null,cljs.core.deref.call(null,olds),rest__9089_SHARP_);cljs.core.reset_BANG_.call(null,
olds,rest__9089_SHARP_);return news};var G__9090=function(var_args){var rest__9089_SHARP_=null;if(arguments.length>0)rest__9089_SHARP_=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__9090__delegate.call(this,rest__9089_SHARP_)};G__9090.cljs$lang$maxFixedArity=0;G__9090.cljs$lang$applyTo=function(arglist__9091){var rest__9089_SHARP_=cljs.core.seq(arglist__9091);return G__9090__delegate(rest__9089_SHARP_)};G__9090.cljs$core$IFn$_invoke$arity$variadic=G__9090__delegate;return G__9090}()}(olds,
tag_neq,diff);return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells)};var alts_BANG_=function(var_args){var cells=null;if(arguments.length>0)cells=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return alts_BANG___delegate.call(this,cells)};alts_BANG_.cljs$lang$maxFixedArity=0;alts_BANG_.cljs$lang$applyTo=function(arglist__9092){var cells=cljs.core.seq(arglist__9092);return alts_BANG___delegate(cells)};alts_BANG_.cljs$core$IFn$_invoke$arity$variadic=alts_BANG___delegate;
return alts_BANG_}();
tailrecursion.javelin.cell_map=function cell_map(f,c){var cseq=tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,c);var safe_nth=function(cseq){return function(p1__9093_SHARP_,p2__9094_SHARP_){try{return cljs.core.nth.call(null,p1__9093_SHARP_,p2__9094_SHARP_)}catch(e9097){if(e9097 instanceof Error){var _=e9097;return null}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw e9097;else return null}}}(cseq);return cljs.core.map.call(null,function(p1__9095_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,
f,safe_nth)).call(null,cseq,p1__9095_SHARP_)},cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))))};goog.provide("clojure.string");goog.require("cljs.core");goog.require("goog.string.StringBuffer");goog.require("goog.string.StringBuffer");goog.require("goog.string");goog.require("goog.string");clojure.string.seq_reverse=function seq_reverse(coll){return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll)};clojure.string.reverse=function reverse(s){return s.split("").reverse().join("")};
clojure.string.replace=function replace(s,match,replacement){if(typeof match==="string")return s.replace(new RegExp(goog.string.regExpEscape(match),"g"),replacement);else if(cljs.core.truth_(match.hasOwnProperty("source")))return s.replace(new RegExp(match.source,"g"),replacement);else if(new cljs.core.Keyword(null,"else","else",1017020587))throw[cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join("");else return null};
clojure.string.replace_first=function replace_first(s,match,replacement){return s.replace(match,replacement)};
clojure.string.join=function(){var join=null;var join__1=function(coll){return cljs.core.apply.call(null,cljs.core.str,coll)};var join__2=function(separator,coll){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll))};join=function(separator,coll){switch(arguments.length){case 1:return join__1.call(this,separator);case 2:return join__2.call(this,separator,coll)}throw new Error("Invalid arity: "+arguments.length);};join.cljs$core$IFn$_invoke$arity$1=join__1;
join.cljs$core$IFn$_invoke$arity$2=join__2;return join}();clojure.string.upper_case=function upper_case(s){return s.toUpperCase()};clojure.string.lower_case=function lower_case(s){return s.toLowerCase()};
clojure.string.capitalize=function capitalize(s){if(cljs.core.count.call(null,s)<2)return clojure.string.upper_case.call(null,s);else return[cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join("")};
clojure.string.pop_last_while_empty=function pop_last_while_empty(v){var v__$1=v;while(true){if(cljs.core._EQ_.call(null,"",cljs.core.peek.call(null,v__$1))){var G__10280=cljs.core.pop.call(null,v__$1);v__$1=G__10280;continue}else return v__$1;break}};clojure.string.discard_trailing_if_needed=function discard_trailing_if_needed(limit,v){if(cljs.core._EQ_.call(null,0,limit))return clojure.string.pop_last_while_empty.call(null,v);else return v};
clojure.string.split_with_empty_regex=function split_with_empty_regex(s,limit){if(limit<=0||limit>=2+cljs.core.count.call(null,s))return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s)))),"");else{var pred__10284=cljs.core._EQ_;var expr__10285=limit;if(cljs.core.truth_(pred__10284.call(null,1,expr__10285)))return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[s],null);else if(cljs.core.truth_(pred__10284.call(null,
2,expr__10285)))return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,["",s],null);else{var c=limit-2;return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s))),0,c))),cljs.core.subs.call(null,s,c))}}};
clojure.string.split=function(){var split=null;var split__2=function(s,re){return split.call(null,s,re,0)};var split__3=function(s,re,limit){return clojure.string.discard_trailing_if_needed.call(null,limit,cljs.core._EQ_.call(null,[cljs.core.str(re)].join(""),"/(?:)/")?clojure.string.split_with_empty_regex.call(null,s,limit):limit<1?cljs.core.vec.call(null,[cljs.core.str(s)].join("").split(re)):function(){var s__$1=s;var limit__$1=limit;var parts=cljs.core.PersistentVector.EMPTY;while(true){if(cljs.core._EQ_.call(null,
limit__$1,1))return cljs.core.conj.call(null,parts,s__$1);else{var temp__4090__auto__=cljs.core.re_find.call(null,re,s__$1);if(cljs.core.truth_(temp__4090__auto__)){var m=temp__4090__auto__;var index=s__$1.indexOf(m);var G__10287=s__$1.substring(index+cljs.core.count.call(null,m));var G__10288=limit__$1-1;var G__10289=cljs.core.conj.call(null,parts,s__$1.substring(0,index));s__$1=G__10287;limit__$1=G__10288;parts=G__10289;continue}else return cljs.core.conj.call(null,parts,s__$1)}break}}())};split=
function(s,re,limit){switch(arguments.length){case 2:return split__2.call(this,s,re);case 3:return split__3.call(this,s,re,limit)}throw new Error("Invalid arity: "+arguments.length);};split.cljs$core$IFn$_invoke$arity$2=split__2;split.cljs$core$IFn$_invoke$arity$3=split__3;return split}();clojure.string.split_lines=function split_lines(s){return clojure.string.split.call(null,s,/\n|\r\n/)};clojure.string.trim=function trim(s){return goog.string.trim(s)};clojure.string.triml=function triml(s){return goog.string.trimLeft(s)};
clojure.string.trimr=function trimr(s){return goog.string.trimRight(s)};clojure.string.trim_newline=function trim_newline(s){var index=s.length;while(true){if(index===0)return"";else{var ch=cljs.core.get.call(null,s,index-1);if(cljs.core._EQ_.call(null,ch,"\n")||cljs.core._EQ_.call(null,ch,"\r")){var G__10290=index-1;index=G__10290;continue}else return s.substring(0,index)}break}};clojure.string.blank_QMARK_=function blank_QMARK_(s){return goog.string.isEmptySafe(s)};
clojure.string.escape=function escape__$1(s,cmap){var buffer=new goog.string.StringBuffer;var length=s.length;var index=0;while(true){if(cljs.core._EQ_.call(null,length,index))return buffer.toString();else{var ch=s.charAt(index);var temp__4090__auto___10291=cljs.core.get.call(null,cmap,ch);if(cljs.core.truth_(temp__4090__auto___10291)){var replacement_10292=temp__4090__auto___10291;buffer.append([cljs.core.str(replacement_10292)].join(""))}else buffer.append(ch);var G__10293=index+1;index=G__10293;
continue}break}};goog.provide("tailrecursion.hoplon");goog.require("cljs.core");goog.require("tailrecursion.javelin");goog.require("cljs.reader");goog.require("clojure.string");goog.require("clojure.string");goog.require("cljs.reader");goog.require("tailrecursion.javelin");tailrecursion.hoplon.is_ie8=cljs.core.not.call(null,window["Node"]);
tailrecursion.hoplon.node_QMARK_=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?function(p1__10294_SHARP_){return p1__10294_SHARP_ instanceof Node}:function(p1__10295_SHARP_){try{return p1__10295_SHARP_.nodeType}catch(e10296){if(e10296 instanceof Error){var _=e10296;return null}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw e10296;else return null}};
tailrecursion.hoplon.vector_QMARK__STAR_=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?cljs.core.vector_QMARK_:function(p1__10297_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__10297_SHARP_)}catch(e10298){if(e10298 instanceof Error){var _=e10298;return null}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw e10298;else return null}};
tailrecursion.hoplon.seq_QMARK__STAR_=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?cljs.core.seq_QMARK_:function(p1__10299_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__10299_SHARP_)}catch(e10300){if(e10300 instanceof Error){var _=e10300;return null}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw e10300;else return null}};
cljs.core.set_print_fn_BANG_.call(null,function(p1__10301_SHARP_){if(cljs.core.truth_(function(){var and__6720__auto__=console;if(cljs.core.truth_(and__6720__auto__))return console.log;else return and__6720__auto__}()))return console.log(p1__10301_SHARP_);else return null});
tailrecursion.hoplon.safe_nth=function(){var safe_nth=null;var safe_nth__2=function(coll,index){return safe_nth.call(null,coll,index,null)};var safe_nth__3=function(coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found)}catch(e10303){if(e10303 instanceof Error){var _=e10303;return not_found}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw e10303;else return null}};safe_nth=function(coll,index,not_found){switch(arguments.length){case 2:return safe_nth__2.call(this,
coll,index);case 3:return safe_nth__3.call(this,coll,index,not_found)}throw new Error("Invalid arity: "+arguments.length);};safe_nth.cljs$core$IFn$_invoke$arity$2=safe_nth__2;safe_nth.cljs$core$IFn$_invoke$arity$3=safe_nth__3;return safe_nth}();
tailrecursion.hoplon.timeout=function(){var timeout=null;var timeout__1=function(f){return timeout.call(null,f,0)};var timeout__2=function(f,t){return window.setTimeout(f,t)};timeout=function(f,t){switch(arguments.length){case 1:return timeout__1.call(this,f);case 2:return timeout__2.call(this,f,t)}throw new Error("Invalid arity: "+arguments.length);};timeout.cljs$core$IFn$_invoke$arity$1=timeout__1;timeout.cljs$core$IFn$_invoke$arity$2=timeout__2;return timeout}();
tailrecursion.hoplon.unsplice=function unsplice(forms){return cljs.core.mapcat.call(null,function(p1__10304_SHARP_){if(cljs.core.truth_(function(){var or__6732__auto__=tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__10304_SHARP_);if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__10304_SHARP_)}()))return unsplice.call(null,p1__10304_SHARP_);else return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,
[p1__10304_SHARP_],null)},forms)};tailrecursion.hoplon.when_dom=function when_dom(this$,f){return tailrecursion.hoplon.timeout.call(null,function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))return f.call(null);else return tailrecursion.hoplon.timeout.call(null,doit,20)})};
tailrecursion.hoplon.parse_args=function parse_args(p__10307){var vec__10309=p__10307;var head=cljs.core.nth.call(null,vec__10309,0,null);var tail=cljs.core.nthnext.call(null,vec__10309,1);var args=vec__10309;var kw1_QMARK_=cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw=function(kw1_QMARK_){return function(p1__10305_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__10305_SHARP_)))}}(kw1_QMARK_);
var drkw=function(kw1_QMARK_,mkkw){return function(p1__10306_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__10306_SHARP_)))}}(kw1_QMARK_,mkkw);if(cljs.core.map_QMARK_.call(null,head))return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[head,tail],null);else if(head instanceof cljs.core.Keyword)return new cljs.core.PersistentVector(null,2,5,
cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),drkw.call(null,args)],null);else if(new cljs.core.Keyword(null,"else","else",1017020587))return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,args],null);else return null};
tailrecursion.hoplon.add_attributes_BANG_=function add_attributes_BANG_(this$,attr){var key_STAR_=function(p1__10311_SHARP_,p2__10310_SHARP_){var p=p2__10310_SHARP_.substr(0,3);return cljs.core.keyword.call(null,!cljs.core._EQ_.call(null,p1__10311_SHARP_,p)?p2__10310_SHARP_:p2__10310_SHARP_.substr(3))};var dokey=cljs.core.partial.call(null,key_STAR_,"do-");var onkey=cljs.core.partial.call(null,key_STAR_,"on-");var dos=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons=cljs.core.atom.call(null,
cljs.core.PersistentArrayMap.EMPTY);var addcls=function(key_STAR_,dokey,onkey,dos,ons){return function(p1__10312_SHARP_,p2__10313_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__10312_SHARP_,/ /)),clojure.string.split.call(null,p2__10313_SHARP_,/ /)))}}(key_STAR_,dokey,onkey,dos,ons);var seq__10344_10370=cljs.core.seq.call(null,attr);var chunk__10345_10371=null;var count__10346_10372=0;var i__10347_10373=0;while(true){if(i__10347_10373<
count__10346_10372){var vec__10348_10374=cljs.core._nth.call(null,chunk__10345_10371,i__10347_10373);var k_10375=cljs.core.nth.call(null,vec__10348_10374,0,null);var v_10376=cljs.core.nth.call(null,vec__10348_10374,1,null);var k_10377__$1=cljs.core.name.call(null,k_10375);var e_10378=jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_10376)))cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_10377__$1),v_10376);else if(cljs.core.fn_QMARK_.call(null,v_10376))cljs.core.swap_BANG_.call(null,
ons,cljs.core.assoc,onkey.call(null,k_10377__$1),v_10376);else if(cljs.core._EQ_.call(null,k_10377__$1,"class")){var seq__10349_10379=cljs.core.seq.call(null,clojure.string.split.call(null,v_10376,/ /));var chunk__10350_10380=null;var count__10351_10381=0;var i__10352_10382=0;while(true){if(i__10352_10382<count__10351_10381){var cls_10383=cljs.core._nth.call(null,chunk__10350_10380,i__10352_10382);e_10378.addClass(cls_10383);var G__10384=seq__10349_10379;var G__10385=chunk__10350_10380;var G__10386=
count__10351_10381;var G__10387=i__10352_10382+1;seq__10349_10379=G__10384;chunk__10350_10380=G__10385;count__10351_10381=G__10386;i__10352_10382=G__10387;continue}else{var temp__4092__auto___10388=cljs.core.seq.call(null,seq__10349_10379);if(temp__4092__auto___10388){var seq__10349_10389__$1=temp__4092__auto___10388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10349_10389__$1)){var c__7480__auto___10390=cljs.core.chunk_first.call(null,seq__10349_10389__$1);var G__10391=cljs.core.chunk_rest.call(null,
seq__10349_10389__$1);var G__10392=c__7480__auto___10390;var G__10393=cljs.core.count.call(null,c__7480__auto___10390);var G__10394=0;seq__10349_10379=G__10391;chunk__10350_10380=G__10392;count__10351_10381=G__10393;i__10352_10382=G__10394;continue}else{var cls_10395=cljs.core.first.call(null,seq__10349_10389__$1);e_10378.addClass(cls_10395);var G__10396=cljs.core.next.call(null,seq__10349_10389__$1);var G__10397=null;var G__10398=0;var G__10399=0;seq__10349_10379=G__10396;chunk__10350_10380=G__10397;
count__10351_10381=G__10398;i__10352_10382=G__10399;continue}}else;}break}}else if(cljs.core._EQ_.call(null,k_10377__$1,"css"))e_10378.css(cljs.core.clj__GT_js.call(null,v_10376));else if(new cljs.core.Keyword(null,"else","else",1017020587))if(cljs.core._EQ_.call(null,false,v_10376))e_10378.removeAttr(k_10377__$1);else if(cljs.core._EQ_.call(null,true,v_10376))e_10378.attr(k_10377__$1,k_10377__$1);else if(new cljs.core.Keyword(null,"else","else",1017020587))e_10378.attr(k_10377__$1,[cljs.core.str(v_10376)].join(""));
else;else;var G__10400=seq__10344_10370;var G__10401=chunk__10345_10371;var G__10402=count__10346_10372;var G__10403=i__10347_10373+1;seq__10344_10370=G__10400;chunk__10345_10371=G__10401;count__10346_10372=G__10402;i__10347_10373=G__10403;continue}else{var temp__4092__auto___10404=cljs.core.seq.call(null,seq__10344_10370);if(temp__4092__auto___10404){var seq__10344_10405__$1=temp__4092__auto___10404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10344_10405__$1)){var c__7480__auto___10406=cljs.core.chunk_first.call(null,
seq__10344_10405__$1);var G__10407=cljs.core.chunk_rest.call(null,seq__10344_10405__$1);var G__10408=c__7480__auto___10406;var G__10409=cljs.core.count.call(null,c__7480__auto___10406);var G__10410=0;seq__10344_10370=G__10407;chunk__10345_10371=G__10408;count__10346_10372=G__10409;i__10347_10373=G__10410;continue}else{var vec__10353_10411=cljs.core.first.call(null,seq__10344_10405__$1);var k_10412=cljs.core.nth.call(null,vec__10353_10411,0,null);var v_10413=cljs.core.nth.call(null,vec__10353_10411,
1,null);var k_10414__$1=cljs.core.name.call(null,k_10412);var e_10415=jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_10413)))cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_10414__$1),v_10413);else if(cljs.core.fn_QMARK_.call(null,v_10413))cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_10414__$1),v_10413);else if(cljs.core._EQ_.call(null,k_10414__$1,"class")){var seq__10354_10416=cljs.core.seq.call(null,clojure.string.split.call(null,
v_10413,/ /));var chunk__10355_10417=null;var count__10356_10418=0;var i__10357_10419=0;while(true){if(i__10357_10419<count__10356_10418){var cls_10420=cljs.core._nth.call(null,chunk__10355_10417,i__10357_10419);e_10415.addClass(cls_10420);var G__10421=seq__10354_10416;var G__10422=chunk__10355_10417;var G__10423=count__10356_10418;var G__10424=i__10357_10419+1;seq__10354_10416=G__10421;chunk__10355_10417=G__10422;count__10356_10418=G__10423;i__10357_10419=G__10424;continue}else{var temp__4092__auto___10425__$1=
cljs.core.seq.call(null,seq__10354_10416);if(temp__4092__auto___10425__$1){var seq__10354_10426__$1=temp__4092__auto___10425__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10354_10426__$1)){var c__7480__auto___10427=cljs.core.chunk_first.call(null,seq__10354_10426__$1);var G__10428=cljs.core.chunk_rest.call(null,seq__10354_10426__$1);var G__10429=c__7480__auto___10427;var G__10430=cljs.core.count.call(null,c__7480__auto___10427);var G__10431=0;seq__10354_10416=G__10428;chunk__10355_10417=G__10429;
count__10356_10418=G__10430;i__10357_10419=G__10431;continue}else{var cls_10432=cljs.core.first.call(null,seq__10354_10426__$1);e_10415.addClass(cls_10432);var G__10433=cljs.core.next.call(null,seq__10354_10426__$1);var G__10434=null;var G__10435=0;var G__10436=0;seq__10354_10416=G__10433;chunk__10355_10417=G__10434;count__10356_10418=G__10435;i__10357_10419=G__10436;continue}}else;}break}}else if(cljs.core._EQ_.call(null,k_10414__$1,"css"))e_10415.css(cljs.core.clj__GT_js.call(null,v_10413));else if(new cljs.core.Keyword(null,
"else","else",1017020587))if(cljs.core._EQ_.call(null,false,v_10413))e_10415.removeAttr(k_10414__$1);else if(cljs.core._EQ_.call(null,true,v_10413))e_10415.attr(k_10414__$1,k_10414__$1);else if(new cljs.core.Keyword(null,"else","else",1017020587))e_10415.attr(k_10414__$1,[cljs.core.str(v_10413)].join(""));else;else;var G__10437=cljs.core.next.call(null,seq__10344_10405__$1);var G__10438=null;var G__10439=0;var G__10440=0;seq__10344_10370=G__10437;chunk__10345_10371=G__10438;count__10346_10372=G__10439;
i__10347_10373=G__10440;continue}}else;}break}if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))setTimeout(function(){var seq__10358=cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__10359=null;var count__10360=0;var i__10361=0;while(true){if(i__10361<count__10360){var vec__10362=cljs.core._nth.call(null,chunk__10359,i__10361);var k=cljs.core.nth.call(null,vec__10362,0,null);var v=cljs.core.nth.call(null,vec__10362,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,
cljs.core.deref.call(null,v));cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),function(seq__10358,chunk__10359,count__10360,i__10361,vec__10362,k,v){return function(p1__10315_SHARP_,p2__10316_SHARP_,p3__10317_SHARP_,p4__10314_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10314_SHARP_)}}(seq__10358,chunk__10359,count__10360,i__10361,vec__10362,k,v));var G__10441=seq__10358;var G__10442=chunk__10359;var G__10443=count__10360;var G__10444=i__10361+1;seq__10358=G__10441;
chunk__10359=G__10442;count__10360=G__10443;i__10361=G__10444;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10358);if(temp__4092__auto__){var seq__10358__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10358__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10358__$1);var G__10445=cljs.core.chunk_rest.call(null,seq__10358__$1);var G__10446=c__7480__auto__;var G__10447=cljs.core.count.call(null,c__7480__auto__);var G__10448=0;seq__10358=G__10445;
chunk__10359=G__10446;count__10360=G__10447;i__10361=G__10448;continue}else{var vec__10363=cljs.core.first.call(null,seq__10358__$1);var k=cljs.core.nth.call(null,vec__10363,0,null);var v=cljs.core.nth.call(null,vec__10363,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),function(seq__10358,chunk__10359,count__10360,i__10361,vec__10363,k,v,seq__10358__$1,temp__4092__auto__){return function(p1__10315_SHARP_,
p2__10316_SHARP_,p3__10317_SHARP_,p4__10314_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10314_SHARP_)}}(seq__10358,chunk__10359,count__10360,i__10361,vec__10363,k,v,seq__10358__$1,temp__4092__auto__));var G__10449=cljs.core.next.call(null,seq__10358__$1);var G__10450=null;var G__10451=0;var G__10452=0;seq__10358=G__10449;chunk__10359=G__10450;count__10360=G__10451;i__10361=G__10452;continue}}else return null}break}},0);else;if(cljs.core.seq.call(null,cljs.core.deref.call(null,
ons)))setTimeout(function(){var seq__10364=cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__10365=null;var count__10366=0;var i__10367=0;while(true){if(i__10367<count__10366){var vec__10368=cljs.core._nth.call(null,chunk__10365,i__10367);var k=cljs.core.nth.call(null,vec__10368,0,null);var v=cljs.core.nth.call(null,vec__10368,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);var G__10453=seq__10364;var G__10454=chunk__10365;var G__10455=count__10366;var G__10456=i__10367+
1;seq__10364=G__10453;chunk__10365=G__10454;count__10366=G__10455;i__10367=G__10456;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10364);if(temp__4092__auto__){var seq__10364__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10364__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10364__$1);var G__10457=cljs.core.chunk_rest.call(null,seq__10364__$1);var G__10458=c__7480__auto__;var G__10459=cljs.core.count.call(null,c__7480__auto__);var G__10460=
0;seq__10364=G__10457;chunk__10365=G__10458;count__10366=G__10459;i__10367=G__10460;continue}else{var vec__10369=cljs.core.first.call(null,seq__10364__$1);var k=cljs.core.nth.call(null,vec__10369,0,null);var v=cljs.core.nth.call(null,vec__10369,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);var G__10461=cljs.core.next.call(null,seq__10364__$1);var G__10462=null;var G__10463=0;var G__10464=0;seq__10364=G__10461;chunk__10365=G__10462;count__10366=G__10463;i__10367=G__10464;continue}}else return null}break}},
0);else;return this$};tailrecursion.hoplon.append_child=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?function(p1__10465_SHARP_,p2__10466_SHARP_){return p1__10465_SHARP_.appendChild(p2__10466_SHARP_)}:function(p1__10467_SHARP_,p2__10468_SHARP_){try{return p1__10467_SHARP_.appendChild(p2__10468_SHARP_)}catch(e10469){if(e10469 instanceof Error){var _=e10469;return null}else if(new cljs.core.Keyword(null,"else","else",1017020587))throw e10469;else return null}};
tailrecursion.hoplon.add_children_BANG_=function add_children_BANG_(this$,kids){var node=function(p1__10470_SHARP_){if(typeof p1__10470_SHARP_==="string")return tailrecursion.hoplon.$text.call(null,p1__10470_SHARP_);else if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__10470_SHARP_)))return p1__10470_SHARP_;else return null};var seq__10475_10479=cljs.core.seq.call(null,cljs.core.keep.call(null,node,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__10476_10480=null;var count__10477_10481=
0;var i__10478_10482=0;while(true){if(i__10478_10482<count__10477_10481){var x_10483=cljs.core._nth.call(null,chunk__10476_10480,i__10478_10482);tailrecursion.hoplon.append_child.call(null,this$,x_10483);var G__10484=seq__10475_10479;var G__10485=chunk__10476_10480;var G__10486=count__10477_10481;var G__10487=i__10478_10482+1;seq__10475_10479=G__10484;chunk__10476_10480=G__10485;count__10477_10481=G__10486;i__10478_10482=G__10487;continue}else{var temp__4092__auto___10488=cljs.core.seq.call(null,
seq__10475_10479);if(temp__4092__auto___10488){var seq__10475_10489__$1=temp__4092__auto___10488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10475_10489__$1)){var c__7480__auto___10490=cljs.core.chunk_first.call(null,seq__10475_10489__$1);var G__10491=cljs.core.chunk_rest.call(null,seq__10475_10489__$1);var G__10492=c__7480__auto___10490;var G__10493=cljs.core.count.call(null,c__7480__auto___10490);var G__10494=0;seq__10475_10479=G__10491;chunk__10476_10480=G__10492;count__10477_10481=G__10493;
i__10478_10482=G__10494;continue}else{var x_10495=cljs.core.first.call(null,seq__10475_10489__$1);tailrecursion.hoplon.append_child.call(null,this$,x_10495);var G__10496=cljs.core.next.call(null,seq__10475_10489__$1);var G__10497=null;var G__10498=0;var G__10499=0;seq__10475_10479=G__10496;chunk__10476_10480=G__10497;count__10477_10481=G__10498;i__10478_10482=G__10499;continue}}else;}break}return this$};
tailrecursion.hoplon.on_append_BANG_=function on_append_BANG_(this$,f){return this$.hoplonIFn=f};Element.prototype.cljs$core$IFn$=true;
Element.prototype.call=function(){var G__10507__delegate=function(self__,args){var self____$1=this;var this$=self____$1;var vec__10501=tailrecursion.hoplon.parse_args.call(null,args);var attr=cljs.core.nth.call(null,vec__10501,0,null);var kids=cljs.core.nth.call(null,vec__10501,1,null);if(cljs.core.truth_(this$.hoplonIFn)){var G__10502=this$;G__10502.hoplonIFn(attr,kids);return G__10502}else{var G__10503=this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__10503,attr);tailrecursion.hoplon.add_children_BANG_.call(null,
G__10503,kids);return G__10503}};var G__10507=function(self__,var_args){var args=null;if(arguments.length>1)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0);return G__10507__delegate.call(this,self__,args)};G__10507.cljs$lang$maxFixedArity=1;G__10507.cljs$lang$applyTo=function(arglist__10508){var self__=cljs.core.first(arglist__10508);var args=cljs.core.rest(arglist__10508);return G__10507__delegate(self__,args)};G__10507.cljs$core$IFn$_invoke$arity$variadic=G__10507__delegate;
return G__10507}();Element.prototype.apply=function(self__,args10500){var self____$1=this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10500)))};
Element.prototype.cljs$core$IFn$_invoke$arity$2=function(){var G__10509__delegate=function(args){var this$=this;var vec__10504=tailrecursion.hoplon.parse_args.call(null,args);var attr=cljs.core.nth.call(null,vec__10504,0,null);var kids=cljs.core.nth.call(null,vec__10504,1,null);if(cljs.core.truth_(this$.hoplonIFn)){var G__10505=this$;G__10505.hoplonIFn(attr,kids);return G__10505}else{var G__10506=this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__10506,attr);tailrecursion.hoplon.add_children_BANG_.call(null,
G__10506,kids);return G__10506}};var G__10509=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__10509__delegate.call(this,args)};G__10509.cljs$lang$maxFixedArity=0;G__10509.cljs$lang$applyTo=function(arglist__10510){var args=cljs.core.seq(arglist__10510);return G__10509__delegate(args)};G__10509.cljs$core$IFn$_invoke$arity$variadic=G__10509__delegate;return G__10509}();
Element.prototype.cljs$core$IPrintWithWriter$=true;Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(this$,writer,opts){var this$__$1=this;return cljs.core.write_all.call(null,writer,"#\x3cElement: ",this$__$1.tagName,"\x3e")};
tailrecursion.hoplon.make_singleton_ctor=function make_singleton_ctor(tag){return function(){var G__10511__delegate=function(args){var old=document.getElementsByTagName(tag)[0];var new$=document.createElement(tag);if(cljs.core.truth_(old))old.parentNode.replaceChild(new$,old);else;return cljs.core.apply.call(null,new$,args)};var G__10511=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__10511__delegate.call(this,args)};
G__10511.cljs$lang$maxFixedArity=0;G__10511.cljs$lang$applyTo=function(arglist__10512){var args=cljs.core.seq(arglist__10512);return G__10511__delegate(args)};G__10511.cljs$core$IFn$_invoke$arity$variadic=G__10511__delegate;return G__10511}()};
tailrecursion.hoplon.make_elem_ctor=function make_elem_ctor(tag){return function(){var G__10513__delegate=function(args){return cljs.core.apply.call(null,document.createElement(tag),args)};var G__10513=function(var_args){var args=null;if(arguments.length>0)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return G__10513__delegate.call(this,args)};G__10513.cljs$lang$maxFixedArity=0;G__10513.cljs$lang$applyTo=function(arglist__10514){var args=cljs.core.seq(arglist__10514);return G__10513__delegate(args)};
G__10513.cljs$core$IFn$_invoke$arity$variadic=G__10513__delegate;return G__10513}()};tailrecursion.hoplon.html_body=tailrecursion.hoplon.make_singleton_ctor.call(null,"body");tailrecursion.hoplon.html_head=tailrecursion.hoplon.make_singleton_ctor.call(null,"head");tailrecursion.hoplon.html=tailrecursion.hoplon.make_singleton_ctor.call(null,"html");tailrecursion.hoplon.a=tailrecursion.hoplon.make_elem_ctor.call(null,"a");tailrecursion.hoplon.abbr=tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym=tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");tailrecursion.hoplon.address=tailrecursion.hoplon.make_elem_ctor.call(null,"address");tailrecursion.hoplon.applet=tailrecursion.hoplon.make_elem_ctor.call(null,"applet");tailrecursion.hoplon.area=tailrecursion.hoplon.make_elem_ctor.call(null,"area");tailrecursion.hoplon.article=tailrecursion.hoplon.make_elem_ctor.call(null,"article");tailrecursion.hoplon.aside=tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio=tailrecursion.hoplon.make_elem_ctor.call(null,"audio");tailrecursion.hoplon.b=tailrecursion.hoplon.make_elem_ctor.call(null,"b");tailrecursion.hoplon.base=tailrecursion.hoplon.make_elem_ctor.call(null,"base");tailrecursion.hoplon.basefont=tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");tailrecursion.hoplon.bdi=tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");tailrecursion.hoplon.bdo=tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big=tailrecursion.hoplon.make_elem_ctor.call(null,"big");tailrecursion.hoplon.blockquote=tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");tailrecursion.hoplon.br=tailrecursion.hoplon.make_elem_ctor.call(null,"br");tailrecursion.hoplon.button=tailrecursion.hoplon.make_elem_ctor.call(null,"button");tailrecursion.hoplon.canvas=tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");tailrecursion.hoplon.caption=tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center=tailrecursion.hoplon.make_elem_ctor.call(null,"center");tailrecursion.hoplon.cite=tailrecursion.hoplon.make_elem_ctor.call(null,"cite");tailrecursion.hoplon.code=tailrecursion.hoplon.make_elem_ctor.call(null,"code");tailrecursion.hoplon.col=tailrecursion.hoplon.make_elem_ctor.call(null,"col");tailrecursion.hoplon.colgroup=tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");tailrecursion.hoplon.command=tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data=tailrecursion.hoplon.make_elem_ctor.call(null,"data");tailrecursion.hoplon.datalist=tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");tailrecursion.hoplon.dd=tailrecursion.hoplon.make_elem_ctor.call(null,"dd");tailrecursion.hoplon.del=tailrecursion.hoplon.make_elem_ctor.call(null,"del");tailrecursion.hoplon.details=tailrecursion.hoplon.make_elem_ctor.call(null,"details");tailrecursion.hoplon.dfn=tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir=tailrecursion.hoplon.make_elem_ctor.call(null,"dir");tailrecursion.hoplon.div=tailrecursion.hoplon.make_elem_ctor.call(null,"div");tailrecursion.hoplon.dl=tailrecursion.hoplon.make_elem_ctor.call(null,"dl");tailrecursion.hoplon.dt=tailrecursion.hoplon.make_elem_ctor.call(null,"dt");tailrecursion.hoplon.em=tailrecursion.hoplon.make_elem_ctor.call(null,"em");tailrecursion.hoplon.embed=tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource=tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");tailrecursion.hoplon.fieldset=tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");tailrecursion.hoplon.figcaption=tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");tailrecursion.hoplon.figure=tailrecursion.hoplon.make_elem_ctor.call(null,"figure");tailrecursion.hoplon.font=tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer=tailrecursion.hoplon.make_elem_ctor.call(null,"footer");tailrecursion.hoplon.form=tailrecursion.hoplon.make_elem_ctor.call(null,"form");tailrecursion.hoplon.frame=tailrecursion.hoplon.make_elem_ctor.call(null,"frame");tailrecursion.hoplon.frameset=tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");tailrecursion.hoplon.h1=tailrecursion.hoplon.make_elem_ctor.call(null,"h1");tailrecursion.hoplon.h2=tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3=tailrecursion.hoplon.make_elem_ctor.call(null,"h3");tailrecursion.hoplon.h4=tailrecursion.hoplon.make_elem_ctor.call(null,"h4");tailrecursion.hoplon.h5=tailrecursion.hoplon.make_elem_ctor.call(null,"h5");tailrecursion.hoplon.h6=tailrecursion.hoplon.make_elem_ctor.call(null,"h6");tailrecursion.hoplon.header=tailrecursion.hoplon.make_elem_ctor.call(null,"header");tailrecursion.hoplon.hgroup=tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr=tailrecursion.hoplon.make_elem_ctor.call(null,"hr");tailrecursion.hoplon.i=tailrecursion.hoplon.make_elem_ctor.call(null,"i");tailrecursion.hoplon.iframe=tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");tailrecursion.hoplon.img=tailrecursion.hoplon.make_elem_ctor.call(null,"img");tailrecursion.hoplon.input=tailrecursion.hoplon.make_elem_ctor.call(null,"input");tailrecursion.hoplon.ins=tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex=tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");tailrecursion.hoplon.kbd=tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");tailrecursion.hoplon.keygen=tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");tailrecursion.hoplon.label=tailrecursion.hoplon.make_elem_ctor.call(null,"label");tailrecursion.hoplon.legend=tailrecursion.hoplon.make_elem_ctor.call(null,"legend");tailrecursion.hoplon.li=tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link=tailrecursion.hoplon.make_elem_ctor.call(null,"link");tailrecursion.hoplon.html_map=tailrecursion.hoplon.make_elem_ctor.call(null,"map");tailrecursion.hoplon.mark=tailrecursion.hoplon.make_elem_ctor.call(null,"mark");tailrecursion.hoplon.menu=tailrecursion.hoplon.make_elem_ctor.call(null,"menu");tailrecursion.hoplon.html_meta=tailrecursion.hoplon.make_elem_ctor.call(null,"meta");tailrecursion.hoplon.meter=tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav=tailrecursion.hoplon.make_elem_ctor.call(null,"nav");tailrecursion.hoplon.noframes=tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");tailrecursion.hoplon.noscript=tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");tailrecursion.hoplon.object=tailrecursion.hoplon.make_elem_ctor.call(null,"object");tailrecursion.hoplon.ol=tailrecursion.hoplon.make_elem_ctor.call(null,"ol");tailrecursion.hoplon.optgroup=tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option=tailrecursion.hoplon.make_elem_ctor.call(null,"option");tailrecursion.hoplon.output=tailrecursion.hoplon.make_elem_ctor.call(null,"output");tailrecursion.hoplon.p=tailrecursion.hoplon.make_elem_ctor.call(null,"p");tailrecursion.hoplon.param=tailrecursion.hoplon.make_elem_ctor.call(null,"param");tailrecursion.hoplon.pre=tailrecursion.hoplon.make_elem_ctor.call(null,"pre");tailrecursion.hoplon.progress=tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q=tailrecursion.hoplon.make_elem_ctor.call(null,"q");tailrecursion.hoplon.rp=tailrecursion.hoplon.make_elem_ctor.call(null,"rp");tailrecursion.hoplon.rt=tailrecursion.hoplon.make_elem_ctor.call(null,"rt");tailrecursion.hoplon.ruby=tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");tailrecursion.hoplon.s=tailrecursion.hoplon.make_elem_ctor.call(null,"s");tailrecursion.hoplon.samp=tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script=tailrecursion.hoplon.make_elem_ctor.call(null,"script");tailrecursion.hoplon.section=tailrecursion.hoplon.make_elem_ctor.call(null,"section");tailrecursion.hoplon.select=tailrecursion.hoplon.make_elem_ctor.call(null,"select");tailrecursion.hoplon.small=tailrecursion.hoplon.make_elem_ctor.call(null,"small");tailrecursion.hoplon.source=tailrecursion.hoplon.make_elem_ctor.call(null,"source");tailrecursion.hoplon.span=tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike=tailrecursion.hoplon.make_elem_ctor.call(null,"strike");tailrecursion.hoplon.strong=tailrecursion.hoplon.make_elem_ctor.call(null,"strong");tailrecursion.hoplon.style=tailrecursion.hoplon.make_elem_ctor.call(null,"style");tailrecursion.hoplon.sub=tailrecursion.hoplon.make_elem_ctor.call(null,"sub");tailrecursion.hoplon.summary=tailrecursion.hoplon.make_elem_ctor.call(null,"summary");tailrecursion.hoplon.sup=tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table=tailrecursion.hoplon.make_elem_ctor.call(null,"table");tailrecursion.hoplon.tbody=tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");tailrecursion.hoplon.td=tailrecursion.hoplon.make_elem_ctor.call(null,"td");tailrecursion.hoplon.textarea=tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");tailrecursion.hoplon.tfoot=tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");tailrecursion.hoplon.th=tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead=tailrecursion.hoplon.make_elem_ctor.call(null,"thead");tailrecursion.hoplon.html_time=tailrecursion.hoplon.make_elem_ctor.call(null,"time");tailrecursion.hoplon.title=tailrecursion.hoplon.make_elem_ctor.call(null,"title");tailrecursion.hoplon.tr=tailrecursion.hoplon.make_elem_ctor.call(null,"tr");tailrecursion.hoplon.track=tailrecursion.hoplon.make_elem_ctor.call(null,"track");tailrecursion.hoplon.tt=tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u=tailrecursion.hoplon.make_elem_ctor.call(null,"u");tailrecursion.hoplon.ul=tailrecursion.hoplon.make_elem_ctor.call(null,"ul");tailrecursion.hoplon.html_var=tailrecursion.hoplon.make_elem_ctor.call(null,"var");tailrecursion.hoplon.video=tailrecursion.hoplon.make_elem_ctor.call(null,"video");tailrecursion.hoplon.wbr=tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");tailrecursion.hoplon.spliced=cljs.core.vector;tailrecursion.hoplon.$text=function $text(p1__10515_SHARP_){return document.createTextNode(p1__10515_SHARP_)};
tailrecursion.hoplon.$comment=function $comment(p1__10516_SHARP_){return document.createComment(p1__10516_SHARP_)};tailrecursion.hoplon.initialized_QMARK_=cljs.core.atom.call(null,false);tailrecursion.hoplon._STAR_initfns_STAR_=cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_=function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))return f.call(null);else return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f)};
tailrecursion.hoplon.init=function init(){return setTimeout(function(){jQuery("body").on("submit",function(p1__10517_SHARP_){return p1__10517_SHARP_.preventDefault()});cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);var seq__10522=cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__10523=null;var count__10524=0;var i__10525=0;while(true){if(i__10525<count__10524){var f=cljs.core._nth.call(null,chunk__10523,i__10525);
f.call(null);var G__10526=seq__10522;var G__10527=chunk__10523;var G__10528=count__10524;var G__10529=i__10525+1;seq__10522=G__10526;chunk__10523=G__10527;count__10524=G__10528;i__10525=G__10529;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10522);if(temp__4092__auto__){var seq__10522__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10522__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10522__$1);var G__10530=cljs.core.chunk_rest.call(null,seq__10522__$1);
var G__10531=c__7480__auto__;var G__10532=cljs.core.count.call(null,c__7480__auto__);var G__10533=0;seq__10522=G__10530;chunk__10523=G__10531;count__10524=G__10532;i__10525=G__10533;continue}else{var f=cljs.core.first.call(null,seq__10522__$1);f.call(null);var G__10534=cljs.core.next.call(null,seq__10522__$1);var G__10535=null;var G__10536=0;var G__10537=0;seq__10522=G__10534;chunk__10523=G__10535;count__10524=G__10536;i__10525=G__10537;continue}}else return null}break}},0)};
tailrecursion.hoplon.by_id=function by_id(id){return document.getElementById(cljs.core.name.call(null,id))};tailrecursion.hoplon.val_id=function val_id(id){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",1125876963))};
tailrecursion.hoplon.rel=function rel(other,event){var os=cljs.core.js__GT_clj.call(null,jQuery(other).offset());var ox=os.call(null,"left");var oy=os.call(null,"top");return new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,"x","x",1013904362),event.pageX-ox,new cljs.core.Keyword(null,"y","y",1013904363),event.pageY-oy],null)};
tailrecursion.hoplon.relx=function relx(other,event){return(new cljs.core.Keyword(null,"x","x",1013904362)).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event))};tailrecursion.hoplon.rely=function rely(other,event){return(new cljs.core.Keyword(null,"y","y",1013904363)).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event))};
tailrecursion.hoplon.rel_event=function rel_event(rel_to,tag,handler){return function(event){event[[cljs.core.str(tag),cljs.core.str("X")].join("")]=tailrecursion.hoplon.relx.call(null,rel_to,event);event[[cljs.core.str(tag),cljs.core.str("Y")].join("")]=tailrecursion.hoplon.rely.call(null,rel_to,event);return handler.call(null,event)}};
tailrecursion.hoplon.text_val_BANG_=function(){var text_val_BANG_=null;var text_val_BANG___1=function(e){return e.val()};var text_val_BANG___2=function(e,v){return e.val([cljs.core.str(v)].join(""))};text_val_BANG_=function(e,v){switch(arguments.length){case 1:return text_val_BANG___1.call(this,e);case 2:return text_val_BANG___2.call(this,e,v)}throw new Error("Invalid arity: "+arguments.length);};text_val_BANG_.cljs$core$IFn$_invoke$arity$1=text_val_BANG___1;text_val_BANG_.cljs$core$IFn$_invoke$arity$2=
text_val_BANG___2;return text_val_BANG_}();
tailrecursion.hoplon.check_val_BANG_=function(){var check_val_BANG_=null;var check_val_BANG___1=function(e){return e.is(":checked")};var check_val_BANG___2=function(e,v){return e.prop("checked",cljs.core.boolean$.call(null,v))};check_val_BANG_=function(e,v){switch(arguments.length){case 1:return check_val_BANG___1.call(this,e);case 2:return check_val_BANG___2.call(this,e,v)}throw new Error("Invalid arity: "+arguments.length);};check_val_BANG_.cljs$core$IFn$_invoke$arity$1=check_val_BANG___1;check_val_BANG_.cljs$core$IFn$_invoke$arity$2=
check_val_BANG___2;return check_val_BANG_}();
tailrecursion.hoplon.do_BANG_=function(){var method_table__7590__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7591__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7592__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7593__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7594__auto__=cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null,
1,[new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)],null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return new cljs.core.MultiFn("do!",function(elem,key,val){return key},new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__7594__auto__,method_table__7590__auto__,prefer_table__7591__auto__,
method_cache__7592__auto__,cached_hierarchy__7593__auto__)}();cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),function(elem,key,val){return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([key,val],true,false))});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),function(){var G__10538__delegate=function(elem,_,args){var e=jQuery(elem);return cljs.core.apply.call(null,cljs.core._EQ_.call(null,"checkbox",e.attr("type"))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_,e,args)};var G__10538=function(elem,_,var_args){var args=null;if(arguments.length>2)args=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0);
return G__10538__delegate.call(this,elem,_,args)};G__10538.cljs$lang$maxFixedArity=2;G__10538.cljs$lang$applyTo=function(arglist__10539){var elem=cljs.core.first(arglist__10539);arglist__10539=cljs.core.next(arglist__10539);var _=cljs.core.first(arglist__10539);var args=cljs.core.rest(arglist__10539);return G__10538__delegate(elem,_,args)};G__10538.cljs$core$IFn$_invoke$arity$variadic=G__10538__delegate;return G__10538}());
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),function(elem,_,kvs){return elem.call(null,kvs)});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),function(elem,_,kvs){var elem__$1=jQuery(elem);var seq__10540=cljs.core.seq.call(null,kvs);var chunk__10541=null;var count__10542=0;var i__10543=0;while(true){if(i__10543<count__10542){var vec__10544=cljs.core._nth.call(null,chunk__10541,i__10543);var c=cljs.core.nth.call(null,vec__10544,0,null);var p_QMARK_=cljs.core.nth.call(null,vec__10544,1,null);elem__$1.toggleClass(cljs.core.name.call(null,
c),cljs.core.boolean$.call(null,p_QMARK_));var G__10546=seq__10540;var G__10547=chunk__10541;var G__10548=count__10542;var G__10549=i__10543+1;seq__10540=G__10546;chunk__10541=G__10547;count__10542=G__10548;i__10543=G__10549;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10540);if(temp__4092__auto__){var seq__10540__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10540__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10540__$1);var G__10550=cljs.core.chunk_rest.call(null,
seq__10540__$1);var G__10551=c__7480__auto__;var G__10552=cljs.core.count.call(null,c__7480__auto__);var G__10553=0;seq__10540=G__10550;chunk__10541=G__10551;count__10542=G__10552;i__10543=G__10553;continue}else{var vec__10545=cljs.core.first.call(null,seq__10540__$1);var c=cljs.core.nth.call(null,vec__10545,0,null);var p_QMARK_=cljs.core.nth.call(null,vec__10545,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));var G__10554=cljs.core.next.call(null,
seq__10540__$1);var G__10555=null;var G__10556=0;var G__10557=0;seq__10540=G__10554;chunk__10541=G__10555;count__10542=G__10556;i__10543=G__10557;continue}}else return null}break}});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),function(elem,_,kvs){var e=jQuery(elem);var seq__10558=cljs.core.seq.call(null,kvs);var chunk__10559=null;var count__10560=0;var i__10561=0;while(true){if(i__10561<count__10560){var vec__10562=cljs.core._nth.call(null,chunk__10559,i__10561);var k=cljs.core.nth.call(null,vec__10562,0,null);var v=cljs.core.nth.call(null,vec__10562,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(""));
var G__10564=seq__10558;var G__10565=chunk__10559;var G__10566=count__10560;var G__10567=i__10561+1;seq__10558=G__10564;chunk__10559=G__10565;count__10560=G__10566;i__10561=G__10567;continue}else{var temp__4092__auto__=cljs.core.seq.call(null,seq__10558);if(temp__4092__auto__){var seq__10558__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10558__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10558__$1);var G__10568=cljs.core.chunk_rest.call(null,seq__10558__$1);
var G__10569=c__7480__auto__;var G__10570=cljs.core.count.call(null,c__7480__auto__);var G__10571=0;seq__10558=G__10568;chunk__10559=G__10569;count__10560=G__10570;i__10561=G__10571;continue}else{var vec__10563=cljs.core.first.call(null,seq__10558__$1);var k=cljs.core.nth.call(null,vec__10563,0,null);var v=cljs.core.nth.call(null,vec__10563,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(""));var G__10572=cljs.core.next.call(null,seq__10558__$1);var G__10573=null;var G__10574=0;
var G__10575=0;seq__10558=G__10572;chunk__10559=G__10573;count__10560=G__10574;i__10561=G__10575;continue}}else return null}break}});cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),function(elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$.call(null,v))});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),function(elem,_,v){if(cljs.core.truth_(v))return jQuery(elem).hide().slideDown("fast");else return jQuery(elem).slideUp("fast")});cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),function(elem,_,v){if(cljs.core.truth_(v))return jQuery(elem).hide().fadeIn("fast");else return jQuery(elem).fadeOut("fast")});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),function(elem,_,v){return setTimeout(function(){if(cljs.core.truth_(v))return jQuery(elem).focus(jQuery(elem).focusout());else return null},0)});cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),function(elem,_,___$1){return jQuery(elem).select()});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),function(elem,_,v){if(cljs.core.truth_(v)){tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",1111509066),v);return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",4402849902),v)}else return null});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),function(elem,_,v){return jQuery(elem).text([cljs.core.str(v)].join(""))});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),function(elem,_,v){if(cljs.core.truth_(v)){var body=jQuery("body");var elem__$1=jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top],null)))}else return null});
tailrecursion.hoplon.on_BANG_=function(){var method_table__7590__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7591__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7592__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7593__auto__=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7594__auto__=cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null,
1,[new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)],null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return new cljs.core.MultiFn("on!",function(elem,event,callback){return event},new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__7594__auto__,method_table__7590__auto__,
prefer_table__7591__auto__,method_cache__7592__auto__,cached_hierarchy__7593__auto__)}();cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),function(elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,function(){return jQuery(elem).on(cljs.core.name.call(null,event),callback)})});
tailrecursion.hoplon.loop_tpl_STAR_=function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size=tailrecursion.javelin.cell.call(null,0);var items_seq=tailrecursion.javelin.lift.call(null,function(pool_size){return function(G__10602,G__10601){return G__10601.call(null,G__10602)}}(pool_size)).call(null,items,cljs.core.seq);var cur_count=tailrecursion.javelin.lift.call(null,function(pool_size,items_seq){return function(G__10603,G__10604){return G__10603.call(null,G__10604)}}(pool_size,items_seq)).call(null,
cljs.core.count,items_seq);var show_ith_QMARK_=function(pool_size,items_seq,cur_count){return function(p1__10576_SHARP_){return tailrecursion.javelin.lift.call(null,function(pool_size,items_seq,cur_count){return function(G__10606,G__10605){return G__10605<G__10606}}(pool_size,items_seq,cur_count)).call(null,cur_count,p1__10576_SHARP_)}}(pool_size,items_seq,cur_count);var ith_item=function(pool_size,items_seq,cur_count,show_ith_QMARK_){return function(p1__10577_SHARP_){return tailrecursion.javelin.lift.call(null,
function(pool_size,items_seq,cur_count,show_ith_QMARK_){return function(G__10607,G__10609,G__10608){return G__10607.call(null,G__10608,G__10609)}}(pool_size,items_seq,cur_count,show_ith_QMARK_)).call(null,tailrecursion.hoplon.safe_nth,p1__10577_SHARP_,items_seq)}}(pool_size,items_seq,cur_count,show_ith_QMARK_);var d=tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,function(){var p=d.parentNode;p.removeChild(d);return tailrecursion.javelin.lift.call(null,function(G__10623,
G__10621,G__10617,G__10618,G__10615,G__10619,G__10614,G__10616,G__10622,G__10620){if(cljs.core.truth_(G__10614<G__10615)){var seq__10610_10624=cljs.core.seq.call(null,G__10616.call(null,G__10614,G__10615));var chunk__10611_10625=null;var count__10612_10626=0;var i__10613_10627=0;while(true){if(cljs.core.truth_(i__10613_10627<count__10612_10626)){var i_10628=cljs.core._nth.call(null,chunk__10611_10625,i__10613_10627);var e_10629=G__10617.call(null,G__10618.call(null,i_10628)).call(null,new cljs.core.Keyword(null,
"do-toggle","do-toggle",1250159176),G__10619.call(null,i_10628));if(cljs.core.not.call(null,G__10620))G__10621.appendChild(e_10629);else G__10621.insertBefore(e_10629,G__10621.firstChild);var G__10630=seq__10610_10624;var G__10631=chunk__10611_10625;var G__10632=count__10612_10626;var G__10633=i__10613_10627+1;seq__10610_10624=G__10630;chunk__10611_10625=G__10631;count__10612_10626=G__10632;i__10613_10627=G__10633;continue}else{var temp__4092__auto___10634=cljs.core.seq.call(null,seq__10610_10624);
if(temp__4092__auto___10634){var seq__10610_10635__$1=temp__4092__auto___10634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10610_10635__$1)){var c__7480__auto___10636=cljs.core.chunk_first.call(null,seq__10610_10635__$1);var G__10637=cljs.core.chunk_rest.call(null,seq__10610_10635__$1);var G__10638=c__7480__auto___10636;var G__10639=cljs.core.count.call(null,c__7480__auto___10636);var G__10640=0;seq__10610_10624=G__10637;chunk__10611_10625=G__10638;count__10612_10626=G__10639;i__10613_10627=G__10640;
continue}else{var i_10641=cljs.core.first.call(null,seq__10610_10635__$1);var e_10642=G__10617.call(null,G__10618.call(null,i_10641)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__10619.call(null,i_10641));if(cljs.core.not.call(null,G__10620))G__10621.appendChild(e_10642);else G__10621.insertBefore(e_10642,G__10621.firstChild);var G__10643=cljs.core.next.call(null,seq__10610_10635__$1);var G__10644=null;var G__10645=0;var G__10646=0;seq__10610_10624=G__10643;chunk__10611_10625=
G__10644;count__10612_10626=G__10645;i__10613_10627=G__10646;continue}}else;}break}return G__10622.call(null,G__10623,G__10615)}else return null}).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_)});return d};goog.provide("hoplon.util");goog.require("cljs.core");goog.require("tailrecursion.javelin");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.javelin");hoplon.util.is_text_QMARK_=function is_text_QMARK_(children){return cljs.core._EQ_.call(null,cljs.core.count.call(null,children),1)&&!cljs.core._EQ_.call(null,cljs.core.first.call(null,children).nodeType,1)};
hoplon.util.url=function url(href){return tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"href","href",1017115293),href],null),href)};goog.provide("hoplon.reveal");goog.require("cljs.core");goog.require("tailrecursion.javelin");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.javelin");goog.require("hoplon.util");goog.require("hoplon.util");goog.require("clojure.string");goog.require("clojure.string");
hoplon.reveal.markdown_slide=function(){var markdown_slide__delegate=function(args__1668__auto__){var vec__8590=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8590,0,null);var children=cljs.core.nth.call(null,vec__8590,1,null);return tailrecursion.hoplon.section.call(null,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"data-markdown","data-markdown",2015462180),""],null)),tailrecursion.hoplon.script.call(null,
new cljs.core.Keyword(null,"type","type",1017479852),"text/template",children))};var markdown_slide=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return markdown_slide__delegate.call(this,args__1668__auto__)};markdown_slide.cljs$lang$maxFixedArity=0;markdown_slide.cljs$lang$applyTo=function(arglist__8591){var args__1668__auto__=cljs.core.seq(arglist__8591);return markdown_slide__delegate(args__1668__auto__)};
markdown_slide.cljs$core$IFn$_invoke$arity$variadic=markdown_slide__delegate;return markdown_slide}();
hoplon.reveal.intro_title=function(){var intro_title__delegate=function(args__1668__auto__){var vec__8593=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8593,0,null);var children=cljs.core.nth.call(null,vec__8593,1,null);if(cljs.core.truth_(hoplon.util.is_text_QMARK_.call(null,children)))return tailrecursion.hoplon.add_attributes_BANG_.call(null,tailrecursion.hoplon.h1.call(null,cljs.core.first.call(null,children)),new cljs.core.PersistentArrayMap(null,
1,[new cljs.core.Keyword(null,"class","class",1108647146),"slide-title intro"],null));else return children};var intro_title=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return intro_title__delegate.call(this,args__1668__auto__)};intro_title.cljs$lang$maxFixedArity=0;intro_title.cljs$lang$applyTo=function(arglist__8594){var args__1668__auto__=cljs.core.seq(arglist__8594);return intro_title__delegate(args__1668__auto__)};
intro_title.cljs$core$IFn$_invoke$arity$variadic=intro_title__delegate;return intro_title}();
hoplon.reveal.chapter_title=function(){var chapter_title__delegate=function(args__1668__auto__){var vec__8596=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8596,0,null);var children=cljs.core.nth.call(null,vec__8596,1,null);if(cljs.core.truth_(hoplon.util.is_text_QMARK_.call(null,children)))return tailrecursion.hoplon.add_attributes_BANG_.call(null,tailrecursion.hoplon.h2.call(null,cljs.core.first.call(null,children)),new cljs.core.PersistentArrayMap(null,
1,[new cljs.core.Keyword(null,"class","class",1108647146),"slide-title chapter"],null));else return children};var chapter_title=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return chapter_title__delegate.call(this,args__1668__auto__)};chapter_title.cljs$lang$maxFixedArity=0;chapter_title.cljs$lang$applyTo=function(arglist__8597){var args__1668__auto__=cljs.core.seq(arglist__8597);return chapter_title__delegate(args__1668__auto__)};
chapter_title.cljs$core$IFn$_invoke$arity$variadic=chapter_title__delegate;return chapter_title}();
hoplon.reveal.slide_title=function(){var slide_title__delegate=function(args__1668__auto__){var vec__8599=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8599,0,null);var children=cljs.core.nth.call(null,vec__8599,1,null);if(cljs.core.truth_(hoplon.util.is_text_QMARK_.call(null,children)))return tailrecursion.hoplon.add_attributes_BANG_.call(null,tailrecursion.hoplon.h3.call(null,cljs.core.first.call(null,children)),new cljs.core.PersistentArrayMap(null,
1,[new cljs.core.Keyword(null,"class","class",1108647146),"slide-title slide"],null));else return children};var slide_title=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return slide_title__delegate.call(this,args__1668__auto__)};slide_title.cljs$lang$maxFixedArity=0;slide_title.cljs$lang$applyTo=function(arglist__8600){var args__1668__auto__=cljs.core.seq(arglist__8600);return slide_title__delegate(args__1668__auto__)};
slide_title.cljs$core$IFn$_invoke$arity$variadic=slide_title__delegate;return slide_title}();
hoplon.reveal.slide=function(){var slide__delegate=function(args__1668__auto__){var vec__8603=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var map__8604=cljs.core.nth.call(null,vec__8603,0,null);var map__8604__$1=cljs.core.seq_QMARK_.call(null,map__8604)?cljs.core.apply.call(null,cljs.core.hash_map,map__8604):map__8604;var attrs=map__8604__$1;var transition=cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"transition","transition",3584712903));var background=cljs.core.get.call(null,
map__8604__$1,new cljs.core.Keyword(null,"background","background",3976677536));var title=cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"title","title",1124275658));var markdown=cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"markdown","markdown",1260843105));var children=cljs.core.nth.call(null,vec__8603,1,null);var attrs__$1=cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"markdown","markdown",1260843105),new cljs.core.Keyword(null,"title","title",
1124275658),new cljs.core.Keyword(null,"background","background",3976677536),new cljs.core.Keyword(null,"transition","transition",3584712903));var attrs__$2=cljs.core.truth_(background)?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"data-background","data-background",3316135587),background):attrs__$1;var attrs__$3=cljs.core.truth_(transition)?cljs.core.assoc.call(null,attrs__$2,new cljs.core.Keyword(null,"data-transition","data-transition",2924170954),transition):attrs__$2;var children__$1=
cljs.core.truth_(title)?cljs.core.concat.call(null,new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[hoplon.reveal.slide_title.call(null,title)],null),children):children;if(cljs.core.truth_(markdown))return hoplon.reveal.markdown_slide.call(null,attrs__$3,children__$1);else return tailrecursion.hoplon.section.call(null,attrs__$3,children__$1)};var slide=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,
0),0);return slide__delegate.call(this,args__1668__auto__)};slide.cljs$lang$maxFixedArity=0;slide.cljs$lang$applyTo=function(arglist__8605){var args__1668__auto__=cljs.core.seq(arglist__8605);return slide__delegate(args__1668__auto__)};slide.cljs$core$IFn$_invoke$arity$variadic=slide__delegate;return slide}();
hoplon.reveal.chapter=function(){var chapter__delegate=function(args__1668__auto__){var vec__8608=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var map__8609=cljs.core.nth.call(null,vec__8608,0,null);var map__8609__$1=cljs.core.seq_QMARK_.call(null,map__8609)?cljs.core.apply.call(null,cljs.core.hash_map,map__8609):map__8609;var attrs=map__8609__$1;var title=cljs.core.get.call(null,map__8609__$1,new cljs.core.Keyword(null,"title","title",1124275658));var children=cljs.core.nth.call(null,
vec__8608,1,null);if(cljs.core.empty_QMARK_.call(null,title))return hoplon.reveal.slide.call(null,cljs.core.PersistentArrayMap.EMPTY,children);else return hoplon.reveal.slide.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[hoplon.reveal.slide.call(null,hoplon.reveal.chapter_title.call(null,title))],null),children))};var chapter=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=
cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return chapter__delegate.call(this,args__1668__auto__)};chapter.cljs$lang$maxFixedArity=0;chapter.cljs$lang$applyTo=function(arglist__8610){var args__1668__auto__=cljs.core.seq(arglist__8610);return chapter__delegate(args__1668__auto__)};chapter.cljs$core$IFn$_invoke$arity$variadic=chapter__delegate;return chapter}();
hoplon.reveal.intro=function(){var intro__delegate=function(args__1668__auto__){var vec__8613=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var map__8614=cljs.core.nth.call(null,vec__8613,0,null);var map__8614__$1=cljs.core.seq_QMARK_.call(null,map__8614)?cljs.core.apply.call(null,cljs.core.hash_map,map__8614):map__8614;var attrs=map__8614__$1;var title=cljs.core.get.call(null,map__8614__$1,new cljs.core.Keyword(null,"title","title",1124275658));var children=cljs.core.nth.call(null,
vec__8613,1,null);if(cljs.core.empty_QMARK_.call(null,title))return hoplon.reveal.slide.call(null,cljs.core.PersistentArrayMap.EMPTY,children);else return hoplon.reveal.slide.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[hoplon.reveal.intro_title.call(null,title)],null),children))};var intro=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,
0),0);return intro__delegate.call(this,args__1668__auto__)};intro.cljs$lang$maxFixedArity=0;intro.cljs$lang$applyTo=function(arglist__8615){var args__1668__auto__=cljs.core.seq(arglist__8615);return intro__delegate(args__1668__auto__)};intro.cljs$core$IFn$_invoke$arity$variadic=intro__delegate;return intro}();
hoplon.reveal.slideshow=function(){var slideshow__delegate=function(args__1668__auto__){var vec__8618=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var map__8619=cljs.core.nth.call(null,vec__8618,0,null);var map__8619__$1=cljs.core.seq_QMARK_.call(null,map__8619)?cljs.core.apply.call(null,cljs.core.hash_map,map__8619):map__8619;var attrs=map__8619__$1;var theme=cljs.core.get.call(null,map__8619__$1,new cljs.core.Keyword(null,"theme","theme",1124231483),"default");var children=cljs.core.nth.call(null,
vec__8618,1,null);tailrecursion.hoplon.add_initfn_BANG_.call(null,function(){return Reveal.initialize(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,"history","history",1940838406),true,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"src","src",1014018390),"reveal.js/plugin/markdown/marked.js"],
null),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"src","src",1014018390),"reveal.js/plugin/markdown/markdown.js"],null),new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"src","src",1014018390),"reveal.js/plugin/highlight/highlight.js",new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"callback","callback",841683895),function(){return hljs.initHighlightingOnLoad()}],null),new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,
"src","src",1014018390),"reveal.js/plugin/notes/notes.js",new cljs.core.Keyword(null,"async","async",1107031534),true],null)],null)],null)))});return tailrecursion.hoplon.div.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"theme","theme",1124231483)),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"reveal"],null)),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",
new cljs.core.Keyword(null,"href","href",1017115293),"reveal.js/css/reveal.css"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),cljs.core.truth_(cljs.core.re_find.call(null,/\.css$/,theme))?theme:[cljs.core.str("reveal.js/css/theme/"),cljs.core.str(theme),cljs.core.str(".css")].join(""),new cljs.core.Keyword(null,"id","id",1013907597),"theme"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,
"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),"reveal.js/plugin/highlight/github.min.css"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"slides",children))};var slideshow=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return slideshow__delegate.call(this,args__1668__auto__)};slideshow.cljs$lang$maxFixedArity=
0;slideshow.cljs$lang$applyTo=function(arglist__8620){var args__1668__auto__=cljs.core.seq(arglist__8620);return slideshow__delegate(args__1668__auto__)};slideshow.cljs$core$IFn$_invoke$arity$variadic=slideshow__delegate;return slideshow}();hoplon.reveal.bullet=tailrecursion.hoplon.div;
hoplon.reveal.bullet=function(){var bullet__delegate=function(args__1668__auto__){var vec__8622=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8622,0,null);var children=cljs.core.nth.call(null,vec__8622,1,null);return tailrecursion.hoplon.div.call(null,cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"style","style",1123684643),"text-align: left"),children)};var bullet=function(var_args){var args__1668__auto__=null;if(arguments.length>
0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return bullet__delegate.call(this,args__1668__auto__)};bullet.cljs$lang$maxFixedArity=0;bullet.cljs$lang$applyTo=function(arglist__8623){var args__1668__auto__=cljs.core.seq(arglist__8623);return bullet__delegate(args__1668__auto__)};bullet.cljs$core$IFn$_invoke$arity$variadic=bullet__delegate;return bullet}();
hoplon.reveal.quicklist=function(){var quicklist__delegate=function(things){return tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_.call(null,things,null,function(item__1675__auto__){var vec__8626=tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.lift.call(null,function(G__8627){var x=G__8627;return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[x],null)}).call(null,item__1675__auto__));var x=cljs.core.nth.call(null,
vec__8626,0,null);return tailrecursion.hoplon.li.call(null,cljs.core.deref.call(null,x))}))};var quicklist=function(var_args){var things=null;if(arguments.length>0)things=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return quicklist__delegate.call(this,things)};quicklist.cljs$lang$maxFixedArity=0;quicklist.cljs$lang$applyTo=function(arglist__8628){var things=cljs.core.seq(arglist__8628);return quicklist__delegate(things)};quicklist.cljs$core$IFn$_invoke$arity$variadic=quicklist__delegate;
return quicklist}();
hoplon.reveal.notes=function(){var notes__delegate=function(args__1668__auto__){var vec__8630=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8630,0,null);var children=cljs.core.nth.call(null,vec__8630,1,null);return tailrecursion.hoplon.aside.call(null,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"notes"],null)),children)};var notes=function(var_args){var args__1668__auto__=null;
if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return notes__delegate.call(this,args__1668__auto__)};notes.cljs$lang$maxFixedArity=0;notes.cljs$lang$applyTo=function(arglist__8631){var args__1668__auto__=cljs.core.seq(arglist__8631);return notes__delegate(args__1668__auto__)};notes.cljs$core$IFn$_invoke$arity$variadic=notes__delegate;return notes}();
hoplon.reveal.highlight=function(){var highlight__delegate=function(args__1668__auto__){var vec__8633=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var attrs=cljs.core.nth.call(null,vec__8633,0,null);var children=cljs.core.nth.call(null,vec__8633,1,null);return tailrecursion.hoplon.pre.call(null,tailrecursion.hoplon.code.call(null,attrs,children))};var highlight=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,
0),0);return highlight__delegate.call(this,args__1668__auto__)};highlight.cljs$lang$maxFixedArity=0;highlight.cljs$lang$applyTo=function(arglist__8634){var args__1668__auto__=cljs.core.seq(arglist__8634);return highlight__delegate(args__1668__auto__)};highlight.cljs$core$IFn$_invoke$arity$variadic=highlight__delegate;return highlight}();
hoplon.reveal.column=function(){var column__delegate=function(args__1668__auto__){var vec__8637=tailrecursion.hoplon.parse_args.call(null,args__1668__auto__);var map__8638=cljs.core.nth.call(null,vec__8637,0,null);var map__8638__$1=cljs.core.seq_QMARK_.call(null,map__8638)?cljs.core.apply.call(null,cljs.core.hash_map,map__8638):map__8638;var attr=map__8638__$1;var percent=cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"percent","percent",4629944247));var children=cljs.core.nth.call(null,
vec__8637,1,null);var attrs=cljs.core.dissoc.call(null,hoplon.reveal.attrs,new cljs.core.Keyword(null,"percent","percent",4629944247));var attrs__$1=cljs.core.truth_(percent)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("float: left; width: "),cljs.core.str(percent),cljs.core.str("%;")].join("")):cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("float: left;")].join(""));return tailrecursion.hoplon.div.call(null,
attrs__$1,children)};var column=function(var_args){var args__1668__auto__=null;if(arguments.length>0)args__1668__auto__=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return column__delegate.call(this,args__1668__auto__)};column.cljs$lang$maxFixedArity=0;column.cljs$lang$applyTo=function(arglist__8639){var args__1668__auto__=cljs.core.seq(arglist__8639);return column__delegate(args__1668__auto__)};column.cljs$core$IFn$_invoke$arity$variadic=column__delegate;return column}();goog.provide("tailrecursion.hoplon.app_pages._training_DOT_html");goog.require("cljs.core");goog.require("tailrecursion.javelin");goog.require("hoplon.reveal");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.javelin");goog.require("hoplon.reveal");
tailrecursion.hoplon.app_pages._training_DOT_html.hoploninit=function hoploninit(){tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){var meta=tailrecursion.hoplon.html_meta;return cljs.core.PersistentVector.EMPTY}()),tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){var G__8876=tailrecursion.hoplon.p.call(null,"Durham, NC");var G__8877=tailrecursion.hoplon.p.call(null,"March 18, 2014");var G__8875=
hoplon.reveal.intro.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"ClojureBridge Teacher Training",G__8876,G__8877);var G__8879=hoplon.reveal.quicklist.call(null,"What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?");var G__8878=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Agenda",G__8879);var G__8881=tailrecursion.hoplon.p.call(null,
"To leave students with enough knowledge that they could go on to learn Clojure on their own.");var G__8880=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Goal",G__8881);var G__8883=hoplon.reveal.quicklist.call(null,"Smart","Motivated","No development experience");var G__8882=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Audience assumptions",G__8883);var G__8886=tailrecursion.hoplon.li.call(null,"Numbers, strings, booleans");
var G__8887=tailrecursion.hoplon.li.call(null,"Vectors and maps");var G__8888=tailrecursion.hoplon.li.call(null,"Functions");var G__8890=tailrecursion.hoplon.code.call(null,"if");var G__8889=tailrecursion.hoplon.li.call(null,G__8890," and boolean logic");var G__8894=tailrecursion.hoplon.li.call(null,"Setting up a Clojure project");var G__8895=tailrecursion.hoplon.li.call(null,"Web development basics with Ring");var G__8896=tailrecursion.hoplon.li.call(null,"Deploying to Heroku");var G__8885=tailrecursion.hoplon.ul.call(null,
G__8886,G__8887,G__8888,G__8889,G__8894,G__8895,G__8896);var G__8884=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Curriculum contents",G__8885);var G__8893=tailrecursion.hoplon.b.call(null,"YUP");var G__8892=tailrecursion.hoplon.p.call(null,G__8893);var G__8891=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Is this ambitious?",G__8892);var G__8898=hoplon.reveal.bullet.call(null,"A web application that uses the World Bank API to show lists of countries by economic/development factor.");
var G__8899=hoplon.reveal.bullet.call(null,"This application will be 80% baked, with 20% for students to fill in.");var G__8897=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"The Global Growth app",G__8898,G__8899);var G__8901=tailrecursion.hoplon.h2.call(null,"Global Growth demo");var G__8900=hoplon.reveal.slide.call(null,G__8901);var G__8904=tailrecursion.hoplon.li.call(null,"Read the curriculum");var G__8905=tailrecursion.hoplon.li.call(null,"Set up Light Table and get familiar with it");
var G__8906=tailrecursion.hoplon.li.call(null,"Try downloading and filling in the Global Growth app");var G__8907=tailrecursion.hoplon.li.call(null,"Try deploying the app to Heroku");var G__8903=tailrecursion.hoplon.ul.call(null,G__8904,G__8905,G__8906,G__8907);var G__8902=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"How to prepare",G__8903);var G__8874=hoplon.reveal.slideshow.call(null,new cljs.core.Keyword(null,"theme","theme",1124231483),"mozilla-theme.css",
G__8875,G__8878,G__8880,G__8882,G__8884,G__8891,G__8897,G__8900,G__8902);return G__8874}()));return tailrecursion.hoplon.init.call(null)};goog.exportSymbol("tailrecursion.hoplon.app_pages._training_DOT_html.hoploninit",tailrecursion.hoplon.app_pages._training_DOT_html.hoploninit);goog.provide("tailrecursion.hoplon.reload");goog.require("cljs.core");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.hoplon");goog.require("clojure.string");goog.require("clojure.string");
tailrecursion.hoplon.reload.reload_BANG_=function reload_BANG_(sheet){var temp__4092__auto__=sheet.href;if(cljs.core.truth_(temp__4092__auto__)){var h=temp__4092__auto__;var k="___tailrecursion_hoplon_reload___\x3d";var q=[cljs.core.str(k),cljs.core.str((new Date).getTime())].join("");return sheet.ownerNode.href=h.indexOf("?")<0?[cljs.core.str(h),cljs.core.str("?"),cljs.core.str(q)].join(""):h.indexOf(k)<0?[cljs.core.str(h),cljs.core.str("\x26"),cljs.core.str(q)].join(""):new cljs.core.Keyword(null,
"else","else",1017020587)?clojure.string.replace.call(null,h,cljs.core.re_pattern.call(null,[cljs.core.str(k),cljs.core.str("\\d+")].join("")),q):null}else return null};
tailrecursion.hoplon.reload.file_modified_atom=function file_modified_atom(url,interval){var last_mod=cljs.core.atom.call(null,null);var xhr_opts=new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"type","type",1017479852),"HEAD",new cljs.core.Keyword(null,"dataType","dataType",2802975094),"text"],null);var xhr_dev_QMARK_=function(last_mod,xhr_opts){return function(p1__10647_SHARP_){return cljs.core._EQ_.call(null,"true",p1__10647_SHARP_.getResponseHeader("X-Dev-Mode"))}}(last_mod,
xhr_opts);var do_ajax=function(last_mod,xhr_opts,xhr_dev_QMARK_){return function(p1__10648_SHARP_,p2__10649_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,p1__10648_SHARP_,new cljs.core.Keyword(null,"success","success",3441701749),p2__10649_SHARP_)))}}(last_mod,xhr_opts,xhr_dev_QMARK_);var xhr_mod=function(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){return function(p1__10650_SHARP_){return Date.parse(p1__10650_SHARP_.getResponseHeader("Last-Modified"))}}(last_mod,
xhr_opts,xhr_dev_QMARK_,do_ajax);(function(){var do_poll__delegate=function(p__10654){var vec__10656=p__10654;var _=cljs.core.nth.call(null,vec__10656,0,null);var ___$1=cljs.core.nth.call(null,vec__10656,1,null);var xhr=cljs.core.nth.call(null,vec__10656,2,null);if(cljs.core.truth_(xhr))cljs.core.reset_BANG_.call(null,last_mod,xhr_mod.call(null,xhr));else;if(cljs.core.not.call(null,xhr)||xhr_dev_QMARK_.call(null,xhr))return setTimeout(function(){return do_ajax.call(null,xhr_opts,do_poll)},interval);
else return null};var do_poll=function(var_args){var p__10654=null;if(arguments.length>0)p__10654=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return do_poll__delegate.call(this,p__10654)};do_poll.cljs$lang$maxFixedArity=0;do_poll.cljs$lang$applyTo=function(arglist__10657){var p__10654=cljs.core.seq(arglist__10657);return do_poll__delegate(p__10654)};do_poll.cljs$core$IFn$_invoke$arity$variadic=do_poll__delegate;return do_poll})().call(null);return last_mod};
tailrecursion.hoplon.reload.on_modified=function on_modified(url,interval,callback){return cljs.core.add_watch.call(null,tailrecursion.hoplon.reload.file_modified_atom.call(null,url,function(){var or__6732__auto__=interval;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 100}()),null,function(p1__10660_SHARP_,p2__10661_SHARP_,p3__10658_SHARP_,p4__10659_SHARP_){if(cljs.core.truth_(function(){var and__6720__auto__=p3__10658_SHARP_;if(cljs.core.truth_(and__6720__auto__))return cljs.core.not_EQ_.call(null,
p3__10658_SHARP_,p4__10659_SHARP_);else return and__6720__auto__}()))return callback.call(null);else return null})};
tailrecursion.hoplon.reload.reload_js=function(){var reload_js__delegate=function(p__10662){var vec__10664=p__10662;var interval=cljs.core.nth.call(null,vec__10664,0,null);return tailrecursion.hoplon.reload.on_modified.call(null,"main.js",interval,function(){return window.location.reload()})};var reload_js=function(var_args){var p__10662=null;if(arguments.length>0)p__10662=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return reload_js__delegate.call(this,p__10662)};reload_js.cljs$lang$maxFixedArity=
0;reload_js.cljs$lang$applyTo=function(arglist__10665){var p__10662=cljs.core.seq(arglist__10665);return reload_js__delegate(p__10662)};reload_js.cljs$core$IFn$_invoke$arity$variadic=reload_js__delegate;return reload_js}();
tailrecursion.hoplon.reload.reload_css=function(){var reload_css__delegate=function(p__10667){var vec__10685=p__10667;var interval=cljs.core.nth.call(null,vec__10685,0,null);return function wait_css(){var css=document.styleSheets;var each=cljs.core.range.call(null,0,css.length);var css_seq=cljs.core.keep.call(null,function(css,each){return function(p1__10666_SHARP_){return p1__10666_SHARP_.href}}(css,each),function(){var iter__7449__auto__=function(css,each){return function iter__10694(s__10695){return new cljs.core.LazySeq(null,
function(css,each){return function(){var s__10695__$1=s__10695;while(true){var temp__4092__auto__=cljs.core.seq.call(null,s__10695__$1);if(temp__4092__auto__){var s__10695__$2=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10695__$2)){var c__7447__auto__=cljs.core.chunk_first.call(null,s__10695__$2);var size__7448__auto__=cljs.core.count.call(null,c__7447__auto__);var b__10697=cljs.core.chunk_buffer.call(null,size__7448__auto__);if(function(){var i__10696=0;while(true){if(i__10696<
size__7448__auto__){var s=cljs.core._nth.call(null,c__7447__auto__,i__10696);cljs.core.chunk_append.call(null,b__10697,css[s]);var G__10702=i__10696+1;i__10696=G__10702;continue}else return true;break}}())return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10697),iter__10694.call(null,cljs.core.chunk_rest.call(null,s__10695__$2)));else return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10697),null)}else{var s=cljs.core.first.call(null,s__10695__$2);return cljs.core.cons.call(null,
css[s],iter__10694.call(null,cljs.core.rest.call(null,s__10695__$2)))}}else return null;break}}}(css,each),null,null)}}(css,each);return iter__7449__auto__.call(null,each)}());if(cljs.core.not.call(null,cljs.core.seq.call(null,css_seq)))return setTimeout(wait_css,function(){var or__6732__auto__=interval;if(cljs.core.truth_(or__6732__auto__))return or__6732__auto__;else return 100}());else{var seq__10698=cljs.core.seq.call(null,cljs.core.range.call(null,0,css.length));var chunk__10699=null;var count__10700=
0;var i__10701=0;while(true){if(i__10701<count__10700){var s=cljs.core._nth.call(null,chunk__10699,i__10701);var temp__4092__auto___10703=css[s];if(cljs.core.truth_(temp__4092__auto___10703)){var sheet_10704=temp__4092__auto___10703;var temp__4092__auto___10705__$1=sheet_10704.href;if(cljs.core.truth_(temp__4092__auto___10705__$1)){var href_10706=temp__4092__auto___10705__$1;tailrecursion.hoplon.reload.on_modified.call(null,href_10706,interval,function(seq__10698,chunk__10699,count__10700,i__10701,
href_10706,temp__4092__auto___10705__$1,sheet_10704,temp__4092__auto___10703,s){return function(){return tailrecursion.hoplon.reload.reload_BANG_.call(null,css[s])}}(seq__10698,chunk__10699,count__10700,i__10701,href_10706,temp__4092__auto___10705__$1,sheet_10704,temp__4092__auto___10703,s))}else;}else;var G__10707=seq__10698;var G__10708=chunk__10699;var G__10709=count__10700;var G__10710=i__10701+1;seq__10698=G__10707;chunk__10699=G__10708;count__10700=G__10709;i__10701=G__10710;continue}else{var temp__4092__auto__=
cljs.core.seq.call(null,seq__10698);if(temp__4092__auto__){var seq__10698__$1=temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10698__$1)){var c__7480__auto__=cljs.core.chunk_first.call(null,seq__10698__$1);var G__10711=cljs.core.chunk_rest.call(null,seq__10698__$1);var G__10712=c__7480__auto__;var G__10713=cljs.core.count.call(null,c__7480__auto__);var G__10714=0;seq__10698=G__10711;chunk__10699=G__10712;count__10700=G__10713;i__10701=G__10714;continue}else{var s=cljs.core.first.call(null,
seq__10698__$1);var temp__4092__auto___10715__$1=css[s];if(cljs.core.truth_(temp__4092__auto___10715__$1)){var sheet_10716=temp__4092__auto___10715__$1;var temp__4092__auto___10717__$2=sheet_10716.href;if(cljs.core.truth_(temp__4092__auto___10717__$2)){var href_10718=temp__4092__auto___10717__$2;tailrecursion.hoplon.reload.on_modified.call(null,href_10718,interval,function(seq__10698,chunk__10699,count__10700,i__10701,href_10718,temp__4092__auto___10717__$2,sheet_10716,temp__4092__auto___10715__$1,
s,seq__10698__$1,temp__4092__auto__){return function(){return tailrecursion.hoplon.reload.reload_BANG_.call(null,css[s])}}(seq__10698,chunk__10699,count__10700,i__10701,href_10718,temp__4092__auto___10717__$2,sheet_10716,temp__4092__auto___10715__$1,s,seq__10698__$1,temp__4092__auto__))}else;}else;var G__10719=cljs.core.next.call(null,seq__10698__$1);var G__10720=null;var G__10721=0;var G__10722=0;seq__10698=G__10719;chunk__10699=G__10720;count__10700=G__10721;i__10701=G__10722;continue}}else return null}break}}}.call(null)};
var reload_css=function(var_args){var p__10667=null;if(arguments.length>0)p__10667=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return reload_css__delegate.call(this,p__10667)};reload_css.cljs$lang$maxFixedArity=0;reload_css.cljs$lang$applyTo=function(arglist__10723){var p__10667=cljs.core.seq(arglist__10723);return reload_css__delegate(p__10667)};reload_css.cljs$core$IFn$_invoke$arity$variadic=reload_css__delegate;return reload_css}();
tailrecursion.hoplon.reload.reload_all=function(){var reload_all__delegate=function(p__10724){var vec__10726=p__10724;var interval=cljs.core.nth.call(null,vec__10726,0,null);tailrecursion.hoplon.reload.reload_js.call(null,interval);return tailrecursion.hoplon.reload.reload_css.call(null,interval)};var reload_all=function(var_args){var p__10724=null;if(arguments.length>0)p__10724=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return reload_all__delegate.call(this,p__10724)};reload_all.cljs$lang$maxFixedArity=
0;reload_all.cljs$lang$applyTo=function(arglist__10727){var p__10724=cljs.core.seq(arglist__10727);return reload_all__delegate(p__10724)};reload_all.cljs$core$IFn$_invoke$arity$variadic=reload_all__delegate;return reload_all}();goog.provide("tailrecursion.hoplon.app_pages._index_DOT_html");goog.require("cljs.core");goog.require("tailrecursion.hoplon.reload");goog.require("tailrecursion.javelin");goog.require("hoplon.reveal");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.hoplon");goog.require("tailrecursion.javelin");goog.require("tailrecursion.hoplon.reload");goog.require("hoplon.reveal");
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit=function hoploninit(){if(cljs.core._EQ_.call(null,window.location.search,"?dev")){cljs.core.print.call(null,"Autoreloading");tailrecursion.hoplon.reload.reload_all.call(null)}else;tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){var meta=tailrecursion.hoplon.html_meta;return cljs.core.PersistentVector.EMPTY}()),tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,
function(){var G__8770=tailrecursion.hoplon.p.call(null,"Durham, NC");var G__8771=tailrecursion.hoplon.p.call(null,"April 5, 2014");var G__8769=hoplon.reveal.intro.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"ClojureBridge",G__8770,G__8771);var G__8774=tailrecursion.hoplon.p.call(null,"Clojure is simple and powerful.");var G__8775=tailrecursion.hoplon.p.call(null,"Clojure is all-purpose.");var G__8788=tailrecursion.hoplon.em.call(null,"fun");var G__8787=tailrecursion.hoplon.p.call(null,
"Clojure is ",G__8788,".");var G__8773=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Why Clojure?",G__8774,G__8775,G__8787);var G__8778=tailrecursion.hoplon.li.call(null,"data processing");var G__8779=tailrecursion.hoplon.li.call(null,"concurrent applications");var G__8780=tailrecursion.hoplon.li.call(null,"web applications");var G__8781=tailrecursion.hoplon.li.call(null,"everything!");var G__8777=tailrecursion.hoplon.ul.call(null,G__8778,G__8779,G__8780,G__8781);
var G__8776=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"What is Clojure good at?",G__8777);var G__8790=hoplon.reveal.highlight.call(null,'(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")');var G__8789=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"What does Clojure look like?",G__8790);var G__8796=tailrecursion.hoplon.b.call(null,"R");var G__8795=tailrecursion.hoplon.li.call(null,G__8796,"ead");var G__8798=tailrecursion.hoplon.b.call(null,
"E");var G__8797=tailrecursion.hoplon.li.call(null,G__8798,"val");var G__8800=tailrecursion.hoplon.b.call(null,"P");var G__8799=tailrecursion.hoplon.li.call(null,G__8800,"rint");var G__8802=tailrecursion.hoplon.b.call(null,"L");var G__8801=tailrecursion.hoplon.li.call(null,G__8802,"oop");var G__8794=tailrecursion.hoplon.ul.call(null,G__8795,G__8797,G__8799,G__8801);var G__8793=hoplon.reveal.column.call(null,new cljs.core.Keyword(null,"percent","percent",4629944247),40,G__8794);var G__8804=tailrecursion.hoplon.img.call(null,
new cljs.core.Keyword(null,"src","src",1014018390),"/img/instarepl.png");var G__8803=hoplon.reveal.column.call(null,G__8804);var G__8792=tailrecursion.hoplon.div.call(null,G__8793,G__8803);var G__8791=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"What is a REPL?",G__8792);var G__8772=hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Introduction to Programming with Clojure",G__8773,G__8776,G__8789,G__8791);var G__8784=hoplon.reveal.quicklist.call(null,
"numbers","strings","booleans","keywords");var G__8783=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Value types",G__8784);var G__8786=hoplon.reveal.highlight.call(null,";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3");var G__8785=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Numbers",G__8786);var G__8812=hoplon.reveal.highlight.call(null,"(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3");
var G__8811=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Arithmetic",G__8812);var G__8816=tailrecursion.hoplon.code.call(null,"1 + 2 * 3 / 4 - 5");var G__8815=hoplon.reveal.bullet.call(null,"Infix: ",G__8816);var G__8818=tailrecursion.hoplon.code.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)");var G__8817=hoplon.reveal.bullet.call(null,"Prefix: ",G__8818);var G__8814=tailrecursion.hoplon.p.call(null,G__8815,G__8817);var G__8821=tailrecursion.hoplon.code.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9");
var G__8820=hoplon.reveal.bullet.call(null,"Infix: ",G__8821);var G__8823=tailrecursion.hoplon.code.call(null,"(+ 1 2 3 4 5 6 7 8 9)");var G__8822=hoplon.reveal.bullet.call(null,"Prefix: ",G__8823);var G__8819=tailrecursion.hoplon.p.call(null,G__8820,G__8822);var G__8813=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Infix vs. prefix notation",G__8814,G__8819);var G__8825=hoplon.reveal.highlight.call(null,"(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0");
var G__8824=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Arithmetic with all number types",G__8825);var G__8828=tailrecursion.hoplon.li.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure.");var G__8829=tailrecursion.hoplon.li.call(null,"Then convert that to meters. There are 39.3701 inches in a meter.");var G__8830=tailrecursion.hoplon.li.call(null,"Lastly, ask two people near you for their height in meters. Find the average of your heights.");
var G__8832=tailrecursion.hoplon.p.call(null,"Bonus: convert that average back to feet and inches.");var G__8834=tailrecursion.hoplon.code.call(null,"(mod x y)");var G__8833=tailrecursion.hoplon.p.call(null,G__8834," will give you the remainder when dividing two numbers.");var G__8831=tailrecursion.hoplon.li.call(null,G__8832,G__8833);var G__8827=tailrecursion.hoplon.ul.call(null,G__8828,G__8829,G__8830,G__8831);var G__8826=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",
1124275658),"Exercise: Basic arithmetic",G__8827);var G__8836=hoplon.reveal.highlight.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""');var G__8835=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Strings",G__8836);var G__8838=tailrecursion.hoplon.p.call(null,"Answers to questions");
var G__8839=hoplon.reveal.highlight.call(null,"true\nfalse\nnil");var G__8837=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Booleans and nil",G__8838,G__8839);var G__8782=hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Simple values",G__8783,G__8785,G__8811,G__8813,G__8824,G__8826,G__8835,G__8837);var G__8807=hoplon.reveal.highlight.call(null,"(def apples 3)\n(def oranges 5)\n(+ apples oranges)");var G__8806=hoplon.reveal.slide.call(null,
new cljs.core.Keyword(null,"title","title",1124275658),"def",G__8807);var G__8810=tailrecursion.hoplon.code.call(null,"my-hometown");var G__8809=tailrecursion.hoplon.p.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",G__8810,".");var G__8808=hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Exercise: Store the name of your hometown",G__8809);var G__8805=hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Assigning names to values",G__8806,G__8808);var G__8768=hoplon.reveal.slideshow.call(null,new cljs.core.Keyword(null,"theme","theme",1124231483),"mozilla-theme.css",G__8769,G__8772,G__8782,G__8805);return G__8768}()));return tailrecursion.hoplon.init.call(null)};goog.exportSymbol("tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit",tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
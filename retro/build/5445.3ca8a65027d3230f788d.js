"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5445],{75445:(n,e,t)=>{t.r(e),t.d(e,{Signal:()=>r});var i,c=t(35822),r=function(){function n(n){this.sender=n}return n.prototype.connect=function(n,e){return i.connect(this,n,e)},n.prototype.disconnect=function(n,e){return i.disconnect(this,n,e)},n.prototype.emit=function(n){i.emit(this,n)},n}();!function(n){n.disconnectBetween=function(n,e){i.disconnectBetween(n,e)},n.disconnectSender=function(n){i.disconnectSender(n)},n.disconnectReceiver=function(n){i.disconnectReceiver(n)},n.disconnectAll=function(n){i.disconnectAll(n)},n.clearData=function(n){i.disconnectAll(n)},n.getExceptionHandler=function(){return i.exceptionHandler},n.setExceptionHandler=function(n){var e=i.exceptionHandler;return i.exceptionHandler=n,e}}(r||(r={})),function(n){function e(n){var e=i.get(n);e&&0!==e.length&&((0,c.each)(e,(function(n){if(n.signal){var e=n.thisArg||n.slot;n.signal=null,u(r.get(e))}})),u(e))}function t(n){var e=r.get(n);e&&0!==e.length&&((0,c.each)(e,(function(n){if(n.signal){var e=n.signal.sender;n.signal=null,u(i.get(e))}})),u(e))}n.exceptionHandler=function(n){console.error(n)},n.connect=function(n,e,t){t=t||void 0;var c=i.get(n.sender);if(c||(c=[],i.set(n.sender,c)),a(c,n,e,t))return!1;var o=t||e,s=r.get(o);s||(s=[],r.set(o,s));var l={signal:n,slot:e,thisArg:t};return c.push(l),s.push(l),!0},n.disconnect=function(n,e,t){t=t||void 0;var c=i.get(n.sender);if(!c||0===c.length)return!1;var o=a(c,n,e,t);if(!o)return!1;var s=t||e,l=r.get(s);return o.signal=null,u(c),u(l),!0},n.disconnectBetween=function(n,e){var t=i.get(n);if(t&&0!==t.length){var o=r.get(e);o&&0!==o.length&&((0,c.each)(o,(function(e){e.signal&&e.signal.sender===n&&(e.signal=null)})),u(t),u(o))}},n.disconnectSender=e,n.disconnectReceiver=t,n.disconnectAll=function(n){e(n),t(n)},n.emit=function(n,e){var t=i.get(n.sender);if(t&&0!==t.length)for(var c=0,r=t.length;c<r;++c){var o=t[c];o.signal===n&&l(o,e)}};var i=new WeakMap,r=new WeakMap,o=new Set,s="function"==typeof requestAnimationFrame?requestAnimationFrame:setImmediate;function a(n,e,t,i){return(0,c.find)(n,(function(n){return n.signal===e&&n.slot===t&&n.thisArg===i}))}function l(e,t){var i=e.signal,c=e.slot,r=e.thisArg;try{c.call(r,i.sender,t)}catch(e){n.exceptionHandler(e)}}function u(n){0===o.size&&s(f),o.add(n)}function f(){o.forEach(d),o.clear()}function d(n){c.ArrayExt.removeAllWhere(n,g)}function g(n){return null===n.signal}}(i||(i={}))}}]);
//# sourceMappingURL=5445.3ca8a65027d3230f788d.js.map
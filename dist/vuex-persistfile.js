!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1),a=r(i),c=n(2),f=r(c),s=n(3),l=r(s),p=function(){function t(e){if(o(this,t),this.options=Object.assign({path:null,file:"store.json",reducer:null,mutations:[]},e),!this.options.path)throw new Error("Path not specified");this.options.path=a.default.join(this.options.path,this.options.file)}return u(t,[{key:"saveState",value:function(t){f.default.writeFileSync(this.options.path,JSON.stringify(this.options.reducer?this.options.reducer(t):t),"utf8")}},{key:"loadState",value:function(t){try{var e=f.default.readFileSync(this.options.path,"utf8");t.replaceState((0,l.default)(t.state,JSON.parse(e)))}catch(t){}}},{key:"subscribe",value:function(){var t=this;return function(e){t.loadState(e),e.subscribe(function(e,n){t._mutation(e.type)&&t.saveState(n)})}}},{key:"_mutation",value:function(t){return!this.options.mutations.length||this.options.mutations.includes(t)}}]),t}();e.default=p},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("fs")},function(t,e,n){"use strict";function r(t){return!!t&&"object"==typeof t}function o(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||u(t)}function u(t){return t.$$typeof===y}function i(t){return Array.isArray(t)?[]:{}}function a(t,e){return e&&!1===e.clone||!l(t)?t:s(i(t),t,e)}function c(t,e,n){return t.concat(e).map(function(t){return a(t,n)})}function f(t,e,n){var r={};return l(t)&&Object.keys(t).forEach(function(e){r[e]=a(t[e],n)}),Object.keys(e).forEach(function(o){l(e[o])&&t[o]?r[o]=s(t[o],e[o],n):r[o]=a(e[o],n)}),r}function s(t,e,n){var r=Array.isArray(e),o=Array.isArray(t),u=n||{arrayMerge:c};if(r===o)return r?(u.arrayMerge||c)(t,e,n):f(t,e,n);return a(e,n)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){return r(t)&&!o(t)},p="function"==typeof Symbol&&Symbol.for,y=p?Symbol.for("react.element"):60103;s.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return s(t,n,e)},{})};var h=s;e.default=h}]);
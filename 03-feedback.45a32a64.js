!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i=o("hKHmD"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f.default(e,t,n[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var c,l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",s=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,O=y||g||Function("return this")(),j=Object.prototype.toString,x=Math.max,h=Math.min,w=function(){return O.Date.now()};function S(e,t,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function m(e){return c=e,a=setTimeout(y,t),l?v(e):u}function b(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function y(){var e=w();if(b(e))return g(e);a=setTimeout(y,function(e){var n=t-(e-f);return s?h(n,i-(e-c)):n}(e))}function g(e){return a=void 0,p&&r?v(e):(r=o=void 0,u)}function O(){var e=w(),n=b(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return m(f);if(s)return a=setTimeout(y,t),v(f)}return void 0===a&&(a=setTimeout(y,t)),u}return t=T(t)||0,_(n)&&(l=!!n.leading,i=(s="maxWait"in n)?x(T(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(w())},O}function _(t){var n=void 0===t?"undefined":e(l)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(_(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=_(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=v.test(t);return r||m.test(t)?b(t.slice(2),r?2:8):p.test(t)?NaN:+t}c=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return _(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var E,D={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},M="feedback-form-state",N={};function P(t){N=e(u)({},N,e(i)({},t.target.name,t.target.value));var n=JSON.stringify(N);localStorage.setItem(M,n)}D.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(N),e.currentTarget.reset(),N={},localStorage.removeItem(M)})),D.input.addEventListener("input",e(c)(P,500)),D.textarea.addEventListener("input",e(c)(P,500)),(E=localStorage.getItem(M))&&(N=JSON.parse(E),D.input.value=N.email||"",D.textarea.value=N.message||"")}();
//# sourceMappingURL=03-feedback.45a32a64.js.map

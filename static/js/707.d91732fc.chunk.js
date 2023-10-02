/*! For license information please see 707.d91732fc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{687:function(t,r,n){n.d(r,{Ph:function(){return u},jP:function(){return a},mU:function(){return c}});var e=n(861),o=n(243);function i(){i=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new _(e||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",y="completed",v={};function g(){}function m(){}function x(){}var w={};h(w,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(J([])));j&&j!==n&&e.call(j,c)&&(w=j);var L=x.prototype=g.prototype=Object.create(w);function Z(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=N(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=l(r,n,e);if("normal"===s.type){if(o=e.done?y:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=y,e.method="throw",e.arg=s.arg)}}}function N(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,N(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=l(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function J(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=h(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},Z(E.prototype),h(E.prototype,u,(function(){return this})),r.AsyncIterator=E,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new E(f(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(L),h(L,s,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=J,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:J(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}o.Z.defaults.baseURL="".concat("https://api.themoviedb.org/3");var a=function(){var t=(0,e.Z)(i().mark((function t(r,n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/trending/movie/week",{params:{language:"en-US",page:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks"},signal:n});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),c=function(){var t=(0,e.Z)(i().mark((function t(r,n,e){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r).concat(e),{params:{language:"en-US"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks"},signal:n});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(r,n,e){return t.apply(this,arguments)}}(),u=function(){var t=(0,e.Z)(i().mark((function t(r,n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie",{params:{language:"en-US",page:1,query:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks"},signal:n});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}()},768:function(t,r,n){n.d(r,{y:function(){return y}});var e,o,i,a=n(689),c=n(87),u=n(168),s=n(867),h=s.ZP.li(e||(e=(0,u.Z)(["\n  border-radius: 12px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  width: 300px;\n"]))),f=s.ZP.h2(o||(o=(0,u.Z)(["\n  color: green;\n  font-size: large;\n  font-weight: 600;\n  line-height: 1.3;\n  margin-top: 10px;\n  min-height: 80px;\n  padding: 16px;\n  text-decoration-line: none;\n"]))),l=n(184),p=function(t){var r=t.id,n=t.poster,e=t.name,o=(0,a.TH)();return(0,l.jsx)(h,{children:(0,l.jsxs)(c.rU,{to:"/movies/"+r,state:{from:o},children:[(0,l.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w300".concat(n):"https://i.imgur.com/GhqsTtz.jpg;",alt:e,width:"300px",height:"450px"}),(0,l.jsx)(f,{children:e})]})})},d=s.ZP.ul(i||(i=(0,u.Z)(["\n  display: grid;\n  gap: 16px;\n  grid-gap: 16px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  list-style: none;\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 48px;\n  width: 100%;\n  @media (min-width: 712px) {\n    width: 712px;\n  }\n  @media (min-width: 1028px) {\n    width: 1028px;\n  }\n  @media (min-width: 1344px) {\n    width: 1344px;\n  }\n  @media (min-width: 1660px) {\n    width: 1660px;\n  }\n"]))),y=function(t){var r=t.movieArr;return(0,l.jsx)(d,{children:r?r.map((function(t){return(0,l.jsx)(p,{id:t.id,poster:t.poster_path,name:t.title},t.id)})):(0,l.jsx)("p",{children:"We did not find any movies for this query. Try again."})})}},707:function(t,r,n){n.r(r),n.d(r,{default:function(){return k}});var e,o,i,a,c=n(861),u=n(439),s=n(87),h=n(791),f=n(203),l=n(687),p=n(168),d=n(867),y=d.ZP.div(e||(e=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),v=d.ZP.form(o||(o=(0,p.Z)(["\n  display: flex;\n  outline: 0;\n  padding: 10px 18px;\n  position: relative;\n  width: calc(100vw - 60px);\n"]))),g=d.ZP.input(i||(i=(0,p.Z)(["\n  background: #fff;\n  border: 0;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);\n  color: #a3a3a3;\n  font: inherit;\n  outline: 0;\n  padding: 22px 18px;\n  width: 100%;\n"]))),m=d.ZP.button(a||(a=(0,p.Z)(["\n  background-color: hidden;\n  border: 0;\n  border-radius: 2px;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\n  color: white;\n  cursor: pointer;\n  font: inherit;\n  outline: 0;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: all 200ms ease-in;\n\n  :hover {\n    background: hidden;\n  }\n\n  :active {\n    background: #7f8ff4;\n    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  }\n"]))),x=n(768),w=n(184);function b(){b=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function h(t,r,n,e){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new _(e||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var l="suspendedStart",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(J([])));j&&j!==n&&e.call(j,a)&&(x=j);var L=m.prototype=v.prototype=Object.create(x);function Z(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,n,e){var o=l;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=N(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===l)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var s=f(r,n,e);if("normal"===s.type){if(o=e.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=d,e.method="throw",e.arg=s.arg)}}}function N(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,N(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=f(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function J(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},Z(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new E(h(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=J,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:J(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),y}},r}var j=function(){var t=(0,h.useRef)(),r=(0,s.lr)(),n=(0,u.Z)(r,2),e=n[0],o=n[1],i=(0,h.useState)(""),a=(0,u.Z)(i,2),p=a[0],d=a[1],j=(0,h.useState)([]),L=(0,u.Z)(j,2),Z=L[0],E=L[1];return(0,h.useEffect)((function(){if(e){var r=function(){var r=(0,c.Z)(b().mark((function r(){var n,o;return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.current=new AbortController,n=t.current.signal,r.next=5,(0,l.Ph)(e.get("query"),n);case 5:o=r.sent,E(o.results),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return t.current.abort()}}}),[e]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y,{children:(0,w.jsxs)(v,{onSubmit:function(t){t.preventDefault(),o({query:p})},children:[(0,w.jsx)(g,{id:"search-input",type:"text",placeholder:"Search your movie",onChange:function(t){return d(t.target.value)},value:p}),(0,w.jsx)(m,{type:"submit",children:(0,w.jsx)(f.XPI,{})})]})}),(0,w.jsx)(x.y,{movieArr:Z})]})},L=n(689),Z=n(706),E=n(820),k=function(){var t=(0,L.TH)(),r=(0,L.s0)();return(0,w.jsxs)(Z.p,{children:["/movies"!==t.pathname&&(0,w.jsx)(E.kyg,{onClick:function(){var n;null!==(n=t.state)&&void 0!==n&&n.from?r(t.state.from):r("/")}}),(0,w.jsx)(j,{})]})}},706:function(t,r,n){n.d(r,{V:function(){return s},p:function(){return u}});var e,o,i=n(168),a=n(867),c=n(87),u=a.ZP.div(e||(e=(0,i.Z)(["\n  padding: 0 30px;\n  padding-top: 20px;\n  max-width: 1660px;\n  margin: 0 auto;\n"]))),s=(0,a.ZP)(c.rU)(o||(o=(0,i.Z)(["\n  display: inline-block;\n  background: transparent;\n  color: white;\n  background-color: #7f8ff4;\n  font: inherit;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  transition: all 200ms ease-in;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  padding: 12px 36px;\n\n  :hover {\n    background: #7183f2;\n  }\n\n  :active {\n    background: #7f8ff4;\n    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  }\n"])))}}]);
//# sourceMappingURL=707.d91732fc.chunk.js.map
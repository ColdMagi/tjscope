!function(){"use strict";function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function r(r,n){if(r){if("string"===typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(r,n):void 0}}function n(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,a,o=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);u=!0);}catch(l){i=!0,a=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||r(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=function(t){var e,a={},o=function(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=r(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){l=!0,u=t},f:function(){try{i||null==e.return||e.return()}finally{if(l)throw u}}}}(t);try{for(o.s();!(e=o.n()).done;)for(var u=e.value,i=0,l=Object.entries(u.result);i<l.length;i++){var f=n(l[i],2),c=f[0],s=f[1];Reflect.has(a,c)||(a[c]={minus:0,plus:0,total:0,avatar_url:"",name:"",id:c}),a[c].minus+=Number(s.sign<0),a[c].plus+=Number(s.sign>0),a[c].total++,a[c].avatar_url=s.avatar_url,a[c].name=s.name}}catch(y){o.e(y)}finally{o.f()}return a};self.onmessage=function(t){postMessage(e(t.data))}}();
//# sourceMappingURL=386.5ee33ba3.chunk.js.map
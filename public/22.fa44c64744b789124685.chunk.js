(this.webpackJsonp=this.webpackJsonp||[]).push([[22],{154:function(t,n,r){"use strict";function e(...t){const n=t.reduce((t,n)=>t+(n.byteLength||n.length),0),r=new Uint8Array(n);let e=0;return t.forEach(t=>{r.set(t instanceof ArrayBuffer?new Uint8Array(t):t,e),e+=t.byteLength||t.length}),r}r.d(n,"a",(function(){return e}))},155:function(t,n,r){"use strict";function e(t){const n=t.length,r=new Uint8Array(Math.ceil(n/2));let e=0;n%2&&(r[e++]=parseInt(t.charAt(0),16));for(let o=e;o<n;o+=2)r[e++]=parseInt(t.substr(o,2),16);return r}r.d(n,"a",(function(){return e}))},156:function(t,n,r){"use strict";function e(t){const n=t.length,r=new Array(n);for(let e=0;e<n;++e)r[e]=(t[e]<16?"0":"")+(t[e]||0).toString(16);return r.join("")}r.d(n,"a",(function(){return e}))},27:function(t,n,r){"use strict";r.r(n);var e=r(154),o=r(155),i=r(156);Object.defineProperty(Uint8Array.prototype,"hex",{get:function(){return Object(i.a)(this)},set:function(t){this.set(Object(o.a)(t))},enumerable:!0,configurable:!0}),Uint8Array.prototype.randomize=function(){if(!crypto||!("getRandomValues"in crypto))throw new Error("NO_SECURE_RANDOM");return crypto.getRandomValues(this),this},Uint8Array.prototype.concat=function(...t){return Object(e.a)(this,...t)},Uint8Array.prototype.toJSON=function(){return[...this]},Array.prototype.findAndSplice=function(t){let n=this.findIndex(t);return-1!==n?this.splice(n,1)[0]:void 0},String.prototype.toHHMMSS=function(t=!1){const n=parseInt(this+"",10),r=Math.floor(n/3600);let e=Math.floor((n-3600*r)/60),o=n-3600*r-60*e;return r&&(t=!0),e<10&&(e=t?"0"+e:e),o<10&&(o="0"+o),(r?r+":":"")+e+":"+o},Promise.prototype.finally=Promise.prototype.finally||function(t){const n=n=>Promise.resolve(t()).then(n);return this.then(t=>n(()=>t),t=>n(()=>Promise.reject(t)))},Promise.prototype.safeFinally=function(t){return this.catch(()=>{}).finally(t)}}}]);
//# sourceMappingURL=22.fa44c64744b789124685.chunk.js.map
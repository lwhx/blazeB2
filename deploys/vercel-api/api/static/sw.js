if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const o=e=>i(e,c),t={module:{uri:c},exports:n,require:o};s[c]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(f(...e),n)))}}define(["./workbox-97c586e7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1719067666310"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/ImgManage-77057876.css",revision:"32e213d1b244844e16700192b25a8c44"},{url:"css/index-0f36b718.css",revision:"e88aab060248e15fac678b52e4675bb9"},{url:"index.html",revision:"a2510672c68a075f5561f089cb86f5c7"},{url:"js/ImgManage-51787f1b.js",revision:"59ff29763ac97d5c3bda2b3de7feeac4"},{url:"js/ImgManage-legacy-122a9e28.js",revision:"7fdbf15a5f6c81976fc437f29b1005fe"},{url:"js/index-6fefb80f.js",revision:"3b7f64307c4f772ddc79ebeb057979f4"},{url:"js/index-legacy-f9e9823f.js",revision:"6b8a117879668f61bf4b018b20dcf864"},{url:"js/polyfills-legacy-69e47d67.js",revision:"1eeb950467ecee546564ea11406088e4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches()}));

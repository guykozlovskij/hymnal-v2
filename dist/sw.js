if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/hymnal-data-d821c627.js",revision:null},{url:"assets/HymnIndex-f8be08f4.js",revision:null},{url:"assets/HymnView-d4c7f8a6.js",revision:null},{url:"assets/index-2cab15a0.js",revision:null},{url:"assets/index-a7f75c65.css",revision:null},{url:"assets/new-hymns-bbc8ee09.js",revision:null},{url:"assets/NewHymnsList-bc063e52.js",revision:null},{url:"assets/NewHymnView-a399cdfd.js",revision:null},{url:"assets/SearchView-ae73abe8.js",revision:null},{url:"assets/SettingsView-e247aa9d.js",revision:null},{url:"index.html",revision:"8cf586939582deee95e6090f31c1ed2a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon.png",revision:"30919b9e803a7c6852cc85a13288615c"},{url:"manifest.webmanifest",revision:"b1690e5fad083d8443ba4f516c6f6c3c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

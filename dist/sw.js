if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/hymnal-data-546278e9.js",revision:null},{url:"assets/HymnIndex-7d19c70c.js",revision:null},{url:"assets/HymnView-4277ca3c.js",revision:null},{url:"assets/index-4a3140b1.js",revision:null},{url:"assets/index-5b7061de.css",revision:null},{url:"assets/new-hymns-ade19fe8.js",revision:null},{url:"assets/NewHymnsList-90b54e8b.js",revision:null},{url:"assets/NewHymnView-19b176df.js",revision:null},{url:"assets/SearchView-21de612a.js",revision:null},{url:"assets/SettingsView-2085f9bf.js",revision:null},{url:"index.html",revision:"b9a8692e754ace52de4c67e7934adf82"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon.png",revision:"30919b9e803a7c6852cc85a13288615c"},{url:"manifest.webmanifest",revision:"0c757702c48ea1ff7bacf07dd3d9a26e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

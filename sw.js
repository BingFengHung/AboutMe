if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let l={};const o=e=>s(e,u),t={module:{uri:u},exports:l,require:o};n[u]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/CVSdEHPT.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/Dces50dU.js",revision:null},{url:"_nuxt/DNC11a2k.js",revision:null},{url:"_nuxt/Dsq9G9bv.js",revision:null},{url:"_nuxt/error-404.JekaaCis.css",revision:null},{url:"_nuxt/error-500.CNP9nqm1.css",revision:null},{url:"200",revision:"443d2b4da6a983558fae75d4dbbcd846"},{url:"404",revision:"443d2b4da6a983558fae75d4dbbcd846"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"/AboutMe/",revision:"9d4960821c877e12399fe6497287ae62"},{url:"_payload.json",revision:"03e659897bcfd2d34a20716dc20b5fde"},{url:"_nuxt/builds/latest.json",revision:"a8fdc880d0c5b9e8acac7c2d27668038"},{url:"_nuxt/builds/meta/54163899-0eb8-4f02-899a-8e13ac4fce0e.json",revision:null},{url:"manifest.webmanifest",revision:"a906fa25f9ff8bdf172fd2ef64176bee"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/AboutMe/")))}));

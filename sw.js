if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let u={};const o=e=>n(e,l),c={module:{uri:l},exports:u,require:o};i[l]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(s(...e),u)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/39NmBDgV.js",revision:null},{url:"_nuxt/ACpgoprY.js",revision:null},{url:"_nuxt/B5FAQpcx.js",revision:null},{url:"_nuxt/B63gZKH7.js",revision:null},{url:"_nuxt/BacO-P5M.js",revision:null},{url:"_nuxt/BBcaqyC_.js",revision:null},{url:"_nuxt/BHBT2yGc.js",revision:null},{url:"_nuxt/Bhs8mGZH.js",revision:null},{url:"_nuxt/BJDrawxc.js",revision:null},{url:"_nuxt/BjNsca9k.js",revision:null},{url:"_nuxt/BMKHA4TS.js",revision:null},{url:"_nuxt/BoG4e31l.js",revision:null},{url:"_nuxt/BtnZTRX3.js",revision:null},{url:"_nuxt/BVFI5CO3.js",revision:null},{url:"_nuxt/BzvLKbvA.js",revision:null},{url:"_nuxt/C8XS4B1b.js",revision:null},{url:"_nuxt/CdbVkfQa.js",revision:null},{url:"_nuxt/CHTps33B.js",revision:null},{url:"_nuxt/Clj3Gkvk.js",revision:null},{url:"_nuxt/CMow9xjz.js",revision:null},{url:"_nuxt/CnpLtXo_.js",revision:null},{url:"_nuxt/CQ3oBBIf.js",revision:null},{url:"_nuxt/D2M3LnqJ.js",revision:null},{url:"_nuxt/D2p5YVAJ.js",revision:null},{url:"_nuxt/D2PiixRf.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D7tiohUW.js",revision:null},{url:"_nuxt/DaHc8Jjm.js",revision:null},{url:"_nuxt/DEbMqlH-.js",revision:null},{url:"_nuxt/DF2QP9mv.js",revision:null},{url:"_nuxt/DfPnHiUX.js",revision:null},{url:"_nuxt/DFrv1wxw.js",revision:null},{url:"_nuxt/Dm-Yqkts.js",revision:null},{url:"_nuxt/DPC7nI5d.js",revision:null},{url:"_nuxt/DPCDQbz9.js",revision:null},{url:"_nuxt/DRfSVnPN.js",revision:null},{url:"_nuxt/DrPcbZXW.js",revision:null},{url:"_nuxt/DU-AwtcU.js",revision:null},{url:"_nuxt/DXgIBrBj.js",revision:null},{url:"_nuxt/entry.BsU-A3wH.css",revision:null},{url:"_nuxt/error-404.JekaaCis.css",revision:null},{url:"_nuxt/error-500.CNP9nqm1.css",revision:null},{url:"_nuxt/f3gHXB8z.js",revision:null},{url:"_nuxt/fSxc_ZaD.js",revision:null},{url:"_nuxt/HJkV-TXQ.js",revision:null},{url:"_nuxt/index.jhv8cmg1.css",revision:null},{url:"_nuxt/PGQH5BmV.js",revision:null},{url:"_nuxt/poYPUa6y.js",revision:null},{url:"_nuxt/ProsePre.CchFRBtv.css",revision:null},{url:"_nuxt/Q21gDCd9.js",revision:null},{url:"_nuxt/Ss1ogqXs.js",revision:null},{url:"_nuxt/TDXr9bSa.js",revision:null},{url:"_nuxt/u1pY3wVV.js",revision:null},{url:"200",revision:"5754143e8d010b453e815deda4c95635"},{url:"404",revision:"5754143e8d010b453e815deda4c95635"},{url:"avatar.png",revision:"e18bbea1c6265439c7c86fa5de0a2748"},{url:"favicon.ico",revision:"59746f70e64c147e8e2a12ab006a62d6"},{url:"favicon.svg",revision:"866ea64eedd35af7d4f14b0f0d94723f"},{url:"icons/cpp.png",revision:"f1a4972e5245cb6fa8c1b999a619b2ca"},{url:"icons/python.png",revision:"9aca636166a5721ed6fdb6621c0ed938"},{url:"icons/visualstudio.png",revision:"71426a452c9dfaaaf8fdafd8825d5c4b"},{url:"icons/vue.png",revision:"a2a9da2c600606853c2db14ca54e6557"},{url:"icons/windows.png",revision:"28e95e4b67f8cff082129a8316e0c50a"},{url:"icons/xamarin.png",revision:"5045250e8909efc99bc65f18d48687f6"},{url:"images/Projects/AIToolBreakage/01.png",revision:"d2cefe67ba496705b834ea346ff788fa"},{url:"images/Projects/AIToolBreakage/02.png",revision:"59f23105b00b4045671d753c4920d5d5"},{url:"images/Projects/Mobile/01.png",revision:"76fe0ecfd68c3acb3b61dd72c7cdefd9"},{url:"images/Projects/Mobile/02.png",revision:"581ccf57e2a26b24e1bda02e632b00df"},{url:"images/Projects/Mobile/03.png",revision:"93e30a9d84ff97d6193cb8dae3ab457a"},{url:"images/Projects/SmartWeb/01.png",revision:"35156720196e9270c38efe430842a5e7"},{url:"images/Projects/SmartWeb/02.png",revision:"dd1545875c4d3d665152d3d36a6612af"},{url:"images/Projects/ToolPath/01.png",revision:"1e5499f68cd70c80e388e651ebfbbc7b"},{url:"images/Projects/ToolPath/02.png",revision:"cdc6cd862329e3c325535a75cf517507"},{url:"images/SideProjects/CodeSnippets/CodeSnippets01.png",revision:"e8462dcb3f8975e460b11c5b491866cd"},{url:"images/SideProjects/CodeSnippets/CodeSnippets02.png",revision:"c1bf819ddc970c11de721fda20af2dc8"},{url:"images/SideProjects/CodeSnippets/CodeSnippets03.png",revision:"fb04799fb3476fe13d9801eec4037134"},{url:"images/SideProjects/ColorPicker/ColorPicker01.png",revision:"08e2e92b6192161853d4e85643c3e9e4"},{url:"images/SideProjects/ColorPicker/ColorPicker02.png",revision:"f952b39a139721a97ffdf89df0aa9033"},{url:"images/SideProjects/ColorPicker/ColorPicker03.png",revision:"eac121cb129861b701b8516f8e11a28b"},{url:"images/SideProjects/ColorPicker/ColorPicker04.png",revision:"56e32e31626b9bad33e2efc3ea153ba7"},{url:"images/SideProjects/VisualStudioBuildScriptGenerator/01.png",revision:"3326a8ebc4b44e1d7bc42a6b48a47ac0"},{url:"images/SideProjects/VisualStudioBuildScriptGenerator/02.png",revision:"640ab350a1aadce343accd738af3a68c"},{url:"images/SideProjects/VisualStudioBuildScriptGenerator/03.png",revision:"f2f7fe5f63a2548a7f6ffb638590fda7"},{url:"images/SideProjects/WPFMVVMFileOpen/WPFMVVMFileOpen01.png",revision:"8c3bd9809635ddae3c4bd05b93d77ebe"},{url:"images/SideProjects/WPFMVVMFileOpen/WPFMVVMFileOpen02.png",revision:"d7da49af09f0b48b6277b8b7dbdc4140"},{url:"/AboutMe/",revision:"5754143e8d010b453e815deda4c95635"},{url:"pwa-192x192.png",revision:"55811de43a50deea10503e72dc67988d"},{url:"pwa-512x512.png",revision:"a250700ee9d6dce0426f9b2ed1a35093"},{url:"_nuxt/builds/latest.json",revision:"4dac18c6093257690b86873f59ddf3db"},{url:"_nuxt/builds/meta/5e078d96-7a24-45f3-bde0-c5e65515164c.json",revision:null},{url:"manifest.webmanifest",revision:"0dfc94969152609645c32e1ea4291acd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/AboutMe/")))}));

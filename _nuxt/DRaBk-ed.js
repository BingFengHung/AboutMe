import k from"./CHewLwXX.js";import P from"./otsVL1Zs.js";import b from"./BfIods0w.js";import{u as L,f,i as g,P as R,g as x,h as C,j as B,r as S,k as j,l as m,m as T,n as A,q as p,s as E,v as N,S as H,T as O,x as w,L as D,y as u,z as $,A as q,o as d,c as z,b as y,w as _,B as v}from"./Bs8Tuenz.js";import{u as F}from"./CmRZ6S9F.js";import"./UhVd8XPY.js";import"./6H4tv04y.js";const I=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),M=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=L(),o=g(R),s=o===x()?C():o,r=B(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),i=S();n.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);j().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??T;return A(O,a&&c,{default:()=>p(H,{suspensible:!0,onResolve:()=>{N(l)}},{default:()=>p(V,{layoutProps:E(n.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),V=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(I,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),G={class:"document-driven-page"},Z=f({__name:"document-driven",setup(t){const{contentHead:n}=$().public.content,{page:e,layout:o}=q();return e.value,n&&F(e),(s,r)=>{const i=k,l=P,a=b,c=M;return d(),z("div",G,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(d(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(d(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};

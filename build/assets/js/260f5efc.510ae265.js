"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[9874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(h,c(c({ref:t},m),{},{components:a})):n.createElement(h,c({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1},c=void 0,s={unversionedId:"Memcached/Memcached System",id:"Memcached/Memcached System",title:"Memcached System",description:"Memcached Caching System",source:"@site/docs/Memcached/Memcached System.md",sourceDirName:"Memcached",slug:"/Memcached/Memcached System",permalink:"/docs/Memcached/Memcached System",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Memcached/Memcached System.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Memcached",permalink:"/docs/category/memcached"},next:{title:"Memcached Configuration",permalink:"/docs/Memcached/Memcached Configuration"}},i={},l=[{value:"Memcached Caching System",id:"memcached-caching-system",level:2}],m={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"memcached-caching-system"},"Memcached Caching System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Memcached"))," is a free & open source, high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load."),(0,r.kt)("p",null,"You can think of it as a short-term memory for your applications."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Memcached\u2019s APIs")," provide a giant hash table distributed across multiple machines. When the table is full, subsequent inserts cause older data to be purged in least recently used order. Applications using Memcached typically layer requests and additions into RAM before falling back on a slower backing store, such as a database."),(0,r.kt)("p",null,"The system uses a client server architecture. The servers maintain a key-value associative array; the clients populate this array and query it. Keys are up to 250 bytes long and values can be at most 1 megabyte in size."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:a(1632).Z,width:"606",height:"319"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Memcached")," also allows you to make better use of your memory."),(0,r.kt)("p",null,"The given scheme represents two deployment scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Without Memcached")," - in this case each node is completely independent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"With Memcached")," - in this case each node can make use of memory from other nodes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The first")," scenario illustrates the classic deployment strategy, however you\u2019ll find that it\u2019s both wasteful in the sense that the total cache size is a fraction of the actual capacity of your web farm, but also in the amount of effort required to keep the cache consistent across all of those nodes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With Memcached"),", you can see that all of the servers are looking into the same virtual pool of memory. This means that a given item is always stored and always retrieved from the same location in your entire web cluster."),(0,r.kt)("p",null,"Also, as the demand for your application grows to the point where you need to have more servers, it generally also grows in terms of the data that must be regularly accessed. A deployment strategy where these two aspects of your system scale together just makes sense."),(0,r.kt)("p",null,"To get ",(0,r.kt)("strong",{parentName:"p"},"Memcached")," in your environment, simply:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into the platform dashboard.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Environment"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Environment Topology")," dialog, pick your application server (for example, ",(0,r.kt)("strong",{parentName:"p"},"Tomcat"),"). Switch on ",(0,r.kt)("strong",{parentName:"p"},"Memcached"),". Scale it vertically. Then type your environment name, for example, memcached, and click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:a(21707).Z,width:"972",height:"501"}))),(0,r.kt)("p",null,"That\u2019s all you need to do! Now, Memcached is available in your environment."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:a(58417).Z,width:"890",height:"145"}))))}d.isMDXComponent=!0},1632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-memcached-deployment-scenario-50d57b2f886ac24df8cb52a192aeb040.png"},21707:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-memcached-environment-topology-b5e1702b6812480799199bc1d1fa552c.png"},58417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-environment-with-memcached-created-af5748c440292116ed4c2dd01d96c59d.png"}}]);
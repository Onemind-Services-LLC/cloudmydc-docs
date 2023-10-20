"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[1842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:2},a=void 0,i={unversionedId:"Kubernetes Hosting/Persistent Data/Persistent Volume Claim",id:"Kubernetes Hosting/Persistent Data/Persistent Volume Claim",title:"Persistent Volume Claim",description:"Kubernetes Cluster: Persistent Volume Claim",source:"@site/docs/Kubernetes Hosting/Persistent Data/Persistent Volume Claim.md",sourceDirName:"Kubernetes Hosting/Persistent Data",slug:"/Kubernetes Hosting/Persistent Data/Persistent Volume Claim",permalink:"/docs/Kubernetes Hosting/Persistent Data/Persistent Volume Claim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Persistent Data/Persistent Volume Claim.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Volume Provisioner",permalink:"/docs/Kubernetes Hosting/Persistent Data/Volume Provisioner"},next:{title:"Custom Storage",permalink:"/docs/Kubernetes Hosting/Persistent Data/Custom Storage"}},c={},u=[{value:"Kubernetes Cluster: Persistent Volume Claim",id:"kubernetes-cluster-persistent-volume-claim",level:2}],l={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kubernetes-cluster-persistent-volume-claim"},"Kubernetes Cluster: Persistent Volume Claim"),(0,o.kt)("p",null,"Anytime your application pod needs access to the Persistent Volume (PV), a dedicated ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"PersistentVolumeClaim"))," (PVC) with a specific amount of storage and particular access mode is requested. The platform does not restrict PVCs in any way (including ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"creation"),"). However, there are a few things that you should take into consideration when working with the persistent volume claims:"),(0,o.kt)("p",null,"if you specify a StorageClass other than the default ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"jelastic-dynamic-volume")))," one, PV should be created in advance\nwhen several pods should use the same PV, ensure that it supports ",(0,o.kt)("em",{parentName:"p"},"ROX")," or ",(0,o.kt)("em",{parentName:"p"},"RWX")," ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"AccessMode")))}p.isMDXComponent=!0}}]);
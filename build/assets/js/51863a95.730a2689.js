"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[4535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1},l=void 0,o={unversionedId:"Kubernetes Hosting/Kubernetes Scalability/Vertical Scaling",id:"Kubernetes Hosting/Kubernetes Scalability/Vertical Scaling",title:"Vertical Scaling",description:"Kubernetes Cluster: Vertical Scaling",source:"@site/docs/Kubernetes Hosting/Kubernetes Scalability/Vertical Scaling.md",sourceDirName:"Kubernetes Hosting/Kubernetes Scalability",slug:"/Kubernetes Hosting/Kubernetes Scalability/Vertical Scaling",permalink:"/docs/Kubernetes Hosting/Kubernetes Scalability/Vertical Scaling",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Kubernetes Scalability/Vertical Scaling.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Scalability",permalink:"/docs/category/kubernetes-scalability"},next:{title:"Horizontal Scaling",permalink:"/docs/Kubernetes Hosting/Kubernetes Scalability/Horizontal Scaling"}},c={},s=[{value:"Kubernetes Cluster: Vertical Scaling",id:"kubernetes-cluster-vertical-scaling",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-cluster-vertical-scaling"},"Kubernetes Cluster: Vertical Scaling"),(0,a.kt)("p",null,"Vertical scaling for the ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Cluster")," is represented via two implementations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"platform-managed ",(0,a.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"automatic vertical scaling"))," - allows dynamically allocating resources for the Kubernetes nodes, which are used (and charged) only when they are needed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Kubernetes-managed ",(0,a.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"Vertical Pod Autoscaler")," (beta)")," - adjusts pod memory/CPU requests and limits on the go")),(0,a.kt)("p",null,"The combination of PaaS vertical scaling and VPA can help minimize resource utilization and thus reduce cluster maintenance costs. In addition, it makes deployments highly available and fault-tolerant."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"An extended real case example (WordPress) on the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"Kubernetes Cluster Scaling")))," is provided within the linked article.")))}d.isMDXComponent=!0}}]);
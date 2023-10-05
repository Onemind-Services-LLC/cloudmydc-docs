"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[5030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i=void 0,l={unversionedId:"Container/Container Configuration/Variables",id:"Container/Container Configuration/Variables",title:"Variables",description:"At the Variables tab, you can view and manage a list of the environment variables for the current layer.",source:"@site/docs/Container/Container Configuration/Variables.md",sourceDirName:"Container/Container Configuration",slug:"/Container/Container Configuration/Variables",permalink:"/docs/Container/Container Configuration/Variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Container/Container Configuration/Variables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration Tools",permalink:"/docs/Container/Container Configuration/Configuration Tools"},next:{title:"Links",permalink:"/docs/Container/Container Configuration/Links"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At the ",(0,r.kt)("strong",{parentName:"p"},"Variables")," tab, you can view and manage a list of the ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"environment variables")," for the current layer."),(0,r.kt)("p",null,"In case of ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"container linking"),", variables from other nodes within the environment will be also displayed in the same tab with a special prefix. In addition, they can be edited on a fly, automatically applying changes to all source and target containers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To state a ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"custom variable"),", click the ",(0,r.kt)("strong",{parentName:"li"},"Add")," button and fill in the appeared cells with the required variable Name and Value.")),(0,r.kt)("admonition",{title:"Note",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Variable names should only contain Latin letters, numbers, and underscore \u201c","_","\u201d characters.\nadd variable layer settings")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(2638).Z,width:"970",height:"545"})),(0,r.kt)("p",null,"Don\u2019t forget to ",(0,r.kt)("strong",{parentName:"p"},"Save")," your variable."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Beside adding, you can also ",(0,r.kt)("strong",{parentName:"li"},"Edit")," and ",(0,r.kt)("strong",{parentName:"li"},"Remove")," the already existing records (except some default ones) with the help of the same-named buttons.")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Here are a few hints for speeding up the configuration process:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"double clicking on a variable will immediately switch you to its editing"),(0,r.kt)("li",{parentName:"ul"},"in case you need to remove several records, you can select them using the ",(0,r.kt)("strong",{parentName:"li"},"Shift")," or ",(0,r.kt)("strong",{parentName:"li"},"Ctrl")," buttons"))),(0,r.kt)("p",null,"edit remove variable layer settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(8752).Z,width:"970",height:"545"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Apply")," to save all the changes made in the Docker layer settings frame and, if required, one more time at the wizard window to apply them.")))}d.isMDXComponent=!0},2638:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-variables-layer-settings-12bca947abef91443f8f472af6a7dac5.png"},8752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-edit-remove-variables-from-layer-settings-674ad00252a91d5049ac85da4b7c9b04.png"}}]);
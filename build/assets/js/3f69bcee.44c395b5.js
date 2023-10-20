"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[7526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},i=void 0,l={unversionedId:"EnvironmentManagement/Share Environment",id:"EnvironmentManagement/Share Environment",title:"Share Environment",description:"Environment Sharing is a particular case of the account collaboration feature - when you want to give access or some functionality of your account to other users. The only difference is that you need to share just a single environment.",source:"@site/docs/EnvironmentManagement/Share Environment.md",sourceDirName:"EnvironmentManagement",slug:"/EnvironmentManagement/Share Environment",permalink:"/docs/EnvironmentManagement/Share Environment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EnvironmentManagement/Share Environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Share Environment Deprecated",permalink:"/docs/EnvironmentManagement/Share Environment Deprecated"},next:{title:"Cloning Environment",permalink:"/docs/EnvironmentManagement/Cloning Environment"}},s={},c=[],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Environment Sharing")," is a particular case of the ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"account collaboration")," feature - when you want to give access or some functionality of your account to other users. The only difference is that you need to share just a single environment."),(0,o.kt)("p",null,"Check a quick summary of the feature for better understanding:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"environment ",(0,o.kt)("em",{parentName:"li"},"owner")," has complete control over the environment"),(0,o.kt)("li",{parentName:"ul"},"collaborators can only perform actions allowed by the owner (through the assigned ",(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"roles"),")"),(0,o.kt)("li",{parentName:"ul"},"only the ",(0,o.kt)("em",{parentName:"li"},"owner")," is charged for the shared environment")),(0,o.kt)("p",null,"In order to share an environment, select it and go to the ",(0,o.kt)("strong",{parentName:"p"},"Settings > Collaboration")," tab. Here, you can see a list of all existing collaborators (if any) that have access to the current environment."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(44536).Z,width:"1041",height:"479"}))),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When accessing this tab as a collaborator, you can only check your own role for the current shared environment. However, the environment owner can share access and management possibilities through the Collaboration policy (cannot edit own roles)."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(69664).Z,width:"1000",height:"331"})))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The table provides detailed information on access to the current environment. You can find all the required data in the following four columns:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name")," - lists emails of collaboration members that have access to the environment. Hover over to see the current member\u2019s management options (Edit or Remove direct access)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Roles")," - shows the exact access roles for the current environment per collaborator. Hover over for the combined list of policies from all roles.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(47074).Z,width:"632",height:"203"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access Level")," - shows the highest access level for the current environment. Hover over for more details. Information on the ",(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"access level algorithm")," can be found upon hovering over the column header.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(88427).Z,width:"939",height:"117"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status")," - provides the collaboration status of the member (",(0,o.kt)("em",{parentName:"li"},"active, pending acceptance, left, suspended"),"). The icon color at the start of each record also represents status.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Add")," button at the top of the tools panel to provide ",(0,o.kt)("u",null,"direct")," access to the environment. Here, you need to provide the following data:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Member"))," - select an existing collaboration member or click the ",(0,o.kt)("strong",{parentName:"li"},"Invite Member")," option to provide email addresses"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Roles"))," - choose at least one role from the list (if needed, click the ",(0,o.kt)("strong",{parentName:"li"},"Create New Role")," option to add a new one)")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(96760).Z,width:"470",height:"222"}))),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When inviting a new member, the flow is similar to the one described in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Create Collaboration"))," guide. The user receives an invitation email and can accept or reject it."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(92613).Z,width:"470",height:"282"})))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can select an existing record in the list to ",(0,o.kt)("strong",{parentName:"li"},"Edit")," assigned ",(0,o.kt)("u",null,"direct")," roles or ",(0,o.kt)("strong",{parentName:"li"},"Remove")," ",(0,o.kt)("u",null,"direct")," direct access to the current environment.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(95093).Z,width:"806",height:"112"}))),(0,o.kt)("admonition",{title:"Note",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"After removing direct access, the environment can still be available for the member through other access types, e.g. if the environment belongs to the shared group.")),(0,o.kt)("p",null,"You can click the ",(0,o.kt)("strong",{parentName:"p"},"Account Collaboration")," button (displayed for the environment owner only) at the top-right of the tools panel to go to the ",(0,o.kt)("strong",{parentName:"p"},"User Settings > Collaboration > Shared by Me")," section and perform more complex customizations."))}d.isMDXComponent=!0},44536:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01-environment-collaboration-settings-d503d5f48c50562088770914eb5e92c7.png"},69664:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02-shared-environment-collaboration-settings-4a8a51d317cc955affa649e6bf447fed.png"},47074:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-policies-for-all-roles-8c10cfea00c8b8cc50d409b55ff9f937.png"},88427:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04-collaboration-access-level-7b17a242c3242d7fec3a68da7a6b1435.png"},96760:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/05-environment-direct-access-dialog-b8d0fa58f37c878ae975c59a1341299e.png"},92613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06-direct-access-for-new-user-75ded021cac6602b3a4f1179026b8cbd.png"},95093:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/07-manage-direct-access-df2e6ebed2877d73ba42be54b50d2b3b.png"}}]);
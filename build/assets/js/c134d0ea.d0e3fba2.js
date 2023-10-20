"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[9804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},i=void 0,s={unversionedId:"Data Storage Container/Use Cases/Dedicated Container",id:"Data Storage Container/Use Cases/Dedicated Container",title:"Dedicated Container",description:"Dedicated Storage Container",source:"@site/docs/Data Storage Container/Use Cases/Dedicated Container.md",sourceDirName:"Data Storage Container/Use Cases",slug:"/Data Storage Container/Use Cases/Dedicated Container",permalink:"/docs/Data Storage Container/Use Cases/Dedicated Container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Data Storage Container/Use Cases/Dedicated Container.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Compound Container",permalink:"/docs/Data Storage Container/Use Cases/Compound Container"},next:{title:"External Server",permalink:"/docs/Data Storage Container/Use Cases/External Server"}},l={},c=[{value:"Dedicated Storage Container",id:"dedicated-storage-container",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dedicated-storage-container"},"Dedicated Storage Container"),(0,a.kt)("p",null,"For more complex and loaded applications, it is worth to centralize your shared data within a single container to get more simple and flexible exports' management (including access permission control - e.g. read-only for one node type and read-write for another)."),(0,a.kt)("p",null,"In confines of the platform, a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Shared Storage Container")," is recommended to be used for sharing files across multiple layers or even environments of a single account. It is specially optimized for data storing (i.e. is focused on performance and provides the enlarged disk space amount)."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(38712).Z,width:"222",height:"336"}))),(0,a.kt)("p",null,"Apart of that, upon using a separate Shared Storage Container, you get the following benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since storage here represents an independent container, its occasional high loading can be properly handled without influence on general application performance (as it might happen during load peaks in case a single node fulfils several \u201croles\u201d)."),(0,a.kt)("li",{parentName:"ul"},"Upon the necessity, you can painlessly remove everything except the required data (i.e. leaving just a storage being included to environment) and start over with your project from the scratch. The majority of common environment settings (e.g. internal domain and sharing permissions) will be left unchanged, which highly simplifies project re-integration."),(0,a.kt)("li",{parentName:"ul"},"Storing data apart makes it easier to handle several ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"project clones")," (i.e. environments), dedicated for different application lifecycle stages (e.g. separate ones for development, testing and production)."),(0,a.kt)("li",{parentName:"ul"},"Mount folder with your DB\u2019s ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"scheduled backups")," to your storage container for making backups automatically kept on the remote server and, in such a way, improve the overall data safety during software upgrades.")),(0,a.kt)("p",null,"In addition to actually data storing, such a structure can be also efficiently utilized in case you need to share some common configuration files, that are to be used by nodes on different layers and/or environments."),(0,a.kt)("p",null,"Your Shared Storage Container can be also used as an external storage, i.e. you can export data from the platform to be available over the Internet."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(65802).Z,width:"106",height:"159"}))),(0,a.kt)("p",null,"In such a way, you can share some content for the required third-party service or another developer (providing him with personal access permissions) or, generally, get a quick access to your data from any point with the platform-hosted NFS server."),(0,a.kt)("p",null,"By using this option, you can even build your own intercloud sharing solution and/or operate with the same data from different PaaS installations - find out the required ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"NFS server configurations")," for such an implementation within the linked guide."))}u.isMDXComponent=!0},38712:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01-dedicated-container-storage-5fc93e08db3e124dfa1c62e4a5374778.png"},65802:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);
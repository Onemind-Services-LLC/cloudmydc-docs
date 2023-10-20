"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={sidebar_position:1},i=void 0,l={unversionedId:"Data Storage Container/Data Sharing/Mount Protocols/NFS",id:"Data Storage Container/Data Sharing/Mount Protocols/NFS",title:"NFS",description:"NFS or Network File System is a protocol designed to access files on the remote host over the computer network and operate them as if they were local files. It is a popular and widely spread standard that is available to everyone.",source:"@site/docs/Data Storage Container/Data Sharing/Mount Protocols/NFS.md",sourceDirName:"Data Storage Container/Data Sharing/Mount Protocols",slug:"/Data Storage Container/Data Sharing/Mount Protocols/NFS",permalink:"/docs/Data Storage Container/Data Sharing/Mount Protocols/NFS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Data Storage Container/Data Sharing/Mount Protocols/NFS.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mount Protocols",permalink:"/docs/category/mount-protocols"},next:{title:"GlusterFS",permalink:"/docs/Data Storage Container/Data Sharing/Mount Protocols/GlusterFS"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NFS")," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Network File System"))," is a protocol designed to access files on the remote host over the computer network and operate them as if they were local files. It is a popular and widely spread standard that is available to everyone."),(0,a.kt)("p",null,"NFS is a client-server application, which means that the NFS server should be installed on the host that provides shared disk space and NFS clients on the servers that gain access to the shared files."),(0,a.kt)("p",null,"The platform provides NFS support out-of-the-box for all containers (both client and server). The platform fully supports the third version of the protocol on all certified stacks. The fourth version is supported as a client only. NFSv4 server is implemented on the dedicated ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Shared Storage Container")),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"all containers")," (except alpine-based nodes) - NFSv3 (client and server) and NFSv4 (client only)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shared Storage")," - NFSv3 (client and server) and NFSv4 (client and server)")),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"NFS is recommended for the performance-oriented topologies, while ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"Gluster Native"))," ensures data safety through backups and replication.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The platform uses the following configurations when setting up NFS clients:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"for NFS 3:")," ",(0,a.kt)("em",{parentName:"li"},"nfsvers=3,nolock,udp,soft,timeo=120,retrans=20,","_","netdev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"for NFS 4:")," ",(0,a.kt)("em",{parentName:"li"},"nolock,soft,timeo=30,retrans=2,","_","netdev"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Take into consideration the following peculiarities of the data sharing with NFS at the platform:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"regular files cannot be exported (only directories)"),(0,a.kt)("li",{parentName:"ul"},"mounted directory cannot start with ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"/proc, /dev, /sys, /run"))," or be equal to the following: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"/, /bin, /lib, /lib64, /lib32, /usr, /usr/bin, /usr/sbin, /usr/lib")),", or ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"/usr/lib64"))," (this list may vary based on your provider\u2019s settings)"),(0,a.kt)("li",{parentName:"ul"},"NFS shares do not work with sleeping environments and during the ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"live migration"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"When facing any issues with NFS, you can check the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Tasks Panel"))," in the dashboard. Also, the following logs can provide some additional information:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"/var/log/messages"))," on the NFS server"),(0,a.kt)("li",{parentName:"ul"},"run the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"journalctl"))," command on the Shared Storage, custom Docker, or VPS containers\nFollow the ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"mount points")," or ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"exporting data")," guides to share files over the NFS protocol.")))}m.isMDXComponent=!0}}]);
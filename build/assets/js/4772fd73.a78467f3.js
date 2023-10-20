"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[1460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),f=o,b=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return r?i.createElement(b,n(n({ref:t},p),{},{components:r})):i.createElement(b,n({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<a;d++)n[d]=r[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(87462),o=(r(67294),r(3905));const a=JSON.parse('{"p":[{"JE":"JE-58921","CompatibleFrom":"any","Desc":"The Plesk application doesn\u2019t work after deployment from the Marketplace"},{"JE":"JE-47128","CompatibleFrom":"3.3","Desc":"The CDN add-ons cost on the reselling platforms is calculated based on the parent installation currency"},{"JE":"JE-52308","CompatibleFrom":"3.3","Desc":"Some PHP-based applications in the Marketplace utilize outdated PHP engine versions"},{"JE":"JE-56785","CompatibleFrom":"3.3","Desc":"Only part of the error text is displayed in the email when installing the Let\u2019s Encrypt add-on with an incorrect domain name"},{"JE":"JE-57958","CompatibleFrom":"3.3","Desc":"The Let\u2019s Encrypt add-on installation fails if any active yum repo is unavailable"},{"JE":"JE-58785","CompatibleFrom":"3.3","Desc":"The Let\u2019s Encrypt add-on cannot be installed on the load balancer layer if the settings-custom config is used"},{"JE":"JE-58836","CompatibleFrom":"3.3","Desc":"Incorrect regex expression for generating certificates with the Let\u2019s Encrypt add-on"},{"JE":"JE-58873","CompatibleFrom":"3.3","Desc":"Unhandled error when updating the Let\u2019s Encrypt add-on with incorrect domain configured"},{"JE":"JE-59060","CompatibleFrom":"3.3","Desc":"SSL chain issue after installing the Let\u2019s Encrypt add-on for the NGINX load balancer"},{"JE":"JE-58910","CompatibleFrom":"5.0","Desc":"An error occurs when trying to install the Minio application from the Marketplace"},{"JE":"JE-56628","CompatibleFrom":"5.0.5","Desc":"The mysqld process is running by default on the Apache PHP stacks"},{"JE":"JE-56670","CompatibleFrom":"5.0.5","Desc":"Apache PHP containers become inaccessible after redeployment from the 8th to 7th PHP version"},{"JE":"JE-56736","CompatibleFrom":"5.0.5","Desc":"Insufficient permissions to run the \u201cnginx -t\u201d command on the NGINX-based containers"},{"JE":"JE-57152","CompatibleFrom":"5.0.5","Desc":"An error occurs during the Ruby-based stacks redeployment"},{"JE":"JE-57737","CompatibleFrom":"5.0.5","Desc":"The Maven build node is installed with the GraalVM Java engine when the OpenJDK 8 one is selected"},{"JE":"JE-58804","CompatibleFrom":"5.0.5","Desc":"Typo in the resource name in the ssl.upstreams.inc configuration file on the NGINX load balancer"},{"JE":"JE-58913","CompatibleFrom":"5.0.5","Desc":"The Cyclos 4 Cluster application becomes inaccessible in a few minutes after deployment from the Marketplace"},{"JE":"JE-59012","CompatibleFrom":"5.0.5","Desc":"The GitBlit application is inaccessible after deployment from the Marketplace"},{"JE":"JE-59015","CompatibleFrom":"5.0.5","Desc":"The Alfresco application is inaccessible after deployment from the Marketplace"},{"JE":"JE-59017","CompatibleFrom":"5.0.5","Desc":"The xWiki application is inaccessible after deployment from the Marketplace"},{"JE":"JE-59018","CompatibleFrom":"5.0.5","Desc":"The Liferay application is inaccessible after deployment from the Marketplace"},{"JE":"JE-59026","CompatibleFrom":"5.0.5","Desc":"An error occurs when trying to install the OpenCMS application from the Marketplace"}],"y":[{"JE":"JE-57387","AffectedVersions":"-","Desc":"Incorrect JSON response for the \'permission denied\' error in the container\u2019s file manager"},{"JE":"JE-59125","AffectedVersions":"-","Desc":"An error occurs when trying to fetch Volumes for custom Docker containers with credentials"},{"JE":"JE-59134","AffectedVersions":"6.0.2","Desc":"An error occurs when trying to open the Custom tab of the topology wizard as a collaborator"},{"JE":"JE-59243","AffectedVersions":"-","Desc":"The Tomcat auto-cluster cannot be created due to incorrect firewall rules"}]}'),n={sidebar_position:25},l=void 0,s={unversionedId:"PlatformOverview/Release Notes/Release Notes 6.0.7",id:"PlatformOverview/Release Notes/Release Notes 6.0.7",title:"Release Notes 6.0.7",description:"Virtuozzo Application Platform 6.0.7",source:"@site/docs/PlatformOverview/Release Notes/Release Notes 6.0.7.md",sourceDirName:"PlatformOverview/Release Notes",slug:"/PlatformOverview/Release Notes/Release Notes 6.0.7",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 6.0.7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PlatformOverview/Release Notes/Release Notes 6.0.7.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Release Notes 6.1",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 6.1"},next:{title:"Release Notes 6.0.6",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 6.0.6"}},d={},p=[{value:"Virtuozzo Application Platform 6.0.7",id:"virtuozzo-application-platform-607",level:2},{value:"Fixes Compatible with Prior Versions",id:"fixes-compatible-with-prior-versions",level:2},{value:"Software Stack Versions",id:"software-stack-versions",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],c={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"virtuozzo-application-platform-607"},"Virtuozzo Application Platform 6.0.7"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This document is preliminary and subject to change.")),(0,o.kt)("p",null,"In this document, you will find all of the new features, enhancements and visible changes included to the ",(0,o.kt)("strong",{parentName:"p"},"Virtuozzo PaaS 6.0.7")," release."),(0,o.kt)("hr",null),(0,o.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,o.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:r(41766).Z,width:"42",height:"30"})),(0,o.kt)("p",null,"Changed")),(0,o.kt)("div",{style:{width:"100%"}},(0,o.kt)("div",{style:{width:"100%",background:"#def6ff",padding:"20px",margin:"10px 0"}},(0,o.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Software Stack Versions"),(0,o.kt)("p",null,"Actualized list of supported OS templates and software stack versions"),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,o.kt)("a",{href:"/"},"Learn More >>"))))),(0,o.kt)("hr",null),(0,o.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,o.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:r(12450).Z,width:"42",height:"30"})),(0,o.kt)("p",null,"Fixed")),(0,o.kt)("div",null,(0,o.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,o.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Fixes Compatible with Prior Versions"),(0,o.kt)("p",null,"Bug fixes implemented in the current release and integrated into the previous platform versions through the appropriate patches"),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,o.kt)("a",{href:"/"},"Learn More >>"))),(0,o.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,o.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Bug Fixes"),(0,o.kt)("p",null,"List of fixes applied to the platform starting from the current release"),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,o.kt)("a",{href:"/"},"Learn More >>"))))),(0,o.kt)("h2",{id:"fixes-compatible-with-prior-versions"},"Fixes Compatible with Prior Versions"),(0,o.kt)("p",null,"Below, you can find the fixes that were implemented in the Virtuozzo Application Platform 8.3 release and also integrated into previous platform versions by means of the appropriate patches."),(0,o.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,o.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"PaaS 6.0.7"),(0,o.kt)("div",null,(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Compatible from"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),a.p.map(((e,t)=>(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.JE),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.CompatibleFrom),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,o.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,o.kt)("h2",{id:"software-stack-versions"},"Software Stack Versions"),(0,o.kt)("p",null,"The software stack provisioning process is independent of the platform release, which allows new software solutions to be delivered as soon as they are ready. However, due to the necessity to adapt and test new stack versions, there is a small delay between software release by its respective upstream maintainer and integration into Virtuozzo Application Platform."),(0,o.kt)("p",null,"The most accurate and up-to-date list of the certified ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"software stack versions")," can be found on the dedicated documentation page."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,o.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("p",null,"In the table below, you can see the list of bug fixes applied to the platform starting from Virtuozzo Application Platform 8.3 release:"),(0,o.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,o.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"Virtuozzo Application Platform 8.3"),(0,o.kt)("div",null,(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Affected Versions"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),a.y.map(((e,t)=>(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.JE),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.AffectedVersions),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))))}f.isMDXComponent=!0},12450:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEM0FFMDgwQzJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEM0FFMDgwRDJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzQUUwODBBMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzQUUwODBCMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p2cxQAAAAm5JREFUeNrMmN1LFFEYxmeHTfdChWRdM+xDEiG7XJQtRCKFKNDdINTCBS+68E5CUBDxpiDqIugP6MaPShHDuihCbyoUb4K09NpsQfy4KQ1M3fV5l3dgmMbdmXPObPvAD+brnHnmPfOe8874Uq98mgJRJzWgBbSBi6AI7IAZMAE+gO1/WrYnHd3Ar8BkA5gE5TbnyGyMIU2De2DL7U10CYMF4DX4dIxJO0XBJuhwezPRiAbAVx5uEb0E1eChlxGlNp8lTBp6AOJeGu0DYU2NhrVx/ZSjbM2S9XSyktkHe2BRU6tZ0Jwt+zO9oxHO0pDmrZoARXVdZOg7wXwOTBqKibyjFWBEwc0PwDL45eDauIjRQUmDf8BVUAgugUYHba4gqcqAq2Tal1yxKPESvE1Gv7louwG607nRnkxmiqhP0uRjk8kClyY1zokpsILohjIZTfFTiWrUtP0XzFleiTN8PJtq0g88rp8/zuhpcChhdNeyfwe8ZZMXwE+uqJwu70swG7AajfCwVUgYDVj2f4BWUMzz5AlQ6qI/qr6em42e5XlTRjfT75a9jMS4LdDvXUQ1qHMCfVRg8l2Wa+rAC8H+W/3cwTkPTF4Dv8FJ0MPXiarTzxW3apODXMapUpiG/pbE+mxnckixSVIJRTQouExO2xx/Cu57ULQkKKJrAg39nIS5MEmaIqPvBT/senlepOLjmYcmSWNUlEQUzKFeij6tyymiC4LDnytFqZLSuRC5kacmnxiFjbGEfuefA/mkR6Df+OgzFyVvQC1Y/c8Gqcy8DAbMX6bWIpmKiipQD7rAdd73Wqv8e2gMfLFW96QjAQYAvVZ8VxrR76cAAAAASUVORK5CYII="},41766:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzNGRThBNjJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNGRThBNzJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDM0ZFOEE0MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDM0ZFOEE1MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c2zvogAAAidJREFUeNrUmM0rBVEYxueOmywuWfj+VlIkFje6ZEeJ8rURRVnIn0DJjlL+BxuSkogiiQ0iCwpJ3boLX/nOggXJx/PqvTVNXWbeOXO7nvot7rlnznnmzHnnfc94tOUPTYE8oBg0gw5QAnzgBayDWbAGHs0XfjXpFidwbrQWzIF0C30XQR94sGtUd2AwHiyALYsmSa3gHnTancwrNJkADvlxSzQDisCo1QskK0rXbDswGdYI6HHT6ADwa2o06Vn5zFARTBTNOcw7eANHmlptgPq/guq3PRrgKE3T3FUdoFW9kTz6brAbBZNhtUn2aCaY0qKrHonRYS36qkFQpQJbRvsdTBgCWUzI5rV34BZm24H+l1GPgyQQBGXgminjNjuimJgHpzCb9pvRL74zickK8Gpoe+W2oGA8SiZXMFsQyWg2m7WjfVBuMmk0W859JOn9GGYTzEbpvXlpo8AIm6zmRBBJb9xHYpZKxQljZsoDZ4KBErnmtDrps3D/p+ocQJvCAXwu9TWrhYxWgnzhABTdT+A8Qo3Zyf89cV+pur1ccTtRMuOLsIq5ChKCn1a0XYt9JZHRlH9g9IqMXigaLM5im0TzZHRV0WBdpveyzm0qNE3v0QDXnrEqOlqn013vKXz8bqgVx5Sfcopye2OMmhwHO8Zcf8IfB2JJY2AwfOgzbv4lUCrM+Sp1x0XMkPFkai6ST0EhqAK9oIF/u60z/jw0DQ5oT5o7fAswAKxgepYzbixFAAAAAElFTkSuQmCC"}}]);
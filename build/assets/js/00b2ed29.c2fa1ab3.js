"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[2204],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(u,n(n({ref:t},c),{},{components:r})):o.createElement(u,n({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,n[1]=s;for(var d=2;d<a;d++)n[d]=r[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const a=JSON.parse('{"p":[{"JE":"JE-57110","CompatibleFrom":"3.3","Desc":"An error occurs during the Spring Boot Thin/Fat Jar Builder JPS packages installation"},{"JE":"JE-57686","CompatibleFrom":"3.3","Desc":"Cyclos packages from the Marketplace cannot be installed due to the Java 11 requirement in the latest Cyclos versions"},{"JE":"JE-57712","CompatibleFrom":"3.3","Desc":"The settings-custom configuration file is ignored during the initial installation of the Let\u2019s Encrypt add-on"},{"JE":"JE-57941","CompatibleFrom":"3.3","Desc":"The webroot value should remain false for the old Let\u2019s Encrypt add-ons during the upgrade"},{"JE":"JE-49964","CompatibleFrom":"5.0.5","Desc":"Incorrect permissions for the /etc/phpMyAdmin file on some MySQL/MariaDB/Percona tags"},{"JE":"JE-50715","CompatibleFrom":"5.0.5","Desc":"An error occurs when restarting NGINX PHP after redeploying to the older version"},{"JE":"JE-53694","CompatibleFrom":"5.0.5","Desc":"The passwordless access to databases should be disabled"},{"JE":"JE-54764","CompatibleFrom":"5.0.5","Desc":"An error occurs when restarting Apache PHP after redeploying to the older version"},{"JE":"JE-56628","CompatibleFrom":"5.0.5","Desc":"The mysqld service should not be running on the Apache PHP servers by default"},{"JE":"JE-57180","CompatibleFrom":"5.0.5","Desc":"The \'RuntimeError: Your version of SQLite is too old\' error page is opened by default when accessing the Ruby-based environments"},{"JE":"JE-57737","CompatibleFrom":"5.0.5","Desc":"GraalVM Java engine is installed when creating Maven with OpenJDK 8 via API"},{"JE":"JE-57819","CompatibleFrom":"5.0.5","Desc":"HAProxy restart fails with the missing /usr/sbin/haproxy directory error"},{"JE":"JE-52216","CompatibleFrom":"5.3","Desc":"An error occurs when building an application using the native-image tool on the GraalVM-based Java nodes"},{"JE":"JE-52149","CompatibleFrom":"5.3.2","Desc":"Empty firewall rules on the WildFly application server after creation"},{"JE":"JE-57477","CompatibleFrom":"5.3.2","Desc":"An error occurs when installing WildFly Cluster from the Marketplace"},{"JE":"JE-52779","CompatibleFrom":"5.3.2","Desc":"The $WEBROOT environment variable is missing on the WildFly application server"},{"JE":"JE-54962","CompatibleFrom":"5.4","Desc":"The autofs process on the client node crashes during the storage restart"},{"JE":"JE-57937","CompatibleFrom":"5.4","Desc":"Kubernetes Cluster cannot be installed from the container types hint in the topology wizard"},{"JE":"JE-56667","CompatibleFrom":"5.7.2","Desc":"An error occurs when restarting nodes with the \'jem service restart\' command"},{"JE":"JE-55922","CompatibleFrom":"5.7.4","Desc":"The REDIS_ENABLED environment is ignored when restarting LiteSpeed (LLSMP) application server via the \'jem service restart\' command"},{"JE":"JE-56040","CompatibleFrom":"5.7.4","Desc":"The \'jem service reload\' command should work on the Litespeed ADC without sudo permissions"},{"JE":"JE-56188","CompatibleFrom":"5.7.4","Desc":"Mounts from the GlusterFS-cluster have incorrect parameters"},{"JE":"JE-54512","CompatibleFrom":"5.8.1","Desc":"Jenkins auto-cluster creation via API fails if the account\u2019s cloudlets limit is lower than the recommended value in the package"},{"JE":"JE-54889","CompatibleFrom":"5.8.1","Desc":"The /etc/sysconfig/jenkins file permissions are changed after enabling custom SSL for the environment with Jenkins node(s)"},{"JE":"JE-55045","CompatibleFrom":"5.9.2","Desc":"An error occurs when disabling custom SSL on the Jetty node"}],"y":[{"JE":"JE-56648","AffectedVersions":"6.0.1","Desc":"Abnormal memory usage and RDP connection failure on the Windows VM nodes after migration"},{"JE":"JE-56847","AffectedVersions":"-","Desc":"Multiple abandoned sessions in the containers"},{"JE":"JE-56996","AffectedVersions":"6.0.1","Desc":"Incorrect minimum cloudlets number for the Marketplace packages with SQL database nodes"},{"JE":"JE-57648","AffectedVersions":"-","Desc":"An error occurs when creating an environment via the JPS package"},{"JE":"JE-57708","AffectedVersions":"3.3","Desc":"An error occurs during the Jitsi package installation"},{"JE":"JE-57727","AffectedVersions":"-","Desc":"Kubernetes Cluster 1.18.6 installation fails on the platforms below the 5.9.3 version"},{"JE":"JE-57761","AffectedVersions":"-","Desc":"Docker tags for some repositories cannot be fetched"},{"JE":"JE-57769","AffectedVersions":"6.0.1","Desc":"An error occurs when increasing disk space for the Windows VM nodes"},{"JE":"JE-57825","AffectedVersions":"6.0.1","Desc":"Old disk space value is displayed in the topology wizard after increasing disk size for the Windows VM node"},{"JE":"JE-57834","AffectedVersions":"-","Desc":"An error occurs when trying to create Windows VM via the topology wizard"},{"JE":"JE-57934","AffectedVersions":"-","Desc":"The disk cost is colored incorrectly in the estimated price widget of the topology wizard"}]}'),n={sidebar_position:29},s=void 0,l={unversionedId:"PlatformOverview/Release Notes/Release Notes 6.0.3",id:"PlatformOverview/Release Notes/Release Notes 6.0.3",title:"Release Notes 6.0.3",description:"Virtuozzo Application Platform 6.0.3",source:"@site/docs/PlatformOverview/Release Notes/Release Notes 6.0.3.md",sourceDirName:"PlatformOverview/Release Notes",slug:"/PlatformOverview/Release Notes/Release Notes 6.0.3",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 6.0.3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PlatformOverview/Release Notes/Release Notes 6.0.3.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"Release Notes 6.0.4",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 6.0.4"},next:{title:"Release Notes 6.0.2",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 6.0.2"}},d={},c=[{value:"Virtuozzo Application Platform 6.0.3",id:"virtuozzo-application-platform-603",level:2},{value:"Fixes Compatible with Prior Versions",id:"fixes-compatible-with-prior-versions",level:2},{value:"Software Stack Versions",id:"software-stack-versions",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"virtuozzo-application-platform-603"},"Virtuozzo Application Platform 6.0.3"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This document is preliminary and subject to change.")),(0,i.kt)("p",null,"In this document, you will find all of the new features, enhancements and visible changes included to the ",(0,i.kt)("strong",{parentName:"p"},"Virtuozzo PaaS 6.0.3")," release."),(0,i.kt)("hr",null),(0,i.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,i.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Locale Dropdown",src:r(41766).Z,width:"42",height:"30"})),(0,i.kt)("p",null,"Changed")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{background:"#def6ff",padding:"20px",margin:"10px 0"}},(0,i.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Software Stack Versions"),(0,i.kt)("p",null,"Actualized list of supported OS templates and software stack versions"),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,i.kt)("a",{href:"/"},"Learn More >>"))))),(0,i.kt)("hr",null),(0,i.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,i.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Locale Dropdown",src:r(12450).Z,width:"42",height:"30"})),(0,i.kt)("p",null,"Fixed")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,i.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Fixes Compatible with Prior Versions"),(0,i.kt)("p",null,"Bug fixes implemented in the current release and integrated into the previous platform versions through the appropriate patches"),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,i.kt)("a",{href:"/"},"Learn More >>"))),(0,i.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,i.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Bug Fixes"),(0,i.kt)("p",null,"List of fixes applied to the platform starting from the current release"),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,i.kt)("a",{href:"/"},"Learn More >>"))))),(0,i.kt)("h2",{id:"fixes-compatible-with-prior-versions"},"Fixes Compatible with Prior Versions"),(0,i.kt)("p",null,"Below, you can find the fixes that were implemented in the PaaS 6.0.3 release and also integrated into previous platform versions by means of the appropriate patches."),(0,i.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,i.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"PaaS 6.0.3"),(0,i.kt)("div",null,(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Compatible from"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),a.p.map(((e,t)=>(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,i.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.JE),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.CompatibleFrom),(0,i.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,i.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,i.kt)("h2",{id:"software-stack-versions"},"Software Stack Versions"),(0,i.kt)("p",null,"The software stack provisioning process is independent of the platform release, which allows new software solutions to be delivered as soon as they are ready. However, due to the necessity to adapt and test new stack versions, there is a small delay between software release by its respective upstream maintainer and integration into Virtuozzo Application Platform."),(0,i.kt)("p",null,"The most accurate and up-to-date list of the certified ",(0,i.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"software stack versions")," can be found on the dedicated documentation page."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,i.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,i.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("p",null,"In the table below, you can see the list of bug fixes applied to the platform starting from PaaS 6.0.3 release:"),(0,i.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,i.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"PaaS 6.0.3"),(0,i.kt)("div",null,(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Affected Versions"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),a.y.map(((e,t)=>(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,i.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.JE),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.AffectedVersions),(0,i.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))))}f.isMDXComponent=!0},12450:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEM0FFMDgwQzJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEM0FFMDgwRDJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzQUUwODBBMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzQUUwODBCMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p2cxQAAAAm5JREFUeNrMmN1LFFEYxmeHTfdChWRdM+xDEiG7XJQtRCKFKNDdINTCBS+68E5CUBDxpiDqIugP6MaPShHDuihCbyoUb4K09NpsQfy4KQ1M3fV5l3dgmMbdmXPObPvAD+brnHnmPfOe8874Uq98mgJRJzWgBbSBi6AI7IAZMAE+gO1/WrYnHd3Ar8BkA5gE5TbnyGyMIU2De2DL7U10CYMF4DX4dIxJO0XBJuhwezPRiAbAVx5uEb0E1eChlxGlNp8lTBp6AOJeGu0DYU2NhrVx/ZSjbM2S9XSyktkHe2BRU6tZ0Jwt+zO9oxHO0pDmrZoARXVdZOg7wXwOTBqKibyjFWBEwc0PwDL45eDauIjRQUmDf8BVUAgugUYHba4gqcqAq2Tal1yxKPESvE1Gv7louwG607nRnkxmiqhP0uRjk8kClyY1zokpsILohjIZTfFTiWrUtP0XzFleiTN8PJtq0g88rp8/zuhpcChhdNeyfwe8ZZMXwE+uqJwu70swG7AajfCwVUgYDVj2f4BWUMzz5AlQ6qI/qr6em42e5XlTRjfT75a9jMS4LdDvXUQ1qHMCfVRg8l2Wa+rAC8H+W/3cwTkPTF4Dv8FJ0MPXiarTzxW3apODXMapUpiG/pbE+mxnckixSVIJRTQouExO2xx/Cu57ULQkKKJrAg39nIS5MEmaIqPvBT/senlepOLjmYcmSWNUlEQUzKFeij6tyymiC4LDnytFqZLSuRC5kacmnxiFjbGEfuefA/mkR6Df+OgzFyVvQC1Y/c8Gqcy8DAbMX6bWIpmKiipQD7rAdd73Wqv8e2gMfLFW96QjAQYAvVZ8VxrR76cAAAAASUVORK5CYII="},41766:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzNGRThBNjJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNGRThBNzJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDM0ZFOEE0MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDM0ZFOEE1MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c2zvogAAAidJREFUeNrUmM0rBVEYxueOmywuWfj+VlIkFje6ZEeJ8rURRVnIn0DJjlL+BxuSkogiiQ0iCwpJ3boLX/nOggXJx/PqvTVNXWbeOXO7nvot7rlnznnmzHnnfc94tOUPTYE8oBg0gw5QAnzgBayDWbAGHs0XfjXpFidwbrQWzIF0C30XQR94sGtUd2AwHiyALYsmSa3gHnTancwrNJkADvlxSzQDisCo1QskK0rXbDswGdYI6HHT6ADwa2o06Vn5zFARTBTNOcw7eANHmlptgPq/guq3PRrgKE3T3FUdoFW9kTz6brAbBZNhtUn2aCaY0qKrHonRYS36qkFQpQJbRvsdTBgCWUzI5rV34BZm24H+l1GPgyQQBGXgminjNjuimJgHpzCb9pvRL74zickK8Gpoe+W2oGA8SiZXMFsQyWg2m7WjfVBuMmk0W859JOn9GGYTzEbpvXlpo8AIm6zmRBBJb9xHYpZKxQljZsoDZ4KBErnmtDrps3D/p+ocQJvCAXwu9TWrhYxWgnzhABTdT+A8Qo3Zyf89cV+pur1ccTtRMuOLsIq5ChKCn1a0XYt9JZHRlH9g9IqMXigaLM5im0TzZHRV0WBdpveyzm0qNE3v0QDXnrEqOlqn013vKXz8bqgVx5Sfcopye2OMmhwHO8Zcf8IfB2JJY2AwfOgzbv4lUCrM+Sp1x0XMkPFkai6ST0EhqAK9oIF/u60z/jw0DQ5oT5o7fAswAKxgepYzbixFAAAAAElFTkSuQmCC"}}]);
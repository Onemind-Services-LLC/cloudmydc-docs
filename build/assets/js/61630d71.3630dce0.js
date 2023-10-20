"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[7623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||n;return r?o.createElement(h,a(a({ref:t},c),{},{components:r})):o.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<n;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const n=JSON.parse('{"p":[{"JE":"JE-63771","CompatibleFrom":"any","Desc":"The \u201cMaster/Slave\u201d terms are used instead of \u201cPrimary/Secondary\u201d in the success window of the Multi-Region WordPress Cluster package"},{"JE":"JE-64515","CompatibleFrom":"any","Desc":"The Open in Browser button in the Redis/PostgreSQL Multi-Regional Cluster installation success window does not work"},{"JE":"JE-64706","CompatibleFrom":"any","Desc":"An error occurs if the Let\u2019s Encrypt add-on is installed for the environment with an external domain and incorrectly set up DNS"},{"JE":"JE-64769","CompatibleFrom":"any","Desc":"An error occurs when cloning an environment with the BitNinja add-on installed"},{"JE":"WP-247","CompatibleFrom":"any","Desc":"The WordPress packages are missing the ability to select the preferred PHP version"},{"JE":"JE-55416","CompatibleFrom":"3.3","Desc":"The Let\u2019s Encrypt add-on does not work with environment domain names converted to Punycode"},{"JE":"JE-60130","CompatibleFrom":"3.3","Desc":"The Rocket.Chat package does not work after restarting the environment"},{"JE":"JE-64407","CompatibleFrom":"3.3","Desc":"An error occurs during the Plesk package installation"},{"JE":"JE-64509","CompatibleFrom":"3.3","Desc":"An error occurs after the DjangoCMS package installation"},{"JE":"JE-64824","CompatibleFrom":"3.3","Desc":"An error occurs when installing the Drupal package with the 8.2 PHP engine version"},{"JE":"JE-64825","CompatibleFrom":"3.3","Desc":"An error occurs when installing Moodle package with the 8.2 PHP engine version"},{"JE":"JE-64938","CompatibleFrom":"3.3","Desc":"The Let\u2019s Encrypt add-on installation does not return an error when installed with the incorrect domain name"},{"JE":"JE-47650","CompatibleFrom":"5.0.5","Desc":"The PerconaDB icon is missing on the platform dashboard"},{"JE":"JE-63156","CompatibleFrom":"5.0.5","Desc":"Unsupported PostgreSQL version on the NGINX Ruby template"},{"JE":"JE-63923","CompatibleFrom":"5.0.5","Desc":"The custom environment variables declared via the .jelenv file are unavailable on the NGINX PHP containers"},{"JE":"JE-64529","CompatibleFrom":"5.0.5","Desc":"The FTP add-on does not provide access to the home directory on the Spring Boot stack"},{"JE":"JE-64678","CompatibleFrom":"5.4","Desc":"The .NET stacks have a weak default password"},{"JE":"JE-63244","CompatibleFrom":"5.7.4","Desc":"The Export tab is not working in PhpMyAdmin for the LEMP/LLSMP templates"},{"JE":"JE-64564","CompatibleFrom":"5.7.4","Desc":"The Redis module is missing for the LiteSpeed 6 stack with PHP 8 engine"},{"JE":"JE-64574","CompatibleFrom":"5.8.1","Desc":"No error message in the Pgpool-II node\u2019s logs upon the followprimary.sh script failure"},{"JE":"JE-64575","CompatibleFrom":"5.8.1","Desc":"The Pgpool-II node incorrectly detects the database primary for the two-node cluster"}],"y":[{"JE":"JE-65170","AffectedVersions":"8.2","Desc":"An error occurs when mounting files from some custom Docker containers"},{"JE":"JE-65227","AffectedVersions":"-","Desc":"Errors are logged during projects auto-deploy on containers with enabled sendmail functionality"},{"JE":"JE-65272","AffectedVersions":"-","Desc":"An error occurs when executing some commands that include a file download operation"},{"JE":"JE-65325","AffectedVersions":"-","Desc":"Custom Docker containers cannot be created from images that use the OCI manifest schema"},{"JE":"JE-65414","AffectedVersions":"-","Desc":"A scroll slider appears in the environment configuration settings panel even if there is enough space to fit the content"},{"JE":"JE-65499","AffectedVersions":"-","Desc":"The shared files owner is changed to root when resetting a password for the FTP add-on on the Shared Storage node"},{"JE":"JE-65625","AffectedVersions":"7.2","Desc":"The URL_DOCS_OOM_KILLER_TROUBLESHOOTING placeholder is not replaced with a link in emails"},{"JE":"JE-61250","AffectedVersions":"-","Desc":"Firewall management via the user dashboard becomes too slow after adding the \'Deny Internet Access\' rule"},{"JE":"JE-64487","AffectedVersions":"-","Desc":"An error occurs during PHP stacks\u2019 ZDT (zero downtime) deployment"},{"JE":"JE-64618","AffectedVersions":"any","Desc":"The platform dashboard cannot be accessed using the Safari browser"},{"JE":"JE-64636","AffectedVersions":"-","Desc":"A slow response and an incorrect error returned when accessing a non-existing environment on port 4848"},{"JE":"JE-64654","AffectedVersions":"-","Desc":"Incorrect custom SSL certificate management on the SLBs after the environment deletion"},{"JE":"JE-64782","AffectedVersions":"7.0.3","Desc":"The cloudlets usage is not displayed for the Ubuntu VM environments, and the topology cannot be changed"},{"JE":"JE-64802","AffectedVersions":"-","Desc":"Performance degradation after importing an environment into the shared group as a collaborator"},{"JE":"JE-64915","AffectedVersions":"-","Desc":"The custom domains field is not updated after the Let\u2019s Encrypt add-on reconfiguration"},{"JE":"JE-64925","AffectedVersions":"7.3","Desc":"New account registration does not work if the provided password contains the backslash character"}]}'),a={sidebar_position:7},s=void 0,l={unversionedId:"PlatformOverview/Release Notes/Release Notes 8.1",id:"PlatformOverview/Release Notes/Release Notes 8.1",title:"Release Notes 8.1",description:"Virtuozzo Application Platform 8.1",source:"@site/docs/PlatformOverview/Release Notes/Release Notes 8.1.md",sourceDirName:"PlatformOverview/Release Notes",slug:"/PlatformOverview/Release Notes/Release Notes 8.1",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 8.1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PlatformOverview/Release Notes/Release Notes 8.1.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Release Notes 8.2",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 8.2"},next:{title:"Release Notes 8.0.2",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 8.0.2"}},d={},c=[{value:"Virtuozzo Application Platform 8.1",id:"virtuozzo-application-platform-81",level:2},{value:"Fixes Compatible with Prior Versions",id:"fixes-compatible-with-prior-versions",level:2},{value:"Software Stack Versions",id:"software-stack-versions",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},m="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"virtuozzo-application-platform-81"},"Virtuozzo Application Platform 8.1"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This document is preliminary and subject to change.")),(0,i.kt)("p",null,"In this document, you will find all of the new features, enhancements and visible changes included to the ",(0,i.kt)("strong",{parentName:"p"},"Virtuozzo PaaS 8.1")," release."),(0,i.kt)("p",null,"Current version is mostly focused on the platform internal optimization, security improvements, and features for the hosting service providers. System administrators can learn more at the ",(0,i.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"PaaS release notes for operations"),"."),(0,i.kt)("hr",null),(0,i.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,i.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Locale Dropdown",src:r(41766).Z,width:"42",height:"30"})),(0,i.kt)("p",null,"Changed")),(0,i.kt)("div",{style:{width:"100%"}},(0,i.kt)("div",{style:{width:"100%",background:"#def6ff",padding:"20px",margin:"10px 0"}},(0,i.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Software Stack Versions"),(0,i.kt)("p",null,"Actualized list of supported OS templates and software stack versions"),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,i.kt)("a",{href:"/"},"Learn More >>"))))),(0,i.kt)("hr",null),(0,i.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,i.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Locale Dropdown",src:r(12450).Z,width:"42",height:"30"})),(0,i.kt)("p",null,"Fixed")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,i.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Fixes Compatible with Prior Versions"),(0,i.kt)("p",null,"Bug fixes implemented in the current release and integrated into the previous platform versions through the appropriate patches"),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,i.kt)("a",{href:"/"},"Learn More >>"))),(0,i.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,i.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Bug Fixes"),(0,i.kt)("p",null,"List of fixes applied to the platform starting from the current release"),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,i.kt)("a",{href:"/"},"Learn More >>"))))),(0,i.kt)("h2",{id:"fixes-compatible-with-prior-versions"},"Fixes Compatible with Prior Versions"),(0,i.kt)("p",null,"Below, you can find the fixes that were implemented in the Virtuozzo Application Platform 8.3 release and also integrated into previous platform versions by means of the appropriate patches."),(0,i.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,i.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"Virtuozzo Application Platform 8.3"),(0,i.kt)("div",null,(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Compatible from"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),n.p.map(((e,t)=>(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,i.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.JE),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.CompatibleFrom),(0,i.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,i.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,i.kt)("h2",{id:"software-stack-versions"},"Software Stack Versions"),(0,i.kt)("p",null,"The software stack provisioning process is independent of the platform release, which allows new software solutions to be delivered as soon as they are ready. However, due to the necessity to adapt and test new stack versions, there is a small delay between software release by its respective upstream maintainer and integration into Virtuozzo Application Platform."),(0,i.kt)("p",null,"The most accurate and up-to-date list of the certified ",(0,i.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"software stack versions")," can be found on the dedicated documentation page."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,i.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,i.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("p",null,"In the table below, you can see the list of bug fixes applied to the platform starting from Virtuozzo Application Platform 8.3 release:"),(0,i.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,i.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"Virtuozzo Application Platform 8.3"),(0,i.kt)("div",null,(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Affected Versions"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),n.y.map(((e,t)=>(0,i.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,i.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.JE),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.AffectedVersions),(0,i.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))))}f.isMDXComponent=!0},12450:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEM0FFMDgwQzJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEM0FFMDgwRDJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzQUUwODBBMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzQUUwODBCMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p2cxQAAAAm5JREFUeNrMmN1LFFEYxmeHTfdChWRdM+xDEiG7XJQtRCKFKNDdINTCBS+68E5CUBDxpiDqIugP6MaPShHDuihCbyoUb4K09NpsQfy4KQ1M3fV5l3dgmMbdmXPObPvAD+brnHnmPfOe8874Uq98mgJRJzWgBbSBi6AI7IAZMAE+gO1/WrYnHd3Ar8BkA5gE5TbnyGyMIU2De2DL7U10CYMF4DX4dIxJO0XBJuhwezPRiAbAVx5uEb0E1eChlxGlNp8lTBp6AOJeGu0DYU2NhrVx/ZSjbM2S9XSyktkHe2BRU6tZ0Jwt+zO9oxHO0pDmrZoARXVdZOg7wXwOTBqKibyjFWBEwc0PwDL45eDauIjRQUmDf8BVUAgugUYHba4gqcqAq2Tal1yxKPESvE1Gv7louwG607nRnkxmiqhP0uRjk8kClyY1zokpsILohjIZTfFTiWrUtP0XzFleiTN8PJtq0g88rp8/zuhpcChhdNeyfwe8ZZMXwE+uqJwu70swG7AajfCwVUgYDVj2f4BWUMzz5AlQ6qI/qr6em42e5XlTRjfT75a9jMS4LdDvXUQ1qHMCfVRg8l2Wa+rAC8H+W/3cwTkPTF4Dv8FJ0MPXiarTzxW3apODXMapUpiG/pbE+mxnckixSVIJRTQouExO2xx/Cu57ULQkKKJrAg39nIS5MEmaIqPvBT/senlepOLjmYcmSWNUlEQUzKFeij6tyymiC4LDnytFqZLSuRC5kacmnxiFjbGEfuefA/mkR6Df+OgzFyVvQC1Y/c8Gqcy8DAbMX6bWIpmKiipQD7rAdd73Wqv8e2gMfLFW96QjAQYAvVZ8VxrR76cAAAAASUVORK5CYII="},41766:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzNGRThBNjJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNGRThBNzJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDM0ZFOEE0MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDM0ZFOEE1MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c2zvogAAAidJREFUeNrUmM0rBVEYxueOmywuWfj+VlIkFje6ZEeJ8rURRVnIn0DJjlL+BxuSkogiiQ0iCwpJ3boLX/nOggXJx/PqvTVNXWbeOXO7nvot7rlnznnmzHnnfc94tOUPTYE8oBg0gw5QAnzgBayDWbAGHs0XfjXpFidwbrQWzIF0C30XQR94sGtUd2AwHiyALYsmSa3gHnTancwrNJkADvlxSzQDisCo1QskK0rXbDswGdYI6HHT6ADwa2o06Vn5zFARTBTNOcw7eANHmlptgPq/guq3PRrgKE3T3FUdoFW9kTz6brAbBZNhtUn2aCaY0qKrHonRYS36qkFQpQJbRvsdTBgCWUzI5rV34BZm24H+l1GPgyQQBGXgminjNjuimJgHpzCb9pvRL74zickK8Gpoe+W2oGA8SiZXMFsQyWg2m7WjfVBuMmk0W859JOn9GGYTzEbpvXlpo8AIm6zmRBBJb9xHYpZKxQljZsoDZ4KBErnmtDrps3D/p+ocQJvCAXwu9TWrhYxWgnzhABTdT+A8Qo3Zyf89cV+pur1ccTtRMuOLsIq5ChKCn1a0XYt9JZHRlH9g9IqMXigaLM5im0TzZHRV0WBdpveyzm0qNE3v0QDXnrEqOlqn013vKXz8bqgVx5Sfcopye2OMmhwHO8Zcf8IfB2JJY2AwfOgzbv4lUCrM+Sp1x0XMkPFkai6ST0EhqAK9oIF/u60z/jw0DQ5oT5o7fAswAKxgepYzbixFAAAAAElFTkSuQmCC"}}]);
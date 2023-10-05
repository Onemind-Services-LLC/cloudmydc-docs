"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[9947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i=void 0,s={unversionedId:"PlatformOverview/Isolated Container",id:"PlatformOverview/Isolated Container",title:"Isolated Container",description:"All of the instances in the environment (like databases, application servers, etc.) are isolated containers located on different hosts.",source:"@site/docs/PlatformOverview/Isolated Container.md",sourceDirName:"PlatformOverview",slug:"/PlatformOverview/Isolated Container",permalink:"/docs/PlatformOverview/Isolated Container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PlatformOverview/Isolated Container.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Application Container",permalink:"/docs/PlatformOverview/Application Container"},next:{title:"What is Auto-Clustering",permalink:"/docs/PlatformOverview/What is Auto-Clustering"}},l={},c=[{value:"Isolated Containers Live Migration",id:"isolated-containers-live-migration",level:2},{value:"High Availability for Applications",id:"high-availability-for-applications",level:2},{value:"Security of Isolated Containers",id:"security-of-isolated-containers",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All of the instances in the environment (like databases, application servers, etc.) are isolated containers located on different hosts."),(0,a.kt)("p",null,"Three main reasons why the platform provides individual role-based servers are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"live migration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"high availability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"security"))),(0,a.kt)("h2",{id:"isolated-containers-live-migration"},"Isolated Containers Live Migration"),(0,a.kt)("p",null,"In some cases, as your application starts requesting more and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"more resources")),", the physical server running your node might not be able to provide the required resources. In this case, the platform can perform a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"live migration"))," of the node to another host within 30 seconds."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(6586).Z,width:"872",height:"441"}))),(0,a.kt)("p",null,"During that migration, the application keeps working being ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"scaled vertically"),". As an application scales within a server, other applications can be migrated to another server to make room. Live migration allows platform to deliver all the needed resources for applications without restarting containers and causing application downtime. In addition, it can be used during maintenance or other planned downtime to perform automated evacuation of containers from a physical server."),(0,a.kt)("p",null,"Also, you can add ",(0,a.kt)("strong",{parentName:"p"},"more instances")," to your environment using ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"horizontal scaling"),", not having to worry if there is ",(0,a.kt)("strong",{parentName:"p"},"enough space")," on the host. The platform chooses the host with an appropriate amount of free space and relocates your server, in order to offer high-quality performance to each of your nodes."),(0,a.kt)("h2",{id:"high-availability-for-applications"},"High Availability for Applications"),(0,a.kt)("p",null,"The platform provides the ",(0,a.kt)("strong",{parentName:"p"},"highest availability")," by distributing containers of one environment evenly on different physical servers (Hardware nodes). This is done with the help of anti-affinity groups configured to specify that certain containers should never run on the same physical server."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(5491).Z,width:"615",height:"847"}))),(0,a.kt)("p",null,"As a result, the platform eliminates any risk of application downtime if one of the physical servers has any issues with performance."),(0,a.kt)("h2",{id:"security-of-isolated-containers"},"Security of Isolated Containers"),(0,a.kt)("p",null,"The platform uses the ",(0,a.kt)("strong",{parentName:"p"},"virtualization")," method to run multiple containers simultaneously on a single host. These containers are ",(0,a.kt)("strong",{parentName:"p"},"fully isolated")," with no risk of interfering with one another. If the security of any container at the hardware node is compromised, the rest of the containers are left unaffected."),(0,a.kt)("admonition",{title:"Note",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Since each instance within the platform represents an isolated container, it can\u2019t be reached from another node with a simple localhost:port_number or 127.0.0.1:port_number reference - the corresponding container hostname or private/public IP address should be used instead (for example, this could be required to interconnect your application with a database instance).")))}u.isMDXComponent=!0},6586:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01-containers-live-migration-to-another-server-fd8514dbc76fd3b7ac35d12b3e1b529d.gif"},5491:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02-containers-high-availability-dc2a2a55692fea10934e79f35743388f.png"}}]);
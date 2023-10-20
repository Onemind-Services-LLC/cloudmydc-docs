"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[1622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:3},l=void 0,s={unversionedId:"Kubernetes Hosting/Kubernetes Cluster/Cluster Installation",id:"Kubernetes Hosting/Kubernetes Cluster/Cluster Installation",title:"Cluster Installation",description:"Kubernetes Cluster: Package Installation",source:"@site/docs/Kubernetes Hosting/Kubernetes Cluster/Cluster Installation.md",sourceDirName:"Kubernetes Hosting/Kubernetes Cluster",slug:"/Kubernetes Hosting/Kubernetes Cluster/Cluster Installation",permalink:"/docs/Kubernetes Hosting/Kubernetes Cluster/Cluster Installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Kubernetes Cluster/Cluster Installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"System Requirements",permalink:"/docs/Kubernetes Hosting/Kubernetes Cluster/System Requirements"},next:{title:"Cluster Versions",permalink:"/docs/Kubernetes Hosting/Kubernetes Cluster/Cluster Versions"}},i={},u=[{value:"Kubernetes Cluster: Package Installation",id:"kubernetes-cluster-package-installation",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-cluster-package-installation"},"Kubernetes Cluster: Package Installation"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Cluster")," solution is available for automatic installation via ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"platform Marketplace")," under the Clusters category (or use Search to locate). Note that this clustered solution is available for billing customers only."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(16609).Z,width:"703",height:"308"}))),(0,a.kt)("p",null,"Within the opened installation frame, customize the available options to get a cluster specifically for your needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Version")," - choose a ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Kubernetes version")," for your cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"K8s Dashboard")," - select between the v2 and Skooner options (note that some metrics in the skooner dashboard don\u2019t work with the HAProxy ingress controller)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Topology"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Development")," - one control-plane (1) and one scalable worker (1+)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Production")," - multi control-plane (3) with API balancers (2+) and scalable workers (2+)")))),(0,a.kt)("admonition",{title:"Note",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The development topology is not recommended for production projects as it cannot handle high load reliably due to a single control-plane instance.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ingress Controller")," - choose the preferable ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"ingress controller")," for your cluster (NGINX, Traefik, or HAProxy). We recommended using NGINX as it provides the most flexibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Deployment")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Clean cluster")," with pre-deployed HelloWorld example"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Custom")," helm or stack deployed via shell command - chose this option to manually provide commands for custom application deployment from the helm repository"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NFS Storage")," - enable to attach a dedicated NFS Storage with dynamic volume provisioning (disable if you want to register own storage class, requires in-depth K8s knowledge)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Modules")," (can be enabled later via the add-ons)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Prometheus & Grafana")," - check to install these monitoring tools (recommended). This deployment requires an additional 5GB of disk space for persistent volumes and consumes about 500 MB of RAM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Jaeger Tracing Tools")," - tick to install Jaeger tracing system for monitoring and troubleshooting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Remote API Access")," - check if you plan on using the kubectl command-line tool or some other remote clients"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Environment")," - provide a name for your environment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Display Name")," - specify an ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"alias"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Region")," - choose a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"region")," (if available)"))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(39226).Z,width:"650",height:"554"}))),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Install")," and wait a few minutes for the platform to automatically configure your Kubernetes cluster."))}m.isMDXComponent=!0},16609:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01-marketplace-kubernetes-cluster-481d29be7d204d587e622fec71038602.png"},39226:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02-kubernetes-cluster-installation-frame-f9098ba85becbd6890dff8d785ff9035.png"}}]);
"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i=void 0,c={unversionedId:"Account&Pricing/Resource Charging/Charged Resources",id:"Account&Pricing/Resource Charging/Charged Resources",title:"Charged Resources",description:"Resource consumption for each environment is charged to the account owner on an hourly basis.",source:"@site/docs/Account&Pricing/Resource Charging/Charged Resources.md",sourceDirName:"Account&Pricing/Resource Charging",slug:"/Account&Pricing/Resource Charging/Charged Resources",permalink:"/docs/Account&Pricing/Resource Charging/Charged Resources",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Account&Pricing/Resource Charging/Charged Resources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pricing FAQ",permalink:"/docs/Account&Pricing/Resource Charging/Pricing FAQ"},next:{title:"Monitoring Consumed Resources",permalink:"/docs/Account&Pricing/Resource Charging/Monitoring Consumed Resources"}},s={},u=[{value:"Primary Chargeable Resources",id:"primary-chargeable-resources",level:2},{value:"RAM &amp; CPU",id:"ram--cpu",level:3},{value:"Provider-Dependent Charges",id:"provider-dependent-charges",level:2},{value:"Disk Space",id:"disk-space",level:2},{value:"Traffic",id:"traffic",level:2},{value:"Optional Extras",id:"optional-extras",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Resource consumption for each environment is charged to the account owner on an hourly basis."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Primary Chargeable Resources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Provider-Dependent Charges")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Optional Extras"))),(0,a.kt)("p",null,"You can track resource usage (",(0,a.kt)("em",{parentName:"p"},"CPU, RAM, Network, Disk"),") in real time via built-in ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"statistics monitoring"),"."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(87882).Z,width:"1574",height:"457"}))),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Resources consumed by environments provided based on the subscriptions are considered free of charge by default.")),(0,a.kt)("h2",{id:"primary-chargeable-resources"},"Primary Chargeable Resources"),(0,a.kt)("h3",{id:"ram--cpu"},"RAM & CPU"),(0,a.kt)("p",null,"RAM & CPU are measured in a platform resource unit called a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Cloudlet"),". One ",(0,a.kt)("strong",{parentName:"p"},"Cloudlet")," is equivalent to 128 MiB RAM and 400MHz CPU."),(0,a.kt)("p",null,"Resources are charged on an hourly basis:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RAM")," usage: the peak RAM usage over the hour"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CPU")," usage: the average CPU usage over the hour")),(0,a.kt)("p",null,"When calculating your cloudlet usage, we only consider the larger of RAM or CPU usage each hour (not both combined). E.g. if during one hour your average CPU usage is 2400MHz (6 cloudlets), and your peak RAM usage is 1024MiB (8 cloudlets), you pay for 8 cloudlets - not the combined total (14 cloudlets)."),(0,a.kt)("p",null,"There are two types of cloudlets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Reserved cloudlets")," are reserved in advance (using the topology wizard)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Dynamic cloudlets")," are scaled dynamically for your application.")),(0,a.kt)("admonition",{title:"Note",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"You are not charged for the RAM used for disk cache and buffers.")),(0,a.kt)("p",null,"More details about cloudlet charges and the differences between Reserved / Dynamic cloudlets can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Pricing System")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Automatic Discounts")," documents."),(0,a.kt)("h2",{id:"provider-dependent-charges"},"Provider-Dependent Charges"),(0,a.kt)("p",null,"The following resources are charged at some hosting providers, but others include a free amount."),(0,a.kt)("h2",{id:"disk-space"},"Disk Space"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disk Space")," usage is measured in GB. Like all platform resources, you only pay for your actual consumption (you do not need to buy extra space \u201cjust in case\u201d you need it). More details about charging disk space can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Pricing System")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Automatic Discounts")," documents."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If facing a need to store data in a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"separate storage node"),", consider using ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Master")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Compound")," data containers to lower disk space consumption and reduce overall environment cost.")),(0,a.kt)("h2",{id:"traffic"},"Traffic"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Traffic")," usage is measured in GB. Only ",(0,a.kt)("u",null,"external traffic")," is charged - the sum of incoming and outgoing traffic between your environment and the Internet. ",(0,a.kt)("u",null,"Internal traffic")," is absolutely free - traffic within your environment or between environments within the same hosting provider. More details about charging traffic can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Pricing System")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Automatic Discounts")," documents."),(0,a.kt)("h2",{id:"optional-extras"},"Optional Extras"),(0,a.kt)("p",null,"With the platform you can add the following optional services to your environment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Public IPv4")," is an external IP address which is directly accessible from outside of the cluster. This allows you to form direct connections between the Internet and specific servers within your environment. Otherwise (without buying a Public IPv4 address), traffic is routed from the Internet to your environment via the platform resolver (SLB).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Built-in SSL")," is a protocol which establishes a secure connection between your client and your environment (some hosting providers offer this service free of charge)."))),(0,a.kt)("p",null,"More details about charges for optional services can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Pricing System")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Automatic Discounts")," documents."))}p.isMDXComponent=!0},87882:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01-statistics-monitoring-f6b86fcd23b9c044aa5435ff26f4bd4b.png"}}]);
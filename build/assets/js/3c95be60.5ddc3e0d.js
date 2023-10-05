"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[9961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:6},i=void 0,s={unversionedId:"Container/Connect to Custom Container",id:"Container/Connect to Custom Container",title:"Connect to Custom Container",description:"How to Connect to Your Custom Container",source:"@site/docs/Container/Connect to Custom Container.md",sourceDirName:"Container",slug:"/Container/Connect to Custom Container",permalink:"/docs/Container/Connect to Custom Container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Container/Connect to Custom Container.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Container Image Requirements",permalink:"/docs/Container/Container Image Requirements"},next:{title:"Custom Container SSH Access",permalink:"/docs/Container/Custom Container SSH Access"}},l={},c=[{value:"How to Connect to Your Custom Container",id:"how-to-connect-to-your-custom-container",level:2},{value:"Internal Connection",id:"internal-connection",level:2},{value:"External Connection",id:"external-connection",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-connect-to-your-custom-container"},"How to Connect to Your Custom Container"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Containers")," integration into the platform is one of the most important and demanded services. The synthesis of container portability, together with the platform flexible management, appeals to developers and allows to effortlessly host and maintain all types of applications available within Docker templates."),(0,a.kt)("p",null,"The following tutorial deals with the key principles of work with Docker-based applications, which may be a point of interest for both beginners and intermediate developers."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(2970).Z,width:"431",height:"292"}))),(0,a.kt)("p",null,"Below we\u2019ll get a particularly detailed insight into the ways of connecting to a container at the platform, considering both internal and external possibilities, and observe where to find the very basic container information that is required for such connection establishment."),(0,a.kt)("p",null,"So, let\u2019s see how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"set up an internal container connection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"get access to container from outside"))),(0,a.kt)("h2",{id:"internal-connection"},"Internal Connection"),(0,a.kt)("p",null,"Each container at the platform automatically gets a unique internal domain name and internal IP address right after creation. Further, these parameters can be used to access containers in confines of a single Cloud (i.e. to establish connection between them via the platform\u2019s internal network)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The very first option you need to consider in case of having necessity to set up interconnection between containers is the embedded functionality of ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"container linking"),". It allows to connect containers from different layers within a single environment to securely transfer environment variables information from source Docker image to the recipient without exposing any ports externally.")),(0,a.kt)("p",null,"For that, you just need to select the required layer and specify an alias for the connection denomination (whilst all of the appropriate variables will get the corresponding prefix according to it):"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(7720).Z,width:"726",height:"276"}))),(0,a.kt)("p",null,"Don\u2019t forget to ",(0,a.kt)("strong",{parentName:"p"},"Save")," and ",(0,a.kt)("strong",{parentName:"p"},"Apply")," the changes you\u2019ve made."),(0,a.kt)("p",null,"After that, you may refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Variables")," section of your container settings and adjust any of them separately upon the necessity. However, changing the environment variable\u2019s value for a container, that is already linked to another one, will also cause its automatic update in a container this link was applied to."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"In case there is a need to establish internal connection of another type (i.e. which requires some manual adjustments via the comprised configuration files), it is required to know the exact container domain name or IP address it can be accessed through the platform\u2019s internal network.")),(0,a.kt)("p",null,"The appropriate information can be obtained in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"through the email notification you receive after environment creation. The corresponding internal domain name and IP address are to be listed within the section with container admin data:")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(8500).Z,width:"606",height:"102"}))),(0,a.kt)("p",null,"Here, the containers' domain name is shown at the Access URL string and its internal IP address - within the IP line below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"within the platform dashboard, the same data can be found in the following ways:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"click the ",(0,a.kt)("strong",{parentName:"li"},"Open in Browser")," button next to the container you\u2019re interested in for the required node interface to be opened in a new browser tab, so you can easily copy its domain from the address bar.")))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(390).Z,width:"882",height:"163"}))),(0,a.kt)("p",null,"Or, just right-click on the domain string under the environment name (circled above) and copy the provided link."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"internal IP address of the node can be viewed through expanding the ",(0,a.kt)("strong",{parentName:"li"},"Additionally")," list for the required container, as it is shown in the image below.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(7372).Z,width:"882",height:"202"})),(0,a.kt)("p",null,"In such a way, the retrieved information can be used to establish internal connection to your containers at the platform."),(0,a.kt)("h2",{id:"external-connection"},"External Connection"),(0,a.kt)("p",null,"In order to access your container from outside the platform (i.e. from the Internet), you have the following solutions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If your service or application, that is running within container, listens to the port 80, then it will be automatically exposed to external network (over the assigned domain name) via the platform ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Shared Load Balancer"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(4058).Z,width:"882",height:"163"})),(0,a.kt)("p",null,"In such a case, you just need to click ",(0,a.kt)("strong",{parentName:"p"},"Open in Browser")," for the corresponding node to launch it (this option works for HTTP connections)."),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case your container does not have an ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"external IP")," attached, the platform performs an automatic port redirect. This means that if application listens to a custom port on TCP level, the platform will try to automatically detect it and forward all the incoming requests to this port number. As a result, in most cases, your app or service will become available over the Internet under the corresponding node\u2019s domain right after creation."),(0,a.kt)("p",{parentName:"admonition"},"However, in case you\u2019d like to prohibit such a possibility, you may declare the corresponding rules within your container\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"firewall settings"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"For more complex implementations, the platform provides special ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"endpoints")," functionality (available within the same-named section of any environment\u2019s ",(0,a.kt)("strong",{parentName:"li"},"Settings"),"):")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(5159).Z,width:"1014",height:"238"})),(0,a.kt)("p",null,"It allows to expose the required private port on your container through the randomly chosen public port at the platform Shared Load Balancer, so it can be accessed via the provided ",(0,a.kt)("strong",{parentName:"p"},"Access URL"),"."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"And the last option, which gives the maximum freedom (allowing, for example, to secure your connection with ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Custom SSL"),", get rid of limitation on the simultaneous connections amount, etc.) is attachment of ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"public IP")," address to your container.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(4626).Z,width:"976",height:"533"})),(0,a.kt)("p",null,"By its means, your app can be configured to listen to any port you need and, in such a way, to become accessible via the external network."),(0,a.kt)("admonition",{title:"Note",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Public IP option is a paid add-on. The exact cost for its usage can be seen upon hovering over the price widget at the right part of your topology wizard or through navigating to ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Quotas & Pricing")," > Pricing > Options tab.")),(0,a.kt)("p",null,"That\u2019s all! Now you can leverage the most suitable connection option among the described ones while working with your Docker containers."),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you face any issues while setting connection to your container at the platform, feel free to appeal for our technical experts' assistance at ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Stackoverflow"),".")))}m.isMDXComponent=!0},2970:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/01-container-internal-external-connection-fa1b64ecc96bb2e649d5a1f3c0713497.png"},7720:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/02-609716a7488f78e935e16769029b5ee6.png"},8500:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/03-9f342ea89e21ee9388870ad980ce3dde.png"},390:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/04-8f922294eb98a006f09ad4a88d1d25b8.png"},7372:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/05-3154d2f8fe024a927fea530376450a7e.png"},4058:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/06-1e15933f431b9d06d9059054a8b18893.png"},5159:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/07-a4705701b2d2350a24ae59814d9f6994.png"},4626:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/08-be3272ac9231bd71cc182de1ef4e38c7.png"}}]);
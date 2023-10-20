"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[3503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5},i=void 0,s={unversionedId:"PlatformOverview/Application Container",id:"PlatformOverview/Application Container",title:"Application Container",description:"What are Application Containers",source:"@site/docs/PlatformOverview/Application Container.md",sourceDirName:"PlatformOverview",slug:"/PlatformOverview/Application Container",permalink:"/docs/PlatformOverview/Application Container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PlatformOverview/Application Container.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"System Container",permalink:"/docs/PlatformOverview/System Container"},next:{title:"Isolated Container",permalink:"/docs/PlatformOverview/Isolated Container"}},c={},l=[{value:"What are Application Containers",id:"what-are-application-containers",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-are-application-containers"},"What are Application Containers"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"application container")," is a relatively new container type. It is an application, service, or even microservice centric solution that usually runs just a single process inside. As a result, application containers promote creating immutable and ephemeral infrastructure. If an application or service needs to be updated, a whole new container is built (with the required adjustments) from the appropriate image. Then, it is provisioned to replace the existing running container instance."),(0,o.kt)("u",null,"In the early days"),", such complexity, as well as the ",(0,o.kt)("a",{href:"/"},"lack of proper isolation")," and incompatibilities of application containers with some technologies (like Java and database runtimes), had greatly impacted the adoption speed of application containers. Developers had to implement significant adjustments to ensure that their technologies and additional functionality can be run inside application containers correctly.",(0,o.kt)("p",null,"Also, as a stateless solution, application containers cannot natively save state information inside, so such operations are delegated to the external persistent storage systems. However, according to the developers of the purely stateless containers, bringing the state to deployment is an obsolete way of architecture design. They assert that the best and cleanest approach for the containers is to perform operations that do not require keeping the state."),(0,o.kt)("u",null,"Nowadays"),", a lot of supplementary tools are implemented for convenient utilization of services that use application containers. As a result, developers can benefit from the highly specialized units of application containers without the downside of complex management.",(0,o.kt)("p",null,"Several application container implementations are actively developed: ",(0,o.kt)("em",{parentName:"p"},"Docker, CRI-O, containerd"),", and some others. At the moment, the platform utilizes Docker as the most widely adopted technology for application containers. The platform provides comprehensive ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"deployment automation"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"fast server provisioning"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"stateful data storing/processing tools")," (sessions, logs, configs, etc.) for convenient utilization of application containers."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(27484).Z,width:"410",height:"261"}))),(0,o.kt)("p",null,"However, some applications and technologies may still have problems while migrating to application containers (due to lack of proper isolation, statelessness, and single-process requirements). This is especially relevant for the complex application container orchestration tools like Kubernetes. In case of difficulties with migration, ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"system containers")," can be considered a better-suited alternative for containerization."))}u.isMDXComponent=!0},27484:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/services-in-application-and-system-containers-d42b4b8c30d9616513d7ef59580c88e4.png"}}]);
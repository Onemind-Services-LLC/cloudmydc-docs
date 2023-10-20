"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[6977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:6},s=void 0,o={unversionedId:"Kubernetes Hosting/Traefik v2 Ingress Controller",id:"Kubernetes Hosting/Traefik v2 Ingress Controller",title:"Traefik v2 Ingress Controller",description:"<div style={{",source:"@site/docs/Kubernetes Hosting/Traefik v2 Ingress Controller.md",sourceDirName:"Kubernetes Hosting",slug:"/Kubernetes Hosting/Traefik v2 Ingress Controller",permalink:"/docs/Kubernetes Hosting/Traefik v2 Ingress Controller",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Traefik v2 Ingress Controller.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Storage",permalink:"/docs/Kubernetes Hosting/Persistent Data/Custom Storage"},next:{title:"Public IP for Access to Kubernetes",permalink:"/docs/Kubernetes Hosting/Public IP for Access to Kubernetes"}},l={},c=[{value:"No Frontends and Backends",id:"no-frontends-and-backends",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Several Middlewares at a Time",id:"several-middlewares-at-a-time",level:2},{value:"Providers",id:"providers",level:2},{value:"Services",id:"services",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{display:"grid",gridTemplateColumns:"0.7fr 1fr",gap:"10px"}},(0,a.kt)("div",null,(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"cetner"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(49002).Z,width:"300",height:"219"})))),(0,a.kt)("div",null,(0,a.kt)("p",null,"Jelastic Kubernetes cluster can be installed with NGINX, Traefik, or HAProxy ingress controllers. In this post, we will take a closer look at Traefik and its evolution in Jelastic Kubernetes Service (Jelastic KS)."))),(0,a.kt)("p",null,"At the moment all issued Jelastic Kubernetes versions support Traefik v1, but commencing from K8s version 1.21.2, Traefik v2 will be used instead."),(0,a.kt)("p",null,"A number of internal components of Traefik were conceptually redesigned moving from v1 to v2. Below we will cover some of them we consider more important."),(0,a.kt)("h2",{id:"no-frontends-and-backends"},"No Frontends and Backends"),(0,a.kt)("p",null,"The basic concepts such as frontend and backend have been replaced with a combination of routers, services, and middleware.\nWith Traefik v1, it is considered the router replaces the frontend and the service takes over the backend role, whilst each router refers to a service."),(0,a.kt)("p",null,"In order to increase flexibility tweaking the requests before they will be sent to the services, the middleware pieces were attached to the routers in Traefik v2. These middleware can be chained together to fit any scenario. Also, any router can then link to the desired middleware instance."),(0,a.kt)("h2",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"There are a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"number of middlewares available"),". Besides serving traditional ingresses for HTTP requests, separate middleware entities allow to modify the request parameters, the HTTP headers, some are responsible for redirects logic, other ones add authentication capabilities, etc."),(0,a.kt)("p",null,"Before the request will be sent to the service it can be modified with middleware(s) attached to a router."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(47288).Z,width:"1220",height:"375"}))),(0,a.kt)("p",null,"The couple of examples for middlewares used in the requests routing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stripPrefix"),' - allows to remove a prefix from the path. This middleware is supposed to be used if your backend serves the path "/" , but should be exposed externally on a specific prefix, e.g. "/foo". This middleware is a replacement of ',(0,a.kt)("strong",{parentName:"li"},"frontend.rule.type")," annotation in Traefik v1.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'http:\n  middlewares:\n    test-stripprefix:\n      stripPrefix:\n        prefixes:\n          - "/foo"\n')),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(58597).Z,width:"820",height:"239"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"basicAuth")," middleware for implementing basic authorization. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'http:\n  middlewares:\n    test-auth:\n      basicAuth:\n        users:\n          - "user1:$apr1$Kveg6cv0$yJn5mwyfBy7luzZ9Fi1AH0"\n          - "user2:$apr1$w70ASLDx$1UJmrFL/lVoltjmAz4UDH/"\n')),(0,a.kt)("p",null,"This middleware is an alternative to specifying credentials via ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Kubernetes Secrets")," and restricts access to the services:"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(1281).Z,width:"820",height:"239"}))),(0,a.kt)("p",null,"And it is a replacement for the Traefik v1 annotation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'traefik.ingress.kubernetes.io/auth-type: "basic".\n')),(0,a.kt)("h2",{id:"several-middlewares-at-a-time"},"Several Middlewares at a Time"),(0,a.kt)("p",null,"Middleware employment (as well as other routing components) is optional. Routing logic can use either several middlewares or none at all. For example, in the Ingress below one middleware handles authentication purposes, and another one strips a source path prefix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: monitoring-prometheus-alertmanager\n  namespace: kubernetes-monitoring\n  annotations:\n    kubernetes.io/ingress.class: traefik\n    traefik.ingress.kubernetes.io/router.middlewares:\n       kubernetes-monitoring-alert-auth@kubernetescrd,\n       kubernetes-monitoring-alert-prefix@kubernetescrd\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /prometheus-alert\n        pathType: Prefix\n           backend:\n           service:\n            name: monitoring-prometheus-alertmanager\n            port:\n              number: 80\n\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: Middleware\nmetadata:\n  name: alert-auth\n  namespace: kubernetes-monitoring\nspec:\n  basicAuth:\n    secret: monitoring-prometheus\n\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: Middleware\nmetadata:\n  name: alert-prefix\n  namespace: kubernetes-monitoring\nspec:\n  stripPrefix:\n    prefixes:\n      - /prometheus-alert\n\n")),(0,a.kt)("h2",{id:"providers"},"Providers"),(0,a.kt)("p",null,"Traefik v2 introduces the concept of a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"provider"),", which is an infrastructure component that provides information regarding routing to the Traefik. Once the Traefik detects any changes, it automatically updates the routes. The Kubernetes Ingress Traefik provider offers the traditional ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Kubernetes ingress")," controller functionality."),(0,a.kt)("p",null,"Aside from the standard Ingress, Jelastic KS now supports an ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"IngressRoute")," which is the Custom Resource Definition (CRD) implementation of a ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Traefik HTTP router"),". This implementation improved accessibility to the K8s clusters without writing annotations. You can get familiar with an ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"example")," of how to use IngressRoute in our K8s repository."),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"Among other features, Traefik v2 supports specific Services that are responsible for configuring how to reach the actual Kubernetes services that will ultimately handle incoming requests."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(96511).Z,width:"1159",height:"350"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'http:\n  services:\n    my-service:\n      loadBalancer:\n        servers:\n        - url: "http://<private-ip-server-1>:<private-port-server-1>/"\n        - url: "http://<private-ip-server-2>:<private-port-server-2>/"\n')),(0,a.kt)("p",null,"Also, Traefik offers a set of internal services. You can see an example in the config file from the Jelastic KS repository: there is an access to a built-in Traefik v2 dashboard service via IngressRoute provided."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:r(57937).Z,width:"1024",height:"487"}))),(0,a.kt)("p",null,"These are only a few main changes in the new Traefik v2 which is implemented within ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Jelastic Kubernetes v1.21.2+"),". You can check a full list in the official ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"documentation related to transition from Traefik v1 to v2"),"."),(0,a.kt)("p",null,"Get started with ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Kubernetes Service")," that can be automatically deployed, scaled and updated using Jelastic PaaS and don\u2019t forget to keep an eye on ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"new releases"),"."))}u.isMDXComponent=!0},58597:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image1-2-81c09c8ca077fd6b0f5fe781f9dd85f1.png"},57937:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image2-2-1024x487-1ab6579fa6939e42bc23efce21d58986.png"},49002:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image3-1-300x219-64b683610c60c5122bdeebbb97471bab.png"},47288:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image4-1-1e6699f80b1d48f97b066e2de6877b30.png"},96511:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image6-671836b40304b9edc600eb5e5882e352.png"},1281:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image7-02ed22550a59a790d56a7fde00837645.png"}}]);
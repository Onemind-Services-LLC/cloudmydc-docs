"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[5189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},s=void 0,i={unversionedId:"Kubernetes Hosting/Application Deployment/Creating Ingresses",id:"Kubernetes Hosting/Application Deployment/Creating Ingresses",title:"Creating Ingresses",description:"Kubernetes Cluster: Creating Ingresses",source:"@site/docs/Kubernetes Hosting/Application Deployment/Creating Ingresses.md",sourceDirName:"Kubernetes Hosting/Application Deployment",slug:"/Kubernetes Hosting/Application Deployment/Creating Ingresses",permalink:"/docs/Kubernetes Hosting/Application Deployment/Creating Ingresses",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Application Deployment/Creating Ingresses.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Exposing Services",permalink:"/docs/Kubernetes Hosting/Application Deployment/Exposing Services"},next:{title:"Persistent Data",permalink:"/docs/category/persistent-data"}},p={},c=[{value:"Kubernetes Cluster: Creating Ingresses",id:"kubernetes-cluster-creating-ingresses",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-cluster-creating-ingresses"},"Kubernetes Cluster: Creating Ingresses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Ingress"))," is a Kubernetes Cluster load balancer that manages external access to the services, provides SSL termination and name-based virtual hosting. It is managed via a set of rules (spec) that are matched against all incoming requests."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Compared to the service expose via ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"NodePort")),", ingress is a more powerful but also more complicated option. It is most useful when you need to expose multiple services under the same IP address. Additionally, ingresses are managed by a controller, which provides numerous features out-of-the-box (SSL, auth, routing, etc.).")),(0,a.kt)("p",null,"Ingresses in ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Cluster")," are managed by ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Traefik")," ingress controller by default, with the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"HAProxy")," and NGINX options available in the upcoming 1.15.5 ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"package version"),". It watches objects, parses specs/annotations, and translates them into redirect rules."),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is not possible to change the selected ingress controller via the Kubernetes management add-on or some other automation tool after the installation. The operation can still be performed manually, feel free to contact support if you need assistance.")),(0,a.kt)("p",null,"An ingress spec is a combination of a path rule, a backend service, and a port. For example, your ingress may look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  labels:\n    app: myapp\n  name: myapp\n  annotations:\n    kubernetes.io/ingress.class: traefik\n    ingress.kubernetes.io/secure-backends: "true"\n    traefik.frontend.rule.type: PathPrefixStrip\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /myapp\n        backend:\n          serviceName: myapp\n          servicePort: 8080\n')),(0,a.kt)("p",null,"This example exposes the myapp service, which is bound to the 8080 port on a path of your Kubernetes environment default domain with the /myapp suffix (i.e. ",(0,a.kt)("em",{parentName:"p"},"https://${envName}.${platformDomain.com}/myapp"),"). For additional information on the ingress rules configuration (including path- and subdomain-based routing), refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"official documentation"),"."))}m.isMDXComponent=!0}}]);
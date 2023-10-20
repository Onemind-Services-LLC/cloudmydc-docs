"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[3834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:1},o=void 0,l={unversionedId:"Kubernetes Hosting/Managing Kubernetes/Cluster Access",id:"Kubernetes Hosting/Managing Kubernetes/Cluster Access",title:"Cluster Access",description:"Kubernetes Cluster Access",source:"@site/docs/Kubernetes Hosting/Managing Kubernetes/Cluster Access.md",sourceDirName:"Kubernetes Hosting/Managing Kubernetes",slug:"/Kubernetes Hosting/Managing Kubernetes/Cluster Access",permalink:"/docs/Kubernetes Hosting/Managing Kubernetes/Cluster Access",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Managing Kubernetes/Cluster Access.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing Kubernetes",permalink:"/docs/category/managing-kubernetes"},next:{title:"Access Control",permalink:"/docs/Kubernetes Hosting/Managing Kubernetes/Access Control"}},c={},i=[{value:"Kubernetes Cluster Access",id:"kubernetes-cluster-access",level:2},{value:"Kubernetes Dashboard",id:"kubernetes-dashboard",level:2},{value:"Kubectl Client",id:"kubectl-client",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"kubernetes-cluster-access"},"Kubernetes Cluster Access"),(0,r.kt)("p",null,"After the successful ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"installation of a cluster"),", there are multiple ways to access it to start management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Kubernetes Dashboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"kubectl client"))),(0,r.kt)("h2",{id:"kubernetes-dashboard"},"Kubernetes Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The after installation pop-up provides all the necessary data to connect to the Kubernetes Dashboard - link and access token.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(32805).Z,width:"430",height:"269"}))),(0,r.kt)("p",null,"The same information is also provided via the appropriate email notification."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Follow the link, select the ",(0,r.kt)("strong",{parentName:"li"},"Token")," option, and paste the required value.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(87396).Z,width:"1027",height:"358"}))),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is also possible to log in with the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"kubeconfig"))," file; however, you\u2019ll need to install kubectl and set the right context (see the ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"section")," below).")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If you\u2019ve lost an email with the Kubernetes cluster access token, it can be viewed by executing the following command on the master node (e.g. via ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Web SSH"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep fulladmin | awk '{print $1}') | grep 'token:' | sed -e's/token:\\| //g'\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(14698).Z,width:"952",height:"294"}))),(0,r.kt)("p",null,"Now, you can access the Kubernetes Dashboard once again."),(0,r.kt)("h2",{id:"kubectl-client"},"Kubectl Client"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Kubectl"))," is a command-line tool to control a Kubernetes cluster. The platform automatically installs it on all master nodes during the environment creation. You can start working with your cluster using kubectl right away, just connect to the required node ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"over SSH"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"installation steps")," to use a local kubectl. Next, run a command to establish remote connection:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-cluster jelastic --server={api-endpoint} && \\\nkubectl config set-context jelastic --cluster=jelastic && \\\nkubectl config set-credentials user --token={token} && \\\nkubectl config set-context jelastic --user=user && \\\nkubectl config use-context jelastic\n")),(0,r.kt)("p",null,"Replace the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"{api-endpoint}"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"{token}"))," placeholders with the Remote API URL and access token respectively."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven\u2019t enabled ",(0,r.kt)("strong",{parentName:"p"},"Remote API")," during installation, it can be done via the in-built add-on available for the master nodes in the platform dashboard."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Locale Dropdown",src:n(74801).Z,width:"795",height:"489"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can check if kubectl has access to the cluster with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(25893).Z,width:"820",height:"129"}))),(0,r.kt)("p",null,"You should see information about pods in the default namespace."))}d.isMDXComponent=!0},32805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-kubernetes-installation-success-frame-1014dc2a8a3d522ee6b47d2818fa9567.png"},87396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-kubernetes-dashboard-token-access-e91c93292df9fd6459bb335f7939d388.png"},14698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-view-kubernetes-access-token-32e019086f380b7ed60b491dfc7ffa0b.png"},74801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-install-remote-api-for-kubernetes-cluster-81cf207b77abeec8e050bb2bbc78f5b1.png"},25893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-kubectl-access-to-kubernetes-cluster-6bf92408675817a7a56e2744bbd14e31.png"}}]);
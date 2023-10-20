"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[7844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:7},i=void 0,s={unversionedId:"Container/Custom Container SSH Access",id:"Container/Custom Container SSH Access",title:"Custom Container SSH Access",description:"Custom Container SSH Access",source:"@site/docs/Container/Custom Container SSH Access.md",sourceDirName:"Container",slug:"/Container/Custom Container SSH Access",permalink:"/docs/Container/Custom Container SSH Access",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Container/Custom Container SSH Access.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Connect to Custom Container",permalink:"/docs/Container/Connect to Custom Container"},next:{title:"Private Registry inside PaaS",permalink:"/docs/Container/Private Registry inside PaaS"}},c={},l=[{value:"Custom Container SSH Access",id:"custom-container-ssh-access",level:2},{value:"Reset Password",id:"reset-password",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-container-ssh-access"},"Custom Container SSH Access"),(0,o.kt)("p",null,"Since custom containers don\u2019t have the embedded GUI for their management, the most common way to take the full control over such an instance is connecting to it under the SSH protocol and perform any desired operations inside using the corresponding terminal commands."),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"With the PaaS, the majority of the required configurations can be performed directly through the dashboard without the necessity to use SSH, thanks to the following tools:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Container Configurations")," - allows to customize the main container settings (like variables, volumes, linking, run options, opened ports, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Configuration Manager")," - provides the full root access to the container\u2019s file system, allowing to operate with all of the comprised files\nIn addition, you can leverage the platform-dedicated ",(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"CLI client"),", which provides the advanced remote management for all types of environments and nodes and allows to automate your app\u2019s lifecycle via scripts."))),(0,o.kt)("p",null,"SSH connection to a container can be established in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"through the SSH Gateway as for any other environment. The flow will be the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"generate")," an SSH keypair"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"add your public SSH key")," to the dashboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"access your account")," via SSH protocol"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"or, if you don\u2019t want to use SSH keys, you need to attach the ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"public IP")," address to the required node and perform the next steps:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"open your ",(0,o.kt)("strong",{parentName:"li"},"terminal")," emulator"),(0,o.kt)("li",{parentName:"ul"},"enter the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"ssh ","[username]","@","[hostname]"))," string, where the ",(0,o.kt)("strong",{parentName:"li"},"username")," is your login, and hostname is the Public IP address (you receive these credentials via email everytime a new container is created or added to the environment)"),(0,o.kt)("li",{parentName:"ul"},"specify the requested ",(0,o.kt)("strong",{parentName:"li"},"password")," (can be found in the email also)")))),(0,o.kt)("p",null,"Once you\u2019ve entered your container, you can perform any required configurations, thanks to the full root permissions granted."),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you\u2019ve faced any problems during establishing the connection, check the firewall rules for your container and ensure it has the openssh server running.")),(0,o.kt)("h2",{id:"reset-password"},"Reset Password"),(0,o.kt)("p",null,"In case you\u2019ve forgotten your container\u2019s credentials or lost/deleted the appropriate email, you can restore them at any time - simply choose the ",(0,o.kt)("strong",{parentName:"p"},"Reset password")," option within the expandable ",(0,o.kt)("strong",{parentName:"p"},"Additional")," list (the gear icon) for the necessary node (or set of them):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(2321).Z,width:"820",height:"245"})),(0,o.kt)("p",null,"As a result, you\u2019ll receive a new password via email and can use it for operating your container(s)."))}m.isMDXComponent=!0},2321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01reset-pass-new-28b2fa70cb94349c8dda12a6630f46e0.png"}}]);
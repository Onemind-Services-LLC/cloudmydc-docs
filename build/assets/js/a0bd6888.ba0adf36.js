"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:7},o=void 0,s={unversionedId:"EnvironmentManagement/Environment Transferring",id:"EnvironmentManagement/Environment Transferring",title:"Environment Transferring",description:"Environment transferring allows you to move any environment to another PaaS account within the same platform (confirmation on both sides is required).",source:"@site/docs/EnvironmentManagement/Environment Transferring.md",sourceDirName:"EnvironmentManagement",slug:"/EnvironmentManagement/Environment Transferring",permalink:"/docs/EnvironmentManagement/Environment Transferring",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EnvironmentManagement/Environment Transferring.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Custom Environment Variables",permalink:"/docs/EnvironmentManagement/EnvironmentVariables/Custom Environment Variables"},next:{title:"Environment Aliases",permalink:"/docs/EnvironmentManagement/Environment Aliases"}},l={},m=[{value:"Reasons",id:"reasons",level:2},{value:"Conditions",id:"conditions",level:2},{value:"Result",id:"result",level:2},{value:"Transferring Steps",id:"transferring-steps",level:2}],c={toc:m},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Environment transferring allows you to move any environment to another PaaS account within the same platform (confirmation on both sides is required)."),(0,r.kt)("h2",{id:"reasons"},"Reasons"),(0,r.kt)("p",null,"The feature can be beneficial in many cases. For example, if you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"move all your projects to a new account, registered with a different email address"),(0,r.kt)("li",{parentName:"ul"},"transfer your work projects to another developer\u2019s account in case of an employee leaving the company"),(0,r.kt)("li",{parentName:"ul"},"move a production-ready environment to the main company account from the personal testing one"),(0,r.kt)("li",{parentName:"ul"},"restore environments at the old deactivated account without its reactivation")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Also, service hosting providers can offer a service of creating the required application for you. After configuration and testing, the production-ready environment will be transferred to your account.")),(0,r.kt)("h2",{id:"conditions"},"Conditions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Any environment")," (stopped/running) can be transferred ",(0,r.kt)("strong",{parentName:"p"},"from any account")," (including deactivated ones). However, a target account should meet the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - can be of any ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"type")," (beta, billing), ",(0,r.kt)("u",null,"except trial accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"status")," - should be ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"active")," (i.e. not suspended or deactivated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quotas")," - should have sufficient ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"quotas")," (limitations) to add the environment")),(0,r.kt)("admonition",{title:"Note",type:"danger"},(0,r.kt)("u",null,"On the platforms before the 5.9.3 version"),", environments can be transferred to the billing accounts only."),(0,r.kt)("p",null,"For example, some quotas checked during the transfer: ",(0,r.kt)("em",{parentName:"p"},"cloudlets per container, nodes per environment, environments on account, public IP / VPS / high-availability features")," (if they are enabled in the transferred environment), etc."),(0,r.kt)("p",null,"Also, in case of an error, you\u2019ll see the corresponding notification directly at the dashboard:"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(56208).Z,width:"300",height:"49"}))),(0,r.kt)("admonition",{title:"Note",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Environment transferring feature is currently not available between accounts at different PaaS installations, including main platform - sub-platform (reseller) interactions.")),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("p",null,"No changes are applied to the environment after transferring. The new owner receives it in the same state, with the same applications deployed, and with the same custom configurations. All the consequent charges for the environment will be applied to the new owner as well."),(0,r.kt)("p",null,"Also, the transferred environment becomes ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"unshared")," from all the users that had access to it."),(0,r.kt)("h2",{id:"transferring-steps"},"Transferring Steps"),(0,r.kt)("p",null,"Let\u2019s see the process of transferring an environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," button next to the required environment.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(57641).Z,width:"802",height:"202"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In the opened tab, navigate to the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Change Owner"))," section and enter the email address of a target user (potential new owner).")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(84839).Z,width:"899",height:"359"}))),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"Send Request")," button to proceed."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If the target account exists and meets all the requirements, you will see a notification that the request has been sent.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(60921).Z,width:"586",height:"170"}))),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can Cancel Request with the same-named button at any point (unless it is already confirmed)."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Locale Dropdown",src:n(1586).Z,width:"402",height:"110"})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The specified user will receive a request for an environment transfer with a confirmation URL via email.")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"While awaiting confirmation, the environment is marked with a custom icon dedicated icon ",(0,r.kt)("img",{alt:"Locale Dropdown",src:n(82802).Z,width:"19",height:"24"})," at the initial owner\u2019s dashboard.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(13773).Z,width:"600",height:"582"}))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"When the target user confirms the transfer request (clicks a link from the email), the environment is removed from the initial user\u2019s dashboard and appears for a new owner. Email notification about successful transfer will be sent to the initial owner.")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"During this step, the target account is validated (to have sufficient limits) for the last time. If it doesn\u2019t meet requirements, the transferring process will be stopped. The appropriate error message will be displayed at the target user dashboard and sent to the initial owner via email.")),(0,r.kt)("p",null,"It\u2019s that simple! Using this feature, you can easily move environments from one account to anothe"))}d.isMDXComponent=!0},56208:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},57641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-environment-settings-button-32b6ad16711787c45a8f30a27639af06.png"},84839:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-send-environment-change-owner-request-0ab719786c3cbaf9abd333262abdae45.png"},60921:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-transfer-request-sent-b0bc93558212cb9f51f6808c2e3e4ddd.png"},1586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-cancel-pending-transfer-request-fcc8552452673aa5104b48a751a61dae.png"},82802:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAIAAACX9VFYAAAAA3NCSVQICAjb4U/gAAABEUlEQVQ4jWNU1rVggAHpTBZ2GUYGHODnk/9Pp/+Bc5mQ5fBow5RlwqWOIKCSzp9P/uNRiibLiBxCaMDc1Ojk6XNE2UkSgNppbmpEvB6IQ1jQ+MgAq2vhdlDgWvaJ135Ka0I47E+vy8xJYmBgeJIyj6AgE5zDwMAAZxMjOCBpiP3pdTgHziZGEF8aImAnedqI1enrH2ZiakWmnWmZxVExKUxMCPUsDAwM4uJS4pKSL58/5xcQVNfQZmBguHnjqrqGtq9/OETRzRtXGBgYHJw8VdV1Viybc/P6FRLshABpadni0kZf/zAG5BRPDHj69DHcTqJixdc/zNc//MC+7SuWzfv37x9EkFg7Z03vPXP6GLIIAJxeaD9EuazWAAAAAElFTkSuQmCC"},13773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/07-environment-transfer-confirmation-email-da3b1f903ea08317b1da8705d44e9afc.png"}}]);
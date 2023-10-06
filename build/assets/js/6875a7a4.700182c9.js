"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[5330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return r?o.createElement(h,a(a({ref:t},d),{},{components:r})):o.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:8},a=void 0,p={unversionedId:"Container/Private Registry inside PaaS",id:"Container/Private Registry inside PaaS",title:"Private Registry inside PaaS",description:"<div style={{",source:"@site/docs/Container/Private Registry inside PaaS.md",sourceDirName:"Container",slug:"/Container/Private Registry inside PaaS",permalink:"/docs/Container/Private Registry inside PaaS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Container/Private Registry inside PaaS.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Custom Container SSH Access",permalink:"/docs/Container/Custom Container SSH Access"},next:{title:"Building Custom Container",permalink:"/docs/Container/Building Custom Container"}},s={},l=[{value:"Deploy Private Registry",id:"deploy-private-registry",level:2},{value:"Add Image to Registry",id:"add-image-to-registry",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{display:"flex",alignItems:"center",gap:"15px"}},(0,n.kt)("span",{style:{minWidth:"30%",maxWidth:"30%"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(6164).Z,width:"255",height:"149"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Docker solution")," is designed for comfortable application distribution using fast and lightweight templates, which allows running your projects almost everywhere. Thus, it is a perfect technology for for those developers and sysadmins, who look for speeding up the application delivery workflow and avoiding the constant adjustment issues.")),(0,n.kt)("p",null,"In order to handle your own Docker image, the appropriate registry is needed. The vast majority of dockerized solutions are stored at public registries so that anyone can use them. However, sometimes, it becomes necessary to hide your repository content from the rest of the world, e.g. in case it contains some proprietary code or confidential information. For this purpose, you can create your isolated private registry."),(0,n.kt)("p",null,"So, let\u2019s discover how to get it at the platform in a matter of minutes through following the next steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"deploying private registry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"adding image to registry"))),(0,n.kt)("p",null,"Subsequently, you\u2019ll be able to easily deploy the added image from your ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"private registry")," to the platform."),(0,n.kt)("h2",{id:"deploy-private-registry"},"Deploy Private Registry"),(0,n.kt)("p",null,"The base template for the private registry can be found among other open-source images at Docker Hub. Thus, you can comfortably host it inside any preferable ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"PaaS installation")," by creating the appropriate custom container:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your PaaS account and click the ",(0,n.kt)("strong",{parentName:"li"},"New Environment")," button at the top pane.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(623).Z,width:"976",height:"645"})),(0,n.kt)("p",null,"In the opened topology wizard, switch to the ",(0,n.kt)("strong",{parentName:"p"},"Docker")," tab and click ",(0,n.kt)("strong",{parentName:"p"},"Select Image"),"."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Here, use ",(0,n.kt)("strong",{parentName:"li"},"Search")," to find the registry image and add it.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(4501).Z,width:"976",height:"605"})),(0,n.kt)("admonition",{title:"Tip",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can select the required tag for your Docker image at the top of this frame or during the next step.")),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Next")," to proceed."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Provide all other ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"configurations")," for the environment (disk limit, name, ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"region"),", etc.) up to your needs.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(936).Z,width:"976",height:"605"})),(0,n.kt)("admonition",{title:"Note",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The instruction below is written for the ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"newest registry")," versions (i.e. starting with ",(0,n.kt)("strong",{parentName:"p"},"2.x")," tag and higher). For ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"deprecated registries"),", the configuration & interaction flow may vary in details.")),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Create")," and wait a minute for the environment to be configured."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Now, you need to configure an entry point for external access. We\u2019ll create one, leveraging the platform ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"endpoints")," feature, in order to expose the container\u2019s port 5000.")),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Alternatively, you can attach and work over public IP (a paid option) without any additional configurations.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(4889).Z,width:"996",height:"325"})),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Settings")," button next to your environment, navigate to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Endpoints"))," section, and Add a new endpoint. Within the opened frame, specify the desired parameters, stating the 5000 ",(0,n.kt)("strong",{parentName:"p"},"Private Port")," number within the same-named field."),(0,n.kt)("p",null,"As a result, you should receive a record similar to the one shown in the image above. Now, you can start filling your registry with Docker images."),(0,n.kt)("h2",{id:"add-image-to-registry"},"Add Image to Registry"),(0,n.kt)("p",null,"In order to show how a Docker template can be added to your registry, we\u2019ll take an existing image from the central Hub registry and push it to our private repository (however, you can use your own, i.e. locally composed, one)."),(0,n.kt)("p",null,"However, before that, you need to apply some slight adjustments to your local machine configs in order to be able to operate with it properly."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To start with, ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"install")," Docker CE (if you haven\u2019t done this previously) according to the linked guide from the official website.")),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Make sure the installed daemon version is 1.6.0 or higher (as registries usage is not compatible with its prior versions). The actual Docker daemon version can be checked by executing the following command at your terminal:"),(0,n.kt)("div",{style:{width:"100%",border:"1px solid #eee",borderRadius:"7px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",overflow:"hidden",margin:"0 0 1rem 0",background:"white"}},(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{width:"5%",background:"red",padding:"10px 20px 10px 20px",color:"white"}},"1"),(0,n.kt)("div",{style:{padding:"10px 20px 5px 20px"}},"docker -v"))),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Locale Dropdown",src:r(870).Z,width:"927",height:"35"}))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Next, choose any preferable image at Docker Hub, get it using the pull command and tag the received template so that it points to your private registry (or, in case of a local template usage, just skip the first command part).")),(0,n.kt)("div",{style:{width:"100%",border:"1px solid #eee",borderRadius:"7px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",overflow:"hidden",margin:"0 0 1rem 0",background:"white"}},(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{width:"5%",background:"red",padding:"10px 20px 10px 20px",color:"white"}},"1"),(0,n.kt)("div",{style:{padding:"10px 20px 5px 20px"}},"docker pull `","image","` && docker tag `","image","` `","entry_point","`/`","repository","`"))),(0,n.kt)("p",null,"where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"{"),"image",(0,n.kt)("inlineCode",{parentName:"strong"},"}"))," - a name of the Docker template you\u2019d like to pull and tag (e.g. jelastic/haproxy)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"{"),"entry_point",(0,n.kt)("inlineCode",{parentName:"strong"},"}"))," - private registry entry point, i.e. either endpoint (which was created at the end of the previous section) or external IP address. We\u2019ll use the first one:"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(163).Z,width:"789",height:"118"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"{"),"repository",(0,n.kt)("inlineCode",{parentName:"strong"},"}"))," - a name of a repository at your remote private registry (e.g. haproxy) for the image to be stored in")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(2376).Z,width:"927",height:"69"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Now, you should pay attention to one more detail - while using a remote private registry, it\u2019s required to secure interaction with it by means of TLS. For that, you need to place the corresponding ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"SSL certificate files")," (i.e. server key and domain certificate), issued by a known CA, to your registry.")),(0,n.kt)("admonition",{title:"Tip",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"self-signed")," certificate can be applied as well - in this case, you\u2019ll need to manually instruct your Docker daemon to ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"trust")," it.")),(0,n.kt)("p",null,"However, for testing purposes, you can apply a relatively simpler configuration, that allows bypassing this requirement - run your registry in an ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"insecure mode"),", so all the communication will be performed over the plain HTTP (which, although, is ",(0,n.kt)("u",null,"highly unrecommended")," in confines of production usage)."),(0,n.kt)("p",null,"For that, add the following line to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"/etc/default/docker"))," configuration file of your daemon (or the similar one according to your OS distribution), e.g. using the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"vim"))," editor with sudo permissions:"),(0,n.kt)("div",{style:{width:"100%",border:"1px solid #eee",borderRadius:"7px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",overflow:"hidden",margin:"0 0 1rem 0",background:"white"}},(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{width:"5%",background:"red",padding:"10px 20px 10px 20px",color:"white"}},"1"),(0,n.kt)("div",{style:{padding:"10px 20px 5px 20px"}},'DOCKER_OPTS="--insecure-registry `',"entry_point",'`"'))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(82).Z,width:"927",height:"285"})),(0,n.kt)("p",null,"Don\u2019t forget to save the changes."),(0,n.kt)("admonition",{title:"Note",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"In case of using self-signed certificates or insecure option, the same extra configurations will be required for being applied to every Docker daemon, which needs to access your registry.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Now, you can restart your local Docker daemon and push the prepared image to your remote repository:")),(0,n.kt)("div",{style:{width:"100%",border:"1px solid #eee",borderRadius:"7px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",overflow:"hidden",margin:"0 0 1rem 0",background:"white"}},(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{width:"5%",background:"red",padding:"10px 20px 10px 20px",color:"white"}},"1"),(0,n.kt)("div",{style:{padding:"10px 20px 5px 20px"}},"sudo service docker restart")),(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{width:"5%",background:"red",padding:"10px 20px 10px 20px",color:"white"}},"2"),(0,n.kt)("div",{style:{padding:"10px 20px 5px 20px"}},"docker push `","entry_point","`/`","repository","`"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:r(5837).Z,width:"927",height:"144"})),(0,n.kt)("p",null,"That\u2019s all! Shortly, your image will be uploaded to the registry (the exact time depends on image size and the internet connection speed) and will become available for use throughout the Internet."),(0,n.kt)("p",null,"As a result, you can easily ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"deploy it within the platform")," just in the similar way we\u2019ve done this at the beginning of the instruction."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In case you face any issues while deploying your own registry or adding an image to it, feel free to appeal for our technical experts' assistance at ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Stackoverflow"),".")))}m.isMDXComponent=!0},6164:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/01-docker-container-private-registry-87144836d3d75f872c2d31622b320793.png"},623:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/02-new-environment-docker-image-f5ef45bb0ba6c884ff88d82764f0adca.png"},4501:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/03-registry-docker-image-ce5061d41f63a25b0a0d06e0db84252d.png"},936:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/04-configure-environment-f459ce2e58d57b091856e310c6981c17.png"},4889:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/05-add-endpoint-19b17fb6954e5f641d9edafa644e0207.png"},870:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"},163:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/07-endpoint-url-7d4975e44adc010cc1ff43be59c3a68b.png"},2376:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/08-docker-pull-command-80eb91754dbbafc8b29e605be2228d70.png"},82:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/09-configure-insecure-registry-ed682942221f59c374b65c9507dc510f.png"},5837:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/10-docker-restart-push-commands-d819b3e058899625f9f56e62fb91b5f2.png"}}]);
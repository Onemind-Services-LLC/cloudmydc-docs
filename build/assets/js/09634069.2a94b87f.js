"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[1385],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,u=c["".concat(l,".").concat(m)]||c[m]||f[m]||i;return t?a.createElement(u,n(n({ref:r},p),{},{components:t})):a.createElement(u,n({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,n=new Array(i);n[0]=m;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[c]="string"==typeof e?e:o,n[1]=d;for(var s=2;s<i;s++)n[s]=t[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68786:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i=JSON.parse('{"pY":[{"field":"host","description":"Specifies the host and port number of the resource (server) being requested.","value":"{envName}.{platformDomain}","required":true},{"field":"x-forwarded-proto","description":"Identifies the protocol (HTTP or HTTPS) that connects to your proxy or load balancer.","value":"http/https","required":true},{"field":"x-forwarded-for","description":"Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or load balancer.","value":"xx.xx.xx.xx, xx.xx.xx.xx IP or IPs chain (if a request goes through multiple proxies)","required":true},{"field":"x-real-ip","description":"The ending IP address in the x-forwarded-for chain, i.e. the most recent proxy of a client connecting to a web server.","value":"xx.xx.xx.xx the right-most IP address in x-forwarded-for","required":false},{"field":"x-host","description":"The originating domain name of the server (for virtual hosting) and optionally the TCP port number.","value":"{envName}.{platformDomain}","required":false},{"field":"x-uri","description":"Identifies a name or a web resource.","value":"/","required":false},{"field":"customHeader","description":"Custom header with properties: header, desc, value, and isLink.","value":"{ \\"header\\": \\"\\", \\"desc\\": \\"\\", \\"value\\": \\"\\", \\"isLink\\": false }","required":false}],"qp":[{"Header":"Cross-Origin-Embedder-Policy","Description":"Allows the server to declare an embedded policy for the given document.","Value":"unsafe-none"},{"Header":"Cross-Origin-Opener-Policy","Description":"Prevents other domains from opening/controlling a window.","Value":"same-origin-allow-popups"},{"Header":"Cross-Origin-Resource-Policy","Description":"Prevents other domains from reading the response of the resources to which this header is applied.","Value":"same-origin"},{"Header":"Content-Security-Policy","Description":"Controls resources the user agent is allowed to load for a given page. Disabled by default.","Value":"frame-ancestors \'self\';frame-src \'self\';"},{"Header":"Expect-CT (only with SSL enabled)","Description":"Allows sites to enforce the Certificate Transparency requirements, which prevents the use of miss issued certificates for the site (i.e requires that any certificate for that site appears in public CT logs).","Value":"max-age=3600, enforce"},{"Header":"Permissions-Policy","Description":"Provides a mechanism to allow and deny the use of browser features in its frames and embedded iframes.","Value":"payment=(self) geolocation=(self)"},{"Header":"Strict-Transport-Security (only with SSL enabled)","Description":"Forces communication using HTTPS instead of HTTP.","Value":"max-age=5; includeSubDomains"},{"Header":"X-Content-Type-Options","Description":"Disables MIME sniffing and forces the browser to use the type given in Content-Type.","Value":"nosniff"},{"Header":"X-Frame-Options","Description":"Indicates whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed>, or <object>.","Value":"SAMEORIGIN"},{"Header":"X-Permitted-Cross-Domain-Policies","Description":"Specifies if a cross-domain policy file (crossdomain.xml) is allowed. The file may define a policy to permit clients to handle data across domains that would otherwise be restricted due to the Same-Origin Policy.","Value":"none"},{"Header":"Referrer-Policy","Description":"Controls how much referrer information (sent via the Referer header) should be included with requests.","Value":"strict-origin-when-cross-origin (default)"},{"Header":"X-XSS-Protection","Description":"Enables cross-site scripting filtering.","Value":"1; mode=block"}]}'),n={sidebar_position:5},d=void 0,l={unversionedId:"EnvironmentManagement/HTTP Headers",id:"EnvironmentManagement/HTTP Headers",title:"HTTP Headers",description:"HTTP headers are the core part of the HTTP requests and responses. They pass additional information with an HTTP request or response (e.g. the client browser, requested page, server, and more).",source:"@site/docs/EnvironmentManagement/HTTP Headers.md",sourceDirName:"EnvironmentManagement",slug:"/EnvironmentManagement/HTTP Headers",permalink:"/docs/EnvironmentManagement/HTTP Headers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EnvironmentManagement/HTTP Headers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cloning Environment",permalink:"/docs/EnvironmentManagement/Cloning Environment"},next:{title:"Environment Variables",permalink:"/docs/category/environment-variables"}},s={},p=[{value:"Security Headers",id:"security-headers",level:2}],c={toc:p},f="wrapper";function m(e){let{components:r,...n}=e;return(0,o.kt)(f,(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"HTTP headers"))," are the core part of the HTTP requests and responses. They pass additional information with an HTTP request or response (e.g. the client browser, requested page, server, and more)."),(0,o.kt)("p",null,"The main headers used with environments for deploying your applications:"),(0,o.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,o.kt)("div",null,(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"1fr 2fr 1fr",overflow:"hidden"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"Header"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Value")),i.pY.map(((e,r)=>(0,o.kt)("div",{key:r,style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.required?(0,o.kt)("a",{href:"#"},e.field):e.field),(0,o.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},e.description),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.value)))))),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Additional security headers are used for some specific stacks.")),(0,o.kt)("p",null,"The list of supported HTTP headers can vary based on the topology of the connected environment. Due to external access specifics (via ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"resolver/SLB")," or ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"public IP"),"), there are four possible scenarios when working with the platform:"),(0,o.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,o.kt)("div",null,(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"1fr 2fr 1fr",overflow:"hidden"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"Header"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Value")),(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},"Single application server"),(0,o.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:t(19034).Z,width:"590",height:"204"}))),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},"host x-forwarded-proto x-real-ip x-forwarded-for x-host")),(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},"Load balancer with application servers"),(0,o.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:t(31563).Z,width:"590",height:"244"}))),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},"host x-real-ip x-host x-forwarded-for x-uri x-forwarded-proto")),(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},"Application server with public IP"),(0,o.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:t(60807).Z,width:"590",height:"260"}))),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},"host")),(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},"Load balancer with public IP and application servers"),(0,o.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:t(91224).Z,width:"590",height:"244"}))),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},"host x-real-ip x-host x-forwarded-for x-uri x-forwarded-proto")))),(0,o.kt)("h2",{id:"security-headers"},"Security Headers"),(0,o.kt)("p",null,"You can easily manage security headers by managing the appropriate configuration file. The path is different for different servers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Apache (PHP, Ruby, Python), MySQL, MariaDB"),": ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"/etc/httpd/conf.d/10-shared_headers.conf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"NGINX (PHP, Ruby) and LEMP"),": ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"/etc/nginx/conf.d/headers/10-shared_headers.conf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"LiteSpeed, LLSMP"),": ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"/var/www/conf/vhconf.xml"))," (adjust via the admin panel only)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Tomcat, TomEE"),": ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"/opt/tomcat/conf/web.xml")))),(0,o.kt)("admonition",{title:"Notes",type:"danger"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The headers processing for the Node.js, Golang, .NET, JavaEngine, and Springboot servers must be implemented manually in the user application."),(0,o.kt)("li",{parentName:"ul"},"For the Tomcat and TomEE stacks, only the following headers are enabled by default: ",(0,o.kt)("strong",{parentName:"li"},"X-Content-Type-Options, X-Frame-Options, X-XSS-Protection"),", and ",(0,o.kt)("strong",{parentName:"li"},"Strict-Transport-Security")," (for SSL). Other headers can be enabled manually, if needed."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:t(67730).Z,width:"825",height:"351"})),(0,o.kt)("p",null,"Don\u2019t forget to ",(0,o.kt)("u",null,"restart")," your server to apply any changes made to the configuration file."),(0,o.kt)("p",null,"The following additional HTTP headers are used on the above-listed stacks by default:"),(0,o.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,o.kt)("div",null,(0,o.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"1fr 2fr 1fr",overflow:"hidden"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"Header"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Value")),i.qp.map(((e,r)=>(0,o.kt)("div",{key:r,style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,o.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},e.Header),(0,o.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},e.Description),(0,o.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Value)))))))}m.isMDXComponent=!0},19034:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/01-slb-to-app-server-e50819e9b5cbf8e407efe91fa41caee1.png"},31563:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/02-slb-to-load-balancer-5bab1912e54b0086c35817f30d625e91.png"},60807:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/03-public-ip-to-app-server-69463bac83a71f51cdf6f7bfaf5cd0d5.png"},91224:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/04-public-ip-to-load-balancer-802e0766d3dd856a1112c08f0ea15187.png"},67730:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/05-security-headers-configuration-file-738ce07140aba02f274e753fdbfb8255.png"}}]);
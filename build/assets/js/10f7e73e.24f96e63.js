"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[2226],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(i),h=a,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return i?r.createElement(f,n(n({ref:t},c),{},{components:i})):r.createElement(f,n({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,n[1]=s;for(var d=2;d<o;d++)n[d]=i[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},17119:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(87462),a=(i(67294),i(3905));const o=JSON.parse('{"p":[{"JE":"JE-65381","CompatibleFrom":"Any","Desc":"Any The ${globals.password} variable value is missing on the Redis Cluster after cloning"},{"JE":"JE-66060","CompatibleFrom":"Any","Desc":"Any PostgreSQL users created via phpPgAdmin cannot access the admin panel"},{"JE":"JE-66252","CompatibleFrom":"Any","Desc":"Any Login to WebAdmin Console fails for the LiteSpeed/LLSMP stacks after redeployment to the lower major version"},{"JE":"JE-66503","CompatibleFrom":"Any","Desc":"Any The Multi-Regional Redis Cluster package installation fails if the maximum allowed length is used for the provided domain name"},{"JE":"JE-64453","CompatibleFrom":"3.3","Desc":"An error occurs when installing the \'test\' version of the Plesk package from the platform Marketplace"},{"JE":"JE-66406","CompatibleFrom":"3.3","Desc":"The Django application is not working after installation from the platform Marketplace"},{"JE":"JE-66259","CompatibleFrom":"5.0.5","Desc":"An error occurs when installing the Eclipse Vert.x Thin Jar Builder package from the platform Marketplace"},{"JE":"JE-66279","CompatibleFrom":"5.0.5","Desc":"An error occurs when installing the Nexus package from the platform Marketplace"},{"JE":"JE-66513","CompatibleFrom":"5.0.5","Desc":"An error occurs when installing the Open Liberty application in the Kubernetes cluster"},{"JE":"JE-66541","CompatibleFrom":"5.0.5","Desc":"The custom withExtIp setting is not applied when installing the Let\u2019s Encrypt add-on"},{"JE":"JE-66590","CompatibleFrom":"5.0.5","Desc":"An error occurs when installing the Spring Boot Thin Jar Builder package from the platform Marketplace"},{"JE":"JE-66799","CompatibleFrom":"5.0.5","Desc":"An error occurs when installing the Oddo-Ce package from the platform Marketplace"}],"y":[{"JE":"JE-21315","AffectedVersions":"3.2","Desc":"Incorrect environment name in the successful migration pop-up if the name contains special characters"},{"JE":"JE-33337","AffectedVersions":"5.0.6","Desc":"The upload limit warning message is absent if the uploaded file size is too large"},{"JE":"JE-47088","AffectedVersions":"-","Desc":"An error occurs when logged in to the dashboard with the Extended token"},{"JE":"JE-47315","AffectedVersions":"-","Desc":"The \u201ctext input\u201d input method does not work in Web SSH client"},{"JE":"JE-49993","AffectedVersions":"5.7.7","Desc":"Cannot reconnect to the Web SSH client after a container restart"},{"JE":"JE-51930","AffectedVersions":"-","Desc":"The access denied error occurs when calling billing API methods using a token"},{"JE":"JE-52137","AffectedVersions":"5.7","Desc":"Disconnected from Web SSH if switched to a different tab during the connection"},{"JE":"JE-53323","AffectedVersions":"-","Desc":"The bind SSL/external domain actions are absent in the Tasks manager when working with the Let\u2019s Encrypt add-on"},{"JE":"JE-54683","AffectedVersions":"-","Desc":"Incorrect description for the EditNodeGroup method in the API documentation"},{"JE":"JE-57190","AffectedVersions":"-","Desc":"Text from Web SSH that does not fit the screen width is copied with unnecessary line breaks"},{"JE":"JE-59606","AffectedVersions":"-","Desc":"An error occurs when opening the topology wizard"},{"JE":"JE-59773","AffectedVersions":"-","Desc":"The MIME type of the uploaded archives is identified incorrectly if its name contains spaces"},{"JE":"JE-63283","AffectedVersions":"-","Desc":"The region icon tooltip is formatted incorrectly in the search menu"},{"JE":"JE-63869","AffectedVersions":"-","Desc":"An error occurs when deploying a GitHub project with the \u201c/\u201d symbol in the branch name"},{"JE":"JE-64138","AffectedVersions":"-","Desc":"An error occurs when uploading a file with the overwrite option via the file manager"},{"JE":"JE-65380","AffectedVersions":"8.2","Desc":"An error occurs when opening the Additionally menu for nodes with the admin panel"},{"JE":"JE-65402","AffectedVersions":"any","Desc":"Inconsistent firewall rules behavior on the Memcached node when working with containers with public IP"},{"JE":"JE-65462","AffectedVersions":"8.1","Desc":"The search results are not displayed after long usage of the dashboard on accounts with many environments"},{"JE":"JE-65786","AffectedVersions":"-","Desc":"The vertical scroll should appear for the public keys list if it does not fit the window"},{"JE":"JE-65847","AffectedVersions":"8.1","Desc":"An error occurs when updating a project with the \u201cAuto resolve conflict\u201d option after the amended commit to the repo"},{"JE":"JE-65875","AffectedVersions":"-","Desc":"The add-on installation window is not centered"},{"JE":"JE-65917","AffectedVersions":"-","Desc":"Incorrect spelling in the error message"},{"JE":"JE-65962","AffectedVersions":"-","Desc":"NFS storage is not stable with the Kubernetes cluster"},{"JE":"JE-65988","AffectedVersions":"-","Desc":"Incorrect event names in the SendEvent API method description"},{"JE":"JE-66072","AffectedVersions":"-","Desc":"An error occurs when working with Object Browser on the Minio cluster"},{"JE":"JE-66100","AffectedVersions":"-","Desc":"API requests return an empty response instead of an error if the platformUrl parameter has a dot at the end"},{"JE":"JE-66137","AffectedVersions":"-","Desc":"An incorrect host header is set during the external domain swap"},{"JE":"JE-66300","AffectedVersions":"-","Desc":"The primary IP is changed when adding a second external IP address"},{"JE":"JE-66413","AffectedVersions":"-","Desc":"The \u201cGot signal 13\u201d error occurs when adding a new node to the environment"},{"JE":"JE-66421","AffectedVersions":"-","Desc":"An error occurs while getting the state of a custom Docker container during environment creation"},{"JE":"JE-66458","AffectedVersions":"-","Desc":"The package installation error occurs when redeploying containers based on the Debian 11 OS"},{"JE":"JE-66758","AffectedVersions":"-","Desc":"The bindSslCert API method returns \u201cresult: 0\u201d instead of the error when the incorrect extDomains parameter is specified"}]}'),n={sidebar_position:2},s=void 0,l={unversionedId:"PlatformOverview/Release Notes/Release Notes 8.3",id:"PlatformOverview/Release Notes/Release Notes 8.3",title:"Release Notes 8.3",description:"Virtuozzo Application Platform 8.3",source:"@site/docs/PlatformOverview/Release Notes/Release Notes 8.3.md",sourceDirName:"PlatformOverview/Release Notes",slug:"/PlatformOverview/Release Notes/Release Notes 8.3",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 8.3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PlatformOverview/Release Notes/Release Notes 8.3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Release Notes 8.3.2",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 8.3.2"},next:{title:"Release Notes 8.2.5",permalink:"/docs/PlatformOverview/Release Notes/Release Notes 8.2.5"}},d={},c=[{value:"Virtuozzo Application Platform 8.3",id:"virtuozzo-application-platform-83",level:2},{value:"AlmaLinux 9 Base OS Image",id:"almalinux-9-base-os-image",level:2},{value:"Subscription Improvements",id:"subscription-improvements",level:2},{value:"Action Initiator for Emails",id:"action-initiator-for-emails",level:2},{value:"API Changes",id:"api-changes",level:2},{value:"Fixes Compatible with Prior Versions",id:"fixes-compatible-with-prior-versions",level:2},{value:"Software Stack Versions",id:"software-stack-versions",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"virtuozzo-application-platform-83"},"Virtuozzo Application Platform 8.3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This document is preliminary and subject to change.")),(0,a.kt)("p",null,"In this document, you will find all of the new features, enhancements and visible changes included to the ",(0,a.kt)("strong",{parentName:"p"},"Virtuozzo PaaS 8.3")," release."),(0,a.kt)("hr",null),(0,a.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,a.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(1904).Z,width:"42",height:"30"})),(0,a.kt)("p",null,"New")),(0,a.kt)("div",null,(0,a.kt)("div",{style:{background:"#e4ffee",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Action Initiator for Emails"),(0,a.kt)("p",null,"Extended the collaboration email notifications with the \u201caction initiator\u201d data to help with account activity tracking"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))),(0,a.kt)("div",{style:{background:"#e4ffee",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"API Changes"),(0,a.kt)("p",null,"Listed all the changes to the public platform API in the current release"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))),(0,a.kt)("div",{style:{background:"#e4ffee",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Software Stack Versions"),(0,a.kt)("p",null,"Actualized list of supported OS templates and software stack versions"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))))),(0,a.kt)("hr",null),(0,a.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,a.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(41766).Z,width:"42",height:"30"})),(0,a.kt)("p",null,"Changed")),(0,a.kt)("div",null,(0,a.kt)("div",{style:{background:"#def6ff",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Action Initiator for Emails"),(0,a.kt)("p",null,"Extended the collaboration email notifications with the \u201caction initiator\u201d data to help with account activity tracking"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))),(0,a.kt)("div",{style:{background:"#def6ff",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"API Changes"),(0,a.kt)("p",null,"Listed all the changes to the public platform API in the current release"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))),(0,a.kt)("div",{style:{background:"#def6ff",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Software Stack Versions"),(0,a.kt)("p",null,"Actualized list of supported OS templates and software stack versions"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))))),(0,a.kt)("hr",null),(0,a.kt)("div",{style:{display:"flex",padding:"10px 0 10px 0"}},(0,a.kt)("div",{style:{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"flex-start"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(12450).Z,width:"42",height:"30"})),(0,a.kt)("p",null,"Fixed")),(0,a.kt)("div",null,(0,a.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Fixes Compatible with Prior Versions"),(0,a.kt)("p",null,"Bug fixes implemented in the current release and integrated into the previous platform versions through the appropriate patches"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))),(0,a.kt)("div",{style:{background:"#fef6e6",padding:"20px",margin:"10px 0"}},(0,a.kt)("h3",{style:{fontSize:"23px",fontWeight:"500"}},"Bug Fixes"),(0,a.kt)("p",null,"List of fixes applied to the platform starting from the current release"),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse"}},(0,a.kt)("a",{href:"/"},"Learn More >>"))))),(0,a.kt)("h2",{id:"almalinux-9-base-os-image"},"AlmaLinux 9 Base OS Image"),(0,a.kt)("p",null,"Starting with the current 8.3 release, Virtuozzo Application Platform starts transitioning to the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"software stacks")," based on the new ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"AlmaLinux 9"))," images (from the previously used CentOS 7). Such a change ensures support of all the up-to-date functionality, modern security standards, and compatibility with all the latest software solutions."),(0,a.kt)("p",null,"The transition process will be gradual and non-intrusive. It follows the next points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("u",null,"AlmaLinux 9 images are supported starting with the 8.3 platform version")," and won\u2019t be available on the preceding versions."),(0,a.kt)("li",{parentName:"ul"},"All the newly released stack versions will be based on AlmaLinux 9, so the whole pool of images will be seamlessly replaced with the new OS over time."),(0,a.kt)("li",{parentName:"ul"},"Updates for the CentOS 7 based images will still be provided in case of critical patches and security issues."),(0,a.kt)("li",{parentName:"ul"},"In the dashboard, tags based on the AlmaLinux 9 will be explicitly highlighted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Redeployment")," from the CentOS 7 to the AlmaLinux 9 version of the stack can be performed without any setbacks. ",(0,a.kt)("u",null,"However, downgrading back to CentOS 7 is not supported.")),(0,a.kt)("li",{parentName:"ul"},"The up-to-date list of the ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"software stacks")," based on the AlmaLinux 9 image can be checked in the linked document.")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(36852).Z,width:"978",height:"607"}))),(0,a.kt)("p",null,"Alongside the AlmaLinux 9 image implementation, some new functionality is introduced, including updated key generation (",(0,a.kt)("em",{parentName:"p"},"rsa-sha2-256")," and ",(0,a.kt)("em",{parentName:"p"},"rsa-sha2-512")," signatures support), updated Guacamole (",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Web SSH"),") client, and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"nftables")))," netfilter (replaces ",(0,a.kt)("em",{parentName:"p"},"iptables"),"). The ",(0,a.kt)("em",{parentName:"p"},"nftables")," solution is a new recommended choice for firewall rules management. It offers unified and consistent syntax (contrary to the ",(0,a.kt)("em",{parentName:"p"},"xtables")," utilities), high performance through maps and concatenations, and increased security as rules get translated into bytecode. At the same time, all the dashboard UI and API calls remain the same as before so that the management process is unchanged."),(0,a.kt)("p",null,"Other stack-related changes include an updated list of ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"supported OS distributions"),", including ",(0,a.kt)("strong",{parentName:"p"},"CentOS Stream 9")," addition and ",(0,a.kt)("strong",{parentName:"p"},"Debian 9")," deprecation."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,a.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,a.kt)("h2",{id:"subscription-improvements"},"Subscription Improvements"),(0,a.kt)("p",null,"The recently implemented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Subscription-Based Product"))," solution was further improved in the current release to ensure the best experience for the customers. All the new changes are seamlessly integrated into the dedicated dashboard\u2019s ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Subscription"))," section."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(75857).Z,width:"1262",height:"364"}))),(0,a.kt)("p",null,"One of the most requested features is the possibility to update the number of installations for the existing subscriptions. Starting with the 8.3 platform upgrade, the appropriate functionality was fully implemented. The update window is available using the new ",(0,a.kt)("strong",{parentName:"p"},"Edit Subscription")," option. Here, user can increase and decrease Quantity based on their need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upon upgrade, an additional invoice will be automatically generated by the platform."),(0,a.kt)("li",{parentName:"ul"},"In case of a downgrade (no less than the existing number of instances), the account\u2019s balance will be recharged according to the subscription price and remaining billing period.")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(39360).Z,width:"448",height:"518"}))),(0,a.kt)("p",null,"Another new feature is the ability to switch subscription plan within the same product. This solution availability depends on the hosting provider. If available, you\u2019ll see the corresponding ",(0,a.kt)("strong",{parentName:"p"},"Switch Subscription")," option for the required installation."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(75622).Z,width:"452",height:"267"}))),(0,a.kt)("p",null,"Lastly the ability to enable/disable ",(0,a.kt)("strong",{parentName:"p"},"Auto Pay")," option was implemented, allowing to switch between automatic (with default payment method) and manual payment for the subscriptions."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:i(80504).Z,width:"402",height:"124"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,a.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,a.kt)("h2",{id:"action-initiator-for-emails"},"Action Initiator for Emails"),(0,a.kt)("p",null,"Virtuozzo Application Platform provides a powerful ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"collaboration functionality")," that allows multiple users to work on the same account. However, with high participants number and active development, it may become difficult to track all the actions performed by individuals and create confusion on whether the account is compromised. In order to help the tracking efforts, the email notifications were extended with the \u201caction initiator\u201d data. Depending on the operation, it can be the email address of the collaboration member or a reference to the internal trigger (e.g., ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"automatic horizontal scaling"),")."),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,a.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,a.kt)("h2",{id:"api-changes"},"API Changes"),(0,a.kt)("p",null,"Below, you can find a list of all changes to the public API in the 8.3 platform version (compared to the preceding ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"8.2.2")," ones):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added new ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"SetAutopay")),", ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"MoveProduct")),", ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"UpdateSubscription")),", ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"UpcomingInvoice")),", and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"DiscardUpdateSubscription"))," API methods due to ",(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"subscription")," changes."),(0,a.kt)("li",{parentName:"ul"},"Added a new ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"invalidateSessions"))," parameter to all the password reset methods, which allows terminating all active user sessions (except the current one).")),(0,a.kt)("p",null,"The API documentation\u2019s complete review has started in order to provide a comprehensive description of all the methods and their parameters. Currently, most of the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"billing"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"environment"))," services have been updated. You can expect complete coverage over the course of several future releases."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,a.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,a.kt)("h2",{id:"fixes-compatible-with-prior-versions"},"Fixes Compatible with Prior Versions"),(0,a.kt)("p",null,"Below, you can find the fixes that were implemented in the Virtuozzo Application Platform 8.3 release and also integrated into previous platform versions by means of the appropriate patches."),(0,a.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,a.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"Virtuozzo Application Platform 8.3"),(0,a.kt)("div",null,(0,a.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Compatible from"),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),o.p.map(((e,t)=>(0,a.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,a.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},(0,a.kt)("a",{href:"/"},e.JE)),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.CompatibleFrom),(0,a.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,a.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,a.kt)("h2",{id:"software-stack-versions"},"Software Stack Versions"),(0,a.kt)("p",null,"The software stack provisioning process is independent of the platform release, which allows new software solutions to be delivered as soon as they are ready. However, due to the necessity to adapt and test new stack versions, there is a small delay between software release by its respective upstream maintainer and integration into Virtuozzo Application Platform."),(0,a.kt)("p",null,"The most accurate and up-to-date list of the certified ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"software stack versions")," can be found on the dedicated documentation page."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"More info")),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 0"}},(0,a.kt)("a",{href:"/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83"},"Back to the top")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("p",null,"In the table below, you can see the list of bug fixes applied to the platform starting from Virtuozzo Application Platform 8.3 release:"),(0,a.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,a.kt)("div",{style:{width:"100%",padding:"20px",height:"70px",border:"1px solid var(--ifm-toc-border-color)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"400",fontSize:"25px",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t3)"}},"Virtuozzo Application Platform 8.3"),(0,a.kt)("div",null,(0,a.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"0.8fr 1fr 2fr",overflow:"hidden"}},(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"#"),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Affected Versions"),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Description")),o.y.map(((e,t)=>(0,a.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"0.8fr 1fr 2fr",fontWeight:"400"}},(0,a.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},(0,a.kt)("a",{href:"/"},e.JE)),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all"}},e.AffectedVersions),(0,a.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.Desc)))))))}h.isMDXComponent=!0},12450:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEM0FFMDgwQzJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEM0FFMDgwRDJDNDUxMUU4Qjk2NUQ1RjM3QjZEQTIwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzQUUwODBBMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzQUUwODBCMkM0NTExRThCOTY1RDVGMzdCNkRBMjBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p2cxQAAAAm5JREFUeNrMmN1LFFEYxmeHTfdChWRdM+xDEiG7XJQtRCKFKNDdINTCBS+68E5CUBDxpiDqIugP6MaPShHDuihCbyoUb4K09NpsQfy4KQ1M3fV5l3dgmMbdmXPObPvAD+brnHnmPfOe8874Uq98mgJRJzWgBbSBi6AI7IAZMAE+gO1/WrYnHd3Ar8BkA5gE5TbnyGyMIU2De2DL7U10CYMF4DX4dIxJO0XBJuhwezPRiAbAVx5uEb0E1eChlxGlNp8lTBp6AOJeGu0DYU2NhrVx/ZSjbM2S9XSyktkHe2BRU6tZ0Jwt+zO9oxHO0pDmrZoARXVdZOg7wXwOTBqKibyjFWBEwc0PwDL45eDauIjRQUmDf8BVUAgugUYHba4gqcqAq2Tal1yxKPESvE1Gv7louwG607nRnkxmiqhP0uRjk8kClyY1zokpsILohjIZTfFTiWrUtP0XzFleiTN8PJtq0g88rp8/zuhpcChhdNeyfwe8ZZMXwE+uqJwu70swG7AajfCwVUgYDVj2f4BWUMzz5AlQ6qI/qr6em42e5XlTRjfT75a9jMS4LdDvXUQ1qHMCfVRg8l2Wa+rAC8H+W/3cwTkPTF4Dv8FJ0MPXiarTzxW3apODXMapUpiG/pbE+mxnckixSVIJRTQouExO2xx/Cu57ULQkKKJrAg39nIS5MEmaIqPvBT/senlepOLjmYcmSWNUlEQUzKFeij6tyymiC4LDnytFqZLSuRC5kacmnxiFjbGEfuefA/mkR6Df+OgzFyVvQC1Y/c8Gqcy8DAbMX6bWIpmKiipQD7rAdd73Wqv8e2gMfLFW96QjAQYAvVZ8VxrR76cAAAAASUVORK5CYII="},41766:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzNGRThBNjJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzNGRThBNzJDNDUxMUU4QTcyREYwOUUwQ0JFM0M4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDM0ZFOEE0MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDM0ZFOEE1MkM0NTExRThBNzJERjA5RTBDQkUzQzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c2zvogAAAidJREFUeNrUmM0rBVEYxueOmywuWfj+VlIkFje6ZEeJ8rURRVnIn0DJjlL+BxuSkogiiQ0iCwpJ3boLX/nOggXJx/PqvTVNXWbeOXO7nvot7rlnznnmzHnnfc94tOUPTYE8oBg0gw5QAnzgBayDWbAGHs0XfjXpFidwbrQWzIF0C30XQR94sGtUd2AwHiyALYsmSa3gHnTancwrNJkADvlxSzQDisCo1QskK0rXbDswGdYI6HHT6ADwa2o06Vn5zFARTBTNOcw7eANHmlptgPq/guq3PRrgKE3T3FUdoFW9kTz6brAbBZNhtUn2aCaY0qKrHonRYS36qkFQpQJbRvsdTBgCWUzI5rV34BZm24H+l1GPgyQQBGXgminjNjuimJgHpzCb9pvRL74zickK8Gpoe+W2oGA8SiZXMFsQyWg2m7WjfVBuMmk0W859JOn9GGYTzEbpvXlpo8AIm6zmRBBJb9xHYpZKxQljZsoDZ4KBErnmtDrps3D/p+ocQJvCAXwu9TWrhYxWgnzhABTdT+A8Qo3Zyf89cV+pur1ccTtRMuOLsIq5ChKCn1a0XYt9JZHRlH9g9IqMXigaLM5im0TzZHRV0WBdpveyzm0qNE3v0QDXnrEqOlqn013vKXz8bqgVx5Sfcopye2OMmhwHO8Zcf8IfB2JJY2AwfOgzbv4lUCrM+Sp1x0XMkPFkai6ST0EhqAK9oIF/u60z/jw0DQ5oT5o7fAswAKxgepYzbixFAAAAAElFTkSuQmCC"},36852:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/01-almalinux-image-tags-0d7de4ab0e2749f05354f6fd3e3b6519.png"},75857:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/02-subscriptions-new-features-928513437cf7a61edc6d5ba69603b346.png"},39360:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/03-edit-subscription-3ceae173154b6bc9f9254ad3864a83c5.png"},75622:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/04-switch-subscription-4c738e2a77773ecea82cdb5f4ff4f30d.png"},80504:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-disabling-auto-pay-bcdf6f2b0c99354055f789308749e726.png"},1904:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOEQ2OURDQjJDNDUxMUU4OEFDM0Q0OUYzRjVDQTUwMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOEQ2OURDQzJDNDUxMUU4OEFDM0Q0OUYzRjVDQTUwMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4RDY5REM5MkM0NTExRTg4QUMzRDQ5RjNGNUNBNTAyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM4RDY5RENBMkM0NTExRTg4QUMzRDQ5RjNGNUNBNTAyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NUw/0AAAAnNJREFUeNrMmE1oE0EYhjdLIz1IBDG1JdRqEdGCYPojqQgeWjA5xDYHpWBKPYhQaE+lLZTeTBHEq/bkpTUIIil6Mf6c0lLxUigShd6CBrTWHtQWD9L0/ei3MAzJmp2dDXnhgQy7M/Nmfr75Zn3Gq0eGBvnAGRAHN8A5cBj8Ae/AM/AG/JQrlqKjVXXQoMHkZfAcHC/zjMwOMqQX4DbYctqJ6cLgIbAEliuYLKcB8AMMOe1MdUQbwTpPt4qegtMg5eWIUp0VFyYt3QXDXhqdAl2GHi34svPNOozSbm4FvaAbnAf3DL16ArOu1miEd2mT4a36AI3qN5URTYL3NTBpaVBl6lvAolFbDasYnTVqr0tYp0G7tVrO6B2PzPwFWZvnm+A7zCaA+T+jPk3HqqwtXu8xGj2b9+idDPgMs012Rkv8z3RqF5wFv7mcr6IOHSZFmD1ZyWiIzerSPzYpZk3jDo73jzDbKBuluPnVQYJRjcLgi7S7Uw7qU/b1+GBNHuSjJ0BB85RfATmh3A/eKrYVNHkD5RQqU6d+cARsSM+uS22GXZgkXSOjPaBNofJ9XoO/QKewCcc4kbbUDtZczk7S5IxbRSPC7x2+ftBh8VAKN3kNy6iLjCZU/yWYEMrbYE4oBygecpLtVgEyesxFAw/AzQo3gE/gqKaNWTSl8KGUT3KqZsnPmVdIYwTJkNHXGhqiK/Ekx0naOBc0h7o0xdEIj0C9atuKox80TL+Xipeio3smn+2xOjVJsXpVPOvz/HGgnkSXyGnrk4+YlLwEHR6c+U61ybfeGfG7lJwkU4A+BS6CW+Aql71WgT8PpSlq0JqUX9gXYACycXnWqP0g9wAAAABJRU5ErkJggg=="}}]);
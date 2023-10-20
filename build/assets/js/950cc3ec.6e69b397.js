"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[7770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function v(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:1},i=void 0,l={unversionedId:"Elastic VPS/Linux VPS Use Cases/Run Java Console Application",id:"Elastic VPS/Linux VPS Use Cases/Run Java Console Application",title:"Run Java Console Application",description:"Java Console Application with CentOS VPS",source:"@site/docs/Elastic VPS/Linux VPS Use Cases/Run Java Console Application.md",sourceDirName:"Elastic VPS/Linux VPS Use Cases",slug:"/Elastic VPS/Linux VPS Use Cases/Run Java Console Application",permalink:"/docs/Elastic VPS/Linux VPS Use Cases/Run Java Console Application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Elastic VPS/Linux VPS Use Cases/Run Java Console Application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linux VPS Use Cases",permalink:"/docs/category/linux-vps-use-cases"},next:{title:"Setting Mail Server Inside VPS",permalink:"/docs/Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS"}},s={},p=[{value:"Java Console Application with CentOS VPS",id:"java-console-application-with-centos-vps",level:2},{value:"Install Java to VPS",id:"install-java-to-vps",level:2},{value:"Upload Application to VPS",id:"upload-application-to-vps",level:2},{value:"A\u0441\u0441ess Application via SSH",id:"a\u0441\u0441ess-application-via-ssh",level:2},{value:"Check Application Operability",id:"check-application-operability",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"java-console-application-with-centos-vps"},"Java Console Application with CentOS VPS"),(0,o.kt)("p",null,"In the current tutorial we\u2019ll overview how to install a sample of Java console application to your ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"\u0421entOS")," virtual private server and check its operability. For that, you\u2019ll need to execute the following operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"install Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"upload application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"access application via SSH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"check app operability"))),(0,o.kt)("h2",{id:"install-java-to-vps"},"Install Java to VPS"),(0,o.kt)("p",null,"In order to install Java to your VPS container, carry out the next steps, while being connected over SSH protocol by means of ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"SSH Gate")," or ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"public IP"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter the following command to initiate Java package download.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget {utility_address}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"{utility_address}"))," is a link to the required Java download source."),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The appropriate AuthParam parameter should be specified in the URL, which indicates that you\u2019ve accepted the Oracle licence agreement and can freely download software.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(85122).Z,width:"797",height:"229"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Next, execute the command below to unpack the previously downloaded Java ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"rpm"))," package.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -ivh {java_rpm_package}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"{java_rpm_package}"))," is downloaded Java package with AuthParam parameter indicated."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(97408).Z,width:"797",height:"196"}))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"And now let\u2019s check, whether everything is properly set up by inquiring the installed Java version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(7958).Z,width:"797",height:"82"}))),(0,o.kt)("p",null,"Great! Java is successfully installed, so let\u2019s move further to the application uploading."),(0,o.kt)("h2",{id:"upload-application-to-vps"},"Upload Application to VPS"),(0,o.kt)("p",null,"Prepare your Java application to be uploaded to VPS container. You may use the following example, that will listen the specified port for connections:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'import java.io.IOException;\nimport java.io.ObjectOutputStream;\nimport java.net.InetAddress;\nimport java.net.ServerSocket;\nimport java.net.Socket;\nimport java.util.Date;\nimport java.util.logging.Level;\nimport java.util.logging.Logger;\n\npublic class VdsSocket {\n\n   public static void main(String[] args) {\n      try {\n           int port = 7777;\n           InetAddress thisIp = null;\n           ServerSocket ss = new ServerSocket(port);\n\n           System.out.println  ("**********************************************************************");\n           System.out.println("Socket Listener listens port: " + port);\n           System.out.println("**********************************************************************");\n\n           while (true) {\n               Socket s = ss.accept();\n               String address = s.getRemoteSocketAddress().toString();\n               System.out.println("new client has been detected:");\n               System.out.println("Socket. Remote Address: " + address);\n\n               ObjectOutputStream oos = new ObjectOutputStream(s.getOutputStream());\n\n               oos.writeObject("Request time: "+ new Date());\n               oos.writeObject("Socket. Remote Address: " + address);\n           }\n       } catch (IOException ex) {\n       }\n   }\n}\n')),(0,o.kt)("p",null,"Once your application is ready, you need to pack it into a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},".jar"))," archive and upload it to VPS container via preferred file transfer client. In our example, we\u2019ll upload ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"vdssocket.jar")," file by means of ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"WinSCP")," tool. For that, let\u2019s perform the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access WinSCP client and connect to your VPS container using credentials received via email upon server installation:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Host name")," - attached Public IP address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User name")," - login (i.e. root)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password")," - received password")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(20728).Z,width:"525",height:"371"}))),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Login")," button to initiate connection setup."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Once connected to your VPS node, navigate to the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"home"))," directory and create a new ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"standalone_java"))," context inside. Then drag the required ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},".jar"))," file with your application and drop it into the newly created folder.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(74816).Z,width:"849",height:"648"}))),(0,o.kt)("p",null,"Within the appeared transfer settings dialog, click ",(0,o.kt)("strong",{parentName:"p"},"Copy")," to start uploading. Once it is finished, you\u2019ll see file in directory on the remote VPS."),(0,o.kt)("h2",{id:"a\u0441\u0441ess-application-via-ssh"},"A\u0441\u0441ess Application via SSH"),(0,o.kt)("p",null,"Access your VPS container via ",(0,o.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"SSH protocol")," to locate the recently uploaded application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move to the directory you\u2019ve created in the previous section and inspect its content to ensure application archive is present.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home//standalone_java/\nls\n")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(57042).Z,width:"754",height:"101"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In order to run the uploaded app, execute the next command from inside of the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"standalone_java"))," directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar vdssocket.jar\n")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(48068).Z,width:"961",height:"132"}))),(0,o.kt)("p",null,"That\u2019s it! Now, as you can see, the specified port is listened to."),(0,o.kt)("h2",{id:"check-application-operability"},"Check Application Operability"),(0,o.kt)("p",null,"To check the application proper workflow, we\u2019ll connect to VPS container over the Telnet protocol. For that, install a Telnet client and run it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Establish connection to your VPS container by executing the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"o {public_IP_address} {port_number}\n")),(0,o.kt)("p",null,"where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"public_IP_address"))," - attached external IP"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"port_number"))," - port your app listens to")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(37190).Z,width:"483",height:"30"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"If everything works properly, you\u2019ll be displayed a message with data about the ",(0,o.kt)("strong",{parentName:"li"},"Request time")," and ",(0,o.kt)("strong",{parentName:"li"},"Remote address"),".")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(713).Z,width:"639",height:"32"}))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now, upon switching back to your SSH tool, you\u2019ll see a notification about new client connected to your server and its ",(0,o.kt)("strong",{parentName:"li"},"Remote Address"),".")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(1739).Z,width:"716",height:"133"}))),(0,o.kt)("p",null,"That\u2019s all. Your Java console application is setup and works properly!"))}d.isMDXComponent=!0},85122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-install-java-vps-ssh-f7b4defcad46676756c9bff72908d4de.png"},97408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-vps-execute-java-rpm-c222d0a3e891f0503e268f3a1f7b7f67.png"},7958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-java-version-vps-717d06e5f1ef1a26ab1428c1901cc5a4.png"},20728:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04-winscp-connect-to-vps-fe7af8451b5c0c703d03398db8348bb1.png"},74816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05-upload-java-app-to-vps-427f904427c37ed03383d72446d74afd.png"},57042:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06-java-standalone-application-directory-65f26367272ead2df61953a8fcf492a6.png"},48068:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/07-vps-run-java-application-3615a01fed85b7e7aeac0d7f3cc835eb.png"},37190:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},713:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAn8AAAAgCAYAAABjCR7wAAAABHNCSVQICAgIfAhkiAAADbFJREFUeJztnc+LLcd1xz+n+v6Yn08/MA5Z5A+wIQSUTVC8mHiTpcGGyMRIYEISr0zkgMBZhCxCQOBgCNhyZPwjYLwQeB37xUZPIiE2BiPINiQ4EExiO5Lfmzdz5/btOllUVU/rqu/t7tv3p+Z8YHjvdlWdOl1VXfXtU3VnBFAMwzAMwzCMO4HbtQOGYRiGYRjG9jDxZxiGYRiGcYcw8WcYhmEYhnGHMPFnGIZhGIZxhxjs2oEHDx7UXr+4uNiqH4dAaqt9apt96r95X9r6sGq5Ojt1ZevaaJU62trvYrtN/227fVbxP5VZ9Hme+TrW2YZNthfZ30T7tGGT9qu292neSuzT/LVJ2qwdTX217325Kbo+3+ucHxeNz2o9q64va4v8LXNyGVUnLy4uGiftfaWvv4d2v1Xm+/DQ/KiOu1VZ1H/VSbfP+G5rfxXb8/7VCb++9jft/zKaxkUfH5rKtu3/vu2zapttuv3XNR9san7cl/Vnk/XVjcc6mvrqLgq+rs/3fHrX+hZRNzfX1d/Fh7VE/poqano7P3S2Jfw22V6rvtXV5X2/9GsbuvT9oshOH/tt7W36rX2R/XX5vypN43Obc1HXN/sudrvkO7Tn85BfjNuwDeFXXXtXmYf2nXXOb136Y5t1tbHVxZ9BXaFFYi2xaHJf1AEXFxfloKtLb2JZ/XX1Vv1vIzy72F9WdpX7a1O+bf1t82zzwV9H+2+6/j5sOlKwq0jEPKsuGPvifxf6vvysUleb57iOvvNPm/r6zI91rHt92TSbnH/7zv/roOnZXJa+bO1dVL7r+Nnm+rXtF6S+z38fym3fVPm8E9XGqHN0XuRV86W8dTdWd716rW6xrqt/Pr1r53W1P5/edP9NtCnfxmZKn/exyf8+vq+Dtv4Zy6l7dqo09W8q32ahWsV+E03+HwKb9r/Ofpv5Y75fF82zi+bpqu3qtTbpTfew6fm1C6usP/N+dp1/m+5v0/Njnf0u6cvmk0Xlu4yfba5fy56vRc9Htew25q911lFu+15E4ZT+rV6vVtqVReUXDaRF9WxaECyyn3xKbXPoC9O+sqp/hy4Y1sX8JNW2PRYJhbrFrzqhr7u9V/V/X9iF8GtLXV8uSu/b9svKLruHfZifdrn+NNG3/m34X6cfmupvWl+3tf4uG5tNz898nk3NX+ueY1qf+esjAuedXtZA8509X/+mWGa/TefvO00+1wn+bXKIbXpIrKN/2y6Oh96XXZ/zfRZ+XWwvmnvXxTL7+zJmdrX+NNG3/j7rd9c6lomjZeXavJwsstVn/jmEdX0TPrrqh0WN2mXA1OWfV+x9FHxXf/rar35u8wA9eP11Hrz+Og7KnwwYIAwQhvLun5EIMpshsxljEd64f5837t/nSORdP8ciyHSK5DnjeG0sgpvc4CY3nIjDXU84d+Ffdz0JZfIcdz3hTBz3nOPN793nzX/8LmfiOJLgkwPEe/B+I23ahU337y7Z1OLdp7123d67rr/vorjoxXZZXZuy36b+TS9wTf41tfeq95eub3osbXv92Xb9m6br+tp1/V3Fn6rtrvna9sc2xueye6irXwB9MPeW09TY61TedeW61D8U4Qff/R4yy5HCg3NoUfDcxz/OWAQBvvXtb4MIosrzf/gpvvXNb6Au47kXnucp5/jql1/BTSaI9/gs48XPfY6BCF6VK1W+9JVXkFkBgKjy55/9LAVR2IkA8IUv/G1I9wUvvfQS16pcaRBTp+IYiTBRDUILuFLFo4wRJiivvvoqMs2R2Yw/e/FFclUEKIAvvfr3SOHRLMOPhqhzuDznk5/+NK99+RXIMv7oM59hJMIA+LuvvALAp/7kT5mo5ztf+zrqBCkKiqMj/viFFwB46D2XqhQoA4Qc5cp7ita9994+nO+f+fRq9KjL+Npm/V38aFO2Lk/XqFIX+5tsv672D8X/VX3o2/9N5duOzVXn37o6urbfsvS+8/syO13SF9HXvzpRsO77W8fzt+je6upe5v98+jqerU3OP03Ma59FeZbV3ad/uz7fbepfVr6aJoDW1r4FBHjKZZyIlGJqKEKKP2VAhjAM+goPjBCchEjajSpDgRNxCHAkwssvv4wo/OXnPx/KCwiCR3EIQ2BcqeNMHCKh7BghBzxKRqj00ntmKMfiQiRPgg8K3KgyitG7JPTOY0RtqjBDUaBQJY/5r9Qz0dsmPxLhofcoMFMlR7nnMjJgJEKuyjveM4z3PIzXRrGcAy7VcySOoYQ29QqDSvqJE65UyYCfFwUnznEswjvec62+tPvIe/67mPG27yr/DMMwDMM4FHYq/kYifOz4jA8PR/zKe4Yi3BPHtYbo0zhud56LowAmqpw7x1iEEcLPihlTlFNx/NIXPP8HzyFFgWYOVPmH117DRVEnEsSkRFHngHPnmKlyrUomcCwOr8ospguQE8TbWML2qI9pHshRRgTxN42C7tw5hiIQBVhBsD9TLQXjYw1iTwHVcF8eLYXnqThyVQaxzkv1paC7jO10IsIM8KoUBKGZxbtzhIjhI+85deGaB3JVfuU9R2m7mSAGn84yblTJVblJP4TP/3xzvYWRYBiGcbiMRcjiERont4vqIAYv0s6KakhzAo6wUzMjzPsQdonCcaEQ5PCV1XmGUqjiCWuTE0HjujOIO1Czuc8pb0IreWaENTEFFJRbQaDcriNFzJ98loqdTKRMp1LWx8BHFgMlWUwv4v+LWFfyLUcpFIZyG+SZomX6gBBgSWueICjaeZfKuGWn4u+vn/wAv+YGjCQMxAFBnE1VOXbCkDAo0wDO4uB72rkykvbQFxyJ45H3ZPEh83FQzKKQE+BYhBNxXKmP0bxwDeCRes7FcSKOm7gNCmHgusqTk3zx0XYSUY7wsAXhJXHYRzFJEFNpYhCC2JvGwZ7HBzrn9mEaEbaFsxhlvFRPruH+3/GeAXAkjixODk5CW0xVGcatX4BrVY5jVBVC3sfqy4mjUGUS7+NSPaeV+//+5IoC+K9ZvoGeNwzD2C0Z8OvZoHzBT3N42hVylXwuHgPy8bPEef8mHuU5i7spAgy53VlK57WHMUAQRFMQOQMRjqIonCmIwAdcxkik3PmZVkTZVQwiTOOL/jD6FHa9grfVo0bl2hPXhIFIGewg+p7OnT+OO1yeEJCAIAon6nkcd42yeM8piDLREIi4iQGIJOo0rm2ecJ+5BnFcxPV4FMtI/H86XnWDciYurP8i5VolhDb8X1+Ufg4I69qVem50ZxLmoHmP+Gs6E5DoeyYG4D8+8Uk++rsfgTwH55CiABFUBJfnvPXWWyihg4eELzl44kAiDNIk1H7rt59BXYao8qMf/5iMIOoK4OL3PhreP4oCUfinN99gLMJYHL/z7LOoi4+5D4NNfcG//OsPGYjw7DPPhPNyCsxmMBigIqDKv/3kJzgRfvNDH0LynH//m7/q1DaGYRjG9smAJ1zGXzzxNP9TFFx6z9MuYxBfpAsovxB3IsKJc0yi0LgnLgg3EX46m3EswnXcHXrHF2UUMCcIw8fxxfxUhHPn8BADAiFYkHaVUhQt7FIFweYJET8hCLe0+3MkwqlzIT+3R5kexjXsLK5pj+KRoqec4wmXURBe+GcajkEBvO0LJnFH6lJ9GXk7c46H3vNzXzBGmBHuYxwDKSnCJ8AvYhBmRAh6TFGG0f4vfVHugN2L5W6iqL3nwi4XwDQeZ0rtL1BGJJ3AL4qi3HkbxHyPvOc/Zzmz3cWwDpZ3ib82h18XXVtEU/m+9pvyNx14baqrq/9dfTcMwzC2x4eHIz5xcs5TLuODLivPYA/imempBuEHQXRMNRzvqe5APekyihixSseUjiWcrS6isEqBibRT5Am27jnHcTzedB2vn4kgcWvzKu5EnTrHLAY4Ut1JaOYxauehjP5N4/0NIe4ABR9cjJylSKIHzpyUR3zSEaBCwxGjtKWbjhNdeWUgIWIJIZqXjmE5gvDMK7Yeel8K2DNxpWh0UEYd05cx077STTx7Tvk5RDgTKQr7f97zZDyuNYnC8KH3IHDtlTdurvoOjztD+Xv+lkXoqnl2JWqavi1jYsswDMNo4vePTvmNbMBx/C0Mw7jNCvELcxLEySye6b4kRenCNmU6wyYinMbI4DRuRY5Qcknn5cL27I0quYRo21huI31pJysj1Qf3xDHW+GvBkChIpfyNDOEc/O0RISEINOIXDAfxjHvYcg3Rw3QOL92fEI5HTQGJkbuUnnwaxLN9BcrQadxqDRG3JPZO5fYeJ3gGsR19jOaNYt70JUtVGEqIAJ7EY0uFBtF9reEcf1EemrqNWqbtaoBRFtplgnLugrB+wjl+VhT8tEjy12hD+bd9of6r231pEmWbFm197XeJPpoANQzD2G+++OjtXbtgGDvnXX/ebRusss26LP98uVVsty1fZ6MqmC0KaRiGYRjGvpO20nlQ85u3182qwq8NFxcX7zl318Z2KtdUfpGNtl+QMQzDMAzD2AcGsJ0zdH2FX9vI3Cq212VjE9vmhmEYhmEY62TQnOWWNtuhTfm2Td9v+xqGYRiGYbyfWPirXmDx3yasptWVbfMrV7qmL2OR33VpbfJ09b9NecMwDMMwjH1gp3/hwzAMwzAMw9gurjmLYRiGYRiG8X7BxJ9hGIZhGMYdwsSfYRiGYRjGHcLEn2EYhmEYxh3CxJ9hGIZhGMYd4v8B8jUZsvKFUbAAAAAASUVORK5CYII="},1739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-vps-new-client-connection-861be96265c07e119dd49fb225a0a04a.png"}}]);
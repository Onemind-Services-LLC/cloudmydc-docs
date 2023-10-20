"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[7474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,u=p["".concat(l,".").concat(g)]||p[g]||A[g]||o;return n?i.createElement(u,r(r({ref:t},m),{},{components:n})):i.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>A,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},r=void 0,s={unversionedId:"Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS",id:"Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS",title:"Setting Mail Server Inside VPS",description:"With the platform it is possible to integrate mail server to your virtual private machine. Below, we\u2019ll guide you through the steps required to get one on within the CentOS VPS. For that, you need to access the required container over SSH protocol using the preferable connection flow (e.g. web-based client for CentOS in our case) and carry out the following steps:",source:"@site/docs/Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS.md",sourceDirName:"Elastic VPS/Linux VPS Use Cases",slug:"/Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS",permalink:"/docs/Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Elastic VPS/Linux VPS Use Cases/Setting Mail Server Inside VPS.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Run Java Console Application",permalink:"/docs/Elastic VPS/Linux VPS Use Cases/Run Java Console Application"},next:{title:"Data Storage Container",permalink:"/docs/category/data-storage-container"}},l={},c=[{value:"Set Up and Test Mail Server",id:"set-up-and-test-mail-server",level:2},{value:"Configure Postfix Authorized Networks",id:"configure-postfix-authorized-networks",level:2}],m={toc:c},p="wrapper";function A(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the platform it is possible to integrate mail server to your virtual private machine. Below, we\u2019ll guide you through the steps required to get one on within the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"CentOS VPS"),". For that, you need to access the required container over SSH protocol using the preferable connection flow (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"web-based client for CentOS")," in our case) and carry out the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Install and Test Mail Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Configure Authorized Networks"))),(0,a.kt)("h2",{id:"set-up-and-test-mail-server"},"Set Up and Test Mail Server"),(0,a.kt)("p",null,"In the current guide we are going to leverage the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Postfix")," mail server, so follow the next steps to install it within your VPS container and verify if it works as intended."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the Postfix installer with the following yum command:install postfix on vps")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(34522).Z,width:"655",height:"71"}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"During the installation process, you\u2019ll need to confirm (i.e. press and submit the \u2018",(0,a.kt)("strong",{parentName:"li"},"y"),"' response) the following points:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"total download size")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(7768).Z,width:"666",height:"408"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"importing GPG key")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(32744).Z,width:"664",height:"408"}))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"When the installation is finished, you can test mail server operability with the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo thisistestmail | mail -s test {your_email}\n")),(0,a.kt)("p",null,"Here, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"{your_email}"))," placeholder is an email address, the test email will be sent to."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Now, check the specified email inbox to ensure a letter was sent.")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(2389).Z,width:"367",height:"127"}))),(0,a.kt)("p",null,"Great! Email server is installed and we can proceed to applying the appropriate configurations."),(0,a.kt)("h2",{id:"configure-postfix-authorized-networks"},"Configure Postfix Authorized Networks"),(0,a.kt)("p",null,"For the proper workflow of the recently installed Postfix mail server, you may need to apply some settings within its main configuration file. For example, you can manually specify the list of \u201ctrusted\u201d clients, that will be able to relay emails through the Postfix:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Edit the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"main.cf"))," file, located in the ",(0,a.kt)("strong",{parentName:"li"},"etc/postfix")," directory with the following content:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when Postfix should forward emails only from the local machine, uncomment (remove # at the start of the string) the following line:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mynetworks_style = host\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alternatively, you can adjust the list of \u201ctrusted\u201d clients manually using the next parameter (in this case the previous setting will be ignored):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mynetworks = {server1 IP address}, {server2 IP address}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After editing configuration files, you need to reload Postfix in order to apply changes you\u2019ve made.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/init.d/postfix restart\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now you can send messages from the previously specified client (the local machine or the stated server(s)).\nHowever, you also need to adjust your application to work properly with the newly installed mail server. For that, add the code of the following type to your applicatication configuration file deployed to VPS container.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'package com.mkyong.common;\nimport java.util.Properties;\nimport javax.mail.Message;\nimport javax.mail.MessagingException;\nimport javax.mail.PasswordAuthentication;\nimport javax.mail.Session;\nimport javax.mail.Transport;\nimport javax.mail.internet.InternetAddress;\nimport javax.mail.internet.MimeMessage;\n\npublic class SendMailTLS {\n   public static void main(String[] args) {\n       Properties props = new Properties();\n       props.put("mail.smtp.auth", "false");\n       props.put("mail.smtp.starttls.enable", "false");\n       props.put("mail.smtp.host", "host");\n       props.put("mail.smtp.port", "25");\n           try {\n           Session session = Session.getInstance(props);\n           Message message = new MimeMessage(session);\n           message.setFrom(new InternetAddress("from-email@jelastic.com"));\n           message.setRecipients(Message.RecipientType.TO,\n               InternetAddress.parse("to-email@jelastic.com"));\n           message.setSubject("Testing Subject");\n           message.setText("Text of the message");\n           Transport.send(message);\n           System.out.println("Done");\n       } catch (MessagingException e) {\n           throw new RuntimeException(e);\n       }\n   }\n}\n')),(0,a.kt)("p",null,"That\u2019s all. The mail server has been successfully adjusted to work with application deployed to VPS container."),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Some settings may differ depending on the currently used ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"PaaS installation")," (i.e. hosting provider platform). Refer to the Postfix ",(0,a.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"official documentation")," to reveal more details considering required mail server configurations.")))}A.isMDXComponent=!0},34522:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},7768:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/02-14325a8a38eb20823375032e5c200f8e.png"},32744:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03-c6b8f2d4ffe7bb3d7695086982477f28.png"},2389:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);
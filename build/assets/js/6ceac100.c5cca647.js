"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[8845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:8},s=void 0,l={unversionedId:"Kubernetes Hosting/Multi-Region Cluster Federation",id:"Kubernetes Hosting/Multi-Region Cluster Federation",title:"Multi-Region Cluster Federation",description:"<div style={{",source:"@site/docs/Kubernetes Hosting/Multi-Region Cluster Federation.md",sourceDirName:"Kubernetes Hosting",slug:"/Kubernetes Hosting/Multi-Region Cluster Federation",permalink:"/docs/Kubernetes Hosting/Multi-Region Cluster Federation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Multi-Region Cluster Federation.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Public IP for Access to Kubernetes",permalink:"/docs/Kubernetes Hosting/Public IP for Access to Kubernetes"},next:{title:"Cluster Automated Upgrade",permalink:"/docs/Kubernetes Hosting/Cluster Automated Upgrade"}},i={},c=[{value:"Federation Prerequisites",id:"federation-prerequisites",level:2},{value:"Remote Access to the Clusters",id:"remote-access-to-the-clusters",level:2},{value:"Cluster Remote Access Testing",id:"cluster-remote-access-testing",level:2},{value:"Joining the Federation",id:"joining-the-federation",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"grid",gridTemplateColumns:"0.7fr 1fr",gap:"10px"}},(0,r.kt)("div",null,(0,r.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"cetner"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(13748).Z,width:"300",height:"300"})))),(0,r.kt)("div",null,(0,r.kt)("p",null,"If you have multiple Kubernetes (K8s) clusters in different regions and need to run the same application across all of them, it is reasonable to use the so-called Kubernetes Cluster Federation or ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"KubeFed"),"."))),(0,r.kt)("p",null,"Kubernetes Federation is a multi-cloud or multi-region implementation for centralized deployment and management of applications and services across multiple Kubernetes clusters."),(0,r.kt)("p",null,"Federation allows to create a set of interconnected clusters, into which you can deploy applications according to specific rules. The most demanded use case for Federation is scaling applications across different clusters located in different regions. You can bundle components of your application to federated resources and distribute the specified number of replicas across all member clusters."),(0,r.kt)("p",null,"In this article we\u2019ll demonstrate how to set up Jelastic Kubernetes Services (JK8s) as a Federation located across different regions."),(0,r.kt)("h2",{id:"federation-prerequisites"},"Federation Prerequisites"),(0,r.kt)("p",null,"Supposedly within one Jelastic PaaS we have five clusters in different regions and we'd like to deploy applications to any of these clusters. One of them is a Host Cluster that acts as a Federation ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Control Plane"),", it propagates and pushes configurations to the"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(39394).Z,width:"768",height:"927"}))),(0,r.kt)("p",null,"Thus we need to decide which payload we want to distribute, and which member clusters should handle it."),(0,r.kt)("p",null,"So, let\u2019s get down to business and create a Federation in Jelastic PaaS."),(0,r.kt)("p",null,"Sing in your account and create two ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Kubernetes clusters")," in different ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"regions"),". Actually you may create as many as you need though, but here we create a ",(0,r.kt)("strong",{parentName:"p"},"Host Cluster")," and ",(0,r.kt)("strong",{parentName:"p"},"Member Cluster 1")," only. All of the actions below can be applied to any number of Member Clusters. So, deploy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Federation Host Cluster: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"fedhost.vip.jelastic.cloud"))),(0,r.kt)("li",{parentName:"ul"},"Federation Member Cluster: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"member1.demo.jelastic.com")))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(26292).Z,width:"782",height:"393"}))),(0,r.kt)("h2",{id:"remote-access-to-the-clusters"},"Remote Access to the Clusters"),(0,r.kt)("p",null,"The next step is to establish ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"remote access to the clusters"),"."),(0,r.kt)("p",null,"Log in the master node of the ",(0,r.kt)("strong",{parentName:"p"},"Host Cluster")," via ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"SSH")," and start with the configuration. Some commands output will be shown to let you be sure you are doing right:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, install the KubeFed chart with ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"helm")," in ",(0,r.kt)("strong",{parentName:"li"},"kube-federation-system")," namespace :\nAdd repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ helm repo add kubefed-charts\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("a",{parentName:"em",href:"https://raw.githubusercontent.com/kubernetes-sigs/kubefed/master/charts"},"https://raw.githubusercontent.com/kubernetes-sigs/kubefed/master/charts")))),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"latest version")," available of ",(0,r.kt)("strong",{parentName:"p"},"kubefed"),". Here and below, we use 0.7.0 as the current version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ helm install kubefed kubefed-charts/kubefed --version 0.7.0 --namespace kube-federation-system --create-namespace\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(10764).Z,width:"1024",height:"141"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download the latest version of ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"kubefedctl")," command line tool as well and copy it to /usr/local/bin directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ wget\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/kubernetes-sigs/kubefed/releases/download/v0.7.0/kubefedctl-0.7.0-linux-amd64.tgz"},"https://github.com/kubernetes-sigs/kubefed/releases/download/v0.7.0/kubefedctl-0.7.0-linux-amd64.tgz")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ tar xvf kubefedctl-0.7.0-linux-amd64.tgz\nfedhost~$ mv kubefedctl /usr/local/bin\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"To let KubeFed federating deployments, it must be able to interact with all of selected ",(0,r.kt)("strong",{parentName:"li"},"Member Clusters"),". To get this, you can use the following ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"RBAC")," config file to create the necessary role to ensure connection from the ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Host Cluster"),". Log in the master node of the ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Member Cluster")," via SSH and create a configuration file for example ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"member1.yaml")," and paste the content below into it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n labels:\n   name: member1\n name: member1\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n labels:\n   name: member1\n name: member1\nrules:\n - apiGroups: ['*']\n   resources: ['*']\n   verbs: ['*']\n - nonResourceURLs: ['*']\n   verbs: ['*']\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n labels:\n   name: member1\n name: member1\nroleRef:\n apiGroup: rbac.authorization.k8s.io\n kind: ClusterRole\n name: member1\nsubjects:\n - kind: ServiceAccount\n   name: member1\n   namespace: default\n")),(0,r.kt)("p",null,"Apply the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"member1~$ kubectl apply -f member1.yaml\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(70659).Z,width:"624",height:"143"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"In order to gain access to all members you have to create a context for each of them. Each context contains a K8s cluster name, a cluster endpoint, username with credentials and the namespace.")),(0,r.kt)("p",null,"Where the credentials are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RBAC token"),(0,r.kt)("li",{parentName:"ul"},"certificate")),(0,r.kt)("p",null,"Get token name of the newly created service account ",(0,r.kt)("strong",{parentName:"p"},"member1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"member1~$ kubectl get secret | grep member1\n")),(0,r.kt)("p",null,"Retrieve its content and copy into the clipboard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"member1~$ kubectl describe secret member1-token-zkctp\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(21599).Z,width:"768",height:"429"}))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create user ",(0,r.kt)("strong",{parentName:"li"},"kubefed-member1")," and provide token for it from the clipboard:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config set-credentials kubefed-member1\n--token='eyJhbGciOiJSUzI1Ni\u2026\u2026.JYNCzwS4F57w'\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Retrieve Member Cluster endpoint the Host Cluster will be connecting to:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"member1~$ cat /root/.kube/config | grep server\n")),(0,r.kt)("p",null,"Set up the cluster name ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"kubefed-remote-member1"))," and add Member Cluster endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config set-cluster kubefed-remote-member1\n--server='https://k8sm.member1.demo.jelastic.com:6443'\n")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case Member Cluster is located on the different Jelastic platform, the endpoint is different as well. Use an ",(0,r.kt)("strong",{parentName:"p"},"API Endpoint")," from a successful installation window. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config set-cluster kubefed-remote-member1\n--server='https://member1.demo.jelastic.com/api/'\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Locale Dropdown",src:n(75930).Z,width:"470",height:"389"})))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Retrieve the certificate and copy its content into the clipboard.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"member1~$ cat /root/.kube/config | grep certificate-authority-data\n")),(0,r.kt)("p",null,"Substitute the ",(0,r.kt)("b",null,"certificate")," with value from the clipboard and add to the context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config set clusters.kubefed-remote-member1.certificate-authority-data '<certificate>'\n")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When the Member Cluster is located on the different Jelastic platform the certificate will be invalid because the ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Shared Load Balancer")," with its own certificate is in front of the cluster. This certificate should be ignored during negotiation phase between Host Cluster and Member with a command for example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config set clusters.kubefed-remote-member1.insecure-skip-tls-verify true\n"))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Finally, describe the context itself for the ",(0,r.kt)("strong",{parentName:"li"},"Member Cluster")," using the proper cluster name, context name and user name:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config set-context member1 --cluster=kubefed-remote-member1 --user=kubefed-member1 --namespace=default\n")),(0,r.kt)("p",null,"Repeat steps 3-8 for each ",(0,r.kt)("strong",{parentName:"p"},"Member Cluster")," in Federation."),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In general the default context name is ",(0,r.kt)("strong",{parentName:"p"},"kubernetes-admin@kubernetes")," in fresh K8s clusters. We recommend you to replace all those occurrences for example with \u201c",(0,r.kt)("strong",{parentName:"p"},"fedhost"),"\u201d or any other you prefer because the KubeFed can be confused with special characters in context names like \u2018@\u2019 and in the future you will get an error joining the clusters:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl config rename-context kubernetes-admin@kubernetes fedhost\n"))),(0,r.kt)("h2",{id:"cluster-remote-access-testing"},"Cluster Remote Access Testing"),(0,r.kt)("p",null,"Now the ",(0,r.kt)("strong",{parentName:"p"},"Member Clusters")," are described in the ",(0,r.kt)("strong",{parentName:"p"},"Host Cluster")," configuration file ",(0,r.kt)("strong",{parentName:"p"},"/root/.kube/config"),". In case everything was done properly, you may interact with any cluster configured, simply selecting the context. Let\u2019s see the list of nodes on both clusters ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"kubefed-remote-member1"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"fedhost")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl --context member1 get nodes\nfedhost~$ kubectl --context fedhost get nodes\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(51118).Z,width:"768",height:"210"}))),(0,r.kt)("h2",{id:"joining-the-federation"},"Joining the Federation"),(0,r.kt)("p",null,"Now that the communication is available between two clusters located in different regions, we can use the kubefedctl tool to let them both join the Federation."),(0,r.kt)("p",null,"Add ",(0,r.kt)("strong",{parentName:"p"},"Host Cluster")," to Federation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubefedctl join fedhost --v=2 --host-cluster-context fedhost\n--kubefed-namespace=kube-federation-system\n")),(0,r.kt)("p",null,"Add Member Cluster to Federation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubefedctl join member1 --v=2 --host-cluster-context fedhost\n--kubefed-namespace=kube-federation-system\n")),(0,r.kt)("p",null,"If everything passed smoothly with no errors you should have similar output:"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(11038).Z,width:"1418",height:"688"}))),(0,r.kt)("p",null,"In order to make sure that the join is working you can check the status of the Federation with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fedhost~$ kubectl -n kube-federation-system get kubefedclusters\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(65254).Z,width:"768",height:"109"}))),(0,r.kt)("p",null,"Congratulations! Now you are aware how to build Kubernetes Federation across multiple regions of ",(0,r.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"Jelastic PaaS service providers"),". The next step is to start federating the resources and we\u2019ll cover this in more detail within our upcoming publication."))}d.isMDXComponent=!0},13748:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image1-3-300x300-0389ad065fb7128055b07d6f6350ac98.png"},21599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image11-2-768x429-e16c932ce0abe55f5db5435db28b853d.png"},65254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image2-3-768x109-118398989a41ef33be5aa8eff92ded90.png"},51118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3-2-768x210-fcc90585220a371a184e6317bd6ad37c.png"},39394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image4-1-768x927-872cc322ce9b10a320c9a881fe5b022f.png"},75930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image5-2-4c280b11f9db731a87cc59fcb27f3230.png"},26292:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image6-2-43cf65771556383c16583077ee95ccf9.png"},11038:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image7-1-535946f2cc7d37603833407485eb4afc.png"},10764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image8-2-1024x141-8637d39294c3038d5e75dc0bc82f91c4.png"},70659:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);
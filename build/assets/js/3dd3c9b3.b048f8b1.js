"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[8694],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l=JSON.parse('{"p":[{"CharacterPeriod":"Minute","AcceptableValues":"0-59,*"},{"CharacterPeriod":"Hour","AcceptableValues":"0-23,*"},{"CharacterPeriod":"Day of Month","AcceptableValues":"1-31,*"},{"CharacterPeriod":"Month","AcceptableValues":"1-12,*"},{"CharacterPeriod":"Day of Week","AcceptableValues":"0-7,*"}]}'),o={sidebar_position:5},s=void 0,i={unversionedId:"Kubernetes Hosting/Managing Kubernetes/Velero Backups",id:"Kubernetes Hosting/Managing Kubernetes/Velero Backups",title:"Velero Backups",description:"Kubernetes Cluster: Velero Backups",source:"@site/docs/Kubernetes Hosting/Managing Kubernetes/Velero Backups.md",sourceDirName:"Kubernetes Hosting/Managing Kubernetes",slug:"/Kubernetes Hosting/Managing Kubernetes/Velero Backups",permalink:"/docs/Kubernetes Hosting/Managing Kubernetes/Velero Backups",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes Hosting/Managing Kubernetes/Velero Backups.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cluster Upgrade",permalink:"/docs/Kubernetes Hosting/Managing Kubernetes/Cluster Upgrade"},next:{title:"Kubernetes Scalability",permalink:"/docs/category/kubernetes-scalability"}},c={},p=[{value:"Kubernetes Cluster: Velero Backups",id:"kubernetes-cluster-velero-backups",level:2},{value:"Backup Scheduling",id:"backup-scheduling",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"kubernetes-cluster-velero-backups"},"Kubernetes Cluster: Velero Backups"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"Velero"))," is an open-source backup and restoration tool for Kubernetes cluster disaster recovery. It also supports the migration of cluster resources and persistent volumes backup. Manual or scheduled backups to the external storage ensure your data safety and protection."),(0,n.kt)("p",null,"You can leverage Velero to achieve the following tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Back up your Kubernetes cluster or selected resources / persistent volumes and restore in case of cluster data loss."),(0,n.kt)("li",{parentName:"ul"},"Replicate a whole Kubernetes cluster (e.g. create a development / testing instance based on the production one) or migrate selected resources to other clusters.")),(0,n.kt)("p",null,"You can easily integrate Velero backups with the Kubernetes cluster on the platform. Just follow the simple steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start by organizing the S3-compatible storage, which Velero will use to store your backups. For example, you can use ",(0,n.kt)("em",{parentName:"li"},"AWS S3"),", ",(0,n.kt)("em",{parentName:"li"},"VHI S3"),", or ",(0,n.kt)("em",{parentName:"li"},"MinIO cluster"),".")),(0,n.kt)("p",null,"In our guide, we\u2019ll proceed with the latter option so that you can have the whole setup under the same platform. You can install the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"MinIO Cluster")))," at the platform in a few clicks using the Marketplace (follow the steps in the linked guide)."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(334).Z,width:"624",height:"376"}))),(0,n.kt)("p",null,"After the installation, you\u2019ll see your MinIO installation credentials (also sent via email). You\u2019ll need this data later on:"),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(27281).Z,width:"429",height:"242"}))),(0,n.kt)("p",null,"Waiting for the first server to format the disks."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Connect to admin panel of your MinIO cluster and create a new bucket (e.g. velero) in the storage cluster.")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(69557).Z,width:"624",height:"276"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Find the latest ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"vmware-tanzu/velero"))," ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"release")," (",(0,n.kt)("em",{parentName:"li"},"v1.8.1")," in our case), click the link in the Download section and copy the URL to the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"linux amd64"))," archive.")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(74893).Z,width:"611",height:"450"}))),(0,n.kt)("admonition",{title:"Tip",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In our example, we\u2019ll upload the velero binary to the Kubernetes Cluster server directly. However, you can keep it anywhere (e.g. locally) with the API access to the cluster.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Connect to your Kubernetes Cluster control plane via SSH (e.g. ",(0,n.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"Web SSH"),"). Download the archive using the link from the previous step and extract the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"velero"))," binary to the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"/usr/local/sbin"))," directory.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/vmware-tanzu/velero/releases/download/v1.8.1/velero-v1.8.1-linux-amd64.tar.gz\ntar -zxvf velero-v1.8.1-linux-amd64.tar.gz -C /usr/local/sbin --strip-components=1 velero-v1.8.1-linux-amd64/velero\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(55129).Z,width:"1036",height:"323"}))),(0,n.kt)("admonition",{title:"Note",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"If uploading via the file manager, you\u2019ll need to adjust the file permissions:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 755 /usr/local/sbin/velero\n"))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Create the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"/root/credentials-velero"))," file and put the S3 storage credential (see the first step):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[default]\naws_access_key_id = {accessKey}\naws_secret_access_key = {secretKey}\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(32770).Z,width:"1036",height:"323"}))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Adjust the command below by providing the correct values and execute it to deploy Velero. The following placeholders need adjustment:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"{bucket}"))," - a name of the bucket (velero in our case, see the second step)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"{s3Url}"))," - an ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"http://"))," link to your S3 storage (",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"http://minio.vip.jelastic.cloud/"},"http://minio.vip.jelastic.cloud/"))," in our case, see the first step)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"{image}"))," - a velero container image (",(0,n.kt)("em",{parentName:"li"},"velero/velero:v1.8.1")," in our case, see the third step)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'velero install --provider aws --plugins velero/velero-plugin-for-aws:v1.4.1 --bucket {bucket} --secret-file ./credentials-velero --use-volume-snapshots=true  --backup-location-config region=default,s3ForcePathStyle="true",s3Url={s3Url} --image {image} --snapshot-location-config region="default" --use-restic\n')),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(57149).Z,width:"1033",height:"369"}))),(0,n.kt)("p",null,"We use AWS emulation to work with S3 and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"restic")))," add-on since we have NFS storages for which we don\u2019t have a native snapshot functionality."),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Let\u2019s deploy a test application with storage and mounts to test how Velero can perform backups. We\u2019ll use the following example application:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www.virtuozzo.com/application-platform-docs/kubernetes-velero-backups/test-instance.yaml\nkubectl apply -f test-instance.yaml\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(55937).Z,width:"1036",height:"323"}))),(0,n.kt)("p",null,"You can check the application with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods,pvc,pv -n test-nginx\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(89812).Z,width:"1036",height:"323"}))),(0,n.kt)("p",null,"Execute the commands listed below to generate some random data that will emulate application usage."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n test-nginx exec -it nginx-test -- /bin/bash\ndd if=/dev/urandom of=/usr/share/nginx/html/test-file3.txt count=512000 bs=1024\nls -laSh /usr/share/nginx/html/\nexit\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(14656).Z,width:"1036",height:"323"}))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"You need to annotate your application pods to ensure the NFS storage data is included in the backup. You can get the required storage name from the deployed application (mystorage in our case).")),(0,n.kt)("admonition",{title:"Note",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Without the annotation, ",(0,n.kt)("a",{parentName:"p",href:"https://cloudmydc.com/"},"PV and PVC")," definitions are copied but not the data.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n test-nginx annotate pod/nginx-test backup.velero.io/backup-volumes=mystorage\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(87746).Z,width:"1036",height:"323"}))),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Now, let\u2019s create a backup of your test application:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"velero backup create test-nginx-b4 --include-namespaces test-nginx --wait\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(14996).Z,width:"1036",height:"323"}))),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Check your MinIO storage. The data from Velero and restic should be present.")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(86398).Z,width:"624",height:"300"}))),(0,n.kt)("p",null,"Also, check that the created backup exists and is fine."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"velero get backups\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(48863).Z,width:"1036",height:"323"}))),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Let\u2019s completely remove the example application to test the restoration process properly.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns test-nginx\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(62611).Z,width:"1036",height:"323"}))),(0,n.kt)("p",null,"Clean up the Shared Storage data (in the ",(0,n.kt)("strong",{parentName:"p"},"/data")," directory) as well."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(77034).Z,width:"1036",height:"323"}))),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Once ready, restore your application from the backup with the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"velero restore create --from-backup test-nginx-b4\n")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(83816).Z,width:"1036",height:"323"}))),(0,n.kt)("p",null,"That\u2019s it! You can verify that everything, including stored data, is restored."),(0,n.kt)("h2",{id:"backup-scheduling"},"Backup Scheduling"),(0,n.kt)("p",null,"Velero supports backup process automation through scheduling. You can create the required schedule template via cron notation (using the UTC timezone). The general syntax is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'velero schedule create {scheduleName} --schedule="{schedule}"\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use the table below as a reference to set the required schedule using a standard cron expression:")),(0,n.kt)("div",{style:{width:"100%",margin:"0 0 5rem 0",borderRadius:"7px",overflow:"hidden"}},(0,n.kt)("div",null,(0,n.kt)("div",{style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",fontWeight:"500",color:"var(--table-color-primary)",background:"var(--table-bg-primary-t2)",gridTemplateColumns:"1fr 1fr 1fr",overflow:"hidden"}},(0,n.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",wordBreak:"break-all",borderRight:"1px solid var(--ifm-toc-border-color)"}},"Character Position"),(0,n.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Character Period"),(0,n.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",wordBreak:"break-all"}},"Acceptable Values")),l.p.map(((e,t)=>(0,n.kt)("div",{key:t,style:{width:"100%",height:"auto",border:"1px solid var(--ifm-toc-border-color)",display:"grid",gridTemplateColumns:"1fr 2fr 1fr",fontWeight:"400"}},(0,n.kt)("div",{style:{padding:"20px",borderRight:"1px solid var(--ifm-toc-border-color)",background:"var(--table-bg-primary-t1)",display:"flex",alignItems:"center",justifyContent:"flex-start",wordBreak:"break-all",padding:"20px"}},t+1),(0,n.kt)("div",{style:{padding:"20px",wordBreak:"break-all"}},e.CharacterPeriod),(0,n.kt)("div",{style:{wordBreak:"break-all",padding:"20px"}},e.AcceptableValues)))))),(0,n.kt)("p",null,"For example, to create a backup every six hours:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'velero schedule create myschedule --schedule="0 */6 * * *"\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"The schedule can also be expressed using the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"@every {duration}"))," syntax. The duration can be specified using a combination of ",(0,n.kt)("em",{parentName:"li"},"seconds (s), minutes (m)"),", and ",(0,n.kt)("em",{parentName:"li"},"hours (h)"),".")),(0,n.kt)("p",null,"For example, to create a backup every six hours:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'velero schedule create myschedule --schedule="@every 6h"\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"You can add additional scheduling options (to back up a specific namespace, set backups lifetime, etc.) via dedicated parameters. Use the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"help"))," flag to view the complete list of parameters:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"velero schedule create --help\n")),(0,n.kt)("p",null,"Congratulations! Now you know how to automatically back up your Kubernetes projects with Velero."))}m.isMDXComponent=!0},334:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/01-minio-cluster-installation-af3678bc0e5e4fb2a03cf75770d0b660.png"},27281:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/02-minio-cluster-installed-43b16f61114668fe6c1a4978d0b54a75.png"},69557:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/03-minio-create-bucket-b2dd99b6fc74554dcefaeaf5eb9544a9.png"},74893:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/04-velero-versions-3898cf8fb1e4df9491931c3b318f72a7.png"},55129:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/05-download-velero-7e4d01077fe94748d66875364553285e.png"},32770:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/06-velero-credentials-b6cdf67dc0229c2b56dbcb61b9040fe8.png"},57149:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/07-velero-install-788375f51bdf995dbc7ea24630a2f81f.png"},55937:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/08-kubernetes-install-application-648b788e8d603f15cbb13af42291a898.png"},89812:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/09-kubernetes-check-application-7094105703aca6e3ebcd71fb0d88876f.png"},14656:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/10-kubernetes-generate-data-77e1e2854883e21490f561ac4fe8632c.png"},87746:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/11-kubernetes-anotate-application-fcc6ef95d9ddc5d5055142f865fac208.png"},14996:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/12-velero-create-backup-938e94bbc023f4aa063f25e6c24abd05.png"},86398:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/13-minio-backup-data-3e38489af2f106e3ffc4734fd4858c3d.png"},48863:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/14-velero-backup-list-15b19908e7a5325632bc3e7673572bd5.png"},62611:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/15-kubernetes-delete-namespace-9e586500be2ec174a154ce0ef6e9cfa3.png"},77034:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/16-delete-data-in-storage-8c7c88e17c641077e1bbcefcd774c365.png"},83816:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17-velero-restore-from-backup-1b5d908fe133fcad9cf618a08702e896.png"}}]);
"use strict";(self.webpackChunkcloudmydc_docs=self.webpackChunkcloudmydc_docs||[]).push([[9073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,g=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2},i=void 0,s={unversionedId:"EnvironmentManagement/Share Environment Deprecated",id:"EnvironmentManagement/Share Environment Deprecated",title:"Share Environment Deprecated",description:"This information is relevant for the platforms prior the 7.0 release. See the up-to-date account collaboration feature description.",source:"@site/docs/EnvironmentManagement/Share Environment Deprecated.md",sourceDirName:"EnvironmentManagement",slug:"/EnvironmentManagement/Share Environment Deprecated",permalink:"/docs/EnvironmentManagement/Share Environment Deprecated",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EnvironmentManagement/Share Environment Deprecated.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Up Environment",permalink:"/docs/EnvironmentManagement/Setting Up Environment"},next:{title:"Share Environment",permalink:"/docs/EnvironmentManagement/Share Environment"}},l={},p=[{value:"Environment Sharing with a Registered Account",id:"environment-sharing-with-a-registered-account",level:2},{value:"Environment Sharing with an Unregistered Account",id:"environment-sharing-with-an-unregistered-account",level:2},{value:"Manage a Shared Environment",id:"manage-a-shared-environment",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This information is relevant for the platforms prior the 7.0 release. See the up-to-date ",(0,r.kt)("a",{parentName:"em",href:"https://cloudmydc.com/"},"account collaboration")," feature description"),"."),(0,r.kt)("p",null,"A customer who originally created an environment becomes its ",(0,r.kt)("strong",{parentName:"p"},"Owner")," and can share it with other ",(0,r.kt)("strong",{parentName:"p"},"Users"),", specifying corresponding access rights for each of them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Owners")," have full control over the environment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Users")," can perform a wide range of actions within a shared environment: deploy applications, change configurations, read log files, view statistics, etc. The only exception, is that they cannot clone an environment."),(0,r.kt)("p",null,"Additionally, the Owner of the environment can permit a User to change its topology and to access it via SSH."),(0,r.kt)("p",null,"The charges for the environment are applied only to the Owner (the other users of the shared environment are not charged)."),(0,r.kt)("p",null,"Environments can be shared with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"registered PaaS accounts"),(0,r.kt)("li",{parentName:"ul"},"unregistered emails which will be signed up automatically\nBased on this division, the process of sharing can differ slightly. Let\u2019s review the steps of the two sharing types.")),(0,r.kt)("h2",{id:"environment-sharing-with-a-registered-account"},"Environment Sharing with a Registered Account"),(0,r.kt)("p",null,"To share any of your environments with more platform users and delegate them appropriate permissions, follow this instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the environment\u2019s ",(0,r.kt)("strong",{parentName:"li"},"Settings"),".")),(0,r.kt)("p",null,"share environment a375d2047848941da72832ea4018c58csettings button"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(81364).Z,width:"733",height:"148"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Account management")," section, add another platform user account (",(0,r.kt)("strong",{parentName:"li"},"Email"),") and tick the ",(0,r.kt)("strong",{parentName:"li"},"Change topology / SSH access")," option (in the case you would like to permit these activities for the specified user).")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(56561).Z,width:"911",height:"211"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After clicking the ",(0,r.kt)("strong",{parentName:"li"},"Save")," button, this user will receive an email notification about environment sharing and can proceed to ",(0,r.kt)("a",{parentName:"li",href:"https://cloudmydc.com/"},"managing")," it.")),(0,r.kt)("h2",{id:"environment-sharing-with-an-unregistered-account"},"Environment Sharing with an Unregistered Account"),(0,r.kt)("p",null,"To share your environment with a user who is not registered with the platform, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the environment\u2019s ",(0,r.kt)("strong",{parentName:"li"},"Settings"),".")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(81364).Z,width:"733",height:"148"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Account management")," section, add the ",(0,r.kt)("strong",{parentName:"li"},"Email")," of the user that you want to share the environment with.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(56561).Z,width:"911",height:"211"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Save")," button. Firstly, you will see this user in the list with custom triangle signs ",(0,r.kt)("img",{alt:"Locale Dropdown",src:n(9908).Z,width:"29",height:"26"})," which means that the invitation was sent. Then, this user will disappear from the list, as technically the environment is not shared with him yet.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(51532).Z,width:"912",height:"211"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"As a result, a user will get an email notification with an invitation to join your collaboration. When the invitation is confirmed, a user will be automatically registered and will receive an email notification with credentials to the PaaS account. You will be informed about this confirmation via email.")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"at this stage, the user is only registered and added to your collaboration, but no environments are shared yet. You will need to perform sharing steps one more time:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Settings > Account Management")),(0,r.kt)("li",{parentName:"ul"},"Add the same ",(0,r.kt)("strong",{parentName:"li"},"Email")," of a user"),(0,r.kt)("li",{parentName:"ul"},"State the permissions by ticking the ",(0,r.kt)("strong",{parentName:"li"},"Change topology/SSH access")," option"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Save")," the settings\nA user will receive a notification about the shared environment."))),(0,r.kt)("p",null,"Newly registered users will have ",(0,r.kt)("strong",{parentName:"p"},"trial")," status by default. As a result, the usual trial limitations set by the hosting provider will be applied, and a user will be deactivated after the trial period, unless the account is converted to a paid one."),(0,r.kt)("p",null,"Detailed info on your account limitations can be found at the ",(0,r.kt)("strong",{parentName:"p"},"Balance > Quotas & Pricing > Account Limits")," tab."),(0,r.kt)("p",null,"Note: that these quotas can be customized by the hosting provider, e.g. such users can be provided with an \u201ceternal\u201d trial period and, in exchange, forbidden to create their own environments. Such environment sharing can be also performed via the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cloudmydc.com/"},"account collaboration"))," setting (follow the link to get more details)."),(0,r.kt)("h2",{id:"manage-a-shared-environment"},"Manage a Shared Environment"),(0,r.kt)("p",null,"To manage the environments shared by/with you, click the Settings button in the top right corner of the platform\u2019s dashboard."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(88474).Z,width:"312",height:"59"}))),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Account Management")," or ",(0,r.kt)("strong",{parentName:"p"},"Shared with Me")," option (depending on your requirements) and manage the desired settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if you are the owner of the environment\nIn the ",(0,r.kt)("strong",{parentName:"li"},"Account Management")," option, you can remove access to your environment for any user or limit the permissions by unticking the Change topology/SSH access option.share environment")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(6447).Z,width:"917",height:"299"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if you are the user of someone\u2019s environment\nIn the ",(0,r.kt)("strong",{parentName:"li"},"Shared with Me")," option, you can decline from using the shared environment.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",margin:"0 0 1rem 0"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(76170).Z,width:"947",height:"218"}))),(0,r.kt)("p",null,"So now, you can work together with other members of your team on your cloud environment. Enjoy!"))}d.isMDXComponent=!0},88474:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAA7CAIAAABg/gEnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABkeSURBVHhe7Z15mFPV3cf5z6d/aKvt+9SH2lKBgdm3TDIzyWQmyWSfrJNksk0y2ffMzk6tWlEByyJoQQX3pdbaUmQbEBBBUVHAhR1FwaqUoq0v1Je+7zPv99ybyYRZIDNhydjL83vuc+bec3733N89n/M7y++GcbdPLhhS/n7bZEYGW2A4czHnGQtcVQuMY0AdUX90VV8Go5yxwHAWYEAd2cCBaUmMBa6LBS4P6nWpVrbdNOl1s61iTH3+QyzAgDr0FH3A62dA/Q/hIWsfkwGVATUtC2TQgvMzKDt03SbmFA4hwyyLXvG7XxeFVxLUBxYtWfjbxThelye5qjdlPOqozTspp2A0XFEoTppSNGlq8eSpxTm5JX1SnEOdoSUnl04UTUZOyGCAR0LvaOp5sf7MNYx+MenSbygcawtF4nSe++Yv/OKLr3Ck/7zzN/NCkdZRv+CsKjgiUDl8Wfvcxb/femTDe2fW7Tn9dM+ByMwHKniSrHqiS1TmZz/LczhG8OIMVb+8X/bjJQ0/WiD/4SzBLYLCCanKJ0+heJtyEVd9UA3pMBOITp5aMiWvdGpBeV4hK7+IEiQKWfgzDydpKSzPzS+bmlc6JQ8kE2Kpe9HS53XTYTXZL4ygnhdX/jIaSGUyaQAZeVRw+Kc1f3np5T/NmvOru++593crHtnQswVHpO+8+x6cx9XvB6vpg2p0xv+468Sxr/7n+Jfnj3z+LeTYF+cOnDq3euNBtSWUyau6ZmVHBKqoYMJD6h89arllpeWWZYab71P+sJ1/IzvvF8naTs0rJrzlE94KiisKiiqAHAGsoGxqPgGMSL/DpDwnyV9G8pdwisuryyp4LE4Ni8NjsXnlbG5ZBbeUVV1aTgmruqSssriUU0g0A+Aywm0KupT7TaCb4ocJ1ameeXJuaqdQUVDMJtpIL1BK6ja1mIY/qWFwIie3dEp+WW6iW4GGRH3IM1L3gmTyBjMC1ReMPPHUMwcPHdmx841PT546ePjo1m07PvzoINI7du7CeVxFnkzqlyVl0wS10RFb8/ZXn5z+176Pzz7/2sn5Lx+696WDj20+/uaBvx3+67crNxyVGwNZ8kRXyqOuavzRE9ZbFjb8cL4acvO96v+aI/2xn3tzUn9+YSnIpJDjlrMp2Cq4ZYS0KjBWBMZKIGwIadwJYReWVpawuKzK2kqekFsr5gsktUIJv05cUyfm8eu5NaJqnrC6RsTli6q5dZVVtWyQDIbLq4pLCbdFUEijQvUIoJcgdBFFpL+gXTSRIlSgMtEpsGsqKG2l5ZVFxRX5FK5w2uA/l/LnCfdOlBP95Azpg9hFqDO6FRb1mBw8JjoRTmGi+yiBhkxefUag3jYhZ8asuS+8+NLru97csHHz+g09ONKCMzg/Y9Yc5MmkfllSNh1Q2VzJ01uOHP/q/BuHztz10sFHNh87eeb8Z2fOvbz71Jzn3+95768fffaPec/sLuEIR/tQc7b1Hl+lv9prPwUj8qjLlTftfKr11IYFx9cZltp++ph//GzdRICaMzVRz+LSiuKyqtKKGna1kAfkasU1/HoeX8StEVZx6zhgjAi/opLymQmpYVfVVdXU84UykVQlVWqVan2DWqds0CoaNDKFWipTiaUqiUwtVaglEqWwXlZHMK7n1Qgqq+sgnCo+GwqBbqJHqAJC8MA0Rf39BboMIrgvn9yRJyI1rJPWCiQ1fGFVFZ8F2Ch3nV9UUUCRXMoiRcor+rob6GfB53PL+zRw+fU1RImYVKaSVwbaS1gFhWUAfrTvnVgyI1BRfu4ddx46fGTT5q0bNm1ZtHT5bxc/uHjp8j//ZS3OHDp8FFeHqhwa3IXepGyfM/wDpDbN4dJXveGieumAGpi24MOT//3usa/veOGjGU/sO/fdv89997+U/PuuF/bPeWbv6x+d3vHhab3vVynPO4C9S6PYvan30MPqq/68IwL1hcgvvj609e9vPf3lrlUfbwp8sm7+N8d7tsz5ZW5eEf2YLE41q5LP4YE6pUSukSs0MrlaSkQlligEIlmdSC4gpEn5ArRvCZwnXyCtq1eI5RqF2qA1WIyWZovdabM7LNZms8VuarI2Gs26Roil0WTR6YwqTaOyQadQaqSyhvp6hUisEIlkAigEunwh8b1wyzUiHh8OGZ5ZintBQCMy1NTWEzgFMkG9UixTy5Q6RYNeqdLJZAqBoJ7Lha/mgfaSsuoyNp/DFVQRN06K0L4dggTYrhMpRBKVVKGRK7UKJelTpFJ5XZ2oqopXXs4pLmHBOV8fUDELBYcPLl++571927a/vnjpsiaLPTe/BMclDy7DGZzHVeRBzpQqNq06cWGTd1zfP/e64yu1w073U5tmanrCjeN+cMuEq95kk9VOB9QlL75z+PNvV2/+ZNoTeztXv3vyb+deeefUtg++OP/dv7d98Hl0xc6lrxx4/8TZ2APrUqwxgL1LozgyUHuH/3fpFjMiUGcaC8++/dzpPX84v+/58/teQOLsu8/Ps/QvnFTW8Kv4ohqhQqJo1AAtQ0IMRotOb1SpGxs0RrXO0KDWKxq0cvCm0oGTBg1B1GRx2Bxup9vn9gW8Pr/b43O5vU6Xx+F025tddofH4fLY7U6zpdnUZDOaLPpGk0Zj0OiMao2+QUWhK4fjpX2vBhAqVY24I7mpGjSCKOKfZQotegS1rklvtBqb7E3m5iazVa/Ty2lWeYJK4p9rq2okdfVKeHh0N4RnlU6O4sBSBVWNKq0JHYfBZENNTORo0Wl0MomMX1PH4VSXlbFLSzm02Uf3XkbvUX/167s++fTkoSPHdux6Y+cbu7ExgznALyfl44g0zuA8riIPcva3DP2jH/euiY5PMjbhxhtuvS0Bar+n3TYLGQjSfY73+In+9NYZk5Oeh0qs3kpnO7G6KXEj/eoT/U67b7g4K5GNZL6UGx+C/3RAXb72yJHP/3nHc/s7Vu2JPfJmdMWu9Xs+O/vtd1+ePf/kq4dDy3d0PLrrwGffhJdsTw/UAdZArZKgDvPUg/q7IdvEZfv19EGdnFci8klWdld8t+exf334J8j5vc8+OZtd5xDnFJTRN+LXi2rFMpFMq9JbzXa3A3Q5Pc4Wn8vjb2lxW21Oa7O72emGw0QX32RpNtuazfCcNqe9xevyBf2haDjaGmtrb21ri8XborF4JBILhaP+QMQfjIUiMb8/5PEG3Z6Am1Jot7uaHTg6rTaH2WIzNlkNJojNBPysTqvdZW9ugeB2VtzIQnFlhsd2NTt9LZ6gxxfy+oIer7fZaiWkSZVCkbQWc+NaqVCiUWpM2kazHtosDjh5dBBNFofVDm0t6DWcLp/bG/B4/C6Xr8XltprNGpVKJBBVV/FYLE4S1OFYvfR7yQjUmbPnrnx01e639kDgUU1mOybxOCJNn8RV5LkI1AnSpUcv9J5YPciLEiyPL2IRT8teeLwXNObccoN7Xe/BRWyc+sEN/embf9rfZNF2L/RujtKljvVumUEaB1F1jFY1Dhqo4SJB9zClijq5qfuy7TU1QzqgLnjxg8On/jn72f3Rlbsiv9sZfnjnP89f+PT0t/GHdvgXb/Ut3hp/aPtHJ7923t+TBqiDrZEKaspTe9f09h67xMR1AKvpPHWaoAJFecyhmTd197m1i+crnvh1AwSJni9/r75nijTSPKWIDPZECrFIrpAq9Vpjs70FXjEArnz+KBgLBIJo0y5vyBcIwVs6WuAh8affBc/pCWAZMhSNR4Foe0d7Z1dHZ2d7e2dbe0dra3s83haJtEZi7fG29kgkHgrHgqFYOBILBsM+XygQigSCIX8AvNGqfC1uvwsI+UL+IC6F/YGQzx/0+gAViPK2uAPeQCQYjkdi6AjaItF4OBx2Ox0mg1GFKTHmwxKlSKySqUz6JnQi6Fk8DnfA4yf63d4gpTMSDEVD4Xg01hoJR4OBkN/vd9qseo1GLKrnVtcA1JKSi4a+I30vowd1/M8nQrqnz3xv3/tv73mvZ8vWRUsenL/wtzgijTM4j6t0tpT2AfxYi471u8pEI6M8bfAn1MoTBfMW4lSHG/omzyNxcJGA2rib0Lah9/AKrLXM2tKbVJXUoH74WO+FzdNpbznhxpsu2uu7bPNNB9Tpyzd/8OnXD607HFvxZvih14PLXgss2QbxLtzsXbDJs2Djvc+/s+fYae20Zy4GNWW6TkYBdLdyaWukPPX46Lr+5xp6LpBsE5d9TDpDWqDmFMYWdDqWV77xf49v/Hrp4wdmPvxu2+I3wvdv86zY27Xpm+X6+0uF3uZJucVSjVTaoJSr9DqToxnt2wtCwoEgadPhUNgDbv2RQDji8wdcGOKC4VDYHwyB0nCsNd7e2d41rat7Wvf06dOmk0RXV1dHR0dbW3s0mgA1SkCFtEbhb6OxUCiGRAyOF+kw8IsSCeEYC0fbYgTy1miUuOVwJBrCvQBVMIpwgFgreoGutrbOeLw9Fov63C1mU5MGQ2gMyMnylbZBazXZXBiKO1x+1BmdCBw7dh9jraTvaMWxraO9o7MtHg+jpwgEWpptjdoEqOXl7KIi1gD7j+i9jB5U+q4d3dPWrt2wd9/7e/fu37f/A1qQxhmcj8bbh2ocYDUxRWUvOtRLnGfB7dM39i8vUaPWTV1pgppcX+mjt2t979FlssQ4sO/khFtvIM4nQQU1tB6BpAOqyjV7055Tuw6c7lj5Jo3omX/86/Q351vmb4B456/b/N5nz716uFKTiA+hKkAhl/DzKf7/MtZI7b9Uy4/StrqUoE2k/7zpgCr3WqNPSX5/4m4IEF3yZnjhDt+8Lc471plnvKxbuju6YHsw8IhW7jMr9JgkKuQqndZot1EjXrcn6AsAm3goGHST4WLIHwpjCtpC3ClApfwhQI1ToHZ3d0GmTe+eBkq7Ozs7QWks3hoCe6F4OBoLBgAbikBha5gwGYsA1Dg6AgyMo8AJN4KzxdVoa0dbR2d7G2EVJJNRdJg42ABG17G2eGtna1snkIvBK0YiXhcBVas1qDGhJazqVXqbGSPnBKgogp4iHom3t3V2d3R0dnR0weEjAdUhdDQ+n8Nm0anV9UIy9C0rqygsTMwFUl9E+u8lI1BRxUdXPX70+CevrN+ITdQPDxx6/8MDOCKNMziPqzaH6xJN5LafBNbRbhB09a7pX2MaN+5GMo9Nx6MOBWrvxu4BoOLP8TcnugdCLNU7pC3pgFpQXue5b+1bh073vHsyuny754Ge5X/eCwGl7vv+8uL2I9v3nxLGn8gprrn80Pcy1kg1y4zNiU5tBI9z6QdPB9R3ZueeXjvzro22+ds9kHtfbUF67lrT9D9q259XBFcLu/+g/vvGO3Z25il19bIGrKGqVDqzyYb5IeaQnhY3WA15PV6MhjE5pOarLsz0mp2Yl8LrksmeL0ycKpmdtrcTwDroQS+hKxgMeTCahX/2BVwtWF7CIlPAF8C4l3hsP8EVTpuMqP3APhQhY91AOECcaiwMOHE+EIT4sEDl9ZMhMQauZCzdSsbPlD90ORwmo4mAqmlE1eUKnUpnMVmdFmpS7XRj8pyAHKVi0VgkEoUjJcr9mKO6HU6n2WRUKZWCOmzSVJeWsvLzS9Jvb4NzZgQqKr3q8ScfeWw1Rhfxto55983/+JNPcUQaAkpx1Wp3XnRXzBVTF3Jm9fQeXVyP9dvxwkVHL3zctxqkXb2VGhKTyVjfeHVAmuZzKJKp0SA1csYwuCcxmJy1tX+pSbHsaL/LTat9pwMqblchtll+88rOj77Y9v7n8557K7hoo3/B+juf3NWz58TWfSdr48/m8YwXv4NhVn2HtcagpyYPmLo4l9bjZA7qvrm5Z3vuDq4WPLSn9a6N9jvWWWavMUx7STt7jXH6H/ULXgs2P8j7estv3pqeJ1MJxLL6eolMptRj1RdLO6Ymu9kKJl02q91owBn82dzUhNVgs6HJjkUaq53sxzS7vZgH+sMRzGbhu+AhgUEwEATeoNpKtmocFhsKYkEIaafd4cIaEmh3YNrpwnoV1odcWBamVomRxpDVS6as5JLb0eIiRwc6DlKQugRosSKFWSspa7NaG/WgVE+WiFVamRwrwyad0UpWrY1WENvcQuvxkhVp9CyUZpfb43A4LGSNyqzTaqUSKb+mtqKiqri4PDf3+kUmIZiBmNhi/9nPJ2EiCjj/duYsjvS8FOxiWWxgwAPmn8dTZ2XrvYlVX7J0tCG5VPvxMkLv5Al1iw5S41U4wNR06hx1kEfFFDQ5yn11fWIxaXy0X3nvkaXc5FJzWi07TVABQKnQrOh69unNB98+8tX+E2cguw99+di6Dyr9j+RyDYMIGW57ZkhrpD510oZYIcPqWlpPkWaPno5HndaifHtmTnCVyLK4bMFr3gFiWFBkuL/krTlFc/0qoYRXK+Tz64TYaZRgIwRbLyq9SmPU6U0atU4uJ7sj2I9RKEkYA3Y7GrSNaojOqDdZmmwOG2BzupwuNwGv2WG12kzGJr3eAC+HvVNEQWCLRU7tu2BXRoOCGoPOYG40YLPEqNUbdYYmvaEJ+0BavQnnDSaLwWg2GJrI0WhubEQ2InoUMWFvBoKOA9nMej1GvNj1VZNdX5lShO1ZCXZZtdR2jkahatQ2NmE3CAWNZhu2c7C7i/0howk6Cd6EbZlcUCesIjEPHIx7p0xNbCyn+RYGZMvIo0IXOEyi2NE1ra2jC8fEmsTPJw0VltQ/QaUGoqmNDLujff/69mxu+8kPktlS0sl91NQN1ZR0cpR7U7QvSCBF+cj3YNMHFc+OwW2pIsLzr+CFn6oOPlnRsixfHJhUxBvqDQ3YEB7wOAOskbyaOrO98vvJ6YCKZ8nPL2Zxq9Wzm40LhI3zWfr7i3X3FWnmFavvqVLOUbF5PGRAtmo+p7K6ilPJq+QKECeAMAMEGwhEcpFYLhSK+XwSh0BCHWpFPMQkIINIKqiXCsUKsUKt1DRqDE2IagBC2JkEflqtXqlUSaRygVBSi+gFUpBEAtUKUIoEOdQJZUKJol4C/TJELIkkAEyOBK4iEALrt4iySIhUUS+mqoEjikgR8NAgIaKEiFGK3EIMQd2oiEUS20AFSNQjJIOUogqiCAItALMEGohOVENSJ0AAFjZgEe2AOERWXn5JzpTrF5Q/oOXRjvTiNd4r2dOn3xXN2N43BU0OrTPzOSMCNf16jjbnyCIfRnqXNEFNU205u7y0vAJRrwi1K+fUsCsRrMdH5GBldS2nsqaCzUX0Lx1bixhgBPchlpBkqK6t5ov4QFosB0ISOSGBwCMCNkIEDJGyHAgJHqY0QCcJG4R+lCXK8Selh7oRLtE3rauqrkXoYkKoq5TUoR+p4gmqa4ggvJHLIzmhJBGNSNWNfBtARyByauhHIApRikhCZyV6pipUAzkRtMghlOLzg7xifEWUpsWGzJapR83k3levbMem5MgwObTOqMv4jwL1yr6XguKS/KLSfAS7FrEQeY8ofATNI3Se+uqFCp0vJhH5dAw9gvKpPOyiMgTlV4MHNrji1RF+CDnwzjzE35aWJcLuqeJEaM0kFr/vFkQJfRJ3KakopO5CnWGTCpRRkkyQPxFSX1XKIoKYwTIkykkl6a9zqCj/vnpSdSaqKBmojbpj31cBdEA/vr8h38pmYtjvJ6g/vSk5hr4y87csA/VaR1Bm0sJycgtzcovIZ2X0p2RouPmlaL70Jyn0N259X7rReYiQPIXl+SAQXJVx4JAhiO8vLManKvgahrR+UrDv+7jE53L0R3O4SyKR0EbnpNUSzQVl8HLkmzgiVE0SQp/BF3bkS9e8wr5siaqmVJjWRiShkC6YEFobqSG+bqM+asfXqpmN6b6foGbSsIYsm2WgZjQ6uOLGubTCiTn5E/EjD5PxOw/kpx7QZFOF+kkE+hKVh2SjPxwnn5vTv+3Qh0Sy3UNDSv6UUv2qBmdIak4op2+RqEzylxlI3ejzSaEqnPLTDcl69lWVfqJBRRKlqOplbnMG1LSMyIA66qaG8O/bJxXcTo75SA8W+tLFkngpfdD2/2hDsvUn6jNE2cHaEmeGvPuITg6oZzpl+4rAAmm1tOHsfHlQR/T71N/7zKNur0xBxgKZWIABlfkB7ox6+kwaH1M2fQuMu/XW8UPK9943ju4BhzMXc56xwFW1wLiJE1mMMBZgLJDlFhjH4ooZYSzAWCCbLYBOZBxP1MgIYwHGAtlsAQpUYSMjjAUYC2SzBRhQmU6KscAYsAAD6hh4Sdnc0zN1uzYWYEBlQGUsMAYsQEDlCvSMMBZgLJDNFmBAZTopxgJjwAIMqGPgJWVzT8/U7dpYgAGVAZWxwBiwAAPqGHhJ16bPZu6SzRagQK3VMsJYgLFANluAAZXppBgLjAELMKCOgZeUzT09U7drYwEGVAZUxgJjwAIE1Gq+hhHGAowFstkCDKhMJ8VYYAxYgAF1DLykbO7pmbpdGwswoDKgMhYYAxZgQB0DL+na9NnMXbLZAgyoDKiMBcaABRhQx8BLyuaenqnbtbEAAyoDKmOBMWABBtQx8JKuTZ/N3CWbLUCDqmaEsQBjgWy2AAMq00kxFhgDFmBAHQMvKZt7eqZu18YCDKgMqIwFxoAFCKhZ/n/jMNVjLMBYABb4f33leIwdnvzPAAAAAElFTkSuQmCC"},81364:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a375d2047848941da72832ea4018c58csettings-button-e9167192211d02ddf42326d6e4740a0b.png"},76170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a375d2047848941da72832ea4018c58cshared-with-me-ff2512e3418bd4375c332e0c0fb34e0f.png"},9908:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAIAAADE9MDgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVEhLY5DXNKYFYqCFoUAzR82FBOxoOIyGA3IWIyo97Lr9DiuytPPElV3JNxePocSmX0zH4jeUTHMJGkqOucQYSrK5RBpKmrnEG0qCuSQZSqy5pBpKrLlk1FVE5YtRc8kIAdqW6wBh/bXj0i1jqwAAAABJRU5ErkJggg=="},51532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a375d2047848941da72832ea4018c58cunregistered-share-2071160214be08e7cf553a9a7bbd4687.png"},56561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a375d2047848941da72832ea4018c58cuser-email-eaea2f554f3f1678597a3691f4e3d39c.png"},6447:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a375d2047848941da72832ea4018c58cuser-management-section-2af56d5018cc5a8246180d1504d448cc.png"}}]);
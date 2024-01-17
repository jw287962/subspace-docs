"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"Prerequisites",sidebar_position:1,description:"Prerequisites for a Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},o=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-prerequisites",id:"version-latest/farming-&-staking/farming/advanced-cli/cli-prerequisites",title:"Prerequisites",description:"Prerequisites for a Subspace Farmer",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/advanced-cli/cli-prerequisites.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-prerequisites",permalink:"/zh/docs/farming-&-staking/farming/advanced-cli/cli-prerequisites",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-prerequisites.mdx",tags:[],version:"latest",sidebarPosition:1,frontMatter:{title:"Prerequisites",sidebar_position:1,description:"Prerequisites for a Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},sidebar:"tutorialSidebar",previous:{title:"Advanced CLI (Recommended)",permalink:"/zh/docs/category/advanced-cli-recommended"},next:{title:"Install",permalink:"/zh/docs/farming-&-staking/farming/advanced-cli/cli-install"}},l={},u=[{value:"System Requirements",id:"system-requirements",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"\u52a0\u5bc6 \u94b1\u5305",id:"\u52a0\u5bc6-\u94b1\u5305",level:3},{value:"Required ports",id:"required-ports",level:3},{value:"Storage",id:"storage",level:3},{value:"File System",id:"file-system",level:3},{value:"Folder structure",id:"folder-structure",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,a.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,a.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,a.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,a.kt)("td",{parentName:"tr",align:null},"4GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storage"),(0,a.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,a.kt)("h3",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("p",null,"For a secure farming setup, ensure your system is updated, use a secure wallet, configure firewalls properly, and follow network safety protocols. Detailed security practices are available on our ",(0,a.kt)("a",{parentName:"p",href:"../../../learn/security"},"Security Best Practices page"),"."),(0,a.kt)("h3",{id:"\u52a0\u5bc6-\u94b1\u5305"},"\u52a0\u5bc6 \u94b1\u5305"),(0,a.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins. \u76ee\u524d\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u4e24\u79cd\u94b1\u5305\uff0cSubWallet \u662f\u9996\u9009\u9014\u5f84\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://subwallet.app/"},"SubWallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/extension/"},"PolkadotJS"))),(0,a.kt)("p",null,"\u5c06\u4e0a\u8ff0\u4e24\u4e2a\u94b1\u5305\u4e4b\u4e00\u5b89\u88c5\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u4e2d\uff0c\u5e76\u5728\u5176\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u5e10\u6237\u3002\u6700\u540e\u4e00\u6b65\u9700\u8981\u4f60\u7684\u5e10\u6237\u5730\u5740\n\u60a8\u7684\u5e10\u6237\u5730\u5740\u5728\u6700\u540e\u4e00\u6b65\u662f\u5fc5\u8981\u7684"),(0,a.kt)("p",null,"\u5982\u9700\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684\u8bba\u575b\u5e16\u5b50",(0,a.kt)("a",{parentName:"p",href:"https://forum.subspace.network/t/subspace-wallet/61"},"\u5982\u4f55\u8bbe\u7f6e Subwallet \u548c Polkadot.js \u94b1\u5305")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\u8bf7\u52a1\u5fc5\u9075\u5faa\u4e0a\u9762\u5e16\u5b50\u5e95\u90e8\u7684\u5956\u52b1\u90e8\u5206\u3002"))),(0,a.kt)("h3",{id:"required-ports"},"Required ports"),(0,a.kt)("p",null,"Currently, a few ports need to be exposed for node to work properly."),(0,a.kt)("p",null,"If you have a server with no firewall, there is nothing to be done, otherwise make sure to open the following ",(0,a.kt)("strong",{parentName:"p"},"TCP")," and ",(0,a.kt)("strong",{parentName:"p"},"UDP")," ports for incoming connections."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"30333")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"30433")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"30533"))),(0,a.kt)("p",null,"On the desktop side if you have a router in front of your computer, you'll need to forward TCP and UDP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to ",(0,a.kt)("a",{parentName:"p",href:"../Additional-Guides/port-forwarding"},"How to Forward Ports")," for a more in-depth tutorial).\nIf you're connected directly without any router, then again nothing needs to be done in such case."),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HDDs are not supported and will never be.")," We don't recommended trying to use smart caching, tiered storage or other ways to accelerate it, you'll be 100% disappointed and just waste your time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The node will require 100 GiB of good quality SSD"),". Doesn't have to be anything amazing, but something mid-range from a reputable manufacturer with decent endurance is recommended."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The farmer side can work with pretty much any SSD whatsoever that is not fake and not outright broken"),", dedicating high quality high endurance SSD is pointless unless you already have it for reasons unrelated to Subspace. Software writes to disk in near-perfect for SSD way, effectively doing write leveling if SSD is solely dedicated to farming."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RAID of any kind is pointless and can only harm performance and/or rewards.")," RAID0 will most likely make things slower rather than faster (application benefits from knowing underlying hardware topology). RAID1 or any other redundancy level is 100% pointless too since farms are stateless and can be removed if a disk breaks without losing data on other disks, it'll just make thing slower and reduce the effective capacity that can be used for farming, ",(0,a.kt)("em",{parentName:"p"},"reducing farming rewards for literally no benefit in exchange"),"."),(0,a.kt)("h3",{id:"file-system"},"File System"),(0,a.kt)("p",null,"You can use any file system with default settings, we advise against their use for Subspace but in the case of CoW file systems like ",(0,a.kt)("strong",{parentName:"p"},"ZFS")," or ",(0,a.kt)("strong",{parentName:"p"},"BTRFS")," you need to disable ",(0,a.kt)("strong",{parentName:"p"},"CoW")," for the farmer directory, or adjust the ",(0,a.kt)("strong",{parentName:"p"},"recordsize"),"."),(0,a.kt)("p",null,"In order to disable ",(0,a.kt)("strong",{parentName:"p"},"CoW")," on ",(0,a.kt)("strong",{parentName:"p"},"BTRFS"),", run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"chattr +C /your_farmer_directory/"),"."),(0,a.kt)("p",null,"In case of ",(0,a.kt)("strong",{parentName:"p"},"ZFS"),", you can try adjusting the ",(0,a.kt)("strong",{parentName:"p"},"recordsize")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"zfs set recordsize=128K tank/dataset"),", or creating a separate ",(0,a.kt)("strong",{parentName:"p"},"dataset")," for the farmer with adjusted ",(0,a.kt)("strong",{parentName:"p"},"recordsize")," parameters."),(0,a.kt)("h3",{id:"folder-structure"},"Folder structure"),(0,a.kt)("p",null,"Starting with Gemini 3h, ",(0,a.kt)("strong",{parentName:"p"},"Subspace Node")," will create a following directory structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"subspace-node/db"),(0,a.kt)("li",{parentName:"ul"},"subspace-node/domains/0/keystore"),(0,a.kt)("li",{parentName:"ul"},"subspace-node/domains/0/db"),(0,a.kt)("li",{parentName:"ul"},"subspace-node/domains/1/keystore"),(0,a.kt)("li",{parentName:"ul"},"subspace-node/domains/1/db"),(0,a.kt)("li",{parentName:"ul"},"subspace-node/network")))}c.isMDXComponent=!0}}]);
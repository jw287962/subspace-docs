"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"Prerequisites",sidebar_position:1,description:"Prerequisites for a Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},o=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-prerequisites",id:"farming-&-staking/farming/advanced-cli/cli-prerequisites",title:"Prerequisites",description:"Prerequisites for a Subspace Farmer",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-prerequisites.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-prerequisites",permalink:"/fr/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-prerequisites",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-prerequisites.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prerequisites",sidebar_position:1,description:"Prerequisites for a Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},sidebar:"tutorialSidebar",previous:{title:"Advanced CLI (Recommended)",permalink:"/fr/docs/pre-release/category/advanced-cli-recommended"},next:{title:"Install",permalink:"/fr/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-install"}},l={},u=[{value:"System Requirements",id:"system-requirements",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Crypto Wallet",id:"crypto-wallet",level:3},{value:"Networking Information",id:"networking-information",level:3},{value:"Storage",id:"storage",level:3},{value:"File System",id:"file-system",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,a.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,a.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,a.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,a.kt)("td",{parentName:"tr",align:null},"4GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storage"),(0,a.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,a.kt)("h3",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("p",null,"For a secure farming setup, ensure your system is updated, use a secure wallet, configure firewalls properly, and follow network safety protocols. Detailed security practices are available on our ",(0,a.kt)("a",{parentName:"p",href:"../../../learn/security"},"Security Best Practices page"),"."),(0,a.kt)("h3",{id:"crypto-wallet"},"Crypto Wallet"),(0,a.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins. There are currently two wallets we suggest using, SubWallet being the preferred route."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://subwallet.app/"},"SubWallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/extension/"},"PolkadotJS"))),(0,a.kt)("p",null,"Install one of the two wallets above into your browser and create a new account there.\nThe address of your account will be necessary at the last step."),(0,a.kt)("p",null,"For help refer to our forum post ",(0,a.kt)("a",{parentName:"p",href:"https://forum.subspace.network/t/subspace-wallet/61"},"How to setup Subwallet & a Polkadot.js Wallet")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"make sure to follow the Bonus section of the bottom of the post above."))),(0,a.kt)("h3",{id:"networking-information"},"Networking Information"),(0,a.kt)("p",null,"For comprehensive details on network configurations, port management, firewall settings, and related networking requirements, please consult our dedicated ",(0,a.kt)("a",{parentName:"p",href:"../additional-guides/networking"},"Networking Guide"),". This resource provides in-depth information to ensure seamless integration and optimal security of your network connections."),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HDDs are not supported and will never be.")," We don't recommended trying to use smart caching, tiered storage or other ways to accelerate it, you'll be 100% disappointed and just waste your time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The node will require 100 GiB of good quality SSD"),". Doesn't have to be anything amazing, but something mid-range from a reputable manufacturer with decent endurance is recommended."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The farmer side can work with pretty much any SSD whatsoever that is not fake and not outright broken"),", dedicating high quality high endurance SSD is pointless unless you already have it for reasons unrelated to Subspace. Software writes to disk in near-perfect for SSD way, effectively doing write leveling if SSD is solely dedicated to farming."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RAID of any kind is pointless and can only harm performance and/or rewards.")," RAID0 will most likely make things slower rather than faster (application benefits from knowing underlying hardware topology). RAID1 or any other redundancy level is 100% pointless too since farms are stateless and can be removed if a disk breaks without losing data on other disks, it'll just make thing slower and reduce the effective capacity that can be used for farming, ",(0,a.kt)("em",{parentName:"p"},"reducing farming rewards for literally no benefit in exchange"),"."),(0,a.kt)("h3",{id:"file-system"},"File System"),(0,a.kt)("p",null,"You can use any file system with default settings, we advise against their use for Subspace but in the case of CoW file systems like ",(0,a.kt)("strong",{parentName:"p"},"ZFS")," or ",(0,a.kt)("strong",{parentName:"p"},"BTRFS")," you need to disable ",(0,a.kt)("strong",{parentName:"p"},"CoW")," for the farmer directory, or adjust the ",(0,a.kt)("strong",{parentName:"p"},"recordsize"),"."),(0,a.kt)("p",null,"In order to disable ",(0,a.kt)("strong",{parentName:"p"},"CoW")," on ",(0,a.kt)("strong",{parentName:"p"},"BTRFS"),", run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"chattr +C /your_farmer_directory/"),"."),(0,a.kt)("p",null,"In case of ",(0,a.kt)("strong",{parentName:"p"},"ZFS"),", you can try adjusting the ",(0,a.kt)("strong",{parentName:"p"},"recordsize")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"zfs set recordsize=128K tank/dataset"),", or creating a separate ",(0,a.kt)("strong",{parentName:"p"},"dataset")," for the farmer with adjusted ",(0,a.kt)("strong",{parentName:"p"},"recordsize")," parameters."))}d.isMDXComponent=!0}}]);
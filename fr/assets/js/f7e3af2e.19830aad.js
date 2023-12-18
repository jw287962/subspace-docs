"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},i=void 0,l={unversionedId:"farming-&-staking/farming/pulsar/pulsar-troubleshooting",id:"farming-&-staking/farming/pulsar/pulsar-troubleshooting",title:"Troubleshooting",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/pulsar/pulsar-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/pulsar",slug:"/farming-&-staking/farming/pulsar/pulsar-troubleshooting",permalink:"/fr/docs/pre-release/farming-&-staking/farming/pulsar/pulsar-troubleshooting",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/pulsar/pulsar-troubleshooting.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/fr/docs/pre-release/farming-&-staking/farming/pulsar/pulsar-tips"},next:{title:"Advanced CLI",permalink:"/fr/docs/pre-release/category/advanced-cli"}},s={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Wipe Node &amp; Farmer",id:"wipe-node--farmer",level:3},{value:"View your Logs",id:"view-your-logs",level:3},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,a.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,a.kt)("h3",{id:"wipe-node--farmer"},"Wipe Node & Farmer"),(0,a.kt)("admonition",{title:"Updated from a previous version and now having issues?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Occasionally after updating to a new version of the Pulsar you will need to wipe your node and farmer, generally this should not be required but can be attempted if your farmer is having issues after having had worked fine previously.")),(0,a.kt)("p",null,"To simply restart the node, go to the terminal where you started the ",(0,a.kt)("inlineCode",{parentName:"p"},"farm")," command, and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," you should see a shutdown message appear and the application will attempt a simple shutdown, if you dont see the message press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," again to force shutdown. You can then simply start the farmer again with the ",(0,a.kt)("inlineCode",{parentName:"p"},"farm")," command you used prior."),(0,a.kt)("p",null,"Use the same file name as the previous init and farm steps, then add the wipe command to free the previous storage that was being used. Generally, only do this if you have severe errors and are prompted by a staff member."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-file-name wipe\n")),(0,a.kt)("p",null,"After wiping, follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"farm")," steps above to start farming again!"),(0,a.kt)("h3",{id:"view-your-logs"},"View your Logs"),(0,a.kt)("p",null,"A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%/AppData/Local/pulsar/logs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Logs/pulsar/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.local/share/pulsar/logs"))),(0,a.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,a.kt)("p",null,"When running the Subspace Network Farmer & Node, sometimes you may encounter an error message that includes a line similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,a.kt)("p",null,"This error message means that Rust (the programming language that Subspace Network Farmer & Node is written in) has encountered a problem and has provided a diagnostic backtrace that can help diagnose the issue. However, by default, the backtrace is not displayed. To see the backtrace, you need to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable."),(0,a.kt)("p",null,"To enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," enter the following into your terminal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows"),"(PowerShell): ",(0,a.kt)("inlineCode",{parentName:"li"},"$Env:RUST_BACKTRACE=1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1"))),(0,a.kt)("p",null,"Once you have enabled the RUST","_","BACKTRACE simply rerun the application and you will get additional info upon any errors."),(0,a.kt)("h3",{id:"common-problems"},"Common Problems"),(0,a.kt)("p",null,"Looking for solutions to other common issues?"),(0,a.kt)("p",null,"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},o=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-tips",id:"farming-&-staking/farming/advanced-cli/cli-tips",title:"Tips & Tricks",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/docs/farming-&-staking/farming/advanced-cli/cli-tips.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-tips",permalink:"/zh/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-tips",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/farming/advanced-cli/cli-tips.mdx",tags:[],version:"current",lastUpdatedBy:"Emil Fattakhov",lastUpdatedAt:1701991353,formattedLastUpdatedAt:"2023\u5e7412\u67087\u65e5",sidebarPosition:3,frontMatter:{title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/zh/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-install"},next:{title:"Troubleshooting",permalink:"/zh/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-troubleshooting"}},l={},p=[{value:"Additional Tips",id:"additional-tips",level:2},{value:"Telemetry &amp; Block Explorer",id:"telemetry--block-explorer",level:3},{value:"Using a Custom Path",id:"using-a-custom-path",level:3},{value:"Set Node Custom Path.",id:"set-node-custom-path",level:4},{value:"Switching to a new snapshot from older/different versions of Subspace",id:"switching-to-a-new-snapshot-from-olderdifferent-versions-of-subspace",level:3},{value:"Help",id:"help",level:3},{value:"Timekeepers",id:"timekeepers",level:3},{value:"Node &amp; Farmer Commands Guide",id:"node--farmer-commands-guide",level:3},{value:"Common Command Examples",id:"common-command-examples",level:3},{value:"Utilizing Multiple Disks",id:"utilizing-multiple-disks",level:3},{value:"Optimizing DSN Syncing",id:"optimizing-dsn-syncing",level:3},{value:"Recommended Parameters",id:"recommended-parameters",level:4}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("Tabs"),c=d("TabItem"),u={toc:p},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,r.kt)("p",null,"Welcome to the Additional Tips section! Whether you're a seasoned farmer or just starting out with the Subspace Network, these tips and tricks are designed to enhance your experience and efficiency. Here, we delve into practical advice and lesser-known techniques to help you fine-tune your farming setup and navigate common challenges with ease. From configuring your environment to managing background processes, these insights are tailored to ensure your Farmer operates smoothly and effectively. Let's dive in and explore how you can get the most out of your Subspace Network Farmer."),(0,r.kt)("h3",{id:"telemetry--block-explorer"},"Telemetry & Block Explorer"),(0,r.kt)("p",null,"Explore the Subspace Network in depth with our variety of telemetry tools and block explorers. Whether you're monitoring network activity or exploring blockchain data, these resources provide comprehensive insights into the network's performance and transactions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://telemetry.subspace.network/"},"Telemetry Server")),": Get real-time insights into network activity and performance metrics. Ideal for monitoring the overall health and status of the Subspace Network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://explorer.subspace.network/"},"Official Block Explorer")),": Our primary tool for viewing blocks, transactions, and network activity on the Subspace Network. This explorer offers an intuitive interface and detailed information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subscan Block Explorer")),": An alternative block explorer providing detailed views of blocks, transactions, and network events. Subscan is known for its user-friendly interface and additional data analytics features.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-1.gemini-3g.subspace.network%2Fws#/accounts"},"Polkadot.js Block Explorer")),": For users familiar with the Polkadot ecosystem, this explorer offers a seamless experience for exploring the Subspace Network using the Polkadot.js interface."))),(0,r.kt)("h3",{id:"using-a-custom-path"},"Using a Custom Path"),(0,r.kt)("p",null,"You can set a custom path for your node & farmer to use if you want to use an external hard drive, or set a custom path from the default. You can set the node and farmer to different directories if you would like."),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"node",label:"1.\ud83d\udea9 Node",mdxType:"TabItem"},(0,r.kt)("h4",{id:"set-node-custom-path"},"Set Node Custom Path."),(0,r.kt)("p",null,"To set your node to use a custom path all you will need to do is add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# start node and store data in `NODE_DATA_PATH` instead of default location\n./NODE_FILE_NAME --base-path NODE_DATA_PATH --chain gemini-3g ...`\n")))),(0,r.kt)("h3",{id:"switching-to-a-new-snapshot-from-olderdifferent-versions-of-subspace"},"Switching to a new snapshot from older/different versions of Subspace"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Unless specifically mentioned by the Development team you should ",(0,r.kt)("strong",{parentName:"p"},"NOT")," have to wipe & purge your configuration on new releases.")),(0,r.kt)("p",null,"In general you should be able to download the latest release, and re-start the Node & Farmer with the same commands as you started to prior version with no errors."),(0,r.kt)("p",null,"There are some cases where version updates will cause issue with your Node & Farmer and you may have to wipe & purge your node, typically when errors occur. If you have any issues you can always check our ",(0,r.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," and hop in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," Server to ask for help."),(0,r.kt)("h3",{id:"help"},"Help"),(0,r.kt)("p",null,"There are extra commands and parameters you can use on farmer or node, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," after any other command to display additional options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME farm --help\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timekeepers"},"Timekeepers"),(0,r.kt)("p",null,"Gemini-3g introduces Proof-of-Time and a new, optional role has been added to the node. Timekeepers help run PoT to ensure the security of the network. Timekeeping requires a high-performance core CPU but can be undertaken by any node runner. You can enable timekeeping with the following commands. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--timekeeper"),": To enable timekeeping on the node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--timekeeper-cpu-cores"),": To specify which cores the Timekeeper will run on. ")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"../../timekeeping"},"Timekeepers")),(0,r.kt)("h3",{id:"node--farmer-commands-guide"},"Node & Farmer Commands Guide"),(0,r.kt)("p",null,"Both the node and the farmer have a variety of flags and parameters. To see a full list, append the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag to either the node or the farmer command."),(0,r.kt)("h3",{id:"common-command-examples"},"Common Command Examples"),(0,r.kt)("admonition",{title:"Farming Changes",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that as of ",(0,r.kt)("inlineCode",{parentName:"p"},"Gemini-3g")," farming no longer occurs while plotting. This is to ensure the plotting process occurs in the most efficient manner. You can change this by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--farm-during-initial-plotting")," flag to the farmer. ")),(0,r.kt)("p",null,"For both the node and the farmer, here are some frequently used commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display farm information: ",(0,r.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME info PATH_TO_FARM")),(0,r.kt)("li",{parentName:"ul"},"Scrub the farm for errors: ",(0,r.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME scrub PATH_TO_FARM")),(0,r.kt)("li",{parentName:"ul"},"Erase all farmer-related data: ",(0,r.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME wipe PATH_TO_FARM")),(0,r.kt)("li",{parentName:"ul"},"Start the node with a custom data path: ",(0,r.kt)("inlineCode",{parentName:"li"},"./NODE_FILE_NAME --base-path NODE_DATA_PATH --chain gemini-3g")),(0,r.kt)("li",{parentName:"ul"},"Erase all node-related data: ",(0,r.kt)("inlineCode",{parentName:"li"},"./NODE_FILE_NAME purge-chain --base-path NODE_DATA_PATH --chain gemini-3g"))),(0,r.kt)("h3",{id:"utilizing-multiple-disks"},"Utilizing Multiple Disks"),(0,r.kt)("p",null,"To maximize storage capabilities, you can engage multiple disks directly. This is often more efficient than relying on RAID configurations:"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS \\\n    path=/media/ssd1,size=100GiB \\\n    path=/media/ssd2,size=10T \\\n    path=/media/ssd3,size=10T\n")),(0,r.kt)("h3",{id:"optimizing-dsn-syncing"},"Optimizing DSN Syncing"),(0,r.kt)("admonition",{title:"Parameters to Use with Caution",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"While it might be tempting to adjust certain parameters that seem related to DSN Syncing, it's advised to be cautious. Some options will not enhance syncing and are best left at their default values:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"--out-peers\n--in-peers\n--in-peers-light\n--dsn-target-connections\n--dsn-pending-in-connections\n--dsn-in-connections\n"))),(0,r.kt)("h4",{id:"recommended-parameters"},"Recommended Parameters"),(0,r.kt)("p",null,"The default parameters are set with the capabilities of common consumer modem/routers in mind. Adjusting certain parameters could enhance DSN sync performance by increasing parallelism. However, if you decide to increase them significantly, ensure that your modem/router is performant enough to handle the increased traffic."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--dsn-out-connections\n--dsn-pending-out-connections\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Farmer:"),"\nIncreasing the values of the farmer parameters could increase the plotting speed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--out-connections\n--pending-out-connections\n")))}f.isMDXComponent=!0}}]);
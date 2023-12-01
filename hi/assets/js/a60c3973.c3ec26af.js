"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9512],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(o),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,l(l({ref:t},c),{},{components:o})):r.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},93:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=o(7462),n=(o(7294),o(3905));const a={title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},l=void 0,p={unversionedId:"develop/nova/local_development",id:"version-latest/develop/nova/local_development",title:"Local development",description:"Guide on local development Subspace Node and Farmer",source:"@site/versioned_docs/version-latest/develop/nova/local_development.md",sourceDirName:"develop/nova",slug:"/develop/nova/local_development",permalink:"/hi/docs/develop/nova/local_development",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/develop/nova/local_development.md",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1701391347,formattedLastUpdatedAt:"1 \u0926\u093f\u0938\u0970 2023",sidebarPosition:9,frontMatter:{title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/hi/docs/develop/nova/hardhat_guide"},next:{title:"Subspace block explorer",permalink:"/hi/docs/develop/nova/block_explorer"}},s={},i=[{value:"Setting up a local development environment",id:"setting-up-a-local-development-environment",level:3}],c={toc:i},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"setting-up-a-local-development-environment"},"Setting up a local development environment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can always set up a local network to test and deploy your smart contract!")),(0,n.kt)("p",null,"To establish a full local network, you need to run a local node, a Core-EVM domain, and a farmer."),(0,n.kt)("p",null,"First, visit the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/subspace/subspace/releases"},"Subspace releases"))," page and download the most up-to-date stable versions of the node and farmer."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For each release, there are two versions:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"skylake: for newer processors from around 2015 and onwards"),(0,n.kt)("li",{parentName:"ol"},"x86-64-v2: for older processors from around 2009 and some older VMs")),(0,n.kt)("p",{parentName:"admonition"},"Older processors/VMs are no longer supported by official releases, but they can still be ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/docs/development.md"},"compiled manually")," if desired.")),(0,n.kt)("p",null,"After downloading both files that suit your system, start a node using your preferred terminal. If you want to start an EVM domain on your local machine, you need to specify:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your local RPC server port"),(0,n.kt)("li",{parentName:"ul"},"Your local web-socket RPC port\nYou can do this with the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./your_subspace_node_path --dev --alice --rpc-port 9444 -- --domain-id 3 --dev --rpc-port 8545\n")),(0,n.kt)("p",null,"This will create a local RPC on port ",(0,n.kt)("strong",{parentName:"p"},"8545"),"."),(0,n.kt)("p",null,"Secondly, you need to start a farmer by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M\n")),(0,n.kt)("p",null,"You can specify the desired plot size, but 100M should be sufficient."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And that\u2019s it!")," By starting your ",(0,n.kt)("strong",{parentName:"p"},"local node")," and a ",(0,n.kt)("strong",{parentName:"p"},"farmer"),", you have your ",(0,n.kt)("strong",{parentName:"p"},"local RPC")," ready for testing and deploying your smart contracts! You can easily connect your ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," account to the local development network, as well as use ",(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,n.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/"},"Foundry")," in order to test and deploy smart contracts on a local network!"))}u.isMDXComponent=!0}}]);
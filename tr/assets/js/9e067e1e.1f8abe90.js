"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6264],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(k,s(s({ref:t},c),{},{components:a})):r.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={title:"Setting up MetaMask",sidebar_position:4,description:"Guide on setting up MetaMask for development purposes",keywords:["metamask","subspace network"]},s=void 0,i={unversionedId:"develop/nova/setting-up-metamask",id:"develop/nova/setting-up-metamask",title:"Setting up MetaMask",description:"Guide on setting up MetaMask for development purposes",source:"@site/docs/develop/nova/setting-up-metamask.md",sourceDirName:"develop/nova",slug:"/develop/nova/setting-up-metamask",permalink:"/tr/docs/pre-release/develop/nova/setting-up-metamask",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/develop/nova/setting-up-metamask.md",tags:[],version:"current",lastUpdatedBy:"Justin",lastUpdatedAt:1701391347,formattedLastUpdatedAt:"1 Ara 2023",sidebarPosition:4,frontMatter:{title:"Setting up MetaMask",sidebar_position:4,description:"Guide on setting up MetaMask for development purposes",keywords:["metamask","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"General information on dev tools and Subspace EVM",permalink:"/tr/docs/pre-release/develop/nova/general-information"},next:{title:"Subspace faucet",permalink:"/tr/docs/pre-release/develop/nova/faucet"}},p={},l=[{value:"Adding Subspace RPC using MetaMask",id:"adding-subspace-rpc-using-metamask",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"adding-subspace-rpc-using-metamask"},"Adding Subspace RPC using MetaMask"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"You can use any EVM-compatible wallet, this guide will be using ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},(0,n.kt)("strong",{parentName:"a"},"MetaMask"))," wallet."),(0,n.kt)("p",null,"First, let\u2019s set up a MetaMask wallet and then go over connecting it to the Subspace Development Network."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask Website")," and download an extension for your browser.\nSelect your preferred language in the top-right corner.\nRead and agree to MetaMask's terms of use."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-1",src:a(6691).Z,width:"350",height:"392"})))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cCreate a new wallet\u201d.\nRead a note on gathering usage data and either agree to collect your anonymized data, or skip this step. It does not affect the creation of a wallet. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-2",src:a(2091).Z,width:"350",height:"468"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the next screen you will be asked to create a password. Remember to always set a secure password that\u2019s difficult to guess. Type your password twice before proceeding to the next step."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-3",src:a(5208).Z,width:"350",height:"346"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MetaMask automatically assesses the strength of your password. "),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"As a rule of thumb, you should set a strong password, meaning that it includes uppercase letters, lowercase letters, numbers and special characters.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-4",src:a(1358).Z,width:"350",height:"343"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Watch a video to learn more about your Secret Recovery Phrase before proceeding to the next step. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-5",src:a(3665).Z,width:"350",height:"507"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Have a look and write down your 12-word recovery phrase. "),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The wallet with the recovery phrase for this guide will be deleted right after the guide is complete.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-6",src:a(1598).Z,width:"350",height:"464"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm that you\u2019ve written down the recovery phrase by filling in the missing words of your recovery phrase. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-7",src:a(1590).Z,width:"350",height:"332"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now that your wallet is created, let\u2019s connect to the Subspace Core EVM. Click on the Ethereum Mainnet logo and select Add Network."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-8",src:a(3029).Z,width:"350",height:"357"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"At the settings, click on \u201cAdd a network manually\u201d"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MetaMask-9",src:a(4458).Z,width:"1020",height:"650"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To connect to Subspace RPC specify the values below"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Network Name: Subspace EVM\nNew RPC URL: https://domain-3.evm.gemini-3g.subspace.network/ws\nChain ID: 1002\nCurrency Symbol: TSSC\n")))),(0,n.kt)("p",null,"You're all set, ",(0,n.kt)("strong",{parentName:"p"},"you have successfully configured your MetaMask wallet")," and connected it to ",(0,n.kt)("strong",{parentName:"p"},"Subspace Core EVM"),". To deploy your smart contract, you first need to get a small amount of ",(0,n.kt)("strong",{parentName:"p"},"TSSC"),"  tokens into your wallet. Please make sure to refer to the ",(0,n.kt)("a",{parentName:"p",href:"/tr/docs/pre-release/develop/nova/faucet"},"faucet section")," of the guide to learn more about getting test tokens."))}m.isMDXComponent=!0},6691:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-1-1bded85eeaf89c0daae434256fd88045.png"},2091:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-2-5f7e7f060708ba123fddb26362fdfb50.png"},5208:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-3-75874afd8bf6c5d17ee3574ba8dad9aa.png"},1358:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-4-e5f5ecae7bf1f748b681d8dfc5721af0.png"},3665:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-5-79ee39d84c4ddb91e413dcac10f5fe04.png"},1598:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-6-565644d1cd952a85c58125e61d4d8cb0.png"},1590:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-7-132a39939fc2424e79b95b82a3b7d82e.png"},3029:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-8-8739cf366556bb8646500e0974e1d665.png"},4458:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MetaMask-9-b2ffa9d0e03a49767d7db5b53b9c7710.png"}}]);
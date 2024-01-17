"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9882],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),p=n(7392),d=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function A(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=A({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==s&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function f(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},14:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162),s=n(614);n(9960),n(1207);const l={title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",keywords:["Operator","Guide"]},p=void 0,d={unversionedId:"farming-&-staking/staking/operators/tips-operator",id:"farming-&-staking/staking/operators/tips-operator",title:"Operator Tips & Tricks",description:"Operators Tips & Tricks",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/tips-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/tips-operator",permalink:"/pt/docs/pre-release/farming-&-staking/staking/operators/tips-operator",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/pt/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/tips-operator.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Deregister an Operator",permalink:"/pt/docs/pre-release/farming-&-staking/staking/operators/deregister-operator"},next:{title:"Staking guide",permalink:"/pt/docs/pre-release/farming-&-staking/staking/"}},u={},c=[{value:"Create operator key (alternative, less secure way):",id:"create-operator-key-alternative-less-secure-way",level:3},{value:"Insert key to Keystore:",id:"insert-key-to-keystore",level:4},{value:"Switch domains",id:"switch-domains",level:3},{value:"Register an operator using PolkadotJS interface (alternative way)",id:"register-an-operator-using-polkadotjs-interface-alternative-way",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Running both validator (farmer) and operator nodes at the same time",id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time",level:3},{value:"Switching to another server",id:"switching-to-another-server",level:3}],m={toc:c},A="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(A,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"create-operator-key-alternative-less-secure-way"},"Create operator key (alternative, less secure way):"),(0,r.kt)("p",null,"An operator needs a key pair to participate in bundle production.\nYou can create a key using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"target/production/subspace-node key generate --scheme sr25519\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-4",src:n(5158).Z,width:"856",height:"121"})),(0,r.kt)("p",null,"Back up the key. Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"public key (hex)")," of the Keypair. The public key is part of the operator config we will be using later on ",(0,r.kt)("a",{parentName:"p",href:"https://staking.subspace.tools"},"Staking portal")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"PolkadotJS portal"),"."),(0,r.kt)("h4",{id:"insert-key-to-keystore"},"Insert key to Keystore:"),(0,r.kt)("p",null,"The key generated above needs to be added to the Keystore so that the operator node can use it to participate in bundle production."),(0,r.kt)("p",null,"To insert the key, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'target/production/subspace-node domain insert-key \\\n--base-path /tmp/node --domain-id 0 --keystore-suri "<Secret phrase>" --key-type oper --scheme sr25519\n')),(0,r.kt)("p",null,"The command above assumes ",(0,r.kt)("inlineCode",{parentName:"p"},"/keystore")," as the keystore location.\n",(0,r.kt)("inlineCode",{parentName:"p"},"suri")," is the secret phrase of the operator key."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"tmp")," folder on linux based systems will be emptied upon the system reboot. Make sure to store the keypair in a secure and permanent location.\\")),(0,r.kt)("h3",{id:"switch-domains"},"Switch domains"),(0,r.kt)("p",null,"Any ",(0,r.kt)("strong",{parentName:"p"},"Operator")," can switch domain they operate on anytime.\nIn order to switch domain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Proceed to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ol"},"Make sure to select the correct network at the top-left corner."),(0,r.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,r.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,r.kt)("inlineCode",{parentName:"li"},"switchDomain(operatorId, newDomainId)")," in the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Add your ",(0,r.kt)("inlineCode",{parentName:"li"},"operatorId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"newDomainId")," to the corresponding fields.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-24",src:n(7700).Z,width:"1754",height:"566"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only the account who registered ",(0,r.kt)("strong",{parentName:"p"},"Operator")," can swith the domain.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Stake of your ",(0,r.kt)("strong",{parentName:"p"},"Nominators")," won't be released, but will be moved to the new domain as well.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"register-an-operator-using-polkadotjs-interface-alternative-way"},"Register an operator using PolkadotJS interface (alternative way)"),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("strong",{parentName:"p"},"PolkadotJS")," to register an operator on the domain.\nTo register an operator on the domain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Proceed to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ol"},"Make sure to select the correct network at the top-left corner."),(0,r.kt)("li",{parentName:"ol"},"Navigate to Developer -> Extrinsics."),(0,r.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,r.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,r.kt)("inlineCode",{parentName:"li"},"registerOperator(domainID, amount, config)")," in the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("inlineCode",{parentName:"li"},"domainId")," to be registered on."),(0,r.kt)("li",{parentName:"ol"},"Enter the desired staking amount in the ",(0,r.kt)("inlineCode",{parentName:"li"},"amount")," field."),(0,r.kt)("li",{parentName:"ol"},"Put your public signing key at the ",(0,r.kt)("inlineCode",{parentName:"li"},"signingKey")," field.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the example below, 1 TSSC is selected for staking. 18 zeros are added because of the ",(0,r.kt)("inlineCode",{parentName:"p"},"u128")," type, so make sure to put 1000000000000000000 instead.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-5",src:n(3629).Z,width:"1742",height:"459"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to use the signing key generated on the previous ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#create-operator-key"},"Create operator key"))," step")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"minimumNominatorStake")," - in the example, it's set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1 TSSC"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"nominatorTax")," - in the example, it's set to ",(0,r.kt)("inlineCode",{parentName:"li"},"5%"),"."),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the transaction to register an operator.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-6",src:n(3005).Z,width:"401",height:"78"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to select ",(0,r.kt)("strong",{parentName:"p"},"Submit Transaction")," since the transaction needs to be signed.")),(0,r.kt)("p",null,"Once registered, the operator has to wait until the domain epoch is complete to start operating for the ",(0,r.kt)("strong",{parentName:"p"},"domain"),", participate in ",(0,r.kt)("strong",{parentName:"p"},"bundle production"),", and ",(0,r.kt)("strong",{parentName:"p"},"receive rewards"),"."),(0,r.kt)("p",null,"Once the domain epoch is finished, the operator can produce bundles from the new epoch."),(0,r.kt)("p",null,"Any ",(0,r.kt)("strong",{parentName:"p"},"operator")," can add more stake by using the same functionality."),(0,r.kt)("h2",{id:"useful-commands"},"Useful commands"),(0,r.kt)("h3",{id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time"},"Running both validator (farmer) and operator nodes at the same time"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To run both operator and validator at the same time, provide requrired flags for both roles when starting your node.")),(0,r.kt)(o.Z,{groupId:"OS",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run `\n      --chain gemini-3g `\n      --blocks-pruning 256 `\n      --state-pruning archive `\n      --no-private-ipv4 `\n      --farmer `\n      --name your_node_name `\n      -- `\n      --domain-id your_domain_id `\n      --operator-id your_operator_id `\n      --keystore-path /keystore `\n      --listen-on /ip4/0.0.0.0/tcp/40333 `\n      --bootstrap-nodes /ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp `\n      --bootstrap-nodes /ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1 `\n      --bootstrap-nodes /ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7 ")),(0,r.kt)(i.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run \\\n      --chain gemini-3g \\\n      --blocks-pruning 256 \\\n      --state-pruning archive \\\n      --no-private-ipv4 \\\n      --farmer \\\n      --name your_node_name \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --keystore-path /keystore \\\n      --listen-on /ip4/0.0.0.0/tcp/40333 \\\n      --bootstrap-nodes /ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp \\\n      --bootstrap-nodes /ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1 \\\n      --bootstrap-nodes /ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7 ")),(0,r.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run \\\n      --chain gemini-3g \\\n      --blocks-pruning 256 \\\n      --state-pruning archive \\\n      --no-private-ipv4 \\\n      --farmer \\\n      --name your_node_name \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --keystore-path /keystore \\\n      --listen-on /ip4/0.0.0.0/tcp/40333 \\\n      --bootstrap-nodes /ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp \\\n      --bootstrap-nodes /ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1 \\\n      --bootstrap-nodes /ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7 ")),(0,r.kt)(i.Z,{value:"docker",label:"\ud83d\udc0b Docker",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},'version: "3.7"\n      services:\n        node:\n          # Replace snapshot-DATE with the latest release (like snapshot-2022-apr-29)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/subspace/node:snapshot-DATE\n          volumes:\n          # Replace path/to/keystore with your actual path to keystore. \n            - /path/to/keystore:/keystore:ro\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - node-data:/var/subspace:rw\n      #      - /path/to/subspace-node:/var/subspace:rw\n          ports:\n      # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n      # occurrences of 30333 or 30433 in this file with another value\n            - "0.0.0.0:30333:30333/udp"\n            - "0.0.0.0:30333:30333/tcp"\n            - "0.0.0.0:30433:30433/udp"\n            - "0.0.0.0:30433:30433/tcp"\n            - "0.0.0.0:40333:40333/udp"\n            - "0.0.0.0:40333:40333/tcp"\n          restart: unless-stopped\n          command: [\n            "run",\n            "--chain", "gemini-3g",\n            "--base-path", "/var/subspace",\n            "--blocks-pruning", "256",\n            "--state-pruning", "archive-canonical",\n            "--listen-on", "30333",\n            "--dsn-listen-on", "/ip4/0.0.0.0/udp/30433/quic-v1",\n            "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",\n            "--rpc-cors", "all",\n            "--rpc-methods", "unsafe",\n            "--rpc-listen-on",\n            "--no-private-ipv4",\n            "--farmer",\n            "--name", "INSERT_YOUR_ID",\n            "--",\n            # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n            "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n            # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n            "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n            "--keystore-path", "/keystore",\n            "--listen-on", "/ip4/0.0.0.0/tcp/40333",\n            "--bootstrap-nodes", "/ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp",\n            "--bootstrap-nodes", "/ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1",\n            "--bootstrap-nodes", "/ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7",\n      # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n          ]\n          healthcheck:\n            timeout: 5s\n      # If node setup takes longer than expected, you want to increase interval and retries number.\n            interval: 30s\n            retries: 60\n        farmer:\n          depends_on:\n            node:\n              condition: service_healthy\n          # Replace snapshot-DATE with latest release (like snapshot-2022-apr-29)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/subspace/farmer:snapshot-DATE\n          volumes:\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - farmer-data:/var/subspace:rw\n      #      - /path/to/subspace-farmer:/var/subspace:rw\n          ports:\n      # If port 30533 is already occupied by something else, replace all\n      # occurrences of 30533 in this file with another value\n            - "0.0.0.0:30533:30533/udp"\n            - "0.0.0.0:30533:30533/tcp"\n          restart: unless-stopped\n          command: [\n            "farm",\n            "--node-rpc-url", "ws://node:9944",\n            "--listen-on", "/ip4/0.0.0.0/udp/30533/quic-v1",\n            "--listen-on", "/ip4/0.0.0.0/tcp/30533",\n      # Replace WALLET_ADDRESS with your Polkadot.js wallet address\n            "--reward-address", "WALLET_ADDRESS",\n            # Replace PLOT_SIZE with plot size in gigabytes or terabytes, for example 100G or 2T (but leave at least 60G of disk space for node and some for OS)\n            "path=/var/subspace,size=PLOT_SIZE",\n          ]\n      volumes:\n        node-data:\n        farmer-data:\n        '))),(0,r.kt)("p",null,"You should see the node start successfully and begin syncing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-28",src:n(2567).Z,width:"1306",height:"689"})),(0,r.kt)("h3",{id:"switching-to-another-server"},"Switching to another server"),(0,r.kt)("p",null,"To ensure the minimum downtime during your switch, we propose the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sync a new operator node using a throwaway key. You can generate a new key, just not insert it into your keystore."),(0,r.kt)("li",{parentName:"ol"},"Stop the original node and rename the keystore (or whatever you feel comfortable doing to prevent you accidentally starting the original node up with the original signing key)."),(0,r.kt)("li",{parentName:"ol"},"Update the keystore on the new node with the original signing key."),(0,r.kt)("li",{parentName:"ol"},"Restart the new operator node.")))}k.isMDXComponent=!0},1207:(e,t,n)=>{n.d(t,{Z:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},7700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-24-b822133034d0db2dfee16f639920c99b.png"},2567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-28-21a5dd73ef671f679b80c053023f6fe8.png"},5158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-4-96a308e746d184f1cc2596bbeea1530d.png"},3629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-5-37d32f0a7918bed82a28d07e91a0861a.png"},3005:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABOCAYAAADhPisZAAAK0mlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU9kWhs+96SGhJICAlNB7bwGkhB5AeheVkAQSSowJQcSuDI7gWFARAWVAB0EUHB2K2BBRLAwCFuwTZBBRn4MFGyrvAo8wM2+999bba52cb+3ss8/eZ91z138BIPuyhMJMWBGALEG2KDLAmxafkEjDjQACoABloA+sWWyxkBEeHgIQm53/au/vAGhqvmk5levf//+vRuFwxWwAoCSEUzhidhbC7ch4yhaKsgFA1SJ+/RXZwinuRlhZhBSIsHSK02b43RSnTDMaPx0THemDsCYAeBKLJUoDgGSC+Gk57DQkDykQYRsBhy9AOBdhDzaPxUG4FWGLrKxlU/w7wiZIvBAAMglhesqfcqb9JX+KLD+LlSbjmb6mDe/LFwszWSv/z6P535aVKZndwwgZJJ4oMBKZ5ZHzu5uxLFjGgpTQsFnmc6bjp5knCYyZZbbYJ3GWOSzfYNnazNCQWU7l+zNlebKZ0bPMFftFzbJoWaRsr1SRD2OWWaK5fSUZMTI/j8uU5c/jRcfNcg4/NnSWxRlRwXMxPjK/SBIpq58rCPCe29df1nuW+E/98pmytdm86EBZ76y5+rkCxlxOcbysNg7X128uJkYWL8z2lu0lzAyXxXMzA2R+cU6UbG028nDOrQ2XnWE6Kyh8lkEgCAc0YAccABcg9Wdzc7OnmvBZJlwp4qfxsmkM5KZxaUwB28qCZmdjZw/A1L2deRTe3pi+j5BaypyPi2Sx70ScjDkf/wUAp6uQK6g45zNGHlLFcgDOP2RLRDkzPvTUDwYQgQLyRlAH2shbwQRYItU5ATfgBfxAEAgD0SABLAFswANZQARWgNVgAygARWAH2APKQCU4CGrBMXACtIAz4AK4DK6DXnAbPABSMAxegDHwHkxAEISDyBAVUod0IEPIHLKD6JAH5AeFQJFQApQMpUECSAKthjZBRVAxVAZVQXXQz9Ap6AJ0FeqD7kGD0Cj0BvoMo2ASrAxrwUawNUyHGXAwHA0vhtPg5XAenA9vg0vhavgo3AxfgK/Dt2Ep/AIeRwGUHEoVpYuyRNFRPqgwVCIqFSVCrUUVokpQ1agGVBuqC3UTJUW9RH1CY9FUNA1tiXZDB6Jj0Gz0cvRa9FZ0GboW3YzuRN9ED6LH0N8wZIwmxhzjimFi4jFpmBWYAkwJpgbThLmEuY0ZxrzHYrGqWGOsMzYQm4BNx67CbsXuxzZi27F92CHsOA6HU8eZ49xxYTgWLhtXgNuHO4o7j+vHDeM+4uXwOng7vD8+ES/Ab8SX4I/gz+H78SP4CYIiwZDgSggjcAgrCdsJhwhthBuEYcIEUYloTHQnRhPTiRuIpcQG4iXiQ+JbOTk5PTkXuQg5vtx6uVK543JX5AblPpEoJDOSDymJJCFtIx0mtZPukd6SyWQjshc5kZxN3kauI18kPyZ/lKfKW8kz5Tny6+TL5Zvl++VfKRAUDBUYCksU8hRKFE4q3FB4qUhQNFL0UWQprlUsVzylOKA4rkRVslUKU8pS2qp0ROmq0jMKjmJE8aNwKPmUg5SLlCEqiqpP9aGyqZuoh6iXqMPKWGVjZaZyunKR8jHlHuUxFYqKg0qsSq5KucpZFakqStVIlamaqbpd9YTqHdXP87TmMeZx522Z1zCvf94HtflqXmpctUK1RrXbap/Vaep+6hnqO9Vb1B9poDXMNCI0Vmgc0Lik8XK+8ny3+ez5hfNPzL+vCWuaaUZqrtI8qNmtOa6lrRWgJdTap3VR66W2qraXdrr2bu1z2qM6VB0PHb7Obp3zOs9pKjQGLZNWSuukjelq6gbqSnSrdHt0J/SM9WL0Nuo16j3SJ+rT9VP1d+t36I8Z6BgsNFhtUG9w35BgSDfkGe417DL8YGRsFGe02ajF6JmxmjHTOM+43vihCdnE02S5SbXJLVOsKd00w3S/aa8ZbOZoxjMrN7thDps7mfPN95v3WWAsXCwEFtUWA5YkS4ZljmW95aCVqlWI1UarFqtX1gbWidY7rbusv9k42mTaHLJ5YEuxDbLdaNtm+8bOzI5tV253y55s72+/zr7V/rWDuQPX4YDDXUeq40LHzY4djl+dnJ1ETg1Oo84GzsnOFc4DdGV6OH0r/YoLxsXbZZ3LGZdPrk6u2a4nXP9ws3TLcDvi9myB8QLugkMLhtz13FnuVe5SD5pHssePHlJPXU+WZ7XnEy99L45XjdcIw5SRzjjKeOVt4y3ybvL+4OPqs8an3RflG+Bb6NvjR/GL8Svze+yv55/mX+8/FuAYsCqgPRATGBy4M3CAqcVkM+uYY0HOQWuCOoNJwVHBZcFPQsxCRCFtC+GFQQt3LXwYahgqCG0JA2HMsF1hj8KNw5eHn47ARoRHlEc8jbSNXB3ZFUWNWhp1JOp9tHf09ugHMSYxkpiOWIXYpNi62A9xvnHFcdJ46/g18dcTNBL4Ca2JuMTYxJrE8UV+i/YsGk5yTCpIurPYeHHu4qtLNJZkLjm7VGEpa+nJZExyXPKR5C+sMFY1azyFmVKRMsb2Ye9lv+B4cXZzRrnu3GLuSKp7anHqszT3tF1pozxPXgnvJd+HX8Z/nR6YXpn+ISMs43DGZGZcZmMWPis565SAIsgQdC7TXpa7rE9oLiwQSpe7Lt+zfEwULKoRQ+LF4tZsZUQgdUtMJN9JBnM8cspzPq6IXXEyVylXkNu90mzllpUjef55P61Cr2Kv6litu3rD6sE1jDVVa6G1KWs71umvy183vD5gfe0G4oaMDb9utNlYvPHdprhNbfla+evzh74L+K6+QL5AVDCw2W1z5ffo7/nf92yx37Jvy7dCTuG1IpuikqIvW9lbr/1g+0PpD5PbUrf1bHfafmAHdodgx52dnjtri5WK84qHdi3c1bybtrtw97s9S/dcLXEoqdxL3CvZKy0NKW3dZ7Bvx74vZbyy2+Xe5Y0VmhVbKj7s5+zvP+B1oKFSq7Ko8vOP/B/vVgVUNVcbVZccxB7MOfj0UOyhrp/oP9XVaNQU1Xw9LDgsrY2s7axzrqs7onlkez1cL6kfPZp0tPeY77HWBsuGqkbVxqLj4Ljk+POfk3++cyL4RMdJ+smGXwx/qWiiNhU2Q80rm8daeC3S1oTWvlNBpzra3NqaTludPnxG90z5WZWz288Rz+Wfmzyfd368Xdj+8kLahaGOpR0PLsZfvNUZ0dlzKfjSlcv+ly92MbrOX3G/cuaq69VT1+jXWq47XW/uduxu+tXx16Yep57mG843Wntdetv6FvSd6/fsv3DT9+blW8xb12+H3u67E3Pn7kDSgPQu5+6ze5n3Xt/PuT/xYP1DzMPCR4qPSh5rPq7+zfS3RqmT9Oyg72D3k6gnD4bYQy9+F//+ZTj/KflpyYjOSN0zu2dnRv1He58vej78Qvhi4mXBP5T+UfHK5NUvf3j90T0WPzb8WvR68s3Wt+pvD79zeNcxHj7++H3W+4kPhR/VP9Z+on/q+hz3eWRixRfcl9Kvpl/bvgV/eziZNTkpZIlY01IAhQw4NRWAN4cRXZwAALUXAOKiGV09bdDMt8A0gf/EM9p72pwAqGkHIBbBKVlUMaVBkKGwHoApOYTII9jeXjb+ZeJUe7uZXCQNRJq0T06+mQQAlwzA157JyYnSycmvJTPfBedDZ/T8lOmNIRpoSudAA6NbwN9tRuv/qce/z0BWwV/mfwJHChVbDtPk/gAAAGJlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA5KGAAcAAAASAAAAUKACAAQAAAABAAABkaADAAQAAAABAAAATgAAAABBU0NJSQAAAFNjcmVlbnNob3Tg3lotAAACPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Nzg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NDAxPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Ct+LN4UAABcMSURBVHgB7Z0JmBRFlscf0NDcIDR3NyDQXM0h54LIjRxyiKLsKCAqOg4znrMz4+zst7uzuuuuOqijszMCyiGHct80pxwKtFxCt9wsct+nzdU0yMY/iiiStKsqO6uqO2v4v/66KiszMiLyly/ixXsRWVXgUuaFm0IhARIgARIgARcECro4h6eQAAmQAAmQgCZAI0JFIAESIAEScE2ARsQ1Op5IAiRAAiRAI0IdIAESIAEScE2ARsQ1Op5IAiRAAiRAI0IdIAESIAEScE0gzvWZPJEE7lICxVs0ukuvnJf990bg8qbvwr4keiJhI2QGJEACJHD3EqAncvfee155mAQiMYoLswo8nQRcEYikN01PxNUt4EkkQAIkQAIgQCNCPSABEiABEnBNgEbENTqeSAIkQAIkQCNCHSABEiABEnBNgEbENTqeSAIkQAIkQCNCHSABEiABEnBNgEbENTqeSAIkQAIkQCNCHSABEiABEnBNgEbENTqeSAIkQAIkQCNCHSABEiABEnBNgEbENTqeSAIkQAIkQCNCHSABEiABEnBNgEbENTqeSAIkQAIkQCNCHSABEiABEnBNgEbENTqeSAIkQAIkENO/J7J9/RHJSDsk+7adlBOHLsjFC1n6jpYsEy+VkspIrZSK0rhNkjRsXY13mgQ8RYC666nbwcqEQaDApcwLN8M4P19OXTFzuyybuk2OHzjvqPzKNcpKt4Ep0vnRho7SMxEJBCNgftDHzY9SUXeDkeWxvCIQjg7b6xhTRuTAztMy+b21sjfjhP06HH2u07iSPPnr+6VG/QRH6ZmIBHIi4KYBUndzIsl9+UXAjQ4HqmvMzImsX7ZP3hw227UBAQAYH+SBvCgkkFcEqLt5RZrl5AeBmJgTQSMc+a/LI8Ln5o83/Xm17lYrInkyExIIRIC6G4gM9/+9EPC8J4IwwKh//zLivJEn8qaQQLQIUHejRZb5eomA540I5kDgPURakCfyppBAtAhQd6NFlvl6iYCnjQhWsridRE9uUlnwH0yQN8qgkECkCVB3I02U+XmVgKfnRLCM16289HYv/6mpk7bI3vRjsif9uH+f2UAZXPpraPA9UgSou5EiyXy8TsCznggexnL6HAgg270OGA7z32vQfdJrULMc7wXKQFlO5NKlS3LgwAG5fPmyk+T+NFeuXJEVK1fKxYsX/fvC3di0+VvZsnWr42xu3rwpN278mGP6GzduCI6HKwcPHZKlyyKzAMJtXdZv2CD71T3KT/Gi7l67dk1wf86dO5drNGvXrpPDh521ESeZ51ZPoLfQ0Zz/c9ZpJ/XwSprc8vBKvU09POuJ4El0p9JrcDNlJO7zGY2J3+rTUm+940Ny48pSJ0hoC2UFe6r9h8xMGTtuvJw8edJfpSpVqsjTTw2RkiVL+vcF2oDxWLb8S6mbXNdR+kD5WPcvV/kVLFRQ7mvaVO9e/dXXUq9uXalUqaI1mX97+oxZsn//9/Lb3/yTf5/Z+Lc//of0fughub9tG7PL1fvGjZtk0+bN8kC7+6VYsWKu8gj3JHBuft99UrNGjXCzcn2+l3QXHe+MmbNka3q6/3qKxheVoUOHSPWkJP++YBuLly6Vzp06SWJiZL75wa4nBw4elBMnTkjrVq1yrMYf33hDfvwxZ2NRtkyZHHU6x4w8sjM9PUPii8br9ooq2Xl4pJqOq+FZI4KvMnEqMBIQGBKI1YDoHSFeQpUFA5J1NUuefXqo6qQrydGjx2T6zJkyRu1/+cVfhcg9OodfevGX/ozhRSxeskSKKsUMZET8iaO48XC/vtK1a5d8MyBRvLRcZR1Kn6yZRVt3Fy9ZKhnffScDHn1U6tSuJZmZF2VhaqqM/uRT+cPvX8+Xe2XXk+3bdwg8yEBG5Llnn5Ebt4zI9OkzpVSpktKjR3eNMb5IvBVnTGyvXL1aypcr5zcidh4xcRGWSnrWiOC7sAIJPA/T+JDG6mW4MSTBysIICB5Ixw4dpHbt2rpKdesmy/AXfi5Hjx3Tn/9v3z6ZPPkLef13v5EiRYrofWlp30jaN+vl1Vde0p/xcuToEZk6bbqcPXdWqlWtKr169pAat0bMkz+fohp0UR3y2r1nj5QuVUoGDxok6RkZsnbdOilYsKC0aN5c+vR+SOc3b/4CKVy4sLR/oJ387eNR/n1Lly6Xf/nD7/VnNy+oR/HixQQhuJ27dklcoTjp1KmjLgf5wWClLlos3367Ra5mXZUqlSvL4489JhUqJGgvZM2adfLaqy/roo8dOy4LFi4UjDRLlSylr3f2nLky9KnBUr16dQlVFjJZB47q//yF89q7gMdUsWIFnT9CNDNnzZZdu3frz926dNHv+f0STJ/yUnfBYZ/STQx8mjfzDbBKly6t+A+RPXv36tH99evX5e13/iQDHx8gycnJGt3x48eVkRkjGKiULVtW70MId8zYcfL9/v1yj9rX/oEHpFWrlvrY2nVpsnHTJmmU0lC++nqN3tevbx+tn3PmzNN6UkPd7yGDB0l8fPwdegIvCWFZtLM3//OtO3RNZ6ReTBvB56KqjeAaat17rzms9QgDqAs//KCvd9ATT0i9enUF3vr6jRu1Lpe7p5w80v9hqVnT56G+9T9vS/t27WSral/wgqCfAwY8IrVr1dL5gsH0GTPlhGr78NzatGktXW/pF9rGrNlzFcM9ut5oy0/87B+VcSulzz1/4YLMmzdf9n3/vW4/dVWE4JH+/SQuLk7ee/8DOXP2rC4T1wuPEGVZ2w3Cd/Pmz5edO3dJ1rUsrfd9+/SWcsrwQELVXSfKwxfPzomYL1PMiQUMBQyH+benwXH7HIk9jfVzsLLQeVesWFE1jq9ljYoNY14Ecs8990hKw4Z6+1rWNd1QrC73latXlFLfaQjnzJ2nDFEt6d2rlxoRZmpPBqEyyAXVSaIhQtH69e0rV5Xn89ePP5atW9OV4eitRy3r0tJ04/elvyA/qEYDxe3Tx2dYGjdu7DcyOlMXL6jHBtXwrmZlyUM9e6rrLCuLFi+WLPUZAsO4Zu1a6dSxgzIeAzSPcePH62OXL1/RnT0+oNP55NMxcvLUKWU8ekrTpk1k6vTpmlN2drZOH6osdC7zFyxQnUh1ncfp06f1CPrq1av6/M+/mKJH2fe3bStdOneWL1es9N8fnSCfXoLpU17qLi6/luoUj6nBDnTv1Cnfc1EY6EB3S5QooTvBy1cuq87qmp9WdvZ1fZ+uX7/h34d7jgFEvz59pIwKIc2eqzpRNdiB4F6jI874bpsOi1ZISNAd8LTpM7SedFaDEBgf3B9f+tt60rJFc7m3Zk09SOrbt7cK+foMmU7o8AV6hDBqltKLXj16aKO5adNmWbFqlTRRbQIdMOTTsWP984Jox4uU9w5j1L1bN4FOzp0731/iyNGfiBQoIDBIzZs303X/Tl0fBAOhHTt3aKMCw3JMGYFJkz/XxzCwGa3O3b//gGBQ00JdX3pGukyZOk0f7979Qc0dfQquFx6Jtd0g0TTVTtAGce6DXbuqwedRGTX6U38bDFV3XVAevnjWEwmXQZ0mVXJcjeUmX4zcxowZq8MACAWUKV1GWrduqWL/7XSn7zTPli1aKAPRRydv0KC+vPOnEZKh4qPt1BwCBPFdjGggaLBzVEMdPOhJqVq1iqCxISxx5MhRSa5TR6fBC0Z2mBfBqKmm6mzRWYcr6Fww31NANSKM6N4d8Z5qNDt1OYcOH741MvsHKVSokG6EMBR22blrt+6IXvvFK5KQUF4fRr6pixbdkTRYWZjfaNiggTz6SH99TsOGDdSo+V3ZvXuP1KlTW+CxwUBhDgZSo3qS6MavP8XuSyR1t4fqtM6cOaPDRQgZwYA0b9ZMOnRor/S4tGNIGDQ9+8zTWifQuY147335Wg2qjPeCjJ4f9qzyYosrnagpI9SIG4bd6Dbu2WGlO3aBl4H5ReiVmd+zp3HyGZ7ECz9/XtcP6eFxDH/hBf88DryxUapzh0FNTPTN7cDAPNSrp84ec3iz5swRDOoKKr2HMWipPP/69evp/xTlZaEMCNr9g8rwGL3Ozr4mK1et1sfg4cETefGXw/V1YScMxrZtPgPUKCVFGyQYj5yuF4M1tHMM4Ay75OQ68sGHH2m9b9y4kS4nUN0Rwchr8awRwde5Z57zjTjtULDqKlA4C2n1qizLxLr9fPtnlBVM0Ln/+rVXtQKiM12/fqNehbRLdZRQXKcCw2EEozk0TIwyjFRVbrGREiWK602jqOjQ4VYj/BBtSaxWzd8YEc6Ad3T2rG9VTxOlxFuVh/DWf78taFhQaqtRM3U7cuSIrq+pP/bXr1fvJ0YkUFnw6rCSCP9mlGfyPqzyLlGyhP5YXxk5IwiRwXPMb/GS7sLQI4yEUM+2bdv1vUv75hvZsmWr0ulXdMjJCS/cO+ggBIwRotm2/fYzVjBOMCAQDAwgFSv4wo7YhscMzzlaAsNg6ocyEpQ3hA59/oKFqtxMFXr2tTN0+EagL0bM9vnz5/WCA3T885QXjAUJDdRABuHAkiV9i2jQTuElr/7qK+2FoU8wcvjQYd1eYBiN4FwTTjT7Ar2b/gCDNyMVFEe0fRhaY0RMfZHGbKPuNCKGmnrH74EENCLKQKRa0r6sngkx8yK5NSDIBmU5ESgG/jHCmqYm+LZs3aIbpzkX3oMRy6bZ9ZMGizmN7GxfaMefKEobhQvH6RCZPXsTpoKhMIKOxyrWjhmdCUZZ36zfINt37NBhBKyEev65YdZT1CS/Mng37jR4pixrwkBlGWOJxmNizTgPMeukpEQ/N2u9cdxaV3zOD/Gi7sLrwOo7/KMDRKgJ3mLjRik+RLdVV26qP7vYOdt1t2CB/DXeVgOCusOLxbL6CgkVVCebJBis2Jc3x1n03K43mPMEp3QVKcCiFfw/P2yY9nBGjR4tGMhA72FsYDRNmDtbDfIwj+hWsq/5+gM770Jxhfw6j7yD1d1t2W7Py987H6TW+EGp3IobA4IygpV1/PgJeefdET9ZJ5+c7Jtk/1FNghWJL6Krag3rnFYhBLvsV3FhI3CXEeO3eh/mmNt3awzbngdGK5gIP3Pm7B2HMFqDOF3uiUnF8uXLS/+H++nVPZ07dtTPZcCFtwo6ehgC69LSlSpG7VQwskXjRHgOIUDz/5iah8FSZjPSw6S9kXPnzueJp2bKC/QeTJ8CnRMN3cWg5v0PPhQ852GVOrcWiNxU3p7prE6cvP3zCmfVxK9drLqLY/iMRRWREut8YiTyROgOAx4sbEE4tPWtRQBO8sbENgZ3WC32nArRYRUb9BEeXKYKd8GA9FXzlBg4Pdyvr7RQ4UEj0Hu0M3h+RhCCxhJ8q5hBknUftqtV80UjDh485D+EOScYKRhCL4p7kxnlq8EvEi75PMNRKR++nqon0q1PpMM7MQIvBY00kKCsQIIlsxhBT5w0Wa/uwMgDDW7BglTdyWHiuUiRwvr0pUuXSU81sXfm7BkdNoDiWQUTi1hhkVA+QYXDlulJzRQV5w9XMAorXqy4ClFs0cbAxHyt+dZVcVV0GB+PHKUbFVxkPOQ0a/ZsPcdTuXIla/KA25jMhlv99NCndDjulDKEGMWVuuXqmxPRgDFpidVoq1Yrt//SZf2wmDnu5B2xeyxoAHPkBc8H3DBvhNgyRpmY5MQyz3hlyOdYJkad5B+tNF7RXegFwompamFEnPJ6scQXk7hYrABJVqsMce8wx7dhwyZJSkzSneXC1DvnrZAW93zR4iXKc2nkm5tTYdj+/frhUNiCsBc61c1qxV89VScTDgsnY4R1UGc8JAmPeOq0GY6zO3XqpHz0v3+Vtm3aSPv2D8gZpeOoH1YFmuefdqiVi7Vq3atWVp1Qc0Nr/XnDQKPdjxv/mTYweDQAbQDndlB5QXC9WFGIVZ1JiYn+c7GBkBkGSJifgbeHlZK4H2i7uF9eFM8aETz8h18kdPrUutWAYGWWCW8B+l71dSeBnh1BGcEeNERD/IVybSdMnCifqX8jmBh7Rj03AoHS9+zeXZaoDu5vI0fq+GWD+vW1kpj0eO+kRu3o9KCQCNMMfPwx3UHimN0dx76cRFVHiz19586d9HwDyv+vN9/4yalQzl8NHy7jP/tMJk6e7D+O5YlYOGDEnu/t/b4teCATlEHFJCUE1zH4ySf1JLupmy+lyFNDBuu4+b59399azdZA/vzRX8zhgNds8umpngXAKAzLhDFSRYfXtUtnbUCQybPPDJVxn01Q9Zmk82zVsqVgpZHK2F9Gfmx4RXdx7dCxL6ZM1Ys0DAt0chgEmIl1pBmrVtiNnzBBJ8ECEKwUtOoClpcjtAOjjvuADtYs8XWK2+RnT4+5tVXq2YkZ6tmrDmrpsHkGxNQ31LvJ15qun/IQxo+foNsj9mM571dr1gTUDZNHASkglZWH9WC3rrL8yxVqiXmazhYLPMxCGqxQm690EroMlpgg3/yt7yFn9AUIe30xZYpeSYiTYRR+dmvBDD63VSHFPXv26iXTw57BYgXsvS3YN2HiJH87xdwp9gWa77DW/XYuebfl6V82xJfYTXxX3fgoyuDftnP83VkI5WCCuXz5cjrmb68WwgdwO80EnP04PiMNOsZIjLbs+SNvPKFsQhT24+YzPCuELOCNhEprzrG/IxyHsszIzH4c8Wd4XuhoTKhsxcpVKla9XP759d8FZWTPC5/x1D+YmQZjTYPrwX6752dNE8ltJ78K5zXdxcDl1KnTimFx/ZxFTjzAuJjyaAsVKpjTYb0P+o0J9JzuQ8CTHB5ACAn6GMm8UV/Mz9nn3hxWSesdrheG0ypO2jr0EufBo8hJcL2BjiE92hfuG1ZgRlqc6LDTMj3rieAC8MWIaYv2uv4m31AQ8HO5ufnyRXSY1aoF/joPKH8wA4L6IE00DIjJ24lRgFKaOYVQjAIdD9VhY1UXvmcMk5NV1UgsM/Oifm6mqRq1hWKUU5nBzolGI8upDrnZ5zXdhV5UqRJ8DiMYY3Pt0dJd5B+sQzXl5/Y93PoGYuKkrYfSy1DXC8Pn1vjlllM46e80r+HkFKVz8ZvoBQra/L0IlIU8kTclOgTQyF55+WV5WD04majivk2bNNZLTQeqifG7Rai7d8udvruv09PhLHNrIvkToybPF97sKvx5XEOD77khkJtQAHU3N2SZNq8I5EaHQ9XJ854ILgCdPTr9SHgkyIMGJJRa8HikCFB3I0WS+XiVgKfnRKzQ0BgrJZbWP2nr9tcOMQeCEEON+gnWrLlNAlElQN2NKl5mns8EYiKcZWeElS/45Tiny3+xjLfbwJRcTaLby+RnEjAEwgkFUHcNRb7nJ4FwdNhe75g0IuYi8Aty+AEg/H4Dvn7bfHsqvrsIXz2BJ4fx4Few50BMXnwnAacEItEAqbtOaTNdNAhEQodNvWLaiJiL4DsJ5CWBSDbAvKw3yyIBQyCSOhwTE+vmwvlOAiRAAiTgLQI0It66H6wNCZAACcQUARqRmLpdrCwJkAAJeIsAjYi37gdrQwIkQAIxRYBGJKZuFytLAiRAAt4iQCPirfvB2pAACZBATBGgEYmp28XKkgAJkIC3CNCIeOt+sDYkQAIkEFMEaERi6naxsiRAAiTgLQI0It66H6wNCZAACcQUARqRmLpdrCwJkAAJeIsAjYi37gdrQwIkQAIxRSBmfk8kpqiysncFAfMldnfFxfIiSSAAAXoiAcBwNwmQAAmQQGgC/Cr40IyYggRIgARIIAABeiIBwHA3CZAACZBAaAI0IqEZMQUJkAAJkEAAAjQiAcBwNwmQAAmQQGgCNCKhGTEFCZAACZBAAAI0IgHAcDcJkAAJkEBoAjQioRkxBQmQAAmQQAACNCIBwHA3CZAACZBAaAI0IqEZMQUJkAAJkEAAAjQiAcBwNwmQAAmQQGgC/w/zX0lg9vhbHgAAAABJRU5ErkJggg=="}}]);
"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5920],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),o=a(7294),r=a(6010),i=a(2466),s=a(6550),l=a(1980),p=a(7392),d=a(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function u(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,p]=k({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=l??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==s&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(f,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},9363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162),s=a(614);a(9960),a(1207);const l={title:"Register an Operator",sidebar_position:1,description:"Operators Setup guide",keywords:["Operator","Guide"]},p=void 0,d={unversionedId:"farming-&-staking/staking/operators/register-operator",id:"version-latest/farming-&-staking/staking/operators/register-operator",title:"Register an Operator",description:"Operators Setup guide",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-latest/farming-&-staking/staking/operators/register-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/register-operator",permalink:"/pt/docs/farming-&-staking/staking/operators/register-operator",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/pt/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/register-operator.mdx",tags:[],version:"latest",sidebarPosition:1,frontMatter:{title:"Register an Operator",sidebar_position:1,description:"Operators Setup guide",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Operators Guide",permalink:"/pt/docs/category/operators-guide"},next:{title:"Deregister an Operator",permalink:"/pt/docs/farming-&-staking/staking/operators/deregister-operator"}},c={},u=[{value:"Check the list of the available domains:",id:"check-the-list-of-the-available-domains",level:3},{value:"Create operator key (recommended way)",id:"create-operator-key-recommended-way",level:3},{value:"Start the domain operator node",id:"start-the-domain-operator-node",level:3},{value:"Register an operator on domain",id:"register-an-operator-on-domain",level:3},{value:"Register an operator using Subspace Staking interface (recommended)",id:"register-an-operator-using-subspace-staking-interface-recommended",level:4},{value:"Checking your operatorId",id:"checking-your-operatorid",level:3}],m={toc:u},k="wrapper";function h(e){let{components:t,...l}=e;return(0,o.kt)(k,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, the domain chain does not support syncing from other operator nodes; it needs to be deterministically derived from the consensus chain block by block.")),(0,o.kt)("h3",{id:"check-the-list-of-the-available-domains"},"Check the list of the available domains:"),(0,o.kt)("p",null,"In order to participate in block production, operator needs to register on a specific domain."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Any account with the ",(0,o.kt)("strong",{parentName:"p"},"minimum operator stake")," can become an operator.")),(0,o.kt)("p",null,"To check the list of available domains:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Proceed to ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"PolkadotJS")),(0,o.kt)("li",{parentName:"ol"},"Make sure to select the correct network at the top-left corner."),(0,o.kt)("li",{parentName:"ol"},"Go to Developer -> Chain state\n",(0,o.kt)("img",{alt:"Staking-1",src:a(8576).Z,width:"1727",height:"343"})),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"selected state query")," and choose ",(0,o.kt)("inlineCode",{parentName:"li"},"domainRegistry")),(0,o.kt)("li",{parentName:"ol"},"Exclude ",(0,o.kt)("inlineCode",{parentName:"li"},"option")),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," to query the chain state.\n",(0,o.kt)("img",{alt:"Staking-2",src:a(3538).Z,width:"1750",height:"409"})),(0,o.kt)("li",{parentName:"ol"},"Review the list of available domains\n",(0,o.kt)("img",{alt:"Staking-3",src:a(5006).Z,width:"1681",height:"356"}),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the example above the number 3 corresponds to the domainId.\nThe example is not Stake Wars specific, the operator is responsible for finding out the correct domain ID they want to operate on. ",(0,o.kt)("strong",{parentName:"p"},"Stake Wars are using the domain with ID 1"),".")))),(0,o.kt)("h3",{id:"create-operator-key-recommended-way"},"Create operator key (recommended way)"),(0,o.kt)("p",null,"An operator needs a key pair to participate in bundle production."),(0,o.kt)(r.Z,{groupId:"PreferredMethod",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},"1.  Start a node on a developer chain by running `./target/release/subspace-node --chain dev -- --domain-id 0 --keystore-path tmp/keystore --rpc-cors all`",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},':::tip\nYou can use any chain to generate a keypair, we recommend using a `dev` chain for simplicity.\nYou can adjust the `--keystore-path` if you prefer to generate the keys in a different location.\\\n:::\n\n2.  Open another terminal and use the `curl` command to make an **RPC** call to your node. This will generate a new key in the `--keystore-path` location you specified earlier.\n\n<Tabs groupId="OS">\n  <TabItem value="windows" label="\ud83d\uddbc\ufe0f Windows" default>\n    <CodeBlock>\n      {`curl.exe -X POST http://127.0.0.1:9945 \\`\n      -H "Content-Type: application/json;charset=utf-8" \\`\n      -d \'{\n      "jsonrpc":"2.0",\n      "id":1,\n      "method":"author_rotateKeys",\n      "params": []\n      }\'`}\n    </CodeBlock>\n  </TabItem>\n\n  <TabItem value="macos" label="\ud83c\udf4e macOS">\n    <CodeBlock>\n      {`curl -X POST http://127.0.0.1:9945 \\\\\n      -H "Content-Type: application/json;charset=utf-8" \\\\\n      -d \'{\n      "jsonrpc":"2.0",\n      "id":1,\n      "method":"author_rotateKeys",\n      "params": []\n      }\'`}\n    </CodeBlock>\n  </TabItem>\n\n  <TabItem value="linux" label="\ud83d\udc27 Ubuntu">\n    <CodeBlock>\n      {`curl -X POST http://127.0.0.1:9945 \\\\\n      -H "Content-Type: application/json;charset=utf-8" \\\\\n      -d \'{\n      "jsonrpc":"2.0",\n      "id":1,\n      "method":"author_rotateKeys",\n      "params": []\n      }\'`}\n    </CodeBlock>\n  </TabItem>\n</Tabs>\n'))),(0,o.kt)(i.Z,{value:"docker",label:"UI (using Docker)",mdxType:"TabItem"},"1.  Make sure to have [Docker installed](https://www.docker.com/get-started/). You can run `docker -v` in the terminal of your choice to make sure it's installed. 2.  Start a developer node by running `./target/release/subspace-node --chain dev -- --domain-id 0 --keystore-path tmp/keystore --rpc-cors all`",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip\nYou can use any chain to generate a keypair, we recommend using a `dev` chain for simplicity.\nYou can adjust the `--keystore-path` if you prefer to generate the keys in a different location.\\\n:::\n\n3.  Start a local polkadot interface portal by running a docker contrainer.\n\n`docker run --rm -it --name polkadot-ui -e WS_URL=ws://0.0.0.0:9945 -p 80:80 jacogr/polkadot-js-apps:latest`\n\n4.  Proceed to the browswer and type `localhost` in the search bar. You should be taken to the polkadot portal.\n\n![RPC-2](/img/doc-imgs/operators-staking/RPC-2.png)\n\n5.  Navigate to `developer` -> `rpc calls`\n\n6.  Select `author` in `call the selected endpoint` and pick a `rotateKeys()` in the dropdown.\n\n![RPC-3](/img/doc-imgs/operators-staking/RPC-3.png)\n\n7.  Press on `Submit RPC call`.\n\n8.  You will see a newly generated key on the screen. The key will also be written in a `keystore` location you specified earlier.\n\n:::tip\nYou will use this key in order to register an operator later.\n:::\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You have successfully generated an operator key, congratulations!")),(0,o.kt)("h3",{id:"start-the-domain-operator-node"},"Start the domain operator node"),(0,o.kt)("p",null,"The domain operator node is running with an embedded consensus node, thus you need to specify the args for both the consensus node and the domain operator node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subspace-node [consensus-chain-args] -- [domain-args]\n")),(0,o.kt)("p",null,"Example:\nStart a node as operator on ",(0,o.kt)("inlineCode",{parentName:"p"},"gemini-3g")," chain:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You need to wipe (",(0,o.kt)("inlineCode",{parentName:"p"},"purge-chain"),") and sync your node from genesis block, since you need to sync both consensus and domain chains.\nYou do not need to wipe any existing plots.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Ensure you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"your_domain_id")," with your domain identifier in the command and ",(0,o.kt)("inlineCode",{parentName:"p"},"your_operator_id")," with your operator","_","id. If your keystore is located in a different folder, adjust the ",(0,o.kt)("inlineCode",{parentName:"p"},"--keystore-path")," accordingly. Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," is optional.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can ignore setting up ",(0,o.kt)("inlineCode",{parentName:"p"},"your_operator_id")," while you're syncing your node. Make sure to set it after syncing and registration.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Stake Wars are using the domain ",(0,o.kt)("strong",{parentName:"p"},"Nova")," with ID ",(0,o.kt)("strong",{parentName:"p"},"1"),".")),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node `\n      --chain gemini-3g `\n      --name your_node_name `\n      --base-path your_path_to_node_data `\n      -- `\n      --domain-id your_domain_id `\n      --chain gemini-3g `\n      --operator-id your_operator_id `\n      --bootnodes /ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp `\n      --bootnodes /ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1 `\n      --bootnodes /ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7 `\n      --listen-addr /ip4/0.0.0.0/tcp/40333 `\n      --keystore-path /keystore")),(0,o.kt)(i.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node \\\n      --chain gemini-3g \\\n      --name your_node_name \\\n      --base-path your_path_to_node_data \\\n      -- \\\n      --domain-id your_domain_id \\\n      --chain gemini-3g \\\n      --operator-id your_operator_id \\\n      --bootnodes /ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp \\\n      --bootnodes /ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1 \\\n      --bootnodes /ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7 \\\n      --listen-addr /ip4/0.0.0.0/tcp/40333 \\\n      --keystore-path /keystore")),(0,o.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node \\\n      --chain gemini-3g \\\n      --name your_node_name \\\n      --base-path your_path_to_node_data \\\n      -- \\\n      --domain-id your_domain_id \\\n      --chain gemini-3g \\\n      --operator-id your_operator_id \\\n      --bootnodes /ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp \\\n      --bootnodes /ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1 \\\n      --bootnodes /ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7 \\\n      --listen-addr /ip4/0.0.0.0/tcp/40333 \\\n      --keystore-path /keystore")),(0,o.kt)(i.Z,{value:"docker",label:"\ud83d\udc0b Docker",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},'version: "3.7"\n      services:\n        node:\n          # Replace snapshot-DATE with the latest release (like snapshot-2022-apr-29)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/subspace/node:snapshot-DATE\n          volumes:\n          # Replace path/to/keystore with your actual path to keystore. \n            - /path/to/keystore:/keystore:ro\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - node-data:/var/subspace:rw\n      #      - /path/to/subspace-node:/var/subspace:rw\n          ports:\n      # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n      # occurrences of 30333 or 30433 in this file with another value\n            - "0.0.0.0:30333:30333/udp"\n            - "0.0.0.0:30333:30333/tcp"\n            - "0.0.0.0:30433:30433/udp"\n            - "0.0.0.0:30433:30433/tcp"\n            - "0.0.0.0:40333:40333/udp"\n            - "0.0.0.0:40333:40333/tcp"\n          restart: unless-stopped\n          command: [\n            "--chain", "gemini-3g",\n            "--base-path", "/var/subspace",\n            "--port", "30333",\n            "--dsn-listen-on", "/ip4/0.0.0.0/udp/30433/quic-v1",\n            "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",\n            # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n            "--name", "INSERT_YOUR_ID",\n            "--",\n            # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n            "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n            # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n            "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n            "--listen-addr", "/ip4/0.0.0.0/tcp/40333",\n            "--bootnodes", "/ip4/3.87.28.170/tcp/40333/p2p/12D3KooWGHtULvhdKMZtzigSK1438uWXPj9rBQHVzTaKMWv1WRXp",\n            "--bootnodes", "/ip4/140.82.45.36/tcp/40333/p2p/12D3KooWJxB2PVzyNqZywoCWAMLGhKr2LCbFMXbAPzUPQZon7yt1",\n            "--bootnodes", "/ip4/167.179.116.135/tcp/40333/p2p/12D3KooWHsRae3ip2uQAUPtpMcStHGGw777SJT3nu9maFmtsGry7",\n            "--keystore-path", "/keystore"\n          ]\n          healthcheck:\n            timeout: 5s\n      # If node setup takes longer than expected, you want to increase interval and retries number.\n            interval: 30s\n            retries: 60\n      volumes:\n        node-data:\n        '))),(0,o.kt)("p",null,"You should see the node start successfully and begin syncing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-13",src:a(7469).Z,width:"1304",height:"730"})),(0,o.kt)("p",null,"To view the stored node information navigate to:"),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},"FOLDERID\\_LocalAppData e.g.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`C:\\Users\\Alice\\AppData\\Local`\n"))),(0,o.kt)(i.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},"$HOME/Library/Application Support e.g.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`/Users/Alice/Library/Application Support`\n"))),(0,o.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},"$XDG\\_DATA\\_HOME or /home/alice/.local/share e.g.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`$HOME/.local/share`\n")))),(0,o.kt)("h3",{id:"register-an-operator-on-domain"},"Register an operator on domain"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's crucial to fully sync your node before registering as an operator. Please follow the commands in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Start the domain operator"))," node section and only register as an operator once your node is fully synced. If many operators are registered but their nodes are still syncing or offline, it can adversely affect the speed of block production in the domain.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Prefer a video? Expand for our installation video using PolkadotJS interface."),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/w2U3CUJfI2c?si=mb-BRykmlrc49PPf",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))),(0,o.kt)("h4",{id:"register-an-operator-using-subspace-staking-interface-recommended"},"Register an operator using Subspace Staking interface (recommended)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Proceed to the ",(0,o.kt)("a",{parentName:"li",href:"https://staking.subspace.tools"},"Subspace Staking portal")," and connect your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-1",src:a(3693).Z,width:"1358",height:"898"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select the wallet you would like to connect. Both ",(0,o.kt)("strong",{parentName:"li"},"Subwallet")," and ",(0,o.kt)("strong",{parentName:"li"},"PolkadotJS")," wallets are supported.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-2",src:a(142).Z,width:"450",height:"350"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enter your password to give an access to your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-3",src:a(646).Z,width:"390",height:"633"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select the account you'd like to use form the dropdown menu. You will see both available and locked (staked) token balances for each account.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-4",src:a(9459).Z,width:"604",height:"119"}),"\n5","."," Proceed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stake as a pool operator")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-5",src:a(9208).Z,width:"1531",height:"900"}),"\n6","."," Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"domainId")," you would like to be registered on. Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Minimum Operator Stake"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Amount to Stake"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Nomination Tax")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Signing key")," and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-6",src:a(3625).Z,width:"1532",height:"838"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to use the signing key generated on the previous ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#create-operator-key"},"Create operator key"))," step.")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Approve the request in the pop-up window.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-8",src:a(1314).Z,width:"390",height:"626"}),"\n8","."," Congratulations, you're now registered as an ",(0,o.kt)("strong",{parentName:"p"},"operator"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-8",src:a(2653).Z,width:"1427",height:"785"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It can take up to 10 minutes for the operator to be registered and appear on the page.\nYou can check if the operator was created successfully by following the ",(0,o.kt)("a",{parentName:"p",href:"#checking-your-operatorid"},"steps"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can view some additional actions by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," next to your operator.\nYou can increase your stake, withdraw some stake and de-register your operator from there.")),(0,o.kt)("p",null,"If you prefer to use a native PolkadotJS, or faced any issues in one of the steps above, you can try using ",(0,o.kt)("a",{parentName:"p",href:"tips-operator#register-an-operator-using-polkadotjs-interface-alternative-way"},"PolkadotJS interface guide")," to register an operator on the domain."),(0,o.kt)("h3",{id:"checking-your-operatorid"},"Checking your operatorId"),(0,o.kt)("p",null,"There are two ways to check your operatorId:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can use PolkadotJS ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-7",src:a(8564).Z,width:"1761",height:"633"}),"\n2","."," Browse the ",(0,o.kt)("strong",{parentName:"p"},"recent events")," and you should see ",(0,o.kt)("strong",{parentName:"p"},"domains.OperatorRegistered")," event."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-8",src:a(7921).Z,width:"849",height:"166"}),"\n3","."," Click on the dropdown arrow to view the ",(0,o.kt)("strong",{parentName:"p"},"domainId")," and ",(0,o.kt)("strong",{parentName:"p"},"operatorId"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Alternatively, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://subspace.subscan.io/"},"Subscan")," which is a little easier to navigate for this job."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subspace Subscan"))," portal."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Blockchain")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Extrinsics"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-9",src:a(8874).Z,width:"1203",height:"341"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom of the page to view all recent events, search for ",(0,o.kt)("inlineCode",{parentName:"li"},"register_operator")," event.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-10",src:a(1074).Z,width:"1204",height:"396"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Extrinsic ID")," for the desired event.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to ",(0,o.kt)("inlineCode",{parentName:"p"},"Parameters")," and ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"signing_key")," corresponds to your signing key."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-11",src:a(5212).Z,width:"1163",height:"572"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Scroll to ",(0,o.kt)("inlineCode",{parentName:"li"},"Events")," and click on dropdown arrow for ",(0,o.kt)("inlineCode",{parentName:"li"},"domains(OperatorRegistered)"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-12",src:a(2610).Z,width:"1198",height:"567"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Inspect and remember your ",(0,o.kt)("inlineCode",{parentName:"li"},"domain_id"),".")))}h.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},3693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-1-52b2c721c633035f4253f8953eff68bf.png"},142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-2-a1a2a842aababae871f04661ed4eab24.png"},646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},9459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-4-762ba84f9529de3fd02b9e3e1b8e31ba.png"},9208:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-5-eaf4de62552c35afc3e1455826ef78e8.png"},3625:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-6-c8a56a91e88a562936916225fe35aa68.png"},1314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-7-b438b3e26eaefccdf0bc47f2a4793cf7.png"},2653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NStaking-8-8699a39a8ca94dbf0849e512a068d1a7.png"},8576:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-1-9f2da1385d13542df8eb8f768cf9edc4.png"},1074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-10-88e139724c36663dd8409f536f5994be.png"},5212:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-11-ab69a1f032df85f3e2c7004620adfbff.png"},2610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-12-a51c5ea7df0799e4ea7b9e0926efd2dd.png"},7469:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-13-08a79594c56d19dbdd2b8d71764ef5fd.png"},3538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-2-010d361e7788d70a9122c18a88125269.png"},5006:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-3-566d70ecad0ab415603e6736b707bdc0.png"},8564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-7-255ba039078a485a7cb7e6a848fe5e9e.png"},7921:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-8-ba441aa6feb58db4a78af68431102aa9.png"},8874:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-9-67edafdb834fc435f6ce1f63b06d973b.png"}}]);
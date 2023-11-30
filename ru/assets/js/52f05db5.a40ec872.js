"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var g=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},9959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>C,frontMatter:()=>y,metadata:()=>w,toc:()=>N});var n=a(7462),r=(a(7294),a(3905)),l=a(9960),i=a(1207);const o={toc:[{value:"Windows Specific Warnings:",id:"windows-specific-warnings",level:3},{value:"Step 1: Download the Pulsar Executable",id:"step-1-download-the-pulsar-executable",level:2},{value:"Step 2: Initialize Pulsar",id:"step-2-initialize-pulsar",level:2},{value:"Step 3. Start Farming with Pulsar",id:"step-3-start-farming-with-pulsar",level:2}]},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"windows-specific-warnings"},"Windows Specific Warnings:"),(0,r.kt)("admonition",{title:"Windows No Output Bug",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you face an error where the node outputs nothing and no error code is given it is likely you just need to install the latest Visual C++ Redistributable package ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"},"here"))),(0,r.kt)("h2",{id:"step-1-download-the-pulsar-executable"},"Step 1: Download the Pulsar Executable"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:`${i.Z.buttons} ${i.Z.flexContainer}`},(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-windows-x86_64-v2-v0.7.0-alpha.exe",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Executable"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Legacy CPU)")),(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-windows-x86_64-skylake-v0.7.0-alpha.exe",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Executable"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Skylake+ CPU)"))),(0,r.kt)("h2",{id:"step-2-initialize-pulsar"},"Step 2: Initialize Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now initialize Pulsar. This is where we will configure Reward Address, Plot Size, Plot Location, etc."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Powershell, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,r.kt)("li",{parentName:"ol"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," command as seen below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"./pulsar-windows-x86_64-skylake-v0.7.0-alpha.exe init\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Configuration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network (defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Once complete, the settings will be written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml"),". You can find Your ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FOLDERID_RoamingAppData/pulsar/settings.toml"))),(0,r.kt)("h2",{id:"step-3-start-farming-with-pulsar"},"Step 3. Start Farming with Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows Defender Firewall has blocked some features of this app")," warning may appear.\nThis is because the application is trying to access the internet. This is expected as it is how the farmer talks to other farmers on the network, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow access")," to continue farming.")),(0,r.kt)("p",null,"We will now start the farmer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm")," command"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command below to start farming with Pulsar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"./pulsar-windows-x86_64-skylake-v0.7.0-alpha.exe farm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"That's it! Enjoy and Happy Farming!")))}u.isMDXComponent=!0;const p={toc:[{value:"macOS Specific Warnings:",id:"macos-specific-warnings",level:3},{value:"Step 1: Download the Pulsar Binaries",id:"step-1-download-the-pulsar-binaries",level:2},{value:"Step 2: Initialize Pulsar",id:"step-2-initialize-pulsar",level:2},{value:"Step 3. Start Farming with Pulsar",id:"step-3-start-farming-with-pulsar",level:2}]},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"macos-specific-warnings"},"macOS Specific Warnings:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security\\&Privacy -> General -> Allow")),(0,r.kt)("h2",{id:"step-1-download-the-pulsar-binaries"},"Step 1: Download the Pulsar Binaries"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:`${i.Z.buttons} ${i.Z.flexContainer}`},(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-macos-x86_64-v0.7.0-alpha.zip",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Intel CPU)")),(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-macos-aarch64-v0.7.0-alpha.zip",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Apple CPU)"))),(0,r.kt)("h2",{id:"step-2-initialize-pulsar"},"Step 2: Initialize Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security\\&Privacy -> General -> Allow")),(0,r.kt)("p",null,"We will now initialize Pulsar. This is where we will configure Reward Address, Plot Size, Plot Location, etc."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,r.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x [pulsary-binary-filename-here]")))),(0,r.kt)("li",{parentName:"ol"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," command as seen below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-x86_64-v0.7.0-alpha  init\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Configuration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network (defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Once complete, the settings will be written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml"),". You can find Your ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/pulsar/settings.toml"))),(0,r.kt)("h2",{id:"step-3-start-farming-with-pulsar"},"Step 3. Start Farming with Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now start the farmer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm")," command"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command below to start farming with Pulsar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-x86_64-v0.7.0-alpha farm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"That's it! Enjoy and Happy Farming!")))}m.isMDXComponent=!0;const d={toc:[{value:"Linux Specific Warnings:",id:"linux-specific-warnings",level:3},{value:"Step 1: Download the Pulsar Binaries",id:"step-1-download-the-pulsar-binaries",level:2},{value:"Step 2: Initialize Pulsar",id:"step-2-initialize-pulsar",level:2},{value:"Step 3. Start Farming with Pulsar",id:"step-3-start-farming-with-pulsar",level:2}]},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"linux-specific-warnings"},"Linux Specific Warnings:"),(0,r.kt)("admonition",{title:"CoW  \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 BTRFS \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441 Subspace, \u0442\u043e \u0432\u0441\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430 CoW \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u0434\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Subspace, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u043d\u0435\u0434\u0430\u0432\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u043c \u0444\u0430\u0439\u043b\u0430\u043c."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f CoW \u043d\u0430 BTRFS")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo chattr +C path/to/data/dir\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u043e, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435-CoW \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ext4 \u0438\u043b\u0438 XFS.")),(0,r.kt)("admonition",{title:"\u0418\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 (RAID1/5/6, RAIDZ \u0438 \u0434\u0440\u0443\u0433\u0438\u0445) \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u043c \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0444\u0430\u0440\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0435 \u0441\u0443\u043c\u043c\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 \u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u0443\u0447\u0430\u0441\u0442\u043a\u0438. \u0421\u043c. \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrub")," \u043d\u0438\u0436\u0435.")),(0,r.kt)("admonition",{title:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"XFS")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo mkfs.xfs -d su=32k,sw=1 /path/to/dev\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043e\u043f\u0446\u0438\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"largeio")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"swalloc"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"ext4")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo mkfs.ext4 -E stride=8,stripe-width=8 /path/to/dev\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo tune2fs -E stride=8,stripe-width=8 /path/to/dev\n"))),(0,r.kt)("h2",{id:"step-1-download-the-pulsar-binaries"},"Step 1: Download the Pulsar Binaries"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:`${i.Z.buttons} ${i.Z.flexContainer}`},(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-ubuntu-x86_64-v2-v0.7.0-alpha",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Legacy CPU)")),(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-ubuntu-x86_64-skylake-v0.7.0-alpha",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Skylake+ CPU)")),(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-ubuntu-aarch64-v0.7.0-alpha",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Aarch64/Raspberry Pi)"))),(0,r.kt)("h2",{id:"step-2-initialize-pulsar"},"Step 2: Initialize Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now initialize Pulsar. This is where we will configure Reward Address, Plot Size, Plot Location, etc."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,r.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x [pulsary-binary-filename-here]")))),(0,r.kt)("li",{parentName:"ol"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," command as seen below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-x86_64-skylake-v0.7.0-alpha  init\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Configuration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network (defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Once complete, the settings will be written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml"),". You can find Your ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.config/pulsar/settings.toml"))),(0,r.kt)("h2",{id:"step-3-start-farming-with-pulsar"},"Step 3. Start Farming with Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now start the farmer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm")," command"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command below to start farming with Pulsar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-x86_64-skylake-v0.7.0-alpha farm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"That's it! Enjoy and Happy Farming!")))}h.isMDXComponent=!0;var g=a(4866),k=a(5162);const y={title:"Install",sidebar_position:2,description:"Farming on the Subspace Network",hide_table_of_contents:!0,keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},b=void 0,w={unversionedId:"farming-&-staking/farming/pulsar/pulsar-install",id:"farming-&-staking/farming/pulsar/pulsar-install",title:"Install",description:"Farming on the Subspace Network",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/pulsar/pulsar-install.mdx",sourceDirName:"farming-&-staking/farming/pulsar",slug:"/farming-&-staking/farming/pulsar/pulsar-install",permalink:"/ru/docs/pre-release/farming-&-staking/farming/pulsar/pulsar-install",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/pulsar/pulsar-install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install",sidebar_position:2,description:"Farming on the Subspace Network",hide_table_of_contents:!0,keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/ru/docs/pre-release/farming-&-staking/farming/pulsar/pulsar-prerequisites"},next:{title:"Tips & Tricks",permalink:"/ru/docs/pre-release/farming-&-staking/farming/pulsar/pulsar-tips"}},v={},N=[],x={toc:N},S="wrapper";function C(e){let{components:t,...a}=e;return(0,r.kt)(S,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Pulsar is not available for Gemini-3g as of this time. For the time being please us the ",(0,r.kt)("a",{parentName:"p",href:"../advanced-cli/cli-install"},"Advnaced CLI")," for Farming/Staking/Timekeeping")),(0,r.kt)("admonition",{title:"Get Started with Pulsar",type:"tip"},(0,r.kt)("details",null,(0,r.kt)("summary",null,"Prefer a video? Click here for an installation tutorial."),"  ",(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h1-CX7lGl2w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that some older processors/VMs are no longer supported by official releases, but can still be compiled manually if needed. Precompiled versions of Pulsar are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar/releases"},"hosted on GitHub"),". Find the appropriate binary for your operating system below.")),(0,r.kt)("h1",{id:"get-started-with-pulsar-installation"},"Get Started with Pulsar Installation"),(0,r.kt)(g.Z,{groupId:"OS",mdxType:"Tabs"},(0,r.kt)(k.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"WindowsGuide"})),(0,r.kt)(k.Z,{value:"macos",label:"\ud83c\udf4emacOS",default:!0,mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"MacosGuide"})),(0,r.kt)(k.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"LinuxGuide"}))))}C.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);
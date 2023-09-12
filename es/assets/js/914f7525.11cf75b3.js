"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[11],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(b,i(i({ref:a},c),{},{components:t})):r.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4802:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const l={title:"SubWallet (Recomendado)",sidebar_position:1,description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},i=void 0,o={unversionedId:"protocol/wallets/subwallet",id:"version-latest/protocol/wallets/subwallet",title:"SubWallet (Recomendado)",description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-latest/protocol/wallets/subwallet.md",sourceDirName:"protocol/wallets",slug:"/protocol/wallets/subwallet",permalink:"/es/docs/protocol/wallets/subwallet",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/es/docusaurus-plugin-content-docs/current/protocol/wallets/subwallet.md",tags:[],version:"latest",sidebarPosition:1,frontMatter:{title:"SubWallet (Recomendado)",sidebar_position:1,description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/es/docs/category/wallets"},next:{title:"Polkadot.js",permalink:"/es/docs/protocol/wallets/polkadot"}},p={},s=[{value:"Crear o importar una nueva cartera",id:"crear-o-importar-una-nueva-cartera",level:2},{value:"A\xf1adir nuevas redes a SubWallet",id:"a\xf1adir-nuevas-redes-a-subwallet",level:2},{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2},{value:"\xbfC\xf3mo puedo encontrar mi direcci\xf3n p\xfablica?",id:"c\xf3mo-puedo-encontrar-mi-direcci\xf3n-p\xfablica",level:3},{value:"No veo <code>la Testnet de Subspace</code> ni ninguna red de subspace como opci\xf3n en la configuraci\xf3n de la cadena",id:"no-veo-la-testnet-de-subspace-ni-ninguna-red-de-subspace-como-opci\xf3n-en-la-configuraci\xf3n-de-la-cadena",level:3},{value:"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?",id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera",level:3}],c={toc:s},d="wrapper";function u(e){let{components:a,...l}=e;return(0,n.kt)(d,(0,r.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"SubWallet es una cartera de Substrate/EVM de terceros creada por el equipo ",(0,n.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Subwallet"),"."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Esta gu\xeda seguir\xe1 el camino de la extensi\xf3n del navegador. Tambi\xe9n hay una aplicaci\xf3n m\xf3vil disponible para ",(0,n.kt)("a",{parentName:"em",href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile&pli=1"},"Android")," y ",(0,n.kt)("a",{parentName:"em",href:"https://testflight.apple.com/join/ZW3pUbWj"},"IOS"),"."))),(0,n.kt)("p",null,"SubWallet es una pasarela multiversa Web3 para el ecosistema de Substrate. Nuestra visi\xf3n es brindarle la forma m\xe1s sencilla y segura de conectarse a las aplicaciones basadas en blockchain."),(0,n.kt)("p",null,"Para obtener m\xe1s informaci\xf3n sobre SubWallet visite su ",(0,n.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Sitio Web"),"."),(0,n.kt)("h2",{id:"crear-o-importar-una-nueva-cartera"},"Crear o importar una nueva cartera"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visite el sitio web ",(0,n.kt)("a",{parentName:"p",href:"https://subwallet.app/download.html"},"Polkadot.js")," y descargue su versi\xf3n correspondiente.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Una vez instalada la extensi\xf3n, \xe1brela y haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),", & ",(0,n.kt)("inlineCode",{parentName:"p"},"Crear nueva cuenta")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso 2",src:t(340).Z,width:"379",height:"500"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"La extensi\xf3n le dar\xe1 hasta cuatro opciones. Lo m\xe1s probable es que quieras seleccionar ",(0,n.kt)("inlineCode",{parentName:"p"},"Crear una nueva cuenta")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},":::tip Si desea importar un monedero **existente** y luego seleccione `Importar desde semilla preexistente`\n")),(0,n.kt)("p",{parentName:"li"},":::"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"![paso 3](/img/doc-imgs/subwallet/create-new.png)\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cuando crees una cuenta nueva ver\xe1s lo siguiente."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},":::info Info SubWallet soporta Substrate y EVM, as\xed que cuando se genera una cartera, ver\xe1 la opci\xf3n superior que es simplemente la informaci\xf3n de la cadena de substrate, entonces una secci\xf3n etiquetada EVM que es informaci\xf3n del monedero evm. **Para subspace, actualmente no tenemos integraciones EVM por lo que puedes ignorar esta porci\xf3n.**\n")),(0,n.kt)("p",{parentName:"li"},":::"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"![paso-4 a](/img/doc-imgs/subwallet/select-account.png)\n")))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Comprueba qu\xe9 cuentas te gustar\xeda importar y comprueba ",(0,n.kt)("inlineCode",{parentName:"p"},"He guardado mi semilla de mnemon\xeda de forma segura")," y haz clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Siguiente")),(0,n.kt)("p",{parentName:"li"},"   :::peligro\nASEG\xdaRATE DE GUARDAR ESTO DE FORMA SEGURA, Y NUNCA LO COMPARTAS"))),(0,n.kt)("p",null,":::"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"![paso 5](/img/doc-imgs/subwallet/next-step.png)\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A continuaci\xf3n crearemos una contrase\xf1a para nuestra cartera. (\xa1Aseg\xfarate de no reutilizar contrase\xf1as!)"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso 6",src:t(5336).Z,width:"382",height:"500"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Siguiente Subwallet te preguntar\xe1 qu\xe9 redes quieres habilitar, ",(0,n.kt)("strong",{parentName:"p"},"Despl\xe1cese hacia abajo y seleccione las redes de subspace Testnet/s")," incluyendo cualquier otra red basada en substratos que desee utilizar en el futuro, haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Confirmar")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso 7",src:t(3331).Z,width:"385",height:"500"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\xa1Felicidades ha creado completamente su cartera de substrate con subwallet!"))),(0,n.kt)("h2",{id:"a\xf1adir-nuevas-redes-a-subwallet"},"A\xf1adir nuevas redes a SubWallet"),(0,n.kt)("p",null,":::precauci\xf3n"),(0,n.kt)("p",null,"Este tutorial asume que ya ha completado la configuraci\xf3n de SubWallet. Si no lo ha hecho, consulte la ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#crear-o-importar-un-nuevo-monedero"},"secci\xf3n anterior"))),(0,n.kt)("p",null,":::"),(0,n.kt)("p",null,"SubWallet soporta a\xf1adir redes personalizadas. Esto puede ser \xfatil para redes en desarrollo como la red de Subspace, ya que tenemos puntos finales RPC que cambian regularmente y versiones de redes de prueba, y pronto varios dominios. A continuaci\xf3n encontrar\xe1s una sencilla gu\xeda sobre c\xf3mo a\xf1adir estas nuevas redes. Adem\xe1s, intentaremos mantener una lista actualizada de los puntos finales RPC activos a continuaci\xf3n para su desarrollo."),(0,n.kt)("admonition",{title:"RPC extremos",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Gemini 3d Endpoint: ")," wss://rpc.gemini-3d.subspace.network/ws"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Gemini 3e Endpoint: ")," wss://rpc.gemini-3e.subspace.network/ws"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre SubWallet, selecciona el men\xfa de 3 l\xedneas en la parte superior izquierda de la cartera"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso-rpc-1",src:t(7592).Z,width:"404",height:"614"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dentro del men\xfa de configuraci\xf3n ver\xe1s la opci\xf3n de ",(0,n.kt)("em",{parentName:"p"},"Gestionar redes"),", haz clic en ella."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso-rpc-2",src:t(9373).Z,width:"407",height:"621"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dentro del men\xfa ",(0,n.kt)("em",{parentName:"p"},"Administrar redes")," ver\xe1s un ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," en la esquina superior derecha, haz clic en esto"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso-rpc-3",src:t(1402).Z,width:"406",height:"620"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se abrir\xe1 el men\xfa ",(0,n.kt)("em",{parentName:"p"},"Importar red"),", donde ver\xe1s unas cuantas opciones"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"URL de proveedor"),(0,n.kt)("li",{parentName:"ul"},"Nombre de la red"),(0,n.kt)("li",{parentName:"ul"},"S\xedmbolo"),(0,n.kt)("li",{parentName:"ul"},"Explorador de bloques"),(0,n.kt)("li",{parentName:"ul"},"URL de Crowdloan")),(0,n.kt)("p",{parentName:"li"},"La \xfanica opci\xf3n que se requiere es la URL del proveedor. Puedes a\xf1adir un explorador si lo deseas, pero no es necesario. (El Explorador de subspace actual est\xe1 disponible ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.subspace.network"},"aqu\xed"),"."),(0,n.kt)("p",{parentName:"li"},"Puedes consultar los ",(0,n.kt)("em",{parentName:"p"},"Puntos finales de RPC")," anteriores para conocer las URL de proveedores disponibles para la red Subspace."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso-rpc-4",src:t(9632).Z,width:"395",height:"606"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rellena la URL del proveedor, una vez que haga clic en esta casilla, marcar\xe1 la URL y agregar\xe1 el resto de la informaci\xf3n, luego haga clic en Guardar."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"En este ejemplo usaremos ",(0,n.kt)("inlineCode",{parentName:"em"},"wss://rpc.devnet.subspace.network")))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso-rpc-5",src:t(3489).Z,width:"406",height:"616"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Luego se le devolver\xe1 a la pantalla de red donde podr\xe1 ver su nueva red que fue a\xf1adida."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"paso-rpc-6",src:t(2847).Z,width:"406",height:"616"})))),(0,n.kt)("h2",{id:"soluci\xf3n-de-problemas"},"Soluci\xf3n de problemas"),(0,n.kt)("p",null,"Si usted se enfrenta a alg\xfan problema o desea aprender sobre otras caracter\xedsticas de SubWallet, por favor vea el Polkadot Oficial ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subwallet.app/"},". s Documentaci\xf3n.")," Hemos incluido algunas preguntas frecuentes b\xe1sicas a continuaci\xf3n."),(0,n.kt)("h3",{id:"c\xf3mo-puedo-encontrar-mi-direcci\xf3n-p\xfablica"},"\xbfC\xf3mo puedo encontrar mi direcci\xf3n p\xfablica?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Puede ver su direcci\xf3n p\xfablica por defecto de substrate justo debajo de su nombre de cartera dentro de la extensi\xf3n"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"problema-1",src:t(2990).Z,width:"461",height:"120"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Puede ver su direcci\xf3n p\xfablica de Subspace Testnet a trav\xe9s del men\xfa desplegable y configurando la cadena en ",(0,n.kt)("inlineCode",{parentName:"p"},"Subspace Testnet"),". Una vez que haya terminado, ver\xe1 que la direcci\xf3n p\xfablica ahora comienza con ",(0,n.kt)("inlineCode",{parentName:"p"},"st")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"paso-8 a",src:t(1932).Z,width:"387",height:"500"})))),(0,n.kt)("h3",{id:"no-veo-la-testnet-de-subspace-ni-ninguna-red-de-subspace-como-opci\xf3n-en-la-configuraci\xf3n-de-la-cadena"},"No veo ",(0,n.kt)("inlineCode",{parentName:"h3"},"la Testnet de Subspace")," ni ninguna red de subspace como opci\xf3n en la configuraci\xf3n de la cadena"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A veces, al instalar o actualizar el monedero Substrate por primera vez, ser\xe1 necesario actualizar los metadatos del monedero.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve al Explorador de Subespacio/Polkadot aqu\xed: ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer"},"Portal de Polkadot/Substrate"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se le pedir\xe1 que permita la conexi\xf3n de la extensi\xf3n, seleccione qu\xe9 cuenta desea conectar y haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Conectar")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-4",src:t(3394).Z,width:"440",height:"577"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En la p\xe1gina web, haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"ajustes")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-5",src:t(3067).Z,width:"676",height:"500"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadatos")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-6",src:t(8434).Z,width:"690",height:"325"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Actualizar Metadatos")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-3",src:t(3046).Z,width:"1745",height:"304"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Recibir\xe1s una ventana emergente de la extensi\xf3n indicando que tus metadatos est\xe1n desactualizados, confirmando que quieres actualizar. Haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadatos")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-4",src:t(1671).Z,width:"437",height:"562"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ahora ver\xe1s ",(0,n.kt)("inlineCode",{parentName:"p"},"Subespacio Testnet")," como una opci\xf3n en la ",(0,n.kt)("inlineCode",{parentName:"p"},"Permitir el uso en cualquier cadena")," desplegable."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-9",src:t(9279).Z,width:"455",height:"593"})))),(0,n.kt)("h3",{id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera"},"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Puede hacer una copia de seguridad/exportar su cartera a trav\xe9s del men\xfa ",(0,n.kt)("inlineCode",{parentName:"p"},"..."),", luego haga clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Exportar cuenta")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-6",src:t(4111).Z,width:"450",height:"595"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A continuaci\xf3n, ingresar\xe1 su contrase\xf1a de cartera y haga clic en el m\xe9todo de exportaci\xf3n preferido que desea utilizar, ",(0,n.kt)("inlineCode",{parentName:"p"},"Llave privada"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"QR"),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"problema-7",src:t(7011).Z,width:"450",height:"499"})))))}u.isMDXComponent=!0},3067:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-5-62b1e8b520c8a979e807ef157c0079f0.png"},8434:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-6-223ed4f743831ec30d3d36613d129d10.png"},5336:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/create-password-a08b47bd54b8d59a2a7af05f3241d79d.png"},1932:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/final-page-54dc7c79e35ae06e616b7d9e6e8e077c.png"},7592:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rpc-step-1-899b6c05c9a15224c9fc1dab9aa9f12d.png"},9373:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rpc-step-2-7a6a3b85b1b0a2ed7ca9e8b38f3ccd55.png"},1402:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rpc-step-3-6357ba8b9087bb7b75c0b905ca3ce8f1.png"},9632:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rpc-step-4-f7ca8b782c0a26651bde1b26f9efd918.png"},3489:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rpc-step-5-e37cd1fbcdab0b2dba380c96c2bb717d.png"},2847:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rpc-step-6-b336140557b1664d157addc9541761c9.png"},3331:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/select-network-4776cabb78512f4d02d2ef344ba3c0d3.png"},2990:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-1-fe459c3b6e6bafd0e753882baabcbe38.png"},3394:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-2-e41cc2c8af6e8e43bd604977b9ff801d.png"},3046:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-3-b668815c18b07794808367ee1be6651c.png"},1671:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-4-1f216abe64bc8cd2a3a5a25c20b76920.png"},9279:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-5-396d8be0fb5f4cb3f61b7a390c251b64.png"},4111:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-6-8b0ec2434f9059900d6a179c6dcca273.png"},7011:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/trouble-7-6d42d3053e88f0934d367dec95c8fbb6.png"},340:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/welcome-back-49395dbb75b0b059794545a42389e9eb.png"}}]);
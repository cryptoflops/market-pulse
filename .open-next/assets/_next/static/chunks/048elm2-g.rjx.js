(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,598071,e=>{"use strict";var t=e.i(401564),i=e.i(16555);let o={ConnectorExplorerIds:{[t.ConstantsUtil.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[t.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[t.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[t.ConstantsUtil.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[t.ConstantsUtil.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[t.ConstantsUtil.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[i.ConstantsUtil.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[i.ConstantsUtil.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[i.ConstantsUtil.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[i.ConstantsUtil.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[i.ConstantsUtil.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[i.ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[i.ConstantsUtil.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[i.ConstantsUtil.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[i.ConstantsUtil.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[i.ConstantsUtil.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[i.ConstantsUtil.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[i.ConstantsUtil.OKX_CONNECTOR_NAME]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[i.ConstantsUtil.BINANCE_CONNECTOR_NAME]:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",0xaa36a7:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",0x4e454152:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700","-239":"20f673c0-095e-49b2-07cf-eb5049dcf600","-3":"20f673c0-095e-49b2-07cf-eb5049dcf600"},ConnectorImageIds:{[t.ConstantsUtil.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[t.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[t.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]:"bba2c8be-7fd1-463e-42b1-796ecb0ad200",[t.ConstantsUtil.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[t.ConstantsUtil.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[t.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[t.ConstantsUtil.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[t.ConstantsUtil.CONNECTOR_ID.INJECTED]:"Browser Wallet",[t.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[t.ConstantsUtil.CONNECTOR_ID.COINBASE]:"Coinbase",[t.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[t.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]:"Base Account",[t.ConstantsUtil.CONNECTOR_ID.LEDGER]:"Ledger",[t.ConstantsUtil.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[t.ConstantsUtil.CONNECTOR_ID.INJECTED]:"INJECTED",[t.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[t.ConstantsUtil.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[t.ConstantsUtil.CONNECTOR_ID.AUTH]:"AUTH",[i.ConstantsUtil.CONNECTOR_TYPE_AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,0xaa36a7,10,420,42161,421613,137,80001,42220,0x4e454152,0x4e454153,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};e.s(["PresetsUtil",0,o])},334523,e=>{"use strict";var t=e.i(307075),i=e.i(110163),o=e.i(401564),r=e.i(960398),n=e.i(758331),a=e.i(598071);function l(e,t){let i=new URL("https://rpc.walletconnect.org/v1/");return i.searchParams.set("chainId",e),i.searchParams.set("projectId",t),i.toString()}let s=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","eip155:80094","eip155:80069","eip155:560048","eip155:31","eip155:2818","eip155:57054","eip155:911867","eip155:534351","eip155:1112","eip155:534352","eip155:1111","eip155:146","eip155:130","eip155:1284","eip155:30","eip155:2810","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],c={extendRpcUrlWithProjectId(e,t){let i=!1;try{i="rpc.walletconnect.org"===new URL(e).host}catch(e){i=!1}if(i){let i=new URL(e);return i.searchParams.has("projectId")||i.searchParams.set("projectId",t),i.toString()}return e},isCaipNetwork:e=>"chainNamespace"in e&&"caipNetworkId"in e,getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:o.ConstantsUtil.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${o.ConstantsUtil.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,i){let o=e.rpcUrls?.default?.http?.[0];return s.includes(t)?l(t,i):o||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:i,customRpcUrls:o}){let r=this.getChainNamespace(e),n=this.getCaipNetworkId(e),l=e.rpcUrls?.default?.http?.[0],s=this.getDefaultRpcUrl(e,n,i),c=e?.rpcUrls?.chainDefault?.http?.[0]||l,d=o?.[n]?.map(e=>e.url)||[],p=[...d,...s?[s]:[]],u=[...d];return c&&!u.includes(c)&&u.push(c),{...e,chainNamespace:r,caipNetworkId:n,assets:{imageId:a.PresetsUtil.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:p},chainDefault:{http:u}}}},extendCaipNetworks:(e,{customNetworkImageUrls:t,projectId:i,customRpcUrls:o})=>e.map(e=>c.extendCaipNetwork(e,{customNetworkImageUrls:t,customRpcUrls:o,projectId:i})),getViemTransport(e,o,r){let n=[];return r?.forEach(e=>{n.push((0,i.http)(e.url,e.config))}),s.includes(e.caipNetworkId)&&n.push((0,i.http)(l(e.caipNetworkId,o),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),e?.rpcUrls?.default?.http?.forEach(e=>{n.push((0,i.http)(e))}),(0,t.fallback)(n)},extendWagmiTransports(e,o,r){if(s.includes(e.caipNetworkId)){let n=this.getDefaultRpcUrl(e,e.caipNetworkId,o);return(0,t.fallback)([r,(0,i.http)(n)])}return r},getUnsupportedNetwork:e=>({id:e.split(":")[1],caipNetworkId:e,name:o.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}),getCaipNetworkFromStorage(e){let t=n.StorageUtil.getActiveCaipNetworkId(),i=r.ChainController.getAllRequestedCaipNetworks(),o=Array.from(r.ChainController.state.chains?.keys()||[]),a=t?.split(":")[0],l=!!a&&o.includes(a),s=i?.find(e=>e.caipNetworkId===t);return l&&!s&&t?this.getUnsupportedNetwork(t):s||e||i?.[0]}};e.s(["CaipNetworksUtil",0,c])},769718,e=>{"use strict";var t=e.i(401564),i=e.i(960398),o=e.i(149454),r=e.i(758331),n=e.i(16555);let a={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,i])=>{t[`${n.ConstantsUtil.EIP155}:${e}`]=i}),t},isLowerCaseMatch:(e,t)=>e?.toLowerCase()===t?.toLowerCase(),getActiveNamespaceConnectedToAuth(){let e=i.ChainController.state.activeChain;return t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(i=>o.ConnectorController.getConnectorId(i)===t.ConstantsUtil.CONNECTOR_ID.AUTH&&i===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:i}){let o=0;return new Promise(r=>{async function n(){return(o+=1,await e())?r(!0):o>=i?r(!1):(setTimeout(n,t),null)}n()})},userChainIdToChainNamespace(e){if("number"==typeof e)return t.ConstantsUtil.CHAIN.EVM;let[i]=e.split(":");return i},getOtherAuthNamespaces:e=>e?t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(t=>t!==e):[],getConnectorStorageInfo(e,t){let i=r.StorageUtil.getConnections()[t]??[];return{hasDisconnected:r.StorageUtil.isConnectorDisconnected(e,t),hasConnected:i.some(t=>a.isLowerCaseMatch(t.connectorId,e))}}};e.s(["HelpersUtil",0,a])},288085,e=>{"use strict";e.s(["ConnectorUtil",()=>u]);var t=e.i(401564),i=e.i(886259),o=e.i(960398),r=e.i(971080),n=e.i(149454),a=e.i(227302),l=e.i(82283),s=e.i(693597),c=e.i(758331),d=e.i(769718),p=e.i(533659);let u={getConnectorsByType(e,t,i){let{customWallets:o}=l.OptionsController.state,r=c.StorageUtil.getRecentWallets(),n=p.WalletUtil.filterOutDuplicateWallets(t),a=p.WalletUtil.filterOutDuplicateWallets(i),s=e.filter(e=>"MULTI_CHAIN"===e.type),d=e.filter(e=>"ANNOUNCED"===e.type),u=e.filter(e=>"INJECTED"===e.type);return{custom:o,recent:r,external:e.filter(e=>"EXTERNAL"===e.type),multiChain:s,announced:d,injected:u,recommended:n,featured:a}},showConnector(e){let t=e.info?.rdns,o=!!t&&i.ApiController.state.excludedWallets.some(e=>!!e.rdns&&e.rdns===t),n=!!e.name&&i.ApiController.state.excludedWallets.some(t=>d.HelpersUtil.isLowerCaseMatch(t.name,e.name));if("INJECTED"===e.type&&("Browser Wallet"===e.name&&(!a.CoreHelperUtil.isMobile()||a.CoreHelperUtil.isMobile()&&!t&&!r.ConnectionController.checkInstalled())||o||n))return!1;return"ANNOUNCED"!==e.type&&"EXTERNAL"!==e.type||!o&&!n},getIsConnectedWithWC:()=>Array.from(o.ChainController.state.chains.values()).some(e=>n.ConnectorController.getConnectorId(e.namespace)===t.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),getConnectorTypeOrder({recommended:e,featured:t,custom:i,recent:o,announced:r,injected:n,multiChain:a,external:s,overriddenConnectors:c=l.OptionsController.state.features?.connectorTypeOrder??[]}){let d=[{type:"walletConnect",isEnabled:!0},{type:"recent",isEnabled:o.length>0},{type:"injected",isEnabled:[...n,...r,...a].length>0},{type:"featured",isEnabled:t.length>0},{type:"custom",isEnabled:i&&i.length>0},{type:"external",isEnabled:s.length>0},{type:"recommended",isEnabled:e.length>0}].filter(e=>e.isEnabled),p=new Set(d.map(e=>e.type)),u=c.filter(e=>p.has(e)).map(e=>({type:e,isEnabled:!0})),h=d.filter(({type:e})=>!u.some(({type:t})=>t===e));return Array.from(new Set([...u,...h].map(({type:e})=>e)))},sortConnectorsByExplorerWallet:e=>[...e].sort((e,t)=>e.explorerWallet&&t.explorerWallet?(e.explorerWallet.order??0)-(t.explorerWallet.order??0):e.explorerWallet?-1:+!!t.explorerWallet),getAuthName:({email:e,socialUsername:t,socialProvider:i})=>t?i&&"discord"===i&&t.endsWith("0")?t.slice(0,-1):t:e.length>30?`${e.slice(0,-3)}...`:e,async fetchProviderData(e){try{if("Browser Wallet"===e.name&&!a.CoreHelperUtil.isMobile()||e.id===t.ConstantsUtil.CONNECTOR_ID.AUTH)return{accounts:[],chainId:void 0};let[i,o]=await Promise.all([e.provider?.request({method:"eth_accounts"}),e.provider?.request({method:"eth_chainId"}).then(e=>Number(e))]);return{accounts:i,chainId:o}}catch(t){return console.warn(`Failed to fetch provider data for ${e.name}`,t),{accounts:[],chainId:void 0}}},getFilteredCustomWallets(e){let t=c.StorageUtil.getRecentWallets(),i=n.ConnectorController.state.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),r=i.concat(o);if(r.includes("io.metamask.mobile")&&a.CoreHelperUtil.isMobile()){let e=r.indexOf("io.metamask.mobile");r[e]="io.metamask"}return e.filter(e=>!r.includes(String(e?.rdns)))},hasWalletConnector:e=>n.ConnectorController.state.connectors.some(t=>t.id===e.id||t.name===e.name),isWalletCompatibleWithCurrentChain(e){let t=o.ChainController.state.activeChain;return!t||!e.chains||e.chains.some(e=>t===e.split(":")[0])},getFilteredRecentWallets(){return c.StorageUtil.getRecentWallets().filter(e=>!p.WalletUtil.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e))},getCappedRecommendedWallets(e){let{connectors:t}=n.ConnectorController.state,{customWallets:i,featuredWalletIds:o}=l.OptionsController.state,r=t.find(e=>"walletConnect"===e.id),a=t.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type);if(!r&&!a.length&&!i?.length)return[];let c=s.OptionsUtil.isEmailEnabled(),d=s.OptionsUtil.isSocialsEnabled(),u=a.filter(e=>"Browser Wallet"!==e.name&&"WalletConnect"!==e.name),h=Math.max(0,4-((o?.length||0)+(i?.length||0)+(u.length||0)+ +!!c+ +!!d));return h<=0?[]:p.WalletUtil.filterOutDuplicateWallets(e).slice(0,h)}}},533659,e=>{"use strict";e.s(["WalletUtil",()=>m]);var t=e.i(401564),i=e.i(886259),o=e.i(971080),r=e.i(149454),n=e.i(227302),a=e.i(82283),l=e.i(758331),s=e.i(769718),c=e.i(16555),d=e.i(598071),p=e.i(288085),u=e.i(542904);let h=[d.PresetsUtil.ConnectorExplorerIds[t.ConstantsUtil.CONNECTOR_ID.COINBASE],d.PresetsUtil.ConnectorExplorerIds[t.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK],d.PresetsUtil.ConnectorExplorerIds[t.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT],d.PresetsUtil.ConnectorExplorerIds[c.ConstantsUtil.SOLFLARE_CONNECTOR_NAME],d.PresetsUtil.ConnectorExplorerIds[c.ConstantsUtil.PHANTOM_CONNECTOR_NAME],d.PresetsUtil.ConnectorExplorerIds[c.ConstantsUtil.BINANCE_CONNECTOR_NAME]],m={filterOutDuplicatesByRDNS(e){let t=a.OptionsController.state.enableEIP6963?r.ConnectorController.state.connectors:[],i=l.StorageUtil.getRecentWallets(),o=t.map(e=>e.info?.rdns).filter(Boolean),s=i.map(e=>e.rdns).filter(Boolean),c=o.concat(s);if(c.includes("io.metamask.mobile")&&n.CoreHelperUtil.isMobile()){let e=c.indexOf("io.metamask.mobile");c[e]="io.metamask"}return e.filter(e=>!(e?.rdns&&c.includes(String(e.rdns))||!e?.rdns&&t.some(t=>t.name===e.name))&&!0)},filterOutDuplicatesByIds(e){let t=r.ConnectorController.state.connectors.filter(e=>"ANNOUNCED"===e.type||"INJECTED"===e.type||"MULTI_CHAIN"===e.type),i=l.StorageUtil.getRecentWallets(),o=t.map(e=>e.explorerId||e.explorerWallet?.id||e.id),n=i.map(e=>e.id),a=o.concat(n);return e.filter(e=>!a.includes(e?.id))},filterOutDuplicateWallets(e){let t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){let{connectors:t}=r.ConnectorController.state,{featuredWalletIds:i}=a.OptionsController.state,o=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!o[e.rdns??""]})).sort((e,t)=>{let o=Number(t.installed)-Number(e.installed);if(0!==o)return o;if(i?.length){let o=i.indexOf(e.id),r=i.indexOf(t.id);if(-1!==o&&-1!==r)return o-r;if(-1!==o)return -1;if(-1!==r)return 1}return 0})},getConnectOrderMethod(e,t){let o=e?.connectMethodsOrder||a.OptionsController.state.features?.connectMethodsOrder,n=t||r.ConnectorController.state.connectors;if(o)return o;let{injected:l,announced:s}=p.ConnectorUtil.getConnectorsByType(n,i.ApiController.state.recommended,i.ApiController.state.featured),c=l.filter(p.ConnectorUtil.showConnector),d=s.filter(p.ConnectorUtil.showConnector);return c.length||d.length?["wallet","email","social"]:u.ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){let t=!!e.rdns&&i.ApiController.state.excludedWallets.some(t=>t.rdns===e.rdns),o=!!e.name&&i.ApiController.state.excludedWallets.some(t=>s.HelpersUtil.isLowerCaseMatch(t.name,e.name));return t||o},markWalletsWithDisplayIndex:e=>e.map((e,t)=>({...e,display_index:t})),filterWalletsByWcSupport:e=>o.ConnectionController.state.wcBasic?e.filter(e=>e.supports_wc):n.CoreHelperUtil.isMobile()?e.filter(e=>e.supports_wc||h.includes(e.id)):e}},237287,972801,885873,619295,269311,359072,604415,307776,974131,342611,e=>{"use strict";e.i(812207);var t=e.i(108285),i=e.i(654479);e.i(374576);var o=e.i(120119),r=e.i(56350);e.i(234051);var n=e.i(829389),a=e.i(241845),l=e.i(436220),s=e.i(960398),c=e.i(227302),d=e.i(803468),p=e.i(82283);e.i(404041);var u=e.i(645975),h=t;e.i(852634),e.i(864380),e.i(383227),e.i(839009),e.i(73944);var m=e.i(459088),w=e.i(112699);e.i(221803);var f=e.i(162611);let g=f.css`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e["20"]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var b=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends h.LitElement{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <button
        ?disabled=${this.disabled}
        class=${(0,n.ifDefined)(this.balance?void 0:"local-no-balance")}
        data-error=${(0,n.ifDefined)(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){let e=this.networkSrc?i.html`<wui-image src=${this.networkSrc}></wui-image>`:i.html` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return i.html`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return i.html`<wui-text variant="md-regular" color="inherit">
      ${this.address?w.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){let e=this.loading?i.html`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:i.html`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return i.html`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};C.styles=[m.resetStyles,m.elementStyles,g],b([(0,o.property)()],C.prototype,"networkSrc",void 0),b([(0,o.property)()],C.prototype,"avatarSrc",void 0),b([(0,o.property)()],C.prototype,"balance",void 0),b([(0,o.property)({type:Boolean})],C.prototype,"isUnsupportedChain",void 0),b([(0,o.property)({type:Boolean})],C.prototype,"disabled",void 0),b([(0,o.property)({type:Boolean})],C.prototype,"loading",void 0),b([(0,o.property)()],C.prototype,"address",void 0),b([(0,o.property)()],C.prototype,"profileName",void 0),b([(0,o.property)()],C.prototype,"charsStart",void 0),b([(0,o.property)()],C.prototype,"charsEnd",void 0),C=b([(0,u.customElement)("wui-account-button")],C);var y=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class v extends t.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!p.OptionsController.state.allowUnsupportedChain||!s.ChainController.state.activeChain||s.ChainController.checkIfSupportedNetwork(s.ChainController.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(s.ChainController.getAccountData(this.namespace)),this.setNetworkData(s.ChainController.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),s.ChainController.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=s.ChainController.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(a.AssetController.subscribeNetworkImages(()=>{this.networkImage=l.AssetUtil.getNetworkImage(this.network)}),s.ChainController.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),s.ChainController.subscribeChainProp("accountState",e=>{this.setAccountData(e)}),s.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=l.AssetUtil.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.ChainController.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!s.ChainController.state.activeChain)return null;let e="show"===this.balance,t="string"!=typeof this.balanceVal,{formattedText:o}=c.CoreHelperUtil.parseBalance(this.balanceVal,this.balanceSymbol);return i.html`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!p.OptionsController.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,n.ifDefined)(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}
        profileName=${(0,n.ifDefined)(this.profileName)}
        networkSrc=${(0,n.ifDefined)(this.networkImage)}
        avatarSrc=${(0,n.ifDefined)(this.profileImage)}
        balance=${e?o:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||p.OptionsController.state.allowUnsupportedChain?d.ModalController.open({namespace:this.namespace}):d.ModalController.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await l.AssetUtil.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=l.AssetUtil.getNetworkImage(e.caipNetwork))}}y([(0,o.property)({type:Boolean})],v.prototype,"disabled",void 0),y([(0,o.property)()],v.prototype,"balance",void 0),y([(0,o.property)()],v.prototype,"charsStart",void 0),y([(0,o.property)()],v.prototype,"charsEnd",void 0),y([(0,o.property)()],v.prototype,"namespace",void 0),y([(0,r.state)()],v.prototype,"caipAddress",void 0),y([(0,r.state)()],v.prototype,"balanceVal",void 0),y([(0,r.state)()],v.prototype,"balanceSymbol",void 0),y([(0,r.state)()],v.prototype,"profileName",void 0),y([(0,r.state)()],v.prototype,"profileImage",void 0),y([(0,r.state)()],v.prototype,"network",void 0),y([(0,r.state)()],v.prototype,"networkImage",void 0),y([(0,r.state)()],v.prototype,"isSupported",void 0);let x=class extends v{};x=y([(0,u.customElement)("w3m-account-button")],x);let $=class extends v{};$=y([(0,u.customElement)("appkit-account-button")],$),e.s(["AppKitAccountButton",0,$,"W3mAccountButton",0,x],237287);var k=t,E=e.i(315193);let S=E.css`
  :host {
    display: block;
    width: max-content;
  }
`;var R=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class A extends k.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?s.ChainController.getAccountData(this.namespace)?.caipAddress:s.ChainController.state.activeCaipAddress,this.namespace?this.unsubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(s.ChainController.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?i.html`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${(0,n.ifDefined)(this.balance)}
            .charsStart=${(0,n.ifDefined)(this.charsStart)}
            .charsEnd=${(0,n.ifDefined)(this.charsEnd)}
            namespace=${(0,n.ifDefined)(this.namespace)}
          >
          </appkit-account-button>
        `:i.html`
          <appkit-connect-button
            size=${(0,n.ifDefined)(this.size)}
            label=${(0,n.ifDefined)(this.label)}
            loadingLabel=${(0,n.ifDefined)(this.loadingLabel)}
            namespace=${(0,n.ifDefined)(this.namespace)}
          ></appkit-connect-button>
        `}}A.styles=S,R([(0,o.property)({type:Boolean})],A.prototype,"disabled",void 0),R([(0,o.property)()],A.prototype,"balance",void 0),R([(0,o.property)()],A.prototype,"size",void 0),R([(0,o.property)()],A.prototype,"label",void 0),R([(0,o.property)()],A.prototype,"loadingLabel",void 0),R([(0,o.property)()],A.prototype,"charsStart",void 0),R([(0,o.property)()],A.prototype,"charsEnd",void 0),R([(0,o.property)()],A.prototype,"namespace",void 0),R([(0,r.state)()],A.prototype,"caipAddress",void 0);let N=class extends A{};N=R([(0,u.customElement)("w3m-button")],N);let O=class extends A{};O=R([(0,u.customElement)("appkit-button")],O),e.s(["AppKitButton",0,O,"W3mButton",0,N],972801);var T=t,I=t;let U=f.css`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var D=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let P=class extends I.LitElement{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return i.html`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){let e={primary:"invert",secondary:"accent-primary"};return this.loading?i.html`<wui-loading-spinner
      color=${e[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:i.html` <wui-text variant=${({lg:"lg-regular",md:"md-regular",sm:"sm-regular"})[this.size]} color=${e[this.variant]}>
        ${this.text}
      </wui-text>`}};P.styles=[m.resetStyles,m.elementStyles,U],D([(0,o.property)()],P.prototype,"size",void 0),D([(0,o.property)()],P.prototype,"variant",void 0),D([(0,o.property)({type:Boolean})],P.prototype,"loading",void 0),D([(0,o.property)()],P.prototype,"text",void 0),P=D([(0,u.customElement)("wui-connect-button")],P);var W=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class L extends T.LitElement{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=d.ModalController.state.open,this.loading=this.namespace?d.ModalController.state.loadingNamespaceMap.get(this.namespace):d.ModalController.state.loading,this.unsubscribe.push(d.ModalController.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-connect-button
        size=${(0,n.ifDefined)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?d.ModalController.close():this.loading||d.ModalController.open({view:"Connect",namespace:this.namespace})}}W([(0,o.property)()],L.prototype,"size",void 0),W([(0,o.property)()],L.prototype,"label",void 0),W([(0,o.property)()],L.prototype,"loadingLabel",void 0),W([(0,o.property)()],L.prototype,"namespace",void 0),W([(0,r.state)()],L.prototype,"open",void 0),W([(0,r.state)()],L.prototype,"loading",void 0);let j=class extends L{};j=W([(0,u.customElement)("w3m-connect-button")],j);let _=class extends L{};_=W([(0,u.customElement)("appkit-connect-button")],_),e.s(["AppKitConnectButton",0,_,"W3mConnectButton",0,j],885873);var B=t,z=e.i(653157),F=t;e.i(912190);let M=f.css`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var H=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let V=class extends F.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){return i.html`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${({sm:"sm-regular",md:"md-regular",lg:"lg-regular"})[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?i.html` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?i.html`<wui-image src=${this.imageSrc}></wui-image>`:i.html` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};V.styles=[m.resetStyles,m.elementStyles,M],H([(0,o.property)()],V.prototype,"imageSrc",void 0),H([(0,o.property)({type:Boolean})],V.prototype,"isUnsupportedChain",void 0),H([(0,o.property)({type:Boolean})],V.prototype,"disabled",void 0),H([(0,o.property)()],V.prototype,"size",void 0),V=H([(0,u.customElement)("wui-network-button")],V);let K=E.css`
  :host {
    display: block;
    width: max-content;
  }
`;var q=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class G extends B.LitElement{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=s.ChainController.state.activeCaipNetwork,this.networkImage=l.AssetUtil.getNetworkImage(this.network),this.caipAddress=s.ChainController.state.activeCaipAddress,this.loading=d.ModalController.state.loading,this.isSupported=!!p.OptionsController.state.allowUnsupportedChain||!s.ChainController.state.activeChain||s.ChainController.checkIfSupportedNetwork(s.ChainController.state.activeChain),this.unsubscribe.push(a.AssetController.subscribeNetworkImages(()=>{this.networkImage=l.AssetUtil.getNetworkImage(this.network)}),s.ChainController.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),s.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=l.AssetUtil.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.ChainController.checkIfSupportedNetwork(e.chainNamespace),l.AssetUtil.fetchNetworkImage(e?.assets?.imageId)}),d.ModalController.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){l.AssetUtil.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||s.ChainController.checkIfSupportedNetwork(this.network.chainNamespace);return i.html`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!p.OptionsController.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,n.ifDefined)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||p.OptionsController.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(z.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),d.ModalController.open({view:"Networks"}))}}G.styles=K,q([(0,o.property)({type:Boolean})],G.prototype,"disabled",void 0),q([(0,o.property)({type:String})],G.prototype,"label",void 0),q([(0,r.state)()],G.prototype,"network",void 0),q([(0,r.state)()],G.prototype,"networkImage",void 0),q([(0,r.state)()],G.prototype,"caipAddress",void 0),q([(0,r.state)()],G.prototype,"loading",void 0),q([(0,r.state)()],G.prototype,"isSupported",void 0);let X=class extends G{};X=q([(0,u.customElement)("w3m-network-button")],X);let Y=class extends G{};Y=q([(0,u.customElement)("appkit-network-button")],Y),e.s(["AppKitNetworkButton",0,Y,"W3mNetworkButton",0,X],619295);var J=t,Q=e.i(401564),Z=e.i(971080),ee=e.i(149454),et=e.i(360334),ei=e.i(221728),eo=e.i(811424);e.i(62238),e.i(907170),e.i(143053);var er=t;e.i(624947);let en=f.css`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var ea=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let el=class extends er.LitElement{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return i.html`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};el.styles=[m.resetStyles,m.elementStyles,en],ea([(0,o.property)()],el.prototype,"label",void 0),ea([(0,o.property)()],el.prototype,"description",void 0),ea([(0,o.property)()],el.prototype,"icon",void 0),el=ea([(0,u.customElement)("wui-notice-card")],el),e.i(249536);var es=t,ec=e.i(758331),ed=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ep=class extends es.LitElement{constructor(){super(),this.unsubscribe=[],this.socialProvider=ec.StorageUtil.getConnectedSocialProvider(),this.socialUsername=ec.StorageUtil.getConnectedSocialUsername(),this.namespace=s.ChainController.state.activeChain,this.unsubscribe.push(s.ChainController.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=ee.ConnectorController.getConnectorId(this.namespace),t=ee.ConnectorController.getAuthConnector();if(!t||e!==Q.ConstantsUtil.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let o=t.provider.getEmail()??"";return o||this.socialUsername?i.html`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||ei.RouterController.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ed([(0,r.state)()],ep.prototype,"namespace",void 0),ep=ed([(0,u.customElement)("w3m-account-auth-button")],ep);var eu=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eh=class extends J.LitElement{constructor(){super(),this.usubscribe=[],this.networkImages=a.AssetController.state.networkImages,this.address=s.ChainController.getAccountData()?.address,this.profileImage=s.ChainController.getAccountData()?.profileImage,this.profileName=s.ChainController.getAccountData()?.profileName,this.network=s.ChainController.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=p.OptionsController.state.remoteFeatures,this.usubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>{e&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),s.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),p.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.assets?.imageId??""];return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,n.ifDefined)(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${w.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${(0,n.ifDefined)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=ee.ConnectorController.getConnectorId(e),o=ee.ConnectorController.getAuthConnector();return s.ChainController.checkIfNamesSupported()&&o&&t===Q.ConstantsUtil.CONNECTOR_ID.AUTH&&!this.profileName?i.html`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=ee.ConnectorController.getConnectorId(this.network?.chainNamespace),t=ee.ConnectorController.getAuthConnector(),{origin:o}=location;return!t||e!==Q.ConstantsUtil.CONNECTOR_ID.AUTH||o.includes(et.ConstantsUtil.SECURE_SITE)?null:i.html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=s.ChainController.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(c.CoreHelperUtil.copyToClopboard(this.address),eo.SnackController.showSuccess("Address copied"))}catch{eo.SnackController.showError("Failed to copy")}}smartAccountSettingsTemplate(){let e=this.network?.chainNamespace,t=s.ChainController.checkIfSmartAccountEnabled(),o=ee.ConnectorController.getConnectorId(e);return ee.ConnectorController.getAuthConnector()&&o===Q.ConstantsUtil.CONNECTOR_ID.AUTH&&t?i.html`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `:null}onChooseName(){ei.RouterController.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&ei.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=Z.ConnectionController.getConnections(e).length>0,i=e&&ee.ConnectorController.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await Z.ConnectionController.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(ei.RouterController.push("ProfileWallets"),eo.SnackController.showSuccess("Wallet deleted"))}catch{z.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),eo.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){z.EventsController.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ei.RouterController.push("UpgradeEmailWallet")}onSmartAccountSettings(){ei.RouterController.push("SmartAccountSettings")}};eu([(0,r.state)()],eh.prototype,"address",void 0),eu([(0,r.state)()],eh.prototype,"profileImage",void 0),eu([(0,r.state)()],eh.prototype,"profileName",void 0),eu([(0,r.state)()],eh.prototype,"network",void 0),eu([(0,r.state)()],eh.prototype,"disconnecting",void 0),eu([(0,r.state)()],eh.prototype,"remoteFeatures",void 0),eh=eu([(0,u.customElement)("w3m-account-settings-view")],eh),e.s(["W3mAccountSettingsView",0,eh],269311);var em=t,ew=e.i(849694),ef=e.i(564126);e.i(534420),e.i(443452);var eg=t,eb=t;let eC=f.css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var ey=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ev={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ex={lg:"md",md:"sm",sm:"sm"},e$=class extends eb.LitElement{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return i.html`
      <button data-active=${this.active}>
        ${this.icon?i.html`<wui-icon size=${ex[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${ev[this.size]}> ${this.label} </wui-text>
      </button>
    `}};e$.styles=[m.resetStyles,m.elementStyles,eC],ey([(0,o.property)()],e$.prototype,"icon",void 0),ey([(0,o.property)()],e$.prototype,"size",void 0),ey([(0,o.property)()],e$.prototype,"label",void 0),ey([(0,o.property)({type:Boolean})],e$.prototype,"active",void 0),e$=ey([(0,u.customElement)("wui-tab-item")],e$);let ek=f.css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var eE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eS=class extends eg.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let o=t===this.activeTab;return i.html`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};eS.styles=[m.resetStyles,m.elementStyles,ek],eE([(0,o.property)({type:Array})],eS.prototype,"tabs",void 0),eE([(0,o.property)()],eS.prototype,"onTabChange",void 0),eE([(0,o.property)()],eS.prototype,"size",void 0),eE([(0,r.state)()],eS.prototype,"activeTab",void 0),eS=eE([(0,u.customElement)("wui-tabs")],eS),e.s([],359072),e.i(988016);var eR=t;let eA=f.css`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var eN=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eO=class extends eR.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let e=this.icon?i.html`<wui-icon
          size=${(0,n.ifDefined)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:i.html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return i.html`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return i.html`
      <wui-text variant="lg-regular" color="primary">
        ${w.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return i.html`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};eO.styles=[m.resetStyles,m.elementStyles,eA],eN([(0,o.property)()],eO.prototype,"address",void 0),eN([(0,o.property)()],eO.prototype,"profileName",void 0),eN([(0,o.property)()],eO.prototype,"alt",void 0),eN([(0,o.property)()],eO.prototype,"imageSrc",void 0),eN([(0,o.property)()],eO.prototype,"icon",void 0),eN([(0,o.property)()],eO.prototype,"iconSize",void 0),eN([(0,o.property)({type:Boolean})],eO.prototype,"loading",void 0),eN([(0,o.property)({type:Number})],eO.prototype,"charsStart",void 0),eN([(0,o.property)({type:Number})],eO.prototype,"charsEnd",void 0),eO=eN([(0,u.customElement)("wui-wallet-switch")],eO),e.s([],604415);var eT=e.i(979484);let eI=f.css`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e["8"]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e["1"]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e["3"]};
    height: 48px;
    padding: ${({spacing:e})=>e["2"]};
    padding-right: ${({spacing:e})=>e["3"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e["2"]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var eU=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eD=class extends em.LitElement{constructor(){super(),this.unsubscribe=[],this.caipAddress=s.ChainController.getAccountData()?.caipAddress,this.address=c.CoreHelperUtil.getPlainAddress(s.ChainController.getAccountData()?.caipAddress),this.profileImage=s.ChainController.getAccountData()?.profileImage,this.profileName=s.ChainController.getAccountData()?.profileName,this.disconnecting=!1,this.balance=s.ChainController.getAccountData()?.balance,this.balanceSymbol=s.ChainController.getAccountData()?.balanceSymbol,this.features=p.OptionsController.state.features,this.remoteFeatures=p.OptionsController.state.remoteFeatures,this.namespace=s.ChainController.state.activeChain,this.activeConnectorIds=ee.ConnectorController.state.activeConnectorIds,this.unsubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>{this.address=c.CoreHelperUtil.getPlainAddress(e?.caipAddress),this.caipAddress=e?.caipAddress,this.balance=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),p.OptionsController.subscribeKey("features",e=>this.features=e),p.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),ee.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.ChainController.subscribeKey("activeChain",e=>this.namespace=e),s.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?ee.ConnectorController.getConnectorById(e):void 0,o=l.AssetUtil.getConnectorImage(t),{value:r,decimals:a,symbol:s}=c.CoreHelperUtil.parseBalance(this.balance,this.balanceSymbol);return i.html`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${(0,n.ifDefined)(this.caipAddress)}
          address=${(0,n.ifDefined)(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,n.ifDefined)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${s}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=et.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=!!this.features?.receive,o=this.remoteFeatures?.onramp&&e,r=ew.ExchangeController.isPayWithExchangeEnabled();return o||t||r?i.html`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||et.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&et.ConstantsUtil.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?i.html` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=s.ChainController.state.activeChain===Q.ConstantsUtil.CHAIN.EVM;return e&&t?i.html`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){let e=this.features?.send,t=s.ChainController.state.activeChain;if(!t)throw Error("SendController:sendTemplate - namespace is required");let o=et.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&o?i.html`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=s.ChainController.state.activeChain;if(!e)throw Error("AuthCardTemplate:authCardTemplate - namespace is required");let t=ee.ConnectorController.getConnectorId(e),o=ee.ConnectorController.getAuthConnector(),{origin:r}=location;return!o||t!==Q.ConstantsUtil.CONNECTOR_ID.AUTH||r.includes(et.ConstantsUtil.SECURE_SITE)?null:i.html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){ei.RouterController.push("FundWallet")}handleClickSwap(){ei.RouterController.push("Swap")}handleClickSend(){ei.RouterController.push("WalletSend")}explorerBtnTemplate(){return s.ChainController.getAccountData()?.addressExplorerUrl?i.html`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){z.EventsController.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,ef.getPreferredAccountType)(s.ChainController.state.activeChain)===eT.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),ei.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;let e=Z.ConnectionController.getConnections(this.namespace).length>0,t=this.namespace&&ee.ConnectorController.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await Z.ConnectionController.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(ei.RouterController.push("ProfileWallets"),eo.SnackController.showSuccess("Wallet deleted"))}catch{z.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),eo.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=s.ChainController.getAccountData()?.addressExplorerUrl;e&&c.CoreHelperUtil.openHref(e,"_blank")}onGoToUpgradeView(){z.EventsController.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ei.RouterController.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){ei.RouterController.push("ProfileWallets")}};eD.styles=eI,eU([(0,r.state)()],eD.prototype,"caipAddress",void 0),eU([(0,r.state)()],eD.prototype,"address",void 0),eU([(0,r.state)()],eD.prototype,"profileImage",void 0),eU([(0,r.state)()],eD.prototype,"profileName",void 0),eU([(0,r.state)()],eD.prototype,"disconnecting",void 0),eU([(0,r.state)()],eD.prototype,"balance",void 0),eU([(0,r.state)()],eD.prototype,"balanceSymbol",void 0),eU([(0,r.state)()],eD.prototype,"features",void 0),eU([(0,r.state)()],eD.prototype,"remoteFeatures",void 0),eU([(0,r.state)()],eD.prototype,"namespace",void 0),eU([(0,r.state)()],eD.prototype,"activeConnectorIds",void 0),eD=eU([(0,u.customElement)("w3m-account-default-widget")],eD),e.s([],307776);var eP=t;let eW=f.css`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var eL=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ej=class extends eP.LitElement{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return i.html`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ej.styles=[m.resetStyles,eW],eL([(0,o.property)()],ej.prototype,"dollars",void 0),eL([(0,o.property)()],ej.prototype,"pennies",void 0),ej=eL([(0,u.customElement)("wui-balance")],ej),e.s([],974131);var e_=t;let eB=f.css`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ez=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eF={sm:"sm-regular",md:"md-regular"},eM=class extends e_.LitElement{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,i.html`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${eF[this.size]}>${this.message}</wui-text>`}};eM.styles=[m.resetStyles,m.elementStyles,eB],ez([(0,o.property)()],eM.prototype,"placement",void 0),ez([(0,o.property)()],eM.prototype,"variant",void 0),ez([(0,o.property)()],eM.prototype,"size",void 0),ez([(0,o.property)()],eM.prototype,"message",void 0),eM=ez([(0,u.customElement)("wui-tooltip")],eM),e.s([],342611)},979890,674950,107337,210149,903134,212605,391641,28218,121121,181557,217283,904356,e=>{"use strict";e.i(812207);var t=e.i(108285),i=e.i(654479);e.i(374576);var o=e.i(56350),r=e.i(401564),n=e.i(960398),a=e.i(149454);e.i(404041);var l=e.i(645975);e.i(307776);var s=t,c=e.i(360334),d=e.i(227302),p=e.i(653157),u=e.i(849694),h=e.i(803468),m=e.i(82283),w=e.i(221728),f=e.i(758331),g=e.i(564126);e.i(974131),e.i(534420),e.i(62238),e.i(359072),e.i(342611),e.i(604415);var b=e.i(979484),C=e.i(288085),y=e.i(305840),v=t;e.i(389676);var x=e.i(315193);let $=x.css`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,k=class extends v.LitElement{render(){return i.html`<w3m-activity-list page="account"></w3m-activity-list>`}};k.styles=$,k=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.customElement)("w3m-account-activity-widget")],k);var E=t,S=t,R=e.i(120119);e.i(864380),e.i(839009),e.i(73944);var A=e.i(459088);e.i(912190),e.i(630352);var N=e.i(162611);let O=N.css`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var T=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let I=class extends S.LitElement{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return i.html`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?i.html`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?i.html`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};I.styles=[A.resetStyles,A.elementStyles,O],T([(0,R.property)()],I.prototype,"icon",void 0),T([(0,R.property)()],I.prototype,"text",void 0),T([(0,R.property)()],I.prototype,"description",void 0),T([(0,R.property)()],I.prototype,"tag",void 0),T([(0,R.property)({type:Boolean})],I.prototype,"disabled",void 0),I=T([(0,l.customElement)("wui-list-description")],I),e.i(923838);let U=x.css`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var D=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let P=class extends E.LitElement{constructor(){super(),this.unsubscribe=[],this.tokenBalance=n.ChainController.getAccountData()?.tokenBalance,this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.unsubscribe.push(n.ChainController.subscribeChainProp("accountState",e=>{this.tokenBalance=e?.tokenBalance}),m.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?i.html`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:i.html` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?i.html`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:i.html``}tokenItemTemplate(){return this.tokenBalance?.map(e=>i.html`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){w.RouterController.push("WalletReceive")}onBuyClick(){p.EventsController.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,g.getPreferredAccountType)(n.ChainController.state.activeChain)===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.RouterController.push("OnRampProviders")}};P.styles=U,D([(0,o.state)()],P.prototype,"tokenBalance",void 0),D([(0,o.state)()],P.prototype,"remoteFeatures",void 0),P=D([(0,l.customElement)("w3m-account-tokens-widget")],P),e.i(741611),e.i(748449);let W=N.css`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e["4"]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e["4"]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var L=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let j=class extends s.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.network=n.ChainController.state.activeCaipNetwork,this.profileName=n.ChainController.getAccountData()?.profileName,this.address=n.ChainController.getAccountData()?.address,this.currentTab=n.ChainController.getAccountData()?.currentTab,this.tokenBalance=n.ChainController.getAccountData()?.tokenBalance,this.features=m.OptionsController.state.features,this.namespace=n.ChainController.state.activeChain,this.activeConnectorIds=a.ConnectorController.state.activeConnectorIds,this.remoteFeatures=m.OptionsController.state.remoteFeatures}firstUpdated(){n.ChainController.fetchTokenBalance(),this.unsubscribe.push(n.ChainController.subscribeChainProp("accountState",e=>{e?.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):h.ModalController.close()}),a.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),n.ChainController.subscribeKey("activeChain",e=>this.namespace=e),n.ChainController.subscribeKey("activeCaipNetwork",e=>this.network=e),m.OptionsController.subscribeKey("features",e=>this.features=e),m.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?a.ConnectorController.getConnectorById(e):void 0,{icon:o,iconSize:r}=this.getAuthData();return i.html`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||c.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e]))return null;let t=[...new Set(e.map(e=>"receive"===e||"onramp"===e?"fund":e))];return i.html`<wui-flex gap="2">
      ${t.map(e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=c.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=this.features?.receive,o=this.remoteFeatures?.onramp&&e,r=u.ExchangeController.isPayWithExchangeEnabled();return o||t||r?i.html`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=n.ChainController.state.activeChain===r.ConstantsUtil.CHAIN.EVM;return e&&t?i.html`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){let e=this.features?.send,t=n.ChainController.state.activeChain,o=c.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&o?i.html`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>n.ChainController.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===r.ConstantsUtil.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?i.html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?i.html`<w3m-account-activity-widget></w3m-account-activity-widget>`:i.html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=d.CoreHelperUtil.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:o="00"}=d.CoreHelperUtil.formatTokenBalance(e);return i.html`<wui-balance dollars=${t} pennies=${o}></wui-balance>`}return i.html`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=y.HelpersUtil.getTabsByNamespace(n.ChainController.state.activeChain);return 0===e.length?null:i.html`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){n.ChainController.setAccountProp("currentTab",e,this.namespace)}onFundWalletClick(){w.RouterController.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!c.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?w.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):(p.EventsController.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,g.getPreferredAccountType)(n.ChainController.state.activeChain)===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.RouterController.push("Swap"))}getAuthData(){let e=f.StorageUtil.getConnectedSocialProvider(),t=f.StorageUtil.getConnectedSocialUsername(),i=a.ConnectorController.getAuthConnector(),o=i?.provider.getEmail()??"";return{name:C.ConnectorUtil.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){w.RouterController.push("ProfileWallets")}onSendClick(){p.EventsController.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,g.getPreferredAccountType)(n.ChainController.state.activeChain)===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.RouterController.push("WalletSend")}};j.styles=W,L([(0,o.state)()],j.prototype,"watchTokenBalance",void 0),L([(0,o.state)()],j.prototype,"network",void 0),L([(0,o.state)()],j.prototype,"profileName",void 0),L([(0,o.state)()],j.prototype,"address",void 0),L([(0,o.state)()],j.prototype,"currentTab",void 0),L([(0,o.state)()],j.prototype,"tokenBalance",void 0),L([(0,o.state)()],j.prototype,"features",void 0),L([(0,o.state)()],j.prototype,"namespace",void 0),L([(0,o.state)()],j.prototype,"activeConnectorIds",void 0),L([(0,o.state)()],j.prototype,"remoteFeatures",void 0),j=L([(0,l.customElement)("w3m-account-wallet-features-widget")],j);var _=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let B=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.namespace=n.ChainController.state.activeChain,this.unsubscribe.push(n.ChainController.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=a.ConnectorController.getConnectorId(this.namespace),t=a.ConnectorController.getAuthConnector();return i.html`
      ${t&&e===r.ConstantsUtil.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return i.html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return i.html`<w3m-account-default-widget></w3m-account-default-widget>`}};_([(0,o.state)()],B.prototype,"namespace",void 0),B=_([(0,l.customElement)("w3m-account-view")],B),e.s(["W3mAccountView",0,B],979890);var z=t;e.i(653976);var F=e.i(293090),M=e.i(150576),H=e.i(436220),V=e.i(971080),K=e.i(210087),q=e.i(811424),G=e.i(608601),X=t;e.i(852634),e.i(383227),e.i(695553);var Y=e.i(112699);e.i(624947),e.i(720226);let J=N.css`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var Q=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Z=class extends X.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return i.html`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?i.html`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return i.html` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?i.html`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?i.html`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:i.html`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:i.html`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:o,description:r,enableButton:n,buttonType:a,buttonLabel:l,buttonVariant:s,tagVariant:c,tagLabel:d,alignItems:p="flex-end"}){return i.html`
      <wui-flex justifyContent="space-between" alignItems=${p} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${o?i.html`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${Y.UiHelperUtil.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?i.html`<wui-tag variant=${c} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${r?i.html`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:l,buttonVariant:s}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:o}){return i.html`
      <wui-button
        size="sm"
        variant=${o}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};Z.styles=[A.resetStyles,A.elementStyles,J],Q([(0,R.property)()],Z.prototype,"address",void 0),Q([(0,R.property)()],Z.prototype,"profileName",void 0),Q([(0,R.property)({type:Array})],Z.prototype,"content",void 0),Q([(0,R.property)()],Z.prototype,"alt",void 0),Q([(0,R.property)()],Z.prototype,"imageSrc",void 0),Q([(0,R.property)()],Z.prototype,"icon",void 0),Q([(0,R.property)()],Z.prototype,"iconSize",void 0),Q([(0,R.property)()],Z.prototype,"iconBadge",void 0),Q([(0,R.property)()],Z.prototype,"iconBadgeSize",void 0),Q([(0,R.property)()],Z.prototype,"buttonVariant",void 0),Q([(0,R.property)({type:Boolean})],Z.prototype,"enableMoreButton",void 0),Q([(0,R.property)({type:Number})],Z.prototype,"charsStart",void 0),Q([(0,R.property)({type:Number})],Z.prototype,"charsEnd",void 0),Z=Q([(0,l.customElement)("wui-active-profile-wallet-item")],Z),e.i(443452),e.i(746650);var ee=t;e.i(234051);var et=e.i(829389);let ei=N.css`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var eo=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let er=class extends ee.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?i.html`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?i.html`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:i.html`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return i.html`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${Y.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return i.html`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${(0,et.ifDefined)(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};er.styles=[A.resetStyles,A.elementStyles,ei],eo([(0,R.property)()],er.prototype,"address",void 0),eo([(0,R.property)()],er.prototype,"profileName",void 0),eo([(0,R.property)()],er.prototype,"alt",void 0),eo([(0,R.property)()],er.prototype,"buttonLabel",void 0),eo([(0,R.property)()],er.prototype,"buttonVariant",void 0),eo([(0,R.property)()],er.prototype,"imageSrc",void 0),eo([(0,R.property)()],er.prototype,"icon",void 0),eo([(0,R.property)()],er.prototype,"iconSize",void 0),eo([(0,R.property)()],er.prototype,"iconBadge",void 0),eo([(0,R.property)()],er.prototype,"iconBadgeSize",void 0),eo([(0,R.property)()],er.prototype,"rightIcon",void 0),eo([(0,R.property)()],er.prototype,"rightIconSize",void 0),eo([(0,R.property)({type:Boolean})],er.prototype,"loading",void 0),eo([(0,R.property)({type:Number})],er.prototype,"charsStart",void 0),eo([(0,R.property)({type:Number})],er.prototype,"charsEnd",void 0),er=eo([(0,l.customElement)("wui-inactive-profile-wallet-item")],er),e.i(143053),e.i(79929),e.i(249536);var en=e.i(769718);let ea={getAuthData(e){let t=e.connectorId===r.ConstantsUtil.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let i=e?.auth?.name??f.StorageUtil.getConnectedSocialProvider(),o=e?.auth?.username??f.StorageUtil.getConnectedSocialUsername(),n=a.ConnectorController.getAuthConnector(),l=n?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?C.ConnectorUtil.getAuthName({email:l,socialUsername:o,socialProvider:i}):void 0}}},el=N.css`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e["4"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e["2"]} 0 ${({spacing:e})=>e["2"]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e["2"]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e["2"]} 0 ${({spacing:e})=>e["2"]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var es=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ec=4,ed=6,ep="md",eu="lightbulb",eh=[0,1],em={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},ew=[{namespace:"eip155",icon:em.eip155,label:"EVM"},{namespace:"solana",icon:em.solana,label:"Solana"},{namespace:"bip122",icon:em.bip122,label:"Bitcoin"},{namespace:"ton",icon:em.ton,label:"Ton"}],ef={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"}},eg=class extends z.LitElement{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=n.ChainController.state.activeChain,this.namespaces=Array.from(n.ChainController.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=a.ConnectorController.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=n.ChainController.state.activeCaipNetwork,this.user=n.ChainController.getAccountData()?.user,this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=n.ChainController.getAccountData(this.namespace)?.caipAddress,this.profileName=n.ChainController.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(V.ConnectionController.subscribeKey("connections",()=>this.onConnectionsChange()),V.ConnectionController.subscribeKey("recentConnections",()=>this.requestUpdate()),a.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),n.ChainController.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),n.ChainController.subscribeChainProp("accountState",e=>{this.user=e?.user}),m.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=n.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(".wallet-list");if(!e)return;let t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener("scroll",t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){let e=this.namespace;if(!e)throw Error("Namespace is not set");return i.html`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=ew.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?i.html`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+ +!!this.caipAddress;return i.html`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${em[e]??em.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>V.ConnectionController.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return i.html`
      <wui-flex flexDirection="column" class=${(0,F.classMap)({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),o=this.activeConnectorIds[e],r=this.getPlainAddress();return i.html`
      ${r||o||t.length>0?i.html`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:o}=K.ConnectionControllerUtil.getConnectionsData(e),n=a.ConnectorController.getConnectorById(t),l=H.AssetUtil.getConnectorImage(n),s=this.getPlainAddress();if(!s)return null;let c=e===r.ConstantsUtil.CHAIN.BITCOIN,d=ea.getAuthData({connectorId:t,accounts:[]}),p=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=o.find(e=>e.connectorId===t),h=u?.accounts.filter(e=>!en.HelpersUtil.isLowerCaseMatch(e.address,s));return i.html`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${n?.name}
          .content=${this.getProfileContent({address:s,connections:o,connectorId:t,namespace:e})}
          .charsStart=${ec}
          .charsEnd=${ed}
          .icon=${d.icon}
          .iconSize=${d.iconSize}
          .iconBadge=${this.isSmartAccount(s)?eu:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?ep:void 0}
          imageSrc=${l}
          ?enableMoreButton=${d.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{c&&u&&h?.[0]&&this.handleSwitchWallet(u,h[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${p?i.html`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return 0===t.length?null:i.html`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=K.ConnectionControllerUtil.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:i.html`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,o){return e.filter(e=>e.accounts.length>0).map((e,r)=>{let n=a.ConnectorController.getConnectorById(e.connectorId),l=H.AssetUtil.getConnectorImage(n)??"",s=ea.getAuthData(e);return e.accounts.map((n,a)=>{let c=this.isAccountLoading(e.connectorId,n.address);return i.html`
            <wui-flex flexDirection="column">
              ${0!==r||0!==a?i.html`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${n.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral-secondary":"accent-secondary"}
                rightIcon=${t?"bin":"power"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${l}
                .iconBadge=${this.isSmartAccount(n.address)?eu:void 0}
                .iconBadgeSize=${this.isSmartAccount(n.address)?ep:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${c}
                .showBalance=${!1}
                .charsStart=${ec}
                .charsEnd=${ed}
                @buttonClick=${()=>this.handleSwitchWallet(e,n.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:n.address,isRecentConnection:t,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return i.html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:o}=this.getChainLabelInfo(e);return i.html`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=n.ChainController.getAccountData(t)?.caipAddress,this.profileName=n.ChainController.getAccountData(t)?.profileName,this.chainListener=n.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,this.caipNetwork?.chainNamespace!==i&&e?.caipNetwork&&(a.ConnectorController.setFilterByNamespace(i),await n.ChainController.switchActiveNetwork(e?.caipNetwork)),await V.ConnectionController.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?q.SnackController.showSuccess("Wallet switched"):e&&q.SnackController.showSuccess("Account switched")}})}catch(e){q.SnackController.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:i,isRecentConnection:o,namespace:r}=e;o?(f.StorageUtil.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:r}),V.ConnectionController.syncStorageConnections(),q.SnackController.showSuccess("Wallet deleted")):this.handleDisconnect(r,t.connectorId)}async handleDisconnect(e,t){try{await V.ConnectionController.disconnect({id:t,namespace:e}),q.SnackController.showSuccess("Wallet disconnected")}catch{q.SnackController.showError("Failed to disconnect wallet")}}handleCopyAddress(e){d.CoreHelperUtil.copyToClopboard(e),q.SnackController.showSuccess("Address copied")}handleMore(){w.RouterController.push("AccountSettings")}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&d.CoreHelperUtil.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){a.ConnectorController.setFilterByNamespace(e),w.RouterController.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return ef[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!!t&&!!e&&en.HelpersUtil.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?d.CoreHelperUtil.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:i}=K.ConnectionControllerUtil.getConnectionsData(e),[o]=i.filter(e=>en.HelpersUtil.isLowerCaseMatch(e.connectorId,t));if(!t)return i;let n=e===r.ConstantsUtil.CHAIN.BITCOIN,{address:a}=this.caipAddress?M.ParseUtil.parseCaipAddress(this.caipAddress):{},l=[...a?[a]:[]];return n&&o&&(l=o.accounts.map(e=>e.address)||[]),K.ConnectionControllerUtil.excludeConnectorAddressFromConnections({connectorId:t,addresses:l,connections:i})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:i}=K.ConnectionControllerUtil.getConnectionsData(e);return!!this.caipAddress||t.length>0||i.length>0}isAccountLoading(e,t){return en.HelpersUtil.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&en.HelpersUtil.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:i,connectorId:o,namespace:n}=e,[a]=i.filter(e=>en.HelpersUtil.isLowerCaseMatch(e.connectorId,o));if(n===r.ConstantsUtil.CHAIN.BITCOIN&&a?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(a.accounts,t);let l=ea.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...l.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){let i=e.length>1,o=this.getPlainAddress();return e.map(e=>{let r=en.HelpersUtil.isLowerCaseMatch(e.address,o),n="PAYMENT";return"ordinal"===e.type&&(n="ORDINALS"),{address:e.address,tagLabel:en.HelpersUtil.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:en.HelpersUtil.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:n,alignItems:"flex-end",buttonType:r?"disconnect":"switch",buttonLabel:r?"Disconnect":"Switch",buttonVariant:r?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",G.MathUtil.interpolate([0,50],eh,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",G.MathUtil.interpolate([0,50],eh,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){let{connections:e}=K.ConnectionControllerUtil.getConnectionsData(this.namespace);0===e.length&&w.RouterController.reset("ProfileWallets")}this.requestUpdate()}};eg.styles=el,es([(0,o.state)()],eg.prototype,"currentTab",void 0),es([(0,o.state)()],eg.prototype,"namespace",void 0),es([(0,o.state)()],eg.prototype,"namespaces",void 0),es([(0,o.state)()],eg.prototype,"caipAddress",void 0),es([(0,o.state)()],eg.prototype,"profileName",void 0),es([(0,o.state)()],eg.prototype,"activeConnectorIds",void 0),es([(0,o.state)()],eg.prototype,"lastSelectedAddress",void 0),es([(0,o.state)()],eg.prototype,"lastSelectedConnectorId",void 0),es([(0,o.state)()],eg.prototype,"isSwitching",void 0),es([(0,o.state)()],eg.prototype,"caipNetwork",void 0),es([(0,o.state)()],eg.prototype,"user",void 0),es([(0,o.state)()],eg.prototype,"remoteFeatures",void 0),eg=es([(0,l.customElement)("w3m-profile-wallets-view")],eg),e.s(["W3mProfileWalletsView",0,eg],674950);var eb=t,eC=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ey=class extends eb.LitElement{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=n.ChainController.state.activeCaipNetwork,this.features=m.OptionsController.state.features,this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.exchangesLoading=u.ExchangeController.state.isLoading,this.exchanges=u.ExchangeController.state.exchanges,this.unsubscribe.push(m.OptionsController.subscribeKey("features",e=>this.features=e),m.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),n.ChainController.subscribeKey("activeCaipNetwork",e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()}),u.ExchangeController.subscribeKey("isLoading",e=>this.exchangesLoading=e),u.ExchangeController.subscribeKey("exchanges",e=>this.exchanges=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){u.ExchangeController.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await u.ExchangeController.fetchExchanges())}render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;let e=await u.ExchangeController.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),t=e.find(e=>"USDC"===e.metadata.symbol)||e[0];t&&u.ExchangeController.setPaymentAsset(t)}onrampTemplate(){if(!this.activeCaipNetwork)return null;let e=this.remoteFeatures?.onramp,t=c.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return e&&t?i.html`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `:null}depositFromExchangeTemplate(){return this.activeCaipNetwork&&u.ExchangeController.isPayWithExchangeSupported()?i.html`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `:null}receiveTemplate(){return this.features?.receive?i.html`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){w.RouterController.push("OnRampProviders")}onReceive(){w.RouterController.push("WalletReceive")}onDepositFromExchange(){u.ExchangeController.reset(),w.RouterController.push("PayWithExchange",{redirectView:w.RouterController.state.data?.redirectView})}};eC([(0,o.state)()],ey.prototype,"activeCaipNetwork",void 0),eC([(0,o.state)()],ey.prototype,"features",void 0),eC([(0,o.state)()],ey.prototype,"remoteFeatures",void 0),eC([(0,o.state)()],ey.prototype,"exchangesLoading",void 0),eC([(0,o.state)()],ey.prototype,"exchanges",void 0),ey=eC([(0,l.customElement)("w3m-fund-wallet-view")],ey),e.s(["W3mFundWalletView",0,ey],107337);var ev=t,ex=t,e$=t;e.i(684326);var ek=e.i(765090);let eE=N.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var eS=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eR=class extends e$.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,ek.createRef)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return i.html`
      <label data-size=${this.size}>
        <input
          ${(0,ek.ref)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};eR.styles=[A.resetStyles,A.elementStyles,eE],eS([(0,R.property)({type:Boolean})],eR.prototype,"checked",void 0),eS([(0,R.property)({type:Boolean})],eR.prototype,"disabled",void 0),eS([(0,R.property)()],eR.prototype,"size",void 0),eR=eS([(0,l.customElement)("wui-toggle")],eR);let eA=N.css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var eN=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eO=class extends ex.LitElement{constructor(){super(...arguments),this.checked=!1}render(){return i.html`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};eO.styles=[A.resetStyles,A.elementStyles,eA],eN([(0,R.property)({type:Boolean})],eO.prototype,"checked",void 0),eO=eN([(0,l.customElement)("wui-certified-switch")],eO);var eT=t;e.i(835902);let eI=N.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var eU=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eD=class extends eT.LitElement{constructor(){super(...arguments),this.inputComponentRef=(0,ek.createRef)(),this.inputValue=""}render(){return i.html`
      <wui-input-text
        ${(0,ek.ref)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?i.html`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};eD.styles=[A.resetStyles,eI],eU([(0,R.property)()],eD.prototype,"inputValue",void 0),eD=eU([(0,l.customElement)("wui-search-bar")],eD);var eP=t,eW=e.i(886259),eL=t,ej=e.i(252157);e.i(864576);let e_=N.css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var eB=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ez=class extends eL.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return i.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?i.html` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${ej.networkSvgMd}`:i.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};ez.styles=[A.resetStyles,A.elementStyles,e_],eB([(0,R.property)()],ez.prototype,"type",void 0),ez=eB([(0,l.customElement)("wui-card-select-loader")],ez);var eF=t;let eM=x.css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var eH=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eV=class extends eF.LitElement{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&Y.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Y.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Y.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Y.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Y.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Y.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Y.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Y.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,i.html`<slot></slot>`}};eV.styles=[A.resetStyles,eM],eH([(0,R.property)()],eV.prototype,"gridTemplateRows",void 0),eH([(0,R.property)()],eV.prototype,"gridTemplateColumns",void 0),eH([(0,R.property)()],eV.prototype,"justifyItems",void 0),eH([(0,R.property)()],eV.prototype,"alignItems",void 0),eH([(0,R.property)()],eV.prototype,"justifyContent",void 0),eH([(0,R.property)()],eV.prototype,"alignContent",void 0),eH([(0,R.property)()],eV.prototype,"columnGap",void 0),eH([(0,R.property)()],eV.prototype,"rowGap",void 0),eH([(0,R.property)()],eV.prototype,"gap",void 0),eH([(0,R.property)()],eV.prototype,"padding",void 0),eH([(0,R.property)()],eV.prototype,"margin",void 0),eV=eH([(0,l.customElement)("wui-grid")],eV);var eK=e.i(533659),eq=t;e.i(780313),e.i(956303);let eG=N.css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["0"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e["4"]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var eX=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eY=class extends eq.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return i.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,et.ifDefined)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?i.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?i.html`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,et.ifDefined)(this.imageSrc)}
        name=${(0,et.ifDefined)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return i.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=H.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await H.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,p.EventsController.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:w.RouterController.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};eY.styles=eG,eX([(0,o.state)()],eY.prototype,"visible",void 0),eX([(0,o.state)()],eY.prototype,"imageSrc",void 0),eX([(0,o.state)()],eY.prototype,"imageLoading",void 0),eX([(0,o.state)()],eY.prototype,"isImpressed",void 0),eX([(0,R.property)()],eY.prototype,"explorerId",void 0),eX([(0,R.property)()],eY.prototype,"walletQuery",void 0),eX([(0,R.property)()],eY.prototype,"certified",void 0),eX([(0,R.property)()],eY.prototype,"displayIndex",void 0),eX([(0,R.property)({type:Object})],eY.prototype,"wallet",void 0),eY=eX([(0,l.customElement)("w3m-all-wallets-list-item")],eY);let eJ=N.css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e["4"]};
    padding-bottom: ${({spacing:e})=>e["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var eQ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eZ="local-paginator",e0=class extends eP.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!eW.ApiController.state.wallets.length,this.wallets=eW.ApiController.state.wallets,this.recommended=eW.ApiController.state.recommended,this.featured=eW.ApiController.state.featured,this.filteredWallets=eW.ApiController.state.filteredWallets,this.mobileFullScreen=m.OptionsController.state.enableMobileFullScreen,this.unsubscribe.push(eW.ApiController.subscribeKey("wallets",e=>this.wallets=e),eW.ApiController.subscribeKey("recommended",e=>this.recommended=e),eW.ApiController.subscribeKey("featured",e=>this.featured=e),eW.ApiController.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),i.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await eW.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>i.html`
        <wui-card-select-loader type="wallet" id=${(0,et.ifDefined)(t)}></wui-card-select-loader>
      `)}getWallets(){let e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);let t=d.CoreHelperUtil.uniqueBy(e,"id"),i=eK.WalletUtil.markWalletsAsInstalled(t),o=eK.WalletUtil.filterWalletsByWcSupport(i);return eK.WalletUtil.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map((e,t)=>i.html`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:o,mobileFilteredOutWalletsLength:r}=eW.ApiController.state,n=window.innerWidth<352?3:4,a=e.length+t.length,l=Math.ceil(a/n)*n-a+n;return(l-=e.length?i.length%n:0,0===o&&i.length>0)?null:0===o||[...i,...e,...t].length<o-(r??0)?this.shimmerTemplate(l,eZ):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${eZ}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=eW.ApiController.state;i.length<t&&eW.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){a.ConnectorController.selectWalletConnector(e)}};e0.styles=eJ,eQ([(0,o.state)()],e0.prototype,"loading",void 0),eQ([(0,o.state)()],e0.prototype,"wallets",void 0),eQ([(0,o.state)()],e0.prototype,"recommended",void 0),eQ([(0,o.state)()],e0.prototype,"featured",void 0),eQ([(0,o.state)()],e0.prototype,"filteredWallets",void 0),eQ([(0,o.state)()],e0.prototype,"badge",void 0),eQ([(0,o.state)()],e0.prototype,"mobileFullScreen",void 0),e0=eQ([(0,l.customElement)("w3m-all-wallets-list")],e0);var e3=t;e.i(421147);let e1=x.css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var e2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e5=class extends e3.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=m.OptionsController.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?i.html`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await eW.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=eW.ApiController.state,t=eK.WalletUtil.markWalletsAsInstalled(e),o=eK.WalletUtil.filterWalletsByWcSupport(t);return o.length?i.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${o.map((e,t)=>i.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:i.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){a.ConnectorController.selectWalletConnector(e)}};e5.styles=e1,e2([(0,o.state)()],e5.prototype,"loading",void 0),e2([(0,o.state)()],e5.prototype,"mobileFullScreen",void 0),e2([(0,R.property)()],e5.prototype,"query",void 0),e2([(0,R.property)()],e5.prototype,"badge",void 0),e5=e2([(0,l.customElement)("w3m-all-wallets-search")],e5);var e4=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e6=class extends ev.LitElement{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=d.CoreHelperUtil.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return i.html`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?i.html`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:i.html`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",q.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return d.CoreHelperUtil.isMobile()?i.html`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){w.RouterController.push("ConnectingWalletConnect")}};e4([(0,o.state)()],e6.prototype,"search",void 0),e4([(0,o.state)()],e6.prototype,"badge",void 0),e6=e4([(0,l.customElement)("w3m-all-wallets-view")],e6),e.s(["W3mAllWalletsView",0,e6],210149);var e8=t,e9=e.i(455587),e7=t;let te=N.css`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var tt=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ti=class extends e7.LitElement{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;let e=`${this.size}-regular`;return i.html`
      <button ?disabled=${this.disabled} tabindex=${(0,et.ifDefined)(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};ti.styles=[A.resetStyles,A.elementStyles,te],tt([(0,R.property)()],ti.prototype,"text",void 0),tt([(0,R.property)({type:Boolean})],ti.prototype,"disabled",void 0),tt([(0,R.property)()],ti.prototype,"size",void 0),tt([(0,R.property)()],ti.prototype,"icon",void 0),tt([(0,R.property)()],ti.prototype,"tabIdx",void 0),ti=tt([(0,l.customElement)("wui-list-button")],ti),e.i(803596);var to=e.i(16555),tr=t,tn=e.i(851887);e.i(39299),e.i(907170);var ta=e.i(535568);let tl=N.css`
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e["2"]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e["3"]};
  }

  wui-text {
    margin: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]}
      ${({spacing:e})=>e["0"]} ${({spacing:e})=>e["3"]};
  }
`;var ts=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tc=class extends tr.LitElement{constructor(){super(),this.unsubscribe=[],this.formRef=(0,ek.createRef)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.hasExceededUsageLimit=eW.ApiController.state.plan.hasExceededUsageLimit,this.unsubscribe.push(m.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}),eW.ApiController.subscribeKey("plan",e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=V.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.AUTH);return i.html`
      <form ${(0,ek.ref)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,et.ifDefined)(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?i.html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?i.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?i.html`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!y.HelpersUtil.isValidEmail(this.email))return void tn.AlertController.open({displayMessage:ta.ErrorUtil.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");if(!r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===n.ChainController.state.activeChain)){let e=n.ChainController.getFirstCaipNetworkSupportsAuthConnector();if(e)return void w.RouterController.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=a.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:i}=await t.provider.connectEmail({email:this.email});if(p.EventsController.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i)p.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),w.RouterController.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===i)w.RouterController.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===i){let e=this.remoteFeatures?.multiWallet;await V.ConnectionController.connectExternal(t,n.ChainController.state.activeChain),e?(w.RouterController.replace("ProfileWallets"),q.SnackController.showSuccess("New Wallet Added")):w.RouterController.replace("Account")}}catch(t){let e=d.CoreHelperUtil.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":q.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){p.EventsController.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};tc.styles=tl,ts([(0,R.property)()],tc.prototype,"tabIdx",void 0),ts([(0,o.state)()],tc.prototype,"email",void 0),ts([(0,o.state)()],tc.prototype,"loading",void 0),ts([(0,o.state)()],tc.prototype,"error",void 0),ts([(0,o.state)()],tc.prototype,"remoteFeatures",void 0),ts([(0,o.state)()],tc.prototype,"hasExceededUsageLimit",void 0),tc=ts([(0,l.customElement)("w3m-email-login-widget")],tc),e.i(729084);var td=t,tp=e.i(328182);e.i(655934);var tu=t;e.i(496969);let th=N.css`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var tm=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tw=class extends tu.LitElement{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return i.html`
      <button ?disabled=${this.disabled} tabindex=${(0,et.ifDefined)(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};tw.styles=[A.resetStyles,A.elementStyles,th],tm([(0,R.property)()],tw.prototype,"logo",void 0),tm([(0,R.property)({type:Boolean})],tw.prototype,"disabled",void 0),tm([(0,R.property)()],tw.prototype,"tabIdx",void 0),tw=tm([(0,l.customElement)("wui-logo-select")],tw);var tf=e.i(542991);let tg=N.css`
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var tb=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tC=class extends td.LitElement{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.hasExceededUsageLimit=eW.ApiController.state.plan.hasExceededUsageLimit,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),m.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),eW.ApiController.subscribeKey("plan",e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e="explore"===this.walletGuide,t=this.remoteFeatures?.socials;return!t&&e?(t=c.ConstantsUtil.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?i.html` <wui-flex gap="2">
        ${e.slice(0,2).map(e=>i.html`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,et.ifDefined)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:i.html` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${(0,et.ifDefined)(e[0])}
      text=${`Continue with ${Y.UiHelperUtil.capitalize(e[0])}`}
      tabIdx=${(0,et.ifDefined)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t="explore"===this.walletGuide;return(this.authConnector&&e&&0!==e.length||!t||(e=c.ConstantsUtil.DEFAULT_SOCIALS),!e||e.length<=2)?null:e&&e.length>6?i.html`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>i.html`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,et.ifDefined)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,et.ifDefined)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?i.html`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>i.html`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,et.ifDefined)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){w.RouterController.push("ConnectSocials")}async onSocialClick(e){if(this.hasExceededUsageLimit)return void w.RouterController.push("UsageExceeded");if(!r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===n.ChainController.state.activeChain)){let e=n.ChainController.getFirstCaipNetworkSupportsAuthConnector();if(e)return void w.RouterController.push("SwitchNetwork",{network:e})}e&&await (0,tp.executeSocialLogin)(e)}async handlePwaFrameLoad(){if(d.CoreHelperUtil.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof tf.W3mFrameProvider&&await this.authConnector.provider.init()}catch(e){tn.AlertController.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return V.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.AUTH)}};tC.styles=tg,tb([(0,R.property)()],tC.prototype,"walletGuide",void 0),tb([(0,R.property)()],tC.prototype,"tabIdx",void 0),tb([(0,o.state)()],tC.prototype,"connectors",void 0),tb([(0,o.state)()],tC.prototype,"remoteFeatures",void 0),tb([(0,o.state)()],tC.prototype,"authConnector",void 0),tb([(0,o.state)()],tC.prototype,"isPwaLoading",void 0),tb([(0,o.state)()],tC.prototype,"hasExceededUsageLimit",void 0),tC=tb([(0,l.customElement)("w3m-social-login-widget")],tC);var ty=t,tv=t;e.i(987789);var tx=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t$=class extends tv.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.count=eW.ApiController.state.count,this.filteredCount=eW.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=eW.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),eW.ApiController.subscribeKey("count",e=>this.count=e),eW.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),eW.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=m.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!d.CoreHelperUtil.isMobile())return null;let o=eW.ApiController.state.featured.length,n=this.count+o,a=n<10?n:10*Math.floor(n/10),l=this.filteredCount>0?this.filteredCount:a,s=`${l}`;this.filteredCount>0?s=`${this.filteredCount}`:l<n&&(s=`${l}+`);let c=V.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,et.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${c}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){p.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),w.RouterController.push("AllWallets",{redirectView:w.RouterController.state.data?.redirectView})}};tx([(0,R.property)()],t$.prototype,"tabIdx",void 0),tx([(0,o.state)()],t$.prototype,"connectors",void 0),tx([(0,o.state)()],t$.prototype,"count",void 0),tx([(0,o.state)()],t$.prototype,"filteredCount",void 0),tx([(0,o.state)()],t$.prototype,"isFetchingRecommendedWallets",void 0),t$=tx([(0,l.customElement)("w3m-all-wallets-widget")],t$),e.s([],903134);var tk=t,tE=e.i(241845);let tS=N.css`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var tR=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tA=class extends tk.LitElement{constructor(){super(),this.unsubscribe=[],this.connectors=a.ConnectorController.state.connectors,this.recommended=eW.ApiController.state.recommended,this.featured=eW.ApiController.state.featured,this.explorerWallets=eW.ApiController.state.explorerWallets,this.connections=V.ConnectionController.state.connections,this.connectorImages=tE.AssetController.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),V.ConnectionController.subscribeKey("connections",e=>this.connections=e),tE.AssetController.subscribeKey("connectorImages",e=>this.connectorImages=e),eW.ApiController.subscribeKey("recommended",e=>this.recommended=e),eW.ApiController.subscribeKey("featured",e=>this.featured=e),eW.ApiController.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:eW.ApiController.state.explorerWallets}),eW.ApiController.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),d.CoreHelperUtil.isTelegram()&&d.CoreHelperUtil.isIos()&&(this.loadingTelegram=!V.ConnectionController.state.wcUri,this.unsubscribe.push(V.ConnectionController.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}processConnectorsByType(e,t=!0){let i=C.ConnectorUtil.sortConnectorsByExplorerWallet([...e]);return t?i.filter(C.ConnectorUtil.showConnector):i}connectorListTemplate(){let e=C.ConnectorUtil.getConnectorsByType(this.connectors,this.recommended,this.featured),t=this.processConnectorsByType(e.announced.filter(e=>"walletConnect"!==e.id)),i=this.processConnectorsByType(e.injected),o=this.processConnectorsByType(e.multiChain.filter(e=>"WalletConnect"!==e.name),!1),n=e.custom,a=e.recent,l=this.processConnectorsByType(e.external.filter(e=>e.id!==r.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK&&e.id!==r.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT)),s=e.recommended,c=e.featured,p=C.ConnectorUtil.getConnectorTypeOrder({custom:n,recent:a,announced:t,injected:i,multiChain:o,recommended:s,featured:c,external:l}),u=this.connectors.find(e=>"walletConnect"===e.id),h=d.CoreHelperUtil.isMobile(),m=[];for(let e of p)switch(e){case"walletConnect":!h&&u&&m.push({kind:"connector",subtype:"walletConnect",connector:u});break;case"recent":C.ConnectorUtil.getFilteredRecentWallets().forEach(e=>m.push({kind:"wallet",subtype:"recent",wallet:e}));break;case"injected":o.forEach(e=>m.push({kind:"connector",subtype:"multiChain",connector:e})),t.forEach(e=>m.push({kind:"connector",subtype:"announced",connector:e})),i.forEach(e=>m.push({kind:"connector",subtype:"injected",connector:e}));break;case"featured":c.forEach(e=>m.push({kind:"wallet",subtype:"featured",wallet:e}));break;case"custom":C.ConnectorUtil.getFilteredCustomWallets(n??[]).forEach(e=>m.push({kind:"wallet",subtype:"custom",wallet:e}));break;case"external":l.forEach(e=>m.push({kind:"connector",subtype:"external",connector:e}));break;case"recommended":C.ConnectorUtil.getCappedRecommendedWallets(s).forEach(e=>m.push({kind:"wallet",subtype:"recommended",wallet:e}));break;default:console.warn(`Unknown connector type: ${e}`)}return m.map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){let o,n,a=e.connector,l=H.AssetUtil.getConnectorImage(a)||this.connectorImages[a?.imageId??""],s=(this.connections.get(a.chain)??[]).some(e=>en.HelpersUtil.isLowerCaseMatch(e.connectorId,a.id));"walletConnect"===e.subtype?(o="qr code",n="accent"):"injected"===e.subtype||"announced"===e.subtype?(o=s?"connected":"installed",n=s?"info":"success"):(o=void 0,n=void 0);let c=V.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),d=("walletConnect"===e.subtype||"external"===e.subtype)&&c;return i.html`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,et.ifDefined)(l)}
        .installed=${!0}
        name=${a.name??"Unknown"}
        .tagVariant=${n}
        tagLabel=${(0,et.ifDefined)(o)}
        data-testid=${`wallet-selector-${a.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,et.ifDefined)(this.tabIdx)}
        ?disabled=${d}
        rdnsId=${(0,et.ifDefined)(a.explorerWallet?.rdns||void 0)}
        walletRank=${(0,et.ifDefined)(a.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=w.RouterController.state.data?.redirectView;if("walletConnect"===e.subtype){a.ConnectorController.setActiveConnector(e.connector),d.CoreHelperUtil.isMobile()?w.RouterController.push("AllWallets"):w.RouterController.push("ConnectingWalletConnect",{redirectView:t});return}if("multiChain"===e.subtype){a.ConnectorController.setActiveConnector(e.connector),w.RouterController.push("ConnectingMultiChain",{redirectView:t});return}if("injected"===e.subtype){a.ConnectorController.setActiveConnector(e.connector),w.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}if("announced"===e.subtype)return"walletConnect"===e.connector.id?void(d.CoreHelperUtil.isMobile()?w.RouterController.push("AllWallets"):w.RouterController.push("ConnectingWalletConnect",{redirectView:t})):(w.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}),void 0);w.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){let o=e.wallet,n=H.AssetUtil.getWalletImage(o),a=V.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),l=this.loadingTelegram,s="recent"===e.subtype?"recent":void 0,c="recent"===e.subtype?"info":void 0;return i.html`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,et.ifDefined)(n)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${(0,et.ifDefined)(this.tabIdx)}
        ?loading=${l}
        ?disabled=${a}
        rdnsId=${(0,et.ifDefined)(o.rdns||void 0)}
        walletRank=${(0,et.ifDefined)(o.order)}
        tagLabel=${(0,et.ifDefined)(s)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=w.RouterController.state.data?.redirectView;if("featured"===e.subtype)return void a.ConnectorController.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;a.ConnectorController.selectWalletConnector(e.wallet);return}if("custom"===e.subtype){if(this.loadingTelegram)return;w.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let i=a.ConnectorController.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});i?w.RouterController.push("ConnectingExternal",{connector:i,redirectView:t}):w.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};tA.styles=tS,tR([(0,R.property)({type:Number})],tA.prototype,"tabIdx",void 0),tR([(0,o.state)()],tA.prototype,"connectors",void 0),tR([(0,o.state)()],tA.prototype,"recommended",void 0),tR([(0,o.state)()],tA.prototype,"featured",void 0),tR([(0,o.state)()],tA.prototype,"explorerWallets",void 0),tR([(0,o.state)()],tA.prototype,"connections",void 0),tR([(0,o.state)()],tA.prototype,"connectorImages",void 0),tR([(0,o.state)()],tA.prototype,"loadingTelegram",void 0),tA=tR([(0,l.customElement)("w3m-connector-list")],tA),e.s([],212605);var tN=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tO=class extends ty.LitElement{constructor(){super(...arguments),this.tabIdx=void 0}render(){return i.html`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${(0,et.ifDefined)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,et.ifDefined)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};tN([(0,R.property)()],tO.prototype,"tabIdx",void 0),tO=tN([(0,l.customElement)("w3m-wallet-login-list")],tO),e.s([],391641);let tT=N.css`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var tI=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tU=class extends e8.LitElement{constructor(){super(),this.unsubscribe=[],this.connectors=a.ConnectorController.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=m.OptionsController.state.features,this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.enableWallets=m.OptionsController.state.enableWallets,this.noAdapters=n.ChainController.state.noAdapters,this.walletGuide="get-started",this.checked=e9.OptionsStateController.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!n.ChainController.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!n.ChainController.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),m.OptionsController.subscribeKey("features",e=>{this.features=e}),m.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),m.OptionsController.subscribeKey("enableWallets",e=>this.enableWallets=e),n.ChainController.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),e9.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=m.OptionsController.state,o=m.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!o&&"get-started"===this.walletGuide&&!this.checked,n=m.OptionsController.state.enableWalletGuide,a=this.enableWallets,l=this.isSocialEnabled||this.authConnector;return i.html`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${(0,F.classMap)({connect:!0,disabled:r})}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${l&&a&&n&&"get-started"===this.walletGuide?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(r?-1:void 0)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return y.HelpersUtil.hasFooter()||!this.remoteFeatures?.reownBranding?null:i.html`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===to.ConstantsUtil.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=eK.WalletUtil.getConnectOrderMethod(this.features,this.connectors);return i.html`${t.map((t,o)=>{switch(t){case"email":return i.html`${this.emailTemplate(e)} ${this.separatorTemplate(o,"email")}`;case"social":return i.html`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return i.html`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=eK.WalletUtil.getConnectOrderMethod(this.features,this.connectors)[e+1];return t?this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,t){let o=this.checkIsThereNextMethod(e),r="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&o&&!r?i.html`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":return this.isAuthEnabled&&this.isEmailEnabled&&"social"!==o&&o?i.html`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null;case"social":return this.isAuthEnabled&&this.isSocialEnabled&&"email"!==o&&o?i.html`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?i.html`<w3m-email-login-widget tabIdx=${(0,et.ifDefined)(e)}></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?i.html`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,et.ifDefined)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){let t=this.enableWallets,o=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets;return t?(d.CoreHelperUtil.isTelegram()&&(d.CoreHelperUtil.isSafari()||d.CoreHelperUtil.isIos())&&V.ConnectionController.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&(o||r)?i.html`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,et.ifDefined)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:i.html`<w3m-wallet-login-list tabIdx=${(0,et.ifDefined)(e)}></w3m-wallet-login-list>`:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:i.html`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",G.MathUtil.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",G.MathUtil.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){w.RouterController.push("ConnectWallets")}};tU.styles=tT,tI([(0,o.state)()],tU.prototype,"connectors",void 0),tI([(0,o.state)()],tU.prototype,"authConnector",void 0),tI([(0,o.state)()],tU.prototype,"features",void 0),tI([(0,o.state)()],tU.prototype,"remoteFeatures",void 0),tI([(0,o.state)()],tU.prototype,"enableWallets",void 0),tI([(0,o.state)()],tU.prototype,"noAdapters",void 0),tI([(0,R.property)()],tU.prototype,"walletGuide",void 0),tI([(0,o.state)()],tU.prototype,"checked",void 0),tI([(0,o.state)()],tU.prototype,"isEmailEnabled",void 0),tI([(0,o.state)()],tU.prototype,"isSocialEnabled",void 0),tI([(0,o.state)()],tU.prototype,"isAuthEnabled",void 0),tU=tI([(0,l.customElement)("w3m-connect-view")],tU),e.s(["W3mConnectView",0,tU],28218);var tD=e.i(683075),tP=e.i(592279),tW=t,tL=e.i(639403);e.i(210380),e.i(595157);var tj=t,t_=t;let tB=N.css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var tz=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tF=class extends t_.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return i.html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tF.styles=[A.resetStyles,A.elementStyles,tB],tz([(0,R.property)({type:Boolean})],tF.prototype,"disabled",void 0),tz([(0,R.property)()],tF.prototype,"label",void 0),tz([(0,R.property)()],tF.prototype,"buttonLabel",void 0),tF=tz([(0,l.customElement)("wui-cta-button")],tF);let tM=N.css`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e["5"]} ${({spacing:e})=>e["5"]};
  }
`;var tH=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tV=class extends tj.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:o,chrome_store:r,homepage:n}=this.wallet,a=d.CoreHelperUtil.isMobile(),l=d.CoreHelperUtil.isIos(),s=d.CoreHelperUtil.isAndroid(),c=[t,o,n,r].filter(Boolean).length>1,p=Y.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!a?i.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>w.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?i.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?i.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&s?i.html`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&d.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};tV.styles=[tM],tH([(0,R.property)({type:Object})],tV.prototype,"wallet",void 0),tV=tH([(0,l.customElement)("w3m-mobile-download-links")],tV),e.s([],121121);let tK=N.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var tq=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class tG extends tW.LitElement{constructor(){super(),this.wallet=w.RouterController.state.data?.wallet,this.connector=w.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=H.AssetUtil.getConnectorImage(this.connector)??H.AssetUtil.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=V.ConnectionController.state.wcUri,this.error=V.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(V.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),V.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(d.CoreHelperUtil.isTelegram()||d.CoreHelperUtil.isSafari())&&d.CoreHelperUtil.isIos()&&V.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),V.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),i.html`
      <wui-flex
        data-error=${(0,et.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,et.ifDefined)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?i.html`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?i.html`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){V.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=tL.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(d.CoreHelperUtil.copyToClopboard(this.uri),q.SnackController.showSuccess("Link copied"))}catch{q.SnackController.showError("Failed to copy")}}}tG.styles=tK,tq([(0,o.state)()],tG.prototype,"isRetrying",void 0),tq([(0,o.state)()],tG.prototype,"uri",void 0),tq([(0,o.state)()],tG.prototype,"error",void 0),tq([(0,o.state)()],tG.prototype,"ready",void 0),tq([(0,o.state)()],tG.prototype,"showRetry",void 0),tq([(0,o.state)()],tG.prototype,"label",void 0),tq([(0,o.state)()],tG.prototype,"secondaryBtnLabel",void 0),tq([(0,o.state)()],tG.prototype,"secondaryLabel",void 0),tq([(0,o.state)()],tG.prototype,"isLoading",void 0),tq([(0,R.property)({type:Boolean})],tG.prototype,"isMobile",void 0),tq([(0,R.property)()],tG.prototype,"onRetry",void 0),e.s(["W3mConnectingWidget",0,tG],181557);let tX=class extends tG{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=V.ConnectionController.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=m.OptionsController.state.remoteFeatures,this.currentActiveConnectorId=a.ConnectorController.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:w.RouterController.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(a.ConnectorController.subscribeKey("activeConnectorIds",t=>{let i=t[e],o=this.remoteFeatures?.multiWallet,{redirectView:r}=w.RouterController.state.data??{};i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(w.RouterController.replace("ProfileWallets"),q.SnackController.showSuccess("New Wallet Added")):r?w.RouterController.replace(r):h.ModalController.close())}),V.ConnectionController.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===r.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK&&this.error||await V.ConnectionController.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof tP.AppKitError&&e.originalName===tD.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?p.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):p.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)w.RouterController.replace("Connect");else{let e=K.ConnectionControllerUtil.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),o=K.ConnectionControllerUtil.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);0===o.length?this.hasMultipleConnections&&i?(w.RouterController.replace("ProfileWallets"),q.SnackController.showSuccess("Wallet deleted")):h.ModalController.close():!e.every(e=>o.some(t=>en.HelpersUtil.isLowerCaseMatch(e.address,t.address)))&&i&&w.RouterController.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>en.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id))}};tX=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.customElement)("w3m-connecting-external-view")],tX),e.s(["W3mConnectingExternalView",0,tX],217283);var tY=t;let tJ=x.css`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var tQ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tZ=class extends tY.LitElement{constructor(){super(),this.unsubscribe=[],this.activeConnector=a.ConnectorController.state.activeConnector,this.unsubscribe.push(a.ConnectorController.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,et.ifDefined)(H.AssetUtil.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e,t)=>e.name?i.html`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${(0,et.ifDefined)(H.AssetUtil.getChainImage(e.chain))}
              name=${r.ConstantsUtil.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain),i=w.RouterController.state.data?.redirectView;t?"walletConnect"===t.id?d.CoreHelperUtil.isMobile()?w.RouterController.push("AllWallets"):w.RouterController.push("ConnectingWalletConnect",{redirectView:i}):w.RouterController.push("ConnectingExternal",{connector:t,redirectView:i,wallet:this.activeConnector?.explorerWallet}):q.SnackController.showError("Failed to find connector")}};tZ.styles=tJ,tQ([(0,o.state)()],tZ.prototype,"activeConnector",void 0),tZ=tQ([(0,l.customElement)("w3m-connecting-multi-chain-view")],tZ),e.s(["W3mConnectingMultiChainView",0,tZ],904356)},910842,90344,612639,669783,108201,64077,667772,744216,569962,505676,317016,843476,516519,427159,149566,e=>{"use strict";e.i(237287),e.i(972801),e.i(885873),e.i(619295),e.i(465487),e.i(590404),e.i(269311),e.i(979890),e.i(674950),e.i(107337),e.i(210149),e.i(28218),e.i(217283),e.i(904356),e.i(812207);var t=e.i(108285),i=e.i(654479);e.i(374576);var o=e.i(120119),r=e.i(56350),n=e.i(683075),a=e.i(592279),l=e.i(960398),s=e.i(971080),c=e.i(227302),d=e.i(653157),p=e.i(803468),u=e.i(82283),h=e.i(221728),m=e.i(811424);e.i(404041);var w=e.i(645975),f=e.i(334523),g=t;e.i(62238),e.i(359072);var b=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends g.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return i.html`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};b([(0,o.property)({type:Array})],C.prototype,"platforms",void 0),b([(0,o.property)()],C.prototype,"onSelectPlatfrom",void 0),C=b([(0,w.customElement)("w3m-connecting-header")],C);var y=e.i(149454),v=e.i(181557);let x=class extends v.W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:h.RouterController.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=y.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await s.ConnectionController.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");p.ModalController.close()}catch(e){e instanceof a.AppKitError&&e.originalName===n.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):d.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};x=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-connecting-wc-browser")],x);var $=v;let k=class extends $.W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:h.RouterController.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=c.CoreHelperUtil.formatNativeUrl(e,this.uri);s.ConnectionController.setWcLinking({name:t,href:o}),s.ConnectionController.setRecentWallet(this.wallet),c.CoreHelperUtil.openHref(i,"_blank")}catch{this.error=!0}}};k=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-connecting-wc-desktop")],k);var E=e.i(360334),S=v,R=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let A=class extends S.W3mConnectingWidget{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=u.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:n}=c.CoreHelperUtil.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=c.CoreHelperUtil.isIframe()?"_top":"_self",s.ConnectionController.setWcLinking({name:i,href:n}),s.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?c.CoreHelperUtil.openHref(this.redirectUniversalLink,this.target):c.CoreHelperUtil.openHref(this.redirectDeeplink,this.target)}catch(e){d.EventsController.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=E.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(s.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:h.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){s.ConnectionController.setWcError(!1),this.onConnect?.()}};R([(0,r.state)()],A.prototype,"redirectDeeplink",void 0),R([(0,r.state)()],A.prototype,"redirectUniversalLink",void 0),R([(0,r.state)()],A.prototype,"target",void 0),R([(0,r.state)()],A.prototype,"preferUniversalLinks",void 0),R([(0,r.state)()],A.prototype,"isLoading",void 0),A=R([(0,w.customElement)("w3m-connecting-wc-mobile")],A),e.i(234051);var N=e.i(829389),O=e.i(436220),T=e.i(639403);e.i(443452),e.i(210380),e.i(732965),e.i(780313),e.i(249536),e.i(803596);var I=v;e.i(121121);var U=e.i(162611);let D=U.css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var P=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let W=class extends I.W3mConnectingWidget{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:h.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;s.ConnectionController.setWcLinking(void 0),s.ConnectionController.setRecentWallet(this.wallet);let t=T.ThemeController.state.themeVariables["--apkt-qr-color"]??T.ThemeController.state.themeVariables["--w3m-qr-color"];return i.html` <wui-qr-code
      theme=${T.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,N.ifDefined)(O.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,N.ifDefined)(t)}
      alt=${(0,N.ifDefined)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return i.html`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};W.styles=D,P([(0,o.property)({type:Boolean})],W.prototype,"basic",void 0),W=P([(0,w.customElement)("w3m-connecting-wc-qrcode")],W);var L=t;e.i(956303);let j=class extends L.LitElement{constructor(){if(super(),this.wallet=h.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:h.RouterController.state.view}})}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,N.ifDefined)(O.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};j=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-connecting-wc-unsupported")],j);var _=v,B=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let z=class extends _.W3mConnectingWidget{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=E.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(s.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:h.RouterController.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=c.CoreHelperUtil.formatUniversalUrl(e,this.uri);s.ConnectionController.setWcLinking({name:t,href:o}),s.ConnectionController.setRecentWallet(this.wallet),c.CoreHelperUtil.openHref(i,"_blank")}catch{this.error=!0}}};B([(0,r.state)()],z.prototype,"isLoading",void 0),z=B([(0,w.customElement)("w3m-connecting-wc-web")],z);let F=U.css`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var M=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let H=class extends t.LitElement{constructor(){super(),this.wallet=h.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!u.OptionsController.state.siwx,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u.OptionsController.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),i.html`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?i.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!u.OptionsController.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=s.ConnectionController.state,{redirectView:o}=h.RouterController.state.data??{};if(e||u.OptionsController.state.enableEmbedded||c.CoreHelperUtil.isPairingExpired(t)||"connecting"===i){let e=s.ConnectionController.getConnections(l.ChainController.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await s.ConnectionController.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(h.RouterController.replace("ProfileWallets"),m.SnackController.showSuccess("New Wallet Added")):o?h.RouterController.replace(o):p.ModalController.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!u.OptionsController.state.enableNetworkSwitch&&l.ChainController.state.activeChain){l.ChainController.setActiveCaipNetwork(f.CaipNetworksUtil.getUnsupportedNetwork(`${l.ChainController.state.activeChain}:${l.ChainController.state.activeCaipNetwork?.id}`)),l.ChainController.showUnsupportedChainUI();return}e instanceof a.AppKitError&&e.originalName===n.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):d.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),s.ConnectionController.setWcError(!0),m.SnackController.showError(e.message??"Connection error"),s.ConnectionController.resetWcConnection(),h.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:r}=this.wallet,n=o?.map(({injected_id:e})=>e).filter(Boolean),a=[...r?[r]:n??[]],d=!u.OptionsController.state.isUniversalProvider&&a.length,p=s.ConnectionController.checkInstalled(a),h=d&&p,m=t&&!c.CoreHelperUtil.isMobile();h&&!l.ChainController.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(c.CoreHelperUtil.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),m&&this.platforms.push("desktop"),h||!d||l.ChainController.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return i.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return i.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return i.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return i.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return i.html`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return i.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?i.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};H.styles=F,M([(0,r.state)()],H.prototype,"platform",void 0),M([(0,r.state)()],H.prototype,"platforms",void 0),M([(0,r.state)()],H.prototype,"isSiwxEnabled",void 0),M([(0,r.state)()],H.prototype,"remoteFeatures",void 0),M([(0,o.property)({type:Boolean})],H.prototype,"displayBranding",void 0),M([(0,o.property)({type:Boolean})],H.prototype,"basic",void 0),H=M([(0,w.customElement)("w3m-connecting-wc-view")],H),e.s(["W3mConnectingWcView",0,H],90344);var V=t,K=e.i(886259),q=e.i(758331);e.i(903134),e.i(212605);var G=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let X=class extends V.LitElement{constructor(){super(),this.unsubscribe=[],this.isMobile=c.CoreHelperUtil.isMobile(),this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.unsubscribe.push(u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=K.ApiController.state,{customWallets:o}=u.OptionsController.state,r=q.StorageUtil.getRecentWallets(),n=e.length||t.length||o?.length||r.length;return i.html`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?i.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.html`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?i.html` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};G([(0,r.state)()],X.prototype,"isMobile",void 0),G([(0,r.state)()],X.prototype,"remoteFeatures",void 0),X=G([(0,w.customElement)("w3m-connecting-wc-basic-view")],X),e.s(["W3mConnectingWcBasicView",0,X],612639);var Y=t,J=e.i(576599),Q=e.i(564126);e.i(534420),e.i(746650);var Z=e.i(979484),ee=e.i(315193);let et=ee.css`
  .continue-button-container {
    width: 100%;
  }
`;var ei=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eo=class extends Y.LitElement{constructor(){super(...arguments),this.loading=!1}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{c.CoreHelperUtil.openHref(J.NavigationUtil.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return i.html` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return i.html`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){h.RouterController.push("RegisterAccountName"),d.EventsController.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,Q.getPreferredAccountType)(l.ChainController.state.activeChain)===Z.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};eo.styles=et,ei([(0,r.state)()],eo.prototype,"loading",void 0),eo=ei([(0,w.customElement)("w3m-choose-account-name-view")],eo),e.s(["W3mChooseAccountNameView",0,eo],669783);var er=t;e.i(143053);let en=class extends er.LitElement{constructor(){super(...arguments),this.wallet=h.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return i.html`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?i.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?i.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?i.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?i.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(d.EventsController.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),c.CoreHelperUtil.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};en=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-downloads-view")],en),e.s(["W3mDownloadsView",0,en],108201);var ea=t;let el=class extends ea.LitElement{render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{c.CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=K.ApiController.state,{customWallets:o}=u.OptionsController.state;return[...t,...o??[],...e].slice(0,4).map((e,t)=>i.html`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${(0,N.ifDefined)(O.AssetUtil.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){d.EventsController.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),c.CoreHelperUtil.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}};el=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-get-wallet-view")],el),e.s(["W3mGetWalletView",0,el],64077);var es=t,ec=t;e.i(357650);var ed=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ep=class extends ec.LitElement{constructor(){super(...arguments),this.data=[]}render(){return i.html`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>i.html`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>i.html`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};ed([(0,o.property)({type:Array})],ep.prototype,"data",void 0),ep=ed([(0,w.customElement)("w3m-help-widget")],ep);let eu=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eh=class extends es.LitElement{render(){return i.html`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${eu}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){d.EventsController.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),h.RouterController.push("GetWallet")}};eh=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-what-is-a-wallet-view")],eh),e.s(["W3mWhatIsAWalletView",0,eh],667772);var em=t,ew=e.i(455587);e.i(729084),e.i(391641);let ef=U.css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var eg=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eb=class extends em.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=ew.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(ew.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=u.OptionsController.state,o=u.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!o,n=r&&!this.checked;return i.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","3","3","3"]:"3"}
        gap="2"
        class=${(0,N.ifDefined)(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,N.ifDefined)(n?-1:void 0)}></w3m-wallet-login-list>
      </wui-flex>
    `}};eb.styles=ef,eg([(0,r.state)()],eb.prototype,"checked",void 0),eb=eg([(0,w.customElement)("w3m-connect-wallets-view")],eb),e.s(["W3mConnectWalletsView",0,eb],744216);var eC=t,ey=e.i(401564),ev=e.i(218454),ex=t,e$=e.i(459088);let ek=U.css`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eE=class extends ex.LitElement{render(){return i.html`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eE.styles=[e$.resetStyles,ek],eE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("wui-loading-hexagon")],eE),e.i(774339);let eS=ee.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var eR=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eA=class extends eC.LitElement{constructor(){super(),this.network=h.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return i.html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,N.ifDefined)(O.AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:i.html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=y.ConnectorController.getConnectorId(l.ChainController.state.activeChain);return y.ConnectorController.getAuthConnector()&&e===ey.ConstantsUtil.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=y.ConnectorController.getConnectorId(l.ChainController.state.activeChain);return y.ConnectorController.getAuthConnector()&&e===ey.ConstantsUtil.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,l.ChainController.state.activeChain!==this.network?.chainNamespace&&l.ChainController.setIsSwitchingNamespace(!0),this.network&&(await l.ChainController.switchActiveNetwork(this.network),await ev.SIWXUtil.isAuthenticated()&&h.RouterController.goBack())}catch(e){this.error=!0}}};eA.styles=eS,eR([(0,r.state)()],eA.prototype,"showRetry",void 0),eR([(0,r.state)()],eA.prototype,"error",void 0),eA=eR([(0,w.customElement)("w3m-network-switch-view")],eA),e.s(["W3mNetworkSwitchView",0,eA],569962);var eN=t,eO=e.i(241845),eT=e.i(798852);e.i(6957);var eI=t;e.i(839009),e.i(496969);let eU=U.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var eD=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eP=class extends eI.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return i.html`
      <button ?disabled=${this.disabled} tabindex=${(0,N.ifDefined)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?i.html`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:i.html`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};eP.styles=[e$.resetStyles,e$.elementStyles,eU],eD([(0,o.property)()],eP.prototype,"imageSrc",void 0),eD([(0,o.property)()],eP.prototype,"name",void 0),eD([(0,o.property)()],eP.prototype,"tabIdx",void 0),eD([(0,o.property)({type:Boolean})],eP.prototype,"disabled",void 0),eP=eD([(0,w.customElement)("wui-list-network")],eP);let eW=ee.css`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var eL=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ej=class extends eN.LitElement{constructor(){super(),this.unsubscribe=[],this.network=l.ChainController.state.activeCaipNetwork,this.requestedCaipNetworks=l.ChainController.getCaipNetworks(),this.search="",this.onDebouncedSearch=c.CoreHelperUtil.debounce(e=>{this.search=e},100),this.unsubscribe.push(eO.AssetController.subscribeNetworkImages(()=>this.requestUpdate()),l.ChainController.subscribeKey("activeCaipNetwork",e=>this.network=e),l.ChainController.subscribe(()=>{this.requestedCaipNetworks=l.ChainController.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return i.html`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){let e=l.ChainController.getAllApprovedCaipNetworkIds(),t=c.CoreHelperUtil.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>i.html`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,N.ifDefined)(O.AssetUtil.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${l.ChainController.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}onSwitchNetwork(e){eT.NetworkUtil.onSwitchNetwork({network:e})}};ej.styles=eW,eL([(0,r.state)()],ej.prototype,"network",void 0),eL([(0,r.state)()],ej.prototype,"requestedCaipNetworks",void 0),eL([(0,r.state)()],ej.prototype,"filteredNetworks",void 0),eL([(0,r.state)()],ej.prototype,"search",void 0),ej=eL([(0,w.customElement)("w3m-networks-view")],ej),e.s(["W3mNetworksView",0,ej],505676);var e_=t;let eB=U.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e["1"]} * 9 - ${({borderRadius:e})=>e["3"]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e["1"]} * 9 - ${({borderRadius:e})=>e["3"]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e["2"]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var ez=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eF={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0},eM=class extends e_.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=h.RouterController.state.data?.switchToChain,this.caipNetwork=h.RouterController.state.data?.network,this.activeChain=l.ChainController.state.activeChain}firstUpdated(){this.unsubscribe.push(l.ChainController.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?ey.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;let t=ey.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain];return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${(0,N.ifDefined)(eF[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(l.ChainController.setIsSwitchingNamespace(!0),y.ConnectorController.setFilterByNamespace(this.switchToChain),this.caipNetwork?await l.ChainController.switchActiveNetwork(this.caipNetwork):l.ChainController.setActiveNamespace(this.switchToChain),h.RouterController.reset("Connect"))}};eM.styles=eB,ez([(0,o.property)()],eM.prototype,"activeChain",void 0),eM=ez([(0,w.customElement)("w3m-switch-active-chain-view")],eM),e.s(["W3mSwitchActiveChainView",0,eM],317016);var eH=t;let eV=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eK=class extends eH.LitElement{render(){return i.html`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${eV}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{c.CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eK=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-what-is-a-network-view")],eK),e.s(["W3mWhatIsANetworkView",0,eK],843476);var eq=t;e.i(79929);let eG=ee.css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var eX=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eY=class extends eq.LitElement{constructor(){super(),this.swapUnsupportedChain=h.RouterController.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.unsubscribe.push(eO.AssetController.subscribeNetworkImages(()=>this.requestUpdate()),u.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?i.html`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:i.html`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=l.ChainController.getAllRequestedCaipNetworks(),t=l.ChainController.getAllApprovedCaipNetworkIds(),o=c.CoreHelperUtil.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?o.filter(e=>E.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):o).map(e=>i.html`
        <wui-list-network
          imageSrc=${(0,N.ifDefined)(O.AssetUtil.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=l.ChainController.state.activeChain,t=s.ConnectionController.getConnections(e).length>0,i=e&&y.ConnectorController.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await s.ConnectionController.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(h.RouterController.push("ProfileWallets"),m.SnackController.showSuccess("Wallet deleted"))}catch{d.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),m.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=l.ChainController.getActiveCaipAddress(),i=l.ChainController.getAllApprovedCaipNetworkIds(),o=(l.ChainController.getNetworkProp("supportsAllNetworks",e.chainNamespace),h.RouterController.state.data);t?i?.includes(e.caipNetworkId)?await l.ChainController.switchActiveNetwork(e):h.RouterController.push("SwitchNetwork",{...o,network:e}):t||(l.ChainController.setActiveCaipNetwork(e),h.RouterController.push("Connect"))}};eY.styles=eG,eX([(0,r.state)()],eY.prototype,"disconnecting",void 0),eX([(0,r.state)()],eY.prototype,"remoteFeatures",void 0),eY=eX([(0,w.customElement)("w3m-unsupported-chain-view")],eY),e.s(["W3mUnsupportedChainView",0,eY],516519);var eJ=t,eQ=t;e.i(912190);let eZ=U.css`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var e0=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e3=class extends eQ.LitElement{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return i.html`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};e3.styles=[e$.resetStyles,e$.elementStyles,eZ],e0([(0,o.property)()],e3.prototype,"icon",void 0),e0([(0,o.property)()],e3.prototype,"text",void 0),e0([(0,o.property)()],e3.prototype,"type",void 0),e3=e0([(0,w.customElement)("wui-banner")],e3);let e1=ee.css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,e2=class extends eJ.LitElement{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=l.ChainController.getAllRequestedCaipNetworks(),t=l.ChainController.getAllApprovedCaipNetworkIds(),o=l.ChainController.state.activeCaipNetwork,r=l.ChainController.checkIfSmartAccountEnabled(),n=c.CoreHelperUtil.sortRequestedNetworks(t,e);if(r&&(0,Q.getPreferredAccountType)(o?.chainNamespace)===Z.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;n=[o]}return n.filter(e=>e.chainNamespace===o?.chainNamespace).map(e=>i.html`
        <wui-list-network
          imageSrc=${(0,N.ifDefined)(O.AssetUtil.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};e2.styles=e1,e2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-wallet-compatible-networks-view")],e2),e.s(["W3mWalletCompatibleNetworksView",0,e2],427159);var e5=t,e4=t,e6=t;e.i(852634),e.i(864380);let e8=U.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var e9=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e7=class extends e6.LitElement{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",i.html`${this.templateVisual()}`}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:i.html`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};e7.styles=[e$.resetStyles,e8],e9([(0,o.property)()],e7.prototype,"imageSrc",void 0),e9([(0,o.property)()],e7.prototype,"alt",void 0),e9([(0,o.property)({type:Boolean})],e7.prototype,"borderRadiusFull",void 0),e7=e9([(0,w.customElement)("wui-visual-thumbnail")],e7);let te=U.css`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e["4"]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,tt=class extends e4.LitElement{constructor(){super(...arguments),this.dappImageUrl=u.OptionsController.state.metadata?.icons,this.walletImageUrl=l.ChainController.getAccountData()?.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return i.html`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};tt.styles=te,tt=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,w.customElement)("w3m-siwx-sign-message-thumbnails")],tt);var ti=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let to=class extends e5.LitElement{constructor(){super(...arguments),this.dappName=u.OptionsController.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return i.html`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await ev.SIWXUtil.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){m.SnackController.showError({message:"Something went wrong. We need to verify your account again."}),h.RouterController.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await ev.SIWXUtil.cancelSignMessage().finally(()=>this.isCancelling=!1)}};ti([(0,r.state)()],to.prototype,"isCancelling",void 0),ti([(0,r.state)()],to.prototype,"isSigning",void 0),to=ti([(0,w.customElement)("w3m-siwx-sign-message-view")],to),e.s(["W3mSIWXSignMessageView",0,to],149566),e.s([],910842)}]);
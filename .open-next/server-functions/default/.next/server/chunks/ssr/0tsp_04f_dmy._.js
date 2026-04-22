module.exports=[785454,a=>{"use strict";Symbol();let b=Symbol(),c=Object.getPrototypeOf,d=new WeakMap,e=a=>{let e;return(e=a)&&(d.has(e)?d.get(e):c(e)===Object.prototype||c(e)===Array.prototype)&&a[b]||null},f=(a,b=!0)=>{d.set(a,b)},g={get url(){return`file://${a.P("node_modules/@walletconnect/ethereum-provider/node_modules/valtio/esm/vanilla.mjs")}`}},h=a=>"object"==typeof a&&null!==a,i=new WeakMap,j=new WeakSet,k=(a=Object.is,b=(a,b)=>new Proxy(a,b),c=a=>h(a)&&!j.has(a)&&(Array.isArray(a)||!(Symbol.iterator in a))&&!(a instanceof WeakMap)&&!(a instanceof WeakSet)&&!(a instanceof Error)&&!(a instanceof Number)&&!(a instanceof Date)&&!(a instanceof String)&&!(a instanceof RegExp)&&!(a instanceof ArrayBuffer),d=a=>{switch(a.status){case"fulfilled":return a.value;case"rejected":throw a.reason;default:throw a}},k=new WeakMap,l=(a,b,c=d)=>{let e=k.get(a);if((null==e?void 0:e[0])===b)return e[1];let g=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a));return f(g,!0),k.set(a,[b,g]),Reflect.ownKeys(a).forEach(b=>{if(Object.getOwnPropertyDescriptor(g,b))return;let d=Reflect.get(a,b),{enumerable:e}=Reflect.getOwnPropertyDescriptor(a,b),h={value:d,enumerable:e,configurable:!0};if(j.has(d))f(d,!1);else if(d instanceof Promise)delete h.value,h.get=()=>c(d);else if(i.has(d)){let[a,b]=i.get(d);h.value=l(a,b(),c)}Object.defineProperty(g,b,h)}),Object.preventExtensions(g)},m=new WeakMap,n=[1,1],o=d=>{if(!h(d))throw Error("object required");let f=m.get(d);if(f)return f;let k=n[0],p=new Set,q=(a,b=++n[0])=>{k!==b&&(k=b,p.forEach(c=>c(a,b)))},r=n[1],s=(a=++n[1])=>(r===a||p.size||(r=a,u.forEach(([b])=>{let c=b[1](a);c>k&&(k=c)})),k),t=a=>(b,c)=>{let d=[...b];d[1]=[a,...d[1]],q(d,c)},u=new Map,v=(a,b)=>{if((g.env?g.env.MODE:void 0)!=="production"&&u.has(a))throw Error("prop listener already exists");if(p.size){let c=b[3](t(a));u.set(a,[b,c])}else u.set(a,[b])},w=a=>{var b;let c=u.get(a);c&&(u.delete(a),null==(b=c[1])||b.call(c))},x=a=>{p.add(a),1===p.size&&u.forEach(([a,b],c)=>{if((g.env?g.env.MODE:void 0)!=="production"&&b)throw Error("remove already exists");let d=a[3](t(c));u.set(c,[a,d])});let b=()=>{p.delete(a),0===p.size&&u.forEach(([a,b],c)=>{b&&(b(),u.set(c,[a]))})};return b},y=Array.isArray(d)?[]:Object.create(Object.getPrototypeOf(d)),z={deleteProperty(a,b){let c=Reflect.get(a,b);w(b);let d=Reflect.deleteProperty(a,b);return d&&q(["delete",[b],c]),d},set(b,d,f,g){let k=Reflect.has(b,d),l=Reflect.get(b,d,g);if(k&&(a(l,f)||m.has(f)&&a(l,m.get(f))))return!0;w(d),h(f)&&(f=e(f)||f);let n=f;if(f instanceof Promise)f.then(a=>{f.status="fulfilled",f.value=a,q(["resolve",[d],a])}).catch(a=>{f.status="rejected",f.reason=a,q(["reject",[d],a])});else{!i.has(f)&&c(f)&&(n=o(f));let a=!j.has(n)&&i.get(n);a&&v(d,a)}return Reflect.set(b,d,n,g),q(["set",[d],f,l]),!0}},A=b(y,z);m.set(d,A);let B=[y,s,l,x];return i.set(A,B),Reflect.ownKeys(d).forEach(a=>{let b=Object.getOwnPropertyDescriptor(d,a);"value"in b&&(A[a]=d[a],delete b.value,delete b.writable),Object.defineProperty(y,a,b)}),A})=>[o,i,j,a,b,c,d,k,l,m,n],[l]=k();a.s(["proxy",0,function(a={}){return l(a)},"ref",0,function(a){return j.add(a),a},"snapshot",0,function(a,b){let c=i.get(a);(g.env?g.env.MODE:void 0)==="production"||c||console.warn("Please use proxy object");let[d,e,f]=c;return f(d,e(),b)},"subscribe",0,function(a,b,c){let d,e=i.get(a);(g.env?g.env.MODE:void 0)==="production"||e||console.warn("Please use proxy object");let f=[],h=e[3],j=!1,k=h(a=>{(f.push(a),c)?b(f.splice(0)):d||(d=Promise.resolve().then(()=>{d=void 0,j&&b(f.splice(0))}))});return j=!0,()=>{j=!1,k()}},"unstable_buildProxyFunction",0,k],785454)},653972,a=>{"use strict";let b=("u">typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",c={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:b,SECURE_SITE_DASHBOARD:`${b}/dashboard`,SECURE_SITE_FAVICON:`${b}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}};a.s(["ConstantsUtil",0,c,"MELD_PUBLIC_KEY",0,"WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU","ONRAMP_PROVIDERS",0,[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}]])},219687,a=>{"use strict";let b={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:("u">typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org"};a.s(["ConstantsUtil",0,b])},123156,330746,630544,a=>{"use strict";var b=a.i(219687),c=a.i(653972);let d={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections"};function e(a){if(!a)throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${a}:connected_connector_id`}let f={setItem(a,b){g()},getItem(a){g()},removeItem(a){g()},clear(){g()}};function g(){return!1}a.s(["SafeLocalStorage",0,f,"SafeLocalStorageKeys",0,d,"getSafeConnectorIdKey",0,e,"isSafe",0,g],330746);let h={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired:(a,b)=>Date.now()-a>b,getActiveNetworkProps(){let a=h.getActiveNamespace(),b=h.getActiveCaipNetworkId(),c=b?b.split(":")[1]:void 0;return{namespace:a,caipNetworkId:b,chainId:c?isNaN(Number(c))?c:Number(c):void 0}},setWalletConnectDeepLink({name:a,href:b}){try{f.setItem(d.DEEPLINK_CHOICE,JSON.stringify({href:b,name:a}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let a=f.getItem(d.DEEPLINK_CHOICE);if(a)return JSON.parse(a)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{f.removeItem(d.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(a){try{f.setItem(d.ACTIVE_NAMESPACE,a)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(a){try{f.setItem(d.ACTIVE_CAIP_NETWORK_ID,a),h.setActiveNamespace(a.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return f.getItem(d.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{f.removeItem(d.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(a){try{let b=e(a);f.removeItem(b)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(a){try{let b=h.getRecentWallets();b.find(b=>b.id===a.id)||(b.unshift(a),b.length>2&&b.pop(),f.setItem(d.RECENT_WALLETS,JSON.stringify(b)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{let a=f.getItem(d.RECENT_WALLETS);return a?JSON.parse(a):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(a,b){try{let c=e(a);f.setItem(c,b)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return f.getItem(d.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(a){if(a)try{let b=e(a);return f.getItem(b)}catch(b){console.info("Unable to get connected connector id in namespace ",a)}},setConnectedSocialProvider(a){try{f.setItem(d.CONNECTED_SOCIAL,a)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return f.getItem(d.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{f.removeItem(d.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return f.getItem(d.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){let a=f.getItem(d.ACTIVE_CAIP_NETWORK_ID);return a?.split(":")?.[1]},setConnectionStatus(a){try{f.setItem(d.CONNECTION_STATUS,a)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return f.getItem(d.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{let a=f.getItem(d.CONNECTED_NAMESPACES);if(!a?.length)return[];return a.split(",")}catch{return[]}},setConnectedNamespaces(a){try{let b=Array.from(new Set(a));f.setItem(d.CONNECTED_NAMESPACES,b.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(a){try{let b=h.getConnectedNamespaces();b.includes(a)||(b.push(a),h.setConnectedNamespaces(b))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(a){try{let b=h.getConnectedNamespaces(),c=b.indexOf(a);c>-1&&(b.splice(c,1),h.setConnectedNamespaces(b))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return f.getItem(d.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(a){try{f.setItem(d.TELEGRAM_SOCIAL_PROVIDER,a)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{f.removeItem(d.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let a={};try{let b=f.getItem(d.PORTFOLIO_CACHE);a=b?JSON.parse(b):{}}catch{console.info("Unable to get balance cache")}return a},removeAddressFromBalanceCache(a){try{let b=h.getBalanceCache();f.setItem(d.PORTFOLIO_CACHE,JSON.stringify({...b,[a]:void 0}))}catch{console.info("Unable to remove address from balance cache",a)}},getBalanceCacheForCaipAddress(a){try{let b=h.getBalanceCache()[a];if(b&&!this.isCacheExpired(b.timestamp,this.cacheExpiry.portfolio))return b.balance;h.removeAddressFromBalanceCache(a)}catch{console.info("Unable to get balance cache for address",a)}},updateBalanceCache(a){try{let b=h.getBalanceCache();b[a.caipAddress]=a,f.setItem(d.PORTFOLIO_CACHE,JSON.stringify(b))}catch{console.info("Unable to update balance cache",a)}},getNativeBalanceCache(){let a={};try{let b=f.getItem(d.NATIVE_BALANCE_CACHE);a=b?JSON.parse(b):{}}catch{console.info("Unable to get balance cache")}return a},removeAddressFromNativeBalanceCache(a){try{let b=h.getBalanceCache();f.setItem(d.NATIVE_BALANCE_CACHE,JSON.stringify({...b,[a]:void 0}))}catch{console.info("Unable to remove address from balance cache",a)}},getNativeBalanceCacheForCaipAddress(a){try{let b=h.getNativeBalanceCache()[a];if(b&&!this.isCacheExpired(b.timestamp,this.cacheExpiry.nativeBalance))return b;console.info("Discarding cache for address",a),h.removeAddressFromBalanceCache(a)}catch{console.info("Unable to get balance cache for address",a)}},updateNativeBalanceCache(a){try{let b=h.getNativeBalanceCache();b[a.caipAddress]=a,f.setItem(d.NATIVE_BALANCE_CACHE,JSON.stringify(b))}catch{console.info("Unable to update balance cache",a)}},getEnsCache(){let a={};try{let b=f.getItem(d.ENS_CACHE);a=b?JSON.parse(b):{}}catch{console.info("Unable to get ens name cache")}return a},getEnsFromCacheForAddress(a){try{let b=h.getEnsCache()[a];if(b&&!this.isCacheExpired(b.timestamp,this.cacheExpiry.ens))return b.ens;h.removeEnsFromCache(a)}catch{console.info("Unable to get ens name from cache",a)}},updateEnsCache(a){try{let b=h.getEnsCache();b[a.address]=a,f.setItem(d.ENS_CACHE,JSON.stringify(b))}catch{console.info("Unable to update ens name cache",a)}},removeEnsFromCache(a){try{let b=h.getEnsCache();f.setItem(d.ENS_CACHE,JSON.stringify({...b,[a]:void 0}))}catch{console.info("Unable to remove ens name from cache",a)}},getIdentityCache(){let a={};try{let b=f.getItem(d.IDENTITY_CACHE);a=b?JSON.parse(b):{}}catch{console.info("Unable to get identity cache")}return a},getIdentityFromCacheForAddress(a){try{let b=h.getIdentityCache()[a];if(b&&!this.isCacheExpired(b.timestamp,this.cacheExpiry.identity))return b.identity;h.removeIdentityFromCache(a)}catch{console.info("Unable to get identity from cache",a)}},updateIdentityCache(a){try{let b=h.getIdentityCache();b[a.address]={identity:a.identity,timestamp:a.timestamp},f.setItem(d.IDENTITY_CACHE,JSON.stringify(b))}catch{console.info("Unable to update identity cache",a)}},removeIdentityFromCache(a){try{let b=h.getIdentityCache();f.setItem(d.IDENTITY_CACHE,JSON.stringify({...b,[a]:void 0}))}catch{console.info("Unable to remove identity from cache",a)}},clearAddressCache(){try{f.removeItem(d.PORTFOLIO_CACHE),f.removeItem(d.NATIVE_BALANCE_CACHE),f.removeItem(d.ENS_CACHE),f.removeItem(d.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(a){try{f.setItem(d.PREFERRED_ACCOUNT_TYPES,JSON.stringify(a))}catch{console.info("Unable to set preferred account types",a)}},getPreferredAccountTypes(){try{let a=f.getItem(d.PREFERRED_ACCOUNT_TYPES);if(!a)return{};return JSON.parse(a)}catch{console.info("Unable to get preferred account types")}return{}},setConnections(a,b){try{let c={...h.getConnections(),[b]:a};f.setItem(d.CONNECTIONS,JSON.stringify(c))}catch(a){console.error("Unable to sync connections to storage",a)}},getConnections(){try{let a=f.getItem(d.CONNECTIONS);if(!a)return{};return JSON.parse(a)}catch(a){return console.error("Unable to get connections from storage",a),{}}}};a.s(["StorageUtil",0,h],630544);let i={isMobile(){return!!this.isClient()&&!!("function"==typeof window?.matchMedia&&window?.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},checkCaipNetwork:(a,b="")=>a?.caipNetworkId.toLocaleLowerCase().includes(b.toLowerCase()),isAndroid(){if(!this.isMobile())return!1;let a=window?.navigator.userAgent.toLowerCase();return i.isMobile()&&a.includes("android")},isIos(){if(!this.isMobile())return!1;let a=window?.navigator.userAgent.toLowerCase();return a.includes("iphone")||a.includes("ipad")},isSafari(){return!!this.isClient()&&(window?.navigator.userAgent.toLowerCase()).includes("safari")},isClient:()=>!1,isPairingExpired:a=>!a||a-Date.now()<=c.ConstantsUtil.TEN_SEC_MS,isAllowedRetry:(a,b=c.ConstantsUtil.ONE_SEC_MS)=>Date.now()-a>=b,copyToClopboard(a){navigator.clipboard.writeText(a)},isIframe(){try{return window?.self!==window?.top}catch(a){return!1}},isSafeApp(){if(i.isClient()&&window.self!==window.top)try{let a=window?.location?.ancestorOrigins?.[0];if(a){let b=new URL(a),c=new URL("https://app.safe.global");return b.hostname===c.hostname}}catch{}return!1},getPairingExpiry:()=>Date.now()+c.ConstantsUtil.FOUR_MINUTES_MS,getNetworkId:a=>a?.split(":")[1],getPlainAddress:a=>a?.split(":")[2],wait:async a=>new Promise(b=>{setTimeout(b,a)}),debounce(a,b=500){let c;return(...d)=>{c&&clearTimeout(c),c=setTimeout(function(){a(...d)},b)}},isHttpUrl:a=>a.startsWith("http://")||a.startsWith("https://"),formatNativeUrl(a,b,c=null){if(i.isHttpUrl(a))return this.formatUniversalUrl(a,b);let d=a,e=c;d.includes("://")||(d=a.replaceAll("/","").replaceAll(":",""),d=`${d}://`),d.endsWith("/")||(d=`${d}/`),e&&!e?.endsWith("/")&&(e=`${e}/`),this.isTelegram()&&this.isAndroid()&&(b=encodeURIComponent(b));let f=encodeURIComponent(b);return{redirect:`${d}wc?uri=${f}`,redirectUniversalLink:e?`${e}wc?uri=${f}`:void 0,href:d}},formatUniversalUrl(a,b){if(!i.isHttpUrl(a))return this.formatNativeUrl(a,b);let c=a;c.endsWith("/")||(c=`${c}/`);let d=encodeURIComponent(b);return{redirect:`${c}wc?uri=${d}`,href:c}},getOpenTargetForPlatform(a){return"popupWindow"===a?a:this.isTelegram()?h.getTelegramSocialProvider()?"_top":"_blank":a},openHref(a,b,c){window?.open(a,this.getOpenTargetForPlatform(b),c||"noreferrer noopener")},returnOpenHref(a,b,c){return window?.open(a,this.getOpenTargetForPlatform(b),c||"noreferrer noopener")},isTelegram:()=>!1,isPWA:()=>!1,preloadImage:async a=>Promise.race([new Promise((b,c)=>{let d=new Image;d.onload=b,d.onerror=c,d.crossOrigin="anonymous",d.src=a}),i.wait(2e3)]),formatBalance(a,b){let c="0.000";if("string"==typeof a){let b=Number(a);if(b){let a=Math.floor(1e3*b)/1e3;a&&(c=a.toString())}}return`${c}${b?` ${b}`:""}`},formatBalance2(a,b){let c;if("0"===a)c="0";else if("string"==typeof a){let b=Number(a);b&&(c=b.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:c??"0",rest:"0"===c?"000":"",symbol:b}},getApiUrl:()=>b.ConstantsUtil.W3M_API_URL,getBlockchainApiUrl:()=>b.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>b.ConstantsUtil.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,a=>{let b=16*Math.random()|0;return("x"===a?b:3&b|8).toString(16)}),parseError:a=>"string"==typeof a?a:"string"==typeof a?.issues?.[0]?.message?a.issues[0].message:a instanceof Error?a.message:"Unknown error",sortRequestedNetworks(a,b=[]){let c={};return b&&a&&(a.forEach((a,b)=>{c[a]=b}),b.sort((a,b)=>{let d=c[a.id],e=c[b.id];return void 0!==d&&void 0!==e?d-e:void 0!==d?-1:1*(void 0!==e)})),b},calculateBalance(a){let b=0;for(let c of a)b+=c.value??0;return b},formatTokenBalance(a){let[b,c]=a.toFixed(2).split(".");return{dollars:b,pennies:c}},isAddress(a,b="eip155"){switch(b){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(a)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(a)||/^(?:0x)?[0-9A-F]{40}$/iu.test(a)))return!0;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(a);default:return!1}},uniqueBy(a,b){let c=new Set;return a.filter(a=>{let d=a[b];return!c.has(d)&&(c.add(d),!0)})},generateSdkVersion(a,b,d){let e=0===a.length?c.ConstantsUtil.ADAPTER_TYPES.UNIVERSAL:a.map(a=>a.adapterType).join(",");return`${b}-${e}-${d}`},createAccount:(a,b,c,d,e)=>({namespace:a,address:b,type:c,publicKey:d,path:e}),isCaipAddress(a){if("string"!=typeof a)return!1;let c=a.split(":"),d=c[0];return 3===c.filter(Boolean).length&&d in b.ConstantsUtil.CHAIN_NAME_MAP},isMac(){let a=window?.navigator.userAgent.toLowerCase();return a.includes("macintosh")&&!a.includes("safari")},formatTelegramSocialLoginUrl(a){let b=`--${encodeURIComponent(window?.location.href)}`,c="state=";if("auth.magic.link"===new URL(a).host){let d="provider_authorization_url=",e=a.substring(a.indexOf(d)+d.length),f=this.injectIntoUrl(decodeURIComponent(e),c,b);return a.replace(e,encodeURIComponent(f))}return this.injectIntoUrl(a,c,b)},injectIntoUrl(a,b,c){let d=a.indexOf(b);if(-1===d)throw Error(`${b} parameter not found in the URL: ${a}`);let e=a.indexOf("&",d),f=b.length,g=-1!==e?e:a.length;return a.substring(0,d+f)+(a.substring(d+f,g)+c)+a.substring(e)}};a.s(["CoreHelperUtil",0,i],123156)},490002,a=>{"use strict";var b=a.i(785454);a.i(252271),new WeakMap,new WeakMap,Symbol(),a.s(["proxyMap",0,function(a){let c=(0,b.proxy)({data:Array.from(a||[]),has(a){return this.data.some(b=>b[0]===a)},set(a,b){let c=this.data.find(b=>b[0]===a);return c?c[1]=b:this.data.push([a,b]),this},get(a){var b;return null==(b=this.data.find(b=>b[0]===a))?void 0:b[1]},delete(a){let b=this.data.findIndex(b=>b[0]===a);return -1!==b&&(this.data.splice(b,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(a){this.data.forEach(b=>{a(b[1],b[0],this)})},keys(){return this.data.map(a=>a[0]).values()},values(){return this.data.map(a=>a[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(c,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(c),c},"subscribeKey",0,function(a,c,d,e){let f=a[c];return(0,b.subscribe)(a,()=>{let b=a[c];Object.is(f,b)||d(f=b)},e)}],490002)},665377,101943,a=>{"use strict";var b=a.i(785454),c=a.i(490002),d=a.i(123156);async function e(...a){let b=await fetch(...a);if(!b.ok)throw Error(`HTTP status code: ${b.status}`,{cause:b});return b}class f{constructor({baseUrl:a,clientId:b}){this.baseUrl=a,this.clientId=b}async get({headers:a,signal:b,cache:c,...d}){let f=this.createUrl(d);return(await e(f,{method:"GET",headers:a,signal:b,cache:c})).json()}async getBlob({headers:a,signal:b,...c}){let d=this.createUrl(c);return(await e(d,{method:"GET",headers:a,signal:b})).blob()}async post({body:a,headers:b,signal:c,...d}){let f=this.createUrl(d);return(await e(f,{method:"POST",headers:b,body:a?JSON.stringify(a):void 0,signal:c})).json()}async put({body:a,headers:b,signal:c,...d}){let f=this.createUrl(d);return(await e(f,{method:"PUT",headers:b,body:a?JSON.stringify(a):void 0,signal:c})).json()}async delete({body:a,headers:b,signal:c,...d}){let f=this.createUrl(d);return(await e(f,{method:"DELETE",headers:b,body:a?JSON.stringify(a):void 0,signal:c})).json()}createUrl({path:a,params:b}){let c=new URL(a,this.baseUrl);return b&&Object.entries(b).forEach(([a,b])=>{b&&c.searchParams.append(a,b)}),this.clientId&&c.searchParams.append("clientId",this.clientId),c}}a.s(["FetchUtil",0,f],101943);let g=Object.freeze({enabled:!0,events:[]});new f({baseUrl:d.CoreHelperUtil.getAnalyticsUrl(),clientId:null});let h=(0,b.proxy)({...g}),i={state:h,subscribeKey:(a,b)=>(0,c.subscribeKey)(h,a,b),async sendError(a,b){if(!h.enabled)return;let c=Date.now();if(h.events.filter(a=>c-new Date(a.properties.timestamp||"").getTime()<6e4).length>=5)return;let d={type:"error",event:b,properties:{errorType:a.name,errorMessage:a.message,stackTrace:a.stack,timestamp:new Date().toISOString()}};h.events.push(d);try{return}catch{}},enable(){h.enabled=!0},disable(){h.enabled=!1},clearEvents(){h.events=[]}};class j extends Error{constructor(a,b,c){super(a),this.name="AppKitError",this.category=b,this.originalError=c,Object.setPrototypeOf(this,j.prototype);let d=!1;if(c instanceof Error&&"string"==typeof c.stack&&c.stack){const a=c.stack,b=a.indexOf("\n");if(b>-1){const c=a.substring(b+1);this.stack=`${this.name}: ${this.message}
${c}`,d=!0}}!d&&(Error.captureStackTrace?Error.captureStackTrace(this,j):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function k(a,b){let c=a instanceof j?a:new j(a instanceof Error?a.message:String(a),b,a);throw i.sendError(c,c.category),c}a.s(["AppKitError",0,j,"withErrorBoundary",0,function(a,b="INTERNAL_SDK_ERROR"){let c={};return Object.keys(a).forEach(d=>{let e=a[d];if("function"==typeof e){let a=e;a="AsyncFunction"===e.constructor.name?async(...a)=>{try{return await e(...a)}catch(a){return k(a,b)}}:(...a)=>{try{return e(...a)}catch(a){return k(a,b)}},c[d]=a}else c[d]=e}),c}],665377)},422152,a=>{"use strict";var b=a.i(219687);a.s(["NetworkUtil",0,{caipNetworkIdToNumber:a=>a?Number(a.split(":")[1]):void 0,parseEvmChainId(a){return"string"==typeof a?this.caipNetworkIdToNumber(a):a},getNetworksByNamespace:(a,b)=>a?.filter(a=>a.chainNamespace===b)||[],getFirstNetworkByNamespace(a,b){return this.getNetworksByNamespace(a,b)[0]},getNetworkNameByCaipNetworkId(a,c){if(!c)return;let d=a.find(a=>a.caipNetworkId===c);if(d)return d.name;let[e]=c.split(":");return b.ConstantsUtil.CHAIN_NAME_MAP?.[e]||void 0}}])},745562,a=>{"use strict";a.s(["getW3mThemeVariables",0,function(a,b){return"light"===b?{"--w3m-accent":a?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":a?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}])},667740,a=>{"use strict";var b=a.i(219687);let c={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}};a.s(["CUSTOM_DEEPLINK_WALLETS",0,c,"MobileWalletUtil",0,{handleMobileDeeplinkRedirect(a,d){let e=window.location.href,f=encodeURIComponent(e);if(a===c.PHANTOM.id&&!("phantom"in window)){let a=e.startsWith("https")?"https":"http",b=e.split("/")[2],d=encodeURIComponent(`${a}://${b}`);window.location.href=`${c.PHANTOM.url}/ul/browse/${f}?ref=${d}`}a!==c.SOLFLARE.id||"solflare"in window||(window.location.href=`${c.SOLFLARE.url}/ul/v1/browse/${f}?ref=${f}`),d!==b.ConstantsUtil.CHAIN.SOLANA||a!==c.COINBASE.id||"coinbaseSolana"in window||(window.location.href=`${c.COINBASE.url}/dapp?cb_url=${f}`)}}])},316047,320163,a=>{"use strict";a.s(["AssetUtil",()=>j],316047);var b=a.i(785454),c=a.i(746531),d=a.i(490002),e=a.i(665377);let f=(0,b.proxy)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),g=(0,e.withErrorBoundary)({state:f,subscribeNetworkImages:a=>(0,b.subscribe)(f.networkImages,()=>a(f.networkImages)),subscribeKey:(a,b)=>(0,d.subscribeKey)(f,a,b),subscribe:a=>(0,b.subscribe)(f,()=>a(f)),setWalletImage(a,b){f.walletImages[a]=b},setNetworkImage(a,b){f.networkImages[a]=b},setChainImage(a,b){f.chainImages[a]=b},setConnectorImage(a,b){f.connectorImages={...f.connectorImages,[a]:b}},setTokenImage(a,b){f.tokenImages[a]=b},setCurrencyImage(a,b){f.currencyImages[a]=b}});a.s(["AssetController",0,g],320163);let h={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},i=(0,b.proxy)({networkImagePromises:{}}),j={async fetchWalletImage(a){if(a)return await c.ApiController._fetchWalletImage(a),this.getWalletImageById(a)},async fetchNetworkImage(a){if(!a)return;let b=this.getNetworkImageById(a);return b||(i.networkImagePromises[a]||(i.networkImagePromises[a]=c.ApiController._fetchNetworkImage(a)),await i.networkImagePromises[a],this.getNetworkImageById(a))},getWalletImageById(a){if(a)return g.state.walletImages[a]},getWalletImage:a=>a?.image_url?a?.image_url:a?.image_id?g.state.walletImages[a.image_id]:void 0,getNetworkImage:a=>a?.assets?.imageUrl?a?.assets?.imageUrl:a?.assets?.imageId?g.state.networkImages[a.assets.imageId]:void 0,getNetworkImageById(a){if(a)return g.state.networkImages[a]},getConnectorImage:a=>a?.imageUrl?a.imageUrl:a?.imageId?g.state.connectorImages[a.imageId]:void 0,getChainImage:a=>g.state.networkImages[h[a]]}},405393,a=>{"use strict";var b=a.i(785454),c=a.i(490002),d=a.i(653972),e=a.i(123156);let f={getFeatureValue(a,b){let c=b?.[a];return void 0===c?d.ConstantsUtil.DEFAULT_FEATURES[a]:c},filterSocialsByPlatform(a){if(!a||!a.length)return a;if(e.CoreHelperUtil.isTelegram()){if(e.CoreHelperUtil.isIos())return a.filter(a=>"google"!==a);if(e.CoreHelperUtil.isMac())return a.filter(a=>"x"!==a);if(e.CoreHelperUtil.isAndroid())return a.filter(a=>!["facebook","x"].includes(a))}return a}},g=(0,b.proxy)({features:d.ConstantsUtil.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:d.ConstantsUtil.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}});a.s(["OptionsController",0,{state:g,subscribeKey:(a,b)=>(0,c.subscribeKey)(g,a,b),setOptions(a){Object.assign(g,a)},setRemoteFeatures(a){if(!a)return;let b={...g.remoteFeatures,...a};g.remoteFeatures=b,g.remoteFeatures?.socials&&(g.remoteFeatures.socials=f.filterSocialsByPlatform(g.remoteFeatures.socials))},setFeatures(a){if(!a)return;g.features||(g.features=d.ConstantsUtil.DEFAULT_FEATURES);let b={...g.features,...a};g.features=b},setProjectId(a){g.projectId=a},setCustomRpcUrls(a){g.customRpcUrls=a},setAllWallets(a){g.allWallets=a},setIncludeWalletIds(a){g.includeWalletIds=a},setExcludeWalletIds(a){g.excludeWalletIds=a},setFeaturedWalletIds(a){g.featuredWalletIds=a},setTokens(a){g.tokens=a},setTermsConditionsUrl(a){g.termsConditionsUrl=a},setPrivacyPolicyUrl(a){g.privacyPolicyUrl=a},setCustomWallets(a){g.customWallets=a},setIsSiweEnabled(a){g.isSiweEnabled=a},setIsUniversalProvider(a){g.isUniversalProvider=a},setSdkVersion(a){g.sdkVersion=a},setMetadata(a){g.metadata=a},setDisableAppend(a){g.disableAppend=a},setEIP6963Enabled(a){g.enableEIP6963=a},setDebug(a){g.debug=a},setEnableWalletConnect(a){g.enableWalletConnect=a},setEnableWalletGuide(a){g.enableWalletGuide=a},setEnableAuthLogger(a){g.enableAuthLogger=a},setEnableWallets(a){g.enableWallets=a},setPreferUniversalLinks(a){g.experimental_preferUniversalLinks=a},setHasMultipleAddresses(a){g.hasMultipleAddresses=a},setSIWX(a){g.siwx=a},setConnectMethodsOrder(a){g.features={...g.features,connectMethodsOrder:a}},setWalletFeaturesOrder(a){g.features={...g.features,walletFeaturesOrder:a}},setSocialsOrder(a){g.remoteFeatures={...g.remoteFeatures,socials:a}},setCollapseWallets(a){g.features={...g.features,collapseWallets:a}},setEnableEmbedded(a){g.enableEmbedded=a},setAllowUnsupportedChain(a){g.allowUnsupportedChain=a},setManualWCControl(a){g.manualWCControl=a},setEnableNetworkSwitch(a){g.enableNetworkSwitch=a},setDefaultAccountTypes(a={}){Object.entries(a).forEach(([a,b])=>{b&&(g.defaultAccountTypes[a]=b)})},setUniversalProviderConfigOverride(a){g.universalProviderConfigOverride=a},getUniversalProviderConfigOverride:()=>g.universalProviderConfigOverride,getSnapshot:()=>(0,b.snapshot)(g)}],405393)},597595,987431,a=>{"use strict";a.s(["EventsController",()=>p],597595);var b=a.i(785454),c=a.i(219687),d=a.i(330746),e=a.i(123156),f=a.i(101943),g=a.i(764177),h=a.i(490002),i=a.i(665377),j=a.i(405393);let k=(0,b.proxy)({message:"",variant:"info",open:!1}),l=(0,i.withErrorBoundary)({state:k,subscribeKey:(a,b)=>(0,h.subscribeKey)(k,a,b),open(a,b){let{debug:c}=j.OptionsController.state,{shortMessage:d,longMessage:e}=a;c&&(k.message=d,k.variant=b,k.open=!0),e&&console.error("function"==typeof e?e():e)},close(){k.open=!1,k.message="",k.variant="info"}});a.s(["AlertController",0,l],987431);let m=e.CoreHelperUtil.getAnalyticsUrl();new f.FetchUtil({baseUrl:m,clientId:null});let n=["MODAL_CREATED"],o=(0,b.proxy)({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),p={state:o,subscribe:a=>(0,b.subscribe)(o,()=>a(o)),getSdkProperties(){let{projectId:a,sdkType:b,sdkVersion:c}=j.OptionsController.state;return{projectId:a,st:b,sv:c||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(a){try{g.AccountController.state.address,n.includes(a.data.event);return}catch(a){a instanceof Error&&a.cause instanceof Response&&a.cause.status===c.ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN&&!o.reportedErrors.FORBIDDEN&&(l.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${(0,d.isSafe)()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),o.reportedErrors.FORBIDDEN=!0)}},sendEvent(a){o.timestamp=Date.now(),o.data=a,j.OptionsController.state.features?.analytics&&p._sendAnalyticsEvent(o)}}},746531,a=>{"use strict";a.s(["ApiController",()=>q]);var b=a.i(785454),c=a.i(490002),d=a.i(316047),e=a.i(123156),f=a.i(101943),g=a.i(667740),h=a.i(630544),i=a.i(320163),j=a.i(392573),k=a.i(178484),l=a.i(597595),m=a.i(405393);let n=e.CoreHelperUtil.getApiUrl(),o=new f.FetchUtil({baseUrl:n,clientId:null}),p=(0,b.proxy)({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),q={state:p,subscribeKey:(a,b)=>(0,c.subscribeKey)(p,a,b),_getSdkProperties(){let{projectId:a,sdkType:b,sdkVersion:c}=m.OptionsController.state;return{projectId:a,st:b||"appkit",sv:c||"html-wagmi-4.2.2"}},_filterOutExtensions:a=>m.OptionsController.state.isUniversalProvider?a.filter(a=>!!(a.mobile_link||a.desktop_link||a.webapp_link)):a,async _fetchWalletImage(a){let b=`${o.baseUrl}/getWalletImage/${a}`,c=await o.getBlob({path:b,params:q._getSdkProperties()});i.AssetController.setWalletImage(a,URL.createObjectURL(c))},async _fetchNetworkImage(a){let b=`${o.baseUrl}/public/getAssetImage/${a}`,c=await o.getBlob({path:b,params:q._getSdkProperties()});i.AssetController.setNetworkImage(a,URL.createObjectURL(c))},async _fetchConnectorImage(a){let b=`${o.baseUrl}/public/getAssetImage/${a}`,c=await o.getBlob({path:b,params:q._getSdkProperties()});i.AssetController.setConnectorImage(a,URL.createObjectURL(c))},async _fetchCurrencyImage(a){let b=`${o.baseUrl}/public/getCurrencyImage/${a}`,c=await o.getBlob({path:b,params:q._getSdkProperties()});i.AssetController.setCurrencyImage(a,URL.createObjectURL(c))},async _fetchTokenImage(a){let b=`${o.baseUrl}/public/getTokenImage/${a}`,c=await o.getBlob({path:b,params:q._getSdkProperties()});i.AssetController.setTokenImage(a,URL.createObjectURL(c))},_filterWalletsByPlatform:a=>e.CoreHelperUtil.isMobile()?a?.filter(a=>!!a.mobile_link||a.id===g.CUSTOM_DEEPLINK_WALLETS.COINBASE.id||"solana"===j.ChainController.state.activeChain&&(a.id===g.CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id||a.id===g.CUSTOM_DEEPLINK_WALLETS.PHANTOM.id)):a,fetchProjectConfig:async()=>(await o.get({path:"/appkit/v1/config",params:q._getSdkProperties()})).features,async fetchAllowedOrigins(){try{let{allowedOrigins:a}=await o.get({path:"/projects/v1/origins",params:q._getSdkProperties()});return a}catch(a){return[]}},async fetchNetworkImages(){let a=j.ChainController.getAllRequestedCaipNetworks(),b=a?.map(({assets:a})=>a?.imageId).filter(Boolean).filter(a=>!d.AssetUtil.getNetworkImageById(a));b&&await Promise.allSettled(b.map(a=>q._fetchNetworkImage(a)))},async fetchConnectorImages(){let{connectors:a}=k.ConnectorController.state,b=a.map(({imageId:a})=>a).filter(Boolean);await Promise.allSettled(b.map(a=>q._fetchConnectorImage(a)))},async fetchCurrencyImages(a=[]){await Promise.allSettled(a.map(a=>q._fetchCurrencyImage(a)))},async fetchTokenImages(a=[]){await Promise.allSettled(a.map(a=>q._fetchTokenImage(a)))},async fetchWallets(a){let b=a.exclude??[];q._getSdkProperties().sv.startsWith("html-core-")&&b.push(...Object.values(g.CUSTOM_DEEPLINK_WALLETS).map(a=>a.id));let c=await o.get({path:"/getWallets",params:{...q._getSdkProperties(),...a,page:String(a.page),entries:String(a.entries),include:a.include?.join(","),exclude:b.join(",")}});return{data:q._filterWalletsByPlatform(c?.data)||[],count:c?.count}},async fetchFeaturedWallets(){let{featuredWalletIds:a}=m.OptionsController.state;if(a?.length){let b={...q._getSdkProperties(),page:1,entries:a?.length??4,include:a},{data:c}=await q.fetchWallets(b),d=[...c].sort((b,c)=>a.indexOf(b.id)-a.indexOf(c.id)),e=d.map(a=>a.image_id).filter(Boolean);await Promise.allSettled(e.map(a=>q._fetchWalletImage(a))),p.featured=d,p.allFeatured=d}},async fetchRecommendedWallets(){try{p.isFetchingRecommendedWallets=!0;let{includeWalletIds:a,excludeWalletIds:b,featuredWalletIds:c}=m.OptionsController.state,d=[...b??[],...c??[]].filter(Boolean),e=j.ChainController.getRequestedCaipNetworkIds().join(","),{data:f,count:g}=await q.fetchWallets({page:1,entries:4,include:a,exclude:d,chains:e}),i=h.StorageUtil.getRecentWallets(),k=f.map(a=>a.image_id).filter(Boolean),l=i.map(a=>a.image_id).filter(Boolean);await Promise.allSettled([...k,...l].map(a=>q._fetchWalletImage(a))),p.recommended=f,p.allRecommended=f,p.count=g??0}catch{}finally{p.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:a}){let{includeWalletIds:b,excludeWalletIds:c,featuredWalletIds:d}=m.OptionsController.state,f=j.ChainController.getRequestedCaipNetworkIds().join(","),g=[...p.recommended.map(({id:a})=>a),...c??[],...d??[]].filter(Boolean),{data:h,count:i}=await q.fetchWallets({page:a,entries:40,include:b,exclude:g,chains:f}),k=h.slice(0,20).map(a=>a.image_id).filter(Boolean);await Promise.allSettled(k.map(a=>q._fetchWalletImage(a))),p.wallets=e.CoreHelperUtil.uniqueBy([...p.wallets,...q._filterOutExtensions(h)],"id").filter(a=>a.chains?.some(a=>f.includes(a))),p.count=i>p.count?i:p.count,p.page=a},async initializeExcludedWallets({ids:a}){let b={page:1,entries:a.length,include:a},{data:c}=await q.fetchWallets(b);c&&c.forEach(a=>{p.excludedWallets.push({rdns:a.rdns,name:a.name})})},async searchWallet({search:a,badge:b}){let{includeWalletIds:c,excludeWalletIds:d}=m.OptionsController.state,f=j.ChainController.getRequestedCaipNetworkIds().join(",");p.search=[];let g={page:1,entries:100,search:a?.trim(),badge_type:b,include:c,exclude:d,chains:f},{data:h}=await q.fetchWallets(g);l.EventsController.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:b??"",search:a??""}});let i=h.map(a=>a.image_id).filter(Boolean);await Promise.allSettled([...i.map(a=>q._fetchWalletImage(a)),e.CoreHelperUtil.wait(300)]),p.search=q._filterOutExtensions(h)},initPromise(a,b){let c=p.promises[a];return c||(p.promises[a]=b())},prefetch:({fetchConnectorImages:a=!0,fetchFeaturedWallets:b=!0,fetchRecommendedWallets:c=!0,fetchNetworkImages:d=!0}={})=>Promise.allSettled([a&&q.initPromise("connectorImages",q.fetchConnectorImages),b&&q.initPromise("featuredWallets",q.fetchFeaturedWallets),c&&q.initPromise("recommendedWallets",q.fetchRecommendedWallets),d&&q.initPromise("networkImages",q.fetchNetworkImages)].filter(Boolean)),prefetchAnalyticsConfig(){m.OptionsController.state.features?.analytics&&q.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{let{isAnalyticsEnabled:a}=await o.get({path:"/getAnalyticsConfig",params:q._getSdkProperties()});m.OptionsController.setFeatures({analytics:a})}catch(a){m.OptionsController.setFeatures({analytics:!1})}},filterByNamespaces(a){if(!a?.length){p.featured=p.allFeatured,p.recommended=p.allRecommended;return}let b=j.ChainController.getRequestedCaipNetworkIds().join(",");p.featured=p.allFeatured.filter(a=>a.chains?.some(a=>b.includes(a))),p.recommended=p.allRecommended.filter(a=>a.chains?.some(a=>b.includes(a))),p.filteredWallets=p.wallets.filter(a=>a.chains?.some(a=>b.includes(a)))},clearFilterByNamespaces(){p.filteredWallets=[]},setFilterByNamespace(a){if(!a){p.featured=p.allFeatured,p.recommended=p.allRecommended;return}let b=j.ChainController.getRequestedCaipNetworkIds().join(",");p.featured=p.allFeatured.filter(a=>a.chains?.some(a=>b.includes(a))),p.recommended=p.allRecommended.filter(a=>a.chains?.some(a=>b.includes(a))),p.filteredWallets=p.wallets.filter(a=>a.chains?.some(a=>b.includes(a)))}}},400353,a=>{"use strict";a.s(["NetworkUtil",()=>g]);var b=a.i(219687),c=a.i(764177),d=a.i(392573),e=a.i(178484),f=a.i(427038);let g={onSwitchNetwork({network:a,ignoreSwitchConfirmation:g=!1}){let h=d.ChainController.state.activeCaipNetwork,i=f.RouterController.state.data;if(a.id===h?.id)return;let j=c.AccountController.getCaipAddress(d.ChainController.state.activeChain),k=a.chainNamespace!==d.ChainController.state.activeChain,l=c.AccountController.getCaipAddress(a.chainNamespace),m=e.ConnectorController.getConnectorId(d.ChainController.state.activeChain)===b.ConstantsUtil.CONNECTOR_ID.AUTH,n=b.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(b=>b===a.chainNamespace);g||m&&n?f.RouterController.push("SwitchNetwork",{...i,network:a}):j&&k&&!l?f.RouterController.push("SwitchActiveChain",{switchToChain:a.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:a}):f.RouterController.push("SwitchNetwork",{...i,network:a})}}},178484,626908,633431,427038,488438,185453,a=>{"use strict";a.s(["ConnectorController",()=>B],178484);var b=a.i(785454),c=a.i(490002),d=a.i(219687),e=a.i(745562),f=a.i(667740),g=a.i(630544),h=a.i(665377),i=a.i(746531),j=a.i(392573),k=a.i(405393);a.s(["RouterController",()=>v],427038);var l=a.i(764177);a.s(["ModalController",()=>t],633431);var m=a.i(123156),n=a.i(400353),o=a.i(760532),p=a.i(597595);let q=(0,b.proxy)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),r={state:q,subscribe:a=>(0,b.subscribe)(q,()=>a(q)),subscribeOpen:a=>(0,c.subscribeKey)(q,"open",a),set(a){Object.assign(q,{...q,...a})}};a.s(["PublicStateController",0,r],626908);let s=(0,b.proxy)({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),t=(0,h.withErrorBoundary)({state:s,subscribe:a=>(0,b.subscribe)(s,()=>a(s)),subscribeKey:(a,b)=>(0,c.subscribeKey)(s,a,b),async open(a){let b="connected"===l.AccountController.state.status,c=a?.namespace,d=j.ChainController.state.activeChain,e=c&&c!==d,f=j.ChainController.getAccountData(a?.namespace)?.caipAddress;if(o.ConnectionController.state.wcBasic?i.ApiController.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await i.ApiController.prefetch({fetchConnectorImages:!b,fetchFeaturedWallets:!b,fetchRecommendedWallets:!b}),B.setFilterByNamespace(a?.namespace),t.setLoading(!0,c),c&&e){let a=j.ChainController.getNetworkData(c)?.caipNetwork||j.ChainController.getRequestedCaipNetworks(c)[0];a&&n.NetworkUtil.onSwitchNetwork({network:a,ignoreSwitchConfirmation:!0})}else{let b=j.ChainController.state.noAdapters;k.OptionsController.state.manualWCControl||b&&!f?m.CoreHelperUtil.isMobile()?v.reset("AllWallets"):v.reset("ConnectingWalletConnectBasic"):a?.view?v.reset(a.view,a.data):f?v.reset("Account"):v.reset("Connect")}s.open=!0,r.set({open:!0}),p.EventsController.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!f}})},close(){let a=k.OptionsController.state.enableEmbedded,b=!!j.ChainController.state.activeCaipAddress;s.open&&p.EventsController.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:b}}),s.open=!1,v.reset("Connect"),t.clearLoading(),a?b?v.replace("Account"):v.push("Connect"):r.set({open:!1}),o.ConnectionController.resetUri()},setLoading(a,b){b&&s.loadingNamespaceMap.set(b,a),s.loading=a,r.set({loading:a})},clearLoading(){s.loadingNamespaceMap.clear(),s.loading=!1},shake(){s.shake||(s.shake=!0,setTimeout(()=>{s.shake=!1},500))}}),u=(0,b.proxy)({view:"Connect",history:["Connect"],transactionStack:[]}),v=(0,h.withErrorBoundary)({state:u,subscribeKey:(a,b)=>(0,c.subscribeKey)(u,a,b),pushTransactionStack(a){u.transactionStack.push(a)},popTransactionStack(a){let b=u.transactionStack.pop();if(!b)return;let{onSuccess:c,onError:d,onCancel:e}=b;switch(a){case"success":c?.();break;case"error":d?.(),v.goBack();break;case"cancel":e?.(),v.goBack()}},push(a,b){a!==u.view&&(u.view=a,u.history.push(a),u.data=b)},reset(a,b){u.view=a,u.history=[a],u.data=b},replace(a,b){u.history.at(-1)!==a&&(u.view=a,u.history[u.history.length-1]=a,u.data=b)},goBack(){let a=j.ChainController.state.activeCaipAddress,c="ConnectingFarcaster"===v.state.view,d=!a&&c;if(u.history.length>1){u.history.pop();let[b]=u.history.slice(-1);b&&(a&&"Connect"===b?u.view="Account":u.view=b)}else t.close();u.data?.wallet&&(u.data.wallet=void 0),setTimeout(()=>{if(d){l.AccountController.setFarcasterUrl(void 0,j.ChainController.state.activeChain);let a=B.getAuthConnector();a?.provider?.reload();let c=(0,b.snapshot)(k.OptionsController.state);a?.provider?.syncDappData?.({metadata:c.metadata,sdkVersion:c.sdkVersion,projectId:c.projectId,sdkType:c.sdkType})}},100)},goBackToIndex(a){if(u.history.length>1){u.history=u.history.slice(0,a+1);let[b]=u.history.slice(-1);b&&(u.view=b)}},goBackOrCloseModal(){v.state.history.length>1?v.goBack():t.close()}});a.s(["ThemeController",()=>y],488438);let w=(0,b.proxy)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),x={state:w,subscribe:a=>(0,b.subscribe)(w,()=>a(w)),setThemeMode(a){w.themeMode=a;try{let b=B.getAuthConnector();if(b){let c=x.getSnapshot().themeVariables;b.provider.syncTheme({themeMode:a,themeVariables:c,w3mThemeVariables:(0,e.getW3mThemeVariables)(c,a)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(a){w.themeVariables={...w.themeVariables,...a};try{let a=B.getAuthConnector();if(a){let b=x.getSnapshot().themeVariables;a.provider.syncTheme({themeVariables:b,w3mThemeVariables:(0,e.getW3mThemeVariables)(w.themeVariables,w.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,b.snapshot)(w)},y=(0,h.withErrorBoundary)(x),z={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},A=(0,b.proxy)({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...z},filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),B=(0,h.withErrorBoundary)({state:A,subscribe:a=>(0,b.subscribe)(A,()=>{a(A)}),subscribeKey:(a,b)=>(0,c.subscribeKey)(A,a,b),initialize(a){a.forEach(a=>{let b=g.StorageUtil.getConnectedConnectorId(a);b&&B.setConnectorId(b,a)})},setActiveConnector(a){a&&(A.activeConnector=(0,b.ref)(a))},setConnectors(a){a.filter(a=>!A.allConnectors.some(b=>b.id===a.id&&B.getConnectorName(b.name)===B.getConnectorName(a.name)&&b.chain===a.chain)).forEach(a=>{"MULTI_CHAIN"!==a.type&&A.allConnectors.push((0,b.ref)(a))});let c=B.getEnabledNamespaces(),d=B.getEnabledConnectors(c);A.connectors=B.mergeMultiChainConnectors(d)},filterByNamespaces(a){Object.keys(A.filterByNamespaceMap).forEach(a=>{A.filterByNamespaceMap[a]=!1}),a.forEach(a=>{A.filterByNamespaceMap[a]=!0}),B.updateConnectorsForEnabledNamespaces()},filterByNamespace(a,b){A.filterByNamespaceMap[a]=b,B.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){let a=B.getEnabledNamespaces(),b=B.getEnabledConnectors(a),c=B.areAllNamespacesEnabled();A.connectors=B.mergeMultiChainConnectors(b),c?i.ApiController.clearFilterByNamespaces():i.ApiController.filterByNamespaces(a)},getEnabledNamespaces:()=>Object.entries(A.filterByNamespaceMap).filter(([a,b])=>b).map(([a])=>a),getEnabledConnectors:a=>A.allConnectors.filter(b=>a.includes(b.chain)),areAllNamespacesEnabled:()=>Object.values(A.filterByNamespaceMap).every(a=>a),mergeMultiChainConnectors(a){let b=B.generateConnectorMapByName(a),c=[];return b.forEach(a=>{let b=a[0],e=b?.id===d.ConstantsUtil.CONNECTOR_ID.AUTH;a.length>1&&b?c.push({name:b.name,imageUrl:b.imageUrl,imageId:b.imageId,connectors:[...a],type:e?"AUTH":"MULTI_CHAIN",chain:"eip155",id:b?.id||""}):b&&c.push(b)}),c},generateConnectorMapByName(a){let b=new Map;return a.forEach(a=>{let{name:c}=a,d=B.getConnectorName(c);if(!d)return;let e=b.get(d)||[];e.find(b=>b.chain===a.chain)||e.push(a),b.set(d,e)}),b},getConnectorName:a=>a&&({"Trust Wallet":"Trust"})[a]||a,getUniqueConnectorsByName(a){let b=[];return a.forEach(a=>{b.find(b=>b.chain===a.chain)||b.push(a)}),b},addConnector(a){if(a.id===d.ConstantsUtil.CONNECTOR_ID.AUTH){let c=(0,b.snapshot)(k.OptionsController.state),d=y.getSnapshot().themeMode,f=y.getSnapshot().themeVariables;a?.provider?.syncDappData?.({metadata:c.metadata,sdkVersion:c.sdkVersion,projectId:c.projectId,sdkType:c.sdkType}),a?.provider?.syncTheme({themeMode:d,themeVariables:f,w3mThemeVariables:(0,e.getW3mThemeVariables)(f,d)}),B.setConnectors([a])}else B.setConnectors([a])},getAuthConnector(a){let b=a||j.ChainController.state.activeChain,c=A.connectors.find(a=>a.id===d.ConstantsUtil.CONNECTOR_ID.AUTH);if(c)return c?.connectors?.length?c.connectors.find(a=>a.chain===b):c},getAnnouncedConnectorRdns:()=>A.connectors.filter(a=>"ANNOUNCED"===a.type).map(a=>a.info?.rdns),getConnectorById:a=>A.allConnectors.find(b=>b.id===a),getConnector:(a,b)=>A.allConnectors.filter(a=>a.chain===j.ChainController.state.activeChain).find(c=>c.explorerId===a||c.info?.rdns===b),syncIfAuthConnector(a){if("ID_AUTH"!==a.id)return;let c=(0,b.snapshot)(k.OptionsController.state),d=y.getSnapshot().themeMode,f=y.getSnapshot().themeVariables;a?.provider?.syncDappData?.({metadata:c.metadata,sdkVersion:c.sdkVersion,sdkType:c.sdkType,projectId:c.projectId}),a.provider.syncTheme({themeMode:d,themeVariables:f,w3mThemeVariables:(0,e.getW3mThemeVariables)(f,d)})},getConnectorsByNamespace(a){let b=A.allConnectors.filter(b=>b.chain===a);return B.mergeMultiChainConnectors(b)},selectWalletConnector(a){let b=B.getConnector(a.id,a.rdns),c=j.ChainController.state.activeChain;f.MobileWalletUtil.handleMobileDeeplinkRedirect(b?.explorerId||a.id,c),b?v.push("ConnectingExternal",{connector:b}):v.push("ConnectingWalletConnect",{wallet:a})},getConnectors:a=>a?B.getConnectorsByNamespace(a):B.mergeMultiChainConnectors(A.allConnectors),setFilterByNamespace(a){A.filterByNamespace=a,A.connectors=B.getConnectors(a),i.ApiController.setFilterByNamespace(a)},setConnectorId(a,b){a&&(A.activeConnectorIds={...A.activeConnectorIds,[b]:a},g.StorageUtil.setConnectedConnectorId(b,a))},removeConnectorId(a){A.activeConnectorIds={...A.activeConnectorIds,[a]:void 0},g.StorageUtil.deleteConnectedConnectorId(a)},getConnectorId(a){if(a)return A.activeConnectorIds[a]},isConnected:a=>a?!!A.activeConnectorIds[a]:Object.values(A.activeConnectorIds).some(a=>!!a),resetConnectorIds(){A.activeConnectorIds={...z}}});"u">typeof process&&void 0!==process.env&&process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,"u">typeof process&&void 0!==process.env&&process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL,"u">typeof process&&void 0!==process.env&&process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION,a.s(["W3mFrameRpcConstants",0,{SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}}],185453)},868990,a=>{"use strict";var b=a.i(785454),c=a.i(490002),d=a.i(123156);let e=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),f=(0,b.proxy)({...e});a.s(["SnackController",0,{state:f,subscribeKey:(a,b)=>(0,c.subscribeKey)(f,a,b),showLoading(a,b={}){this._showMessage({message:a,variant:"loading",...b})},showSuccess(a){this._showMessage({message:a,variant:"success"})},showSvg(a,b){this._showMessage({message:a,svg:b})},showError(a){let b=d.CoreHelperUtil.parseError(a);this._showMessage({message:b,variant:"error"})},hide(){f.message=e.message,f.variant=e.variant,f.svg=e.svg,f.open=e.open,f.autoClose=e.autoClose},_showMessage({message:a,svg:b,variant:c="success",autoClose:d=e.autoClose}){f.open?(f.open=!1,setTimeout(()=>{f.message=a,f.variant=c,f.svg=b,f.open=!0,f.autoClose=d},150)):(f.message=a,f.variant=c,f.svg=b,f.open=!0,f.autoClose=d)}}])},392573,760532,379811,a=>{"use strict";let b;a.s(["ChainController",()=>K],392573);var c=a.i(785454),d=a.i(490002),e=a.i(219687),f=a.i(422152),g=a.i(653972),h=a.i(123156),i=a.i(630544),j=a.i(665377),k=a.i(764177);a.s(["ConnectionController",()=>w],760532);var l=a.i(178484),m=a.i(597595),n=a.i(633431),o=a.i(427038),p=a.i(185453),q=a.i(789330),r=a.i(405393),s=a.i(868990);let t=(0,c.proxy)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),u=(0,j.withErrorBoundary)({state:t,subscribe:a=>(0,c.subscribe)(t,()=>a(t)),setLastNetworkInView(a){t.lastNetworkInView=a},async fetchTransactions(a,b){if(!a)throw Error("Transactions can't be fetched without an accountAddress");t.loading=!0;try{let c=await q.BlockchainApiController.fetchTransactions({account:a,cursor:t.next,onramp:b,cache:"coinbase"===b?"no-cache":void 0,chainId:K.state.activeCaipNetwork?.caipNetworkId}),d=u.filterSpamTransactions(c.data),e=u.filterByConnectedChain(d),f=[...t.transactions,...e];t.loading=!1,"coinbase"===b?t.coinbaseTransactions=u.groupTransactionsByYearAndMonth(t.coinbaseTransactions,c.data):(t.transactions=f,t.transactionsByYear=u.groupTransactionsByYearAndMonth(t.transactionsByYear,e)),t.empty=0===f.length,t.next=c.next?c.next:void 0}catch(c){let b=K.state.activeChain;m.EventsController.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:a,projectId:r.OptionsController.state.projectId,cursor:t.next,isSmartAccount:k.AccountController.state.preferredAccountTypes?.[b]===p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),s.SnackController.showError("Failed to fetch transactions"),t.loading=!1,t.empty=!0,t.next=void 0}},groupTransactionsByYearAndMonth:(a={},b=[])=>(b.forEach(b=>{let c=new Date(b.metadata.minedAt).getFullYear(),d=new Date(b.metadata.minedAt).getMonth(),e=a[c]??{},f=(e[d]??[]).filter(a=>a.id!==b.id);a[c]={...e,[d]:[...f,b].sort((a,b)=>new Date(b.metadata.minedAt).getTime()-new Date(a.metadata.minedAt).getTime())}}),a),filterSpamTransactions:a=>a.filter(a=>!a.transfers.every(a=>a.nft_info?.flags.is_spam===!0)),filterByConnectedChain(a){let b=K.state.activeCaipNetwork?.caipNetworkId;return a.filter(a=>a.metadata.chain===b)},clearCursor(){t.next=void 0},resetTransactions(){t.transactions=[],t.transactionsByYear={},t.lastNetworkInView=void 0,t.loading=!1,t.empty=!1,t.next=void 0}},"API_ERROR"),v=(0,c.proxy)({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"}),w=(0,j.withErrorBoundary)({state:v,subscribeKey:(a,b)=>(0,d.subscribeKey)(v,a,b),_getClient:()=>v._client,setClient(a){v._client=(0,c.ref)(a)},async connectWalletConnect(){if(h.CoreHelperUtil.isTelegram()||h.CoreHelperUtil.isSafari()&&h.CoreHelperUtil.isIos()){if(b){await b,b=void 0;return}if(!h.CoreHelperUtil.isPairingExpired(v?.wcPairingExpiry)){let a=v.wcUri;v.wcUri=a;return}b=w._getClient()?.connectWalletConnect?.().catch(()=>void 0),w.state.status="connecting",await b,b=void 0,v.wcPairingExpiry=void 0,w.state.status="connected"}else await w._getClient()?.connectWalletConnect?.()},async connectExternal(a,b,c=!0){await w._getClient()?.connectExternal?.(a),c&&K.setActiveNamespace(b)},async reconnectExternal(a){await w._getClient()?.reconnectExternal?.(a);let b=a.chain||K.state.activeChain;b&&l.ConnectorController.setConnectorId(a.id,b)},async setPreferredAccountType(a,b){n.ModalController.setLoading(!0,K.state.activeChain);let c=l.ConnectorController.getAuthConnector();c&&(k.AccountController.setPreferredAccountType(a,b),await c.provider.setPreferredAccount(a),i.StorageUtil.setPreferredAccountTypes(k.AccountController.state.preferredAccountTypes??{[b]:a}),await w.reconnectExternal(c),n.ModalController.setLoading(!1,K.state.activeChain),m.EventsController.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:a,network:K.state.activeCaipNetwork?.caipNetworkId||""}}))},signMessage:async a=>w._getClient()?.signMessage(a),parseUnits:(a,b)=>w._getClient()?.parseUnits(a,b),formatUnits:(a,b)=>w._getClient()?.formatUnits(a,b),sendTransaction:async a=>w._getClient()?.sendTransaction(a),getCapabilities:async a=>w._getClient()?.getCapabilities(a),grantPermissions:async a=>w._getClient()?.grantPermissions(a),walletGetAssets:async a=>w._getClient()?.walletGetAssets(a)??{},estimateGas:async a=>w._getClient()?.estimateGas(a),writeContract:async a=>w._getClient()?.writeContract(a),getEnsAddress:async a=>w._getClient()?.getEnsAddress(a),getEnsAvatar:async a=>w._getClient()?.getEnsAvatar(a),checkInstalled:a=>w._getClient()?.checkInstalled?.(a)||!1,resetWcConnection(){v.wcUri=void 0,v.wcPairingExpiry=void 0,v.wcLinking=void 0,v.recentWallet=void 0,v.status="disconnected",u.resetTransactions(),i.StorageUtil.deleteWalletConnectDeepLink()},resetUri(){v.wcUri=void 0,v.wcPairingExpiry=void 0,b=void 0},finalizeWcConnection(){let{wcLinking:a,recentWallet:b}=w.state;a&&i.StorageUtil.setWalletConnectDeepLink(a),b&&i.StorageUtil.setAppKitRecent(b),m.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:a?"mobile":"qrcode",name:o.RouterController.state.data?.wallet?.name||"Unknown"}})},setWcBasic(a){v.wcBasic=a},setUri(a){v.wcUri=a,v.wcPairingExpiry=h.CoreHelperUtil.getPairingExpiry()},setWcLinking(a){v.wcLinking=a},setWcError(a){v.wcError=a,v.buffering=!1},setRecentWallet(a){v.recentWallet=a},setBuffering(a){v.buffering=a},setStatus(a){v.status=a},async disconnect(a){try{await w._getClient()?.disconnect(a)}catch(a){throw new j.AppKitError("Failed to disconnect","INTERNAL_SDK_ERROR",a)}},setConnections(a,b){v.connections.set(b,a)},switchAccount({connection:a,address:b,namespace:c}){if(l.ConnectorController.state.activeConnectorIds[c]===a.connectorId){let a=K.state.activeCaipNetwork;if(a){let d=`${c}:${a.id}:${b}`;k.AccountController.setCaipAddress(d,c)}else console.warn(`No current network found for namespace "${c}"`)}else{let b=l.ConnectorController.getConnector(a.connectorId);b?w.connectExternal(b,c):console.warn(`No connector found for namespace "${c}"`)}}});var x=a.i(626908);a.s(["SendController",()=>G],379811);var y=a.i(415976);let z={bigNumber:a=>new y.default(a?a:0),multiply(a,b){if(void 0===a||void 0===b)return new y.default(0);let c=new y.default(a),d=new y.default(b);return c.times(d)},formatNumberToLocalString:(a,b=2)=>void 0===a?"0.00":"number"==typeof a?a.toLocaleString("en-US",{maximumFractionDigits:b,minimumFractionDigits:b}):parseFloat(a).toLocaleString("en-US",{maximumFractionDigits:b,minimumFractionDigits:b}),parseLocalStringToNumber:a=>void 0===a?0:parseFloat(a.replace(/,/gu,""))},A=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],B=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var C=a.i(57407);let D={createBalance(a,b){let c={name:a.metadata.name||"",symbol:a.metadata.symbol||"",decimals:a.metadata.decimals||0,value:a.metadata.value||0,price:a.metadata.price||0,iconUrl:a.metadata.iconUrl||""};return{name:c.name,symbol:c.symbol,chainId:b,address:"native"===a.address?void 0:this.convertAddressToCAIP10Address(a.address,b),value:c.value,price:c.price,quantity:{decimals:c.decimals.toString(),numeric:this.convertHexToBalance({hex:a.balance,decimals:c.decimals})},iconUrl:c.iconUrl}},convertHexToBalance:({hex:a,decimals:b})=>(0,C.formatUnits)(BigInt(a),b),convertAddressToCAIP10Address:(a,b)=>`${b}:${a}`,createCAIP2ChainId:(a,b)=>`${b}:${parseInt(a,16)}`,getChainIdHexFromCAIP2ChainId(a){let b=a.split(":");if(b.length<2||!b[1])return"0x0";let c=parseInt(b[1],10);return isNaN(c)?"0x0":`0x${c.toString(16)}`},isWalletGetAssetsResponse(a){return"object"==typeof a&&null!==a&&Object.values(a).every(a=>Array.isArray(a)&&a.every(a=>this.isValidAsset(a)))},isValidAsset:a=>"object"==typeof a&&null!==a&&"string"==typeof a.address&&"string"==typeof a.balance&&("ERC20"===a.type||"NATIVE"===a.type)&&"object"==typeof a.metadata&&null!==a.metadata&&"string"==typeof a.metadata.name&&"string"==typeof a.metadata.symbol&&"number"==typeof a.metadata.decimals&&"number"==typeof a.metadata.price&&"string"==typeof a.metadata.iconUrl},E={async getMyTokensWithBalance(a){let b=k.AccountController.state.address,c=K.state.activeCaipNetwork;if(!b||!c)return[];if("eip155"===c.chainNamespace){let a=await this.getEIP155Balances(b,c);if(a)return this.filterLowQualityTokens(a)}let d=await q.BlockchainApiController.getBalance(b,c.caipNetworkId,a);return this.filterLowQualityTokens(d.balances)},async getEIP155Balances(a,b){try{let c=D.getChainIdHexFromCAIP2ChainId(b.caipNetworkId),d=await w.getCapabilities(a);if(!d?.[c]?.assetDiscovery?.supported)return null;let e=await w.walletGetAssets({account:a,chainFilter:[c]});if(!D.isWalletGetAssetsResponse(e))return null;return(e[c]||[]).map(a=>D.createBalance(a,b.caipNetworkId))}catch(a){return null}},filterLowQualityTokens:a=>a.filter(a=>"0"!==a.quantity.decimals),mapBalancesToSwapTokens:a=>a?.map(a=>({...a,address:a?.address?a.address:K.getActiveNetworkTokenAddress(),decimals:parseInt(a.quantity.decimals,10),logoUri:a.iconUrl,eip2612:!1}))||[]},F=(0,c.proxy)({tokenBalances:[],loading:!1}),G=(0,j.withErrorBoundary)({state:F,subscribe:a=>(0,c.subscribe)(F,()=>a(F)),subscribeKey:(a,b)=>(0,d.subscribeKey)(F,a,b),setToken(a){a&&(F.token=(0,c.ref)(a))},setTokenAmount(a){F.sendTokenAmount=a},setReceiverAddress(a){F.receiverAddress=a},setReceiverProfileImageUrl(a){F.receiverProfileImageUrl=a},setReceiverProfileName(a){F.receiverProfileName=a},setNetworkBalanceInUsd(a){F.networkBalanceInUSD=a},setLoading(a){F.loading=a},async sendToken(){try{switch(G.setLoading(!0),K.state.activeCaipNetwork?.chainNamespace){case"eip155":await G.sendEvmToken();return;case"solana":await G.sendSolanaToken();return;default:throw Error("Unsupported chain")}}finally{G.setLoading(!1)}},async sendEvmToken(){let a=K.state.activeChain,b=k.AccountController.state.preferredAccountTypes?.[a];if(!G.state.sendTokenAmount||!G.state.receiverAddress)throw Error("An amount and receiver address are required");if(!G.state.token)throw Error("A token is required");G.state.token?.address?(m.EventsController.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:b===p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:G.state.token.address,amount:G.state.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),await G.sendERC20Token({receiverAddress:G.state.receiverAddress,tokenAddress:G.state.token.address,sendTokenAmount:G.state.sendTokenAmount,decimals:G.state.token.quantity.decimals})):(m.EventsController.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:b===p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:G.state.token.symbol||"",amount:G.state.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),await G.sendNativeToken({receiverAddress:G.state.receiverAddress,sendTokenAmount:G.state.sendTokenAmount,decimals:G.state.token.quantity.decimals}))},async fetchTokenBalance(a){F.loading=!0;let b=K.state.activeCaipNetwork?.caipNetworkId,c=K.state.activeCaipNetwork?.chainNamespace,d=K.state.activeCaipAddress,e=d?h.CoreHelperUtil.getPlainAddress(d):void 0;if(F.lastRetry&&!h.CoreHelperUtil.isAllowedRetry(F.lastRetry,30*g.ConstantsUtil.ONE_SEC_MS))return F.loading=!1,[];try{if(e&&b&&c){let a=await E.getMyTokensWithBalance();return F.tokenBalances=a,F.lastRetry=void 0,a}}catch(b){F.lastRetry=Date.now(),a?.(b),s.SnackController.showError("Token Balance Unavailable")}finally{F.loading=!1}return[]},fetchNetworkBalance(){if(0===F.tokenBalances.length)return;let a=E.mapBalancesToSwapTokens(F.tokenBalances);if(!a)return;let b=a.find(a=>a.address===K.getActiveNetworkTokenAddress());b&&(F.networkBalanceInUSD=b?z.multiply(b.quantity.numeric,b.price).toString():"0")},async sendNativeToken(a){o.RouterController.pushTransactionStack({});let b=a.receiverAddress,c=k.AccountController.state.address,d=w.parseUnits(a.sendTokenAmount.toString(),Number(a.decimals));await w.sendTransaction({chainNamespace:"eip155",to:b,address:c,data:"0x",value:d??BigInt(0)}),m.EventsController.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:k.AccountController.state.preferredAccountTypes?.eip155===p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:G.state.token?.symbol||"",amount:a.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),w._getClient()?.updateBalance("eip155"),G.resetSend()},async sendERC20Token(a){o.RouterController.pushTransactionStack({onSuccess(){o.RouterController.replace("Account")}});let b=w.parseUnits(a.sendTokenAmount.toString(),Number(a.decimals));if(k.AccountController.state.address&&a.sendTokenAmount&&a.receiverAddress&&a.tokenAddress){let c,d=h.CoreHelperUtil.getPlainAddress(a.tokenAddress);await w.writeContract({fromAddress:k.AccountController.state.address,tokenAddress:d,args:[a.receiverAddress,b??BigInt(0)],method:"transfer",abi:(c=d,e.ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(c)?B:A),chainNamespace:"eip155"}),G.resetSend()}},async sendSolanaToken(){if(!G.state.sendTokenAmount||!G.state.receiverAddress)throw Error("An amount and receiver address are required");o.RouterController.pushTransactionStack({onSuccess(){o.RouterController.replace("Account")}}),await w.sendTransaction({chainNamespace:"solana",to:G.state.receiverAddress,value:G.state.sendTokenAmount}),w._getClient()?.updateBalance("solana"),G.resetSend()},resetSend(){F.token=void 0,F.sendTokenAmount=void 0,F.receiverAddress=void 0,F.receiverProfileImageUrl=void 0,F.receiverProfileName=void 0,F.loading=!1,F.tokenBalances=[]}}),H={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},I={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},J=(0,c.proxy)({chains:(0,d.proxyMap)(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),K=(0,j.withErrorBoundary)({state:J,subscribe:a=>(0,c.subscribe)(J,()=>{a(J)}),subscribeKey:(a,b)=>(0,d.subscribeKey)(J,a,b),subscribeChainProp(a,b,d){let e;return(0,c.subscribe)(J.chains,()=>{let c=d||J.activeChain;if(c){let d=J.chains.get(c)?.[a];e!==d&&(e=d,b(d))}})},initialize(a,b,d){let{chainId:e,namespace:f}=i.StorageUtil.getActiveNetworkProps(),g=b?.find(a=>a.id.toString()===e?.toString()),h=a.find(a=>a?.namespace===f)||a?.[0],j=a.map(a=>a.namespace).filter(a=>void 0!==a),k=new Set(r.OptionsController.state.enableEmbedded?[...j]:[...b?.map(a=>a.chainNamespace)??[]]);a?.length!==0&&h||(J.noAdapters=!0),!J.noAdapters&&(J.activeChain=h?.namespace,J.activeCaipNetwork=g,K.setChainNetworkData(h?.namespace,{caipNetwork:g}),J.activeChain&&x.PublicStateController.set({activeChain:h?.namespace})),k.forEach(a=>{let e=b?.filter(b=>b.chainNamespace===a);K.state.chains.set(a,{namespace:a,networkState:(0,c.proxy)({...I,caipNetwork:e?.[0]}),accountState:(0,c.proxy)(H),caipNetworks:e??[],...d}),K.setRequestedCaipNetworks(e??[],a)})},removeAdapter(a){if(J.activeChain===a){let b=Array.from(J.chains.entries()).find(([b])=>b!==a);if(b){let a=b[1]?.caipNetworks?.[0];a&&K.setActiveCaipNetwork(a)}}J.chains.delete(a)},addAdapter(a,{networkControllerClient:b,connectionControllerClient:c},d){J.chains.set(a.namespace,{namespace:a.namespace,networkState:{...I,caipNetwork:d[0]},accountState:H,caipNetworks:d,connectionControllerClient:c,networkControllerClient:b}),K.setRequestedCaipNetworks(d?.filter(b=>b.chainNamespace===a.namespace)??[],a.namespace)},addNetwork(a){let b=J.chains.get(a.chainNamespace);if(b){let c=[...b.caipNetworks||[]];b.caipNetworks?.find(b=>b.id===a.id)||c.push(a),J.chains.set(a.chainNamespace,{...b,caipNetworks:c}),K.setRequestedCaipNetworks(c,a.chainNamespace),l.ConnectorController.filterByNamespace(a.chainNamespace,!0)}},removeNetwork(a,b){let c=J.chains.get(a);if(c){let d=J.activeCaipNetwork?.id===b,e=[...c.caipNetworks?.filter(a=>a.id!==b)||[]];d&&c?.caipNetworks?.[0]&&K.setActiveCaipNetwork(c.caipNetworks[0]),J.chains.set(a,{...c,caipNetworks:e}),K.setRequestedCaipNetworks(e||[],a),0===e.length&&l.ConnectorController.filterByNamespace(a,!1)}},setAdapterNetworkState(a,b){let c=J.chains.get(a);c&&(c.networkState={...c.networkState||I,...b},J.chains.set(a,c))},setChainAccountData(a,b,c=!0){if(!a)throw Error("Chain is required to update chain account data");let d=J.chains.get(a);if(d){let c={...d.accountState||H,...b};J.chains.set(a,{...d,accountState:c}),(1===J.chains.size||J.activeChain===a)&&(b.caipAddress&&(J.activeCaipAddress=b.caipAddress),k.AccountController.replaceState(c))}},setChainNetworkData(a,b){if(!a)return;let c=J.chains.get(a);if(c){let d={...c.networkState||I,...b};J.chains.set(a,{...c,networkState:d})}},setAccountProp(a,b,c,d=!0){K.setChainAccountData(c,{[a]:b},d),"status"===a&&"disconnected"===b&&c&&l.ConnectorController.removeConnectorId(c)},setActiveNamespace(a){J.activeChain=a;let b=a?J.chains.get(a):void 0,c=b?.networkState?.caipNetwork;c?.id&&a&&(J.activeCaipAddress=b?.accountState?.caipAddress,J.activeCaipNetwork=c,K.setChainNetworkData(a,{caipNetwork:c}),i.StorageUtil.setActiveCaipNetworkId(c?.caipNetworkId),x.PublicStateController.set({activeChain:a,selectedNetworkId:c?.caipNetworkId}))},setActiveCaipNetwork(a){if(!a)return;J.activeChain!==a.chainNamespace&&K.setIsSwitchingNamespace(!0);let b=J.chains.get(a.chainNamespace);J.activeChain=a.chainNamespace,J.activeCaipNetwork=a,K.setChainNetworkData(a.chainNamespace,{caipNetwork:a}),b?.accountState?.address?J.activeCaipAddress=`${a.chainNamespace}:${a.id}:${b?.accountState?.address}`:J.activeCaipAddress=void 0,K.setAccountProp("caipAddress",J.activeCaipAddress,a.chainNamespace),b&&k.AccountController.replaceState(b.accountState),G.resetSend(),x.PublicStateController.set({activeChain:J.activeChain,selectedNetworkId:J.activeCaipNetwork?.caipNetworkId}),i.StorageUtil.setActiveCaipNetworkId(a.caipNetworkId),K.checkIfSupportedNetwork(a.chainNamespace)||!r.OptionsController.state.enableNetworkSwitch||r.OptionsController.state.allowUnsupportedChain||w.state.wcBasic||K.showUnsupportedChainUI()},addCaipNetwork(a){if(!a)return;let b=J.chains.get(a.chainNamespace);b&&b?.caipNetworks?.push(a)},async switchActiveNamespace(a){if(!a)return;let b=a!==K.state.activeChain,c=K.getNetworkData(a)?.caipNetwork,d=K.getCaipNetworkByNamespace(a,c?.id);b&&d&&await K.switchActiveNetwork(d)},async switchActiveNetwork(a){let b=K.state.chains.get(K.state.activeChain),c=!b?.caipNetworks?.some(a=>a.id===J.activeCaipNetwork?.id),d=K.getNetworkControllerClient(a.chainNamespace);if(d){try{await d.switchCaipNetwork(a),c&&n.ModalController.close()}catch(a){o.RouterController.goBack()}m.EventsController.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:a.caipNetworkId}})}},getNetworkControllerClient(a){let b=a||J.activeChain,c=J.chains.get(b);if(!c)throw Error("Chain adapter not found");if(!c.networkControllerClient)throw Error("NetworkController client not set");return c.networkControllerClient},getConnectionControllerClient(a){let b=a||J.activeChain;if(!b)throw Error("Chain is required to get connection controller client");let c=J.chains.get(b);if(!c?.connectionControllerClient)throw Error("ConnectionController client not set");return c.connectionControllerClient},getAccountProp(a,b){let c=J.activeChain;if(b&&(c=b),!c)return;let d=J.chains.get(c)?.accountState;if(d)return d[a]},getNetworkProp(a,b){let c=J.chains.get(b)?.networkState;if(c)return c[a]},getRequestedCaipNetworks(a){let b=J.chains.get(a),{approvedCaipNetworkIds:c=[],requestedCaipNetworks:d=[]}=b?.networkState||{};return h.CoreHelperUtil.sortRequestedNetworks(c,d)},getAllRequestedCaipNetworks(){let a=[];return J.chains.forEach(b=>{let c=K.getRequestedCaipNetworks(b.namespace);a.push(...c)}),a},setRequestedCaipNetworks(a,b){K.setAdapterNetworkState(b,{requestedCaipNetworks:a});let c=Array.from(new Set(K.getAllRequestedCaipNetworks().map(a=>a.chainNamespace)));l.ConnectorController.filterByNamespaces(c)},getAllApprovedCaipNetworkIds(){let a=[];return J.chains.forEach(b=>{let c=K.getApprovedCaipNetworkIds(b.namespace);a.push(...c)}),a},getActiveCaipNetwork:()=>J.activeCaipNetwork,getActiveCaipAddress:()=>J.activeCaipAddress,getApprovedCaipNetworkIds(a){let b=J.chains.get(a);return b?.networkState?.approvedCaipNetworkIds||[]},async setApprovedCaipNetworksData(a){let b=K.getNetworkControllerClient(),c=await b?.getApprovedCaipNetworksData();K.setAdapterNetworkState(a,{approvedCaipNetworkIds:c?.approvedCaipNetworkIds,supportsAllNetworks:c?.supportsAllNetworks})},checkIfSupportedNetwork(a,b){let c=b||J.activeCaipNetwork,d=K.getRequestedCaipNetworks(a);return!d.length||d?.some(a=>a.id===c?.id)},checkIfSupportedChainId(a){if(!J.activeChain)return!0;let b=K.getRequestedCaipNetworks(J.activeChain);return b?.some(b=>b.id===a)},setSmartAccountEnabledNetworks(a,b){K.setAdapterNetworkState(b,{smartAccountEnabledNetworks:a})},checkIfSmartAccountEnabled(){let a=f.NetworkUtil.caipNetworkIdToNumber(J.activeCaipNetwork?.caipNetworkId),b=J.activeChain;if(!b||!a)return!1;let c=K.getNetworkProp("smartAccountEnabledNetworks",b);return!!c?.includes(Number(a))},getActiveNetworkTokenAddress(){let a=J.activeCaipNetwork?.chainNamespace||"eip155",b=J.activeCaipNetwork?.id||1,c=g.ConstantsUtil.NATIVE_TOKEN_ADDRESS[a];return`${a}:${b}:${c}`},showUnsupportedChainUI(){n.ModalController.open({view:"UnsupportedChain"})},checkIfNamesSupported(){let a=J.activeCaipNetwork;return!!(a?.chainNamespace&&g.ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(a.chainNamespace))},resetNetwork(a){K.setAdapterNetworkState(a,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(a){if(!a)throw Error("Chain is required to set account prop");J.activeCaipAddress=void 0,K.setChainAccountData(a,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),l.ConnectorController.removeConnectorId(a)},setIsSwitchingNamespace(a){J.isSwitchingNamespace=a},getFirstCaipNetworkSupportsAuthConnector(){let a=[];if(J.chains.forEach(b=>{e.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(a=>a===b.namespace)&&b.namespace&&a.push(b.namespace)}),a.length>0){let b=a[0];return b?J.chains.get(b)?.caipNetworks?.[0]:void 0}},getAccountData:a=>a?K.state.chains.get(a)?.accountState:k.AccountController.state,getNetworkData(a){let b=a||J.activeChain;if(b)return K.state.chains.get(b)?.networkState},getCaipNetworkByNamespace(a,b){if(!a)return;let c=K.state.chains.get(a),d=c?.caipNetworks?.find(a=>a.id===b);return d||c?.networkState?.caipNetwork||c?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){let a=l.ConnectorController.state.filterByNamespace;return(a?[J.chains.get(a)]:Array.from(J.chains.values())).flatMap(a=>a?.caipNetworks||[]).map(a=>a.caipNetworkId)},getCaipNetworks:a=>a?K.getRequestedCaipNetworks(a):K.getAllRequestedCaipNetworks()})},764177,789330,a=>{"use strict";a.s(["AccountController",()=>p],764177);var b=a.i(785454),c=a.i(653972),d=a.i(123156),e=a.i(665377);a.s(["BlockchainApiController",()=>n],789330);var f=a.i(101943),g=a.i(630544),h=a.i(392573),i=a.i(405393),j=a.i(868990);let k={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},l=d.CoreHelperUtil.getBlockchainApiUrl(),m=(0,b.proxy)({clientId:null,api:new f.FetchUtil({baseUrl:l,clientId:null}),supportedChains:{http:[],ws:[]}}),n={state:m,async get(a){let{st:b,sv:c}=n.getSdkProperties(),d=i.OptionsController.state.projectId,e={...a.params||{},st:b,sv:c,projectId:d};return m.api.get({...a,params:e})},getSdkProperties(){let{sdkType:a,sdkVersion:b}=i.OptionsController.state;return{st:a||"unknown",sv:b||"unknown"}},async isNetworkSupported(a){if(!a)return!1;try{m.supportedChains.http.length||await n.getSupportedNetworks()}catch(a){return!1}return m.supportedChains.http.includes(a)},async getSupportedNetworks(){try{let a=await n.get({path:"v1/supported-chains"});return m.supportedChains=a,a}catch{return m.supportedChains}},async fetchIdentity({address:a,caipNetworkId:b}){if(!await n.isNetworkSupported(b))return{avatar:"",name:""};let c=g.StorageUtil.getIdentityFromCacheForAddress(a);if(c)return c;let e=await n.get({path:`/v1/identity/${a}`,params:{sender:h.ChainController.state.activeCaipAddress?d.CoreHelperUtil.getPlainAddress(h.ChainController.state.activeCaipAddress):void 0}});return g.StorageUtil.updateIdentityCache({address:a,identity:e,timestamp:Date.now()}),e},fetchTransactions:async({account:a,cursor:b,onramp:c,signal:d,cache:e,chainId:f})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:`/v1/account/${a}/history`,params:{cursor:b,onramp:c,chainId:f},signal:d,cache:e}):{data:[],next:void 0},fetchSwapQuote:async({amount:a,userAddress:b,from:c,to:d,gasPrice:e})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:a,userAddress:b,from:c,to:d,gasPrice:e}}):{quotes:[]},fetchSwapTokens:async({chainId:a})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:"/v1/convert/tokens",params:{chainId:a}}):{tokens:[]},fetchTokenPrice:async({addresses:a})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:a,projectId:i.OptionsController.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]},fetchSwapAllowance:async({tokenAddress:a,userAddress:b})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:"/v1/convert/allowance",params:{tokenAddress:a,userAddress:b},headers:{"Content-Type":"application/json"}}):{allowance:"0"},async fetchGasPrice({chainId:a}){let{st:b,sv:c}=n.getSdkProperties();if(!await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Gas Price");return n.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:a,st:b,sv:c}})},async generateSwapCalldata({amount:a,from:b,to:d,userAddress:e,disableEstimate:f}){if(!await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return m.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:a,eip155:{slippage:c.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE},projectId:i.OptionsController.state.projectId,from:b,to:d,userAddress:e,disableEstimate:f}})},async generateApproveCalldata({from:a,to:b,userAddress:c}){let{st:d,sv:e}=n.getSdkProperties();if(!await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return n.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:c,from:a,to:b,st:d,sv:e}})},async getBalance(a,b,c){let{st:d,sv:e}=n.getSdkProperties();if(!await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId))return j.SnackController.showError("Token Balance Unavailable"),{balances:[]};let f=`${b}:${a}`,i=g.StorageUtil.getBalanceCacheForCaipAddress(f);if(i)return i;let k=await n.get({path:`/v1/account/${a}/balance`,params:{currency:"usd",chainId:b,forceUpdate:c,st:d,sv:e}});return g.StorageUtil.updateBalanceCache({caipAddress:f,balance:k,timestamp:Date.now()}),k},lookupEnsName:async a=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:`/v1/profile/account/${a}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]},reverseLookupEnsName:async({address:a})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:`/v1/profile/reverse/${a}`,params:{sender:p.state.address,apiVersion:"2"}}):[],getEnsNameSuggestions:async a=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:`/v1/profile/suggestions/${a}`,params:{zone:"reown.id"}}):{suggestions:[]},registerEnsName:async({coinType:a,address:b,message:c,signature:d})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.api.post({path:"/v1/profile/account",body:{coin_type:a,address:b,message:c,signature:d},headers:{"Content-Type":"application/json"}}):{success:!1},generateOnRampURL:async({destinationWallets:a,partnerUserId:b,defaultNetwork:c,purchaseAmount:d,paymentAmount:e})=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?(await m.api.post({path:"/v1/generators/onrampurl",params:{projectId:i.OptionsController.state.projectId},body:{destinationWallets:a,defaultNetwork:c,partnerUserId:b,defaultExperience:"buy",presetCryptoAmount:d,presetFiatAmount:e}})).url:"",async getOnrampOptions(){if(!await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await n.get({path:"/v1/onramp/options"})}catch(a){return k}},async getOnrampQuote({purchaseCurrency:a,paymentCurrency:b,amount:c,network:d}){try{if(!await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId))return null;return await m.api.post({path:"/v1/onramp/quote",params:{projectId:i.OptionsController.state.projectId},body:{purchaseCurrency:a,paymentCurrency:b,amount:c,network:d}})}catch(a){return{coinbaseFee:{amount:c,currency:b.id},networkFee:{amount:c,currency:b.id},paymentSubtotal:{amount:c,currency:b.id},paymentTotal:{amount:c,currency:b.id},purchaseAmount:{amount:c,currency:b.id},quoteId:"mocked-quote-id"}}},getSmartSessions:async a=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?n.get({path:`/v1/sessions/${a}`}):[],revokeSmartSession:async(a,b,c)=>await n.isNetworkSupported(h.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.api.post({path:`/v1/sessions/${a}/revoke`,params:{projectId:i.OptionsController.state.projectId},body:{pci:b,signature:c}}):{success:!1},setClientId(a){m.clientId=a,m.api=new f.FetchUtil({baseUrl:l,clientId:a})}},o=(0,b.proxy)({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),p=(0,e.withErrorBoundary)({state:o,replaceState(a){a&&Object.assign(o,(0,b.ref)(a))},subscribe:a=>h.ChainController.subscribeChainProp("accountState",b=>{if(b)return a(b)}),subscribeKey(a,b,c){let d;return h.ChainController.subscribeChainProp("accountState",c=>{if(c){let e=c[a];d!==e&&(d=e,b(e))}},c)},setStatus(a,b){h.ChainController.setAccountProp("status",a,b)},getCaipAddress:a=>h.ChainController.getAccountProp("caipAddress",a),setCaipAddress(a,b){let c=a?d.CoreHelperUtil.getPlainAddress(a):void 0;b===h.ChainController.state.activeChain&&(h.ChainController.state.activeCaipAddress=a),h.ChainController.setAccountProp("caipAddress",a,b),h.ChainController.setAccountProp("address",c,b)},setBalance(a,b,c){h.ChainController.setAccountProp("balance",a,c),h.ChainController.setAccountProp("balanceSymbol",b,c)},setProfileName(a,b){h.ChainController.setAccountProp("profileName",a,b)},setProfileImage(a,b){h.ChainController.setAccountProp("profileImage",a,b)},setUser(a,b){h.ChainController.setAccountProp("user",a,b)},setAddressExplorerUrl(a,b){h.ChainController.setAccountProp("addressExplorerUrl",a,b)},setSmartAccountDeployed(a,b){h.ChainController.setAccountProp("smartAccountDeployed",a,b)},setCurrentTab(a){h.ChainController.setAccountProp("currentTab",a,h.ChainController.state.activeChain)},setTokenBalance(a,b){a&&h.ChainController.setAccountProp("tokenBalance",a,b)},setShouldUpdateToAddress(a,b){h.ChainController.setAccountProp("shouldUpdateToAddress",a,b)},setAllAccounts(a,b){h.ChainController.setAccountProp("allAccounts",a,b)},addAddressLabel(a,b,c){let d=h.ChainController.getAccountProp("addressLabels",c)||new Map;d.set(a,b),h.ChainController.setAccountProp("addressLabels",d,c)},removeAddressLabel(a,b){let c=h.ChainController.getAccountProp("addressLabels",b)||new Map;c.delete(a),h.ChainController.setAccountProp("addressLabels",c,b)},setConnectedWalletInfo(a,b){h.ChainController.setAccountProp("connectedWalletInfo",a,b,!1)},setPreferredAccountType(a,b){h.ChainController.setAccountProp("preferredAccountTypes",{...o.preferredAccountTypes,[b]:a},b)},setPreferredAccountTypes(a){o.preferredAccountTypes=a},setSocialProvider(a,b){a&&h.ChainController.setAccountProp("socialProvider",a,b)},setSocialWindow(a,c){h.ChainController.setAccountProp("socialWindow",a?(0,b.ref)(a):void 0,c)},setFarcasterUrl(a,b){h.ChainController.setAccountProp("farcasterUrl",a,b)},async fetchTokenBalance(a){o.balanceLoading=!0;let b=h.ChainController.state.activeCaipNetwork?.caipNetworkId,e=h.ChainController.state.activeCaipNetwork?.chainNamespace,f=h.ChainController.state.activeCaipAddress,g=f?d.CoreHelperUtil.getPlainAddress(f):void 0;if(o.lastRetry&&!d.CoreHelperUtil.isAllowedRetry(o.lastRetry,30*c.ConstantsUtil.ONE_SEC_MS))return o.balanceLoading=!1,[];try{if(g&&b&&e){let a=(await n.getBalance(g,b)).balances.filter(a=>"0"!==a.quantity.decimals);return p.setTokenBalance(a,e),o.lastRetry=void 0,o.balanceLoading=!1,a}}catch(b){o.lastRetry=Date.now(),a?.(b),j.SnackController.showError("Token Balance Unavailable")}finally{o.balanceLoading=!1}return[]},resetAccount(a){h.ChainController.resetAccount(a)}})},425507,a=>{"use strict";let b={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:("u">typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};a.s(["ConstantsUtil",0,b])},14569,922102,a=>{"use strict";let b,c,d;a.i(489442);var e=a.i(372775),f=a.i(745562);function g(a){c&&d&&("light"===a?(c.removeAttribute("media"),d.media="enabled"):(d.removeAttribute("media"),c.media="enabled"))}function h(a){return{core:e.css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,e.unsafeCSS)(a?.["--w3m-color-mix-strength"]?`${a["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,e.unsafeCSS)(a?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,e.unsafeCSS)(a?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,e.unsafeCSS)(a?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,e.unsafeCSS)(a?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:e.css`
      :root {
        --w3m-color-mix: ${(0,e.unsafeCSS)(a?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,e.unsafeCSS)((0,f.getW3mThemeVariables)(a,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,e.unsafeCSS)((0,f.getW3mThemeVariables)(a,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:e.css`
      :root {
        --w3m-color-mix: ${(0,e.unsafeCSS)(a?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,e.unsafeCSS)((0,f.getW3mThemeVariables)(a,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,e.unsafeCSS)((0,f.getW3mThemeVariables)(a,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}let i=e.css`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,j=e.css`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,k=e.css`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;a.s(["colorStyles",0,k,"elementStyles",0,j,"initializeTheming",0,function(a,e){b=document.createElement("style"),c=document.createElement("style"),d=document.createElement("style"),b.textContent=h(a).core.cssText,c.textContent=h(a).dark.cssText,d.textContent=h(a).light.cssText,document.head.appendChild(b),document.head.appendChild(c),document.head.appendChild(d),g(e)},"resetStyles",0,i,"setColorTheme",0,g,"setThemeVariables",0,function(a){b&&c&&d&&(b.textContent=h(a).core.cssText,c.textContent=h(a).dark.cssText,d.textContent=h(a).light.cssText)}],922102),a.s([],14569)}];

//# sourceMappingURL=0tsp_04f_dmy._.js.map
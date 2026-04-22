(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,869609,e=>{"use strict";e.i(864380),e.s([])},683544,e=>{"use strict";e.i(812207);var t=e.i(108285),a=e.i(654479);e.i(374576);var n=e.i(120119);e.i(234051);var r=e.i(829389);e.i(852634);var i=e.i(459088),s=e.i(645975),o=e.i(162611);let c=o.css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,t,a,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,a,s):r(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return a.html`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,r.ifDefined)(this.iconSize)}></wui-icon>
    </button>`}};u.styles=[i.resetStyles,i.elementStyles,c],l([(0,n.property)()],u.prototype,"icon",void 0),l([(0,n.property)()],u.prototype,"variant",void 0),l([(0,n.property)()],u.prototype,"type",void 0),l([(0,n.property)()],u.prototype,"size",void 0),l([(0,n.property)()],u.prototype,"iconSize",void 0),l([(0,n.property)({type:Boolean})],u.prototype,"fullWidth",void 0),l([(0,n.property)({type:Boolean})],u.prototype,"disabled",void 0),u=l([(0,s.customElement)("wui-icon-button")],u),e.s([],683544)},651305,e=>{"use strict";e.i(812207);var t=e.i(108285),a=e.i(654479);e.i(374576);var n=e.i(56350);e.i(234051);var r=e.i(829389),i=e.i(960398),s=e.i(971080),o=e.i(227302),c=e.i(803468),l=e.i(811424);e.i(404041);var u=e.i(645975);e.i(534420),e.i(62238),e.i(443452),e.i(683544),e.i(907170),e.i(869609),e.i(143053),e.i(421147),e.i(774339),e.i(79929),e.i(249536),e.i(956303);var d=e.i(365801),p=e.i(742710),m=e.i(401564),h=e.i(150576),y=e.i(653157),g=e.i(462579),w=e.i(221728);let f="INVALID_PAYMENT_CONFIG",C="INVALID_RECIPIENT",b="INVALID_ASSET",x="INVALID_AMOUNT",P="UNABLE_TO_INITIATE_PAYMENT",v="INVALID_CHAIN_NAMESPACE",S="GENERIC_PAYMENT_ERROR",E="UNABLE_TO_GET_EXCHANGES",I="ASSET_NOT_SUPPORTED",A="UNABLE_TO_GET_PAY_URL",k="UNABLE_TO_GET_BUY_STATUS",U={[f]:"Invalid payment configuration",[C]:"Invalid recipient address",[b]:"Invalid asset specified",[x]:"Invalid payment amount",UNKNOWN_ERROR:"Unknown payment error occurred",[P]:"Unable to initiate payment",[v]:"Invalid chain namespace",[S]:"Unable to process payment",[E]:"Unable to get exchanges",[I]:"Asset not supported by the selected exchange",[A]:"Unable to get payment URL",[k]:"Unable to get buy status"};class N extends Error{get message(){return U[this.code]}constructor(e,t){super(U[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,N)}}var T=e.i(82283);class D extends Error{}async function $(e,t){let a,n=(a=T.OptionsController.getSnapshot().projectId,`https://rpc.walletconnect.org/v1/json-rpc?projectId=${a}`),{sdkType:r,sdkVersion:i,projectId:s}=T.OptionsController.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:r,sv:i,projectId:s}},c=await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new D(l.error.message);return l}async function R(e){return(await $("reown_getExchanges",e)).result}async function _(e){return(await $("reown_getExchangePayUrl",e)).result}async function O(e){return(await $("reown_getExchangeBuyStatus",e)).result}let L=["eip155","solana"],M={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function W(e,t){let{chainNamespace:a,chainId:n}=h.ParseUtil.parseCaipNetworkId(e),r=M[a];if(!r)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let i=r.native.assetNamespace,s=r.native.assetReference;"native"!==t&&(i=r.defaultTokenNamespace,s=t);let o=`${a}:${n}`;return`${o}/${i}:${s}`}var z=e.i(959204);async function H(e){let{paymentAssetNetwork:t,activeCaipNetwork:a,approvedCaipNetworkIds:n,requestedCaipNetworks:r}=e,s=o.CoreHelperUtil.sortRequestedNetworks(n,r).find(e=>e.caipNetworkId===t);if(!s)throw new N(f);if(s.caipNetworkId===a.caipNetworkId)return;let c=i.ChainController.getNetworkProp("supportsAllNetworks",s.chainNamespace);if(!(n?.includes(s.caipNetworkId)||c))throw new N(f);try{await i.ChainController.switchActiveNetwork(s)}catch(e){throw new N(S,e)}}async function F(e,t,a){if(t!==m.ConstantsUtil.CHAIN.EVM)throw new N(v);if(!a.fromAddress)throw new N(f,"fromAddress is required for native EVM payments.");let n="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(n))throw new N(f);let r=e.metadata?.decimals??18,i=s.ConnectionController.parseUnits(n.toString(),r);if("bigint"!=typeof i)throw new N(S);return await s.ConnectionController.sendTransaction({chainNamespace:t,to:a.recipient,address:a.fromAddress,value:i,data:"0x"})??void 0}async function Y(e,t){if(!t.fromAddress)throw new N(f,"fromAddress is required for ERC20 EVM payments.");let a=e.asset,n=t.recipient,r=Number(e.metadata.decimals),i=s.ConnectionController.parseUnits(t.amount.toString(),r);if(void 0===i)throw new N(S);return await s.ConnectionController.writeContract({fromAddress:t.fromAddress,tokenAddress:a,args:[n,i],method:"transfer",abi:z.ContractUtil.getERC20Abi(a),chainNamespace:m.ConstantsUtil.CHAIN.EVM})??void 0}async function j(e,t){if(e!==m.ConstantsUtil.CHAIN.SOLANA)throw new N(v);if(!t.fromAddress)throw new N(f,"fromAddress is required for Solana payments.");let a="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(a)||a<=0)throw new N(f,"Invalid payment amount.");try{if(!g.ProviderController.getProvider(e))throw new N(S,"No Solana provider available.");let n=await s.ConnectionController.sendTransaction({chainNamespace:m.ConstantsUtil.CHAIN.SOLANA,to:t.recipient,value:a,tokenMint:t.tokenMint});if(!n)throw new N(S,"Transaction failed.");return n}catch(e){if(e instanceof N)throw e;throw new N(S,`Solana payment failed: ${e}`)}}let B="unknown",K=(0,d.proxy)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),V={state:K,subscribe:e=>(0,d.subscribe)(K,()=>e(K)),subscribeKey:(e,t)=>(0,p.subscribeKey)(K,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),K.isConfigured=!0,y.EventsController.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:K.exchanges,configuration:{network:K.paymentAsset.network,asset:K.paymentAsset.asset,recipient:K.recipient,amount:K.amount}}}),await c.ModalController.open({view:"Pay"})},resetState(){K.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},K.recipient="0x0",K.amount=0,K.isConfigured=!1,K.error=null,K.isPaymentInProgress=!1,K.isLoading=!1,K.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new N(f);try{K.paymentAsset=e.paymentAsset,K.recipient=e.recipient,K.amount=e.amount,K.openInNewTab=e.openInNewTab??!0,K.redirectUrl=e.redirectUrl,K.payWithExchange=e.payWithExchange,K.error=null}catch(e){throw new N(f,e.message)}},getPaymentAsset:()=>K.paymentAsset,getExchanges:()=>K.exchanges,async fetchExchanges(){try{K.isLoading=!0;let e=await R({page:0,asset:W(K.paymentAsset.network,K.paymentAsset.asset),amount:K.amount.toString()});K.exchanges=e.exchanges.slice(0,2)}catch(e){throw l.SnackController.showError(U.UNABLE_TO_GET_EXCHANGES),new N(E)}finally{K.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?W(e.network,e.asset):void 0;return await R({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new N(E)}},async getPayUrl(e,t,a=!1){try{let n=Number(t.amount),r=await _({exchangeId:e,asset:W(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return y.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},headless:a}}),a&&(this.initiatePayment(),y.EventsController.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:K.paymentId||B,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new N(I);throw Error(e.message)}},async openPayUrl(e,t,a=!1){try{let n=await this.getPayUrl(e.exchangeId,t,a);if(!n)throw new N(A);let r=e.openInNewTab??!0;return o.CoreHelperUtil.openHref(n.url,r?"_blank":"_self"),n}catch(e){throw e instanceof N?K.error=e.message:K.error=U.GENERIC_PAYMENT_ERROR,new N(A)}},subscribeEvents(){K.isConfigured||(s.ConnectionController.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),i.ChainController.subscribeChainProp("accountState",e=>{let t=s.ConnectionController.hasAnyConnection(m.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);e?.caipAddress&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){K.currentPayment={type:"wallet",status:"IN_PROGRESS"};let e=i.ChainController.getActiveCaipAddress();if(!e)return;let{chainId:t,address:a}=h.ParseUtil.parseCaipAddress(e),n=i.ChainController.state.activeChain;if(!a||!t||!n||!g.ProviderController.getProvider(n))return;let r=i.ChainController.state.activeCaipNetwork;if(r&&!K.isPaymentInProgress)try{this.initiatePayment();let e=i.ChainController.getAllRequestedCaipNetworks(),t=i.ChainController.getAllApprovedCaipNetworkIds();switch(await H({paymentAssetNetwork:K.paymentAsset.network,activeCaipNetwork:r,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await c.ModalController.open({view:"PayLoading"}),n){case m.ConstantsUtil.CHAIN.EVM:"native"===K.paymentAsset.asset&&(K.currentPayment.result=await F(K.paymentAsset,n,{recipient:K.recipient,amount:K.amount,fromAddress:a})),K.paymentAsset.asset.startsWith("0x")&&(K.currentPayment.result=await Y(K.paymentAsset,{recipient:K.recipient,amount:K.amount,fromAddress:a})),K.currentPayment.status="SUCCESS";break;case m.ConstantsUtil.CHAIN.SOLANA:K.currentPayment.result=await j(n,{recipient:K.recipient,amount:K.amount,fromAddress:a,tokenMint:"native"===K.paymentAsset.asset?void 0:K.paymentAsset.asset}),K.currentPayment.status="SUCCESS";break;default:throw new N(v)}}catch(e){e instanceof N?K.error=e.message:K.error=U.GENERIC_PAYMENT_ERROR,K.currentPayment.status="FAILED",l.SnackController.showError(K.error)}finally{K.isPaymentInProgress=!1}},getExchangeById:e=>K.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:a,amount:n}=e;if(!t)throw new N(f);if(!a)throw new N(C);if(!t.asset)throw new N(b);if(null==n||n<=0)throw new N(x)},handlePayWithWallet(){let e=i.ChainController.getActiveCaipAddress();if(!e)return void w.RouterController.push("Connect");let{chainId:t,address:a}=h.ParseUtil.parseCaipAddress(e),n=i.ChainController.state.activeChain;a&&t&&n?this.handlePayment():w.RouterController.push("Connect")},async handlePayWithExchange(e){try{K.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:a}=K.paymentAsset,n={network:t,asset:a,amount:K.amount,recipient:K.recipient},r=await this.getPayUrl(e,n);if(!r)throw new N(P);return K.currentPayment.sessionId=r.sessionId,K.currentPayment.status="IN_PROGRESS",K.currentPayment.exchangeId=e,this.initiatePayment(),{url:r.url,openInNewTab:K.openInNewTab}}catch(e){return e instanceof N?K.error=e.message:K.error=U.GENERIC_PAYMENT_ERROR,K.isPaymentInProgress=!1,l.SnackController.showError(K.error),null}},async getBuyStatus(e,t){try{let a=await O({sessionId:t,exchangeId:e});return("SUCCESS"===a.status||"FAILED"===a.status)&&y.EventsController.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===a.status?o.CoreHelperUtil.parseError(K.error):void 0,source:"pay",paymentId:K.paymentId||B,configuration:{network:K.paymentAsset.network,asset:K.paymentAsset.asset,recipient:K.recipient,amount:K.amount},currentPayment:{type:"exchange",exchangeId:K.currentPayment?.exchangeId,sessionId:K.currentPayment?.sessionId,result:a.txHash}}}),a}catch(e){throw new N(k)}},async updateBuyStatus(e,t){try{let a=await this.getBuyStatus(e,t);K.currentPayment&&(K.currentPayment.status=a.status,K.currentPayment.result=a.txHash),("SUCCESS"===a.status||"FAILED"===a.status)&&(K.isPaymentInProgress=!1)}catch(e){throw new N(k)}},initiatePayment(){K.isPaymentInProgress=!0,K.paymentId=crypto.randomUUID()},initializeAnalytics(){K.analyticsSet||(K.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(K.currentPayment?.status&&"UNKNOWN"!==K.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[K.currentPayment.status];y.EventsController.sendEvent({type:"track",event:e,properties:{message:"FAILED"===K.currentPayment.status?o.CoreHelperUtil.parseError(K.error):void 0,source:"pay",paymentId:K.paymentId||B,configuration:{network:K.paymentAsset.network,asset:K.paymentAsset.asset,recipient:K.recipient,amount:K.amount},currentPayment:{type:K.currentPayment.type,exchangeId:K.currentPayment.exchangeId,sessionId:K.currentPayment.sessionId,result:K.currentPayment.result}}})}}))}};var G=e.i(315193);let q=G.css`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }
`;var J=function(e,t,a,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,a,s):r(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let Z=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=V.state.exchanges,this.isLoading=V.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=i.ChainController.getAccountData()?.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(V.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(V.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(i.ChainController.subscribeChainProp("accountState",e=>{this.connectedWalletInfo=e?.connectedWalletInfo})),V.fetchExchanges()}get isWalletConnected(){let e=i.ChainController.getAccountData();return e?.status==="connected"}render(){return a.html`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="3">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){let e=V.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=V.state.amount.toString()}renderPayWithWallet(){return!function(e){let{chainNamespace:t}=h.ParseUtil.parseCaipNetworkId(e);return L.includes(t)}(this.networkName)?a.html``:a.html`<wui-flex flexDirection="column" gap="3">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`}renderPaymentHeader(){let e=this.networkName;if(this.networkName){let t=i.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return a.html`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="2">
          <wui-text variant="h1-regular" color="primary">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="1">
            <wui-text variant="md-medium" color="primary">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?a.html`
                  <wui-text variant="sm-medium" color="secondary">
                    on ${e}
                  </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){let e=this.connectedWalletInfo?.name||"connected wallet";return a.html`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        ?fullSize=${!0}
        ?rounded=${!0}
        data-testid="wallet-payment-option"
        imageSrc=${(0,r.ifDefined)(this.connectedWalletInfo?.icon)}
      >
        <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
      </wui-list-item>

      <wui-list-item
        icon="power"
        ?rounded=${!0}
        iconColor="error"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return a.html`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="wallet"
      ?rounded=${!0}
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?a.html`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?a.html`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>a.html`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
          ?loading=${this.loadingExchangeId===e.id}
          imageSrc=${(0,r.ifDefined)(e.imageUrl)}
        >
          <wui-flex alignItems="center" gap="3">
            <wui-text flexGrow="1" variant="md-medium" color="primary"
              >Pay with ${e.name} <wui-spinner size="sm" color="secondary"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){V.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;let t=await V.handlePayWithExchange(e);t&&(await c.ModalController.open({view:"PayLoading"}),o.CoreHelperUtil.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(e){console.error("Failed to pay with exchange",e),l.SnackController.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await s.ConnectionController.disconnect()}catch{console.error("Failed to disconnect"),l.SnackController.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};Z.styles=q,J([(0,n.state)()],Z.prototype,"amount",void 0),J([(0,n.state)()],Z.prototype,"tokenSymbol",void 0),J([(0,n.state)()],Z.prototype,"networkName",void 0),J([(0,n.state)()],Z.prototype,"exchanges",void 0),J([(0,n.state)()],Z.prototype,"isLoading",void 0),J([(0,n.state)()],Z.prototype,"loadingExchangeId",void 0),J([(0,n.state)()],Z.prototype,"connectedWalletInfo",void 0),Z=J([(0,u.customElement)("w3m-pay-view")],Z),e.s(["W3mPayView",0,Z],752869);var X=t,Q=e.i(436220),ee=e.i(149454),et=e.i(639403);e.i(595157);let ea=G.css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var en=function(e,t,a,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,a,s):r(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let er=class extends X.LitElement{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=V.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return a.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["7","5","5","5"]}
        gap="9"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:V.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){V.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{let e=V.state.currentPayment?.exchangeId,t=V.state.currentPayment?.sessionId;e&&t&&(await V.updateBuyStatus(e,t),V.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){V.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(V.state.error||!V.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==s.ConnectionController.state.status&&c.ModalController.close()},3e3))}),V.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){let e=et.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,n=this.getPaymentIcon();return a.html`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${n?a.html`<wui-wallet-image size="lg" imageSrc=${n}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){let e=V.state.currentPayment;if(e){if("exchange"===e.type){let t=e.exchangeId;if(t){let e=V.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){let e=i.ChainController.getAccountData()?.connectedWalletInfo?.icon;if(e)return e;let t=i.ChainController.state.activeChain;if(!t)return;let a=ee.ConnectorController.getConnectorId(t);if(!a)return;let n=ee.ConnectorController.getConnectorById(a);if(!n)return;return Q.AssetUtil.getConnectorImage(n)}}}successTemplate(){return a.html`<wui-icon size="xl" color="success" name="checkmark"></wui-icon>`}errorTemplate(){return a.html`<wui-icon size="xl" color="error" name="close"></wui-icon>`}};async function ei(e){return V.handleOpenPay(e)}async function es(e,t=3e5){if(t<=0)throw new N(f,"Timeout must be greater than 0");try{await ei(e)}catch(e){if(e instanceof N)throw e;throw new N(P,e.message)}return new Promise((e,a)=>{var n;let r=!1,i=setTimeout(()=>{r||(r=!0,o(),a(new N(S,"Payment timeout")))},t);function s(){if(r)return;let t=V.state.currentPayment,a=V.state.error,n=V.state.isPaymentInProgress;if(t?.status==="SUCCESS"){r=!0,o(),clearTimeout(i),e({success:!0,result:t.result});return}if(t?.status==="FAILED"){r=!0,o(),clearTimeout(i),e({success:!1,error:a||"Payment failed"});return}!a||n||t||(r=!0,o(),clearTimeout(i),e({success:!1,error:a}))}let o=(n=[eo("currentPayment",s),eo("error",s),eo("isPaymentInProgress",s)],()=>{n.forEach(e=>{try{e()}catch{}})});s()})}function eo(e,t){return V.subscribeKey(e,t)}er.styles=ea,en([(0,n.state)()],er.prototype,"loadingMessage",void 0),en([(0,n.state)()],er.prototype,"subMessage",void 0),en([(0,n.state)()],er.prototype,"paymentState",void 0),er=en([(0,u.customElement)("w3m-pay-loading-view")],er),e.s(["W3mPayLoadingView",0,er],891602),e.s([],854712),e.i(854712),e.i(752869),e.i(891602);let ec={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},el={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eu={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ed={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ep={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},em={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eh={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ey={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eg={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ew={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ef={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eC={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eb={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ex={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}};e.s(["arbitrumUSDC",0,em,"arbitrumUSDT",0,ef,"baseETH",0,ec,"baseSepoliaETH",0,eu,"baseUSDC",0,el,"ethereumUSDC",0,ed,"ethereumUSDT",0,eg,"optimismUSDC",0,ep,"optimismUSDT",0,ew,"polygonUSDC",0,eh,"polygonUSDT",0,eC,"solanaSOL",0,ex,"solanaUSDC",0,ey,"solanaUSDT",0,eb],746668),e.i(746668),e.s(["W3mPayLoadingView",0,er,"W3mPayView",0,Z,"arbitrumUSDC",0,em,"arbitrumUSDT",0,ef,"baseETH",0,ec,"baseSepoliaETH",0,eu,"baseUSDC",0,el,"ethereumUSDC",0,ed,"ethereumUSDT",0,eg,"getExchanges",0,function(){return V.getExchanges()},"getIsPaymentInProgress",0,function(){return V.state.isPaymentInProgress},"getPayError",0,function(){return V.state.error},"getPayResult",0,function(){return V.state.currentPayment?.result},"openPay",0,ei,"optimismUSDC",0,ep,"optimismUSDT",0,ew,"pay",0,es,"polygonUSDC",0,eh,"polygonUSDT",0,eC,"solanaSOL",0,ex,"solanaUSDC",0,ey,"solanaUSDT",0,eb],651305)}]);
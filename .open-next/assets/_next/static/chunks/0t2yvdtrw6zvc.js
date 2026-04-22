(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,47755,e=>{"use strict";var t=e.i(365801),o=e.i(742710),r=e.i(675457),n=e.i(401564),a=e.i(979484),i=e.i(518887),s=e.i(564126),c=e.i(360334),l=e.i(227302),u=e.i(664717);let d={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){let n=d.getGasPriceInEther(t,o);return r.NumberUtil.bigNumber(e).times(n).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:n}){let a=r.NumberUtil.bigNumber(e).times(t),i=r.NumberUtil.bigNumber(n).times(o);return a.minus(i).div(a).times(100).toNumber()},getMaxSlippage(e,t){let o=r.NumberUtil.bigNumber(e).div(100);return r.NumberUtil.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>r.NumberUtil.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!r.NumberUtil.bigNumber(e).eq(0)||r.NumberUtil.bigNumber(r.NumberUtil.bigNumber(t||"0")).gt(e),isInsufficientSourceTokenForSwap(e,t,o){let n=o?.find(e=>e.address===t)?.quantity?.numeric;return r.NumberUtil.bigNumber(n||"0").lt(e)}};var p=e.i(592279),k=e.i(851887),T=e.i(24742),m=e.i(960398),g=e.i(971080),w=e.i(149454),h=e.i(653157),b=e.i(221728),A=e.i(811424);let S={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:c.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},y=(0,t.proxy)({...S}),v={state:y,subscribe:e=>(0,t.subscribe)(y,()=>e(y)),subscribeKey:(e,t)=>(0,o.subscribeKey)(y,e,t),getParams(){let e=m.ChainController.state.activeChain,t=m.ChainController.getAccountData(e)?.caipAddress??m.ChainController.state.activeCaipAddress,o=l.CoreHelperUtil.getPlainAddress(t),a=(0,s.getActiveNetworkTokenAddress)(),i=w.ConnectorController.getConnectorId(m.ChainController.state.activeChain);if(!o)throw Error("No address found to swap the tokens from.");let c=!y.toToken?.address||!y.toToken?.decimals,u=!y.sourceToken?.address||!y.sourceToken?.decimals||!r.NumberUtil.bigNumber(y.sourceTokenAmount).gt(0),d=!y.sourceTokenAmount;return{networkAddress:a,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:y.sourceToken?.address,toTokenAddress:y.toToken?.address,toTokenAmount:y.toTokenAmount,toTokenDecimals:y.toToken?.decimals,sourceTokenAmount:y.sourceTokenAmount,sourceTokenDecimals:y.sourceToken?.decimals,invalidToToken:c,invalidSourceToken:u,invalidSourceTokenAmount:d,availableToSwap:t&&!c&&!u&&!d,isAuthConnector:i===n.ConstantsUtil.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){y.sourceToken=e,y.sourceTokenAmount="",y.sourceTokenPriceInUSD=0;return}y.sourceToken=e,await C.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){y.sourceTokenAmount=e},async setToToken(e){if(!e){y.toToken=e,y.toTokenAmount="",y.toTokenPriceInUSD=0;return}y.toToken=e,await C.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){y.toTokenAmount=e?r.NumberUtil.toFixed(e,6):""},async setTokenPrice(e,t){let o=y.tokensPriceMap[e]||0;o||(y.loadingPrices=!0,o=await C.getAddressPrice(e)),"sourceToken"===t?y.sourceTokenPriceInUSD=o:"toToken"===t&&(y.toTokenPriceInUSD=o),y.loadingPrices&&(y.loadingPrices=!1),C.getParams().availableToSwap&&!y.switchingTokens&&C.swapTokens()},async switchTokens(){if(!y.initializing&&y.initialized&&!y.switchingTokens){y.switchingTokens=!0;try{let e=y.toToken?{...y.toToken}:void 0,t=y.sourceToken?{...y.sourceToken}:void 0,o=e&&""===y.toTokenAmount?"1":y.toTokenAmount;C.setSourceTokenAmount(o),C.setToTokenAmount(""),await C.setSourceToken(e),await C.setToToken(t),y.switchingTokens=!1,C.swapTokens()}catch(e){throw y.switchingTokens=!1,e}}},resetState(){y.myTokensWithBalance=S.myTokensWithBalance,y.tokensPriceMap=S.tokensPriceMap,y.initialized=S.initialized,y.initializing=S.initializing,y.switchingTokens=S.switchingTokens,y.sourceToken=S.sourceToken,y.sourceTokenAmount=S.sourceTokenAmount,y.sourceTokenPriceInUSD=S.sourceTokenPriceInUSD,y.toToken=S.toToken,y.toTokenAmount=S.toTokenAmount,y.toTokenPriceInUSD=S.toTokenPriceInUSD,y.networkPrice=S.networkPrice,y.networkTokenSymbol=S.networkTokenSymbol,y.networkBalanceInUSD=S.networkBalanceInUSD,y.inputError=S.inputError},resetValues(){let{networkAddress:e}=C.getParams(),t=y.tokens?.find(t=>t.address===e);C.setSourceToken(t),C.setToToken(void 0)},getApprovalLoadingState:()=>y.loadingApprovalTransaction,clearError(){y.transactionError=void 0},async initializeState(){if(!y.initializing){if(y.initializing=!0,!y.initialized)try{await C.fetchTokens(),y.initialized=!0}catch(e){y.initialized=!1,A.SnackController.showError("Failed to initialize swap"),b.RouterController.goBack()}y.initializing=!1}},async fetchTokens(){let{networkAddress:e}=C.getParams();await C.getNetworkTokenPrice(),await C.getMyTokensWithBalance();let t=y.myTokensWithBalance?.find(t=>t.address===e);t&&(y.networkTokenSymbol=t.symbol,C.setSourceToken(t),C.setSourceTokenAmount("0"))},async getTokenList(){let e=m.ChainController.state.activeCaipNetwork?.caipNetworkId;if(y.caipNetworkId!==e||!y.tokens)try{y.tokensLoading=!0;let t=await u.SwapApiUtil.getTokenList(e);y.tokens=t,y.caipNetworkId=e,y.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol));let o=(e&&c.ConstantsUtil.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e),r=(c.ConstantsUtil.SWAP_SUGGESTED_TOKENS||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e).filter(e=>!o.some(t=>t.address===e.address));y.suggestedTokens=[...o,...r]}catch(e){y.tokens=[],y.popularTokens=[],y.suggestedTokens=[]}finally{y.tokensLoading=!1}},async getAddressPrice(e){let t=y.tokensPriceMap[e];if(t)return t;let o=await T.BlockchainApiController.fetchTokenPrice({addresses:[e]}),r=o?.fungibles||[],n=[...y.tokens||[],...y.myTokensWithBalance||[]],a=n?.find(t=>t.address===e)?.symbol,i=parseFloat((r.find(e=>e.symbol.toLowerCase()===a?.toLowerCase())?.price||0).toString());return y.tokensPriceMap[e]=i,i},async getNetworkTokenPrice(){let{networkAddress:e}=C.getParams(),t=await T.BlockchainApiController.fetchTokenPrice({addresses:[e]}).catch(()=>(A.SnackController.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],r=o?.price.toString()||"0";y.tokensPriceMap[e]=parseFloat(r),y.networkTokenSymbol=o?.symbol||"",y.networkPrice=r},async getMyTokensWithBalance(e){let t=await i.BalanceUtil.getMyTokensWithBalance(e),o=u.SwapApiUtil.mapBalancesToSwapTokens(t);o&&(await C.getInitialGasPrice(),C.setBalances(o))},setBalances(e){let{networkAddress:t}=C.getParams(),o=m.ChainController.state.activeCaipNetwork;if(!o)return;let n=e.find(e=>e.address===t);e.forEach(e=>{y.tokensPriceMap[e.address]=e.price||0}),y.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),y.networkBalanceInUSD=n?r.NumberUtil.multiply(n.quantity.numeric,n.price).toString():"0"},async getInitialGasPrice(){let e=await u.SwapApiUtil.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(m.ChainController.state?.activeCaipNetwork?.chainNamespace){case n.ConstantsUtil.CHAIN.SOLANA:return y.gasFee=e.standard??"0",y.gasPriceInUSD=r.NumberUtil.multiply(e.standard,y.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(y.gasFee),gasPriceInUSD:Number(y.gasPriceInUSD)};case n.ConstantsUtil.CHAIN.EVM:default:let t=e.standard??"0",o=BigInt(t),a=BigInt(15e4),i=d.getGasPriceInUSD(y.networkPrice,a,o);return y.gasFee=t,y.gasPriceInUSD=i,{gasPrice:o,gasPriceInUSD:i}}},async swapTokens(){let e=m.ChainController.getAccountData()?.address,t=y.sourceToken,o=y.toToken,n=r.NumberUtil.bigNumber(y.sourceTokenAmount).gt(0);if(n||C.setToTokenAmount(""),!o||!t||y.loadingPrices||!n||!e)return;y.loadingQuote=!0;let a=r.NumberUtil.bigNumber(y.sourceTokenAmount).times(10**t.decimals).round(0);try{let n=await T.BlockchainApiController.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:y.gasFee,amount:a.toString()});y.loadingQuote=!1;let i=n?.quotes?.[0]?.toAmount;if(!i)return void k.AlertController.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");let s=r.NumberUtil.bigNumber(i).div(10**o.decimals).toString();C.setToTokenAmount(s),C.hasInsufficientToken(y.sourceTokenAmount,t.address)?y.inputError="Insufficient balance":(y.inputError=void 0,C.setTransactionDetails())}catch(t){let e=await u.SwapApiUtil.handleSwapError(t);y.loadingQuote=!1,y.inputError=e||"Insufficient balance"}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=C.getParams(),o=y.sourceToken,r=y.toToken;if(e&&t&&o&&r&&!y.loadingQuote)try{let t;return y.loadingBuildTransaction=!0,t=await u.SwapApiUtil.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:y.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await C.createSwapTransaction():await C.createAllowanceTransaction(),y.loadingBuildTransaction=!1,y.fetchError=!1,t}catch(e){b.RouterController.goBack(),A.SnackController.showError("Failed to check allowance"),y.loadingBuildTransaction=!1,y.approvalTransaction=void 0,y.swapTransaction=void 0,y.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=C.getParams();if(e&&o){if(!t)throw Error("createAllowanceTransaction - No source token address found.");try{let r=await T.BlockchainApiController.generateApproveCalldata({from:t,to:o,userAddress:e}),n=l.CoreHelperUtil.getPlainAddress(r.tx.from);if(!n)throw Error("SwapController:createAllowanceTransaction - address is required");let a={data:r.tx.data,to:n,gasPrice:BigInt(r.tx.eip155.gasPrice),value:BigInt(r.tx.value),toAmount:y.toTokenAmount};return y.swapTransaction=void 0,y.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch(e){b.RouterController.goBack(),A.SnackController.showError("Failed to create approval transaction"),y.approvalTransaction=void 0,y.swapTransaction=void 0,y.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=C.getParams(),r=y.sourceToken,n=y.toToken;if(!t||!o||!r||!n)return;let a=g.ConnectionController.parseUnits(o,r.decimals)?.toString();try{let o=await T.BlockchainApiController.generateSwapCalldata({userAddress:t,from:r.address,to:n.address,amount:a,disableEstimate:!0}),i=r.address===e,s=BigInt(o.tx.eip155.gas),c=BigInt(o.tx.eip155.gasPrice),u=l.CoreHelperUtil.getPlainAddress(o.tx.to);if(!u)throw Error("SwapController:createSwapTransaction - address is required");let p={data:o.tx.data,to:u,gas:s,gasPrice:c,value:i?BigInt(a??"0"):BigInt("0"),toAmount:y.toTokenAmount};return y.gasPriceInUSD=d.getGasPriceInUSD(y.networkPrice,s,c),y.approvalTransaction=void 0,y.swapTransaction=p,p}catch(e){b.RouterController.goBack(),A.SnackController.showError("Failed to create transaction"),y.approvalTransaction=void 0,y.swapTransaction=void 0,y.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){A.SnackController.showLoading("Approve limit increase in your wallet"),b.RouterController.replace("SwapPreview")},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:o}=C.getParams();y.loadingApprovalTransaction=!0,o?b.RouterController.pushTransactionStack({onSuccess:C.onEmbeddedWalletApprovalSuccess}):A.SnackController.showLoading("Approve limit increase in your wallet");try{await g.ConnectionController.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.ConstantsUtil.CHAIN.EVM}),await C.swapTokens(),await C.getTransaction(),y.approvalTransaction=void 0,y.loadingApprovalTransaction=!1}catch(e){y.transactionError=e?.displayMessage,y.loadingApprovalTransaction=!1,A.SnackController.showError(e?.displayMessage||"Transaction error"),h.EventsController.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:m.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:C.state.sourceToken?.symbol||"",swapToToken:C.state.toToken?.symbol||"",swapFromAmount:C.state.sourceTokenAmount||"",swapToAmount:C.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(n.ConstantsUtil.CHAIN.EVM)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=C.getParams();y.loadingTransaction=!0;let c=`Swapping ${y.sourceToken?.symbol} to ${r.NumberUtil.formatNumberToLocalString(o,3)} ${y.toToken?.symbol}`,l=`Swapped ${y.sourceToken?.symbol} to ${r.NumberUtil.formatNumberToLocalString(o,3)} ${y.toToken?.symbol}`;i?b.RouterController.pushTransactionStack({onSuccess(){b.RouterController.replace("Account"),A.SnackController.showLoading(c),v.resetState()}}):A.SnackController.showLoading("Confirm transaction in your wallet");try{let o=[y.sourceToken?.address,y.toToken?.address].join(","),r=await g.ConnectionController.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.ConstantsUtil.CHAIN.EVM});return y.loadingTransaction=!1,A.SnackController.showSuccess(l),h.EventsController.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:m.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:C.state.sourceToken?.symbol||"",swapToToken:C.state.toToken?.symbol||"",swapFromAmount:C.state.sourceTokenAmount||"",swapToAmount:C.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(n.ConstantsUtil.CHAIN.EVM)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.resetState(),i||b.RouterController.replace("Account"),v.getMyTokensWithBalance(o),r}catch(e){y.transactionError=e?.displayMessage,y.loadingTransaction=!1,A.SnackController.showError(e?.displayMessage||"Transaction error"),h.EventsController.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:m.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:C.state.sourceToken?.symbol||"",swapToToken:C.state.toToken?.symbol||"",swapFromAmount:C.state.sourceTokenAmount||"",swapToAmount:C.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(n.ConstantsUtil.CHAIN.EVM)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken:(e,t)=>d.isInsufficientSourceTokenForSwap(e,t,y.myTokensWithBalance),setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=C.getParams();e&&t&&(y.gasPriceInUSD=d.getGasPriceInUSD(y.networkPrice,BigInt(y.gasFee),BigInt(15e4)),y.priceImpact=d.getPriceImpact({sourceTokenAmount:y.sourceTokenAmount,sourceTokenPriceInUSD:y.sourceTokenPriceInUSD,toTokenPriceInUSD:y.toTokenPriceInUSD,toTokenAmount:y.toTokenAmount}),y.maxSlippage=d.getMaxSlippage(y.slippage,y.toTokenAmount),y.providerFee=d.getProviderFee(y.sourceTokenAmount))}},C=(0,p.withErrorBoundary)(v);e.s(["SwapController",0,C],47755)},683544,e=>{"use strict";e.i(812207);var t=e.i(108285),o=e.i(654479);e.i(374576);var r=e.i(120119);e.i(234051);var n=e.i(829389);e.i(852634);var a=e.i(459088),i=e.i(645975),s=e.i(162611);let c=s.css`
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
`;var l=function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let u=class extends t.LitElement{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return o.html`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,n.ifDefined)(this.iconSize)}></wui-icon>
    </button>`}};u.styles=[a.resetStyles,a.elementStyles,c],l([(0,r.property)()],u.prototype,"icon",void 0),l([(0,r.property)()],u.prototype,"variant",void 0),l([(0,r.property)()],u.prototype,"type",void 0),l([(0,r.property)()],u.prototype,"size",void 0),l([(0,r.property)()],u.prototype,"iconSize",void 0),l([(0,r.property)({type:Boolean})],u.prototype,"fullWidth",void 0),l([(0,r.property)({type:Boolean})],u.prototype,"disabled",void 0),u=l([(0,i.customElement)("wui-icon-button")],u),e.s([],683544)}]);
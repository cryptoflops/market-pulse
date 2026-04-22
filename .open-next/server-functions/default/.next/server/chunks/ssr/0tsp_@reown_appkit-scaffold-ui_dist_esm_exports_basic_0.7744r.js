module.exports=[235852,a=>{"use strict";a.i(489442);var b=a.i(37910),c=a.i(802705);a.i(410935);var d=a.i(954055),e=a.i(746531),f=a.i(123156),g=a.i(405393),h=a.i(630544);a.i(14569);var i=a.i(21410);a.i(43207);var j=b,k=a.i(811016);a.i(623301);var l=a.i(905406),m=a.i(178484),n=a.i(597595),o=a.i(427038),p=b;a.i(426266),a.i(230634),a.i(13011);var q=a.i(922102),r=b;a.i(286141);var s=b;a.i(711786);var t=a.i(372775);let u=t.css`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends s.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let a="xxs";return a="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${a});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c.html`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:c.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};w.styles=[q.elementStyles,q.resetStyles,u],v([(0,k.property)()],w.prototype,"size",void 0),v([(0,k.property)()],w.prototype,"name",void 0),v([(0,k.property)()],w.prototype,"imageSrc",void 0),v([(0,k.property)()],w.prototype,"walletIcon",void 0),v([(0,k.property)({type:Boolean})],w.prototype,"installed",void 0),v([(0,k.property)()],w.prototype,"badgeSize",void 0),w=v([(0,i.customElement)("wui-wallet-image")],w);let x=t.css`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let z=class extends r.LitElement{constructor(){super(...arguments),this.walletImages=[]}render(){let a=this.walletImages.length<4;return c.html`${this.walletImages.slice(0,4).map(({src:a,walletName:b})=>c.html`
            <wui-wallet-image
              size="inherit"
              imageSrc=${a}
              name=${(0,l.ifDefined)(b)}
            ></wui-wallet-image>
          `)}
      ${a?[...Array(4-this.walletImages.length)].map(()=>c.html` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};z.styles=[q.resetStyles,x],y([(0,k.property)({type:Array})],z.prototype,"walletImages",void 0),z=y([(0,i.customElement)("wui-all-wallets-image")],z),a.i(592244);let A=t.css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var B=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let C=class extends p.LitElement{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return c.html`
      <button ?disabled=${this.disabled} tabindex=${(0,l.ifDefined)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?c.html` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?c.html` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?c.html`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:c.html`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?c.html`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?c.html`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?c.html`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};C.styles=[q.resetStyles,q.elementStyles,A],B([(0,k.property)({type:Array})],C.prototype,"walletImages",void 0),B([(0,k.property)()],C.prototype,"imageSrc",void 0),B([(0,k.property)()],C.prototype,"name",void 0),B([(0,k.property)()],C.prototype,"tagLabel",void 0),B([(0,k.property)()],C.prototype,"tagVariant",void 0),B([(0,k.property)()],C.prototype,"icon",void 0),B([(0,k.property)()],C.prototype,"walletIcon",void 0),B([(0,k.property)()],C.prototype,"tabIdx",void 0),B([(0,k.property)({type:Boolean})],C.prototype,"installed",void 0),B([(0,k.property)({type:Boolean})],C.prototype,"disabled",void 0),B([(0,k.property)({type:Boolean})],C.prototype,"showAllWallets",void 0),B([(0,k.property)({type:Boolean})],C.prototype,"loading",void 0),B([(0,k.property)({type:String})],C.prototype,"loadingSpinnerColor",void 0),C=B([(0,i.customElement)("wui-list-wallet")],C);var D=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let E=class extends j.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.count=e.ApiController.state.count,this.filteredCount=e.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=e.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a),e.ApiController.subscribeKey("count",a=>this.count=a),e.ApiController.subscribeKey("filteredWallets",a=>this.filteredCount=a.length),e.ApiController.subscribeKey("isFetchingRecommendedWallets",a=>this.isFetchingRecommendedWallets=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.connectors.find(a=>"walletConnect"===a.id),{allWallets:b}=g.OptionsController.state;if(!a||"HIDE"===b||"ONLY_MOBILE"===b&&!f.CoreHelperUtil.isMobile())return null;let d=e.ApiController.state.featured.length,h=this.count+d,i=h<10?h:10*Math.floor(h/10),j=this.filteredCount>0?this.filteredCount:i,k=`${j}`;return this.filteredCount>0?k=`${this.filteredCount}`:j<h&&(k=`${j}+`),c.html`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${k}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){n.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),o.RouterController.push("AllWallets")}};D([(0,k.property)()],E.prototype,"tabIdx",void 0),D([(0,d.state)()],E.prototype,"connectors",void 0),D([(0,d.state)()],E.prototype,"count",void 0),D([(0,d.state)()],E.prototype,"filteredCount",void 0),D([(0,d.state)()],E.prototype,"isFetchingRecommendedWallets",void 0),E=D([(0,i.customElement)("w3m-all-wallets-widget")],E);var F=b,G=b,H=a.i(316047),I=a.i(520927),J=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let K=class extends G.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.connectors.filter(a=>"ANNOUNCED"===a.type);return a?.length?c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${a.filter(I.ConnectorUtil.showConnector).map(a=>c.html`
              <wui-list-wallet
                imageSrc=${(0,l.ifDefined)(H.AssetUtil.getConnectorImage(a))}
                name=${a.name??"Unknown"}
                @click=${()=>this.onConnector(a)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${a.id}`}
                .installed=${!0}
                tabIdx=${(0,l.ifDefined)(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(a){"walletConnect"===a.id?f.CoreHelperUtil.isMobile()?o.RouterController.push("AllWallets"):o.RouterController.push("ConnectingWalletConnect"):o.RouterController.push("ConnectingExternal",{connector:a})}};J([(0,k.property)()],K.prototype,"tabIdx",void 0),J([(0,d.state)()],K.prototype,"connectors",void 0),K=J([(0,i.customElement)("w3m-connect-announced-widget")],K);var L=b,M=a.i(760532),N=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let O=class extends L.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a)),f.CoreHelperUtil.isTelegram()&&f.CoreHelperUtil.isIos()&&(this.loading=!M.ConnectionController.state.wcUri,this.unsubscribe.push(M.ConnectionController.subscribeKey("wcUri",a=>this.loading=!a)))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{customWallets:a}=g.OptionsController.state;if(!a?.length)return this.style.cssText="display: none",null;let b=this.filterOutDuplicateWallets(a);return c.html`<wui-flex flexDirection="column" gap="xs">
      ${b.map(a=>c.html`
          <wui-list-wallet
            imageSrc=${(0,l.ifDefined)(H.AssetUtil.getWalletImage(a))}
            name=${a.name??"Unknown"}
            @click=${()=>this.onConnectWallet(a)}
            data-testid=${`wallet-selector-${a.id}`}
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(a){let b=h.StorageUtil.getRecentWallets(),c=this.connectors.map(a=>a.info?.rdns).filter(Boolean),d=b.map(a=>a.rdns).filter(Boolean),e=c.concat(d);if(e.includes("io.metamask.mobile")&&f.CoreHelperUtil.isMobile()){let a=e.indexOf("io.metamask.mobile");e[a]="io.metamask"}return a.filter(a=>!e.includes(String(a?.rdns)))}onConnectWallet(a){this.loading||o.RouterController.push("ConnectingWalletConnect",{wallet:a})}};N([(0,k.property)()],O.prototype,"tabIdx",void 0),N([(0,d.state)()],O.prototype,"connectors",void 0),N([(0,d.state)()],O.prototype,"loading",void 0),O=N([(0,i.customElement)("w3m-connect-custom-widget")],O);var P=b,Q=a.i(219687),R=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let S=class extends P.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.connectors.filter(a=>"EXTERNAL"===a.type).filter(I.ConnectorUtil.showConnector).filter(a=>a.id!==Q.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK);return a?.length?c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${a.map(a=>c.html`
            <wui-list-wallet
              imageSrc=${(0,l.ifDefined)(H.AssetUtil.getConnectorImage(a))}
              .installed=${!0}
              name=${a.name??"Unknown"}
              data-testid=${`wallet-selector-external-${a.id}`}
              @click=${()=>this.onConnector(a)}
              tabIdx=${(0,l.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(a){o.RouterController.push("ConnectingExternal",{connector:a})}};R([(0,k.property)()],S.prototype,"tabIdx",void 0),R([(0,d.state)()],S.prototype,"connectors",void 0),S=R([(0,i.customElement)("w3m-connect-external-widget")],S);var T=b,U=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let V=class extends T.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(a=>c.html`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${a.id}`}
              imageSrc=${(0,l.ifDefined)(H.AssetUtil.getWalletImage(a))}
              name=${a.name??"Unknown"}
              @click=${()=>this.onConnectWallet(a)}
              tabIdx=${(0,l.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(a){m.ConnectorController.selectWalletConnector(a)}};U([(0,k.property)()],V.prototype,"tabIdx",void 0),U([(0,k.property)()],V.prototype,"wallets",void 0),V=U([(0,i.customElement)("w3m-connect-featured-widget")],V);var W=b,X=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Y=class extends W.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){let a=this.connectors.filter(I.ConnectorUtil.showConnector);return 0===a.length?(this.style.cssText="display: none",null):c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${a.map(a=>c.html`
            <wui-list-wallet
              imageSrc=${(0,l.ifDefined)(H.AssetUtil.getConnectorImage(a))}
              .installed=${!0}
              name=${a.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${a.id}`}
              @click=${()=>this.onConnector(a)}
              tabIdx=${(0,l.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(a){m.ConnectorController.setActiveConnector(a),o.RouterController.push("ConnectingExternal",{connector:a})}};X([(0,k.property)()],Y.prototype,"tabIdx",void 0),X([(0,k.property)()],Y.prototype,"connectors",void 0),Y=X([(0,i.customElement)("w3m-connect-injected-widget")],Y);var Z=b,$=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let _=class extends Z.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.connectors.filter(a=>"MULTI_CHAIN"===a.type&&"WalletConnect"!==a.name);return a?.length?c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${a.map(a=>c.html`
            <wui-list-wallet
              imageSrc=${(0,l.ifDefined)(H.AssetUtil.getConnectorImage(a))}
              .installed=${!0}
              name=${a.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${a.id}`}
              @click=${()=>this.onConnector(a)}
              tabIdx=${(0,l.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(a){m.ConnectorController.setActiveConnector(a),o.RouterController.push("ConnectingMultiChain")}};$([(0,k.property)()],_.prototype,"tabIdx",void 0),$([(0,d.state)()],_.prototype,"connectors",void 0),_=$([(0,i.customElement)("w3m-connect-multi-chain-widget")],_);var aa=b,ab=a.i(392573),ac=a.i(517955),ad=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ae=class extends aa.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a)),f.CoreHelperUtil.isTelegram()&&f.CoreHelperUtil.isIos()&&(this.loading=!M.ConnectionController.state.wcUri,this.unsubscribe.push(M.ConnectionController.subscribeKey("wcUri",a=>this.loading=!a)))}render(){let a=h.StorageUtil.getRecentWallets().filter(a=>!ac.WalletUtil.isExcluded(a)).filter(a=>!this.hasWalletConnector(a)).filter(a=>this.isWalletCompatibleWithCurrentChain(a));return a.length?c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${a.map(a=>c.html`
            <wui-list-wallet
              imageSrc=${(0,l.ifDefined)(H.AssetUtil.getWalletImage(a))}
              name=${a.name??"Unknown"}
              @click=${()=>this.onConnectWallet(a)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,l.ifDefined)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(a){this.loading||m.ConnectorController.selectWalletConnector(a)}hasWalletConnector(a){return this.connectors.some(b=>b.id===a.id||b.name===a.name)}isWalletCompatibleWithCurrentChain(a){let b=ab.ChainController.state.activeChain;return!b||!a.chains||a.chains.some(a=>b===a.split(":")[0])}};ad([(0,k.property)()],ae.prototype,"tabIdx",void 0),ad([(0,d.state)()],ae.prototype,"connectors",void 0),ad([(0,d.state)()],ae.prototype,"loading",void 0),ae=ad([(0,i.customElement)("w3m-connect-recent-widget")],ae);var af=b,ag=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ah=class extends af.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,f.CoreHelperUtil.isTelegram()&&f.CoreHelperUtil.isIos()&&(this.loading=!M.ConnectionController.state.wcUri,this.unsubscribe.push(M.ConnectionController.subscribeKey("wcUri",a=>this.loading=!a)))}render(){let{connectors:a}=m.ConnectorController.state,{customWallets:b,featuredWalletIds:d}=g.OptionsController.state,e=h.StorageUtil.getRecentWallets(),f=a.find(a=>"walletConnect"===a.id),i=a.filter(a=>"INJECTED"===a.type||"ANNOUNCED"===a.type||"MULTI_CHAIN"===a.type).filter(a=>"Browser Wallet"!==a.name);if(!f)return null;if(d||b||!this.wallets.length)return this.style.cssText="display: none",null;let j=Math.max(0,2-(i.length+e.length)),k=ac.WalletUtil.filterOutDuplicateWallets(this.wallets).slice(0,j);return k.length?c.html`
      <wui-flex flexDirection="column" gap="xs">
        ${k.map(a=>c.html`
            <wui-list-wallet
              imageSrc=${(0,l.ifDefined)(H.AssetUtil.getWalletImage(a))}
              name=${a?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(a)}
              tabIdx=${(0,l.ifDefined)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(a){if(this.loading)return;let b=m.ConnectorController.getConnector(a.id,a.rdns);b?o.RouterController.push("ConnectingExternal",{connector:b}):o.RouterController.push("ConnectingWalletConnect",{wallet:a})}};ag([(0,k.property)()],ah.prototype,"tabIdx",void 0),ag([(0,k.property)()],ah.prototype,"wallets",void 0),ag([(0,d.state)()],ah.prototype,"loading",void 0),ah=ag([(0,i.customElement)("w3m-connect-recommended-widget")],ah);var ai=b,aj=a.i(320163),ak=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let al=class extends ai.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.connectorImages=aj.AssetController.state.connectorImages,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a),aj.AssetController.subscribeKey("connectorImages",a=>this.connectorImages=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){if(f.CoreHelperUtil.isMobile())return this.style.cssText="display: none",null;let a=this.connectors.find(a=>"walletConnect"===a.id);if(!a)return this.style.cssText="display: none",null;let b=a.imageUrl||this.connectorImages[a?.imageId??""];return c.html`
      <wui-list-wallet
        imageSrc=${(0,l.ifDefined)(b)}
        name=${a.name??"Unknown"}
        @click=${()=>this.onConnector(a)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(a){m.ConnectorController.setActiveConnector(a),o.RouterController.push("ConnectingWalletConnect")}};ak([(0,k.property)()],al.prototype,"tabIdx",void 0),ak([(0,d.state)()],al.prototype,"connectors",void 0),ak([(0,d.state)()],al.prototype,"connectorImages",void 0),al=ak([(0,i.customElement)("w3m-connect-walletconnect-widget")],al);let am=t.css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var an=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ao=class extends F.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.recommended=e.ApiController.state.recommended,this.featured=e.ApiController.state.featured,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>this.connectors=a),e.ApiController.subscribeKey("recommended",a=>this.recommended=a),e.ApiController.subscribeKey("featured",a=>this.featured=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:a,recent:b,announced:d,injected:e,multiChain:f,recommended:g,featured:h,external:i}=I.ConnectorUtil.getConnectorsByType(this.connectors,this.recommended,this.featured);return I.ConnectorUtil.getConnectorTypeOrder({custom:a,recent:b,announced:d,injected:e,multiChain:f,recommended:g,featured:h,external:i}).map(a=>{switch(a){case"injected":return c.html`
            ${f.length?c.html`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,l.ifDefined)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${d.length?c.html`<w3m-connect-announced-widget
                  tabIdx=${(0,l.ifDefined)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${e.length?c.html`<w3m-connect-injected-widget
                  .connectors=${e}
                  tabIdx=${(0,l.ifDefined)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return c.html`<w3m-connect-walletconnect-widget
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return c.html`<w3m-connect-recent-widget
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return c.html`<w3m-connect-featured-widget
            .wallets=${h}
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return c.html`<w3m-connect-custom-widget
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return c.html`<w3m-connect-external-widget
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return c.html`<w3m-connect-recommended-widget
            .wallets=${g}
            tabIdx=${(0,l.ifDefined)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${a}`),null}})}};ao.styles=am,an([(0,k.property)()],ao.prototype,"tabIdx",void 0),an([(0,d.state)()],ao.prototype,"connectors",void 0),an([(0,d.state)()],ao.prototype,"recommended",void 0),an([(0,d.state)()],ao.prototype,"featured",void 0),ao=an([(0,i.customElement)("w3m-connector-list")],ao);var ap=b,aq=a.i(633431),ar=a.i(868990),as=b,at=b;let au=t.css`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var av=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aw=class extends at.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((a,b)=>{let d=b===this.activeTab;return c.html`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(b)}
          data-active=${d}
          data-testid="tab-${a.label?.toLowerCase()}"
        >
          ${this.iconTemplate(a)}
          <wui-text variant="small-600" color="inherit"> ${a.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(a){return a.icon?c.html`<wui-icon size="xs" color="inherit" name=${a.icon}></wui-icon>`:null}onTabClick(a){this.buttons&&this.animateTabs(a,!1),this.activeTab=a,this.onTabChange(a)}animateTabs(a,b){let c=this.buttons[this.activeTab],d=this.buttons[a],e=c?.querySelector("wui-text"),f=d?.querySelector("wui-text"),g=d?.getBoundingClientRect(),h=f?.getBoundingClientRect();c&&e&&!b&&a!==this.activeTab&&(e.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),c.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),d&&g&&h&&f&&(a!==this.activeTab||b)&&(this.localTabWidth=`${Math.round(g.width+h.width)+6}px`,d.animate([{width:`${g.width+h.width}px`}],{duration:500*!b,fill:"forwards",easing:"ease"}),f.animate([{opacity:1}],{duration:125*!b,delay:200*!b,fill:"forwards",easing:"ease"}))}};aw.styles=[q.resetStyles,q.elementStyles,au],av([(0,k.property)({type:Array})],aw.prototype,"tabs",void 0),av([(0,k.property)()],aw.prototype,"onTabChange",void 0),av([(0,k.property)({type:Array})],aw.prototype,"buttons",void 0),av([(0,k.property)({type:Boolean})],aw.prototype,"disabled",void 0),av([(0,k.property)()],aw.prototype,"localTabWidth",void 0),av([(0,d.state)()],aw.prototype,"activeTab",void 0),av([(0,d.state)()],aw.prototype,"isDense",void 0),aw=av([(0,i.customElement)("wui-tabs")],aw);var ax=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ay=class extends as.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.generateTabs();return c.html`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${a} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let a=this.platforms.map(a=>{if("browser"===a)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===a)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===a)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===a)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===a)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=a.map(({platform:a})=>a),a}onTabChange(a){let b=this.platformTabs[a];b&&this.onSelectPlatfrom?.(b)}};ax([(0,k.property)({type:Array})],ay.prototype,"platforms",void 0),ax([(0,k.property)()],ay.prototype,"onSelectPlatfrom",void 0),ay=ax([(0,i.customElement)("w3m-connecting-header")],ay);var az=b,aA=a.i(488438),aB=b;a.i(977318);let aC=t.css`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var aD=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aE={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},aF={lg:"paragraph-600",md:"small-600"},aG={lg:"md",md:"md"},aH=class extends aB.LitElement{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${+!this.loading};
    --local-opacity-000: ${+!!this.loading};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let a=this.textVariant??aF[this.size];return c.html`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${a} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let a=aG[this.size],b=this.disabled?aE.disabled:aE[this.variant];return c.html`<wui-loading-spinner color=${b} size=${a}></wui-loading-spinner>`}return c.html``}};aH.styles=[q.resetStyles,q.elementStyles,aC],aD([(0,k.property)()],aH.prototype,"size",void 0),aD([(0,k.property)({type:Boolean})],aH.prototype,"disabled",void 0),aD([(0,k.property)({type:Boolean})],aH.prototype,"fullWidth",void 0),aD([(0,k.property)({type:Boolean})],aH.prototype,"loading",void 0),aD([(0,k.property)()],aH.prototype,"variant",void 0),aD([(0,k.property)({type:Boolean})],aH.prototype,"hasIconLeft",void 0),aD([(0,k.property)({type:Boolean})],aH.prototype,"hasIconRight",void 0),aD([(0,k.property)()],aH.prototype,"borderRadius",void 0),aD([(0,k.property)()],aH.prototype,"textVariant",void 0),aH=aD([(0,i.customElement)("wui-button")],aH),a.i(699698);var aI=b;let aJ=t.css`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var aK=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aL=class extends aI.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return c.html`
      <button ?disabled=${this.disabled} tabindex=${(0,l.ifDefined)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};aL.styles=[q.resetStyles,q.elementStyles,aJ],aK([(0,k.property)()],aL.prototype,"tabIdx",void 0),aK([(0,k.property)({type:Boolean})],aL.prototype,"disabled",void 0),aK([(0,k.property)()],aL.prototype,"color",void 0),aL=aK([(0,i.customElement)("wui-link")],aL);var aM=b;let aN=t.css`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var aO=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aP=class extends aM.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return c.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${a}
          stroke-dasharray="${116+b} ${245+b}"
          stroke-dashoffset=${360+1.75*b}
        />
      </svg>
    `}};aP.styles=[q.resetStyles,aN],aO([(0,k.property)({type:Number})],aP.prototype,"radius",void 0),aP=aO([(0,i.customElement)("wui-loading-thumbnail")],aP),a.i(920434);var aQ=b,aR=a.i(795774),aS=b,aT=b;let aU=t.css`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var aV=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aW=class extends aT.LitElement{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let a="sm"===this.size?"small-600":"paragraph-600";return c.html`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?c.html`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${a} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};aW.styles=[q.resetStyles,q.elementStyles,aU],aV([(0,k.property)()],aW.prototype,"variant",void 0),aV([(0,k.property)()],aW.prototype,"imageSrc",void 0),aV([(0,k.property)({type:Boolean})],aW.prototype,"disabled",void 0),aV([(0,k.property)()],aW.prototype,"icon",void 0),aV([(0,k.property)()],aW.prototype,"size",void 0),aV([(0,k.property)()],aW.prototype,"text",void 0),aW=aV([(0,i.customElement)("wui-chip-button")],aW);let aX=t.css`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var aY=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aZ=class extends aS.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c.html`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};aZ.styles=[q.resetStyles,q.elementStyles,aX],aY([(0,k.property)({type:Boolean})],aZ.prototype,"disabled",void 0),aY([(0,k.property)()],aZ.prototype,"label",void 0),aY([(0,k.property)()],aZ.prototype,"buttonLabel",void 0),aZ=aY([(0,i.customElement)("wui-cta-button")],aZ);let a$=t.css`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var a_=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a0=class extends aQ.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:a,app_store:b,play_store:d,chrome_store:e,homepage:g}=this.wallet,h=f.CoreHelperUtil.isMobile(),i=f.CoreHelperUtil.isIos(),j=f.CoreHelperUtil.isAndroid(),k=[b,d,g,e].filter(Boolean).length>1,l=aR.UiHelperUtil.getTruncateString({string:a,charsStart:12,charsEnd:0,truncate:"end"});return k&&!h?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>o.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!k&&g?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:b&&i?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:d&&j?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&f.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&f.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&f.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};a0.styles=[a$],a_([(0,k.property)({type:Object})],a0.prototype,"wallet",void 0),a0=a_([(0,i.customElement)("w3m-mobile-download-links")],a0);let a1=t.css`
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

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var a2=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};class a3 extends az.LitElement{constructor(){super(),this.wallet=o.RouterController.state.data?.wallet,this.connector=o.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=H.AssetUtil.getWalletImage(this.wallet)??H.AssetUtil.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=M.ConnectionController.state.wcUri,this.error=M.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(M.ConnectionController.subscribeKey("wcUri",a=>{this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),M.ConnectionController.subscribeKey("wcError",a=>this.error=a)),(f.CoreHelperUtil.isTelegram()||f.CoreHelperUtil.isSafari())&&f.CoreHelperUtil.isIos()&&M.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),M.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let a=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,b=`Continue in ${this.name}`;return this.error&&(b="Connection declined"),c.html`
      <wui-flex
        data-error=${(0,l.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,l.ifDefined)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${b}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${a}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c.html`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?c.html`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let a=this.shadowRoot?.querySelector("wui-button");a?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){M.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let a=aA.ThemeController.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return c.html`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(f.CoreHelperUtil.copyToClopboard(this.uri),ar.SnackController.showSuccess("Link copied"))}catch{ar.SnackController.showError("Failed to copy")}}}a3.styles=a1,a2([(0,d.state)()],a3.prototype,"isRetrying",void 0),a2([(0,d.state)()],a3.prototype,"uri",void 0),a2([(0,d.state)()],a3.prototype,"error",void 0),a2([(0,d.state)()],a3.prototype,"ready",void 0),a2([(0,d.state)()],a3.prototype,"showRetry",void 0),a2([(0,d.state)()],a3.prototype,"secondaryBtnLabel",void 0),a2([(0,d.state)()],a3.prototype,"secondaryLabel",void 0),a2([(0,d.state)()],a3.prototype,"isLoading",void 0),a2([(0,k.property)({type:Boolean})],a3.prototype,"isMobile",void 0),a2([(0,k.property)()],a3.prototype,"onRetry",void 0);let a4=class extends a3{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:a}=m.ConnectorController.state,b=a.find(a=>"ANNOUNCED"===a.type&&a.info?.rdns===this.wallet?.rdns||"INJECTED"===a.type||a.name===this.wallet?.name);if(b)await M.ConnectionController.connectExternal(b,b.chain);else throw Error("w3m-connecting-wc-browser: No connector found");aq.ModalController.close(),n.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(a){n.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:a?.message??"Unknown"}}),this.error=!0}}};a4=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-browser")],a4);let a5=class extends a3{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:a,name:b}=this.wallet,{redirect:c,href:d}=f.CoreHelperUtil.formatNativeUrl(a,this.uri);M.ConnectionController.setWcLinking({name:b,href:d}),M.ConnectionController.setRecentWallet(this.wallet),f.CoreHelperUtil.openHref(c,"_blank")}catch{this.error=!0}}};a5=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-desktop")],a5);var a6=a.i(653972),a7=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a8=class extends a3{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=g.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:a,link_mode:b,name:c}=this.wallet,{redirect:d,redirectUniversalLink:e,href:g}=f.CoreHelperUtil.formatNativeUrl(a,this.uri,b);this.redirectDeeplink=d,this.redirectUniversalLink=e,this.target=f.CoreHelperUtil.isIframe()?"_top":"_self",M.ConnectionController.setWcLinking({name:c,href:g}),M.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?f.CoreHelperUtil.openHref(this.redirectUniversalLink,this.target):f.CoreHelperUtil.openHref(this.redirectDeeplink,this.target)}catch(a){n.EventsController.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:a instanceof Error?a.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=a6.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(M.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){M.ConnectionController.setWcError(!1),this.onConnect?.()}};a7([(0,d.state)()],a8.prototype,"redirectDeeplink",void 0),a7([(0,d.state)()],a8.prototype,"redirectUniversalLink",void 0),a7([(0,d.state)()],a8.prototype,"target",void 0),a7([(0,d.state)()],a8.prototype,"preferUniversalLinks",void 0),a7([(0,d.state)()],a8.prototype,"isLoading",void 0),a8=a7([(0,i.customElement)("w3m-connecting-wc-mobile")],a8);var a9=b,ba=a.i(794954);function bb(a,b,c){return a!==b&&(a-b<0?b-a:a-b)<=c+.1}let bc={generate({uri:a,size:b,logoSize:d,dotColor:e="#141414"}){let f,g,h=[],i=(g=Math.sqrt((f=Array.prototype.slice.call(ba.default.create(a,{errorCorrectionLevel:"Q"}).modules.data,0)).length),f.reduce((a,b,c)=>(c%g==0?a.push([b]):a[a.length-1].push(b))&&a,[])),j=b/i.length,k=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];k.forEach(({x:a,y:b})=>{let d=(i.length-7)*j*a,f=(i.length-7)*j*b;for(let a=0;a<k.length;a+=1){let b=j*(7-2*a);h.push(c.svg`
            <rect
              fill=${2===a?e:"transparent"}
              width=${0===a?b-5:b}
              rx= ${0===a?(b-5)*.45:.45*b}
              ry= ${0===a?(b-5)*.45:.45*b}
              stroke=${e}
              stroke-width=${5*(0===a)}
              height=${0===a?b-5:b}
              x= ${0===a?f+j*a+2.5:f+j*a}
              y= ${0===a?d+j*a+2.5:d+j*a}
            />
          `)}});let l=Math.floor((d+25)/j),m=i.length/2-l/2,n=i.length/2+l/2-1,o=[];i.forEach((a,b)=>{a.forEach((a,c)=>{!i[b][c]||b<7&&c<7||b>i.length-8&&c<7||b<7&&c>i.length-8||b>m&&b<n&&c>m&&c<n||o.push([b*j+j/2,c*j+j/2])})});let p={};return o.forEach(([a,b])=>{p[a]?p[a]?.push(b):p[a]=[b]}),Object.entries(p).map(([a,b])=>{let c=b.filter(a=>b.every(b=>!bb(a,b,j)));return[Number(a),c]}).forEach(([a,b])=>{b.forEach(b=>{h.push(c.svg`<circle cx=${a} cy=${b} fill=${e} r=${j/2.5} />`)})}),Object.entries(p).filter(([a,b])=>b.length>1).map(([a,b])=>{let c=b.filter(a=>b.some(b=>bb(a,b,j)));return[Number(a),c]}).map(([a,b])=>{b.sort((a,b)=>a<b?-1:1);let c=[];for(let a of b){let b=c.find(b=>b.some(b=>bb(a,b,j)));b?b.push(a):c.push([a])}return[a,c.map(a=>[a[0],a[a.length-1]])]}).forEach(([a,b])=>{b.forEach(([b,d])=>{h.push(c.svg`
              <line
                x1=${a}
                x2=${a}
                y1=${b}
                y2=${d}
                stroke=${e}
                stroke-width=${j/1.25}
                stroke-linecap="round"
              />
            `)})}),h}},bd=t.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var be=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bf=class extends a9.LitElement{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,c.html`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let a="light"===this.theme?this.size:this.size-32;return c.svg`
      <svg height=${a} width=${a}>
        ${bc.generate({uri:this.uri,size:a,logoSize:this.arenaClear?0:a/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};bf.styles=[q.resetStyles,bd],be([(0,k.property)()],bf.prototype,"uri",void 0),be([(0,k.property)({type:Number})],bf.prototype,"size",void 0),be([(0,k.property)()],bf.prototype,"theme",void 0),be([(0,k.property)()],bf.prototype,"imageSrc",void 0),be([(0,k.property)()],bf.prototype,"alt",void 0),be([(0,k.property)()],bf.prototype,"color",void 0),be([(0,k.property)({type:Boolean})],bf.prototype,"arenaClear",void 0),be([(0,k.property)({type:Boolean})],bf.prototype,"farcaster",void 0),bf=be([(0,i.customElement)("wui-qr-code")],bf);var bg=b;let bh=t.css`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var bi=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bj=class extends bg.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,c.html`<slot></slot>`}};bj.styles=[bh],bi([(0,k.property)()],bj.prototype,"width",void 0),bi([(0,k.property)()],bj.prototype,"height",void 0),bi([(0,k.property)()],bj.prototype,"borderRadius",void 0),bi([(0,k.property)()],bj.prototype,"variant",void 0),bj=bi([(0,i.customElement)("wui-shimmer")],bj);var bk=b;let bl=t.css`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`,bm=class extends bk.LitElement{render(){return c.html`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};bm.styles=[q.resetStyles,q.elementStyles,bl],bm=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("wui-ux-by-reown")],bm);let bn=t.css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,bo=class extends a3{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(a=>a()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let a=this.getBoundingClientRect().width-40,b=this.wallet?this.wallet.name:void 0;return M.ConnectionController.setWcLinking(void 0),M.ConnectionController.setRecentWallet(this.wallet),c.html` <wui-qr-code
      size=${a}
      theme=${aA.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,l.ifDefined)(H.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,l.ifDefined)(aA.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,l.ifDefined)(b)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let a=!this.uri||!this.ready;return c.html`<wui-link
      .disabled=${a}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};bo.styles=bn,bo=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-qrcode")],bo);var bp=b;let bq=class extends bp.LitElement{constructor(){if(super(),this.wallet=o.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return c.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,l.ifDefined)(H.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};bq=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-unsupported")],bq);var br=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bs=class extends a3{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=a6.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(M.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),n.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:a,name:b}=this.wallet,{redirect:c,href:d}=f.CoreHelperUtil.formatUniversalUrl(a,this.uri);M.ConnectionController.setWcLinking({name:b,href:d}),M.ConnectionController.setRecentWallet(this.wallet),f.CoreHelperUtil.openHref(c,"_blank")}catch{this.error=!0}}};br([(0,d.state)()],bs.prototype,"isLoading",void 0),bs=br([(0,i.customElement)("w3m-connecting-wc-web")],bs);var bt=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bu=class extends ap.LitElement{constructor(){super(),this.wallet=o.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!g.OptionsController.state.siwx,this.remoteFeatures=g.OptionsController.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(g.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?c.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(a=!1){if("browser"!==this.platform&&(!g.OptionsController.state.manualWCControl||a))try{let{wcPairingExpiry:b,status:c}=M.ConnectionController.state;(a||g.OptionsController.state.enableEmbedded||f.CoreHelperUtil.isPairingExpired(b)||"connecting"===c)&&(await M.ConnectionController.connectWalletConnect(),this.isSiwxEnabled||aq.ModalController.close())}catch(a){n.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:a?.message??"Unknown"}}),M.ConnectionController.setWcError(!0),ar.SnackController.showError(a.message??"Connection error"),M.ConnectionController.resetWcConnection(),o.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:a,desktop_link:b,webapp_link:c,injected:d,rdns:e}=this.wallet,h=d?.map(({injected_id:a})=>a).filter(Boolean),i=[...e?[e]:h??[]],j=!g.OptionsController.state.isUniversalProvider&&i.length,k=M.ConnectionController.checkInstalled(i),l=j&&k,m=b&&!f.CoreHelperUtil.isMobile();l&&!ab.ChainController.state.noAdapters&&this.platforms.push("browser"),a&&this.platforms.push(f.CoreHelperUtil.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),m&&this.platforms.push("desktop"),l||!j||ab.ChainController.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c.html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return c.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(a){let b=this.shadowRoot?.querySelector("div");b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=a,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};bt([(0,d.state)()],bu.prototype,"platform",void 0),bt([(0,d.state)()],bu.prototype,"platforms",void 0),bt([(0,d.state)()],bu.prototype,"isSiwxEnabled",void 0),bt([(0,d.state)()],bu.prototype,"remoteFeatures",void 0),bu=bt([(0,i.customElement)("w3m-connecting-wc-view")],bu);var bv=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bw=class extends b.LitElement{constructor(){super(...arguments),this.isMobile=f.CoreHelperUtil.isMobile()}render(){if(this.isMobile){let{featured:a,recommended:b}=e.ApiController.state,{customWallets:d}=g.OptionsController.state,f=h.StorageUtil.getRecentWallets(),i=a.length||b.length||d?.length||f.length;return c.html`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${i?c.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c.html`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};bv([(0,d.state)()],bw.prototype,"isMobile",void 0),bw=bv([(0,i.customElement)("w3m-connecting-wc-basic-view")],bw),a.s(["W3mConnectingWcBasicView",0,bw],678957);var bx=b,by=b,bz=b;a.i(225822);var bA=a.i(51208);let bB=t.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
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
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var bC=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bD=class extends bz.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,bA.createRef)(),this.checked=void 0}render(){return c.html`
      <label>
        <input
          ${(0,bA.ref)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,l.ifDefined)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};bD.styles=[q.resetStyles,q.elementStyles,q.colorStyles,bB],bC([(0,k.property)({type:Boolean})],bD.prototype,"checked",void 0),bD=bC([(0,i.customElement)("wui-switch")],bD);let bE=t.css`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var bF=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bG=class extends by.LitElement{constructor(){super(...arguments),this.checked=void 0}render(){return c.html`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,l.ifDefined)(this.checked)}></wui-switch>
      </button>
    `}};bG.styles=[q.resetStyles,q.elementStyles,bE],bF([(0,k.property)({type:Boolean})],bG.prototype,"checked",void 0),bG=bF([(0,i.customElement)("wui-certified-switch")],bG);var bH=b,bI=b;let bJ=t.css`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var bK=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bL=class extends bI.LitElement{constructor(){super(...arguments),this.icon="copy"}render(){return c.html`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};bL.styles=[q.resetStyles,q.elementStyles,bJ],bK([(0,k.property)()],bL.prototype,"icon",void 0),bL=bK([(0,i.customElement)("wui-input-element")],bL);var bM=b;a.i(831704);var bN=a.i(794510);let bO=t.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var bP=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bQ=class extends bM.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,bA.createRef)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let a=`wui-padding-right-${this.inputRightPadding}`,b={[`wui-size-${this.size}`]:!0,[a]:!!this.inputRightPadding};return c.html`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,bA.ref)(this.inputElementRef)}
        class=${(0,bN.classMap)(b)}
        type=${this.type}
        enterkeyhint=${(0,l.ifDefined)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,l.ifDefined)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?c.html`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};bQ.styles=[q.resetStyles,q.elementStyles,bO],bP([(0,k.property)()],bQ.prototype,"size",void 0),bP([(0,k.property)()],bQ.prototype,"icon",void 0),bP([(0,k.property)({type:Boolean})],bQ.prototype,"disabled",void 0),bP([(0,k.property)()],bQ.prototype,"placeholder",void 0),bP([(0,k.property)()],bQ.prototype,"type",void 0),bP([(0,k.property)()],bQ.prototype,"keyHint",void 0),bP([(0,k.property)()],bQ.prototype,"value",void 0),bP([(0,k.property)()],bQ.prototype,"inputRightPadding",void 0),bP([(0,k.property)()],bQ.prototype,"tabIdx",void 0),bQ=bP([(0,i.customElement)("wui-input-text")],bQ);let bR=t.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,bS=class extends bH.LitElement{constructor(){super(...arguments),this.inputComponentRef=(0,bA.createRef)()}render(){return c.html`
      <wui-input-text
        ${(0,bA.ref)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let a=this.inputComponentRef.value,b=a?.inputElementRef.value;b&&(b.value="",b.focus(),b.dispatchEvent(new Event("input")))}};bS.styles=[q.resetStyles,bR],bS=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("wui-search-bar")],bS);var bT=b,bU=b;let bV=c.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,bW=t.css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var bX=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bY=class extends bU.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return c.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?c.html` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${bV}`:c.html`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};bY.styles=[q.resetStyles,q.elementStyles,bW],bX([(0,k.property)()],bY.prototype,"type",void 0),bY=bX([(0,i.customElement)("wui-card-select-loader")],bY);var bZ=b;let b$=t.css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var b_=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let b0=class extends bZ.LitElement{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&aR.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&aR.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&aR.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&aR.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&aR.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&aR.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&aR.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&aR.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,c.html`<slot></slot>`}};b0.styles=[q.resetStyles,b$],b_([(0,k.property)()],b0.prototype,"gridTemplateRows",void 0),b_([(0,k.property)()],b0.prototype,"gridTemplateColumns",void 0),b_([(0,k.property)()],b0.prototype,"justifyItems",void 0),b_([(0,k.property)()],b0.prototype,"alignItems",void 0),b_([(0,k.property)()],b0.prototype,"justifyContent",void 0),b_([(0,k.property)()],b0.prototype,"alignContent",void 0),b_([(0,k.property)()],b0.prototype,"columnGap",void 0),b_([(0,k.property)()],b0.prototype,"rowGap",void 0),b_([(0,k.property)()],b0.prototype,"gap",void 0),b_([(0,k.property)()],b0.prototype,"padding",void 0),b_([(0,k.property)()],b0.prototype,"margin",void 0),b0=b_([(0,i.customElement)("wui-grid")],b0);var b1=b;let b2=t.css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var b3=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let b4=class extends b1.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let a=this.wallet?.badge_type==="certified";return c.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,l.ifDefined)(a?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${a?c.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?c.html`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,l.ifDefined)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return c.html`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=H.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await H.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};b4.styles=b2,b3([(0,d.state)()],b4.prototype,"visible",void 0),b3([(0,d.state)()],b4.prototype,"imageSrc",void 0),b3([(0,d.state)()],b4.prototype,"imageLoading",void 0),b3([(0,k.property)()],b4.prototype,"wallet",void 0),b4=b3([(0,i.customElement)("w3m-all-wallets-list-item")],b4);let b5=t.css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
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

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var b6=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let b7="local-paginator",b8=class extends bT.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!e.ApiController.state.wallets.length,this.wallets=e.ApiController.state.wallets,this.recommended=e.ApiController.state.recommended,this.featured=e.ApiController.state.featured,this.filteredWallets=e.ApiController.state.filteredWallets,this.unsubscribe.push(e.ApiController.subscribeKey("wallets",a=>this.wallets=a),e.ApiController.subscribeKey("recommended",a=>this.recommended=a),e.ApiController.subscribeKey("featured",a=>this.featured=a),e.ApiController.subscribeKey("filteredWallets",a=>this.filteredWallets=a))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.paginationObserver?.disconnect()}render(){return c.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let a=this.shadowRoot?.querySelector("wui-grid");a&&(await e.ApiController.fetchWalletsByPage({page:1}),await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(a,b){return[...Array(a)].map(()=>c.html`
        <wui-card-select-loader type="wallet" id=${(0,l.ifDefined)(b)}></wui-card-select-loader>
      `)}walletsTemplate(){let a=this.filteredWallets?.length>0?f.CoreHelperUtil.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):f.CoreHelperUtil.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return ac.WalletUtil.markWalletsAsInstalled(a).map(a=>c.html`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(a)}
          .wallet=${a}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:a,recommended:b,featured:c,count:d}=e.ApiController.state,f=window.innerWidth<352?3:4,g=a.length+b.length,h=Math.ceil(g/f)*f-g+f;return(h-=a.length?c.length%f:0,0===d&&c.length>0)?null:0===d||[...c,...a,...b].length<d?this.shimmerTemplate(h,b7):null}createPaginationObserver(){let a=this.shadowRoot?.querySelector(`#${b7}`);a&&(this.paginationObserver=new IntersectionObserver(([a])=>{if(a?.isIntersecting&&!this.loading){let{page:a,count:b,wallets:c}=e.ApiController.state;c.length<b&&e.ApiController.fetchWalletsByPage({page:a+1})}}),this.paginationObserver.observe(a))}onConnectWallet(a){m.ConnectorController.selectWalletConnector(a)}};b8.styles=b5,b6([(0,d.state)()],b8.prototype,"loading",void 0),b6([(0,d.state)()],b8.prototype,"wallets",void 0),b6([(0,d.state)()],b8.prototype,"recommended",void 0),b6([(0,d.state)()],b8.prototype,"featured",void 0),b6([(0,d.state)()],b8.prototype,"filteredWallets",void 0),b8=b6([(0,i.customElement)("w3m-all-wallets-list")],b8);var b9=b;let ca=t.css`
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
`;var cb=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let cc=class extends b9.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?c.html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await e.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:a}=e.ApiController.state,b=ac.WalletUtil.markWalletsAsInstalled(a);return a.length?c.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${b.map(a=>c.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(a)}
              .wallet=${a}
              data-testid="wallet-search-item-${a.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(a){m.ConnectorController.selectWalletConnector(a)}};cc.styles=ca,cb([(0,d.state)()],cc.prototype,"loading",void 0),cb([(0,k.property)()],cc.prototype,"query",void 0),cb([(0,k.property)()],cc.prototype,"badge",void 0),cc=cb([(0,i.customElement)("w3m-all-wallets-search")],cc);var cd=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ce=class extends bx.LitElement{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=f.CoreHelperUtil.debounce(a=>{this.search=a})}render(){let a=this.search.length>=2;return c.html`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${a||this.badge?c.html`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,l.ifDefined)(this.badge)}
          ></w3m-all-wallets-search>`:c.html`<w3m-all-wallets-list badge=${(0,l.ifDefined)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(a){this.onDebouncedSearch(a.detail)}onClick(){if("certified"===this.badge){this.badge=void 0;return}this.badge="certified",ar.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return f.CoreHelperUtil.isMobile()?c.html`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){o.RouterController.push("ConnectingWalletConnect")}};cd([(0,d.state)()],ce.prototype,"search",void 0),cd([(0,d.state)()],ce.prototype,"badge",void 0),ce=cd([(0,i.customElement)("w3m-all-wallets-view")],ce),a.s(["W3mAllWalletsView",0,ce],766037);var cf=b,cg=b;let ch=t.css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ci=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let cj=class extends cg.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return c.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,l.ifDefined)(this.iconVariant)}
        tabindex=${(0,l.ifDefined)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return c.html`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return c.html`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let a=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",b="square-blue"===this.iconVariant?"mdl":"md",d=this.iconSize?this.iconSize:b;return c.html`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${d}
          background="transparent"
          iconColor=${a}
          backgroundColor=${a}
          size=${b}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?c.html`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:c.html``}chevronTemplate(){return this.chevron?c.html`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};cj.styles=[q.resetStyles,q.elementStyles,ch],ci([(0,k.property)()],cj.prototype,"icon",void 0),ci([(0,k.property)()],cj.prototype,"iconSize",void 0),ci([(0,k.property)()],cj.prototype,"tabIdx",void 0),ci([(0,k.property)()],cj.prototype,"variant",void 0),ci([(0,k.property)()],cj.prototype,"iconVariant",void 0),ci([(0,k.property)({type:Boolean})],cj.prototype,"disabled",void 0),ci([(0,k.property)()],cj.prototype,"imageSrc",void 0),ci([(0,k.property)()],cj.prototype,"alt",void 0),ci([(0,k.property)({type:Boolean})],cj.prototype,"chevron",void 0),ci([(0,k.property)({type:Boolean})],cj.prototype,"loading",void 0),cj=ci([(0,i.customElement)("wui-list-item")],cj);let ck=class extends cf.LitElement{constructor(){super(...arguments),this.wallet=o.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return c.html`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?c.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?c.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?c.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?c.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&f.CoreHelperUtil.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&f.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&f.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&f.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};ck=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-downloads-view")],ck),a.s(["W3mDownloadsView",0,ck],894267),a.s([],582188),a.i(582188),a.i(678957),a.i(766037),a.i(894267),a.s(["W3mAllWalletsView",0,ce,"W3mConnectingWcBasicView",0,bw,"W3mDownloadsView",0,ck],235852)}];

//# sourceMappingURL=0tsp_%40reown_appkit-scaffold-ui_dist_esm_exports_basic_0.7744r.js.map
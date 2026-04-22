module.exports=[884947,a=>{"use strict";a.i(489442);var b=a.i(37910),c=a.i(802705);a.i(410935);var d=a.i(811016),e=a.i(638183),f=a.i(977464),g=a.i(956646);let h=g.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${a=>a.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return c.html`
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
    `}};j.styles=[e.resetStyles,h],i([(0,d.property)({type:Number})],j.prototype,"radius",void 0),j=i([(0,f.customElement)("wui-loading-thumbnail")],j),a.s([],884947)},115676,540849,a=>{"use strict";var b=a.i(252271),c=a.i(129286);let d=(0,b.proxy)({isLegalCheckboxChecked:!1}),e={state:d,subscribe:a=>(0,b.subscribe)(d,()=>a(d)),subscribeKey:(a,b)=>(0,c.subscribeKey)(d,a,b),setIsLegalCheckboxChecked(a){d.isLegalCheckboxChecked=a}};a.s(["OptionsStateController",0,e],115676),a.i(489442);var f=a.i(37910),g=a.i(802705);a.i(410935);var h=a.i(954055),i=a.i(94702);a.i(639170);var j=a.i(977464),k=f,l=a.i(811016);a.i(623301);var m=a.i(905406);a.i(225822);var n=a.i(51208);a.i(468305),a.i(804882);var o=a.i(638183),p=a.i(956646);let q=p.css`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:a})=>a[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:a})=>a.neutrals400};
    color: ${({colors:a})=>a.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:a})=>a.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:a})=>a.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:a})=>a[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:a})=>a.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:a})=>a.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:a})=>a.neutrals700};
    background-color: ${({colors:a})=>a.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:a})=>a.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:a})=>a.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s={lg:"md",md:"sm",sm:"sm"},t=class extends k.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,n.createRef)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){let a=s[this.size];return g.html`
      <label data-size=${this.size}>
        <input
          ${(0,n.ref)(this.inputElementRef)}
          ?checked=${(0,m.ifDefined)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${a}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};t.styles=[o.resetStyles,q],r([(0,l.property)({type:Boolean})],t.prototype,"checked",void 0),r([(0,l.property)({type:Boolean})],t.prototype,"disabled",void 0),r([(0,l.property)()],t.prototype,"size",void 0),t=r([(0,j.customElement)("wui-checkbox")],t),a.i(145357);let u=p.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:a})=>a["3"]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.theme.textSecondary};
    font-weight: 500;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends f.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=e.state.isLegalCheckboxChecked,this.unsubscribe.push(e.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state,c=i.OptionsController.state.features?.legalCheckbox;return(a||b)&&c?g.html`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>privacy policy</a>`:null}onCheckboxChange(){e.setIsLegalCheckboxChecked(!this.checked)}};w.styles=[u],v([(0,h.state)()],w.prototype,"checked",void 0),w=v([(0,j.customElement)("w3m-legal-checkbox")],w),a.s([],540849)},130146,(a,b,c)=>{b.exports=a.x("pino-28069d5257187539",()=>require("pino-28069d5257187539"))},31620,a=>{"use strict";var b=a.i(130146),c=a.i(920275);let d="custom_context";var e=Object.defineProperty,f=(a,b,c)=>{let d;return(d="symbol"!=typeof b?b+"":b)in a?e(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c};class g{constructor(a){f(this,"nodeValue"),f(this,"sizeInBytes"),f(this,"next"),this.nodeValue=a,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class h{constructor(a){f(this,"lengthInNodes"),f(this,"sizeInBytes"),f(this,"head"),f(this,"tail"),f(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=a,this.sizeInBytes=0}append(a){let b=new g(a);if(b.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${a} with size ${b.size}`);for(;this.size+b.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=b):this.head=b,this.tail=b,this.lengthInNodes++,this.sizeInBytes+=b.size}shift(){if(!this.head)return;let a=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=a.size}toArray(){let a=[],b=this.head;for(;null!==b;)a.push(b.value),b=b.next;return a}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let a=this.head;return{next:()=>{if(!a)return{done:!0,value:null};let b=a.value;return a=a.next,{done:!1,value:b}}}}}var i=Object.defineProperty,j=(a,b,c)=>{let d;return(d="symbol"!=typeof b?b+"":b)in a?i(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c};class k{constructor(a,c=1024e3){j(this,"logs"),j(this,"level"),j(this,"levelValue"),j(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=a??"error",this.levelValue=b.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=c,this.logs=new h(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(a,c){c===b.levels.values.error?console.error(a):c===b.levels.values.warn?console.warn(a):c===b.levels.values.debug?console.debug(a):c===b.levels.values.trace?console.trace(a):console.log(a)}appendToLogs(a){this.logs.append((0,c.safeJsonStringify)({timestamp:new Date().toISOString(),log:a}));let b="string"==typeof a?JSON.parse(a).level:a.level;b>=this.levelValue&&this.forwardToConsole(a,b)}getLogs(){return this.logs}clearLogs(){this.logs=new h(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(a){let b=this.getLogArray();return b.push((0,c.safeJsonStringify)({extraMetadata:a})),new Blob(b,{type:"application/json"})}}var l=Object.defineProperty;class m{constructor(a,b=1024e3){((a,b,c)=>{let d;return(d="symbol"!=typeof b?b+"":b)in a?l(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c})(this,"baseChunkLogger"),this.baseChunkLogger=new k(a,b)}write(a){this.baseChunkLogger.appendToLogs(a)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(a){return this.baseChunkLogger.logsToBlob(a)}}var n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,b,c)=>b in a?n(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,u=(a,b)=>{for(var c in b||(b={}))r.call(b,c)&&t(a,c,b[c]);if(q)for(var c of q(b))s.call(b,c)&&t(a,c,b[c]);return a};function v(a,b=d){return a[b]||""}a.s(["generateChildLogger",0,function(a,b,c=d){let e=function(a,b,c=d){let e=v(a,c);return e.trim()?`${e}/${b}`:b}(a,b,c);return function(a,b,c=d){return a[c]=b,a}(a.child({context:e}),e,c)},"generatePlatformLogger",0,function(a){var c;let d;return"u">typeof a.loggerOverride&&"string"!=typeof a.loggerOverride?{logger:a.loggerOverride,chunkLoggerController:null}:(d=new m(null==(c=a.opts)?void 0:c.level,a.maxSizeInBytes),{logger:(0,b.default)(o(u({},a.opts),p({level:"trace"})),d),chunkLoggerController:d})},"getDefaultLoggerOptions",0,function(a){return o(u({},a),p({level:a?.level||"info"}))},"getLoggerContext",0,v])},224361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},500874,(a,b,c)=>{b.exports=a.x("buffer",()=>require("buffer"))},449719,(a,b,c)=>{b.exports=a.x("assert",()=>require("assert"))},423682,a=>{"use strict";a.i(489442);var b=a.i(37910),c=a.i(802705);a.i(410935);var d=a.i(811016);a.i(468305),a.i(451707),a.i(80336);var e=a.i(794954);function f(a,b,c){return a!==b&&(a-b<0?b-a:a-b)<=c+.1}let g={generate({uri:a,size:b,logoSize:d,padding:g=8,dotColor:h="var(--apkt-colors-black)"}){let i,j,k=[],l=(j=Math.sqrt((i=Array.prototype.slice.call(e.default.create(a,{errorCorrectionLevel:"Q"}).modules.data,0)).length),i.reduce((a,b,c)=>(c%j==0?a.push([b]):a[a.length-1].push(b))&&a,[])),m=(b-2*g)/l.length,n=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];n.forEach(({x:a,y:b})=>{let d=(l.length-7)*m*a+g,e=(l.length-7)*m*b+g;for(let a=0;a<n.length;a+=1){let b=m*(7-2*a);k.push(c.svg`
            <rect
              fill=${2===a?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===a?b-10:b}
              rx= ${0===a?(b-10)*.45:.45*b}
              ry= ${0===a?(b-10)*.45:.45*b}
              stroke=${h}
              stroke-width=${10*(0===a)}
              height=${0===a?b-10:b}
              x= ${0===a?e+m*a+5:e+m*a}
              y= ${0===a?d+m*a+5:d+m*a}
            />
          `)}});let o=Math.floor((d+25)/m),p=l.length/2-o/2,q=l.length/2+o/2-1,r=[];l.forEach((a,b)=>{a.forEach((a,c)=>{!l[b][c]||b<7&&c<7||b>l.length-8&&c<7||b<7&&c>l.length-8||b>p&&b<q&&c>p&&c<q||r.push([b*m+m/2+g,c*m+m/2+g])})});let s={};return r.forEach(([a,b])=>{s[a]?s[a]?.push(b):s[a]=[b]}),Object.entries(s).map(([a,b])=>{let c=b.filter(a=>b.every(b=>!f(a,b,m)));return[Number(a),c]}).forEach(([a,b])=>{b.forEach(b=>{k.push(c.svg`<circle cx=${a} cy=${b} fill=${h} r=${m/2.5} />`)})}),Object.entries(s).filter(([a,b])=>b.length>1).map(([a,b])=>{let c=b.filter(a=>b.some(b=>f(a,b,m)));return[Number(a),c]}).map(([a,b])=>{b.sort((a,b)=>a<b?-1:1);let c=[];for(let a of b){let b=c.find(b=>b.some(b=>f(a,b,m)));b?b.push(a):c.push([a])}return[a,c.map(a=>[a[0],a[a.length-1]])]}).forEach(([a,b])=>{b.forEach(([b,d])=>{k.push(c.svg`
              <line
                x1=${a}
                x2=${a}
                y1=${b}
                y2=${d}
                stroke=${h}
                stroke-width=${m/1.25}
                stroke-linecap="round"
              />
            `)})}),k}};var h=a.i(638183),i=a.i(977464),j=a.i(956646);let k=j.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:a})=>a.white};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:a})=>a[4]};
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:a})=>a.theme.backgroundPrimary};
    border-radius: ${({borderRadius:a})=>a[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=class extends b.LitElement{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),c.html`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return c.svg`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${g.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};m.styles=[h.resetStyles,k],l([(0,d.property)()],m.prototype,"uri",void 0),l([(0,d.property)({type:Number})],m.prototype,"size",void 0),l([(0,d.property)()],m.prototype,"theme",void 0),l([(0,d.property)()],m.prototype,"imageSrc",void 0),l([(0,d.property)()],m.prototype,"alt",void 0),l([(0,d.property)({type:Boolean})],m.prototype,"arenaClear",void 0),l([(0,d.property)({type:Boolean})],m.prototype,"farcaster",void 0),m=l([(0,i.customElement)("wui-qr-code")],m),a.s([],423682)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qfws1y._.js.map
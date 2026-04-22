module.exports=[688947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},406461,(a,b,c)=>{b.exports=a.x("zlib",()=>require("zlib"))},522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},814747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},427699,(a,b,c)=>{b.exports=a.x("events",()=>require("events"))},254799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},524836,(a,b,c)=>{b.exports=a.x("https",()=>require("https"))},921517,(a,b,c)=>{b.exports=a.x("http",()=>require("http"))},792509,(a,b,c)=>{b.exports=a.x("url",()=>require("url"))},504446,(a,b,c)=>{b.exports=a.x("net",()=>require("net"))},755004,(a,b,c)=>{b.exports=a.x("tls",()=>require("tls"))},446786,(a,b,c)=>{b.exports=a.x("os",()=>require("os"))},796979,(a,b,c)=>{var d=a.r(522734),e=a.r(814747),f=a.r(446786),g="function"==typeof __webpack_require__?__non_webpack_require__:a.t,h=process.config&&process.config.variables||{},i=!!process.env.PREBUILDS_ONLY,j=process.versions.modules,k=process.versions&&process.versions.electron||process.env.ELECTRON_RUN_AS_NODE?"electron":process.versions&&process.versions.nw?"node-webkit":"node",l=process.env.npm_config_arch||f.arch(),m=process.env.npm_config_platform||f.platform(),n=process.env.LIBC||("linux"===m&&d.existsSync("/etc/alpine-release")?"musl":"glibc"),o=process.env.ARM_VERSION||("arm64"===l?"8":h.arm_version)||"",p=(process.versions.uv||"").split(".")[0];function q(a){return g(q.resolve(a))}function r(a){try{return d.readdirSync(a)}catch(a){return[]}}function s(a,b){var c=r(a).filter(b);return c[0]&&e.join(a,c[0])}function t(a){return/\.node$/.test(a)}function u(a){var b=a.split("-");if(2===b.length){var c=b[0],d=b[1].split("+");if(c&&d.length&&d.every(Boolean))return{name:a,platform:c,architectures:d}}}function v(a,b){return function(c){return null!=c&&c.platform===a&&c.architectures.includes(b)}}function w(a,b){return a.architectures.length-b.architectures.length}function x(a){var b=a.split("."),c=b.pop(),d={file:a,specificity:0};if("node"===c){for(var e=0;e<b.length;e++){var f=b[e];if("node"===f||"electron"===f||"node-webkit"===f)d.runtime=f;else if("napi"===f)d.napi=!0;else if("abi"===f.slice(0,3))d.abi=f.slice(3);else if("uv"===f.slice(0,2))d.uv=f.slice(2);else if("armv"===f.slice(0,4))d.armv=f.slice(4);else{if("glibc"!==f&&"musl"!==f)continue;d.libc=f}d.specificity++}return d}}function y(a,b){return function(c){var d;return null!=c&&(!c.runtime||c.runtime===a||!!("node"===(d=c).runtime&&d.napi))&&(!c.abi||c.abi===b||!!c.napi)&&(!c.uv||c.uv===p)&&(!c.armv||c.armv===o)&&(!c.libc||c.libc===n)&&!0}}function z(a){return function(b,c){return b.runtime!==c.runtime?b.runtime===a?-1:1:b.abi!==c.abi?b.abi?-1:1:b.specificity!==c.specificity?b.specificity>c.specificity?-1:1:0}}b.exports=q,q.resolve=q.path=function(a){a=e.resolve(a||".");try{var b=g(e.join(a,"package.json")).name.toUpperCase().replace(/-/g,"_");process.env[b+"_PREBUILD"]&&(a=process.env[b+"_PREBUILD"])}catch(a){}if(!i){var c=s(e.join(a,"build/Release"),t);if(c)return c;var d=s(e.join(a,"build/Debug"),t);if(d)return d}var f=q(a);if(f)return f;var h=q(e.dirname(process.execPath));if(h)return h;throw Error("No native build was found for "+["platform="+m,"arch="+l,"runtime="+k,"abi="+j,"uv="+p,o?"armv="+o:"","libc="+n,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","function"==typeof __webpack_require__?"webpack=true":""].filter(Boolean).join(" ")+"\n    loaded from: "+a+"\n");function q(a){var b=r(e.join(a,"prebuilds")).map(u).filter(v(m,l)).sort(w)[0];if(b){var c=e.join(a,"prebuilds",b.name),d=r(c).map(x).filter(y(k,j)).sort(z(k))[0];if(d)return e.join(c,d.file)}}},q.parseTags=x,q.matchTags=y,q.compareTags=z,q.parseTuple=u,q.matchTuple=v,q.compareTuples=w},432724,(a,b,c)=>{let d="function"==typeof __webpack_require__?__non_webpack_require__:a.t;"function"==typeof d.addon?b.exports=d.addon.bind(d):b.exports=a.r(796979)},996571,(a,b,c)=>{"use strict";b.exports={mask:(a,b,c,d,e)=>{for(var f=0;f<e;f++)c[d+f]=a[f]^b[3&f]},unmask:(a,b)=>{let c=a.length;for(var d=0;d<c;d++)a[d]^=b[3&d]}}},202625,(a,b,c)=>{"use strict";try{b.exports=a.r(432724)("/ROOT/node_modules/bufferutil")}catch(c){b.exports=a.r(996571)}},466729,(a,b,c)=>{"use strict";b.exports=function(a){let b=a.length,c=0;for(;c<b;)if((128&a[c])==0)c++;else if((224&a[c])==192){if(c+1===b||(192&a[c+1])!=128||(254&a[c])==192)return!1;c+=2}else if((240&a[c])==224){if(c+2>=b||(192&a[c+1])!=128||(192&a[c+2])!=128||224===a[c]&&(224&a[c+1])==128||237===a[c]&&(224&a[c+1])==160)return!1;c+=3}else{if((248&a[c])!=240||c+3>=b||(192&a[c+1])!=128||(192&a[c+2])!=128||(192&a[c+3])!=128||240===a[c]&&(240&a[c+1])==128||244===a[c]&&a[c+1]>143||a[c]>244)return!1;c+=4}return!0}},399873,(a,b,c)=>{"use strict";try{b.exports=a.r(432724)("/ROOT/node_modules/utf-8-validate")}catch(c){b.exports=a.r(466729)}},920275,a=>{"use strict";a.s(["safeJsonParse",0,function(a){if("string"!=typeof a)throw Error(`Cannot safe json parse value of type ${typeof a}`);try{return JSON.parse(a.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,'$1"$2n"$3'),(a,b)=>"string"==typeof b&&b.match(/^\d+n$/)?BigInt(b.substring(0,b.length-1)):b)}catch(b){return a}},"safeJsonStringify",0,function(a){return"string"==typeof a?a:JSON.stringify(a,(a,b)=>"bigint"==typeof b?b.toString()+"n":b)||""}])},666680,(a,b,c)=>{b.exports=a.x("node:crypto",()=>require("node:crypto"))},404703,a=>{"use strict";let b;function c(a){return new Promise((b,c)=>{a.oncomplete=a.onsuccess=()=>b(a.result),a.onabort=a.onerror=()=>c(a.error)})}function d(a,b){let d=indexedDB.open(a);d.onupgradeneeded=()=>d.result.createObjectStore(b);let e=c(d);return(a,c)=>e.then(d=>c(d.transaction(b,a).objectStore(b)))}function e(){return b||(b=d("keyval-store","keyval")),b}a.s(["clear",0,function(a=e()){return a("readwrite",a=>(a.clear(),c(a.transaction)))},"createStore",0,d,"del",0,function(a,b=e()){return b("readwrite",b=>(b.delete(a),c(b.transaction)))},"get",0,function(a,b=e()){return b("readonly",b=>c(b.get(a)))},"keys",0,function(a=e()){return a("readonly",a=>{var b;if(a.getAllKeys)return c(a.getAllKeys());let d=[];return(b=a=>d.push(a.key),a.openCursor().onsuccess=function(){this.result&&(b(this.result),this.result.continue())},c(a.transaction)).then(()=>d)})},"set",0,function(a,b,d=e()){return d("readwrite",d=>(d.put(b,a),c(d.transaction)))}])},130934,a=>{"use strict";let b=function(a){if(a.length>=255)throw TypeError("Alphabet too long");let b=new Uint8Array(256);for(let a=0;a<b.length;a++)b[a]=255;for(let c=0;c<a.length;c++){let d=a.charAt(c),e=d.charCodeAt(0);if(255!==b[e])throw TypeError(d+" is ambiguous");b[e]=c}let c=a.length,d=a.charAt(0),e=Math.log(c)/Math.log(256),f=Math.log(256)/Math.log(c);function g(a){if("string"!=typeof a)throw TypeError("Expected String");if(0===a.length)return new Uint8Array;let f=0,g=0,h=0;for(;a[f]===d;)g++,f++;let i=(a.length-f)*e+1>>>0,j=new Uint8Array(i);for(;f<a.length;){let d=a.charCodeAt(f);if(d>255)return;let e=b[d];if(255===e)return;let g=0;for(let a=i-1;(0!==e||g<h)&&-1!==a;a--,g++)e+=c*j[a]>>>0,j[a]=e%256>>>0,e=e/256>>>0;if(0!==e)throw Error("Non-zero carry");h=g,f++}let k=i-h;for(;k!==i&&0===j[k];)k++;let l=new Uint8Array(g+(i-k)),m=g;for(;k!==i;)l[m++]=j[k++];return l}return{encode:function(b){if(b instanceof Uint8Array||(ArrayBuffer.isView(b)?b=new Uint8Array(b.buffer,b.byteOffset,b.byteLength):Array.isArray(b)&&(b=Uint8Array.from(b))),!(b instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===b.length)return"";let e=0,g=0,h=0,i=b.length;for(;h!==i&&0===b[h];)h++,e++;let j=(i-h)*f+1>>>0,k=new Uint8Array(j);for(;h!==i;){let a=b[h],d=0;for(let b=j-1;(0!==a||d<g)&&-1!==b;b--,d++)a+=256*k[b]>>>0,k[b]=a%c>>>0,a=a/c>>>0;if(0!==a)throw Error("Non-zero carry");g=d,h++}let l=j-g;for(;l!==j&&0===k[l];)l++;let m=d.repeat(e);for(;l<j;++l)m+=a.charAt(k[l]);return m},decodeUnsafe:g,decode:function(a){let b=g(a);if(b)return b;throw Error("Non-base"+c+" character")}}}("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");a.s(["default",0,b],130934)},120727,575402,a=>{"use strict";a.i(489442);var b=a.i(37910),c=a.i(802705);a.i(410935);var d=a.i(954055),e=a.i(94702);a.i(639170);var f=a.i(977464);a.i(61586),a.i(145357);var g=b;a.i(468305),a.i(804882),a.i(80336);var h=a.i(638183),i=a.i(956646);let j=i.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,k=class extends g.LitElement{render(){return c.html`
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
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};k.styles=[h.resetStyles,h.elementStyles,j],k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,f.customElement)("wui-ux-by-reown")],k),a.s([],575402);let l=i.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:a})=>a["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.core.textAccentPrimary};
    font-weight: 500;
  }
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=e.OptionsController.state.remoteFeatures,this.unsubscribe.push(e.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state,d=e.OptionsController.state.features?.legalCheckbox;return(a||b)&&!d?c.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:c.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(a=!1){return this.remoteFeatures?.reownBranding?a?c.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:c.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};n.styles=[l],m([(0,d.state)()],n.prototype,"remoteFeatures",void 0),n=m([(0,f.customElement)("w3m-legal-footer")],n),a.s([],120727)},119272,a=>{"use strict";a.i(489442);var b=a.i(37910),c=a.i(802705),d=a.i(602383),e=a.i(242528),f=a.i(94702),g=a.i(667625),h=a.i(435044);a.i(639170);var i=a.i(977464);a.i(61586),a.i(936303),a.i(302475),a.i(145357);var j=a.i(83965),k=a.i(372775);let l=k.css``,m=class extends b.LitElement{render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=f.OptionsController.state;return a||b?c.html`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return c.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){e.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,h.getPreferredAccountType)(d.ChainController.state.activeChain)===j.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.RouterController.push("WhatIsABuy")}};m.styles=[l],m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-onramp-providers-footer")],m),a.s([],119272)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__042.y0p._.js.map
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,822315,(e,t,r)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",o="week",a="month",n="quarter",s="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},p="en",m={};m[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}};var g="$isDayjsObject",f=function(e){return e instanceof w||!(!e||!e[g])},y=function e(t,r,i){var o;if(!t)return p;if("string"==typeof t){var a=t.toLowerCase();m[a]&&(o=a),r&&(m[a]=r,o=a);var n=t.split("-");if(!o&&n.length>1)return e(n[0])}else{var s=t.name;m[s]=t,o=s}return!i&&o&&(p=o),o||!i&&p},v=function(e,t){if(f(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},b={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(i,a),n=r-o<0,s=t.clone().add(i+(n?-1:1),a);return+(-(i+(r-o)/(n?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:a,y:s,w:o,d:"day",D:l,h:i,m:r,s:t,ms:e,Q:n})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=y,b.i=f,b.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function h(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var p=h.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var o=i[2]-1||0,a=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return this.$d.toString()!==c},p.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return v(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<v(e)},p.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,n){var c=this,u=!!b.u(n)||n,d=b.p(e),h=function(e,t){var r=b.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?r:r.endOf("day")},p=function(e,t){return b.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,g=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case s:return u?h(1,0):h(31,11);case a:return u?h(1,g):h(0,g+1);case o:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return h(u?f-w:f+(6-w),g);case"day":case l:return p(y+"Hours",0);case i:return p(y+"Minutes",1);case r:return p(y+"Seconds",2);case t:return p(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(o,n){var c,u=b.p(o),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[a]=d+"Month",c[s]=d+"FullYear",c[i]=d+"Hours",c[r]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],p="day"===u?this.$D+(n-this.$W):n;if(u===a||u===s){var m=this.clone().set(l,1);m.$d[h](p),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[b.p(e)]()},p.add=function(e,n){var l,c=this;e=Number(e);var u=b.p(n),d=function(t){var r=v(c);return b.w(r.date(r.date()+Math.round(t*e)),c)};if(u===a)return this.set(a,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===o)return d(7);var h=((l={})[r]=6e4,l[i]=36e5,l[t]=1e3,l)[u]||1,p=this.$d.getTime()+e*h;return b.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var i=e||"YYYY-MM-DDTHH:mm:ssZ",o=b.z(this),a=this.$H,n=this.$m,s=this.$M,l=r.weekdays,u=r.months,h=r.meridiem,p=function(e,r,o,a){return e&&(e[r]||e(t,i))||o[r].slice(0,a)},m=function(e){return b.s(a%12||12,e,"0")},g=h||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return p(r.monthsShort,s,u,3);case"MMMM":return p(u,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,l,2);case"ddd":return p(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return b.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return g(a,n,!0);case"A":return g(a,n,!1);case"m":return String(n);case"mm":return b.s(n,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,l,c){var u,d=this,h=b.p(l),p=v(e),m=(p.utcOffset()-this.utcOffset())*6e4,g=this-p,f=function(){return b.m(d,p)};switch(h){case s:u=f()/12;break;case a:u=f();break;case n:u=f()/3;break;case o:u=(g-m)/6048e5;break;case"day":u=(g-m)/864e5;break;case i:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:b.a(u)},p.daysInMonth=function(){return this.endOf(a).$D},p.$locale=function(){return m[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=y(e,t,!0);return i&&(r.$L=i),r},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),x=w.prototype;return v.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",s],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,w,v),e.$i=!0),v},v.locale=y,v.isDayjs=f,v.unix=function(e){return v(1e3*e)},v.en=m[p],v.Ls=m,v.p={},v}()},396931,(e,t,r)=>{e.e,t.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}}},472856,(e,t,r)=>{e.e,t.exports=function(e,t,r){e=e||{};var i=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,r,o){return i.fromToBase(e,t,r,o)}r.en.relativeTime=o,i.fromToBase=function(t,i,a,n,s){for(var l,c,u,d=a.$locale().relativeTime||o,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,m=0;m<p;m+=1){var g=h[m];g.d&&(l=n?r(t).diff(a,g.d,!0):a.diff(t,g.d,!0));var f=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,f<=g.r||!g.r){f<=1&&m>0&&(g=h[m-1]);var y=d[g.l];s&&(f=s(""+f)),c="string"==typeof y?y.replace("%d",f):y(f,i,g.l,u);break}}if(i)return c;var v=u?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},i.to=function(e,t){return a(e,t,this,!0)},i.from=function(e,t){return a(e,t,this)};var n=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(n(this),e)},i.fromNow=function(e){return this.from(n(this),e)}}},83840,(e,t,r)=>{e.e,t.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},389676,e=>{"use strict";e.i(812207);var t,r,i=e.i(108285),o=e.i(654479);e.i(374576);var a=e.i(120119),n=e.i(56350),s=e.i(822315),l=e.i(396931),c=e.i(472856),u=e.i(83840);s.default.extend(c.default),s.default.extend(u.default);let d={...l.default,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},h=["January","February","March","April","May","June","July","August","September","October","November","December"];s.default.locale("en-web3-modal",d);var p=e.i(960398),m=e.i(227302),g=e.i(653157),f=e.i(82283),y=e.i(221728),v=e.i(426618),b=e.i(564126);e.i(404041);var w=e.i(112699);let x=["receive","deposit","borrow","claim"],$=["withdraw","repay","burn"],C={getTransactionGroupTitle(e,t){let r=((e=new Date().toISOString())=>(0,s.default)(e).year())(),i=h[t];return e===r?i:`${i} ${e}`},getTransactionImages(e){let[t]=e;return e?.length>1?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:C.getTransactionTransferTokenType(e),url:C.getTransactionImageURL(e)}),getTransactionImageURL(e){let t,r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e,t){let r=e?.metadata?.operationType,i=t||e?.transfers,o=i?.length>0,a=i?.length>1,n=o&&i?.every(e=>!!e?.fungible_info),[s,l]=i,c=this.getTransferDescription(s),u=this.getTransferDescription(l);if(!o)return("send"===r||"receive"===r)&&n?[c=w.UiHelperUtil.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),w.UiHelperUtil.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(a)return i.map(e=>this.getTransferDescription(e));let d="";return x.includes(r)?d="+":$.includes(r)&&(d="-"),[c=d.concat(c)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},mergeTransfers(e){if(e?.length<=1)return e;let t=this.filterGasFeeTransfers(e).reduce((e,t)=>{let r=t?.fungible_info?.name,i=e.find(({fungible_info:e,direction:i})=>r&&r===e?.name&&i===t.direction);if(i){let e=Number(i.quantity.numeric)+Number(t.quantity.numeric);i.quantity.numeric=e.toString(),i.value=(i.value||0)+(t.value||0)}else e.push(t);return e},[]),r=t;return t.length>2&&(r=t.sort((e,t)=>(t.value||0)-(e.value||0)).slice(0,2)),r=r.sort((e,t)=>"out"===e.direction&&"in"===t.direction?-1:+("in"===e.direction&&"out"===t.direction))},filterGasFeeTransfers(e){let t=e.reduce((e,t)=>{let r=t?.fungible_info?.name;return r&&(e[r]||(e[r]=[]),e[r].push(t)),e},{}),r=[];return Object.values(t).forEach(e=>{if(1===e.length){let t=e[0];t&&r.push(t)}else{let t=e.filter(e=>"in"===e.direction),i=e.filter(e=>"out"===e.direction);if(1===t.length&&1===i.length){let o=t[0],a=i[0],n=!1;if(o&&a){let e=Number(o.quantity.numeric),t=Number(a.quantity.numeric);t<.1*e?(r.push(o),n=!0):e<.1*t&&(r.push(a),n=!0)}n||r.push(...e)}else{let t=this.filterGasFeesFromTokenGroup(e);r.push(...t)}}}),e.forEach(e=>{e?.fungible_info?.name||r.push(e)}),r},filterGasFeesFromTokenGroup(e){if(e.length<=1)return e;let t=e.map(e=>Number(e.quantity.numeric)),r=Math.max(...t);if(Math.min(...t)<.01*r)return e.filter(e=>Number(e.quantity.numeric)>=.01*r);let i=e.filter(e=>"in"===e.direction),o=e.filter(e=>"out"===e.direction);if(1===i.length&&1===o.length){let e=i[0],t=o[0];if(e&&t){let r=Number(e.quantity.numeric),i=Number(t.quantity.numeric);if(i<.1*r)return[e];if(r<.1*i)return[t]}}return e},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null};var k=e.i(645975);e.i(62238),e.i(746650),e.i(210380),e.i(249536);var E=i;e.i(234051);var T=e.i(829389);e.i(839009);var S=e.i(459088);(t=r||(r={})).approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn";var O=i;e.i(864380),e.i(912190);var z=e.i(162611);let A=z.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var _=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let P=class extends O.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images;this.images.length||(this.dataset.noImages="true");let r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,o.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?o.html`<div class="swap-images-container">
        ${e?.url?o.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?o.html`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?o.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?o.html`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:o.html`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-primary";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?o.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};P.styles=[A],_([(0,a.property)()],P.prototype,"type",void 0),_([(0,a.property)()],P.prototype,"status",void 0),_([(0,a.property)()],P.prototype,"direction",void 0),_([(0,a.property)({type:Boolean})],P.prototype,"onlyDirectionIcon",void 0),_([(0,a.property)({type:Array})],P.prototype,"images",void 0),_([(0,a.property)({type:Object})],P.prototype,"secondImage",void 0),P=_([(0,k.customElement)("wui-transaction-visual")],P);let D=z.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var N=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let I=class extends E.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return o.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,T.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?o.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?o.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};I.styles=[S.resetStyles,D],N([(0,a.property)()],I.prototype,"type",void 0),N([(0,a.property)({type:Array})],I.prototype,"descriptions",void 0),N([(0,a.property)()],I.prototype,"date",void 0),N([(0,a.property)({type:Boolean})],I.prototype,"onlyDirectionIcon",void 0),N([(0,a.property)()],I.prototype,"status",void 0),N([(0,a.property)()],I.prototype,"direction",void 0),N([(0,a.property)({type:Array})],I.prototype,"images",void 0),I=N([(0,k.customElement)("wui-transaction-list-item")],I);var L=i;e.i(864576),e.i(73944);var R=i;e.i(852634);let j=z.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var M=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let U={sm:"xxs",lg:"md"},B=class extends R.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return o.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[e,t]=this.images;return 2===this.images.length&&(e||t)?o.html`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?o.html`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return o.html`<wui-icon
      class="fallback-icon"
      size=${U[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return o.html`<wui-icon
      class="fallback-icon"
      size=${U[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[e]=this.images;return e?o.html`<wui-image src=${e} alt="Token image"></wui-image> `:o.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?o.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:o.html`<wui-icon
      class="direction-icon"
      size=${U[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};B.styles=[j],M([(0,a.property)()],B.prototype,"type",void 0),M([(0,a.property)()],B.prototype,"size",void 0),M([(0,a.property)()],B.prototype,"statusImageUrl",void 0),M([(0,a.property)({type:Array})],B.prototype,"images",void 0),B=M([(0,k.customElement)("wui-transaction-thumbnail")],B);let H=z.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,F=class extends L.LitElement{render(){return o.html`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};F.styles=[S.resetStyles,H],F=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n}([(0,k.customElement)("wui-transaction-list-item-loader")],F);var V=e.i(979484);let Y=z.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e["3"]};
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

  .emptyContainer {
    height: 100%;
  }
`;var W=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let K="last-transaction",G=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=p.ChainController.state.activeCaipAddress,this.transactionsByYear=v.TransactionsController.state.transactionsByYear,this.loading=v.TransactionsController.state.loading,this.empty=v.TransactionsController.state.empty,this.next=v.TransactionsController.state.next,v.TransactionsController.clearCursor(),this.unsubscribe.push(p.ChainController.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(v.TransactionsController.resetTransactions(),v.TransactionsController.fetchTransactions(e)),this.caipAddress=e}),p.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),v.TransactionsController.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){v.TransactionsController.resetTransactions(),this.caipAddress&&v.TransactionsController.fetchTransactions(m.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),r=Array(12).fill(null).map((e,r)=>({groupTitle:C.getTransactionGroupTitle(t,r),transactions:this.transactionsByYear[t]?.[r]})).filter(({transactions:e})=>e).reverse();return r.map(({groupTitle:e,transactions:t},i)=>{let a=i===r.length-1;return t?o.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,a)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:a,images:n,status:s,type:l,transfers:c,isAllNFT:u}=this.getTransactionListItemProps(e);return o.html`
      <wui-transaction-list-item
        date=${r}
        .direction=${a}
        id=${t&&this.next?K:""}
        status=${s}
        type=${l}
        .images=${n}
        .onlyDirectionIcon=${u||1===c.length}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,i)=>{let a=t&&i===e.length-1;return o.html`${this.templateRenderTransaction(r,a)}`})}emptyStateActivity(){return o.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.html`${this.emptyStateAccount()}`:o.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(o.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){y.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=f.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(v.TransactionsController.fetchTransactions(m.CoreHelperUtil.getPlainAddress(this.caipAddress)),g.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:m.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,b.getPreferredAccountType)(p.ChainController.state.activeChain)===V.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${K}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=((e,t="DD MMM")=>(0,s.default)(e).format(t))(e?.metadata?.minedAt),r=C.mergeTransfers(e?.transfers),i=C.getTransactionDescriptions(e,r),o=r?.[0],a=!!o&&r?.every(e=>!!e.nft_info),n=C.getTransactionImages(r);return{date:t,direction:o?.direction,descriptions:i,isAllNFT:a,images:n,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};G.styles=Y,W([(0,a.property)()],G.prototype,"page",void 0),W([(0,n.state)()],G.prototype,"caipAddress",void 0),W([(0,n.state)()],G.prototype,"transactionsByYear",void 0),W([(0,n.state)()],G.prototype,"loading",void 0),W([(0,n.state)()],G.prototype,"empty",void 0),W([(0,n.state)()],G.prototype,"next",void 0),G=W([(0,k.customElement)("w3m-activity-list")],G),e.s([],389676)},210380,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(852634),e.i(839009);var o=e.i(459088),a=e.i(645975),n=e.i(162611);let s=n.css`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let c={sm:"sm-medium",md:"md-medium"},u={accent:"accent-primary",secondary:"secondary"},d=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return r.html`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${u[this.variant]}
          variant=${c[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?r.html`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};d.styles=[o.resetStyles,o.elementStyles,s],l([(0,i.property)()],d.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,i.property)()],d.prototype,"variant",void 0),l([(0,i.property)()],d.prototype,"icon",void 0),d=l([(0,a.customElement)("wui-link")],d),e.s([],210380)},746650,e=>{"use strict";e.i(912190),e.s([])},215951,226499,e=>{"use strict";let{I:t}=e.i(654479)._$LH,r=e=>void 0===e.strings;e.s(["isPrimitive",0,e=>null===e||"object"!=typeof e&&"function"!=typeof e,"isSingleExpression",0,r],226499);var i=e.i(391909);let o=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),o(e,t);return!0},a=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},n=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),c(t)}};function s(e){void 0!==this._$AN?(a(this),this._$AM=e,n(this)):this._$AM=e}function l(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)o(i[e],!1),a(i[e]);else null!=i&&(o(i,!1),a(i));else o(this,e)}let c=e=>{e.type==i.PartType.CHILD&&(e._$AP??=l,e._$AQ??=s)};class u extends i.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),n(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(o(this,e),a(this))}setValue(e){if(r(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}e.s(["AsyncDirective",0,u],215951)},684326,765090,e=>{"use strict";var t=e.i(654479),r=e.i(215951),i=e.i(391909);class o{}let a=new WeakMap,n=(0,i.directive)(class extends r.AsyncDirective{render(e){return t.nothing}update(e,[r]){let i=r!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=r,this.ht=e.options?.host,this.rt(this.ct=e.element)),t.nothing}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=a.get(t);void 0===r&&(r=new WeakMap,a.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?a.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});e.s(["createRef",0,()=>new o,"ref",0,n],765090),e.s([],684326)},835902,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(234051);var o=e.i(829389);e.i(684326);var a=e.i(765090);e.i(852634),e.i(839009);var n=e.i(459088),s=e.i(645975),l=e.i(162611);let c=l.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var u=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let d=class extends t.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,a.createRef)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return r.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,a.ref)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,o.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?r.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?r.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?r.html`<wui-icon name="spinner" size="md"></wui-icon>`:r.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?r.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?r.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};d.styles=[n.resetStyles,n.elementStyles,c],u([(0,i.property)()],d.prototype,"icon",void 0),u([(0,i.property)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,i.property)({type:Boolean})],d.prototype,"loading",void 0),u([(0,i.property)()],d.prototype,"placeholder",void 0),u([(0,i.property)()],d.prototype,"type",void 0),u([(0,i.property)()],d.prototype,"value",void 0),u([(0,i.property)()],d.prototype,"errorText",void 0),u([(0,i.property)()],d.prototype,"warningText",void 0),u([(0,i.property)()],d.prototype,"onSubmit",void 0),u([(0,i.property)()],d.prototype,"size",void 0),u([(0,i.property)({attribute:!1})],d.prototype,"onKeyDown",void 0),d=u([(0,s.customElement)("wui-input-text")],d),e.s([],835902)},864380,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(234051);var o=e.i(829389),a=e.i(459088),n=e.i(645975),s=e.i(162611);let l=s.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){let e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return(this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon)?r.html`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?r.html`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:r.html`<img src=${(0,o.ifDefined)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};u.styles=[a.resetStyles,l],c([(0,i.property)()],u.prototype,"src",void 0),c([(0,i.property)()],u.prototype,"logo",void 0),c([(0,i.property)()],u.prototype,"icon",void 0),c([(0,i.property)()],u.prototype,"iconColor",void 0),c([(0,i.property)()],u.prototype,"alt",void 0),c([(0,i.property)()],u.prototype,"size",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"boxed",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"rounded",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"fullSize",void 0),u=c([(0,n.customElement)("wui-image")],u),e.s([],864380)},383227,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119),o=e.i(162611),a=e.i(459088),n=e.i(645975),s=e.i(315193);let l=s.css`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){let e={primary:o.vars.tokens.theme.textPrimary,secondary:o.vars.tokens.theme.textSecondary,tertiary:o.vars.tokens.theme.textTertiary,invert:o.vars.tokens.theme.textInvert,error:o.vars.tokens.core.textError,warning:o.vars.tokens.core.textWarning,"accent-primary":o.vars.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${"inherit"===this.color?"inherit":e[this.color]};
      `,this.dataset.size=this.size,r.html`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};u.styles=[a.resetStyles,l],c([(0,i.property)()],u.prototype,"color",void 0),c([(0,i.property)()],u.prototype,"size",void 0),u=c([(0,n.customElement)("wui-loading-spinner")],u),e.s([],383227)},534420,624947,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(852634),e.i(383227),e.i(839009);var o=e.i(459088),a=e.i(645975),n=e.i(162611);let s=n.css`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let c={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},u={lg:"md",md:"md",sm:"sm"},d=class extends t.LitElement{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let e=this.textVariant??c[this.size];return r.html`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let e=u[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return r.html`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};d.styles=[o.resetStyles,o.elementStyles,s],l([(0,i.property)()],d.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,i.property)({type:Boolean})],d.prototype,"fullWidth",void 0),l([(0,i.property)({type:Boolean})],d.prototype,"loading",void 0),l([(0,i.property)()],d.prototype,"variant",void 0),l([(0,i.property)()],d.prototype,"textVariant",void 0),d=l([(0,a.customElement)("wui-button")],d),e.s([],624947),e.s([],534420)},443452,e=>{"use strict";e.i(852634),e.s([])},6957,e=>{"use strict";e.i(835902),e.s([])},79929,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(839009);var o=e.i(459088),a=e.i(645975),n=e.i(162611);let s=n.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let c=class extends t.LitElement{constructor(){super(...arguments),this.text=""}render(){return r.html`${this.template()}`}template(){return this.text?r.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[o.resetStyles,s],l([(0,i.property)()],c.prototype,"text",void 0),c=l([(0,a.customElement)("wui-separator")],c),e.s([],79929)},923838,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119),o=e.i(675457);e.i(852634),e.i(864380),e.i(839009),e.i(73944);var a=e.i(459088),n=e.i(645975),s=e.i(162611);let l=s.css`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return r.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${o.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${o.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?r.html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:r.html`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,i.property)()],u.prototype,"tokenName",void 0),c([(0,i.property)()],u.prototype,"tokenImageUrl",void 0),c([(0,i.property)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,i.property)()],u.prototype,"tokenAmount",void 0),c([(0,i.property)()],u.prototype,"tokenCurrency",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,n.customElement)("wui-list-token")],u),e.s([],923838)},221803,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(864380);var o=e.i(459088),a=e.i(112699),n=e.i(645975),s=e.i(162611);let l=s.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});
    `,r.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=a.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};u.styles=[o.resetStyles,l],c([(0,i.property)()],u.prototype,"imageSrc",void 0),c([(0,i.property)()],u.prototype,"alt",void 0),c([(0,i.property)()],u.prototype,"address",void 0),c([(0,i.property)()],u.prototype,"size",void 0),u=c([(0,n.customElement)("wui-avatar")],u),e.s([],221803)},732965,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(852634),e.i(864380),e.i(73944);var o=e.i(973134);function a(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let n={generate({uri:e,size:t,logoSize:i,padding:n=8,dotColor:s="var(--apkt-colors-black)"}){let l,c,u=[],d=(c=Math.sqrt((l=Array.prototype.slice.call(o.default.create(e,{errorCorrectionLevel:"Q"}).modules.data,0)).length),l.reduce((e,t,r)=>(r%c==0?e.push([t]):e[e.length-1].push(t))&&e,[])),h=(t-2*n)/d.length,p=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];p.forEach(({x:e,y:t})=>{let i=(d.length-7)*h*e+n,o=(d.length-7)*h*t+n;for(let e=0;e<p.length;e+=1){let t=h*(7-2*e);u.push(r.svg`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*.45:.45*t}
              ry= ${0===e?(t-10)*.45:.45*t}
              stroke=${s}
              stroke-width=${10*(0===e)}
              height=${0===e?t-10:t}
              x= ${0===e?o+h*e+5:o+h*e}
              y= ${0===e?i+h*e+5:i+h*e}
            />
          `)}});let m=Math.floor((i+25)/h),g=d.length/2-m/2,f=d.length/2+m/2-1,y=[];d.forEach((e,t)=>{e.forEach((e,r)=>{!d[t][r]||t<7&&r<7||t>d.length-8&&r<7||t<7&&r>d.length-8||t>g&&t<f&&r>g&&r<f||y.push([t*h+h/2+n,r*h+h/2+n])})});let v={};return y.forEach(([e,t])=>{v[e]?v[e]?.push(t):v[e]=[t]}),Object.entries(v).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!a(e,t,h)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{u.push(r.svg`<circle cx=${e} cy=${t} fill=${s} r=${h/2.5} />`)})}),Object.entries(v).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>a(e,t,h)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>a(e,t,h)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{u.push(r.svg`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${s}
                stroke-width=${h/1.25}
                stroke-linecap="round"
              />
            `)})}),u}};var s=e.i(459088),l=e.i(645975),c=e.i(162611);let u=c.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
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
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
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
`;var d=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let h=class extends t.LitElement{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),r.html`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return r.svg`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${n.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[s.resetStyles,u],d([(0,i.property)()],h.prototype,"uri",void 0),d([(0,i.property)({type:Number})],h.prototype,"size",void 0),d([(0,i.property)()],h.prototype,"theme",void 0),d([(0,i.property)()],h.prototype,"imageSrc",void 0),d([(0,i.property)()],h.prototype,"alt",void 0),d([(0,i.property)({type:Boolean})],h.prototype,"arenaClear",void 0),d([(0,i.property)({type:Boolean})],h.prototype,"farcaster",void 0),h=d([(0,l.customElement)("wui-qr-code")],h),e.s([],732965)},102232,(e,t,r)=>{"use strict";let i=e.r(71187);t.exports=u;let o=function(){function e(e){return void 0!==e&&e}try{if("u">typeof globalThis)return globalThis;return Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{};function a(e,t){return"silent"===e?1/0:t.levels.values[e]}let n=Symbol("pino.logFuncs"),s=Symbol("pino.hierarchy"),l={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function c(e,t){let r={logger:t,parent:e[s]};t[s]=r}function u(e){var t,r,i;let s,m,g;(e=e||{}).browser=e.browser||{};let f=e.browser.transmit;if(f&&"function"!=typeof f.send)throw Error("pino: transmit option must have a send function");let w=e.browser.write||o;e.browser.write&&(e.browser.asObject=!0);let x=e.serializers||{},$=(t=e.browser.serialize,Array.isArray(t)?t.filter(function(e){return"!stdSerializers.err"!==e}):!0===t&&Object.keys(x)),C=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(C=!1);let k=Object.keys(e.customLevels||{}),E=["error","fatal","warn","info","debug","trace"].concat(k);"function"==typeof w&&E.forEach(function(e){w[e]=w}),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");let T=e.level||"info",S=Object.create(w);S.log||(S.log=y),s={},E.forEach(e=>{s[e]=w[e]?w[e]:o[e]||o[l[e]||"log"]||y}),S[n]=s,c({},S),Object.defineProperty(S,"levelVal",{get:function(){return a(this.level,this)}}),Object.defineProperty(S,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,d(this,O,S,"error"),d(this,O,S,"fatal"),d(this,O,S,"warn"),d(this,O,S,"info"),d(this,O,S,"debug"),d(this,O,S,"trace"),k.forEach(e=>{d(this,O,S,e)})}});let O={transmit:f,serialize:$,asObject:e.browser.asObject,asObjectBindingsOnly:e.browser.asObjectBindingsOnly,formatters:e.browser.formatters,levels:E,timestamp:"function"==typeof(r=e).timestamp?r.timestamp:!1===r.timestamp?v:b,messageKey:e.messageKey||"msg",onChild:e.onChild||y};function z(t,r,i){if(!r)throw Error("missing bindings for child Pino");i=i||{},$&&r.serializers&&(i.serializers=r.serializers);let o=i.serializers;if($&&o){var a=Object.assign({},x,o),n=!0===e.browser.serialize?Object.keys(a):$;delete r.serializers,h([r],n,a,this._stdErrSerialize)}function s(e){this._childLevel=(0|e._childLevel)+1,this.bindings=r,a&&(this.serializers=a,this._serialize=n),f&&(this._logEvent=p([].concat(e._logEvent.bindings,r)))}s.prototype=this;let l=new s(this);return c(this,l),l.child=function(...e){return z.call(this,t,...e)},l.level=i.level||this.level,t.onChild(l),l}return m=e.customLevels||{},S.levels={values:Object.assign({},u.levels.values,m),labels:Object.assign({},u.levels.labels,(g={},Object.keys(i=m).forEach(function(e){g[i[e]]=e}),g))},S.level=T,S.isLevelEnabled=function(e){return!!this.levels.values[e]&&this.levels.values[e]>=this.levels.values[this.level]},S.setMaxListeners=S.getMaxListeners=S.emit=S.addListener=S.on=S.prependListener=S.once=S.prependOnceListener=S.removeListener=S.removeAllListeners=S.listeners=S.listenerCount=S.eventNames=S.write=S.flush=y,S.serializers=x,S._serialize=$,S._stdErrSerialize=C,S.child=function(...e){return z.call(this,O,...e)},f&&(S._logEvent=p()),S}function d(e,t,r,l){var c,u,d,m,g,f,v;if(Object.defineProperty(e,l,{value:a(e.level,r)>a(l,r)?y:r[n][l],writable:!0,enumerable:!0,configurable:!0}),e[l]===y){if(!t.transmit)return;let i=a(t.transmit.level||e.level,r);if(a(l,r)<i)return}e[l]=(c=e,u=t,d=r,m=l,g=c[n][m],function(){let e=u.timestamp(),t=Array(arguments.length),r=Object.getPrototypeOf&&Object.getPrototypeOf(this)===o?o:this;for(var n=0;n<t.length;n++)t[n]=arguments[n];var s=!1;if(u.serialize&&(h(t,this._serialize,this.serializers,this._stdErrSerialize),s=!0),u.asObject||u.formatters?g.call(r,...function(e,t,r,o,a){let{level:n,log:s=e=>e}=a.formatters||{},l=r.slice(),c=l[0],u={},d=(0|e._childLevel)+1;if(d<1&&(d=1),o&&(u.time=o),n?Object.assign(u,n(t,e.levels.values[t])):u.level=e.levels.values[t],a.asObjectBindingsOnly){if(null!==c&&"object"==typeof c)for(;d--&&"object"==typeof l[0];)Object.assign(u,l.shift());return[s(u),...l]}if(null!==c&&"object"==typeof c){for(;d--&&"object"==typeof l[0];)Object.assign(u,l.shift());c=l.length?i(l.shift(),l):void 0}else"string"==typeof c&&(c=i(l.shift(),l));return void 0!==c&&(u[a.messageKey]=c),[s(u)]}(this,m,t,e,u)):g.apply(r,t),u.transmit){let r=u.transmit.level||c._level,i=a(r,d),o=a(m,d);if(o<i)return;!function(e,t,r,i=!1){let o=t.send,a=t.ts,n=t.methodLevel,s=t.methodValue,l=t.val,c=e._logEvent.bindings;i||h(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=a,e._logEvent.messages=r.filter(function(e){return -1===c.indexOf(e)}),e._logEvent.level.label=n,e._logEvent.level.value=s,o(n,e._logEvent,l),e._logEvent=p(c)}(this,{ts:e,methodLevel:m,methodValue:o,transmitLevel:r,transmitValue:d.levels.values[u.transmit.level||c._level],send:u.transmit.send,val:a(c._level,d)},t,s)}});let b=function(e){let t=[];e.bindings&&t.push(e.bindings);let r=e[s];for(;r.parent;)(r=r.parent).logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==b.length&&(e[l]=(f=b,v=e[l],function(){return v.apply(this,[...f,...arguments])}))}function h(e,t,r,i){for(let o in e)if(i&&e[o]instanceof Error)e[o]=u.stdSerializers.err(e[o]);else if("object"==typeof e[o]&&!Array.isArray(e[o])&&t)for(let i in e[o])t.indexOf(i)>-1&&i in r&&(e[o][i]=r[i](e[o][i]))}function p(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function m(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let r in e)void 0===t[r]&&(t[r]=e[r]);return t}function g(){return{}}function f(e){return e}function y(){}function v(){return!1}function b(){return Date.now()}u.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},u.stdSerializers={mapHttpRequest:g,mapHttpResponse:g,wrapRequestSerializer:f,wrapResponseSerializer:f,wrapErrorSerializer:f,req:g,res:g,err:m,errWithCause:m},u.stdTimeFunctions=Object.assign({},{nullTime:v,epochTime:b,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),t.exports.default=u,t.exports.pino=u},278662,e=>{"use strict";var t=e.i(102232),r=e.i(31794);let i="custom_context";var o=Object.defineProperty,a=(e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?o(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r};class n{constructor(e){a(this,"nodeValue"),a(this,"sizeInBytes"),a(this,"next"),this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class s{constructor(e){a(this,"lengthInNodes"),a(this,"sizeInBytes"),a(this,"head"),a(this,"tail"),a(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){let t=new n(e);if(t.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=t):this.head=t,this.tail=t,this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;let e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){let e=[],t=this.head;for(;null!==t;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};let t=e.value;return e=e.next,{done:!1,value:t}}}}}var l=Object.defineProperty,c=(e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?l(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r};class u{constructor(e,r=1024e3){c(this,"logs"),c(this,"level"),c(this,"levelValue"),c(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=e??"error",this.levelValue=t.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new s(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===t.levels.values.error?console.error(e):r===t.levels.values.warn?console.warn(e):r===t.levels.values.debug?console.debug(e):r===t.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append((0,r.safeJsonStringify)({timestamp:new Date().toISOString(),log:e}));let t="string"==typeof e?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new s(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){let t=this.getLogArray();return t.push((0,r.safeJsonStringify)({extraMetadata:e})),new Blob(t,{type:"application/json"})}}var d=Object.defineProperty;class h{constructor(e,t=1024e3){((e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?d(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"baseChunkLogger"),this.baseChunkLogger=new u(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){let t=URL.createObjectURL(this.logsToBlob(e)),r=document.createElement("a");r.href=t,r.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)}}var p=Object.defineProperty;class m{constructor(e,t=1024e3){((e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?p(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"baseChunkLogger"),this.baseChunkLogger=new u(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var g=Object.defineProperty,f=Object.defineProperties,y=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&x(e,r,t[r]);if(v)for(var r of v(t))w.call(t,r)&&x(e,r,t[r]);return e};function C(e,t=i){return e[t]||""}e.s(["generateChildLogger",0,function(e,t,r=i){let o=function(e,t,r=i){let o=C(e,r);return o.trim()?`${o}/${t}`:t}(e,t,r);return function(e,t,r=i){return e[r]=t,e}(e.child({context:o}),o,r)},"generatePlatformLogger",0,function(e){var r,i,o,a;let n,s,l,c;return"u">typeof e.loggerOverride&&"string"!=typeof e.loggerOverride?{logger:e.loggerOverride,chunkLoggerController:null}:"u">typeof window?(c=new h(null==(o=(i=e).opts)?void 0:o.level,i.maxSizeInBytes),{logger:(0,t.default)((s=$({},i.opts),l={level:"trace",browser:f($({},null==(a=i.opts)?void 0:a.browser),y({write:e=>c.write(e)}))},f(s,y(l)))),chunkLoggerController:c}):(n=new m(null==(r=e.opts)?void 0:r.level,e.maxSizeInBytes),{logger:(0,t.default)(f($({},e.opts),y({level:"trace"})),n),chunkLoggerController:n})},"getDefaultLoggerOptions",0,function(e){return f($({},e),y({level:e?.level||"info"}))},"getLoggerContext",0,C])},907170,695553,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(852634);var o=e.i(459088),a=e.i(645975),n=e.i(162611);let s=n.css`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return r.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};c.styles=[o.resetStyles,o.elementStyles,s],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),l([(0,i.property)()],c.prototype,"iconColor",void 0),l([(0,i.property)()],c.prototype,"variant",void 0),c=l([(0,a.customElement)("wui-icon-link")],c),e.s([],695553),e.s([],907170)},143053,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(234051);var o=e.i(829389);e.i(383227),e.i(839009);var a=e.i(459088),n=e.i(645975),s=e.i(162611);let l=s.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
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
`;var c=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",r.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,o.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?r.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,o.ifDefined)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:r.html`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?r.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,i.property)()],u.prototype,"imageSrc",void 0),c([(0,i.property)()],u.prototype,"icon",void 0),c([(0,i.property)()],u.prototype,"iconColor",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"loading",void 0),c([(0,i.property)()],u.prototype,"tabIdx",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"rightIcon",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"rounded",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"fullSize",void 0),u=c([(0,n.customElement)("wui-list-item")],u),e.s([],143053)},720226,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(852634),e.i(864380);var o=e.i(459088),a=e.i(645975);e.i(912190);var n=e.i(162611);let s=n.css`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:r.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};c.styles=[o.resetStyles,s],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"name",void 0),l([(0,i.property)()],c.prototype,"imageSrc",void 0),l([(0,i.property)()],c.prototype,"walletIcon",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"installed",void 0),l([(0,i.property)()],c.prototype,"badgeSize",void 0),c=l([(0,a.customElement)("wui-wallet-image")],c),e.s([],720226)},252157,e=>{"use strict";e.i(812207);var t=e.i(654479);let r=t.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;e.s(["networkSvgMd",0,r])},956303,e=>{"use strict";e.i(720226),e.s([])},116275,e=>{"use strict";e.i(812207);var t=e.i(654479);let r=t.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;e.s(["networkSvgLg",0,r])},774339,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119),o=e.i(116275),a=e.i(252157);let n=r.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;e.i(852634),e.i(864380);var s=e.i(459088),l=e.i(645975),c=e.i(162611);let u=c.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var d=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let h=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:n,md:a.networkSvgMd,lg:o.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,r.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:r.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};h.styles=[s.resetStyles,u],d([(0,i.property)()],h.prototype,"size",void 0),d([(0,i.property)()],h.prototype,"name",void 0),d([(0,i.property)({type:Object})],h.prototype,"networkImagesBySize",void 0),d([(0,i.property)()],h.prototype,"imageSrc",void 0),d([(0,i.property)({type:Boolean})],h.prototype,"selected",void 0),d([(0,i.property)({type:Boolean})],h.prototype,"round",void 0),h=d([(0,l.customElement)("wui-network-image")],h),e.s([],774339)},864576,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119),o=e.i(645975),a=e.i(162611);let n=a.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var s=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let l=class extends t.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",r.html`<slot></slot>`}};l.styles=[n],s([(0,i.property)()],l.prototype,"width",void 0),s([(0,i.property)()],l.prototype,"height",void 0),s([(0,i.property)()],l.prototype,"variant",void 0),s([(0,i.property)({type:Boolean})],l.prototype,"rounded",void 0),l=s([(0,o.customElement)("wui-shimmer")],l),e.s([],864576)},780313,e=>{"use strict";e.i(864576),e.s([])},851887,e=>{"use strict";var t=e.i(365801),r=e.i(742710),i=e.i(592279),o=e.i(82283);let a=(0,t.proxy)({message:"",variant:"info",open:!1}),n=(0,i.withErrorBoundary)({state:a,subscribeKey:(e,t)=>(0,r.subscribeKey)(a,e,t),open(e,t){let{debug:r}=o.OptionsController.state,{code:i,displayMessage:n,debugMessage:s}=e;n&&r&&(a.message=n,a.variant=t,a.open=!0),s&&console.error("function"==typeof s?s():s,i?{code:i}:void 0)},warn(e,t,r){a.open=!0,a.message=e,a.variant="warning",t&&console.warn(t,r)},close(){a.open=!1,a.message="",a.variant="info"}});e.s(["AlertController",0,n])},748449,386198,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(56350),o=e.i(365801),a=e.i(742710),n=e.i(592279);let s=(0,o.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),l=(0,n.withErrorBoundary)({state:s,subscribe:e=>(0,o.subscribe)(s,()=>e(s)),subscribeKey:(e,t)=>(0,a.subscribeKey)(s,e,t),showTooltip({message:e,triggerRect:t,variant:r}){s.open=!0,s.message=e,s.triggerRect=t,s.variant=r},hide(){s.open=!1,s.message="",s.triggerRect={width:0,height:0,top:0,left:0}}});e.s(["TooltipController",0,l],386198),e.i(404041);var c=e.i(645975);e.i(62238),e.i(443452),e.i(249536);var u=e.i(162611);let d=u.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e["3"]} 10px ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e["5"]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var h=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let p=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.open=l.state.open,this.message=l.state.message,this.triggerRect=l.state.triggerRect,this.variant=l.state.variant,this.unsubscribe.push(l.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,r.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};p.styles=[d],h([(0,i.state)()],p.prototype,"open",void 0),h([(0,i.state)()],p.prototype,"message",void 0),h([(0,i.state)()],p.prototype,"triggerRect",void 0),h([(0,i.state)()],p.prototype,"variant",void 0),p=h([(0,c.customElement)("w3m-tooltip")],p),e.s([],748449)},741611,608601,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119),o=e.i(56350),a=e.i(803468),n=e.i(221728),s=e.i(386198);e.i(404041);var l=e.i(645975),c=e.i(315193);let u=c.css`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let h=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=s.TooltipController.state.open,this.unsubscribe.push(n.RouterController.subscribeKey("view",()=>{s.TooltipController.hide()}),a.ModalController.subscribeKey("open",e=>{e||s.TooltipController.hide()}),s.TooltipController.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),s.TooltipController.hide()}render(){return r.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return r.html`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();if(!this.open){let t=document.querySelector("w3m-modal"),r={width:e.width,height:e.height,left:e.left,top:e.top};if(t){let i=t.getBoundingClientRect();r.left=e.left-(window.innerWidth-i.width)/2,r.top=e.top-(window.innerHeight-i.height)/2}s.TooltipController.showTooltip({message:this.text,triggerRect:r,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||s.TooltipController.hide()}};h.styles=[u],d([(0,i.property)()],h.prototype,"text",void 0),d([(0,o.state)()],h.prototype,"open",void 0),h=d([(0,l.customElement)("w3m-tooltip-trigger")],h),e.s([],741611),e.s(["MathUtil",0,{interpolate(e,t,r){if(2!==e.length||2!==t.length)throw Error("inputRange and outputRange must be an array of length 2");let i=e[0]||0,o=e[1]||0,a=t[0]||0,n=t[1]||0;return r<i?a:r>o?n:(n-a)/(o-i)*(r-i)+a}}],608601)},421147,e=>{"use strict";e.i(383227),e.s([])},16555,e=>{"use strict";let t={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:e.i(401564).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(e,t)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};e.s(["ConstantsUtil",0,t])},39299,e=>{"use strict";e.i(812207);var t=e.i(108285),r=e.i(654479);e.i(374576);var i=e.i(120119);e.i(234051);var o=e.i(829389);e.i(852634),e.i(839009);var a=e.i(459088),n=e.i(645975);e.i(835902);var s=e.i(315193);let l=s.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return r.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,o.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};u.styles=[a.resetStyles,l],c([(0,i.property)()],u.prototype,"errorMessage",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)()],u.prototype,"value",void 0),c([(0,i.property)()],u.prototype,"tabIdx",void 0),u=c([(0,n.customElement)("wui-email-input")],u),e.s([],39299)},849694,124141,e=>{"use strict";var t=e.i(365801),r=e.i(742710),i=e.i(675457),o=e.i(564126),a=e.i(360334),n=e.i(227302),s=e.i(150576),l=e.i(82283);let c={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class u extends Error{}async function d(e,t){let r=function(){let{sdkType:e,sdkVersion:t,projectId:r}=l.OptionsController.getSnapshot(),i=new URL("https://rpc.walletconnect.org/v1/json-rpc");return i.searchParams.set("projectId",r),i.searchParams.set("st",e),i.searchParams.set("sv",t),i.searchParams.set("source","fund-wallet"),i.toString()}(),{projectId:i}=l.OptionsController.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:i}},a=await fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),n=await a.json();if(n.error)throw new u(n.error.message);return n}async function h(e){return(await d("reown_getExchanges",e)).result}async function p(e){return(await d("reown_getExchangePayUrl",e)).result}async function m(e){return(await d("reown_getExchangeBuyStatus",e)).result}function g(e,t){let{chainNamespace:r,chainId:i}=s.ParseUtil.parseCaipNetworkId(e),o=c[r];if(!o)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let a=o.native.assetNamespace,n=o.native.assetReference;"native"!==t&&(a=o.defaultTokenNamespace,n=t);let l=`${r}:${i}`;return`${l}/${a}:${n}`}let f={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},y={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:f,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function v(e){return Object.values(y).filter(t=>t.network===e)}e.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,f,"formatCaip19Asset",0,g,"getBuyStatus",0,m,"getExchanges",0,h,"getPayUrl",0,p,"getPaymentAssetsForNetwork",0,v],124141);var b=e.i(24742),w=e.i(960398),x=e.i(653157),$=e.i(811424);let C={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},k=(0,t.proxy)(C),E={state:k,subscribe:e=>(0,t.subscribe)(k,()=>e(k)),subscribeKey:(e,t)=>(0,r.subscribeKey)(k,e,t),resetState(){Object.assign(k,{...C})},async getAssetsForNetwork(e){let t=v(e),r=await E.getAssetsImageAndPrice(t),i=t.map(e=>{let t="native"===e.asset?(0,o.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`,i=r.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:i?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:i?.fungibles?.[0]?.iconUrl}}});return k.assets=i,i},async getAssetsImageAndPrice(e){let t=e.map(e=>"native"===e.asset?(0,o.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>b.BlockchainApiController.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!k?.paymentAsset?.price)throw Error("Cannot get token price");let e=i.NumberUtil.bigNumber(k.amount??0).round(8),t=i.NumberUtil.bigNumber(k.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){k.amount=e,k.paymentAsset?.price&&(k.tokenAmount=E.getTokenAmount())},setPaymentAsset(e){k.paymentAsset=e},isPayWithExchangeEnabled:()=>l.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>E.isPayWithExchangeEnabled()&&w.ChainController.state.activeCaipNetwork&&a.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(w.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let e=E.isPayWithExchangeSupported();if(!k.paymentAsset||!e){k.exchanges=[],k.isLoading=!1;return}k.isLoading=!0;let t=await h({page:0,asset:g(k.paymentAsset.network,k.paymentAsset.asset),amount:k.amount?.toString()??"0"});k.exchanges=t.exchanges.slice(0,2)}catch(e){throw $.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{k.isLoading=!1}},async getPayUrl(e,t){try{let r=Number(t.amount),i=await p({exchangeId:e,asset:g(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return x.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),i}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw Error("Asset not supported");throw Error(e.message)}},async handlePayWithExchange(e){try{let t=w.ChainController.getAccountData()?.address;if(!t)throw Error("No account connected");if(!k.paymentAsset)throw Error("No payment asset selected");let r=n.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!r)throw Error("Could not create popup window");k.isPaymentInProgress=!0,k.paymentId=crypto.randomUUID(),k.currentPayment={type:"exchange",exchangeId:e};let{network:i,asset:o}=k.paymentAsset,a={network:i,asset:o,amount:k.tokenAmount,recipient:t},s=await E.getPayUrl(e,a);if(!s){try{r.close()}catch(e){console.error("Unable to close popup window",e)}throw Error("Unable to initiate payment")}k.currentPayment.sessionId=s.sessionId,k.currentPayment.status="IN_PROGRESS",k.currentPayment.exchangeId=e,r.location.href=s.url}catch(e){k.error="Unable to initiate payment",$.SnackController.showError(k.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i=20}){let o=await E.getBuyStatus(e,t,r);if("SUCCESS"===o.status||"FAILED"===o.status)return o;if(0===i)throw Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),E.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i-1})},async getBuyStatus(e,t,r){try{if(!k.currentPayment)throw Error("No current payment");let i=await m({sessionId:t,exchangeId:e});if(k.currentPayment.status=i.status,"SUCCESS"===i.status||"FAILED"===i.status){let e=w.ChainController.getAccountData()?.address;k.currentPayment.result=i.txHash,k.isPaymentInProgress=!1,x.EventsController.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?n.CoreHelperUtil.parseError(k.error):void 0,source:"fund-from-exchange",paymentId:r,configuration:{network:k.paymentAsset?.network||"",asset:k.paymentAsset?.asset||"",recipient:e||"",amount:k.amount??0},currentPayment:{type:"exchange",exchangeId:k.currentPayment?.exchangeId,sessionId:k.currentPayment?.sessionId,result:i.txHash}}})}return i}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){k.currentPayment=void 0,k.isPaymentInProgress=!1,k.paymentId="",k.paymentAsset=null,k.amount=0,k.tokenAmount=0,k.priceLoading=!1,k.error=null,k.exchanges=[],k.isLoading=!1}};e.s(["ExchangeController",0,E],849694)}]);
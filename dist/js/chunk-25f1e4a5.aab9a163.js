(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f1e4a5"],{"223c":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toastification"},[i("div",{staticClass:"d-flex align-items-start"},[i("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[i("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),i("div",{staticClass:"d-flex flex-grow-1"},[i("div",[t.title?i("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?i("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),i("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():i("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],r=i("e8a3"),n={components:{BAvatar:r["a"]},props:{variant:{type:String,default:"danger"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=n,c=(i("9cf9"),i("2877")),l=Object(c["a"])(o,s,a,!1,null,"a76825f8",null);e["a"]=l.exports},2707:function(t,e,i){"use strict";i("462f")},"462f":function(t,e,i){},"99af":function(t,e,i){"use strict";var s=i("23e7"),a=i("d039"),r=i("e8b5"),n=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),h=i("b622"),f=i("2d00"),b=h("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",v=f>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=d("concat"),O=function(t){if(!n(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},w=!v||!g;s({target:"Array",proto:!0,forced:w},{concat:function(t){var e,i,s,a,r,n=o(this),d=u(n,0),h=0;for(e=-1,s=arguments.length;e<s;e++)if(r=-1===e?n:arguments[e],O(r)){if(a=c(r.length),h+a>p)throw TypeError(m);for(i=0;i<a;i++,h++)i in r&&l(d,h,r[i])}else{if(h>=p)throw TypeError(m);l(d,h++,r)}return d.length=h,d}})},"9cf9":function(t,e,i){"use strict";i("d452")},bd71:function(t,e,i){"use strict";i.r(e);var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.alert2,expression:"alert2"}],staticClass:"alert alert-dismissible fade show",attrs:{role:"alert"}},[t._m(0),t._m(1)]),i("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.alert10,expression:"alert10"}],attrs:{variant:"light",show:t.dismissCountDown,dismissible:"",fade:""},on:{"dismiss-count-down":t.countDownChanged}},[i("h1",{staticClass:"blinking ml-5"},[i("strong",[t._v("10 Mins Left!")])])]),i("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.alert15,expression:"alert15"}],attrs:{variant:"danger",dismissible:"",fade:""},on:{"dismiss-count-down":t.countDownChanged}},[i("h1",{staticClass:"blinking ml-5"},[i("strong",[t._v("15 Mins Left!")])])]),i("div",{ref:"outer-container",attrs:{id:"outerCont"}},[i("div",{ref:"outer-circle",attrs:{id:"outerCircle"}}),i("div",{ref:"inner-circle",attrs:{id:"innerCircle"}},[i("span",{ref:"timeDisplay",attrs:{id:"display-time"}},[t._v("00:00:00")])]),i("div",{attrs:{id:"progress"}},[i("div",{ref:"progress-left",staticClass:"progress-circle"},[i("div",{ref:"outer360",attrs:{id:"outer360"}}),i("div",{ref:"start360",staticClass:"test",attrs:{id:"start360"}}),i("div",{ref:"270",staticClass:"test"})]),i("div",{ref:"progress-right",staticClass:"progress-circle"},[i("div",{ref:"90",staticClass:"test"}),i("div",{ref:"180",staticClass:"test"})])])])],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"blinking ml-5"},[i("strong",[t._v("2 Mins Left!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n=i("5530"),o=(i("a9e3"),i("caad"),i("99af"),i("2b0e")),c=i("2f79"),l=i("c637"),u=i("0056"),d=i("a723"),h=i("9b76"),f=i("906c"),b=i("7b1e"),p=i("58f2"),m=i("3a58"),v=i("d82f"),g=i("cf75"),O=i("8c18"),w=i("f29e"),j=i("ce2a");function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function S(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){x(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C=Object(p["a"])("show",{type:d["i"],defaultValue:!1}),T=C.mixin,D=C.props,_=C.prop,I=C.event,E=function(t){return""===t||Object(b["b"])(t)?0:(t=Object(m["b"])(t,0),t>0?t:0)},P=function(t){return""===t||!0===t||!(Object(m["b"])(t,0)<1)&&!!t},A=Object(g["d"])(Object(v["m"])(S(S({},D),{},{dismissLabel:Object(g["c"])(d["t"],"Close"),dismissible:Object(g["c"])(d["g"],!1),fade:Object(g["c"])(d["g"],!1),variant:Object(g["c"])(d["t"],"info")})),l["a"]),R=o["default"].extend({name:l["a"],mixins:[T,O["a"]],props:A,data:function(){return{countDown:0,localShow:P(this[_])}},watch:(s={},x(s,_,(function(t){this.countDown=E(t),this.localShow=P(t)})),x(s,"countDown",(function(t){var e=this;this.clearCountDownInterval();var i=this[_];Object(b["h"])(i)&&(this.$emit(u["k"],t),i!==t&&this.$emit(I,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(f["B"])((function(){e.localShow=!1}))})))})),x(s,"localShow",(function(t){var e=this[_];t||!this.dismissible&&!Object(b["h"])(e)||this.$emit(u["j"]),Object(b["h"])(e)||e===t||this.$emit(I,t)})),s),created:function(){this.$_filterTimer=null;var t=this[_];this.countDown=E(t),this.localShow=P(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var i=this.dismissible,s=this.variant,a=t();i&&(a=t(w["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(h["j"])])),e=t("div",{staticClass:"alert",class:x({"alert-dismissible":i},"alert-".concat(s),s),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[c["a"]]},[a,this.normalizeSlot()])}return t(j["a"],{props:{noFade:!this.fade}},[e])}}),$=(i("3d20"),i("223c")),k=i("2f62"),z={components:{BAlert:R},props:{time:{type:Number,required:!0},timeAfterRefresh:Number},data:function(){return{dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,alert15:!1,alert10:!1,alert2:!1,answers:[],sideRadius:{90:"0px 80px 0px 0px",180:"0px 0px 80px 0px",270:"0px 0px 0px 80px"},counter:0,timeInSeconds:0,interval:0}},computed:Object(n["a"])({},Object(k["c"])({examTime:"GET_QUESTIONNAIRE_DETAILS",checkResults:"GET_EXAM_QUESTIONNAIRE_RESULT"})),watch:{time:function(t){t<1?clearInterval(this.interval):(this.timeInSeconds=60*this.time,localStorage.setItem("time",t),this.timer())},timeAfterRefresh:function(t){this.timer()}},created:function(){this.GET_EXAM_RESULT()},methods:Object(n["a"])(Object(n["a"])({},Object(k["b"])({GET_EXAM_RESULT:"ACTION_ADD_EXAM_QUESTIONNAIRE"})),{},{countDownChanged:function(t){this.dismissCountDown=t},timer:function(){var t=this,e={refs:this.$refs},i=e.refs,s={passToParent:this.passToParent},a=s.passToParent,r={sideRadius:this.sideRadius},n=r.sideRadius,o=this.time,c={showTime:this.showTime},l=c.showTime,u={persistTime:this.setPersistedTime},d=u.persistTime,h={start360:this.$refs.start360},f=h.start360,b={outer360:this.$refs.outer360},p=b.outer360;f.style.borderRadius="80px 0px 0px 0px",p.style.borderRadius="80px 0px 0px 0px";var m={timeInSeconds:this.timeInSeconds},v=m.timeInSeconds;Math.round(v/4);i.timeDisplay.innerText=l(v),console.log(o),v=parseInt(localStorage.getItem("seconds"))||v;var g=setInterval((function(){o=localStorage.getItem("time");var e=360/(60*o)*(60*o-v);console.log(o),f.style.transform="rotate(".concat(e,"deg)"),i.timeDisplay.innerText=l(v),d(v),Math.round(e)>=360&&(clearInterval(g),localStorage.removeItem("seconds"),t.$toast({component:$["a"],props:{title:"Your time is up!",icon:"XOctagonIcon",variant:"danger"}}),a()),Math.round(e)>=90&&(i[90].classList.add("progressed"),i[90].style.borderRadius=n[90]),Math.round(e)>=180&&(i[180].classList.add("progressed"),i[180].style.borderRadius=n[180]),Math.round(e)>=270&&(p.style.display="none",i[270].classList.add("progressed"),i[270].style.borderRadius=n[270]),60==t.timeInSeconds--&&(console.log("1 min left"),t.alert2=!0,t.dismissCountDown=t.dismissSecs),v-=1}),1e3);this.interval=g},showTime:function(t){var e=new Date("2021/01/01 08:00:00"),i=new Date(e.setSeconds(e.getSeconds()+t)),s=i.getUTCHours(),a=i.getMinutes(),r=i.getSeconds();function n(t){var e=[1,2,3,4,5,6,7,8,9],i="00";return t&&(i=e.includes(t)?"0".concat(t):t),i}return"".concat(n(s),":").concat(n(a),":").concat(n(r))},passToParent:function(){this.$emit("timesUp",!0)},setPersistedTime:function(t){localStorage.setItem("seconds",t)}})},L=z,M=(i("2707"),i("2877")),N=Object(M["a"])(L,a,r,!1,null,null,null);e["default"]=N.exports},d452:function(t,e,i){},e8a3:function(t,e,i){"use strict";i.d(e,"a",(function(){return _}));var s=i("2b0e"),a=i("c637"),r=i("0056"),n=i("a723"),o=i("9b76"),c=i("7b1e"),l=i("3a58"),u=i("d82f"),d=i("cf75"),h=i("4a38"),f=i("8c18"),b=i("0759"),p=i("7386"),m=i("1947"),v=i("aa59");function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){w(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var j="b-avatar",y=["sm",null,"lg"],S=.4,x=.7*S,C=function(t){return t=Object(c["m"])(t)&&Object(c["h"])(t)?Object(l["a"])(t,0):t,Object(c["g"])(t)?"".concat(t,"px"):t||null},T=Object(u["j"])(v["b"],["active","event","routerTag"]),D=Object(d["d"])(Object(u["m"])(O(O({},T),{},{alt:Object(d["c"])(n["t"],"avatar"),ariaLabel:Object(d["c"])(n["t"]),badge:Object(d["c"])(n["j"],!1),badgeLeft:Object(d["c"])(n["g"],!1),badgeOffset:Object(d["c"])(n["t"]),badgeTop:Object(d["c"])(n["g"],!1),badgeVariant:Object(d["c"])(n["t"],"primary"),button:Object(d["c"])(n["g"],!1),buttonType:Object(d["c"])(n["t"],"button"),icon:Object(d["c"])(n["t"]),rounded:Object(d["c"])(n["j"],!1),size:Object(d["c"])(n["o"]),square:Object(d["c"])(n["g"],!1),src:Object(d["c"])(n["t"]),text:Object(d["c"])(n["t"]),variant:Object(d["c"])(n["t"],"secondary")})),a["b"]),_=s["default"].extend({name:a["b"],mixins:[f["a"]],inject:{bvAvatarGroup:{default:null}},props:D,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return C(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,i=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===i||(i||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(S,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,i=e?e.overlapScale:0,s=t&&i?"calc(".concat(t," * -").concat(i,")"):null;return s?{marginLeft:s,marginRight:s}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,i=this.badgeLeft,s=this.badgeOffset,a=s||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(x," )"):null,top:e?a:null,bottom:e?null:a,left:i?a:null,right:i?null:a}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(r["t"],t)},onClick:function(t){this.$emit(r["d"],t)}},render:function(t){var e,i=this.computedVariant,s=this.disabled,a=this.computedRounded,r=this.icon,n=this.localSrc,c=this.text,l=this.fontStyle,u=this.marginStyle,f=this.computedSize,g=this.button,S=this.buttonType,x=this.badge,C=this.badgeVariant,D=this.badgeStyle,_=!g&&Object(h["d"])(this),I=g?m["a"]:_?v["a"]:"span",E=this.alt,P=this.ariaLabel||null,A=null;this.hasNormalizedSlot()?A=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):n?(A=t("img",{style:i?{}:{width:"100%",height:"100%"},attrs:{src:n,alt:E},on:{error:this.onImgError}}),A=t("span",{staticClass:"b-avatar-img"},[A])):A=r?t(b["a"],{props:{icon:r},attrs:{"aria-hidden":"true",alt:E}}):c?t("span",{staticClass:"b-avatar-text",style:l},[t("span",c)]):t(p["vr"],{attrs:{"aria-hidden":"true",alt:E}});var R=t(),$=this.hasNormalizedSlot(o["c"]);if(x||""===x||$){var k=!0===x?"":x;R=t("span",{staticClass:"b-avatar-badge",class:w({},"badge-".concat(C),C),style:D},[$?this.normalizeSlot(o["c"]):k])}var z={staticClass:j,class:(e={},w(e,"".concat(j,"-").concat(f),f&&-1!==y.indexOf(f)),w(e,"badge-".concat(i),!g&&i),w(e,"rounded",!0===a),w(e,"rounded-".concat(a),a&&!0!==a),w(e,"disabled",s),e),style:O(O({},u),{},{width:f,height:f}),attrs:{"aria-label":P||null},props:g?{variant:i,disabled:s,type:S}:_?Object(d["e"])(T,this):{},on:g||_?{click:this.onClick}:{}};return t(I,z,[A,R])}})}}]);
//# sourceMappingURL=chunk-25f1e4a5.aab9a163.js.map
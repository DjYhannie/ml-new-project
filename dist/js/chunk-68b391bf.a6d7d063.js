(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68b391bf"],{1276:function(e,t,r){"use strict";var n=r("d784"),i=r("44e7"),s=r("825a"),a=r("1d80"),o=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),h=r("d039"),f=[].push,m=Math.min,p=4294967295,b=!h((function(){return!RegExp(p,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(a(this)),s=void 0===r?p:r>>>0;if(0===s)return[];if(void 0===e)return[n];if(!i(e))return t.call(n,e,s);var o,c,l,u=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,b=new RegExp(e.source,h+"g");while(o=d.call(b,n)){if(c=b.lastIndex,c>m&&(u.push(n.slice(m,o.index)),o.length>1&&o.index<n.length&&f.apply(u,o.slice(1)),l=o[0].length,m=c,u.length>=s))break;b.lastIndex===o.index&&b.lastIndex++}return m===n.length?!l&&b.test("")||u.push(""):u.push(n.slice(m)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var i=a(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,i,r):n.call(String(i),t,r)},function(e,i){var a=r(n,e,this,i,n!==t);if(a.done)return a.value;var d=s(e),h=String(this),f=o(d,RegExp),v=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),w=new f(b?d:"^(?:"+d.source+")",g),O=void 0===i?p:i>>>0;if(0===O)return[];if(0===h.length)return null===u(w,h)?[h]:[];var S=0,j=0,T=[];while(j<h.length){w.lastIndex=b?j:0;var x,E=u(w,b?h:h.slice(j));if(null===E||(x=m(l(w.lastIndex+(b?0:j)),h.length))===S)j=c(h,j,v);else{if(T.push(h.slice(S,j)),T.length===O)return T;for(var _=1;_<=E.length-1;_++)if(T.push(E[_]),T.length===O)return T;j=S=x}}return T.push(h.slice(S)),T}]}),!b)},2532:function(e,t,r){"use strict";var n=r("23e7"),i=r("5a34"),s=r("1d80"),a=r("ab13d");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(s(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},2707:function(e,t,r){"use strict";r("462f")},"44e7":function(e,t,r){var n=r("861d"),i=r("c6b6"),s=r("b622"),a=s("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},"462f":function(e,t,r){},"4fad":function(e,t,r){var n=r("23e7"),i=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return i(e)}})},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6f53":function(e,t,r){var n=r("83ab"),i=r("df75"),s=r("fc6a"),a=r("d1e7").f,o=function(e){return function(t){var r,o=s(t),c=i(o),l=c.length,u=0,d=[];while(l>u)r=c[u++],n&&!a.call(o,r)||d.push(e?[r,o[r]]:o[r]);return d}};e.exports={entries:o(!0),values:o(!1)}},"75f0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{directives:[{name:"show",rawName:"v-show",value:e.helloShow,expression:"helloShow"}],staticClass:"card w-50 align-center"},[r("h3",[e._v("Hello there!")]),r("p",[e._v("Your participation for this test is highly appreciated. Kindly click start to proceed to the test questions")]),r("p",[r("em",[e._v("By clicking Start button TIMER will automatically start.")])]),r("b-button",{attrs:{id:"show-btn",variant:"danger"},on:{click:function(t){return e.start()}}},[e._v(" Start ")])],1),r("BaseTimer",{directives:[{name:"show",rawName:"v-show",value:e.isTimer,expression:"isTimer"}],staticClass:"sticky",attrs:{time:e.time||0,timeAfterRefresh:e.afterExam},on:{timesUp:e.timesUp,submitted:e.on45Seconds}}),r("br"),r("br"),r("br"),r("b-card",{directives:[{name:"show",rawName:"v-show",value:e.formShow,expression:"formShow"}]},[e._l(e.examQuestionnaires,(function(t,n){return r("div",{key:t.id},[r("b-card",{staticClass:"border"},[r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.validateForm(t)}}},[r("b-form-group",[e._v(" "+e._s(n+1)+" . "+e._s(t.question)+" "),r("div",[r("span",{ref:t.id,refInFor:!0,staticStyle:{display:"none"}},[r("b",[e._v("*")])]),r("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio",required:""},model:{value:e.selected[t.id],callback:function(r){e.$set(e.selected,t.id,r)},expression:"selected[examQuestionnaire.id]"}},e._l(t.choices,(function(t,n){return r("div",{key:n},[r("b-form-radio",{staticClass:"radio",attrs:{value:n}},[e._v(" "+e._s(n+" . "+t)+" ")])],1)})),0)],1)])],1)],1)])],1)})),r("b-button",{attrs:{type:"submit",variant:"danger"},on:{click:e.submitExam}},[e._v(" Submit ")])],2)],1)},i=[],s=r("1da1"),a=r("5530"),o=(r("96cf"),r("159b"),r("99af"),r("ac1f"),r("1276"),r("d81d"),r("4fad"),r("caad"),r("2532"),r("4de4"),r("205f")),c=r("1947"),l=r("11de"),u=r("8226"),d=r("9e14"),h=r("2924"),f=r("7bb1"),m=r("2f62"),p=r("bd71"),b=(r("2cae"),r("223c")),v=r("3d20"),g=r.n(v),w={components:{ValidationProvider:f["b"],ValidationObserver:f["a"],BaseTimer:p["default"],BCard:o["a"],BButton:c["a"],BForm:l["a"],BFormGroup:u["a"],BFormRadio:d["a"],BFormRadioGroup:h["a"]},data:function(){return{click:!0,showRequired:!1,disabled:!1,isTimer:!1,formShow:!1,examShow:!1,helloShow:!0,required:!0,selected:[],afterExam:0,time:0,answers:[]}},watch:{selected:function(e){var t=this;e.forEach((function(e,r){t.answers[r]='{"'.concat(r,'": "').concat(e,'"}')}))}},computed:Object(a["a"])({},Object(m["c"])({examQuestionnaires:"GET_EXAM_QUESTIONNAIRE",testTime:"GET_QUESTIONNAIRE_DETAILS",id:"get_id",checkResults:"GET_EXAM_QUESTIONNAIRE_RESULT"})),mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.checkRemainingTime(),e.set_id(location.pathname.split("/").pop()),console.log(location.pathname.split("/").pop()),t.next=5,e.GET_EXAM_QUESTIONNAIRE();case 5:console.log(e.examQuestionnaires),localStorage.removeItem("take_exam");case 7:case"end":return t.stop()}}),t)})))()},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(m["d"])({set_id:"SET_EXAM_QUESTIONNAIRE_ID"})),Object(m["b"])({GET_EXAM_QUESTIONNAIRE:"ACTION_GET_EXAM_QUESTIONNAIRE",GET_EXAM_RESULT:"ACTION_ADD_EXAM_QUESTIONNAIRE"})),{},{start:function(){this.isTimer=!0,this.formShow=!0,this.helloShow=!1,this.time=this.testTime.time_duration,localStorage.setItem("examstarted",new Date)},submitExam:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.answers=e.answers.map((function(e){try{return e=JSON.parse(e),e}catch(t){return e}})),r=e.examQuestionnaires.map((function(e){return e.id})),n=Object.entries(e.answers).map((function(e){return parseInt(e[0])})),r.forEach((function(t){n.includes(t)?e.$refs[t][0].style="display: none;":e.$refs[t][0].style="display: block;"})),e.answers=e.answers.filter((function(e){return e})),e.examQuestionnaires.length===e.answers.length){t.next=9;break}return e.answers=[],e.$toast({component:b["a"],props:{position:"top-center",title:"Please dont skip a Question!",icon:"AlertOctagonIcon",variant:"danger"}}),t.abrupt("return");case 9:return localStorage.setItem("seconds",0),e.time=0,i={answers:JSON.stringify(e.answers),id:e.id},t.next=14,e.$store.dispatch("ACTION_ADD_EXAM_QUESTIONNAIRE",i);case 14:t.sent,e.answers=[],e.examShow=!0,e.formShow=!1,e.isTimer=!1,e.helloShow=!1,console.log("RESULTS",e.checkResults),g.a.fire({title:"Score: ".concat(e.checkResults.points," / ").concat(e.examQuestionnaires.length," You ").concat(e.checkResults.remaks," "),text:"Thank You For Participating. You May Check Your Result in the History.",width:600,padding:"3em",backdrop:"\n    rgba(0,0,123,0.4)\n    no-repeat\n  "}).then((function(t){t.isConfirmed&&e.$router.push({name:"user/history"})}));case 22:case"end":return t.stop()}}),t)})))()},timesUp:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.disabled=!0,console.log(e),t.answers=t.answers.map((function(e){try{return e=JSON.parse(e),e}catch(t){return e}})),t.answers=t.answers.filter((function(e){return e})),console.log(t.answers),n={answers:JSON.stringify(t.answers),id:t.id},r.next=8,t.$store.dispatch("ACTION_ADD_EXAM_QUESTIONNAIRE",n);case 8:i=r.sent,t.answers=[],console.log("SUBMIT",i),t.time=0,localStorage.setItem("seconds",0),t.examShow=!0,t.formShow=!1,t.isTimer=!1,t.helloShow=!0,g.a.fire({title:"Score: ".concat(t.checkResults.points," / ").concat(t.examQuestionnaires.length," You ").concat(t.checkResults.remaks," "),text:"Thank You For Participating. You May Check Your Result in the History.",width:600,padding:"3em",backdrop:"\n    rgba(0,0,123,0.4)\n    no-repeat\n  "}).then((function(e){e.isConfirmed&&t.$router.push({name:"user/history"})}));case 18:case"end":return r.stop()}}),r)})))()},on45Seconds:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})))()},checkRemainingTime:function(){var e=localStorage.getItem("seconds");!e||e<1?(this.isTimer=!1,this.formShow=!1,this.helloShow=!0):(this.isTimer=!0,this.formShow=!0,this.helloShow=!1,this.time=this.testTime.time_duration)},getCounterByDateTime:function(e){var t=localStorage.getItem("examstarted"),r=new Date(new Date(t).setMinutes(new Date(t).getMinutes()+e)),n=new Date;return n>r?0:Math.floor(((new Date).getTime()-new Date(t).getTime())/1e3)}})},O=w,S=(r("8295"),r("2877")),j=Object(S["a"])(O,n,i,!1,null,"3468fec3",null);t["default"]=j.exports},8295:function(e,t,r){"use strict";r("d074")},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),s=r("e8b5"),a=r("861d"),o=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),h=r("b622"),f=r("2d00"),m=h("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",v=f>=51||!i((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),g=d("concat"),w=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:s(e)},O=!v||!g;n({target:"Array",proto:!0,forced:O},{concat:function(e){var t,r,n,i,s,a=o(this),d=u(a,0),h=0;for(t=-1,n=arguments.length;t<n;t++)if(s=-1===t?a:arguments[t],w(s)){if(i=c(s.length),h+i>p)throw TypeError(b);for(r=0;r<i;r++,h++)r in s&&l(d,h,s[r])}else{if(h>=p)throw TypeError(b);l(d,h++,s)}return d.length=h,d}})},ab13d:function(e,t,r){var n=r("b622"),i=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,"/./"[e](t)}catch(n){}}return!1}},b28b:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var n=r("b42e"),i=r("c637"),s=r("a723"),a=r("992e"),o=r("2326"),c=r("228e"),l=r("6c06"),u=r("7b1e"),d=r("b508"),h=r("d82f"),f=r("cf75"),m=r("fa73");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=["auto","start","end","center","baseline","stretch"],w=function(e,t,r){var n=e;if(!Object(u["o"])(r)&&!1!==r)return t&&(n+="-".concat(t)),"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),Object(m["c"])(n)):Object(m["c"])(n)},O=Object(d["a"])(w),S=Object(h["c"])(null),j=function(){var e=Object(c["b"])().filter(l["a"]),t=e.reduce((function(e,t){return e[t]=Object(f["c"])(s["i"]),e}),Object(h["c"])(null)),r=e.reduce((function(e,t){return e[Object(f["g"])(t,"offset")]=Object(f["c"])(s["o"]),e}),Object(h["c"])(null)),n=e.reduce((function(e,t){return e[Object(f["g"])(t,"order")]=Object(f["c"])(s["o"]),e}),Object(h["c"])(null));return S=Object(h["a"])(Object(h["c"])(null),{col:Object(h["h"])(t),offset:Object(h["h"])(r),order:Object(h["h"])(n)}),Object(f["d"])(Object(h["m"])(b(b(b(b({},t),r),n),{},{alignSelf:Object(f["c"])(s["t"],null,(function(e){return Object(o["a"])(g,e)})),col:Object(f["c"])(s["g"],!1),cols:Object(f["c"])(s["o"]),offset:Object(f["c"])(s["o"]),order:Object(f["c"])(s["o"]),tag:Object(f["c"])(s["t"],"div")})),i["r"])},T={name:i["r"],functional:!0,get props(){return delete this.props,this.props=j()},render:function(e,t){var r,i=t.props,s=t.data,o=t.children,c=i.cols,l=i.offset,u=i.order,d=i.alignSelf,h=[];for(var f in S)for(var m=S[f],p=0;p<m.length;p++){var b=O(f,m[p].replace(f,""),i[m[p]]);b&&h.push(b)}var g=h.some((function(e){return a["c"].test(e)}));return h.push((r={col:i.col||!g&&!c},v(r,"col-".concat(c),c),v(r,"offset-".concat(l),l),v(r,"order-".concat(u),u),v(r,"align-self-".concat(d),d),r)),e(i.tag,Object(n["a"])(s,{class:h}),o)}}},bd71:function(e,t,r){"use strict";r.r(t);var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.alert2,expression:"alert2"}],staticClass:"alert alert-dismissible fade show",attrs:{role:"alert"}},[e._m(0),e._m(1)]),r("b-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert10,expression:"alert10"}],attrs:{variant:"light",show:e.dismissCountDown,dismissible:"",fade:""},on:{"dismiss-count-down":e.countDownChanged}},[r("h1",{staticClass:"blinking ml-5"},[r("strong",[e._v("10 Mins Left!")])])]),r("b-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert15,expression:"alert15"}],attrs:{variant:"danger",dismissible:"",fade:""},on:{"dismiss-count-down":e.countDownChanged}},[r("h1",{staticClass:"blinking ml-5"},[r("strong",[e._v("15 Mins Left!")])])]),r("div",{ref:"outer-container",attrs:{id:"outerCont"}},[r("div",{ref:"outer-circle",attrs:{id:"outerCircle"}}),r("div",{ref:"inner-circle",attrs:{id:"innerCircle"}},[r("span",{ref:"timeDisplay",attrs:{id:"display-time"}},[e._v("00:00:00")])]),r("div",{attrs:{id:"progress"}},[r("div",{ref:"progress-left",staticClass:"progress-circle"},[r("div",{ref:"outer360",attrs:{id:"outer360"}}),r("div",{ref:"start360",staticClass:"test",attrs:{id:"start360"}}),r("div",{ref:"270",staticClass:"test"})]),r("div",{ref:"progress-right",staticClass:"progress-circle"},[r("div",{ref:"90",staticClass:"test"}),r("div",{ref:"180",staticClass:"test"})])])])],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"blinking ml-5"},[r("strong",[e._v("2 Mins Left!")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],a=r("5530"),o=(r("a9e3"),r("caad"),r("99af"),r("2b0e")),c=r("2f79"),l=r("c637"),u=r("0056"),d=r("a723"),h=r("9b76"),f=r("906c"),m=r("7b1e"),p=r("58f2"),b=r("3a58"),v=r("d82f"),g=r("cf75"),w=r("8c18"),O=r("f29e"),S=r("ce2a");function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=Object(p["a"])("show",{type:d["i"],defaultValue:!1}),_=E.mixin,y=E.props,I=E.prop,R=E.event,D=function(e){return""===e||Object(m["b"])(e)?0:(e=Object(b["b"])(e,0),e>0?e:0)},k=function(e){return""===e||!0===e||!(Object(b["b"])(e,0)<1)&&!!e},C=Object(g["d"])(Object(v["m"])(T(T({},y),{},{dismissLabel:Object(g["c"])(d["t"],"Close"),dismissible:Object(g["c"])(d["g"],!1),fade:Object(g["c"])(d["g"],!1),variant:Object(g["c"])(d["t"],"info")})),l["a"]),A=o["default"].extend({name:l["a"],mixins:[_,w["a"]],props:C,data:function(){return{countDown:0,localShow:k(this[I])}},watch:(n={},x(n,I,(function(e){this.countDown=D(e),this.localShow=k(e)})),x(n,"countDown",(function(e){var t=this;this.clearCountDownInterval();var r=this[I];Object(m["h"])(r)&&(this.$emit(u["k"],e),r!==e&&this.$emit(R,e),e>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){t.countDown--}),1e3)):this.$nextTick((function(){Object(f["B"])((function(){t.localShow=!1}))})))})),x(n,"localShow",(function(e){var t=this[I];e||!this.dismissible&&!Object(m["h"])(t)||this.$emit(u["j"]),Object(m["h"])(t)||t===e||this.$emit(R,e)})),n),created:function(){this.$_filterTimer=null;var e=this[I];this.countDown=D(e),this.localShow=k(e)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(e){var t=e();if(this.localShow){var r=this.dismissible,n=this.variant,i=e();r&&(i=e(O["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(h["j"])])),t=e("div",{staticClass:"alert",class:x({"alert-dismissible":r},"alert-".concat(n),n),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[c["a"]]},[i,this.normalizeSlot()])}return e(S["a"],{props:{noFade:!this.fade}},[t])}}),N=(r("3d20"),r("223c")),M=r("2f62"),P={components:{BAlert:A},props:{time:{type:Number,required:!0},timeAfterRefresh:Number},data:function(){return{dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,alert15:!1,alert10:!1,alert2:!1,answers:[],sideRadius:{90:"0px 80px 0px 0px",180:"0px 0px 80px 0px",270:"0px 0px 0px 80px"},counter:0,timeInSeconds:0,interval:0}},computed:Object(a["a"])({},Object(M["c"])({examTime:"GET_QUESTIONNAIRE_DETAILS",checkResults:"GET_EXAM_QUESTIONNAIRE_RESULT"})),watch:{time:function(e){e<1?clearInterval(this.interval):(this.timeInSeconds=60*this.time,localStorage.setItem("time",e),this.timer())},timeAfterRefresh:function(e){this.timer()}},created:function(){this.GET_EXAM_RESULT()},methods:Object(a["a"])(Object(a["a"])({},Object(M["b"])({GET_EXAM_RESULT:"ACTION_ADD_EXAM_QUESTIONNAIRE"})),{},{countDownChanged:function(e){this.dismissCountDown=e},timer:function(){var e=this,t={refs:this.$refs},r=t.refs,n={passToParent:this.passToParent},i=n.passToParent,s={sideRadius:this.sideRadius},a=s.sideRadius,o=this.time,c={showTime:this.showTime},l=c.showTime,u={persistTime:this.setPersistedTime},d=u.persistTime,h={start360:this.$refs.start360},f=h.start360,m={outer360:this.$refs.outer360},p=m.outer360;f.style.borderRadius="80px 0px 0px 0px",p.style.borderRadius="80px 0px 0px 0px";var b={timeInSeconds:this.timeInSeconds},v=b.timeInSeconds;Math.round(v/4);r.timeDisplay.innerText=l(v),console.log(o),v=parseInt(localStorage.getItem("seconds"))||v;var g=setInterval((function(){o=localStorage.getItem("time");var t=360/(60*o)*(60*o-v);console.log(o),f.style.transform="rotate(".concat(t,"deg)"),r.timeDisplay.innerText=l(v),d(v),Math.round(t)>=360&&(clearInterval(g),localStorage.removeItem("seconds"),e.$toast({component:N["a"],props:{title:"Your time is up!",icon:"XOctagonIcon",variant:"danger"}}),i()),Math.round(t)>=90&&(r[90].classList.add("progressed"),r[90].style.borderRadius=a[90]),Math.round(t)>=180&&(r[180].classList.add("progressed"),r[180].style.borderRadius=a[180]),Math.round(t)>=270&&(p.style.display="none",r[270].classList.add("progressed"),r[270].style.borderRadius=a[270]),60==e.timeInSeconds--&&(console.log("1 min left"),e.alert2=!0,e.dismissCountDown=e.dismissSecs),v-=1}),1e3);this.interval=g},showTime:function(e){var t=new Date("2021/01/01 08:00:00"),r=new Date(t.setSeconds(t.getSeconds()+e)),n=r.getUTCHours(),i=r.getMinutes(),s=r.getSeconds();function a(e){var t=[1,2,3,4,5,6,7,8,9],r="00";return e&&(r=t.includes(e)?"0".concat(e):e),r}return"".concat(a(n),":").concat(a(i),":").concat(a(s))},passToParent:function(){this.$emit("timesUp",!0)},setPersistedTime:function(e){localStorage.setItem("seconds",e)}})},$=P,U=(r("2707"),r("2877")),Q=Object(U["a"])($,i,s,!1,null,null,null);t["default"]=Q.exports},d074:function(e,t,r){}}]);
//# sourceMappingURL=chunk-68b391bf.a6d7d063.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-771a8b36"],{"0fc6":function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return f}));var n=r("2b0e"),a=r("a723"),i=r("a874"),o=r("8690"),c=r("7b1e"),s=r("d82f"),u=r("cf75"),l=r("686b"),d='Setting prop "options" to an object is deprecated. Use the array format instead.',b=Object(u["d"])({disabledField:Object(u["c"])(a["t"],"disabled"),htmlField:Object(u["c"])(a["t"],"html"),options:Object(u["c"])(a["d"],[]),textField:Object(u["c"])(a["t"],"text"),valueField:Object(u["c"])(a["t"],"value")},"formOptionControls"),f=n["default"].extend({props:b,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(c["j"])(e)){var r=Object(i["a"])(e,this.valueField),n=Object(i["a"])(e,this.textField);return{value:Object(c["n"])(r)?t||n:r,text:Object(o["b"])(String(Object(c["n"])(n)?t:n)),html:Object(i["a"])(e,this.htmlField),disabled:Boolean(Object(i["a"])(e,this.disabledField))}}return{value:t||e,text:Object(o["b"])(String(e)),disabled:!1}},normalizeOptions:function(e){var t=this;return Object(c["a"])(e)?e.map((function(e){return t.normalizeOption(e)})):Object(c["j"])(e)?(Object(l["a"])(d,this.$options.name),Object(s["h"])(e).map((function(r){return t.normalizeOption(e[r]||{},r)}))):[]}}})},"11de":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),i=r("c637"),o=r("a723"),c=r("cf75"),s=Object(c["d"])({id:Object(c["c"])(o["t"]),inline:Object(c["c"])(o["g"],!1),novalidate:Object(c["c"])(o["g"],!1),validated:Object(c["c"])(o["g"],!1)},i["x"]),u=n["default"].extend({name:i["x"],functional:!0,props:s,render:function(e,t){var r=t.props,n=t.data,i=t.children;return e("form",Object(a["a"])(n,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),i)}})},"205f":function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var n=r("2b0e"),a=r("b42e"),i=r("c637"),o=r("a723"),c=r("9b76"),s=r("8690"),u=r("365c"),l=r("d82f"),d=r("cf75"),b=r("d580"),f=r("6197"),p=r("b885");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=Object(d["d"])(Object(l["m"])(O(O({},Object(d["a"])(b["a"],d["f"].bind(null,"footer"))),{},{footer:Object(d["c"])(o["t"]),footerClass:Object(d["c"])(o["e"]),footerHtml:Object(d["c"])(o["t"])})),i["k"]),j=n["default"].extend({name:i["k"],functional:!0,props:g,render:function(e,t){var r,n=t.props,i=t.data,o=t.children,c=n.footerBgVariant,u=n.footerBorderVariant,l=n.footerTextVariant;return e(n.footerTag,Object(a["a"])(i,{staticClass:"card-footer",class:[n.footerClass,(r={},h(r,"bg-".concat(c),c),h(r,"border-".concat(u),u),h(r,"text-".concat(l),l),r)],domProps:o?{}:Object(s["a"])(n.footerHtml,n.footer)}),o)}}),v=r("4918");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=Object(d["d"])(Object(l["m"])(y(y({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(d["c"])(o["g"],!1),end:Object(d["c"])(o["g"],!1),start:Object(d["c"])(o["g"],!1),top:Object(d["c"])(o["g"],!1)})),i["m"]),T=n["default"].extend({name:i["m"],functional:!0,props:S,render:function(e,t){var r=t.props,n=t.data,i=r.src,o=r.alt,c=r.width,s=r.height,u="card-img";return r.top?u+="-top":r.right||r.end?u+="-right":r.bottom?u+="-bottom":(r.left||r.start)&&(u+="-left"),e("img",Object(a["a"])(n,{class:u,attrs:{src:i,alt:o,width:c,height:s}}))}});function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=Object(d["a"])(S,d["f"].bind(null,"img"));I.imgSrc.required=!1;var C=Object(d["d"])(Object(l["m"])(P(P(P(P(P(P({},f["b"]),p["b"]),g),I),b["a"]),{},{align:Object(d["c"])(o["t"]),noBody:Object(d["c"])(o["g"],!1)})),i["i"]),k=n["default"].extend({name:i["i"],functional:!0,props:C,render:function(e,t){var r,n=t.props,i=t.data,o=t.slots,l=t.scopedSlots,b=n.imgSrc,m=n.imgLeft,O=n.imgRight,h=n.imgStart,v=n.imgEnd,w=n.imgBottom,y=n.header,x=n.headerHtml,S=n.footer,E=n.footerHtml,P=n.align,C=n.textVariant,k=n.bgVariant,R=n.borderVariant,D=l||{},A=o(),N={},M=e(),U=e();if(b){var B=e(T,{props:Object(d["e"])(I,n,d["h"].bind(null,"img"))});w?U=B:M=B}var $=e(),Q=Object(u["a"])(c["p"],D,A);(Q||y||x)&&($=e(p["a"],{props:Object(d["e"])(p["b"],n),domProps:Q?{}:Object(s["a"])(x,y)},Object(u["b"])(c["p"],N,D,A)));var V=Object(u["b"])(c["h"],N,D,A);n.noBody||(V=e(f["a"],{props:Object(d["e"])(f["b"],n)},V),n.overlay&&b&&(V=e("div",{staticClass:"position-relative"},[M,V,U]),M=e(),U=e()));var G=e(),X=Object(u["a"])(c["o"],D,A);return(X||S||E)&&(G=e(j,{props:Object(d["e"])(g,n),domProps:Q?{}:Object(s["a"])(E,S)},Object(u["b"])(c["o"],N,D,A))),e(n.tag,Object(a["a"])(i,{staticClass:"card",class:(r={"flex-row":m||h,"flex-row-reverse":(O||v)&&!(m||h)},_(r,"text-".concat(P),P),_(r,"bg-".concat(k),k),_(r,"border-".concat(R),R),_(r,"text-".concat(C),C),r)}),[M,$,V,G,U])}})},"223c":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"toastification"},[r("div",{staticClass:"d-flex align-items-start"},[r("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[r("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),r("div",{staticClass:"d-flex flex-grow-1"},[r("div",[e.title?r("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?r("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),r("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():r("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],i=r("e8a3"),o={components:{BAvatar:i["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},c=o,s=(r("b549"),r("2877")),u=Object(s["a"])(c,n,a,!1,null,"55dd3057",null);t["a"]=u.exports},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),i=r("1d80"),o=r("ab13d");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},2707:function(e,t,r){"use strict";r("462f")},2924:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var n,a=r("2b0e"),i=r("c637"),o=r("cf75"),c=r("a723"),s=r("9b76"),u=r("8690"),l=r("3c21"),d=r("58f2"),b=r("d82f"),f=r("c3e6"),p=r("9e14"),m=r("dde7"),O=r("a953"),h=r("0fc6"),g=r("ad47"),j=r("d520"),v=r("90ef"),w=r("8c18");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=["aria-describedby","aria-labelledby"],E=Object(d["a"])("checked"),P=E.mixin,_=E.props,I=E.prop,C=E.event,k=Object(o["d"])(Object(b["m"])(x(x(x(x(x(x(x(x({},v["b"]),_),m["b"]),h["b"]),g["b"]),j["b"]),O["b"]),{},{ariaInvalid:Object(o["c"])(c["j"],!1),buttonVariant:Object(o["c"])(c["t"]),buttons:Object(o["c"])(c["g"],!1),stacked:Object(o["c"])(c["g"],!1),validated:Object(o["c"])(c["g"],!1)})),"formRadioCheckGroups"),R=a["default"].extend({mixins:[v["a"],P,w["a"],m["a"],h["a"],g["a"],j["a"],O["a"]],inheritAttrs:!1,props:k,data:function(){return{localChecked:this[I]}},computed:{inline:function(){return!this.stacked},groupName:function(){return this.name||this.safeId()},groupClasses:function(){var e=this.inline,t=this.size,r=this.validated,n={"was-validated":r};return this.buttons&&(n=[n,"btn-group-toggle",S({"btn-group":e,"btn-group-vertical":!e},"btn-group-".concat(t),t)]),n}},watch:(n={},S(n,I,(function(e){Object(l["a"])(e,this.localChecked)||(this.localChecked=e)})),S(n,"localChecked",(function(e,t){Object(l["a"])(e,t)||this.$emit(C,e)})),n),render:function(e){var t=this,r=this.isRadioGroup,n=Object(b["k"])(this.$attrs,T),a=r?p["a"]:f["a"],i=this.formOptions.map((function(r,i){var o="BV_option_".concat(i);return e(a,{props:{disabled:r.disabled||!1,id:t.safeId(o),value:r.value},attrs:n,key:o},[e("span",{domProps:Object(u["a"])(r.html,r.text)})])}));return e("div",{class:[this.groupClasses,"bv-no-focus-ring"],attrs:x(x({},Object(b["j"])(this.$attrs,T)),{},{"aria-invalid":this.computedAriaInvalid,"aria-required":this.required?"true":null,id:this.safeId(),role:r?"radiogroup":"group",tabindex:"-1"})},[this.normalizeSlot(s["m"]),i,this.normalizeSlot()])}}),D=Object(o["d"])(k,i["D"]),A=a["default"].extend({name:i["D"],mixins:[R],provide:function(){return{bvRadioGroup:this}},props:D,computed:{isRadioGroup:function(){return!0}}})},"44e7":function(e,t,r){var n=r("861d"),a=r("c6b6"),i=r("b622"),o=i("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"462f":function(e,t,r){},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},6197:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"a",(function(){return g}));var n=r("2b0e"),a=r("b42e"),i=r("c637"),o=r("a723"),c=r("d82f"),s=r("cf75"),u=r("d580"),l=r("4968"),d=r("fa73"),b=Object(s["d"])({subTitle:Object(s["c"])(o["t"]),subTitleTag:Object(s["c"])(o["t"],"h6"),subTitleTextVariant:Object(s["c"])(o["t"],"muted")},i["n"]),f=n["default"].extend({name:i["n"],functional:!0,props:b,render:function(e,t){var r=t.props,n=t.data,i=t.children;return e(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),i||Object(d["g"])(r.subTitle))}});function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=Object(s["d"])(Object(c["m"])(m(m(m(m({},l["b"]),b),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),i["j"]),g=n["default"].extend({name:i["j"],functional:!0,props:h,render:function(e,t){var r,n=t.props,i=t.data,o=t.children,c=n.bodyBgVariant,u=n.bodyBorderVariant,d=n.bodyTextVariant,p=e();n.title&&(p=e(l["a"],{props:Object(s["e"])(l["b"],n)}));var m=e();return n.subTitle&&(m=e(f,{props:Object(s["e"])(b,n),class:["mb-2"]})),e(n.bodyTag,Object(a["a"])(i,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},O(r,"bg-".concat(c),c),O(r,"border-".concat(u),u),O(r,"text-".concat(d),d),r),n.bodyClass]}),[p,m,o])}})},"75f0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{directives:[{name:"show",rawName:"v-show",value:e.helloShow,expression:"helloShow"}],staticClass:"card w-50 align-center"},[r("h3",[e._v("Hello there!")]),r("p",[e._v("Your participation for this test is highly appreciated. Kindly click start to proceed to the test questions")]),r("p",[r("em",[e._v("By clicking Start button TIMER will automatically start.")])]),r("b-button",{attrs:{id:"show-btn",variant:"danger"},on:{click:function(t){return e.start()}}},[e._v(" Start ")])],1),r("BaseTimer",{directives:[{name:"show",rawName:"v-show",value:e.isTimer,expression:"isTimer"}],staticClass:"sticky",attrs:{time:e.time||0,timeAfterRefresh:e.afterExam},on:{timesUp:e.timesUp,submitted:e.on45Seconds}}),r("br"),r("br"),r("br"),r("b-card",{directives:[{name:"show",rawName:"v-show",value:e.formShow,expression:"formShow"}]},[e._l(e.examQuestionnaires,(function(t,n){return r("div",{key:t.id},[r("b-card",{staticClass:"border"},[r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.validateForm(t)}}},[r("b-form-group",[e._v(" "+e._s(n+1)+" . "+e._s(t.question)+" "),r("div",[r("span",{ref:t.id,refInFor:!0,staticStyle:{display:"none"}},[r("b",[e._v("*")])]),r("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio",required:""},model:{value:e.selected[t.id],callback:function(r){e.$set(e.selected,t.id,r)},expression:"selected[examQuestionnaire.id]"}},e._l(t.choices,(function(t,n){return r("div",{key:n},[r("b-form-radio",{staticClass:"radio",attrs:{value:n}},[e._v(" "+e._s(n+" . "+t)+" ")])],1)})),0)],1)])],1)],1)])],1)})),r("b-button",{attrs:{type:"submit",variant:"danger"},on:{click:e.submitExam}},[e._v(" Submit ")])],2)],1)},a=[],i=r("1da1"),o=r("5530"),c=(r("96cf"),r("159b"),r("99af"),r("ac1f"),r("1276"),r("d81d"),r("4fad"),r("caad"),r("2532"),r("4de4"),r("205f")),s=r("1947"),u=r("11de"),l=r("8226"),d=r("9e14"),b=r("2924"),f=r("7bb1"),p=r("2f62"),m=r("bd71"),O=(r("2cae"),r("223c")),h=r("3d20"),g=r.n(h),j={components:{ValidationProvider:f["b"],ValidationObserver:f["a"],BaseTimer:m["default"],BCard:c["a"],BButton:s["a"],BForm:u["a"],BFormGroup:l["a"],BFormRadio:d["a"],BFormRadioGroup:b["a"]},data:function(){return{click:!0,showRequired:!1,disabled:!1,isTimer:!1,formShow:!1,examShow:!1,helloShow:!0,required:!0,selected:[],afterExam:0,time:0,answers:[]}},watch:{selected:function(e){var t=this;e.forEach((function(e,r){t.answers[r]='{"'.concat(r,'": "').concat(e,'"}')}))}},computed:Object(o["a"])({},Object(p["c"])({examQuestionnaires:"GET_EXAM_QUESTIONNAIRE",testTime:"GET_QUESTIONNAIRE_DETAILS",id:"get_id",checkResults:"GET_EXAM_QUESTIONNAIRE_RESULT"})),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.checkRemainingTime(),e.set_id(location.pathname.split("/").pop()),console.log(location.pathname.split("/").pop()),t.next=5,e.GET_EXAM_QUESTIONNAIRE();case 5:console.log(e.examQuestionnaires),localStorage.removeItem("take_exam");case 7:case"end":return t.stop()}}),t)})))()},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(p["d"])({set_id:"SET_EXAM_QUESTIONNAIRE_ID"})),Object(p["b"])({GET_EXAM_QUESTIONNAIRE:"ACTION_GET_EXAM_QUESTIONNAIRE",GET_EXAM_RESULT:"ACTION_ADD_EXAM_QUESTIONNAIRE"})),{},{start:function(){this.isTimer=!0,this.formShow=!0,this.helloShow=!1,this.time=this.testTime.time_duration,localStorage.setItem("examstarted",new Date)},submitExam:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.answers=e.answers.map((function(e){try{return e=JSON.parse(e),e}catch(t){return e}})),r=e.examQuestionnaires.map((function(e){return e.id})),n=Object.entries(e.answers).map((function(e){return parseInt(e[0])})),r.forEach((function(t){n.includes(t)?e.$refs[t][0].style="display: none;":e.$refs[t][0].style="display: block;"})),e.answers=e.answers.filter((function(e){return e})),e.examQuestionnaires.length===e.answers.length){t.next=9;break}return e.answers=[],e.$toast({component:O["a"],props:{position:"top-center",title:"Please dont skip a Question!",icon:"AlertOctagonIcon",variant:"danger"}}),t.abrupt("return");case 9:return localStorage.setItem("seconds",0),e.time=0,a={answers:JSON.stringify(e.answers),id:e.id},t.next=14,e.$store.dispatch("ACTION_ADD_EXAM_QUESTIONNAIRE",a);case 14:t.sent,e.answers=[],e.examShow=!0,e.formShow=!1,e.isTimer=!1,e.helloShow=!0,console.log("RESULTS",e.checkResults),g.a.fire({title:"You ".concat(e.checkResults.remaks," Score: ").concat(e.checkResults.points," / ").concat(e.examQuestionnaires.length),text:"Thank You For Participating. You May Check Your Result in the History.",width:600,padding:"3em",backdrop:"\n    rgba(0,0,123,0.4)\n    no-repeat\n  "}).then((function(t){t.isConfirmed&&e.$router.push({name:"user/history"})}));case 22:case"end":return t.stop()}}),t)})))()},timesUp:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.disabled=!0,console.log(e),t.answers=t.answers.map((function(e){try{return e=JSON.parse(e),e}catch(t){return e}})),t.answers=t.answers.filter((function(e){return e})),console.log(t.answers),n={answers:JSON.stringify(t.answers),id:t.id},r.next=8,t.$store.dispatch("ACTION_ADD_EXAM_QUESTIONNAIRE",n);case 8:a=r.sent,t.answers=[],console.log("SUBMIT",a),t.time=0,localStorage.setItem("seconds",0),t.examShow=!0,t.formShow=!1,t.isTimer=!1,t.helloShow=!0,g.a.fire({title:"You ".concat(t.checkResults.remaks),text:"Thank You For Participating. You May Check Your Result in the History.",width:600,padding:"3em",backdrop:"\n    rgba(0,0,123,0.4)\n    no-repeat\n  "}).then((function(e){e.isConfirmed&&t.$router.push({name:"user/history"})}));case 18:case"end":return r.stop()}}),r)})))()},on45Seconds:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.disabled=!0,localStorage.setItem("seconds",0),t.time=0,console.log(e),t.answers=t.answers.map((function(e){try{return e=JSON.parse(e),e}catch(t){return e}})),t.answers=t.answers.filter((function(e){return e})),n={answers:JSON.stringify(t.answers),id:t.id},r.next=9,t.$store.dispatch("ACTION_ADD_EXAM_QUESTIONNAIRE",n);case 9:return a=r.sent,t.answers=[],t.examShow=!0,t.formShow=!1,t.isTimer=!1,t.helloShow=!0,g.a.fire({title:"You ".concat(t.checkResults.remaks),text:"Your Exam Has Been Submitted.",timer:1500}).then((function(e){e.isConfirmed&&t.$router.push({name:"user/history"})})),console.log("SUBMIT",a),r.abrupt("return",a);case 18:case"end":return r.stop()}}),r)})))()},checkRemainingTime:function(){var e=localStorage.getItem("seconds");!e||e<1?(this.isTimer=!1,this.formShow=!1,this.helloShow=!0):(this.isTimer=!0,this.formShow=!0,this.helloShow=!1,this.time=this.testTime.time_duration)},getCounterByDateTime:function(e){var t=localStorage.getItem("examstarted"),r=new Date(new Date(t).setMinutes(new Date(t).getMinutes()+e)),n=new Date;return n>r?0:Math.floor(((new Date).getTime()-new Date(t).getTime())/1e3)}})},v=j,w=(r("ad75"),r("2877")),y=Object(w["a"])(v,n,a,!1,null,"b4b93544",null);t["default"]=y.exports},"8b9b":function(e,t,r){},"8d81":function(e,t,r){},"9e14":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("2b0e"),a=r("c637"),i=r("3c21"),o=r("d82f"),c=r("cf75"),s=r("dde7"),u=r("d3cb"),l=r("ad47"),d=r("d520"),b=r("90ef");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=Object(c["d"])(Object(o["m"])(p(p(p(p(p({},b["b"]),s["b"]),u["c"]),l["b"]),d["b"])),a["C"]),h=n["default"].extend({name:a["C"],mixins:[b["a"],u["b"],s["a"],l["a"],d["a"]],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:O,watch:{computedLocalChecked:function(e,t){Object(i["a"])(e,t)||this.$emit(u["a"],e)}}})},a953:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r("2b0e"),a=r("a723"),i=r("cf75"),o=Object(i["d"])({plain:Object(i["c"])(a["g"],!1)},"formControls"),c=n["default"].extend({props:o,computed:{custom:function(){return!this.plain}}})},ab13d:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},ad75:function(e,t,r){"use strict";r("8b9b")},b549:function(e,t,r){"use strict";r("8d81")},b885:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return m}));var n=r("2b0e"),a=r("b42e"),i=r("c637"),o=r("a723"),c=r("8690"),s=r("d82f"),u=r("cf75"),l=r("d580");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(u["d"])(Object(s["m"])(b(b({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(o["t"]),headerClass:Object(u["c"])(o["e"]),headerHtml:Object(u["c"])(o["t"])})),i["l"]),m=n["default"].extend({name:i["l"],functional:!0,props:p,render:function(e,t){var r,n=t.props,i=t.data,o=t.children,s=n.headerBgVariant,u=n.headerBorderVariant,l=n.headerTextVariant;return e(n.headerTag,Object(a["a"])(i,{staticClass:"card-header",class:[n.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(u),u),f(r,"text-".concat(l),l),r)],domProps:o?{}:Object(c["a"])(n.headerHtml,n.header)}),o)}})},bd71:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"outer-container",attrs:{id:"outerCont"}},[r("div",{ref:"outer-circle",attrs:{id:"outerCircle"}}),r("div",{ref:"inner-circle",attrs:{id:"innerCircle"}},[r("span",{ref:"timeDisplay",attrs:{id:"display-time"}},[e._v("00:00:00")])]),r("div",{attrs:{id:"progress"}},[r("div",{ref:"progress-left",staticClass:"progress-circle"},[r("div",{ref:"outer360",attrs:{id:"outer360"}}),r("div",{ref:"start360",staticClass:"test",attrs:{id:"start360"}}),r("div",{ref:"270",staticClass:"test"})]),r("div",{ref:"progress-right",staticClass:"progress-circle"},[r("div",{ref:"90",staticClass:"test"}),r("div",{ref:"180",staticClass:"test"})])])])},a=[],i=r("5530"),o=(r("a9e3"),r("caad"),r("99af"),r("3d20"),r("223c")),c=r("2f62"),s={props:{time:{type:Number,required:!0},timeAfterRefresh:Number},data:function(){return{answers:[],sideRadius:{90:"0px 80px 0px 0px",180:"0px 0px 80px 0px",270:"0px 0px 0px 80px"},counter:0,timeInSeconds:0,interval:0}},computed:Object(i["a"])({},Object(c["c"])({examTime:"GET_QUESTIONNAIRE_DETAILS",checkResults:"GET_EXAM_QUESTIONNAIRE_RESULT"})),watch:{time:function(e){e<1?clearInterval(this.interval):(this.timeInSeconds=60*this.time,localStorage.setItem("time",e),this.timer())},timeAfterRefresh:function(e){this.timer()}},created:function(){this.GET_EXAM_RESULT()},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])({GET_EXAM_RESULT:"ACTION_ADD_EXAM_QUESTIONNAIRE"})),{},{timer:function(){var e=this,t={refs:this.$refs},r=t.refs,n={passToParent:this.passToParent},a=n.passToParent,i={sideRadius:this.sideRadius},c=i.sideRadius,s=this.time,u={showTime:this.showTime},l=u.showTime,d={persistTime:this.setPersistedTime},b=d.persistTime,f={start360:this.$refs.start360},p=f.start360,m={outer360:this.$refs.outer360},O=m.outer360;p.style.borderRadius="80px 0px 0px 0px",O.style.borderRadius="80px 0px 0px 0px";var h={timeInSeconds:this.timeInSeconds},g=h.timeInSeconds;Math.round(g/4);r.timeDisplay.innerText=l(g),console.log(s),g=parseInt(localStorage.getItem("seconds"))||g;var j=setInterval((function(){s=localStorage.getItem("time");var t=360/(60*s)*(60*s-g);console.log(s),p.style.transform="rotate(".concat(t,"deg)"),r.timeDisplay.innerText=l(g),b(g),Math.round(t)>=360&&(clearInterval(j),localStorage.removeItem("seconds"),e.$toast({component:o["a"],props:{title:"Your time is up!",icon:"XOctagonIcon",variant:"danger"}}),a()),Math.round(t)>=90&&(r[90].classList.add("progressed"),r[90].style.borderRadius=c[90]),Math.round(t)>=180&&(r[180].classList.add("progressed"),r[180].style.borderRadius=c[180]),Math.round(t)>=270&&(O.style.display="none",r[270].classList.add("progressed"),r[270].style.borderRadius=c[270]),270==Math.round(t)&&e.$toast({component:o["a"],props:{position:"top-center",title:"15 Mins Left",icon:"AlertOctagonIcon",variant:"danger",timeout:15e3}}),g-=1}),1e3);this.interval=j},showTime:function(e){var t=new Date("2021/01/01 08:00:00"),r=new Date(t.setSeconds(t.getSeconds()+e)),n=r.getUTCHours(),a=r.getMinutes(),i=r.getSeconds();function o(e){var t=[1,2,3,4,5,6,7,8,9],r="00";return e&&(r=t.includes(e)?"0".concat(e):e),r}return"".concat(o(n),":").concat(o(a),":").concat(o(i))},passToParent:function(){this.$emit("timesUp",!0)},setPersistedTime:function(e){localStorage.setItem("seconds",e)}})},u=s,l=(r("2707"),r("2877")),d=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports},d580:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("2b0e"),a=r("c637"),i=r("a723"),o=r("cf75"),c=Object(o["d"])({bgVariant:Object(o["c"])(i["t"]),borderVariant:Object(o["c"])(i["t"]),tag:Object(o["c"])(i["t"],"div"),textVariant:Object(o["c"])(i["t"])},a["i"]);n["default"].extend({props:c})}}]);
//# sourceMappingURL=chunk-771a8b36.8b614d49.js.map
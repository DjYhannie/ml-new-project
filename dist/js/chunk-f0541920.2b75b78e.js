(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0541920"],{"14ce":function(e,t,r){e.exports=r.p+"img/register-shared-goals.50fa61a3.svg"},"29e1":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-wrapper auth-v2"},[a("b-row",{staticClass:"auth-inner m-0"},[a("b-link",{staticClass:"brand-logo"},[a("b-img",{attrs:{src:r("5179")}}),a("h2",{staticClass:"brand-text text-danger ml-1"},[e._v(" ML OEx ")])],1),a("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[a("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[a("b-img",{attrs:{fluid:"",src:e.imgUrl,alt:"Login V2"}})],1)]),a("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[a("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[a("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[e._v(" ML OEx Mlhuillier Online Exam ")]),a("b-card-text",{staticClass:"mb-2"},[e._v(" Please fill in input fields ")]),a("validation-observer",{ref:"registerValidation"},[a("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(t){return t.preventDefault(),e.validationForm(t)}}},[a("b-form-group",{attrs:{label:"Name","label-for":"name"}},[a("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"name",state:!(r.length>0)&&null,name:"name",placeholder:"Full Name"},model:{value:e.register.username,callback:function(t){e.$set(e.register,"username",t)},expression:"register.username"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email"}},[a("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"email",state:!(r.length>0)&&null,name:"email",placeholder:"name.test@mlhuillier.com"},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1),a("b-form-group",{attrs:{label:"Password","label-for":"password"}},[a("validation-provider",{attrs:{rules:"required",name:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"password",state:!(r.length>0)&&null,type:e.passwordFieldType,name:"password",placeholder:"············"},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIcon},on:{click:e.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1),a("b-form-group",[a("div",{staticClass:"d-flex justify-content-between"},[a("label",{attrs:{for:"confirmPassword"}},[e._v("Confirm Password")])]),a("validation-provider",{attrs:{rules:"required|confirmPassword:@password",name:"confirmPassword"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"confirmPassword",state:!(r.length>0)&&null,type:e.passwordFieldType,name:"confirmPassword",placeholder:"············"},model:{value:e.register.password_confirmation,callback:function(t){e.$set(e.register,"password_confirmation",t)},expression:"register.password_confirmation"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIcon},on:{click:e.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1),a("b-button",{attrs:{type:"submit",variant:"danger",block:""}},[e._v(" Register ")])],1)],1),a("b-card-text",{staticClass:"text-center mt-2"},[a("span",[e._v("Already have an account? ")]),a("b-link",{attrs:{to:{name:"login"}}},[a("span",[e._v(" Sign in")])])],1)],1)],1)],1)],1)},n=[],s=r("1da1"),i=(r("96cf"),r("7bb1")),o=r("a15b"),c=r("b28b"),l=r("aa59"),u=r("8226"),p=r("4797"),d=r("ccc0"),f=r("5e12"),b=r("d6e4"),m=r("4968"),g=r("4918"),v=r("11de"),O=r("1947"),w=r("8f03"),j=r("b91d"),h=r("4360"),C=r("223c");Object(i["c"])("confirmPassword",{params:["target"],validate:function(e,t){var r=t.target;return e===r},message:"Password confirmation does not match"});var P={components:{BRow:o["a"],BCol:c["a"],BLink:l["a"],BFormGroup:u["a"],BFormInput:p["a"],BInputGroupAppend:d["a"],BInputGroup:f["a"],BCardText:b["a"],BCardTitle:m["a"],BImg:g["a"],BForm:v["a"],BButton:O["a"],ValidationProvider:i["b"],ValidationObserver:i["a"]},mixins:[j["a"]],data:function(){return{register:{status:"",username:"",password:"",email:"",password_confirmation:""},sideImg:r("14ce"),required:w["b"],email:w["a"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===h["a"].state.appConfig.layout.skin?(this.sideImg=r("14ce"),this.sideImg):this.sideImg}},methods:{validationForm:function(){var e=this;console.log("VUE COMPONENT",this.register),this.$refs.registerValidation.validate().then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(r),!r){t.next=9;break}return e.$router.push({name:"user-login"}),t.next=5,e.$store.dispatch("Register",e.register);case 5:a=t.sent,console.log("Response Component",a),e.$toast({component:C["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}}),setTimeout((function(){e.$router.push({name:"user-login"})}),2e3);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},A=P,x=(r("e4b2"),r("2877")),y=Object(x["a"])(A,a,n,!1,null,null,null);t["default"]=y.exports},3656:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("d82f"),o=r("cf75"),c=r("46bc");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=Object(o["d"])(Object(i["j"])(c["b"],["append"]),s["T"]),f=a["default"].extend({name:s["T"],functional:!0,props:d,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(c["a"],Object(n["a"])(a,{props:u(u({},r),{},{append:!1})}),s)}})},"3f60":function(e,t,r){},"46bc":function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),o=r("cf75"),c=r("d190"),l=Object(o["d"])({append:Object(o["c"])(i["g"],!1),id:Object(o["c"])(i["t"]),isText:Object(o["c"])(i["g"],!1),tag:Object(o["c"])(i["t"],"div")},s["R"]),u=a["default"].extend({name:s["R"],functional:!0,props:l,render:function(e,t){var r=t.props,a=t.data,s=t.children,i=r.append;return e(r.tag,Object(n["a"])(a,{class:{"input-group-append":i,"input-group-prepend":!i},attrs:{id:r.id}}),r.isText?[e(c["a"],s)]:s)}})},5179:function(e,t){e.exports="data:image/png;base64,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"},"5e12":function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),o=r("9b76"),c=r("8690"),l=r("365c"),u=r("cf75"),p=r("ccc0"),d=r("3656"),f=r("d190");function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=Object(u["d"])({append:Object(u["c"])(i["t"]),appendHtml:Object(u["c"])(i["t"]),id:Object(u["c"])(i["t"]),prepend:Object(u["c"])(i["t"]),prependHtml:Object(u["c"])(i["t"]),size:Object(u["c"])(i["t"]),tag:Object(u["c"])(i["t"],"div")},s["Q"]),g=a["default"].extend({name:s["Q"],functional:!0,props:m,render:function(e,t){var r=t.props,a=t.data,s=t.slots,i=t.scopedSlots,u=r.prepend,m=r.prependHtml,g=r.append,v=r.appendHtml,O=r.size,w=i||{},j=s(),h={},C=e(),P=Object(l["a"])(o["D"],w,j);(P||u||m)&&(C=e(d["a"],[P?Object(l["b"])(o["D"],h,w,j):e(f["a"],{domProps:Object(c["a"])(m,u)})]));var A=e(),x=Object(l["a"])(o["a"],w,j);return(x||g||v)&&(A=e(p["a"],[x?Object(l["b"])(o["a"],h,w,j):e(f["a"],{domProps:Object(c["a"])(v,g)})])),e(r.tag,Object(n["a"])(a,{staticClass:"input-group",class:b({},"input-group-".concat(O),O),attrs:{id:r.id||null,role:"group"}}),[C,Object(l["b"])(o["h"],h,w,j),A])}})},b91d:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}},ccc0:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("d82f"),o=r("cf75"),c=r("46bc");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=Object(o["d"])(Object(i["j"])(c["b"],["append"]),s["S"]),f=a["default"].extend({name:s["S"],functional:!0,props:d,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(c["a"],Object(n["a"])(a,{props:u(u({},r),{},{append:!0})}),s)}})},d190:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),o=r("cf75"),c=Object(o["d"])({tag:Object(o["c"])(i["t"],"div")},s["U"]),l=a["default"].extend({name:s["U"],functional:!0,props:c,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(r.tag,Object(n["a"])(a,{staticClass:"input-group-text"}),s)}})},d6e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),o=r("cf75"),c=Object(o["d"])({textTag:Object(o["c"])(i["t"],"p")},s["o"]),l=a["default"].extend({name:s["o"],functional:!0,props:c,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),s)}})},e4b2:function(e,t,r){"use strict";r("3f60")}}]);
//# sourceMappingURL=chunk-f0541920.2b75b78e.js.map
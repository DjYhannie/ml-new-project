(function(e){function t(t){for(var a,r,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aeb7a":"c079ad4c","chunk-2d22bcc3":"99d4e3a9","chunk-39eb9497":"a4ad220c","chunk-45492f1c":"4320d2fb","chunk-641ab6ea":"b18412ab","chunk-5c8485b7":"07d3c0d4","chunk-39cf6978":"8fa9911b","chunk-3b894795":"e04635ef","chunk-5e4f0d46":"5a8467a9","chunk-7334e540":"bcdd8121","chunk-5eff8ae1":"78e6362d","chunk-37d2a9c2":"10869dda","chunk-12d9efb7":"09c6072e","chunk-2b1ba9a8":"32e09ecd","chunk-34292ab8":"4249c002","chunk-51239693":"890d6fa4","chunk-6bdbf4e1":"bcdc7e78","chunk-89e91504":"55225a2d","chunk-f0541920":"2b75b78e","chunk-916925be":"71652c93","chunk-25f46d9e":"8d3c6da9","chunk-25c631f5":"e6094061","chunk-278aa8ac":"97f42042","chunk-25cef149":"cb1cff08","chunk-45389511":"484af039","chunk-e606e7c4":"ba12658e"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-39eb9497":1,"chunk-39cf6978":1,"chunk-3b894795":1,"chunk-7334e540":1,"chunk-5eff8ae1":1,"chunk-2b1ba9a8":1,"chunk-34292ab8":1,"chunk-51239693":1,"chunk-6bdbf4e1":1,"chunk-89e91504":1,"chunk-f0541920":1,"chunk-25f46d9e":1,"chunk-25c631f5":1,"chunk-278aa8ac":1,"chunk-25cef149":1,"chunk-45389511":1,"chunk-e606e7c4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0aeb7a":"31d6cfe0","chunk-2d22bcc3":"31d6cfe0","chunk-39eb9497":"0e5187bb","chunk-45492f1c":"31d6cfe0","chunk-641ab6ea":"31d6cfe0","chunk-5c8485b7":"31d6cfe0","chunk-39cf6978":"86ecc42d","chunk-3b894795":"56ae2f3d","chunk-5e4f0d46":"31d6cfe0","chunk-7334e540":"72ef4397","chunk-5eff8ae1":"4dbea570","chunk-37d2a9c2":"31d6cfe0","chunk-12d9efb7":"31d6cfe0","chunk-2b1ba9a8":"7f9d9138","chunk-34292ab8":"7588fbd8","chunk-51239693":"7588fbd8","chunk-6bdbf4e1":"7588fbd8","chunk-89e91504":"7588fbd8","chunk-f0541920":"7588fbd8","chunk-916925be":"31d6cfe0","chunk-25f46d9e":"82fce610","chunk-25c631f5":"82fce610","chunk-278aa8ac":"4388dc75","chunk-25cef149":"d37efec9","chunk-45389511":"42cb0a4a","chunk-e606e7c4":"fd79da1b"}[e]+".css",o=s.p+a,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],f.parentNode.removeChild(f),n(u)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1dff":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o}));var a={},r={},o={app:{appName:"ML OEx",appLogoImage:n("ed29")},layout:{isRTL:!1,skin:"light",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!1},navbar:{type:"floating",backgroundColor:""},footer:{type:"static"},customizer:!0,enableScrollToTop:!0}}},"32dd":function(e,t,n){"use strict";var a=n("1da1"),r=(n("96cf"),n("7f80")),o={isAuthenticated:function(e){return!!e.user},StatePosts:function(e){return e.posts},StateUser:function(e){return console.log(e.user),e.user},StateToken:function(e){return e.token}},u={Register:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,r["a"].post("/register",t);case 3:return o=n.sent,console.log("REGISTRATION RESPONSE",o),n.t0=console,n.next=8,t;case 8:return n.t1=n.sent,n.t0.log.call(n.t0,"AUTH.JS",n.t1),a("setUser",t),n.abrupt("return",o);case 12:case"end":return n.stop()}}),n)})))()},LogIn:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,console.log("Calling Admin..."),n.next=4,r["a"].post("/adminlogin",t);case 4:return o=n.sent,console.log("ADMIN RESPONSE",o),a("setUser",o.data.user),a("setToken",o.data.token),sessionStorage.setItem("token",o.data.token),n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)})))()},ResetPassword:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,console.log("RESET__"),console.log(t),n.next=5,r["a"].post("/send/resetpassword",t);case 5:return o=n.sent,console.log("RESET PASSWORD",o),a("setUser",o.data.user),n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()},UserLogin:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,console.log("Calling Normal User..."),n.next=4,r["a"].post("/login",t);case 4:return o=n.sent,console.log("USER RESPONSE",o),o.data.token&&(console.log(o.data.user),a("setUser",o.data.user),a("setToken",o.data.token),sessionStorage.setItem("token",o.data.token)),n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})))()},LogOut:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=null,n("logOut",a),console.log("TOKEN_",a);case 4:case"end":return t.stop()}}),t)})))()}},c={setUser:function(e,t){e.user=t},StatePosts:function(e,t){e.posts=t},setToken:function(e,t){e.token=t},LogOut:function(e){e.user=null,e.posts=null,e.token=null,window.sessionStorage.clear()}},s={user:null,posts:null,token:sessionStorage.token?sessionStorage.getItem("token"):null};t["a"]={state:s,getters:o,actions:u,mutations:c}},4131:function(e,t,n){},4360:function(e,t,n){"use strict";var a,r,o,u,c=n("2b0e"),s=n("2f62"),i=n("0e44"),l=n("1da1"),d=(n("96cf"),n("7f80")),f={state:{namespaced:!0,questionnaires:{},questionnaire:[],questions:{},createquestion:"",show:!0},getters:{GET_QUESTIONNAIRE:function(e){return e.questionnaires},GET_QUESTIONNAIRES:function(e){return e.questionnaire}},actions:{ACTION_GET_QUESTIONNAIRE:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,d["a"].get("/questionnaire",{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return a=t.sent,n("SET_QUESTIONNAIRE",a.data.data),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))()},ACTION_ADD_QUESTIONNAIRE:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.dispatch,n.next=3,d["a"].post("/questionnaire/create",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return o=n.sent,r("ACTION_GET_QUESTIONNAIRE"),a("GET_QUESTIONNAIRE",o.data.data),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))()},ACTION_UPDATE_QUESTIONNAIRE:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.questionnaire,n.next=3,d["a"].post("questionnaires/update/".concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return o=n.sent,console.log(o),n.next=7,a("UPDATE_QUESTIONNAIRE",r);case 7:return n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})))()},ACTION_DELETE_QUESTIONNAIRE:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.next=3,d["a"].delete("/questionnaire/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return r=n.sent,console.log(r),n.next=7,a("ACTION_GET_QUESTIONNAIRE");case 7:return n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))()},ACTION_SEND_QUESTIONNAIRE:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].post("/send/invitation",e,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 2:return n=t.sent,console.log(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}},mutations:{SET_QUESTIONNAIRE:function(e,t){e.questionnaires=t},UPDATE_QUESTIONNAIRE:function(e,t){e.questionnaire=t}}},h=n("32dd"),p=n("ade3"),m=n("2909"),b=(n("d81d"),n("159b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),"questions/MUTATION_SET_QUESTIONS"),g="questions/MUTATION_ADD_QUESTION",k={state:{namespaced:!0,questions:{},courses:[],show:!0,index:null,token:sessionStorage.getItem("token")},getters:{GET_INDEX:function(e){return e.index},GET_QUESTION:function(e){return e.questions},GET_COURSES:function(e){return e.courses}},actions:{ACTION_GET_QUESTIONS:function(e){var t=this,n=e.commit;d["a"].get("/questions",{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}).then((function(e){return e})).then((function(e){var a=e.data.data.map((function(e){return e.choices=JSON.parse(e.choices),e}));t.courses=[],a.forEach((function(e){t.courses.push(e.course)})),t.courses=Object(m["a"])(new Set(t.courses)),console.log(a),n("SET_QUESTION",a),n("SET_COURSES",t.courses)}))},ACTION_ADD_QUESTION:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.dispatch,n.next=3,d["a"].post("/questions/add",t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return o=n.sent,console.log("ADD QUESTION",o.data.questions),a("SET_QUESTION",o.data.questions),n.next=8,r("ACTION_GET_QUESTIONS");case 8:return n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()},ACTION_DELETE_QUESTION:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.next=3,d["a"].delete("questions/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return r=n.sent,console.log(r),n.next=7,a("ACTION_GET_QUESTIONS");case 7:return n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))()},ACTION_UPDATE_QUESTION:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.questions,n.next=3,d["a"].post("questions/update/".concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:return o=n.sent,console.log(o),n.next=7,a("ACTION_GET_QUESTIONS",r);case 7:return n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})))()}},mutations:(a={SET_QUESTION:function(e,t){e.questions=t},SET_COURSES:function(e,t){e.courses=t}},Object(p["a"])(a,b,(function(e,t){e.questions=t})),Object(p["a"])(a,g,(function(e,t){e.questions=t})),a)},T=n("bc3a"),E=n.n(T),O=n("ab13"),y={auth:{state:{user:sessionStorage.user?JSON.parse(sessionStorage.getItem("user")):null,token:sessionStorage.token?sessionStorage.getItem("token"):null}},state:{namespaced:!0,user:{},users:{role:"admin"}},getters:(r={},Object(p["a"])(r,O["c"],(function(e){return e.user})),Object(p["a"])(r,O["d"],(function(e){return e.users})),Object(p["a"])(r,"getUser",(function(e){return e.user})),Object(p["a"])(r,"token",(function(e){return e.token})),r),actions:(o={},Object(p["a"])(o,O["a"],(function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,E.a.post("/adminlogin",t).then((function(e){a(O["e"],e.data),console.log(e)})).catch((function(e){console.log("error",e)}));case 2:case"end":return n.stop()}}),n)})))()})),Object(p["a"])(o,O["b"],(function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,E.a.post("/register",t).then((function(e){a(O["a"],e.data),console.log(e)})).catch((function(e){console.log("error",e)}));case 2:case"end":return n.stop()}}),n)})))()})),o),mutations:(u={},Object(p["a"])(u,O["e"],(function(e,t){e.user=t})),Object(p["a"])(u,O["f"],(function(e,t){e.user=t})),u)},v=n("1dff"),S={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1},getters:{currentBreakPoint:function(e){var t=e.windowWidth;return t>=v["a"].xl?"xl":t>=v["a"].lg?"lg":t>=v["a"].md?"md":t>=v["a"].sm?"sm":"xs"}},mutations:{UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},TOGGLE_OVERLAY:function(e,t){e.shallShowOverlay=void 0!==t?t:!e.shallShowOverlay}},actions:{}},A=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:v["c"].layout.isRTL,skin:localStorage.getItem("vuexy-skin")||v["c"].layout.skin,routerTransition:v["c"].layout.routerTransition,type:v["c"].layout.type,contentWidth:v["c"].layout.contentWidth,menu:{hidden:v["c"].layout.menu.hidden},navbar:{type:v["c"].layout.navbar.type,backgroundColor:v["c"].layout.navbar.backgroundColor},footer:{type:v["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(e){e.layout.isRTL=!e.layout.isRTL,document.documentElement.setAttribute("dir",e.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(e,t){e.layout.skin=t,localStorage.setItem("vuexy-skin",t),"dark"===t?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(e,t){e.layout.routerTransition=t},UPDATE_LAYOUT_TYPE:function(e,t){e.layout.type=t},UPDATE_CONTENT_WIDTH:function(e,t){e.layout.contentWidth=t},UPDATE_NAV_MENU_HIDDEN:function(e,t){e.layout.menu.hidden=t},UPDATE_NAVBAR_CONFIG:function(e,t){Object.assign(e.layout.navbar,t)},UPDATE_FOOTER_CONFIG:function(e,t){Object.assign(e.layout.footer,t)}},actions:{}}),_={namespaced:!0,state:{isVerticalMenuCollapsed:v["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(e,t){e.isVerticalMenuCollapsed=t}},actions:{}};c["default"].use(s["a"]);t["a"]=new s["a"].Store({modules:{app:S,appConfig:A,verticalMenu:_,questions:k,users:y,auth:h["a"],questionnaire:f},plugins:[Object(i["a"])()]})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r,o=n("2b0e"),u=n("51c2"),c=n("dbbe"),s=n("b1e0"),i=n("a6f4"),l=n("bc3a"),d=n.n(l),f=n("a18c"),h=n("4360"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",class:[e.skinClasses],attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},m=[],b=(n("d3b7"),n("3ca3"),n("ddb0"),n("498a"),n("a9e3"),n("fb6a"),n("1dff")),g=n("04b0"),k=n("b8f2"),T=n("16ce"),E=function(){return Promise.all([n.e("chunk-916925be"),n.e("chunk-278aa8ac"),n.e("chunk-45389511")]).then(n.bind(null,"03d1"))},O=function(){return Promise.all([n.e("chunk-916925be"),n.e("chunk-278aa8ac"),n.e("chunk-25cef149")]).then(n.bind(null,"2607"))},y=function(){return n.e("chunk-2d22bcc3").then(n.bind(null,"f102"))},v={components:{LayoutHorizontal:O,LayoutVertical:E,LayoutFull:y},computed:{layout:function(){return"full"===this.$route.meta.layout?"layout-full":"layout-".concat(this.contentLayoutType)},contentLayoutType:function(){return this.$store.state.appConfig.layout.type}},beforeCreate:function(){for(var e=["primary","secondary","success","info","warning","danger","light","dark"],t=0,n=e.length;t<n;t++)b["b"][e[t]]=Object(T["a"])("--".concat(e[t]),document.documentElement).value.trim();for(var a=["xs","sm","md","lg","xl"],r=0,o=a.length;r<o;r++)b["a"][a[r]]=Number(Object(T["a"])("--breakpoint-".concat(a[r]),document.documentElement).value.slice(0,-2));var u=b["c"].layout.isRTL;document.documentElement.setAttribute("dir",u?"rtl":"ltr")},setup:function(){var e=Object(k["a"])(),t=e.skin,n=e.skinClasses;"dark"===t.value&&document.body.classList.add("dark-layout"),Object(g["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),h["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var a=Object(T["b"])(),r=a.width;return Object(i["watch"])(r,(function(e){h["a"].commit("app/UPDATE_WINDOW_WIDTH",e)})),{skinClasses:n}}},S=v,A=n("2877"),_=Object(A["a"])(S,p,m,!1,null,null,null),I=_.exports,N=(n("b0c0"),n("5530")),R=n("0a35"),w={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-danger"}},render:function(e,t){var n=t.props,a=t.data,r=e(R[n.icon],Object(N["a"])({props:{size:n.size}},a));if(!n.badge)return r;var o=e("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return e("span",{staticClass:"feather-icon position-relative"},[r,o])}},C=w,U=(n("8bd0"),Object(A["a"])(C,a,r,!1,null,null,null)),x=U.exports;o["default"].component(x.name,x);var j=n("2b88"),P=n.n(j);o["default"].use(P.a);var D=n("6c42");n("cc0f");o["default"].use(D["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),d.a.defaults.baseURL="http://127.0.0.1:8000/api/",o["default"].use(u["a"]),o["default"].use(c["a"]),o["default"].use(s["a"]),o["default"].use(i["default"]),n("4131"),n("78a7"),o["default"].config.productionTip=!1,new o["default"]({router:f["a"],store:h["a"],render:function(e){return e(I)}}).$mount("#app")},"602d4":function(e,t,n){},"78a7":function(e,t,n){},"7f80":function(e,t,n){"use strict";var a=n("2b0e"),r=n("bc3a"),o=n.n(r),u=o.a.create({baseURL:"http://127.0.0.1:8000/api/",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(sessionStorage.getItem("token"))},withCredentials:!1});a["default"].prototype.$http=u,t["a"]=u},"8bd0":function(e,t,n){"use strict";n("602d4")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("32dd"),r=n("2b0e"),o=n("8c4f");r["default"].use(o["a"]);var u=new o["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/home",name:"home",component:function(){return n.e("chunk-45492f1c").then(n.bind(null,"bb51"))},meta:{pageTitle:"Home",breadcrumb:[{text:"Home",active:!0}],requiresAuth:!0}},{path:"/questions",name:"questions",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-916925be"),n.e("chunk-5e4f0d46"),n.e("chunk-25c631f5")]).then(n.bind(null,"66ba"))},meta:{pageTitle:"Questions",breadcrumb:[{text:"Questions",active:!0}],requiresAuth:!0}},{path:"/examinees",name:"examinees",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5e4f0d46"),n.e("chunk-7334e540")]).then(n.bind(null,"574d"))},meta:{pageTitle:"Examinees",breadcrumb:[{text:"Examinees",active:!0}],requiresAuth:!0}},{path:"/questionnaire",name:"questionnaire",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-12d9efb7"),n.e("chunk-2b1ba9a8")]).then(n.bind(null,"2ea7"))},meta:{pageTitle:"Questionnaire",breadcrumb:[{text:"Questionnaire",active:!0}],requiresAuth:!0}},{path:"/update-profile",name:"update-profile",component:function(){return n.e("chunk-2d0aeb7a").then(n.bind(null,"0af9"))},meta:{pageTitle:"UpdateProfile",breadcrumb:[{text:"UpdateProfile",active:!0}],requiresAuth:!0}},{path:"/sample",name:"sample",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-916925be"),n.e("chunk-25f46d9e")]).then(n.bind(null,"ca845"))},meta:{layout:"full",requiresAuth:!0}},{path:"/",name:"login",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-12d9efb7"),n.e("chunk-89e91504")]).then(n.bind(null,"a55b"))},meta:{layout:"full",requiresAuth:!1}},{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-e606e7c4").then(n.bind(null,"d80f"))},meta:{layout:"full",requiresAuth:!1}},{path:"/user-login",name:"user-login",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-12d9efb7"),n.e("chunk-6bdbf4e1")]).then(n.bind(null,"d7d6"))},meta:{layout:"full",requiresAuth:!1}},{path:"/reset-password",name:"reset-password",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-12d9efb7"),n.e("chunk-34292ab8")]).then(n.bind(null,"281e"))},meta:{layout:"full",requiresAuth:!1}},{path:"/update-password",name:"update-password",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-12d9efb7"),n.e("chunk-51239693")]).then(n.bind(null,"c3fd"))},meta:{layout:"full",requiresAuth:!1}},{path:"/registration",name:"registration",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5eff8ae1"),n.e("chunk-37d2a9c2"),n.e("chunk-12d9efb7"),n.e("chunk-f0541920")]).then(n.bind(null,"29e1"))},meta:{layout:"full",requiresAuth:!1}},{path:"/user/take-exam",name:"user/take-exam",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5c8485b7"),n.e("chunk-39cf6978")]).then(n.bind(null,"75f0"))},meta:{pageTitle:"Take Exam",breadcrumb:[{text:"Take Examination",active:!0}],requiresAuth:!0}},{path:"/user/baseTimer",name:"user/baseTimer",component:function(){return n.e("chunk-39eb9497").then(n.bind(null,"bd71"))},meta:{pageTitle:"Base Timer",breadcrumb:[{text:"Base Timer",active:!0}],requiresAuth:!0}},{path:"/user/history",name:"user/history",component:function(){return Promise.all([n.e("chunk-641ab6ea"),n.e("chunk-5c8485b7"),n.e("chunk-3b894795")]).then(n.bind(null,"9482"))},meta:{pageTitle:"History",breadcrumb:[{text:"History",active:!0}],requiresAuth:!0}},{path:"*",redirect:"error-404"}]});u.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")})),u.beforeEach((function(e,t,n){var r=a["a"].getters.StateToken;e.matched.some((function(e){return e.meta.requiresAuth}))&&(r?console.log(r):n({name:"login"})),n()})),t["a"]=u},ab13:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return s}));var a="users/ACTION_SET_LOGIN",r="users/MUTATION_SET_LOGIN",o="users/GETTER_USER",u="users/GETTER_USERS",c="users/ACTION_SET_REGISTER",s="users/MUTATION_SET_REGISTER"},b8f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("a6f4"),r=n("4360");function o(){var e=Object(a["computed"])({get:function(){return r["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){r["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),t=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.isRTL},set:function(e){r["a"].commit("appConfig/TOGGLE_RTL",e)}}),n=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.skin},set:function(e){r["a"].commit("appConfig/UPDATE_SKIN",e)}}),o=Object(a["computed"])((function(){return"bordered"===n.value?"bordered-layout":"semi-dark"===n.value?"semi-dark-layout":null})),u=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.routerTransition},set:function(e){r["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",e)}}),c=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.type},set:function(e){r["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",e)}});Object(a["watch"])(c,(function(e){"horizontal"===e&&"semi-dark"===n.value&&(n.value="light")}));var s=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.contentWidth},set:function(e){r["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",e)}}),i=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.menu.hidden},set:function(e){r["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",e)}}),l=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.navbar.backgroundColor},set:function(e){r["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:e})}}),d=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.navbar.type},set:function(e){r["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:e})}}),f=Object(a["computed"])({get:function(){return r["a"].state.appConfig.layout.footer.type},set:function(e){r["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:e})}});return{isVerticalMenuCollapsed:e,isRTL:t,skin:n,skinClasses:o,routerTransition:u,navbarBackgroundColor:l,navbarType:d,footerType:f,layoutType:c,contentWidth:s,isNavMenuHidden:i}}},cc0f:function(e,t,n){},ed29:function(e,t,n){e.exports=n.p+"img/logo.3326599f.svg"}});
//# sourceMappingURL=app.3639f8af.js.map
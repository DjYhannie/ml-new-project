(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03216d5a"],{"03f3":function(t,e,r){"use strict";r("158e")},"158e":function(t,e,r){},"1bbb":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("2b0e"),a=r("b42e"),s=r("c637"),i=r("a723"),o=r("cf75");function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=Object(o["d"])({fluid:Object(o["c"])(i["j"],!1),tag:Object(o["c"])(i["t"],"div")},s["u"]),l=n["default"].extend({name:s["u"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,s=e.children,i=r.fluid;return t(r.tag,Object(a["a"])(n,{class:c({container:!(i||""===i),"container-fluid":!0===i||""===i},"container-".concat(i),i&&!0!==i)}),s)}})},9482:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("b-form-group",{staticClass:"mb-0",attrs:{"label-for":"filter-input","label-cols-sm":"11","label-size":"sm"}},[r("b-input-group",[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{attrs:{icon:"search"}})],1),r("b-form-input",{attrs:{id:"filter-input",type:"search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),r("b-form-group",{staticClass:"mb-1",attrs:{"label-for":"per-page-select","label-cols-sm":"8","label-size":"sm"}},[r("label",{attrs:{for:"per-page"}},[t._v("Per Page")]),r("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),r("b-table",{attrs:{id:"table",bordered:"",striped:"",hover:"",items:t.historyData,fields:t.fields,filter:t.filter,"show-empty":"","empty-text":"No matching records found"},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[r("p",[t._v(t._s(e.item.current.title))])]}},{key:"cell(score)",fn:function(e){return[r("p",[t._v(t._s(e.item.current.score)+"/ "+t._s(e.item.current.randomizedQuestions.length))])]}},{key:"cell(remarks)",fn:function(e){return[r("p",[t._v(t._s(e.item.current.remarks))])]}},{key:"cell(action)",fn:function(e){return[r("b-button",{on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"Show")+" Details ")])]}},{key:"row-details",fn:function(e){return[r("b-card",[r("b-container",{staticClass:"bv-example-row"},t._l(e.item.data,(function(e){return r("div",{key:e,staticClass:"row"},[r("div",{staticClass:"col"},[t._v(t._s(e.title))]),r("br"),r("div",{staticClass:"col"},[t._v(t._s(e.score))]),r("br"),r("div",{staticClass:"col"},[t._v(t._s(e.remarks))]),r("br"),r("div",{staticClass:"col"},[t._v(t._s(e.attempts))]),r("br"),r("div",{staticClass:"col"},[r("b-button",{on:{click:function(r){return t.view(e)}}},[t._v("View")]),r("br"),r("br")],1),r("br")])})),0),r("br"),r("br"),r("br")],1)]}}])},[r("br"),r("br"),r("br"),r("br")]),r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"current-page":t.currentPage,"aria-controls":"table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},a=[],s=r("1da1"),i=r("5530"),o=(r("d81d"),r("4de4"),r("159b"),r("96cf"),r("29a1")),c=r("1947"),u=r("b28b"),l=r("a15b7"),b=r("205f"),p=r("26d2"),f=r("8226"),d=r("4797"),_=r("3656"),m=r("5e12"),g=r("0759"),v=r("8361"),h=r("1bbb"),E=r("2f62"),S={components:{BTable:o["a"],BButton:c["a"],BCol:u["a"],BRow:l["a"],BCard:b["a"],BPagination:p["a"],BFormGroup:f["a"],BFormInput:d["a"],BInputGroupPrepend:_["a"],BInputGroup:m["a"],BIcon:g["a"],BFormSelect:v["a"],BContainer:h["a"]},data:function(){return{show:!0,perPage:3,currentPage:1,filter:null,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],historyData:[],attempts_data:[],fields:[{key:"title",sortable:!0},{key:"score",sortable:!1},{key:"remarks",label:"remarks",sortable:!0},{key:"attempts",sortable:!0},{key:"action"}],selectedItem:{}}},computed:Object(i["a"])({rows:function(){return this.historyData.length}},Object(E["c"])({checkResults:"GET_EXAM_QUESTIONNAIRE_RESULT",users:"GET_USERS",results:"GET_RESULT_BY_USERID"})),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.GET_USERS(),e.next=3,t.GET_RESULT_BY_USERID();case 3:t.attempts(),t.testing();case 5:case"end":return e.stop()}}),e)})))()},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(E["b"])({GET_EXAM_RESULT:"ACTION_ADD_EXAM_QUESTIONNAIRE",GET_USERS:"ACTION_GET_USERS",GET_RESULT_BY_USERID:"ACTION_GET_RESULT_BY_USERID"})),Object(E["d"])({SET_RESULT:"SET_RESULT"})),{},{view:function(t){this.SET_RESULT(t),this.$router.push({name:"user/view-details"})},attempts:function(){var t=this.results,e=t.map((function(t){return t.questionnaire_id})),r=e.filter((function(t,e,r){return r.indexOf(t)===e}));r.forEach((function(t){console.log(t,e.filter((function(e){return t==e})).length)}))},testing:function(){var t=this,e=this.results.map((function(t){return t.questionnaire_id})),r=e.filter((function(t,e,r){return r.indexOf(t)===e})),n=r.map((function(e){var r=t.results.filter((function(t){return t.questionnaire_id==e})),n=r.sort((function(t,e){return e.id-t.id}));return{current:n[0],data:n}})),a=[];a.push(n),a[0].map((function(e){console.log("DATA",e),t.attempts_data.push(e.data);var r=JSON.parse(e.current.result);e.current["attempts"]=e.data.length,r&&(e.current["score"]=r.score,r.is_pass?e.current["remarks"]="passed":e.current["remarks"]="failed"),t.historyData.push(e)})),console.log("HISTORY DATA",this.historyData)}})},T=S,k=(r("03f3"),r("2877")),w=Object(k["a"])(T,n,a,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-03216d5a.ce543126.js.map
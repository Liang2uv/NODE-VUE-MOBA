(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f59f46a"],{"0d42":function(t,s,a){},"5d88":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.model?i("div",{staticClass:"page-hero"},[i("div",{staticClass:"topbar bg-black py-2 px-3 d-flex text-white ai-center"},[i("img",{attrs:{src:a("9d64"),height:"30"}}),t._m(0),i("router-link",{staticClass:"fs-xs",attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),i("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[i("div",{staticClass:"info text-white p-3 h-100 d-flex flex-colum jc-end"},[i("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),i("h2",{staticClass:"my-2 fs-sm"},[t._v(t._s(t.model.name))]),i("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.category.map((function(t){return t.name})).join("/")))]),i("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?i("div",{staticClass:"scores d-flex ai-center"},[i("span",[t._v("难度")]),i("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),i("span",[t._v("技能")]),i("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),i("span",[t._v("攻击")]),i("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),i("span",[t._v("生存")]),i("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),i("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v("皮肤：2 >")])],1)])]),i("div",[t._m(1),i("swiper",[i("swiper-slide",[i("div",[i("div",{staticClass:"p-3 bg-white border-bottom"},[i("div",{staticClass:"d-flex"},[i("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[i("i",{staticClass:"iconfont icon-menu"}),t._v(" 英雄介绍视频 ")]),i("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[i("i",{staticClass:"iconfont icon-menu"}),t._v(" 一图识英雄 ")])],1),i("div",{staticClass:"skills bg-white mt-4"},[i("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(s,a){return i("img",{key:s.name,staticClass:"icon",class:{active:t.currentSkillIndex===a},attrs:{src:s.icon},on:{click:function(s){t.currentSkillIndex=a}}})})),0),t.currentSkill?i("div",[i("div",{staticClass:"d-flex pt-4 pb-3"},[i("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),i("span",{staticClass:"text-grey-1 ml-4"},[t._v("（冷却值："+t._s(t.currentSkill.delay)+"消耗："+t._s(t.currentSkill.cost)+"）")])]),i("p",{staticClass:"text-dark-2"},[t._v(t._s(t.currentSkill.description))]),i("div",{staticClass:"border-bottom"}),i("p",{staticClass:"text-grey-1"},[t._v("小提示："+t._s(t.currentSkill.tips))])]):t._e()])]),i("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu",title:"出装推荐"}},[i("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),i("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(s){return i("div",{key:s.name},[i("img",{staticClass:"icon",attrs:{src:s.icon}}),i("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0),i("div",{staticClass:"border-bottom mt-3"}),i("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),i("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(s){return i("div",{key:s.name},[i("img",{staticClass:"icon",attrs:{src:s.icon}}),i("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0)]),i("m-card",{attrs:{plain:"",icon:"menu",title:"使用技巧"}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),i("m-card",{attrs:{plain:"",icon:"menu",title:"对抗技巧"}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),i("m-card",{attrs:{plain:"",icon:"menu",title:"团战思路"}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),i("m-card",{attrs:{plain:"",icon:"menu",title:"英雄关系"}},[i("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(s){return i("div",{key:s.name,staticClass:"d-flex pt-3"},[i("img",{attrs:{src:s.hero.avatar,height:"50"}}),i("p",{staticClass:"flex-1 ml-3 m-0"},[t._v(t._s(s.description))])])})),i("div",{staticClass:"border-bottom mt-3"})],2)],1)])],1)],1)]):t._e()},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d-flex px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-white ml-3"},[t._v("攻略站")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg-white px-3"},[a("div",{staticClass:"nav d-flex pt-3 pb-2 jc-around border-bottom"},[a("div",{staticClass:"nav-item active"},[a("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),a("div",{staticClass:"nav-item"},[a("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],n=(a("d3b7"),a("96cf"),a("ae8d")),l={name:"hero",props:{id:{required:!0}},components:{"m-card":n["a"]},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t,s;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$http.get("heroes/".concat(this.id)));case 2:t=a.sent,s=t.data,this.model=s;case 5:case"end":return a.stop()}}),null,this)}},created:function(){this.fetch()}},c=l,r=(a("f9bb"),a("b9db"),a("2877")),o=Object(r["a"])(c,i,e,!1,null,null,null);s["default"]=o.exports},7054:function(t,s,a){},ae8d:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card p-3 bg-white mt-3"},[a("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[a("i",{staticClass:"iconfont fs-sm",class:"icon-"+t.icon}),a("div",{staticClass:"fs-xl flex-1 px-2"},[a("strong",[t._v(t._s(t.title))])]),t.plain?t._e():a("i",{staticClass:"iconfont icon-gengduo"})]),a("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])},e=[],n={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},l=n,c=(a("c61c"),a("2877")),r=Object(c["a"])(l,i,e,!1,null,"0bad91d6",null);s["a"]=r.exports},b9db:function(t,s,a){"use strict";var i=a("0d42"),e=a.n(i);e.a},c61c:function(t,s,a){"use strict";var i=a("cb38"),e=a.n(i);e.a},cb38:function(t,s,a){},f9bb:function(t,s,a){"use strict";var i=a("7054"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-5f59f46a.6e72dbd0.js.map
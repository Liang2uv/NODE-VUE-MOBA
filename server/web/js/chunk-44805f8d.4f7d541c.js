(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44805f8d"],{"21bb":function(t,e,i){"use strict";var s=i("2dad"),n=i.n(s);n.a},"2c35":function(t,e,i){t.exports=i.p+"img/c40771f542fced3e5b04c263358128f6.c40771f5.jpeg"},"2dad":function(t,e,i){},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t="millisecond",e="second",i="minute",s="hour",n="day",r="week",a="month",c="quarter",o="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,i){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(i)+t},f={s:d,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),s=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+d(s,2,"0")+":"+d(n,2,"0")},m:function(t,e){var i=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(i,a),n=e-s<0,r=t.clone().add(i+(n?-1:1),a);return Number(-(i+(e-s)/(n?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:a,y:o,w:r,d:n,h:s,m:i,s:e,ms:t,Q:c}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",v={};v[p]=h;var m=function(t){return t instanceof w},g=function(t,e,i){var s;if(!t)return p;if("string"==typeof t)v[t]&&(s=t),e&&(v[t]=e,s=t);else{var n=t.name;v[n]=t,s=n}return i||(p=s),s},$=function(t,e,i){if(m(t))return t.clone();var s=e?"string"==typeof e?{format:e,pl:i}:e:{};return s.date=t,new w(s)},y=f;y.l=g,y.i=m,y.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var w=function(){function d(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(u);if(s)return i?new Date(Date.UTC(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)):new Date(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=$(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return $(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<$(t)},f.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},f.year=function(t){return this.$g(t,"$y",o)},f.month=function(t){return this.$g(t,"$M",a)},f.day=function(t){return this.$g(t,"$W",n)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",s)},f.minute=function(t){return this.$g(t,"$m",i)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,c){var u=this,l=!!y.u(c)||c,d=y.p(t),f=function(t,e){var i=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?i:i.endOf(n)},h=function(t,e){return y.w(u.toDate()[t].apply(u.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},p=this.$W,v=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case o:return l?f(1,0):f(31,11);case a:return l?f(1,v):f(0,v+1);case r:var $=this.$locale().weekStart||0,w=(p<$?p+7:p)-$;return f(l?m-w:m+(6-w),v);case n:case"date":return h(g+"Hours",0);case s:return h(g+"Minutes",1);case i:return h(g+"Seconds",2);case e:return h(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,c){var u,l=y.p(r),d="set"+(this.$u?"UTC":""),f=(u={},u[n]=d+"Date",u.date=d+"Date",u[a]=d+"Month",u[o]=d+"FullYear",u[s]=d+"Hours",u[i]=d+"Minutes",u[e]=d+"Seconds",u[t]=d+"Milliseconds",u)[l],h=l===n?this.$D+(c-this.$W):c;if(l===a||l===o){var p=this.clone().set("date",1);p.$d[f](h),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,c){var u,l=this;t=Number(t);var d=y.p(c),f=function(e){var i=$(l);return y.w(i.date(i.date()+Math.round(e*t)),l)};if(d===a)return this.set(a,this.$M+t);if(d===o)return this.set(o,this.$y+t);if(d===n)return f(1);if(d===r)return f(7);var h=(u={},u[i]=6e4,u[s]=36e5,u[e]=1e3,u)[d]||1,p=this.$d.getTime()+t*h;return y.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),n=this.$locale(),r=this.$H,a=this.$m,c=this.$M,o=n.weekdays,u=n.months,d=function(t,s,n,r){return t&&(t[s]||t(e,i))||n[s].substr(0,r)},f=function(t){return y.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,i){var s=t<12?"AM":"PM";return i?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:y.s(c+1,2,"0"),MMM:d(n.monthsShort,c,u,3),MMMM:u[c]||u(this,i),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:y.s(r,2,"0"),h:f(1),hh:f(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:s};return i.replace(l,(function(t,e){return e||p[t]||s.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,l){var d,f=y.p(u),h=$(t),p=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,m=y.m(this,h);return m=(d={},d[o]=m/12,d[a]=m,d[c]=m/3,d[r]=(v-p)/6048e5,d[n]=(v-p)/864e5,d[s]=v/36e5,d[i]=v/6e4,d[e]=v/1e3,d)[f]||v,l?m:y.a(m)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return v[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone();return i.$L=g(t,e,!0),i},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return $.prototype=w.prototype,$.extend=function(t,e){return t(e,w,$),$},$.locale=g,$.isDayjs=m,$.unix=function(t){return $(1e3*t)},$.en=v[p],$.Ls=v,$}))},"5d21":function(t,e,i){t.exports=i.p+"img/23b5791aca53e3490aeda90753da2b31.23b5791a.jpeg"},ae8d:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card p-3 bg-white mt-3"},[i("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[i("i",{staticClass:"iconfont fs-sm",class:"icon-"+t.icon}),i("div",{staticClass:"fs-xl flex-1 px-2"},[i("strong",[t._v(t._s(t.title))])]),t.plain?t._e():i("i",{staticClass:"iconfont icon-gengduo"})]),i("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])},n=[],r={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},a=r,c=(i("c61c"),i("2877")),o=Object(c["a"])(a,s,n,!1,null,"0bad91d6",null);e["a"]=o.exports},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("swiper",{attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:i("2c35"),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:i("5d21"),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:i("fcac"),alt:""}})]),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),t._m(0),s("m-list-card",{attrs:{title:"新闻资讯",icon:"menu",categories:t.newsList},scopedSlots:t._u([{key:"items",fn:function(e){var i=e.category;return t._l(i.list,(function(e,i){return s("router-link",{key:i,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[s("span",{staticClass:"text-grey-1"},[t._v("["+t._s(e.categoryName)+"]")]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),s("m-list-card",{attrs:{title:"英雄列表",icon:"superhero",categories:t.heroList},scopedSlots:t._u([{key:"items",fn:function(e){var i=e.category;return[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(i.herolist,(function(e,i){return s("router-link",{key:i,staticClass:"text-center p-2",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),s("div",[t._v(t._s(e.name))])])})),1)]}}])})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[i("div",{staticClass:"d-flex flex-wrap"},[i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-news"}),i("div",[t._v("爆料站")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-story"}),i("div",[t._v("故事站")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-market"}),i("div",[t._v("周边商城")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-test"}),i("div",[t._v("体验服")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-new-people"}),i("div",[t._v("新人专区")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-rongyao"}),i("div",[t._v("荣耀·传承")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-data"}),i("div",[t._v("模拟战资料库")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-camp"}),i("div",[t._v("王者营地")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-account"}),i("div",[t._v("公众号")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-camp"}),i("div",[t._v("版本介绍")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-camp"}),i("div",[t._v("对局环境")])]),i("div",{staticClass:"nav-item mb-4"},[i("i",{staticClass:"sprite sprite-camp"}),i("div",[t._v("无限王者库")])])]),i("div",{staticClass:"bg-light py-2 fs-sm"},[i("i",{staticClass:"sprite sprite-arrow mr-2"}),i("span",[t._v("收起")])])])}],r=(i("d3b7"),i("96cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("m-card",{attrs:{title:t.title,icon:t.icon}},[i("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,s){return i("div",{key:s,staticClass:"nav-item",class:{active:s===t.active},on:{click:function(e){return t.$refs.list.swiper.slideTo(s)}}},[i("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),i("div",{staticClass:"pt-2"},[i("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,s){return i("swiper-slide",{key:s},[t._t("items",null,{category:e})],2)})),1)],1)])}),a=[],c=i("ae8d"),o={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},components:{"m-card":c["a"]},data:function(){return{active:0}}},u=o,l=i("2877"),d=Object(l["a"])(u,r,a,!1,null,"0e7bb1c9",null),f=d.exports,h=i("5a0c"),p=i.n(h),v={name:"home",components:{"m-list-card":f},filters:{date:function(t){return p()(t).format("MM/DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newsList:[],heroList:[]}},methods:{fetchNewsList:function(){var t,e;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,regeneratorRuntime.awrap(this.$http.get("/news/list"));case 2:t=i.sent,e=t.data,this.newsList=e;case 5:case"end":return i.stop()}}),null,this)},fetchHeroList:function(){var t,e;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,regeneratorRuntime.awrap(this.$http.get("/heroes/list"));case 2:t=i.sent,e=t.data,this.heroList=e;case 5:case"end":return i.stop()}}),null,this)}},created:function(){this.fetchNewsList(),this.fetchHeroList()}},m=v,g=(i("21bb"),Object(l["a"])(m,s,n,!1,null,null,null));e["default"]=g.exports},c61c:function(t,e,i){"use strict";var s=i("cb38"),n=i.n(s);n.a},cb38:function(t,e,i){},fcac:function(t,e,i){t.exports=i.p+"img/9cf8fa915ca4881f084f6c8c27316e72.9cf8fa91.jpeg"}}]);
//# sourceMappingURL=chunk-44805f8d.4f7d541c.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-334bd08c"],{ae79:function(e,t,a){"use strict";var n=a("ce6d"),s=a.n(n);s.a},c0981:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("h3",[e._v("广告位管理")]),a("el-button",{attrs:{type:"primary"},on:{click:e.toAdd}},[e._v("新增")])],1),a("el-main",[a("el-table",{attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220px"}}),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.toDelete(t.row._id)}}},[e._v("删除")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.toEdit(t.row._id)}}},[e._v("编辑")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"详细信息",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.saveChange(t)}}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.items.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v("添加广告 ")])],1),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return a("el-col",{key:n,attrs:{md:12}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}})],1),a("el-form-item",{attrs:{label:"链接"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.url,callback:function(a){e.$set(t,"url",a)},expression:"item.url"}})],1),a("el-form-item",{attrs:{label:"图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(a){return e.$set(t,"image",a.url)}}},[t.image?a("img",{staticClass:"avatar",attrs:{src:t.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",[a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)})),1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)],1)},s=[],r=(a("d3b7"),a("96cf"),{name:"adList",data:function(){return{tableData:[],model:{items:[]},dialogVisible:!1}},methods:{fetch:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$http.get("rest/ads"));case 2:e=a.sent,t=e.data,this.tableData=t;case 5:case"end":return a.stop()}}),null,this)},toEdit:function(e){var t,a;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.getOne(e));case 2:t=n.sent,a=t.data,this.model=a,this.dialogVisible=!0;case 6:case"end":return n.stop()}}),null,this)},toDelete:function(e){var t=this;this.$confirm("是否删除","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/ads/".concat(e)));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return a.stop()}}))}))},toAdd:function(){this.model={items:[]},this.dialogVisible=!0},saveChange:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.model._id){e.next=6;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("rest/ads/".concat(this.model._id),this.model));case 3:this.$message({type:"success",message:"修改成功"}),e.next=9;break;case 6:return e.next=8,regeneratorRuntime.awrap(this.$http.post("rest/ads",this.model));case 8:this.$message({type:"success",message:"添加成功"});case 9:this.fetch(),this.dialogVisible=!1;case 11:case"end":return e.stop()}}),null,this)},getOne:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/ads/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,this)}},created:function(){this.fetch()}}),i=r,l=(a("ae79"),a("2877")),o=Object(l["a"])(i,n,s,!1,null,"5f5a8909",null);t["default"]=o.exports},ce6d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-334bd08c.5633d036.js.map
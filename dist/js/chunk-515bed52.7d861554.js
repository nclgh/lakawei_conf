(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-515bed52"],{2486:function(e,t,n){"use strict";var o=n("c928"),r=n.n(o);r.a},"7f7f":function(e,t,n){var o=n("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&o(r,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},c928:function(e,t,n){},dc65:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-content"},[n("el-form",{ref:"deptMemberAddForm",staticStyle:{},attrs:{model:e.form,rules:e.rules,"label-width":"140px"}},[n("el-form-item",{attrs:{label:"所属部门",prop:"id"}},[n("el-select",{attrs:{placeholder:"选择部门",filterable:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}},[n("el-option",{attrs:{label:"全部",value:""}}),e._l(e.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})],2)],1),n("el-form-item",{attrs:{label:"人员工号",prop:"code"}},[n("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),n("el-form-item",{attrs:{label:"人员名字",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit()}}},[e._v("提交")]),n("el-button",{on:{click:function(t){e.onReset()}}},[e._v("重置")])],1)],1)],1)},r=[],a=(n("7f7f"),n("cadf"),n("551c"),n("097d"),{props:[],data:function(){return{form:{id:"",options:[],code:"",name:""},rules:{id:[{required:!0,message:"请选择所属部门",trigger:"change"}],code:[{required:!0,message:"请输入人员工号",trigger:"blur"}],name:[{required:!0,message:"请输入人员名字",trigger:"blur"}]},options:[]}},components:{},created:function(){},mounted:function(){var e=this,t="/department/query/";this.$request.get(t,{},"网络错误，无法获取部门信息，请检测网络然后刷新。").then(function(t){!0===t.data.success&&(e.options=t.data.data)})},methods:{onSubmit:function(){var e=this;this.$refs.deptStaffAddForm.validate(function(t){if(t){var n={code:e.form.code,name:e.form.name},o="/department/member/add/";e.$request.post(o,n).then(function(t){!0===t.data.success&&e.$alert("添加部门人员成功！","成功",{confirmButtonText:"确定",type:"success"})})}else e.$alert("填写有误，请检查！","错误",{confirmButtonText:"确定",type:"error"})})},onReset:function(){this.$refs.deptStaffAddForm.resetFields()}},computed:{}}),i=a,c=(n("2486"),n("2877")),s=Object(c["a"])(i,o,r,!1,null,"db7ae8a2",null);s.options.__file="memberAdd.vue";t["default"]=s.exports}}]);
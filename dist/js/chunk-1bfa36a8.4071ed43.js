(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bfa36a8"],{"0a90":function(t,e,i){var n=i("63b6"),a=i("10ff");n(n.G+n.F*(parseFloat!=a),{parseFloat:a})},"10ff":function(t,e,i){var n=i("e53d").parseFloat,a=i("a1ce").trim;t.exports=1/n(i("e692")+"-0")!==-1/0?function(t){var e=a(String(t),3),i=n(e);return 0===i&&"-"==e.charAt(0)?-0:i}:n},"208f":function(t,e,i){"use strict";var n=i("2f50"),a=i.n(n);a.a},"2f50":function(t,e,i){},"519b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-content"},[i("div",{staticClass:"left"},[i("div",{ref:"img",staticClass:"img"}),i("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.onClearItems}},[t._v("清除数据")])],1),i("div",{staticClass:"right"},[i("el-input",{attrs:{clearable:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}},[i("template",{slot:"prepend"},[t._v("设备id")]),i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.onPolling},slot:"append"},[t._v(t._s(t.btnText))])],2),i("div",{ref:"text",staticClass:"text"})],1)])},a=[],s=i("59ad"),o=i.n(s),r=(i("cadf"),i("551c"),i("097d"),i("53dc")),c=i.n(r),l={props:[],data:function(){return{id:"",btnText:"获取数据",timerId:null,dataList:[],pointsList:[],textsList:[]}},components:{},created:function(){},mounted:function(){this.$notify.warning({title:"警告",message:"图片必须完全显示才能获得最佳体验。假如图片没有完全显示（能够上下滚动），必须进行缩小，或者换用大屏幕！",duration:0})},methods:{onPolling:function(){var t=this;""===this.id?this.$alert("请先输入设备 id！","警告",{confirmButtonText:"确定",type:"warning"}):this.timerId?(clearInterval(this.timerId),this.timerId=null,this.btnText="获取数据"):(this.btnText="停止获取",this.timerId=setInterval(function(){var e={ID:t.id};t.$axios({method:"get",url:"http://localhost:8081/test/search.php",params:e,validateStatus:function(t){return t>=200&&t<300||304===t}}).then(function(e){"0结果"!==e.data&&t.setItems(e.data)})},3e3))},setItems:function(t){for(var e=this.$refs,i=e.img,n=e.text,a=!0,s=this.dataList.length,r=o()(t.X),l=o()(t.Y),d=0;d<s;d+=1)if(this.dataList[d].originX===r&&this.dataList[d].originY===l){a=!1;break}if(a){var p={X:500*r/10.5,Y:641*l/13.5,originX:r,originY:l};this.dataList.push(p);var u=document.createElement("div");u.style.position="absolute",u.style.left="".concat(p.X-7,"px"),u.style.top="".concat(p.Y-7,"px"),u.style.backgroundColor="blue",u.style.backgroundSize="contain",u.style.width="14px",u.style.height="14px",u.style.borderRadius="50%",u.title="id：".concat(this.id," (").concat(p.originX,"m, ").concat(p.originY,"m)"),i.appendChild(u),this.pointsList.push(u);var h=document.createElement("img");h.style.position="absolute",h.style.left="".concat(p.X-10,"px"),h.style.top="".concat(p.Y-26,"px"),h.src=c.a,h.title="id：".concat(this.id," (").concat(p.originX,"m, ").concat(p.originY,"m)"),i.appendChild(h),this.pointsList.push(h);var f=document.createElement("p"),g=new Date,m=g.getFullYear(),A=g.getMonth()+1,v=g.getDate(),x=g.getHours(),b=g.getMinutes(),C=g.getSeconds();f.innerText="id：".concat(this.id," ").concat(m,"-").concat(A,"-").concat(v," ").concat(x,":").concat(b,":").concat(C,"：(").concat(p.originX,"m, ").concat(p.originY,"m)"),n.appendChild(f),this.textsList.push(f)}},onClearItems:function(){for(var t=this.$refs,e=t.img,i=t.text,n=this.pointsList.length,a=0;a<n;a+=1)e.removeChild(this.pointsList[a]);n=this.textsList.length;for(var s=0;s<n;s+=1)i.removeChild(this.textsList[s]);this.dataList=[],this.pointsList=[],this.textsList=[]}},computed:{}},d=l,p=(i("208f"),i("2877")),u=Object(p["a"])(d,n,a,!1,null,"1ba91572",null);u.options.__file="location.vue";e["default"]=u.exports},"53dc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJpSURBVEhLvVRNa1NRED1arVrELwRd+LFx41Zasy5YQdSlf0ChunWlYJp57yXVLvoVBEFdle7c6D+w+6rgRoqI6ErxoxFtaURNPTN3UvOS1zTpwhNO5r47Z+ZN5t4M/i8ERxAjRw42MIdbOOqKDiHYjRLOMfgx199xG6u4Q6rVZ8ET+s6bbkOUsQcFymOsYJQJSp6oTn3WfUGVTEzfBlsQ8QfFDCh6YIRlBi7QvnS7bEnVr7oYeYtrwSo3SzjNoEUTJ6TgNRMIgwZY3QmM0Arr1331qy6PCv05i09BsJPBM7Q1Ewo+kmfdm0aMIWo/uK7G9SwmsMu9jhvYS+cb+zkR/pBlXEKPe9MQbCWnTad6wVtyn3sdN7Gfgoo1PvTponuykeACkyyZXvCNPOAehybU/gXBEg9kyD3ZKOIMX/zDC6hkJ4zw1RNWub7qnmwIhqlZcf1ia0K9T4JX1mi9DoI58rB70xjFISZ7arpwMAt2Bik8Qi8d2uggCgczxV6dxH300d9Df589CybJ365TlvnZ4ZkaIOgnP61VGd7+jOuEQde5VjvP7+BXG+Ez1wOeoQnD2M6gBw3iYOt/N7X1fdWE6h4yptczZKCEUxSFSxsCsqmJBV+o7/fIdaC9KnC2NFaZlSxUeLd9dXWMcQ4K3rVNGOE9Ncc8YgMItrGCPG2tJem/5xHTdYwip3LMKpp7GZ51/7grO4S+PeF1jfBrrSq1ev+0er0RXWOKEyTcw3AISsEL6/GmoGMqwWXaqt3BCD/JK7a/adyzofHcEmp1E81DoFtoNQVOHh1VMa6tO3S7guAgOY1x2rYA/gLpZznZva0j7AAAAABJRU5ErkJggg=="},"59ad":function(t,e,i){t.exports=i("7be7")},"7be7":function(t,e,i){i("0a90"),t.exports=i("584a").parseFloat},a1ce:function(t,e,i){var n=i("63b6"),a=i("25eb"),s=i("294c"),o=i("e692"),r="["+o+"]",c="​",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),p=function(t,e,i){var a={},r=s(function(){return!!o[t]()||c[t]()!=c}),l=a[t]=r?e(u):o[t];i&&(a[i]=l),n(n.P+n.F*r,"String",a)},u=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=p},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2676"],{"7f0a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view"},[r("cube-form",{attrs:{model:e.model,schema:e.schema},on:{submit:e.submitHandler}})],1)},s=[],a=(r("96cf"),r("3b8d")),o=r("d225"),i=r("b0b4"),u=r("308d"),c=r("6bb5"),p=r("4e2b"),l=r("9ab4"),h=r("d257"),d=r("60a3"),m=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.userInfo={},e.orderInfo={},e.selectedLabel="",e.model={amount:""},e.schema={fields:[{type:"input",modelKey:"amount",label:"￥",props:{placeholer:"输入金额",clearable:!0},rules:{required:!0},trigger:"blur",messages:{required:"不能为空"}},{type:"submit",label:"确认"}]},e}return Object(p["a"])(t,e),Object(i["a"])(t,[{key:"created",value:function(){this.getInvestUserInfo(),this.getInvestOrder()}},{key:"submitHandler",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.preventDefault(),!Object(h["b"])(this.userInfo)&&!Object(h["b"])(this.orderInfo)){e.next=3;break}return e.abrupt("return");case 3:return this.userInfo.applyedCA||this.$request({api:"applyCA",token:this.$store.state.token}),e.next=6,this.$request({api:"investConfirm",params:{amount:this.model.amount,projectNo:this.$route.params.id,originReturnUrl:this.$store.state.originNodeServer,token:this.$store.state.token,rewardAmt:0,couponIds:"",acceptedAgreement:!0,transferRiskRemind:!0,bondInvestAgreement:!0,returnUrl:"".concat(this.$store.state.originNodeServer,"/project/investReturn")},method:"post"});case 6:r=e.sent,"0000"===r.resCode?this.$request({formSubmitData:{url:r.shUrl,params:r.params,returnUrl:r.returnUrl}}):"E1070044"!==r.resCode&&this.$router.push("/project/investReturn?result=false");case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getInvestUserInfo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({api:"getInvestUserInfo",params:{projectNo:this.$route.params.id,token:this.$store.state.token}});case 2:t=e.sent,"0000"===t.resCode&&(this.userInfo=t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getInvestOrder",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({api:"getInvestOrder",params:{projectNo:this.$route.params.id,token:this.$store.state.token}});case 2:t=e.sent,"0000"===t.resCode&&(this.orderInfo=t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(d["d"]);m=Object(l["a"])([Object(d["a"])({components:{}})],m);var f=m,b=f,v=r("2877"),g=Object(v["a"])(b,n,s,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0e2676.180270b2.js.map
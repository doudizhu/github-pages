(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d59bb84"],{1348:function(t,i,s){"use strict";s.r(i);var h=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"view"},[s("cube-tab-panels",{model:{value:t.selectedLabel,callback:function(i){t.selectedLabel=i},expression:"selectedLabel"}},[s("cube-tab-panel",{attrs:{label:"注册表单页"}},[s("cube-form",{attrs:{model:t.model,options:t.options},on:{submit:t.submitHandler}},[s("cube-form-group",[s("cube-form-item",{attrs:{field:t.fields[0]}}),s("cube-form-item",{attrs:{field:t.fields[1]}},[s("cube-input",{attrs:{placeholder:"请输入"},scopedSlots:t._u([{key:"append",fn:function(){return[s("ImgVerifyCode",{attrs:{uuid:t.model.uuid},on:{"update:uuid":function(i){return t.$set(t.model,"uuid",i)}}})]},proxy:!0}]),model:{value:t.model.imageVerifyCode,callback:function(i){t.$set(t.model,"imageVerifyCode",i)},expression:"model.imageVerifyCode"}})],1),s("cube-form-item",{attrs:{field:t.fields[2]}},[s("cube-input",{attrs:{placeholder:"请输入"},scopedSlots:t._u([{key:"append",fn:function(){return[s("MsgVerifyCode",{attrs:{vm:t.vm},on:{"update:vm":function(i){t.vm=i}}})]},proxy:!0}]),model:{value:t.model.verifyCode,callback:function(i){t.$set(t.model,"verifyCode",i)},expression:"model.verifyCode"}})],1)],1),s("cube-form-group",[s("cube-form-item",{attrs:{field:t.fields[3]}})],1),s("cube-form-group",[s("cube-button",{attrs:{type:"submit"}},[t._v("注册")])],1)],1)],1),s("cube-tab-panel",{staticClass:"result-page",attrs:{label:"注册成功页"}},[s("i",{staticClass:"cubeic-ok"}),s("h4",[t._v("注册成功")]),s("router-link",{attrs:{to:{path:"/account/lmAccount#open"}}},[s("cube-button",[t._v("去开户")])],1)],1)],1),s("p",{staticClass:"text-links"},[s("router-link",{staticStyle:{float:"right"},attrs:{to:{path:"/user/login"}}},[t._v("已有账号，立即登录")])],1)],1)},e=[],r=(s("96cf"),s("3b8d")),n=s("d225"),a=s("b0b4"),o=s("308d"),c=s("6bb5"),d=s("013f"),u=s("4e2b"),l=s("9ab4"),f=s("3534"),b=s("c260"),p=s("60a3"),m=function(t){function i(){var t;return Object(n["a"])(this,i),t=Object(o["a"])(this,Object(c["a"])(i).apply(this,arguments)),t.selectedLabel="",t.vm=Object(d["a"])(t),t.model={mobile:"15222018104",imageVerifyCode:"",verifyCode:"",password:"123qwe",inviteCode:"",openId:"",uuid:"",verifyType:"register"},t.fields=[{type:"input",modelKey:"mobile",label:"手机号",props:{placeholder:"请输入",clearable:!0},rules:{required:!0},messages:{required:"不能为空"}},{type:"input",modelKey:"imageVerifyCode",label:"图片验证码",props:{placeholder:"请输入",clearable:!0},rules:{required:!0},trigger:"blur",messages:{required:"不能为空"}},{type:"input",modelKey:"verifyCode",label:"短信验证码",props:{placeholder:"请输入",clearable:!0},rules:{required:!0},trigger:"blur",messages:{required:"不能为空"}},{type:"input",modelKey:"password",label:"密码",props:{placeholer:"请输入密码",type:"password",eye:{open:!1},clearable:!0,autocomplete:!0},rules:{required:!0},trigger:"blur"}],t.options={scrollToInvalidField:!0,layout:"fresh"},t}return Object(u["a"])(i,t),Object(a["a"])(i,[{key:"submitHandler",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(i){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.preventDefault(),t.next=3,this.$request({api:"register",params:{mobile:this.model.mobile,imageVerifyCode:this.model.imageVerifyCode,verifyCode:this.model.verifyCode,password:b["a"].init(this.model.password),inviteCode:this.model.inviteCode,openId:this.model.openId},method:"post"});case 3:s=t.sent,"0000"===s.resCode&&(this.selectedLabel="注册成功页",this.userLosgin());case 5:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}()},{key:"userLosgin",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({api:"login",params:{userName:this.model.mobile,password:b["a"].init(this.model.password)},method:"post"});case 2:i=t.sent,"0000"===i.resCode&&(s=this.$store.state.domainApi,this.$store.commit("resetAll"),this.$store.commit("setDomainApi",s),this.$store.commit("setToken",i.token),this.$store.commit("setUser",i.user));case 4:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()}]),i}(p["d"]);m=Object(l["a"])([Object(p["a"])({components:{ImgVerifyCode:f["a"],MsgVerifyCode:f["b"]}})],m);var g=m,v=g,k=(s("ab34"),s("2877")),x=Object(k["a"])(v,h,e,!1,null,"22fec649",null);i["default"]=x.exports},"386d":function(t,i,s){"use strict";var h=s("cb7c"),e=s("83a1"),r=s("5f1b");s("214f")("search",1,(function(t,i,s,n){return[function(s){var h=t(this),e=void 0==s?void 0:s[i];return void 0!==e?e.call(s,h):new RegExp(s)[i](String(h))},function(t){var i=n(s,t,this);if(i.done)return i.value;var a=h(t),o=String(this),c=a.lastIndex;e(c,0)||(a.lastIndex=0);var d=r(a,o);return e(a.lastIndex,c)||(a.lastIndex=c),null===d?-1:d.index}]}))},"3e8f":function(t,i){},"48b8":function(t,i,s){"use strict";s.d(i,"d",(function(){return r})),s.d(i,"a",(function(){return n})),s.d(i,"f",(function(){return a})),s.d(i,"b",(function(){return o})),s.d(i,"c",(function(){return c})),s.d(i,"e",(function(){return u}));s("96cf");var h=s("3b8d"),e=(s("7618"),s("ac6a"),s("28a5"),s("386d"),function(){var t={};if(""===location.search)return t;var i=location.href,s=i.split("?")[1].split("&");return s.forEach((function(i){var s=i.split("=");t[s[0]]=s[1]})),t}),r=function(t){var i=e(),s=i[t]||"";return s},n=function(t){var i=t.self,s=t.dataSelector,h=t.textConcat,e=t.timeout,r=t.callback,n=e,a=setInterval((function(){n--,i[s]=h(n),0===n&&(r(),clearInterval(a))}),1e3)};s("3e8f"),s("df7c");function a(t){var i=this,s=arguments,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!0===e){var r=null;return function(){var e=i,n=s,a=+new Date;(null===r||a>=r+h)&&(t.apply(e,n),r=a)}}var n=null,a=null;return function(){var i=this,s=arguments,e=Date.now();null===n?null===a&&(a=setTimeout((function(){t.apply(i,s),n=e+h}),h)):e>=n+h&&(t.apply(i,s),n=e)}}function o(t,i){Object(h["a"])(regeneratorRuntime.mark((function s(){var h,e,r,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch(t);case 2:return h=s.sent,s.next=5,h.blob();case 5:e=s.sent,r=window.URL.createObjectURL(e),n=document.createElement("a"),n.href=r,n.download=i,document.body.appendChild(n),n.click(),setTimeout((function(){return document.body.removeChild(n)}),1e3);case 13:case"end":return s.stop()}}),s)})))()}function c(t){if(d(t)||"localhost"===t)return"";var i=t.split("."),s=i.length-1;return 1===s?t:i[s-1]+"."+i[s]}function d(t){var i=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,s=i.test(t);return!!s}function u(){var t=location.hostname,i=location.pathname,s=c(t);return!!("daokoujihua.com"===s||s&&"herokuapp.com"!=s&&i.indexOf(".html")<0)}},"83a1":function(t,i){t.exports=Object.is||function(t,i){return t===i?0!==t||1/t===1/i:t!=t&&i!=i}},ab34:function(t,i,s){"use strict";var h=s("b03a"),e=s.n(h);e.a},b03a:function(t,i,s){},c260:function(t,i,s){"use strict";s.d(i,"a",(function(){return h}));var h=function(){function t(){}return t.AddUnsigned=function(t,i){var s,h,e,r,n;return e=2147483648&t,r=2147483648&i,s=1073741824&t,h=1073741824&i,n=(1073741823&t)+(1073741823&i),s&h?2147483648^n^e^r:s|h?1073741824&n?3221225472^n^e^r:1073741824^n^e^r:n^e^r},t.FF=function(t,i,s,h,e,r,n){return t=this.AddUnsigned(t,this.AddUnsigned(this.AddUnsigned(this.F(i,s,h),e),n)),this.AddUnsigned(this.RotateLeft(t,r),i)},t.GG=function(t,i,s,h,e,r,n){return t=this.AddUnsigned(t,this.AddUnsigned(this.AddUnsigned(this.G(i,s,h),e),n)),this.AddUnsigned(this.RotateLeft(t,r),i)},t.HH=function(t,i,s,h,e,r,n){return t=this.AddUnsigned(t,this.AddUnsigned(this.AddUnsigned(this.H(i,s,h),e),n)),this.AddUnsigned(this.RotateLeft(t,r),i)},t.II=function(t,i,s,h,e,r,n){return t=this.AddUnsigned(t,this.AddUnsigned(this.AddUnsigned(this.I(i,s,h),e),n)),this.AddUnsigned(this.RotateLeft(t,r),i)},t.ConvertToWordArray=function(t){var i,s=t.length,h=s+8,e=(h-h%64)/64,r=16*(e+1),n=Array(r-1),a=0,o=0;while(o<s)i=(o-o%4)/4,a=o%4*8,n[i]=n[i]|t.charCodeAt(o)<<a,o++;return i=(o-o%4)/4,a=o%4*8,n[i]=n[i]|128<<a,n[r-2]=s<<3,n[r-1]=s>>>29,n},t.WordToHex=function(t){var i,s,h="",e="";for(s=0;s<=3;s++)i=t>>>8*s&255,e="0"+i.toString(16),h+=e.substr(e.length-2,2);return h},t.Utf8Encode=function(t){var i,s="";t=t.replace(/\r\n/g,"\n");for(var h=0;h<t.length;h++)i=t.charCodeAt(h),i<128?s+=String.fromCharCode(i):i>127&&i<2048?(s+=String.fromCharCode(i>>6|192),s+=String.fromCharCode(63&i|128)):(s+=String.fromCharCode(i>>12|224),s+=String.fromCharCode(i>>6&63|128),s+=String.fromCharCode(63&i|128));return s},t.init=function(t){var i;for("string"!==typeof t&&(t=JSON.stringify(t)),this._string=this.Utf8Encode(t),this.x=this.ConvertToWordArray(this._string),this.a=1732584193,this.b=4023233417,this.c=2562383102,this.d=271733878,this.k=0;this.k<this.x.length;this.k+=16)this.AA=this.a,this.BB=this.b,this.CC=this.c,this.DD=this.d,this.a=this.FF(this.a,this.b,this.c,this.d,this.x[this.k],this.S11,3614090360),this.d=this.FF(this.d,this.a,this.b,this.c,this.x[this.k+1],this.S12,3905402710),this.c=this.FF(this.c,this.d,this.a,this.b,this.x[this.k+2],this.S13,606105819),this.b=this.FF(this.b,this.c,this.d,this.a,this.x[this.k+3],this.S14,3250441966),this.a=this.FF(this.a,this.b,this.c,this.d,this.x[this.k+4],this.S11,4118548399),this.d=this.FF(this.d,this.a,this.b,this.c,this.x[this.k+5],this.S12,1200080426),this.c=this.FF(this.c,this.d,this.a,this.b,this.x[this.k+6],this.S13,2821735955),this.b=this.FF(this.b,this.c,this.d,this.a,this.x[this.k+7],this.S14,4249261313),this.a=this.FF(this.a,this.b,this.c,this.d,this.x[this.k+8],this.S11,1770035416),this.d=this.FF(this.d,this.a,this.b,this.c,this.x[this.k+9],this.S12,2336552879),this.c=this.FF(this.c,this.d,this.a,this.b,this.x[this.k+10],this.S13,4294925233),this.b=this.FF(this.b,this.c,this.d,this.a,this.x[this.k+11],this.S14,2304563134),this.a=this.FF(this.a,this.b,this.c,this.d,this.x[this.k+12],this.S11,1804603682),this.d=this.FF(this.d,this.a,this.b,this.c,this.x[this.k+13],this.S12,4254626195),this.c=this.FF(this.c,this.d,this.a,this.b,this.x[this.k+14],this.S13,2792965006),this.b=this.FF(this.b,this.c,this.d,this.a,this.x[this.k+15],this.S14,1236535329),this.a=this.GG(this.a,this.b,this.c,this.d,this.x[this.k+1],this.S21,4129170786),this.d=this.GG(this.d,this.a,this.b,this.c,this.x[this.k+6],this.S22,3225465664),this.c=this.GG(this.c,this.d,this.a,this.b,this.x[this.k+11],this.S23,643717713),this.b=this.GG(this.b,this.c,this.d,this.a,this.x[this.k],this.S24,3921069994),this.a=this.GG(this.a,this.b,this.c,this.d,this.x[this.k+5],this.S21,3593408605),this.d=this.GG(this.d,this.a,this.b,this.c,this.x[this.k+10],this.S22,38016083),this.c=this.GG(this.c,this.d,this.a,this.b,this.x[this.k+15],this.S23,3634488961),this.b=this.GG(this.b,this.c,this.d,this.a,this.x[this.k+4],this.S24,3889429448),this.a=this.GG(this.a,this.b,this.c,this.d,this.x[this.k+9],this.S21,568446438),this.d=this.GG(this.d,this.a,this.b,this.c,this.x[this.k+14],this.S22,3275163606),this.c=this.GG(this.c,this.d,this.a,this.b,this.x[this.k+3],this.S23,4107603335),this.b=this.GG(this.b,this.c,this.d,this.a,this.x[this.k+8],this.S24,1163531501),this.a=this.GG(this.a,this.b,this.c,this.d,this.x[this.k+13],this.S21,2850285829),this.d=this.GG(this.d,this.a,this.b,this.c,this.x[this.k+2],this.S22,4243563512),this.c=this.GG(this.c,this.d,this.a,this.b,this.x[this.k+7],this.S23,1735328473),this.b=this.GG(this.b,this.c,this.d,this.a,this.x[this.k+12],this.S24,2368359562),this.a=this.HH(this.a,this.b,this.c,this.d,this.x[this.k+5],this.S31,4294588738),this.d=this.HH(this.d,this.a,this.b,this.c,this.x[this.k+8],this.S32,2272392833),this.c=this.HH(this.c,this.d,this.a,this.b,this.x[this.k+11],this.S33,1839030562),this.b=this.HH(this.b,this.c,this.d,this.a,this.x[this.k+14],this.S34,4259657740),this.a=this.HH(this.a,this.b,this.c,this.d,this.x[this.k+1],this.S31,2763975236),this.d=this.HH(this.d,this.a,this.b,this.c,this.x[this.k+4],this.S32,1272893353),this.c=this.HH(this.c,this.d,this.a,this.b,this.x[this.k+7],this.S33,4139469664),this.b=this.HH(this.b,this.c,this.d,this.a,this.x[this.k+10],this.S34,3200236656),this.a=this.HH(this.a,this.b,this.c,this.d,this.x[this.k+13],this.S31,681279174),this.d=this.HH(this.d,this.a,this.b,this.c,this.x[this.k],this.S32,3936430074),this.c=this.HH(this.c,this.d,this.a,this.b,this.x[this.k+3],this.S33,3572445317),this.b=this.HH(this.b,this.c,this.d,this.a,this.x[this.k+6],this.S34,76029189),this.a=this.HH(this.a,this.b,this.c,this.d,this.x[this.k+9],this.S31,3654602809),this.d=this.HH(this.d,this.a,this.b,this.c,this.x[this.k+12],this.S32,3873151461),this.c=this.HH(this.c,this.d,this.a,this.b,this.x[this.k+15],this.S33,530742520),this.b=this.HH(this.b,this.c,this.d,this.a,this.x[this.k+2],this.S34,3299628645),this.a=this.II(this.a,this.b,this.c,this.d,this.x[this.k],this.S41,4096336452),this.d=this.II(this.d,this.a,this.b,this.c,this.x[this.k+7],this.S42,1126891415),this.c=this.II(this.c,this.d,this.a,this.b,this.x[this.k+14],this.S43,2878612391),this.b=this.II(this.b,this.c,this.d,this.a,this.x[this.k+5],this.S44,4237533241),this.a=this.II(this.a,this.b,this.c,this.d,this.x[this.k+12],this.S41,1700485571),this.d=this.II(this.d,this.a,this.b,this.c,this.x[this.k+3],this.S42,2399980690),this.c=this.II(this.c,this.d,this.a,this.b,this.x[this.k+10],this.S43,4293915773),this.b=this.II(this.b,this.c,this.d,this.a,this.x[this.k+1],this.S44,2240044497),this.a=this.II(this.a,this.b,this.c,this.d,this.x[this.k+8],this.S41,1873313359),this.d=this.II(this.d,this.a,this.b,this.c,this.x[this.k+15],this.S42,4264355552),this.c=this.II(this.c,this.d,this.a,this.b,this.x[this.k+6],this.S43,2734768916),this.b=this.II(this.b,this.c,this.d,this.a,this.x[this.k+13],this.S44,1309151649),this.a=this.II(this.a,this.b,this.c,this.d,this.x[this.k+4],this.S41,4149444226),this.d=this.II(this.d,this.a,this.b,this.c,this.x[this.k+11],this.S42,3174756917),this.c=this.II(this.c,this.d,this.a,this.b,this.x[this.k+2],this.S43,718787259),this.b=this.II(this.b,this.c,this.d,this.a,this.x[this.k+9],this.S44,3951481745),this.a=this.AddUnsigned(this.a,this.AA),this.b=this.AddUnsigned(this.b,this.BB),this.c=this.AddUnsigned(this.c,this.CC),this.d=this.AddUnsigned(this.d,this.DD);return i=this.WordToHex(this.a)+this.WordToHex(this.b)+this.WordToHex(this.c)+this.WordToHex(this.d),i.toLowerCase()},t.x=Array(),t.S11=7,t.S12=12,t.S13=17,t.S14=22,t.S21=5,t.S22=9,t.S23=14,t.S24=20,t.S31=4,t.S32=11,t.S33=16,t.S34=23,t.S41=6,t.S42=10,t.S43=15,t.S44=21,t.RotateLeft=function(t,i){return t<<i|t>>>32-i},t.F=function(t,i,s){return t&i|~t&s},t.G=function(t,i,s){return t&s|i&~s},t.H=function(t,i,s){return t^i^s},t.I=function(t,i,s){return i^(t|~s)},t}()},df7c:function(t,i,s){(function(t){function s(t,i){for(var s=0,h=t.length-1;h>=0;h--){var e=t[h];"."===e?t.splice(h,1):".."===e?(t.splice(h,1),s++):s&&(t.splice(h,1),s--)}if(i)for(;s--;s)t.unshift("..");return t}function h(t){"string"!==typeof t&&(t+="");var i,s=0,h=-1,e=!0;for(i=t.length-1;i>=0;--i)if(47===t.charCodeAt(i)){if(!e){s=i+1;break}}else-1===h&&(e=!1,h=i+1);return-1===h?"":t.slice(s,h)}function e(t,i){if(t.filter)return t.filter(i);for(var s=[],h=0;h<t.length;h++)i(t[h],h,t)&&s.push(t[h]);return s}i.resolve=function(){for(var i="",h=!1,r=arguments.length-1;r>=-1&&!h;r--){var n=r>=0?arguments[r]:t.cwd();if("string"!==typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(i=n+"/"+i,h="/"===n.charAt(0))}return i=s(e(i.split("/"),(function(t){return!!t})),!h).join("/"),(h?"/":"")+i||"."},i.normalize=function(t){var h=i.isAbsolute(t),n="/"===r(t,-1);return t=s(e(t.split("/"),(function(t){return!!t})),!h).join("/"),t||h||(t="."),t&&n&&(t+="/"),(h?"/":"")+t},i.isAbsolute=function(t){return"/"===t.charAt(0)},i.join=function(){var t=Array.prototype.slice.call(arguments,0);return i.normalize(e(t,(function(t,i){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},i.relative=function(t,s){function h(t){for(var i=0;i<t.length;i++)if(""!==t[i])break;for(var s=t.length-1;s>=0;s--)if(""!==t[s])break;return i>s?[]:t.slice(i,s-i+1)}t=i.resolve(t).substr(1),s=i.resolve(s).substr(1);for(var e=h(t.split("/")),r=h(s.split("/")),n=Math.min(e.length,r.length),a=n,o=0;o<n;o++)if(e[o]!==r[o]){a=o;break}var c=[];for(o=a;o<e.length;o++)c.push("..");return c=c.concat(r.slice(a)),c.join("/")},i.sep="/",i.delimiter=":",i.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var i=t.charCodeAt(0),s=47===i,h=-1,e=!0,r=t.length-1;r>=1;--r)if(i=t.charCodeAt(r),47===i){if(!e){h=r;break}}else e=!1;return-1===h?s?"/":".":s&&1===h?"/":t.slice(0,h)},i.basename=function(t,i){var s=h(t);return i&&s.substr(-1*i.length)===i&&(s=s.substr(0,s.length-i.length)),s},i.extname=function(t){"string"!==typeof t&&(t+="");for(var i=-1,s=0,h=-1,e=!0,r=0,n=t.length-1;n>=0;--n){var a=t.charCodeAt(n);if(47!==a)-1===h&&(e=!1,h=n+1),46===a?-1===i?i=n:1!==r&&(r=1):-1!==i&&(r=-1);else if(!e){s=n+1;break}}return-1===i||-1===h||0===r||1===r&&i===h-1&&i===s+1?"":t.slice(i,h)};var r="b"==="ab".substr(-1)?function(t,i,s){return t.substr(i,s)}:function(t,i,s){return i<0&&(i=t.length+i),t.substr(i,s)}}).call(this,s("f28c"))}}]);
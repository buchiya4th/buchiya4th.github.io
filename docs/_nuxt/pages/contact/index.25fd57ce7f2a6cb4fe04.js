webpackJsonp([3],{"9DrC":function(t,e,a){"use strict";var r=a("mtWM"),o=a.n(r);e.a={data:function(){return{title:"Contact",metaDescription:"Contactページの説明文",bodyClass:"page-contact",phase:"input",inputValidate:!1,form:{email:"",name:"",content:""},errors:{email:{success:!1,required:{error:!1,text:"メールアドレスを入力してください。"},errorType:{error:!1,text:"正しいメールアドレスを入力してください。"}},name:{success:!1,required:{error:!1,text:"お名前を入力してください。"}},content:{success:!1,required:{error:!1,text:"お問い合わせ内容を入力してください。"}}}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.metaDescription}],bodyAttrs:{class:this.bodyClass}}},methods:{goConfirm:function(){this.phase="confirm",this.$SmoothScroll(0,1)},goInput:function(){this.phase="input"},checkForm:function(t){var e=t.target.id,a=t.target._value;null===a||""===a?(this.errors[e].required.error=!0,this.errors[e].success=!1):(this.errors[e].required.error=!1,"email"===e?this.checkEmailType(e):this.errors[e].success=!0);var r=[this.errors.email.success,this.errors.name.success,this.errors.content.success];this.inputValidate=r.every(this.isSuccessInput),t.preventDefault()},checkEmailType:function(t){!1===/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.email)?(this.errors[t].errorType.error=!0,this.errors[t].success=!1):(this.errors[t].errorType.error=!1,this.errors[t].success=!0)},isSuccessInput:function(t){return!0===t},sendContact:function(){var t=new URLSearchParams;t.append("entry.1467862625",this.form.email),t.append("entry.287255957",this.form.name),t.append("entry.964008100",this.form.content),o()({method:"post",url:"https://docs.google.com/forms/d/e/1FAIpQLSf0Cg8lceZgg-j6oSCF9sibJ87Pv5DGAF-rq-YoUP4THVJTCA/formResponse",data:t,responseType:"document"}).then(function(t){console.log("OK",t)}).catch(function(t){console.log("error",t)}),this.phase="complete",this.$SmoothScroll(0,1)}}}},AZfq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("9DrC"),o=a("tOmp"),n=!1;var s=function(t){n||a("vFK1")},i=a("VU/8")(r.a,o.a,!1,s,"data-v-57bb4cfa",null);i.options.__file="pages/contact/index.vue",e.default=i.exports},hyol:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".btn[data-v-57bb4cfa]{display:inline-block;padding:.5em 1.5em;border:3px solid #3248c3;border-radius:8px;background:#fff;color:#3248c3;text-align:center;vertical-align:middle;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (min-width:480px){.btn[data-v-57bb4cfa]{border:4px solid #3248c3;border-radius:10px;font-size:24px}}.btn[data-v-57bb4cfa]:hover{background-color:#3248c3;color:#fff;text-decoration:none}.btn.btn-block[data-v-57bb4cfa]{display:block}.btn.btn-secondary[data-v-57bb4cfa]{border:3px solid #b4b4b4;color:#b4b4b4}@media (min-width:480px){.btn.btn-secondary[data-v-57bb4cfa]{border:4px solid #b4b4b4}}.btn.btn-secondary[data-v-57bb4cfa]:hover{background-color:#b4b4b4;color:#fff}.contactTable[data-v-57bb4cfa]{width:100%;max-width:700px;margin:0 auto}.contactTable td[data-v-57bb4cfa],.contactTable th[data-v-57bb4cfa]{padding:8px;vertical-align:top}@media (max-width:599px){.contactTable td[data-v-57bb4cfa],.contactTable th[data-v-57bb4cfa]{display:block;padding:1.06667vw}}@media (max-width:599px){.contactTable tr:not(:first-child) th[data-v-57bb4cfa]{padding-top:6.4vw}}.contactTable th[data-v-57bb4cfa]{line-height:2}@media (min-width:600px){.contactTable th[data-v-57bb4cfa]{width:10em;text-align:right}}.phase-confirm .contactTable td[data-v-57bb4cfa]{background-color:#fafafa}.contactTable input[data-v-57bb4cfa],.contactTable textarea[data-v-57bb4cfa]{width:100%}.contactTable textarea[data-v-57bb4cfa]{resize:none}.form-error[data-v-57bb4cfa]{color:#cf1818}.actionArea[data-v-57bb4cfa]{margin:40px 0;text-align:center}@media (max-width:599px){.actionArea .btn[data-v-57bb4cfa]{width:100%}}@media (max-width:599px){.actionArea .btn+.btn[data-v-57bb4cfa]{margin-top:1em}}@media (min-width:600px){.actionArea .btn+.btn[data-v-57bb4cfa]{margin-left:1em}}.actionArea .btn.is-disable[data-v-57bb4cfa]{border-color:gray;color:gray;pointer-events:none}",""])},tOmp:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("h1",{staticClass:"ttl-a"},[t._v(t._s(t.title))]),"input"===t.phase?a("div",{staticClass:"container phase-input"},[a("form",{staticClass:"contactForm",attrs:{method:"post",action:"https://docs.google.com/forms/d/e/1FAIpQLSf0Cg8lceZgg-j6oSCF9sibJ87Pv5DGAF-rq-YoUP4THVJTCA/formResponse"}},[a("table",{staticClass:"contactTable"},[a("tbody",[a("tr",[a("th",[t._v("メールアドレス")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email",name:"entry.1467862625",placeholder:"example@mail.co.jp"},domProps:{value:t.form.email},on:{blur:t.checkForm,input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),a("div",{staticClass:"form-error"},[t.errors.email.required.error?a("p",[t._v(t._s(t.errors.email.required.text))]):t._e(),t.errors.email.errorType.error&&!t.errors.email.required.error?a("p",[t._v(t._s(t.errors.email.errorType.text))]):t._e()])])]),a("tr",[a("th",[t._v("お名前")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{id:"name",type:"text",name:"entry.287255957"},domProps:{value:t.form.name},on:{blur:t.checkForm,input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a("div",{staticClass:"form-error"},[t.errors.name.required.error?a("p",[t._v(t._s(t.errors.name.required.text))]):t._e()])])]),a("tr",[a("th",[t._v("お問い合わせ内容")]),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.content,expression:"form.content"}],attrs:{id:"content",name:"entry.964008100"},domProps:{value:t.form.content},on:{blur:t.checkForm,input:function(e){e.target.composing||t.$set(t.form,"content",e.target.value)}}}),a("div",{staticClass:"form-error"},[t.errors.content.required.error?a("p",[t._v(t._s(t.errors.content.required.text))]):t._e()])])])])])]),a("div",{staticClass:"actionArea btnGroup"},[a("button",{staticClass:"btn",class:{"is-disable":!t.inputValidate},attrs:{type:"button",name:"confirm"},on:{click:t.goConfirm}},[t._v("確認")])])]):t._e(),"confirm"===t.phase?a("div",{staticClass:"container phase-confirm"},[a("table",{staticClass:"contactTable"},[a("tr",[a("th",[t._v("メールアドレス")]),a("td",[t._v(t._s(t.form.email))])]),a("tr",[a("th",[t._v("お名前")]),a("td",[t._v(t._s(t.form.name))])]),a("tr",[a("th",[t._v("お問い合わせ内容")]),a("td",[t._v(t._s(t.form.content))])])]),a("div",{staticClass:"actionArea btnGroup"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button",name:"back"},on:{click:t.goInput}},[t._v("戻る")]),a("button",{staticClass:"btn",attrs:{type:"submit",name:"submit"},on:{click:t.sendContact}},[t._v("送信")])])]):t._e(),"complete"===t.phase?a("div",{staticClass:"container phase-complete"},[t._m(0)]):t._e()])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"conpleteBody"},[e("p",[this._v("お問い合わせありがとうございました。"),e("br"),this._v("内容を確認後、返信いたします。"),e("br"),this._v("しばらくお待ちください。")]),e("p",{staticClass:"note"},[this._v("※ 内容によっては返信しかねる場合があります。ご了承ください。")])])}]};e.a=o},vFK1:function(t,e,a){var r=a("hyol");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("808c6d1c",r,!1,{sourceMap:!1})}});
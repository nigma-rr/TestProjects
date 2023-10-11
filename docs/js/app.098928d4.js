(function(){"use strict";var t={1635:function(t,e,r){var a=r(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],i=r(1001),n={},l=(0,i.Z)(n,s,o,!1,null,null,null),m=l.exports,u=r(2631),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("multistep-from")],1)},d=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multistep-form"},[e("div",{staticClass:"container"},[t.checkAgreement?t._e():e("button",{staticClass:"multistep-form__prev",on:{click:function(e){return t.changeStep(t.currentStep-1)}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}})])]),t.checkAgreement?t._e():e(t.currentStepComponent,{tag:"component",attrs:{stepNumber:t.currentStep,stepsCount:t.stepsCount,formData:t.formData},on:{"next-step":t.nextStep,"prev-step":t.changeStep,"change-check-agreement":t.changeCheckAgreement}}),t.checkAgreement?e("check-loader",{attrs:{load:t.checkLoaderStatus},on:{"hide-check-loader":t.hideCheckLoader}}):t._e()],1)])},f=[],v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multistep-form__step multistep-form__step--one"},[e("h2",{staticClass:"title"},[t._v("Личные данные")]),e("progress-bar",{attrs:{step:t.stepNumber,stepsCount:t.stepsCount,stepName:"Подтверждение"}}),e("form",{staticClass:"multistep-form__form",on:{submit:function(e){return e.preventDefault(),t.nextStep.apply(null,arguments)}}},[e("div",{staticClass:"multistep-form__form-item"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDataObj.lastname,expression:"formDataObj.lastname",modifiers:{trim:!0}}],class:{invalid:t.$v.formDataObj.lastname.$dirty&&!t.$v.formDataObj.lastname.required},attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:t.formDataObj.lastname},on:{input:function(e){e.target.composing||t.$set(t.formDataObj,"lastname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.formDataObj.lastname.$dirty&&!t.$v.formDataObj.lastname.required?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Поле обязательно к заполнению ")]):t._e()]),e("div",{staticClass:"multistep-form__form-item"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDataObj.name,expression:"formDataObj.name",modifiers:{trim:!0}}],class:{invalid:t.$v.formDataObj.name.$dirty&&!t.$v.formDataObj.name.required},attrs:{type:"text",placeholder:"Имя*"},domProps:{value:t.formDataObj.name},on:{input:function(e){e.target.composing||t.$set(t.formDataObj,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.formDataObj.name.$dirty&&!t.$v.formDataObj.name.required?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Поле обязательно к заполнению ")]):t._e()]),e("div",{staticClass:"multistep-form__form-item"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDataObj.surname,expression:"formDataObj.surname",modifiers:{trim:!0}}],class:{invalid:t.$v.formDataObj.surname.$dirty&&!t.$v.formDataObj.surname.required},attrs:{type:"text",placeholder:"Отчество*"},domProps:{value:t.formDataObj.surname},on:{input:function(e){e.target.composing||t.$set(t.formDataObj,"surname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.formDataObj.surname.$dirty&&!t.$v.formDataObj.surname.required?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Поле обязательно к заполнению ")]):t._e()]),e("div",{staticClass:"multistep-form__form-item"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDataObj.date,expression:"formDataObj.date",modifiers:{trim:!0}}],class:{invalid:t.$v.formDataObj.date.$dirty&&!t.$v.formDataObj.date.required},attrs:{type:"text",onfocus:"(this.type='date')",onblur:"(this.type='text')",placeholder:"Дата рождения*"},domProps:{value:t.formDataObj.date},on:{input:function(e){e.target.composing||t.$set(t.formDataObj,"date",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.formDataObj.date.$dirty&&!t.$v.formDataObj.date.required?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Поле обязательно к заполнению ")]):t._e()]),e("div",{staticClass:"multistep-form__form-item"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDataObj.country,expression:"formDataObj.country",modifiers:{trim:!0}}],class:{invalid:t.$v.formDataObj.country.$dirty&&!t.$v.formDataObj.country.required},attrs:{type:"text",placeholder:"Страна места рождения*"},domProps:{value:t.formDataObj.country},on:{input:function(e){e.target.composing||t.$set(t.formDataObj,"country",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.formDataObj.country.$dirty&&!t.$v.formDataObj.country.required?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Поле обязательно к заполнению ")]):t._e()]),e("div",{staticClass:"multistep-form__form-item"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDataObj.email,expression:"formDataObj.email",modifiers:{trim:!0}}],class:{invalid:t.$v.formDataObj.email.$dirty&&!t.$v.formDataObj.email.required},attrs:{type:"mail",placeholder:"E-mail"},domProps:{value:t.formDataObj.email},on:{input:function(e){e.target.composing||t.$set(t.formDataObj,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.formDataObj.email.$dirty&&!t.$v.formDataObj.email.email?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Введите корректный E-mail ")]):t._e()]),e("button",{staticClass:"multistep-form__gosusl",attrs:{type:"button"}},[e("span",{staticClass:"multistep-form__gosusl-text"},[t._v("Заполнить через")]),e("span",{staticClass:"multistep-form__gosusl-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"151",height:"24",viewBox:"0 0 151 24",fill:"none"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.1105 0.633247H0.237221C0.0789109 0.633247 -0.000244141 0.712402 -0.000244141 0.870712V17.335C-0.000244141 17.4933 0.0789109 17.5724 0.237221 17.5724H4.27413C4.43244 17.5724 4.51159 17.4933 4.51159 17.335V4.591H10.7648C10.844 4.591 10.9231 4.51184 11.0023 4.43269C11.4772 3.32452 11.9522 2.13719 12.4271 0.949867V0.712402C12.2688 0.712402 12.1896 0.633247 12.1105 0.633247ZM45.5139 13.6147C45.5139 13.5355 45.4347 13.4564 45.3556 13.4564H45.1181C44.1683 13.773 42.3477 14.1688 41.0021 14.1688C38.2316 14.1688 36.886 13.4564 36.886 9.10283C36.886 5.69917 37.2818 4.03691 41.0021 4.03691C42.0311 4.03691 43.0601 4.19522 44.2474 4.591C44.3266 4.591 44.4849 4.591 44.4849 4.43269C44.9598 3.56198 45.5139 2.53297 46.1471 1.18733V0.949868C46.1471 0.870713 46.068 0.791558 45.9888 0.791558C44.4057 0.316628 42.4268 0.0791626 40.6854 0.0791626C34.828 0.0791626 32.2158 2.77043 32.2158 9.02368C32.2158 15.3561 34.828 18.1265 40.6854 18.1265C42.1102 18.1265 45.039 17.8099 46.4637 17.2558C46.6221 17.1766 46.6221 17.0975 46.6221 17.0183C46.7804 16.9392 45.5139 13.6147 45.5139 13.6147ZM21.3716 0.158318C15.5933 0.158318 13.2978 2.61212 13.2978 9.10283C13.2978 15.6727 15.5141 18.1265 21.3716 18.1265C27.2291 18.1265 29.5246 15.5935 29.5246 9.10283C29.5246 2.69128 27.2291 0.158318 21.3716 0.158318ZM21.3716 14.3271C18.6803 14.3271 17.8888 13.6147 17.8888 9.18199C17.8888 4.43269 18.7595 4.03691 21.3716 4.03691C23.9837 4.03691 24.9336 4.43269 24.9336 9.18199C24.9336 13.6147 24.0629 14.3271 21.3716 14.3271Z",fill:"#0065B1"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M132.98 0.63324H121.107C120.949 0.63324 120.87 0.712395 120.87 0.870705V17.3349C120.87 17.4933 120.949 17.5724 121.107 17.5724H125.144C125.302 17.5724 125.381 17.4933 125.381 17.3349V4.59099H131.635C131.714 4.59099 131.872 4.51184 131.872 4.43268C132.347 3.32451 132.822 2.13719 133.297 0.94986V0.712395C133.059 0.712395 133.059 0.63324 132.98 0.63324ZM117.941 0.712395H113.825C113.746 0.712395 113.587 0.79155 113.587 0.870705C112.954 3.40367 111.688 7.67804 109.867 12.1107L105.751 0.79155C105.751 0.712395 105.593 0.63324 105.513 0.63324H101.397C101.318 0.63324 101.239 0.712395 101.16 0.712395C101.081 0.79155 101.081 0.870705 101.16 0.94986L107.334 17.7307C106.701 18.9972 106.068 20.0262 105.593 21.1344C105.197 21.8468 104.801 22.6383 104.326 23.4299C104.247 23.509 104.326 23.5882 104.326 23.6673C104.405 23.7465 104.484 23.8257 104.564 23.8257H108.996C109.075 23.8257 109.155 23.7465 109.234 23.6673C109.946 22.2426 110.975 20.1845 111.846 18.1265C114.458 11.9524 116.595 6.25325 118.099 0.94986C118.099 0.870705 118.099 0.79155 118.02 0.712395H117.941ZM79.7089 13.6147C79.7089 13.5355 79.6298 13.4564 79.5506 13.4564H79.3132C78.3633 13.773 76.5427 14.1687 75.1971 14.1687C72.4267 14.1687 71.081 13.4564 71.081 9.10283C71.081 5.69916 71.4768 4.03691 75.1971 4.03691C76.2261 4.03691 77.2551 4.19522 78.4425 4.59099C78.6008 4.59099 78.6799 4.59099 78.6799 4.43268C79.1549 3.56198 79.7089 2.53296 80.3422 1.18733V0.94986C80.3422 0.870705 80.263 0.79155 80.1839 0.79155C78.5216 0.237465 76.5427 0 74.8805 0C69.1022 0 66.4901 2.69127 66.4901 8.94452C66.4901 15.2769 69.1022 18.0473 74.9596 18.0473C76.3844 18.0473 79.3132 17.7307 80.738 17.1766C80.8963 17.0975 80.8963 17.0183 80.8963 16.9392C80.8963 16.86 79.7089 13.6147 79.7089 13.6147ZM65.0653 0.712395H60.9492C60.7909 0.712395 60.7117 0.79155 60.7117 0.870705C60.0785 3.40367 58.812 7.67804 56.9915 12.1107L52.9546 0.712395C52.9546 0.63324 52.7962 0.554085 52.7171 0.554085H48.601C48.5219 0.554085 48.4427 0.63324 48.3636 0.63324C48.2844 0.712395 48.2844 0.79155 48.3636 0.870705L54.6168 17.6516C53.9836 18.918 53.3503 20.0262 52.8754 21.0552C52.4796 21.7676 52.0839 22.5592 51.6089 23.3507C51.5298 23.4299 51.6089 23.509 51.6089 23.5882C51.6881 23.6673 51.7672 23.7465 51.8464 23.7465H56.2791C56.3582 23.7465 56.4374 23.6673 56.5165 23.5882C57.2289 22.1634 58.2579 20.1054 59.1286 18.0473C61.7408 11.8733 63.8779 6.17409 65.3819 0.870705C65.3819 0.79155 65.3819 0.712395 65.3027 0.63324C65.2236 0.712395 65.1444 0.712395 65.0653 0.712395ZM150.157 0.63324H146.12C145.962 0.63324 145.883 0.712395 145.883 0.870705V13.6147C145.012 13.8521 144.141 13.9313 143.112 13.9313C140.421 13.9313 139.867 13.1397 139.867 9.57776V0.870705C139.867 0.712395 139.788 0.63324 139.629 0.63324H135.592C135.434 0.63324 135.355 0.712395 135.355 0.870705V10.0527C135.355 15.7518 137.255 18.0473 142.241 18.0473C145.012 18.0473 148.257 17.3349 150.078 16.6226C150.157 16.6226 150.236 16.4642 150.236 16.3851V0.870705C150.394 0.712395 150.315 0.63324 150.157 0.63324ZM98.1521 0.63324H85.883C85.7247 0.63324 85.6456 0.712395 85.6456 0.870705C85.329 6.41156 84.2999 12.4273 82.796 17.2558V17.4141C82.8752 17.4933 82.9543 17.4933 83.0335 17.4933H87.3078C87.387 17.4933 87.5453 17.4141 87.5453 17.3349C88.7326 13.6147 89.6825 8.6279 89.9991 4.51184H94.036V17.3349C94.036 17.4933 94.1152 17.5724 94.2735 17.5724H98.3104C98.4687 17.5724 98.5478 17.4933 98.5478 17.3349V0.870705C98.3895 0.712395 98.3104 0.63324 98.1521 0.63324Z",fill:"#EE3F58"}})])])]),e("label",{staticClass:"multistep-form__agreement",attrs:{for:"agreement"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataObj.agreement,expression:"formDataObj.agreement"}],attrs:{id:"agreement",name:"agreement",type:"checkbox"},domProps:{checked:Array.isArray(t.formDataObj.agreement)?t._i(t.formDataObj.agreement,null)>-1:t.formDataObj.agreement},on:{change:function(e){var r=t.formDataObj.agreement,a=e.target,s=!!a.checked;if(Array.isArray(r)){var o=null,i=t._i(r,o);a.checked?i<0&&t.$set(t.formDataObj,"agreement",r.concat([o])):i>-1&&t.$set(t.formDataObj,"agreement",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.formDataObj,"agreement",s)}}}),t._m(0)]),e("button",{staticClass:"multistep-form__button multistep-form__next",attrs:{type:"submit"}},[t._v(" Продолжить ")])])],1)},_=[function(){var t=this,e=t._self._c;return e("span",[t._v("Даю согласие на "),e("a",{attrs:{href:"#"}},[t._v("обработку личных данных")]),t._v(" и подписание документов в электронном виде")])}],C=r(5795),h=r(4951),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-bar__indicator",style:"grid-template-columns: repeat("+t.stepsCount+", 1fr)"},t._l(t.step,(function(t,r){return e("div",{key:r,staticClass:"progress-bar__indicator-item"})})),0),e("div",{staticClass:"progress-bar__info"},[e("div",{staticClass:"progress-bar__step"},[t._v("Шаг "+t._s(t.step)+" из "+t._s(t.stepsCount))]),e("div",{staticClass:"progress-bar__name"},[t._v(t._s(t.stepNameText))])])])},g=[],y={props:{step:{type:Number,default:1},stepsCount:{type:Number,default:1},stepName:{type:String,default:""}},computed:{stepNameText(){return this.step!=this.stepsCount?`Следующий шаг: ${this.stepName}`:this.stepName}},data(){return{}}},D=y,O=(0,i.Z)(D,b,g,!1,null,null,null),$=O.exports,j={mixins:[h.oE],components:{ProgressBar:$},props:{stepNumber:{type:Number,default:1},stepsCount:{type:Number,default:1},formData:{type:Object,default(){return{name:"",email:"",surname:"",lastname:"",date:"",country:"",agreement:!0}}}},data(){return{formDataObj:{...this.formData}}},validations:{formDataObj:{name:{required:C.C1},email:{email:C.Do},surname:{required:C.C1},lastname:{required:C.C1},date:{required:C.C1},country:{required:C.C1}}},methods:{nextStep(){this.$v.$invalid?this.$v.$touch():this.$emit("next-step",2,this.formDataObj)}}},k=j,x=(0,i.Z)(k,v,_,!1,null,"550523d4",null),w=x.exports,S=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"title"},[t._v("Подтверждение удаленной идентификации")]),e("div",{staticClass:"subtitle"},[t._v("Мы отправили SMS с кодом на ваш номер телефона")]),e("progress-bar",{attrs:{step:t.stepNumber,stepsCount:t.stepsCount,stepName:"Подписание договора"}}),e("form",{staticClass:"multistep-form__form",on:{submit:function(e){return e.preventDefault(),t.nextStep.apply(null,arguments)}}},[e("div",{staticClass:"multistep-form__form-item"},[e("label",{staticClass:"multistep-form__code",attrs:{for:"code"}},[t._v("Код")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],class:{invalid:t.$v.code.$dirty&&!t.$v.code.required},attrs:{type:"number",id:"code",placeholder:"Введите код из смс"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.code.$dirty&&!t.$v.code.required?e("div",{staticClass:"multistep-form__form-error"},[t._v(" Поле обязательно к заполнению ")]):t._e()]),e("button",{staticClass:"multistep-form__button",attrs:{type:"submit",disabled:t.buttonDisabled}},[t._v(" Проверить код ")])]),e("div",{staticClass:"code-counter"},[e("span",{staticClass:"code-counter__text"},[t._v("Отправить код повторно через")]),t.count?e("span",{staticClass:"code-counter__value"},[t._v(t._s(t.count)+" секунд")]):e("button",{staticClass:"code-counter__repeat",attrs:{type:"button"},on:{click:function(e){return t.sendCode()}}},[e("span",[t._v("отправить заново")])])])],1)},N=[],Z={mixins:[h.oE],props:{stepNumber:{type:Number,default:1},stepsCount:{type:Number,default:1}},components:{ProgressBar:$},data(){return{buttonDisabled:!0,count:3,code:"",timer:null}},validations:{code:{required:C.C1}},mounted(){this.startTimer()},methods:{nextStep(){this.$v.$invalid?this.$v.$touch():this.$emit("next-step",3,{code:this.code})},sendCode(){this.count=80,this.startTimer()},startTimer(){this.stopTimer(),this.timer=setInterval((()=>{0===this.count?(this.stopTimer(),this.buttonDisabled=!1):this.count--}),1e3)},stopTimer(){clearInterval(this.timer)}}},q=Z,H=(0,i.Z)(q,S,N,!1,null,"04ebf342",null),P=H.exports,T=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"title"},[t._v("Условия")]),e("progress-bar",{attrs:{step:t.stepNumber,stepsCount:t.stepsCount,stepName:"Подписание договора"}}),e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._m(0),t._m(1),e("button",{staticClass:"multistep-form__button",attrs:{type:"submit"}},[t._v(" Подписать договор ")])])],1)},M=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"dogovor-info"},[e("li",{staticClass:"dogovor-info__item"},[e("div",{staticClass:"dogovor-info__name"},[t._v("Сумма займа:")]),e("div",{staticClass:"dogovor-info__value"},[t._v("23 000 ₽")])]),e("li",{staticClass:"dogovor-info__item"},[e("div",{staticClass:"dogovor-info__name"},[t._v("Дата возврата:")]),e("div",{staticClass:"dogovor-info__value"},[t._v("25 500 ₽")])]),e("li",{staticClass:"dogovor-info__item"},[e("div",{staticClass:"dogovor-info__name"},[t._v("Плата за заём:")]),e("div",{staticClass:"dogovor-info__value"},[t._v("300 ₽")])]),e("li",{staticClass:"dogovor-info__item"},[e("div",{staticClass:"dogovor-info__name"},[t._v("Ставка:")]),e("div",{staticClass:"dogovor-info__value"},[t._v("0.9%")])]),e("li",{staticClass:"dogovor-info__item"},[e("div",{staticClass:"dogovor-info__name"},[t._v("ПСК:")]),e("div",{staticClass:"dogovor-info__value"},[t._v("30.04.2020")])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"dogovor-links"},[e("li",{staticClass:"dogovor-links__item"},[e("a",{attrs:{href:"#"}},[t._v('Проект сертификата дистанционный "Помощник Ц"')])]),e("li",{staticClass:"dogovor-links__item"},[e("a",{attrs:{href:"#"}},[t._v('Памятка использования "Помощника Ц"')])]),e("li",{staticClass:"dogovor-links__item"},[e("a",{attrs:{href:"#"}},[t._v("Согласие на подключение рекуррентного платежа")])])])}],L={props:{stepNumber:{type:Number,default:1},stepsCount:{type:Number,default:1}},components:{ProgressBar:$},data(){return{}},methods:{submitForm(){this.$emit("change-check-agreement",{})}}},V=L,A=(0,i.Z)(V,T,M,!1,null,null,null),B=A.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"check-loader"},[t.load?e("div",{staticClass:"check-loader__state"},[e("div",{staticClass:"check-loader__icon"},[e("svg",{staticStyle:{margin:"auto",display:"block","shape-rendering":"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"150px",height:"150px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[e("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#ff0000","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"2.6315789473684212s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})],1)])]),t._m(0)]):e("div",{staticClass:"check-loader__state"},[e("div",{staticClass:"check-loader__icon check-loader__icon--complete"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",width:"150px",height:"150px"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),t._m(1),e("button",{staticClass:"multistep-form__button multistep-form__button--loader",attrs:{type:"button"},on:{click:function(e){return t.hideLoader()}}},[t._v(" ОК ")])])])},U=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"check-loader__text"},[t._v(" Проверка ваших данных!"),e("br"),t._v(" Это займет до 30 минут! ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"check-loader__text"},[t._v(" Договор подписан."),e("br"),t._v(" Ожидайте поступления денежных средств. ")])}],F={props:{load:{type:Boolean,default:!0}},data(){return{}},methods:{hideLoader(){this.$emit("hide-check-loader")}}},R=F,K=(0,i.Z)(R,E,U,!1,null,"38ea2b76",null),z=K.exports,I={components:{StepOne:w,StepTwo:P,StepThree:B,CheckLoader:z},data(){return{currentStep:1,formData:{agreement:!0},checkAgreement:!1,stepsCount:3,checkLoaderStatus:!1,headers:{"Content-Type":"application/json",Authorization:"Bearer 12345"}}},computed:{currentStepComponent(){switch(this.currentStep){case 1:return"StepOne";case 2:return"StepTwo";case 3:return"StepThree";default:return"StepOne"}}},mounted(){document.addEventListener("keydown",this.handleKeyDown)},beforeDestroy(){document.removeEventListener("keydown",this.handleKeyDown)},methods:{nextStep(t,e){JSON.stringify(this.formData)!==JSON.stringify(e)?this.mockRequest(e,this.headers).then((r=>{const a={success:!0,data:r.data};console.log(a),this.changeStep(t,e)})).catch((()=>{const t={success:!1,error:"Текст ошибки"};console.error(t)})):this.currentStep=t},changeStep(t,e){0!=t&&(this.currentStep=t,this.formData={...this.formData,...e})},handleKeyDown(t){37!==t.keyCode&&27!==t.keyCode||this.changeStep(this.currentStep-1)},changeCheckAgreement(t){this.formData={...this.formData,...t},this.checkAgreement=!0,this.checkLoaderStatus=!0,this.mockRequest(this.formData,this.headers).then((t=>{const e={success:!0,data:t.data};console.log(e),this.checkLoaderStatus=!1})).catch((()=>{const t={success:!1,error:"Текст ошибки"};console.error(t)}))},hideCheckLoader(){this.checkAgreement=!1,this.changeStep(1),this.formData={}},mockRequest(t,e){return new Promise((t=>{console.log(e),setTimeout((()=>{t({status:200,data:{success:!0,data:{info:"Test"}}})}),1e3)}))}}},J=I,Y=(0,i.Z)(J,p,f,!1,null,null,null),G=Y.exports,Q={name:"HomeView",components:{MultistepFrom:G}},W=Q,X=(0,i.Z)(W,c,d,!1,null,null,null),tt=X.exports;a.ZP.use(u.ZP);const et=[{path:"/",name:"home",component:tt}],rt=new u.ZP({routes:et});var at=rt;a.ZP.config.productionTip=!1,a.ZP.use(h.ZP),new a.ZP({router:at,render:t=>t(m)}).$mount("#app")}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,s,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],o=t[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(n=!1,o<i&&(i=o));if(n){t.splice(u--,1);var m=s();void 0!==m&&(e=m)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,s,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,i=a[0],n=a[1],l=a[2],m=0;if(i.some((function(e){return 0!==t[e]}))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(l)var u=l(r)}for(e&&e(a);m<i.length;m++)o=i[m],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkmultistep_form"]=self["webpackChunkmultistep_form"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1635)}));a=r.O(a)})();
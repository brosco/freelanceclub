"use strict";(globalThis["webpackChunkfreelanceclub"]=globalThis["webpackChunkfreelanceclub"]||[]).push([[962],{8407:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Ze});var o=t(9835),n=t(23),a=t(6320),r=t(499),i=t(267),u=t(3751),s=t(8990),d=t(2151),c=t(6850),p=t(992),m=t(3247);const f=(0,o.aZ)({__name:"field-project-title",props:{modelValue:null},setup(e){const{requiredRule:l,maxLengthRule:t,minLengthRule:n}=(0,p.Z)(),a=(0,m.Z)(),i=(0,c.F)(),{project:{titleLengthMax:u,titleLengthMin:s}}=i.config,d=[e=>l(e),e=>t(e,u),e=>n(e,s)];return(e,l)=>{const t=(0,o.up)("q-input");return(0,o.wg)(),(0,o.j4)(t,{modelValue:(0,r.SU)(a),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,r.dq)(a)?a.value=e:null),modelModifiers:{trim:!0},hint:e.$t("form.field.constraints.range",{min:(0,r.SU)(s),max:e.$t("plural.symbol",(0,r.SU)(u))}),label:e.$t("entity.project.title"),maxlength:(0,r.SU)(u),placeholder:e.$t("form.project.placeholder.title"),rules:d,"aria-required":"",counter:"","lazy-rules":"","no-error-icon":""},null,8,["modelValue","hint","label","maxlength","placeholder"])}}});var v=t(4152),g=t(9984),h=t.n(g);const b=f,y=b;h()(f,"components",{QInput:v.Z});var w=t(6970);const V={autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false"},j={"aria-required":"",for:"project-description"},_=(0,o.aZ)({__name:"field-project-description",props:{modelValue:null},setup(e){const{requiredRule:l,maxLengthRule:t,minLengthRule:n}=(0,p.Z)(),a=(0,m.Z)(),i=(0,c.F)(),{project:{descriptionLengthMin:u,descriptionLengthMax:s}}=i.config,d=[e=>l(e),e=>t(e,s),e=>n(e,u)];return(e,l)=>{const t=(0,o.up)("q-editor"),n=(0,o.up)("q-field");return(0,o.wg)(),(0,o.iD)("form",V,[(0,o._)("label",j,(0,w.zw)(e.$t("entity.project.description")),1),(0,o.Wm)(t,{id:"user-description",modelValue:(0,r.SU)(a),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,r.dq)(a)?a.value=e:null),placeholder:e.$t("form.project.placeholder.description"),toolbar:[["bold","italic","strike","underline","link","unordered","ordered","undo","redo","fullscreen","removeFormat"]],height:"20rem"},null,8,["modelValue","placeholder"]),(0,o.Wm)(n,{modelValue:(0,r.SU)(a),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,r.dq)(a)?a.value=e:null),hint:e.$t("form.field.constraints.range",{min:(0,r.SU)(u),max:e.$t("plural.symbol",(0,r.SU)(s))}),rules:d,borderless:"",class:"thin-q-field",counter:"","hide-bottom-space":"","no-error-icon":""},null,8,["modelValue","hint"])])}}});var q=t(1236),Z=t(8149);const x=_,k=x;h()(_,"components",{QEditor:q.Z,QField:Z.Z});var U=t(6281),S=t(1809),$=t(7712);const M={"aria-required":"",for:"project-skills"},W={id:"project-skills",class:"q-gutter-xs row"},Q={class:"col self-center"},D={class:"text-right"},P={class:"text-h6 text-weight-bold q-mb-sm"},O=(0,o.aZ)({__name:"field-project-skills",props:{modelValue:null},setup(e){const l=(0,U.k)(),{t}=(0,$.QT)(),n=(0,c.F)(),{project:{skillsMin:a,skillsMax:i}}=n.config,{skillsGrouping:u}=(0,S.Jk)(l),s=l.skillsList,d=(0,m.Z)("modelValue",!0),p=(0,r.iH)([]),f=e=>{p.value=s.filter((l=>e.some((e=>e===l.slug)))).sort(((e,l)=>e.slug<l.slug?-1:e.slug>l.slug?1:0))};(0,o.YP)(d,(e=>{f(e)})),(0,o.bv)((()=>{f(d.value)}));const v=e=>{const l=JSON.parse(JSON.stringify(d.value)),t=l.indexOf(e);-1!==t&&(l.splice(t,1),d.value=l)},g=[()=>d.value.length>=a&&d.value.length<=i||t("form.project.skill.error",{count:t("form.field.constraints.range",{min:a,max:t("plural.skill",i)})})],h=e=>d.value.length>=i&&-1===d.value.indexOf(e),b=(0,r.iH)(!1);return(e,l)=>{const t=(0,o.up)("q-btn"),n=(0,o.up)("q-chip"),s=(0,o.up)("q-field"),c=(0,o.up)("q-toggle"),m=(0,o.up)("q-card"),f=(0,o.up)("q-dialog"),y=(0,o.Q2)("masonry");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("label",M,(0,w.zw)(e.$t("entity.project.skills")),1),(0,o._)("div",W,[(0,o._)("div",Q,[(0,o.Wm)(t,{class:"q-mr-sm",outline:"",onClick:l[0]||(l[0]=e=>b.value=!0)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,w.zw)(e.$t("form.project.skill.select")),1)])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.value,(({slug:e,name:l})=>((0,o.wg)(),(0,o.j4)(n,{key:e,color:"primary",removable:"","text-color":"white",onRemove:l=>v(e)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,w.zw)(l),1)])),_:2},1032,["onRemove"])))),128))])]),(0,o.Wm)(s,{modelValue:(0,r.SU)(d),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,r.dq)(d)?d.value=e:null),hint:e.$t("form.field.constraints.range",{min:(0,r.SU)(a),max:e.$t("plural.skill",(0,r.SU)(i))}),rules:g,borderless:"",class:"thin-q-field","hide-bottom-space":"","no-error-icon":""},null,8,["modelValue","hint"]),(0,o.Wm)(f,{id:"modal",modelValue:b.value,"onUpdate:modelValue":l[4]||(l[4]=e=>b.value=e),"full-width":"","transition-duration":"500","transition-hide":"scale","transition-show":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:(0,w.C_)([{"cut-width":e.$q.screen.gt.md},"q-pa-md"])},{default:(0,o.w5)((()=>[(0,o._)("div",D,[(0,o.Wm)(t,{icon:"close",outline:"",round:"",onClick:l[2]||(l[2]=e=>b.value=!1)})]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(u),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.slug,class:"q-pa-sm q-mb-lg"},[(0,o._)("div",P,(0,w.zw)(e.name),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(({name:e,slug:t})=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o.Wm)(c,{modelValue:(0,r.SU)(d),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,r.dq)(d)?d.value=e:null),disable:h(t),label:e,val:t},null,8,["modelValue","disable","label","val"])])))),128))])))),128))])),[[y]])])),_:1},8,["class"])])),_:1},8,["modelValue"])],64)}}});var F=t(1639),z=t(8879),R=t(7691),H=t(2074),L=t(4458),C=t(3175);const T=(0,F.Z)(O,[["__scopeId","data-v-440eacb7"]]),A=T;h()(O,"components",{QBtn:z.Z,QChip:R.Z,QField:Z.Z,QDialog:H.Z,QCard:L.Z,QToggle:C.Z});var I=t(6921);const N=(0,o.aZ)({__name:"field-project-expired-at",props:{modelValue:null},setup(e){const l=(0,c.F)(),{project:{expiredAtFrom:t,expiredAtTo:n}}=l.config,a=(0,s.Z)((0,d.Z)(new Date,t),"yyyy/MM/dd"),i=(0,s.Z)((0,d.Z)(new Date,n),"yyyy/MM/dd"),u=(0,m.Z)(),p=(0,o.Fl)((()=>(0,s.Z)(new Date(u.value),"PPPP",{locale:I.Z}))),f=(0,r.iH)();return(e,l)=>{const t=(0,o.up)("q-date"),n=(0,o.up)("q-popup-proxy"),s=(0,o.up)("q-input");return(0,o.wg)(),(0,o.j4)(s,{label:e.$t("entity.project.expiredAt"),"model-value":(0,r.SU)(p),"aria-required":""},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{ref_key:"refPopupProxy",ref:f,"transition-hide":"jump-up","transition-show":"jump-down"},{default:(0,o.w5)((()=>[(0,o.Wm)(t,{modelValue:(0,r.SU)(u),"onUpdate:modelValue":[l[0]||(l[0]=e=>(0,r.dq)(u)?u.value=e:null),l[1]||(l[1]=l=>e.$refs.refPopupProxy.hide())],options:e=>e>=(0,r.SU)(a)&&e<=(0,r.SU)(i),"no-unset":""},null,8,["modelValue","options"])])),_:1},512)])),_:1},8,["label","model-value"])}}});var Y=t(2765),E=t(2535);const J=N,K=J;h()(N,"components",{QInput:v.Z,QPopupProxy:Y.Z,QDate:E.Z});const B=(0,o.aZ)({__name:"field-project-budget",props:{modelValue:null},setup(e){const l=(0,c.F)(),t=(0,m.Z)(),{maxValueRule:n}=(0,p.Z)(),{project:{budgetMax:a}}=l.config,i=[e=>n(e,a)];return(e,l)=>{const n=(0,o.up)("q-input");return(0,o.wg)(),(0,o.j4)(n,{modelValue:(0,r.SU)(t),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,r.dq)(t)?t.value=e:null),hint:e.$t("form.project.budget.hint"),label:e.$t("entity.project.budget"),rules:i,"no-error-icon":""},{append:(0,o.w5)((()=>[(0,o.Uk)(" USD")])),_:1},8,["modelValue","hint","label"])}}}),G=B,X=G;h()(B,"components",{QInput:v.Z});var ee=t(2275),le=t(606),te=t(442),oe=t(8339),ne=(t(6354),t(1957));const ae=(0,o.aZ)({__name:"field-project-file",props:{modelValue:null},setup(e){const l=(0,m.Z)(),t=(0,c.F)(),{project:{fileMaxSize:n,fileMaxSizeText:a}}=t.config;return(e,t)=>{const i=(0,o.up)("q-icon"),u=(0,o.up)("q-file");return(0,o.wg)(),(0,o.j4)(u,{modelValue:(0,r.SU)(l),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.dq)(l)?l.value=e:null),hint:`${e.$t("form.field.constraints.fileSize",{size:(0,r.SU)(a)})}`,label:e.$t("entity.project.files"),"max-file-size":(0,r.SU)(n)},{prepend:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"attach_file"})])),append:(0,o.w5)((()=>[(0,r.SU)(l)?((0,o.wg)(),(0,o.j4)(i,{key:0,class:"cursor-pointer",name:"close",onClick:t[0]||(t[0]=(0,ne.iM)((e=>l.value=void 0),["stop","prevent"]))})):(0,o.kq)("",!0)])),_:1},8,["modelValue","hint","label","max-file-size"])}}});var re=t(9420),ie=t(2857);const ue=ae,se=ue;h()(ae,"components",{QFile:re.Z,QIcon:ie.Z});var de=function(e,l,t,o){function n(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,a){function r(e){try{u(o.next(e))}catch(l){a(l)}}function i(e){try{u(o["throw"](e))}catch(l){a(l)}}function u(e){e.done?t(e.value):n(e.value).then(r,i)}u((o=o.apply(e,l||[])).next())}))},ce=function(e,l){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&l.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)l.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t};const pe={class:"row q-mb-lg"},me={class:"col"},fe={class:"row q-mb-lg"},ve={class:"col"},ge={class:"row q-mb-lg"},he={class:"col"},be={class:"row q-mb-lg q-col-gutter-md"},ye={class:"col-12 col-md-4"},we={class:"col-12 col-md-4"},Ve={class:"col-12 col-md-4"},je=(0,o.aZ)({__name:"create",setup(e){const l=(0,c.F)(),t=(0,ee._)(),{showSuccessNotify:p,showErrorNotify:m}=(0,le.Z)(),f=(0,te.useReCaptcha)(),{t:v}=(0,$.QT)(),g=(0,oe.tv)(),{project:{expiredAtTo:h,budgetMax:b,skillsMax:w,skillsMin:V}}=l.config,j=(0,r.iH)(),_=(0,r.iH)(!1),q=(0,r.qj)({description:"",expiredAt:(0,s.Z)((0,d.Z)(new Date,h),"yyyy/MM/dd"),skills:[]});const Z=()=>de(this,void 0,void 0,(function*(){return yield null===f||void 0===f?void 0:f.recaptchaLoaded(),null===f||void 0===f?void 0:f.executeRecaptcha("projects_create")})),{createProject:x}=t,U=()=>de(this,void 0,void 0,(function*(){const{budget:e}=q,l=ce(q,["budget"]),t=Object.assign(Object.assign({},l),{budget:e&&Math.round(Number(e))>0?Math.round(Number(e)):void 0,recaptcha:yield Z()});_.value=!0;try{yield x(t),p(v("notify.project.create.success")),_.value=!1,yield g.push({name:"my-projects"})}catch(o){m(v("notify.project.create.error")),_.value=!1}}));return(e,l)=>{const t=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(t,{ref_key:"formRef",ref:j,onSubmit:U},{default:(0,o.w5)((()=>[(0,o.Wm)(u.Z,{header:e.$t(e.$route.meta.title),"is-busy":_.value},{default:(0,o.w5)((()=>[(0,o._)("div",pe,[(0,o._)("div",me,[(0,o.Wm)(y,{modelValue:q.title,"onUpdate:modelValue":l[0]||(l[0]=e=>q.title=e)},null,8,["modelValue"])])]),(0,o._)("div",fe,[(0,o._)("div",ve,[(0,o.Wm)(k,{modelValue:q.description,"onUpdate:modelValue":l[1]||(l[1]=e=>q.description=e)},null,8,["modelValue"])])]),(0,o._)("div",ge,[(0,o._)("div",he,[(0,o.Wm)(A,{modelValue:q.skills,"onUpdate:modelValue":l[2]||(l[2]=e=>q.skills=e)},null,8,["modelValue"])])]),(0,o._)("div",be,[(0,o._)("div",ye,[(0,o.Wm)(K,{modelValue:q.expiredAt,"onUpdate:modelValue":l[3]||(l[3]=e=>q.expiredAt=e)},null,8,["modelValue"])]),(0,o._)("div",we,[(0,o.Wm)(X,{modelValue:q.budget,"onUpdate:modelValue":l[4]||(l[4]=e=>q.budget=e)},null,8,["modelValue"])]),(0,o._)("div",Ve,[(0,o.Wm)(se,{modelValue:q.file,"onUpdate:modelValue":l[5]||(l[5]=e=>q.file=e)},null,8,["modelValue"])])])])),_:1},8,["header","is-busy"])])),_:1},512),(0,o.Wm)(n.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a.Z,{label:e.$t("form.list"),to:{name:"my-projects"}},null,8,["label"]),(0,o.Wm)(i.Z,{disable:_.value,label:e.$t("form.project.submit"),"on-click":()=>j.value.submit()},null,8,["disable","label","on-click"])])),_:1})],64)}}});var _e=t(8326);const qe=je,Ze=qe;h()(je,"components",{QForm:_e.Z})}}]);
"use strict";(globalThis["webpackChunkfreelanceclub"]=globalThis["webpackChunkfreelanceclub"]||[]).push([[449],{5449:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var l=a(9835),n=a(499),o=a(6970),r=a(23);const s=(0,l.aZ)({__name:"sticky-button-action-goto",props:{to:null,icon:null,label:null},setup(e){return(t,a)=>{const n=(0,l.up)("q-fab-action");return(0,l.wg)(),(0,l.j4)(n,{"hide-label":t.$q.screen.lt.md,icon:e.icon,label:e.label,padding:t.$q.screen.lt.md?"sm":"md",to:e.to,color:"primary"},null,8,["hide-label","icon","label","padding","to"])}}});var i=a(935),c=a(9984),p=a.n(c);const d=s,u=d;p()(s,"components",{QFabAction:i.Z});var m=a(2275),w=a(3751),g=a(8339),k=a(1809);const b={key:0,class:"q-pa-lg flex flex-center"},y=(0,l.aZ)({__name:"paginator",props:{pages:null,currentPage:null},setup(e){return(t,a)=>{const n=(0,l.up)("q-pagination");return e.pages>1?((0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(n,{max:e.pages,"max-pages":6,"model-value":e.currentPage,"to-fn":e=>({query:{page:e}}),"direction-links":"",size:"xl"},null,8,["max","model-value","to-fn"])])):(0,l.kq)("",!0)}}});var _=a(996);const v=y,q=v;p()(y,"components",{QPagination:_.Z});var f=a(8990),Z=a(6921);const j={class:"caption-timestamps"},D=["title"],$=["title"],U=(0,l.aZ)({__name:"timestamps",props:{createdAt:null,updatedAt:null},setup(e){return(t,a)=>{const r=(0,l.up)("q-icon");return(0,l.wg)(),(0,l.iD)("div",j,[(0,l._)("div",{title:t.$t("entity.createdAt")},[(0,l.Wm)(r,{name:"post_add"}),(0,l.Uk)(" "+(0,o.zw)((0,n.SU)(f.Z)(new Date(e.createdAt),"PPP HH:mm:ss",{locale:(0,n.SU)(Z.Z)})),1)],8,D),(0,l._)("div",{title:t.$t("entity.updatedAt")},[(0,l.Wm)(r,{name:"edit"}),(0,l.Uk)(" "+(0,o.zw)((0,n.SU)(f.Z)(new Date(e.updatedAt),"PPP HH:mm:ss",{locale:(0,n.SU)(Z.Z)})),1)],8,$)])}}});var h=a(2857);const x=U,z=x;p()(U,"components",{QIcon:h.Z});const S=(0,l.aZ)({__name:"skill-badge",props:{label:null},setup(e){return(t,a)=>{const n=(0,l.up)("q-badge");return(0,l.wg)(),(0,l.j4)(n,{label:e.label,class:"q-ma-xs skill-badge q-pa-xs",color:"teal"},null,8,["label"])}}});var W=a(1639),P=a(990);const A=(0,W.Z)(S,[["__scopeId","data-v-02e2a0ce"]]),H=A;p()(S,"components",{QBadge:P.Z});var Y=a(6281),Q=a(6850);const B={key:3},C={key:4},I={class:"caption"},F={class:"text-weight-bold"},K={class:"caption"},J={key:5},T={class:"caption"},L=["href"],N=(0,l.aZ)({__name:"grid-project-row-main",props:{row:null,control:{type:Boolean}},setup(e){const t=(0,Y.k)(),a=(0,Q.F)(),{skillsList:r}=(0,k.Jk)(t),{uploadFileDir:s}=a.config,i=`http://localhost/${s}`;return(t,a)=>{const s=(0,l.up)("q-badge"),c=(0,l.up)("router-link"),p=(0,l.up)("q-icon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e.row.banned?((0,l.wg)(),(0,l.j4)(s,{key:0,class:"q-mx-xs",color:"red"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.$t("entity.project.banned")),1)])),_:1})):e.row.closed?((0,l.wg)(),(0,l.j4)(s,{key:1,class:"q-mx-xs",color:"dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.$t("entity.project.closed")),1)])),_:1})):new Date(e.row.expiredAt)<new Date?((0,l.wg)(),(0,l.j4)(s,{key:2,class:"q-mx-xs",color:"yellow-9"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.$t("entity.project.expired")),1)])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(c,{title:e.control&&t.$t("form.edit")||void 0,to:{name:e.control?"my-projects-edit":"projects-show",params:{id:e.row.id}}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.row.title),1)])),_:1},8,["title","to"]),t.$q.screen.lt.md?((0,l.wg)(),(0,l.iD)("div",B,[(0,l.Wm)(p,{name:"alarm"}),(0,l.Uk)(" "+(0,o.zw)((0,n.SU)(f.Z)(new Date(e.row.expiredAt),"PPP",{locale:(0,n.SU)(Z.Z)})),1)])):(0,l.kq)("",!0),e.row.budget?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("span",I,(0,o.zw)(t.$t("entity.project.budget"))+": ",1),(0,l._)("span",F,(0,o.zw)(e.row.budget)+" USD",1)])):(0,l.kq)("",!0),(0,l._)("div",null,[(0,l._)("div",K,(0,o.zw)(t.$t("entity.project.skills"))+":",1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.skills,(e=>((0,l.wg)(),(0,l.j4)(H,{key:e,label:(0,n.SU)(r).find((({slug:t})=>t===e))["name"]},null,8,["label"])))),128))]),e.row.files&&e.row.files.length?((0,l.wg)(),(0,l.iD)("div",J,[(0,l._)("div",T,(0,o.zw)(t.$t("entity.project.files"))+":",1),(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.files,(({dir:e,name:t})=>((0,l.wg)(),(0,l.iD)("a",{key:t,href:`${i}${e}/${t}`,target:"_blank"},(0,o.zw)(t),9,L)))),128))])])):(0,l.kq)("",!0),t.$q.screen.lt.md?((0,l.wg)(),(0,l.j4)(z,{key:6,"created-at":e.row.createdAt,"updated-at":e.row.updatedAt},null,8,["created-at","updated-at"])):(0,l.kq)("",!0)],64)}}}),R=N,E=R;p()(N,"components",{QBadge:P.Z,QIcon:h.Z});const G=["title"],M=(0,l.aZ)({__name:"grid-project-row-side",props:{row:null},setup(e){return(t,a)=>{const r=(0,l.up)("q-icon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{title:t.$t("entity.project.expiredAt"),class:"text-h6"},[(0,l.Wm)(r,{name:"alarm",size:"md"}),(0,l.Uk)(" "+(0,o.zw)((0,n.SU)(f.Z)(new Date(e.row.expiredAt),"PPP",{locale:(0,n.SU)(Z.Z)})),1)],8,G),(0,l.Wm)(z,{"created-at":e.row.createdAt,"updated-at":e.row.updatedAt},null,8,["created-at","updated-at"])],64)}}}),O=M,V=O;p()(M,"components",{QIcon:h.Z});var X=a(606);const ee=(0,l.aZ)({__name:"grid-project-row-control",props:{row:null},setup(e){const{confirmRemove:t}=(0,X.Z)(),a=(0,g.tv)();return(o,r)=>{const s=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s,{label:o.$t("form.openBlank"),to:{name:"projects-show",params:{id:e.row.id}},color:"primary",flat:"",padding:"sm",size:"sm",target:"_blank"},null,8,["label","to"]),(0,l.Wm)(s,{label:o.$t("form.remove"),color:"red",flat:"",padding:"sm",size:"sm",type:"a",onClick:r[0]||(r[0]=l=>(0,n.SU)(t)((()=>(0,n.SU)(a).push({name:"my-projects-remove",params:{id:e.row.id}}))))},null,8,["label"])],64)}}});var te=a(8879);const ae=ee,le=ae;p()(ee,"components",{QBtn:te.Z});const ne={class:"row justify-between"},oe={class:"col"},re={key:0,class:"col-auto"},se={key:0,class:"text-right"},ie=(0,l.aZ)({__name:"grid-project",props:{pagination:null,control:{type:Boolean,default:!1},page:null},setup(e){return(t,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.pagination.items,((a,n)=>((0,l.wg)(),(0,l.iD)("div",{key:a.id,class:"grid-row"},[(0,l._)("div",{class:(0,o.C_)({"q-px-md":t.$q.screen.gt.sm,separator:n!==e.pagination.items.length-1})},[(0,l._)("div",ne,[(0,l._)("div",oe,[(0,l.Wm)(E,{control:e.control,row:a},null,8,["control","row"])]),t.$q.screen.gt.sm?((0,l.wg)(),(0,l.iD)("div",re,[(0,l.Wm)(V,{row:a},null,8,["row"])])):(0,l.kq)("",!0)]),e.control?((0,l.wg)(),(0,l.iD)("div",se,[(0,l.Wm)(le,{row:a},null,8,["row"])])):(0,l.kq)("",!0)],2)])))),128)),(0,l.Wm)(q,{"current-page":e.page,pages:e.pagination.pages},null,8,["current-page","pages"])],64))}}),ce=ie,pe=ce,de={key:0},ue=(0,l.aZ)({__name:"projects",setup(e){const t=(0,m._)(),a=(0,g.yj)(),{pagination:s}=(0,k.Jk)(t),{fetchPagination:i}=t,c=a.query.page?Number(a.query.page):t.page||1;return(0,l.bv)((()=>{i(c)})),(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(w.Z,{header:e.$t(e.$route.meta.title),"is-busy":!(0,n.SU)(s)},{default:(0,l.w5)((()=>[(0,n.SU)(s)?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,n.SU)(s).items.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",de,(0,o.zw)(e.$t("my.page.projects.empty")),1)),(0,l.Wm)(pe,{page:(0,n.SU)(c),pagination:(0,n.SU)(s),control:""},null,8,["page","pagination"])],64)):(0,l.kq)("",!0)])),_:1},8,["header","is-busy"]),(0,l.Wm)(r.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:e.$t("form.create"),to:{name:"my-projects-create"},icon:"add"},null,8,["label"])])),_:1})],64))}}),me=ue,we=me}}]);
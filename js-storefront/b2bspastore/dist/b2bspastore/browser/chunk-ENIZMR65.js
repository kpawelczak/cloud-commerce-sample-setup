import{a as S,b as G,c as oe,f as ae,g as ce}from"./chunk-ZNQYGS4X.js";import"./chunk-RCUU6GNS.js";import{b as it}from"./chunk-GNHSTGT6.js";import"./chunk-3NMFI77G.js";import{H as ne,V as rt}from"./chunk-BWCDIGIH.js";import{D as ee,E as re,H as ie,b as Qt,d as Jt,j as Kt,o as te}from"./chunk-AKYAGOAQ.js";import{$b as At,Ce as Vt,Db as _t,Ea as vt,Eb as m,Fa as yt,Fb as K,Fe as Bt,Gb as A,Gc as V,Gd as jt,Ge as O,I as j,Ka as Rt,N as R,Ob as bt,Pf as zt,Qb as tt,Qc as St,Qf as Ht,R as y,Sa as s,Sd as c,Ta as Y,Td as Yt,Wb as T,Xb as v,Yb as et,Yd as kt,a as l,b as D,bb as b,cb as k,db as h,dd as Dt,ed as $,ef as qt,fd as Lt,fe as Xt,gd as wt,hd as Ut,ia as p,if as Zt,jb as C,kb as I,kd as x,la as z,lb as H,ld as $t,mb as W,md as N,nb as Q,nd as Mt,pb as Ft,pg as M,qa as E,qg as Wt,ra as F,rb as X,s as P,sa as L,sb as U,ta as g,tc as xt,ua as mt,uc as Nt,v as f,vb as J,wd as Gt,ya as w,yd as Pt,za as _,zc as Ot}from"./chunk-UZ26IE7K.js";var Ae=()=>({cxRoute:"cart"}),ue=(r,t)=>({value:r,attribute:t});function xe(r,t){if(r&1){let d=Ft();C(0,"div",6)(1,"cx-configurator-textfield-input-field",7),X("inputChange",function(i){vt(d);let n=U(3);return yt(n.updateConfiguration(i))}),I()()}if(r&2){let d=t.$implicit;s(),h("attribute",d)}}function Ne(r,t){if(r&1&&(W(0),C(1,"span",3),m(2),T(3,"cxTranslate"),I(),b(4,xe,2,1,"div",4),H(5,"cx-configurator-textfield-add-to-cart-button",5),Q()),r&2){let d=U().ngIf;s(2),A(" ",v(3,3,"configurator.a11y.editAttributesAndValues")," "),s(2),h("ngForOf",d.configurationInfos),s(),h("configuration",d)}}function Oe(r,t){if(r&1&&(C(0,"div",6),H(1,"cx-configurator-textfield-input-field-readonly",8),I()),r&2){let d=t.$implicit;s(),h("attribute",d)}}function Se(r,t){if(r&1&&(C(0,"span",3),m(1),T(2,"cxTranslate"),I(),b(3,Oe,2,1,"div",4)),r&2){let d=U().ngIf;s(),A(" ",v(2,2,"configurator.a11y.listOfAttributesAndValues")," "),s(2),h("ngForOf",d.configurationInfos)}}function De(r,t){if(r&1&&(W(0),b(1,Ne,6,5,"ng-container",2),T(2,"async"),b(3,Se,4,4,"ng-template",null,0,At),Q()),r&2){let d=_t(4),e=U();s(),h("ngIf",v(2,2,e.isEditable$))("ngIfElse",d)}}var ot;(function(r){let t;(function(d){d.SUCCESS="SUCCESS",d.ERROR="ERROR"})(t=r.ConfigurationStatus||(r.ConfigurationStatus={}))})(ot||(ot={}));var de="productConfigurationTextfield",u="[ConfiguratorTextfield] Configuration Data",fe="[Configurator] Create Configuration Textfield",Le="[Configurator] Create Configuration Textfield Fail",pe="[Configurator] Create Configuration Textfield Success",le="[Configurator] Update Configuration Textfield",ge="[Configurator] Add to cart Textfield",we="[Configurator] Add to cart Textfield Fail",Ce="[Configurator] Read cart entry configuration Textfield",Ue="[Configurator] Read cart entry configuration Textfield Fail",Ie="[Configurator] Read cart entry configuration Textfield Success",he="[Configurator] Read order entry configuration textfield",$e="[Configurator] Read order entry configuration textfield Fail",Te="[Configurator] Read order entry configuration textfield Success",Ee="[Configurator] Update cart entry configuration Textfield",Me="[Configurator] Update cart entry configuration Textfield Fail",me="[Configurator] Remove Configuration Textfield",at=class extends c.LoaderLoadAction{constructor(t){super(u),this.payload=t,this.type=fe}},ct=class extends c.LoaderFailAction{constructor(t){super(u,t),this.payload=t,this.type=Le}},st=class extends c.LoaderSuccessAction{constructor(t){super(u),this.payload=t,this.type=pe}},ut=class extends c.LoaderLoadAction{constructor(t){super(u),this.payload=t,this.type=le}},dt=class extends c.LoaderLoadAction{constructor(t){super(u),this.payload=t,this.type=ge}},ft=class extends c.LoaderFailAction{constructor(t){super(u,t),this.payload=t,this.type=we}},pt=class extends c.LoaderLoadAction{constructor(t){super(u),this.payload=t,this.type=Ee}},lt=class extends c.LoaderFailAction{constructor(t){super(u,t),this.payload=t,this.type=Me}},gt=class extends c.LoaderLoadAction{constructor(t){super(u),this.payload=t,this.type=Ce}},Ct=class extends c.LoaderSuccessAction{constructor(t){super(u),this.payload=t,this.type=Ie}},It=class extends c.LoaderFailAction{constructor(t){super(u,t),this.payload=t,this.type=Ue}},ht=class extends c.LoaderLoadAction{constructor(t){super(u),this.payload=t,this.type=he}},Tt=class extends c.LoaderSuccessAction{constructor(t){super(u),this.payload=t,this.type=Te}},Et=class extends c.LoaderFailAction{constructor(t){super(u,t),this.payload=t,this.type=$e}},q=class extends c.LoaderResetAction{constructor(){super(u),this.type=me}};var Ge=r=>r.loaderState.value,ve=wt(de),nt=Lt(ve,Ge);var ye=(()=>{let t=class t{constructor(e,i,n,o){this.store=e,this.activeCartService=i,this.configuratorUtils=n,this.userIdService=o,this.ensureConfigurationDefined=a=>a??{configurationInfos:[],owner:G.createInitialOwner()}}createConfiguration(e){return this.store.pipe($(ve),z(i=>{let n=i.loaderState.value,o=n!==void 0&&!G.isInitialOwner(n.owner),a=i.loaderState.loading;!o&&!a&&this.store.dispatch(new at({productCode:e.id,owner:e}))}),f(i=>i.loaderState.value),j(i=>!this.isConfigurationInitial(i)),f(this.ensureConfigurationDefined))}updateConfiguration(e){this.store.pipe($(nt),y(1)).subscribe(i=>{i&&this.store.dispatch(new ut(this.createNewConfigurationWithChange(e,i)))})}addToCart(e,i){this.activeCartService.requireLoadedCart().pipe(y(1)).subscribe(n=>{this.userIdService.getUserId().pipe(y(1)).subscribe(o=>{let a={userId:o,cartId:this.configuratorUtils.getCartId(n),productCode:e,configuration:i,quantity:1};this.store.dispatch(new dt(a))})})}updateCartEntry(e,i){this.activeCartService.requireLoadedCart().pipe(y(1)).subscribe(n=>{this.userIdService.getUserId().pipe(y(1)).subscribe(o=>{let a={userId:o,cartId:this.configuratorUtils.getCartId(n),cartEntryNumber:e,configuration:i};this.store.dispatch(new pt(a))})})}readConfigurationForCartEntry(e){return this.activeCartService.requireLoadedCart().pipe(p(i=>this.userIdService.getUserId().pipe(y(1),f(n=>({cart:i,userId:n}))).pipe(f(n=>({userId:n.userId,cartId:this.configuratorUtils.getCartId(n.cart),cartEntryNumber:e.id,owner:e})),z(n=>this.store.dispatch(new gt(n))),p(()=>this.store.pipe($(nt))),j(n=>!this.isConfigurationInitial(n)),f(this.ensureConfigurationDefined))))}readConfigurationForOrderEntry(e){let i=this.configuratorUtils.decomposeOwnerId(e.id),n={userId:Yt,orderId:i.documentId,orderEntryNumber:i.entryNumber,owner:e};return this.store.dispatch(new ht(n)),this.store.pipe($(nt),j(o=>!this.isConfigurationInitial(o)),f(this.ensureConfigurationDefined))}createNewConfigurationWithChange(e,i){let n={configurationInfos:[],owner:i.owner};return i.configurationInfos.forEach(o=>{o.configurationLabel===e.configurationLabel?(e.status=ot.ConfigurationStatus.SUCCESS,n.configurationInfos.push(e)):n.configurationInfos.push(o)}),n}isConfigurationInitial(e){return e===void 0||G.isInitialOwner(e.owner)}};t.\u0275fac=function(i){return new(i||t)(g(Dt),g(ne),g(oe),g(kt))},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})(),Pe=(()=>{let t=class t{constructor(e){this.configuratorTextfieldService=e}onAddToCart(){let e=this.configuration.owner;switch(e.type){case S.OwnerType.PRODUCT:this.configuratorTextfieldService.addToCart(e.id,this.configuration);break;case S.OwnerType.CART_ENTRY:this.configuratorTextfieldService.updateCartEntry(e.id,this.configuration);break}}getButtonText(){return this.configuration.owner.type===S.OwnerType.CART_ENTRY?"configurator.addToCart.buttonUpdateCart":"configurator.addToCart.button"}};t.\u0275fac=function(i){return new(i||t)(Y(ye))},t.\u0275cmp=w({type:t,selectors:[["cx-configurator-textfield-add-to-cart-button"]],inputs:{configuration:"configuration",productCode:"productCode"},decls:4,vars:7,consts:[[1,"cx-btn","btn","btn-block","btn-primary","cx-add-to-cart-btn",3,"click","routerLink"]],template:function(i,n){i&1&&(C(0,"button",0),T(1,"cxUrl"),X("click",function(){return n.onAddToCart()}),m(2),T(3,"cxTranslate"),I()),i&2&&(h("routerLink",v(1,2,bt(6,Ae))),s(2),A(" ",v(3,4,n.getButtonText()),`
`))},dependencies:[Gt,M,zt],encapsulation:2,changeDetection:0});let r=t;return r})(),je=(()=>{let t=class t{constructor(){this.PREFIX_TEXTFIELD="cx-configurator-textfield",this.attributeInputForm=new Kt(""),this.inputChange=new Rt}ngOnInit(){this.attributeInputForm.setValue(this.attribute.configurationValue)}onInputChange(){let e={configurationLabel:this.attribute.configurationLabel,configurationValue:this.attributeInputForm.value};this.inputChange.emit(e)}getIdLabel(e){return this.PREFIX_TEXTFIELD+"label"+this.getLabelForIdGeneration(e)}getId(e){return this.PREFIX_TEXTFIELD+this.getLabelForIdGeneration(e)}getLabelForIdGeneration(e){return e.configurationLabel.replace(/\s/g,"")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=w({type:t,selectors:[["cx-configurator-textfield-input-field"]],inputs:{attribute:"attribute"},outputs:{inputChange:"inputChange"},decls:6,vars:13,consts:[[1,"cx-configurator-textfield-label",3,"id"],[1,"form-group"],[1,"form-control",3,"change","formControl"]],template:function(i,n){i&1&&(C(0,"label",0),T(1,"cxTranslate"),m(2),I(),C(3,"div",1)(4,"input",2),T(5,"cxTranslate"),X("change",function(){return n.onInputChange()}),I()()),i&2&&(J("id",n.getIdLabel(n.attribute)),k("aria-label",v(1,5,"configurator.a11y.nameOfAttribute")),s(2),K(n.attribute.configurationLabel),s(2),h("formControl",n.attributeInputForm),k("aria-label",et(5,7,"configurator.a11y.valueOfAttributeFull",tt(10,ue,n.attribute.configurationValue,n.attribute.configurationLabel))))},dependencies:[Qt,Jt,te,M],encapsulation:2,changeDetection:0});let r=t;return r})(),Ye=(()=>{let t=class t{constructor(){this.PREFIX_TEXTFIELD="cx-configurator-textfield"}getIdLabel(e){return this.PREFIX_TEXTFIELD+"label"+this.getLabelForIdGeneration(e)}getLabelForIdGeneration(e){return e.configurationLabel.replace(/\s/g,"")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=w({type:t,selectors:[["cx-configurator-textfield-input-field-readonly"]],inputs:{attribute:"attribute"},decls:7,vars:11,consts:[[1,"cx-visually-hidden",3,"id"],["aria-hidden","true"]],template:function(i,n){i&1&&(C(0,"span",0),m(1),T(2,"cxTranslate"),I(),C(3,"label",1),m(4),I(),C(5,"div",1),m(6),I()),i&2&&(J("id",n.getIdLabel(n.attribute)),s(),A(" ",et(2,5,"configurator.a11y.valueOfAttributeFull",tt(8,ue,n.attribute.configurationValue,n.attribute.configurationLabel)),`
`),s(2),k("aria-describedby",n.getIdLabel(n.attribute)),s(),K(n.attribute.configurationLabel),s(2),A(" ",n.attribute.configurationValue,`
`))},dependencies:[M],encapsulation:2,changeDetection:0});let r=t;return r})(),ke=(()=>{let t=class t{constructor(e,i){this.configuratorTextfieldService=e,this.configRouterExtractorService=i,this.configuration$=this.configRouterExtractorService.extractRouterData().pipe(p(n=>{switch(n.owner.type){case S.OwnerType.CART_ENTRY:return this.configuratorTextfieldService.readConfigurationForCartEntry(n.owner);case S.OwnerType.ORDER_ENTRY:return this.configuratorTextfieldService.readConfigurationForOrderEntry(n.owner);default:return this.configuratorTextfieldService.createConfiguration(n.owner)}})),this.isEditable$=this.configRouterExtractorService.extractRouterData().pipe(f(n=>n.pageType===ae.PageType.CONFIGURATION))}updateConfiguration(e){this.configuratorTextfieldService.updateConfiguration(e)}};t.\u0275fac=function(i){return new(i||t)(Y(ye),Y(ce))},t.\u0275cmp=w({type:t,selectors:[["cx-configurator-textfield-form"]],decls:2,vars:3,consts:[["readonly",""],[4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"cx-visually-hidden"],["class","cx-attribute",4,"ngFor","ngForOf"],[3,"configuration"],[1,"cx-attribute"],[3,"inputChange","attribute"],[3,"attribute"]],template:function(i,n){i&1&&(b(0,De,5,4,"ng-container",1),T(1,"async")),i&2&&h("ngIf",v(1,1,n.configuration$))},dependencies:[xt,Nt,je,Ye,Pe,Ot,M],encapsulation:2});let r=t;return r})(),Xe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_({type:t}),t.\u0275inj=F({providers:[jt({cmsComponents:{TextfieldConfigurationForm:{component:ke}}})],imports:[Pt,ee,re,ie,V,Wt,Ht]});let r=t;return r})(),Z=class{},Re=(()=>{let t=class t{constructor(e){this.adapter=e}createConfiguration(e,i){return this.adapter.createConfiguration(e,i)}readConfigurationForCartEntry(e){return this.adapter.readConfigurationForCartEntry(e)}readConfigurationForOrderEntry(e){return this.adapter.readConfigurationForOrderEntry(e)}updateConfigurationForCartEntry(e){return this.adapter.updateConfigurationForCartEntry(e)}addToCart(e){return this.adapter.addToCart(e)}};t.\u0275fac=function(i){return new(i||t)(g(Z))},t.\u0275prov=E({token:t,factory:t.\u0275fac});let r=t;return r})(),Ve=(()=>{let t=class t{constructor(e,i){this.actions$=e,this.configuratorTextfieldConnector=i,this.logger=mt(Xt),this.createConfiguration$=x(()=>this.actions$.pipe(N(fe),f(n=>n.payload),p(n=>this.configuratorTextfieldConnector.createConfiguration(n.productCode,n.owner).pipe(p(o=>[new st(o)]),R(o=>P(new ct(O(o,this.logger)))))))),this.addToCart$=x(()=>this.actions$.pipe(N(ge),f(n=>n.payload),p(n=>this.configuratorTextfieldConnector.addToCart(n).pipe(p(()=>[new q,new it.LoadCart({cartId:n.cartId,userId:n.userId})]),R(o=>P(new ft(O(o,this.logger)))))))),this.updateCartEntry$=x(()=>this.actions$.pipe(N(Ee),f(n=>n.payload),p(n=>this.configuratorTextfieldConnector.updateConfigurationForCartEntry(n).pipe(p(()=>[new q,new it.LoadCart({cartId:n.cartId,userId:n.userId})]),R(o=>P(new lt(O(o,this.logger)))))))),this.readConfigurationForCartEntry$=x(()=>this.actions$.pipe(N(Ce),p(n=>{let o=n.payload;return this.configuratorTextfieldConnector.readConfigurationForCartEntry(o).pipe(p(a=>[new Ct(a)]),R(a=>[new It(O(a,this.logger))]))}))),this.readConfigurationForOrderEntry$=x(()=>this.actions$.pipe(N(he),p(n=>{let o=n.payload;return this.configuratorTextfieldConnector.readConfigurationForOrderEntry(o).pipe(p(a=>[new Tt(a)]),R(a=>[new Et(O(a,this.logger))]))})))}};t.\u0275fac=function(i){return new(i||t)(g($t),g(Re))},t.\u0275prov=E({token:t,factory:t.\u0275fac});let r=t;return r})(),Be=[Ve],se={configurationInfos:[],owner:G.createInitialOwner()};function qe(r=se,t){switch(t.type){case pe:case Ie:case Te:case le:return l(l({},r),t.payload);case me:return se}return r}function Ze(){return{loaderState:c.loaderReducer(u,qe)}}var Fe=new L("ConfiguratorReducers"),ze={provide:Fe,useFactory:Ze},He=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_({type:t}),t.\u0275inj=F({providers:[ze],imports:[V,Bt,Ut.forFeature(de,Fe),Mt.forFeature(Be)]});let r=t;return r})(),We=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_({type:t}),t.\u0275inj=F({providers:[Re],imports:[He]});let r=t;return r})(),Qe="TEXTFIELD",Je=(()=>{let t=class t{constructor(){}convert(e,i){let n=[];return e.configuration?.configurationInfos.forEach(a=>this.convertInfo(a,n)),D(l({},i),{userId:e.userId,cartId:e.cartId,product:{code:e.productCode},quantity:e.quantity,configurationInfos:n})}convertInfo(e,i){let n={configurationLabel:e.configurationLabel,configurationValue:e.configurationValue,status:e.status,configuratorType:Qe};i.push(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})(),Ke=(()=>{let t=class t{constructor(){}convert(e,i){return l(l({},i),e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})(),B=new L("ConfigurationNormalizer"),_e=new L("ConfigurationAddToCartSerializer"),be=new L("ConfigurationUpdateCartEntrySerializer"),tr=(()=>{let t=class t{constructor(e,i,n){this.http=e,this.occEndpointsService=i,this.converterService=n}createConfiguration(e,i){return this.http.get(this.occEndpointsService.buildUrl("createTextfieldConfiguration",{urlParams:{productCode:e}})).pipe(this.converterService.pipeable(B),f(n=>D(l({},n),{owner:i})))}addToCart(e){let i=this.occEndpointsService.buildUrl("addTextfieldConfigurationToCart",{urlParams:{userId:e.userId,cartId:e.cartId}}),n=this.converterService.convert(e,_e);return this.http.post(i,n).pipe(this.converterService.pipeable(rt))}readConfigurationForCartEntry(e){let i=this.occEndpointsService.buildUrl("readTextfieldConfigurationForCartEntry",{urlParams:{userId:e.userId,cartId:e.cartId,cartEntryNumber:e.cartEntryNumber}});return this.http.get(i).pipe(this.converterService.pipeable(B),f(n=>D(l({},n),{owner:l({},e.owner)})))}readConfigurationForOrderEntry(e){let i=this.occEndpointsService.buildUrl("readTextfieldConfigurationForOrderEntry",{urlParams:{userId:e.userId,orderId:e.orderId,orderEntryNumber:e.orderEntryNumber}});return this.http.get(i).pipe(this.converterService.pipeable(B),f(n=>D(l({},n),{owner:l({},e.owner)})))}updateConfigurationForCartEntry(e){let i=this.occEndpointsService.buildUrl("updateTextfieldConfigurationForCartEntry",{urlParams:{userId:e.userId,cartId:e.cartId,cartEntryNumber:e.cartEntryNumber}}),n=this.converterService.convert(e,be);return this.http.post(i,n).pipe(this.converterService.pipeable(rt))}};t.\u0275fac=function(i){return new(i||t)(g(St),g(Vt),g(Zt))},t.\u0275prov=E({token:t,factory:t.\u0275fac});let r=t;return r})(),er="TEXTFIELD",rr=(()=>{let t=class t{constructor(){}convert(e){let i=[];return e.configuration?.configurationInfos.forEach(o=>this.convertInfo(o,i)),{userId:e.userId,cartId:e.cartId,cartEntryNumber:e.cartEntryNumber,configurationInfos:i}}convertInfo(e,i){let n={configurationLabel:e.configurationLabel,configurationValue:e.configurationValue,status:e.status,configuratorType:er};i.push(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();function ir(){return{backend:{occ:{endpoints:{createTextfieldConfiguration:"products/${productCode}/configurator/textfield",addTextfieldConfigurationToCart:"users/${userId}/carts/${cartId}/entries/configurator/textfield",readTextfieldConfigurationForCartEntry:"users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield",readTextfieldConfigurationForOrderEntry:"users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/configurator/textfield",readTextfieldConfigurationForQuoteEntry:"users/${userId}/quotes/${quoteId}/entries/${quoteEntryNumber}/configurator/textfield",updateTextfieldConfigurationForCartEntry:"users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield"}}}}}var nr=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_({type:t}),t.\u0275inj=F({providers:[{provide:Z,useClass:tr},{provide:B,useExisting:Ke,multi:!0},{provide:_e,useExisting:Je,multi:!0},{provide:be,useExisting:rr,multi:!0}],imports:[V,qt.withConfigFactory(ir)]});let r=t;return r})(),wr=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_({type:t}),t.\u0275inj=F({imports:[We,Xe,nr]});let r=t;return r})();export{Qe as CONFIGURATOR_TYPE_TEXTFIELD,Pe as ConfiguratorTextfieldAddToCartButtonComponent,ke as ConfiguratorTextfieldFormComponent,je as ConfiguratorTextfieldInputFieldComponent,Ye as ConfiguratorTextfieldInputFieldReadonlyComponent,tr as OccConfiguratorTextfieldAdapter,Je as OccConfiguratorTextfieldAddToCartSerializer,Ke as OccConfiguratorTextfieldNormalizer,Xe as TextfieldConfiguratorComponentsModule,We as TextfieldConfiguratorCoreModule,wr as TextfieldConfiguratorModule,nr as TextfieldConfiguratorOccModule};
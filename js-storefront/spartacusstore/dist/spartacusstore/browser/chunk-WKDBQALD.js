import{e as ce,i as ae,j as ue,k as de}from"./chunk-4W727D53.js";import{c as ne}from"./chunk-BC2UY27L.js";import{$c as d,Aa as J,Bc as O,I as W,Kd as a,M,N as Z,Of as F,Pf as ie,Q as q,We as oe,Zc as L,Zd as te,_c as m,a as l,ad as K,b as z,bd as X,ed as b,f as Q,fd as Y,gd as I,ha as U,hd as ee,pa as S,qa as E,ra as y,s as C,sa as c,ta as V,v as h,w as B,we as se,xe as re,ya as A,ye as _}from"./chunk-YKJPOEHB.js";var j=class{},f=(()=>{let e=class e{constructor(s){this.asmAdapter=s}customerSearch(s){return this.asmAdapter.customerSearch(s)}customerLists(){return this.asmAdapter.customerLists()}bindCart(s){return this.asmAdapter.bindCart(s)}createCustomer(s){return this.asmAdapter.createCustomer(s)}};e.\u0275fac=function(r){return new(r||e)(c(j))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ht=new y("CustomerSearchPageNormalizer"),lt=new y("CustomerListsNormalizer"),Se=(()=>{let e=class e{constructor(s,r,i){this.commandService=s,this.asmConnector=r,this.userAccountFacade=i,this.bindCartCommand$=this.commandService.create(n=>this.userAccountFacade.get().pipe(h(R=>{if(R?.uid)return R.uid;throw new Error("No identifier for authenticated user found.")}),q(1),Z(R=>this.asmConnector.bindCart({cartId:n,customerId:R}))))}bindCart(s){return this.bindCartCommand$.execute(s)}};e.\u0275fac=function(r){return new(r||e)(c(F),c(f),c(ne))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),me=(()=>{let e=class e{constructor(s,r){this.asmConnector=s,this.command=r,this.createCustomerCommand=this.command.create(({user:i})=>this.asmConnector.createCustomer(i))}createCustomer(s){return this.createCustomerCommand.execute({user:s})}};e.\u0275fac=function(r){return new(r||e)(c(f),c(F))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),le="[Asm] UI Update",T=class{constructor(e){this.payload=e,this.type=le}},Ce="asm",p="[asm] Customer search data",g="[asm] Customer list customers search data",fe="[Asm] Customer Search",Le="[Asm] Customer Search Fail",Te="[Asm] Customer Search Success",ve="[Asm] Customer Search Reset",pe="[Asm] Customer List Customers Search",Me="[Asm] Customer List Customers Search Fail",Ue="[Asm] Customer List Customers Search Success",Oe="[Asm] Customer List Customers Search Reset",w=class extends a.LoaderLoadAction{constructor(e){super(p),this.payload=e,this.type=fe}},D=class extends a.LoaderFailAction{constructor(e){super(p),this.payload=e,this.type=Le}},v=class extends a.LoaderSuccessAction{constructor(e){super(p),this.payload=e,this.type=Te}},k=class extends a.LoaderResetAction{constructor(){super(p),this.type=ve}},N=class extends a.LoaderLoadAction{constructor(e){super(g),this.payload=e,this.type=pe}},H=class extends a.LoaderFailAction{constructor(e){super(g),this.payload=e,this.type=Me}},$=class extends a.LoaderSuccessAction{constructor(e){super(g),this.payload=e,this.type=Ue}},x=class extends a.LoaderResetAction{constructor(){super(g),this.type=Oe}},be="[Auth] Logout Customer Support Agent";var Ie=(()=>{let e=class e{constructor(s,r){this.actions$=s,this.asmConnector=r,this.logger=V(te),this.customerSearch$=b(()=>this.actions$.pipe(I(fe),h(i=>i.payload),U(i=>this.asmConnector.customerSearch(i).pipe(h(n=>new v(n)),M(n=>n.status===400&&n.details?.[0]?.message?.indexOf("Wrong orderId")>-1?C(new v({entries:[]})):C(new D(_(n,this.logger)))))))),this.customerListCustomersSearch$=b(()=>this.actions$.pipe(I(pe),h(i=>i.payload),U(i=>this.asmConnector.customerSearch(i).pipe(h(n=>new $(n)),M(n=>C(new H(_(n,this.logger))))))))}};e.\u0275fac=function(r){return new(r||e)(c(Y),c(f))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),_e=[Ie],Fe={collapsed:!1};function je(t=Fe,e){switch(e.type){case le:return l(l({},t),e.payload);default:return t}}function we(){return{customerSearchResult:a.loaderReducer(p),customerListCustomersSearchResult:a.loaderReducer(g),asmUi:je}}var ge=new y("AsmReducers"),De={provide:ge,useFactory:we};function ke(t){return function(e,o){return o.type===be&&(e=z(l({},e),{customerSearchResult:{}})),t(e,o)}}var Ne=[ke],P=K(Ce),Re=d(P,t=>t.asmUi),Ee=d(P,t=>t.customerSearchResult),He=d(Ee,t=>a.loaderValueSelector(t)),$e=d(Ee,t=>a.loaderLoadingSelector(t)),G=d(P,t=>t.customerListCustomersSearchResult),xe=d(G,t=>a.loaderValueSelector(t)),Pe=d(G,t=>a.loaderLoadingSelector(t)),Ge=d(G,t=>a.loaderErrorSelector(t));var he=(()=>{let e=class e{constructor(s,r,i){this.queryService=s,this.asmConnector=r,this.store=i,this.customerListQuery$=this.queryService.create(()=>this.asmConnector.customerLists(),{reloadOn:void 0,resetOn:void 0})}getCustomerLists(){return this.customerListQuery$.get()}getCustomerListsState(){return this.customerListQuery$.getState()}customerListCustomersSearch(s){this.store.dispatch(new N(s))}getCustomerListCustomersSearchResults(){return this.store.pipe(m(xe))}getCustomerListCustomersSearchResultsLoading(){return this.store.pipe(m(Pe))}customerListCustomersSearchReset(){this.store.dispatch(new x)}getCustomerListCustomersSearchResultsError(){return this.store.pipe(m(Ge))}};e.\u0275fac=function(r){return new(r||e)(c(ie),c(f),c(L))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),ze=[he,{provide:de,useExisting:he},Se,{provide:ae,useExisting:Se},me,{provide:ue,useExisting:me}],Qe=(()=>{let e=class e{constructor(s,r,i){this.statePersistenceService=s,this.store=r,this.authStorageService=i,this.subscription=new Q,this.key="asm"}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:this.key,state$:this.getAsmState(),onRead:s=>this.onRead(s)}))}getAsmState(){return B([this.store.pipe(W(s=>!!s.asm),m(Re)),C(this.authStorageService.getEmulatedUserToken()),this.authStorageService.getTokenTarget()]).pipe(h(([s,r,i])=>{let n=r;return n&&(n=l({},r),delete n.refresh_token),{ui:s,emulatedUserToken:n,tokenTarget:i}}))}onRead(s){s&&(s.ui&&this.store.dispatch(new T(s.ui)),s.emulatedUserToken&&this.authStorageService.setEmulatedUserToken(s.emulatedUserToken),s.tokenTarget&&this.authStorageService.setTokenTarget(s.tokenTarget))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)(c(se),c(L),c(ce))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=E({providers:[De],imports:[O,re,X.forFeature(Ce,ge,{metaReducers:Ne}),ee.forFeature(_e)]});let t=e;return t})();function We(t){return()=>t.initSync()}var Ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=E({providers:[f,{provide:oe,useFactory:We,deps:[Qe],multi:!0},...ze],imports:[O,Be]});let t=e;return t})(),ft=(()=>{let e=class e{constructor(s){this.store=s}customerSearch(s){this.store.dispatch(new w(s))}customerSearchReset(){this.store.dispatch(new k)}getCustomerSearchResults(){return this.store.pipe(m(He))}getCustomerSearchResultsLoading(){return this.store.pipe(m($e))}updateAsmUiState(s){this.store.dispatch(new T(s))}getAsmUiState(){return this.store.pipe(m(Re))}};e.\u0275fac=function(r){return new(r||e)(c(L))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),pt=(()=>{let e=class e{transform(s,...r){return s(...r)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=J({name:"cxArgs",type:e,pure:!0});let t=e;return t})(),gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=E({});let t=e;return t})(),u=function(t){return t[t.ASC=1]="ASC",t[t.DESC=-1]="DESC",t}(u||{});function Ze(t=u.ASC){return(e,o)=>e===o?0:(e===!0?-1:1)*t}var Rt=Ze(u.ASC);function qe(t=u.ASC){return(e,o)=>e===o?0:(e<o?-1:1)*t}var Et=qe(u.ASC);function ye(t=u.ASC){return(e,o)=>{let s=e==null,r=o==null;return s===r?0:(s?-1:1)*t}}var yt=ye(u.ASC),At=ye(u.DESC);function Ae(t=u.ASC){return(e,o)=>e===o?0:(e-o<0?-1:1)*t}var Lt=Ae(u.ASC),Tt=Ae(u.DESC);function Ve(t=u.ASC,e,o){return(s,r)=>(s??"").localeCompare(r??"",e,o)*t}var vt=Ve(u.ASC);function Mt(...t){return(e,o)=>{for(let s of t){let r=s(e,o);if(r!==0)return r}return 0}}function Ut(t,e,o){if(typeof e=="function")return(s,r)=>e(s[t],r[t]);if(o)return(s,r)=>o(s[t][e],r[t][e]);throw new Error("No comparator provided")}var Ot=t=>typeof t=="string",bt=t=>typeof t=="number",It=t=>typeof t=="boolean";function _t(t,e){return(o,s)=>t(o)&&t(s)?e(o,s):0}export{j as a,ht as b,lt as c,Ct as d,ft as e,pt as f,gt as g,u as h,Ze as i,qe as j,ye as k,Ve as l,Mt as m,Ut as n,Ot as o,bt as p,It as q,_t as r};

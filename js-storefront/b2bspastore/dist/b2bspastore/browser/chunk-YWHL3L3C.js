import{Bd as v,Fd as g,Qc as m,R as d,ac as p,hg as y,ia as u,ie as I,jc as h,qa as c,ra as f,ta as s,tg as j,ua as a,za as l}from"./chunk-Q7YDE2H2.js";var T=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c({token:t,factory:function(e){let o=null;return e?o=new(e||t):o=s(v),o},providedIn:"root"});let r=t;return r})(),w="smartEdit",P=(()=>{let t=class t{get cmsTicketId(){return this._cmsTicketId}constructor(i,e,o){this.config=i,this.location=e,this.scriptLoader=o,this.featureModulesService=a(j)}load(){this.isLaunchedInSmartEdit()&&(this.featureModulesService.resolveFeature(w).subscribe(),this.scriptLoader?.embedScript({src:"assets/webApplicationInjector.js",params:void 0,attributes:{id:"text/smartedit-injector","data-smartedit-allow-origin":this.config.smartEdit?.allowOrigin}}))}isLaunchedInSmartEdit(){let i=this.location.path().split("?")[0],o=this.location.path().split("?")[1]?.split("&").find(n=>n.startsWith("cmsTicketId="));return this._cmsTicketId=o?.split("=")[1],i.split("/").pop()===this.config.smartEdit?.storefrontPreviewRoute&&!!this._cmsTicketId}};t.\u0275fac=function(e){return new(e||t)(s(T),s(h),s(y))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})(),M={smartEdit:{storefrontPreviewRoute:"cx-preview",allowOrigin:"localhost:9002"}},E=(()=>{let t=class t{constructor(i){this.service=i,this.routingService=a(I)}intercept(i,e){let o=this.service.cmsTicketId;return o?i.url.includes("/productList")?this.setRequestForProductListPage(i,e,o):((i.url.includes("/cms/")||i.url.includes("/products/"))&&(i=i.clone({setParams:{cmsTicketId:o}})),e.handle(i)):e.handle(i)}setRequestForProductListPage(i,e,o){return this.routingService.getPageContext().pipe(d(1),u(n=>(i=i.clone(n.id?{setParams:{cmsTicketId:o,categoryCode:n.id}}:{setParams:{cmsTicketId:o}}),e.handle(i))))}};t.\u0275fac=function(e){return new(e||t)(s(P))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})(),F=[{provide:m,useExisting:E,multi:!0}];function k(r){return()=>{r.load()}}var x=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l({type:t}),t.\u0275inj=f({providers:[...F,g(M),{provide:p,useFactory:k,deps:[P],multi:!0}]});let r=t;return r})();export{T as a,w as b,x as c};

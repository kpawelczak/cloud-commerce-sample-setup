import{a as M}from"./chunk-UUZSYSS3.js";import{Cd as m,I as g,Q as w,Wd as E,Xa as j,Za as S,be as b,fg as l,gg as P,le as I,pa as u,qa as h,sa as s,uf as D,ya as v}from"./chunk-YKJPOEHB.js";var y=(()=>{let e=class e{constructor(t,i,o,c,n,f,d){if(this.cmsService=t,this.routingService=i,this.baseSiteService=o,this.zone=c,this.winRef=n,this.rendererFactory=f,this.config=d,this.isPreviewPage=!1,n.nativeWindow){let a=n.nativeWindow;a.smartedit=a.smartedit||{},a.smartedit.renderComponent=(C,p,F)=>this.renderComponent(C,p,F),a.smartedit.reprocessPage=this.reprocessPage}}processCmsPage(){this.baseSiteService.get().pipe(g(t=>!!t),w(1)).subscribe(t=>{this.defaultPreviewCategoryCode=t.defaultPreviewCategoryCode,this.defaultPreviewProductCode=t.defaultPreviewProductCode,this.cmsService.getCurrentPage().pipe(g(Boolean)).subscribe(i=>{this._currentPageId=i.pageId,this.goToPreviewPage(i),this.addPageContract(i)})})}addPageContract(t){let i=this.rendererFactory.createRenderer("body",null),o=this.winRef.document.body,c=[];Array.from(o.classList).forEach(n=>c.push(n)),c.forEach(n=>i.removeClass(o,n)),this.addSmartEditContract(o,i,t.properties)}goToPreviewPage(t){this.isPreviewPage||(this.isPreviewPage=!0,t.type===m.PRODUCT_PAGE&&this.defaultPreviewProductCode?this.routingService.go({cxRoute:"product",params:{code:this.defaultPreviewProductCode,name:""}}):t.type===m.CATEGORY_PAGE&&this.defaultPreviewCategoryCode&&this.routingService.go({cxRoute:"category",params:{code:this.defaultPreviewCategoryCode}}))}renderComponent(t,i,o){return t&&this.zone.run(()=>{o?i&&this.cmsService.refreshComponent(t):this._currentPageId?this.cmsService.refreshPageById(this._currentPageId):this.cmsService.refreshLatestPage()}),!0}reprocessPage(){}addSmartEditContract(t,i,o){o&&Object.keys(o).forEach(c=>{let n="data-"+c+"-",f=o[c];Object.keys(f).forEach(d=>{let a=f[d];d==="classes"?a.split(" ").forEach(p=>{i.addClass(t,p)}):i.setAttribute(t,n+d.split(/(?=[A-Z])/).join("-").toLowerCase(),a)})})}};e.\u0275fac=function(i){return new(i||e)(s(D),s(b),s(I),s(S),s(E),s(j),s(M))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),k=(()=>{let e=class e extends l{constructor(t){super(),this.smartEditService=t}decorate(t,i,o){o&&this.smartEditService.addSmartEditContract(t,i,o.properties)}};e.\u0275fac=function(i){return new(i||e)(s(y))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),A=(()=>{let e=class e extends P{constructor(t){super(),this.smartEditService=t}decorate(t,i,o){o&&this.smartEditService.addSmartEditContract(t,i,o.properties)}};e.\u0275fac=function(i){return new(i||e)(s(y))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),T=[{provide:l,useExisting:k,multi:!0},{provide:P,useExisting:A,multi:!0}],x=(()=>{let e=class e{constructor(t){this.smartEditService=t,this.smartEditService.processCmsPage()}};e.\u0275fac=function(i){return new(i||e)(s(y))},e.\u0275mod=v({type:e}),e.\u0275inj=h({providers:[...T]});let r=e;return r})();var z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=h({imports:[x]});let r=e;return r})();export{z as SmartEditModule};

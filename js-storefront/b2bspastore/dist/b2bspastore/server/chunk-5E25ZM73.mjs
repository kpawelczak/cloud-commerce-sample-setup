import './polyfills.server.mjs';
import{c as et}from"./chunk-T4VSAPEF.mjs";import"./chunk-LMNX2PFK.mjs";import{$ as Q,Y as J,_ as K,na as X,sa as Z,va as tt}from"./chunk-L3T7QQFM.mjs";import{A as $,Aa as j,J as D,Ub as O,Vb as q,eb as H,kb as U,lb as Y,ra as N,uc as z,vc as G,y as R}from"./chunk-MYZEKFYU.mjs";import{$a as v,$b as m,Aa as E,Bc as B,Ed as P,Ga as A,Jc as s,Kc as _,L as k,Md as V,Oc as b,Pb as l,Ra as M,Rb as c,Sa as w,Xb as d,Yb as x,Zb as u,_a as C,_b as g,bc as y,dc as L,ec as r,pc as W,qc as f,rc as h,wb as a,x as S,xb as I,zd as F}from"./chunk-IDQ3VQP7.mjs";import"./chunk-GHFNAT2I.mjs";var nt=()=>({cxRoute:"login"});function it(t,i){if(t&1){let e=y();d(0,"div")(1,"button",5),s(2,"async"),s(3,"cxTranslate"),L("click",function(){let o=C(e).ngIf,p=r(6);return v(p.remove(o))}),u(4,"cx-icon",6),d(5,"span",7),f(6),s(7,"cxTranslate"),x()()()}if(t&2){let e=r(6);a(),c("disabled",_(2,4,e.loading$))("cxAtMessage",_(3,6,"addToWishList.removedFromWishList")),a(3),c("type",e.iconTypes.HEART),a(2),h(_(7,8,"addToWishList.remove"))}}function ot(t,i){if(t&1){let e=y();d(0,"button",8),s(1,"async"),s(2,"cxTranslate"),L("click",function(){C(e);let o=r(5).ngIf,p=r();return v(p.add(o))}),u(3,"cx-icon",6),d(4,"span",7),f(5),s(6,"cxTranslate"),x()()}if(t&2){let e=r(6);c("disabled",_(1,4,e.loading$))("cxAtMessage",_(2,6,"addToWishList.addedToWishList")),a(3),c("type",e.iconTypes.EMPTY_HEART),a(2),h(_(6,8,"addToWishList.add"))}}function rt(t,i){if(t&1&&(g(0),l(1,it,8,10,"div",3)(2,ot,7,10,"ng-template",null,1,b),m()),t&2){let e=W(3),n=r(2).ngIf,o=r(2).ngIf,p=r();a(),c("ngIf",p.getProductInWishList(o,n))("ngIfElse",e)}}function at(t,i){if(t&1){let e=y();d(0,"div")(1,"button",9),s(2,"async"),s(3,"cxTranslate"),L("click",function(){let o=C(e).ngIf,p=r(6);return v(p.remove(o))}),u(4,"cx-icon",6),d(5,"span",7),f(6),s(7,"cxTranslate"),x()()()}if(t&2){let e=r(6);a(),c("disabled",_(2,4,e.loading$))("cxAtMessage",_(3,6,"addToWishList.removedFromWishList")),a(3),c("type",e.iconTypes.HEART),a(2),h(_(7,8,"addToWishList.remove"))}}function ct(t,i){if(t&1){let e=y();d(0,"button",10),s(1,"async"),s(2,"cxTranslate"),L("click",function(){C(e);let o=r(5).ngIf,p=r();return v(p.add(o))}),u(3,"cx-icon",6),d(4,"span",7),f(5),s(6,"cxTranslate"),x()()}if(t&2){let e=r(6);c("disabled",_(1,4,e.loading$))("cxAtMessage",_(2,6,"addToWishList.addedToWishList")),a(3),c("type",e.iconTypes.EMPTY_HEART),a(2),h(_(6,8,"addToWishList.add"))}}function st(t,i){if(t&1&&(g(0),l(1,at,8,10,"div",3)(2,ct,7,10,"ng-template",null,1,b),m()),t&2){let e=W(3),n=r(2).ngIf,o=r(2).ngIf,p=r();a(),c("ngIf",p.getProductInWishList(o,n))("ngIfElse",e)}}function _t(t,i){t&1&&(g(0),l(1,rt,4,2,"ng-container",4)(2,st,4,2,"ng-container",4),m()),t&2&&(a(),c("cxFeature","a11yLinkBtnsToTertiaryBtns"),a(),c("cxFeature","!a11yLinkBtnsToTertiaryBtns"))}function pt(t,i){if(t&1&&(g(0),l(1,_t,3,2,"ng-container",2),m()),t&2){let e=r(3);a(),c("ngIf",e.hasStock)}}function dt(t,i){if(t&1&&(g(0),l(1,pt,2,1,"ng-container",2),s(2,"async"),m()),t&2){let e=r(2);a(),c("ngIf",_(2,1,e.wishListEntries$))}}function lt(t,i){if(t&1&&(g(0),l(1,dt,3,3,"ng-container",3),s(2,"async"),m()),t&2){let e=r(),n=W(3);a(),c("ngIf",_(2,2,e.userLoggedIn$))("ngIfElse",n)}}function gt(t,i){if(t&1&&(g(0),d(1,"a",11),s(2,"cxUrl"),u(3,"cx-icon",6),d(4,"span",7),f(5),s(6,"cxTranslate"),x()(),m()),t&2){let e=r(2);a(),c("routerLink",_(2,3,B(7,nt))),a(2),c("type",e.iconTypes.EMPTY_HEART),a(2),h(_(6,5,"addToWishList.anonymous"))}}function mt(t,i){if(t&1&&l(0,gt,7,8,"ng-container",2),t&2){let e=r();c("ngIf",e.hasStock)}}var xt=(()=>{let i=class i{constructor(n,o,p){this.wishListFacade=n,this.currentProductService=o,this.authService=p,this.product$=this.currentProductService.getProduct().pipe(k(N),E(T=>this.setStockInfo(T))),this.userLoggedIn$=this.authService.isUserLoggedIn().pipe(E(T=>{T&&(this.wishListEntries$=this.getWishListEntries(),this.loading$=this.wishListFacade.getWishListLoading())})),this.hasStock=!1,this.iconTypes=J,Y("a11yVisibleFocusOverflows")}add(n){n.code&&this.wishListFacade.addEntry(n.code)}remove(n){this.wishListFacade.removeEntry(n)}getProductInWishList(n,o){return o.find(T=>T.product?.code===n.code)}setStockInfo(n){this.hasStock=!!(n.stock&&n.stock.stockLevelStatus!=="outOfStock")}getWishListEntries(){return this.wishListFacade.getWishList().pipe(k(n=>!!n),S(n=>n.entries??[]))}};i.\u0275fac=function(o){return new(o||i)(I(et),I(X),I(j))},i.\u0275cmp=M({type:i,selectors:[["cx-add-to-wishlist"]],decls:4,vars:3,consts:[["loginPrompt",""],["addItem",""],[4,"ngIf"],[4,"ngIf","ngIfElse"],[4,"cxFeature"],[1,"btn","btn-tertiary","button-remove",3,"click","disabled","cxAtMessage"],[3,"type"],[1,"button-text"],[1,"btn","btn-tertiary","button-add",3,"click","disabled","cxAtMessage"],[1,"btn","btn-link","button-remove","cx-action-link",3,"click","disabled","cxAtMessage"],[1,"btn","btn-link","button-add","cx-action-link",3,"click","disabled","cxAtMessage"],[1,"btn","btn-link","button-add-link","cx-action-link",3,"routerLink"]],template:function(o,p){o&1&&(l(0,lt,3,4,"ng-container",2),s(1,"async"),l(2,mt,1,1,"ng-template",null,0,b)),o&2&&c("ngIf",_(1,1,p.product$))},dependencies:[F,K,R,Z,H,P,z,O],encapsulation:2,changeDetection:0});let t=i;return t})(),kt=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=w({type:i}),i.\u0275inj=A({providers:[D({cmsComponents:{AddToWishListComponent:{component:xt}}})],imports:[V,G,Q,$,q,tt,U]});let t=i;return t})();export{xt as AddToWishListComponent,kt as AddToWishListModule};

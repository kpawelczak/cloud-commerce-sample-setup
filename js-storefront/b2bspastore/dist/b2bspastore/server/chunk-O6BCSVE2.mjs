import './polyfills.server.mjs';
import{ga as g,ha as f}from"./chunk-L3T7QQFM.mjs";import{A as m,Dc as R,F as C,Fb as A,Gb as I,J as l,K as y,Oa as s,Pa as k,Qa as M,Ra as b,Ta as r,Ua as E,Xa as v}from"./chunk-MYZEKFYU.mjs";import{Fa as o,Ga as u,J as p,Ka as c,Sa as h,a as S}from"./chunk-IDQ3VQP7.mjs";var et=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:function(i){let d=null;return i?d=new(i||t):d=c(C),d},providedIn:"root"});let e=t;return e})(),N=5e3,j=255,F=10,it=1,st="MMMM d, YYYY h:mm aa",O=5,w={customerTicketing:{attachmentRestrictions:{maxSize:F,allowedTypes:[".pdf",".txt",".png",".jpg",".jpeg",".gif",".doc",".docx",".html",".htm",".zip"]},inputCharactersLimit:N,inputCharactersLimitForSubject:j,listViewPageSize:O}},L={routing:{routes:{supportTickets:{paths:["my-account/support-tickets"]},supportTicketDetails:{paths:["my-account/support-ticket/:ticketCode"],paramsMapping:{ticketCode:"ticketCode"}}}}},T="customerTicketing",G="customerTicketingCore",x=(()=>{let t=class t extends s{};t.type="GetTicketQueryResetEvent";let e=t;return e})(),a=(()=>{let t=class t extends s{};t.type="GetTicketQueryReloadEvent";let e=t;return e})(),U=(()=>{let t=class t extends s{};t.type="GetTicketsQueryResetEvents";let e=t;return e})(),D=(()=>{let t=class t extends s{};t.type="GetTicketsQueryReloadEvents";let e=t;return e})(),P=(()=>{let t=class t extends s{};t.type="NewMessageEvent";let e=t;return e})(),Y=(()=>{let t=class t extends s{};t.type="TicketReopenedEvent";let e=t;return e})(),H=(()=>{let t=class t extends s{};t.type="TicketClosedEvent";let e=t;return e})(),X=(()=>{let t=class t extends s{};t.type="GetTicketCategoryQueryResetEvent";let e=t;return e})(),nt=(()=>{let t=class t extends s{};t.type="GetTicketCategoryQueryReloadEvent";let e=t;return e})(),q=(()=>{let t=class t extends s{};t.type="GetTicketAssociatedObjectsQueryResetEvent";let e=t;return e})(),ct=(()=>{let t=class t extends s{};t.type="GetTicketAssociatedObjectsQueryReloadEvent";let e=t;return e})(),z=(()=>{let t=class t extends s{};t.type="TicketCreatedEvent";let e=t;return e})();var V=(()=>{let t=class t extends s{};t.type="UploadAttachmentSuccessEvent";let e=t;return e})(),K=(()=>{let t=class t{constructor(n,i){this.eventService=n,this.globalMessageService=i,this.subscriptions=new S,this.onLanguageAndCurrencySetEvent(),this.onLoginAndLogoutEvent(),this.onTicketCreatedEvent(),this.onNewMessage(),this.onTicketClosed(),this.onTicketReopened(),this.onUploadAttachmentSucess()}onTicketCreatedEvent(){this.subscriptions.add(this.eventService.get(z).subscribe(()=>{this.globalMessageService.add({key:"createCustomerTicket.ticketCreated"},r.MSG_TYPE_CONFIRMATION),this.eventService.dispatch({},D)}))}onLanguageAndCurrencySetEvent(){this.subscriptions.add(p(this.eventService.get(A),this.eventService.get(I)).subscribe(()=>{this.eventService.dispatch({},D),this.eventService.dispatch({},a)}))}onLoginAndLogoutEvent(){this.subscriptions.add(p(this.eventService.get(k),this.eventService.get(M)).subscribe(()=>{this.eventService.dispatch({},x),this.eventService.dispatch({},U),this.eventService.dispatch({},X),this.eventService.dispatch({},q)}))}onNewMessage(){this.subscriptions.add(this.eventService.get(P).subscribe(()=>{this.eventService.dispatch({},a)}))}onTicketClosed(){this.subscriptions.add(this.eventService.get(H).subscribe(()=>{this.eventService.dispatch({},x),this.globalMessageService.add({key:"customerTicketingDetails.requestClosed"},r.MSG_TYPE_CONFIRMATION)}))}onTicketReopened(){this.subscriptions.add(this.eventService.get(Y).subscribe(()=>{this.eventService.dispatch({},a),this.globalMessageService.add({key:"customerTicketingDetails.requestReopened"},r.MSG_TYPE_CONFIRMATION)}))}onUploadAttachmentSucess(){this.subscriptions.add(this.eventService.get(V).subscribe(()=>{this.eventService.dispatch({},a)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(c(b),c(E))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Z=(()=>{let t=class t{constructor(n){}};t.\u0275fac=function(i){return new(i||t)(c(K))},t.\u0275mod=h({type:t}),t.\u0275inj=u({});let e=t;return e})();function B(){return{featureModules:{[T]:{cmsComponents:["SupportTicketHistoryComponent","SupportTicketUpdateComponent","SupportTicketDetailsComponent","SupportTicketReopenComponent","SupportTicketCloseComponent","MyAccountViewRequestsComponent"]},[G]:T}}}var ot=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h({type:t}),t.\u0275inj=u({providers:[y(B),l(L),l(w)],imports:[Z,m.forChild([{path:null,canActivate:[v,f],component:g,data:{cxRoute:"supportTicketDetails"}},{path:null,canActivate:[v,f],component:g,data:{cxRoute:"supportTickets"}}])]});let e=t;return e})(),rt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:()=>R({facade:t,feature:T,methods:["getTicketState","getTicket","getTicketsState","getTickets","createTicketEvent","getTicketCategoriesState","getTicketCategories","getTicketAssociatedObjectsState","getTicketAssociatedObjects","createTicket","uploadAttachment","downloadAttachment"]}),providedIn:"root"});let e=t;return e})();export{et as a,N as b,j as c,F as d,it as e,st as f,T as g,x as h,a as i,U as j,D as k,P as l,Y as m,H as n,X as o,nt as p,q,ct as r,z as s,V as t,ot as u,rt as v};

import{Cd as E,Ce as g,Gd as N,Hd as R,Oc as h,Rc as f,ce as p,ec as l,fe as m,la as c,qa as r,ra as I,ta as o,ua as d,za as u}from"./chunk-UZ26IE7K.js";var S=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r({token:e,factory:function(t){let s=null;return t?s=new(t||e):s=o(E),s},providedIn:"root"});let n=e;return n})(),v="personalization",w={personalization:{enabled:!1,httpHeaderName:{id:"Occ-Personalization-Id",timestamp:"Occ-Personalization-Time"},context:{slotPosition:"PlaceholderContentSlot",componentId:"PersonalizationScriptComponent"}}},O=(()=>{let e=class e{constructor(i,t,s){this.config=i,this.occEndpoints=t,this.winRef=s,this.enabled=!1,this.PERSONALIZATION_ID_KEY="personalization-id",this.logger=d(m),this.winRef.isBrowser()&&(this.enabled=this.winRef.localStorage&&this.config.personalization?.enabled||!1,this.enabled?(!this.config.personalization?.httpHeaderName&&l()&&this.logger.warn("There is no httpHeaderName configured in Personalization"),this.requestHeader=this.config.personalization?.httpHeaderName?.id.toLowerCase(),this.personalizationId=this.winRef.localStorage?.getItem(this.PERSONALIZATION_ID_KEY)):this.winRef.localStorage?.getItem(this.PERSONALIZATION_ID_KEY)&&this.winRef.localStorage.removeItem(this.PERSONALIZATION_ID_KEY))}intercept(i,t){return this.enabled?(this.requestHeader&&this.personalizationId&&i.url.includes(this.occEndpoints.getBaseUrl())&&(i=i.clone({setHeaders:{[this.requestHeader]:this.personalizationId}})),t.handle(i).pipe(c(s=>{if(s instanceof h&&this.requestHeader&&s.headers.keys().includes(this.requestHeader)){let a=s.headers.get(this.requestHeader);this.personalizationId!==a&&(this.personalizationId=a,this.personalizationId&&this.winRef.localStorage?.setItem(this.PERSONALIZATION_ID_KEY,this.personalizationId))}}))):t.handle(i)}};e.\u0275fac=function(t){return new(t||e)(o(S),o(g),o(p))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),T=(()=>{let e=class e{constructor(i,t,s){this.config=i,this.occEndpoints=t,this.winRef=s,this.enabled=!1,this.PERSONALIZATION_TIME_KEY="personalization-time",this.logger=d(m),this.winRef.isBrowser()&&(this.enabled=this.winRef.localStorage&&this.config.personalization?.enabled||!1,this.enabled?(!this.config.personalization?.httpHeaderName&&l()&&this.logger.warn("There is no httpHeaderName configured in Personalization"),this.requestHeader=this.config.personalization?.httpHeaderName?.timestamp.toLowerCase(),this.timestamp=this.winRef.localStorage?.getItem(this.PERSONALIZATION_TIME_KEY)):this.winRef.localStorage?.getItem(this.PERSONALIZATION_TIME_KEY)&&this.winRef.localStorage.removeItem(this.PERSONALIZATION_TIME_KEY))}intercept(i,t){return this.enabled?(this.requestHeader&&this.timestamp&&i.url.includes(this.occEndpoints.getBaseUrl())&&(i=i.clone({setHeaders:{[this.requestHeader]:this.timestamp}})),t.handle(i).pipe(c(s=>{if(s instanceof h&&this.requestHeader&&s.headers.keys().includes(this.requestHeader)){let a=s.headers.get(this.requestHeader);this.timestamp!==a&&(this.timestamp=a,this.timestamp&&this.winRef.localStorage?.setItem(this.PERSONALIZATION_TIME_KEY,this.timestamp))}}))):t.handle(i)}};e.\u0275fac=function(t){return new(t||e)(o(S),o(g),o(p))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),A=[{provide:f,useExisting:O,multi:!0},{provide:f,useExisting:T,multi:!0}];function H(){return{featureModules:{[v]:{cmsComponents:["PersonalizationScriptComponent"]}}}}var C=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=I({providers:[...A,N(w),R(H)]});let n=e;return n})();export{v as a,C as b};

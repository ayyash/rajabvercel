import{k as u}from"./chunk-PTDXR452.js";import{R as p,W as a,X as C,Yb as i,a as r,j as g,m as c,q as s,z as l}from"./chunk-EX2N6NQ5.js";var O=()=>(_seqlog("configFactory"),C(f).loadAppConfig()),f=class e{constructor(t,n){this.http=t;this.localConfig=n;_seqlog("ConfigService")}_getUrl=i.API.config.local;config=new g(i);config$=this.config.asObservable();static _config;static get Config(){return this._config||i}NewInstance(t,n){let o=r(r({},i),t);return o.Cache=r({},o.Cache),o.isServed=!0,o.withErrors=n,e._config=o,this.config.next(o),o}loadAppConfig(){return _seqlog("LoadAppConfig"),this.localConfig?(this.NewInstance(this.localConfig,!0),c(!0)):this.http.get(this._getUrl).pipe(s(t=>(this.NewInstance(t,!1),_seqlog("config next"),!0)),l(t=>(this.NewInstance(i,!0),_debug(t,"Error in resolve","e"),c(!0))))}static \u0275fac=function(n){return new(n||e)(a(u),a("localConfig",8))};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};export{O as a,f as b};

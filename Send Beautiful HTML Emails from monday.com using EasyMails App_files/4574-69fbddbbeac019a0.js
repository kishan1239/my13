(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4574],{62389:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var s in e)Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}(e,{requestIdleCallback:function(){return s},cancelIdleCallback:function(){return i}});let s="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){let e=Date.now();return self.setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},i="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(t){return clearTimeout(t)};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},11006:function(){},55154:function(t){t.exports={style:{fontFamily:"'__GeistSans_ac79ff', '__GeistSans_Fallback_ac79ff'"},className:"__className_ac79ff",variable:"__variable_ac79ff"}},24033:function(t,e,s){t.exports=s(50094)},1647:function(t,e,s){"use strict";s.d(e,{n:function(){return c}});var i,n=s(56335),r=s(24033),a=s(2265),o=null!=(i=n.Z.default)?i:n.Z,u=s(65673),h=s(57437);function c({children:t,...e}){return(0,h.jsx)(u.C,{value:function(t){let e=(0,a.useMemo)(()=>{let e=o({key:"css",prepend:!0,...t});return e.compat=!0,e},[t]);return(0,r.useServerInsertedHTML)(()=>(0,a.createElement)("style",{key:e.key,"data-emotion":`${e.key} ${Object.keys(e.inserted).join(" ")}`,dangerouslySetInnerHTML:{__html:Object.values(e.inserted).join(" ")}})),e}(e),children:t})}},494:function(t,e,s){"use strict";s.d(e,{S:function(){return k}});var i="undefined"==typeof window||"Deno"in window;function n(){}function r(t,e){let{type:s="all",exact:i,fetchStatus:n,predicate:r,queryKey:a,stale:u}=t;if(a){if(i){if(e.queryHash!==o(a,e.options))return!1}else if(!h(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(void 0===n||n===e.state.fetchStatus)&&(!r||!!r(e))}function a(t,e){let{exact:s,status:i,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(s){if(u(e.options.mutationKey)!==u(r))return!1}else if(!h(e.options.mutationKey,r))return!1}return(!i||e.state.status===i)&&(!n||!!n(e))}function o(t,e){let s=e?.queryKeyHashFn||u;return s(t)}function u(t){return JSON.stringify(t,(t,e)=>l(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function h(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!h(t[s],e[s]))}function c(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function l(t){if(!d(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(d(s)&&s.hasOwnProperty("isPrototypeOf"))}function d(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function p(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var y=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},n=t=>setTimeout(t,0),r=i=>{e?t.push(i):n(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&n(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{n=t}}}(),m=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},b=new class extends m{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let e=this.#t!==t;e&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}},v=new class extends m{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){let e=this.#i!==t;e&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}};function g(t){return Math.min(1e3*2**t,3e4)}function w(t){return(t??"online")!=="online"||v.isOnline()}var C=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function O(t){return t instanceof C}function q(t){let e,s,n,r=!1,a=0,o=!1,u=new Promise((t,e)=>{s=t,n=e}),h=()=>!b.isFocused()||"always"!==t.networkMode&&!v.isOnline(),c=i=>{o||(o=!0,t.onSuccess?.(i),e?.(),s(i))},l=s=>{o||(o=!0,t.onError?.(s),e?.(),n(s))},d=()=>new Promise(s=>{e=t=>{let e=o||!h();return e&&s(t),e},t.onPause?.()}).then(()=>{e=void 0,o||t.onContinue?.()}),f=()=>{let e;if(!o){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(c).catch(e=>{if(o)return;let s=t.retry??(i?0:3),n=t.retryDelay??g,u="function"==typeof n?n(a,e):n,c=!0===s||"number"==typeof s&&a<s||"function"==typeof s&&s(a,e);if(r||!c){l(e);return}a++,t.onFail?.(a,e),new Promise(t=>{setTimeout(t,u)}).then(()=>{if(h())return d()}).then(()=>{r?l(e):f()})})}};return w(t.networkMode)?f():d().then(f),{promise:u,cancel:e=>{o||(l(new C(e)),t.abort?.())},continue:()=>{let t=e?.();return t?u:Promise.resolve()},cancelRetry:()=>{r=!0},continueRetry:()=>{r=!1}}}var S=class{#n;destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&(this.#n=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i?1/0:3e5))}clearGcTimeout(){this.#n&&(clearTimeout(this.#n),this.#n=void 0)}},F=class extends S{constructor(t){super(),this.#r=!1,this.#a=t.defaultOptions,this.#o(t.options),this.#u=[],this.#h=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#c=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#c,this.scheduleGc()}#c;#l;#h;#d;#f;#u;#a;#r;get meta(){return this.options.meta}#o(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#u.length||"idle"!==this.state.fetchStatus||this.#h.remove(this)}setData(t,e){var s,i;let n=(s=this.state.data,"function"==typeof(i=this.options).structuralSharing?i.structuralSharing(s,t):!1!==i.structuralSharing?function t(e,s){if(e===s)return e;let i=c(e)&&c(s);if(i||l(e)&&l(s)){let n=i?e.length:Object.keys(e).length,r=i?s:Object.keys(s),a=r.length,o=i?[]:{},u=0;for(let n=0;n<a;n++){let a=i?n:r[n];o[a]=t(e[a],s[a]),o[a]===e[a]&&u++}return n===a&&u===n?e:o}return s}(s,t):t);return this.#p({data:n,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),n}setState(t,e){this.#p({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#d;return this.#f?.cancel(t),e?e.then(n).catch(n):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#c)}isActive(){return this.#u.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#u.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0)}onFocus(){let t=this.#u.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#f?.continue()}onOnline(){let t=this.#u.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#f?.continue()}addObserver(t){this.#u.includes(t)||(this.#u.push(t),this.clearGcTimeout(),this.#h.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#u.includes(t)&&(this.#u=this.#u.filter(e=>e!==t),this.#u.length||(this.#f&&(this.#r?this.#f.cancel({revert:!0}):this.#f.cancelRetry()),this.scheduleGc()),this.#h.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#u.length}invalidate(){this.state.isInvalidated||this.#p({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#d)return this.#f?.continueRetry(),this.#d}if(t&&this.#o(t),!this.options.queryFn){let t=this.#u.find(t=>t.options.queryFn);t&&this.#o(t.options)}let s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#r=!0,s.signal)})};n(i);let r={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#r=!1,this.options.persister)?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};n(r),this.options.behavior?.onFetch(r,this),this.#l=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==r.fetchOptions?.meta)&&this.#p({type:"fetch",meta:r.fetchOptions?.meta});let a=t=>{O(t)&&t.silent||this.#p({type:"error",error:t}),O(t)||(this.#h.config.onError?.(t,this),this.#h.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#f=q({fn:r.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#h.config.onSuccess?.(t,this),this.#h.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:r.options.retry,retryDelay:r.options.retryDelay,networkMode:r.options.networkMode}),this.#d=this.#f.promise,this.#d}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:w(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if(O(s)&&s.revert&&this.#l)return{...this.#l,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),y.batch(()=>{this.#u.forEach(t=>{t.onQueryUpdate()}),this.#h.notify({query:this,type:"updated",action:t})})}},P=class extends m{constructor(t={}){super(),this.config=t,this.#y=new Map}#y;build(t,e,s){let i=e.queryKey,n=e.queryHash??o(i,e),r=this.get(n);return r||(r=new F({cache:this,queryKey:i,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(r)),r}add(t){this.#y.has(t.queryHash)||(this.#y.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#y.get(t.queryHash);e&&(t.destroy(),e===t&&this.#y.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){y.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#y.get(t)}getAll(){return[...this.#y.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>r(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>r(t,e)):e}notify(t){y.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){y.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){y.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},D=class extends S{constructor(t){super(),this.mutationId=t.mutationId,this.#a=t.defaultOptions,this.#m=t.mutationCache,this.#u=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}#u;#a;#m;#f;setOptions(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#u.includes(t)||(this.#u.push(t),this.clearGcTimeout(),this.#m.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#u=this.#u.filter(e=>e!==t),this.scheduleGc(),this.#m.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#u.length||("pending"===this.state.status?this.scheduleGc():this.#m.remove(this))}continue(){return this.#f?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#p({type:"pending",variables:t}),await this.#m.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#p({type:"pending",context:e,variables:t})}let s=await (this.#f=q({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#f.promise);return await this.#m.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#m.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#p({type:"success",data:s}),s}catch(e){try{throw await this.#m.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#m.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#p({type:"error",error:e})}}}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!w(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),y.batch(()=>{this.#u.forEach(e=>{e.onMutationUpdate(t)}),this.#m.notify({mutation:this,type:"updated",action:t})})}},E=class extends m{constructor(t={}){super(),this.config=t,this.#b=[],this.#v=0}#b;#v;#g;build(t,e,s){let i=new D({mutationCache:this,mutationId:++this.#v,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#b.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#b=this.#b.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){y.batch(()=>{this.#b.forEach(t=>{this.remove(t)})})}getAll(){return this.#b}find(t){let e={exact:!0,...t};return this.#b.find(t=>a(e,t))}findAll(t={}){return this.#b.filter(e=>a(t,e))}notify(t){y.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#g=(this.#g??Promise.resolve()).then(()=>{let t=this.#b.filter(t=>t.state.isPaused);return y.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(n)),Promise.resolve()))}).then(()=>{this.#g=void 0}),this.#g}};function M(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}function A(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}var k=class{#w;#m;#a;#C;#O;#q;#S;#F;constructor(t={}){this.#w=t.queryCache||new P,this.#m=t.mutationCache||new E,this.#a=t.defaultOptions||{},this.#C=new Map,this.#O=new Map,this.#q=0}mount(){this.#q++,1===this.#q&&(this.#S=b.subscribe(()=>{b.isFocused()&&(this.resumePausedMutations(),this.#w.onFocus())}),this.#F=v.subscribe(()=>{v.isOnline()&&(this.resumePausedMutations(),this.#w.onOnline())}))}unmount(){this.#q--,0===this.#q&&(this.#S?.(),this.#S=void 0,this.#F?.(),this.#F=void 0)}isFetching(t){return this.#w.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#m.findAll({...t,status:"pending"}).length}getQueryData(t){return this.#w.find({queryKey:t})?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let s=e.data;return[t,s]})}setQueryData(t,e,s){let i=this.#w.find({queryKey:t}),n=i?.state.data,r="function"==typeof e?e(n):e;if(void 0===r)return;let a=this.defaultQueryOptions({queryKey:t});return this.#w.build(this,a).setData(r,{...s,manual:!0})}setQueriesData(t,e,s){return y.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){return this.#w.find({queryKey:t})?.state}removeQueries(t){let e=this.#w;y.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#w,i={type:"active",...t};return y.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e},i=y.batch(()=>this.#w.findAll(t).map(t=>t.cancel(s)));return Promise.all(i).then(n).catch(n)}invalidateQueries(t={},e={}){return y.batch(()=>{if(this.#w.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0},i=y.batch(()=>this.#w.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(n)),"paused"===t.state.fetchStatus?Promise.resolve():e}));return Promise.all(i).then(n)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#w.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(n).catch(n)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let i=async()=>{let s;let i=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,r=t.state.data?.pages||[],a=t.state.data?.pageParams||[],o=!1,u=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},h=t.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`))),c=async(e,s,i)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:s,direction:i?"backward":"forward",meta:t.options.meta};u(n);let r=await h(n),{maxPages:a}=t.options,c=i?p:f;return{pages:c(e.pages,r,a),pageParams:c(e.pageParams,s,a)}};if(n&&r.length){let t="backward"===n,e=t?A:M,o={pages:r,pageParams:a},u=e(i,o);s=await c(o,u,t)}else{s=await c({pages:[],pageParams:[]},a[0]??i.initialPageParam);let t=e??r.length;for(let e=1;e<t;e++){let t=M(i,s);s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=i}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(n).catch(n)}resumePausedMutations(){return this.#m.resumePausedMutations()}getQueryCache(){return this.#w}getMutationCache(){return this.#m}getDefaultOptions(){return this.#a}setDefaultOptions(t){this.#a=t}setQueryDefaults(t,e){this.#C.set(u(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#C.values()],s={};return e.forEach(e=>{h(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#O.set(u(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#O.values()],s={};return e.forEach(e=>{h(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t?._defaulted)return t;let e={...this.#a.queries,...t?.queryKey&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=o(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),void 0===e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#a.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#w.clear(),this.#m.clear()}}},38038:function(t,e,s){"use strict";s.d(e,{aH:function(){return r}});var i=s(2265),n=i.createContext(void 0),r=({client:t,children:e})=>(i.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),i.createElement(n.Provider,{value:t},e))}}]);
(()=>{var s1=Object.create;var W0=Object.defineProperty;var a1=Object.getOwnPropertyDescriptor;var r1=Object.getOwnPropertyNames;var o1=Object.getPrototypeOf,l1=Object.prototype.hasOwnProperty;var Os=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var c1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of r1(t))!l1.call(e,s)&&s!==n&&W0(e,s,{get:()=>t[s],enumerable:!(i=a1(t,s))||i.enumerable});return e};var hd=(e,t,n)=>(n=e!=null?s1(o1(e)):{},c1(t||!e||!e.__esModule?W0(n,"default",{value:e,enumerable:!0}):n,e));var s_=Os(Ot=>{"use strict";var pd=Symbol.for("react.transitional.element"),u1=Symbol.for("react.portal"),h1=Symbol.for("react.fragment"),f1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),p1=Symbol.for("react.consumer"),m1=Symbol.for("react.context"),g1=Symbol.for("react.forward_ref"),_1=Symbol.for("react.suspense"),v1=Symbol.for("react.memo"),K0=Symbol.for("react.lazy"),y1=Symbol.for("react.activity"),x1=Symbol.for("react.view_transition"),q0=Symbol.iterator;function S1(e){return e===null||typeof e!="object"?null:(e=q0&&e[q0]||e["@@iterator"],typeof e=="function"?e:null)}var Q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,$0={};function vr(e,t,n){this.props=e,this.context=t,this.refs=$0,this.updater=n||Q0}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function t_(){}t_.prototype=vr.prototype;function md(e,t,n){this.props=e,this.context=t,this.refs=$0,this.updater=n||Q0}var gd=md.prototype=new t_;gd.constructor=md;j0(gd,vr.prototype);gd.isPureReactComponent=!0;var Y0=Array.isArray;function dd(){}var Me={H:null,A:null,T:null,S:null},e_=Object.prototype.hasOwnProperty;function _d(e,t,n){var i=n.ref;return{$$typeof:pd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function M1(e,t){return _d(e.type,t,e.props)}function vd(e){return typeof e=="object"&&e!==null&&e.$$typeof===pd}function b1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Z0=/\/+/g;function fd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b1(""+e.key):t.toString(36)}function T1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(dd,dd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function _r(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case pd:case u1:r=!0;break;case K0:return r=e._init,_r(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+fd(e,0):i,Y0(s)?(n="",r!=null&&(n=r.replace(Z0,"$&/")+"/"),_r(s,t,n,"",function(c){return c})):s!=null&&(vd(s)&&(s=M1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Z0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Y0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+fd(i,l),r+=_r(i,t,n,a,s);else if(l=S1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+fd(i,l++),r+=_r(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return _r(T1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Rc(e,t,n){if(e==null)return e;var i=[],s=0;return _r(e,i,"","",function(a){return t.call(n,a,s++)}),i}function E1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var J0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function n_(e){var t=Me.T,n={};n.types=t!==null?t.types:null,Me.T=n;try{var i=e(),s=Me.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(dd,J0)}catch(a){J0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Me.T=t}}function i_(e){var t=Me.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else n_(i_.bind(null,e))}var A1={map:Rc,forEach:function(e,t,n){Rc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rc(e,function(){t++}),t},toArray:function(e){return Rc(e,function(t){return t})||[]},only:function(e){if(!vd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ot.Activity=y1;Ot.Children=A1;Ot.Component=vr;Ot.Fragment=h1;Ot.Profiler=d1;Ot.PureComponent=md;Ot.StrictMode=f1;Ot.Suspense=_1;Ot.ViewTransition=x1;Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Ot.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Ot.addTransitionType=i_;Ot.cache=function(e){return function(){return e.apply(null,arguments)}};Ot.cacheSignal=function(){return null};Ot.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=j0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!e_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return _d(e.type,s,i)};Ot.createContext=function(e){return e={$$typeof:m1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:p1,_context:e},e};Ot.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)e_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return _d(e,a,s)};Ot.createRef=function(){return{current:null}};Ot.forwardRef=function(e){return{$$typeof:g1,render:e}};Ot.isValidElement=vd;Ot.lazy=function(e){return{$$typeof:K0,_payload:{_status:-1,_result:e},_init:E1}};Ot.memo=function(e,t){return{$$typeof:v1,type:e,compare:t===void 0?null:t}};Ot.startTransition=n_;Ot.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Ot.use=function(e){return Me.H.use(e)};Ot.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Ot.useCallback=function(e,t){return Me.H.useCallback(e,t)};Ot.useContext=function(e){return Me.H.useContext(e)};Ot.useDebugValue=function(){};Ot.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Ot.useEffect=function(e,t){return Me.H.useEffect(e,t)};Ot.useEffectEvent=function(e){return Me.H.useEffectEvent(e)};Ot.useId=function(){return Me.H.useId()};Ot.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Ot.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Ot.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Ot.useMemo=function(e,t){return Me.H.useMemo(e,t)};Ot.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Ot.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Ot.useRef=function(e){return Me.H.useRef(e)};Ot.useState=function(e){return Me.H.useState(e)};Ot.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Ot.useTransition=function(){return Me.H.useTransition()};Ot.version="19.3.0"});var Xo=Os((hN,a_)=>{"use strict";a_.exports=s_()});var m_=Os(Ce=>{"use strict";function Md(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Nc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Bi(e){return e.length===0?null:e[0]}function Uc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Nc(o,n))l<s&&0>Nc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Nc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Nc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ce.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(r_=performance,Ce.unstable_now=function(){return r_.now()}):(yd=Date,o_=yd.now(),Ce.unstable_now=function(){return yd.now()-o_});var r_,yd,o_,ls=[],Is=[],w1=1,si=null,pn=3,bd=!1,Wo=!1,qo=!1,Td=!1,u_=typeof setTimeout=="function"?setTimeout:null,h_=typeof clearTimeout=="function"?clearTimeout:null,l_=typeof setImmediate<"u"?setImmediate:null;function Dc(e){for(var t=Bi(Is);t!==null;){if(t.callback===null)Uc(Is);else if(t.startTime<=e)Uc(Is),t.sortIndex=t.expirationTime,Md(ls,t);else break;t=Bi(Is)}}function Ed(e){if(qo=!1,Dc(e),!Wo)if(Bi(ls)!==null)Wo=!0,xr||(xr=!0,yr());else{var t=Bi(Is);t!==null&&Ad(Ed,t.startTime-e)}}var xr=!1,Yo=-1,f_=5,d_=-1;function p_(){return Td?!0:!(Ce.unstable_now()-d_<f_)}function xd(){if(Td=!1,xr){var e=Ce.unstable_now();d_=e;var t=!0;try{t:{Wo=!1,qo&&(qo=!1,h_(Yo),Yo=-1),bd=!0;var n=pn;try{e:{for(Dc(e),si=Bi(ls);si!==null&&!(si.expirationTime>e&&p_());){var i=si.callback;if(typeof i=="function"){si.callback=null,pn=si.priorityLevel;var s=i(si.expirationTime<=e);if(e=Ce.unstable_now(),typeof s=="function"){si.callback=s,Dc(e),t=!0;break e}si===Bi(ls)&&Uc(ls),Dc(e)}else Uc(ls);si=Bi(ls)}if(si!==null)t=!0;else{var a=Bi(Is);a!==null&&Ad(Ed,a.startTime-e),t=!1}}break t}finally{si=null,pn=n,bd=!1}t=void 0}}finally{t?yr():xr=!1}}}var yr;typeof l_=="function"?yr=function(){l_(xd)}:typeof MessageChannel<"u"?(Sd=new MessageChannel,c_=Sd.port2,Sd.port1.onmessage=xd,yr=function(){c_.postMessage(null)}):yr=function(){u_(xd,0)};var Sd,c_;function Ad(e,t){Yo=u_(function(){e(Ce.unstable_now())},t)}Ce.unstable_IdlePriority=5;Ce.unstable_ImmediatePriority=1;Ce.unstable_LowPriority=4;Ce.unstable_NormalPriority=3;Ce.unstable_Profiling=null;Ce.unstable_UserBlockingPriority=2;Ce.unstable_cancelCallback=function(e){e.callback=null};Ce.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f_=0<e?Math.floor(1e3/e):5};Ce.unstable_getCurrentPriorityLevel=function(){return pn};Ce.unstable_next=function(e){switch(pn){case 1:case 2:case 3:var t=3;break;default:t=pn}var n=pn;pn=t;try{return e()}finally{pn=n}};Ce.unstable_requestPaint=function(){Td=!0};Ce.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=pn;pn=e;try{return t()}finally{pn=n}};Ce.unstable_scheduleCallback=function(e,t,n){var i=Ce.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:w1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Md(Is,e),Bi(ls)===null&&e===Bi(Is)&&(qo?(h_(Yo),Yo=-1):qo=!0,Ad(Ed,n-i))):(e.sortIndex=s,Md(ls,e),Wo||bd||(Wo=!0,xr||(xr=!0,yr()))),e};Ce.unstable_shouldYield=p_;Ce.unstable_wrapCallback=function(e){var t=pn;return function(){var n=pn;pn=t;try{return e.apply(this,arguments)}finally{pn=n}}}});var __=Os((dN,g_)=>{"use strict";g_.exports=m_()});var x_=Os(mn=>{"use strict";var C1=Xo();function y_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ps(){}var Sn={d:{f:Ps,r:function(){throw Error(y_(522))},D:Ps,C:Ps,L:Ps,m:Ps,X:Ps,S:Ps,M:Ps},p:0,findDOMNode:null},R1=Symbol.for("react.portal"),N1=Symbol.for("react.recoverable"),v_=Symbol.for("react.optimistic_key");function D1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R1,key:i==null?null:i===v_?v_:""+i,children:e,containerInfo:t,implementation:n}}var Zo=C1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Lc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sn;mn.browser=function(e){return{$$typeof:N1,_reason:e}};mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(y_(299));return D1(e,t,null,n)};mn.flushSync=function(e){var t=Zo.T,n=Sn.p;try{if(Zo.T=null,Sn.p=2,e)return e()}finally{Zo.T=t,Sn.p=n,Sn.d.f()}};mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Sn.d.C(e,t))};mn.prefetchDNS=function(e){typeof e=="string"&&Sn.d.D(e)};mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Lc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Sn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Lc(t.as,t.crossOrigin);Sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Sn.d.M(e)};mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Lc(n,t.crossOrigin);Sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Lc(t.as,t.crossOrigin);Sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Sn.d.m(e)};mn.requestFormReset=function(e){Sn.d.r(e)};mn.unstable_batchedUpdates=function(e,t){return e(t)};mn.useFormState=function(e,t,n){return Zo.H.useFormState(e,t,n)};mn.useFormStatus=function(){return Zo.H.useHostTransitionStatus()};mn.version="19.3.0"});var b_=Os((mN,M_)=>{"use strict";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(e){console.error(e)}}S_(),M_.exports=x_()});var cM=Os(ph=>{"use strict";var Ye=__(),ly=Xo(),U1=b_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function uy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T_(e){if(Il(e)!==e)throw Error(Q(188))}function L1(e){var t=e.alternate;if(!t){if(t=Il(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return T_(s),e;if(a===i)return T_(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function fy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=fy(e),t!==null)return t;e=e.sibling}return null}function On(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&On(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Ka(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function dy(e){var t=[null,null],n=Ka(e);return n===null||py(t,e,n.child,{foundSelf:!1}),t}function py(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&py(e,t,n.child,i))return!0;n=n.sibling}return!1}function qe(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var wr=null,sp=null;function O1(e,t,n){return e===n?!0:e===t?(wr=e,!0):!1}function I1(e,t,n){return e===n?(sp=e,!1):e===t?(sp!==null&&(wr=e),!0):!1}function A_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ap(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var ye=Object.assign,P1=Symbol.for("react.element"),Oc=Symbol.for("react.transitional.element"),el=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),gy=Symbol.for("react.consumer"),ki=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),lp=Symbol.for("react.suspense_list"),gm=Symbol.for("react.memo"),Vs=Symbol.for("react.lazy"),cp=Symbol.for("react.activity"),B1=Symbol.for("react.legacy_hidden"),z1=Symbol.for("react.memo_cache_sentinel"),up=Symbol.for("react.view_transition"),F1=Symbol.for("react.recoverable"),w_=Symbol.iterator;function Jo(e){return e===null||typeof e!="object"?null:(e=w_&&e[w_]||e["@@iterator"],typeof e=="function"?e:null)}var V1=Symbol.for("react.client.reference");function hp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case rp:return"Profiler";case my:return"StrictMode";case op:return"Suspense";case lp:return"SuspenseList";case cp:return"Activity";case up:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case el:return"Portal";case ki:return e.displayName||"Context";case gy:return(e._context.displayName||"Context")+".Consumer";case mm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gm:return t=e.displayName||null,t!==null?t:hp(e.type)||"Memo";case Vs:t=e._payload,e=e._init;try{return hp(e(t))}catch{}}return null}var nl=Array.isArray,Ut=ly.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=U1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ba={pending:!1,data:null,method:null,action:null},fp=[],Rr=-1;function Ki(e){return{current:e}}function on(e){0>Rr||(e.current=fp[Rr],fp[Rr]=null,Rr--)}function Ee(e,t){Rr++,fp[Rr]=e.current,e.current=t}var Yi=Ki(null),yl=Ki(null),Js=Ki(null),xu=Ki(null);function Su(e,t){switch(Ee(Js,t),Ee(yl,e),Ee(Yi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hv(t),e=zS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}on(Yi),Ee(Yi,e)}function Jr(){on(Yi),on(yl),on(Js)}function dp(e){var t=e.memoizedState;t!==null&&(ao._currentValue=t.memoizedState,Ee(xu,e)),t=Yi.current;var n=zS(t,e.type);t!==n&&(Ee(yl,e),Ee(Yi,n))}function Mu(e){yl.current===e&&(on(Yi),on(yl)),xu.current===e&&(on(xu),ao._currentValue=Ba)}var wd,C_;function zs(e){if(wd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wd=t&&t[1]||"",C_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wd+e+C_}var Cd=!1;function Rd(e,t){if(!e||Cd)return"";Cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Cd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zs(n):""}function H1(e,t){switch(e.tag){case 26:case 27:case 5:return zs(e.type);case 16:return zs("Lazy");case 13:return e.child!==t&&t!==null?zs("Suspense Fallback"):zs("Suspense");case 19:return zs("SuspenseList");case 0:case 15:return Rd(e.type,!1);case 11:return Rd(e.type.render,!1);case 1:return Rd(e.type,!0);case 31:return zs("Activity");case 30:return zs("ViewTransition");default:return""}}function R_(e){try{var t="",n=null;do t+=H1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var pp=Object.prototype.hasOwnProperty,_m=Ye.unstable_scheduleCallback,Nd=Ye.unstable_cancelCallback,G1=Ye.unstable_shouldYield,k1=Ye.unstable_requestPaint,qn=Ye.unstable_now,X1=Ye.unstable_getCurrentPriorityLevel,_y=Ye.unstable_ImmediatePriority,vy=Ye.unstable_UserBlockingPriority,bu=Ye.unstable_NormalPriority,W1=Ye.unstable_LowPriority,yy=Ye.unstable_IdlePriority,q1=Ye.log,Y1=Ye.unstable_setDisableYieldValue,Pl=null,Yn=null;function ks(e){if(typeof q1=="function"&&Y1(e),Yn&&typeof Yn.setStrictMode=="function")try{Yn.setStrictMode(Pl,e)}catch{}}var Zn=Math.clz32?Math.clz32:K1,Z1=Math.log,J1=Math.LN2;function K1(e){return e>>>=0,e===0?32:31-(Z1(e)/J1|0)|0}var Ic=256,Pc=262144,Bc=4194304;function Ua(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ju(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ua(i):(r&=o,r!==0?s=Ua(r):n||(n=o&~e,n!==0&&(s=Ua(n))))):(o=i&~a,o!==0?s=Ua(o):r!==0?s=Ua(r):n||(n=i&~e,n!==0&&(s=Ua(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Zn(n),s=1<<i;t|=e[i],n&=~s}return t}function Q1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(){var e=Bc;return Bc<<=1,(Bc&62914560)===0&&(Bc=4194304),e}function Dd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Zn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&My(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function My(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Zn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function by(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Zn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ty(e,t){var n=t&-t;return n=(n&42)!==0?1:vm(n),(n&(e.suspendedLanes|t))!==0?0:n}function vm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ym(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ey(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:rM(e.type))}function N_(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var Ss=Math.random().toString(36).slice(2),an="__reactFiber$"+Ss,In="__reactProps$"+Ss,lo="__reactContainer$"+Ss,D_="__reactEvents$"+Ss,$1="__reactListeners$"+Ss,tT="__reactHandles$"+Ss,U_="__reactResources$"+Ss,Fl="__reactMarker$"+Ss,Tu="__reactLoad$"+Ss;function Ku(e){delete e[an],delete e[In],delete e[$1],delete e[tT]}function Ia(e){var t;if(t=e[an])return t;for(var n=e.parentNode;n;){if(t=n[lo]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jv(e);e!==null;){if(n=e[an])return n;e=Jv(e)}return t}e=n,n=e.parentNode}return null}function co(e){if(e=e[an]||e[lo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Fr(e){var t=e[U_];return t||(t=e[U_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Fl]=!0}function Ay(e){e[Tu]=void 0}var wy=new Set,Cy={};function Qa(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(Cy[e]=t,e=0;e<t.length;e++)wy.add(t[e])}var eT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),L_={},O_={};function nT(e){return pp.call(O_,e)?!0:pp.call(L_,e)?!1:eT.test(e)?O_[e]=!0:(L_[e]=!0,!1)}var ne=!1;function I_(){var e=ne;return ne=!1,e}function eu(e,t,n){if(nT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function zc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function cs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ry(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mp(e){if(!e._valueTracker){var t=Ry(e)?"checked":"value";e._valueTracker=iT(e,t,""+e[t])}}function Ny(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ry(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var sT=/[\n"\\]/g;function ci(e){return e.replace(sT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gn(t)):e.value!==""+Gn(t)&&(e.value=""+Gn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Ud(e,Gn(e.value)):Ud(e,Gn(t)):n!=null?Ud(e,Gn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Gn(o):e.removeAttribute("name")}function Dy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){mp(e);return}n=n!=null?""+Gn(n):"",t=t!=null?""+Gn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),mp(e)}function Ud(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Vr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Gn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Uy(e,t,n){if(t!=null&&(t=""+Gn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gn(n):""}function Ly(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(nl(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Gn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),mp(e)}function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var aT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function P_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||aT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Oy(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ne=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(P_(e,s,i),ne=!0)}else for(var a in t)t.hasOwnProperty(a)&&P_(e,a,t[a])}function xm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nu(e){return oT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var _p=null;function Sm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,Hr=null;function B_(e){var t=co(e);if(t&&(e=t.stateNode)){var n=e[In]||null;t:switch(e=t.stateNode,t.type){case"input":if(gp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ci(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[In]||null;if(!s)throw Error(Q(90));gp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ny(i)}break t;case"textarea":Uy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}}}var Ld=!1;function Iy(e,t,n){if(Ld)return e(t,n);Ld=!0;try{var i=e(t);return i}finally{if(Ld=!1,(Nr!==null||Hr!==null)&&(uh(),Nr&&(t=Nr,e=Hr,Hr=Nr=null,B_(t),e)))for(t=0;t<e.length;t++)B_(e[t])}}function xl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[In]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vp=!1;if(ms)try{Sr={},Object.defineProperty(Sr,"passive",{get:function(){vp=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{vp=!1}var Sr,Xs=null,Mm=null,iu=null;function Py(){if(iu)return iu;var e,t=Mm,n=t.length,i,s="value"in Xs?Xs.value:Xs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return iu=s.slice(e,1<i?1-i:void 0)}function su(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fc(){return!0}function z_(){return!1}function En(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fc:z_,this.isPropagationStopped=z_,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),t}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=En(ua),Vl=ye({},ua,{view:0,detail:0}),lT=En(Vl),Od,Id,Ko,ju=ye({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ko&&(Ko&&e.type==="mousemove"?(Od=e.screenX-Ko.screenX,Id=e.screenY-Ko.screenY):Id=Od=0,Ko=e),Od)},movementY:function(e){return"movementY"in e?e.movementY:Id}}),F_=En(ju),cT=ye({},ju,{dataTransfer:0}),uT=En(cT),hT=ye({},Vl,{relatedTarget:0}),Pd=En(hT),fT=ye({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),dT=En(fT),pT=ye({},ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mT=En(pT),gT=ye({},ua,{data:0}),V_=En(gT),_T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yT[e])?!!t[e]:!1}function bm(){return xT}var ST=ye({},Vl,{key:function(e){if(e.key){var t=_T[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=su(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(e){return e.type==="keypress"?su(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?su(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),MT=En(ST),bT=ye({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),H_=En(bT),TT=ye({},ua,{submitter:0}),ET=En(TT),AT=ye({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),wT=En(AT),CT=ye({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),RT=En(CT),NT=ye({},ju,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=En(NT),UT=ye({},ua,{newState:0,oldState:0,source:0}),LT=En(UT),OT=[9,13,27,32],Tm=ms&&"CompositionEvent"in window,rl=null;ms&&"documentMode"in document&&(rl=document.documentMode);var IT=ms&&"TextEvent"in window&&!rl,By=ms&&(!Tm||rl&&8<rl&&11>=rl),G_=" ",k_=!1;function zy(e,t){switch(e){case"keyup":return OT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function PT(e,t){switch(e){case"compositionend":return Fy(t);case"keypress":return t.which!==32?null:(k_=!0,G_);case"textInput":return e=t.data,e===G_&&k_?null:e;default:return null}}function BT(e,t){if(Dr)return e==="compositionend"||!Tm&&zy(e,t)?(e=Py(),iu=Mm=Xs=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return By&&t.locale!=="ko"?null:t.data;default:return null}}var zT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zT[e.type]:t==="textarea"}function Vy(e,t,n,i){Nr?Hr?Hr.push(i):Hr=[i]:Nr=i,t=qu(t,"onChange"),0<t.length&&(n=new Qu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ol=null,Sl=null;function FT(e){IS(e,0)}function $u(e){var t=il(e);if(Ny(t))return e}function W_(e,t){if(e==="change")return t}var Hy=!1;ms&&(ms?(Hc="oninput"in document,Hc||(Bd=document.createElement("div"),Bd.setAttribute("oninput","return;"),Hc=typeof Bd.oninput=="function"),Vc=Hc):Vc=!1,Hy=Vc&&(!document.documentMode||9<document.documentMode));var Vc,Hc,Bd;function q_(){ol&&(ol.detachEvent("onpropertychange",Gy),Sl=ol=null)}function Gy(e){if(e.propertyName==="value"&&$u(Sl)){var t=[];Vy(t,Sl,e,Sm(e)),Iy(FT,t)}}function VT(e,t,n){e==="focusin"?(q_(),ol=t,Sl=n,ol.attachEvent("onpropertychange",Gy)):e==="focusout"&&q_()}function HT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $u(Sl)}function GT(e,t){if(e==="click")return $u(t)}function kT(e,t){if(e==="input"||e==="change")return $u(t)}function XT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kn=typeof Object.is=="function"?Object.is:XT;function Ml(e,t){if(Kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!pp.call(t,s)||!Kn(e[s],t[s]))return!1}return!0}function yp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Y_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Z_(e,t){var n=Y_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Y_(n)}}function ky(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ky(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yp(e.document)}return t}function Em(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var WT=ms&&"documentMode"in document&&11>=document.documentMode,Ur=null,xp=null,ll=null,Sp=!1;function J_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sp||Ur==null||Ur!==yp(i)||(i=Ur,"selectionStart"in i&&Em(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ll&&Ml(ll,i)||(ll=i,i=qu(xp,"onSelect"),0<i.length&&(t=new Qu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ur)))}function Na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},zd={},Wy={};ms&&(Wy=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ja(e){if(zd[e])return zd[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wy)return zd[e]=t[n];return e}var qy=ja("animationend"),Yy=ja("animationiteration"),Zy=ja("animationstart"),qT=ja("transitionrun"),YT=ja("transitionstart"),ZT=ja("transitioncancel"),Jy=ja("transitionend"),Ky=new Map,Mp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mp.push("scrollEnd");function Ei(e,t){Ky.set(e,t),Qa(t,[e])}var JT=0;function gs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ti.identifierPrefix;var n=JT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function K_(e){if(e==null||typeof e=="string")return e;var t=null,n=Zr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ms(e,t){return e=K_(e),t=K_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Or=0,Am=0;function th(){for(var e=Or,t=Am=Or=0;t<e;){var n=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var s=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Qy(n,s,a)}}function eh(e,t,n,i){ri[Or++]=e,ri[Or++]=t,ri[Or++]=n,ri[Or++]=i,Am|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function wm(e,t,n,i){return eh(e,t,n,i),Au(e)}function $a(e,t){return eh(e,null,null,t),Au(e)}function Qy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Zn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Au(e){if(50<vl)throw vl=0,pu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ir={};function KT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(e,t,n,i){return new KT(e,t,n,i)}function Cm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ds(e,t){var n=e.alternate;return n===null?(n=Un(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function jy(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function au(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Cm(i)&&(r=1);else if(typeof i=="string")r=MA(e,n,Yi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case cp:return e=Un(31,n,t,s),e.elementType=cp,e.lanes=a,e;case Cr:return za(n.children,s,a,t);case my:r=8,s|=24;break;case rp:return e=Un(12,n,t,s|2),e.elementType=rp,e.lanes=a,e;case op:return e=Un(13,n,t,s),e.elementType=op,e.lanes=a,e;case lp:return e=Un(19,n,t,s),e.elementType=lp,e.lanes=a,e;case B1:case up:return e=s|32,e=Un(30,n,t,e),e.elementType=up,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ki:r=10;break t;case gy:r=9;break t;case mm:r=11;break t;case gm:r=14;break t;case Vs:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=Un(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function za(e,t,n,i){return e=Un(7,e,i,t),e.lanes=n,e}function Fd(e,t,n){return e=Un(6,e,null,t),e.lanes=n,e}function $y(e){var t=Un(18,null,null,0);return t.stateNode=e,t}function Vd(e,t,n){return t=Un(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Q_=new WeakMap;function ui(e,t){if(typeof e=="object"&&e!==null){var n=Q_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:R_(t)},Q_.set(e,t),t)}return{value:e,source:t,stack:R_(t)}}var Pr=[],Br=0,wu=null,bl=0,oi=[],li=0,aa=null,Wi=1,qi="";function hs(e,t){Pr[Br++]=bl,Pr[Br++]=wu,wu=e,bl=t}function tx(e,t,n){oi[li++]=Wi,oi[li++]=qi,oi[li++]=aa,aa=e;var i=Wi;e=qi;var s=32-Zn(i)-1;i&=~(1<<s),n+=1;var a=32-Zn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Wi=1<<32-Zn(t)+s|n<<s|i,qi=a+e}else Wi=1<<a|n<<s|i,qi=e}function nh(e){e.return!==null&&(hs(e,1),tx(e,1,0))}function Rm(e){for(;e===wu;)wu=Pr[--Br],Pr[Br]=null,bl=Pr[--Br],Pr[Br]=null;for(;e===aa;)aa=oi[--li],oi[li]=null,qi=oi[--li],oi[li]=null,Wi=oi[--li],oi[li]=null}function ex(e,t){oi[li++]=Wi,oi[li++]=qi,oi[li++]=aa,Wi=t.id,qi=t.overflow,aa=e}var tn=null,Te=null,kt=!1,Ks=null,hi=!1,bp=Error(Q(519));function ra(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tl(ui(t,e)),bp}function j_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[an]=e,t[In]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<Cl.length;n++)Yt(Cl[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),Dy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),Ly(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||BS(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=Xi),t=!0):t=!1,t||ra(e,!0)}function Cu(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:tn=tn.return}}function Mr(e){if(e!==tn)return!1;if(!kt)return Cu(e),kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||om(e.type,e.memoizedProps)),n=!n),n&&Te&&ra(e),Cu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Te=Zv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Te=Zv(e)}else t===27?(t=Te,ha(e.type)?(e=hm,hm=null,Te=e):Te=t):Te=tn?fi(e.stateNode.nextSibling):null;return!0}function Ga(){Te=tn=null,kt=!1}function Hd(){var e=Ks;return e!==null&&(Nn===null?Nn=e:Nn.push.apply(Nn,e),Ks=null),e}function Tl(e){Ks===null?Ks=[e]:Ks.push(e)}var Tp=Ki(null),tr=null,fs=null;function Ws(e,t,n){Ee(Tp,t._currentValue),t._currentValue=n}function ps(e){e._currentValue=Tp.current,on(Tp)}function ru(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ep(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ru(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ru(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),ru(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function ka(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;Kn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===xu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ao):e=[ao])}s=s.return}return e!==null&&Ep(t,e,n,i),t.flags|=262144,e!==null}function Ru(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){tr=e,fs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rn(e){return nx(tr,e)}function Gc(e,t){return tr===null&&Xa(e),nx(e,t)}function nx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fs===null){if(e===null)throw Error(Q(308));fs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fs=fs.next=t;return n}var QT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},jT=Ye.unstable_scheduleCallback,$T=Ye.unstable_NormalPriority,Ge={$$typeof:ki,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nm(){return{controller:new QT,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&jT($T,function(){e.controller.abort()})}function $_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var sl=null;function tE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var cl=null,Ap=0,Wa=0,Gr=null;function eE(e,t){if(cl===null){var n=cl=[];Ap=0,Wa=sg(),Gr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ap++,t.then(tv,tv),t}function tv(){if(--Ap===0&&(sl=null,cl!==null)){Gr!==null&&(Gr.status="fulfilled");var e=cl;cl=null,Wa=0,Gr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ev=Ut.S;Ut.S=function(e,t){if(xS=qn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&eE(e,t),sl!==null)for(var n=no;n!==null;)$_(n,sl),n=n.next;if(n=e.types,n!==null){for(var i=no;i!==null;)$_(i,n),i=i.next;if(Wa!==0){i=sl,i===null&&(i=sl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}ev!==null&&ev(e,t)};var Fa=Ki(null);function Dm(){var e=Fa.current;return e!==null?e:ve.pooledCache}function ou(e,t){t===null?Ee(Fa,Fa.current):Ee(Fa,t.pool)}function ix(){var e=Dm();return e===null?null:{parent:Ge._currentValue,pool:e}}var uo=Error(Q(460)),Um=Error(Q(474)),ih=Error(Q(542)),Nu={then:function(){}};function nv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sv(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Xi,Xi);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sv(e),e}throw Va=t,uo}}function La(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Va=n,uo):n}}var Va=null;function iv(){if(Va===null)throw Error(Q(459));var e=Va;return Va=null,e}function sv(e){if(e===uo||e===ih)throw Error(Q(483))}var kr=null,El=0;function kc(e){var t=El;return El+=1,kr===null&&(kr=[]),sx(kr,e,t)}function Bs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xc(e,t){throw t.$$typeof===P1?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ax(e){function t(h,g){if(e){var M=h.deletions;M===null?(h.deletions=[g],h.flags|=16):M.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key===null?g.set(h.index,h):g.set(h.key,h),h=h.sibling;return g}function s(h,g){return h=ds(h,g),h.index=0,h.sibling=null,h}function a(h,g,M){return h.index=M,e?(M=h.alternate,M!==null?(M=M.index,M<g?(h.flags|=2,g):M):(h.flags|=134217730,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,g,M,y){return g===null||g.tag!==6?(g=Fd(M,h.mode,y),g.return=h,g):(g=s(g,M),g.return=h,g)}function l(h,g,M,y){var T=M.type;return T===Cr?(h=f(h,g,M.props.children,y,M.key),Bs(h,M),h):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Vs&&La(T)===g.type)?(g=s(g,M.props),Bs(g,M),g.return=h,g):(g=au(M.type,M.key,M.props,null,h.mode,y),Bs(g,M),g.return=h,g)}function c(h,g,M,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=Vd(M,h.mode,y),g.return=h,g):(g=s(g,M.children||[]),g.return=h,g)}function f(h,g,M,y,T){return g===null||g.tag!==7?(g=za(M,h.mode,y,T),g.return=h,g):(g=s(g,M),g.return=h,g)}function p(h,g,M){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Fd(""+g,h.mode,M),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oc:return M=au(g.type,g.key,g.props,null,h.mode,M),Bs(M,g),M.return=h,M;case el:return g=Vd(g,h.mode,M),g.return=h,g;case Vs:return g=La(g),p(h,g,M)}if(nl(g)||Jo(g))return g=za(g,h.mode,M,null),g.return=h,g;if(typeof g.then=="function")return p(h,kc(g),M);if(g.$$typeof===ki)return p(h,Gc(h,g),M);Xc(h,g)}return null}function u(h,g,M,y){var T=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(h,g,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oc:return M.key===T?l(h,g,M,y):null;case el:return M.key===T?c(h,g,M,y):null;case Vs:return M=La(M),u(h,g,M,y)}if(nl(M)||Jo(M))return T!==null?null:f(h,g,M,y,null);if(typeof M.then=="function")return u(h,g,kc(M),y);if(M.$$typeof===ki)return u(h,g,Gc(h,M),y);Xc(h,M)}return null}function d(h,g,M,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(M)||null,o(g,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oc:return h=h.get(y.key===null?M:y.key)||null,l(g,h,y,T);case el:return h=h.get(y.key===null?M:y.key)||null,c(g,h,y,T);case Vs:return y=La(y),d(h,g,M,y,T)}if(nl(y)||Jo(y))return h=h.get(M)||null,f(g,h,y,T,null);if(typeof y.then=="function")return d(h,g,M,kc(y),T);if(y.$$typeof===ki)return d(h,g,M,Gc(g,y),T);Xc(g,y)}return null}function v(h,g,M,y){for(var T=null,E=null,C=g,x=g=0,A=null;C!==null&&x<M.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var R=u(h,C,M[x],y);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(h,C),g=a(R,g,x),E===null?T=R:E.sibling=R,E=R,C=A}if(x===M.length)return n(h,C),kt&&hs(h,x),T;if(C===null){for(;x<M.length;x++)C=p(h,M[x],y),C!==null&&(g=a(C,g,x),E===null?T=C:E.sibling=C,E=C);return kt&&hs(h,x),T}for(C=i(C);x<M.length;x++)A=d(C,h,x,M[x],y),A!==null&&(e&&(R=A.alternate,R!==null&&C.delete(R.key===null?x:R.key)),g=a(A,g,x),E===null?T=A:E.sibling=A,E=A);return e&&C.forEach(function(O){return t(h,O)}),kt&&hs(h,x),T}function b(h,g,M,y){if(M==null)throw Error(Q(151));for(var T=null,E=null,C=g,x=g=0,A=null,R=M.next();C!==null&&!R.done;x++,R=M.next()){C.index>x?(A=C,C=null):A=C.sibling;var O=u(h,C,R.value,y);if(O===null){C===null&&(C=A);break}e&&C&&O.alternate===null&&t(h,C),g=a(O,g,x),E===null?T=O:E.sibling=O,E=O,C=A}if(R.done)return n(h,C),kt&&hs(h,x),T;if(C===null){for(;!R.done;x++,R=M.next())R=p(h,R.value,y),R!==null&&(g=a(R,g,x),E===null?T=R:E.sibling=R,E=R);return kt&&hs(h,x),T}for(C=i(C);!R.done;x++,R=M.next())R=d(C,h,x,R.value,y),R!==null&&(e&&(A=R.alternate,A!==null&&C.delete(A.key===null?x:A.key)),g=a(R,g,x),E===null?T=R:E.sibling=R,E=R);return e&&C.forEach(function(z){return t(h,z)}),kt&&hs(h,x),T}function m(h,g,M,y){if(typeof M=="object"&&M!==null&&M.type===Cr&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Oc:t:{for(var T=M.key;g!==null;){if(g.key===T){if(T=M.type,T===Cr){if(g.tag===7){n(h,g.sibling),y=s(g,M.props.children),Bs(y,M),y.return=h,h=y;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Vs&&La(T)===g.type){n(h,g.sibling),y=s(g,M.props),Bs(y,M),y.return=h,h=y;break t}n(h,g);break}else t(h,g);g=g.sibling}M.type===Cr?(y=za(M.props.children,h.mode,y,M.key),Bs(y,M),y.return=h,h=y):(y=au(M.type,M.key,M.props,null,h.mode,y),Bs(y,M),y.return=h,h=y)}return r(h);case el:t:{for(T=M.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(h,g.sibling),y=s(g,M.children||[]),y.return=h,h=y;break t}else{n(h,g);break}else t(h,g);g=g.sibling}y=Vd(M,h.mode,y),y.return=h,h=y}return r(h);case Vs:return M=La(M),m(h,g,M,y)}if(nl(M))return v(h,g,M,y);if(Jo(M)){if(T=Jo(M),typeof T!="function")throw Error(Q(150));return M=T.call(M),b(h,g,M,y)}if(typeof M.then=="function")return m(h,g,kc(M),y);if(M.$$typeof===ki)return m(h,g,Gc(h,M),y);Xc(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,g!==null&&g.tag===6?(n(h,g.sibling),y=s(g,M),y.return=h,h=y):(n(h,g),y=Fd(M,h.mode,y),y.return=h,h=y),r(h)):n(h,g)}return function(h,g,M,y){try{El=0;var T=m(h,g,M,y);return kr=null,T}catch(C){if(C===uo||C===ih)throw C;var E=Un(29,C,null,h.mode);return E.lanes=y,E.return=h,E}}}var qa=ax(!0),rx=ax(!1),Hs=!1;function Lm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function js(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ie&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Au(e),Qy(e,null,n),t}return eh(e,i,t,n),Au(e)}function ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,by(e,n)}}function Gd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Cp=!1;function hl(){if(Cp){var e=Gr;if(e!==null)throw e}}function fl(e,t,n,i){Cp=!1;var s=e.updateQueue;Hs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Jt&u)===u:(i&u)===u){u!==0&&u===Wa&&(Cp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(m,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(m,p,u):v,u==null)break t;p=ye({},p,u);break t;case 2:Hs=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),ca|=r,e.lanes=r,e.memoizedState=p}}function ox(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function lx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ox(n[e],t)}var oa=Ki(null),Du=Ki(0);function av(e,t){e=xs,Ee(Du,e),Ee(oa,t),xs=e|t.baseLanes}function Rp(){Ee(Du,xs),Ee(oa,oa.current)}function Om(){xs=Du.current,on(oa),on(Du)}var un=Ki(null),gn=null;function $s(e){var t=e.alternate;Ee(ln,ln.current&1),Ee(un,e),gn===null&&(t===null||oa.current!==null||t.memoizedState!==null)&&(gn=e)}function Np(e){Ee(ln,ln.current),Ee(un,e),gn===null&&(gn=e)}function cx(e){e.tag===22?(Ee(ln,ln.current),Ee(un,e),gn===null&&(gn=e)):ta()}function ta(){Ee(ln,ln.current),Ee(un,un.current)}function kn(e){on(un),gn===e&&(gn=null),on(ln)}var ln=Ki(0);function Al(e,t){Ee(un,un.current),Ee(ln,t)}function Im(e){on(ln),on(un),gn===e&&(gn=null)}function Uu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||um(n)||lg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _s=0,zt=null,ge=null,He=null,Lu=!1,Xr=!1,Ya=!1,Ou=0,wl=0,Wr=null,iE=0;function Oe(){throw Error(Q(321))}function Pm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function Bm(e,t,n,i,s,a){return _s=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Vx:Hx,Ya=!1,a=n(i,s),Ya=!1,Xr&&(a=hx(t,n,i,s)),ux(e),a}function ux(e){Ut.H=Iu;var t=ge!==null&&ge.next!==null;if(_s=0,He=ge=zt=null,Lu=!1,wl=0,Wr=null,t)throw Error(Q(300));e===null||ke||(e=e.dependencies,e!==null&&Ru(e)&&(ke=!0))}function hx(e,t,n,i){zt=e;var s=0;do{if(Xr&&(Wr=null),wl=0,Xr=!1,25<=s)throw Error(Q(301));if(s+=1,He=ge=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ut.H=hE,a=t(n,i)}while(Xr);return a}function sE(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Gl(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(zt.flags|=1024),t}function zm(){var e=Ou!==0;return Ou=0,e}function Fm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vm(e){if(Lu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Lu=!1}_s=0,He=ge=zt=null,Xr=!1,wl=Ou=0,Wr=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?zt.memoizedState=He=e:He=He.next=e,He}function Be(){if(ge===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=He===null?zt.memoizedState:He.next;if(t!==null)He=t,ge=e;else{if(e===null)throw zt.alternate===null?Error(Q(467)):Error(Q(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},He===null?zt.memoizedState=He=e:He=He.next=e}return He}function sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(e){var t=wl;return wl+=1,Wr===null&&(Wr=[]),e=sx(Wr,e,t),t=zt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Vx:Hx),e}function ah(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gl(e);if(e.$$typeof===F1)return;if(e.$$typeof===ki)return rn(e)}throw Error(Q(438,String(e)))}function Hm(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=sh(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=z1;return t.index++,n}function vs(e,t){return typeof t=="function"?t(e):t}function lu(e){var t=Be();return Gm(t,ge,e)}function Gm(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Jt&p)===p:(_s&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Wa&&(f=!0);else if((_s&u)===u){c=c.next,u===Wa&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,zt.lanes|=u,ca|=u;p=c.action,Ya&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=p,ca|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Kn(a,e.memoizedState)&&(ke=!0,f&&(n=Gr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function kd(e){var t=Be(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Kn(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function fx(e,t,n){var i=zt,s=Be(),a=kt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!Kn((ge||s).memoizedState,n);if(r&&(s.memoizedState=n,ke=!0),s=s.queue,km(mx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||He!==null&&(He.memoizedState.tag&1)!==0,jr(e?9:8,{destroy:void 0},px.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ve===null)throw Error(Q(349));a||(_s&127)!==0||dx(i,t,n)}return n}function dx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=sh(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function px(e,t,n,i){t.value=n,t.getSnapshot=i,gx(t)&&_x(e)}function mx(e,t,n){return n(function(){gx(t)&&_x(e)})}function gx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch{return!0}}function _x(e){var t=$a(e,2);t!==null&&Ln(t,e,2)}function Dp(e){var t=Tn();if(typeof e=="function"){var n=e;if(e=n(),Ya){ks(!0);try{n()}finally{ks(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},t}function vx(e,t,n,i){return e.baseState=n,Gm(e,ge,typeof i=="function"?i:vs)}function aE(e,t,n,i,s){if(oh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ut.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,yx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function yx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ut.T,r={};r.types=a!==null?a.types:null,Ut.T=r;try{var o=n(s,i),l=Ut.S;l!==null&&l(r,o),rv(e,t,o)}catch(c){Up(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ut.T=a}}else try{a=n(s,i),rv(e,t,a)}catch(c){Up(e,t,c)}}function rv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ov(e,t,i)},function(i){return Up(e,t,i)}):ov(e,t,n)}function ov(e,t,n){t.status="fulfilled",t.value=n,xx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,yx(e,n)))}function Up(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,xx(t),t=t.next;while(t!==i)}e.action=null}function xx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sx(e,t){return t}function lv(e,t){if(kt){var n=ve.formState;if(n!==null){t:{var i=zt;if(kt){if(Te){e:{for(var s=Te,a=hi;s.nodeType!==8;){if(!a){s=null;break e}if(s=fi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Te=fi(s.nextSibling),i=s.data==="F!";break t}}ra(i)}i=!1}i&&(t=n[0])}}return n=Tn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sx,lastRenderedState:t},n.queue=i,n=Bx.bind(null,zt,i),i.dispatch=n,i=Dp(!1),a=Ym.bind(null,zt,!1,i.queue),i=Tn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=aE.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function cv(e){var t=Be();return Mx(t,ge,e)}function Mx(e,t,n){if(t=Gm(e,t,Sx)[0],e=lu(vs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Gl(t)}catch(r){throw r===uo?ih:r}else i=t;t=Be();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,jr(9,{destroy:void 0},rE.bind(null,s,n),null)),[i,a,e]}function rE(e,t){e.action=t}function uv(e){var t=Be(),n=ge;if(n!==null)return Mx(t,n,e);Be(),t=t.memoizedState,n=Be();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function jr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=sh(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function bx(){return Be().memoizedState}function cu(e,t,n,i){var s=Tn();zt.flags|=e,s.memoizedState=jr(1|t,{destroy:void 0},n,i===void 0?null:i)}function rh(e,t,n,i){var s=Be();i=i===void 0?null:i;var a=s.memoizedState.inst;ge!==null&&i!==null&&Pm(i,ge.memoizedState.deps)?s.memoizedState=jr(t,a,n,i):(zt.flags|=e,s.memoizedState=jr(1|t,a,n,i))}function hv(e,t){cu(8390656,8,e,t)}function km(e,t){rh(2048,8,e,t)}function oE(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=sh(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Tx(e){var t=Be().memoizedState;return oE({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function Ex(e,t){return rh(4,2,e,t)}function Ax(e,t){return rh(4,4,e,t)}function wx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cx(e,t,n){n=n!=null?n.concat([e]):null,rh(4,4,wx.bind(null,t,e),n)}function Xm(){}function Rx(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Pm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Nx(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Pm(t,i[1]))return i[0];if(i=e(),Ya){ks(!0);try{e()}finally{ks(!1)}}return n.memoizedState=[i,t],i}function Wm(e,t,n){return n===void 0||(_s&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=MS(),zt.lanes|=e,ca|=e,n)}function Dx(e,t,n,i){return Kn(n,t)?n:oa.current!==null?(e=Wm(e,n,i),Kn(e,t)||(ke=!0),e):(_s&106)===0||(_s&1073741824)!==0&&(Jt&261930)===0?(ke=!0,e.memoizedState=n):(e=MS(),zt.lanes|=e,ca|=e,t)}function Ux(e,t,n,i,s){var a=se.p;se.p=a!==0&&8>a?a:8;var r=Ut.T,o={};o.types=r!==null?r.types:null,Ut.T=o,Ym(e,!1,t,n);try{var l=s(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=nE(l,i);dl(e,t,f,Jn(e))}else dl(e,t,i,Jn(e))}catch(p){dl(e,t,{then:function(){},status:"rejected",reason:p},Jn())}finally{se.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function lE(){}function Lp(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=Lx(e).queue;Ux(e,s,t,Ba,n===null?lE:function(){return Ox(e),n(i)})}function Lx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ba,baseState:Ba,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:Ba},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ox(e){var t=Lx(e);t.next===null&&(t=e.alternate.memoizedState),dl(e,t.next.queue,{},Jn())}function qm(){return rn(ao)}function Ix(){return Be().memoizedState}function Px(){return Be().memoizedState}function cE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Jn();e=Qs(n);var i=js(t,e,n);i!==null&&(Ln(i,t,n),ul(i,t,n)),t={cache:Nm()},e.payload=t;return}t=t.return}}function uE(e,t,n){var i=Jn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oh(e)?zx(t,n):(n=wm(e,t,n,i),n!==null&&(Ln(n,e,i),Fx(n,t,i)))}function Bx(e,t,n){var i=Jn();dl(e,t,n,i)}function dl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(oh(e))zx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Kn(o,r))return eh(e,t,s,0),ve===null&&th(),!1}catch{}if(n=wm(e,t,s,i),n!==null)return Ln(n,e,i),Fx(n,t,i),!0}return!1}function Ym(e,t,n,i){if(i={lane:2,revertLane:sg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},oh(e)){if(t)throw Error(Q(479))}else t=wm(e,n,i,2),t!==null&&Ln(t,e,2)}function oh(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function zx(e,t){Xr=Lu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,by(e,n)}}var Iu={readContext:rn,use:ah,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe,useEffectEvent:Oe},Vx={readContext:rn,use:ah,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:hv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,cu(4194308,4,wx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cu(4194308,4,e,t)},useInsertionEffect:function(e,t){cu(4,2,e,t)},useMemo:function(e,t){var n=Tn();t=t===void 0?null:t;var i=e();if(Ya){ks(!0);try{e()}finally{ks(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tn();if(n!==void 0){var s=n(t);if(Ya){ks(!0);try{n(t)}finally{ks(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=uE.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:function(e){e=Dp(e);var t=e.queue,n=Bx.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xm,useDeferredValue:function(e,t){var n=Tn();return Wm(n,e,t)},useTransition:function(){var e=Dp(!1);return e=Ux.bind(null,zt,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Tn();if(kt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),ve===null)throw Error(Q(349));(Jt&127)!==0||dx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,hv(mx.bind(null,i,a,e),[e]),i.flags|=2048,jr(9,{destroy:void 0},px.bind(null,i,a,n,t),null),n},useId:function(){var e=Tn(),t=ve.identifierPrefix;if(kt){var n=qi,i=Wi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ou++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=iE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qm,useFormState:lv,useActionState:lv,useOptimistic:function(e){var t=Tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ym.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hm,useCacheRefresh:function(){return Tn().memoizedState=cE.bind(null,zt)},useEffectEvent:function(e){var t=Tn(),n={impl:e};return t.memoizedState=n,function(){if((ie&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},Hx={readContext:rn,use:ah,useCallback:Rx,useContext:rn,useEffect:km,useImperativeHandle:Cx,useInsertionEffect:Ex,useLayoutEffect:Ax,useMemo:Nx,useReducer:lu,useRef:bx,useState:function(){return lu(vs)},useDebugValue:Xm,useDeferredValue:function(e,t){var n=Be();return Dx(n,ge.memoizedState,e,t)},useTransition:function(){var e=lu(vs)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Gl(e),t]},useSyncExternalStore:fx,useId:Ix,useHostTransitionStatus:qm,useFormState:cv,useActionState:cv,useOptimistic:function(e,t){var n=Be();return vx(n,ge,e,t)},useMemoCache:Hm,useCacheRefresh:Px,useEffectEvent:Tx},hE={readContext:rn,use:ah,useCallback:Rx,useContext:rn,useEffect:km,useImperativeHandle:Cx,useInsertionEffect:Ex,useLayoutEffect:Ax,useMemo:Nx,useReducer:kd,useRef:bx,useState:function(){return kd(vs)},useDebugValue:Xm,useDeferredValue:function(e,t){var n=Be();return ge===null?Wm(n,e,t):Dx(n,ge.memoizedState,e,t)},useTransition:function(){var e=kd(vs)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Gl(e),t]},useSyncExternalStore:fx,useId:Ix,useHostTransitionStatus:qm,useFormState:uv,useActionState:uv,useOptimistic:function(e,t){var n=Be();return ge!==null?vx(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hm,useCacheRefresh:Px,useEffectEvent:Tx};function Xd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Op={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Jn(),s=Qs(i);s.payload=t,n!=null&&(s.callback=n),t=js(e,s,i),t!==null&&(Ln(t,e,i),ul(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Jn(),s=Qs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=js(e,s,i),t!==null&&(Ln(t,e,i),ul(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Jn(),i=Qs(n);i.tag=2,t!=null&&(i.callback=t),t=js(e,i,n),t!==null&&(Ln(t,e,n),ul(t,e,n))}};function fv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ml(n,i)||!Ml(s,a):!0}function dv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Op.enqueueReplaceState(t,t.state,null)}function Za(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ye({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Gx(e){Eu(e)}function kx(e){console.error(e)}function Xx(e){Eu(e)}function Pu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function pv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ip(e,t,n){return n=Qs(n),n.tag=3,n.payload={element:null},n.callback=function(){Pu(e,t)},n}function Wx(e){return e=Qs(e),e.tag=3,e}function qx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){pv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){pv(t,n,i),typeof s!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function fE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ka(t,n,s,!0),n=un.current,n!==null){switch(n.tag){case 31:case 13:case 19:return gn===null?Xu():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Qd(e,i,s)),!1;case 22:return n.flags|=65536,i===Nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Qd(e,i,s)),!1}throw Error(Q(435,n.tag))}return Qd(e,i,s),Xu(),!1}if(kt)return t=un.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==bp&&(e=Error(Q(422),{cause:i}),Tl(ui(e,n)))):(i!==bp&&(t=Error(Q(423),{cause:i}),Tl(ui(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ui(i,n),s=Ip(e.stateNode,i,s),Gd(e,s),Ie!==4&&(Ie=2)),!1;var a=Error(Q(520),{cause:i});if(a=ui(a,n),_l===null?_l=[a]:_l.push(a),Ie!==4&&(Ie=2),t===null)return!0;i=ui(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Ip(n.stateNode,i,e),Gd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ea===null||!ea.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Wx(s),qx(s,e,n,i),Gd(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Zm=Error(Q(461)),ke=!1;function We(e,t,n,i){t.child=e===null?rx(t,null,n,i):qa(t,e.child,n,i)}function mv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Xa(t),i=Bm(e,t,n,r,a,s),o=zm(),e!==null&&!ke?(Fm(e,t,s),ys(e,t,s)):(kt&&o&&nh(t),t.flags|=1,We(e,t,i,s),t.child)}function gv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Cm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Yx(e,t,a,i,s)):(e=au(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Km(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(r,i)&&e.ref===t.ref)return ys(e,t,s)}return t.flags|=1,e=ds(a,i),e.ref=t.ref,e.return=t,t.child=e}function Yx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Ml(a,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=a,Km(e,s))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,ys(e,t,s)}return Pp(e,t,n,i,s)}function Zx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return _v(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ou(t,a!==null?a.cachePool:null),a!==null?av(t,a):Rp(),cx(t);else return i=t.lanes=536870912,_v(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ou(t,a.cachePool),av(t,a),ta(),t.memoizedState=null):(e!==null&&ou(t,null),Rp(),ta());return We(e,t,s,n),t.child}function pl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _v(e,t,n,i,s){var a=Dm();return a=a===null?null:{parent:Ge._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ou(t,null),Rp(),cx(t),e!==null&&ka(e,t,i,!0),t.childLanes=s,null}function uu(e,t){return t=lh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vv(e,t,n){return qa(t,e.child,null,n),e=uu(t,t.pendingProps),e.flags|=2,kn(t),t.memoizedState=null,e}function dE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(kt){if(i.mode==="hidden")return e=uu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},pl(null,e);if(Np(t),(e=Te)?(e=ZS(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},n=$y(e),n.return=t,t.child=n,tn=t,Te=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return uu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Np(t),s)if(t.flags&256)t.flags&=-257,t=vv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(ke||ka(e,t,n,!1),s=(n&e.childLanes)!==0,ke||s){if(oa.current===null){if(i=ve,i!==null&&(r=Ty(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,$a(e,r),Ln(i,e,r),Zm;Xu()}t=vv(e,t,n)}else e=a.treeContext,Te=fi(r.nextSibling),tn=t,kt=!0,Ks=null,hi=!1,e!==null&&ex(t,e),t=uu(t,i),t.flags|=134221824;return t}return e=ds(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Pp(e,t,n,i,s){return Xa(t),n=Bm(e,t,n,i,void 0,s),i=zm(),e!==null&&!ke?(Fm(e,t,s),ys(e,t,s)):(kt&&i&&nh(t),t.flags|=1,We(e,t,n,s),t.child)}function yv(e,t,n,i,s,a){return Xa(t),t.updateQueue=null,n=hx(t,i,n,s),ux(e),i=zm(),e!==null&&!ke?(Fm(e,t,a),ys(e,t,a)):(kt&&i&&nh(t),t.flags|=1,We(e,t,n,a),t.child)}function xv(e,t,n,i,s){if(Xa(t),t.stateNode===null){var a=Ir,r=n.contextType;typeof r=="object"&&r!==null&&(a=rn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Op,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Lm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?rn(r):Ir,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Op.enqueueReplaceState(a,a.state,null),fl(t,i,a,s),hl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Za(n,o);a.props=l;var c=a.context,f=n.contextType;r=Ir,typeof f=="object"&&f!==null&&(r=rn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&dv(t,a,i,r),Hs=!1;var u=t.memoizedState;a.state=u,fl(t,i,a,s),hl(),c=t.memoizedState,o||u!==c||Hs?(typeof p=="function"&&(Xd(t,n,p,i),c=t.memoizedState),(l=Hs||fv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,wp(e,t),r=t.memoizedProps,f=Za(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Ir,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&dv(t,a,i,l),Hs=!1,u=t.memoizedState,a.state=u,fl(t,i,a,s),hl();var d=t.memoizedState;r!==p||u!==d||Hs||e!==null&&e.dependencies!==null&&Ru(e.dependencies)?(typeof o=="function"&&(Xd(t,n,o,i),d=t.memoizedState),(f=Hs||fv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&Ru(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Tr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=qa(t,e.child,null,s),t.child=qa(t,null,n,s)):We(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ys(e,t,s),e}function Sv(e,t,n,i){return Ga(),t.flags|=256,We(e,t,n,i),t.child}var Bp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zp(e){return{baseLanes:e,cachePool:ix()}}function Fp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Wn),e}function Jx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(kt){if(s?$s(t):ta(),(e=Te)?(e=ZS(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},n=$y(e),n.return=t,t.child=n,tn=t,Te=null)):e=null,e===null)throw ra(t);return lg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ta(),s=t.mode,a=lh({mode:"hidden",children:a},s),i=za(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=zp(n),i.childLanes=Fp(e,r,n),t.memoizedState=Bp,pl(null,i)):($s(t),Jm(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return pE(e,t,a,r,i,l,o,n)}return s?(ta(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ds(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ds(l,s):(s=za(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,pl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=zp(n):(a=s.cachePool,a!==null?(o=Ge._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=ix(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Fp(e,r,n),t.memoizedState=Bp,pl(e.child,i)):($s(t),n=e.child,e=n.sibling,n=ds(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Jm(e,t){return t=lh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lh(e,t){return e=Un(22,e,null,t),e.lanes=0,e}function Wc(e,t,n){return qa(t,e.child,null,n),e=Jm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?($s(t),t.flags&=-257,Wc(e,t,o)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,null):(ta(),a=s.fallback,r=t.mode,s=lh({mode:"visible",children:s.children},r),a=za(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,qa(t,e.child,null,o),s=t.child,s.memoizedState=zp(o),s.childLanes=Fp(e,i,o),t.memoizedState=Bp,pl(null,s));if($s(t),lg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Tl({value:s,source:null,stack:null})),Wc(e,t,o)}if(ke||ka(e,t,o,!1),i=(o&e.childLanes)!==0,ke||i){if(oa.current!==null)return Wc(e,t,o);if(i=ve,i!==null&&(s=Ty(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,$a(e,s),Ln(i,e,s),Zm;return um(a)||Xu(),Wc(e,t,o)}return um(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Te=fi(a.nextSibling),tn=t,kt=!0,Ks=null,hi=!1,e!==null&&ex(t,e),t=Jm(t,s.children),t.flags|=134221824,t)}function Mv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ru(e.return,t,n)}function bv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uu(n)===null&&(t=e),e=e.sibling}return t}function qc(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Wd(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Vp(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ln.current;if(t.flags&128)return Al(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Al(t,r),s==="backwards"&&e!==null?(Wd(e),We(e,t,i,n),Wd(e)):We(e,t,i,n),i=kt?bl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mv(e,n,t);else if(e.tag===19)Mv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=bv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Wd(t)),qc(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Uu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}qc(t,!0,n,null,a,i);break;case"together":qc(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=bv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),qc(t,!1,s,n,a,i)}return t.child}function Tv(e,t,n){var i=t.pendingProps;return Ws(t,t.type,i.value),We(e,t,i.children,n),t.child}function ys(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=ds(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ds(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Km(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ru(e)))}function mE(e,t,n){switch(t.tag){case 3:Su(t,t.stateNode.containerInfo),Ws(t,Ge,e.memoizedState.cache),Ga();break;case 27:case 5:dp(t);break;case 4:Su(t,t.stateNode.containerInfo);break;case 10:Ws(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Np(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return $s(t),t.flags|=128,null;i=ka(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Jx(e,t,n):($s(t),e=ys(e,t,n),e!==null?e.sibling:null)}$s(t);break;case 19:if(t.flags&128)return Vp(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(ka(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Vp(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Al(t,ln.current),i)break;return null;case 22:return t.lanes=0,Zx(e,t,n,t.pendingProps);case 24:Ws(t,Ge,e.memoizedState.cache)}return ys(e,t,n)}function Kx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Km(e,n)&&(t.flags&128)===0)return ke=!1,mE(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,kt&&(t.flags&1048576)!==0&&tx(t,bl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=La(t.elementType),t.type=e,typeof e=="function")Cm(e)?(i=Za(e,i),t.tag=1,t=xv(null,t,e,i,n)):(t.tag=0,t=Pp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===mm){t.tag=11,t=mv(null,t,e,i,n);break t}else if(s===gm){t.tag=14,t=gv(null,t,e,i,n);break t}else if(s===ki){t.tag=10,t.type=e,t=Tv(null,t,n);break t}}throw t=hp(e)||e,Error(Q(306,t,""))}}return t;case 0:return Pp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Za(i,t.pendingProps),xv(e,t,i,s,n);case 3:t:{if(Su(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,wp(e,t),fl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ws(t,Ge,i),i!==a.cache&&Ep(t,[Ge],n,!0),hl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sv(e,t,i,n);break t}else if(i!==s){s=ui(Error(Q(424)),t),Tl(s),t=Sv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Te=fi(e.firstChild),tn=t,kt=!0,Ks=null,hi=!0,n=rx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ga(),i===s){t=ys(e,t,n);break t}We(e,t,i,n)}t=t.child}return t;case 26:return Tr(e,t),e===null?(n=Qv(t.type,null,t.pendingProps,null))?t.memoizedState=n:kt||(t.stateNode=FS(t.type,t.pendingProps,Js.current,t)):t.memoizedState=Qv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return dp(t),e===null&&kt&&(i=t.stateNode=JS(t.type,t.pendingProps,Js.current),tn=t,hi=!0,s=Te,ha(t.type)?(hm=s,Te=fi(i.firstChild)):Te=s),We(e,t,t.pendingProps.children,n),Tr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&kt&&((s=i=Te)&&(i=oA(i,t.type,t.pendingProps,hi),i!==null?(t.stateNode=i,tn=t,Te=fi(i.firstChild),hi=!1,s=!0):s=!1),s||ra(t)),dp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,om(s,a)?i=null:r!==null&&om(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Bm(e,t,sE,null,null,n),ao._currentValue=s),Tr(e,t),We(e,t,i,n),t.child;case 6:return e===null&&kt&&((e=n=Te)&&(n=lA(n,t.pendingProps,hi),n!==null?(t.stateNode=n,tn=t,Te=null,e=!0):e=!1),e||ra(t)),null;case 13:return Jx(e,t,n);case 4:return Su(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=qa(t,null,i,n):We(e,t,i,n),t.child;case 11:return mv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Tr(e,t),We(e,t,i,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return Tv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Xa(t),s=rn(s),i=i(s),t.flags|=1,We(e,t,i,n),t.child;case 14:return gv(e,t,t.type,t.pendingProps,n);case 15:return Yx(e,t,t.type,t.pendingProps,n);case 19:return Vp(e,t,n);case 31:return dE(e,t,n);case 22:return Zx(e,t,n,t.pendingProps);case 24:return Xa(t),i=rn(Ge),e===null?(s=Dm(),s===null&&(s=ve,a=Nm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Lm(t),Ws(t,Ge,s)):((e.lanes&n)!==0&&(wp(e,t),fl(t,null,null,n),hl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ws(t,Ge,i)):(i=a.cache,Ws(t,Ge,i),i!==s.cache&&Ep(t,[Ge],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:kt&&nh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Tr(e,t),We(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function us(e){e.flags|=4}function qd(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?ty(t,i):ty(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(ES())e.flags|=8192;else throw Va=Nu,Um}else e.flags&=-16777217}function Ev(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$S(t))if(ES())e.flags|=8192;else throw Va=Nu,Um}function Yc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sy():536870912,e.lanes|=t,$r|=t)}function Qo(e,t){if(!kt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gE(e,t,n){var i=t.pendingProps;switch(Rm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ps(Ge),Jr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?us(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hd())),be(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(us(t),a!==null?(be(t),Ev(t,a)):(be(t),qd(t,s,null,i,n))):a?a!==e.memoizedState?(us(t),be(t),Ev(t,a)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&us(t),be(t),qd(t,s,e,i,n)),null;case 27:if(Mu(t),n=Js.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return be(t),t.subtreeFlags&=-33554433,null}e=Yi.current,Mr(t)?j_(t,e):(e=JS(s,i,n),t.stateNode=e,us(t))}return be(t),t.subtreeFlags&=-33554433,null;case 5:if(Mu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return be(t),t.subtreeFlags&=-33554433,null}if(a=Yi.current,Mr(t))j_(t,a);else{var r=Nl(Js.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[an]=t,a[In]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(cn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&us(t)}}return be(t),t.subtreeFlags&=-33554433,qd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=Js.current,Mr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=tn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[an]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||BS(e.nodeValue,n)),e||ra(t,!0)}else e=Nl(e).createTextNode(i),e[an]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Mr(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[an]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=Hd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(kn(t),t):(kn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Mr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[an]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else s=Hd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(kn(t),t):(kn(t),null)}return kn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Yc(t,t.updateQueue),be(t),null);case 4:return Jr(),e===null&&ag(t.stateNode.containerInfo),t.flags|=67108864,be(t),null;case 10:return ps(t.type),be(t),null;case 19:if(Im(t),i=t.memoizedState,i===null)return be(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Qo(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Uu(e),a!==null){for(t.flags|=128,Qo(i,!1),e=a.updateQueue,t.updateQueue=e,Yc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)jy(n,e),n=n.sibling;return Al(t,ln.current&1|2),kt&&hs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&qn()>Gu&&(t.flags|=128,s=!0,Qo(i,!1),t.lanes=4194304)}else{if(!s)if(e=Uu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Yc(t,e),Qo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!kt)return be(t),null}else 2*qn()-i.renderingStartTime>Gu&&n!==536870912&&(t.flags|=128,s=!0,Qo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qn(),e.sibling=null,a=ln.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||kt?Al(t,a):(n=a,Ee(un,t),Ee(ln,n),gn===null&&(gn=t)),kt&&hs(t,i.treeForkCount),e}return be(t),null;case 22:case 23:return kn(t),Om(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&Yc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&on(Fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ps(Ge),be(t),null;case 25:return null;case 30:return t.flags|=33554432,be(t),null}throw Error(Q(156,t.tag))}function _E(e,t){switch(Rm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ps(Ge),Jr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mu(t),null;case 31:if(t.memoizedState!==null){if(kn(t),t.alternate===null)throw Error(Q(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Im(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Jr(),null;case 10:return ps(t.type),null;case 22:case 23:return kn(t),Om(),e!==null&&on(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ps(Ge),null;case 25:return null;default:return null}}function Qx(e,t){switch(Rm(t),t.tag){case 3:ps(Ge),Jr();break;case 26:case 27:case 5:Mu(t);break;case 4:Jr();break;case 31:t.memoizedState!==null&&kn(t);break;case 13:kn(t);break;case 19:Im(t);break;case 10:ps(t.type);break;case 22:case 23:kn(t),Om(),e!==null&&on(Fa);break;case 24:ps(Ge)}}function kl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){pe(t,t.return,o)}}function la(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){pe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){pe(t,t.return,f)}}function jx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{lx(t,n)}catch(i){pe(e,e.return,i)}}}function $x(e,t,n){n.props=Za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pe(e,t,i)}}function Hi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=gs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=kS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Qn(e);On(e.child,!1,aA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){pe(e,t,o)}}function sn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){pe(e,t,s)}else n.current=null}function Bu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)YS(e.stateNode,t[n])}function Av(e){for(var t=e.return;t!==null&&(jm(t)&&YS(e.stateNode,t.stateNode),!Qm(t));)t=t.return}function ml(e){for(var t=e.return;t!==null&&(jm(t)&&rA(e.stateNode,t.stateNode),!Qm(t));)t=t.return}function Qm(e){return e.tag===5||e.tag===3||e.tag===27}function jm(e){return e&&e.tag===7&&e.stateNode!==null}function Hp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){pe(e,e.return,s)}}function Yd(e,t,n){try{var i=e.stateNode;HE(i,e.type,n,t),i[In]=t}catch(s){pe(e,e.return,s)}}function tS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function Zd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||tS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gp(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi)),Bu(e,i),ne=!0;else if(s!==4&&(s===27&&(Bu(e,i),i=null,ha(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Gp(e,t,n,i),e=e.sibling;e!==null;)Gp(e,t,n,i),e=e.sibling}function zu(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Bu(e,i),ne=!0;else if(s!==4&&(s===27&&(Bu(e,i),i=null,ha(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(zu(e,t,n,i),e=e.sibling;e!==null;)zu(e,t,n,i),e=e.sibling}function eS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);cn(t,i,n),t[an]=e,t[In]=n}catch(a){pe(e,e.return,a)}}var Fu=!1,Xn=null;function wv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Fu=!0)}var Gi=null;function Cv(){var e=Gi;return Gi=null,e}var Dn=0;function ho(e,t,n,i,s){return Dn=0,nS(e.child,t,n,i,s)}function nS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=lm(r);i.push(o),o.view&&(a=!0)}else a||lm(r).view&&(a=!0);Fu=!0,VS(r,Dn===0?t:t+"_"+Dn,n),Dn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||nS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Ji(e,t){for(;e!==null;)e.tag===5?HS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ji(e.child,t)),e=e.sibling}function hu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(hu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=Ms(t.default,t.share),t!=="none"&&(ho(e,n,t,null,!1)||Ji(e.child,!1))}e=e.sibling}}function kp(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=gs(i,n),a=Ms(i.default,n.paired?i.share:i.enter);a!=="none"?ho(e,s,a,null,!1)?(hu(e),n.paired||t||to(e,i.onEnter)):Ji(e.child,!1):hu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)kp(e,t),e=e.sibling;else hu(e)}function Xp(e){if(Xn!==null&&Xn.size!==0){var t=Xn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Ms(n.default,n.share);if(a!=="none"&&(ho(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,to(e,n.onShare)):Ji(e.child,!1)),t.delete(i),t.size===0)break}}}Xp(e)}e=e.sibling}}}function Wp(e){if(e.tag===30){var t=e.memoizedProps,n=gs(t,e.stateNode),i=Xn!==null?Xn.get(n):void 0,s=Ms(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(ho(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Xn.delete(n),to(e,t.onShare)):to(e,t.onExit):Ji(e.child,!1)),Xn!==null&&Xp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Wp(e),e=e.sibling;else Xn!==null&&Xp(e)}function iS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=gs(t,e.stateNode);t=Ms(t.default,t.update),e.flags&=-5,t!=="none"&&ho(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&iS(e);e=e.sibling}}function qp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ji(e.child,!1))}qp(e)}e=e.sibling}}function fu(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),qp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)fu(e),e=e.sibling;else qp(e)}function sS(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&sS(e),e=e.sibling}function $m(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Dn<a.length){var c=a[Dn],f=lm(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&VS(l,Dn===0?n:n+"_"+Dn,s),o&&(e.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(l,Dn===0?i:i+"_"+Dn,t.memoizedProps)),Dn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:$m(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function aS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=gs(n,i),a=Ms(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(YE)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Dn=0,s=$m(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||to(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&aS(e,t);e=e.sibling}}var Qe=!1,le=!1,zi=!1,Jd=!1,Rv=typeof WeakSet=="function"?WeakSet:Set,je=null,Fi=!1,al=!1,Vu=!1,Yp=!1;function vE(e,t,n){if(e=e.containerInfo,am=ro,e=Xy(e),Em(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(rm={focusedElem:e,selectionRange:i},ro=!1,n=(n&335544064)===n,je=t,t=n?9270:1024;je!==null;){if(e=je,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Wp(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&wv(e),Zc(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Wp(i),Zc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&wv(e),Zc(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,je=i):(n&&iS(e),Zc(n))}}Xn=null}function Zc(e){for(;je!==null;){var t=je,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=Za(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){pe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)cm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":cm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=gs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Ms(s.default,s.update),s!=="none"&&ho(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,je=i;break}je=t.return}}function rS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Vi(e,n),i&4&&kl(5,n);break;case 1:if(Vi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){pe(n,n.return,r)}else{var s=Za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){pe(n,n.return,r)}}i&64&&jx(n),i&512&&Hi(n,n.return);break;case 3:if(Vi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{lx(e,t)}catch(r){pe(n,n.return,r)}}break;case 27:t===null&&i&4&&eS(n);case 26:case 5:Vi(e,n),t===null&&i&4&&Hp(n),i&512&&Hi(n,n.return);break;case 12:Vi(e,n);break;case 31:Vi(e,n),i&4&&uS(e,n);break;case 13:Vi(e,n),i&4&&hS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=NE.bind(null,n),cA(e,n))));break;case 22:if(i=n.memoizedState!==null||Qe,!i){var a=t!==null&&t.memoizedState!==null||le;t=Qe,s=le,Qe=i,(le=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Si(e,n,i)):Vi(e,n),Qe=t,le=s}break;case 30:Vi(e,n),i&512&&Hi(n,n.return);break;case 7:i&512&&Hi(n,n.return);default:Vi(e,n)}}function Zp(e,t){for(e=e.child;e!==null;)oS(e,t),e=e.sibling}function oS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){pe(e,e.return,l)}Jp(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ne=!0}catch(l){pe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Wv(o,!0):Wv(e.stateNode,!1)}catch(l){pe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Zp(e,t);break;default:Zp(e,t)}}function Jp(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:oS(n,i);break t;case 22:n.memoizedState===null&&Jp(n,i);break t;default:Jp(n,i)}}e=e.sibling}}function lS(e){var t=e.alternate;t!==null&&(e.alternate=null,lS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ku(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,Rn=!1;function xi(e,t,n){for(n=n.child;n!==null;)cS(e,t,n),n=n.sibling}function cS(e,t,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 26:le||sn(n,t),xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!le&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:le||sn(n,t),ml(n);var i=Re,s=Rn;ha(n.type)&&(Re=n.stateNode,Rn=!1),xi(e,t,n),KS(n.stateNode,n.type,n.memoizedProps),Re=i,Rn=s;break;case 5:le||sn(n,t),ml(n);case 6:if(n.tag===6&&ml(n),i=Re,s=Rn,Re=null,xi(e,t,n),Re=i,Rn=s,Re!==null)if(Rn)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode),ne=!0}catch(a){pe(n,t,a)}else try{Re.removeChild(n.stateNode),ne=!0}catch(a){pe(n,t,a)}break;case 18:Re!==null&&(Rn?(e=Re,Xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),oo(e)):Xv(Re,n.stateNode));break;case 4:i=Re,s=Rn,Re=n.stateNode.containerInfo,Rn=!0,xi(e,t,n),Re=i,Rn=s;break;case 0:case 11:case 14:case 15:la(2,n,t),le||la(4,n,t),xi(e,t,n);break;case 1:le||(sn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$x(n,t,i)),xi(e,t,n);break;case 21:xi(e,t,n);break;case 22:le=(i=le)||n.memoizedState!==null,xi(e,t,n),le=i;break;case 30:sn(n,t),xi(e,t,n);break;case 7:le||sn(n,t),xi(e,t,n);break;default:xi(e,t,n)}}function uS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oo(e)}catch(n){pe(t,t.return,n)}}}function hS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oo(e)}catch(n){pe(t,t.return,n)}}function yE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rv),t;default:throw Error(Q(435,e.tag))}}function Jc(e,t){var n=yE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=DE.bind(null,e,i);i.then(s,s)}})}function Mn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ha(l.type)){Re=l.stateNode,Rn=!1;break t}break;case 5:Re=l.stateNode,Rn=!1;break t;case 3:case 4:Re=l.stateNode.containerInfo,Rn=!0;break t}l=l.return}if(Re===null)throw Error(Q(160));cS(r,o,a),Re=null,Rn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fS(t,e,n),t=t.sibling}var Mi=null;function fS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Mn(t,e,n),bn(e),s&4&&(la(3,e,e.return),kl(3,e),la(5,e,e.return));break;case 1:Mn(t,e,n),bn(e),s&512&&(le||i===null||sn(i,i.return)),s&64&&Qe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Mi,Mn(t,e,n),bn(e),s&512&&(le||i===null||sn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Qe)e.stateNode=FS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Fl]||i[an]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),cn(i,t,n),i[an]=e,$e(i),t=i;break t;case"link":if(a=$v("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),cn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=$v("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),cn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[an]=e,$e(i),t=i}e.stateNode=t}else Qe||fm(a,e.type,e.stateNode);else e.stateNode=jv(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||le||t.parentNode.removeChild(t)):s.count--,n===null?Qe||fm(a,e.type,e.stateNode):jv(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Yd(e,e.memoizedProps,i.memoizedProps);break;case 27:Mn(t,e,n),bn(e),s&512&&(le||i===null||sn(i,i.return)),i!==null&&s&4&&Yd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=zi,zi=!1,Mn(t,e,n),zi=a,bn(e),s&512&&(le||i===null||sn(i,i.return)),e.flags&32){t=e.stateNode;try{Qr(t,""),ne=!0}catch(f){pe(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Yd(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Jd=!0);break;case 6:if(Mn(t,e,n),bn(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ne=!0}catch(f){pe(e,e.return,f)}}break;case 3:if(ne=!1,gu=null,a=Mi,Mi=Dl(t.containerInfo),Mn(t,e,n),Mi=a,bn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{oo(t.containerInfo)}catch(f){pe(e,e.return,f)}Jd&&(Jd=!1,dS(e)),ne=!1;break;case 4:s=zi,zi=Qe,i=I_(),a=Mi,Mi=Dl(e.stateNode.containerInfo),Mn(t,e,n),bn(e),Mi=a,ne&&al&&(Vu=!0),ne=i,zi=s;break;case 12:Mn(t,e,n),bn(e);break;case 31:Mn(t,e,n),bn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Jc(e,t)));break;case 13:Mn(t,e,n),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ch=qn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Jc(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Qe,l=le,c=zi;Qe=o||a,zi=c||a,le=l||r,Mn(t,e,n),le=l,zi=c,Qe=o,bn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Qe||le||(t=r||le,n=Qe,i=le,Qe=a||Qe,le=t,Fs(e,2),Qe=n,le=i),!a&&zi||Zp(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Jc(e,n))));break;case 19:Mn(t,e,n),bn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Jc(e,t)));break;case 30:s&512&&(le||i===null||sn(i,i.return)),s=I_(),a=al,r=(n&335544064)===n,o=e.memoizedProps,al=r&&Ms(o.default,o.update)!=="none",Mn(t,e,n),bn(e),r&&i!==null&&ne&&(e.flags|=4),al=a,ne=s;break;case 21:break;case 7:s&512&&(le||i===null||sn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Mn(t,e,n),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(tS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(jm(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Qm(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=Zd(e);zu(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Qr(c,""),n.flags&=-33);var f=Zd(e);zu(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Zd(e);Gp(e,u,p,r);break;default:throw Error(Q(161))}}catch(d){pe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,ro=!0,t.reset(),ro=!1),e=e.sibling}}function br(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)pS(t,e),t=t.sibling;else aS(t,!1)}function pS(e,t){var n=e.alternate;if(n===null)kp(e,!1);else switch(e.tag){case 3:if(Yp=Fi=!1,Cv(),br(t,e),!Fi&&!Vu){if(e=Gi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];HS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Yp=!0}Gi=null;break;case 5:br(t,e);break;case 4:i=Fi,Fi=!1,br(t,e),Fi&&(Vu=!0),Fi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?kp(e,!1):br(t,e));break;case 30:i=Fi,s=Cv(),Fi=!1,br(t,e),Fi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=gs(a,r),r=gs(n.memoizedProps,r);var o=Ms(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Dn=0,t=$m(e,n,t,r,o,a,!0),Dn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(to(e,e.memoizedProps.onUpdate),Gi=s):s!==null&&(s.push.apply(s,Gi),Gi=s),Fi=(e.flags&32)!==0?!0:i;break;default:br(t,e)}}function Vi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rS(e,t.alternate,t),t=t.sibling}function Fs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:la(4,n,n.return),Fs(n,i);break;case 1:sn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&$x(n,n.return,s),Fs(n,i);break;case 27:(i&2)!==0&&KS(n.stateNode,n.type,n.memoizedProps);case 5:sn(n,n.return),n.tag!==5&&n.tag!==27||ml(n),Fs(n,i);break;case 6:ml(n);break;case 26:sn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||le||s.parentNode.removeChild(s),Fs(n,i);break;case 22:n.memoizedState===null&&Fs(n,i);break;case 30:sn(n,n.return),Fs(n,i);break;case 7:sn(n,n.return);default:Fs(n,i)}e=e.sibling}}function Si(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Si(s,a,n),kl(4,a);break;case 1:if(Si(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){pe(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)ox(c[s],l)}catch(f){pe(i,i.return,f)}}o&&r&64&&jx(a),Hi(a,a.return);break;case 27:(n&2)!==0&&eS(a);case 5:a.tag!==5&&a.tag!==27||Av(a),Si(s,a,n),o&&i===null&&r&4&&Hp(a),Hi(a,a.return);break;case 6:Av(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Qe||fm(Dl(l.ownerDocument),a.type,l),Si(s,a,n),o&&i===null&&r&4&&Hp(a),Hi(a,a.return);break;case 12:Si(s,a,n);break;case 31:Si(s,a,n),o&&r&4&&uS(s,a);break;case 13:Si(s,a,n),o&&r&4&&hS(s,a);break;case 22:a.memoizedState===null&&Si(s,a,n),Hi(a,a.return);break;case 30:Si(s,a,n),Hi(a,a.return);break;case 7:Hi(a,a.return);default:Si(s,a,n)}t=t.sibling}}function tg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Hl(n))}function eg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e))}function ai(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)mS(e,t,n,i),t=t.sibling;else s&&sS(t)}function mS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&fu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ai(e,t,n,i),a&2048&&kl(9,t);break;case 1:ai(e,t,n,i);break;case 3:ai(e,t,n,i),s&&Yp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Hl(a)));break;case 12:if(a&2048){ai(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){pe(t,t.return,c)}}else ai(e,t,n,i);break;case 31:ai(e,t,n,i);break;case 13:ai(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&fu(o),r._visibility&2?ai(e,t,n,i):gl(e,t)):(s&&o!==null&&o.memoizedState!==null&&fu(t),r._visibility&2?ai(e,t,n,i):(r._visibility|=2,Er(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&tg(o,t);break;case 24:ai(e,t,n,i),a&2048&&eg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Ji(a.child,!0),Ji(t.child,!0))),ai(e,t,n,i);break;default:ai(e,t,n,i)}}function Er(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Er(a,r,o,l,s),kl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Er(a,r,o,l,s):gl(a,r):(f._visibility|=2,Er(a,r,o,l,s)),s&&c&2048&&tg(r.alternate,r);break;case 24:Er(a,r,o,l,s),s&&c&2048&&eg(r.alternate,r);break;default:Er(a,r,o,l,s)}t=t.sibling}}function gl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:gl(n,i),s&2048&&tg(i.alternate,i);break;case 24:gl(n,i),s&2048&&eg(i.alternate,i);break;default:gl(n,i)}t=t.sibling}}var Oa=8192;function Da(e,t,n){if(e.subtreeFlags&Oa)for(e=e.child;e!==null;)gS(e,t,n),e=e.sibling}function gS(e,t,n){switch(e.tag){case 26:Da(e,t,n),e.flags&Oa&&(e.memoizedState!==null?bA(n,Mi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&ey(n,e)));break;case 5:Da(e,t,n),e.flags&Oa&&(e=e.stateNode,(t&335544128)===t&&ey(n,e));break;case 3:case 4:var i=Mi;Mi=Dl(e.stateNode.containerInfo),Da(e,t,n),Mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Oa,Oa=16777216,Da(e,t,n),Oa=i):Da(e,t,n));break;case 30:if((e.flags&Oa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Xn===null&&(Xn=new Map),Xn.set(i,s)}Da(e,t,n);break;default:Da(e,t,n)}}function _S(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,yS(i,e)}_S(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vS(e),e=e.sibling}function vS(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&la(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,du(e)):jo(e);break;default:jo(e)}}function du(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,yS(i,e)}_S(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:la(8,t,t.return),du(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,du(t));break;default:du(t)}e=e.sibling}}function yS(e,t){for(;je!==null;){var n=je;switch(n.tag){case 0:case 11:case 15:la(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,je=i;else t:for(n=e;je!==null;){i=je;var s=i.sibling,a=i.return;if(lS(i),i===n){je=null;break t}if(s!==null){s.return=a,je=s;break t}je=a}}}var xE={getCacheForType:function(e){var t=rn(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rn(Ge).controller.signal}},SE=typeof WeakMap=="function"?WeakMap:Map,ie=0,ve=null,Zt=null,Jt=0,fe=0,Hn=null,qs=!1,fo=!1,ng=!1,xs=0,Ie=0,ca=0,Ha=0,Hu=0,Wn=0,$r=0,_l=null,Nn=null,Kp=!1,ch=0,xS=0,Gu=1/0,ku=null,ea=null,Ue=0,Ti=null,Ja=null,Zi=0,Qp=0,jp=null,SS=null,qr=null,Yr=null,Zr=null,vl=0,pu=null;function Jn(){return(ie&2)!==0&&Jt!==0?Jt&-Jt:Ut.T!==null?sg():Ey()}function MS(){if(Wn===0)if((Jt&536870912)===0||kt){var e=Pc;Pc<<=1,(Pc&3932160)===0&&(Pc=262144),Wn=e}else Wn=536870912;return e=un.current,e!==null&&(e.flags|=32),Wn}function to(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=kS(gs(e.memoizedProps,n))),Yr===null&&(Yr=[]),Yr.push(t.bind(null,i))}}function Ln(e,t,n){(e===ve&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(eo(e,0),Ys(e,Jt,Wn,!1)),zl(e,n),((ie&2)===0||e!==ve)&&(e===ve&&((ie&2)===0&&(Ha|=n),Ie===4&&Ys(e,Jt,Wn,!1)),Qi(e))}function bS(e,t,n){if((ie&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bl(e,t),s=i?TE(e,t):Kd(e,t,!0),a=i;do{if(s===0){fo&&!i&&Ys(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!ME(n)){s=Kd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=_l;var l=o.current.memoizedState.isDehydrated;if(l&&(eo(o,r).flags|=256),r=Kd(o,r,!1),r!==2&&r!==6){if(ng&&!l){o.errorRecoveryDisabledLanes|=a,Ha|=a,s=4;break t}a=Nn,Nn=s,a!==null&&(Nn===null?Nn=a:Nn.push.apply(Nn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){eo(e,0),Ys(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ys(i,t,Wn,!qs);break t;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=ch+300-qn(),10<s)){if(Ys(i,t,Wn,!qs),Ju(i,0,!0)!==0)break t;Zi=t,i.timeoutHandle=rg(Nv.bind(null,i,n,Nn,ku,Kp,t,Wn,Ha,$r,qs,a,"Throttled",-0,0),s);break t}Nv(i,n,Nn,ku,Kp,t,Wn,Ha,$r,qs,a,null,-0,0)}}break}while(!0);Qi(e)}function Nv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Xn=null,gS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=Ul.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?ch-qn():(a&4194048)===a?xS-qn():0,v=TA(p,v),v!==null)){Zi=a,e.cancelPendingCommit=v(Uv.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),Ys(e,a,r,!c);return}Uv(e,t,a,n,i,s,r,o,l,c,f,p)}function ME(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Kn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ys(e,t,n,i){t=xy(e,t),t&=~Hu,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Zn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&My(e,n,t)}function uh(){return(ie&6)===0?(Xl(0,!1),!1):!0}function ig(){if(Zt!==null){if(fe===0)var e=Zt.return;else e=Zt,fs=tr=null,Vm(e),kr=null,El=0,e=Zt;for(;e!==null;)Qx(e.alternate,e),e=e.return;Zt=null}}function eo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,XE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Zi=0,ig(),ve=e,Zt=n=ds(e.current,null),Jt=t,fe=0,Hn=null,qs=!1,fo=Bl(e,t),ng=!1,$r=Wn=Hu=Ha=ca=Ie=0,Nn=_l=null,Kp=!1,xs=xy(e,t),th(),n}function TS(e,t){zt=null,Ut.H=Iu,t===uo||t===ih?(t=iv(),fe=3):t===Um?(t=iv(),fe=4):fe=t===Zm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Hn=t,Zt===null&&(Ie=1,Pu(e,ui(t,e.current)))}function ES(){var e=un.current;return e===null?!0:(Jt&4194048)===Jt?gn===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===gn:!1}function AS(){var e=Ut.H;return Ut.H=Iu,e===null?Iu:e}function wS(){var e=Ut.A;return Ut.A=xE,e}function Xu(){Ie=4,qs||(Jt&4194048)!==Jt&&un.current!==null||(fo=!0),(ca&134217727)===0&&(Ha&134217727)===0||ve===null||Ys(ve,Jt,Wn,!1)}function Kd(e,t,n){var i=ie;ie|=2;var s=AS(),a=wS();(ve!==e||Jt!==t)&&(ku=null,eo(e,t)),t=!1;var r=Ie;t:do try{if(fe!==0&&Zt!==null){var o=Zt,l=Hn;switch(fe){case 8:ig(),r=6;break t;case 3:case 2:case 9:case 6:un.current===null&&(t=!0);var c=fe;if(fe=0,Hn=null,zr(e,o,l,c),n&&fo){r=0;break t}break;default:c=fe,fe=0,Hn=null,zr(e,o,l,c)}}bE(),r=Ie;break}catch(f){TS(e,f)}while(!0);return t&&e.shellSuspendCounter++,fs=tr=null,ie=i,Ut.H=s,Ut.A=a,Zt===null&&(ve=null,Jt=0,th()),r}function bE(){for(;Zt!==null;)CS(Zt)}function TE(e,t){var n=ie;ie|=2;var i=AS(),s=wS();ve!==e||Jt!==t?(ku=null,Gu=qn()+500,eo(e,t)):fo=Bl(e,t);t:do try{if(fe!==0&&Zt!==null){t=Zt;var a=Hn;e:switch(fe){case 1:fe=0,Hn=null,zr(e,t,a,1);break;case 2:case 9:if(nv(a)){fe=0,Hn=null,Dv(t);break}t=function(){fe!==2&&fe!==9||ve!==e||(fe=7),Qi(e)},a.then(t,t);break t;case 3:fe=7;break t;case 4:fe=5;break t;case 7:nv(a)?(fe=0,Hn=null,Dv(t)):(fe=0,Hn=null,zr(e,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(r?$S(r):o.stateNode.complete){fe=0,Hn=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,hh(c)):Zt=null}break e}}fe=0,Hn=null,zr(e,t,a,5);break;case 6:fe=0,Hn=null,zr(e,t,a,6);break;case 8:ig(),Ie=6;break t;default:throw Error(Q(462))}}EE();break}catch(f){TS(e,f)}while(!0);return fs=tr=null,Ut.H=i,Ut.A=s,ie=n,Zt!==null?0:(ve=null,Jt=0,th(),Ie)}function EE(){for(;Zt!==null&&!G1();)CS(Zt)}function CS(e){var t=Kx(e.alternate,e,xs);e.memoizedProps=e.pendingProps,t===null?hh(e):Zt=t}function Dv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yv(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=yv(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:Vm(t);var i=t;i===tn&&(kt?(Cu(i),i.tag===5&&i.stateNode!=null&&(Te=i.stateNode)):(Cu(i),kt=!0));default:Qx(n,t),t=Zt=jy(t,xs),t=Kx(n,t,xs)}e.memoizedProps=e.pendingProps,t===null?hh(e):Zt=t}function zr(e,t,n,i){fs=tr=null,Vm(t),kr=null,El=0;var s=t.return;try{if(fE(e,s,t,n,Jt)){Ie=1,Pu(e,ui(n,e.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;Ie=1,Pu(e,ui(n,e.current)),Zt=null;return}t.flags&32768?(kt||i===1?e=!0:fo||(Jt&536870912)!==0?e=!1:(qs=e=!0,(i===2||i===9||i===3||i===6)&&(i=un.current,i!==null&&i.tag===13&&(i.flags|=16384))),RS(t,e)):hh(t)}function hh(e){var t=e;do{if((t.flags&32768)!==0){RS(t,qs);return}e=t.return;var n=gE(t.alternate,t,xs);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Ie===0&&(Ie=5)}function RS(e,t){do{var n=_E(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);Ie=6,Zt=null}function Uv(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do fh();while(Ue!==0);if((ie&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===ve&&(Zt=ve=null,Jt=0),Ja=t,Ti=e,Zi=n,jp=s,SS=i,AE(e,t,n,r,o,l,p)}}function AE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Qp=o,o|=Am,j1(e,n,o,i,s,a),Yr=null,(n&335544064)===n?(Zr=tE(e),i=10262):(Zr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,UE(bu,function(){return nm(),null})):(e.callbackNode=null,e.callbackPriority=0),Fu=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,s=se.p,se.p=2,a=ie,ie|=4;try{vE(e,t,n)}finally{ie=a,se.p=s,Ut.T=i}}Ue=1,Fu?qr=KE(r,e.containerInfo,Zr,$p,tm,CE,em,nm,wE,null,null):($p(),tm(),em())}function wE(e){if(Ue!==0){var t=Ti.onRecoverableError;t(e,{componentStack:null})}}function CE(){Ue===3&&(Ue=0,pS(Ja,Ti),Ue=4)}function $p(){if(Ue===1){Ue=0;var e=Ti,t=Ja,n=Zi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null;var s=se.p;se.p=2;var a=ie;ie|=4;try{al=Vu=!1,fS(t,e,n),n=rm;var r=Xy(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&ky(o.ownerDocument.documentElement,o)){if(l!==null&&Em(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),m=l.end===void 0?b:Math.min(l.end,v);!d.extend&&b>m&&(r=m,m=b,b=r);var h=Z_(o,b),g=Z_(o,m);if(h&&g&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var M=p.createRange();M.setStart(h.node,h.offset),d.removeAllRanges(),b>m?(d.addRange(M),d.extend(g.node,g.offset)):(M.setEnd(g.node,g.offset),d.addRange(M))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}ro=!!am,rm=am=null}finally{ie=a,se.p=s,Ut.T=i}}e.current=t,Ue=2}}function tm(){if(Ue===2){Ue=0;var e=Ti,t=Ja,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=se.p;se.p=2;var s=ie;ie|=4;try{rS(e,t.alternate,t)}finally{ie=s,se.p=i,Ut.T=n}}Ue=3}}function em(){if(Ue===4||Ue===3){Ue=0;var e=qr;qr=null,k1();var t=Ti,n=Ja,i=Zi,s=SS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ue=5:(Ue=0,Ja=Ti=null,NS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ea=null),ym(i),n=n.stateNode,Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Pl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ut.T,a=se.p,se.p=2,Ut.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ut.T=n,se.p=a}}if(s=Yr,r=Zr,Zr=null,s!==null&&(Yr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Zi&3)!==0&&fh(),Qi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===pu?vl++:(vl=0,pu=t):(vl=0,pu=null),Xl(0,!1)}}function NS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hl(t)))}function fh(){return qr!==null&&(qr.skipTransition(),qr=null),$p(),tm(),em(),nm()}function nm(){if(Ue!==5)return!1;var e=Ti,t=Qp;Qp=0;var n=ym(Zi),i=Ut.T,s=se.p;try{se.p=32>n?32:n,Ut.T=null,n=jp,jp=null;var a=Ti,r=Zi;if(Ue=0,Ja=Ti=null,Zi=0,(ie&6)!==0)throw Error(Q(331));var o=ie;if(ie|=4,vS(a.current),mS(a,a.current,r,n),ie=o,Xl(0,!1),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Pl,a)}catch{}return!0}finally{se.p=s,Ut.T=i,NS(e,t)}}function Lv(e,t,n){t=ui(n,t),t=Ip(e.stateNode,t,2),e=js(e,t,2),e!==null&&(zl(e,2),Qi(e))}function pe(e,t,n){if(e.tag===3)Lv(e,e,n);else for(;t!==null;){if(t.tag===3){Lv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=ui(n,e),n=Wx(2),i=js(t,n,2),i!==null&&(qx(n,i,t,e),zl(i,2),Qi(i));break}}t=t.return}}function Qd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new SE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(ng=!0,s.add(n),e=RE.bind(null,e,t,n),t.then(e,e))}function RE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ve===e&&(Jt&n)===n&&((Ie===4||Ie===3&&(Jt&62914560)===Jt&&300>qn()-ch)&&(ie&2)===0?eo(e,0):Hu|=n,$r===Jt&&($r=0)),Qi(e)}function DS(e,t){t===0&&(t=Sy()),e=$a(e,t),e!==null&&(zl(e,t),Qi(e))}function NE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),DS(e,n)}function DE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),DS(e,n)}function UE(e,t){return _m(e,t)}var no=null,Ar=null,im=!1,Wu=!1,jd=!1,Zs=0;function Qi(e){e!==Ar&&e.next===null&&(Ar===null?no=Ar=e:Ar=Ar.next=e),Wu=!0,im||(im=!0,OE())}function Xl(e,t){if(!jd&&Wu){jd=!0;do for(var n=!1,i=no;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Zn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ov(i,a))}else a=Jt,a=Ju(i,i===ve?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Bl(i,a)||(n=!0,Ov(i,a));i=i.next}while(n);jd=!1}}function LE(){US()}function US(){Wu=im=!1;var e=0;Zs!==0&&kE()&&(e=Zs);for(var t=qn(),n=null,i=no;i!==null;){var s=i.next,a=LS(i,t);a===0?(i.next=null,n===null?no=s:n.next=s,s===null&&(Ar=n)):(n=i,(e!==0||(a&3)!==0)&&(Wu=!0)),i=s}Ue!==0&&Ue!==5||Xl(e,!1),Zs!==0&&(Zs=0)}function LS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Zn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Q1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ve,n=Jt,n=Ju(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Nd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Nd(i),ym(n)){case 2:case 8:n=vy;break;case 32:n=bu;break;case 268435456:n=yy;break;default:n=bu}return i=OS.bind(null,e),n=_m(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Nd(i),e.callbackPriority=2,e.callbackNode=null,2}function OS(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fh()&&e.callbackNode!==n)return null;var i=Jt;return i=Ju(e,e===ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(bS(e,i,t),LS(e,qn()),e.callbackNode!=null&&e.callbackNode===n?OS.bind(null,e):null)}function Ov(e,t){if(fh())return null;bS(e,t,!0)}function OE(){WE(function(){(ie&6)!==0?_m(_y,LE):US()})}function sg(){if(Zs===0){var e=Wa;e===0&&(e=Ic,Ic<<=1,(Ic&261888)===0&&(Ic=256)),Zs=e}return Zs}function Iv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nu(e)}function IE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Iv((s[In]||null).action),r=i.submitter;r&&(t=(t=r[In]||null)?Iv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Qu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Zs!==0){var l=new FormData(s,r);Lp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Lp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Kc=0;Kc<Mp.length;Kc++)Qc=Mp[Kc],Pv=Qc.toLowerCase(),Bv=Qc[0].toUpperCase()+Qc.slice(1),Ei(Pv,"on"+Bv);var Qc,Pv,Bv,Kc;Ei(qy,"onAnimationEnd");Ei(Yy,"onAnimationIteration");Ei(Zy,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(qT,"onTransitionRun");Ei(YT,"onTransitionStart");Ei(ZT,"onTransitionCancel");Ei(Jy,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function IS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Eu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Eu(f)}s.currentTarget=null,a=l}}}}function Yt(e,t){var n=t[D_];n===void 0&&(n=t[D_]=new Set);var i=e+"__bubble";n.has(i)||(PS(t,e,2,!1),n.add(i))}function $d(e,t,n){var i=0;t&&(i|=4),PS(n,e,i,t)}var jc="_reactListening"+Math.random().toString(36).slice(2);function ag(e){if(!e[jc]){e[jc]=!0,wy.forEach(function(n){n!=="selectionchange"&&(PE.has(n)||$d(n,!1,e),$d(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jc]||(t[jc]=!0,$d("selectionchange",!1,t))}}function PS(e,t,n,i){switch(rM(t)){case 2:var s=CA;break;case 8:s=RA;break;default:s=fg}n=s.bind(null,t,n,e),s=void 0,!vp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function tp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ia(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Iy(function(){var c=a,f=Sm(n),p=[];t:{var u=Ky.get(e);if(u!==void 0){var d=Qu,v=e;switch(e){case"keypress":if(su(n)===0)break t;case"keydown":case"keyup":d=MT;break;case"focusin":v="focus",d=Pd;break;case"focusout":v="blur",d=Pd;break;case"beforeblur":case"afterblur":d=Pd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=F_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=uT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=wT;break;case qy:case Yy:case Zy:d=dT;break;case Jy:d=RT;break;case"scroll":case"scrollend":d=lT;break;case"wheel":d=DT;break;case"copy":case"cut":case"paste":d=mT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=H_;break;case"submit":d=ET;break;case"toggle":case"beforetoggle":d=LT}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var g=c,M;g!==null;){var y=g;if(M=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||M===null||h===null||(y=xl(g,h),y!=null&&b.push(Rl(g,y,M))),m)break;g=g.return}0<b.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==_p&&(v=n.relatedTarget||n.fromElement)&&(Ia(v)||v[lo]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Ia(d):null,d!==null&&(m=Il(d),b=d.tag,d!==m||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=F_,y="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=H_,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=u==null?v:il(u),M=d==null?v:il(d),v=new b(y,g+"leave",u,n,f),v.target=m,v.relatedTarget=M,y=null,Ia(f)===c&&(b=new b(h,g+"enter",d,n,f),b.target=M,b.relatedTarget=m,y=b),m=y,b=u&&d?ap(u,d,BE):null,u!==null&&zv(p,v,u,b,!1),d!==null&&m!==null&&zv(p,m,d,b,!0)))}t:{if(u=c?il(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=W_;else if(X_(u))if(Hy)T=kT;else{T=HT;var E=VT}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&xm(c.elementType)&&(T=W_):T=GT;if(T&&(T=T(e,c))){Vy(p,T,n,f);break t}E&&E(e,u,c)}switch(E=c?il(c):window,e){case"focusin":(X_(E)||E.contentEditable==="true")&&(Ur=E,xp=c,ll=null);break;case"focusout":ll=xp=Ur=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,J_(p,n,f);break;case"selectionchange":if(WT)break;case"keydown":case"keyup":J_(p,n,f)}var C;if(Tm)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else Dr?zy(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(By&&n.locale!=="ko"&&(Dr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Dr&&(C=Py()):(Xs=f,Mm="value"in Xs?Xs.value:Xs.textContent,Dr=!0)),E=qu(c,x),0<E.length&&(x=new V_(x,e,null,n,f),p.push({event:x,listeners:E}),C?x.data=C:(C=Fy(n),C!==null&&(x.data=C)))),(C=IT?PT(e,n):BT(e,n))&&(x=qu(c,"onBeforeInput"),0<x.length&&(E=new V_("onBeforeInput","beforeinput",null,n,f),p.push({event:E,listeners:x}),E.data=C)),IE(p,e,c,n,f)}IS(p,t)})}function Rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=xl(e,n),s!=null&&i.unshift(Rl(e,s,a)),s=xl(e,t),s!=null&&i.push(Rl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function BE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=xl(n,a),c!=null&&r.unshift(Rl(n,c,l))):s||(c=xl(n,a),c!=null&&r.push(Rl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var zE=/\r\n?/g,FE=/\u0000|\uFFFD/g;function Fv(e){return(typeof e=="string"?e:""+e).replace(zE,`
`).replace(FE,"")}function BS(e,t){return t=Fv(t),Fv(e)===t}function de(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Qr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Qr(e,""+i);else return;break;case"className":zc(e,"class",i);break;case"tabIndex":zc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":zc(e,n,i);break;case"style":Oy(e,i,a);return;case"data":if(t!=="object"){zc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=nu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",s.name,s,null),de(e,t,"formEncType",s.formEncType,s,null),de(e,t,"formMethod",s.formMethod,s,null),de(e,t,"formTarget",s.formTarget,s,null)):(de(e,t,"encType",s.encType,s,null),de(e,t,"method",s.method,s,null),de(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=nu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Xi);return;case"onScroll":i!=null&&Yt("scroll",e);return;case"onScrollEnd":i!=null&&Yt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=nu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),eu(e,"popover",i);break;case"xlinkActuate":cs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":eu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=rT.get(n)||n,eu(e,n,i);else return}ne=!0}function sm(e,t,n,i,s,a){switch(n){case"style":Oy(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Qr(e,i);else if(typeof i=="number"||typeof i=="bigint")Qr(e,""+i);else return;break;case"onScroll":i!=null&&Yt("scroll",e);return;case"onScrollEnd":i!=null&&Yt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Cy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[In]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ne=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):eu(e,n,i)}return}ne=!0}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:de(e,t,a,r,n,null)}}s&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:de(e,t,i,f,n,null)}}Dy(e,a,o,l,c,r,s,!1);return;case"select":Yt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:de(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Vr(e,!!i,t,!1):n!=null&&Vr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:de(e,t,r,o,n,null)}Ly(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":de(e,t,l,i,n,null));return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<Cl.length;i++)Yt(Cl[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:de(e,t,c,i,n,null)}return;default:if(xm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&sm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}var VE={};function HE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||de(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(ne=!0),a=d;break;case"name":d!==p&&(ne=!0),s=d;break;case"checked":d!==p&&(ne=!0),c=d;break;case"defaultChecked":d!==p&&(ne=!0),f=d;break;case"value":d!==p&&(ne=!0),r=d;break;case"defaultValue":d!==p&&(ne=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&de(e,t,u,d,i,p)}}gp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||de(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ne=!0),u=a;break;case"defaultValue":a!==l&&(ne=!0),o=a;break;case"multiple":a!==l&&(ne=!0),r=a;default:a!==l&&de(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Vr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Vr(e,!!n,t,!0):Vr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ne=!0),u=s;break;case"defaultValue":s!==a&&(ne=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&de(e,t,r,s,i,a)}Uy(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:de(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(ne=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):de(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&de(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:de(e,t,c,u,i,d)}return;default:if(xm(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&sm(e,t,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||sm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&de(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||de(e,t,p,u,i,d)}function Vv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Vv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Vv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var am=null,rm=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function Hv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function FS(e,t,n,i){return n=Nl(n).createElement(e),n[an]=i,n[In]=t,cn(n,e,t),$e(n),n}function om(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ep=null;function kE(){var e=window.event;return e&&e.type==="popstate"?e===ep?!1:(ep=e,!0):(ep=null,!1)}var rg=typeof setTimeout=="function"?setTimeout:void 0,XE=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,kv=typeof requestAnimationFrame=="function"?requestAnimationFrame:rg,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(e){return Gv.resolve(null).then(e).catch(qE)}:rg;function qE(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Xv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),oo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ip(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ip(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Fl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&ip(e.ownerDocument.body);n=s}while(n);oo(t)}function Wv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function VS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function HS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function GS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function lm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return GS(t,n,e)}function YE(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return GS(t,n,e)}function ZE(e){return e.documentElement.clientHeight}function JE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function KE(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(ZE(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var m=e.suspenseyImages,h=0,g=0;g<m.length;g++){var M=m[g];if(!M.complete){var y=M.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=tM(M),h>_u){b.length=v;break}M=new Promise(JE.bind(M)),b.push(M)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],b=v.effect,m=b.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var h=m=void 0,g=!0,M=0;M<v.length;M++){var y=v[M],T=y.width;if(m===void 0)m=T;else if(m!==T){g=!1;break}if(T=y.height,h===void 0)h=T;else if(h!==T){g=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}g&&m!==void 0&&h!==void 0&&(b.setKeyframes(v),g=getComputedStyle(b.target,b.pseudoElement),g.width!==m||g.height!==h)&&(g=v[0],g.width=m,g.height=h,g=v[v.length-1],g.width=m,g.height=h,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function Pa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Pa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ye({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Pa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Pa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function kS(e){return{name:e,group:new Pa("group",e),imagePair:new Pa("image-pair",e),old:new Pa("old",e),new:new Pa("new",e)}}function Qn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Qn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(XS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=io(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),On(this._fragmentFiber.child,!1,QE,e,o,i)}this._eventListeners=a}};function QE(e,t,n,i){return qe(e).addEventListener(t,n,i),!1}Qn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=XS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=io(s.optionsOrUseCapture),On(this._fragmentFiber.child,!1,jE,e,n,s),i.splice(t,1),a!==null&&a()}};function jE(e,t,n,i){return qe(e).removeEventListener(t,n,i),!1}function io(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function qv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function XS(e,t,n,i){if(e.length===0)return-1;i=qv(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&qv(a.optionsOrUseCapture)===i)return s}return-1}Qn.prototype.dispatchEvent=function(e){var t=Ka(this._fragmentFiber);if(t===null)return!0;t=qe(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,io(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,io(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Qn.prototype.focus=function(e){On(this._fragmentFiber.child,!0,WS,e,void 0,void 0)};function WS(e,t){return e.tag===6?!1:(e=qe(e),uA(e,t))}Qn.prototype.focusLast=function(e){var t=[];On(this._fragmentFiber.child,!0,og,t,void 0,void 0);for(var n=t.length-1;0<=n&&!WS(t[n],e);n--);};function og(e,t){return t.push(e),!1}Qn.prototype.blur=function(){var e=Ka(this._fragmentFiber);e!==null&&(e=qe(e),e=Nl(e).activeElement,e!==null&&On(this._fragmentFiber.child,!1,$E,e,void 0,void 0))};function $E(e,t){return e.tag===6?!1:(e=qe(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Qn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),On(this._fragmentFiber.child,!1,tA,e,void 0,void 0)};function tA(e,t){return e.tag===6||(e=qe(e),t.observe(e)),!1}Qn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),On(this._fragmentFiber.child,!1,eA,e,void 0,void 0);for(var n=t=0;n<bi.length;n++){var i=bi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):bi[t++]=i}bi.length=t}};function eA(e,t){return e.tag===6||(e=qe(e),t.unobserve(e)),!1}var bi=[],np=!1;function nA(e,t,n){bi.push({fragmentInstance:e,observer:t,instance:n}),np||(np=!0,hA(function(){np=!1;var i=bi;bi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Qn.prototype.getClientRects=function(){var e=[];return On(this._fragmentFiber.child,!1,iA,e,void 0,void 0),e};function iA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=qe(e),t.push.apply(t,e.getClientRects());return!1}Qn.prototype.getRootNode=function(e){var t=Ka(this._fragmentFiber);return t===null?this:qe(t).getRootNode(e)};Qn.prototype.compareDocumentPosition=function(e){var t=Ka(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];On(this._fragmentFiber.child,!1,og,n,void 0,void 0);var i=qe(t);if(n.length===0){if(n=i,E_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=dy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=qe(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=qe(n[0]),s=qe(n[n.length-1]);var a=E_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||sA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function sA(e,t,n,i,s){var a=Ia(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Ka(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ap(n,a,A_),t===null?t=!1:(On(t,!0,O1,a,n),a=wr,wr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=ap(i,a,A_),t===null?t=!1:(On(t,!0,I1,a,i),a=wr,sp=wr=null,t=a!==null)),t):!1}function Yv(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Qn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];On(this._fragmentFiber.child,!1,og,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=dy(this._fragmentFiber);if(i=n?i[1]||i[0]||Ka(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=qe(i),Yv(e,n);return}if(i=qe(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=qe(s),Yv(s,n)):qe(s).scrollIntoView(e),i+=n?-1:1}};function aA(e,t){return e=qe(e),qS(e,t),!1}function qS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function YS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,io(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<bi.length;o++){var l=bi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(bi[r++]=l)}bi.length=r,a.observe(e)}),qS(e,t))}function rA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,io(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?nA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function cm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cm(n),Ku(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function oA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function lA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function ZS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=fi(e.nextSibling),e===null))return null;return e}function um(e){return e.data==="$?"||e.data==="$~"}function lg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hm=null;function Zv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return fi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Jv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function uA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function hA(e){kv(function(){kv(function(t){return e(t)})})}function JS(e,t,n){switch(t=Nl(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function KS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&de(e,t,i,null,VE,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Xi&&(e.onclick=null),Ku(e)}function ip(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ku(e)}var di=new Map,Kv=new Set;function Dl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var bs=se.d;se.d={f:fA,r:dA,D:pA,C:mA,L:gA,m:_A,X:yA,S:vA,M:xA};function fA(){var e=bs.f(),t=uh();return e||t}function dA(e){var t=co(e);t!==null&&t.tag===5&&t.type==="form"?Ox(t):bs.r(e)}var po=typeof document>"u"?null:document;function QS(e,t,n){var i=po;if(i&&typeof t=="string"&&t){var s=ci(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Kv.has(s)||(Kv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),cn(t,"link",e),$e(t),i.head.appendChild(t)))}}function pA(e){bs.D(e),QS("dns-prefetch",e,null)}function mA(e,t){bs.C(e,t),QS("preconnect",e,t)}function gA(e,t,n){bs.L(e,t,n);var i=po;if(i&&e&&t){var s='link[rel="preload"][as="'+ci(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ci(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ci(n.imageSizes)+'"]')):s+='[href="'+ci(e)+'"]';var a=s;switch(t){case"style":a=so(e);break;case"script":a=mo(e)}if(!(di.has(a)||(e=ye({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),di.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Wl(a))||t==="script"&&i.querySelector(ql(a))))){var r=i.createElement("link");cn(r,"link",e),t==="style"&&(r[Tu]=!0,r.onload=r.onerror=function(){Ay(r)}),$e(r),i.head.appendChild(r)}}}function _A(e,t){bs.m(e,t);var n=po;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ci(i)+'"][href="'+ci(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=mo(e)}if(!di.has(a)&&(e=ye({rel:"modulepreload",href:e},t),di.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ql(a)))return}i=n.createElement("link"),cn(i,"link",e),$e(i),n.head.appendChild(i)}}}function vA(e,t,n){bs.S(e,t,n);var i=po;if(i&&e){var s=Fr(i).hoistableStyles,a=so(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Wl(a)))o.loading=5;else{e=ye({rel:"stylesheet",href:e,"data-precedence":t},n),(n=di.get(a))&&cg(e,n);var l=r=i.createElement("link");$e(l),cn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,mu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function yA(e,t){bs.X(e,t);var n=po;if(n&&e){var i=Fr(n).hoistableScripts,s=mo(e),a=i.get(s);a||(a=n.querySelector(ql(s)),a||(e=ye({src:e,async:!0},t),(t=di.get(s))&&ug(e,t),a=n.createElement("script"),$e(a),cn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function xA(e,t){bs.M(e,t);var n=po;if(n&&e){var i=Fr(n).hoistableScripts,s=mo(e),a=i.get(s);a||(a=n.querySelector(ql(s)),a||(e=ye({src:e,async:!0,type:"module"},t),(t=di.get(s))&&ug(e,t),a=n.createElement("script"),$e(a),cn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Qv(e,t,n,i){var s=(s=Js.current)?Dl(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=so(n.href),t=Fr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=so(n.href);var a=Fr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Wl(e)))?a._p||(r.instance=a,r.state.loading=5):(a=di.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},di.set(e,a)),SA(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=mo(n),t=Fr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function so(e){return'href="'+ci(e)+'"'}function Wl(e){return'link[rel="stylesheet"]['+e+"]"}function jS(e){return ye({},e,{"data-precedence":e.precedence,precedence:null})}function SA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Tu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Tu]=!0,t.onload=t.onerror=Ay.bind(null,t),cn(t,"link",n),$e(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function mo(e){return'[src="'+ci(e)+'"]'}function ql(e){return"script[async]"+e}function jv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ci(n.href)+'"]');if(i)return t.instance=i,$e(i),i;var s=ye({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),cn(i,"style",s),mu(i,n.precedence,e),t.instance=i;case"stylesheet":s=so(n.href);var a=e.querySelector(Wl(s));if(a)return t.state.loading|=4,t.instance=a,$e(a),a;i=jS(n),(s=di.get(s))&&cg(i,s),a=(e.ownerDocument||e).createElement("link"),$e(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(a,"link",i),t.state.loading|=4,mu(a,n.precedence,e),t.instance=a;case"script":return a=mo(n.src),(s=e.querySelector(ql(a)))?(t.instance=s,$e(s),s):(i=n,(s=di.get(a))&&(i=ye({},n),ug(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),$e(s),cn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,mu(i,n.precedence,e));return t.instance}function mu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function cg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ug(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gu=null;function $v(e,t,n){if(gu===null){var i=new Map,s=gu=new Map;s.set(n,i)}else s=gu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Fl]||a[an]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function fm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function MA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ty(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function $S(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ey(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=tM(t),e.suspenseyImages.push(t)),e=EA.bind(e),t.decode().then(e,e))}function bA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=so(i.href),a=t.querySelector(Wl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ul.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,$e(a);return}a=t.ownerDocument||t,i=jS(i),(s=di.get(s))&&cg(i,s),a=a.createElement("link"),$e(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ul.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _u=0;function TA(e,t){return e.stylesheets&&e.count===0&&vu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&_u===0&&(_u=62500*GE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>_u?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function eM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)vu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ul(){this.count--,eM(this)}function EA(){this.imgCount--,eM(this)}var Yu=null;function vu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yu=new Map,t.forEach(AA,e),Yu=null,Ul.call(e))}function AA(e,t){if(!(t.state.loading&4)){var n=Yu.get(e);if(n)var i=n.get(null);else{n=new Map,Yu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Ul.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ao={$$typeof:ki,Provider:null,Consumer:null,_currentValue:Ba,_currentValue2:Ba,_threadCount:0};function wA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.hiddenUpdates=Dd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function nM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new wA(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Un(3,null,null,t),e.current=a,a.stateNode=e,t=Nm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Lm(a),e}function iM(e){return e?(e=Ir,e):Ir}function sM(e,t,n,i,s,a){s=iM(s),i.context===null?i.context=s:i.pendingContext=s,i=Qs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=js(e,i,t),n!==null&&(Ln(n,e,t),ul(n,e,t))}function ny(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hg(e,t){ny(e,t),(e=e.alternate)&&ny(e,t)}function aM(e){if(e.tag===13||e.tag===31){var t=$a(e,67108864);t!==null&&Ln(t,e,67108864),hg(e,67108864)}}function iy(e){if(e.tag===13||e.tag===31){var t=Jn();t=vm(t);var n=$a(e,t);n!==null&&Ln(n,e,t),hg(e,t)}}var ro=!0;function CA(e,t,n,i){var s=Ut.T;Ut.T=null;var a=se.p;try{se.p=2,fg(e,t,n,i)}finally{se.p=a,Ut.T=s}}function RA(e,t,n,i){var s=Ut.T;Ut.T=null;var a=se.p;try{se.p=8,fg(e,t,n,i)}finally{se.p=a,Ut.T=s}}function fg(e,t,n,i){if(ro){var s=dm(i);if(s===null)tp(e,t,i,Zu,n),sy(e,i);else if(DA(s,e,t,n,i))i.stopPropagation();else if(sy(e,i),t&4&&-1<NA.indexOf(e)){for(;s!==null;){var a=co(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ua(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Zn(r);o.entanglements[1]|=l,r&=~l}Qi(a),(ie&6)===0&&(Gu=qn()+500,Xl(0,!1))}}break;case 31:case 13:o=$a(a,2),o!==null&&Ln(o,a,2),uh(),hg(a,2)}if(a=dm(i),a===null&&tp(e,t,i,Zu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else tp(e,t,i,null,n)}}function dm(e){return e=Sm(e),dg(e)}var Zu=null;function dg(e){if(Zu=null,e=Ia(e),e!==null){var t=Il(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=uy(t),e!==null)return e;e=null}else if(n===31){if(e=hy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zu=e,null}function rM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X1()){case _y:return 2;case vy:return 8;case bu:case W1:return 32;case yy:return 268435456;default:return 32}default:return 32}}var pm=!1,na=null,ia=null,sa=null,Ll=new Map,Ol=new Map,Gs=[],NA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sy(e,t){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(t.pointerId)}}function $o(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=co(t),t!==null&&aM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function DA(e,t,n,i,s){switch(t){case"focusin":return na=$o(na,e,t,n,i,s),!0;case"dragenter":return ia=$o(ia,e,t,n,i,s),!0;case"mouseover":return sa=$o(sa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Ll.set(a,$o(Ll.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ol.set(a,$o(Ol.get(a)||null,e,t,n,i,s)),!0}return!1}function oM(e){var t=Ia(e.target);if(t!==null){var n=Il(t);if(n!==null){if(t=n.tag,t===13){if(t=uy(n),t!==null){e.blockedOn=t,N_(e.priority,function(){iy(n)});return}}else if(t===31){if(t=hy(n),t!==null){e.blockedOn=t,N_(e.priority,function(){iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);_p=i,n.target.dispatchEvent(i),_p=null}else return t=co(n),t!==null&&aM(t),e.blockedOn=n,!1;t.shift()}return!0}function ay(e,t,n){yu(e)&&n.delete(t)}function UA(){pm=!1,na!==null&&yu(na)&&(na=null),ia!==null&&yu(ia)&&(ia=null),sa!==null&&yu(sa)&&(sa=null),Ll.forEach(ay),Ol.forEach(ay)}function $c(e,t){e.blockedOn===t&&(e.blockedOn=null,pm||(pm=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,UA)))}var tu=null;function ry(e){tu!==e&&(tu=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(dg(i||n)===null)continue;break}var a=co(n);a!==null&&(e.splice(t,3),t-=3,Lp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function oo(e){function t(l){return $c(l,e)}na!==null&&$c(na,e),ia!==null&&$c(ia,e),sa!==null&&$c(sa,e),Ll.forEach(t),Ol.forEach(t);for(var n=0;n<Gs.length;n++){var i=Gs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Gs.length&&(n=Gs[0],n.blockedOn===null);)oM(n),n.blockedOn===null&&Gs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[In]||null;if(typeof a=="function")r||ry(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[In]||null)o=r.formAction;else if(dg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ry(n)}}}function lM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function pg(e){this._internalRoot=e}dh.prototype.render=pg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=Jn();sM(n,i,e,t,null,null)};dh.prototype.unmount=pg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sM(e.current,2,null,e,null,null),uh(),t[lo]=null}};function dh(e){this._internalRoot=e}dh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ey();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gs.length&&t!==0&&t<Gs[n].priority;n++);Gs.splice(n,0,e),n===0&&oM(e)}};var oy=ly.version;if(oy!=="19.3.0")throw Error(Q(527,oy,"19.3.0"));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=L1(t),e=e!==null?fy(e):null,e=e===null?null:e.stateNode,e};var LA={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(tl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!tl.isDisabled&&tl.supportsFiber))try{Pl=tl.inject(LA),Yn=tl}catch{}var tl;ph.createRoot=function(e,t){if(!cy(e))throw Error(Q(299));var n=!1,i="",s=Gx,a=kx,r=Xx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=nM(e,1,!1,null,null,n,i,null,s,a,r,lM),e[lo]=t.current,ag(e),new pg(t)};ph.hydrateRoot=function(e,t,n){if(!cy(e))throw Error(Q(299));var i=!1,s="",a=Gx,r=kx,o=Xx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=nM(e,1,!0,t,n??null,i,s,l,a,r,o,lM),t.context=iM(null),n=t.current,i=Jn(),i=vm(i),s=Qs(i),s.callback=null,js(n,s,i),n=i,t.current.lanes=n,zl(t,n),Qi(t),e[lo]=t.current,ag(e),new dh(t)};ph.version="19.3.0"});var fM=Os((_N,hM)=>{"use strict";function uM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uM)}catch(e){console.error(e)}}uM(),hM.exports=cM()});var Jb=hd(Xo()),Kb=hd(fM());var L0=hd(Xo());var UM=0,kg=1,LM=2;var pc=1,OM=2,Po=3,Ta=0,wn=1,ss=2,as=0,Bo=1,Xg=2,Wg=3,qg=4,IM=5;var ur=100,PM=101,BM=102,zM=103,FM=104,VM=200,HM=201,GM=202,kM=203,Yg=204,Zg=205,XM=206,WM=207,qM=208,YM=209,ZM=210,JM=211,KM=212,QM=213,jM=214,Ph=0,Bh=1,zh=2,No=3,Fh=4,Vh=5,Hh=6,Gh=7,Jg=0,$M=1,tb=2,Di=0,Kg=1,Qg=2,jg=3,$g=4,t0=5,e0=6,n0=7;var i0=300,Ea=301,hr=302,mf=303,gf=304,mc=306,kh=1e3,$i=1001,Xh=1002,nn=1003,eb=1004;var gc=1005;var hn=1006,_f=1007;var Aa=1008;var ni=1009,s0=1010,a0=1011,zo=1012,vf=1013,Ui=1014,Li=1015,Oi=1016,yf=1017,xf=1018,Fo=1020,r0=35902,o0=35899,l0=1021,c0=1022,vi=1023,ts=1026,wa=1027,u0=1028,Sf=1029,Ca=1030,Mf=1031;var bf=1033,_c=33776,vc=33777,yc=33778,xc=33779,Tf=35840,Ef=35841,Af=35842,wf=35843,Cf=36196,Rf=37492,Nf=37496,Df=37488,Uf=37489,Sc=37490,Lf=37491,Of=37808,If=37809,Pf=37810,Bf=37811,zf=37812,Ff=37813,Vf=37814,Hf=37815,Gf=37816,kf=37817,Xf=37818,Wf=37819,qf=37820,Yf=37821,Zf=36492,Jf=36494,Kf=36495,Qf=36283,jf=36284,Mc=36285,$f=36286;var jl=2300,Wh=2301,Oh=2302,Bg=2303,zg=2400,Fg=2401,Vg=2402;var nb=3200;var h0=0,ib=1,Ns="",ti="srgb",$l="srgb-linear",tc="linear",ce="srgb";var Ih=7680;var sb=519,ab=512,rb=513,ob=514,td=515,lb=516,cb=517,ed=518,ub=519,hb=35044;var f0="300 es",Ni=2e3,ec=2001;function OA(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function IA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function nc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function fb(){let e=nc("canvas");return e.style.display="block",e}var dM={},Do=null;function d0(...e){let t="THREE."+e.shift();Do?Do("log",t,...e):console.log(t,...e)}function db(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=db(e);let t="THREE."+e.shift();if(Do)Do("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=db(e);let t="THREE."+e.shift();if(Do)Do("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rr(...e){let t=e.join(" ");t in dM||(dM[t]=!0,Dt(...e))}function pb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var mb={[Ph]:Bh,[zh]:Hh,[Fh]:Gh,[No]:Vh,[Bh]:Ph,[Hh]:zh,[Gh]:Fh,[Vh]:No},es=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mg=Math.PI/180,qh=180/Math.PI;function bc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function PA(e,t){return(e%t+t)%t}function gg(e,t,n){return(1-n)*e+n*t}function Yl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var te=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ns=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==v){let m=l*u+c*d+f*v+p*b;m<0&&(u=-u,d=-d,v=-v,b=-b,m=-m);let h=1-o;if(m<.9995){let g=Math.acos(m),M=Math.sin(g);h=Math.sin(h*g)/M,o=Math.sin(o*g)/M,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o;let g=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=g,c*=g,f*=g,p*=g}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(pM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(pM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _g.copy(this).projectOnVector(t),this.sub(_g)}reflect(t){return this.sub(_g.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_g=new k,pM=new ns,It=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],b=s[0],m=s[3],h=s[6],g=s[1],M=s[4],y=s[7],T=s[2],E=s[5],C=s[8];return a[0]=r*b+o*g+l*T,a[3]=r*m+o*M+l*E,a[6]=r*h+o*y+l*C,a[1]=c*b+f*g+p*T,a[4]=c*m+f*M+p*E,a[7]=c*h+f*y+p*C,a[2]=u*b+d*g+v*T,a[5]=u*m+d*M+v*E,a[8]=u*h+d*y+v*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vg.makeScale(t,n)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vg.makeRotation(-t)),this}translate(t,n){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vg=new It,mM=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gM=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BA(){let e={enabled:!0,workingColorSpace:$l,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ce&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(s.r=Ro(s.r),s.g=Ro(s.g),s.b=Ro(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ns?tc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[$l]:{primaries:t,whitePoint:i,transfer:tc,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),e}var Kt=BA();function Rs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ro(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var go,Yh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{go===void 0&&(go=nc("canvas")),go.width=t.width,go.height=t.height;let s=go.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=go}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=nc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Rs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Rs(n[i]/255)*255):n[i]=Rs(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zA=0,Uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=bc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(yg(s[r].image)):a.push(yg(s[r]))}else a=yg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function yg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Yh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var FA=0,xg=new k,zn=class e extends es{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=$i,s=$i,a=hn,r=Aa,o=vi,l=ni,c=e.DEFAULT_ANISOTROPY,f=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=bc(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xg).x}get height(){return this.source.getSize(xg).y}get depth(){return this.source.getSize(xg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=i0;zn.DEFAULT_ANISOTROPY=1;var Le=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,y=(d+1)/2,T=(h+1)/2,E=(f+u)/4,C=(p+b)/4,x=(v+m)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=E/i,a=C/i):y>T?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=E/s,a=x/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=C/a,s=x/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-v)*(m-v)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(p-b)/g,this.z=(u-f)/g,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zh=class extends es{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Le(0,0,t,n),this.scissorTest=!1,this.viewport=new Le(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new zn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Uo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Zh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},ic=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jh=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ze=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/_o.setFromMatrixColumn(t,0).length(),a=1/_o.setFromMatrixColumn(t,1).length(),r=1/_o.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u+b*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VA,t,HA)}lookAt(t,n,i){let s=this.elements;return jn.subVectors(t,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),fa.crossVectors(i,jn),fa.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),fa.crossVectors(i,jn)),fa.normalize(),mh.crossVectors(jn,fa),s[0]=fa.x,s[4]=mh.x,s[8]=jn.x,s[1]=fa.y,s[5]=mh.y,s[9]=jn.y,s[2]=fa.z,s[6]=mh.z,s[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],b=i[6],m=i[10],h=i[14],g=i[3],M=i[7],y=i[11],T=i[15],E=s[0],C=s[4],x=s[8],A=s[12],R=s[1],O=s[5],z=s[9],F=s[13],U=s[2],G=s[6],J=s[10],H=s[14],it=s[3],q=s[7],$=s[11],et=s[15];return a[0]=r*E+o*R+l*U+c*it,a[4]=r*C+o*O+l*G+c*q,a[8]=r*x+o*z+l*J+c*$,a[12]=r*A+o*F+l*H+c*et,a[1]=f*E+p*R+u*U+d*it,a[5]=f*C+p*O+u*G+d*q,a[9]=f*x+p*z+u*J+d*$,a[13]=f*A+p*F+u*H+d*et,a[2]=v*E+b*R+m*U+h*it,a[6]=v*C+b*O+m*G+h*q,a[10]=v*x+b*z+m*J+h*$,a[14]=v*A+b*F+m*H+h*et,a[3]=g*E+M*R+y*U+T*it,a[7]=g*C+M*O+y*G+T*q,a[11]=g*x+M*z+y*J+T*$,a[15]=g*A+M*F+y*H+T*et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],b=t[7],m=t[11],h=t[15],g=l*d-c*u,M=o*d-c*p,y=o*u-l*p,T=r*d-c*f,E=r*u-l*f,C=r*p-o*f;return n*(b*g-m*M+h*y)-i*(v*g-m*T+h*E)+s*(v*M-b*T+h*C)-a*(v*y-b*E+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],b=t[13],m=t[14],h=t[15],g=n*o-i*r,M=n*l-s*r,y=n*c-a*r,T=i*l-s*o,E=i*c-a*o,C=s*c-a*l,x=f*b-p*v,A=f*m-u*v,R=f*h-d*v,O=p*m-u*b,z=p*h-d*b,F=u*h-d*m,U=g*F-M*z+y*O+T*R-E*A+C*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*F-l*z+c*O)*G,t[1]=(s*z-i*F-a*O)*G,t[2]=(b*C-m*E+h*T)*G,t[3]=(u*E-p*C-d*T)*G,t[4]=(l*R-r*F-c*A)*G,t[5]=(n*F-s*R+a*A)*G,t[6]=(m*y-v*C-h*M)*G,t[7]=(f*C-u*y+d*M)*G,t[8]=(r*z-o*R+c*x)*G,t[9]=(i*R-n*z-a*x)*G,t[10]=(v*E-b*y+h*g)*G,t[11]=(p*y-f*E-d*g)*G,t[12]=(o*A-r*O-l*x)*G,t[13]=(n*O-i*A+s*x)*G,t[14]=(b*M-v*T-m*g)*G,t[15]=(f*T-p*M+u*g)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,b=r*f,m=r*p,h=o*p,g=l*c,M=l*f,y=l*p,T=i.x,E=i.y,C=i.z;return s[0]=(1-(b+h))*T,s[1]=(d+y)*T,s[2]=(v-M)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+h))*E,s[6]=(m+g)*E,s[7]=0,s[8]=(v+M)*C,s[9]=(m-g)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=_o.set(s[0],s[1],s[2]).length(),o=_o.set(s[4],s[5],s[6]).length(),l=_o.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ai.copy(this);let c=1/r,f=1/o,p=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=f,Ai.elements[5]*=f,Ai.elements[6]*=f,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,n.setFromRotationMatrix(Ai),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ni,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===Ni)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===ec)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ni,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===Ni)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===ec)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},_o=new k,Ai=new ze,VA=new k(0,0,0),HA=new k(1,1,1),fa=new k,mh=new k,jn=new k,_M=new ze,vM=new ns,va=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-$t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return _M.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_M,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vM.setFromEuler(this),this.setFromQuaternion(vM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var sc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},GA=0,yM=new k,vo=new ns,Ts=new ze,gh=new k,Zl=new k,kA=new k,XA=new ns,xM=new k(1,0,0),SM=new k(0,1,0),MM=new k(0,0,1),bM={type:"added"},WA={type:"removed"},yo={type:"childadded",child:null},Sg={type:"childremoved",child:null},_i=class e extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=bc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new k,n=new va,i=new ns,s=new k(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new It}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return vo.setFromAxisAngle(t,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(t,n){return vo.setFromAxisAngle(t,n),this.quaternion.premultiply(vo),this}rotateX(t){return this.rotateOnAxis(xM,t)}rotateY(t){return this.rotateOnAxis(SM,t)}rotateZ(t){return this.rotateOnAxis(MM,t)}translateOnAxis(t,n){return yM.copy(t).applyQuaternion(this.quaternion),this.position.add(yM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(xM,t)}translateY(t){return this.translateOnAxis(SM,t)}translateZ(t){return this.translateOnAxis(MM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ts.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?gh.copy(t):gh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ts.lookAt(Zl,gh,this.up):Ts.lookAt(gh,Zl,this.up),this.quaternion.setFromRotationMatrix(Ts),s&&(Ts.extractRotation(s.matrixWorld),vo.setFromRotationMatrix(Ts),this.quaternion.premultiply(vo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bM),yo.child=t,this.dispatchEvent(yo),yo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(WA),Sg.child=t,this.dispatchEvent(Sg),Sg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ts),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bM),yo.child=t,this.dispatchEvent(yo),yo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,t,kA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,XA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_i.DEFAULT_UP=new k(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ar=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},qA={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},gb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},_h={h:0,s:0,l:0};function Mg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Kt.workingColorSpace){if(t=PA(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Mg(r,a,t+1/3),this.g=Mg(r,a,t),this.b=Mg(r,a,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,n=ti){function i(a){a!==void 0&&parseFloat(a)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ti){let i=gb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Kt.workingToColorSpace(vn.copy(this),t),Math.round($t(vn.r*255,0,255))*65536+Math.round($t(vn.g*255,0,255))*256+Math.round($t(vn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(vn.copy(this),n);let i=vn.r,s=vn.g,a=vn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(vn.copy(this),n),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ti){Kt.workingToColorSpace(vn.copy(this),t);let n=vn.r,i=vn.g,s=vn.b;return t!==ti?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(da),this.setHSL(da.h+t,da.s+n,da.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(da),t.getHSL(_h);let i=gg(da.h,_h.h,n),s=gg(da.s,_h.s,n),a=gg(da.l,_h.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Qt;Qt.NAMES=gb;var ac=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},wi=new k,Es=new k,bg=new k,As=new k,xo=new k,So=new k,TM=new k,Tg=new k,Eg=new k,Ag=new k,wg=new Le,Cg=new Le,Rg=new Le,_a=class e{constructor(t=new k,n=new k,i=new k){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),wi.subVectors(t,n),s.cross(wi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){wi.subVectors(s,n),Es.subVectors(i,n),bg.subVectors(t,n);let r=wi.dot(wi),o=wi.dot(Es),l=wi.dot(bg),c=Es.dot(Es),f=Es.dot(bg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,As)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,As.x),l.addScaledVector(r,As.y),l.addScaledVector(o,As.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return wg.setScalar(0),Cg.setScalar(0),Rg.setScalar(0),wg.fromBufferAttribute(t,n),Cg.fromBufferAttribute(t,i),Rg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(wg,a.x),r.addScaledVector(Cg,a.y),r.addScaledVector(Rg,a.z),r}static isFrontFacing(t,n,i,s){return wi.subVectors(i,n),Es.subVectors(t,n),wi.cross(Es).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),wi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;xo.subVectors(s,i),So.subVectors(a,i),Tg.subVectors(t,i);let l=xo.dot(Tg),c=So.dot(Tg);if(l<=0&&c<=0)return n.copy(i);Eg.subVectors(t,s);let f=xo.dot(Eg),p=So.dot(Eg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(xo,r);Ag.subVectors(t,a);let d=xo.dot(Ag),v=So.dot(Ag);if(v>=0&&d<=v)return n.copy(a);let b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(So,o);let m=f*v-d*p;if(m<=0&&p-f>=0&&d-v>=0)return TM.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(TM,o);let h=1/(m+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(xo,r).addScaledVector(So,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ya=class{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ci):Ci.fromBufferAttribute(a,r),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vh.copy(i.boundingBox)),vh.applyMatrix4(t.matrixWorld),this.union(vh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jl),yh.subVectors(this.max,Jl),Mo.subVectors(t.a,Jl),bo.subVectors(t.b,Jl),To.subVectors(t.c,Jl),pa.subVectors(bo,Mo),ma.subVectors(To,bo),er.subVectors(Mo,To);let n=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-er.z,er.y,pa.z,0,-pa.x,ma.z,0,-ma.x,er.z,0,-er.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-er.y,er.x,0];return!Ng(n,Mo,bo,To,yh)||(n=[1,0,0,0,1,0,0,0,1],!Ng(n,Mo,bo,To,yh))?!1:(xh.crossVectors(pa,ma),n=[xh.x,xh.y,xh.z],Ng(n,Mo,bo,To,yh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new k,new k,new k,new k,new k,new k,new k,new k],Ci=new k,vh=new ya,Mo=new k,bo=new k,To=new k,pa=new k,ma=new k,er=new k,Jl=new k,yh=new k,xh=new k,nr=new k;function Ng(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){nr.fromArray(e,a);let o=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=t.dot(nr),c=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Xe=new k,Sh=new te,YA=0,mi=class extends es{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=hb,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sh.fromBufferAttribute(this,n),Sh.applyMatrix3(t),this.setXY(n,Sh.x,Sh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Yl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array),a=Pn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var rc=class extends mi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var oc=class extends mi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var gi=class extends mi{constructor(t,n,i){super(new Float32Array(t),n,i)}},ZA=new ya,Kl=new k,Dg=new k,Oo=class{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):ZA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kl.subVectors(t,this.center);let n=Kl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Kl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kl.copy(t.center).add(Dg)),this.expandByPoint(Kl.copy(t.center).sub(Dg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},JA=0,pi=new ze,Ug=new _i,Eo=new k,$n=new ya,Ql=new ya,en=new k,is=class e extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=bc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OA(t)?oc:rc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new It().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,n,i){return pi.makeTranslation(t,n,i),this.applyMatrix4(pi),this}scale(t,n,i){return pi.makeScale(t,n,i),this.applyMatrix4(pi),this}lookAt(t){return Ug.lookAt(t),Ug.updateMatrix(),this.applyMatrix4(Ug.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new gi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Ql.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors($n.min,Ql.min),$n.expandByPoint(en),en.addVectors($n.max,Ql.max),$n.expandByPoint(en)):($n.expandByPoint(Ql.min),$n.expandByPoint(Ql.max))}$n.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)en.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(en));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)en.fromBufferAttribute(o,c),l&&(Eo.fromBufferAttribute(t,c),en.add(Eo)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;let c=new k,f=new k,p=new k,u=new te,d=new te,v=new te,b=new k,m=new k;function h(x,A,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,A),v.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),v.sub(u);let O=1/(d.x*v.y-v.x*d.y);isFinite(O)&&(b.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(O),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(O),o[x].add(b),o[A].add(b),o[R].add(b),l[x].add(m),l[A].add(m),l[R].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let x=0,A=g.length;x<A;++x){let R=g[x],O=R.start,z=R.count;for(let F=O,U=O+z;F<U;F+=3)h(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new k,y=new k,T=new k,E=new k;function C(x){T.fromBufferAttribute(s,x),E.copy(T);let A=o[x];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(E,A);let O=y.dot(l[x])<0?-1:1;r.setXYZW(x,M.x,M.y,M.z,O)}for(let x=0,A=g.length;x<A;++x){let R=g[x],O=R.start,z=R.count;for(let F=O,U=O+z;F<U;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new k,a=new k,r=new k,o=new k,l=new k,c=new k,f=new k,p=new k;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)en.fromBufferAttribute(t,n),en.normalize(),t.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new mi(u,f,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Lg=new k,KA=new k,QA=new It,Ri=class{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Lg.subVectors(i,n).cross(KA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Lg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||QA.getNormalMatrix(t),s=this.coplanarPoint(Lg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jA=0,or=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=bc(),this.name="",this.type="Material",this.blending=Bo,this.side=Ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yg,this.blendDst=Zg,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ih,this.stencilZFail=Ih,this.stencilZPass=Ih,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Cs=new k,Og=new k,Mh=new k,bh=new k,Kh=class{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Cs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,n),Cs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Og.copy(t).add(n).multiplyScalar(.5),Mh.copy(n).sub(t).normalize(),bh.copy(this.origin).sub(Og);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Mh),o=bh.dot(this.direction),l=-bh.dot(Mh),c=bh.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Og).addScaledVector(Mh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Cs.subVectors(t.center,this.origin);let i=Cs.dot(this.direction),s=Cs.dot(Cs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,b=n.y-r.y,m=n.z-r.z,h=i.x-r.x,g=i.y-r.y,M=i.z-r.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(f),C,x,A,R,O,z,F,U,G,J,H,it;if(y>=T&&y>=E?(A=l,z=p,G=v,it=h,l>=0?(C=c,x=f,R=u,O=d,F=b,U=m,J=g,H=M):(C=f,x=c,R=d,O=u,F=m,U=b,J=M,H=g)):T>=E?(A=c,z=u,G=b,it=g,c>=0?(C=f,x=l,R=d,O=p,F=m,U=v,J=M,H=h):(C=l,x=f,R=p,O=d,F=v,U=m,J=h,H=M)):(A=f,z=d,G=m,it=M,f>=0?(C=l,x=c,R=p,O=u,F=v,U=b,J=h,H=g):(C=c,x=l,R=u,O=p,F=b,U=v,J=g,H=h)),A===0)return null;let q=C/A,$=x/A,et=1/A,wt=R-q*z,bt=O-$*z,ue=F-q*G,Xt=U-$*G,Gt=J-q*it,W=H-$*it,tt=Gt*Xt-W*ue,gt=wt*W-bt*Gt,Nt=ue*bt-Xt*wt;if(s){if(tt<0||gt<0||Nt<0)return null}else if((tt<0||gt<0||Nt<0)&&(tt>0||gt>0||Nt>0))return null;let mt=tt+gt+Nt;if(mt===0)return null;let Pt=et*(tt*z+gt*G+Nt*it);return(mt>0?Pt<0:Pt>0)?null:this.at(Pt/mt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lc=class extends or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=Jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},EM=new ze,ir=new Kh,Th=new Oo,AM=new k,Eh=new k,Ah=new k,wh=new k,Ig=new k,Ch=new k,wM=new k,Rh=new k,Vn=class extends _i{constructor(t=new is,n=new lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Ch.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Ig.fromBufferAttribute(p,t),r?Ch.addScaledVector(Ig,f):Ch.addScaledVector(Ig.sub(n),f))}n.add(Ch)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Th.copy(i.boundingSphere),Th.applyMatrix4(a),ir.copy(t.ray).recast(t.near),!(Th.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Th,AM)===null||ir.origin.distanceToSquared(AM)>(t.far-t.near)**2))&&(EM.copy(a).invert(),ir.copy(t.ray).applyMatrix4(EM),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ir)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let m=u[v],h=r[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,T=M;y<T;y+=3){let E=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Nh(this,h,t,i,c,f,p,E,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=v,h=b;m<h;m+=3){let g=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=Nh(this,r,t,i,c,f,p,g,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let m=u[v],h=r[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,T=M;y<T;y+=3){let E=y,C=y+1,x=y+2;s=Nh(this,h,t,i,c,f,p,E,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=v,h=b;m<h;m+=3){let g=m,M=m+1,y=m+2;s=Nh(this,r,t,i,c,f,p,g,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function $A(e,t,n,i,s,a,r,o){let l;if(t.side===wn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ta,o),l===null)return null;Rh.copy(o),Rh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Rh);return c<n.near||c>n.far?null:{distance:c,point:Rh.clone(),object:e}}function Nh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Eh),e.getVertexPosition(l,Ah),e.getVertexPosition(c,wh);let f=$A(e,t,n,i,Eh,Ah,wh,wM);if(f){let p=new k;_a.getBarycoord(wM,Eh,Ah,wh,p),s&&(f.uv=_a.getInterpolatedAttribute(s,o,l,c,p,new te)),a&&(f.uv1=_a.getInterpolatedAttribute(a,o,l,c,p,new te)),r&&(f.normal=_a.getInterpolatedAttribute(r,o,l,c,p,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new k,materialIndex:0};_a.getNormal(Eh,Ah,wh,u.normal),f.face=u,f.barycoord=p}return f}var Qh=class extends zn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=nn,f=nn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=new Oo,tw=new te(.5,.5),Dh=new k,cc=class{constructor(t=new Ri,n=new Ri,i=new Ri,s=new Ri,a=new Ri,r=new Ri){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ni,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],b=a[9],m=a[10],h=a[11],g=a[12],M=a[13],y=a[14],T=a[15];if(s[0].setComponents(c-r,d-f,h-v,T-g).normalize(),s[1].setComponents(c+r,d+f,h+v,T+g).normalize(),s[2].setComponents(c+o,d+p,h+b,T+M).normalize(),s[3].setComponents(c-o,d-p,h-b,T-M).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,h-m,T-y).normalize();else if(s[4].setComponents(c-l,d-u,h-m,T-y).normalize(),n===Ni)s[5].setComponents(c+l,d+u,h+m,T+y).normalize();else if(n===ec)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);let n=tw.distanceTo(t.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Dh.x=s.normal.x>0?t.max.x:t.min.x,Dh.y=s.normal.y>0?t.max.y:t.min.y,Dh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var uc=class extends zn{constructor(t=[],n=Ea,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var xa=class extends zn{constructor(t,n,i=Ui,s,a,r,o=nn,l=nn,c,f=ts,p=1){if(f!==ts&&f!==wa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},jh=class extends xa{constructor(t,n=Ui,i=Ea,s,a,r=nn,o=nn,l,c=ts){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hc=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Io=class e extends is{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(f,3)),this.setAttribute("uv",new gi(p,2));function v(b,m,h,g,M,y,T,E,C,x,A){let R=y/C,O=T/x,z=y/2,F=T/2,U=E/2,G=C+1,J=x+1,H=0,it=0,q=new k;for(let $=0;$<J;$++){let et=$*O-F;for(let wt=0;wt<G;wt++){let bt=wt*R-z;q[b]=bt*g,q[m]=et*M,q[h]=U,c.push(q.x,q.y,q.z),q[b]=0,q[m]=0,q[h]=E>0?1:-1,f.push(q.x,q.y,q.z),p.push(wt/C),p.push(1-$/x),H+=1}}for(let $=0;$<x;$++)for(let et=0;et<C;et++){let wt=u+et+G*$,bt=u+et+G*($+1),ue=u+(et+1)+G*($+1),Xt=u+(et+1)+G*$;l.push(wt,bt,Xt),l.push(bt,ue,Xt),it+=6}o.addGroup(d,it,A),d+=it,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var lr=class e extends is{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],b=[],m=[];for(let h=0;h<f;h++){let g=h*u-r;for(let M=0;M<c;M++){let y=M*p-a;v.push(y,-g,0),b.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let M=g+c*h,y=g+c*(h+1),T=g+1+c*(h+1),E=g+1+c*h;d.push(M,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new gi(v,3)),this.setAttribute("normal",new gi(b,3)),this.setAttribute("uv",new gi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function fr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(CM(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(CM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function yn(e){let t={};for(let n=0;n<e.length;n++){let i=fr(e[n]);for(let s in i)t[s]=i[s]}return t}function CM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ew(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function p0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var _b={clone:fr,merge:yn},nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=ew(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new It().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$h=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var tf=class extends or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ef=class extends or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ao(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Pg(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Sa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nf=class extends Sa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zg,endingEnd:zg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Fg:a=t,o=2*n-i;break;case Vg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fg:r=t,l=2*i-n;break;case Vg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),b=v*v,m=b*v,h=-u*m+2*u*b-u*v,g=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*v+1,M=(-1-d)*m+(1.5+d)*b+.5*v,y=d*m-d*b;for(let T=0;T!==o;++T)a[T]=h*r[f+T]+g*r[c+T]+M*r[l+T]+y*r[p+T];return a}},sf=class extends Sa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},af=class extends Sa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rf=class extends Sa{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),b=1-v;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let b=r[c+v],m=r[l+v],h=d*u+v*2,g=p[h],M=p[h+1],y=t*u+v*2,T=f[y],E=f[y+1],C=aw(i,n,g,T,s);a[v]=vb(C,b,M,E,m)}return a}};function vb(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function sw(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function aw(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=vb(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=sw(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var ei=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(n,this.TimeBufferType),this.values=Ao(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Pg(t.settings)&&(i.settings={inTangents:Ao(t.settings.inTangents,Array),outTangents:Ao(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new af(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new rf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case jl:n=this.InterpolantFactoryMethodDiscrete;break;case Wh:n=this.InterpolantFactoryMethodLinear;break;case Oh:n=this.InterpolantFactoryMethodSmooth;break;case Bg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jl;case this.InterpolantFactoryMethodLinear:return Wh;case this.InterpolantFactoryMethodSmooth:return Oh;case this.InterpolantFactoryMethodBezier:return Bg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Pg(this.settings)&&(RM(this.settings.inTangents,t),RM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&IA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Pg(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function RM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Wh;var Ma=class extends ei{constructor(t,n,i){super(t,n,i)}};Ma.prototype.ValueTypeName="bool";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=jl;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var of=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}};of.prototype.ValueTypeName="color";var lf=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}};lf.prototype.ValueTypeName="number";var cf=class extends Sa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)ns.slerpFlat(a,0,r,c-o,r,c,l);return a}},fc=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new cf(this.times,this.values,this.getValueSize(),t)}};fc.prototype.ValueTypeName="quaternion";fc.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends ei{constructor(t,n,i){super(t,n,i)}};ba.prototype.ValueTypeName="string";ba.prototype.ValueBufferType=Array;ba.prototype.DefaultInterpolation=jl;ba.prototype.InterpolantFactoryMethodLinear=void 0;ba.prototype.InterpolantFactoryMethodSmooth=void 0;var uf=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}};uf.prototype.ValueTypeName="vector";var hf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yb=new hf,ff=class{constructor(t){this.manager=t!==void 0?t:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ff.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uh=new k,Lh=new ns,ji=new k,dc=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uh,Lh,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uh,Lh,ji.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Uh,Lh,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uh,Lh,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ga=new k,NM=new te,DM=new te,Bn=class extends dc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(mg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-t/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-t/ga.z)}getViewSize(t,n){return this.getViewBounds(t,NM,DM),n.subVectors(DM,NM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(mg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var cr=class extends dc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var wo=-90,Co=1,df=class extends _i{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(wo,Co,t,n);s.layers=this.layers,this.add(s);let a=new Bn(wo,Co,t,n);a.layers=this.layers,this.add(a);let r=new Bn(wo,Co,t,n);r.layers=this.layers,this.add(r);let o=new Bn(wo,Co,t,n);o.layers=this.layers,this.add(o);let l=new Bn(wo,Co,t,n);l.layers=this.layers,this.add(l);let c=new Bn(wo,Co,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},pf=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var m0="\\[\\]\\.:\\/",rw=new RegExp("["+m0+"]","g"),g0="[^"+m0+"]",ow="[^"+m0.replace("\\.","")+"]",lw=/((?:WC+[\/:])*)/.source.replace("WC",g0),cw=/(WCOD+)?/.source.replace("WCOD",ow),uw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",g0),hw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",g0),fw=new RegExp("^"+lw+cw+uw+hw+"$"),dw=["material","materials","bones","map"],Hg=class{constructor(t,n,i){let s=i||we.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},we=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rw,"")}static parseTrackName(t){let n=fw.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);dw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Hg;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vN=new Float32Array(1);var Gg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function _0(e,t,n,i){let s=pw(i);switch(n){case l0:return e*t;case u0:return e*t/s.components*s.byteLength;case Sf:return e*t/s.components*s.byteLength;case Ca:return e*t*2/s.components*s.byteLength;case Mf:return e*t*2/s.components*s.byteLength;case c0:return e*t*3/s.components*s.byteLength;case vi:return e*t*4/s.components*s.byteLength;case bf:return e*t*4/s.components*s.byteLength;case _c:case vc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yc:case xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ef:case wf:return Math.max(e,16)*Math.max(t,8)/4;case Tf:case Af:return Math.max(e,8)*Math.max(t,8)/2;case Cf:case Rf:case Df:case Uf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Nf:case Sc:case Lf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case If:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Pf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case zf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ff:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Vf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Hf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Gf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Xf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Wf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case qf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Yf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zf:case Jf:case Kf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Qf:case jf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Mc:case $f:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pw(e){switch(e){case ni:case s0:return{byteLength:1,components:1};case zo:case a0:case Oi:return{byteLength:2,components:1};case yf:case xf:return{byteLength:2,components:4};case Ui:case vf:case Li:return{byteLength:4,components:1};case r0:case o0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hb(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function gw(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],b=p[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var _w=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ew=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ww=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ww=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,uC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_C=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$C=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_R=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ER=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:_w,alphahash_pars_fragment:vw,alphamap_fragment:yw,alphamap_pars_fragment:xw,alphatest_fragment:Sw,alphatest_pars_fragment:Mw,aomap_fragment:bw,aomap_pars_fragment:Tw,batching_pars_vertex:Ew,batching_vertex:Aw,begin_vertex:ww,beginnormal_vertex:Cw,bsdfs:Rw,iridescence_fragment:Nw,bumpmap_pars_fragment:Dw,clipping_planes_fragment:Uw,clipping_planes_pars_fragment:Lw,clipping_planes_pars_vertex:Ow,clipping_planes_vertex:Iw,color_fragment:Pw,color_pars_fragment:Bw,color_pars_vertex:zw,color_vertex:Fw,common:Vw,cube_uv_reflection_fragment:Hw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:kw,displacementmap_vertex:Xw,emissivemap_fragment:Ww,emissivemap_pars_fragment:qw,colorspace_fragment:Yw,colorspace_pars_fragment:Zw,envmap_fragment:Jw,envmap_common_pars_fragment:Kw,envmap_pars_fragment:Qw,envmap_pars_vertex:jw,envmap_physical_pars_fragment:cC,envmap_vertex:$w,fog_vertex:tC,fog_pars_vertex:eC,fog_fragment:nC,fog_pars_fragment:iC,gradientmap_pars_fragment:sC,lightmap_pars_fragment:aC,lights_lambert_fragment:rC,lights_lambert_pars_fragment:oC,lights_pars_begin:lC,lights_toon_fragment:uC,lights_toon_pars_fragment:hC,lights_phong_fragment:fC,lights_phong_pars_fragment:dC,lights_physical_fragment:pC,lights_physical_pars_fragment:mC,lights_fragment_begin:gC,lights_fragment_maps:_C,lights_fragment_end:vC,lightprobes_pars_fragment:yC,logdepthbuf_fragment:xC,logdepthbuf_pars_fragment:SC,logdepthbuf_pars_vertex:MC,logdepthbuf_vertex:bC,map_fragment:TC,map_pars_fragment:EC,map_particle_fragment:AC,map_particle_pars_fragment:wC,metalnessmap_fragment:CC,metalnessmap_pars_fragment:RC,morphinstance_vertex:NC,morphcolor_vertex:DC,morphnormal_vertex:UC,morphtarget_pars_vertex:LC,morphtarget_vertex:OC,normal_fragment_begin:IC,normal_fragment_maps:PC,normal_pars_fragment:BC,normal_pars_vertex:zC,normal_vertex:FC,normalmap_pars_fragment:VC,clearcoat_normal_fragment_begin:HC,clearcoat_normal_fragment_maps:GC,clearcoat_pars_fragment:kC,iridescence_pars_fragment:XC,opaque_fragment:WC,packing:qC,premultiplied_alpha_fragment:YC,project_vertex:ZC,dithering_fragment:JC,dithering_pars_fragment:KC,roughnessmap_fragment:QC,roughnessmap_pars_fragment:jC,shadowmap_pars_fragment:$C,shadowmap_pars_vertex:tR,shadowmap_vertex:eR,shadowmask_pars_fragment:nR,skinbase_vertex:iR,skinning_pars_vertex:sR,skinning_vertex:aR,skinnormal_vertex:rR,specularmap_fragment:oR,specularmap_pars_fragment:lR,tonemapping_fragment:cR,tonemapping_pars_fragment:uR,transmission_fragment:hR,transmission_pars_fragment:fR,uv_pars_fragment:dR,uv_pars_vertex:pR,uv_vertex:mR,worldpos_vertex:gR,background_vert:_R,background_frag:vR,backgroundCube_vert:yR,backgroundCube_frag:xR,cube_vert:SR,cube_frag:MR,depth_vert:bR,depth_frag:TR,distance_vert:ER,distance_frag:AR,equirect_vert:wR,equirect_frag:CR,linedashed_vert:RR,linedashed_frag:NR,meshbasic_vert:DR,meshbasic_frag:UR,meshlambert_vert:LR,meshlambert_frag:OR,meshmatcap_vert:IR,meshmatcap_frag:PR,meshnormal_vert:BR,meshnormal_frag:zR,meshphong_vert:FR,meshphong_frag:VR,meshphysical_vert:HR,meshphysical_frag:GR,meshtoon_vert:kR,meshtoon_frag:XR,points_vert:WR,points_frag:qR,shadow_vert:YR,shadow_frag:ZR,sprite_vert:JR,sprite_frag:KR},ht={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},os={basic:{uniforms:yn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:yn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:yn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:yn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:yn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:yn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:yn([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:yn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:yn([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:yn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:yn([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:yn([ht.common,ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:yn([ht.lights,ht.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};os.physical={uniforms:yn([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var nd={r:0,b:0,g:0},QR=new ze,Gb=new It;Gb.set(-1,0,0,0,1,0,0,0,1);function jR(e,t,n,i,s,a){let r=new Qt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){let y=g.backgroundBlurriness>0;M=t.get(M,y)}return M}function v(g){let M=!1,y=d(g);y===null?m(r,o):y&&y.isColor&&(m(y,1),M=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(g,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===mc)?(c===void 0&&(c=new Vn(new Io(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:fr(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QR.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gb),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ce,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vn(new lr(2,2),new An({name:"BackgroundMaterial",uniforms:fr(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:Ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(nd,p0(e)),n.buffers.color.setClear(nd.r,nd.g,nd.b,M,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,M=1){r.set(g),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(r,o)},render:v,addToRenderList:b,dispose:h}}function $R(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(O,z,F,U,G){let J=!1,H=p(O,U,F,z);a!==H&&(a=H,c(a.object)),J=d(O,U,F,G),J&&v(O,U,F,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,y(O,z,F,U),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(O){return e.bindVertexArray(O)}function f(O){return e.deleteVertexArray(O)}function p(O,z,F,U){let G=U.wireframe===!0,J=i[z.id];J===void 0&&(J={},i[z.id]=J);let H=O.isInstancedMesh===!0?O.id:0,it=J[H];it===void 0&&(it={},J[H]=it);let q=it[F.id];q===void 0&&(q={},it[F.id]=q);let $=q[G];return $===void 0&&($=u(l()),q[G]=$),$}function u(O){let z=[],F=[],U=[];for(let G=0;G<n;G++)z[G]=0,F[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:U,object:O,attributes:{},index:null}}function d(O,z,F,U){let G=a.attributes,J=z.attributes,H=0,it=F.getAttributes();for(let q in it)if(it[q].location>=0){let et=G[q],wt=J[q];if(wt===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(wt=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(wt=O.instanceColor)),et===void 0||et.attribute!==wt||wt&&et.data!==wt.data)return!0;H++}return a.attributesNum!==H||a.index!==U}function v(O,z,F,U){let G={},J=z.attributes,H=0,it=F.getAttributes();for(let q in it)if(it[q].location>=0){let et=J[q];et===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(et=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(et=O.instanceColor));let wt={};wt.attribute=et,et&&et.data&&(wt.data=et.data),G[q]=wt,H++}a.attributes=G,a.attributesNum=H,a.index=U}function b(){let O=a.newAttributes;for(let z=0,F=O.length;z<F;z++)O[z]=0}function m(O){h(O,0)}function h(O,z){let F=a.newAttributes,U=a.enabledAttributes,G=a.attributeDivisors;F[O]=1,U[O]===0&&(e.enableVertexAttribArray(O),U[O]=1),G[O]!==z&&(e.vertexAttribDivisor(O,z),G[O]=z)}function g(){let O=a.newAttributes,z=a.enabledAttributes;for(let F=0,U=z.length;F<U;F++)z[F]!==O[F]&&(e.disableVertexAttribArray(F),z[F]=0)}function M(O,z,F,U,G,J,H){H===!0?e.vertexAttribIPointer(O,z,F,G,J):e.vertexAttribPointer(O,z,F,U,G,J)}function y(O,z,F,U){b();let G=U.attributes,J=F.getAttributes(),H=z.defaultAttributeValues;for(let it in J){let q=J[it];if(q.location>=0){let $=G[it];if($===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let et=$.normalized,wt=$.itemSize,bt=t.get($);if(bt===void 0)continue;let ue=bt.buffer,Xt=bt.type,Gt=bt.bytesPerElement,W=Xt===e.INT||Xt===e.UNSIGNED_INT||$.gpuType===vf;if($.isInterleavedBufferAttribute){let tt=$.data,gt=tt.stride,Nt=$.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)h(q.location+mt,tt.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<q.locationSize;mt++)m(q.location+mt);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt,wt/q.locationSize,Xt,et,gt*Gt,(Nt+wt/q.locationSize*mt)*Gt,W)}else{if($.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)h(q.location+tt,$.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let tt=0;tt<q.locationSize;tt++)M(q.location+tt,wt/q.locationSize,Xt,et,wt*Gt,wt/q.locationSize*tt*Gt,W)}}else if(H!==void 0){let et=H[it];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(q.location,et);break;case 3:e.vertexAttrib3fv(q.location,et);break;case 4:e.vertexAttrib4fv(q.location,et);break;default:e.vertexAttrib1fv(q.location,et)}}}}g()}function T(){A();for(let O in i){let z=i[O];for(let F in z){let U=z[F];for(let G in U){let J=U[G];for(let H in J)f(J[H].object),delete J[H];delete U[G]}}delete i[O]}}function E(O){if(i[O.id]===void 0)return;let z=i[O.id];for(let F in z){let U=z[F];for(let G in U){let J=U[G];for(let H in J)f(J[H].object),delete J[H];delete U[G]}}delete i[O.id]}function C(O){for(let z in i){let F=i[z];for(let U in F){let G=F[U];if(G[O.id]===void 0)continue;let J=G[O.id];for(let H in J)f(J[H].object),delete J[H];delete G[O.id]}}}function x(O){for(let z in i){let F=i[z],U=O.isInstancedMesh===!0?O.id:0,G=F[U];if(G!==void 0){for(let J in G){let H=G[J];for(let it in H)f(H[it].object),delete H[it];delete G[J]}delete F[U],Object.keys(F).length===0&&delete i[z]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:g}}function t3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function e3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==vi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ni&&C!==Li&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Dt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function n3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ri,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!m)a?f(null):c();else{let g=a?0:i,M=g*4,y=h.clippingState||null;l.value=y,y=f(v,u,M,d);for(let T=0;T!==M;++T)y[T]=n[T];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,v!==!0||m===null){let h=d+b*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,y=d;M!==b;++M,y+=4)r.copy(p[M]).applyMatrix4(g,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var Ho=4,i3=6,s3=20,a3=256,Tc=new cr,xb=new Qt,v0=null,y0=0,x0=0,S0=!1,r3=new k,dr=new k,sd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=r3}=a;v0=this._renderer.getRenderTarget(),y0=this._renderer.getActiveCubeFace(),x0=this._renderer.getActiveMipmapLevel(),S0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(v0,y0,x0),this._renderer.xr.enabled=S0,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ea||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),v0=this._renderer.getRenderTarget(),y0=this._renderer.getActiveCubeFace(),x0=this._renderer.getActiveMipmapLevel(),S0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Oi,format:vi,colorSpace:$l,depthBuffer:!1},s=Sb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o3(a)),this._blurMaterial=c3(a,t,n),this._ggxMaterial=l3(a,t,n)}return s}_compileMaterial(t){let n=new Vn(new is,t);this._renderer.compile(n,Tc)}_sceneToCubeUV(t,n,i,s,a){let l=new Bn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(xb),p.toneMapping=Di,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new Io,new lc({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,h=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,h=!0):(m.color.copy(xb),h=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[M],a.y,a.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[M]));let T=this._cubeSize;Vo(s,y*T,M>2?T:0,T,T),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ea||t.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Vo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Tc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-Ho?i-v+Ho:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,Vo(a,m,h,3*b,2*b),s.setRenderTarget(a),s.render(o,Tc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,Vo(t,m,h,3*b,2*b),s.setRenderTarget(t),s.render(o,Tc)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-Ho?s-this._lodMax+Ho:0),u=4*(this._cubeSize-f);Vo(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,Tc)}};function o3(e){let t=[],n=[],i=e,s=e-Ho+1+i3;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,v=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let h=0;h<p;h++){let g=h%3*2/3-1,M=h>2?0:-1,y=[g,M,0,g+2/3,M,0,g+2/3,M+1,0,g,M,0,g+2/3,M+1,0,g,M+1,0];v.set(y,d*u*h);for(let T=0;T<u;T++){let E=f[T*2]*2-1,C=f[T*2+1]*2-1;h===0?dr.set(1,C,E):h===1?dr.set(-E,1,-C):h===2?dr.set(-E,C,1):h===3?dr.set(-1,C,-E):h===4?dr.set(-E,-1,C):dr.set(E,C,-1),dr.toArray(b,(h*u+T)*d)}}let m=new is;m.setAttribute("position",new mi(v,d)),m.setAttribute("outputDirection",new mi(b,d)),n.push(new Vn(m,null)),i>Ho&&i--}return{lodMeshes:n,sizeLods:t}}function Sb(e,t,n){let i=new Fn(e,t,n);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function l3(e,t,n){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:od(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function c3(e,t,n){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:s3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:od(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Mb(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function bb(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function od(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ad=class extends Fn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new uc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Io(5,5,5),a=new An({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:as});a.uniforms.tEquirect.value=n;let r=new Vn(s,a),o=n.minFilter;return n.minFilter===Aa&&(n.minFilter=hn),new df(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function u3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===mf||d===gf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new ad(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===mf||d===gf,b=d===Ea||d===hr;if(v||b){let m=n.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new sd(e)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let g=u.image;return v&&g&&g.height>0||b&&g&&l(g)?(i===null&&(i=new sd(e)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===mf?u.mapping=Ea:d===gf&&(u.mapping=hr),u}function l(u){let d=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function h3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&rr("WebGLRenderer: "+i+" extension not supported."),s}}}function f3(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,b=0;if(v===void 0)return;if(d!==null){let g=d.array;b=d.version;for(let M=0,y=g.length;M<y;M+=3){let T=g[M+0],E=g[M+1],C=g[M+2];u.push(T,E,E,C,C,T)}}else{let g=v.array;b=v.version;for(let M=0,y=g.length/3-1;M<y;M+=3){let T=M+0,E=M+1,C=M+2;u.push(T,E,E,C,C,T)}}let m=new(v.count>=65535?oc:rc)(u,1);m.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,m)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function d3(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function p3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function m3(e,t,n){let i=new WeakMap,s=new Le;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],M=0;d===!0&&(M=1),v===!0&&(M=2),b===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*p),C=new ic(E,y,T,p);C.type=Li,C.needsUpdate=!0;let x=M*4;for(let R=0;R<p;R++){let O=m[R],z=h[R],F=g[R],U=y*T*4*R;for(let G=0;G<O.count;G++){let J=G*x;d===!0&&(s.fromBufferAttribute(O,G),E[U+J+0]=s.x,E[U+J+1]=s.y,E[U+J+2]=s.z,E[U+J+3]=0),v===!0&&(s.fromBufferAttribute(z,G),E[U+J+4]=s.x,E[U+J+5]=s.y,E[U+J+6]=s.z,E[U+J+7]=0),b===!0&&(s.fromBufferAttribute(F,G),E[U+J+8]=s.x,E[U+J+9]=s.y,E[U+J+10]=s.z,E[U+J+11]=F.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new te(y,T)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function g3(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var _3={[Kg]:"LINEAR_TONE_MAPPING",[Qg]:"REINHARD_TONE_MAPPING",[jg]:"CINEON_TONE_MAPPING",[$g]:"ACES_FILMIC_TONE_MAPPING",[e0]:"AGX_TONE_MAPPING",[n0]:"NEUTRAL_TONE_MAPPING",[t0]:"CUSTOM_TONE_MAPPING"};function v3(e,t,n,i,s,a){let r=new Fn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new is;c.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gi([0,2,0,0,2,0],2));let f=new $h({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Vn(c,f),u=new cr(-1,1,1,-1,0,1),d=null,v=null,b=!1,m,h=null,g=[],M=!1;this.setSize=function(y,T){r.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let E=0;E<g.length;E++){let C=g[E];C.setSize&&C.setSize(y,T)}},this.setEffects=function(y){g=y,M=g.length>0&&g[0].isRenderPass===!0;let T=r.width,E=r.height;g.length>0&&o===null&&(o=new Fn(T,E,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(T,E,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<g.length;C++){let x=g[C];x.setSize&&x.setSize(T,E)}},this.begin=function(y,T){if(b||y.toneMapping===Di&&g.length===0)return!1;if(h=T,T!==null){let E=T.width,C=T.height;(r.width!==E||r.height!==C)&&this.setSize(E,C)}return M===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=Di,!0},this.hasRenderPass=function(){return M},this.end=function(y,T){y.toneMapping=m,b=!0;let E=r,C=o;for(let x=0;x<g.length;x++){let A=g[x];A.enabled!==!1&&(A.render(y,C,E,T),A.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==y.outputColorSpace||v!==y.toneMapping){d=y.outputColorSpace,v=y.toneMapping,f.defines={},Kt.getTransfer(d)===ce&&(f.defines.SRGB_TRANSFER="");let x=_3[v];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(p,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var kb=new zn,T0=new xa(1,1),Xb=new ic,Wb=new Jh,qb=new uc,Tb=[],Eb=[],Ab=new Float32Array(16),wb=new Float32Array(9),Cb=new Float32Array(4);function ko(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Tb[s];if(a===void 0&&(a=new Float32Array(s),Tb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ld(e,t){let n=Eb[t];n===void 0&&(n=new Int32Array(t),Eb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function y3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function x3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function S3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function M3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function b3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;Cb.set(i),e.uniformMatrix2fv(this.addr,!1,Cb),Je(n,i)}}function T3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;wb.set(i),e.uniformMatrix3fv(this.addr,!1,wb),Je(n,i)}}function E3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;Ab.set(i),e.uniformMatrix4fv(this.addr,!1,Ab),Je(n,i)}}function A3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function w3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function C3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function R3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function N3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function D3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function U3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function L3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function O3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(T0.compareFunction=n.isReversedDepthBuffer()?ed:td,a=T0):a=kb,n.setTexture2D(t||a,s)}function I3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Wb,s)}function P3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||qb,s)}function B3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Xb,s)}function z3(e){switch(e){case 5126:return y3;case 35664:return x3;case 35665:return S3;case 35666:return M3;case 35674:return b3;case 35675:return T3;case 35676:return E3;case 5124:case 35670:return A3;case 35667:case 35671:return w3;case 35668:case 35672:return C3;case 35669:case 35673:return R3;case 5125:return N3;case 36294:return D3;case 36295:return U3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return O3;case 35679:case 36299:case 36307:return I3;case 35680:case 36300:case 36308:case 36293:return P3;case 36289:case 36303:case 36311:case 36292:return B3}}function F3(e,t){e.uniform1fv(this.addr,t)}function V3(e,t){let n=ko(t,this.size,2);e.uniform2fv(this.addr,n)}function H3(e,t){let n=ko(t,this.size,3);e.uniform3fv(this.addr,n)}function G3(e,t){let n=ko(t,this.size,4);e.uniform4fv(this.addr,n)}function k3(e,t){let n=ko(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function X3(e,t){let n=ko(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function W3(e,t){let n=ko(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function q3(e,t){e.uniform1iv(this.addr,t)}function Y3(e,t){e.uniform2iv(this.addr,t)}function Z3(e,t){e.uniform3iv(this.addr,t)}function J3(e,t){e.uniform4iv(this.addr,t)}function K3(e,t){e.uniform1uiv(this.addr,t)}function Q3(e,t){e.uniform2uiv(this.addr,t)}function j3(e,t){e.uniform3uiv(this.addr,t)}function $3(e,t){e.uniform4uiv(this.addr,t)}function t2(e,t,n){let i=this.cache,s=t.length,a=ld(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=T0:r=kb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function e2(e,t,n){let i=this.cache,s=t.length,a=ld(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Wb,a[r])}function n2(e,t,n){let i=this.cache,s=t.length,a=ld(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||qb,a[r])}function i2(e,t,n){let i=this.cache,s=t.length,a=ld(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Xb,a[r])}function s2(e){switch(e){case 5126:return F3;case 35664:return V3;case 35665:return H3;case 35666:return G3;case 35674:return k3;case 35675:return X3;case 35676:return W3;case 5124:case 35670:return q3;case 35667:case 35671:return Y3;case 35668:case 35672:return Z3;case 35669:case 35673:return J3;case 5125:return K3;case 36294:return Q3;case 36295:return j3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}var E0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=z3(n.type)}},A0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s2(n.type)}},w0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},M0=/(\w+)(\])?(\[|\.)?/g;function Rb(e,t){e.seq.push(t),e.map[t.id]=t}function a2(e,t,n){let i=e.name,s=i.length;for(M0.lastIndex=0;;){let a=M0.exec(i),r=M0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Rb(n,c===void 0?new E0(o,e,t):new A0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new w0(o),Rb(n,p)),n=p}}}var Go=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);a2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Nb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var r2=37297,o2=0;function l2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Db=new It;function c2(e){Kt._getMatrix(Db,Kt.workingColorSpace,e);let t=`mat3( ${Db.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case tc:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ub(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+l2(e.getShaderSource(t),o)}else return a}function u2(e,t){let n=c2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var h2={[Kg]:"Linear",[Qg]:"Reinhard",[jg]:"Cineon",[$g]:"ACESFilmic",[e0]:"AgX",[n0]:"Neutral",[t0]:"Custom"};function f2(e,t){let n=h2[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var id=new k;function d2(){Kt.getLuminanceCoefficients(id);let e=id.x.toFixed(4),t=id.y.toFixed(4),n=id.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ac).join(`
`)}function m2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function g2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Ac(e){return e!==""}function Lb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ob(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _2=/^[ \t]*#include +<([\w\d./]+)>/gm;function C0(e){return e.replace(_2,y2)}var v2=new Map;function y2(e,t){let n=Ht[t];if(n===void 0){let i=v2.get(t);if(i!==void 0)n=Ht[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return C0(n)}var x2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ib(e){return e.replace(x2,S2)}function S2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Pb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var M2={[pc]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function b2(e){return M2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T2={[Ea]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function E2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":T2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var A2={[hr]:"ENVMAP_MODE_REFRACTION"};function w2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":A2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C2={[Jg]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[tb]:"ENVMAP_BLENDING_ADD"};function R2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":C2[e.combine]||"ENVMAP_BLENDING_NONE"}function N2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function D2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=b2(n),c=E2(n),f=w2(n),p=R2(n),u=N2(n),d=p2(n),v=m2(a),b=s.createProgram(),m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ac).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ac).join(`
`),h.length>0&&(h+=`
`)):(m=[Pb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ac).join(`
`),h=[Pb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Di?f2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,u2("linearToOutputTexel",n.outputColorSpace),d2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ac).join(`
`)),r=C0(r),r=Lb(r,n),r=Ob(r,n),o=C0(o),o=Lb(o,n),o=Ob(o,n),r=Ib(r),o=Ib(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=g+m+r,y=g+h+o,T=Nb(s,s.VERTEX_SHADER,M),E=Nb(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,E),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(O){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(b)||"",F=s.getShaderInfoLog(T)||"",U=s.getShaderInfoLog(E)||"",G=z.trim(),J=F.trim(),H=U.trim(),it=!0,q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(it=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,T,E);else{let $=Ub(s,T,"vertex"),et=Ub(s,E,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+$+`
`+et)}else G!==""?Dt("WebGLProgram: Program Info Log:",G):(J===""||H==="")&&(q=!1);q&&(O.diagnostics={runnable:it,programLog:G,vertexShader:{log:J,prefix:m},fragmentShader:{log:H,prefix:h}})}s.deleteShader(T),s.deleteShader(E),x=new Go(s,b),A=g2(s,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,r2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=E,this}var U2=0,R0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new N0(t),n.set(t,i)),i}},N0=class{constructor(t){this.id=U2++,this.code=t,this.usedTimes=0}};function L2(e){return e===Ca||e===Sc||e===Mc}function O2(e,t,n,i,s,a){let r=new sc,o=new R0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,A,R,O,z,F){let U=O.fog,G=z.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||J,H),q=it&&it.mapping===mc?it.image.height:null,$=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=et!==void 0?et.length:0,bt=0;G.morphAttributes.position!==void 0&&(bt=1),G.morphAttributes.normal!==void 0&&(bt=2),G.morphAttributes.color!==void 0&&(bt=3);let ue,Xt,Gt,W;if($){let xe=os[$];ue=xe.vertexShader,Xt=xe.fragmentShader}else{ue=x.vertexShader,Xt=x.fragmentShader;let xe=o.getVertexShaderStage(x),re=o.getFragmentShaderStage(x);o.update(x,xe,re),Gt=xe.id,W=re.id}let tt=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,mt=z.isBatchedMesh===!0,Pt=!!x.map,Ne=!!x.matcap,Ft=!!it,jt=!!x.aoMap,Wt=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,ae=!!x.normalMap,Ke=!!x.displacementMap,Cn=!!x.emissiveMap,De=!!x.metalnessMap,Fe=!!x.roughnessMap,L=x.anisotropy>0,fn=x.clearcoat>0,he=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,I=x.sheen>0,V=x.transmission>0,Y=L&&!!x.anisotropyMap,st=fn&&!!x.clearcoatMap,at=fn&&!!x.clearcoatNormalMap,Z=fn&&!!x.clearcoatRoughnessMap,j=_&&!!x.iridescenceMap,rt=_&&!!x.iridescenceThicknessMap,Et=I&&!!x.sheenColorMap,ut=I&&!!x.sheenRoughnessMap,ot=!!x.specularMap,At=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Bt=V&&!!x.transmissionMap,D=V&&!!x.thicknessMap,lt=!!x.gradientMap,K=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,nt=!!x.extensions,Ct=Di;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ct=e.toneMapping);let Mt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:Xt,defines:x.defines,customVertexShaderID:Gt,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:mt,batchingColor:mt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:Ne,envMap:Ft,envMapMode:Ft&&it.mapping,envMapCubeUVHeight:q,aoMap:jt,lightMap:Wt,bumpMap:vt,normalMap:ae,displacementMap:Ke,emissiveMap:Cn,normalMapObjectSpace:ae&&x.normalMapType===ib,normalMapTangentSpace:ae&&x.normalMapType===h0,packedNormalMap:ae&&x.normalMapType===h0&&L2(x.normalMap.format),metalnessMap:De,roughnessMap:Fe,anisotropy:L,anisotropyMap:Y,clearcoat:fn,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:Z,dispersion:he,retroreflection:w,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:I,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:ot,specularColorMap:At,specularIntensityMap:Rt,transmission:V,transmissionMap:Bt,thicknessMap:D,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Bo&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Pt&&v(x.map.channel),aoMapUv:jt&&v(x.aoMap.channel),lightMapUv:Wt&&v(x.lightMap.channel),bumpMapUv:vt&&v(x.bumpMap.channel),normalMapUv:ae&&v(x.normalMap.channel),displacementMapUv:Ke&&v(x.displacementMap.channel),emissiveMapUv:Cn&&v(x.emissiveMap.channel),metalnessMapUv:De&&v(x.metalnessMap.channel),roughnessMapUv:Fe&&v(x.roughnessMap.channel),anisotropyMapUv:Y&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(x.sheenRoughnessMap.channel),specularMapUv:ot&&v(x.specularMap.channel),specularColorMapUv:At&&v(x.specularColorMap.channel),specularIntensityMapUv:Rt&&v(x.specularIntensityMap.channel),transmissionMapUv:Bt&&v(x.transmissionMap.channel),thicknessMapUv:D&&v(x.thicknessMap.channel),alphaMapUv:K&&v(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ae||L),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Pt||K),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:gt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:bt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:Cn&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ss,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(A,x),g(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function g(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function M(x){let A=d[x.type],R;if(A){let O=os[A];R=_b.clone(O.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new D2(e,A,x,s),c.push(R),f.set(A,R)),R}function T(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:C}}function I2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function P2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Bb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function zb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,b,m,h){let g=e[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},e[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=v,g.materialVariant=r(u),g.groupOrder=b,g.renderOrder=u.renderOrder,g.z=m,g.group=h),t++,g}function l(u,d,v,b,m,h,g){g.reversedDepth===!0&&(m=-m);let M=o(u,d,v,b,m,h);v.transmission>0?i.push(M):v.transparent===!0?s.push(M):n.push(M)}function c(u,d,v,b,m,h){let g=o(u,d,v,b,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?s.unshift(g):n.unshift(g)}function f(u,d){n.length>1&&n.sort(u||P2),i.length>1&&i.sort(d||Bb),s.length>1&&s.sort(d||Bb)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function B2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new zb,e.set(i,[r])):s>=a.length?(r=new zb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function z2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new k,color:new Qt};break;case"SpotLight":n={position:new k,direction:new k,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new k,halfWidth:new k,halfHeight:new k};break}return e[t.id]=n,n}}}function F2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var V2=0;function H2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function G2(e){let t=new z2,n=F2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,a=new ze,r=new ze;function o(c){let f=0,p=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,v=0,b=0,m=0,h=0,g=0,M=0,y=0,T=0,E=0,C=0,x=0,A=0,R=0;c.sort(H2);for(let z=0,F=c.length;z<F;z++){let U=c[z],G=U.color,J=U.intensity,H=U.distance,it=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ca?it=U.shadow.map.texture:it=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=G.r*J,p+=G.g*J,u+=G.b*J;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],J);R++}else if(U.isSunLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,et=n.get(U);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=et,i.sunShadowMap[v]=it;let wt=$.getViewportCount();for(let bt=0;bt<wt;bt++)i.sunShadowMatrix[b+bt]=$.getMatrix(bt),i.sunShadowCascade[b+bt]=$._cascadeData[bt];b+=wt,v++}i.sun[d]=q,d++}else if(U.isDirectionalLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,et=n.get(U);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=U.shadow.matrix,T++}i.directional[m]=q,m++}else if(U.isSpotLight){let q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(G).multiplyScalar(J),q.distance=H,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[g]=q;let $=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,$.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[g]=$.matrix,U.castShadow){let et=n.get(U);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[g]=et,i.spotShadowMap[g]=it,C++}g++}else if(U.isRectAreaLight){let q=t.get(U);q.color.copy(G).multiplyScalar(J),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=q,M++}else if(U.isPointLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){let $=U.shadow,et=n.get(U);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[h]=et,i.pointShadowMap[h]=it,i.pointShadowMatrix[h]=U.shadow.matrix,E++}i.point[h]=q,h++}else if(U.isHemisphereLight){let q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(J),q.groundColor.copy(U.groundColor).multiplyScalar(J),i.hemi[y]=q,y++}}M>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let O=i.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==h||O.spotLength!==g||O.rectAreaLength!==M||O.hemiLength!==y||O.numSunShadows!==v||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==C||O.numSpotMaps!==x||O.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=g,i.rectArea.length=M,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,O.sunLength=d,O.directionalLength=m,O.pointLength=h,O.spotLength=g,O.rectAreaLength=M,O.hemiLength=y,O.numSunShadows=v,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=C,O.numSpotMaps=x,O.numLightProbes=R,i.version=V2++)}function l(c,f){let p=0,u=0,d=0,v=0,b=0,m=0,h=f.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let y=c[g];if(y.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),u++}else if(y.isSpotLight){let T=i.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function Fb(e){let t=new G2(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function k2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Fb(e),t.set(s,[o])):a>=r.length?(o=new Fb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q2=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Y2=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Vb=new ze,Ec=new k,b0=new k;function Z2(e,t,n){let i=new cc,s=new te,a=new te,r=new Le,o=new tf,l=new ef,c={},f=n.maxTextureSize,p={[Ta]:wn,[wn]:Ta,[ss]:ss},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:X2,fragmentShader:W2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new is;v.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Vn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let h=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===OM&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pc);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),z=e.state;z.setBlending(as),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=h!==this.type;F&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=E.length;U<G;U++){let J=E[U],H=J.shadow;if(H===void 0){Dt("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let it=H.getFrameExtents();s.multiply(it),a.copy(H.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/it.x),s.x=a.x*it.x,H.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/it.y),s.y=a.y*it.y,H.mapSize.y=a.y));let q=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Po){if(J.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fn(s.x,s.y,{format:Ca,type:Oi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new xa(s.x,s.y,Li),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=ts,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn}else J.isPointLight?(H.map=new ad(s.x),H.map.depthTexture=new jh(s.x,Ui)):(H.map=new Fn(s.x,s.y),H.map.depthTexture=new xa(s.x,s.y,Ui)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=ts,this.type===pc?(H.map.depthTexture.compareFunction=q?ed:td,H.map.depthTexture.minFilter=hn,H.map.depthTexture.magFilter=hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let $=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,x);for(let et=0;et<$;et++){let wt=H.getCamera(et);if(J.isPointLight){let bt=H.camera,ue=H.matrix,Xt=J.distance||bt.far;Xt!==bt.far&&(bt.far=Xt,bt.updateProjectionMatrix()),Ec.setFromMatrixPosition(J.matrixWorld),bt.position.copy(Ec),b0.copy(bt.position),b0.add(q2[et]),bt.up.copy(Y2[et]),bt.lookAt(b0),bt.updateMatrixWorld(),ue.makeTranslation(-Ec.x,-Ec.y,-Ec.z),Vb.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Vb,bt.coordinateSystem,bt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,et),e.clear();else{et===0&&(e.setRenderTarget(H.map),e.clear());let bt=H.getViewport(et);r.set(a.x*bt.x,a.y*bt.y,a.x*bt.z,a.y*bt.w),z.viewport(r)}i=H.getFrustum(et),y(C,x,wt,J,this.type)}H.isPointLightShadow!==!0&&this.type===Po&&g(H,x),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(A,R,O)};function g(E,C){let x=t.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Fn(s.x,s.y,{format:Ca,type:Oi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,b,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,x,d,b,null)}function M(E,C,x,A){let R=null,O=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)R=O;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=R.uuid,F=C.uuid,U=c[z];U===void 0&&(U={},c[z]=U);let G=U[F];G===void 0&&(G=R.clone(),U[F]=G,C.addEventListener("dispose",T)),R=G}if(R.visible=C.visible,R.wireframe=C.wireframe,A===Po?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=e.properties.get(R);z.light=x}return R}function y(E,C,x,A,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Po)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let F=t.update(E),U=E.material;if(Array.isArray(U)){let G=F.groups;for(let J=0,H=G.length;J<H;J++){let it=G[J],q=U[it.materialIndex];if(q&&q.visible){let $=M(E,q,A,R);E.onBeforeShadow(e,E,C,x,F,$,it),e.renderBufferDirect(x,null,F,$,E,it),E.onAfterShadow(e,E,C,x,F,$,it)}}}else if(U.visible){let G=M(E,U,A,R);E.onBeforeShadow(e,E,C,x,F,G,null),e.renderBufferDirect(x,null,F,G,E,null),E.onAfterShadow(e,E,C,x,F,G,null)}}let z=E.children;for(let F=0,U=z.length;F<U;F++)y(z[F],C,x,A,R)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let A=c[x],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function J2(e,t){function n(){let D=!1,lt=new Le,K=null,ct=new Le(0,0,0,0);return{setMask:function(pt){K!==pt&&!D&&(e.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){D=pt},setClear:function(pt,nt,Ct,Mt,xe){xe===!0&&(pt*=Mt,nt*=Mt,Ct*=Mt),lt.set(pt,nt,Ct,Mt),ct.equals(lt)===!1&&(e.clearColor(pt,nt,Ct,Mt),ct.copy(lt))},reset:function(){D=!1,K=null,ct.set(-1,0,0,0)}}}function i(){let D=!1,lt=!1,K=null,ct=null,pt=null;return{setReversed:function(nt){if(lt!==nt){let Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;let Mt=pt;pt=null,this.setClear(Mt)}},getReversed:function(){return lt},setTest:function(nt){nt?tt(e.DEPTH_TEST):gt(e.DEPTH_TEST)},setMask:function(nt){K!==nt&&!D&&(e.depthMask(nt),K=nt)},setFunc:function(nt){if(lt&&(nt=mb[nt]),ct!==nt){switch(nt){case Ph:e.depthFunc(e.NEVER);break;case Bh:e.depthFunc(e.ALWAYS);break;case zh:e.depthFunc(e.LESS);break;case No:e.depthFunc(e.LEQUAL);break;case Fh:e.depthFunc(e.EQUAL);break;case Vh:e.depthFunc(e.GEQUAL);break;case Hh:e.depthFunc(e.GREATER);break;case Gh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=nt}},setLocked:function(nt){D=nt},setClear:function(nt){pt!==nt&&(pt=nt,lt&&(nt=1-nt),e.clearDepth(nt))},reset:function(){D=!1,K=null,ct=null,pt=null,lt=!1}}}function s(){let D=!1,lt=null,K=null,ct=null,pt=null,nt=null,Ct=null,Mt=null,xe=null;return{setTest:function(re){D||(re?tt(e.STENCIL_TEST):gt(e.STENCIL_TEST))},setMask:function(re){lt!==re&&!D&&(e.stencilMask(re),lt=re)},setFunc:function(re,yi,Ii){(K!==re||ct!==yi||pt!==Ii)&&(e.stencilFunc(re,yi,Ii),K=re,ct=yi,pt=Ii)},setOp:function(re,yi,Ii){(nt!==re||Ct!==yi||Mt!==Ii)&&(e.stencilOp(re,yi,Ii),nt=re,Ct=yi,Mt=Ii)},setLocked:function(re){D=re},setClear:function(re){xe!==re&&(e.clearStencil(re),xe=re)},reset:function(){D=!1,lt=null,K=null,ct=null,pt=null,nt=null,Ct=null,Mt=null,xe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],b=null,m=!1,h=null,g=null,M=null,y=null,T=null,E=null,C=null,x=new Qt(0,0,0),A=0,R=!1,O=null,z=null,F=null,U=null,G=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,it=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=it>=2);let $=null,et={},wt=e.getParameter(e.SCISSOR_BOX),bt=e.getParameter(e.VIEWPORT),ue=new Le().fromArray(wt),Xt=new Le().fromArray(bt);function Gt(D,lt,K,ct){let pt=new Uint8Array(4),nt=e.createTexture();e.bindTexture(D,nt),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ct=0;Ct<K;Ct++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,pt):e.texImage2D(lt+Ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pt);return nt}let W={};W[e.TEXTURE_2D]=Gt(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=Gt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=Gt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=Gt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(No),vt(!1),ae(kg),tt(e.CULL_FACE),jt(as);function tt(D){f[D]!==!0&&(e.enable(D),f[D]=!0)}function gt(D){f[D]!==!1&&(e.disable(D),f[D]=!1)}function Nt(D,lt){return u[D]!==lt?(e.bindFramebuffer(D,lt),u[D]=lt,D===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=lt),D===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function mt(D,lt){let K=v,ct=!1;if(D){K=d.get(lt),K===void 0&&(K=[],d.set(lt,K));let pt=D.textures;if(K.length!==pt.length||K[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Ct=pt.length;nt<Ct;nt++)K[nt]=e.COLOR_ATTACHMENT0+nt;K.length=pt.length,ct=!0}}else K[0]!==e.BACK&&(K[0]=e.BACK,ct=!0);ct&&e.drawBuffers(K)}function Pt(D){return b!==D?(e.useProgram(D),b=D,!0):!1}let Ne={[ur]:e.FUNC_ADD,[PM]:e.FUNC_SUBTRACT,[BM]:e.FUNC_REVERSE_SUBTRACT};Ne[zM]=e.MIN,Ne[FM]=e.MAX;let Ft={[VM]:e.ZERO,[HM]:e.ONE,[GM]:e.SRC_COLOR,[Yg]:e.SRC_ALPHA,[ZM]:e.SRC_ALPHA_SATURATE,[qM]:e.DST_COLOR,[XM]:e.DST_ALPHA,[kM]:e.ONE_MINUS_SRC_COLOR,[Zg]:e.ONE_MINUS_SRC_ALPHA,[YM]:e.ONE_MINUS_DST_COLOR,[WM]:e.ONE_MINUS_DST_ALPHA,[JM]:e.CONSTANT_COLOR,[KM]:e.ONE_MINUS_CONSTANT_COLOR,[QM]:e.CONSTANT_ALPHA,[jM]:e.ONE_MINUS_CONSTANT_ALPHA};function jt(D,lt,K,ct,pt,nt,Ct,Mt,xe,re){if(D===as){m===!0&&(gt(e.BLEND),m=!1);return}if(m===!1&&(tt(e.BLEND),m=!0),D!==IM){if(D!==h||re!==R){if((g!==ur||T!==ur)&&(e.blendEquation(e.FUNC_ADD),g=ur,T=ur),re)switch(D){case Bo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xg:e.blendFunc(e.ONE,e.ONE);break;case Wg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case qg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",D);break}else switch(D){case Bo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Wg:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",D);break}M=null,y=null,E=null,C=null,x.set(0,0,0),A=0,h=D,R=re}return}pt=pt||lt,nt=nt||K,Ct=Ct||ct,(lt!==g||pt!==T)&&(e.blendEquationSeparate(Ne[lt],Ne[pt]),g=lt,T=pt),(K!==M||ct!==y||nt!==E||Ct!==C)&&(e.blendFuncSeparate(Ft[K],Ft[ct],Ft[nt],Ft[Ct]),M=K,y=ct,E=nt,C=Ct),(Mt.equals(x)===!1||xe!==A)&&(e.blendColor(Mt.r,Mt.g,Mt.b,xe),x.copy(Mt),A=xe),h=D,R=!1}function Wt(D,lt){D.side===ss?gt(e.CULL_FACE):tt(e.CULL_FACE);let K=D.side===wn;lt&&(K=!K),vt(K),D.blending===Bo&&D.transparent===!1?jt(as):jt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);let ct=D.stencilWrite;o.setTest(ct),ct&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Cn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):gt(e.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){O!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),O=D)}function ae(D){D!==UM?(tt(e.CULL_FACE),D!==z&&(D===kg?e.cullFace(e.BACK):D===LM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):gt(e.CULL_FACE),z=D}function Ke(D){D!==F&&(H&&e.lineWidth(D),F=D)}function Cn(D,lt,K){D?(tt(e.POLYGON_OFFSET_FILL),(U!==lt||G!==K)&&(U=lt,G=K,r.getReversed()&&(lt=-lt),e.polygonOffset(lt,K))):gt(e.POLYGON_OFFSET_FILL)}function De(D){D?tt(e.SCISSOR_TEST):gt(e.SCISSOR_TEST)}function Fe(D){D===void 0&&(D=e.TEXTURE0+J-1),$!==D&&(e.activeTexture(D),$=D)}function L(D,lt,K){K===void 0&&($===null?K=e.TEXTURE0+J-1:K=$);let ct=et[K];ct===void 0&&(ct={type:void 0,texture:void 0},et[K]=ct),(ct.type!==D||ct.texture!==lt)&&($!==K&&(e.activeTexture(K),$=K),e.bindTexture(D,lt||W[D]),ct.type=D,ct.texture=lt)}function fn(){let D=et[$];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function _(){try{e.texSubImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function I(){try{e.texSubImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function st(){try{e.texStorage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function at(){try{e.texStorage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function Z(){try{e.texImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function j(){try{e.texImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function rt(D){return p[D]!==void 0?p[D]:e.getParameter(D)}function Et(D,lt){p[D]!==lt&&(e.pixelStorei(D,lt),p[D]=lt)}function ut(D){ue.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function ot(D){Xt.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Xt.copy(D))}function At(D,lt){let K=c.get(lt);K===void 0&&(K=new WeakMap,c.set(lt,K));let ct=K.get(D);ct===void 0&&(ct=e.getUniformBlockIndex(lt,D.name),K.set(D,ct))}function Rt(D,lt){let ct=c.get(lt).get(D);l.get(lt)!==ct&&(e.uniformBlockBinding(lt,ct,D.__bindingPointIndex),l.set(lt,ct))}function Bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},$=null,et={},u={},d=new WeakMap,v=[],b=null,m=!1,h=null,g=null,M=null,y=null,T=null,E=null,C=null,x=new Qt(0,0,0),A=0,R=!1,O=null,z=null,F=null,U=null,G=null,ue.set(0,0,e.canvas.width,e.canvas.height),Xt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:gt,bindFramebuffer:Nt,drawBuffers:mt,useProgram:Pt,setBlending:jt,setMaterial:Wt,setFlipSided:vt,setCullFace:ae,setLineWidth:Ke,setPolygonOffset:Cn,setScissorTest:De,activeTexture:Fe,bindTexture:L,unbindTexture:fn,compressedTexImage2D:he,compressedTexImage3D:w,texImage2D:Z,texImage3D:j,pixelStorei:Et,getParameter:rt,updateUBOMapping:At,uniformBlockBinding:Rt,texStorage2D:st,texStorage3D:at,texSubImage2D:_,texSubImage3D:I,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:ut,viewport:ot,reset:Bt}}function K2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,f=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,_){return v?new OffscreenCanvas(w,_):nc("canvas")}function m(w,_,I){let V=1,Y=he(w);if((Y.width>I||Y.height>I)&&(V=I/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let st=Math.floor(V*Y.width),at=Math.floor(V*Y.height);u===void 0&&(u=b(st,at));let Z=_?b(st,at):u;return Z.width=st,Z.height=at,Z.getContext("2d").drawImage(w,0,0,st,at),Dt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+at+")."),Z}else return"data"in w&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function h(w){return w.generateMipmaps}function g(w){e.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(w,_,I,V,Y,st=!1){if(w!==null){if(e[w]!==void 0)return e[w];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let at;V&&(at=t.get("EXT_texture_norm16"),at||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===e.RED&&(I===e.FLOAT&&(Z=e.R32F),I===e.HALF_FLOAT&&(Z=e.R16F),I===e.UNSIGNED_BYTE&&(Z=e.R8),I===e.UNSIGNED_SHORT&&at&&(Z=at.R16_EXT),I===e.SHORT&&at&&(Z=at.R16_SNORM_EXT)),_===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(Z=e.R8UI),I===e.UNSIGNED_SHORT&&(Z=e.R16UI),I===e.UNSIGNED_INT&&(Z=e.R32UI),I===e.BYTE&&(Z=e.R8I),I===e.SHORT&&(Z=e.R16I),I===e.INT&&(Z=e.R32I)),_===e.RG&&(I===e.FLOAT&&(Z=e.RG32F),I===e.HALF_FLOAT&&(Z=e.RG16F),I===e.UNSIGNED_BYTE&&(Z=e.RG8),I===e.UNSIGNED_SHORT&&at&&(Z=at.RG16_EXT),I===e.SHORT&&at&&(Z=at.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(Z=e.RG8UI),I===e.UNSIGNED_SHORT&&(Z=e.RG16UI),I===e.UNSIGNED_INT&&(Z=e.RG32UI),I===e.BYTE&&(Z=e.RG8I),I===e.SHORT&&(Z=e.RG16I),I===e.INT&&(Z=e.RG32I)),_===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),I===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),I===e.UNSIGNED_INT&&(Z=e.RGB32UI),I===e.BYTE&&(Z=e.RGB8I),I===e.SHORT&&(Z=e.RGB16I),I===e.INT&&(Z=e.RGB32I)),_===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),I===e.UNSIGNED_INT&&(Z=e.RGBA32UI),I===e.BYTE&&(Z=e.RGBA8I),I===e.SHORT&&(Z=e.RGBA16I),I===e.INT&&(Z=e.RGBA32I)),_===e.RGB&&(I===e.UNSIGNED_SHORT&&at&&(Z=at.RGB16_EXT),I===e.SHORT&&at&&(Z=at.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),_===e.RGBA){let j=st?tc:Kt.getTransfer(Y);I===e.FLOAT&&(Z=e.RGBA32F),I===e.HALF_FLOAT&&(Z=e.RGBA16F),I===e.UNSIGNED_BYTE&&(Z=j===ce?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&at&&(Z=at.RGBA16_EXT),I===e.SHORT&&at&&(Z=at.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(w,_){let I;return w?_===null||_===Ui||_===Fo?I=e.DEPTH24_STENCIL8:_===Li?I=e.DEPTH32F_STENCIL8:_===zo&&(I=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===Fo?I=e.DEPTH_COMPONENT24:_===Li?I=e.DEPTH_COMPONENT32F:_===zo&&(I=e.DEPTH_COMPONENT16),I}function E(w,_){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&p.delete(_)}function x(w){let _=w.target;_.removeEventListener("dispose",x),O(_)}function A(w){let _=i.get(w);if(_.__webglInit===void 0)return;let I=w.source,V=d.get(I);if(V){let Y=V[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(w),Object.keys(V).length===0&&d.delete(I)}i.remove(w)}function R(w){let _=i.get(w);e.deleteTexture(_.__webglTexture);let I=w.source,V=d.get(I);delete V[_.__cacheKey],r.memory.textures--}function O(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Y=0;Y<_.__webglFramebuffer[V].length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[V][Y]);else e.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)e.deleteFramebuffer(_.__webglFramebuffer[V]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let I=w.textures;for(let V=0,Y=I.length;V<Y;V++){let st=i.get(I[V]);st.__webglTexture&&(e.deleteTexture(st.__webglTexture),r.memory.textures--),i.remove(I[V])}i.remove(w)}let z=0;function F(){z=0}function U(){return z}function G(w){z=w}function J(){let w=z;return w>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,w}function H(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function it(w,_){let I=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){let V=w.image;if(V===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(I,w,_);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+_)}function q(w,_){let I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){gt(I,w,_);return}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+_)}function $(w,_){let I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){gt(I,w,_);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+_)}function et(w,_){let I=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&I.__version!==w.version){Nt(I,w,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+_)}let wt={[kh]:e.REPEAT,[$i]:e.CLAMP_TO_EDGE,[Xh]:e.MIRRORED_REPEAT},bt={[nn]:e.NEAREST,[eb]:e.NEAREST_MIPMAP_NEAREST,[gc]:e.NEAREST_MIPMAP_LINEAR,[hn]:e.LINEAR,[_f]:e.LINEAR_MIPMAP_NEAREST,[Aa]:e.LINEAR_MIPMAP_LINEAR},ue={[ab]:e.NEVER,[ub]:e.ALWAYS,[rb]:e.LESS,[td]:e.LEQUAL,[ob]:e.EQUAL,[ed]:e.GEQUAL,[lb]:e.GREATER,[cb]:e.NOTEQUAL};function Xt(w,_){if(_.type===Li&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===_f||_.magFilter===gc||_.magFilter===Aa||_.minFilter===hn||_.minFilter===_f||_.minFilter===gc||_.minFilter===Aa)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,wt[_.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,wt[_.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,wt[_.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,bt[_.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,bt[_.minFilter]),_.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==gc&&_.minFilter!==Aa||_.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Gt(w,_){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let V=_.source,Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));let st=H(_);if(st!==w.__cacheKey){Y[st]===void 0&&(Y[st]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),Y[st].usedTimes++;let at=Y[w.__cacheKey];at!==void 0&&(Y[w.__cacheKey].usedTimes--,at.usedTimes===0&&R(_)),w.__cacheKey=st,w.__webglTexture=Y[st].texture}return I}function W(w,_,I){return Math.floor(Math.floor(w/I)/_)}function tt(w,_,I,V){let st=w.updateRanges;if(st.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,I,V,_.data);else{st.sort((Et,ut)=>Et.start-ut.start);let at=0;for(let Et=1;Et<st.length;Et++){let ut=st[at],ot=st[Et],At=ut.start+ut.count,Rt=W(ot.start,_.width,4),Bt=W(ut.start,_.width,4);ot.start<=At+1&&Rt===Bt&&W(ot.start+ot.count-1,_.width,4)===Rt?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++at,st[at]=ot)}st.length=at+1;let Z=n.getParameter(e.UNPACK_ROW_LENGTH),j=n.getParameter(e.UNPACK_SKIP_PIXELS),rt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Et=0,ut=st.length;Et<ut;Et++){let ot=st[Et],At=Math.floor(ot.start/4),Rt=Math.ceil(ot.count/4),Bt=At%_.width,D=Math.floor(At/_.width),lt=Rt,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(e.UNPACK_SKIP_ROWS,D),n.texSubImage2D(e.TEXTURE_2D,0,Bt,D,lt,K,I,V,_.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,j),n.pixelStorei(e.UNPACK_SKIP_ROWS,rt)}}function gt(w,_,I){let V=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=e.TEXTURE_3D);let Y=Gt(w,_),st=_.source;n.bindTexture(V,w.__webglTexture,e.TEXTURE0+I);let at=i.get(st);if(st.version!==at.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=Kt.getPrimaries(Kt.workingColorSpace),ct=_.colorSpace===Ns?null:Kt.getPrimaries(_.colorSpace),pt=_.colorSpace===Ns||K===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=fn(_,j);let rt=a.convert(_.format,_.colorSpace),Et=a.convert(_.type),ut=y(_.internalFormat,rt,Et,_.normalized,_.colorSpace,_.isVideoTexture);Xt(V,_);let ot,At=_.mipmaps,Rt=_.isVideoTexture!==!0,Bt=at.__version===void 0||Y===!0,D=st.dataReady,lt=E(_,j);if(_.isDepthTexture)ut=T(_.format===wa,_.type),Bt&&(Rt?n.texStorage2D(e.TEXTURE_2D,1,ut,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,ut,j.width,j.height,0,rt,Et,null));else if(_.isDataTexture)if(At.length>0){Rt&&Bt&&n.texStorage2D(e.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let K=0,ct=At.length;K<ct;K++)ot=At[K],Rt?D&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ot.width,ot.height,rt,Et,ot.data):n.texImage2D(e.TEXTURE_2D,K,ut,ot.width,ot.height,0,rt,Et,ot.data);_.generateMipmaps=!1}else Rt?(Bt&&n.texStorage2D(e.TEXTURE_2D,lt,ut,j.width,j.height),D&&tt(_,j,rt,Et)):n.texImage2D(e.TEXTURE_2D,0,ut,j.width,j.height,0,rt,Et,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Rt&&Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,ut,At[0].width,At[0].height,j.depth);for(let K=0,ct=At.length;K<ct;K++)if(ot=At[K],_.format!==vi)if(rt!==null)if(Rt){if(D)if(_.layerUpdates.size>0){let pt=_0(ot.width,ot.height,_.format,_.type);for(let nt of _.layerUpdates){let Ct=ot.data.subarray(nt*pt/ot.data.BYTES_PER_ELEMENT,(nt+1)*pt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,nt,ot.width,ot.height,1,rt,Ct)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,j.depth,rt,ot.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,ut,ot.width,ot.height,j.depth,0,ot.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,j.depth,rt,Et,ot.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,ut,ot.width,ot.height,j.depth,0,rt,Et,ot.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Rt&&Bt&&n.texStorage2D(e.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let K=0,ct=At.length;K<ct;K++)ot=At[K],_.format!==vi?rt!==null?Rt?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,ot.width,ot.height,rt,ot.data):n.compressedTexImage2D(e.TEXTURE_2D,K,ut,ot.width,ot.height,0,ot.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?D&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ot.width,ot.height,rt,Et,ot.data):n.texImage2D(e.TEXTURE_2D,K,ut,ot.width,ot.height,0,rt,Et,ot.data)}else if(_.isDataArrayTexture)if(Rt){if(Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,ut,j.width,j.height,j.depth),D)if(_.layerUpdates.size>0){let K=_0(j.width,j.height,_.format,_.type);for(let ct of _.layerUpdates){let pt=j.data.subarray(ct*K/j.data.BYTES_PER_ELEMENT,(ct+1)*K/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ct,j.width,j.height,1,rt,Et,pt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,rt,Et,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ut,j.width,j.height,j.depth,0,rt,Et,j.data);else if(_.isData3DTexture)Rt?(Bt&&n.texStorage3D(e.TEXTURE_3D,lt,ut,j.width,j.height,j.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,rt,Et,j.data)):n.texImage3D(e.TEXTURE_3D,0,ut,j.width,j.height,j.depth,0,rt,Et,j.data);else if(_.isFramebufferTexture){if(Bt)if(Rt)n.texStorage2D(e.TEXTURE_2D,lt,ut,j.width,j.height);else{let K=j.width,ct=j.height;for(let pt=0;pt<lt;pt++)n.texImage2D(e.TEXTURE_2D,pt,ut,K,ct,0,rt,Et,null),K>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),p.add(_),K.onpaint=ct=>{let pt=ct.changedElements;for(let nt of p)pt.includes(nt.image)&&(nt.needsUpdate=!0)},K.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,j);else{let pt=e.RGBA,nt=e.RGBA,Ct=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,pt,nt,Ct,j)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(At.length>0){if(Rt&&Bt){let K=he(At[0]);n.texStorage2D(e.TEXTURE_2D,lt,ut,K.width,K.height)}for(let K=0,ct=At.length;K<ct;K++)ot=At[K],Rt?D&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,rt,Et,ot):n.texImage2D(e.TEXTURE_2D,K,ut,rt,Et,ot);_.generateMipmaps=!1}else if(Rt){if(Bt){let K=he(j);n.texStorage2D(e.TEXTURE_2D,lt,ut,K.width,K.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt,Et,j)}else n.texImage2D(e.TEXTURE_2D,0,ut,rt,Et,j);h(_)&&g(V),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Nt(w,_,I){if(_.image.length!==6)return;let V=Gt(w,_),Y=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+I);let st=i.get(Y);if(Y.version!==st.__version||V===!0){n.activeTexture(e.TEXTURE0+I);let at=Kt.getPrimaries(Kt.workingColorSpace),Z=_.colorSpace===Ns?null:Kt.getPrimaries(_.colorSpace),j=_.colorSpace===Ns||at===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Et=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!rt&&!Et?ut[nt]=m(_.image[nt],!0,s.maxCubemapSize):ut[nt]=Et?_.image[nt].image:_.image[nt],ut[nt]=fn(_,ut[nt]);let ot=ut[0],At=a.convert(_.format,_.colorSpace),Rt=a.convert(_.type),Bt=y(_.internalFormat,At,Rt,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,lt=st.__version===void 0||V===!0,K=Y.dataReady,ct=E(_,ot);Xt(e.TEXTURE_CUBE_MAP,_);let pt;if(rt){D&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Bt,ot.width,ot.height);for(let nt=0;nt<6;nt++){pt=ut[nt].mipmaps;for(let Ct=0;Ct<pt.length;Ct++){let Mt=pt[Ct];_.format!==vi?At!==null?D?K&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,Mt.width,Mt.height,At,Mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Bt,Mt.width,Mt.height,0,Mt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,Mt.width,Mt.height,At,Rt,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Bt,Mt.width,Mt.height,0,At,Rt,Mt.data)}}}else{if(pt=_.mipmaps,D&&lt){pt.length>0&&ct++;let nt=he(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Bt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Et){D?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,At,Rt,ut[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Bt,ut[nt].width,ut[nt].height,0,At,Rt,ut[nt].data);for(let Ct=0;Ct<pt.length;Ct++){let xe=pt[Ct].image[nt].image;D?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,xe.width,xe.height,At,Rt,xe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Bt,xe.width,xe.height,0,At,Rt,xe.data)}}else{D?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,Rt,ut[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Bt,At,Rt,ut[nt]);for(let Ct=0;Ct<pt.length;Ct++){let Mt=pt[Ct];D?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,At,Rt,Mt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Bt,At,Rt,Mt.image[nt])}}}h(_)&&g(e.TEXTURE_CUBE_MAP),st.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function mt(w,_,I,V,Y,st){let at=a.convert(I.format,I.colorSpace),Z=a.convert(I.type),j=y(I.internalFormat,at,Z,I.normalized,I.colorSpace),rt=i.get(_),Et=i.get(I);if(Et.__renderTarget=_,!rt.__hasExternalTextures){let ut=Math.max(1,_.width>>st),ot=Math.max(1,_.height>>st);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,st,j,ut,ot,_.depth,0,at,Z,null):n.texImage2D(Y,st,j,ut,ot,0,at,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),Fe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,Y,Et.__webglTexture,0,De(_)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,Y,Et.__webglTexture,st),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pt(w,_,I){if(e.bindRenderbuffer(e.RENDERBUFFER,w),_.depthBuffer){let V=_.depthTexture,Y=V&&V.isDepthTexture?V.type:null,st=T(_.stencilBuffer,Y),at=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(_),st,_.width,_.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(_),st,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,st,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,w)}else{let V=_.textures;for(let Y=0;Y<V.length;Y++){let st=V[Y],at=a.convert(st.format,st.colorSpace),Z=a.convert(st.type),j=y(st.internalFormat,at,Z,st.normalized,st.colorSpace);Fe(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(_),j,_.width,_.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(_),j,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,j,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ne(w,_,I){let V=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,_.depthTexture);let rt=a.convert(_.depthTexture.format),Et=a.convert(_.depthTexture.type),ut;_.depthTexture.format===ts?ut=e.DEPTH_COMPONENT24:_.depthTexture.format===wa&&(ut=e.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,_.width,_.height,0,rt,Et,null)}}else it(_.depthTexture,0);let st=Y.__webglTexture,at=De(_),Z=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,j=_.depthTexture.format===wa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===ts)Fe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,Z,st,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,j,Z,st,0);else if(_.depthTexture.format===wa)Fe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,Z,st,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,j,Z,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(w){let _=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let V=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=V}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let V=0;V<6;V++)Ne(_.__webglFramebuffer[V],w,V);else{let V=w.texture.mipmaps;V&&V.length>0?Ne(_.__webglFramebuffer[0],w,0):Ne(_.__webglFramebuffer,w,0)}else if(I){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=e.createRenderbuffer(),Pt(_.__webglDepthbuffer[V],w,!1);else{let Y=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,st)}}else{let V=w.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Pt(_.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,st)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function jt(w,_,I){let V=i.get(w);_!==void 0&&mt(V.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Ft(w)}function Wt(w){let _=w.texture,I=i.get(w),V=i.get(_);w.addEventListener("dispose",x);let Y=w.textures,st=w.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=_.version,r.memory.textures++),st){I.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[Z]=[];for(let j=0;j<_.mipmaps.length;j++)I.__webglFramebuffer[Z][j]=e.createFramebuffer()}else I.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)I.__webglFramebuffer[Z]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(at)for(let Z=0,j=Y.length;Z<j;Z++){let rt=i.get(Y[Z]);rt.__webglTexture===void 0&&(rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&Fe(w)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let j=Y[Z];I.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);let rt=a.convert(j.format,j.colorSpace),Et=a.convert(j.type),ut=y(j.internalFormat,rt,Et,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),ot=De(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,ut,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,I.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Pt(I.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(st){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)mt(I.__webglFramebuffer[Z][j],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else mt(I.__webglFramebuffer[Z],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(_)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(at){for(let Z=0,j=Y.length;Z<j;Z++){let rt=Y[Z],Et=i.get(rt),ut=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,Et.__webglTexture),Xt(ut,rt),mt(I.__webglFramebuffer,w,rt,e.COLOR_ATTACHMENT0+Z,ut,0),h(rt)&&g(ut)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,V.__webglTexture),Xt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)mt(I.__webglFramebuffer[j],w,_,e.COLOR_ATTACHMENT0,Z,j);else mt(I.__webglFramebuffer,w,_,e.COLOR_ATTACHMENT0,Z,0);h(_)&&g(Z),n.unbindTexture()}w.depthBuffer&&Ft(w)}function vt(w){let _=w.textures;for(let I=0,V=_.length;I<V;I++){let Y=_[I];if(h(Y)){let st=M(w),at=i.get(Y).__webglTexture;n.bindTexture(st,at),g(st),n.unbindTexture()}}}let ae=[],Ke=[];function Cn(w){if(w.samples>0){if(Fe(w)===!1){let _=w.textures,I=w.width,V=w.height,Y=e.COLOR_BUFFER_BIT,st=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=i.get(w),Z=_.length>1;if(Z)for(let rt=0;rt<_.length;rt++)n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let Et=i.get(_[rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,I,V,0,0,I,V,Y,e.NEAREST),l===!0&&(ae.length=0,Ke.length=0,ae.push(e.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ae.push(st),Ke.push(st),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let rt=0;rt<_.length;rt++){n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let Et=i.get(_[rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function De(w){return Math.min(s.maxSamples,w.samples)}function Fe(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(w){let _=r.render.frame;f.get(w)!==_&&(f.set(w,_),w.update())}function fn(w,_){let I=w.colorSpace,V=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==$l&&I!==Ns&&(Kt.getTransfer(I)===ce?(V!==vi||Y!==ni)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",I)),_}function he(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=F,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=jt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Q2(e,t){function n(i,s=Ns){let a,r=Kt.getTransfer(s);if(i===ni)return e.UNSIGNED_BYTE;if(i===yf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===xf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===r0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===o0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===s0)return e.BYTE;if(i===a0)return e.SHORT;if(i===zo)return e.UNSIGNED_SHORT;if(i===vf)return e.INT;if(i===Ui)return e.UNSIGNED_INT;if(i===Li)return e.FLOAT;if(i===Oi)return e.HALF_FLOAT;if(i===l0)return e.ALPHA;if(i===c0)return e.RGB;if(i===vi)return e.RGBA;if(i===ts)return e.DEPTH_COMPONENT;if(i===wa)return e.DEPTH_STENCIL;if(i===u0)return e.RED;if(i===Sf)return e.RED_INTEGER;if(i===Ca)return e.RG;if(i===Mf)return e.RG_INTEGER;if(i===bf)return e.RGBA_INTEGER;if(i===_c||i===vc||i===yc||i===xc)if(r===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tf||i===Ef||i===Af||i===wf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Tf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Af)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cf||i===Rf||i===Nf||i===Df||i===Uf||i===Sc||i===Lf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Cf||i===Rf)return r===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Nf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Df)return a.COMPRESSED_R11_EAC;if(i===Uf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return a.COMPRESSED_RG11_EAC;if(i===Lf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Of||i===If||i===Pf||i===Bf||i===zf||i===Ff||i===Vf||i===Hf||i===Gf||i===kf||i===Xf||i===Wf||i===qf||i===Yf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Of)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===If)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ff)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zf||i===Jf||i===Kf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Zf)return r===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qf||i===jf||i===Mc||i===$f)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Qf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===jf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$f)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var j2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,D0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new hc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new An({vertexShader:j2,fragmentShader:$2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},U0=class extends es{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,b=typeof XRWebGLBinding<"u",m=new D0,h={},g=n.getContextAttributes(),M=null,y=null,T=[],E=[],C=new te,x=null,A=null,R=new Bn;R.viewport=new Le;let O=new Bn;O.viewport=new Le;let z=[R,O],F=new pf,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=T[W];return tt===void 0&&(tt=new Lo,T[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=T[W];return tt===void 0&&(tt=new Lo,T[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=T[W];return tt===void 0&&(tt=new Lo,T[W]=tt),tt.getHandSpace()};function J(W){let tt=E.indexOf(W.inputSource);if(tt===-1)return;let gt=T[tt];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||r),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",it);for(let W=0;W<T.length;W++){let tt=E[W];tt!==null&&(E[W]=null,T[W].disconnect(tt))}U=null,G=null,m.reset();for(let W in h)delete h[W];if(t.setRenderTarget(M),d=null,u=null,p=null,s=null,y=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),A!==null){let W=A.camera;W.fov=A.fov,W.zoom=A.zoom,W.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",H),s.addEventListener("inputsourceschange",it),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Nt=null,mt=null;g.depth&&(mt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,gt=g.stencil?wa:ts,Nt=g.stencil?Fo:Ui);let Pt={colorFormat:n.RGBA8,depthFormat:mt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Fn(u.textureWidth,u.textureHeight,{format:vi,type:ni,depthTexture:new xa(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Fn(d.framebufferWidth,d.framebufferHeight,{format:vi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(W){for(let tt=0;tt<W.removed.length;tt++){let gt=W.removed[tt],Nt=E.indexOf(gt);Nt>=0&&(E[Nt]=null,T[Nt].disconnect(gt))}for(let tt=0;tt<W.added.length;tt++){let gt=W.added[tt],Nt=E.indexOf(gt);if(Nt===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=E.length){E.push(gt),Nt=Pt;break}else if(E[Pt]===null){E[Pt]=gt,Nt=Pt;break}if(Nt===-1)break}let mt=T[Nt];mt&&mt.connect(gt)}}let q=new k,$=new k;function et(W,tt,gt){q.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);let Nt=q.distanceTo($),mt=tt.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ne=mt[14]/(mt[10]-1),Ft=mt[14]/(mt[10]+1),jt=(mt[9]+1)/mt[5],Wt=(mt[9]-1)/mt[5],vt=(mt[8]-1)/mt[0],ae=(Pt[8]+1)/Pt[0],Ke=Ne*vt,Cn=Ne*ae,De=Nt/(-vt+ae),Fe=De*-vt;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Fe),W.translateZ(De),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),mt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let L=Ne+De,fn=Ft+De,he=Ke-Fe,w=Cn+(Nt-Fe),_=jt*Ft/fn*L,I=Wt*Ft/fn*L;W.projectionMatrix.makePerspective(he,w,_,I,L,fn),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function wt(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,gt=W.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),F.near=O.near=R.near=tt,F.far=O.far=R.far=gt,(U!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,G=F.far),F.layers.mask=W.layers.mask|6,R.layers.mask=F.layers.mask&-5,O.layers.mask=F.layers.mask&-3;let Nt=W.parent,mt=F.cameras;wt(F,Nt);for(let Pt=0;Pt<mt.length;Pt++)wt(mt[Pt],Nt);mt.length===2?et(F,R,O):F.projectionMatrix.copy(R.projectionMatrix),A===null&&W.isPerspectiveCamera&&(A={camera:W,fov:W.fov,zoom:W.zoom}),bt(W,F,Nt)};function bt(W,tt,gt){gt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(W){return h[W]};let ue=null;function Xt(W,tt){if(f=tt.getViewerPose(c||r),v=tt,f!==null){let gt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Nt=!1;gt.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let Ft=0;Ft<gt.length;Ft++){let jt=gt[Ft],Wt=null;if(d!==null)Wt=d.getViewport(jt);else{let ae=p.getViewSubImage(u,jt);Wt=ae.viewport,Ft===0&&(t.setRenderTargetTextures(y,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(y))}let vt=z[Ft];vt===void 0&&(vt=new Bn,vt.layers.enable(Ft),vt.viewport=new Le,z[Ft]=vt),vt.matrix.fromArray(jt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(jt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Ft===0&&(F.matrix.copy(vt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(vt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Ft=p.getDepthInformation(gt[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,s.renderState)}if(mt&&mt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Ft=0;Ft<gt.length;Ft++){let jt=gt[Ft].camera;if(jt){let Wt=h[jt];Wt||(Wt=new hc,h[jt]=Wt);let vt=p.getCameraImage(jt);Wt.sourceTexture=vt}}}}for(let gt=0;gt<T.length;gt++){let Nt=E[gt],mt=T[gt];Nt!==null&&mt!==void 0&&mt.update(Nt,tt,c||r)}ue&&ue(W,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let Gt=new Hb;Gt.setAnimationLoop(Xt),this.setAnimationLoop=function(W){ue=W},this.dispose=function(){}}},tN=new ze,Yb=new It;Yb.set(-1,0,0,0,1,0,0,0,1);function eN(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,p0(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,g,M,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===wn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===wn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g=t.get(h),M=g.envMap,y=g.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(tN.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yb),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=M*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let g=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=s[y.id];E===void 0&&(m(y),E=f(y),s[y.id]=E,y.addEventListener("dispose",g));let C=T.program;i.updateUBOMapping(y,C);let x=t.render.frame;a[y.id]!==x&&(u(y),a[y.id]=x)}function f(y){let T=p();y.__bindingPointIndex=T;let E=e.createBuffer(),C=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],E=y.uniforms,C=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let x=0,A=E.length;x<A;x++){let R=E[x];if(Array.isArray(R))for(let O=0,z=R.length;O<z;O++)d(R[O],x,O,C);else d(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,T,E,C){if(b(y,T,E,C)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let O=0;O<A.length;O++){let z=A[O],F=h(z);v(z,y.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function v(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function b(y,T,E,C){let x=y.value,A=T+"_"+E;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{let R=C[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let T=y.uniforms,E=0,C=16;for(let A=0,R=T.length;A<R;A++){let O=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,F=O.length;z<F;z++){let U=O[z],G=Array.isArray(U.value)?U.value:[U.value];for(let J=0,H=G.length;J<H;J++){let it=G[J],q=h(it),$=E%C,et=$%q.boundary,wt=$+et;E+=et,wt!==0&&C-wt<q.storage&&(E+=C-wt),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=q.storage}}}let x=E%C;return x>0&&(E+=C-x),y.__size=E,y.__cache={},this}function h(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){let T=y.target;T.removeEventListener("dispose",g);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function M(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:M}}var iN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rs=null;function sN(){return rs===null&&(rs=new Qh(iN,16,16,Ca,Oi),rs.name="DFG_LUT",rs.minFilter=hn,rs.magFilter=hn,rs.wrapS=$i,rs.wrapT=$i,rs.generateMipmaps=!1,rs.needsUpdate=!0),rs}var rd=class{constructor(t={}){let{canvas:n=fb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ni}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=d,m=new Set([bf,Mf,Sf]),h=new Set([ni,Ui,zo,Fo,yf,xf]),g=new Uint32Array(4),M=new Int32Array(4),y=new k,T=null,E=null,C=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,O=!1,z=null,F=null,U=null,G=null;this._outputColorSpace=ti;let J=0,H=0,it=null,q=-1,$=null,et=new Le,wt=new Le,bt=null,ue=new Qt(0),Xt=0,Gt=n.width,W=n.height,tt=1,gt=null,Nt=null,mt=new Le(0,0,Gt,W),Pt=new Le(0,0,Gt,W),Ne=!1,Ft=new cc,jt=!1,Wt=!1,vt=new ze,ae=new k,Ke=new Le,Cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Fe(){return it===null?tt:1}let L=i;function fn(S,N){return n.getContext(S,N)}let he,w,_,I,V,Y,st,at,Z,j,rt,Et,ut,ot,At,Rt,Bt,D,lt,K,ct,pt,nt;try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",yi,!1),L===null){let N="webgl2";if(L=fn(N,S),L===null)throw fn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(S){throw n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",yi,!1),Lt("WebGLRenderer: "+S.message),S}function Ct(){he=new h3(L),he.init(),ct=new Q2(L,he),w=new e3(L,he,t,ct),_=new J2(L,he),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=L.createFramebuffer(),U=L.createFramebuffer(),G=L.createFramebuffer(),I=new p3(L),V=new I2,Y=new K2(L,he,_,V,w,ct,I),st=new u3(R),at=new gw(L),pt=new $R(L,at),Z=new f3(L,at,I,pt),j=new g3(L,Z,at,pt,I),D=new m3(L,w,Y),At=new n3(V),rt=new O2(R,st,he,w,pt,At),Et=new eN(R,V),ut=new B2,ot=new k2(he),Bt=new jR(R,st,_,j,v,l),Rt=new Z2(R,j,w),nt=new nN(L,I,w,_),lt=new t3(L,he,I),K=new d3(L,he,I),I.programs=rt.programs,R.capabilities=w,R.extensions=he,R.properties=V,R.renderLists=ut,R.shadowMap=Rt,R.state=_,R.info=I}b!==ni&&(A=new v3(b,n.width,n.height,o,s,a));let Mt=new U0(R,L);this.xr=Mt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(Gt,W,!1))},this.getSize=function(S){return S.set(Gt,W)},this.setSize=function(S,N,X=!0){if(Mt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=S,W=N,n.width=Math.floor(S*tt),n.height=Math.floor(N*tt),X===!0&&(n.style.width=S+"px",n.style.height=N+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Gt*tt,W*tt).floor()},this.setDrawingBufferSize=function(S,N,X){Gt=S,W=N,tt=X,n.width=Math.floor(S*X),n.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(b===ni){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(mt)},this.setViewport=function(S,N,X,P){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,N,X,P),_.viewport(et.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,N,X,P){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,N,X,P),_.scissor(wt.copy(Pt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){_.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){gt=S},this.setTransparentSort=function(S){Nt=S},this.getClearColor=function(S){return S.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let P=0;if(S){let B=!1;if(it!==null){let dt=it.texture.format;B=m.has(dt)}if(B){let dt=it.texture.type,yt=h.has(dt),ft=Bt.getClearColor(),xt=Bt.getClearAlpha(),Tt=ft.r,Vt=ft.g,qt=ft.b;yt?(g[0]=Tt,g[1]=Vt,g[2]=qt,g[3]=xt,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=Tt,M[1]=Vt,M[2]=qt,M[3]=xt,L.clearBufferiv(L.COLOR,0,M))}else P|=L.COLOR_BUFFER_BIT}N&&(P|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(P|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&L.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",yi,!1),Bt.dispose(),ut.dispose(),ot.dispose(),V.dispose(),st.dispose(),j.dispose(),pt.dispose(),nt.dispose(),rt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",P0),Mt.removeEventListener("sessionend",B0),Ra.stop()};function xe(S){S.preventDefault(),d0("WebGLRenderer: Context Lost."),O=!0}function re(){d0("WebGLRenderer: Context Restored."),O=!1;let S=I.autoReset,N=Rt.enabled,X=Rt.autoUpdate,P=Rt.needsUpdate,B=Rt.type;Ct(),I.autoReset=S,Rt.enabled=N,Rt.autoUpdate=X,Rt.needsUpdate=P,Rt.type=B}function yi(S){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ii(S){let N=S.target;N.removeEventListener("dispose",Ii),Qb(N)}function Qb(S){jb(S),V.remove(S)}function jb(S){let N=V.get(S).programs;N!==void 0&&(N.forEach(function(X){rt.releaseProgram(X)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,P,B,dt){N===null&&(N=Cn);let yt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ft=e1(S,N,X,P,B);_.setMaterial(P,yt);let xt=X.index,Tt=1;if(P.wireframe===!0){if(xt=Z.getWireframeAttribute(X),xt===void 0)return;Tt=2}let Vt=X.drawRange,qt=X.attributes.position,St=Vt.start*Tt,oe=(Vt.start+Vt.count)*Tt;dt!==null&&(St=Math.max(St,dt.start*Tt),oe=Math.min(oe,(dt.start+dt.count)*Tt)),xt!==null?(St=Math.max(St,0),oe=Math.min(oe,xt.count)):qt!=null&&(St=Math.max(St,0),oe=Math.min(oe,qt.count));let Ve=oe-St;if(Ve<0||Ve===1/0)return;pt.setup(B,P,ft,X,xt);let Ae,_e=lt;if(xt!==null&&(Ae=at.get(xt),_e=K,_e.setIndex(Ae)),B.isMesh)P.wireframe===!0?(_.setLineWidth(P.wireframeLinewidth*Fe()),_e.setMode(L.LINES)):_e.setMode(L.TRIANGLES);else if(B.isLine){let dn=P.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*Fe()),B.isLineSegments?_e.setMode(L.LINES):B.isLineLoop?_e.setMode(L.LINE_LOOP):_e.setMode(L.LINE_STRIP)}else B.isPoints?_e.setMode(L.POINTS):B.isSprite&&_e.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(he.get("WEBGL_multi_draw"))_e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let dn=B._multiDrawStarts,_t=B._multiDrawCounts,xn=B._multiDrawCount,ee=xt?at.get(xt).bytesPerElement:1,ii=V.get(P).currentProgram.getUniforms();for(let Pi=0;Pi<xn;Pi++)ii.setValue(L,"_gl_DrawID",Pi),_e.render(dn[Pi]/ee,_t[Pi])}else if(B.isInstancedMesh)_e.renderInstances(St,Ve,B.count);else if(X.isInstancedBufferGeometry){let dn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_t=Math.min(X.instanceCount,dn);_e.renderInstances(St,Ve,_t)}else _e.render(St,Ve)};function I0(S,N,X,P){z!==null&&S.isNodeMaterial&&z.setObject(P,S),jt===!0&&At.setState(S,X,!1),S.transparent===!0&&S.side===ss&&S.forceSinglePass===!1?(S.side=wn,S.needsUpdate=!0,Cc(S,N,P),S.side=Ta,S.needsUpdate=!0,Cc(S,N,P),S.side=ss):Cc(S,N,P)}this.compile=function(S,N,X=null){X===null&&(X=S),z!==null&&z.renderStart(S,N,X),E=ot.get(X),E.init(N),x.push(E),X.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),S!==X&&S.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Wt=this.localClippingEnabled,jt=At.init(this.clippingPlanes,Wt),jt===!0&&At.setGlobalState(this.clippingPlanes,N),z!==null&&Rt.render(E.state.shadowsArray,X,N);let P=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let dt=B.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){let ft=dt[yt];I0(ft,X,N,B),P.add(ft)}else I0(dt,X,N,B),P.add(dt)}),E=x.pop(),z!==null&&z.renderEnd(),P},this.compileAsync=function(S,N,X=null){let P=this.compile(S,N,X);return new Promise(B=>{function dt(){if(P.forEach(function(yt){let xt=V.get(yt).currentProgram;(xt===void 0||xt.isReady())&&P.delete(yt)}),P.size===0){B(S);return}setTimeout(dt,10)}he.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let cd=null;function $b(S){cd&&cd(S)}function P0(){Ra.stop()}function B0(){Ra.start()}let Ra=new Hb;Ra.setAnimationLoop($b),typeof self<"u"&&Ra.setContext(self),this.setAnimationLoop=function(S){cd=S,Mt.setAnimationLoop(S),S===null?Ra.stop():Ra.start()},Mt.addEventListener("sessionstart",P0),Mt.addEventListener("sessionend",B0),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(S,N);let X=Mt.enabled===!0&&Mt.isPresenting===!0,P=A!==null&&(it===null||X)&&A.begin(R,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(N),N=Mt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,it),E=ot.get(S,x.length),E.init(N),E.state.textureUnits=Y.getTextureUnits(),x.push(E),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ft.setFromProjectionMatrix(vt,Ni,N.reversedDepth),Wt=this.localClippingEnabled,jt=At.init(this.clippingPlanes,Wt),T=ut.get(S,C.length),T.init(),C.push(T),Mt.enabled===!0&&Mt.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&ud(yt,N,-1/0,R.sortObjects)}ud(S,N,0,R.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(gt,Nt),De=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,De&&Bt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&At.beginShadows();let B=E.state.shadowsArray;if(Rt.render(B,S,N),jt===!0&&At.endShadows(),(P&&A.hasRenderPass())===!1){let yt=T.opaque,ft=T.transmissive;if(E.setupLights(),N.isArrayCamera){let xt=N.cameras;if(ft.length>0)for(let Tt=0,Vt=xt.length;Tt<Vt;Tt++){let qt=xt[Tt];F0(yt,ft,S,qt)}De&&Bt.render(S);for(let Tt=0,Vt=xt.length;Tt<Vt;Tt++){let qt=xt[Tt];z0(T,S,qt,qt.viewport)}}else ft.length>0&&F0(yt,ft,S,N),De&&Bt.render(S),z0(T,S,N)}it!==null&&H===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),P&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),pt.resetDefaultState(),q=-1,$=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),jt===!0&&At.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,z!==null&&z.renderEnd()};function ud(S,N,X,P){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ft)){P&&Ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);let yt=j.update(S),ft=S.material;ft.visible&&T.push(S,yt,ft,X,Ke.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ft))){let yt=j.update(S),ft=S.material;if(P&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ke.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ke.copy(yt.boundingSphere.center)),Ke.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(ft)){let xt=yt.groups;for(let Tt=0,Vt=xt.length;Tt<Vt;Tt++){let qt=xt[Tt],St=ft[qt.materialIndex];St&&St.visible&&T.push(S,yt,St,X,Ke.z,qt,N)}}else ft.visible&&T.push(S,yt,ft,X,Ke.z,null,N)}}let dt=S.children;for(let yt=0,ft=dt.length;yt<ft;yt++)ud(dt[yt],N,X,P)}function z0(S,N,X,P){let{opaque:B,transmissive:dt,transparent:yt}=S;E.setupLightsView(X),jt===!0&&At.setGlobalState(R.clippingPlanes,X),P&&_.viewport(et.copy(P)),B.length>0&&wc(B,N,X),dt.length>0&&wc(dt,N,X),yt.length>0&&wc(yt,N,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function F0(S,N,X,P){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[P.id]===void 0){let St=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[P.id]=new Fn(1,1,{generateMipmaps:!0,type:St?Oi:ni,minFilter:Aa,samples:Math.max(4,w.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let dt=E.state.transmissionRenderTarget[P.id],yt=P.viewport||et;dt.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let ft=R.getRenderTarget(),xt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor(ue),Xt=R.getClearAlpha(),Xt<1&&R.setClearColor(16777215,.5),R.clear(),De&&Bt.render(X);let Vt=R.toneMapping;R.toneMapping=Di;let qt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),E.setupLightsView(P),jt===!0&&At.setGlobalState(R.clippingPlanes,P),wc(S,X,P),Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt),he.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let oe=0,Ve=N.length;oe<Ve;oe++){let Ae=N[oe],{object:_e,geometry:dn,material:_t,group:xn}=Ae;if(_t.side===ss&&_e.layers.test(P.layers)){let ee=_t.side;_t.side=wn,_t.needsUpdate=!0,V0(_e,X,P,dn,_t,xn),_t.side=ee,_t.needsUpdate=!0,St=!0}}St===!0&&(Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt))}R.setRenderTarget(ft,xt,Tt),R.setClearColor(ue,Xt),qt!==void 0&&(P.viewport=qt),R.toneMapping=Vt}function wc(S,N,X){let P=N.isScene===!0?N.overrideMaterial:null;for(let B=0,dt=S.length;B<dt;B++){let yt=S[B],{object:ft,geometry:xt,group:Tt}=yt,Vt=yt.material;Vt.allowOverride===!0&&P!==null&&(Vt=P),ft.layers.test(X.layers)&&V0(ft,N,X,xt,Vt,Tt)}}function V0(S,N,X,P,B,dt){z!==null&&B.isNodeMaterial&&z.setObject(S,B),S.onBeforeRender(R,N,X,P,B,dt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(R,N,X,P,S,dt),B.transparent===!0&&B.side===ss&&B.forceSinglePass===!1?(B.side=wn,B.needsUpdate=!0,R.renderBufferDirect(X,N,P,B,S,dt),B.side=Ta,B.needsUpdate=!0,R.renderBufferDirect(X,N,P,B,S,dt),B.side=ss):R.renderBufferDirect(X,N,P,B,S,dt),S.onAfterRender(R,N,X,P,B,dt)}function Cc(S,N,X){N.isScene!==!0&&(N=Cn);let P=V.get(S),B=E.state.lights,dt=E.state.shadowsArray,yt=B.state.version,ft=rt.getParameters(S,B.state,dt,N,X,E.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ft),Tt=P.programs;P.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,P.fog=N.fog;let Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;P.envMap=st.get(S.envMap||P.environment,Vt),P.envMapRotation=P.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Tt===void 0&&(S.addEventListener("dispose",Ii),Tt=new Map,P.programs=Tt);let qt=Tt.get(xt);if(qt!==void 0){if(P.currentProgram===qt&&P.lightsStateVersion===yt)return G0(S,ft),qt}else ft.uniforms=rt.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,X,ft),S.onBeforeCompile(ft,R),qt=rt.acquireProgram(ft,xt),Tt.set(xt,qt),P.uniforms=ft.uniforms;let St=P.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=At.uniform),G0(S,ft),P.needsLights=i1(S),P.lightsStateVersion=yt,P.needsLights&&(St.ambientLightColor.value=B.state.ambient,St.lightProbe.value=B.state.probe,St.sunLights.value=B.state.sun,St.sunLightShadows.value=B.state.sunShadow,St.directionalLights.value=B.state.directional,St.directionalLightShadows.value=B.state.directionalShadow,St.spotLights.value=B.state.spot,St.spotLightShadows.value=B.state.spotShadow,St.rectAreaLights.value=B.state.rectArea,St.ltc_1.value=B.state.rectAreaLTC1,St.ltc_2.value=B.state.rectAreaLTC2,St.pointLights.value=B.state.point,St.pointLightShadows.value=B.state.pointShadow,St.hemisphereLights.value=B.state.hemi,St.sunShadowMatrix.value=B.state.sunShadowMatrix,St.sunShadowCascade.value=B.state.sunShadowCascade,St.directionalShadowMatrix.value=B.state.directionalShadowMatrix,St.spotLightMatrix.value=B.state.spotLightMatrix,St.spotLightMap.value=B.state.spotLightMap,St.pointShadowMatrix.value=B.state.pointShadowMatrix),P.lightProbeGrid=E.state.lightProbeGridArray.length>0,P.currentProgram=qt,P.uniformsList=null,qt}function H0(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Go.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function G0(S,N){let X=V.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function t1(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let X=0,P=S.length;X<P;X++){let B=S[X];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function e1(S,N,X,P,B){N.isScene!==!0&&(N=Cn),Y.resetTextureUnits();let dt=N.fog,yt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?N.environment:null,ft=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Kt.workingColorSpace,xt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Tt=st.get(P.envMap||yt,xt),Vt=P.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),St=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,Ve=!!X.morphAttributes.color,Ae=Di;P.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dn=_e!==void 0?_e.length:0,_t=V.get(P),xn=E.state.lights;if(jt===!0&&(Wt===!0||S!==$)){let Se=S===$&&P.id===q;At.setState(P,S,Se)}let ee=!1;P.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==xn.state.version||_t.outputColorSpace!==ft||B.isBatchedMesh&&_t.batching===!1||!B.isBatchedMesh&&_t.batching===!0||B.isBatchedMesh&&_t.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&_t.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&_t.instancing===!1||!B.isInstancedMesh&&_t.instancing===!0||B.isSkinnedMesh&&_t.skinning===!1||!B.isSkinnedMesh&&_t.skinning===!0||B.isInstancedMesh&&_t.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&_t.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&_t.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&_t.instancingMorph===!1&&B.morphTexture!==null||_t.envMap!==Tt||P.fog===!0&&_t.fog!==dt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==At.numPlanes||_t.numIntersection!==At.numIntersection)||_t.vertexAlphas!==Vt||_t.vertexTangents!==qt||_t.morphTargets!==St||_t.morphNormals!==oe||_t.morphColors!==Ve||_t.toneMapping!==Ae||_t.morphTargetsCount!==dn||!!_t.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,_t.__version=P.version);let ii=_t.currentProgram;ee===!0&&(ii=Cc(P,N,B),z&&P.isNodeMaterial&&z.onUpdateProgram(P,ii,_t));let Pi=!1,Ds=!1,mr=!1,me=ii.getUniforms(),Pe=_t.uniforms;if(_.useProgram(ii.program)&&(Pi=!0,Ds=!0,mr=!0),P.id!==q&&(q=P.id,Ds=!0),_t.needsLights){let Se=t1(E.state.lightProbeGridArray,B);_t.lightProbeGrid!==Se&&(_t.lightProbeGrid=Se,Ds=!0)}if(Pi||$!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",S.projectionMatrix),me.setValue(L,"viewMatrix",S.matrixWorldInverse);let Ls=me.map.cameraPosition;Ls!==void 0&&Ls.setValue(L,ae.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&me.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,Ds=!0,mr=!0)}if(_t.needsLights&&(xn.state.sunShadowMap.length>0&&me.setValue(L,"sunShadowMap",xn.state.sunShadowMap,Y),xn.state.directionalShadowMap.length>0&&me.setValue(L,"directionalShadowMap",xn.state.directionalShadowMap,Y),xn.state.spotShadowMap.length>0&&me.setValue(L,"spotShadowMap",xn.state.spotShadowMap,Y),xn.state.pointShadowMap.length>0&&me.setValue(L,"pointShadowMap",xn.state.pointShadowMap,Y)),B.isSkinnedMesh){me.setOptional(L,B,"bindMatrix"),me.setOptional(L,B,"bindMatrixInverse");let Se=B.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),me.setValue(L,"boneTexture",Se.boneTexture,Y))}B.isBatchedMesh&&(me.setOptional(L,B,"batchingTexture"),me.setValue(L,"batchingTexture",B._matricesTexture,Y),me.setOptional(L,B,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",B._indirectTexture,Y),me.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",B._colorsTexture,Y));let Us=X.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&D.update(B,X,ii),(Ds||_t.receiveShadow!==B.receiveShadow)&&(_t.receiveShadow=B.receiveShadow,me.setValue(L,"receiveShadow",B.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&N.environment!==null&&(Pe.envMapIntensity.value=N.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=sN()),Ds){if(me.setValue(L,"toneMappingExposure",R.toneMappingExposure),_t.needsLights&&n1(Pe,mr),dt&&P.fog===!0&&Et.refreshFogUniforms(Pe,dt),Et.refreshMaterialUniforms(Pe,P,tt,W,E.state.transmissionRenderTarget[S.id]),_t.needsLights&&_t.lightProbeGrid){let Se=_t.lightProbeGrid;Pe.probesSH.value=Se.texture,Pe.probesMin.value.copy(Se.boundingBox.min),Pe.probesMax.value.copy(Se.boundingBox.max),Pe.probesResolution.value.copy(Se.resolution)}Go.upload(L,H0(_t),Pe,Y)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Go.upload(L,H0(_t),Pe,Y),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&me.setValue(L,"center",B.center),me.setValue(L,"modelViewMatrix",B.modelViewMatrix),me.setValue(L,"normalMatrix",B.normalMatrix),me.setValue(L,"modelMatrix",B.matrixWorld),P.uniformsGroups!==void 0){let Se=P.uniformsGroups;for(let Ls=0,gr=Se.length;Ls<gr;Ls++){let X0=Se[Ls];nt.update(X0,ii),nt.bind(X0,ii)}}return ii}function n1(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function i1(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,N,X){let P=V.get(S);P.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=N,V.get(S.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:X,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let X=V.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){it=S,J=N,H=X;let P=null,B=!1,dt=!1;if(S){let ft=V.get(S);if(ft.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(S.viewport),wt.copy(S.scissor),bt=S.scissorTest,_.viewport(et),_.scissor(wt),_.setScissorTest(bt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ft.__hasExternalTextures)Y.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Vt=S.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&V.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let xt=S.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let Tt=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Tt[N])?P=Tt[N][X]:P=Tt[N],B=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?P=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Tt)?P=Tt[X]:P=Tt,et.copy(S.viewport),wt.copy(S.scissor),bt=S.scissorTest}else et.copy(mt).multiplyScalar(tt).floor(),wt.copy(Pt).multiplyScalar(tt).floor(),bt=Ne;if(X!==0&&(P=F),_.bindFramebuffer(L.FRAMEBUFFER,P)&&_.drawBuffers(S,P),_.viewport(et),_.scissor(wt),_.setScissorTest(bt),B){let ft=V.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,X)}else if(dt){let ft=N;for(let xt=0;xt<S.textures.length;xt++){let Tt=V.get(S.textures[xt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xt,Tt.__webglTexture,X,ft)}}else if(S!==null&&X!==0){let ft=V.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,X)}q=-1};function k0(S){let N=V.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=w.textureFormatReadable(S.format),N.__typeReadable=w.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,X,P,B,dt,yt,ft=0){if(!(S&&S.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(xt=xt[yt]),xt){_.bindFramebuffer(L.FRAMEBUFFER,xt);try{let Tt=S.textures[ft],Vt=Tt.format,qt=Tt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft);let St=k0(Tt);if(St.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-P&&X>=0&&X<=S.height-B&&L.readPixels(N,X,P,B,ct.convert(Vt),ct.convert(qt),dt)}finally{let Tt=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,P,B,dt,yt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(xt=xt[yt]),xt)if(N>=0&&N<=S.width-P&&X>=0&&X<=S.height-B){_.bindFramebuffer(L.FRAMEBUFFER,xt);let Tt=S.textures[ft],Vt=Tt.format,qt=Tt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft);let St=k0(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(N,X,P,B,ct.convert(Vt),ct.convert(qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ve=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ve);let Ae=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pb(L,Ae,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(oe),L.deleteSync(Ae),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){let P=Math.pow(2,-X),B=Math.floor(S.image.width*P),dt=Math.floor(S.image.height*P),yt=N!==null?N.x:0,ft=N!==null?N.y:0;Y.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,yt,ft,B,dt),_.unbindTexture()},this.copyTextureToTexture=function(S,N,X=null,P=null,B=0,dt=0){let yt,ft,xt,Tt,Vt,qt,St,oe,Ve,Ae=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(X!==null)yt=X.max.x-X.min.x,ft=X.max.y-X.min.y,xt=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Vt=X.min.y,qt=X.isBox3?X.min.z:0;else{let Pe=Math.pow(2,-B);yt=Math.floor(Ae.width*Pe),ft=Math.floor(Ae.height*Pe),S.isDataArrayTexture?xt=Ae.depth:S.isData3DTexture?xt=Math.floor(Ae.depth*Pe):xt=1,Tt=0,Vt=0,qt=0}P!==null?(St=P.x,oe=P.y,Ve=P.z):(St=0,oe=0,Ve=0);let _e=ct.convert(N.format),dn=ct.convert(N.type),_t;N.isData3DTexture?(Y.setTexture3D(N,0),_t=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),_t=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),_t=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let xn=_.getParameter(L.UNPACK_ROW_LENGTH),ee=_.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=_.getParameter(L.UNPACK_SKIP_PIXELS),Pi=_.getParameter(L.UNPACK_SKIP_ROWS),Ds=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),_.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let mr=S.isDataArrayTexture||S.isData3DTexture,me=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Pe=V.get(S),Us=V.get(N),Se=V.get(Pe.__renderTarget),Ls=V.get(Us.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Se.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let gr=0;gr<xt;gr++)mr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(S).__webglTexture,B,qt+gr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(N).__webglTexture,dt,Ve+gr)),L.blitFramebuffer(Tt,Vt,yt,ft,St,oe,yt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||V.has(S)){let Pe=V.get(S),Us=V.get(N);_.bindFramebuffer(L.READ_FRAMEBUFFER,U),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let Se=0;Se<xt;Se++)mr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,B,qt+Se):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,B),me?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Us.__webglTexture,dt,Ve+Se):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Us.__webglTexture,dt),B!==0?L.blitFramebuffer(Tt,Vt,yt,ft,St,oe,yt,ft,L.COLOR_BUFFER_BIT,L.NEAREST):me?L.copyTexSubImage3D(_t,dt,St,oe,Ve+Se,Tt,Vt,yt,ft):L.copyTexSubImage2D(_t,dt,St,oe,Tt,Vt,yt,ft);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(_t,dt,St,oe,Ve,yt,ft,xt,_e,dn,Ae.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,dt,St,oe,Ve,yt,ft,xt,_e,Ae.data):L.texSubImage3D(_t,dt,St,oe,Ve,yt,ft,xt,_e,dn,Ae):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,St,oe,yt,ft,_e,dn,Ae.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,St,oe,Ae.width,Ae.height,_e,Ae.data):L.texSubImage2D(L.TEXTURE_2D,dt,St,oe,yt,ft,_e,dn,Ae);_.pixelStorei(L.UNPACK_ROW_LENGTH,xn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),_.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),_.pixelStorei(L.UNPACK_SKIP_ROWS,Pi),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Ds),dt===0&&N.generateMipmaps&&L.generateMipmap(_t),_.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){J=0,H=0,it=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}};var{useEffect:rN,useRef:pr}=L0,oN=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,lN=`
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform float uCoverageAlpha;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float coverage = 0.0;
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    float ringAmount = ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px);
    c = mix(c, rc, vec3(ringAmount));
    coverage = max(coverage, ringAmount);
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  float intensity = max(c.r, max(c.g, c.b));
  vec3 emissiveColor = intensity > 0.0001 ? clamp(c / intensity, 0.0, 1.0) : vec3(0.0);
  vec3 outputColor = mix(emissiveColor, clamp(c, 0.0, 1.0), uCoverageAlpha);
  float outputAlpha = mix(intensity, coverage, uCoverageAlpha);
  gl_FragColor = vec4(outputColor, clamp(outputAlpha * uOpacity, 0.0, 1.0));
}
`;function O0({color:e="#fc42ff",colorTwo:t="#42fcff",speed:n=1,ringCount:i=6,attenuation:s=10,lineThickness:a=2,baseRadius:r=.35,radiusStep:o=.1,scaleRate:l=.1,opacity:c=1,blur:f=0,noiseAmount:p=.1,rotation:u=0,ringGap:d=1.5,fadeIn:v=.7,fadeOut:b=.5,followMouse:m=!1,mouseInfluence:h=.2,hoverScale:g=1.2,parallax:M=.05,clickBurst:y=!1,alphaMode:T="luminance"}){let E=pr(null),C=pr(null),x=pr([0,0]),A=pr([0,0]),R=pr(0),O=pr(!1),z=pr(0);return C.current={color:e,colorTwo:t,speed:n,ringCount:i,attenuation:s,lineThickness:a,baseRadius:r,radiusStep:o,scaleRate:l,opacity:c,noiseAmount:p,rotation:u,ringGap:d,fadeIn:v,fadeOut:b,followMouse:m,mouseInfluence:h,hoverScale:g,parallax:M,clickBurst:y,alphaMode:T},rN(()=>{let F=E.current;if(!F)return;let U;try{U=new rd({alpha:!0})}catch{return}if(!U.capabilities.isWebGL2){U.dispose();return}U.setClearColor(0,0),F.appendChild(U.domElement);let G=new ac,J=new cr(-.5,.5,.5,-.5,.1,10);J.position.z=1;let H={uTime:{value:0},uAttenuation:{value:0},uResolution:{value:new te},uColor:{value:new Qt},uColorTwo:{value:new Qt},uLineThickness:{value:0},uBaseRadius:{value:0},uRadiusStep:{value:0},uScaleRate:{value:0},uRingCount:{value:0},uOpacity:{value:1},uNoiseAmount:{value:0},uRotation:{value:0},uRingGap:{value:1.6},uFadeIn:{value:.5},uFadeOut:{value:.75},uMouse:{value:new te},uMouseInfluence:{value:0},uHoverAmount:{value:0},uHoverScale:{value:1},uParallax:{value:0},uBurst:{value:0},uCoverageAlpha:{value:0}},it=new An({vertexShader:oN,fragmentShader:lN,uniforms:H,transparent:!0}),q=new Vn(new lr(1,1),it);G.add(q);let $=()=>{let Wt=F.clientWidth,vt=F.clientHeight,ae=Math.min(window.devicePixelRatio,2);U.setSize(Wt,vt),U.setPixelRatio(ae),H.uResolution.value.set(Wt*ae,vt*ae)};$(),window.addEventListener("resize",$);let et=new ResizeObserver($);et.observe(F);let wt=Wt=>{let vt=F.getBoundingClientRect();x.current[0]=(Wt.clientX-vt.left)/vt.width-.5,x.current[1]=-((Wt.clientY-vt.top)/vt.height-.5)},bt=()=>{O.current=!0},ue=()=>{O.current=!1,x.current[0]=0,x.current[1]=0},Xt=()=>{z.current=1};F.addEventListener("mousemove",wt),F.addEventListener("mouseenter",bt),F.addEventListener("mouseleave",ue),F.addEventListener("click",Xt);let Gt=0,W=!1,tt=!document.hidden,gt=0,Nt=0,mt=Wt=>{Gt=requestAnimationFrame(mt);let vt=C.current,ae=Nt===0?0:Math.min(Wt-Nt,100);Nt=Wt,gt+=ae*.001*vt.speed,A.current[0]+=(x.current[0]-A.current[0])*.08,A.current[1]+=(x.current[1]-A.current[1])*.08,R.current+=((O.current?1:0)-R.current)*.08,z.current*=.95,z.current<.001&&(z.current=0),H.uTime.value=gt,H.uAttenuation.value=vt.attenuation,H.uColor.value.set(vt.color),H.uColorTwo.value.set(vt.colorTwo),H.uLineThickness.value=vt.lineThickness,H.uBaseRadius.value=vt.baseRadius,H.uRadiusStep.value=vt.radiusStep,H.uScaleRate.value=vt.scaleRate,H.uRingCount.value=vt.ringCount,H.uOpacity.value=vt.opacity,H.uNoiseAmount.value=vt.noiseAmount,H.uRotation.value=vt.rotation*Math.PI/180,H.uRingGap.value=vt.ringGap,H.uFadeIn.value=vt.fadeIn,H.uFadeOut.value=vt.fadeOut,H.uMouse.value.set(A.current[0],A.current[1]),H.uMouseInfluence.value=vt.followMouse?vt.mouseInfluence:0,H.uHoverAmount.value=R.current,H.uHoverScale.value=vt.hoverScale,H.uParallax.value=vt.parallax,H.uBurst.value=vt.clickBurst?z.current:0,H.uCoverageAlpha.value=vt.alphaMode==="coverage"?1:0,U.render(G,J)};Gt=0;let Pt=()=>{W&&tt&&Gt===0&&(Nt=0,Gt=requestAnimationFrame(mt))},Ne=()=>{Gt!==0&&(cancelAnimationFrame(Gt),Gt=0)},Ft=new IntersectionObserver(([Wt])=>{W=Wt.isIntersecting,W?Pt():Ne()},{threshold:0});Ft.observe(F);let jt=()=>{tt=!document.hidden,tt?Pt():Ne()};return document.addEventListener("visibilitychange",jt),Pt(),()=>{Ne(),Ft.disconnect(),document.removeEventListener("visibilitychange",jt),window.removeEventListener("resize",$),et.disconnect(),F.removeEventListener("mousemove",wt),F.removeEventListener("mouseenter",bt),F.removeEventListener("mouseleave",ue),F.removeEventListener("click",Xt),F.removeChild(U.domElement),U.dispose(),it.dispose()}},[]),L0.createElement("div",{ref:E,className:"magic-rings-container",style:f>0?{filter:`blur(${f}px)`}:void 0})}var Zb=document.getElementById("lightfall-root");Zb&&(0,Kb.createRoot)(Zb).render(Jb.createElement(O0,{color:"#fc42ff",colorTwo:"#42fcff",ringCount:6,speed:1,attenuation:10,lineThickness:2,baseRadius:.35,radiusStep:.1,scaleRate:.1,opacity:1,blur:0,noiseAmount:.1,rotation:0,ringGap:1.5,fadeIn:.7,fadeOut:.5,followMouse:!1,mouseInfluence:.2,hoverScale:1.2,parallax:.05,clickBurst:!1}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{322:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("61b37f36",content,!0,{sourceMap:!1})},330:function(t,e,n){t.exports=n.p+"img/contact_qr.7f9f10c.png"},331:function(t,e,n){t.exports=n.p+"img/memoji.bd7e6dd.jpg"},332:function(t,e,n){(function(e){"object"!=typeof window?e.window=e:window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=(i=n(1))&&i.__esModule?i:{default:i},a=o.default;e.default=a,e.default=o.default,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=(i=n(2))&&i.__esModule?i:{default:i};function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"onMouseEnter",(function(){n.updateElementPosition(),n.transitions(),"function"==typeof n.callbacks.onMouseEnter&&n.callbacks.onMouseEnter(n.element)})),s(this,"onMouseMove",(function(t){null!==n.updateCall&&cancelAnimationFrame(n.updateCall),n.event=t,n.updateElementPosition(),n.updateCall=requestAnimationFrame((function(){return n.update()})),"function"==typeof n.callbacks.onMouseMove&&n.callbacks.onMouseMove(n.element)})),s(this,"onMouseLeave",(function(){n.transitions(),requestAnimationFrame((function(){return n.reset()})),"function"==typeof n.callbacks.onMouseLeave&&n.callbacks.onMouseLeave(n.element)})),s(this,"onDeviceMove",(function(t){n.event=t,n.update(),n.updateElementPosition(),n.transitions(),"function"==typeof n.callbacks.onDeviceMove&&n.callbacks.onDeviceMove(n.element)})),this.element=e,this.callbacks=o,this.settings=this.extendSettings(i),"function"==typeof this.callbacks.onInit&&this.callbacks.onInit(this.element),this.reverse=this.settings.reverse?-1:1,this.settings.shine&&this.shine(),this.element.style.transform="perspective(".concat(this.settings.perspective,"px)"),this.addEventListeners()}var e,n,i;return e=t,i=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.elements,i=e.settings,o=e.callbacks;n instanceof Node&&(n=[n]),n instanceof NodeList&&(n=[].slice.call(n));var a=!0,s=!1,r=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value;"universalTilt"in u||(u.universalTilt=new t(u,i,o))}}catch(t){s=!0,r=t}finally{try{a||null==c.return||c.return()}finally{if(s)throw r}}}}],(n=[{key:"isMobile",value:function(){return window.DeviceMotionEvent&&"ontouchstart"in document.documentElement}},{key:"addEventListeners",value:function(){var t;o.default.name.match(this.settings.exclude)||(null===(t=o.default.product)||void 0===t?void 0:t.match(this.settings.exclude))||(this.isMobile()?window.addEventListener("devicemotion",this.onDeviceMove):("element"===this.settings.base?this.base=this.element:"window"===this.settings.base&&(this.base=window),this.base.addEventListener("mouseenter",this.onMouseEnter),this.base.addEventListener("mousemove",this.onMouseMove),this.base.addEventListener("mouseleave",this.onMouseLeave)))}},{key:"removeEventListeners",value:function(){window.removeEventListener("devicemotion",this.onDeviceMove),this.base.removeEventListener("mouseenter",this.onMouseEnter),this.base.removeEventListener("mousemove",this.onMouseMove),this.base.removeEventListener("mouseleave",this.onMouseLeave)}},{key:"destroy",value:function(){clearTimeout(this.timeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),"function"==typeof this.callbacks.onDestroy&&this.callbacks.onDestroy(this.element),this.reset(),this.removeEventListeners(),this.element.universalTilt=null,delete this.element.universalTilt,this.element=null}},{key:"reset",value:function(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.settings.reset&&(this.element.style.transform="perspective(".concat(this.settings.perspective,"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")),this.settings.shine&&!this.settings["shine-save"]&&Object.assign(this.shineElement.style,{transform:"rotate(180deg) translate3d(-50%, -50%, 0)",opacity:"0"})}},{key:"getValues",value:function(){var t,e,n;this.isMobile()?(t=this.event.accelerationIncludingGravity.x/4,e=this.event.accelerationIncludingGravity.y/4,90===window.orientation?(n=(1-e)/2,e=(1+t)/2,t=n):-90===window.orientation?(n=(1+e)/2,e=(1-t)/2,t=n):0===window.orientation?(e=n=(1+e)/2,t=(1+t)/2):180===window.orientation&&(e=n=(1-e)/2,t=(1-t)/2)):"element"===this.settings.base?(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height):"window"===this.settings.base&&(t=this.event.clientX/window.innerWidth,e=this.event.clientY/window.innerHeight),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1);var i=(this.settings.max/2-t*this.settings.max).toFixed(2),o=(e*this.settings.max-this.settings.max/2).toFixed(2),a=Math.atan2(t-.5,.5-e)*(180/Math.PI);return{tiltX:this.reverse*i,tiltY:this.reverse*o,angle:a}}},{key:"updateElementPosition",value:function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}},{key:"update",value:function(){var t=this.getValues();this.element.style.transform="perspective(".concat(this.settings.perspective,"px)\n      rotateX(").concat(this.settings.disabled&&"X"===this.settings.disabled.toUpperCase()?0:t.tiltY,"deg)\n      rotateY(").concat(this.settings.disabled&&"Y"===this.settings.disabled.toUpperCase()?0:t.tiltX,"deg)\n      scale3d(").concat(this.settings.scale,", ").concat(this.settings.scale,", ").concat(this.settings.scale,")"),this.settings.shine&&Object.assign(this.shineElement.style,{transform:"rotate(".concat(t.angle,"deg) translate3d(-50%, -50%, 0)"),opacity:"".concat(this.settings["shine-opacity"])}),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}},{key:"shine",value:function(){var t=document.createElement("div"),e=document.createElement("div");t.classList.add("shine"),e.classList.add("shine-inner"),t.appendChild(e),this.element.appendChild(t),this.shineWrapper=this.element.querySelector(".shine"),this.shineElement=this.element.querySelector(".shine-inner"),Object.assign(this.shineWrapper.style,{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",overflow:"hidden"}),Object.assign(this.shineElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",width:"".concat(2*this.element.offsetWidth,"px"),height:"".concat(2*this.element.offsetWidth,"px"),transform:"rotate(180deg) translate3d(-50%, -50%, 0)","transform-origin":"0% 0%",opacity:"0"})}},{key:"transitions",value:function(){var t=this;clearTimeout(this.timeout),this.element.style.transition="all ".concat(this.settings.speed,"ms ").concat(this.settings.easing),this.settings.shine&&(this.shineElement.style.transition="opacity ".concat(this.settings.speed,"ms ").concat(this.settings.easing)),this.timeout=setTimeout((function(){t.element.style.transition="",t.settings.shine&&(t.shineElement.style.transition="")}),this.settings.speed)}},{key:"extendSettings",value:function(t){var e={base:"element",disabled:null,easing:"cubic-bezier(.03, .98, .52, .99)",exclude:null,max:35,perspective:1e3,reset:!0,reverse:!1,scale:1,shine:!1,"shine-opacity":0,"shine-save":!1,speed:300},n={};for(var i in e)if(i in t)n[i]=t[i];else if(this.element.getAttribute("data-".concat(i))){var o=this.element.getAttribute("data-".concat(i));try{n[i]=JSON.parse(o)}catch(t){n[i]=o}}else n[i]=e[i];return n}}])&&a(e.prototype,n),i&&a(e,i),t}();if(e.default=r,"undefined"!=typeof document){window.UniversalTilt=r;var l=document.querySelectorAll("[data-tilt]");l.length&&r.init({elements:l})}window.jQuery&&(window.jQuery.fn.universalTilt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.init({elements:this,settings:t.settings||{},callbacks:t.callbacks||{}})})},function(t,e,n){(function(t,i){var o;(function(){"use strict";var a={function:!0,object:!0},s=a[typeof window]&&window||this,r=a[typeof e]&&e,l=a[typeof t]&&t&&!t.nodeType&&t,c=r&&l&&"object"==typeof i&&i;!c||c.global!==c&&c.window!==c&&c.self!==c||(s=c);var u=Math.pow(2,53)-1,d=/\bOpera/,b=Object.prototype,h=b.hasOwnProperty,p=b.toString;function m(t){return(t=String(t)).charAt(0).toUpperCase()+t.slice(1)}function f(t){return t=y(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:m(t)}function w(t,e){for(var n in t)h.call(t,n)&&e(t[n],n,t)}function g(t){return null==t?m(t):p.call(t).slice(8,-1)}function v(t){return String(t).replace(/([ -])(?!$)/g,"$1?")}function x(t,e){var n=null;return function(t,e){var n=-1,i=t?t.length:0;if("number"==typeof i&&i>-1&&i<=u)for(;++n<i;)e(t[n],n,t);else w(t,e)}(t,(function(i,o){n=e(n,i,o,t)})),n}function y(t){return String(t).replace(/^ +| +$/g,"")}var S=function t(e){var n=s,i=e&&"object"==typeof e&&"String"!=g(e);i&&(n=e,e=null);var o=n.navigator||{},a=o.userAgent||"";e||(e=a);var r,l,c,u,b,h=i?!!o.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(p.toString()),m=i?"Object":"ScriptBridgingProxyObject",S=i?"Object":"Environment",C=i&&n.java?"JavaPackage":g(n.java),M=i?"Object":"RuntimeObject",_=/\bJava/.test(C)&&n.java,k=_&&g(n.environment)==S,E=_?"a":"α",O=_?"b":"β",P=n.document||{},T=n.operamini||n.opera,j=d.test(j=i&&T?T["[[Class]]"]:g(T))?j:T=null,W=e,A=[],I=null,F=e==a,B=F&&T&&"function"==typeof T.version&&T.version(),L=x([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(t,n){return t||RegExp("\\b"+(n.pattern||v(n))+"\\b","i").exec(e)&&(n.label||n)})),G=x(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],(function(t,n){return t||RegExp("\\b"+(n.pattern||v(n))+"\\b","i").exec(e)&&(n.label||n)})),R=N([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),$=x({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},(function(t,n,i){return t||(n[R]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(R)]||RegExp("\\b"+v(i)+"(?:\\b|\\w*\\d)","i").exec(e))&&i})),X=x(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],(function(t,n){var i=n.pattern||v(n);return!t&&(t=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(t=function(t,e,n){var i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return e&&n&&/^Win/i.test(t)&&!/^Windows Phone /i.test(t)&&(i=i[/[\d.]+$/.exec(t)])&&(t="Windows "+i),t=String(t),e&&n&&(t=t.replace(RegExp(e,"i"),n)),f(t.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(t,i,n.label||n)),t}));function N(t){return x(t,(function(t,n){var i=n.pattern||v(n);return!t&&(t=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(n.label&&!RegExp(i,"i").test(n.label)?n.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),n=n.label||n,t=f(t[0].replace(RegExp(i,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),t}))}if(L&&(L=[L]),$&&!R&&(R=N([$])),(r=/\bGoogle TV\b/.exec(R))&&(R=r[0]),/\bSimulator\b/i.test(e)&&(R=(R?R+" ":"")+"Simulator"),"Opera Mini"==G&&/\bOPiOS\b/.test(e)&&A.push("running in Turbo/Uncompressed mode"),"IE"==G&&/\blike iPhone OS\b/.test(e)?($=(r=t(e.replace(/like iPhone OS/,""))).manufacturer,R=r.product):/^iP/.test(R)?(G||(G="Safari"),X="iOS"+((r=/ OS ([\d_]+)/i.exec(e))?" "+r[1].replace(/_/g,"."):"")):"Konqueror"!=G||/buntu/i.test(X)?$&&"Google"!=$&&(/Chrome/.test(G)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(R))||/\bAndroid\b/.test(X)&&/^Chrome/.test(G)&&/\bVersion\//i.test(e)?(G="Android Browser",X=/\bAndroid\b/.test(X)?X:"Android"):"Silk"==G?(/\bMobi/i.test(e)||(X="Android",A.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&A.unshift("accelerated")):"PaleMoon"==G&&(r=/\bFirefox\/([\d.]+)\b/.exec(e))?A.push("identifying as Firefox "+r[1]):"Firefox"==G&&(r=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(X||(X="Firefox OS"),R||(R=r[1])):!G||(r=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(G))?(G&&!R&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(r+"/")+8))&&(G=null),(r=R||$||X)&&(R||$||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(X))&&(G=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(X)?X:r)+" Browser")):"Electron"==G&&(r=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&A.push("Chromium "+r):X="Kubuntu",B||(B=x(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",v(G),"(?:Firefox|Minefield|NetFront)"],(function(t,n){return t||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null}))),(r=("iCab"==L&&parseFloat(B)>3?"WebKit":/\bOpera\b/.test(G)&&(/\bOPR\b/.test(e)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(L)&&"WebKit"||!L&&/\bMSIE\b/i.test(e)&&("Mac OS"==X?"Tasman":"Trident")||"WebKit"==L&&/\bPlayStation\b(?! Vita\b)/i.test(G)&&"NetFront")&&(L=[r]),"IE"==G&&(r=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(G+=" Mobile",X="Windows Phone "+(/\+$/.test(r)?r:r+".x"),A.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(G="IE Mobile",X="Windows Phone 8.x",A.unshift("desktop mode"),B||(B=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=G&&"Trident"==L&&(r=/\brv:([\d.]+)/.exec(e))&&(G&&A.push("identifying as "+G+(B?" "+B:"")),G="IE",B=r[1]),F){if(u="global",b=null!=(c=n)?typeof c[u]:"number",/^(?:boolean|number|string|undefined)$/.test(b)||"object"==b&&!c[u])g(r=n.runtime)==m?(G="Adobe AIR",X=r.flash.system.Capabilities.os):g(r=n.phantom)==M?(G="PhantomJS",B=(r=r.version||null)&&r.major+"."+r.minor+"."+r.patch):"number"==typeof P.documentMode&&(r=/\bTrident\/(\d+)/i.exec(e))?(B=[B,P.documentMode],(r=+r[1]+4)!=B[1]&&(A.push("IE "+B[1]+" mode"),L&&(L[1]=""),B[1]=r),B="IE"==G?String(B[1].toFixed(1)):B[0]):"number"==typeof P.documentMode&&/^(?:Chrome|Firefox)\b/.test(G)&&(A.push("masking as "+G+" "+B),G="IE",B="11.0",L=["Trident"],X="Windows");else if(_&&(W=(r=_.lang.System).getProperty("os.arch"),X=X||r.getProperty("os.name")+" "+r.getProperty("os.version")),k){try{B=n.require("ringo/engine").version.join("."),G="RingoJS"}catch(t){(r=n.system)&&r.global.system==n.system&&(G="Narwhal",X||(X=r[0].os||null))}G||(G="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(r=n.process)&&("object"==typeof r.versions&&("string"==typeof r.versions.electron?(A.push("Node "+r.versions.node),G="Electron",B=r.versions.electron):"string"==typeof r.versions.nw&&(A.push("Chromium "+B,"Node "+r.versions.node),G="NW.js",B=r.versions.nw)),G||(G="Node.js",W=r.arch,X=r.platform,B=(B=/[\d.]+/.exec(r.version))?B[0]:null));X=X&&f(X)}if(B&&(r=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(F&&o.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(I=/b/i.test(r)?"beta":"alpha",B=B.replace(RegExp(r+"\\+?$"),"")+("beta"==I?O:E)+(/\d+\+?/.exec(r)||"")),"Fennec"==G||"Firefox"==G&&/\b(?:Android|Firefox OS)\b/.test(X))G="Firefox Mobile";else if("Maxthon"==G&&B)B=B.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(R))"Xbox 360"==R&&(X=null),"Xbox 360"==R&&/\bIEMobile\b/.test(e)&&A.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(G)&&(!G||R||/Browser|Mobi/.test(G))||"Windows CE"!=X&&!/Mobi/i.test(e))if("IE"==G&&F)try{null===n.external&&A.unshift("platform preview")}catch(t){A.unshift("embedded")}else(/\bBlackBerry\b/.test(R)||/\bBB10\b/.test(e))&&(r=(RegExp(R.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||B)?(X=((r=[r,/BB10/.test(e)])[1]?(R=null,$="BlackBerry"):"Device Software")+" "+r[0],B=null):this!=w&&"Wii"!=R&&(F&&T||/Opera/.test(G)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==G&&/\bOS X (?:\d+\.){2,}/.test(X)||"IE"==G&&(X&&!/^Win/.test(X)&&B>5.5||/\bWindows XP\b/.test(X)&&B>8||8==B&&!/\bTrident\b/.test(e)))&&!d.test(r=t.call(w,e.replace(d,"")+";"))&&r.name&&(r="ing as "+r.name+((r=r.version)?" "+r:""),d.test(G)?(/\bIE\b/.test(r)&&"Mac OS"==X&&(X=null),r="identify"+r):(r="mask"+r,G=j?f(j.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(r)&&(X=null),F||(B=null)),L=["Presto"],A.push(r));else G+=" Mobile";(r=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(r=[parseFloat(r.replace(/\.(\d)$/,".0$1")),r],"Safari"==G&&"+"==r[1].slice(-1)?(G="WebKit Nightly",I="alpha",B=r[1].slice(0,-1)):B!=r[1]&&B!=(r[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(B=null),r[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==r[0]&&537.36==r[2]&&parseFloat(r[1])>=28&&"WebKit"==L&&(L=["Blink"]),F&&(h||r[1])?(L&&(L[1]="like Chrome"),r=r[1]||((r=r[0])<530?1:r<532?2:r<532.05?3:r<533?4:r<534.03?5:r<534.07?6:r<534.1?7:r<534.13?8:r<534.16?9:r<534.24?10:r<534.3?11:r<535.01?12:r<535.02?"13+":r<535.07?15:r<535.11?16:r<535.19?17:r<536.05?18:r<536.1?19:r<537.01?20:r<537.11?"21+":r<537.13?23:r<537.18?24:r<537.24?25:r<537.36?26:"Blink"!=L?"27":"28")):(L&&(L[1]="like Safari"),r=(r=r[0])<400?1:r<500?2:r<526?3:r<533?4:r<534?"4+":r<535?5:r<537?6:r<538?7:r<601?8:"8"),L&&(L[1]+=" "+(r+="number"==typeof r?".x":/[.+]/.test(r)?"":"+")),"Safari"==G&&(!B||parseInt(B)>45)&&(B=r)),"Opera"==G&&(r=/\bzbov|zvav$/.exec(X))?(G+=" ",A.unshift("desktop mode"),"zvav"==r?(G+="Mini",B=null):G+="Mobile",X=X.replace(RegExp(" *"+r+"$"),"")):"Safari"==G&&/\bChrome\b/.exec(L&&L[1])&&(A.unshift("desktop mode"),G="Chrome Mobile",B=null,/\bOS X\b/.test(X)?($="Apple",X="iOS 4.3+"):X=null),B&&0==B.indexOf(r=/[\d.]+$/.exec(X))&&e.indexOf("/"+r+"-")>-1&&(X=y(X.replace(r,""))),L&&!/\b(?:Avant|Nook)\b/.test(G)&&(/Browser|Lunascape|Maxthon/.test(G)||"Safari"!=G&&/^iOS/.test(X)&&/\bSafari\b/.test(L[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(G)&&L[1])&&(r=L[L.length-1])&&A.push(r),A.length&&(A=["("+A.join("; ")+")"]),$&&R&&R.indexOf($)<0&&A.push("on "+$),R&&A.push((/^on /.test(A[A.length-1])?"":"on ")+R),X&&(r=/ ([\d.+]+)$/.exec(X),l=r&&"/"==X.charAt(X.length-r[0].length-1),X={architecture:32,family:r&&!l?X.replace(r[0],""):X,version:r?r[1]:null,toString:function(){var t=this.version;return this.family+(t&&!l?" "+t:"")+(64==this.architecture?" 64-bit":"")}}),(r=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W))&&!/\bi686\b/i.test(W)?(X&&(X.architecture=64,X.family=X.family.replace(RegExp(" *"+r),"")),G&&(/\bWOW64\b/i.test(e)||F&&/\w(?:86|32)$/.test(o.cpuClass||o.platform)&&!/\bWin64; x64\b/i.test(e))&&A.unshift("32-bit")):X&&/^OS X/.test(X.family)&&"Chrome"==G&&parseFloat(B)>=39&&(X.architecture=64),e||(e=null);var z={};return z.description=e,z.layout=L&&L[0],z.manufacturer=$,z.name=G,z.prerelease=I,z.product=R,z.ua=e,z.version=G&&B,z.os=X||{architecture:null,family:null,version:null,toString:function(){return"null"}},z.parse=t,z.toString=function(){return this.description||""},z.version&&A.unshift(B),z.name&&A.unshift(G),X&&G&&(X!=String(X).split(" ")[0]||X!=G.split(" ")[0]&&!R)&&A.push(R?"("+X+")":"on "+X),A.length&&(z.description=A.join(" ")),z}();s.platform=S,void 0===(o=function(){return S}.call(e,n,e,t))||(t.exports=o)}).call(this)}).call(this,n(3)(t),n(4))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])}).call(this,n(48))},333:function(t,e,n){"use strict";n(322)},334:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nbody[data-v-3e4a7fdc]{\n  overflow:hidden\n}\n.body-bg[data-v-3e4a7fdc]{\n  background-color:#5f72be\n}\n.card-container[data-v-3e4a7fdc]{\n  transform-style:preserve-3d\n}\n.card-item[data-v-3e4a7fdc]{\n  transform:translateZ(50px)\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},351:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tw-mt-12 card-item"},[n("div",{staticClass:"card tw-p-4 tw-rounded-2xl tw-grid tw-gap-4 md:tw-grid-cols-2 tw-shadow-2xl"},[n("div",{staticClass:"tw-w-full tw-rounded-2xl tw-shadow-2xl"},[n("img",{staticClass:"tw-rounded-2xl tw-object-cover",attrs:{src:"https://pbs.twimg.com/media/ELBplesUcAA7lTi?format=jpg&name=large",alt:"Loc's"}})]),t._v(" "),n("div",{staticClass:"tw-w-full"},[n("h3",{staticClass:"tw-text-white tw-font-bold tw-text-lg md:tw-text-xl"},[t._v("\n              👋 Hi there!"),n("span",{staticClass:"blink_me"},[t._v("_")])]),t._v(" "),n("p",{staticClass:"tw-text-gray-100 tw-pt-2 sm:tw-text-xl"},[t._v("\n              I'm Tan Loc and let's get to know each other.\n            ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl card-item"},[n("div",{staticClass:"tw-p-1"},[n("ul",{staticClass:"tw-text-gray-300 tw-font-light"},[n("li",[t._v("❤️ "),n("span",[t._v("Coding and Tech stuff")]),t._v(".")]),t._v(" "),n("li",[t._v("🏠 "),n("span",[t._v("Ho Chi Minh city, Viet Nam")]),t._v(".")]),t._v(" "),n("li",[t._v("\n              ☕\n              "),n("span",[t._v("Love iced tea and coffee with a bit considered milk")]),t._v(".\n            ")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card tw-p-4 tw-rounded-2xl tw-grid md:tw-grid-cols-2 tw-gap-4"},[o("div",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-w-full card-item"},[o("img",{staticClass:"tw-object-cover tw-rounded-2xl",attrs:{src:n(330)}})]),t._v(" "),o("div",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-w-full card-item"},[o("img",{staticClass:"tw-object-cover tw-rounded-2xl",attrs:{src:n(331)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"tw-max-w-lg tw-mx-auto tw-flex tw-justify-center tw-text-white tw-shadow-2xl card-item"},[n("a",{staticClass:"hover:tw-underline",attrs:{href:"#contact"}},[t._v("Contact")]),t._v(" "),n("span",{staticClass:"tw-mx-3"},[t._v("•")]),t._v(" "),n("a",{staticClass:"hover:tw-underline",attrs:{href:"#"}},[t._v("Privacy")])])}],r=n(332),l=n.n(r),c={name:"Contact",layout:"_blank",head:{title:"Tan Loc",meta:[{hid:"description",name:"description",content:"Tan Loc's contact page"},{name:"theme-color",content:"#5f72be",media:"(prefers-color-scheme: light)"},{name:"theme-color",content:"#5f72be",media:"(prefers-color-scheme: dark)"},{name:"robots",content:"noindex, follow, noarchive"}]},mounted:function(){var t=document.querySelectorAll(".tilt");l.a.init({elements:t,settings:{max:5,reverse:!0},callbacks:{}})}},d=(n(333),n(16)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{staticClass:"body-bg tw-min-h-screen tw-pt-12 md:tw-pt-20 tw-pb-6 tw-px-2 md:tw-px-0"},[n("div",{attrs:{id:"container"}},[n("main",{staticClass:"tw-max-w-lg tw-mx-auto tw-p-6 md:tw-p-8 tw-my-10 tw-rounded-2xl tw-shadow-2xl card tilt card-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"tw-mt-5"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"tel:+84-559-092-849",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fas","phone-alt"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Call me")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://zalo.me/0906828619",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fas","comment"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Zalo")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://facebook.com/ngtnloc",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Facebook")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://www.instagram.com/tnloc/",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Instagram")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://twitter.com/cul0x",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Twitter")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://join.skype.com/invite/onZFhx2X9Vbf",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","skype"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Skype")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://t.me/cul0x",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","telegram"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Telegram")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"https://github.com/tanloc0598",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2",attrs:{span:""}},[t._v("Github")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 card-item",attrs:{href:"mailto:tnloc@outlook.com",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("Email")])]),t._v(" "),n("a",{staticClass:"tw-mt-5 tw-text-sm md:tw-text-lg card tw-p-4 tw-rounded-2xl tw-shadow-2xl tw-text-gray-300 tw-border-1 card-item",attrs:{href:"https://www.linkedin.com/in/nguyen-tan-loc-46862a125/",target:"_blank"}},[n("span",{staticClass:"tw-text-center"},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"md",color:"white"}})],1),t._v(" "),n("span",{staticClass:"tw-col-span-2"},[t._v("LinkedIn")])]),t._v(" "),t._m(2)])])])]),t._v(" "),t._m(3)])}),o,!1,null,"3e4a7fdc",null);e.default=component.exports;installComponents(component,{Footer:n(214).default})}}]);
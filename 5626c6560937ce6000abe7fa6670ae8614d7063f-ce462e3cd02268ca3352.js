(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[943],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,o,a,i,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),x="cssText",w="href",A="http-equiv",O="innerHTML",T="itemprop",C="name",S="property",j="rel",I="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",M="defer",L="encodeSpecialCharacters",_="onChangeClientState",D="titleTemplate",R=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),n=Q(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,k);return t||r||void 0},V=function(e){return Q(e,_)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===j&&"canonical"===e[n].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==x&&c!==T||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=h()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,d);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,a),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(Z):n.getAttribute(Z)!==i.join(",")&&n.setAttribute(Z,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Z,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,o=fe(n,r),[p.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+F(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,o,r),link:de(v.LINK,a,r),meta:de(v.META,i,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,u,r),style:de(v.STYLE,l,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=s()((function(e){return{baseTag:$([w,P],e),bodyAttributes:W(y,e),defer:Q(e,M),encode:Q(e,L),htmlAttributes:W(b,e),linkTags:J(v.LINK,[j,w],e),metaTags:J(v.META,[C,E,A,S,T],e),noscriptTags:J(v.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:J(v.SCRIPT,[I,O],e),styleTags:J(v.STYLE,[x],e),title:K(e),titleAttributes:W(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=me,i=a=function(e){function t(){return U(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return q({},o,((t={})[r.type]=i,t.titleAttributes=q({},a),t));case v.BODY:return q({},o,{bodyAttributes:q({},a)});case v.HTML:return q({},o,{htmlAttributes:q({},a)})}return q({},o,((n={})[r.type]=q({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(G(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.Z=he},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},2390:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(5444),a=function(e){var t=e.to,n=e.children;return r.createElement(o.rU,{activeClassName:"nav-item-active",to:t},n)},i=function(){return r.createElement("nav",null,r.createElement("ul",{className:"nav-container"},r.createElement("li",{className:"nav-item"},r.createElement(a,{to:"/tags"},"tags")),r.createElement("li",{className:"nav-item"},r.createElement(a,{to:"/"},"posts")),r.createElement("li",{className:"nav-item-hidden"},r.createElement(a,{to:"/category"},"category"))))},c=n(4213),u=function(e){var t=e.siteMetadata;return r.createElement("section",{className:"contact"},r.createElement("ul",null,t.social.github&&r.createElement("li",null,r.createElement("a",{href:"https://github.com/"+t.social.github},r.createElement("i",{className:"fa fa-github","aria-hidden":"true"}))),t.social.twitter&&r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/"+t.social.twitter},r.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),t.social.stackoverflow&&r.createElement("li",null,r.createElement("a",{href:"mailto:"+t.social.stackoverflow},r.createElement("i",{className:"fa fa-stack-overflow","aria-hidden":"true"}))),t.social.email&&r.createElement("li",null,r.createElement("a",{href:"mailto:"+t.social.email},r.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}))),r.createElement("li",null,r.createElement("a",{href:"https://www.buymeacoffee.com/seunghee",target:"_blank"},r.createElement("img",{src:"/buy-me-a-coffee.png",style:{width:"18px",height:"18px",display:"block",margin:"0 auto"}})))))},l=function(){return r.createElement("section",{className:"contact"},r.createElement("h3",{className:"contact-title"},"Certificate"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://developers.google.com/widevine/drm/overview",target:"_blank"},r.createElement("img",{src:"/wv.icon.64x64_72.png",style:{width:"24px",height:"24px",display:"block",margin:"0 auto"}}))),r.createElement("li",null,r.createElement("a",{href:"https://www.credly.com/badges/fcd5e0eb-0e6a-4f02-9e3c-f570357e5867/public_url",target:"_blank"},r.createElement("img",{src:"/akamai-web-performance-and-offload.png",style:{width:"24px",height:"24px",display:"block",margin:"0 auto"}})))))},s=function(e){var t=e.siteMetadata,n=e.mainCategoryGroup,o=e.subCategoryGroup;return r.createElement("aside",{className:"sidebar"},r.createElement("header",null,r.createElement("div",{className:"about"},r.createElement("p",null,t.description),r.createElement("br",null),r.createElement(u,{siteMetadata:t})),r.createElement("div",{className:"content-menu"},r.createElement(l,null),r.createElement(c.Z,{mainCategoryGroup:n,subCategoryGroup:o}))),r.createElement("footer",null,r.createElement("div",{className:"copyright"},r.createElement("font",{size:"5"},"©")," ",t.author,". all rights reserved.")))},f=n(5414),d=function(e){var t=e.children;return r.createElement(o.i1,{query:"3427181268",render:function(e){return r.createElement("div",{className:"wrapper"},r.createElement(f.Z,null,r.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2695370852236805",crossOrigin:"anonymous"})),r.createElement("header",null,r.createElement(i,null)),r.createElement("main",null,r.createElement(s,{siteMetadata:e.site.siteMetadata,mainCategoryGroup:e.mainCategoryGroup.group,subCategoryGroup:e.subCategoryGroup.group}),r.createElement("div",{className:"content-box clearfix"},t)),r.createElement("footer",null))}})}},4213:function(e,t,n){"use strict";n.d(t,{Z:function(){return te}});var r=n(1804),o=n.n(r),a=n(7294),i=n(5444);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?b(e):t}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function e(t){var n=this,r=t.expanded,o=void 0===r?[]:r,a=t.allowMultipleExpanded,i=void 0!==a&&a,u=t.allowZeroExpanded,l=void 0!==u&&u;c(this,e),s(this,"expanded",void 0),s(this,"allowMultipleExpanded",void 0),s(this,"allowZeroExpanded",void 0),s(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(x(n.expanded),[e]):[e]})})),s(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),s(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),s(this,"getPanelAttributes",(function(e,t){var r=null!=t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),s(this,"getHeadingAttributes",(function(){return{role:"heading"}})),s(this,"getButtonAttributes",(function(e,t){var r=null!=t?t:n.isItemExpanded(e),o=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":o,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),s(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),s(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),s(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=o,this.allowMultipleExpanded=i,this.allowZeroExpanded=l},T=(0,a.createContext)(null),C=function(e){p(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(b(e=t.call.apply(t,[this].concat(o))),"state",new O({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),s(b(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),s(b(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),s(b(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),s(b(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),s(b(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),s(b(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return l(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return(0,a.createElement)(T.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(a.PureComponent);s(C,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var S,j=function(e){p(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(b(e=t.call.apply(t,[this].concat(o))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return l(n,[{key:"render",value:function(){return(0,a.createElement)(T.Consumer,null,this.renderChildren)}}]),n}(a.PureComponent),I=function(e){var t=e.className,n=void 0===t?"accordion":t,r=e.allowMultipleExpanded,o=e.allowZeroExpanded,i=e.onChange,c=e.preExpanded,u=y(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return(0,a.createElement)(C,{preExpanded:c,allowMultipleExpanded:r,allowZeroExpanded:o,onChange:i},(0,a.createElement)("div",f({"data-accordion-component":"Accordion",className:n},u)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(S||(S={}));var P=S,N=0;var k=/[\u0009\u000a\u000c\u000d\u0020]/g;function M(e){return""!==e&&!k.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var L=(0,a.createContext)(null),_=function(e){var t=e.children,n=e.uuid,r=e.accordionContext,o=e.dangerouslySetExpanded,i=function(){r.toggleExpanded(n)},c=function(e){var r=null!=o?o:e.isItemExpanded(n),c=e.isItemDisabled(n),u=e.getPanelAttributes(n,o),l=e.getHeadingAttributes(n),s=e.getButtonAttributes(n,o);return(0,a.createElement)(L.Provider,{value:{uuid:n,expanded:r,disabled:c,toggleExpanded:i,panelAttributes:u,headingAttributes:l,buttonAttributes:s}},t)};return(0,a.createElement)(j,null,c)},D=function(e){return(0,a.createElement)(j,null,(function(t){return(0,a.createElement)(_,f({},e,{accordionContext:t}))}))},R=function(e){var t=e.children,n=function(e){return e?t(e):null};return(0,a.createElement)(L.Consumer,null,n)},B=function(e){var t,n=e.uuid,r=e.dangerouslySetExpanded,o=e.className,i=void 0===o?"accordion__item":o,c=e.activeClassName,u=y(e,["uuid","dangerouslySetExpanded","className","activeClassName"]),l=E((0,a.useState)((t=N,N+=1,"raa-".concat(t))),1)[0],s=n||l,d=function(e){var t=e.expanded&&c?c:i;return(0,a.createElement)("div",f({"data-accordion-component":"AccordionItem",className:t},u))};return M(s),u.id&&M(u.id),(0,a.createElement)(D,{uuid:s,dangerouslySetExpanded:r},(0,a.createElement)(R,null,d))};function Z(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:Z(e.parentElement))}function H(e){var t=Z(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}B.displayName=P.AccordionItem;var U="End",z="Enter",q="Home",G=" ",Y="Spacebar",F="ArrowUp",K="ArrowDown",V="ArrowLeft",W="ArrowRight",$=function(e){var t=e.toggleExpanded,n=e.className,r=void 0===n?"accordion__button":n,o=y(e,["toggleExpanded","className"]);return o.id&&M(o.id),(0,a.createElement)("div",f({className:r},o,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n,r,o=e.key;if(o!==z&&o!==G&&o!==Y||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(o){case q:e.preventDefault(),n=e.target,(r=(H(n)||[])[0])&&r.focus();break;case U:e.preventDefault(),function(e){var t=H(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case V:case F:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case W:case K:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},J=function(e){return(0,a.createElement)(R,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return(0,a.createElement)($,f({toggleExpanded:n},e,r))}))},Q=function(e){p(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(b(e=t.call.apply(t,[this].concat(o))),"ref",void 0),s(b(e),"setRef",(function(t){e.ref=t})),e}return l(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return(0,a.createElement)("div",f({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),n}(a.PureComponent);s(Q,"defaultProps",{className:"accordion__heading","aria-level":3});var X=function(e){return(0,a.createElement)(R,null,(function(t){var n=t.headingAttributes;return e.id&&M(e.id),(0,a.createElement)(Q,f({},e,n))}))};X.displayName=P.AccordionItemHeading;var ee=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.id,o=y(e,["className","id"]),i=function(e){var t=e.panelAttributes;return r&&M(r),(0,a.createElement)("div",f({"data-accordion-component":"AccordionItemPanel",className:n},o,t))};return(0,a.createElement)(R,null,i)},te=function(e){var t=e.mainCategoryGroup,n=e.subCategoryGroup,r={};t.forEach((function(e){r[e.mainCategory.replace(/\s/g,"_")]=[]})),n.forEach((function(e){r[e.nodes[0].frontmatter.category.replace(/\s/g,"_")].push(e.subCategory)}));var c=[];return Object.entries(r).map((function(e){var t=e[0];e[1];return c.push(t),c})),a.createElement("section",{className:"contact"},a.createElement("h3",{className:"contact-title"},"Category"),a.createElement(I,{allowMultipleExpanded:"true",allowZeroExpanded:"true",preExpanded:c},Object.entries(r).map((function(e){var t=e[0],n=e[1];return a.createElement(B,{key:t,uuid:t},a.createElement(X,null,a.createElement(J,{className:"main-menu"},a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),"  ",t)),n.map((function(e){return a.createElement(ee,{className:"sub-menu",key:e}," . ",a.createElement(i.rU,{to:"/"+o()(t)+"/"+o()(e)+"/"},e))})))}))))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2663:function(e){e.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),o=n(9932),a=n(1469),i=n(3448),c=r?r.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),o=n(3816),a=n(8748),i=RegExp("['’]","g");e.exports=function(e){return function(t){return r(a(o(t).replace(i,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+o+"]",i="\\d+",c="[\\u2700-\\u27bf]",u="["+n+"]",l="[^\\ud800-\\udfff"+o+i+t+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",p="(?:"+u+"|"+l+")",m="(?:"+d+"|"+l+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",v=g+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")"+g+b+")*"),E="(?:"+[c,s,f].join("|")+")"+v,x=RegExp([d+"?"+u+"+"+h+"(?="+[a,d,"$"].join("|")+")",m+"+"+y+"(?="+[a,d+p,"$"].join("|")+")",d+"?"+p+"+"+h,d+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,E].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},3816:function(e,t,n){var r=n(9389),o=n(9833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(a,r).replace(i,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),o=n(3157),a=n(9833),i=n(2757);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?o(e)?i(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=5626c6560937ce6000abe7fa6670ae8614d7063f-ce462e3cd02268ca3352.js.map
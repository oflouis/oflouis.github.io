(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[81],{3048:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7294),l=(r=o)&&r.__esModule?r:{default:r};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(l.default.Component);t.default=i},7388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(7294)),o=l(n(5697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return a.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(a.default.Component);t.default=i,i.propTypes={className:o.default.string,style:o.default.object,client:o.default.string.isRequired,slot:o.default.string.isRequired,layout:o.default.string,layoutKey:o.default.string,format:o.default.string,responsive:o.default.string},i.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},3911:function(e,t,n){"use strict";var r=o(n(7388)),a=o(n(3048));function o(e){return e&&e.__esModule?e:{default:e}}var l={Google:r.default,Baidu:a.default};t.Z=l},6367:function(e,t,n){"use strict";var r=n(7294),a=n(3911);t.Z=function(){return r.createElement(a.Z.Google,{client:"ca-pub-2695370852236805",slot:"4419929143",className:"adsbygoogle",style:{display:"block"},format:"autorelaxed"})}},9447:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(5444),o=n(2390),l=n(6367);t.default=function(e){var t=e.pageContext,n=e.data,u=t.tag,s=n.allMarkdownRemark,i=s.edges,c=s.totalCount,f=c+" post"+(1===c?"":"s")+' tagged with "'+u+'"';return r.createElement(o.Z,null,r.createElement("div",{className:"blog-tags"},r.createElement("h1",null,f),r.createElement("br",null),r.createElement("ul",{className:"tag-list"},i.map((function(e){var t=e.node,n=t.frontmatter,o=n.title,l=n.date,u=t.fields.slug;return r.createElement("div",null,r.createElement("span",{key:u},r.createElement(a.rU,{to:u},o),r.createElement("small",null,r.createElement("span",null,"  | ",l))))}))),r.createElement("span",null,r.createElement(a.rU,{to:"/tags"},"← All tags")),r.createElement("div",{className:"tags-bottom-ads"},r.createElement(l.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-6593455de5a81b235101.js.map
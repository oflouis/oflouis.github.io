(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[942],{9584:function(e,t,a){"use strict";a.r(t);var r=a(3552),n=a(7294),s=a(5444),l=a(2390),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,r=t.numPages,m=t.basePath,c=1===a,o=a===r,i=a-1==1?"/"+m+"/":"/"+m+"/"+(a-1),p="/"+m+"/"+(a+1);return n.createElement(l.Z,null,e.map((function(e){var t=e.node;return n.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&n.createElement(s.rU,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),n.createElement("div",{className:"post-content"},n.createElement("h2",{className:"post-title"},n.createElement(s.rU,{to:t.fields.slug},t.frontmatter.title)),n.createElement("p",{className:"post-excerpt-multi-line"},t.excerpt),n.createElement("span",{className:"post-date"},t.frontmatter.updated,"  — "),n.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})),n.createElement("div",{className:"pagination-container"},n.createElement("nav",{className:"pagination",role:"pagination"},!c&&n.createElement(s.rU,{to:i,rel:"prev",className:"newer-posts"},"← Previous Page |"),n.createElement("span",{className:"page-number"},"Page ",a," of ",r),!o&&n.createElement(s.rU,{to:p,rel:"next",className:"older-posts"},"| Next Page →"))))},t}(n.Component);t.default=m}}]);
//# sourceMappingURL=component---src-templates-post-category-list-template-js-963865b1859522a2fb3a.js.map
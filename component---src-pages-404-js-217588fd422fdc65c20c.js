(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(172),c=a(174),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=l;var u="1097489062"},170:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},171:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),s=a(40),c=a.n(s);a.d(t,"a",function(){return c.a});a(170);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(171);t.a=function(e){var t=e.title,a=e.children,n=r.a.useState(!1),o=n[0],s=n[1];return r.a.createElement("div",{className:"site-wrapper "+(o?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!o)}},r.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("div",{className:"hamburger-inner"})))),r.a.createElement("nav",{id:"swup",class:"site-head-left"},r.a.createElement("ul",{className:"nav",role:"menu"},r.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},r.a.createElement(i.a,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-about",role:"menuitem"},r.a.createElement(i.a,{to:"/about"},"About")))),r.a.createElement("div",{className:"site-head-center"},r.a.createElement(i.a,{className:"site-head-logo",to:"/"},"My Action Diary")),r.a.createElement("div",{className:"site-head-right"},r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.instagram.com/myactiondiary/",title:"Instagram",target:"_blank",rel:"noopener noreferrer"},"Instagram"),r.a.createElement("a",{href:"https://www.facebook.com/myactiondiary/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),r.a.createElement(i.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"))))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},a)),r.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",r.a.createElement(i.a,{to:"/"},t)," All rights reserved."," ",r.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"})))}},173:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),s=a(64),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),o=a(5),s=a.n(o),c=a(177),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},175:function(e){e.exports={data:{site:{siteMetadata:{title:"My Action Diary",description:"Dear Action Diary...",author:"Jia Hu"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-217588fd422fdc65c20c.js.map
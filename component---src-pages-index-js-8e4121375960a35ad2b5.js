(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(A,e,a){"use strict";a.r(e);a(41);var t=a(186),n=a(0),r=a.n(n),i=a(171),s=a(172),o=a(174),c=function(A){return r.a.createElement("article",{className:"post-card "+(A.count%3==0&&"post-card-large")+" "+A.postClass+" "+(A.node.frontmatter.thumbnail?"with-image":"no-image"),style:A.node.frontmatter.thumbnail&&{backgroundImage:"url("+A.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},r.a.createElement(i.a,{to:A.node.fields.slug,className:"post-card-link"},r.a.createElement("div",{className:"post-card-content"},r.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug))))},l=(a(162),a(163),function(A,e){var a=A.data,t=a.site.siteMetadata.title,n=a.allMarkdownRemark.edges,i=0;return r.a.createElement(s.a,{title:t},r.a.createElement(o.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.site.siteMetadata.description&&r.a.createElement("header",{className:"page-head"},r.a.createElement("h2",{className:"page-head-title"},a.site.siteMetadata.description)),r.a.createElement("div",{className:"post-feed"},n.map(function(A){var e=A.node;return i++,r.a.createElement(c,{key:e.fields.slug,count:i,node:e,postClass:"post"})})))});e.default=function(A){return r.a.createElement(i.b,{query:"3399224544",render:function(e){return r.a.createElement(l,Object.assign({location:A.location,props:!0,data:e},A))},data:t})}},170:function(A,e,a){var t;A.exports=(t=a(173))&&t.default||t},171:function(A,e,a){"use strict";a.d(e,"b",function(){return d});var t=a(0),n=a.n(t),r=a(5),i=a.n(r),s=a(40),o=a.n(s);a.d(e,"a",function(){return o.a});a(170);var c=n.a.createContext({});function l(A){var e=A.staticQueryData,a=A.data,t=A.query,r=A.render,i=a?a.data:e[t]&&e[t].data;return n.a.createElement(n.a.Fragment,null,i&&r(i),!i&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(A){var e=A.data,a=A.query,t=A.render,r=A.children;return n.a.createElement(c.Consumer,null,function(A){return n.a.createElement(l,{data:e,query:a,render:t||r,staticQueryData:A})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},172:function(A,e,a){"use strict";var t=a(0),n=a.n(t),r=a(171);e.a=function(A){var e=A.title,a=A.children,t=n.a.useState(!1),i=t[0],s=t[1];return n.a.createElement("div",{className:"site-wrapper "+(i?"site-head-open":"")},n.a.createElement("header",{className:"site-head"},n.a.createElement("div",{className:"site-head-container"},n.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!i)}},n.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},n.a.createElement("div",{className:"hamburger-box"},n.a.createElement("div",{className:"hamburger-inner"})))),n.a.createElement("nav",{id:"swup",class:"site-head-left"},n.a.createElement("ul",{className:"nav",role:"menu"},n.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},n.a.createElement(r.a,{to:"/"},"Home")),n.a.createElement("li",{className:"nav-about",role:"menuitem"},n.a.createElement(r.a,{to:"/about"},"About")))),n.a.createElement("div",{className:"site-head-center"},n.a.createElement(r.a,{className:"site-head-logo",to:"/"})),n.a.createElement("div",{className:"site-head-right"},n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.instagram.com/myactiondiary/",title:"Instagram",target:"_blank",rel:"noopener noreferrer"},"Instagram"),n.a.createElement("a",{href:"https://www.facebook.com/myactiondiary/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),n.a.createElement(r.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"))))),n.a.createElement("main",{id:"site-main",className:"site-main"},n.a.createElement("div",{id:"swup",className:"transition-fade"},a)),n.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",n.a.createElement(r.a,{to:"/"},e)," All rights reserved."," ",n.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"})))}},173:function(A,e,a){"use strict";a.r(e);a(41);var t=a(0),n=a.n(t),r=a(5),i=a.n(r),s=a(64),o=function(A){var e=A.location,a=A.pageResources;return a?n.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=o},174:function(A,e,a){"use strict";var t=a(175),n=a(0),r=a.n(n),i=a(5),s=a.n(i),o=a(177),c=a.n(o);function l(A){var e=A.description,a=A.lang,n=A.meta,i=A.keywords,s=A.title,o=t.data.site,l=e||o.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l},175:function(A){A.exports={data:{site:{siteMetadata:{title:"My Action Diary",description:"Dear Action Diary...",author:"Jia Hu"}}}}},186:function(A){A.exports={data:{site:{siteMetadata:{title:"My Action Diary",description:"Dear Action Diary..."}},allMarkdownRemark:{edges:[{node:{excerpt:"A wallpaper series using shapes and light by Jean-Marc DenisI used a poly reduction on the mesh as a proxy to be able to create my studio…",fields:{slug:"/darkness/"},frontmatter:{date:"May 08, 2019",title:"Sample",description:"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeHcCoP/xAAWEAEBAQAAAAAAAAAAAAAAAAABMSD/2gAIAQEAAQUCqzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AkZP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hSg4ItUo5pClb6xn/2gAMAwEAAgADAAAAEKAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFhof/aAAgBAQABPxAUGFC5UYSFb7+mi9O5SivusKM4Vu7R+b//2Q==",aspectRatio:1.7777777777777777,src:"/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg",srcSet:"/static/54a16e112c74520e2310f2802be25209/467b3/bbbb.jpg 340w,\n/static/54a16e112c74520e2310f2802be25209/e1ddd/bbbb.jpg 680w,\n/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg 1360w,\n/static/54a16e112c74520e2310f2802be25209/883ab/bbbb.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Face the Fear and Laziness…An amazing person once said to me. Repeated it into my memory. That there’s only 2 things in this world that…",fields:{slug:"/Face the Fear and Laziness/"},frontmatter:{date:"August 31, 2016",title:"Face the Fear and Laziness",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAd9542smGJfsGnBZ/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECERMhIjJB/9oACAEBAAEFApdU9USnxysz2OTPD//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/AWP/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEj/8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAECD/2gAIAQEABj8CZGlHX//EABoQAAMBAQEBAAAAAAAAAAAAAAABESExQXH/2gAIAQEAAT8hr0EyqKQTzYPmvrKJaiunDNWF+xT/2gAMAwEAAgADAAAAENwf/v/EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAwEBPxCxJit//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxAYr//EABwQAQADAAIDAAAAAAAAAAAAAAEAESFBUWFxgf/aAAgBAQABPxAjIBW7FrPK0qCGD7lA0H5C+gHiVhtBVEbZpqdxSLYail0J/9k=",aspectRatio:1,src:"/static/96d5589bb6a6be1d72f6881d36a63166/90537/FacetheFearandLaziness_thumbnail_sweat.jpg",srcSet:"/static/96d5589bb6a6be1d72f6881d36a63166/467b3/FacetheFearandLaziness_thumbnail_sweat.jpg 340w,\n/static/96d5589bb6a6be1d72f6881d36a63166/e1ddd/FacetheFearandLaziness_thumbnail_sweat.jpg 680w,\n/static/96d5589bb6a6be1d72f6881d36a63166/90537/FacetheFearandLaziness_thumbnail_sweat.jpg 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}}}}},{node:{excerpt:"…I want to discover new things, remember old things. I want to explore, appreciate, and love my life, my world. … myself.",fields:{slug:"/Want to Take Action/"},frontmatter:{date:"August 30, 2016",title:"Want to Take Action",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAZAQABBQAAAAAAAAAAAAAAAAAAAQIDBAX/2gAMAwEAAhADEAAAAd4qsZ92QXjDZYAf/8QAGBABAQEBAQAAAAAAAAAAAAAAABEBEhD/2gAIAQEAAQUCXVVfK6da/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AXD/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQIBAT8BI3//xAAUEAEAAAAAAAAAAAAAAAAAAAAw/9oACAEBAAY/Ah//xAAaEAEBAQADAQAAAAAAAAAAAAABABEQQVFh/9oACAEBAAE/IRXgfqF1Y9tPbeytmP/aAAwDAQACAAMAAAAQTC89/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAEDAQE/EETEP//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QwrKz/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERITFBkcH/2gAIAQEAAT8QfNPTqUiKvUpUrl7otruRDW38mbeTSy0SfK8P/9k=",aspectRatio:1,src:"/static/ad2fba6ca3495a32411689b762997431/90537/WantToTakeAction_thumbnail_water.jpg",srcSet:"/static/ad2fba6ca3495a32411689b762997431/467b3/WantToTakeAction_thumbnail_water.jpg 340w,\n/static/ad2fba6ca3495a32411689b762997431/e1ddd/WantToTakeAction_thumbnail_water.jpg 680w,\n/static/ad2fba6ca3495a32411689b762997431/90537/WantToTakeAction_thumbnail_water.jpg 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8e4121375960a35ad2b5.js.map
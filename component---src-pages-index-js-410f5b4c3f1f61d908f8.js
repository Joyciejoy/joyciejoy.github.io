(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(A,e,a){"use strict";a.r(e);a(41);var t=a(186),s=a(0),i=a.n(s),n=a(171),c=a(172),d=a(174),r=function(A){return i.a.createElement("article",{className:"post-card "+(A.count%3==0&&"post-card-large")+" "+A.postClass+" "+(A.node.frontmatter.thumbnail?"with-image":"no-image"),style:A.node.frontmatter.thumbnail&&{backgroundImage:"url("+A.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},i.a.createElement(n.a,{to:A.node.fields.slug,className:"post-card-link"},i.a.createElement("div",{className:"post-card-content"},i.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug))))},E=(a(162),a(163),function(A,e){var a=A.data,t=a.site.siteMetadata.title,s=a.allMarkdownRemark.edges,n=0;return i.a.createElement(c.a,{title:t},i.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.site.siteMetadata.description&&i.a.createElement("header",{className:"page-head"},i.a.createElement("h2",{className:"page-head-title"},a.site.siteMetadata.description)),i.a.createElement("div",{className:"post-feed"},s.map(function(A){var e=A.node;return n++,i.a.createElement(r,{key:e.fields.slug,count:n,node:e,postClass:"post"})})))});e.default=function(A){return i.a.createElement(n.b,{query:"3399224544",render:function(e){return i.a.createElement(E,Object.assign({location:A.location,props:!0,data:e},A))},data:t})}},170:function(A,e,a){var t;A.exports=(t=a(173))&&t.default||t},171:function(A,e,a){"use strict";a.d(e,"b",function(){return o});var t=a(0),s=a.n(t),i=a(5),n=a.n(i),c=a(40),d=a.n(c);a.d(e,"a",function(){return d.a});a(170);var r=s.a.createContext({});function E(A){var e=A.staticQueryData,a=A.data,t=A.query,i=A.render,n=a?a.data:e[t]&&e[t].data;return s.a.createElement(s.a.Fragment,null,n&&i(n),!n&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(A){var e=A.data,a=A.query,t=A.render,i=A.children;return s.a.createElement(r.Consumer,null,function(A){return s.a.createElement(E,{data:e,query:a,render:t||i,staticQueryData:A})})};o.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},172:function(A,e,a){"use strict";var t=a(0),s=a.n(t),i=a(171);e.a=function(A){var e=A.title,a=A.children,t=s.a.useState(!1),n=t[0],c=t[1];return s.a.createElement("div",{className:"site-wrapper "+(n?"site-head-open":"")},s.a.createElement("header",{className:"site-head"},s.a.createElement("div",{className:"site-head-container"},s.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return c(!n)}},s.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},s.a.createElement("div",{className:"hamburger-box"},s.a.createElement("div",{className:"hamburger-inner"})))),s.a.createElement("nav",{id:"swup",class:"site-head-left"},s.a.createElement("ul",{className:"nav",role:"menu"},s.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},s.a.createElement(i.a,{to:"/"},"Home")),s.a.createElement("li",{className:"nav-about",role:"menuitem"},s.a.createElement(i.a,{to:"/about"},"About")))),s.a.createElement("div",{className:"site-head-center"},s.a.createElement(i.a,{className:"site-head-logo",to:"/"})),s.a.createElement("div",{className:"site-head-right"},s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://www.instagram.com/myactiondiary/",title:"Instagram",target:"_blank",rel:"noopener noreferrer"},"Instagram"),s.a.createElement("a",{href:"https://www.facebook.com/myactiondiary/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),s.a.createElement(i.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"))))),s.a.createElement("main",{id:"site-main",className:"site-main"},s.a.createElement("div",{id:"swup",className:"transition-fade"},a)),s.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",s.a.createElement(i.a,{to:"/"},e)," All rights reserved."," ",s.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"})))}},173:function(A,e,a){"use strict";a.r(e);a(41);var t=a(0),s=a.n(t),i=a(5),n=a.n(i),c=a(64),d=function(A){var e=A.location,a=A.pageResources;return a?s.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},e.default=d},174:function(A,e,a){"use strict";var t=a(175),s=a(0),i=a.n(s),n=a(5),c=a.n(n),d=a(177),r=a.n(d);function E(A){var e=A.description,a=A.lang,s=A.meta,n=A.keywords,c=A.title,d=t.data.site,E=e||d.siteMetadata.description;return i.a.createElement(r.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:E},{property:"og:title",content:c},{property:"og:description",content:E},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:E}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(s)})}E.defaultProps={lang:"en",meta:[],keywords:[],description:""},E.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=E},175:function(A){A.exports={data:{site:{siteMetadata:{title:"My Action Diary",description:"Dear Action Diary...",author:"Jia Hu"}}}}},186:function(A){A.exports={data:{site:{siteMetadata:{title:"My Action Diary",description:"Dear Action Diary..."}},allMarkdownRemark:{edges:[{node:{excerpt:"HELLOOO\ntest\ntestbreak fast",fields:{slug:"/joyce/"},frontmatter:{date:"June 19, 2019",title:"Joyce",description:"What hello hi",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEEBf/aAAwDAQACEAMQAAAB51hszzKX/8QAFxAAAwEAAAAAAAAAAAAAAAAAABARIf/aAAgBAQABBQImKL//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABYQAQEBAAAAAAAAAAAAAAAAABEAIP/aAAgBAQAGPwKXP//EABkQAAMAAwAAAAAAAAAAAAAAAAEQEQAhQf/aAAgBAQABPyHCA1LZHA4v/9oADAMBAAIAAwAAABAXD//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxBBaa7/xAAWEQEBAQAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QCyMz/8QAGhABAQEAAwEAAAAAAAAAAAAAAQARITFBgf/aAAgBAQABPxALZvoMnNmwpQC+z3f/2Q==",aspectRatio:1.5003750937734435,src:"/static/69bca3d44a5cf8f939baf81ce1df2d11/10fb1/cody-davis-253928-unsplash.jpg",srcSet:"/static/69bca3d44a5cf8f939baf81ce1df2d11/467b3/cody-davis-253928-unsplash.jpg 340w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/e1ddd/cody-davis-253928-unsplash.jpg 680w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/10fb1/cody-davis-253928-unsplash.jpg 1360w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/883ab/cody-davis-253928-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"A wallpaper series using shapes and light by Jean-Marc DenisI used a poly reduction on the mesh as a proxy to be able to create my studio…",fields:{slug:"/darkness/"},frontmatter:{date:"May 08, 2019",title:"Sample",description:"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeHcCoP/xAAWEAEBAQAAAAAAAAAAAAAAAAABMSD/2gAIAQEAAQUCqzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AkZP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hSg4ItUo5pClb6xn/2gAMAwEAAgADAAAAEKAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFhof/aAAgBAQABPxAUGFC5UYSFb7+mi9O5SivusKM4Vu7R+b//2Q==",aspectRatio:1.7777777777777777,src:"/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg",srcSet:"/static/54a16e112c74520e2310f2802be25209/467b3/bbbb.jpg 340w,\n/static/54a16e112c74520e2310f2802be25209/e1ddd/bbbb.jpg 680w,\n/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg 1360w,\n/static/54a16e112c74520e2310f2802be25209/883ab/bbbb.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Picasso had his pink period and his blue period. I am in my blonde period right now.When I first started wearing pink, it wasn’t nothing I…",fields:{slug:"/dont-stop/"},frontmatter:{date:"May 07, 2019",title:"Don't stop",description:"Pink is my favourite colour. I used to say my favourite colour was black to be cool, but it is pink - all shades of pink. If I have an accessory, it is probably pink.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAew4zTewQTFisQf/xAAaEAACAgMAAAAAAAAAAAAAAAABAgARECAh/9oACAEBAAEFAsk0Fdrh7AgGv//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAACAwAAAAAAAAAAAAAAAAABESAwQf/aAAgBAQAGPwKA10f/xAAbEAEAAgIDAAAAAAAAAAAAAAABABARISBBUf/aAAgBAQABPyG8wxGw8DqgDDGxA1x//9oADAMBAAIAAwAAABCc4P7/xAAYEQEBAAMAAAAAAAAAAAAAAAAAEQEhYf/aAAgBAwEBPxDFbRxH/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8QY//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBEFGBof/aAAgBAQABPxDlL2Y7L/tXLLfn0o1rqYpuaRRQpRMp/9k=",aspectRatio:.6666666666666666,src:"/static/a78d9447ce5aed7fce7d879819489687/10fb1/ian-dooley-298769-unsplash.jpg",srcSet:"/static/a78d9447ce5aed7fce7d879819489687/467b3/ian-dooley-298769-unsplash.jpg 340w,\n/static/a78d9447ce5aed7fce7d879819489687/e1ddd/ian-dooley-298769-unsplash.jpg 680w,\n/static/a78d9447ce5aed7fce7d879819489687/10fb1/ian-dooley-298769-unsplash.jpg 1360w,\n/static/a78d9447ce5aed7fce7d879819489687/883ab/ian-dooley-298769-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/its-all-blue/"},frontmatter:{date:"May 06, 2019",title:"It's all blue",description:"What if everything you knew was turned to blue?",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEEBf/aAAwDAQACEAMQAAAB51hszzKX/8QAFxAAAwEAAAAAAAAAAAAAAAAAABARIf/aAAgBAQABBQImKL//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABYQAQEBAAAAAAAAAAAAAAAAABEAIP/aAAgBAQAGPwKXP//EABkQAAMAAwAAAAAAAAAAAAAAAAEQEQAhQf/aAAgBAQABPyHCA1LZHA4v/9oADAMBAAIAAwAAABAXD//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxBBaa7/xAAWEQEBAQAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QCyMz/8QAGhABAQEAAwEAAAAAAAAAAAAAAQARITFBgf/aAAgBAQABPxALZvoMnNmwpQC+z3f/2Q==",aspectRatio:1.5003750937734435,src:"/static/69bca3d44a5cf8f939baf81ce1df2d11/10fb1/cody-davis-253928-unsplash.jpg",srcSet:"/static/69bca3d44a5cf8f939baf81ce1df2d11/467b3/cody-davis-253928-unsplash.jpg 340w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/e1ddd/cody-davis-253928-unsplash.jpg 680w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/10fb1/cody-davis-253928-unsplash.jpg 1360w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/883ab/cody-davis-253928-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/clean-lines/"},frontmatter:{date:"May 05, 2019",title:"Clean lines",description:"Let your hair down and paint the town red",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAABAABAgX/xAAXAQEAAwAAAAAAAAAAAAAAAAADAQIF/9oADAMBAAIQAxAAAAHBliDRLUg90KzmxrStH//EABsQAAMBAQADAAAAAAAAAAAAAAABAhIDERMh/9oACAEBAAEFAmihs61ifOlX19JVz68jNFMbP//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQMBAT8BKxKZ/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8BI//EABoQAAICAwAAAAAAAAAAAAAAAAAREDEgIqH/2gAIAQEABj8Clm3CkIvH/8QAHBAAAwADAAMAAAAAAAAAAAAAAAERITFBEFGR/9oACAEBAAE/IRWIyGhVtxDSza50bSRPSLn9FltCKj8PIf/aAAwDAQACAAMAAAAQfy4z/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxDdFJ04TRS//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxAPYteWN//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExQWFRcf/aAAgBAQABPxDDqGywLwNAAOriB2F9vHn7LLyrhFip0Gx+wbAuVgqDeCIkamNef//Z",aspectRatio:.6666666666666666,src:"/static/9a5b90562a8c29097cffdb45cece34df/10fb1/matthew-hamilton-351641-unsplash.jpg",srcSet:"/static/9a5b90562a8c29097cffdb45cece34df/467b3/matthew-hamilton-351641-unsplash.jpg 340w,\n/static/9a5b90562a8c29097cffdb45cece34df/e1ddd/matthew-hamilton-351641-unsplash.jpg 680w,\n/static/9a5b90562a8c29097cffdb45cece34df/10fb1/matthew-hamilton-351641-unsplash.jpg 1360w,\n/static/9a5b90562a8c29097cffdb45cece34df/883ab/matthew-hamilton-351641-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/all-spikes/"},frontmatter:{date:"May 04, 2019",title:"All spikes",description:"A cactus doesn't live in the desert because it likes the desert; it lives there because the desert hasn't killed it yet.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBA//EABcBAQEBAQAAAAAAAAAAAAAAAAECBAX/2gAMAwEAAhADEAAAAbyXnaahLy4141oJ/8QAGxAAAQQDAAAAAAAAAAAAAAAAAwABESASIjL/2gAIAQEAAQUCpnJkTkbbU//EABgRAAMBAQAAAAAAAAAAAAAAAAEQEQIh/9oACAEDAQE/ASYhrkX/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BAqq//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREgMEH/2gAIAQEABj8CghlH/8QAGxABAAIDAQEAAAAAAAAAAAAAARARACExUWH/2gAIAQEAAT8hm67mm2oG7+YCfm5AOAR//9oADAMBAAIAAwAAABDD6zz/xAAWEQEBAQAAAAAAAAAAAAAAAAARARD/2gAIAQMBAT8QgMChn//EABgRAAMBAQAAAAAAAAAAAAAAAAEQESFB/9oACAECAQE/ED3OIYi//8QAHBABAAICAwEAAAAAAAAAAAAAARARACFBUaFh/9oACAEBAAE/EJQLQH1wRW3XTp1v1gV7BxGo14EIJSWZ4oFR/9k=",aspectRatio:.7140307033202428,src:"/static/817bc40442b38b1928e4c01d97eaf83d/10fb1/charles-deluvio-695732-unsplash.jpg",srcSet:"/static/817bc40442b38b1928e4c01d97eaf83d/467b3/charles-deluvio-695732-unsplash.jpg 340w,\n/static/817bc40442b38b1928e4c01d97eaf83d/e1ddd/charles-deluvio-695732-unsplash.jpg 680w,\n/static/817bc40442b38b1928e4c01d97eaf83d/10fb1/charles-deluvio-695732-unsplash.jpg 1360w,\n/static/817bc40442b38b1928e4c01d97eaf83d/883ab/charles-deluvio-695732-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/green/"},frontmatter:{date:"May 03, 2019",title:"Green",description:"For in the true nature of things, if we rightly consider, every green tree is far more glorious than if it were made of gold and silver.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB6dduTnjUSUqMquVif//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhESECAxQf/aAAgBAQABBQIpxMr1hvg8qGidP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAIDAQEAAAAAAAAAAAAAAAERABAhIFH/2gAIAQEABj8CgQdsrPKyZz//xAAdEAEAAgICAwAAAAAAAAAAAAABEBEAQSExUWHh/9oACAEBAAE/IU2AYMPei6ToMuLW6Qvo+YVFefGpMf/aAAwDAQACAAMAAAAQHDEP/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8QY//EABYRAQEBAAAAAAAAAAAAAAAAABARAf/aAAgBAgEBPxC6Q//EABwQAQEBAAIDAQAAAAAAAAAAAAERADFREEFhIf/aAAgBAQABPxAFFeVPWHAHnZMmVQlCurZRF1+55yaEFY0o+xofBT+Qrv7ns3Pg7//Z",aspectRatio:.8,src:"/static/b3d12ea3767298b8f0e55d9d26fa818a/10fb1/dose-juice-1184429-unsplash.jpg",srcSet:"/static/b3d12ea3767298b8f0e55d9d26fa818a/467b3/dose-juice-1184429-unsplash.jpg 340w,\n/static/b3d12ea3767298b8f0e55d9d26fa818a/e1ddd/dose-juice-1184429-unsplash.jpg 680w,\n/static/b3d12ea3767298b8f0e55d9d26fa818a/10fb1/dose-juice-1184429-unsplash.jpg 1360w,\n/static/b3d12ea3767298b8f0e55d9d26fa818a/883ab/dose-juice-1184429-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/get-fruity/"},frontmatter:{date:"May 02, 2019",title:"Get fruity",description:"A deep investigation into the pastel properties of colourful fruit and their psychological effects on hamsters",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAdONlndgGf/EABkQAQACAwAAAAAAAAAAAAAAAAEAEAIDEv/aAAgBAQABBQKOw7oxCv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAEQAAIhUf/aAAgBAQAGPwKCvXgC/8QAGRABAAMBAQAAAAAAAAAAAAAAARARUQBB/9oACAEBAAE/IeDfFx5KVidCP//aAAwDAQACAAMAAAAQ69//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QNX//xAAXEQADAQAAAAAAAAAAAAAAAAAQESFh/9oACAECAQE/EK8H/8QAGhABAAIDAQAAAAAAAAAAAAAAAQAREEFRof/aAAgBAQABPxBQLWiDwi9W1fuEEpLHsXtWgOP/2Q==",aspectRatio:1.6181229773462784,src:"/static/5dc3b87c18e7ae99cc4415ead1d003bd/10fb1/mike-dorner-173502-unsplash.jpg",srcSet:"/static/5dc3b87c18e7ae99cc4415ead1d003bd/467b3/mike-dorner-173502-unsplash.jpg 340w,\n/static/5dc3b87c18e7ae99cc4415ead1d003bd/e1ddd/mike-dorner-173502-unsplash.jpg 680w,\n/static/5dc3b87c18e7ae99cc4415ead1d003bd/10fb1/mike-dorner-173502-unsplash.jpg 1360w,\n/static/5dc3b87c18e7ae99cc4415ead1d003bd/883ab/mike-dorner-173502-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/fur/"},frontmatter:{date:"May 01, 2019",title:"The fur series",description:"I have one pug and one Czechoslovakian dog called Prazsky krysarik.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIFBAMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAazR8B6g4Bil1lTaKV//xAAdEAACAgIDAQAAAAAAAAAAAAABAgADBBIQMTJC/9oACAEBAAEFAucvYRHsiE65A3SoE2xvf2vX/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BKf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAAFBAMAAAAAAAAAAAAAAAABAhARISIxYRIyQf/aAAgBAQAGPwJ03QkdjnyouyOJZCS3V503/8QAHRAAAwABBQEAAAAAAAAAAAAAAAERITFBUXGB0f/aAAgBAQABPyGiZR3NqJFyU6QGUibz1yiWXjwLcjxOvokr3Q6Z58s//9oADAMBAAIAAwAAABCg6LD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EMpIp//EABYRAQEBAAAAAAAAAAAAAAAAABARAf/aAAgBAgEBPxAl0//EAB8QAQACAgEFAQAAAAAAAAAAAAEAESExURBBYXHR8P/aAAgBAQABPxA6kIdcRFpdtdvECs8m7d49kRzIomrMWeHcVKMs/J9uBkkkJkmbhWDTkiMG6vT+cSsCiMbv5G5SoFvtn//Z",aspectRatio:.718132854578097,src:"/static/98b3ef98da1febad9e79c09eda17307a/10fb1/charles-deluvio-550068-unsplash.jpg",srcSet:"/static/98b3ef98da1febad9e79c09eda17307a/467b3/charles-deluvio-550068-unsplash.jpg 340w,\n/static/98b3ef98da1febad9e79c09eda17307a/e1ddd/charles-deluvio-550068-unsplash.jpg 680w,\n/static/98b3ef98da1febad9e79c09eda17307a/10fb1/charles-deluvio-550068-unsplash.jpg 1360w,\n/static/98b3ef98da1febad9e79c09eda17307a/883ab/charles-deluvio-550068-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Far far away, behind the word mountains, far from the countries Vokalia and\nConsonantia, there live the blind texts. Separated they live in…",fields:{slug:"/hi-folks/"},frontmatter:{date:"May 28, 2015",title:"New Beginnings",description:"This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeHcCoP/xAAWEAEBAQAAAAAAAAAAAAAAAAABMSD/2gAIAQEAAQUCqzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AkZP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hSg4ItUo5pClb6xn/2gAMAwEAAgADAAAAEKAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFhof/aAAgBAQABPxAUGFC5UYSFb7+mi9O5SivusKM4Vu7R+b//2Q==",aspectRatio:1.7777777777777777,src:"/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg",srcSet:"/static/54a16e112c74520e2310f2802be25209/467b3/bbbb.jpg 340w,\n/static/54a16e112c74520e2310f2802be25209/e1ddd/bbbb.jpg 680w,\n/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg 1360w,\n/static/54a16e112c74520e2310f2802be25209/883ab/bbbb.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Wow! I love blogging so much already.Did you know that “despite its name, salted duck eggs can also be made from\nchicken eggs, though the…",fields:{slug:"/my-second-post/"},frontmatter:{date:"May 06, 2015",title:"My Second Post!",description:null,thumbnail:null}}},{node:{excerpt:"This is my first post on my new fake blog! How exciting!I’m sure I’ll write a lot more interesting things in the future.Oh, and here’s a…",fields:{slug:"/hello-world/"},frontmatter:{date:"May 01, 2015",title:"Hello World",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEEBf/aAAwDAQACEAMQAAABgik0dXC//8QAGRABAAMBAQAAAAAAAAAAAAAAAQACEhEy/9oACAEBAAEFAkqW2DlnRj73yf/EABcRAQADAAAAAAAAAAAAAAAAAAAREkH/2gAIAQMBAT8B1WX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQL/2gAIAQIBAT8Bi6f/xAAbEAABBAMAAAAAAAAAAAAAAAAAAQIRISIxMv/aAAgBAQAGPwK9GNocyS8hCj//xAAcEAADAQACAwAAAAAAAAAAAAABESEAMUGBobH/2gAIAQEAAT8hsTTH2wx5gg2ZgM8d5JIfmMRAIe//2gAMAwEAAgADAAAAEMgv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxARwyusv//EABgRAAIDAAAAAAAAAAAAAAAAAAABESFR/9oACAECAQE/EFoktI//xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAxIWGBQeH/2gAIAQEAAT8QRswtDR5g4a7R5C/RHFM3BKk6zThoVp3lEYcnjGIYES7/ACZ//9k=",aspectRatio:1.3333333333333333,src:"/static/8058f3f26913fea3b6a89a73344fe94a/10fb1/salty_egg.jpg",srcSet:"/static/8058f3f26913fea3b6a89a73344fe94a/467b3/salty_egg.jpg 340w,\n/static/8058f3f26913fea3b6a89a73344fe94a/e1ddd/salty_egg.jpg 680w,\n/static/8058f3f26913fea3b6a89a73344fe94a/10fb1/salty_egg.jpg 1360w,\n/static/8058f3f26913fea3b6a89a73344fe94a/fda29/salty_egg.jpg 2040w,\n/static/8058f3f26913fea3b6a89a73344fe94a/3d25e/salty_egg.jpg 2048w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-410f5b4c3f1f61d908f8.js.map
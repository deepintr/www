(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0lfv":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));n("KKXr"),n("rvZc"),n("9VmF");var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32;return e.length<=t?e:"".concat(e.slice(0,t),"...")},o=function(e){return e.startsWith("/")&&(e=e.slice(1)),e.endsWith("/")&&(e=e.slice(0,e.length-1)),e.split("/")},i=n("kiQV"),a=function(e){var t=e.fields.slug,n=e.frontmatter.title;return{shortname:"deepintr",config:{url:"".concat(i.homepage).concat(t),identifier:c(t),title:n}}},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return o(e).join(t)}},"2vEl":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("DYRK"),a=n("7evw"),c=n("iuhU"),u={image:{borderRadius:"50%"}},s=Object(i.createUseStyles)(u),l=function(e){var t=e.left,n=e.right,r=e.children,i=s();return o.a.createElement("article",{className:"media"},t&&o.a.createElement("figure",{className:"media-left"},o.a.createElement("p",{className:Object(c.a)("image","is-".concat(t.size,"x").concat(t.size))},o.a.createElement("img",{className:i.image,src:t.imgUrl||"https://bulma.io/images/placeholders/128x128.png"}))),o.a.createElement("div",{className:"media-content"},o.a.createElement("div",{className:"content"},r)),n&&o.a.createElement("div",{className:"media-right"},n))},f=n("MfX3"),d=n("dUGX");n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hEkN");function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=Object(i.createUseStyles)({noBorder:{border:"none"}}),w=function(e){var t=e.element,n=e.anchor,r=e.title,i=e.color,a=e.noBorder,u=e.handlers,s=e.children,l=v(e,["element","anchor","title","color","noBorder","handlers","children"]),f=g(),d="a"===t?b(b({},n),{},{"aria-label":r}):{},p=Object.keys(l).map((function(e){return y({},"is-".concat(e),!!e)}));return o.a.createElement(t,Object.assign({},d,u,{className:c.a.apply(void 0,["button",y({},f.noBorder,a),y({},"is-".concat(i),!!i)].concat(m(p))),title:r}),s)},E=n("olu7"),O=n("Wbzz"),j=n("wd/R"),S=n.n(j);function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){var t=e.color,n=e.size,r=e.children;return o.a.createElement("span",{className:Object(c.a)("tag",C({},"is-".concat(t),!!t),C({},"is-".concat(n),!!n))},r)},I=n("DVlV"),k={root:{display:"flex",justifyContent:"space-between",width:"100%","& *":{display:"inline-block"}},title:{marginBottom:"0 !important",display:"inline-block"},paragraph:{display:"flex",alignItems:"center",fontSize:"14px",lineHeight:"2.3",fontWeight:700,color:"#8F99A3","&>*":{marginInlineEnd:"0.5rem"},"& .icon":{display:"flex",alignItems:"center"}},divider:{paddingBottom:"0.3rem",marginBottom:"0.6rem",borderBottom:"1px solid #E6EAEE"}};var P=Object(i.createUseStyles)(k),q=function(e){var t,n,r,i,a=e.frontmatter,u=e.slug,s=e.right,l=e.details,f=P(),d=a.title,m=a.author,p=a.date,h=a.pinned;return o.a.createElement("div",{className:Object(c.a)(f.root,(n={},r=f.divider,i=l,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n))},o.a.createElement("div",null,o.a.createElement(O.Link,{to:u},o.a.createElement("h4",{className:f.title},d)),o.a.createElement("p",{className:Object(c.a)(f.paragraph)},function(e){try{var t=new I.Author(e).getCredentials(),n=t.username,r=t.url;return o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"@",n)}catch(i){return null}}(m),(t=p,o.a.createElement("span",null,S()(t).format("DD MMMM YYYY"))),h&&o.a.createElement(_,{color:"warning"},o.a.createElement(E.a,{icon:{name:"thumbtack",style:"fas"}}),o.a.createElement("span",null,"Sabitlenmiş")))),s&&o.a.createElement("span",null,s))},D=n("0lfv"),A={post:{margin:"1rem",paddingBottom:"1rem",borderBottom:"1px solid #E6EAEE","&:last-child":{paddingBottom:0,borderBottom:"none"}},postContent:{textAlign:"justify",textJustify:"inter-character"}},M=n("kiQV"),U=Object(i.createUseStyles)(A);t.a=function(e){var t=e.post,n=e.details,r=void 0!==n&&n,i=U(),c=t.frontmatter,u=t.excerpt,s=t.fields.slug,m=t.html,p=r?o.a.createElement(w,{element:"a",title:"GitHub'da düzenle",anchor:{href:"".concat(M.repository.url,"/blob/master/content").concat(s,"index.md"),target:"_blank"},noBorder:!0},o.a.createElement(E.a,{icon:{name:"edit",style:"fas"}})):o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{icon:{name:"comments",style:"fas"}}),o.a.createElement(a.CommentCount,Object(D.a)(t)));return o.a.createElement("article",{className:i.post},o.a.createElement(l,null,o.a.createElement(q,{frontmatter:c,right:p,slug:s,details:r}),o.a.createElement(d.a,null,o.a.createElement(f.a,null,r?o.a.createElement("div",{className:i.postContent,dangerouslySetInnerHTML:{__html:m}}):o.a.createElement("p",null,u)))))}},"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV");t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},ASWJ:function(e,t){},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n("q1tI")),i=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=t.CommentEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(o.default.Component);s.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},s.propTypes={commentId:i.default.string.isRequired,showMedia:i.default.bool,showParentComment:i.default.bool,width:i.default.number,height:i.default.number}},BpCU:function(e,t){},DVlV:function(e,t,n){"use strict";var r=n("ckrQ");n.d(t,"Author",(function(){return r.a}));n("QMSZ"),n("BpCU"),n("njWm"),n("ASWJ"),n("GmkW"),n("QmxX"),n("iouE")},GmkW:function(e,t){},HhXV:function(e,t,n){"use strict";n("8+KV"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n("q1tI")),a=u(n("17x9")),c=n("ZMnY");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,f.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return i.default.createElement("div",r({},this.props,{id:"disqus_thread"}))}}]),t}(i.default.Component)).propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},MfX3:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("iuhU");t.a=function(e){var t,n,r,a=e.size,c=e.children;return o.a.createElement("div",{className:Object(i.a)("column",(t={},n="is-".concat(a),r=a,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))},c)}},QMSZ:function(e,t){},QmxX:function(e,t){},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n("q1tI")),i=c(n("17x9")),a=n("ZMnY");function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,a.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(o.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,o=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var s=c.value;if(e[s]!==t[s]&&!a(e[s]))return!0}}catch(l){o=!0,i=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return!1};var r,o=n("q1tI"),i=(r=o)&&r.__esModule?r:{default:r};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},ckrQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("rGqo"),n("rE2o"),n("ioFf"),n("KKXr"),n("Z2Ku"),n("L9s1");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={github:"https://github.com",telegram:"https://t.me",twitter:"https://twitter.com",instagram:"https://www.instagram.com",disqus:"https://disqus.com/by"},u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"delimiter","@"),a(this,"username",void 0),a(this,"platform",void 0);var n=t.trim().toLowerCase();if(n.includes(this.delimiter)){var o=r(n.split(this.delimiter),2);this.username=o[0],this.platform=o[1]}else this.username=n,this.platform=""}var t,n,o;return t=e,(n=[{key:"getCredentials",value:function(){var e=this.username,t=this.platform;return t in c?{username:e,url:"".concat(c[t],"/").concat(e)}:{username:e,url:"#"}}}])&&i(t.prototype,n),o&&i(t,o),e}()},dUGX:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);t.a=function(e){var t=e.children;return o.a.createElement("div",{className:"columns"},t)}},hEkN:function(e,t,n){"use strict";n("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},iouE:function(e,t){},njWm:function(e,t){}}]);
//# sourceMappingURL=080ef20a9431f866b94658625348d8ce04f2a302-e805cac8c7c1dca18789.js.map
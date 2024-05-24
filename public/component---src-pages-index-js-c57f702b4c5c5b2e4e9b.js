"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{4852:function(e){e.exports=Object.assign},2421:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),a=n(6877),i=n(5227),o=n(5059),c=n(5490),l=n(3179),s=n(8639),u=n(5893),[p,d]=(0,i.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),m=(0,o.G)(((e,t)=>{const n=(0,c.jC)("Tag",e),r=(0,l.Lr)(e),a={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return(0,u.jsx)(p,{value:n,children:(0,u.jsx)(s.m.span,{ref:t,...r,__css:a})})}));m.displayName="Tag",(0,o.G)(((e,t)=>{const n=d();return(0,u.jsx)(s.m.span,{ref:t,noOfLines:1,...e,__css:n.label})})).displayName="TagLabel",(0,o.G)(((e,t)=>(0,u.jsx)(a.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}))).displayName="TagLeftIcon",(0,o.G)(((e,t)=>(0,u.jsx)(a.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}))).displayName="TagRightIcon";var f=e=>(0,u.jsx)(a.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});f.displayName="TagCloseIcon",(0,o.G)(((e,t)=>{const{isDisabled:n,children:r,...a}=e,i={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...d().closeButton};return(0,u.jsx)(s.m.button,{ref:t,"aria-label":"close",...a,type:"button",disabled:n,__css:i,children:r||(0,u.jsx)(f,{})})})).displayName="TagCloseButton";var h=n(5640),[g,y]=(0,h.eC)("Card"),b=n(5432),x=(0,o.G)((function(e,t){const{className:n,children:r,direction:a="column",justify:i,align:o,...p}=(0,l.Lr)(e),d=(0,c.jC)("Card",e);return(0,u.jsx)(s.m.div,{ref:t,className:(0,b.cx)("chakra-card",n),__css:{display:"flex",flexDirection:a,justifyContent:i,alignItems:o,position:"relative",minWidth:0,wordWrap:"break-word",...d.container},...p,children:(0,u.jsx)(g,{value:d,children:r})})})),v=n(4818),w=n(204),E=n(6347),T=(0,o.G)((function(e,t){const{className:n,...r}=e,a=y();return(0,u.jsx)(s.m.div,{ref:t,className:(0,b.cx)("chakra-card__body",n),__css:a.body,...r})})),C=n(1669),j=n(3838);function S(e){let{award:t}=e;return null!=t?r.createElement(m,{fontSize:"0.7em",variant:"outline"},t):void 0}function k(e){let{title:t,link:n,image:a,tech:i,award:o,description:c}=e;const{0:l,1:s}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement(x,{mx:"10px",my:"10px",overflow:"hidden",variant:"outline",w:"350px",bgColor:"blackAlpha.300"},r.createElement(v.E,{w:"350px",h:"200px",objectFit:"cover",opacity:l?.15:1,src:a,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),transition:"opacity 0.1s ease-in-out",zIndex:"1"}),l&&r.createElement(w.k,{position:"absolute",w:"350px",h:"200px",p:"30px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",zIndex:"0"},r.createElement(E.x,{size:"1.3em",color:"white",zIndex:"2"},c)),r.createElement(T,{mt:"-7px"},r.createElement(C.g,{align:"start",h:"90px"},r.createElement(w.k,{align:"center",justify:"space-between",w:"100%"},r.createElement(j.r,{color:"white",fontWeight:"semibold",fontSize:"lg",href:n,isExternal:!0},t),r.createElement(S,{award:o})),r.createElement(w.k,{flexWrap:"wrap"},i.map(((e,t)=>r.createElement(m,{fontSize:"0.80em",variant:"outline",color:"white",borderRadius:"full",mx:"2px",my:"2px",key:t},e))))))))}},643:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ke}});var r=n(7294),a=n(469),i=n(7754),o=n(1669),c=n(204),l=n(4818),s=n(4418),u=n(6347),p=n(3838);var d=n(5227),[m,f]=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),h=n(8639),g=n(5432),y=n(5893);function b(e){const{children:t,className:n,...a}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,g.cx)("chakra-button__icon",n);return(0,y.jsx)(h.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:o,children:i})}b.displayName="ButtonIcon";var x=n(295);function v(e){const{label:t,placement:n,spacing:a="0.5rem",children:i=(0,y.jsx)(x.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:c,...l}=e,s=(0,g.cx)("chakra-button__spinner",o),u="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?a:0,fontSize:"1em",lineHeight:"normal",...c})),[c,t,u,a]);return(0,y.jsx)(h.m.div,{className:s,...l,__css:p,children:i})}v.displayName="ButtonSpinner";var w=n(1103),E=n(5059),T=n(5490),C=n(3179),j=(0,E.G)(((e,t)=>{const n=f(),a=(0,T.mq)("Button",{...n,...e}),{isDisabled:i=(null==n?void 0:n.isDisabled),isLoading:o,isActive:c,children:l,leftIcon:s,rightIcon:u,loadingText:p,iconSpacing:d="0.5rem",type:m,spinner:b,spinnerPlacement:x="start",className:E,as:j,...k}=(0,C.Lr)(e),A=(0,r.useMemo)((()=>{const e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}}),[a,n]),{ref:O,type:I}=function(e){const[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(j),P={rightIcon:u,leftIcon:s,iconSpacing:d,children:l};return(0,y.jsxs)(h.m.button,{disabled:i||o,ref:(0,w.qq)(t,O),as:j,type:null!=m?m:I,"data-active":(0,g.PB)(c),"data-loading":(0,g.PB)(o),__css:A,className:(0,g.cx)("chakra-button",E),...k,children:[o&&"start"===x&&(0,y.jsx)(v,{className:"chakra-button__spinner--start",label:p,placement:"start",spacing:d,children:b}),o?p||(0,y.jsx)(h.m.span,{opacity:0,children:(0,y.jsx)(S,{...P})}):(0,y.jsx)(S,{...P}),o&&"end"===x&&(0,y.jsx)(v,{className:"chakra-button__spinner--end",label:p,placement:"end",spacing:d,children:b})]})}));function S(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)(b,{marginEnd:a,children:t}),r,n&&(0,y.jsx)(b,{marginStart:a,children:n})]})}j.displayName="Button";var k,A,O,I,P=n(7822),N=n(6877),_=n(9583),L=n(4995),M=n(1619),R=n(2421),z=n(2086),B=n(1883),D=n(5697),W=n.n(D),q=n(3524),F=n.n(q),H=n(9590),U=n.n(H),G=n(4852),J=n.n(G),Y="bodyAttributes",X="htmlAttributes",K="titleAttributes",Z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},V=(Object.keys(Z).map((function(e){return Z[e]})),"charset"),$="cssText",Q="href",ee="http-equiv",te="innerHTML",ne="itemprop",re="name",ae="property",ie="rel",oe="src",ce="target",le={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},se="defaultTitle",ue="defer",pe="encodeSpecialCharacters",de="onChangeClientState",me="titleTemplate",fe=Object.keys(le).reduce((function(e,t){return e[le[t]]=t,e}),{}),he=[Z.NOSCRIPT,Z.SCRIPT,Z.STYLE],ge="data-react-helmet",ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},xe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Ee=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Te=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ce=function(e){var t=Oe(e,Z.TITLE),n=Oe(e,me);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Oe(e,se);return t||r||void 0},je=function(e){return Oe(e,de)||function(){}},Se=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ve({},e,t)}),{})},ke=function(e,t){return t.filter((function(e){return void 0!==e[Z.BASE]})).map((function(e){return e[Z.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Ae=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Le("Helmet: "+e+' should be of type "Array". Instead found type "'+ye(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===ie&&"canonical"===e[n].toLowerCase()||l===ie&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==te&&c!==$&&c!==ne||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=J()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Oe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Ie=(k=Date.now(),function(e){var t=Date.now();t-k>16?(k=t,e(t)):setTimeout((function(){Ie(e)}),0)}),Pe=function(e){return clearTimeout(e)},Ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ie:n.g.requestAnimationFrame||Ie,_e="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Pe:n.g.cancelAnimationFrame||Pe,Le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Me=null,Re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;De(Z.BODY,r),De(Z.HTML,a),Be(p,d);var m={baseTag:We(Z.BASE,n),linkTags:We(Z.LINK,i),metaTags:We(Z.META,o),noscriptTags:We(Z.NOSCRIPT,c),scriptTags:We(Z.SCRIPT,s),styleTags:We(Z.STYLE,u)},f={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,f,h)},ze=function(e){return Array.isArray(e)?e.join(""):e},Be=function(e,t){void 0!==e&&document.title!==e&&(document.title=ze(e)),De(Z.TITLE,t)},De=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(ge),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(ge):n.getAttribute(ge)!==o.join(",")&&n.setAttribute(ge,o.join(","))}},We=function(e,t){var n=document.head||document.querySelector(Z.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===te)n.innerHTML=t.innerHTML;else if(r===$)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(ge,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},qe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[le[n]||n]=e[n],t}),t)},He=function(e,t,n){switch(e){case Z.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[ge]=!0,i=Fe(n,a),[r.createElement(Z.TITLE,i,e)];var e,n,a,i},toString:function(){return function(e,t,n,r){var a=qe(n),i=ze(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Te(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Te(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case Y:case X:return{toComponent:function(){return Fe(t)},toString:function(){return qe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,i=((a={key:n})[ge]=!0,a);return Object.keys(t).forEach((function(e){var n=le[e]||e;if(n===te||n===$){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===te||e===$)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Te(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===he.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:He(Z.BASE,t,r),bodyAttributes:He(Y,n,r),htmlAttributes:He(X,a,r),link:He(Z.LINK,i,r),meta:He(Z.META,o,r),noscript:He(Z.NOSCRIPT,c,r),script:He(Z.SCRIPT,l,r),style:He(Z.STYLE,s,r),title:He(Z.TITLE,{title:p,titleAttributes:d},r)}},Ge=F()((function(e){return{baseTag:ke([Q,ce],e),bodyAttributes:Se(Y,e),defer:Oe(e,ue),encode:Oe(e,pe),htmlAttributes:Se(X,e),linkTags:Ae(Z.LINK,[ie,Q],e),metaTags:Ae(Z.META,[re,V,ee,ae,ne],e),noscriptTags:Ae(Z.NOSCRIPT,[te],e),onChangeClientState:je(e),scriptTags:Ae(Z.SCRIPT,[oe,te],e),styleTags:Ae(Z.STYLE,[$],e),title:Ce(e),titleAttributes:Se(K,e)}}),(function(e){Me&&_e(Me),e.defer?Me=Ne((function(){Re(e,(function(){Me=null}))})):(Re(e),Me=null)}),Ue)((function(){return null})),Je=(A=Ge,I=O=function(e){function t(){return be(this,t),Ee(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!U()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Z.SCRIPT:case Z.NOSCRIPT:return{innerHTML:t};case Z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return ve({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ve({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case Z.TITLE:return ve({},a,((t={})[r.type]=o,t.titleAttributes=ve({},i),t));case Z.BODY:return ve({},a,{bodyAttributes:ve({},i)});case Z.HTML:return ve({},a,{htmlAttributes:ve({},i)})}return ve({},a,((n={})[r.type]=ve({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ve({},t);return Object.keys(e).forEach((function(t){var r;n=ve({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[fe[n]||n]=e[n],t}),t)}(we(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case Z.LINK:case Z.META:case Z.NOSCRIPT:case Z.SCRIPT:case Z.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=we(e,["children"]),a=ve({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(A,a)},xe(t,null,[{key:"canUseDOM",set:function(e){A.canUseDOM=e}}]),t}(r.Component),O.propTypes={base:W().object,bodyAttributes:W().object,children:W().oneOfType([W().arrayOf(W().node),W().node]),defaultTitle:W().string,defer:W().bool,encodeSpecialCharacters:W().bool,htmlAttributes:W().object,link:W().arrayOf(W().object),meta:W().arrayOf(W().object),noscript:W().arrayOf(W().object),onChangeClientState:W().func,script:W().arrayOf(W().object),style:W().arrayOf(W().object),title:W().string,titleAttributes:W().object,titleTemplate:W().string},O.defaultProps={defer:!0,encodeSpecialCharacters:!0},O.peek=A.peek,O.rewind=function(){var e=A.rewind();return e||(e=Ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},I);Je.renderStatic=Je.rewind;const Ye=[[{icon:r.createElement(_.SRX,null),link:"mailto:rolandyang@gmail.com",text:"Email"},{icon:r.createElement(_.hJX,null),link:"https://github.com/rolandyangg",text:"GitHub"},{icon:r.createElement(_.ltd,null),link:"https://www.linkedin.com/in/yangroland/",text:"LinkedIn"}],[{icon:r.createElement(_.CUm,null),link:"https://devpost.com/rolandyang",text:"DevPost"},{icon:r.createElement(_.MDs,null),link:"https://drive.google.com/file/d/1_IOzmp8a8JdewSncNE274h6pOH8LVXdL/view?usp=sharing",text:"Resume"}]],Xe=[{title:"BruinShare",link:"https://github.com/rolandyangg/BruinShare",image:"projects/bruinsharepreview.png",tech:["FERN","Firebase","Express.js","React","Node.js","AWS","MaterialUI","Next.js"],description:"Full-stack centralized ridesharing platform designed for UCLA students"},{title:"Coding Interview CLI",link:"https://github.com/rolandyangg/interview-cli",image:"projects/codinginterviewsample.png",tech:["Javascript","Node.js","Firebase"],award:null,description:"Command Line Interface designed for creating, designing, assigning, and taking live coding interviews"},{title:"vizAsianHate",link:"https://devpost.com/software/stop-aapi-hate-dashboard",image:"projects/vizasianhatesample.jpg",tech:["React","Next.js","ChakraUI","Vercel","APIs"],award:"Most Interactive @ Vizathon '22",description:"Dynamic website containing interactive data visualizations displaying AAPI hate crime data"},{title:"Pigzj",link:"https://github.com/rolandyangg/Pigzj",image:"projects/PigzjUsage.png",tech:["Java","Multithreading","Compression"],description:"Multithreaded Java implementation of popular gzip compressor (~3x faster compression speed)"},{title:"SecureTheTag",link:"https://devpost.com/software/securethetag",image:"projects/securethetagsample.jpg",tech:["HTML/CSS","Bootstrap","Express","Node.js","Google Cloud Platform","Webscraping"],award:"1st Overall @ RevolutionUC '21",description:"Web application that provides trending Instagram hashtags directly based on user-uploaded images with webscraping and machine learning"},{title:"Peach Party",link:"https://github.com/rolandyangg/peach-party",image:"projects/peachpartyscreenshot.png",tech:["C++"],award:null,description:"2D two-player video game clone of Mario Party made in C++ exercising OOP Design Principles including Polymorphism and Inheritance"}];function Ke(){return r.createElement(r.Fragment,null,r.createElement(Je,null,r.createElement("title",null,"roland yang | personal website")),r.createElement(a.x,{theme:z.Z},r.createElement(L.Z,null),r.createElement(i.M,{justify:"center",p:{base:0,mdd:"100px"}},r.createElement(o.g,{spacing:3},r.createElement(c.k,{direction:{base:"column",mdd:"row"},justify:"center",align:"center",flexWarp:"wrap"},r.createElement(i.M,{mx:"30px",my:"20px"},r.createElement(l.E,{alt:"Roland Yang",src:"/hsgradpic.jpeg",borderRadius:"lg",maxW:"350px"})),r.createElement(o.g,{mx:"30px",align:"left",maxW:"600px"},r.createElement(s.X,{fontSize:"5xl"},"hey 👋"),r.createElement(s.X,{fontSize:"4xl"},"my name is ",r.createElement(u.x,{bgGradient:"linear(to-l, #1ccbe2, #e96dff)",bgClip:"text",as:"span"},"roland yang")),r.createElement(u.x,{fontSize:"xl"},"welcome to my little website 💻"),r.createElement(u.x,{fontSize:"xl"},"i’m an undergraduate student studying computer science at ucla 🐻👨‍💻. "),r.createElement(c.k,{direction:{base:"column",lgg:"row"},justify:"center",align:"center",flexWarp:"wrap",fontSize:"lg",py:"10px"},r.createElement(c.k,null,Ye[0].map(((e,t)=>r.createElement(p.r,{_hover:{},key:t,href:e.link,isExternal:!0},r.createElement(j,{_hover:{backgroundColor:"blue.800",borderColor:"blue.300"},variant:"outline",mx:"5px",my:"5px",leftIcon:e.icon},e.text))))),r.createElement(c.k,null,Ye[1].map(((e,t)=>r.createElement(p.r,{_hover:{},key:t,href:e.link,isExternal:!0},r.createElement(j,{_hover:{backgroundColor:"blue.800",borderColor:"blue.300"},variant:"outline",mx:"5px",my:"5px",leftIcon:e.icon},e.text)))))))),r.createElement(u.x,{maxW:"90%",justify:"center",align:"center",pt:5},"currently i am seeking internships related to technology, however all opportunities are greatly appreciated!"),r.createElement(u.x,{maxW:"90%",justify:"center",align:"center"},"feel free to reach out via any of my provided socials!"))),r.createElement(i.M,null,r.createElement(P.i,{p:"30px",borderColor:"whiteAlpha.500",w:"1300px"})),r.createElement(i.M,{justify:"center",p:{base:"25px",mdd:"100px"}},r.createElement(o.g,null,r.createElement(s.X,{mb:"15px"},"featured projects"),r.createElement(c.k,{justify:"center",align:"center",flexWrap:"wrap",maxW:"1200px"},Xe.map(((e,t)=>r.createElement(R.Z,{title:e.title,link:e.link,image:e.image,tech:e.tech,award:e.award,description:e.description,key:t})))),r.createElement(B.Link,{to:"/projects"},r.createElement(u.x,{fontSize:"xl",color:"whiteAlpha.700",_hover:{color:"white"}},"view all")))),r.createElement(i.M,null,r.createElement(P.i,{p:"30px",borderColor:"whiteAlpha.500",w:"1300px"})),r.createElement(i.M,{justify:"center",p:{base:"50px",mdd:"100px"}},r.createElement(c.k,{direction:{base:"column",md:"row"},justify:"space-between",align:"center",flexWarp:"wrap",w:"100%",maxW:"800px"},r.createElement(o.g,{my:"10px"},r.createElement(s.X,null,"contact"),r.createElement(u.x,null,"i promise i'm a nice person 🥺")),r.createElement(o.g,{align:"start",fontSize:"xl",my:"10px",flexWrap:"nowrap"},r.createElement(p.r,{href:"mailto:rolandyang@gmail.com"},r.createElement(N.J,{as:_.SRX,mx:"5px"}),"rolandyang@gmail.com"),r.createElement(p.r,{href:"https://github.com/rolandyangg",isExternal:!0},r.createElement(N.J,{as:_.hJX,mx:"5px"}),"github.com/rolandyangg"),r.createElement(p.r,{href:"https://www.linkedin.com/in/yangroland/",isExternal:!0,isTruncated:!0},r.createElement(N.J,{as:_.ltd,mx:"5px"}),"www.linkedin.com/in/yangroland")))),r.createElement(M.Z,null)))}},3524:function(e,t,n){var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(p,"canUseDOM",c),p}}},1103:function(e,t,n){n.d(t,{lq:function(){return a},qq:function(){return i}});var r=n(7294);function a(...e){return t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"!=typeof e)try{e.current=t}catch(n){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}else e(t)}(e,t)}))}}function i(...e){return(0,r.useMemo)((()=>a(...e)),e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c57f702b4c5c5b2e4e9b.js.map
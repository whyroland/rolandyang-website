"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{3887:function(e,t,r){r.d(t,{Ee:function(){return c}});var n=r(7294),a=r(4488),i=r(4040);function o(e,t=[]){const r=Object.assign({},e);for(const n of t)n in r&&delete r[n];return r}var l=(0,a.Gp)((function(e,t){const{htmlWidth:r,htmlHeight:a,alt:i,...o}=e;return n.createElement("img",{width:r,height:a,ref:t,alt:i,...o})}));l.displayName="NativeImage";var c=(0,a.Gp)((function(e,t){const{fallbackSrc:r,fallback:c,src:s,srcSet:m,align:u,fit:d,loading:p,ignoreFallback:f,crossOrigin:g,fallbackStrategy:y="beforeLoadOrError",referrerPolicy:h,...b}=e,x=null!=p||f||!(void 0!==r||void 0!==c),v=function(e){const{loading:t,src:r,srcSet:a,onLoad:o,onError:l,crossOrigin:c,sizes:s,ignoreFallback:m}=e,[u,d]=(0,n.useState)("pending");(0,n.useEffect)((()=>{d(r?"loading":"pending")}),[r]);const p=(0,n.useRef)(),f=(0,n.useCallback)((()=>{if(!r)return;g();const e=new Image;e.src=r,c&&(e.crossOrigin=c),a&&(e.srcset=a),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{g(),d("loaded"),null==o||o(e)},e.onerror=e=>{g(),d("failed"),null==l||l(e)},p.current=e}),[r,c,a,s,o,l,t]),g=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,i.G)((()=>{if(!m)return"loading"===u&&f(),()=>{g()}}),[u,f,m]),m?"loaded":u}({...e,ignoreFallback:x}),k=((e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t)(v,y),w={ref:t,objectFit:d,objectPosition:u,...x?b:o(b,["onError","onLoad"])};return k?c||n.createElement(a.m$.img,{as:l,className:"chakra-image__placeholder",src:r,...w}):n.createElement(a.m$.img,{as:l,src:s,srcSet:m,crossOrigin:g,loading:p,referrerPolicy:h,className:"chakra-image",...w})}));c.displayName="Image";(0,a.Gp)(((e,t)=>n.createElement(a.m$.img,{ref:t,as:l,className:"chakra-image",...e})))},2627:function(e,t,r){r.d(t,{xu:function(){return p},M5:function(){return g},iz:function(){return h},kC:function(){return b},Ug:function(){return j},X6:function(){return k},rU:function(){return w},HC:function(){return C},xv:function(){return W},QI:function(){return S},gC:function(){return O}});var n=r(7294),a=r(4488);function i(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function o(e,t){return Array.isArray(e)?e.map((e=>null===e?null:t(e))):i(e)?Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}var l=r(5336),c=r(4520);function s(e){const t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}var m=r(2494),u=r(8387);function d(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(0,a.Gp)((function(e,t){const{ratio:r=4/3,children:i,className:c,...s}=e,m=n.Children.only(i),u=(0,l.cx)("chakra-aspect-ratio",c);return n.createElement(a.m$.div,{ref:t,position:"relative",className:u,_before:{height:0,content:'""',display:"block",paddingBottom:o(r,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...s},m)})).displayName="AspectRatio",(0,a.Gp)((function(e,t){const r=(0,a.mq)("Badge",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...o,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})})).displayName="Badge";var p=(0,a.m$)("div");p.displayName="Box";var f=(0,a.Gp)((function(e,t){const{size:r,centerContent:a=!0,...i}=e,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return n.createElement(p,{ref:t,boxSize:r,__css:{...o,flexShrink:0,flexGrow:0},...i})}));f.displayName="Square",(0,a.Gp)((function(e,t){const{size:r,...a}=e;return n.createElement(f,{size:r,ref:t,borderRadius:"9999px",...a})})).displayName="Circle";var g=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});g.displayName="Center";var y={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)((function(e,t){const{axis:r="both",...i}=e;return n.createElement(a.m$.div,{ref:t,__css:y[r],...i,position:"absolute"})}));(0,a.Gp)((function(e,t){const r=(0,a.mq)("Code",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.code,{ref:t,className:(0,l.cx)("chakra-code",e.className),...o,__css:{display:"inline-block",...r}})})).displayName="Code",(0,a.Gp)((function(e,t){const{className:r,centerContent:i,...o}=(0,c.Lr)(e),s=(0,a.mq)("Container",e);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-container",r),...o,__css:{...s,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})})).displayName="Container";var h=(0,a.Gp)((function(e,t){const{borderLeftWidth:r,borderBottomWidth:i,borderTopWidth:o,borderRightWidth:s,borderWidth:m,borderStyle:u,borderColor:d,...p}=(0,a.mq)("Divider",e),{className:f,orientation:g="horizontal",__css:y,...h}=(0,c.Lr)(e),b={vertical:{borderLeftWidth:r||s||m||"1px",height:"100%"},horizontal:{borderBottomWidth:i||o||m||"1px",width:"100%"}};return n.createElement(a.m$.hr,{ref:t,"aria-orientation":g,...h,__css:{...p,border:"0",borderColor:d,borderStyle:u,...b[g],...y},className:(0,l.cx)("chakra-divider",f)})}));h.displayName="Divider";var b=(0,a.Gp)((function(e,t){const{direction:r,align:i,justify:o,wrap:l,basis:c,grow:s,shrink:m,...u}=e,d={display:"flex",flexDirection:r,alignItems:i,justifyContent:o,flexWrap:l,flexBasis:c,flexGrow:s,flexShrink:m};return n.createElement(a.m$.div,{ref:t,__css:d,...u})}));b.displayName="Flex";var x=(0,a.Gp)((function(e,t){const{templateAreas:r,gap:i,rowGap:o,columnGap:l,column:c,row:s,autoFlow:m,autoRows:u,templateRows:d,autoColumns:p,templateColumns:f,...g}=e,y={display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:o,gridColumnGap:l,gridAutoColumns:p,gridColumn:c,gridRow:s,gridAutoFlow:m,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:f};return n.createElement(a.m$.div,{ref:t,__css:y,...g})}));function v(e){return o(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}x.displayName="Grid",(0,a.Gp)((function(e,t){const{area:r,colSpan:i,colStart:o,colEnd:l,rowEnd:c,rowSpan:m,rowStart:u,...d}=e,p=s({gridArea:r,gridColumn:v(i),gridRow:v(m),gridColumnStart:o,gridColumnEnd:l,gridRowStart:u,gridRowEnd:c});return n.createElement(a.m$.div,{ref:t,__css:p,...d})})).displayName="GridItem";var k=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Heading",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...o,__css:r})}));k.displayName="Heading";(0,a.Gp)((function(e,t){const r=(0,a.mq)("Mark",e),i=(0,c.Lr)(e);return n.createElement(p,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})}));(0,a.Gp)((function(e,t){const r=(0,a.mq)("Kbd",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.kbd,{ref:t,className:(0,l.cx)("chakra-kbd",i),...o,__css:{fontFamily:"mono",...r}})})).displayName="Kbd";var w=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Link",e),{className:i,isExternal:o,...s}=(0,c.Lr)(e);return n.createElement(a.m$.a,{target:o?"_blank":void 0,rel:o?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",i),...s,__css:r})}));w.displayName="Link";(0,a.Gp)((function(e,t){const{isExternal:r,target:i,rel:o,className:c,...s}=e;return n.createElement(a.m$.a,{...s,ref:t,className:(0,l.cx)("chakra-linkbox__overlay",c),rel:r?"noopener noreferrer":o,target:r?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),(0,a.Gp)((function(e,t){const{className:r,...i}=e;return n.createElement(a.m$.div,{ref:t,position:"relative",...i,className:(0,l.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}));var[E,_]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),N=(0,a.Gp)((function(e,t){const r=(0,a.jC)("List",e),{children:i,styleType:o="none",stylePosition:l,spacing:s,...m}=(0,c.Lr)(e),u=d(i),p=s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{};return n.createElement(E,{value:r},n.createElement(a.m$.ul,{ref:t,listStyleType:o,listStylePosition:l,role:"list",__css:{...r.container,...p},...m},u))}));N.displayName="List",(0,a.Gp)(((e,t)=>{const{as:r,...a}=e;return n.createElement(N,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})})).displayName="OrderedList";var S=(0,a.Gp)((function(e,t){const{as:r,...a}=e;return n.createElement(N,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}));S.displayName="UnorderedList";var C=(0,a.Gp)((function(e,t){const r=_();return n.createElement(a.m$.li,{ref:t,...e,__css:r.item})}));C.displayName="ListItem",(0,a.Gp)((function(e,t){const r=_();return n.createElement(m.JO,{ref:t,role:"presentation",...e,__css:r.icon})})).displayName="ListIcon",(0,a.Gp)((function(e,t){const{columns:r,spacingX:i,spacingY:l,spacing:c,minChildWidth:s,...m}=e,u=(0,a.Fg)(),d=s?function(e,t){return o(e,(e=>{const r=(0,a.LP)("sizes",e,"number"==typeof(n=e)?`${n}px`:n)(t);var n;return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}))}(s,u):o(r,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`));return n.createElement(x,{ref:t,gap:c,columnGap:i,rowGap:l,templateColumns:d,...m})})).displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var G="& > *:not(style) ~ *:not(style)";var L=e=>n.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});L.displayName="StackItem";var $=(0,a.Gp)(((e,t)=>{const{isInline:r,direction:i,align:c,justify:s,spacing:m="0.5rem",wrap:u,children:p,divider:f,className:g,shouldWrapChildren:y,...h}=e,b=r?"row":i??"column",x=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[G]:o(r,(e=>n[e]))}}({direction:b,spacing:m})),[b,m]),v=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":o(r,(e=>n[e]))}}({spacing:m,direction:b})),[m,b]),k=!!f,w=!y&&!k,E=(0,n.useMemo)((()=>{const e=d(p);return w?e:e.map(((t,r)=>{const a=void 0!==t.key?t.key:r,i=r+1===e.length,o=y?n.createElement(L,{key:a},t):t;if(!k)return o;const l=(0,n.cloneElement)(f,{__css:v}),c=i?null:l;return n.createElement(n.Fragment,{key:a},o,c)}))}),[f,v,k,w,y,p]),_=(0,l.cx)("chakra-stack",g);return n.createElement(a.m$.div,{ref:t,display:"flex",alignItems:c,justifyContent:s,flexDirection:x.flexDirection,flexWrap:u,className:_,__css:k?{}:{[G]:x[G]},...h},E)}));$.displayName="Stack";var j=(0,a.Gp)(((e,t)=>n.createElement($,{align:"center",...e,direction:"row",ref:t})));j.displayName="HStack";var O=(0,a.Gp)(((e,t)=>n.createElement($,{align:"center",...e,direction:"column",ref:t})));O.displayName="VStack";var W=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Text",e),{className:i,align:o,decoration:m,casing:u,...d}=(0,c.Lr)(e),p=s({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(a.m$.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...d,__css:r})}));function I(e){return"number"==typeof e?`${e}px`:e}W.displayName="Text",(0,a.Gp)((function(e,t){const{spacing:r="0.5rem",spacingX:i,spacingY:s,children:m,justify:u,direction:d,align:p,className:f,shouldWrapChildren:g,...y}=e,h=(0,n.useMemo)((()=>{const{spacingX:e=r,spacingY:t=r}={spacingX:i,spacingY:s};return{"--chakra-wrap-x-spacing":t=>o(e,(e=>I((0,c.fr)("space",e)(t)))),"--chakra-wrap-y-spacing":e=>o(t,(t=>I((0,c.fr)("space",t)(e)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:u,alignItems:p,flexDirection:d,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[r,i,s,u,p,d]),b=(0,n.useMemo)((()=>g?n.Children.map(m,((e,t)=>n.createElement(z,{key:t},e))):m),[m,g]);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-wrap",f),overflow:"hidden",...y},n.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:h},b))})).displayName="Wrap";var z=(0,a.Gp)((function(e,t){const{className:r,...i}=e;return n.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",r),...i})}));z.displayName="WrapItem"},1619:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(2627),i=r(2494),o=r(9583);function l(){return n.createElement(n.Fragment,null,n.createElement(a.M5,null,n.createElement(a.iz,{p:"10px",borderColor:"whiteAlpha.500",w:"1300px"})),n.createElement(a.M5,{justify:"center",p:"50px",color:"whiteAlpha.700"},n.createElement(a.gC,null,n.createElement(a.xv,null,"❤️ made by roland yang ❤️"),n.createElement(a.rU,{href:"https://github.com/rolandyangg/rolandyang-website",isExternal:!0},n.createElement(i.JO,{as:o.hJX})))))}},5347:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a=r(2627),i=r(3887),o=r(1883);const l=[{name:"background/experience",link:"/about"},{name:"projects",link:"/projects"},{name:"resume",link:"https://drive.google.com/file/d/1_IOzmp8a8JdewSncNE274h6pOH8LVXdL/view?usp=sharing"}];function c(){return n.createElement(a.M5,{justify:"center"},n.createElement(a.xu,{maxW:"1100px",w:"100%",mx:"25px",pt:{base:0,sm:5}},n.createElement(a.kC,{align:"center",justify:"space-between",flexDir:{base:"column",md:"row"},p:"20px"},n.createElement(a.kC,null,n.createElement(i.Ee,null),n.createElement(o.rU,{to:"/"},n.createElement(a.X6,{fontSize:"3xl"},"roland yang"))),n.createElement(a.Ug,{spacing:6,flexWrap:"wrap",justify:"center"},l.map(((e,t)=>n.createElement(o.rU,{to:e.link},n.createElement(a.xv,{color:"whiteAlpha.700",fontSize:"xl",_hover:{color:"white"},key:t},e.name))))))))}},6661:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(1698),a=r(8554),i=r.n(a);function o(e){return"function"==typeof e}var l=e=>function(...t){let r=[...t],a=t[t.length-1];return(0,n.gk)(a)&&r.length>1?r=r.slice(0,r.length-1):a=e,function(...e){return t=>e.reduce(((e,t)=>t(e)),t)}(...r.map((e=>t=>o(e)?e(t):s(t,e))))(a)},c=l(n.rS);l(n.wE);function s(...e){return i()({},...e,m)}function m(e,t,r,n){if((o(e)||o(t))&&Object.prototype.hasOwnProperty.call(n,r))return(...r)=>{const n=o(e)?e(...r):e,a=o(t)?t(...r):t;return i()({},n,a,m)}}var u=c({initialColorMode:"dark",useSystemColorMode:!1,colors:{secondary:"#171a23",primary:"#ffffff"},styles:{global:()=>({body:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",color:"white",backgroundColor:"secondary"},"&::-webkit-scrollbar":{width:"0.6em"},"&::-webkit-scrollbar-track":{borderRadius:"0px",background:"transparent"},"&::-webkit-scrollbar-thumb":{background:"primary",borderRadius:"50px"}})}})},4405:function(e,t,r){r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(m,o({attr:o({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var r,a=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),m=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=commons-88f6f40a8058eb25f108.js.map
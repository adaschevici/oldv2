"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("styled-components"),r=e(t),n=e(require("./fonts/Artifika-Regular.woff")),o=e(require("./fonts/Artifika-Regular.woff2")),i=e(require("react")),a=e(require("prop-types")),l=require("styled-system");function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y={bostonBlue:"#428bca",stTropaz:"#2a6496",maroonFlush:"#c7254e",softPeach:"#f9f2f4",mantis:"#6ECE5A",citrineWhite:"#FBF7DC",blues:["#004170","#006fbe","#2d8fd5","#5aa7de"]},b={heading:"Artifika",body:'"Verdana", sans-serif'},d={textStyles:{artifika:{tag:"h1",fontSize:[12,12,13,13,13,14],fontWeight:700,lineHeight:["32px","32px","36px","36px","56px","56px"],fontFamily:b.heading,color:y.blues[2]},bodyCopy:{tag:"p",fontSize:[3,3,4,4,5,5],fontFamily:b.body,lineHeight:["20px","20px","22px","22px","24px","24px"]},code:{tag:"span",px:"4px",py:"2px",lineHeight:"22px",color:y.maroonFlush,bg:y.softPeach,borderRadius:4,fontFamily:b.code},underline:{textDecoration:"underline"}},fontSizes:[12,13,14,15,16,18,20,21,22,24,26,28,32,36,52],width:[16,32,64,128,256],heights:[16,32,64,128,256],breakpoints:Object.values({xs:"0",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"}),colors:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},y)};function g(){var e=p(["\n  @font-face {\n    font-family: 'Artifika';\n    src: local('Artifika'), local('Artifika'),\n    url(",") format('woff2'),\n    url(",") format('woff');\n  };\n"]);return g=function(){return e},e}var x=t.createGlobalStyle(g(),o,n);function O(){var e=p(['\n  color: red;\n  font-family: "Artifika";\n']);return O=function(){return e},e}var h=function(e){var t=e.message,r=void 0===t?"this is an alert":t;return i.createElement("span",null,r)};h.propTypes={message:a.string};var m=r.div(O()),v={Alert:function(e){return i.createElement(m,null,i.createElement(x,null),i.createElement(h,e))}};function j(){var e=p(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return j=function(){return e},e}var P=r.div(j(),l.space,l.fontSize,l.fontStyle,l.color,l.size,l.colorStyle,l.textStyle,l.lineHeight,l.letterSpacing,l.fontFamily,l.fontWeight,l.borderRadius),w=function(e){var t=e.tag,r=void 0===t?"div":t,n=e.children,o=s(e,["tag","children"]);return i.createElement(P,c({as:r},o),n)};w.defaultProps={tag:"div"};var S=d.textStyles.artifika,k=d.textStyles.bodyCopy,E={Artifika:function(e){return i.createElement(w,c({},S,e),e.children)},Body:function(e){return i.createElement(w,c({},k,e),e.children)}};exports.GlobalFonts=x,exports.components=v,exports.theme=d,exports.typography=E;

(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"75Ph":function(e,t,r){e.exports={FilesDragAndDrop:"draghook-module--FilesDragAndDrop--3Ph2H",FilesDragAndDrop__placeholder:"draghook-module--FilesDragAndDrop__placeholder--2UzqE",FilesDragAndDrop_placeholder_error:"draghook-module--FilesDragAndDrop_placeholder_error--1dMMF",FilesDragAndDrop_placeholder_success:"draghook-module--FilesDragAndDrop_placeholder_success--2oLy6",area__icon:"draghook-module--area__icon--w9N0n",FilesDragAndDrop__area:"draghook-module--FilesDragAndDrop__area--3ZD_Q"}},TSYQ:function(e,t,r){var n;r("LK8F"),function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},YMul:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return w}));var n=r("q1tI"),o=r.n(n),a=(r("XuZe"),r("R/WZ")),l=r("Z3vd"),c=r("PsDL"),i=r("nV/U"),u=r.n(i),s=r("qKvR"),d=r("tB9+"),p=r.n(d),f=Object(a.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}})),b={name:"1gammwy",styles:"margin-top:5px"};function g(){var e=f();return Object(s.b)("div",{className:e.root,css:b},Object(s.b)("input",{accept:"*",className:e.input,id:"contained-button-file",multiple:!0,type:"file"}),Object(s.b)("span",{id:"progress"},"0%"),Object(s.b)("label",{htmlFor:"contained-button-file"},Object(s.b)(l.a,{variant:"contained",color:"default",className:e.button,startIcon:Object(s.b)(p.a,null),size:"large",component:"h1"},"Upload")),Object(s.b)("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file"}),Object(s.b)("label",{htmlFor:"icon-button-file"},Object(s.b)(c.a,{"aria-label":"upload picture",component:"h1",size:"large"},Object(s.b)(u.a,null))))}r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("f3/d"),r("rvZc"),r("TSYQ");var v=r("75Ph"),h=r.n(v);function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j={name:"rn65op",styles:"position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:9999;display:flex;align-items:center;justify-content:center;flex-flow:column nowrap;background-color:#e7e7e7;border-radius:12px;color:#ffffff;font-size:24px;opacity:1;text-align:center;line-height:1.4;"},O=function(e){var t=Object(n.useState)(!1),r=t[0],o=t[1],a=Object(n.useState)({show:!1,text:null,type:null}),l=a[0],c=a[1],i=Object(n.useRef)(),u=Object(n.useRef)();Object(n.useEffect)((function(){return i.current.addEventListener("dragover",d),i.current.addEventListener("drop",p),i.current.addEventListener("dragenter",f),i.current.addEventListener("dragleave",b),function(){i.current.removeEventListener("dragover",d),i.current.removeEventListener("drop",p),i.current.removeEventListener("dragenter",f),i.current.removeEventListener("dragleave",b)}}));var d=function(e){e.preventDefault(),e.stopPropagation()},p=function(t){t.preventDefault(),t.stopPropagation(),o(!1);var r=e.count,n=e.formats,a=m(t.dataTransfer.files);r&&r<a.length?g("Sorry, "+r+" files could be allowed!。","error",2e3):n&&a.some((function(e){return!n.some((function(t){return e.name.toLowerCase().endsWith(t.toLowerCase())}))}))?g("Only "+n.join(", ")+" files are allowed!","error",2e3):a&&a.length&&(g("Success！","success",1e3),e.onUpload(a))},f=function(e){e.preventDefault(),e.stopPropagation(),e.target!==u.current&&o(!0)},b=function(e){e.preventDefault(),e.stopPropagation(),e.target===u.current&&o(!1)},g=function(e,t,r){c({show:!0,text:e,type:t}),setTimeout((function(){return c({show:!1,text:null,type:null})}),r)};return Object(s.b)("div",{ref:i,className:h.a.FilesDragAndDrop},l.show&&Object(s.b)("div",{className:h.a.FilesDragAndDrop_placeholder_success},l.text),r&&Object(s.b)("div",{ref:u},Object(s.b)("span",{css:j},"Let it go.")),e.children)};var D=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).onUpload=function(e){console.log(e)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return Object(s.b)(O,{onUpload:this.onUpload,count:1,formats:["jpg","png","gif"]},Object(s.b)("div",{className:h.a.FilesDragAndDrop__area},"Drag the file here."))},n}(n.Component),_=r("0vn1");function w(){var e=o.a.useState(null);e[0],e[1];return Object(s.b)(_.a,null,Object(s.b)(g,null),Object(s.b)(D,null))}},"nV/U":function(e,t,r){"use strict";r("HAE/");var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),o.default.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"PhotoCamera");t.default=a},"tB9+":function(e,t,r){"use strict";r("HAE/");var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=a}}]);
//# sourceMappingURL=component---src-pages-upload-js-1259ced24dc4132f8717.js.map
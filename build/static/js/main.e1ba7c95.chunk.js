(this["webpackJsonpeditor-plugin-demo"]=this["webpackJsonpeditor-plugin-demo"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/presentation.b66bbadc.png"},18:function(e,t,n){e.exports=n(38)},23:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),o=(n(23),n(6)),l=n.n(o),i=n(12),u=n(13),d=n.n(u),m=n(17),f=n(14),p=n.n(f),v=function(e){var t=e.src,n=e.presentSlides,a=e.btnClassName;return r.a.createElement("div",{className:a},r.a.createElement("img",{className:"slides-btn",src:t||p.a,onClick:n}))},h=function(e){var t=e.reveal,n=e.slides,a=e.slidesData;return r.a.createElement("div",{className:"reveal",id:"reveal-node",ref:t,hidden:!0},r.a.createElement("div",{className:"slides",ref:n},a.length?a.map((function(e,t){return r.a.createElement("section",{key:"slide"+t,dangerouslySetInnerHTML:{__html:e}})})):null))},b=n(15),g=(n(33),n(34),function(e){var t=e.src,n=e.btnClassName,c=(e.slidesConfig,e.theme,Object(a.useState)([])),s=Object(m.a)(c,2),o=s[0],l=s[1],i=Object(a.useRef)(),u=Object(a.useRef)();Object(a.useEffect)((function(){i.current}),[]);var d=function(){var e=document.getElementsByClassName("ce-block"),t=[];if(e.length)for(var n=0;n<e.length;n++){var a=e[n];a.innerText&&a.innerText.trim()&&t.push(a.innerHTML)}l(t)},f=function(){var e=i.current;if(e){var t=new b.a(e,{embedded:!0});p(t),g(t)}},p=function(e){e.initialize({slideNumber:!0})},g=function(e){e.configure({keyboard:{70:null,27:C,13:"next",32:null}})},C=function(){i.current&&(i.current.hidden=!0)},E=function(){var e=i.current;if(!0!==e.hidden){var t=(e=e||document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e)}};return r.a.createElement("div",null,r.a.createElement(h,{reveal:i,slides:u,slidesData:o}),r.a.createElement(v,{src:t,btnClassName:n,presentSlides:function(){!o.length&&f(),d(),i.current.hidden=!1,E()}}))}),C=n(16),E=n.n(C),F=n(8),k=n.n(F),w=localStorage.getItem("blockCache"),N={holder:"editorjs",tools:{math:{class:E.a},Color:{class:k.a,config:{colorCollections:["#FF1300","#EC7878","#9C27B0","#673AB7","#3F51B5","#0070FF","#03A9F4","#00BCD4","#4CAF50","#8BC34A","#CDDC39","#FFF"],defaultColor:"#FF1300",type:"text"}},Marker:{class:k.a,config:{defaultColor:"#FFBF00",type:"marker"}}},data:{blocks:w?JSON.parse(w):[{type:"paragraph",data:{text:"editor plugin demos"}},{type:"math",data:{text:"\\{1,2,3,\\ldots ,n\\}"}}]}},y=(n(37),function(){var e=Object(a.useRef)();Object(a.useEffect)((function(){t()}),[]);var t=function(){if(e.current){e.current.id="editorjs";var t=new d.a(N);N.onChange=function(){n(t)}}},n=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.saver.save();case 2:n=e.sent,a=n.blocks,localStorage.setItem("blockCache",JSON.stringify(a)),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"editor-wrapper"},r.a.createElement(g,{btnClassName:"slides-btn-wrapper"}),r.a.createElement("div",{ref:e,className:"editor"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e1ba7c95.chunk.js.map
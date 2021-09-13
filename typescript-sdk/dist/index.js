var baroPayments=function(){"use strict";var t=function(){function t(){var t=this;this.go=function(){t.route()},window.addEventListener("hashchange",this.route.bind(this)),this.defaultRoute=null,this.routeTable=[]}return t.prototype.setDefaultPage=function(t,e){void 0===e&&(e=null),this.defaultRoute={path:"",page:t,params:e}},t.prototype.addRoutePath=function(t,e,n){void 0===n&&(n=null),this.routeTable.push({path:t,page:e,params:n})},t.prototype.route=function(){var t=location.hash;if(""===t&&this.defaultRoute)this.defaultRoute.page.render();else for(var e=0,n=this.routeTable;e<n.length;e++){var r=n[e];if(t.indexOf(r.path)>=0){if(r.params){var o=t.match(r.params);o&&r.page.render.apply(null,[o[1]])}else r.page.render();return}}},t}(),e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,n)};function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var r,o=function(){function t(t,e){var n=document.getElementById(t);if(!n)throw"최상위 컨테이너가 없어 UI를 진행하지 못합니다.";this.container=n,this.template=e,this.renderTemplate=e,this.htmlList=[]}return t.prototype.updateView=function(){this.container.innerHTML=this.renderTemplate,this.renderTemplate=this.template},t.prototype.addHtml=function(t){this.htmlList.push(t)},t.prototype.getHtml=function(){var t=this.htmlList.join("");return this.clearHtmlList(),t},t.prototype.setTemplateData=function(t,e){this.renderTemplate=this.renderTemplate.replace("{{__"+t+"__}}",e)},t.prototype.clearHtmlList=function(){this.htmlList=[]},t}(),a=function(){function t(t){this.ajax=new XMLHttpRequest,this.url=t}return t.prototype.getRequest=function(){return this.ajax.open("GET",this.url,!1),this.ajax.send(),JSON.parse(this.ajax.response)},t}(),i=function(t){function e(e){return t.call(this,e)||this}return n(e,t),e.prototype.getData=function(){return this.getRequest()},e}(a),s=function(t){function e(e){return t.call(this,e)||this}return n(e,t),e.prototype.getData=function(){return this.getRequest()},e}(a),l="https://api.hnpwa.com/v0/news/1.json",c="https://api.hnpwa.com/v0/item/@id.json",u='\n  <div class="bg-gray-600 min-h-screen pb-8">\n    <div class="bg-white text-xl">\n      <div class="mx-auto px-4">\n        <div class="flex justify-between items-center py-6">\n          <div class="flex justify-start">\n            <h1 class="font-extrabold">Hacker News</h1>\n          </div>\n          <div class="items-center justify-end">\n            <a href="#/page/{{__currentPage__}}" class="text-gray-500">\n              <i class="fa fa-times"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="h-full border rounded-xl bg-white m-6 p-4 ">\n      <h2>{{__title__}}</h2>\n      <div class="text-gray-400 h-20">\n        {{__content__}}\n      </div>\n      {{__comments__}}\n    </div>\n  </div>\n',f=function(t){function e(e){var n=t.call(this,e,u)||this;return n.render=function(t){for(var e=new s(c.replace("@id",t)),r=0;r<window.store.feeds.length;r++)if(window.store.feeds[r].id===Number(t)){window.store.feeds[r].read=!0;break}var o=e.getData();n.setTemplateData("currentPage",window.store.currentPage.toString()),n.setTemplateData("title",o.title),n.setTemplateData("content",o.content),n.setTemplateData("comments",n.makeComment(o.comments)),n.updateView()},n}return n(e,t),e.prototype.makeComment=function(t){for(var e=0;e<t.length;e++){var n=t[e];this.addHtml('\n        <div style="padding-left: '+40*n.level+'px;" class="mt-4">\n          <div class="text-gray-400">\n            <i class="fa fa-sort-up mr-2"></i>\n            <strong>'+n.user+"</strong> "+n.time_ago+'\n          </div>\n          <p class="text-gray-700">'+n.content+"</p>\n        </div>      \n      "),n.comments.length>0&&this.addHtml(this.makeComment(n.comments))}return this.getHtml()},e}(o),d='\n<div class="bg-gray-600 min-h-screen">\n  <div class="bg-white text-xl">\n    <div class="mx-auto px-4">\n      <div class="flex justify-between items-center py-6">\n        <div class="flex justify-start">\n          <h1 class="font-extrabold">Hacker News</h1>\n        </div>\n        <div class="items-center justify-end">\n          <a href="#/page/{{__prev_page__}}" class="text-gray-500">\n            Previous\n          </a>\n          <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">\n            Next\n          </a>\n        </div>\n      </div> \n    </div>\n  </div>\n  <div class="p-4 text-2xl text-gray-700">\n    {{__news_feed__}}        \n  </div>\n</div>\n',p=function(t){function e(e){var n=t.call(this,e,d)||this;return n.render=function(t){void 0===t&&(t="1"),window.store.currentPage=Number(t);for(var e=10*(window.store.currentPage-1);e<10*window.store.currentPage;e++){var r=n.feeds[e],o=r.id,a=r.title,i=r.comments_count,s=r.user,l=r.points,c=r.time_ago,u=r.read;n.addHtml('\n        <div class="p-6 '+(u?"bg-red-500":"bg-white")+' mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">\n          <div class="flex">\n            <div class="flex-auto">\n              <a href="#/show/'+o+'">'+a+'</a>  \n            </div>\n            <div class="text-center text-sm">\n              <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">'+i+'</div>\n            </div>\n          </div>\n          <div class="flex mt-3">\n            <div class="grid grid-cols-3 text-sm text-gray-500">\n              <div><i class="fas fa-user mr-1"></i>'+s+'</div>\n              <div><i class="fas fa-heart mr-1"></i>'+l+'</div>\n              <div><i class="far fa-clock mr-1"></i>'+c+"</div>\n            </div>  \n          </div>\n        </div>    \n      ")}n.setTemplateData("news_feed",n.getHtml()),n.setTemplateData("prev_page",String(window.store.currentPage>1?window.store.currentPage-1:1)),n.setTemplateData("next_page",String(window.store.currentPage+1)),n.updateView()},n.feeds=window.store.feeds,n.api=new i(l),0===window.store.feeds.length&&(n.feeds=window.store.feeds=n.api.getData(),n.makeFeeds()),n}return n(e,t),e.prototype.makeFeeds=function(){for(var t=0;t<this.feeds.length;t++)this.feeds[t].read=!1},e}(o),h=Object.prototype.toString,g=function(t){var e=h.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===h.call(t.callee)),n};if(!Object.keys){var v=Object.prototype.hasOwnProperty,m=Object.prototype.toString,y=g,w=Object.prototype.propertyIsEnumerable,b=!w.call({toString:null},"toString"),_=w.call(function(){},"prototype"),x=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],j=function(t){var e=t.constructor;return e&&e.prototype===t},O={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},T=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!O["$"+t]&&v.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{j(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();r=function(t){var e=null!==t&&"object"==typeof t,n="[object Function]"===m.call(t),r=y(t),o=e&&"[object String]"===m.call(t),a=[];if(!e&&!n&&!r)throw new TypeError("Object.keys called on a non-object");var i=_&&n;if(o&&t.length>0&&!v.call(t,0))for(var s=0;s<t.length;++s)a.push(String(s));if(r&&t.length>0)for(var l=0;l<t.length;++l)a.push(String(l));else for(var c in t)i&&"prototype"===c||!v.call(t,c)||a.push(String(c));if(b)for(var u=function(t){if("undefined"==typeof window||!T)return j(t);try{return j(t)}catch(t){return!1}}(t),f=0;f<x.length;++f)u&&"constructor"===x[f]||!v.call(t,x[f])||a.push(x[f]);return a}}var P=r,$=Array.prototype.slice,k=Object.keys,S=k?function(t){return k(t)}:P,D=Object.keys;S.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return g(t)?D($.call(t)):D(t)}):Object.keys=S;return Object.keys||S};var H=S,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),R=Object.prototype.toString,E=Array.prototype.concat,A=Object.defineProperty,C=A&&function(){var t={};try{for(var e in A(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),I=function(t,e,n,r){var o;e in t&&("function"!=typeof(o=r)||"[object Function]"!==R.call(o)||!r())||(C?A(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},N=function(t,e){var n=arguments.length>2?arguments[2]:{},r=H(e);L&&(r=E.call(r,Object.getOwnPropertySymbols(e)));for(var o=0;o<r.length;o+=1)I(t,r[o],e[r[o]],n[r[o]])};N.supportsDescriptors=!!C;var q=N,F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},M=F,V=function(){return"object"==typeof F&&F&&F.Math===Math&&F.Array===Array?F:M},X=V(),z=function(){return X};q(z,{getPolyfill:V,implementation:M,shim:function(){var t=V();if(q.supportsDescriptors){var e=Object.getOwnPropertyDescriptor(t,"globalThis");(!e||e.configurable&&(e.enumerable||e.writable||globalThis!==t))&&Object.defineProperty(t,"globalThis",{configurable:!0,enumerable:!1,value:t,writable:!1})}else"object"==typeof globalThis&&globalThis===t||(t.globalThis=t);return t}});var B=z;window.store={currentPage:1,feeds:[]};var W=new t,Y=new p("root"),G=new f("root");return{baroPayments:function(){return{requestPayment:function(){W.setDefaultPage(Y),W.addRoutePath("/page/",Y,/page\/(\d+)/),W.addRoutePath("/show/",G,/show\/(\d+)/),W.go()},testConsole:function(){console.log("1231231")}}},globalThis:B}}();

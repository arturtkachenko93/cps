!function(){"use strict";var e,t={57:function(e,t,o){var r=o(6),n=o(370),s=o.n(n),a=new URL(o(286),o.b),c=new URL(o(129),o.b),i=new URL(o(506),o.b),l=new URL(o(997),o.b),u=new URL(o(413),o.b),d=(s()(a),s()(c),s()(i),s()(l,{hash:"#logo"}),s()(u),o(483),document.querySelector(".page__body")),f=window.matchMedia("(min-width: 1440px)"),p=document.querySelector(".header__wrapper"),b=document.querySelector(".button-round--settings"),v=document.querySelector(".header__button-menu"),_=document.querySelector(".page__background-modal"),m=document.querySelector(".header__buttons-list"),g=document.querySelector(".header__body"),h=document.querySelector(".brands__button"),L=document.querySelector(".brands__list"),y=document.querySelector(".services__button"),w=document.querySelector(".repair__button"),k=document.querySelector(".repair__list"),S=document.querySelector(".services__text-content");r.ZP.use([r.tl]);var q=function(e){if(e.matches)return p.classList.remove("header__wrapper--closed"),void g.classList.remove("header__body--border-bottom");p.classList.contains("header__wrapper--closed")||(p.classList.add("header__wrapper--closed"),_.classList.remove("page__background-modal--visible"),m.classList.remove("header__buttons-list--offset"),v.classList.remove("header__button-menu--open"),g.classList.add("header__body--border-bottom"))};f.addListener(q),q(f);var x=function(){v.classList.toggle("header__button-menu--open"),p.classList.toggle("header__wrapper--closed"),m.classList.toggle("header__buttons-list--offset"),b.classList.toggle("button-round--search"),_.classList.toggle("page__background-modal--visible"),d.classList.remove("page__body--lock")};v.addEventListener("click",(function(){x()})),_.addEventListener("click",(function(e){x()})),d.addEventListener("keyup",(function(e){27===e.keyCode&&x()}));var E=function(e,t,o,r){e.textContent===t?(e.textContent=o,e.classList.add(r)):e.textContent===o&&(e.textContent=t,e.classList.remove(r))};y.addEventListener("click",(function(e){e.preventDefault(),S.classList.toggle("services__text-content--visible"),E(y,"Читать далее","Скрыть","services__button--rotate"),y.classList.toggle("services__button--bottom")})),h.addEventListener("click",(function(e){e.preventDefault(),L.classList.toggle("brands__list--visible"),E(h,"Показать все","Скрыть","brands__button--rotate")})),w.addEventListener("click",(function(e){e.preventDefault(),k.classList.toggle("repair__list--visible"),E(w,"Показать все","Скрыть","repair__button--rotate")}));var O,T=window.matchMedia("(min-width: 768px)"),j=function(){if(!0===T.matches){if(void 0!==O)return void O.forEach((function(e){e.destroy(!0,!0)}))}else if(!1===T.matches)return C()},C=function(){O=new r.ZP(".swiper",{loop:!0,loopedSlides:3,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",speed:800})};T.addListener(j),j();var R=document.querySelectorAll(".modal"),P=document.querySelector(".modals-overlay"),U=document.querySelectorAll("[data-modal-path]"),A=document.querySelectorAll(".modal__close-btn");U.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.getAttribute("data-modal-path");R.forEach((function(e){e.classList.remove("modal--visible")})),P.classList.toggle("modals-overlay--visible"),document.querySelector("[data-modal=".concat(t,"]")).classList.add("modal--visible"),d.classList.add("page__body--lock")}))})),A.forEach((function(e){e.addEventListener("click",(function(e){P.classList.toggle("modals-overlay--visible"),d.classList.remove("page__body--lock")}))})),P.addEventListener("click",(function(e){e.target===P&&P.classList.toggle("modals-overlay--visible")}))},413:function(e,t,o){e.exports=o.p+"img/background.0f905316b961268bea00.jpg"},997:function(e,t,o){e.exports=o.p+"img/sprite.0685e8f754ba1e91e738.svg"},506:function(e,t,o){e.exports=o.p+"fonts/TTLakes-Bold.3750af0c5a65997479fb.woff2"},129:function(e,t,o){e.exports=o.p+"fonts/TTLakes-Medium.502cc6673c05ca781a40.woff2"},286:function(e,t,o){e.exports=o.p+"fonts/TTLakes-Regular.a75a583179bfc363c2aa.woff2"}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var s=o[e]={exports:{}};return t[e].call(s.exports,s,s.exports,r),s.exports}r.m=t,e=[],r.O=function(t,o,n,s){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],s=e[u][2];for(var c=!0,i=0;i<o.length;i++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[i])}))?o.splice(i--,1):(c=!1,s<a&&(a=s));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,n,s]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){r.b=document.baseURI||self.location.href;var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],c=o[1],i=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(i)var u=i(r)}for(t&&t(o);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[a[l]]=0;return r.O(u)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=r.O(void 0,[489],(function(){return r(57)}));n=r.O(n)}();
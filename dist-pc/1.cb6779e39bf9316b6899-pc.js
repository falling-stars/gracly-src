(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(t,e,a){"use strict";a.r(e);var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var n={data:function(){return{introduce:[{text1:"低耦合组件库",text2:"功能轻松引入",tag:"fa fa-codepen"},{text1:"函数式基础库",text2:"灵活易于扩展",tag:"fa fa-superscript"},{text1:"专注性能优化",text2:"打破性能瓶颈",tag:"fa fa-line-chart"},{text1:"交互体验提升",text2:"极致的用户体验",tag:"fa fa-refresh"}],stage:null,back:null,centerX:0,centerY:0,rotateX:0,rotateY:0}},methods:{move3d:function(t){this.back.style.transform="translateZ(1.2rem) rotateX("+-(t.pageY-this.centerY)*this.rotateY+"deg) rotateY("+(t.pageX-this.centerX)*this.rotateX+"deg)"}},activated:function(){var t,e,a,n,s=this;!function(){var t=document.getElementsByTagName("canvas")[0],e=t.getContext("2d"),a=document.getElementsByClassName("stage")[0].clientWidth;t.width=a,t.height=560;var n=function(){function t(e,a,i,n,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.X=e,this.Y=a,this.Spend=n,this.Size=i,this.Length=s,this.random=Math.random}return i(t,[{key:"create",value:function(){e.beginPath(),e.arc(this.X,this.Y,this.Size,0,2*Math.PI),e.fillStyle="white",e.shadowBlur=10,e.shadowColor="#F0F0F0",e.fill(),e.beginPath(),e.fillStyle="rgba(255,255,255,0.8)",e.moveTo(this.X-this.Size+1.5,this.Y-this.Size-.2),e.lineTo(this.X+this.Length,this.Y-this.Length),e.lineTo(this.X,this.Y+this.Size+.5),e.closePath(),e.fill()}},{key:"move",value:function(){this.Y+=this.Spend,this.X-=this.Spend,this.create(this.X,this.Y),this.Y>570&&this.X<-10&&(this.Y=-60*this.random(),this.X=this.random()*a+200,this.Size=this.random()+.5,this.Length=35*this.random()+20,this.Spend=this.random()+1)}}]),t}(),r=new n(70,-20,1.5,.5,50);r.create();var o=new n(170,-100,1.2,1.1,50);o.create();var c=new n(600,-3,1.2,1.5,40);c.create();var h=new n(870,-70,1.2,1,50);h.create();var l=new n(1270,-55,1.3,1,38);l.create();var u=new n(300,-10,1.2,1,46);u.create();!function t(){e.clearRect(0,0,a,560),r.move(),o.move(),c.move(),h.move(),l.move(),u.move(),"/"===s.$route.path&&setTimeout(t,20)}()}(),t=document.getElementById("download"),e=0,a=0,n=function(){var a=-200;return function(){0===e&&(e=1,setTimeout(function i(){a<200?(a+=10,t.style.background="linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat "+a+"px 0/auto auto",setTimeout(i,10)):(t.style.background="linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat -200px 0/auto auto",a=-200,e=0)},0))}},setTimeout(n(),1e3),t.onmousemove=function(t){return 0===a&&n()()||(a=1)},t.onmouseout=function(){return a=0}},mounted:function(){this.stage=document.getElementsByClassName("stage")[0],this.back=document.getElementsByClassName("back")[0],this.centerX=this.back.clientWidth/2,this.centerY=this.back.clientHeight/2,this.rotateX=3/this.centerX,this.rotateY=3/this.centerY}},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"stage full-width relative overflow-hide",on:{mousemove:t.move3d}},[a("div",{staticClass:"back full-height full-width absolute"}),t._v(" "),t._m(0),t._v(" "),a("canvas",{staticClass:"absolute full-width full-height"})]),t._v(" "),a("div",{staticClass:"introduce white-bg text-center flex  flex-justify-around"},t._l(t.introduce,function(e){return a("div",{staticClass:"text-center flex-child-noshrink"},[a("div",{staticClass:"circle flex flex-center"},[a("i",{staticClass:"grey-6",class:e.tag,attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"black-3 block font-16 black margin-top normal line-height-1_5"},[t._v(t._s(e.text1))]),t._v(" "),a("span",{staticClass:"grey-9 block font-14 line-height-1_5"},[t._v(t._s(e.text2))])])}))])};s._withStripped=!0;var r=a(0),o=!1;var c=function(t){o||a(9)},h=Object(r.a)(n,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text absolute text-center full-width full-height"},[e("h1",{staticClass:"block white normal"},[this._v("gracly")]),this._v(" "),e("h2",{staticClass:"block white normal"},[this._v("PWA渐进式前端框架")]),this._v(" "),e("button",{staticClass:"pointer white font-18",attrs:{id:"download"}},[this._v("立即下载")])])}],!1,c,"data-v-26a712df",null);h.options.__file="pc\\pages\\index.vue";e.default=h.exports},9:function(t,e){}}]);
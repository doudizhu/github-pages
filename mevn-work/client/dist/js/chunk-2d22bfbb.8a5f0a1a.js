(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bfbb"],{f0fa:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cube-tab-bar",{ref:"tabNav",attrs:{data:e.tabs,showSlider:""},model:{value:e.selectedLabel,callback:function(t){e.selectedLabel=t},expression:"selectedLabel"}}),a("cube-slide",{ref:"slide",attrs:{"initial-index":e.initialIndex,data:e.tabs,"auto-play":!1,"show-dots":!1,options:{listenScroll:!0,probeType:3},loop:!1},on:{change:e.changePage,scroll:e.scroll}},e._l(e.tabs,(function(t,l){return a("cube-slide-item",{key:l},[a("ul",e._l(t.heroes,(function(t,l){return a("li",{key:l,staticClass:"tab-panel-li"},[e._v(e._s(t))])})),0)])})),1)],1)},s=[],i=a("d225"),n=a("b0b4"),b=a("308d"),c=a("6bb5"),r=a("4e2b"),o=a("9ab4"),d=a("d257"),u=a("60a3"),h=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(b["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.selectedLabel="天辉",e.tabs=[{label:"天辉",heroes:["敌法师","卓尔游侠","主宰","米拉娜","变体精灵","幻影长矛手","复仇之魂","力丸","矮人狙击手","圣堂刺客","露娜","赏金猎人","熊战士","矮人狙击手","圣堂刺客","露娜","赏金猎人","熊战士","矮人狙击手","圣堂刺客","露娜","赏金猎人","熊战士","矮人狙击手","圣堂刺客","露娜","赏金猎人","熊战士","矮人狙击手","圣堂刺客","露娜","赏金猎人","熊战士"]},{label:"夜魇",heroes:["血魔","影魔","剃刀","剧毒术士","虚空假面","幻影刺客","冥界亚龙","克林克兹","育母蜘蛛","编织者","幽鬼","司夜刺客","米波"]}],e}return Object(r["a"])(t,e),Object(n["a"])(t,[{key:"changePage",value:function(e){this.selectedLabel=this.tabs[e].label}},{key:"scroll",value:function(e){var t=Math.abs(e.x),a=this.$refs.tabNav.$el.clientWidth,l=this.$refs.slide.slide.scrollerWidth,s=t/l*a;this.$refs.tabNav.setSliderTransform(s)}},{key:"initialIndex",get:function(){return Object(d["b"])(this.tabs,{label:this.selectedLabel})}}]),t}(u["d"]);h=Object(o["a"])([Object(u["a"])({components:{}})],h);var f=h,p=f,v=a("2877"),j=Object(v["a"])(p,l,s,!1,null,"5e8eaba5",null);t["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d22bfbb.8a5f0a1a.js.map
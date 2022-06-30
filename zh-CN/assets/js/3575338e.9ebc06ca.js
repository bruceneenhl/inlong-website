"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2278],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=c(n),g=a,s=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return n?r.createElement(s,o(o({ref:e},d),{},{components:n})):r.createElement(s,o({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12447:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u57fa\u672c\u6982\u5ff5",sidebar_position:1},o=void 0,i={unversionedId:"design_and_concept/basic_concept",id:"design_and_concept/basic_concept",title:"\u57fa\u672c\u6982\u5ff5",description:"| Name                      | Description                                                  | Other                                         |",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/design_and_concept/basic_concept.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/basic_concept",permalink:"/zh-CN/docs/next/design_and_concept/basic_concept",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/design_and_concept/basic_concept.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u57fa\u672c\u6982\u5ff5",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"InLong \u7b80\u4ecb",permalink:"/zh-CN/docs/next/introduction"},next:{title:"Agent \u63d2\u4ef6",permalink:"/zh-CN/docs/next/design_and_concept/how_to_write_plugin_agent"}},p={},c=[],d={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Other"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Standard Architecture"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u67b6\u6784\uff0c\u5305\u542b InLong Agent/Manager/MQ/Sort/Dashboard \u7b49\u6240\u6709 InLong \u7ec4\u4ef6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9002\u5408\u6d77\u91cf\u6570\u636e\u3001\u5927\u89c4\u6a21\u751f\u4ea7\u73af\u5883")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lightweight Architecture"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f7b\u91cf\u5316\u67b6\u6784\uff0c\u53ea\u5305\u542b InLong Sort \u4e00\u4e2a\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u642d\u914d Manager/Dashboard \u4e00\u8d77\u4f7f\u7528"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f7b\u91cf\u5316\u67b6\u6784\u7b80\u5355\u3001\u7075\u6d3b\uff0c\u9002\u5408\u5c0f\u89c4\u6a21\u6570\u636e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u7ec4\uff0c\u5305\u542b\u591a\u4e2a\u6570\u636e\u6d41\uff0c\u4e00\u4e2aGroup \u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u63a5\u5165"),(0,a.kt)("td",{parentName:"tr",align:null},"Group \u6709ID\u3001Name \u7b49\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\uff0c\u4e00\u4e2a\u6570\u636e\u6d41\u6709\u5177\u4f53\u7684\u6d41\u5411"),(0,a.kt)("td",{parentName:"tr",align:null},"Stream \u6709ID\u3001Name\u3001\u6570\u636e\u5b57\u6bb5\u7b49\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8282\u70b9\uff0c\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"td"},"Extract Node")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"Load Node"),"\uff0c\u5206\u522b\u4ee3\u8868\u6570\u636e\u6e90\u7c7b\u578b\u548c\u6570\u636e\u6d41\u5411\u76ee\u6807\u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"InLongMsg"),(0,a.kt)("td",{parentName:"tr",align:null},"InLong \u6570\u636e\u683c\u5f0f\uff0c\u5982\u679c\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u76f4\u63a5\u6d88\u8d39\uff0c\u9700\u8981\u5148\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"td"},"InLongMsg")," \u89e3\u6790"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Agent"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u67b6\u6784\u4f7f\u7528 Agent \u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cAgent \u4ee3\u8868\u4e0d\u540c\u7c7b\u578b\u7684\u91c7\u96c6\u80fd\u529b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u6587\u4ef6 Agent\u3001SQL Agent\u3001Binlog Agent \u7b49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DataProxy"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u8f6c\u53d1\u5230\u4e0d\u540c\u7684\u6d88\u606f\u961f\u5217"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u548c\u843d\u76d8\u91cd\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u5206\u62e3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u6709\u57fa\u4e8e Flink \u7684 sort-flink\uff0csort-standalone \u672c\u5730\u5206\u62e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TubeMQ"),(0,a.kt)("td",{parentName:"tr",align:null},"InLong \u81ea\u5e26\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e5f\u53ef\u4ee5\u53eb Tube\uff0c\u62e5\u6709\u4f4e\u6210\u672c\u3001\u9ad8\u6027\u80fd\u7279\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5373",(0,a.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Apache Pulsar"),", \u9ad8\u6027\u80fd\u3001\u9ad8\u4e00\u81f4\u6027\u6d88\u606f\u961f\u5217\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6212],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||u;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),o=["components"],i={title:"\u5b89\u88c5\u90e8\u7f72"},l=void 0,c={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-0.12.0/modules/tubemq/tubemq-manager/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u5b89\u88c5\u6587\u4ef6\u5728inlong-tubemq-manager\u76ee\u5f55.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/zh-CN/docs/modules/tubemq/tubemq-manager/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"0.12.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/tubemq/tubemq-manager/overview"},next:{title:"\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d",permalink:"/zh-CN/docs/modules/tubemq/client_partition_assign_introduction"}},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[],level:2},{value:"\u521d\u59cb\u5316TubeMQ\u96c6\u7fa4",id:"\u521d\u59cb\u5316tubemq\u96c6\u7fa4",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728inlong-tubemq-manager\u76ee\u5f55."),(0,u.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5728mysql\u4e2d\u521b\u5efa",(0,u.kt)("inlineCode",{parentName:"li"},"tubemanager"),"\u6570\u636e\u548c\u76f8\u5e94\u7528\u6237."),(0,u.kt)("li",{parentName:"ul"},"\u5728conf/application.properties\u4e2d\u6dfb\u52a0mysql\u4fe1\u606f\uff1a")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,u.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,u.kt)("h2",{id:"\u521d\u59cb\u5316tubemq\u96c6\u7fa4"},"\u521d\u59cb\u5316TubeMQ\u96c6\u7fa4"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,u.kt)("p",null,"\u66ff\u6362\u5982\u4e0b\u516d\u4e2a\u53c2\u6570"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=   //tube manager\u670d\u52a1\u542f\u52a8ip\nTUBE_MANAGER_PORT=   //tube manager\u670d\u52a1\u542f\u52a8port\nTUBE_MASTER_IP=   //tube \u96c6\u7fa4master ip\nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,u.kt)("p",null,"\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,u.kt)("p",null,"\u5982\u4e0a\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2aclusterId\u4e3a1\u7684tube\u96c6\u7fa4\uff0c\u6ce8\u610f\u8be5\u64cd\u4f5c\u53ea\u8fdb\u884c\u4e00\u6b21\uff0c\u4e4b\u540e\u91cd\u542f\u670d\u52a1\u65e0\u9700\u65b0\u5efa\u96c6\u7fa4"))}p.isMDXComponent=!0}}]);
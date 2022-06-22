"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Docker",sidebar_position:2},l=void 0,p={unversionedId:"deployment/docker",id:"version-1.1.0/deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/versioned_docs/version-1.1.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/1.1.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/deployment/docker.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/1.1.0/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/1.1.0/deployment/k8s"}},i={},s=[{value:"Build",id:"build",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Register Component",id:"register-component",level:2},{value:"Usage",id:"usage",level:2},{value:"Destroy",id:"destroy",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Notice: The default message queue services is Apache Pulsar for Docker.")),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"you can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/quick_start/how_to_build"},"How to Build"),"."),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Start all components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"register-component"},"Register Component"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataProxy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n   "name": "default_dataproxy",\n   "type": "DATA_PROXY",\n   "ip": "dataproxy",\n   "port": 46801,\n   "mqSetName": "default_set_name",\n   "inCharges": "admin",\n   "creator": "admin"\n}\n\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pulsar")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n        "name": "pulsar_cluster",\n        "type": "PULSAR",\n        "url": "pulsar://pulsar:6650",\n        "token": "null",\n        "mqSetName": "default_set_name",\n        "extParams": "{\\"pulsar_adminUrl\\": \\"http://pulsar:8080\\"}",\n        "inCharges": "admin",\n        "creator": "admin"\n}\'\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"After all containers run successfully, you can access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}u.isMDXComponent=!0}}]);
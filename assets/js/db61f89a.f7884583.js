"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Pulsar Example",sidebar_position:2},o=void 0,l={unversionedId:"quick_start/pulsar_example",id:"version-1.1.0/quick_start/pulsar_example",title:"Pulsar Example",description:"Apache InLong has increased the ability to access data through Apache Pulsar, taking full advantage of Pulsar's technical advantages that are different from other MQ, and providing complete solutions for data integration scenarios with higher data quality requirements such as finance and billing.",source:"@site/versioned_docs/version-1.1.0/quick_start/pulsar_example.md",sourceDirName:"quick_start",slug:"/quick_start/pulsar_example",permalink:"/docs/1.1.0/quick_start/pulsar_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/quick_start/pulsar_example.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"Pulsar Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hive Example",permalink:"/docs/1.1.0/quick_start/hive_example"},next:{title:"Standalone",permalink:"/docs/1.1.0/deployment/standalone"}},s={},c=[{value:"Install Pulsar",id:"install-pulsar",level:2},{value:"Install Hive",id:"install-hive",level:2},{value:"Install InLong",id:"install-inlong",level:2},{value:"Create a data ingestion",id:"create-a-data-ingestion",level:2},{value:"Configure data streams group information",id:"configure-data-streams-group-information",level:3},{value:"Configure data stream",id:"configure-data-stream",level:3},{value:"Configure File Agent",id:"configure-file-agent",level:3},{value:"Configure data information",id:"configure-data-information",level:3},{value:"Configure Hive cluster",id:"configure-hive-cluster",level:3},{value:"Data ingestion Approval",id:"data-ingestion-approval",level:2},{value:"Configure File Agent",id:"configure-file-agent-1",level:2},{value:"Data Check",id:"data-check",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache InLong has increased the ability to access data through Apache Pulsar, taking full advantage of Pulsar's technical advantages that are different from other MQ, and providing complete solutions for data integration scenarios with higher data quality requirements such as finance and billing.\nIn the following content, we will use a complete example to introduce Apache Pulsar to access data through Apache InLong."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Group",src:a(30179).Z,width:"1751",height:"306"})),(0,r.kt)("h2",{id:"install-pulsar"},"Install Pulsar"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/standalone/"},"Official Installation Guidelines"),"."),(0,r.kt)("h2",{id:"install-hive"},"Install Hive"),(0,r.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,r.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,r.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,r.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/deployment/docker"},"instructions here"),".(Recommanded)"),(0,r.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/deployment/bare_metal"},"instructions here"),".")),(0,r.kt)("h2",{id:"create-a-data-ingestion"},"Create a data ingestion"),(0,r.kt)("h3",{id:"configure-data-streams-group-information"},"Configure data streams group information"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(13791).Z,width:"709",height:"886"}),"\nWhen creating data ingestion, the message middleware that the data stream group can use is Pulsar,\nand other configuration items related to Pulsar include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Queue module: Parallel or Serial, when selecting parallel, you can set the number of topic partitions"),(0,r.kt)("li",{parentName:"ul"},"Write quorum: Number of copies to store for each message"),(0,r.kt)("li",{parentName:"ul"},"Ack quorum: Number of guaranteed copies (acks to wait before write is complete)"),(0,r.kt)("li",{parentName:"ul"},"retention time: retention time for the consumed message"),(0,r.kt)("li",{parentName:"ul"},"ttl: The default Time to Live for message"),(0,r.kt)("li",{parentName:"ul"},"retention size: retention size for the consumed message")),(0,r.kt)("h3",{id:"configure-data-stream"},"Configure data stream"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(67534).Z,width:"1090",height:"543"})),(0,r.kt)("h3",{id:"configure-file-agent"},"Configure File Agent"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(67357).Z,width:"827",height:"388"})),(0,r.kt)("h3",{id:"configure-data-information"},"Configure data information"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26458).Z,width:"1090",height:"591"})),(0,r.kt)("h3",{id:"configure-hive-cluster"},"Configure Hive cluster"),(0,r.kt)("p",null,'Save Hive cluster information, click "Ok" to submit.\n',(0,r.kt)("img",{src:a(43411).Z,width:"1006",height:"703"})),(0,r.kt)("h2",{id:"data-ingestion-approval"},"Data ingestion Approval"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("strong",{parentName:"p"},"Approval")," page, click ",(0,r.kt)("strong",{parentName:"p"},"My Approval"),", abd approve the data ingestion application. After the approval is over,\nthe topics and subscriptions required for the data stream will be created in the Pulsar cluster synchronously.\nWe can use the command-line tool in the Pulsar cluster to check whether the topic is created successfully."),(0,r.kt)("h2",{id:"configure-file-agent-1"},"Configure File Agent"),(0,r.kt)("p",null,"Then we need to create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> /data/collect-data/test.log\ndone\n')),(0,r.kt)("p",null,"Then you can observe the Audit Data Pages, and see that the data has been collected and sent successfully."),(0,r.kt)("h2",{id:"data-check"},"Data Check"),(0,r.kt)("p",null,"Finally, we log in to the Hive cluster and use Hive SQL commands to check\nwhether data is successfully inserted in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test_stream")," table."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If data is not correctly written to the Hive cluster, you can check whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataProxy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sort")," related information are synchronized:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check whether the topic information corresponding to the data stream is correctly written in the ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/topics.properties")," folder of ",(0,r.kt)("inlineCode",{parentName:"li"},"InLong DataProxy"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"b_test_group/test_stream=persistent://public/b_test_group/test_stream\n")))}p.isMDXComponent=!0},67357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file-source-46b2dcbc5e869ade504ca5e40c69ce0a.png"},30179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-arch-fc9241768fd9bc0c2f8224734e53e202.png"},26458:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-data-56ca16da9405a3e6a6b7017d71cb7837.png"},13791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-group-762dc9b57c7903a26a2c71c8d29a4ab6.png"},43411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-hive-8170f49696fc889e32eb762a4d7a748d.png"},67534:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-stream-235cf40d9d3a220cff9d1074b524e38b.png"}}]);
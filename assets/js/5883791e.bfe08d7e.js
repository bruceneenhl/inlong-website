"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[517],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71495:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Standalone",sidebar_position:1},s=void 0,p={unversionedId:"deployment/standalone",id:"deployment/standalone",title:"Standalone",description:"Environment Requirements",source:"@site/docs/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/docs/next/deployment/standalone",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Standalone",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar Example",permalink:"/docs/next/quick_start/pulsar_example"},next:{title:"Docker",permalink:"/docs/next/deployment/docker"}},u=[{value:"Environment Requirements",id:"environment-requirements",children:[],level:2},{value:"Configure",id:"configure",children:[],level:2},{value:"Start",id:"start",children:[],level:2},{value:"Stop",id:"stop",children:[],level:2},{value:"Check",id:"check",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,o.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,o.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,o.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (Optional)"),(0,o.kt)("li",{parentName:"ul"},"Docker or Nginx ")),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),", replace the relevant global configuration parameters according to the actual situation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"###############################################################################\n# Selection of message queue source: tubemq or pulsar\nsource_type=tubemq\n# Selection of sort sink: hive or clickhouse\nsink_type=hive\n###############################################################################\n\n# agent\n###############################################################################\nagent_local_ip=127.0.0.1\n# whether to enable prometheus\nagent_prometheus_enable=false\n# whether to enable audit\nagent_audit_enable=true\n###############################################################################\n\n# dataproxy\n###############################################################################\ndataproxy_ip=127.0.0.1\n###############################################################################\n\n# audit proxy\n###############################################################################\naudit_proxys_ip=127.0.0.1\n###############################################################################\n\n###############################################################################\n# mysql(Required) (tubemanager,apache_inlong_manager,apache_inlong_audit)\n###############################################################################\n# MySQL service, IP, port, user and password\nspring_datasource_hostname=MYSQL_HOSTNAME\nspring_datasource_port=MYSQL_PORT\nspring_datasource_username=MYSQL_USERNAME\nspring_datasource_password=MYSQL_PASSWORD\n###############################################################################\n\n# zookeeper(Required)\n###############################################################################\n# zookeeper address\nzkserver_addr=127.0.0.1:2181\n###############################################################################\n\n# tubemq (Optional)\n###############################################################################\n# master\n# host address of master, required; must be configured at network card, enabled\ntubemaster_hostname=YOU_LOCAL_IP\n# port that master listens to, optional; default is 8715\ntubemaster_port=8715\n# port that master web console listens to\ntubemaster_webport=8080\n# metaDataPath\nmetadata_path=/stage/meta_data\n# This token is used for page configuration, API call, etc\nconfmod_authtoken=abc\n\n# broker\n# unique id of broker server, required; when set to 0, TubeMQ will retrieve\n# IP, convert to int and set as brokerID\nbroker_id=1\n# hostname of broker server, required\ntubebroker_hostname=YOU_LOCAL_IP\n# port that broker server listens to, optional; default is 8123\ntubebroker_port=8123\n# port that broker web console listens to\ntubebroker_webport=8081\n# path to message files\nprimary_path=/stage/msg_data\n\n# manager(Required)\n# the parameters for init cluster\ntube_manager_ip=YOU_LOCAL_IP\ntube_manager_port=8089\n###############################################################################\n\n# pulsar (Optional)\n###############################################################################\n# Service address of pulsar (Required)\npulsar_admin_url=http://127.0.0.1:8080\n# Pulsar broker address\uff08Required\uff09\npulsar_service_url=pulsar://127.0.0.1:6650\n# Default tenant of Pulsar\npulsar_default_tenant=public\n###############################################################################\n\n# inlong manager\n###############################################################################\n# manager-web (Required)\nmanager_server_hostname=127.0.0.1\nmanager_server_port=8083\n# The default configuration file is dev\nspring_profiles_active=dev\ncluster_zk_root=inlong_hive\n# app_name-InLong Sort is cluster-id\nsort_app_name=inlong_app\n###############################################################################\n\n# inlong website(Required)\n###############################################################################\n# port\ninlong_web_port=80\n# docker port\ndocker_inlong_web_port=80\n###############################################################################\n\n# local_ip(Required)\n###############################################################################\nlocal_ip=YOU_LOCAL_IP\n############################################################################### \n")),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,o.kt)("h2",{id:"stop"},"Stop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon stop standalone\n")),(0,o.kt)("h2",{id:"check"},"Check"),(0,o.kt)("p",null,"After the startup script is completed, ",(0,o.kt)("inlineCode",{parentName:"p"},"jps -l")," checks whether there are the following processes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2417 org.apache.flink.runtime.taskexecutor.TaskManagerRunner\n32658 org.apache.zookeeper.server.quorum.QuorumPeerMain\n20676 org.apache.inlong.manager.web.InLongWebApplication\n14628 org.apache.inlong.tubemq.manager.TubeMQManager\n1909 org.apache.flink.runtime.entrypoint.StandaloneSessionClusterEntrypoint\n13909 org.apache.inlong.tubemq.server.tools.MasterStartup\n12071 /root/app/apache-inlong-1.1.0-incubating-SNAPSHOT/inlong-audit/lib/audit-store-1.1.0-incubating-SNAPSHOT.jar\n19384 org.apache.inlong.dataproxy.node.Application\n20168 org.apache.inlong.agent.core.AgentMain\n14058 sun.tools.jps.Jps\n13210 org.apache.inlong.audit.node.Application\n17547 org.apache.inlong.tubemq.server.tools.BrokerStartup\n")),(0,o.kt)("p",null,"If a component does not start or starts abnormally (stop and then start), you can use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start|stop agent/dataproxy/tubemaster/manager...\n")),(0,o.kt)("p",null,"After all component run successfully, you can access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"User: admin\nPassword: inlong\n")))}d.isMDXComponent=!0}}]);
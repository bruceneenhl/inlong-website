"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[968],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92531:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={title:"How to Verify release",sidebar_position:7},o=void 0,c={unversionedId:"how-to-verify",id:"how-to-verify",title:"How to Verify release",description:"To verify the release, the following checklist can be used to reference:",source:"@site/community/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/community/how-to-verify",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/community/how-to-verify.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"How to Verify release",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/community/how-to-release"},next:{title:"How to Report Issues",permalink:"/community/how-to-report-issues"}},p={},u=[{value:"Download the release package to be verified to the local environment",id:"download-the-release-package-to-be-verified-to-the-local-environment",level:2},{value:"Verify signature and hash",id:"verify-signature-and-hash",level:2},{value:"Check if the release package is complete",id:"check-if-the-release-package-is-complete",level:3},{value:"Verify signature and hash",id:"verify-signature-and-hash-1",level:3},{value:"Verify sha512 hash",id:"verify-sha512-hash",level:3},{value:"Check the file content of the source package",id:"check-the-file-content-of-the-source-package",level:3},{value:"Check the binary package (if the binary package is included)",id:"check-the-binary-package-if-the-binary-package-is-included",level:3}],h={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To verify the release, the following checklist can be used to reference:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download links are valid."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Checksums and PGP signatures are valid."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DISCLAIMER is included."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Source code artifacts have correct names matching the current release."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","LICENSE and NOTICE files are correct for the repository."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All files have license headers if necessary."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","No compiled archives bundled in source archive."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Building is OK.")),(0,i.kt)("p",null,"For a detailed checklist, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list"),", here we introduce how to do the verification."),(0,i.kt)("h2",{id:"download-the-release-package-to-be-verified-to-the-local-environment"},"Download the release package to be verified to the local environment"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Use the following command to download all artifacts, replace "${release_version}-${rc_version}" with the version ID of the version to be released:'),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/incubator/inlong/${release_version}-${rc_version}/\n"))),(0,i.kt)("h2",{id:"verify-signature-and-hash"},"Verify signature and hash"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Start the verification process, which includes but is not limited to the following content and verification methods.\nGnuPG is recommended, which can install by yum install gnupg or apt-get install gnupg.")),(0,i.kt)("h3",{id:"check-if-the-release-package-is-complete"},"Check if the release package is complete"),(0,i.kt)("p",null,"The package to release must check:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whether to include the source code package"),(0,i.kt)("li",{parentName:"ul"},"Whether to include the signature of the source code package"),(0,i.kt)("li",{parentName:"ul"},"Whether to include the sha512 of the source code package"),(0,i.kt)("li",{parentName:"ul"},"(if include) Check the binary package, also check the contents listed in (2)-(4)")),(0,i.kt)("h3",{id:"verify-signature-and-hash-1"},"Verify signature and hash"),(0,i.kt)("p",null,"GnuPG is recommended, which can install by yum install GnuPG or apt-get install GnuPG."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import public key",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/incubator/inlong/KEYS > KEYS # Download KEYS\ngpg --import KEYS # Import KEYS to local\n"))),(0,i.kt)("li",{parentName:"ul"},"Trust the public key",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Trust the KEY used in this version"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"  gpg --edit-key xxxxxxxxxx                           # KEY used in this version\n  gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\n  This is free software: you are free to change and redistribute it.\n  There is NO WARRANTY, to the extent permitted by law.\n"))),"  Secret key is available.","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  gpg> trust                                          # Trust the KEY\nsec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  Please decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"1 = I don't know or won't say\n2 = I do NOT trust\n3 = I trust marginally\n4 = I trust fully\n5 = I trust ultimately\nm = back to the main menu\n")),"  Your decision? 5                                                    # select 5\nDo you really want to set this key to ultimate trust? (y/N) y       # select y","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  gpg> ","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},""))),(0,i.kt)("li",{parentName:"ul"},"Check signature and hash",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n# or\ngpg --verify apache-inlong-${release_version}-src.tar.gz.asc apache-inlong-${release_version}-src.tar.gz\n# Attention: if you upload a binary package, you also need to check whether the signature of the binary package is correct\ngpg --verify apache-inlong-server-${release_version}-bin.tar.gz.asc apache-inlong-server-${release_version}-bin.tar.gz\ngpg --verify apache-inlong-client-${release_version}-bin.tar.gz.asc apache-inlong-client-${release_version}-bin.tar.gz\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  - Confirm result\n  > If something similar to the following appears, it means that the signature is correct, and the keywords: **`Good signature`**\n```shell\napache-inlong-0.3.0-incubating-src.tar.gz\ngpg: Signature made Sat May 30 11:45:01 2020 CST\ngpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A\ngpg: Good signature from "Guangxu Cheng <gxcheng@apache.org>" [ultimate]gular2\n')),(0,i.kt)("h3",{id:"verify-sha512-hash"},"Verify sha512 hash"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Calculate the sha512 hash locally, and verify that it is consistent with the one on dist"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done\n# or\ngpg --print-md SHA512 apache-inlong-${release_version}-src.tar.gz\n# If include a binary package, you also need to check the sha512 hash of the binary package\ngpg --print-md SHA512 apache-inlong-server-${release_version}-bin.tar.gz\ngpg --print-md SHA512 apache-inlong-client-${release_version}-bin.tar.gz\n# or\nfor i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done\n"))),(0,i.kt)("h3",{id:"check-the-file-content-of-the-source-package"},"Check the file content of the source package"),(0,i.kt)("p",null,"Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-inlong-${release_version}-src.tar.gz")," and check as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DISCLAIMER file exists and the content is correct."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","LICENSE and NOTICE files are correct for the repository."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All files have ASF license headers if necessary."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The source code can be compiled normally."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The single test can run through."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Building is OK.")),(0,i.kt)("p",null,"Attentions:\nIn the process of practice, it is found that many troublesome problems affect our version verification. The following processing is for reference:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clean up the local repository before verifying the version;"),(0,i.kt)("li",{parentName:"ul"},'The compilation commands are not limited, but since the modules in the project are dockerized, "mvn clean package install" is recommended for the first compilation, other recommended operations include "mvn clean compile", "mvn clean package";'),(0,i.kt)("li",{parentName:"ul"},'When executing unit tests, you should run them separately with "mvn clean test" to ensure that there are no hidden problems.')),(0,i.kt)("h3",{id:"check-the-binary-package-if-the-binary-package-is-included"},"Check the binary package (if the binary package is included)"),(0,i.kt)("p",null,"  Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-inlong-client-${release_version}-src.tar.gz")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\n  apache-inlong-server-${release_version}-src.tar.gz"),", check as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DISCLAIMER file exists and the content is correct."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","LICENSE and NOTICE files are correct for the repository."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The deployment can be successful"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deploy a test environment to verify whether production and consumption can run normally."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Verify what you think might go wrong.")))}m.isMDXComponent=!0}}]);
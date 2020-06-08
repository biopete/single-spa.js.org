(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{251:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var o=a(1),n=a(9),r=(a(0),a(305)),i={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},s=[{value:"What does single-spa do?",id:"what-does-single-spa-do",children:[]},{value:"Is there a recommended setup?",id:"is-there-a-recommended-setup",children:[]},{value:"Should I have a parent/root app and children apps?",id:"should-i-have-a-parentroot-app-and-children-apps",children:[]},{value:"What is the impact to performance?",id:"what-is-the-impact-to-performance",children:[]},{value:"Can I have only one version of (React, Vue, Angular, etc.) loaded?",id:"can-i-have-only-one-version-of-react-vue-angular-etc-loaded",children:[]},{value:"What are import maps?",id:"what-are-import-maps",children:[]},{value:"How can I share application state between applications?",id:"how-can-i-share-application-state-between-applications",children:[]},{value:"Should I use frontend microservices?",id:"should-i-use-frontend-microservices",children:[]},{value:"Can I use more than one framework?",id:"can-i-use-more-than-one-framework",children:[]},{value:"What is the developer experience (DX) like?",id:"what-is-the-developer-experience-dx-like",children:[]},{value:"Can each single-spa application have its own git repo?",id:"can-each-single-spa-application-have-its-own-git-repo",children:[]},{value:"Can single-spa applications be deployed independently?",id:"can-single-spa-applications-be-deployed-independently",children:[]},{value:"What does the CI/CD process look like?",id:"what-does-the-cicd-process-look-like",children:[]},{value:"Create React App",id:"create-react-app",children:[]},{value:"Code splits",id:"code-splits",children:[]},{value:"Does single-spa require additional security considerations?",id:"does-single-spa-require-additional-security-considerations",children:[]}],p={rightToc:s},l="wrapper";function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(l,Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-does-single-spa-do"},"What does single-spa do?"),Object(r.b)("p",null,"single-spa is a top level router. When a route is active, it downloads and executes the code for that route."),Object(r.b)("p",null,'The code for a route is called an "application", and each can (optionally) be in its own git repository, have its own CI process, and be separately deployed.\nThe applications can all be written in the same framework, or they can be implemented in different frameworks.'),Object(r.b)("h2",{id:"is-there-a-recommended-setup"},"Is there a recommended setup?"),Object(r.b)("p",null,"Yes, here is ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/recommended-setup/"}),"the documentation for our recommended setup"),"."),Object(r.b)("h2",{id:"should-i-have-a-parentroot-app-and-children-apps"},"Should I have a parent/root app and children apps?"),Object(r.b)("p",null,"No. We strongly encourage that your single-spa-config or root application does not use any JavaScript UI frameworks (React, Angular, Angularjs, Vue, etc). In our experience a plain JavaScript module is best for the single-spa-config and only the registered applications actually use UI frameworks (Angular, React, Vue, etc). "),Object(r.b)("p",null,"Why? You end up creating a structure that has all the disadvantages of microservices without any of the advantages: your apps are now coupled together and you have to change multiple apps at the same time in order to make updates. Good microservices are completely ",Object(r.b)("strong",{parentName:"p"},"independent"),", and this pattern breaks that."),Object(r.b)("h2",{id:"what-is-the-impact-to-performance"},"What is the impact to performance?"),Object(r.b)("p",null,"When setup in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#is-there-a-recommended-setup"}),"recommended way"),", your code performance and bundle size will be nearly identical to a single application that has been code-split. The major differences will be the addition of the single-spa library (and SystemJS if you chose to use it). Other differences mainly come down to the difference between one (webpack / rollup / etc.) code bundle and in-browser ES modules."),Object(r.b)("h2",{id:"can-i-have-only-one-version-of-react-vue-angular-etc-loaded"},"Can I have only one version of (React, Vue, Angular, etc.) loaded?"),Object(r.b)("p",null,"Yes, and it's highly recommended you do so! Using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#is-there-a-recommended-setup"}),"the recommended setup"),", you configure your ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#what-are-import-maps"}),"import map")," so that your library is defined only once. Then, tell each application to ",Object(r.b)("em",{parentName:"p"},"not")," bundle that library; instead, the library will given to you at runtime in the browser. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/externals/"}),"webpack\u2019s externals")," (and other bundlers have similar options) for how to do this."),Object(r.b)("p",null,"You do have the option of ",Object(r.b)("em",{parentName:"p"},"not")," excluding those libraries (for example if you want to experiment with a newer version or a different library) but be aware of the effect that will have on user's bundle sizes and application speed."),Object(r.b)("h2",{id:"what-are-import-maps"},"What are import maps?"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/WICG/import-maps"}),"Import maps")," improve the developer experience of in-browser ES modules by allowing you to write something like ",Object(r.b)("inlineCode",{parentName:"p"},'import React from "react"')," instead of needing to use an absolute or relative URL for your import statement. The same is also true of importing from other single-spa applications, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'import {MyButton} from "styleguide"'),". The import-map spec is currently in the process of being accepted as a web standard and at the time of writing has been ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/web/updates/2019/03/kv-storage#import_maps"}),"implemented in Chrome"),", and a polyfill for browsers >= IE11 has been implemented by ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/systemjs/systemjs"}),"SystemJS >= 3.0"),". Also see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#is-there-a-recommended-setup"}),"the recommended setup")),Object(r.b)("h2",{id:"how-can-i-share-application-state-between-applications"},"How can I share application state between applications?"),Object(r.b)("p",null,"In general, we recommend trying to avoid this \u2014 it couples those apps together. If you find yourself doing this frequently between apps, you may want to consider that those separate apps should actually just be one app."),Object(r.b)("p",null,"Generally, it\u2019s better to just make an API request for the data that each app needs, even if parts of it have been requested by other apps. In practice, if you\u2019ve designed your application boundaries correctly, there will end up being very little application state that is truly shared \u2014 for example, your friends list has different data requirements than your social feed."),Object(r.b)("p",null,"However, that doesn\u2019t mean it can\u2019t be done. Here are several ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a shared API request library that can cache requests and their responses. If somone hits an API, and then that API is hit again by another application, it just uses the cache"),Object(r.b)("li",{parentName:"ol"},"Expose the shared state as an export, and other libraries can import it. Observables (like ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://rxjs-dev.firebaseapp.com/"}),"RxJS"),") are useful here since they can stream new values to subscribers"),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#Creating_custom_events"}),"custom browser events")," to communicate"),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies"),", ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"local/session storage"),", or other similar methods for storing and reading that state. These methods work best with things that don't change often, e.g. logged-in user info.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Please note that this is just talking about sharing application state: sharing functions, components, etc. is as easy as an ",Object(r.b)("inlineCode",{parentName:"strong"},"export")," in one project and an ",Object(r.b)("inlineCode",{parentName:"strong"},"import")," in the other. See ",Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"#what-are-import-maps"}),"import map")," documentation for more details")),Object(r.b)("h2",{id:"should-i-use-frontend-microservices"},"Should I use frontend microservices?"),Object(r.b)("p",null,"If you\u2019ve ran into some of the headaches a monolithic repo has, then you should really consider it."),Object(r.b)("p",null,"In addition, if your organization is setup in a Spotify-type model (e.g. where there are autonomous squads that own full-stack features) then microservices on the frontend will fit very well into your setup."),Object(r.b)("p",null,"However, if you\u2019re just starting off and have a small project or a small team, we would recommend you stick with a monolith (i.e. not microservices) until you get to the point that scaling (e.g. organizational scaling, feature scaling, etc.) is getting hard. Don\u2019t worry, we\u2019ll be here to help you migrate when you get there."),Object(r.b)("h2",{id:"can-i-use-more-than-one-framework"},"Can I use more than one framework?"),Object(r.b)("p",null,"Yes. However, it\u2019s something you\u2019ll want to consider hard because it splits your front-end organization into specialities that aren\u2019t compatible (e.g. a React specialist may have problems working in an Angular app), and also causes more code to be shipped to your users."),Object(r.b)("p",null,"However, it is great for migrations ",Object(r.b)("em",{parentName:"p"},"away")," from an older or unwanted library, which allows you to slowly rip out the code in the old application and replace it with new code in the new library (see Google results for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.google.com/search?q=the+strangler+pattern&oq=the+strangler+pattern"}),"the strangler pattern"),")."),Object(r.b)("p",null,"It also is a way to allow large organizations to experiment on different libraries without a strong commitment to them."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Just be conscious of the effect it has on your users and their experience using your app.")),Object(r.b)("h2",{id:"what-is-the-developer-experience-dx-like"},"What is the developer experience (DX) like?"),Object(r.b)("p",null,"If you're using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#is-there-a-recommended-setup"}),"recommended setup")," for single-spa, you'll simply be able to go to your development website, add an import map that points to your locally-running code, and refresh the page."),Object(r.b)("p",null,"There's a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/joeldenning/import-map-overrides"}),"library")," that you can use, or you can even just do it yourself - you'll note that the source code is pretty simple. The main takeaway is that you can have multiple ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#what-are-import-maps"}),"import maps")," and the latest one wins - you add an import map that overrides the default URL for an application to point to your localhost."),Object(r.b)("p",null,"We're also looking at providing this functionality as part of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-inspector"}),"Chrome/Firefox browser extension"),"."),Object(r.b)("p",null,"Finally, this setup also enables you to do overrides ",Object(r.b)("em",{parentName:"p"},"in your production environment"),". It obviously should be used with caution, but it does enable a powerful way of debugging problems and validating solutions."),Object(r.b)("p",null,"As a point of reference, nearly all developers we've worked with ",Object(r.b)("strong",{parentName:"p"},"prefer the developer experience of microservices + single-spa")," over a monolithic setup."),Object(r.b)("h2",{id:"can-each-single-spa-application-have-its-own-git-repo"},"Can each single-spa application have its own git repo?"),Object(r.b)("p",null,"Yes! You can even give them their own package.json, webpack config, and CI/CD process, using SystemJS to bring them all together in the browser."),Object(r.b)("h2",{id:"can-single-spa-applications-be-deployed-independently"},"Can single-spa applications be deployed independently?"),Object(r.b)("p",null,"Yes! See next section about CI/CD."),Object(r.b)("h2",{id:"what-does-the-cicd-process-look-like"},"What does the CI/CD process look like?"),Object(r.b)("p",null,"In other words, how do I build and deploy a single-spa application?"),Object(r.b)("p",null,"With the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#is-there-a-recommended-setup"}),"recommended setup"),", the process generally flows like this:\n1. Bundle your code and upload it to a CDN.\n1. Update your dev environment's import map to point to the that new URL. In other words, your import map used to say ",Object(r.b)("inlineCode",{parentName:"p"},'"styleguide": "cdn.com/styleguide/v1.js"')," and now it should say ",Object(r.b)("inlineCode",{parentName:"p"},'"styleguide": "cdn.com/styleguide/v2.js"')),Object(r.b)("p",null,"Some options on ",Object(r.b)("em",{parentName:"p"},"how")," to update your import map include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Server render your ",Object(r.b)("inlineCode",{parentName:"li"},"index.html")," with the import map inlined. This does not mean that your DOM elements need to all be server rendered, but just the ",Object(r.b)("inlineCode",{parentName:"li"},'<script type="systemjs-importmap>')," element. Provide an API that either updates a database table or a file local to the server."),Object(r.b)("li",{parentName:"ul"},"Have your import map itself on a CDN, and use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/single-spa/import-map-deployer"}),"import-map-deployer")," or similar to update the import map during your CI process. This method has a small impact on performance, but is generally easier to setup if you don't have a server-rendered setup already. (You can also ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content"}),"preload")," the import map file to help provide a small speed boost). See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/openmrs/openmrs-esm-root-config/blob/master/.travis.yml"}),"example travis.yml"),". Other CI tools work, too.")),Object(r.b)("h2",{id:"create-react-app"},"Create React App"),Object(r.b)("p",null,"Tutorial video: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=W8oaySHuj3Y&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=10"}),"Youtube")," / ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.bilibili.com/video/BV16Z4y1j72X/"}),"Bilibili")),Object(r.b)("p",null,"If you are starting from scratch, it is preferred to use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/create-single-spa"}),"create-single-spa")," instead of create-react-app."),Object(r.b)("p",null,"Create React App (CRA) projects must be altered before use with single-spa. The reason is that CRA presumes that each project has its own HTML file, whereas in single-spa all microfrontends must share an HTML file."),Object(r.b)("p",null,"Here are your options:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Remove ",Object(r.b)("inlineCode",{parentName:"li"},"react-scripts")," and then run ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/create-single-spa"}),Object(r.b)("inlineCode",{parentName:"a"},"create-single-spa"))," on your project. This will merge create-single-spa's package.json with yours, and provide you with a default webpack config. Run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn start")," and fix webpack configuration errors until it's working."),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/timarney/react-app-rewired/blob/master/README.md"}),"react-app-rewired")," to modify the webpack config. See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://gist.github.com/joeldenning/79f2592086ad132fae8ee5aae054c0b6"}),"this Gist")," that shows a basic config you can start with. The example config may not work in every case or solve every problem."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject"}),"Eject")," your CRA project's webpack config so you can modify it.")),Object(r.b)("p",null,"If you don't use create-single-spa's default webpack config, here are the changes you need to make:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Remove Webpack optimizations block, because they add multiple webpack chunks that don't load each other"),Object(r.b)("li",{parentName:"ol"},"Remove html-webpack plugin"),Object(r.b)("li",{parentName:"ol"},"Change ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://webpack.js.org/configuration/output/#outputlibrarytarget"}),Object(r.b)("inlineCode",{parentName:"a"},"output.libraryTarget"))," to ",Object(r.b)("inlineCode",{parentName:"li"},"System"),", ",Object(r.b)("inlineCode",{parentName:"li"},"UMD"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"AMD"),".")),Object(r.b)("p",null,"CRA does not allow you to change those items without ejecting or using another tool."),Object(r.b)("h2",{id:"code-splits"},"Code splits"),Object(r.b)("p",null,"Single spa supports code splits. There are so many ways to code split we won't be able to cover them all, but if you're using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#is-there-a-recommended-setup"}),"recommended setup")," with webpack you'll need to do at least two things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/guides/public-path/#on-the-fly"}),Object(r.b)("inlineCode",{parentName:"a"},"__webpack_public_path__"))," dynamically so webpack knows where to fetch your code splits (webpack assumes they are located at the root of the server and that isn't always true in a single-spa application). Both solutions below should be the very first import of your application in order to work."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For SystemJS >= 6, use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/joeldenning/systemjs-webpack-interop"}),"systemjs-webpack-interop"),":")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { setPublicPath } from 'systemjs-webpack-interop';\n\nsetPublicPath('name-of-module-in-import-map');\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For SystemJS 2-5: Find a code example ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://gitlab.com/TheMcMurder/single-spa-portal-example/blob/master/people/src/set-public-path.js#L3"}),"here")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set either ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/output/#outputjsonpfunction"}),Object(r.b)("inlineCode",{parentName:"a"},"output.jsonpFunction"))," or ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/output/#outputlibrary"}),Object(r.b)("inlineCode",{parentName:"a"},"output.library"))," to ensure that each app's webpack doesn't collide with other apps' webpack. ",Object(r.b)("inlineCode",{parentName:"p"},"jsonpFunction")," is preferred."))),Object(r.b)("p",null,"For more information about webpack configuration and single-spa, see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/recommended-setup#build-tools-webpack--rollup"}),"the recommended setup"),"."),Object(r.b)("h2",{id:"does-single-spa-require-additional-security-considerations"},"Does single-spa require additional security considerations?"),Object(r.b)("p",null,"No. single-spa does not add, deviate, or attempt to bypass any browser JavaScript security measures. The security needs of your applications are the same as if you did not use single-spa."),Object(r.b)("p",null,"Outside of that, web applications may use the following resources that have their own security considerations that you may need to become familiar with:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"}),"ES6 module dynamic imports"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Webpack-based applications use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"}),"Webpack's implementation of dynamic imports")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}),"Cross-Origin Resource Sharing (CORS)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Threats"}),"Content Security Policy (CSP)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"module imports specifically relate to ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"}),"CSP ",Object(r.b)("inlineCode",{parentName:"a"},"script-src"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity#How_Subresource_Integrity_helps"}),"Subresource Integrity (SRI)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See also ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/WICG/import-maps/issues/174"}),"import-maps script \u201cintegrity\u201d attribute")))),Object(r.b)("li",{parentName:"ul"},"Import-maps are also governed by CSP",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See also ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/WICG/import-maps/blb/master/README.md#supplying-out-of-band-metadata-for-each-module"}),'"Supplying out-of-band metadata for each module"'))))))}c.isMDXComponent=!0},305:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var o=a(0),n=a.n(o),r=n.a.createContext({}),i=function(e){var t=n.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return n.a.createElement(r.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},c=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(a[o]=e[o]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(a),b=o,d=c[s+"."+b]||c[b]||l[b]||r;return a?n.a.createElement(d,Object.assign({},{ref:t},p,{components:a})):n.a.createElement(d,Object.assign({},{ref:t},p))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var b=2;b<r;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6730],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return d}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||s;return n?t.createElement(m,i(i({ref:a},c),{},{components:n})):t.createElement(m,i({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7811:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var t=n(3117),r=n(102),s=(n(7294),n(3905)),i=["components"],o={id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},l=void 0,p={unversionedId:"create-single-spa",id:"version-5.x/create-single-spa",title:"create-single-spa",description:"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa.",source:"@site/versioned_docs/version-5.x/create-single-spa.md",sourceDirName:".",slug:"/create-single-spa",permalink:"/docs/create-single-spa",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/create-single-spa.md",tags:[],version:"5.x",frontMatter:{id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},sidebar:"version-5.x/docs",previous:{title:"Videos",permalink:"/docs/videos"},next:{title:"Overview",permalink:"/docs/microfrontends-concept"}},c=[{value:"Installation and Usage",id:"installation-and-usage",children:[],level:2},{value:"CLI arguments",id:"cli-arguments",children:[{value:"--dir",id:"--dir",children:[],level:3},{value:"--moduleType",id:"--moduletype",children:[],level:3},{value:"--framework",id:"--framework",children:[],level:3},{value:"--layout",id:"--layout",children:[],level:3},{value:"--skipInstall",id:"--skipinstall",children:[],level:3}],level:2},{value:"Project types",id:"project-types",children:[],level:2},{value:"create-single-spa",id:"create-single-spa",children:[],level:2},{value:"generator-single-spa",id:"generator-single-spa",children:[],level:2},{value:"webpack-config-single-spa",id:"webpack-config-single-spa",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"webpack-config-single-spa-react",id:"webpack-config-single-spa-react",children:[{value:"Installation",id:"installation-1",children:[],level:3},{value:"Usage",id:"usage-1",children:[],level:3}],level:2},{value:"webpack-config-single-spa-ts",id:"webpack-config-single-spa-ts",children:[{value:"Installation",id:"installation-2",children:[],level:3},{value:"Usage",id:"usage-2",children:[],level:3}],level:2},{value:"webpack-config-single-spa-react-ts",id:"webpack-config-single-spa-react-ts",children:[{value:"Installation",id:"installation-3",children:[],level:3},{value:"Usage",id:"usage-3",children:[],level:3}],level:2},{value:"single-spa-web-server-utils",id:"single-spa-web-server-utils",children:[{value:"Installation",id:"installation-4",children:[],level:3},{value:"getImportMaps",id:"getimportmaps",children:[],level:3}],level:2},{value:"Customizing Webpack",id:"customizing-webpack",children:[{value:"Merging rules",id:"merging-rules",children:[],level:3},{value:"Loaders",id:"loaders",children:[],level:3}],level:2}],g={toc:c};function u(e){var a=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa."),(0,s.kt)("p",null,"The CLI is called ",(0,s.kt)("inlineCode",{parentName:"p"},"create-single-spa")," (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/"},"Github link"),"). It is primarily intended for the creation of new projects, but may also be useful for migrating existing projects (especially migrating CRA or frameworkless projects)."),(0,s.kt)("h2",{id:"installation-and-usage"},"Installation and Usage"),(0,s.kt)("p",null,"If you wish to have create-single-spa globally available, run the following in a terminal"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --global create-single-spa\n\n# or\nyarn global add create-single-spa\n")),(0,s.kt)("p",null,"Then run the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"create-single-spa\n")),(0,s.kt)("p",null,"Alternatively, you may use create-single-spa without global installation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm init single-spa\n\n# or\nnpx create-single-spa\n\n# or\nyarn create single-spa\n")),(0,s.kt)("p",null,"This will open up a CLI prompt asking you what kind of project you want to create or update."),(0,s.kt)("h2",{id:"cli-arguments"},"CLI arguments"),(0,s.kt)("p",null,"You may pass arguments to create-single-spa like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# Different ways of doing the same thing\ncreate-single-spa --framework react\nnpm init single-spa --framework react\nnpx create-single-spa --framework react\nyarn create single-spa --framework react\n")),(0,s.kt)("p",null,"Here are the available CLI options:"),(0,s.kt)("h3",{id:"--dir"},"--dir"),(0,s.kt)("p",null,"You may specify which directory create-single-spa runs in through either of the following ways:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# Two ways of doing the same thing\ncreate-single-spa my-dir\ncreate-single-spa --dir my-dir\n")),(0,s.kt)("h3",{id:"--moduletype"},"--moduleType"),(0,s.kt)("p",null,"You can specify which kind of microfrontend you are creating with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--moduleType")," CLI argument:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"create-single-spa --moduleType root-config\ncreate-single-spa --moduleType app-parcel\ncreate-single-spa --moduleType util-module\n")),(0,s.kt)("h3",{id:"--framework"},"--framework"),(0,s.kt)("p",null,"You can specify which framework you're using with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--framework")," CLI argument. Note that if you specify a framework that you may omit the ",(0,s.kt)("inlineCode",{parentName:"p"},"--moduleType"),", as it is inferred to be ",(0,s.kt)("inlineCode",{parentName:"p"},"app-parcel"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"create-single-spa --framework react\ncreate-single-spa --framework vue\ncreate-single-spa --framework angular\n")),(0,s.kt)("h3",{id:"--layout"},"--layout"),(0,s.kt)("p",null,"When generating a root config, the ",(0,s.kt)("inlineCode",{parentName:"p"},"--layout")," CLI argument indicates that you want to use ",(0,s.kt)("a",{parentName:"p",href:"/docs/layout-overview"},"single-spa-layout")," in your root config."),(0,s.kt)("h3",{id:"--skipinstall"},"--skipInstall"),(0,s.kt)("p",null,"This option skips npm/yarn/pnpm installation during project creation."),(0,s.kt)("h2",{id:"project-types"},"Project types"),(0,s.kt)("p",null,"create-single-spa asks you if you'd like to create a single-spa application, a utility module, or a root-config. All three module types assume that you are using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/recommended-setup"},"recommended setup"),"."),(0,s.kt)("p",null,"If you select that you'd like to create a single-spa application, you will be prompted for which framework you'd like to choose. React is implemented with premade configurations for babel + webpack + jest. Angular is implemented with Angular CLI and ",(0,s.kt)("a",{parentName:"p",href:"/docs/ecosystem-angular"},"single-spa-angular"),". Vue is implemented with Vue CLI and ",(0,s.kt)("a",{parentName:"p",href:"/docs/ecosystem-vue#vue-cli"},"vue-cli-plugin-single-spa"),"."),(0,s.kt)("h1",{id:"npm-packages"},"NPM packages"),(0,s.kt)("p",null,"Within the create-single-spa repo, there are several NPM packages. The following sections document each package:"),(0,s.kt)("h2",{id:"create-single-spa"},"create-single-spa"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/create-single-spa"},"Github project")),(0,s.kt)("p",null,"The core CLI, which invokes ",(0,s.kt)("a",{parentName:"p",href:"#generator-single-spa"},"generator-single-spa"),"."),(0,s.kt)("h2",{id:"generator-single-spa"},"generator-single-spa"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/generator-single-spa"},"Github project")),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://yeoman.io/"},"Yeoman generator")," that prompts the user and then creates files. This is primarily invoked via the create-single-spa CLI, but can also be ",(0,s.kt)("a",{parentName:"p",href:"https://yeoman.io/authoring/composability.html"},"composed")," if you'd like to customize it."),(0,s.kt)("h2",{id:"webpack-config-single-spa"},"webpack-config-single-spa"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that is used for utility modules and single-spa applications."),(0,s.kt)("h3",{id:"installation"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa webpack-merge\n")),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n    \n    // optional, defaults to false\n    // Disable html-webpack-plugin (and standalone-single-spa-webpack-plugin) entirely\n    // This is intended for root configs, but can be used in other cases, too\n    disableHtmlGeneration: false\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  });\n};\n")),(0,s.kt)("h2",{id:"webpack-config-single-spa-react"},"webpack-config-single-spa-react"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that adds react-specific configuration to ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),"."),(0,s.kt)("h3",{id:"installation-1"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa-react webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react webpack-merge\n")),(0,s.kt)("h3",{id:"usage-1"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-react');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n    \n    // optional, defaults to {}\n    // This controls the options given to standalone-single-spa-webpack-plugin\n    // See https://github.com/single-spa/standalone-single-spa-webpack-plugin#usage\n    standaloneOptions: {\n    }\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  });\n};\n")),(0,s.kt)("h2",{id:"webpack-config-single-spa-ts"},"webpack-config-single-spa-ts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-ts"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that adds typescript-specific configuration to ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),". Note that webpack-config-single-spa-ts has a peerDependency on ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript"),"."),(0,s.kt)("h3",{id:"installation-2"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-ts webpack-merge\n")),(0,s.kt)("h3",{id:"usage-2"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-ts');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  });\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const singleSpaTs = require('webpack-config-single-spa-ts');\n\n// Alternatively, you may modify a webpack config directly\nconst myOtherWebpackConfig = {\n  /* ... */\n};\nconst finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig);\n")),(0,s.kt)("h2",{id:"webpack-config-single-spa-react-ts"},"webpack-config-single-spa-react-ts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react-ts"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that creates a webpack config that works with both react and typescript. Note that webpack-config-single-spa-react-ts simply merges the config from webpack-config-single-spa-react with that of webpack-config-single-spa-ts."),(0,s.kt)("h3",{id:"installation-3"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa-react-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react-ts webpack-merge\n")),(0,s.kt)("h3",{id:"usage-3"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa-react-ts');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to false.\n    // When true, this removes html-webpack-plugin and standalone-single-spa-webpack-plugin\n    disableHtmlGeneration: false\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),(0,s.kt)("h2",{id:"single-spa-web-server-utils"},"single-spa-web-server-utils"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"single-spa-web-server-utils")," package is a collection of functions that help when implementing a web server for an index.html file. This package can be used to inline import maps into an HTML, which helps with the performance of your application. Additionally, it can be used to modify a browser import map so that it's suitable for usage in NodeJS for dynamic module loading and server rendering (",(0,s.kt)("a",{parentName:"p",href:"/docs/ssr-overview#a-module-loading"},"Dynamic Module Loading")," and ",(0,s.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/ssr-overview#intro-to-ssr"},"Server Rendering"),"))."),(0,s.kt)("p",null,"The web server utils poll the import map from a URL and generate a ",(0,s.kt)("inlineCode",{parentName:"p"},"browserImportMap")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"nodeImportMap")," from the response."),(0,s.kt)("h3",{id:"installation-4"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save single-spa-web-server-utils\n\n# alternatively\nyarn add single-spa-web-server-utils\n")),(0,s.kt)("h3",{id:"getimportmaps"},"getImportMaps"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"getImportMaps")," function accepts an object parameter and returns a promise that resolves with an object with two import maps: ",(0,s.kt)("inlineCode",{parentName:"p"},"browserImportMap")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"nodeImportMap"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { getImportMaps } = require('single-spa-web-server-utils');\nconst http = require('http');\nconst ejs = require('ejs');\nconst fs = require('fs');\nconst path = require('path');\n\nconst htmlTemplate = ejs.compile(\n  fs.readFileSync(path.resolve(process.cwd(), 'views/index.html'), 'utf-8'),\n);\n\nhttp.createServer((req, res) => {\n  getImportMaps({\n    // required\n    // The URL at which the server\n    url: 'https://my-cdn.com/live.importmap',\n\n    // optional - defaults to 30000\n    // The ms to wait when polling the import map\n    pollInterval: 30000,\n\n    // optional - defaults to false\n    // Whether to allow for import-map-overrides via cookies sent in the request.\n    // More details about overrides via cookies at\n    // https://github.com/joeldenning/import-map-overrides/blob/master/docs/api.md#node\n    allowOverrides: true,\n\n    // optional - only needed when allowOverrides is true\n    // The IncomingMessage from an http server. This is used to gather\n    // cookies for import-map-overrides\n    req,\n\n    // optional\n    // This allows you to remove entries from the downloaded import map\n    // from the returned `nodeImportMap`. This is useful for customizing\n    // an import map that is used in the browser so that it can be used\n    // for dynamic NodeJS module loading. Each key is a string import specifier.\n    // Keys that you return `true` for are preserved in the nodeImportMap.\n    nodeKeyFilter(key) {\n      return true;\n    },\n  }).then(({ browserImportMap, nodeImportMap }) => {\n    console.log(browserImportMap, nodeImportMap);\n\n    // Example of how to inline a browser import map\n    const htmlWithInlinedImportMap = htmlTemplate({\n      importMap: browserImportMap,\n    });\n    res.setResponseHeader('Content-Type', 'text/html');\n    res.status(200).send(htmlWithInlinedImportMap);\n\n    // Example of how to apply a NodeJS import map\n    // More info at https://github.com/node-loader/node-loader-import-maps\n    global.nodeLoader.setImportMapPromise(Promise.resolve(nodeImportMap));\n    import('module-in-import-map');\n  });\n});\n")),(0,s.kt)("h2",{id:"customizing-webpack"},"Customizing Webpack"),(0,s.kt)("p",null,"The create-single-spa CLI internally uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge"},"webpack-merge")," to merge together webpack configs. Additionally, the CLI generates a ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file in each project where you can customize the webpack config further via ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack-merge"),"."),(0,s.kt)("h3",{id:"merging-rules"},"Merging rules"),(0,s.kt)("p",null,"When merging ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#modulerules"},"webpack rules"),", use webpack-merge's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge#mergewithrules"},(0,s.kt)("inlineCode",{parentName:"a"},"mergeWithRules"))," function to avoid duplicate rules."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/react-microfrontends/styleguide/blob/504c8516e30274fc0e3221a719d5355b14af9500/webpack.config.js#L11"},"Example")),(0,s.kt)("h3",{id:"loaders"},"Loaders"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"webpack-config-single-spa")," and its variants often depend on webpack ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/#root"},"loaders"),". Because webpack loaders are loaded via file path, it's possible to accidentally have duplicate copies of the same loader, if the same loader is also installed in both webpack-config-single-spa and in your project. This can result in errors."),(0,s.kt)("p",null,"To avoid duplicate copies of loaders, first check whether it is already installed by wepback-config-single-spa before adding it to your own project (",(0,s.kt)("a",{parentName:"p",href:"https://unpkg.com/webpack-config-single-spa@2.0.0/package.json"},"see package.json"),"). If the loader is listed there, then ",(0,s.kt)("strong",{parentName:"p"},"do not install it into your project, too"),". If you already have the loader installed in your project, uninstall it."),(0,s.kt)("p",null,"When referencing a loader that is installed as a dependency of webpack-config-single-spa, use ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_require_resolve_request_options"},"require.resolve")," to ensure the loader is imported from the correct path:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { mergeWithRules } = require(\'webpack-merge\');\nconst singleSpaDefaults = require(\'webpack-config-single-spa\');\n\nmodule.exports = (webpackConfigEnv) => {\n  const defaultConfig = singleSpaDefaults({\n    orgName: "react-mf",\n    projectName: "styleguide",\n    webpackConfigEnv,\n  });\n  \n  return mergeWithRules({\n    module: {\n      rules: {\n        test: "match",\n        use: "replace",\n      },\n    },\n  })(defaultConfig, {\n    module: {\n      rules: [\n        {\n          test: /\\.css$/i,\n          use: [\n            // Use require.resolve to ensure the correct loader is used\n            require.resolve("style-loader", {\n              paths: [require.resolve("webpack-config-single-spa")],\n            }),\n            require.resolve("css-loader", {\n              paths: [require.resolve("webpack-config-single-spa")],\n            }),\n            "postcss-loader",\n          ],\n        },\n      ],\n    },\n  })\n}\n')))}u.isMDXComponent=!0}}]);
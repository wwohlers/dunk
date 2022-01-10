"use strict";(self.webpackChunkdunk_docs=self.webpackChunkdunk_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Why Dunk",u={unversionedId:"intro",id:"intro",title:"Why Dunk",description:"For a while now, Redux has been accepted as the standard state management library for React apps. Like React itself, its widespread adoption is largely thanks to its lightweight and unopinionated nature. But in an ecosystem full of similarly light libraries, few have stopped to really think about why heavier frameworks like Vuex are inferior.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/dunk/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/dunk/docs/quick-guide/install"}},c=[{value:"The Dunk philosophy",id:"the-dunk-philosophy",children:[{value:"Keep Redux",id:"keep-redux",children:[],level:3},{value:"Modularity and organization",id:"modularity-and-organization",children:[],level:3},{value:"Separation of interface and implementation",id:"separation-of-interface-and-implementation",children:[],level:3},{value:"Strict, expressive types",id:"strict-expressive-types",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-dunk"},"Why Dunk"),(0,o.kt)("p",null,"For a while now, Redux has been accepted as the standard state management library for React apps. Like React itself, its widespread adoption is largely thanks to its lightweight and unopinionated nature. But in an ecosystem full of similarly light libraries, few have stopped to really think about why heavier frameworks like Vuex are inferior."),(0,o.kt)("p",null,"Redux has a few problems that make it cumbersome to implement and hard to scale:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"There's no clear architecture.")," It's not even immediately obvious from the Redux docs what kinds of functions you should write besides action creators and reducers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"It's difficult to scale.")," More state means more and more action creators, reducers, selectors, and the composition of all of these elements to make an organized store. Redux has no good way of managing this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"It's not type safe"),". Redux offers almost no help when it comes to types, and often requires that you define redundant, boilerplate types that distract you from the important logic of your store.")),(0,o.kt)("h2",{id:"the-dunk-philosophy"},"The Dunk philosophy"),(0,o.kt)("p",null,"Dunk attempts to address all three of these issues. It has a few key focus points."),(0,o.kt)("h3",{id:"keep-redux"},"Keep Redux"),(0,o.kt)("p",null,"Fundamentally, Redux is easy to reason about and just works. In addition, most React apps already use Redux as their state management library. That's why Dunk was designed carefully around Redux, so that any existing Redux store could be converted directly to an identical Dunk store with only minor changes."),(0,o.kt)("h3",{id:"modularity-and-organization"},"Modularity and organization"),(0,o.kt)("p",null,"Structurally, a Dunk store is a tree of modules. Each module carries its own state and is capable of processing its own actions, as well as forwarding any actions for its child modules."),(0,o.kt)("p",null,"Thanks to this modularity, you can organize your Dunk store just like you organize any other part of your app. "),(0,o.kt)("p",null,"Ultimately, this means greatly improved readability and scalability."),(0,o.kt)("h3",{id:"separation-of-interface-and-implementation"},"Separation of interface and implementation"),(0,o.kt)("p",null,"A key principle that underscores the Dunk's design was the segregation of internal (relating to the implementation of the store's logic) and external (relating to comunication with the store) elements. "),(0,o.kt)("p",null,"For example, reducers and initial state are internal whereas action creators and selectors are external."),(0,o.kt)("p",null,"Accordingly, Dunk introduces the concept of a ",(0,o.kt)("em",{parentName:"p"},"bridge"),", an object specifically for interacting with a module in a Dunk store. Bridges are also modular, and base their hierarchy on their module's tree. "),(0,o.kt)("p",null,"Thus, anything that consumes the store \u2014 like a React component \u2014 only needs to interact with the bridge, and can do so in a way that naturally imitates the organization of the store."),(0,o.kt)("h3",{id:"strict-expressive-types"},"Strict, expressive types"),(0,o.kt)("p",null,"Everything about a Dunk module and bridge is type safe. For example, it's impossible to define a reducer with the wrong payload type, or an action creator that returns an object that isn't an action. "),(0,o.kt)("p",null,"If you're worried about defining a bunch of trivial boilerplate types, fear not. Dunk's utility types were carefully designed to provide complete type-safety while minimizing redundancy and boilerplate code."))}p.isMDXComponent=!0}}]);
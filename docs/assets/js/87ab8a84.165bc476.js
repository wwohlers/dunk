"use strict";(self.webpackChunkdunk_docs=self.webpackChunkdunk_docs||[]).push([[300],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},u="Your first module",s={unversionedId:"quick-guide/first-module",id:"quick-guide/first-module",title:"Your first module",description:"A Dunk module is one node in the tree of a Dunk store. If you've used Redux Toolkit, it's like a slice, but for a tree rather than a flat organization.",source:"@site/docs/quick-guide/first-module.md",sourceDirName:"quick-guide",slug:"/quick-guide/first-module",permalink:"/dunk/docs/quick-guide/first-module",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-guide/first-module.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/dunk/docs/quick-guide/install"},next:{title:"Your first bridge",permalink:"/dunk/docs/quick-guide/first-bridge"}},d=[{value:"Defining the type of the root module",id:"defining-the-type-of-the-root-module",children:[{value:"State type",id:"state-type",children:[],level:3},{value:"Children type",id:"children-type",children:[],level:3},{value:"Payloads type",id:"payloads-type",children:[],level:3},{value:"Putting these types together",id:"putting-these-types-together",children:[],level:3}],level:2},{value:"Writing the module",id:"writing-the-module",children:[{value:"Argument 1: Initial state",id:"argument-1-initial-state",children:[],level:3},{value:"Argument 2: Children",id:"argument-2-children",children:[],level:3},{value:"Argument 3: Reducers",id:"argument-3-reducers",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-first-module"},"Your first module"),(0,o.kt)("p",null,"A Dunk module is one node in the tree of a Dunk store. If you've used Redux Toolkit, it's like a slice, but for a tree rather than a flat organization."),(0,o.kt)("p",null,"At a high level, a Dunk module has a few core elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local state"),": the data stored in the module (not including the state of its children)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Actions"),": the types of actions that the module can handle"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reducers"),": the functions that handle the module's actions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Children"),": the module's children")),(0,o.kt)("p",null,"Let's begin by writing the root module of the store."),(0,o.kt)("h2",{id:"defining-the-type-of-the-root-module"},"Defining the type of the root module"),(0,o.kt)("p",null,"Dunk provides a utility type, ",(0,o.kt)("inlineCode",{parentName:"p"},"DunkModule"),", to help you easily define the type of a module. It takes three arguments: local state, payloads, and children."),(0,o.kt)("h3",{id:"state-type"},"State type"),(0,o.kt)("p",null,"Let's first define the type of the module's state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type RootState = {\n  counter: number;\n}\n")),(0,o.kt)("h3",{id:"children-type"},"Children type"),(0,o.kt)("p",null,"Every Dunk module has a children type, which is a map of names to child ",(0,o.kt)("inlineCode",{parentName:"p"},"DunkModule"),"s."),(0,o.kt)("p",null,"For now, our module has no children, so we'll define a trivial type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type RootChildren = {}\n")),(0,o.kt)("h3",{id:"payloads-type"},"Payloads type"),(0,o.kt)("p",null,"Dunk modules accepts a payloads type, which is an object that maps action names to payload types."),(0,o.kt)("p",null,"For example, let's say we want an action called ",(0,o.kt)("inlineCode",{parentName:"p"},"setCounter")," that accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," as a payload. We can define our payloads type like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type RootPayloads = {\n  setCounter: number;\n}\n")),(0,o.kt)("p",null,"Let's add two more actions, ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"increment"),", which don't need a payload. For this case, their payload type can just be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type RootPayloads = {\n  setCounter: number;\n  reset: undefined;\n  increment: undefined;\n}\n")),(0,o.kt)("h3",{id:"putting-these-types-together"},"Putting these types together"),(0,o.kt)("p",null,"To define the type of a module, just use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DunkModule")," utility type and pass in the state, children, and payload type, in that order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type RootModule = DunkModule<RootState, RootChildren, RootPayloads>;\n")),(0,o.kt)("h2",{id:"writing-the-module"},"Writing the module"),(0,o.kt)("p",null,"Now that we've defined the type of our root module, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createDunkModule")," function to actually write the module."),(0,o.kt)("p",null,"Begin by calling the function and passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootModule")," type as the generic type parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const rootModule = createDunkModule<RootModule>(\n  // ...\n);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createDunkModule")," accepts three arguments."),(0,o.kt)("h3",{id:"argument-1-initial-state"},"Argument 1: Initial state"),(0,o.kt)("p",null,"Pass in an object that satisfies the module's state type \u2014 in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"RootState"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const rootModule = createDunkModule<RootModule>(\n  {\n    counter: 0\n  },\n  // ...\n)\n")),(0,o.kt)("h3",{id:"argument-2-children"},"Argument 2: Children"),(0,o.kt)("p",null,"Pass in an object that satisfies the module's children type \u2014 in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"RootChildren"),". "),(0,o.kt)("p",null,"For now, since the root module has no children, we can just pass in an empty object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const rootModule = createDunkModule<RootModule>(\n  // ...\n  {},\n  // ...\n)\n")),(0,o.kt)("h3",{id:"argument-3-reducers"},"Argument 3: Reducers"),(0,o.kt)("p",null,"For the final argument, pass in a map of action names to reducers that can handle those actions."),(0,o.kt)("p",null,"A reducer is a function that accepts current state and the action's payload, and returns an updated state."),(0,o.kt)("p",null,"Thanks to the module's payloads type (",(0,o.kt)("inlineCode",{parentName:"p"},"RootPayloads")," in this case), the following things happen automatically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dunk ensures that we have reducers for all of the actions we've defined"),(0,o.kt)("li",{parentName:"ul"},"Dunk automatically types the state, payload, and return type of each reducer")),(0,o.kt)("p",null,"Let's now write our three reducers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const rootModule = createDunkModule<RootModule>(\n  // ...\n  {\n    setCounter: (state, payload) => ({\n      ...state,\n      counter: payload,\n    }),\n    reset: (state) => ({\n      ...state,\n      counter: 0,\n    }),\n    increment: (state) => ({\n      ...state,\n      counter: state.counter + 1,\n    }),\n  }\n)\n")),(0,o.kt)("p",null,"Notice that our ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," reducers don't accept a payload argument since their payload types are ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Now that we'e created our root module, it's time to define its bridge, which is how the store's client can interact with the module."))}c.isMDXComponent=!0}}]);
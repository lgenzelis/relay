(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},667:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(1069)),o={id:"graphql-in-relay",title:"GraphQL in Relay",original_id:"graphql-in-relay"},l={unversionedId:"graphql-in-relay",id:"version-v5.0.0/graphql-in-relay",isDocsHomePage:!1,title:"GraphQL in Relay",description:"Table of Contents:",source:"@site/versioned_docs/version-v5.0.0/Modern-GraphQLInRelay.md",slug:"/graphql-in-relay",permalink:"/docs/v5.0.0/graphql-in-relay",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v5.0.0/Modern-GraphQLInRelay.md",version:"v5.0.0",lastUpdatedBy:"Steven Chaitoff",lastUpdatedAt:1614896317,sidebar:"version-v5.0.0/docs",previous:{title:"Quick Start Guide",permalink:"/docs/v5.0.0/quick-start-guide"},next:{title:"Relay Environment",permalink:"/docs/v5.0.0/relay-environment"}},c=[{value:"<code>graphql</code>",id:"graphql",children:[]},{value:"Directives",id:"directives",children:[{value:"<code>@arguments</code>",id:"arguments",children:[]},{value:"<code>@argumentDefinitions</code>",id:"argumentdefinitions",children:[]},{value:"<code>@connection(key: String!, filters: [String])</code>",id:"connectionkey-string-filters-string",children:[]},{value:"<code>@relay(plural: Boolean)</code>",id:"relayplural-boolean",children:[]},{value:"<code>@relay(mask: Boolean)</code>",id:"relaymask-boolean",children:[]}]},{value:"Relay Compiler",id:"relay-compiler",children:[{value:"Persisting queries",id:"persisting-queries",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"GraphQL Schema",id:"graphql-schema",children:[]},{value:"Source files",id:"source-files",children:[]},{value:"Importing generated definitions",id:"importing-generated-definitions",children:[]},{value:"Client schema extensions",id:"client-schema-extensions",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Table of Contents:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#graphql"}),Object(i.b)("inlineCode",{parentName:"a"},"graphql"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#directives"}),"Directives")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#relay-compiler"}),"Relay Compiler"))),Object(i.b)("h2",{id:"graphql"},Object(i.b)("inlineCode",{parentName:"h2"},"graphql")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," template tag provided by Relay serves as the mechanism to write queries, fragments, mutations or subscriptions in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/learn/"}),"GraphQL")," language. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport {graphql} from 'react-relay';\n\ngraphql`\n  query MyQuery {\n    viewer {\n      id\n    }\n  }\n`;\n\n")),Object(i.b)("p",null,"The result of using the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," template tag is a ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLTaggedNode"),"; a runtime representation of the GraphQL document which can be used to define ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./query-renderer"}),"Query Renderers"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container"}),"Fragment Containers"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./refetch-container"}),"Refetch Containers"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./pagination-container"}),"Pagination Containers"),", etc."),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," template tags are ",Object(i.b)("strong",{parentName:"p"},"never executed at runtime"),". Instead, they are compiled ahead of time by the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#relay-compiler"}),"Relay Compiler")," into generated artifacts that live alongside your source code, and which Relay requires to operate at runtime. The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./installation-and-setup#setup-babel-plugin-relay"}),"Relay Babel plugin")," will then convert the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",Object(i.b)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),Object(i.b)("h2",{id:"directives"},"Directives"),Object(i.b)("p",null,"Relay uses directives to add additional information to GraphQL documents, which are used by the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#relay-compiler"}),"Relay Compiler")," to generate the appropriate runtime artifacts. These directives only appear in your application code and are removed from requests sent to your GraphQL server."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The relay-compiler will maintain any directives supported by your server (such as ",Object(i.b)("inlineCode",{parentName:"p"},"@include")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@skip"),") so they remain part of the request to the GraphQL server and won't alter generated runtime artifacts."),Object(i.b)("h3",{id:"arguments"},Object(i.b)("inlineCode",{parentName:"h3"},"@arguments")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@arguments")," is a directive used to pass arguments to a fragment that was defined using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#argumentdefinitions"}),Object(i.b)("inlineCode",{parentName:"a"},"@argumentDefinitions")),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nquery TodoListQuery($userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n\n")),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container#passing-arguments-to-a-fragment"}),"Fragment Container docs")," for more details."),Object(i.b)("h3",{id:"argumentdefinitions"},Object(i.b)("inlineCode",{parentName:"h3"},"@argumentDefinitions")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@argumentDefinitions")," is a directive used to specify arguments taken by a fragment. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'\nfragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n\n')),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container#passing-arguments-to-a-fragment"}),"Fragment Container docs")," for more details."),Object(i.b)("h3",{id:"connectionkey-string-filters-string"},Object(i.b)("inlineCode",{parentName:"h3"},"@connection(key: String!, filters: [String])")),Object(i.b)("p",null,"When using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./pagination-container"}),"Pagination Container"),", Relay expects connection fields to be annotated with a ",Object(i.b)("inlineCode",{parentName:"p"},"@connection")," directive. For more detailed information and an example, check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./pagination-container#connection"}),"docs on using ",Object(i.b)("inlineCode",{parentName:"a"},"@connection")," inside a Pagination Container"),"."),Object(i.b)("h3",{id:"relayplural-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"@relay(plural: Boolean)")),Object(i.b)("p",null,"When defining a fragment for use with a Fragment container, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(plural: true)")," directive to indicate that container expects the prop for that fragment to be a list of items instead of a single item. A query or parent that spreads a ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(plural: true)")," fragment should do so within a plural field (ie a field backed by a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/learn/schema/#lists-and-non-null"}),"GraphQL list"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Plural fragment definition\ngraphql`\nfragment TodoItems_items on TodoItem @relay(plural: true) {\n  id\n  text\n}`;\n\n// Plural fragment usage: note the parent type is a list of items (`[TodoItem}]`)\nfragment TodoApp_app on App {\n  items {\n    // parent type is a list here\n    ...TodoItem_items\n  }\n}\n\n")),Object(i.b)("h3",{id:"relaymask-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"@relay(mask: Boolean)")),Object(i.b)("p",null,"By default Relay will only expose the data for fields explicitly requested by a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container#createfragmentcontainer"}),"component's fragment"),", which is known as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./thinking-in-relay#data-masking"}),"data masking"),"."),Object(i.b)("p",null,"However, ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)")," can be used to prevent data masking; when including a fragment and annotating it with ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)"),", its data will be available directly to the parent instead of being masked for a different container."),Object(i.b)("p",null,"Applied to a fragment definition, ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)")," changes the generated Flow types to be better usable when the fragment is included with the same directive. The Flow types will no longer be exact objects and no longer contain internal marker fields."),Object(i.b)("p",null,"This may be helpful to reduce redundant fragments when dealing with nested or recursive data within a single Component."),Object(i.b)("p",null,"Keep in mind that it is typically considered an ",Object(i.b)("strong",{parentName:"p"},"anti-pattern")," to create a single fragment shared across many containers. Abusing this directive could result in over-fetching in your application."),Object(i.b)("p",null,"In the example below, the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," prop will include the data for ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"name")," fields wherever ",Object(i.b)("inlineCode",{parentName:"p"},"...Component_internUser")," is included, instead of Relay's normal behavior to mask those fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ngraphql`\n  fragment Component_internUser on InternUser @relay(mask: false) {\n    id\n    name\n  }\n`;\n\nexport default createFragmentContainer(\n  ({ user }) => /* ... */,\n  graphql`\n    fragment Component_user on User {\n      internUser {\n        manager {\n          ...Component_internUser @relay(mask: false)\n        }\n        ... on Employee {\n          admins {\n            ...Component_internUser @relay(mask: false)\n          }\n          reports {\n            ...Component_internUser @relay(mask: false)\n          }\n        }\n      }\n    }\n  `,\n);\n\n")),Object(i.b)("h2",{id:"relay-compiler"},"Relay Compiler"),Object(i.b)("p",null,"Relay uses the Relay Compiler to convert ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#graphql"}),Object(i.b)("inlineCode",{parentName:"a"},"graphql"))," literals into generated files that live alongside your source files."),Object(i.b)("p",null,"A query like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ngraphql`\n  fragment MyComponent on Type {\n    field\n  }\n`\n\n")),Object(i.b)("p",null,"Will cause a generated file to appear in ",Object(i.b)("inlineCode",{parentName:"p"},"./__generated__/MyComponent.graphql"),",\nwith both runtime artifacts (which help to read and write from the Relay Store)\nand ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org/"}),"Flow types")," to help you write type-safe code."),Object(i.b)("p",null,"The Relay Compiler is responsible for generating code as part of a build step which can then be referenced at runtime. By building the query ahead of time, the Relay's runtime is not responsible for generating a query string, and various optimizations can be performed on the query that could be too expensive at runtime (for example, fields that are duplicated in the query can be merged during the build step, to improve efficiency of processing the GraphQL response)."),Object(i.b)("h3",{id:"persisting-queries"},"Persisting queries"),Object(i.b)("p",null,"Relay Compiler supports the use of ",Object(i.b)("strong",{parentName:"p"},"persisted queries"),", in which each version of a query is associated to a unique ID on the server and the runtime uploads only the persisted ID instead of the full query text. This has several benefits: it can significantly reduce the time to send a query (and the upload bytes) and enables ",Object(i.b)("em",{parentName:"p"},"whitelisting")," of queries. For example, you may choose to disallow queries in text form and only allow queries that have been persisted (and that presumably have passed your internal code review process)."),Object(i.b)("p",null,"Persisted queries can be enabled by instructing Relay Compiler to emit metadata about each query, mutation, and subscription into a JSON file. The generated file will contain a mapping of query identifiers to query text, which you can then save to your server. To enable persisted queries, use the ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output")," flag to the compiler:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'\n"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./path/to/persisted-queries.json"\n}\n\n')),Object(i.b)("p",null,"Relay Compiler will then create the id =",">"," query text mapping in the path you specify. You can then use this complete\njson file in your server side to map query ids to operation text."),Object(i.b)("p",null,"For more details, refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./persisted-queries"}),"Persisted Queries section"),"."),Object(i.b)("h3",{id:"set-up-relay-compiler"},"Set up relay-compiler"),Object(i.b)("p",null,"See our relay-compiler section in our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./installation-and-setup#set-up-relay-compiler"}),"Installation and Setup guide"),"."),Object(i.b)("h3",{id:"graphql-schema"},"GraphQL Schema"),Object(i.b)("p",null,"To use the Relay Compiler, you need either a .graphql or .json GraphQL schema file, describing your GraphQL server's API. Typically these files are local representations of a server source of truth and are not edited directly. For example, we might have a ",Object(i.b)("inlineCode",{parentName:"p"},"schema.graphql")," like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nschema {\n  query: Root\n}\n\ntype Root {\n  dictionary: [Word]\n}\n\ntype Word {\n  id: String!\n  definition: WordDefinition\n}\n\ntype WordDefinition {\n  text: String\n  image: String\n}\n\n")),Object(i.b)("h3",{id:"source-files"},"Source files"),Object(i.b)("p",null,"Additionally, you need a directory containing ",Object(i.b)("inlineCode",{parentName:"p"},".js")," files that use the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," tag to describe GraphQL queries and fragments. Let's call this ",Object(i.b)("inlineCode",{parentName:"p"},"./src"),"."),Object(i.b)("p",null,"Then run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn run relay")," as set up before."),Object(i.b)("p",null,"This will create a series of ",Object(i.b)("inlineCode",{parentName:"p"},"__generated__")," directories that are co-located with the corresponding files containing ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," tags."),Object(i.b)("p",null,"For example, given the two files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/Components/DictionaryComponent.js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst DictionaryWordFragment = graphql`\n  fragment DictionaryComponent_word on Word {\n    id\n    definition {\n      ...DictionaryComponent_definition\n    }\n  }\n`\n\nconst DictionaryDefinitionFragment = graphql`\n  fragment DictionaryComponent_definition on WordDefinition {\n    text\n    image\n  }\n`\n\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/Queries/DictionaryQuery.js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst DictionaryQuery = graphql`\n  query DictionaryQuery {\n    dictionary {\n      ...DictionaryComponent_word\n    }\n  }\n`\n\n")))),Object(i.b)("p",null,"This would produce three generated files, and two ",Object(i.b)("inlineCode",{parentName:"p"},"__generated__")," directories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_word.graphql.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_definition.graphql.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Queries/__generated__/DictionaryQuery.graphql.js"))),Object(i.b)("h3",{id:"importing-generated-definitions"},"Importing generated definitions"),Object(i.b)("p",null,"Typically you will not need to import your generated definitions. The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./installation-and-setup#setup-babel-plugin-relay"}),"Relay Babel plugin")," will then convert the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",Object(i.b)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),Object(i.b)("p",null,"However the Relay Compiler also automatically generates ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org"}),"Flow")," types as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org/en/docs/types/comments/"}),"type comments"),". For example, you can import the generated Flow types like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport type {DictionaryComponent_word} from './__generated__/DictionaryComponent_word.graphql';\n\n")),Object(i.b)("h3",{id:"client-schema-extensions"},"Client schema extensions"),Object(i.b)("p",null,"The Relay Compiler fully supports client-side schema extensions, which allows you to extend the server schema by defining additional GraphQL types and fields on the client. Relay expects the client schema to be located in your ",Object(i.b)("inlineCode",{parentName:"p"},"--src")," directory."),Object(i.b)("p",null,"For example, let's create ",Object(i.b)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql")," and define a new type called ",Object(i.b)("inlineCode",{parentName:"p"},"Setting"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\ntype Setting {\n  name: String!\n  active: Boolean!\n}\n\n")),Object(i.b)("p",null,"Assuming the server schema ",Object(i.b)("inlineCode",{parentName:"p"},"./schema.graphql"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nschema {\n  query: Root\n}\n\ntype Root {\n  title: String!\n}\n\n")),Object(i.b)("p",null,"We can then extend existing server types in the client schema ",Object(i.b)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql")," with our new ",Object(i.b)("inlineCode",{parentName:"p"},"Setting")," type, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nextend type Root {\n  settings: [Setting]\n}\n\n")),Object(i.b)("p",null,"Any fields specified in the client schema, can be fetched from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./relay-store"}),"Relay Store"),", by requesting it in a query."),Object(i.b)("p",null,"For more details, refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./local-state-management"}),"Local state management section"),"."),Object(i.b)("h3",{id:"advanced-usage"},"Advanced usage"),Object(i.b)("p",null,"In addition to the bin script, the ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," package also ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/relay/blob/master/packages/relay-compiler/index.js"}),"exports library code")," which you may use to create more complex configurations for the compiler, or to extend the compiler with your own custom output."),Object(i.b)("p",null,"If you find you need to do something unique (like generate types that conform to an older version of Flow, or to parse non-javascript source files), you can build your own version of the Compiler by swapping in your own ",Object(i.b)("inlineCode",{parentName:"p"},"FileWriter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ASTCache"),", or by adding on an additional ",Object(i.b)("inlineCode",{parentName:"p"},"IRTransform"),". Note, the internal APIs of the ",Object(i.b)("inlineCode",{parentName:"p"},"RelayCompiler")," are under constant iteration, so rolling your own version may lead to incompatibilities with future releases."))}s.isMDXComponent=!0}}]);
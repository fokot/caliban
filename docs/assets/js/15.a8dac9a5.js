(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),s("p",[t._v("Caliban allows you to perform additional actions at various levels of a query processing, via the concept of "),s("code",[t._v("Wrapper")]),t._v(". Using wrappers, you can:")]),t._v(" "),s("ul",[s("li",[t._v("verify that a query doesn't reach some limit (e.g. depth, complexity)")]),t._v(" "),s("li",[t._v("modify a query before it's executed")]),t._v(" "),s("li",[t._v("add timeouts to queries or fields")]),t._v(" "),s("li",[t._v("log each field execution time")]),t._v(" "),s("li",[t._v("support "),s("a",{attrs:{href:"https://github.com/apollographql/apollo-tracing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Tracing"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/apollographql/apollo-cache-control",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Caching"),s("OutboundLink")],1),t._v(" or anything similar")]),t._v(" "),s("li",[t._v("etc.")])]),t._v(" "),s("h2",{attrs:{id:"wrapper-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrapper-types"}},[t._v("#")]),t._v(" Wrapper types")]),t._v(" "),s("p",[t._v("There are 6 basic types of wrappers:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("OverallWrapper")]),t._v(" to wrap the whole query processing")]),t._v(" "),s("li",[s("code",[t._v("ParsingWrapper")]),t._v(" to wrap the query parsing only")]),t._v(" "),s("li",[s("code",[t._v("ValidationWrapper")]),t._v(" to wrap the query validation only")]),t._v(" "),s("li",[s("code",[t._v("ExecutionWrapper")]),t._v(" to wrap the query execution only")]),t._v(" "),s("li",[s("code",[t._v("FieldWrapper")]),t._v(" to wrap each field execution")]),t._v(" "),s("li",[s("code",[t._v("IntrospectionWrapper")]),t._v(" to wrap the introspection query only")])]),t._v(" "),s("p",[t._v("Each one requires a function that takes a "),s("code",[t._v("ZIO")]),t._v(" or "),s("code",[t._v("ZQuery")]),t._v(" computation together with some contextual information (e.g. the query string) and should return another computation.")]),t._v(" "),s("p",[t._v("Let's see how to implement a wrapper that times out the whole query if its processing takes longer that 1 minute.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" wrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OverallWrapper "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" process "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n  process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" minute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getOrElse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        GraphQLResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          NullValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ExecutionError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Query was interrupted after timeout of ${duration.render}:\\n$query"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can also combine wrappers using "),s("code",[t._v("|+|")]),t._v(" and create a wrapper that requires an effect to be run at each query using "),s("code",[t._v("EffectfulWrapper")]),t._v(".")]),t._v(" "),s("p",[t._v("To use your wrapper, call "),s("code",[t._v("GraphQL#withWrapper")]),t._v(" or its alias "),s("code",[t._v("@@")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withWrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @@ wrapper\n")])])]),s("h2",{attrs:{id:"pre-defined-wrappers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-defined-wrappers"}},[t._v("#")]),t._v(" Pre-defined wrappers")]),t._v(" "),s("p",[t._v("Caliban comes with a few pre-made wrappers in "),s("code",[t._v("caliban.wrappers.Wrappers")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("maxDepth")]),t._v(" returns a wrapper that fails queries whose depth is higher than a given value")]),t._v(" "),s("li",[s("code",[t._v("maxFields")]),t._v(" returns a wrapper that fails queries whose number of fields is higher than a given value")]),t._v(" "),s("li",[s("code",[t._v("timeout")]),t._v(" returns a wrapper that fails queries taking more than a specified time")]),t._v(" "),s("li",[s("code",[t._v("printErrors")]),t._v(" returns a wrapper that prints errors")]),t._v(" "),s("li",[s("code",[t._v("printSlowQueries")]),t._v(" returns a wrapper that prints slow queries")]),t._v(" "),s("li",[s("code",[t._v("onSlowQueries")]),t._v(" returns a wrapper that can run a given function on slow queries")])]),t._v(" "),s("p",[t._v("In addition to those, Caliban also ships with some non-spec but standard wrappers")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("caliban.wrappers.ApolloTracing.apolloTracing")]),t._v(" returns a wrapper that adds tracing data into the "),s("code",[t._v("extensions")]),t._v(" field of each response following "),s("a",{attrs:{href:"https://github.com/apollographql/apollo-tracing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Tracing"),s("OutboundLink")],1),t._v(" format.")]),t._v(" "),s("li",[s("code",[t._v("caliban.wrappers.ApolloCaching.apolloCaching")]),t._v(" returns a wrapper that adds caching hints to properly annotated fields using the "),s("a",{attrs:{href:"https://github.com/apollographql/apollo-cache-control",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Caching"),s("OutboundLink")],1),t._v(" format.")]),t._v(" "),s("li",[s("code",[t._v("caliban.wrappers.ApolloPersistedQueries.apolloPersistedQueries")]),t._v(" returns a wrapper that caches and retrieves query using a hash using the "),s("a",{attrs:{href:"https://github.com/apollographql/apollo-link-persisted-queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Persisted Queries"),s("OutboundLink")],1),t._v(" format.")])]),t._v(" "),s("p",[t._v("They can be used like this:")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  graphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @@\n    maxDepth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @@\n    timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" seconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @@\n    printSlowQueries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" millis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @@\n    apolloTracing @@\n    apolloCaching\n")])])]),s("h2",{attrs:{id:"wrapping-the-interpreter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-the-interpreter"}},[t._v("#")]),t._v(" Wrapping the interpreter")]),t._v(" "),s("p",[t._v("All the wrappers mentioned above require that you don't modify the environment "),s("code",[t._v("R")]),t._v(" and the error type which is always a "),s("code",[t._v("CalibanError")]),t._v(". It is also possible to wrap your "),s("code",[t._v("GraphQLInterpreter")]),t._v(" by calling "),s("code",[t._v("wrapExecutionWith")]),t._v(" on it. This method takes in a function "),s("code",[t._v("f")]),t._v(" and returns a new "),s("code",[t._v("GraphQLInterpreter")]),t._v(" that will wrap the "),s("code",[t._v("execute")]),t._v(" method with this function "),s("code",[t._v("f")]),t._v(".")]),t._v(" "),s("p",[t._v("It is used internally to implement "),s("code",[t._v("mapError")]),t._v(" (customize errors) and "),s("code",[t._v("provide")]),t._v(" (eliminate the environment), but you can use it for other purposes such as adding a general timeout, logging response times, etc.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLInterpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyEnv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CalibanError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change error type to String")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" i2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLInterpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyEnv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// provide the environment")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" i3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLInterpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CalibanError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEnv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add a timeout on every query execution")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" i4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLInterpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyEnv "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Clock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CalibanError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapExecutionWith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" seconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getOrElse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GraphQLResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NullValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ExecutionError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Timeout!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"customizing-error-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-error-responses"}},[t._v("#")]),t._v(" Customizing error responses")]),t._v(" "),s("p",[t._v("During various phases of executing a query, an error may occur. Caliban renders the different instances of "),s("code",[t._v("CalibanError")]),t._v(" to a GraphQL spec compliant response. As a user, you will most likely encounter "),s("code",[t._v("ExecutionError")]),t._v(" at some point because this will encapsulate the errors in the error channel of your effects. For Caliban to be able to render some basic message about the error that occured during query execution, it is important that your error extends "),s("code",[t._v("Throwable")]),t._v(".")]),t._v(" "),s("p",[t._v("For more meaningful error handling, GraphQL spec allows for an "),s("a",{attrs:{href:"http://spec.graphql.org/June2018/#example-fce18",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("extension")]),s("OutboundLink")],1),t._v(" object in the error response. This object may include, for instance, "),s("code",[t._v("code")]),t._v(" information to model enum-like error codes that can be handled by a front-end. In order to generate this information, one can use the "),s("code",[t._v("mapError")]),t._v(" function on a "),s("code",[t._v("GraphQLInterpreter")]),t._v(". An example is provided below in which we map a custom domain error within an "),s("code",[t._v("ExecutionError")]),t._v(" to a meaningful error code.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sealed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" ExampleAppEncodableError "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Throwable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" errorCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" UnauthorizedError "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" ExampleAppEncodableError "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" errorCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNAUTHORIZED"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" withErrorCodeExtensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  interpreter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLInterpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CalibanError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQLInterpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CalibanError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" interpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapError "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" err @ ExecutionError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exampleError"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExampleAppEncodableError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extensions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ObjectValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errorCode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" StringValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exampleError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionError "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extensions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ObjectValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errorCode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" StringValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EXECUTION_ERROR"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ValidationError "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extensions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ObjectValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errorCode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" StringValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VALIDATION_ERROR"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ParsingError "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extensions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ObjectValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errorCode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" StringValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PARSING_ERROR"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
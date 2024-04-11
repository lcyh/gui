import{a4 as C,_ as N,E as m,c as V,H as E,C as f,S as h,o as q,A as l,a as s}from"./chunks/framework.32362502.js";const{defineComponent:R}=C,$=R({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:r,resolveComponent:D,withCtx:t,createVNode:a,createElementVNode:p,renderList:i,Fragment:y,openBlock:F,createElementBlock:A,toDisplayString:g}=C,B={class:"p-4"},b={class:"my-4"},_={class:"scroll-wrap"},v={class:"p-3"};function x(e,n){const c=D("g-button"),u=D("g-scroll-container");return F(),A("div",B,[p("div",b,[a(c,{onClick:n[0]||(n[0]=o=>e.scrollTo(100))},{default:t(()=>[r("滚动到100px位置")]),_:1}),a(c,{onClick:n[1]||(n[1]=o=>e.scrollTo(800))},{default:t(()=>[r("滚动到800px位置")]),_:1}),a(c,{onClick:n[2]||(n[2]=o=>e.scrollTo(0))},{default:t(()=>[r("滚动到顶部")]),_:1}),a(c,{onClick:n[3]||(n[3]=o=>e.scrollBottom())},{default:t(()=>[r("滚动到底部")]),_:1})]),p("div",_,[a(u,{class:"mt-4",ref:"scrollRef"},{default:t(()=>[p("ul",v,[(F(),A(y,null,i(100,o=>p("li",{key:o,class:"p-2"},g(o),1)),64))])]),_:1},512)])])}const{defineComponent:k,ref:T,unref:S}=C,w=k({setup(){const e=T(null),n=()=>{const o=S(e);if(!o)throw new Error("scroll is Null");return o};function c(o){var d;(d=n())==null||d.scrollTo(o)}function u(){var o;(o=n())==null||o.scrollBottom()}return{scrollTo:c,scrollRef:e,scrollBottom:u}}});return{render:x,...w}}()}}),O=JSON.parse('{"title":"ScrollContainer 滚动","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-container/index.md","filePath":"components/scroll-container/index.md","lastUpdated":1712806664000}');const P=h('<h1 id="scrollcontainer-滚动" tabindex="-1">ScrollContainer 滚动 <a class="header-anchor" href="#scrollcontainer-滚动" aria-label="Permalink to &quot;ScrollContainer 滚动&quot;">​</a></h1><p>滚动容器组件</p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><p>当需要滚动到某个具体位置</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2>',5),H=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"p-4"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"my-4"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scrollTo(100)"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"滚动到100px位置"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scrollTo(800)"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"滚动到800px位置"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scrollTo(0)"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"滚动到顶部"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scrollBottom()"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"滚动到底部"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"g-button"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scroll-wrap"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"g-scroll-container"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"mt-4"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"ref"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scrollRef"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"ul"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"p-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"          "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"v-for"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"index "),l("span",{style:{color:"#89DDFF"}},"in"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"100"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#C792EA"}},"key"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"index"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"li"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"p-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"              {{ index }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"li"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"          "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"ul"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"g-scroll-container"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"defineComponent"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"ref"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"unref"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"defineComponent"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"setup"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"scrollRef"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"null"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"getScroll"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"scroll"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"unref"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"scrollRef"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#89DDFF"}},"!"),l("span",{style:{color:"#A6ACCD"}},"scroll"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"throw"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"new"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"Error"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"scroll is Null"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"scroll"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"scrollTo"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"top"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FFCB6B"}},"number"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#82AAFF"}},"getScroll"),l("span",{style:{color:"#F07178"}},"()"),l("span",{style:{color:"#89DDFF"}},"?."),l("span",{style:{color:"#82AAFF"}},"scrollTo"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"top"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"scrollBottom"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#82AAFF"}},"getScroll"),l("span",{style:{color:"#F07178"}},"()"),l("span",{style:{color:"#89DDFF"}},"?."),l("span",{style:{color:"#82AAFF"}},"scrollBottom"),l("span",{style:{color:"#F07178"}},"()"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"scrollTo"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"scrollRef"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"scrollBottom")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"less"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"scoped"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#FFCB6B"}},"g-button"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"margin-right"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"5px"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#FFCB6B"}},"scroll-wrap"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"height"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"300px"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"background"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"var"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"--component-background"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#FFCB6B"}},"ul"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#B2CCD6"}},"padding"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#FFCB6B"}},"li"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#B2CCD6"}},"padding"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"0.5rem"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#B2CCD6"}},"border"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"1px"),l("span",{style:{color:"#A6ACCD"}}," solid "),l("span",{style:{color:"#82AAFF"}},"var"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"--border-color-base"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),L=h('<h2 id="methods-方法" tabindex="-1">Methods 方法 <a class="header-anchor" href="#methods-方法" aria-label="Permalink to &quot;Methods 方法&quot;">​</a></h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>getScrollWrap</td><td>()=&gt;HtmlElement</td><td>获取滚动容器 el</td></tr><tr><td>scrollBottom</td><td>Function</td><td>滚动到底部</td></tr><tr><td>scrollTo</td><td>Function(to:number,duration = 500)</td><td>滚动到指定位置</td></tr></tbody></table><h2 id="slots-插槽" tabindex="-1">Slots 插槽 <a class="header-anchor" href="#slots-插槽" aria-label="Permalink to &quot;Slots 插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认区域</td></tr></tbody></table>',4);function M(r,D,t,a,p,i){const y=m("render-demo-0"),F=m("demo");return q(),V("div",null,[P,E(F,{customClass:"undefined",sourceCode:`<template>
  <div class="p-4">
    <div class="my-4">
      <g-button @click="scrollTo(100)">滚动到100px位置</g-button>
      <g-button @click="scrollTo(800)">滚动到800px位置</g-button>
      <g-button @click="scrollTo(0)">滚动到顶部</g-button>
      <g-button @click="scrollBottom()">滚动到底部</g-button>
    </div>
    <div class="scroll-wrap">
      <g-scroll-container class="mt-4" ref="scrollRef">
        <ul class="p-3">
          <template v-for="index in 100" :key="index">
            <li class="p-2">
              {{ index }}
            </li>
          </template>
        </ul>
      </g-scroll-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref } from 'vue';
export default defineComponent({
  setup() {
    const scrollRef = ref(null);
    const getScroll = () => {
      const scroll = unref(scrollRef);
      if (!scroll) {
        throw new Error('scroll is Null');
      }
      return scroll;
    };

    function scrollTo(top: number) {
      getScroll()?.scrollTo(top);
    }

    function scrollBottom() {
      getScroll()?.scrollBottom();
    }

    return {
      scrollTo,
      scrollRef,
      scrollBottom
    };
  }
});
<\/script>
<style lang="less" scoped>
.g-button {
  margin-right: 5px;
}
.scroll-wrap {
  height: 300px;
  background: var(--component-background);
  ul {
    padding: 0;
  }
  li {
    padding: 0.5rem;
    border: 1px solid var(--border-color-base);
  }
}
</style>
`},{highlight:f(()=>[H]),default:f(()=>[E(y)]),_:1}),L])}const U=N($,[["render",M]]);export{O as __pageData,U as default};

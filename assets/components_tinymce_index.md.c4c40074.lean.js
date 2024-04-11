import{a4 as p,_ as h,E as i,c as m,H as C,C as A,A as l,a as s,S as E,o as f}from"./chunks/framework.32362502.js";const{defineComponent:g}=p,B=g({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:F,openBlock:y,createBlock:D}=p;function u(o,e){const c=F("g-tinymce");return y(),D(c,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),darkMode:o.darkMode,onChange:o.handleChange,width:"100%"},null,8,["modelValue","darkMode","onChange"])}const{defineComponent:d,ref:n,onMounted:a}=p,r=d({setup(){const o=n("hello world!"),e=n("");function c(t){console.log(t)}return a(()=>{document.querySelector("html").classList.contains("dark")?e.value="dark":e.value="light"}),{msg:"Tinymce 富文本编辑器 组件文档示例",value:o,handleChange:c,darkMode:e}}});return{render:u,...r}}()}}),V=JSON.parse('{"title":"Tinymce 富文本编辑器","description":"","frontmatter":{},"headers":[],"relativePath":"components/tinymce/index.md","filePath":"components/tinymce/index.md","lastUpdated":1712806664000}'),k=l("h1",{id:"tinymce-富文本编辑器",tabindex:"-1"},[s("Tinymce 富文本编辑器 "),l("a",{class:"header-anchor",href:"#tinymce-富文本编辑器","aria-label":'Permalink to "Tinymce 富文本编辑器"'},"​")],-1),v=l("p",null,"富文本组件",-1),_=l("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),l("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),M=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"g-tinymce")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"value"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":darkMode"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"darkMode"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"@change"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"handleChange"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"width"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"100%"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"defineComponent"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"ref"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"onMounted"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"defineComponent"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"setup"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"hello world!"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"darkMode"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"handleChange"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"value"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FFCB6B"}},"string"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"console"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"log"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#82AAFF"}},"onMounted"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"htmlEle"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"document"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"querySelector"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"html"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"htmlEle"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"classList"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"contains"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"dark"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#F07178"}},")) "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#A6ACCD"}},"darkMode"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"dark"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#A6ACCD"}},"darkMode"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"light"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      msg"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"Tinymce 富文本编辑器 组件文档示例"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"value"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"handleChange"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"darkMode")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),b=E('<h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>默认</th><th>说明</th></tr></thead><tbody><tr><td>options</td><td>any {}</td><td>tinymce</td><td>的配置项</td></tr><tr><td>value(v-model)</td><td>string</td><td>-</td><td>双向绑定值</td></tr><tr><td>height</td><td>number , string</td><td>400</td><td>高度</td></tr><tr><td>width</td><td>number , string</td><td>auto</td><td>宽度</td></tr><tr><td>toolbar</td><td>string[]</td><td>-</td><td>工具栏</td></tr><tr><td>plugins</td><td>string[]</td><td>-</td><td>插件</td></tr><tr><td>showImageUpload</td><td>boolean</td><td>true</td><td>是否显示上传按钮</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件</th><th>回调参数</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>(str:string)=&gt;{}</td><td></td><td>富文本内容改变触发事件</td></tr></tbody></table>',4);function x(F,y,D,u,d,n){const a=i("render-demo-0"),r=i("demo");return f(),m("div",null,[k,v,_,C(r,{customClass:"undefined",sourceCode:`<template>
  <g-tinymce
    v-model="value"
    :darkMode="darkMode"
    @change="handleChange"
    width="100%"
  />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('hello world!');
    const darkMode = ref('');
    function handleChange(value: string) {
      console.log(value);
    }
    onMounted(() => {
      let htmlEle = document.querySelector('html');
      if (htmlEle.classList.contains('dark')) {
        darkMode.value = 'dark';
      } else {
        darkMode.value = 'light';
      }
    });
    return {
      msg: 'Tinymce 富文本编辑器 组件文档示例',
      value,
      handleChange,
      darkMode
    };
  }
});
<\/script>

<style></style>
`},{highlight:A(()=>[M]),default:A(()=>[C(a)]),_:1}),b])}const q=h(B,[["render",x]]);export{V as __pageData,q as default};

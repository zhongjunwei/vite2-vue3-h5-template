import{v as e,E as t,y as l,G as i,A as n,d as s,e as a,a3 as r,$ as u,z as o,F as c,L as v,a4 as p,_ as d,o as g,c as m,w as f,j as b,a5 as y,f as k}from"./index-5582f929.js";import{r as x,u as w}from"./use-route-ab80dc4a.js";const[j,h]=e("cell");const _=o(s({name:j,props:n({},{icon:String,size:String,title:t,value:t,label:t,center:Boolean,isLink:Boolean,border:l,required:Boolean,iconPrefix:String,valueClass:i,labelClass:i,titleClass:i,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},x),setup(e,{slots:t}){const l=w(),i=()=>{if(t.label||r(e.label))return a("div",{class:[h("label"),e.labelClass]},[t.label?t.label():e.label])},n=()=>{if(t.title||r(e.title))return a("div",{class:[h("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():a("span",null,[e.title]),i()])},s=()=>{const l=t.value||t.default;if(l||r(e.value)){const i=t.title||r(e.title);return a("div",{class:[h("value",{alone:!i}),e.valueClass]},[l?l():a("span",null,[e.value])])}},o=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return a(u,{name:t,class:h("right-icon")},null)}};return()=>{var i,r;const{size:c,center:v,border:p,isLink:d,required:g}=e,m=null!=(i=e.clickable)?i:d,f={center:v,required:g,clickable:m,borderless:!p};return c&&(f[c]=!!c),a("div",{class:h(f),role:m?"button":void 0,tabindex:m?0:void 0,onClick:l},[t.icon?t.icon():e.icon?a(u,{name:e.icon,class:h("left-icon"),classPrefix:e.iconPrefix},null):void 0,n(),s(),o(),null==(r=t.extra)?void 0:r.call(t)])}}})),[B,C]=e("cell-group");const S=o(s({name:B,inheritAttrs:!1,props:{title:String,inset:Boolean,border:l},setup(e,{slots:t,attrs:l}){const i=()=>{var i;return a("div",v({class:[C({inset:e.inset}),{[p]:e.border&&!e.inset}]},l),[null==(i=t.default)?void 0:i.call(t)])};return()=>e.title||t.title?a(c,null,[a("div",{class:C("title",{inset:e.inset})},[t.title?t.title():e.title]),i()]):i()}}));var D=d(s({__name:"index",setup(e){const{pkg:t,lastBuildTime:l}={pkg:{dependencies:{"@nutui/nutui":"^3.1.22","@vueuse/core":"8.7.5","@vueuse/integrations":"8.7.5",axios:"0.27.2",dayjs:"^1.11.3",pinia:"^2.0.14","universal-cookie":"^4.0.4",vant:"^3.5.2",vue:"^3.2.36","vue-i18n":"^9.1.10","vue-router":"^4.0.16"},devDependencies:{"@types/node":"^17.0.42","@typescript-eslint/eslint-plugin":"^5.29.0","@typescript-eslint/parser":"^5.29.0","@vitejs/plugin-legacy":"^1.8.2","@vitejs/plugin-vue":"^2.3.3","@vitejs/plugin-vue-jsx":"^1.3.10","bin-wrapper":"^4.1.0",consola:"^2.15.3","cross-env":"^7.0.3",eruda:"^2.4.1",eslint:"^8.18.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^9.1.1",husky:"8.0.1","lint-staged":"13.0.3",mockjs:"^1.1.0",postcss:"^8.4.14","postcss-html":"1.4.1","postcss-less":"^6.0.0","postcss-px-to-viewport-8-plugin":"^1.1.3",prettier:"^2.7.1","rollup-plugin-visualizer":"^5.6.0",stylelint:"^14.9.1","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended":"^8.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^26.0.0","stylelint-order":"^5.0.0",typescript:"^4.7.4","unplugin-auto-import":"^0.9.1","unplugin-vue-components":"^0.19.9",vite:"^2.9.12","vite-plugin-compression":"^0.5.1","vite-plugin-eruda":"^1.0.1","vite-plugin-imagemin":"^0.6.1","vite-plugin-mock":"^2.9.6","vite-plugin-pages":"^0.24.2","vite-plugin-progress":"^0.0.3","vite-plugin-restart":"^0.1.1","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-setup-extend":"^0.4.0","vue-eslint-parser":"^9.0.3","vue-tsc":"^0.38.1"},name:"vue3-vite2-h5-template",version:"1.0.0"},lastBuildTime:"2022-07-19 10:11:06"},{dependencies:i,devDependencies:n,name:s,version:r}=t;return(e,t)=>{const u=_,o=S;return g(),m(c,null,[a(o,{title:"基本信息"},{default:f((()=>[a(u,{title:"项目名称",value:b(s)},null,8,["value"]),a(u,{title:"项目版本",value:b(r)},null,8,["value"]),a(u,{title:"最后编译时间",value:b(l)},null,8,["value"])])),_:1}),a(o,{title:"生产环境依赖"},{default:f((()=>[(g(!0),m(c,null,y(Object.entries(b(i)),(([e,t],l)=>(g(),k(u,{"title-style":"flex:2",icon:"warning-o",key:l,title:e,value:t},null,8,["title","value"])))),128))])),_:1}),a(o,{title:"开发环境依赖"},{default:f((()=>[(g(!0),m(c,null,y(Object.entries(b(n)),(([e,t],l)=>(g(),k(u,{icon:"warning-o",key:l,title:e,value:t},null,8,["title","value"])))),128))])),_:1})],64)}}}),[["__file","/home/runner/work/vue3-vite2-h5-template-sunnie/vue3-vite2-h5-template-sunnie/src/views/pkgInfo/index.vue"]]);export{D as default};

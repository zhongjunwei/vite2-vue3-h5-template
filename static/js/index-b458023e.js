import{_ as e,d as a,J as s,r as t,a as r,o as l,c as n,e as o,w as u,a9 as d,aa as p,b as i,i as m,ab as c,a7 as f,a8 as _}from"./index-f96e54ea.js";import{u as v}from"./user-2c521059.js";import"./index-a0a756df.js";import"./index-2cc5c506.js";import"./use-route-46798ce0.js";const x={class:"login"},h=(e=>(f("data-v-67cf7fd8"),e=e(),_(),e))((()=>i("h2",null,"登录",-1))),b=m(" 登录 ");var w=e(a({__name:"index",setup(e){const a=v(),m=s({name:"admin",pwd:"123456"}),f=t(null),_=()=>{f.value.validate().then((async({valid:e,errors:s})=>{if(e){const e={...m};a.login(e).then((e=>{c.push({path:"/member"})}))}else console.log("error submit!!",s)}))};return(e,a)=>{const s=r("nut-form-item"),t=r("nut-button"),c=r("nut-form");return l(),n("div",x,[h,o(c,{ref_key:"ruleForm",ref:f,"model-value":m},{default:u((()=>[o(s,{required:"",prop:"name",rules:[{required:!0,message:"请输入用户名"}]},{default:u((()=>[d(i("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.name=e),class:"nut-input-text",placeholder:"请输入用户名",type:"text"},null,512),[[p,m.name]])])),_:1}),o(s,{required:"",prop:"pwd",rules:[{required:!0,message:"请填写联系电话"}]},{default:u((()=>[d(i("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>m.pwd=e),class:"nut-input-text",placeholder:"请输入密码",type:"password"},null,512),[[p,m.pwd]])])),_:1}),o(t,{block:"",type:"info",onClick:_},{default:u((()=>[b])),_:1})])),_:1},8,["model-value"])])}}}),[["__scopeId","data-v-67cf7fd8"]]);export{w as default};

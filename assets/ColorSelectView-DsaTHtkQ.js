import{d as E,b as S,H as x,r as N,n as k,w as s,u as e,I as y,l as d,f as a,J as D,e as c,q as p,K as F,j as R,k as b,L as w,t as I,F as V,M as u,N as v,O as M,P as O,Q as P,R as U,_ as L}from"./index-CdEMtITG.js";const j=E("selectStore",{state:()=>({formData:{selectedColor:"",largeBallCount:0,smallBallCount:0,selectedPosition:""}}),actions:{updateFormData(i){this.formData=i}}}),q=S({__name:"ColorSelectView",setup(i){const n=j(),{formData:t}=x(n),m=N(),C=[{color:"#770f0f",name:"暗红色"},{color:"#fff",name:"白色"},{color:"#000",name:"黑色"}],g=[{value:"position1",label:"仓位1"},{value:"position2",label:"仓位2"},{value:"position3",label:"仓位3"}],f=(r,o,l)=>{isNaN(o)||o<0?l("必须为非负数字"):r.max!==void 0&&o>r.max?l(`不能超过 ${r.max}`):l()},_=()=>{var r;(r=m.value)==null||r.validate(o=>{o?(n.updateFormData({...t.value}),console.log("表单提交成功，存储中的表单数据：",n.formData),U.success("表单提交成功")):console.log("表单验证失败")})};return(r,o)=>(d(),k(e(y),{model:e(t),ref_key:"formRef",ref:m,"label-width":"120px"},{default:s(()=>[a(e(u),{label:"颜色选择"},{default:s(()=>[a(e(D),{modelValue:e(t).selectedColor,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).selectedColor=l)},{default:s(()=>[(d(),c(V,null,p(C,(l,B)=>a(e(F),{key:B,label:l.color},{default:s(()=>[R("div",{class:"color-block",style:w({backgroundColor:l.color})},null,4),b(" "+I(l.name),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(e(u),{label:"大球数量",rules:[{validator:f,trigger:"blur"}]},{default:s(()=>[a(e(v),{modelValue:e(t).largeBallCount,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).largeBallCount=l),modelModifiers:{number:!0},placeholder:"请输入内容"},null,8,["modelValue"])]),_:1},8,["rules"]),a(e(u),{label:"小球数量",rules:[{validator:f,trigger:"blur"}]},{default:s(()=>[a(e(v),{modelValue:e(t).smallBallCount,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).smallBallCount=l),modelModifiers:{number:!0},placeholder:"请输入内容"},null,8,["modelValue"])]),_:1},8,["rules"]),a(e(u),{label:"仓位信息"},{default:s(()=>[a(e(M),{modelValue:e(t).selectedPosition,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).selectedPosition=l),placeholder:"请选择"},{default:s(()=>[(d(),c(V,null,p(g,l=>a(e(O),{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(e(u),null,{default:s(()=>[a(e(P),{type:"primary",onClick:_},{default:s(()=>o[4]||(o[4]=[b("提交")])),_:1})]),_:1})]),_:1},8,["model"]))}}),G=L(q,[["__scopeId","data-v-a3f4b771"]]);export{G as default};

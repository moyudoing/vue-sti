import{_,e as i,l as o,b as p,r as m,f as l,v as h,u as g,x as P,w as v,F as y,q as j,n as x,y as E,j as c,d as $,z as w,t as b}from"./index-BeiYzCTI.js";const O={};function k(t,e){return o(),i("h1",null,"11")}const B=_(O,[["render",k]]),I={};function z(t,e){return o(),i("h1",null,"FS")}const C=_(I,[["render",z]]),D="/vue-sti/assets/3cf1ec7ee9564a273f7fbcc6065c3f3-DAS_RAzS.jpg",F=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),M="/vue-sti/assets/4527abf6abcb7d67d82d2b7af1b7965-DK9Vzjco.jpg",V=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),A="/vue-sti/assets/e6ddb516fcdae4e06bc925cc4dc3ed4-oZ5-gdDO.jpg",N=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),H="/vue-sti/assets/f2e39bbc707d44705f397a1461f3e2b-DieeEEHX.jpg",T=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),X={class:"banner"},K=["src"],R=p({__name:"Banner",setup(t){const r=m(Object.values(Object.assign({"/src/assets/images/banner/3cf1ec7ee9564a273f7fbcc6065c3f3.jpg":F,"/src/assets/images/banner/4527abf6abcb7d67d82d2b7af1b7965.jpg":V,"/src/assets/images/banner/e6ddb516fcdae4e06bc925cc4dc3ed4.jpg":N,"/src/assets/images/banner/f2e39bbc707d44705f397a1461f3e2b.jpg":T})).map(u=>u.default));return(u,f)=>(o(),i("div",X,[l(g(P),{height:"var(--container-height-medium)"},{default:v(()=>[(o(!0),i(y,null,j(r.value,(n,a)=>(o(),x(g(E),{key:a},{default:v(()=>[c("img",{src:n,alt:"BannerImage",class:"banner-image"},null,8,K)]),_:2},1024))),128))]),_:1}),f[0]||(f[0]=h('<div class="banner-overlay" data-v-f4e2760b><h1 data-v-f4e2760b>科创部</h1><p class="subtitle" data-v-f4e2760b>源自天然 • 科技萃取 • 营养健康</p><div class="banner-buttons" data-v-f4e2760b><a class="btn btn-primary hover-lift" href="" data-v-f4e2760b>了解更多</a><a class="btn btn-outline hover-lift" href="" data-v-f4e2760b>联系我们</a></div></div>',1))]))}}),q=_(R,[["__scopeId","data-v-f4e2760b"]]),G={};function L(t,e){return o(),i("h1",null,"FS")}const Z=_(G,[["render",L]]),s="/vue-sti/assets/gg-BcRKdfPP.jpg",J=$("productStore",{state:()=>({products:[{id:1,name:"菊芋高熵营养粉",slug:"high-entropy",description:"采用高熵技术萃取，保留更多营养成分",price:"198元/盒",specifications:"一盒20gX10袋",images:s,gallery:[s,s,s],features:["高熵萃取工艺","营养成分保留率高","易于吸收"],originalPrice:"1111"},{id:2,name:"菊芋高钙营养粉",slug:"high-calcium",description:"添加天然钙源，补钙更健康",price:"198元/盒",specifications:"一盒20gX10袋",images:s,gallery:[s,s,s],features:["天然钙源添加","易于吸收","适合全家服用"],originalPrice:"1111"},{id:3,name:"菊芋营养粉",slug:"powder",description:"传统工艺制作，营养健康",price:"198元/盒",specifications:"一盒20gX10袋",images:s,gallery:[s,s,s],features:["传统工艺","无添加","营养健康"],originalPrice:"1111"}]}),getters:{getProductById:t=>e=>t.products.find(r=>r.id===e),getAllProducts:t=>t.products},actions:{updateProduct(t){const e=this.products.findIndex(r=>r.id===t.id);e!==-1&&(this.products[e]={...this.products[e],...t})}}}),Q={id:"features",class:"section"},U={class:"container"},W={class:"grid"},Y={class:"product-image"},ee=["src","alt","onError"],te={class:"product-content"},se={class:"product-title"},ae={class:"product-description"},ce={class:"product-price"},oe=["onClick"],re={key:1},ne=p({__name:"ProductFeature",setup(t){const e=J(),r=m(e.getAllProducts.map(n=>({...n,loadError:!1}))),u=n=>{n.loadError=!0},f=n=>{try{const a=e.getProductById(n);a?console.log("产品详情:",a):console.error("未找到该产品信息")}catch(a){console.error("获取产品详情时出错:",a)}};return w(()=>{r.value=e.getAllProducts.map(n=>({...n,loadError:!1}))}),(n,a)=>(o(),i("section",Q,[c("div",U,[a[1]||(a[1]=h('<div class="section-header" data-v-b925120c><h2 class="section-title" data-v-b925120c>产品特点</h2><p class="section-subtitle" data-v-b925120c>源自天然，科技萃取，营养健康</p><a class="section-link" href="" data-v-b925120c> 查看更多 <i class="fas fa-arrow-right" data-v-b925120c></i></a></div>',1)),c("div",W,[r.value.length>0?(o(!0),i(y,{key:0},j(r.value,d=>(o(),i("div",{key:d.id,class:"product-card"},[c("div",Y,[c("img",{src:d.images,alt:d.name,onError:S=>u(d)},null,40,ee),a[0]||(a[0]=c("div",{class:"product-overlay"},null,-1))]),c("div",te,[c("h3",se,b(d.name),1),c("p",ae,b(d.description),1),c("div",ce,b(d.price),1)]),c("button",{onClick:S=>f(d.id),class:"product-button"},"查看详情",8,oe)]))),128)):(o(),i("p",re,"暂无产品数据。"))])])]))}}),ie=_(ne,[["__scopeId","data-v-b925120c"]]),de={class:"home-page"},le=p({__name:"HomeView",setup(t){return(e,r)=>(o(),i("div",de,[l(q),l(ie),l(B),l(C),l(Z)]))}}),ue=_(le,[["__scopeId","data-v-ba50af1c"]]);export{ue as default};

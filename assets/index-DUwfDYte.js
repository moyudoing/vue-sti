import{d as y,r as x,m as X,a as V,b as w,o as I,c as z,e as f,f as l,u as t,E as B,w as v,g as h,h as L,i as S,j as b,k as $,l as o,_ as m,n as k,p as M,q as E,s as F,t as N,F as C,v as T}from"./index-CHF8kx7_.js";const R=y("nav",()=>{const n=x(!1),e=x(!1),s=x(""),d=X.getRoutes().filter(c=>c.meta&&c.meta.title),i=()=>{n.value=window.innerWidth<768,n.value||(e.value=!1)},a=c=>{X.push(c),n.value&&_()},_=()=>{e.value=!e.value};return{isMobile:n,isMobileMenuOpen:e,activeRoute:s,routes:d,checkScreenSize:i,navigateTo:a,toggleMobileMenu:_}}),H=y("route",()=>{function n(){const e=[];function s(d){var i;for(const a of d)(i=a.meta)!=null&&i.isShow&&e.push(a),a.children&&s(a.children)}return s(V),e}return{getHomeRoute:n}}),O={class:"demo-type"},P=w({__name:"index",setup(n){const e=i=>{console.log(`你点击了: ${i}`),i==="退出登录"&&console.log("执行退出登录操作")},s=x(null),d=()=>{s.value};return I(()=>{window.addEventListener("scroll",d)}),z(()=>{window.removeEventListener("scroll",d)}),(i,a)=>{const _=h("el-avatar");return o(),f("div",O,[l(t(B),{ref_key:"dropdownRef",ref:s,trigger:"hover"},{dropdown:v(()=>[l(t(L),{class:"custom-dropdown-menu"},{default:v(()=>[l(t(S),{onClick:a[0]||(a[0]=c=>e("个人中心"))},{default:v(()=>a[3]||(a[3]=[b("i",{class:"el-icon-user"},null,-1),$(" 个人中心 ")])),_:1}),l(t(S),{onClick:a[1]||(a[1]=c=>e("设置"))},{default:v(()=>a[4]||(a[4]=[b("i",{class:"el-icon-setting"},null,-1),$(" 设置 ")])),_:1}),l(t(S),{onClick:a[2]||(a[2]=c=>e("退出登录"))},{default:v(()=>a[5]||(a[5]=[b("i",{class:"el-icon-switch-button"},null,-1),$(" 退出登录 ")])),_:1})]),_:1})]),default:v(()=>[l(_,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",class:"avatar-trigger"})]),_:1},512)])}}}),j=m(P,[["__scopeId","data-v-1f75c8f2"]]),q={key:0},A=w({__name:"Computer",setup(n){const e=H(),s=R(),d=e.getHomeRoute(),{isMobile:i,activeRoute:a,navigateTo:_}=s;return(c,D)=>{const p=h("el-menu");return t(i)?M("",!0):(o(),k(p,{key:0,class:"desktop-nav",mode:"horizontal","default-active":t(a),"background-color":"#333","text-color":"#fff","active-text-color":"#ffd04b"},{default:v(()=>[(o(!0),f(C,null,E(t(d),r=>(o(),k(t(F),{key:r==null?void 0:r.name,onClick:g=>t(_)(r==null?void 0:r.path)},{default:v(()=>{var g,u;return[(g=r.meta)!=null&&g.isShow?(o(),f("div",q,N((u=r.meta)==null?void 0:u.title),1)):M("",!0)]}),_:2},1032,["onClick"]))),128)),l(j,{class:"avatar"})]),_:1},8,["default-active"]))}}}),U=m(A,[["__scopeId","data-v-37e8d789"]]),W=w({__name:"MobileTerminal",setup(n){const e=R(),{isMobile:s,isMobileMenuOpen:d,activeRoute:i,routes:a,navigateTo:_,toggleMobileMenu:c}=e;return(D,p)=>{const r=h("el-menu-item"),g=h("el-menu");return o(),f("div",null,[t(s)?(o(),f("div",{key:0,class:"mobile-menu-toggle",onClick:p[0]||(p[0]=(...u)=>t(c)&&t(c)(...u))},p[1]||(p[1]=[b("i",{class:"el-icon-menu"},null,-1)]))):M("",!0),t(s)&&t(d)?(o(),k(g,{key:1,class:"mobile-nav-menu",mode:"vertical","default-active":t(i),"background-color":"#333","text-color":"#fff","active-text-color":"#ffd04b"},{default:v(()=>[(o(!0),f(C,null,E(t(a),u=>(o(),k(r,{key:u.name,index:u.name,onClick:re=>t(_)(u.path)},{default:v(()=>[$(N(u.meta.title),1)]),_:2},1032,["index","onClick"]))),128))]),_:1},8,["default-active"])):M("",!0)])}}}),Y=m(W,[["__scopeId","data-v-a91678f5"]]),G={class:"nav-container"},J=w({__name:"index",setup(n){const e=R(),{checkScreenSize:s}=e;return I(()=>{s(),window.addEventListener("resize",s)}),(d,i)=>(o(),f("div",G,[l(U),l(Y)]))}}),K=m(J,[["__scopeId","data-v-01344b45"]]),Q={},Z={class:"side-nav"};function ee(n,e){return o(),f("div",Z,e[0]||(e[0]=[T('<a href="#home" data-v-2293e3ba><div class="side-nav-item" data-target="home" data-v-2293e3ba><i class="fas fa-home" data-v-2293e3ba></i><span class="side-nav-tooltip" data-v-2293e3ba>回到顶部</span></div></a><a href="#features" data-v-2293e3ba><div class="side-nav-item" data-target="features" data-v-2293e3ba><i class="fas fa-star" data-v-2293e3ba></i><span class="side-nav-tooltip" data-v-2293e3ba>产品特点</span></div></a><a href="#products" data-v-2293e3ba><div class="side-nav-item" data-target="products" data-v-2293e3ba><i class="fas fa-box" data-v-2293e3ba></i><span class="side-nav-tooltip" data-v-2293e3ba>产品展示</span></div></a><a href="#development" data-v-2293e3ba><div class="side-nav-item" data-target="development" data-v-2293e3ba><i class="fas fa-history" data-v-2293e3ba></i><span class="side-nav-tooltip" data-v-2293e3ba>研发历程</span></div></a><a href="#team" data-v-2293e3ba><div class="side-nav-item" data-target="team" data-v-2293e3ba><i class="fas fa-users" data-v-2293e3ba></i><span class="side-nav-tooltip" data-v-2293e3ba>研发团队</span></div></a>',5)]))}const ae=m(Q,[["render",ee],["__scopeId","data-v-2293e3ba"]]),te="/vue-sti/assets/favicon-D7XOY5rP.ico",se={},oe={id:"footer",class:"footer"};function ne(n,e){return o(),f("footer",oe,e[0]||(e[0]=[T('<div class="container" data-v-9fd748f4><div class="footer-content" data-v-9fd748f4><div class="footer-info" data-v-9fd748f4><img alt="菊芋营养粉" class="footer-logo" src="'+te+'" data-v-9fd748f4><p data-v-9fd748f4>专注于健康食品研发</p></div><div class="footer-links" data-v-9fd748f4><h4 data-v-9fd748f4>快速链接</h4><ul data-v-9fd748f4><li data-v-9fd748f4><a href="#home" data-v-9fd748f4>首页</a></li><li data-v-9fd748f4><a href="#products" data-v-9fd748f4>产品</a></li></ul></div><div class="footer-contact" data-v-9fd748f4><h4 data-v-9fd748f4>联系我们</h4><p data-v-9fd748f4>电话：XXX-XXXX-XXXX</p><p data-v-9fd748f4>邮箱：contact@example.com</p></div></div><div class="footer-bottom" data-v-9fd748f4><p data-v-9fd748f4>© 2024 菊芋营养粉. 保留所有权利.</p></div></div>',1)]))}const de=m(se,[["render",ne],["__scopeId","data-v-9fd748f4"]]),ie={class:"main-content"},le={class:"header"},ce=w({__name:"index",setup(n){return(e,s)=>{const d=h("router-view");return o(),f(C,null,[b("div",ie,[b("header",le,[l(K,{class:"nav-menu"})]),(o(),k(d,{key:e.$route.fullPath}))]),l(de,{class:"footer"}),l(ae,{class:"side-nav"})],64)}}}),fe=m(ce,[["__scopeId","data-v-0f3bc6d5"]]);export{fe as default};

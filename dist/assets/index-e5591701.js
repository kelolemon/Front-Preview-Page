import{ad as j,r as n,y as a,z as s,aA as k,ay as m,B as q,aC as E}from"./index-83df2432.js";import{MenuColumns as K,MenuBtnColumns as P}from"./data-c1182aad.js";import $ from"./BtnAuthModal-943266d3.js";import v from"./MenuModal-b7c0b748.js";import{T as h}from"./index-825b3be3.js";import{P as z}from"./PlusOutlined-ec572272.js";import"./index-ad423986.js";import"./index-7f063394.js";import"./index-ee407347.js";import"./CheckOutlined-1272589c.js";import"./PlusOutlined-7b3dd7ad.js";function F(o){return j.request({url:"/menuss/btnAuthList",method:"post",data:o})}function tt(){const[o,p]=n.useState([]),[f,M]=n.useState([]),[A,u]=n.useState(!1),[g,l]=n.useState(!1),[x,B]=n.useState("首页"),[b,S]=n.useState(""),[w,O]=n.useState(""),[T,i]=n.useState(!1),[y,r]=n.useState(!1);n.useEffect(()=>{d("home"),N()},[]);const C=(t,e)=>{i(t),S(e)},c=(t,e)=>{r(t),O(e)},I=(t,e)=>{i(t),console.warn("表单内容",e)},L=(t,e)=>{r(t),console.warn("表单内容",e)};async function d(t=""){l(!0);const e=await F({path:t});p(e),l(!1)}async function N(){u(!0);const e=E.map(D=>D.children[0]);M(e),u(!1)}const R=t=>({onClick:()=>{d(t.path),B(t.meta.title||"")}});return a("div",{className:"card",children:[s(v,{isModalOpen:T,setIsOpen:I,title:b}),s($,{isModalOpen:y,setIsOpen:L,title:w}),a(k,{gutter:24,children:[s(m,{span:14,children:s(h,{rowKey:t=>t.meta.title,columns:K(C),dataSource:f,loading:A,className:"menu-tables",onRow:R,headerContent:{content:()=>[s("h1",{className:"text-[18px] font-bold",children:"菜单配置"},"menu")]}})}),s(m,{span:10,children:s(h,{rowKey:"index",columns:P(c),dataSource:o,loading:g,className:"menu-tables",headerContent:{content:()=>[a("h1",{className:"text-[18px] font-bold",children:[x,"按钮权限配置"]},"menu"),a(q,{type:"primary",onClick:()=>c(!0,"新增权限配置"),icon:s(z,{}),children:[" ","新增配置"]},"btn")]}})})]})]})}export{tt as default};
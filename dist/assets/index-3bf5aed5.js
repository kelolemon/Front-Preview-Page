import{a9 as v,r as c,aa as q,ab as A,y as E,z as l,ac as $,B as I,a8 as k}from"./index-83df2432.js";import{h as N,F as J,q as G,a as V,b as W}from"./index-2fed85b9.js";import{normalConfig as z}from"./data-f9e37bc1.js";import{M as P}from"./index-7f063394.js";import{T as _}from"./index-825b3be3.js";import"./index-ee407347.js";import"./CheckOutlined-1272589c.js";import"./index-ad423986.js";const{uesSuccessMsg:K,uesErrorMsg:w,uesWarningMsg:L}=k();function U(m,t){if(!m||!t)return console.warn("日期或时间未填写"),null;const f=m.getFullYear(),p=m.getMonth(),S=m.getDate(),d=t.getHours(),u=t.getMinutes();return N({year:f,month:p,day:S,hours:d,minutes:u}).format("YYYY-MM-DD HH:mm:ss")}function re(){const m=v(e=>e.user.name),[t,f]=c.useState([]);let[p,S]=c.useState({sceneShowName:"",fieldsShowName:{}});const[d,u]=c.useState(!1),[T,g]=c.useState(),[C,M]=c.useState(""),x=e=>{u(!d),g([e])},b=(e,o)=>{u(e),console.warn(`点击了${o}按钮`)};let y=[{title:"场景名称",dataIndex:"sceneShowName"},{title:"步骤名称（可缺省）",dataIndex:"stepName"},{title:"快照信息",dataIndex:"info"},{title:"快照创建时间",dataIndex:"snapshotCreateTime"},{title:"查看快照",render:(e,o)=>l("div",{children:l(I,{onClick:()=>x(o),children:"查看"})})},{title:"查看上下文快照",render:(e,o)=>l(I,{onClick:()=>j(o),children:"查看"})}],[Y,Q]=c.useState(y);const O=[];let[B,F]=c.useState(O);const H=async e=>{const{beginDate:o,beginTime:h,endDate:s,endTime:r,sceneUUID:a}=e;let D=U(new Date(o),new Date(h)),i=U(new Date(s),new Date(r));e.beginBar=D,e.endBar=i,delete e.beginDate,delete e.beginTime,delete e.endDate,delete e.endTime;try{const n=await V({sceneUUID:a});n.length===0&&w("没有查询到展示名信息"),K("查询成功"),S(n)}catch{w("查询展示名出错")}try{const n=await W(e);if(n.length===0){L("没有查询到符合要求的快照");return}f(n)}catch(n){console.error("查询快照出错:",n)}};c.useEffect(()=>{if(t.length!=0){const h=[];for(let s=0;s<t.length;s++){let r={},a={};try{r=JSON.parse(t[s].snapshotFieldValue),Object.entries(r).forEach(([i,n])=>{i in p.fieldsShowName&&(a[p.fieldsShowName[i]]=n)})}catch(i){console.error("解析 JSON 失败:",i)}const D=Object.entries(a).map(([i,n])=>`${i}: ${n}`).join(", ");h.push({sceneShowName:p.sceneShowName,snapshotCreateTime:N(t[s].snapshotCreateTime).format("YYYY-MM-DD HH:mm:ss"),stepName:t[s].stepName,info:D,snapshotUUID:t[s].snapshotUUID,eventID:t[s].eventID,sceneUUID:t[s].snapshotSceneUUID})}F(h)}const o=q().replace(/-/g,"");M(o),A({sceneName:"查询快照",stepName:"查询",snapshotFieldValue:'{ "userID": "'+m+'"}',userID:"123",eventID:C})},[t]);const j=async e=>{const o=e.sceneUUID,h=e.eventID;console.warn("1");const s=await G({sceneUUID:o,eventID:h});console.log(s),console.log("2");let r=[];for(const a of s){const D={sceneShowName:e.sceneShowName,snapshotCreateTime:a.snapshotCreateTime,stepName:a.stepName,info:a.info,snapshotUUID:a.snapshotUUID,eventID:a.eventID,sceneUUID:a.sceneUUID};r.push(D)}console.log("len:"+r.length),u(!d),g(r)};return E("div",{className:"card",children:[l(J,{formConfig:{submit:H,isShowAdvanced:!0,formsColumn:z}}),l(_,{columns:Y,dataSource:B}),l(P,{isModalOpen:d,setIsOpen:b,title:"图片查看",children:l($,{snapshots:T})})]})}export{re as default};

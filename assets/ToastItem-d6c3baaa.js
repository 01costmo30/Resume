import{y as i,c as a,d as n,e,t as o,g as r,p as d,X as u}from"./index-463901a1.js";const m={key:0,class:"toast-header"},y={class:"me-auto"},h=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast"},null,-1),_={class:"toast-body"},p={__name:"ToastItem",props:{title:{type:String,required:!0},content:{type:String,required:!0},inline:{type:Boolean}},setup(t,{expose:l}){const s=i(null);function c(){console.log(s.value),u.getOrCreateInstance(s.value).show()}return l({show:c}),(g,b)=>(a(),n("div",{class:"toast",role:"alert",ref_key:"toast",ref:s},[t.inline?r("",!0):(a(),n("div",m,[e("strong",y,o(t.title),1),h])),e("div",_,[e("b",null,o(t.inline?t.title:""),1),d(" "+o(t.content),1)])],512))}};export{p as _};

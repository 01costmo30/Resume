import{_ as f}from"./BreadCrumbs-57f1bd83.js";import{_ as b}from"./ElementPaging-d75e11d1.js";import{_ as k,o as h,a as w,b as v,c as n,d as a,e as s,f as i,w as x,F as y,r as I,t as d,u as L,g as C}from"./index-27ed39e2.js";import{I as V}from"./IconLink-f69ee794.js";const j={class:"container px-0 pt-5"},W={class:"container text-center py-5 pb-4 pb-sm-5"},z={class:"row"},B=["data-src"],E={class:"w-100 h-100 position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center text-light bg-custom-color bg-opacity-75"},N={class:"mb-0"},S=["href"],F={__name:"WorksView",props:{Lang:{type:String,required:!0}},setup(m){function g(t){$(t).attr("src",$(t).data("src")),$(t).attr("data-src",null)}function u(t){$(t.target).addClass("fade-in")}const c=new IntersectionObserver(t=>{t.forEach(e=>{$(e.target).is("[data-src]")&&e.isIntersecting&&g(e.target)})});function r(t){$(t).each(e=>{c.observe($(t)[e])})}h(()=>{r(".container .row .col-12 img[data-src]")}),w(()=>{console.log("updated")}),v(()=>{c.disconnect()});const p=[{id:1,title:"健成會計師事務所",desc:"形象網站",img:"./img/jiancheng.jpg",link:"https://www.pokers.com.tw/deloittecpa"},{id:2,title:"金門公共自行車",desc:"動態網站",img:"./img/kbike.png",link:"https://www.k-bike.com.tw/Home"},{id:3,title:"新民里大小事 蔡煒鈞",desc:"形象網站",img:"./img/weijun.png",link:"https://01costmo30.github.io/WeiJun"},{id:4,title:"個人履歷",desc:"形象網站",img:"./img/resume.png"}];return(t,e)=>(n(),a("div",j,[s("header",W,[i(f,{Lang:m.Lang},null,8,["Lang"])]),i(b,{class:"container",items:p,pageSize:6,pageCount:5,onCallback:e[1]||(e[1]=l=>r(".container .row .col-12 img[data-src]")),btnClass:"btn-outline-secondary bg-active-custom-color border-custom-color txt-custom-color"},{default:x(l=>[s("div",z,[(n(!0),a(y,null,I(l.pageItems,o=>(n(),a("div",{class:"col-12 col-md-6 col-lg-4 image position-relative overflow-hidden",key:o.id},[s("img",{class:"w-100 position-absolute top-50 start-50 translate-middle","data-src":o.img,onLoad:e[0]||(e[0]=_=>u(_))},null,40,B),s("div",E,[s("h3",N,[s("b",null,d(o.title),1)]),s("p",null,[s("b",null,d(o.desc),1)]),o.link!=null?(n(),a("a",{key:0,target:"_blank",class:"link-light",href:o.link},[i(L(V))],8,S)):C("",!0)])]))),128))])]),_:1})]))}},J=k(F,[["__scopeId","data-v-86cf98f7"]]);export{J as default};

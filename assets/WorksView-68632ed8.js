import{_ as b}from"./BreadCrumbs-d6086417.js";import{_ as k}from"./ElementPaging-b8abd93e.js";import{_ as h,o as w,n as d,a as v,b as x,c as n,d as a,e as s,f as i,w as y,F as I,r as L,t as m,u as C,g as V}from"./index-28584aef.js";import{I as j}from"./IconLink-0b811e3a.js";const W={class:"container px-0 pt-5"},z={class:"container text-center py-5 pb-4 pb-sm-5"},B={class:"row"},E=["data-src"],N={class:"w-100 h-100 position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center text-light bg-custom-color bg-opacity-75"},S={class:"mb-0"},F=["href"],U={__name:"WorksView",props:{Lang:{type:String,required:!0}},setup(g){function u(t){$(t).attr("src",$(t).data("src")),$(t).attr("data-src",null)}function p(t){$(t.target).addClass("fade-in")}const c=new IntersectionObserver(t=>{t.forEach(e=>{$(e.target).is("[data-src]")&&e.isIntersecting&&u(e.target)})});function r(t){d(()=>{$(t).each(e=>{c.observe($(t)[e])})})}w(()=>{d(()=>{r(".container .row .col-12 img[data-src]")})}),v(()=>{console.log("updated")}),x(()=>{c.disconnect()});const _=[{id:1,title:"健成會計師事務所",desc:"形象網站",img:"./img/jiancheng.jpg",link:"https://www.pokers.com.tw/deloittecpa"},{id:2,title:"金門公共自行車",desc:"動態網站",img:"./img/kbike.png",link:"https://www.k-bike.com.tw/Home"},{id:3,title:"新民里大小事 蔡煒鈞",desc:"形象網站",img:"./img/weijun.png",link:"https://01costmo30.github.io/WeiJun"},{id:4,title:"個人履歷",desc:"形象網站",img:"./img/resume.png"}];return(t,e)=>(n(),a("div",W,[s("header",z,[i(b,{Lang:g.Lang},null,8,["Lang"])]),i(k,{class:"container",items:_,pageSize:6,pageCount:5,onCallback:e[1]||(e[1]=l=>r(".container .row .col-12 img[data-src]")),btnClass:"btn-outline-secondary bg-active-custom-color border-custom-color txt-custom-color"},{default:y(l=>[s("div",B,[(n(!0),a(I,null,L(l.pageItems,o=>(n(),a("div",{class:"col-12 col-md-6 col-lg-4 image position-relative overflow-hidden",key:o.id},[s("img",{class:"w-100 position-absolute top-50 start-50 translate-middle","data-src":o.img,onLoad:e[0]||(e[0]=f=>p(f))},null,40,E),s("div",N,[s("h3",S,[s("b",null,m(o.title),1)]),s("p",null,[s("b",null,m(o.desc),1)]),o.link!=null?(n(),a("a",{key:0,target:"_blank",class:"link-light",href:o.link},[i(C(j))],8,F)):V("",!0)])]))),128))])]),_:1})]))}},M=h(U,[["__scopeId","data-v-f9441028"]]);export{M as default};
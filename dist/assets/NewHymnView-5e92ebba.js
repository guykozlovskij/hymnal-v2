import{n as c}from"./new-hymns-bbc8ee09.js";import{o as n,c as s,a as t,t as a,b as l,F as u,r as i,d as m}from"./index-e0a94781.js";const _={class:"hymn-view"},w={class:"hymn-intro"},H={key:0},p={key:1},D={key:0,class:"hymn-mp3",controls:"",autostart:"false",preload:"auto",name:"media"},k=["src"],v={class:"verses"},g={key:0,class:"verse-one"},b={class:"hymn-verse"},f=t("br",null,null,-1),N={key:1},V=t("br",null,null,-1),B={key:2,class:"hymn-chorus"},$=t("br",null,null,-1),C={class:"remaining-verses",start:"2"},F=t("br",null,null,-1),O={data(){return{newHymnData:c[this.$route.params.id-1]}}},E=Object.assign(O,{__name:"NewHymnView",setup(S){return(e,y)=>(n(),s("section",_,[t("div",w,[t("h4",null,a(e.newHymnData.number)+". "+a(e.newHymnData.title),1),e.newHymnData["sub-title"]?(n(),s("h4",H,a(e.newHymnData["sub-title"]),1)):l("",!0),e.newHymnData.languages?(n(),s("h4",p,"(R"+a(e.newHymnData.languages.russian)+", A"+a(e.newHymnData.languages.english)+") ",1)):l("",!0)]),e.newHymnData["melody-url"]?(n(),s("audio",D,[t("source",{src:e.newHymnData["melody-url"],type:"audio/mpeg"},null,8,k)])):l("",!0),t("div",v,[e.newHymnData.verses.length>1?(n(),s("ol",g,[t("li",b,[(n(!0),s(u,null,i(e.newHymnData.verses[0],(r,o)=>(n(),s("span",{key:o},[m(a(r)+" ",1),f]))),128))])])):l("",!0),e.newHymnData.verses.length===1?(n(),s("div",N,[(n(!0),s(u,null,i(e.newHymnData.verses[0],(r,o)=>(n(),s("span",{key:o},[m(a(r)+" ",1),V]))),128))])):l("",!0),e.newHymnData.chorus?(n(),s("div",B,[(n(!0),s(u,null,i(e.newHymnData.chorus,(r,o)=>(n(),s("span",{key:o},[m(a(r)+" ",1),$]))),128))])):l("",!0),t("ol",C,[(n(!0),s(u,null,i(e.newHymnData.verses.slice(1),(r,o)=>(n(),s("li",{class:"hymn-verse",key:o},[(n(!0),s(u,null,i(r,(d,h)=>(n(),s("span",{key:h},[m(a(d)+" ",1),F]))),128))]))),128))])]),t("button",{class:"hymn-back-button",onClick:y[0]||(y[0]=r=>e.$router.push("/")),role:"link"},"« Grįžti")]))}});export{E as default};
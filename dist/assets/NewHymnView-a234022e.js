import{n as c}from"./new-hymns-6771a1ff.js";import{o as s,c as n,a as t,t as a,b as r,d as u,F as h,r as i}from"./index-430376a6.js";const _={class:"top"},p={class:"hymn-view"},g={class:"hymn-intro"},D={key:0},k={key:1},v={key:0},b={key:1},f={key:0,controls:"",loop:"",class:"hymn-mp3",autostart:"false",preload:"auto",name:"media"},N=["src"],w={class:"verses"},V={key:0,class:"verse-one"},B={class:"hymn-verse"},$=t("br",null,null,-1),C={key:1},F=t("br",null,null,-1),H=t("br",null,null,-1),O={key:2,class:"hymn-chorus"},S=t("br",null,null,-1),j={class:"remaining-verses",start:"2"},A=t("br",null,null,-1),E={data(){return{hymnData:c[this.$route.params.id-1]}}},R=Object.assign(E,{__name:"NewHymnView",setup(G){return(e,m)=>(s(),n(h,null,[t("div",_,a(e.hymnData.number),1),t("section",p,[t("div",g,[t("h4",null,a(e.hymnData.title),1),e.hymnData["sub-title"]?(s(),n("h4",D,a(e.hymnData["sub-title"]),1)):r("",!0),e.hymnData.languages?(s(),n("h4",k,[u(" ( "),e.hymnData.languages.russian?(s(),n("span",v,"R"+a(e.hymnData.languages.russian)+", ",1)):r("",!0),e.hymnData.languages.english?(s(),n("span",b,"A"+a(e.hymnData.languages.english),1)):r("",!0),u(" ) ")])):r("",!0)]),e.hymnData["melody-url"]?(s(),n("audio",f,[t("source",{src:e.hymnData["melody-url"],type:"audio/mpeg"},null,8,N)])):r("",!0),t("div",w,[e.hymnData.verses.length>1?(s(),n("ol",V,[t("li",B,[(s(!0),n(h,null,i(e.hymnData.verses[0],(o,l)=>(s(),n("span",{key:l},[u(a(o)+" ",1),$]))),128))])])):r("",!0),e.hymnData.verses.length===1?(s(),n("div",C,[(s(!0),n(h,null,i(e.hymnData.verses[0],(o,l)=>(s(),n("span",{key:l},[u(a(o)+" ",1),F]))),128)),H])):r("",!0),e.hymnData.chorus?(s(),n("div",O,[(s(!0),n(h,null,i(e.hymnData.chorus,(o,l)=>(s(),n("span",{key:l},[u(a(o)+" ",1),S]))),128))])):r("",!0),t("ol",j,[(s(!0),n(h,null,i(e.hymnData.verses.slice(1),(o,l)=>(s(),n("li",{class:"hymn-verse",key:l},[(s(!0),n(h,null,i(o,(y,d)=>(s(),n("span",{key:d},[u(a(y)+" ",1),A]))),128))]))),128))])]),t("button",{class:"hymn-back-button",onClick:m[0]||(m[0]=o=>e.$router.go(-1)),role:"link"},"« Grįžti")])],64))}});export{R as default};

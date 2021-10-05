(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(17),n=a.n(s),r=a(7),i=a(10),l=(a(24),a(2)),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,photo:e.image,species:e.species,id:e.id,origin:e.location.name,episodes:e.episode.length,status:e.status}}))}))},d=(a(25),a.p+"static/media/logo.de13d484.png"),o=a(0),u=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{src:d,alt:"Rick and Morty",className:"header__img"})})},h=(a(27),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.b,{to:"/card/".concat(e.eachData.id),className:"character",children:[Object(o.jsx)("img",{className:"list__character__img",src:e.eachData.photo,alt:e.eachData.name}),Object(o.jsx)("h4",{className:"list__character__name ",children:e.eachData.name}),Object(o.jsx)("p",{className:"list__character__rest ",children:e.eachData.species})]})})}),b=a.p+"static/media/triste.39ad1b25.jpg",O=(a(15),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"sad",children:[Object(o.jsx)("p",{className:"sad__text",children:"\xa1\xbf\xa1\xbfNo ves que el personaje que est\xe1s buscando no existe?!?!"}),Object(o.jsx)("img",{src:b,alt:"Triste"}),Object(o.jsx)("button",{className:"sad__button",onClick:function(e){e.preventDefault(),window.location.reload()},children:"Volver"})]})})}),m=(a(16),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("label",{children:Object(o.jsx)("input",{type:"text",className:"filter__input",placeholder:"Busca aqu\xed tu personaje",value:e.userSearch,onChange:function(t){e.handleSearch(t.currentTarget.value)}})})})}),x=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("label",{htmlFor:"status",className:"filter__status",children:["Estado:"," ",Object(o.jsxs)("select",{className:"filter__status__select",name:"status",id:"status",value:e.userSearchStatus,onChange:function(t){e.handleSearchStatus(t.currentTarget.value)},children:[Object(o.jsx)("option",{value:"all",children:"Todos"}),Object(o.jsx)("option",{value:"Alive",children:"Vivos"}),Object(o.jsx)("option",{value:"Dead",children:"Muertos"}),Object(o.jsx)("option",{value:"unknown",children:"No se sabe"})]})]})})},f=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{handleSearch:e.handleSearch,userSearch:e.userSearch}),Object(o.jsx)(x,{handleSearchStatus:e.handleSearchStatus,userSearchStatus:e.userSearchStatus})]})},_=function(e){var t=function(){return e.data.map((function(e){return Object(o.jsx)("li",{className:"list__character",children:Object(o.jsx)(h,{eachData:e})},e.id)}))};return 0===e.data.length?Object(o.jsx)(O,{}):(e.data.length>0&&e.data.map((function(e){return t()})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{children:Object(o.jsx)("form",{className:"filter",onSubmit:function(e){e.preventDefault()},children:Object(o.jsx)(f,{handleSearch:e.handleSearch,userSearch:e.userSearch,handleSearchStatus:e.handleSearchStatus,userSearchStatus:e.userSearchStatus})})}),Object(o.jsx)("section",{children:Object(o.jsx)("ul",{className:"list",children:t()})})]}))},p=(a(33),function(){return Object(o.jsxs)("section",{className:"sad",children:[Object(o.jsx)("p",{className:"sad__text",children:"\xa1\xbf\xa1\xbfNo ves que lo que buscas no existe?!?!"}),Object(o.jsx)("img",{src:b,alt:"Triste"}),Object(o.jsx)(r.b,{to:"/",className:"sad__button",children:"Volver"})]})}),S=function(e){return void 0===e.data?Object(o.jsx)(p,{}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"div",children:Object(o.jsxs)("section",{className:"card",children:[Object(o.jsx)("img",{className:"list__character__img",src:e.data.photo,alt:e.data.name}),Object(o.jsxs)("article",{className:"card__article",children:[Object(o.jsx)("h3",{className:"card__title",children:e.data.name}),Object(o.jsxs)("ul",{className:"card__detail",children:[Object(o.jsxs)("li",{children:["Origen: ",e.data.origin]}),Object(o.jsx)("li",{children:e.data.species}),Object(o.jsxs)("li",{children:["Episodios: ",e.data.episodes]}),Object(o.jsx)("li",{className:"CardClose",children:Object(o.jsx)(r.b,{to:"/",className:"CardClose__link",children:"Volver"})})]})]}),Object(o.jsxs)("article",{className:"card__icons",children:[Object(o.jsx)("aside",{className:"card__icon",children:"Human"===e.data.species?Object(o.jsx)("i",{className:"fas fa-baby"}):"Alien"===e.data.species?Object(o.jsx)("i",{className:"fab fa-reddit-alien"}):void 0}),Object(o.jsx)("aside",{className:"card__icon",children:function(){if("Dead"===e.data.status)return Object(o.jsx)("i",{className:"fas fa-skull-crossbones"})}()})]})]})})})};var N=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),d=r[0],h=r[1],b=Object(c.useState)("all"),O=Object(i.a)(b,2),m=O[0],x=O[1];Object(c.useEffect)((function(){j().then((function(e){s(e)}))}),[]);var f=Object(l.f)("/card/:id"),N=null!==f?parseInt(f.params.id):"",g=a.find((function(e){return e.id===N})),v=a.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"all"===m||m===e.status})).sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/card/:id",children:Object(o.jsx)(S,{data:g})}),Object(o.jsx)(l.a,{path:"/",exact:!0,children:Object(o.jsx)(_,{handleSearch:function(e){h(e)},data:v,userSearch:d,handleSearchStatus:function(e){x(e)},userSearchStatus:m})}),Object(o.jsx)(l.a,{children:Object(o.jsx)(p,{})})]})})]})};n.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0203cb1d.chunk.js.map
(function(e){function n(n){for(var o,i,r=n[0],s=n[1],l=n[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(u.length)u.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,n=0;n<c.length;n++){for(var a=c[n],o=!0,i=1;i<a.length;i++){var r=a[i];0!==t[r]&&(o=!1)}o&&(c.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},c=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"0640faf2","chunk-0206bfa0":"8d9d53b2","chunk-0c047e41":"ab8e72e2","chunk-13a6037e":"a622d6ae","chunk-18f95272":"6a13a8ec","chunk-25b302c8":"e4287903","chunk-26fc7596":"bfe6899b","chunk-2c06842c":"a0b6001e","chunk-2d0e96ec":"d02cffc5","chunk-2d208d90":"f2a0a93c","chunk-2d21d0e2":"e41b1abc","chunk-2d22c123":"ac7b17d6","chunk-2d2747e2":"eefe64c1","chunk-2e80bb9a":"a2dcf82d","chunk-319206de":"f1ed7135","chunk-32334cb6":"45d89777","chunk-3c57cd7b":"5083d085","chunk-3d6834f6":"a90c7495","chunk-4cdd78c0":"b3bfc21c","chunk-4f2d402a":"eb2ce0bb","chunk-4fde0a08":"262251f2","chunk-515a8379":"b6b7eeb4","chunk-53ccb27e":"1cf8b0fc","chunk-55d286b8":"3f3f31d9","chunk-59974754":"9bde8be5","chunk-6e1e538a":"e625efe9","chunk-766a929b":"39b6da9a","chunk-c796899c":"40b26dbb","chunk-e8a7823a":"bad78b41","chunk-f2df7d2c":"32bdb2c8","chunk-fde47172":"92e76dfc",comple:"4a3d307c",creditos:"da5f2fce",glosario:"dbeadd3c",intro:"f1f6940d",referencias:"0bc44388",sintesis:"61da82b4",tema1:"c0c90af6",tema2:"81023733",tema3:"178f9476",tema4:"78c2def6"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"d94a1b8e","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"9ec63f94","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"f69be2ca","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"16c243a4",creditos:"bcf9bf24",glosario:"60bcf264",intro:"31d6cfe0",referencias:"d8bf2792",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return n()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===o||d===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete i[e],f.parentNode.removeChild(f),a(c)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var u=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var f=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"0c9e":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-8.7d3963d1.png"},"2cad":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAABJpJREFUaEPd2m9oG3UYB/DnuUuTTuxG56SNCgMpq7ZNLYqIE3Wdwpiyrs2Ygi86mmQMfDPwhYJvBN8IvhEGIrZJi6gIkybdEF1lzM4OxT/dMBe7vShMRRAcOHXDDpe7x++la7c1Zvm1uX/pQUib/O54Pvc89/v97ndhqsNt7+F71pmXm6MmSatmUitpHGXBO3NU8BkRR8FqZZFRDoxPiHcNb7lDC0eiWhFBahqCxjsTgmYELaWg8Yoy8XqVuIWtg64Ddx5qi0SaQgg63GqxHTjOtrUQOAsCZwRun33iFnzWoBK4ahuLrOcdBcbTsZeFuYdEoswIWlAqTBtUA3K8nciTjgL70p1tIdamkQ27lHzfxOR2R4G2KEjI+cg/GxwHBgYpdDWbyoddAQYCKXQewHtdA/qNxHj4dS5pbHUV6C9SctmkEXcd6BtS6B2U6IueAP1AishruZTxumdAr5GYNR2YSBjDngI9Ru7OJvNHPQdeR+pf4e873ZruWFJ8ZCI1+60vQBu1Zyx2n1j8pVvIf0PFzZ/sm/3FN6DbyJ+LDeGZAzNXfQX2ZbrbdZGTzLhVcnBDD3oRPehG+5C+ARdwdAq3VZsctJUOBeBZADt8A7qJu3ayvkAPut0XoAc4LBDQR7lk/gXPgV7grpXoWyjRlzwF7hnu6LS00JQb11zZNSzySjZlvOkZcAGnT6O3bFbsUC4IFeNEehoraO2K+1xvJtZgNlV43xPganCsyRPjQ8a5Xe9u2RQKRU6tFInVtB0TycLnrgNrwS2mw0Y26I1TGNA6VTPJlvXA+P5C3lWgE7hF0LMfxpoj8zytipQGaskN5n93DbhinMgfrNNjdllWypIqEksVkksYOk4GRgsXZjL9Yx09bOonlDsU4Eydth0ZMoxqJaiCxCzmNwwRdy0ey9GpWgln6SdVnx3gZCvjlMtV6AyWKh50HOgF7kZkeJ5RJdSzPOso0c+wmvaMo0AvcYuB7/ygbX3jldtwJ3IzEsAxABOOAf3A3RIp9AZK9FVHgPGxzofF0o67ec1V63iWZ9J+JphLFA7VDLRxZGon8FT19mpBlL5fRYeidFw0uhFpPxPELOZwTcAg4crKleQgJtr2Wk9pW/EwMZCJPYr9JlGWTSpn2F4+ILZ6c8kff1BpX0ubvkx7U4TNxo8TcxdWBQxi5qqdEOUM1iNOuUR3j3Zt1S2eDEKHUi1jy7+vmsESTrTj2HGd0sGF/jJ1eVxlbql0vBob3RK4GhxptD2byJ+uMS7Hdq8IXAu4itfgWsH9L3At4cqA/SNd2zRN+3QlHUrQrrmKvaiNw134MbwiSlc4esug45YyuFZxJWDfSFdLiHlOfRCvj8wtzUUHMt3vYawYVClL3C3/jR+hPnU0WfhepX0Q2nA80/0rArm7ajB1cs2VdTLxdPef1X7TWY+ZWypRZPAY/tlRKYPAXRKLeif2GzNVsxzABtw/EnuINfoON7Dl0zaRy6bGTx9J5L8JYOxKIZVQA6OxIfx++u2bBniROSbzufHU7BmlIwW00VLW4un7NxOHerGgb/9g/OxFvjQ5NfTTlYDGrRzWf9WkQaXg0g7RAAAAAElFTkSuQmCC"},5081:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-5.72245bae.png"},"52bf":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAABFBJREFUaEPd2k9oHFUcB/Dfb95u0kDTtMlms+ulIELEHgyKFCtqWwXRi9CDgoigl4KXQg8KPey+RKHYg4VeCiL10IPgRfCgtpTYmqL4t6iHelAEQcSdTYI1SHVn5utvJumaNN3kzey8mWn2MmHzZvh93u/33vx2dpluwxfepCG6NlEnQs0nqjGjHiA8krxHNYDqHB6JzsixGC8Jiml6eIycUt1DucZhkBJ0IMFHwa4EH75PzDtMombgiHUgTtEgLeyUmXVktllmWa2abXRnW3gTRFw2Cdx4DPBsqkC/WX0FDk0RUJfyWCkZHjEOKOWBCng0VSD0+F2yJuakhGopx5rocgrBZKrAMIoiIRW8kdSBxUGiU2q6A1aABUH+Umq27rQGzBspm9zn5WZrn1Vgzsj3JYOHrAPzQwanS832y5kA80AygqbS7ZnMgFkjBXhYgG9lCswUieDpkm5/kDmwi2T+TP4eT9SiGJyk4O9lPf9lLsBl5NjdPqtPbSFV0NnN04u/5ga0jVS11gAfpk6+wNcqk77vXJaPShWDqosxBIvSpo2GJ+QGhDWclD/harnp3pMb0CZuOc34RDJ4MBegfVwkfFfatOcyB2JmdI8flC6mv+bWLk9ptE9Ko300U2CEg5qTZb8rxm6RaCgH9Kqabp3IDJgA56oAhzyH3mbiyQTKF6REz2YCTISD/4h0IT9CD1c83nY5LlIeQT5R1q3z1oH94G5kbRk5dFHuZ3tMM6lA97JufW8VmAauizw+ssv7d3DOFKnw9wTrpZY1oDxZm/KZZo03FNCCIv+hsCx7ZQnGSEA1XCWP8WUztdDJRDiiS6aP1yWMBeV09nNj8YfNStAMid/lJn/HjWul2qrZxJmWq7RpV6RNuy91YBa4Nch/BmaZeWp91vGRZPCpVIFZ4v7fXUd3eKQurUfiHQG+lBowD9xGSCnR41Kix1IBYmbsAT9wLtjYUDbbcHohw+8ElXZP9Q1cwc0KbrtRMDF2S6PrrRoEvapc5TvBknbf6wtYJNzNmSwRHWHths96olfs24R0KA/6gTpvnDnCotx1D3Cj9V3czMQdjzcqw+Rf38bHltxEwCJmbrNJMM4gdHWfTzhnnDmLa24z1Or/GwEjHNMFOXHI6OIFwRmtwdg4wp+KvYdNekujyepz0IYZTIQDDrJuf9tnXKmd3hO4FXA9S3Sr4G4J7OjKfmbnQ+MNJVxzBSvLnrvoCu5jGTBotgiKjVuTwa2I6wK3Ki4CQm+v+jT0s3GHUvA1d/PSYk9Xz0rL/bzRmgOuKcJjcp/72mh8AQYJcPw3yV73KVTvmIq/odwq9jCDf0gGqxtP9u2Ji9agNz0u9zx+coPM/aUY8nmu/U0BKi52CIyZyv0++CtBrm/bgCXlBI9zY/6L2FcuyAkRSrL4ogDPrIkJ+Ek59Aw33CsFiTVRGN2s4fWdu32vfCD8pTuc4KrC/DnWdD3RVQt00n9yeFl7CQbl5gAAAABJRU5ErkJggg=="},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=c,s=a("2877"),l=Object(s["a"])(r,i,t,!1,null,null,null),d=l.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");u["a"].use(f["a"]);var g=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,A=a("1c2c"),h=(a("a3a0"),{global:{componenteFormativo:"Procedimientos del efectivo y cheques",descripcionCurso:"A través del presente componente formativo comprenderá los procedimientos técnicos que se deben aplicar dentro de una organización en cuanto al manejo y la gestión del efectivo a través de diversas operaciones financieras, la relevancia de la verificación de los cheques o documentos comerciales y los procesos establecidos por las entidades financieras, implementados siempre bajo el marco legal vigente.",imagenBannerPrincipal:a("9128"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("2cad")},{clases:["banner-principal-decorativo-2"],imagen:a("f533")},{clases:["banner-principal-decorativo-3"],imagen:a("5b70")},{clases:["banner-principal-decorativo-4"],imagen:a("80be")},{clases:["banner-principal-decorativo-5"],imagen:a("5081")},{clases:["banner-principal-decorativo-6"],imagen:a("d085")},{clases:["banner-principal-decorativo-7"],imagen:a("52bf")},{clases:["banner-principal-decorativo-8"],imagen:a("0c9e")},{clases:["banner-principal-decorativo-9"],imagen:a("827c")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Transacciones en efectivo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Medidas de seguridad de los billetes y moneda",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Características y elementos",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Protocolos de novedades en billetes",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Normatividad institucional",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Procedimiento en el manejo de billetes",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Fajo de billete",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Efectivo en caja y en bóveda",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Medidas de seguridad",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Manejo de cheques",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Características de documentos comerciales",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Formas y tipos",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Procedimientos de visación",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Seguridad y normatividad vigente",hash:"t_3_4"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Proceso de canje y compensaciones",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Contexto",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Procedimientos",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Manejo de códigos",hash:"t_4_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Transacciones de efectivo",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2021). Fondo de caja o base [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=oxzRCxlLcUo"},{tema:"Procedimiento en el manejo de billetes",referencia:"Banco de la República de Colombia. (2015). El Banco de la República introducirá una nueva familia de billetes [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=MNFgTYXyceA"},{tema:"Manejo de cheques",referencia:"Consultorio Jurídico Luis Alberto Ariza Ospino. (2018). Títulos valores - El cheque [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=vuNLFaPlMzs"},{tema:"Proceso de canje y compensaciones",referencia:"Morales. J. (2020). El cheque Cámara de compensación acdcomco [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=c83SXP81g9o"},{tema:"Proceso de canje y compensaciones",referencia:"Banco de la República. (s.f.). Reglamentación de compensación de cheques. Banrep.",tipo:"Sitio web",link:"https://www.banrep.gov.co/es/contenidos/compensacion-cheques"}],glosario:[{termino:"Billete",significado:"Representación monetaria de una determinada nación que determina y clasifica el valor pecuniario en general."},{termino:"Bóveda",significado:"Elemento de seguridad, cuya función principal es custodiar o proteger algún objeto de valor para salvaguardar su destino."},{termino:"Caja",significado:"Elemento donde se consolidan y se implementan los recursos en efectivo, ya sean cheques, monedas o billetes."},{termino:"Canje",significado:"Método alternativo por el cual se cambian cheques por efectivo, generando un descuento porcentual sobre el valor del cheque."},{termino:"Compensación",significado:"Es el proceso en el cual se consolida y se refleja el valor del cheque al banco destinatario."},{termino:"Entidad financiera",significado:"Organización bancaria que su objeto se basa en la administración de la moneda o todo elemento que esté vinculado con el sector financiero."},{termino:"Falsificación",significado:"Procedimiento ilícito que consta de copiar algún objeto o moneda sin contar con los derechos o permisos autorizados. "},{termino:"Seguridad",significado:"Es un sistema que disminuye el peligro en general, eliminando los riesgos directos que amenazan su nivel de vulnerabilidad."},{termino:"Transacciones",significado:"Operaciones generales que se desarrollan en un sistema financiero ya sea bancario o en efectivo."}],referencias:[{referencia:"Banco de la República de Colombia. (s.f.). Billetes y monedas. Banrep.",link:"https://www.banrep.gov.co/es/billetes-y-monedas-0"},{referencia:"Castro, S. (2017). Proyecto F. Diagnóstico del uso del efectivo en Colombia. Asobancaria.",link:"https://www.asobancaria.com/wp-content/uploads/2017/12/Proyecto-F.pdf"},{referencia:"Gestiopolis. (2009). Administración del efectivo. Qué es, importancia y función en la empresa. Contabilidad y Finanzas. Gestiopolis.",link:"https://www.gestiopolis.com/administracion-del-efectivo-y-contabilidad-administrativa/"},{referencia:"McLeay, M., Radia, A. y Thomas, R. (2015). El dinero en la economía moderna: una introducción. Revista de Economía Institucional, 17, (33), p. 333-353."},{referencia:"Van Horne, J. y Wachowicz, J. (2002). Fundamentos de Administración Financiera. Pearson Education.",link:"https://catedrafinancierags.files.wordpress.com/2014/09/fundamentos-de-administracion-financiera-13-van-horne.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Francisco Chará Carrero",cargo:"Experto temático",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Diego E. Acevedo Guevara",cargo:"Diseñador instruccional",centro:"Centro de la Industria, la Empresa y los Servicios - CIES Norte de Santander"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Asesor metodológico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Julia Isabel Roberto",cargo:"Correctora de estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuly Rey",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"María Carolina Tamayo López",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Estefani Daniela Gallo Cortés",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Erika Viviana Sandoval Rojas",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Pedro Nel Calao Zabala",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=h;var v=a("9224");o["a"].prototype.$package=v,new o["a"]({router:b,store:A["a"],render:function(e){return e(d)}}).$mount("#app")},"5b70":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.5e35fa43.png"},"80be":function(e,n){e.exports="data:image/png;base64,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"},"827c":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABHNCSVQICAgIfAhkiAAABkdJREFUWEfVmFtvVFUUx9fa55yZ6YW29DakYlttAgkXGyASwIQoCspFQNSvIE8+SIw+Oj74or75JB9Bn9VgfAAKmnCJcjWFSksoRUovUDrtzDn74n+fKb1Mp3QGe6a6kz0zZ8+evX9nzTpr/fdi+h81/i+wGiKmFDlELTFKTHohU6YiIBrwMa4AiSl20jI3Y4j7Pm+Pt1O6DnSrmHS9RXKFM5zW5n7VcO0ofdPjW+BlhbWgBFAyfrMUci3stxFMrWDFV9QLuD+yPndXxQaHOUVy2WCnQd1sUqlgA7i3M/MWo6lVMCljTLdmOmmMOBWr8f7iY/2TywI7GzQrg40OOa8Q6+1MvAZWXQl7B0abm3g/Qcw/uOP6Mn859LjssPNABUC13gGrWlDrry76BDzhT8w9QYJ/dLW5wqkH42WFLRLUB+w9eO15WPZnR5gzpIZuw2czZYMtAfS+IHNZEXe5TGdo0rtBPXcf8vdhCIu+lQIKH73CRp8Rhn4jj7upcXCEjoaRIPrQVSqoUfqs69GvJOkGUdMIpa4HZUkKSwkaaQZbatDIYKMAnQcbbnIUcW4DCRoJxYNEyNClPIJRgc6HTVEMyqcmQ7o64fqKXDNGmdG0zcvFAEcJWgC2qdoX4gWHVZujiQPDd7y4f5uyjx4vBhw1aAHY1fWS/S34YhviXA2cokdJfcGrDG49DbgcoHNgQwH8RXOzkmYn4tpeAHRgqJ8FdalAn18IuFygc2FTeKiovkUJdxceqXeAvgkyDbKMfwfw6ULA5QTNh4XaSbZqYd6AprSwL2NCHMD9hYDpM1KhcIYeDWVeYfVkRcl9m0KflpmKeXjzYWMUa3hRS7EHEewQApf13RVWrs0Ddvxe3IdPrttQLtA82PYEeRNrpDR7YckDsGwngC2sjbMzwExdePguBWQmDIs2KKNter4eXVKLPrH8tOoyqZZKAKxzhNqnNe2Hn64HbNXUxBlgpks4alwVQo0jurVhzuYphf9EOEcCmmfZpmpJ/JJgPqANrCvIHuAqZvlTCIyxv4nNXUSKjCHTCNDVGF+JbhV+ZKB5sPU1kmKbcRY6CKA3mW3oonie81vgLPokukJHxgtvKHLQPNi6OsBuBeRhwO6G9dpgvVzBYW6zmsGqCBh2uu5gLTqI+VdYQzgvoEcLrFXS0CyfralXFNtB7BzB+ed1YDyHlVAlWaTh2Azoh5h1jQ2dhB+fcklfzxfOiy1TzPczsF+3NKpxuRM/ehegr+F9FXoxxx4JWFiVzsHPf5K+0xWrd/roWL894IVln6VqIUyu1tSUVMK8Ska8hyEL3VTkJtZ3h5HNLgs2vygUJTyaxJFkbGwx8VPk+tPTcrDv4+/uRKqVjv37j+AMvwObNxS5mLXeJF7usjEX8dvTED/nFhM/Ra49Z1oIe+ED8rY839waKNqN0s1hpMet8FsbjoptcxPHAlqi2MUWmhfC3vyQ4q0NqzpcYfYgGx1iwZvgG7UlLh45cAh756PVFcna7FqErb04nR/Ag7JxKtWWyJuXmpfYwjmf/ThZFVTzetRG9+NqH/xuHYYrSyWdmh+ZhXOwnzSukBXcCV99G5dvwcK2SJZ4Rlj7M1QrKY1/5w7KKBexwyll+HyMZB/RyHiph9AnHDnYT1fWysr4ZmTQQ0RiD57qDkQFm0oLNfv0w3pQvcjNuc+z+/S4raQ80oZ6oerPYdJZn/TVyoGhB3ycUOQuveVgU9Op9iBy6K4pcWKzVwjCbBBLGfomvLZ1Jx/EAbpNs2G3Y7hBH6i5a+YsIgpCmhkRgnq1FlfdQHZT6/AgH/0XsKOAreYEIoCCJkDYCuukIaCPDXMbo5aeu4aQYYNrq7oog4pfBr/J4E6y9toxbGMuxjDHMMbwPfGY65gHj9L+UG1i8ZPyQjbPWfarZBWlTQdqip1TB0WoLcCxAZDIWAuFUAKftYXWsKwI3+E2+Kx9L7xWfpZcX1PgV3hu8Dhw1Yp4WlHWwY0nJA0MBPQt/hkrgp6hhbDXUNxYR8k6fGyWytSSMGzYCTc35PgxR8Oa0ifpBOPYuDo+gc0FXMJ2VBjIQ4+h9834byosUT4T1NMta6XecWjSey0eVfgODWN6EyAcQPQmNGV7NI3CX7+z/ru0AKUYuBhVVcp6kc79B5aWfmhHSqI0AAAAAElFTkSuQmCC"},9128:function(e,n,a){e.exports=a.p+"img/banner-princiapal.ca975624.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.bf575ff0.png"},d085:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAABHNCSVQICAgIfAhkiAAAA4BJREFUWEfN19tLFGEUAPBzZmYNkqigcKjAkEBLaHejB3Uv6X9QEUSZIl2gfMne9KWMIOupeqgoKjCx7Cl6CXopm/VCD7q7UtJDFPQX+FBEO5fTmXFd3NydnZ2L64DMrPvNnB/nO998ZxFqdNDX2Bb4I8ogoKyD0YAEsoEom2cAkonPyJ+B6C36aSTqlGBR3QWqIOtmQMOQAbGBiIMhcGDiwIwwIYibncTme0ZcI/Vs8ho/oIUDyQQM4jNfb3MSuJoxiMZl10jKxFp1EFIAuL2aoC7GnnSNNIOtB1QU4IgnZAFK4iTX3A4XWap4iwhGs2ekBc3GmnVDnAoCKtb/3eoLMjAokSpFU3W+IQtQEj/ydUPFeXQ24IcUUZp8RVrQhXiTbggzfkD5hT4biiodviNXQRW+3u0sYWVHveZMHg8EaUEXOxr1nDTtCUr0kGuyPzCkCdXSyfu84vvdZhOBroqR1I3AkGomznuuMOgWaN7HuItiRHkUCHJ5X4dhL0DrXoGOSgdTb3xH6pnkIAGMeAbyA0Q02jA89clXpJ5NDHFbdrMCcIm/d9QtiSG9EVunf/qG1NOJAUK8YwfkYEMC5SZ0rOPuCfZUyrao/a7Dw3OqL0hHQIRhMaxct15P6ba9DJ3lS7MHLXcs8TvSagM9I50ACYxbocjU0GoNfWnfp6shM6MloVzXX0MRZb9npFvgCtYeSpNSJNXlCcmL5BIvkgd2dVUqg/+PLw+lCUaeco10BES6GwqnrlRaHFaNmlOfk2b4x9nOQpZX3V91TfoNLKAW2lt0XVJWoAwb5N3mdtWZDApYEorQJ4WV0aqQWiZ+lvepp7Y1WMUUl3sO5TNKCD2hSOqdY6SWTlzgaXhsCyS4xw3qgJMarDSG5hMHYJOWw9bZb46QyxnEJ/xXvn7zfV+l4G6/t104GwFom0luWLsBaayWGVzJfMlM5oHPGSjYTNEz3lvPuZ3Cau5bg3QK5GbhPFcpb7HBH0XIjQgsqkktmzjBeXllP8U0LoZTPeuVwaKatIAGTnDjJpafPAvYy0Aj+AkujoBqOt6JKHywDUw0yr9/+9YbV8ikmknMIeAhmwyOccvUWyugVZNaJvmLz/WlETTOwDO1BFpINZOc5yUeXQMheslTfLrWwDwy1sXr5X0RhuCFFFW6NwKw8Aqiz/GwpgrHrH8I8J37ON5tNs7xD3Jng90XvN6BAAAAAElFTkSuQmCC"},f533:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.844b0771.png"}});
//# sourceMappingURL=app.9e450eef.js.map
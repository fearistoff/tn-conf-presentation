(function(){"use strict";var t={5679:function(t,e,l){var n=l(9242),s=l(3396),a=l(7139);const i={key:0,class:"stack-title"},o={class:"task-title"},r={class:"overall-stage"},u={class:"button-panel"};function c(t,e,l,c,g,p){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n.W3,{name:"stack-title"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.stackList,((l,n)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:n},[l.title?((0,s.wg)(),(0,s.iD)("h4",i,(0,a.zw)(l.title),1)):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)(["stack-task-list-container",{"stack-task-list-container_no-title":!l.title}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.tasks,((n,i)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["task-container",{"task-container_top":n.top,"task-container_bottom":n.bottom}]),key:i,style:(0,a.j5)({"--background":l.color+"50","--border":l.color,marginLeft:10*n.pause+"%",flex:`0 0 ${10*n.length}%`}),onClick:e[0]||(e[0]=(...e)=>t.scrollInto&&t.scrollInto(...e))},[(0,s._)("p",o,(0,a.zw)(n.title),1)],6)))),128))],2)],64)))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.overallStages,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.title,class:"overall-stage-container",style:(0,a.j5)({width:10*t.length+"%"})},[(0,s._)("p",r,(0,a.zw)(t.title),1)],4)))),128))])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.repeatAreas,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.start,style:(0,a.j5)({left:`calc((100% - 32px) / 100 * ${10*t.start} + 16px)`,width:`calc((100% - 32px) / 100 * ${10*t.length})`}),class:"repeat-area"},null,4)))),128)),(0,s._)("div",u,[(0,s._)("button",{onClick:e[1]||(e[1]=(...e)=>t.back&&t.back(...e))},"⬅️"),(0,s._)("button",{onClick:e[2]||(e[2]=(...e)=>t.next&&t.next(...e))},"➡️"),(0,s._)("button",{onClick:e[3]||(e[3]=(...e)=>t.test&&t.test(...e))},"test")])],64)}l(7658);var g=l(4870),p=(0,s.aZ)({name:"TimeLine",setup:()=>{const t=(0,g.iH)([{title:"Аналитик/Менеджер проекта",color:"#f65700",tasks:[{title:"Ведение вычитки аналитики",length:2,pause:0},{title:"Оценка ёмкости релиза",length:1,pause:0},{title:"Коммуникация с QA",length:2,pause:20},{title:"Сборка тегов",length:2,pause:18},{title:"Написание release note",length:2,pause:0},{title:"Передача тегов DevOps-инженерам Tages",length:2,pause:0},{title:"Передача тегов DevOps-инженерам ТехноНиколь",length:2,pause:4}]},{title:"QA-инженер",color:"#2d2e83",tasks:[{title:"Запуск автотестов",length:4,pause:17},{title:"Обнаружение инцидентов",length:2,pause:0},{title:"Уточнение Аналитики",length:2,pause:0},{title:"Расследование инцидентов",length:2,pause:2},{title:"Актуализация автотестов",length:2,pause:6},{title:"Запуск автотестов",length:6,pause:0},{title:"Запуск автотестов",length:4,pause:6}]},{title:"",color:"#2d2e83",tasks:[{title:"Прослушивание вычитки аналитики",length:2,pause:0},{title:"Написание и актуализация тест-кейсов",length:6.5,pause:0},{title:"Написание и актуализация автотестов",length:6.5,pause:0},{title:"Составление тест-плана",length:2,pause:0},{title:"Подготовка тестовых данных",length:2,pause:0},{title:"Приёмочное тестирование",length:2,pause:0},{title:"Расследование инцидентов",length:2,pause:0},{title:"Коммуникация с разработкой",length:2,pause:0},{title:"Отдача инцидентов в разработку",length:2,pause:0},{title:"Побочный инцидент",length:2,pause:0},{title:"Получение правок и их ретест",length:2,pause:0},{title:"Запуск автотестов",length:2,pause:0},{title:"Расследование инцидентов",length:2,pause:0},{title:"Подготовка тестовых данных для регресса",length:2,pause:0},{title:"Ручное тестирование по тест-кейсам",length:2,pause:0},{title:"Расследование и заведение инцидентов",length:2,pause:0},{title:"Получение правок и ретест",length:2,pause:0},{title:"Smoke-тестирование на accept",length:2,pause:6},{title:"Расследование и заведение инцидентов",length:2,pause:0}]},{title:"Разработчики",color:"#662483",tasks:[{title:"Прослушивание вычитки аналитики",length:2,pause:0},{title:"Оценка задачи",length:1,pause:0},{title:"Подготовка рабочей среды",length:2,pause:0},{title:"Подготовка контрактов",length:1.5,pause:0},{title:"Работа над задачей",length:4.5,pause:0},{title:"Публикация в story-окружение",length:2,pause:0},{title:"Передача в тестирование",length:2,pause:0},{title:"Уточнение области тестирования для QA",length:2,pause:0},{title:"Коммуникация с QA",length:2,pause:6},{title:"Исправление инцидентов",length:6,pause:0},{title:"Внесение изменений в master-ветку",length:2,pause:0},{title:"Исправление инцидентов",length:2,pause:0},{title:"Исправление инцидентов",length:4,pause:4},{title:"Исправление инцидентов",length:2,pause:8}]},{title:"",color:"#662483",tasks:[{title:"Коммуникация с другими стеками",length:6,pause:5}]}]),e=(0,g.iH)(0),l=(0,g.iH)({}),n=[{title:"Вычитка аналитики",length:3},{title:"Разработка",length:12},{title:"Acceptance-тестирование",length:16},{title:"Подготовка к регресс-тестированию",length:6},{title:"Regress-тестирование",length:6},{title:"Подготовка к отдаче тегов",length:6},{title:"Smoke-тестирование",length:4},{title:"Отдача тегов",length:4}],a=[{start:25,length:6},{start:33,length:2},{start:39,length:4},{start:49,length:4}];let i=1;const o=[{scroll:100}],r=document.getElementById("app"),u=r.clientWidth-32;(0,s.bv)((()=>{document.getElementById("app")?.addEventListener("scroll",f)}));const c=()=>{i<o.length&&(i++,v(o[i-1]))},p=()=>{i>1&&i--},h=t=>{t=t/100*u,r.scrollTo({left:t,behavior:"smooth"})},f=()=>{e.value=r.scrollLeft,r.style.backgroundPositionX="-"+e.value+"px"},k=t=>{const e=t.target;e&&e.scrollIntoView({behavior:"smooth",inline:"center"})},v=t=>{t.focusTask&&(l.value.task=t.focusTask),t.focusStack&&(l.value.stack=t.focusStack),t.scroll&&h(t.scroll)},d=()=>{t.value.length>5?t.value.splice(-1,1):t.value.push({title:"",color:"#662483",tasks:[{title:"Ответы на вопросы по следующим сторям Аналитика",length:350,pause:20}]})};return{stackList:t,focusItem:l,overallStages:n,repeatAreas:a,test:d,scrollInto:k,back:p,next:c}}}),h=l(89);const f=(0,h.Z)(p,[["render",c]]);var k=f,v=l(65),d=(0,v.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(k).use(d).mount("#app")}},e={};function l(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,l),a.exports}l.m=t,function(){var t=[];l.O=function(e,n,s,a){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],a=t[c][2];for(var o=!0,r=0;r<n.length;r++)(!1&a||i>=a)&&Object.keys(l.O).every((function(t){return l.O[t](n[r])}))?n.splice(r--,1):(o=!1,a<i&&(i=a));if(o){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,s,a]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var n in e)l.o(e,n)&&!l.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};l.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,i=n[0],o=n[1],r=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in o)l.o(o,s)&&(l.m[s]=o[s]);if(r)var c=r(l)}for(e&&e(n);u<i.length;u++)a=i[u],l.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return l.O(c)},n=self["webpackChunktn_conf_presentation"]=self["webpackChunktn_conf_presentation"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(5679)}));n=l.O(n)})();
//# sourceMappingURL=app.564447bf.js.map
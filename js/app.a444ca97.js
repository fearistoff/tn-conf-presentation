(function(){"use strict";var e={1878:function(e,t,l){var n=l(9242),s=l(3396),i=l(7139),o=l.p+"img/tages-logo.ebea8bb8.svg";const a={key:0,class:"slide-overlay"},u={key:0,class:"stack-title"},c=["id","onClick"],r={class:"task-title"},d=(0,s._)("br",null,null,-1),g={class:"overall-stage overall-stage_number"},p=["poster","src"],f={key:0,class:"title-slide"},h=(0,s._)("p",{class:"title-slide__text title-slide__text_speakers"},[(0,s.Uk)(" Спикеры: "),(0,s._)("span",{class:"accent"},[(0,s._)("br"),(0,s.Uk)("Алёна Махальникова")]),(0,s._)("br"),(0,s._)("span",{class:"accent"},"Александр Нилов"),(0,s._)("br"),(0,s._)("span",{class:"accent"},"Роберт Шарифуллин")],-1),k=(0,s._)("h1",{class:"title-slide__title"},"Процессы Delivery",-1),m=(0,s._)("p",{class:"title-slide__text"},"Релиз, разработка, тестирование",-1),v=[h,k,m],b=["innerHTML"],_=["innerHTML"],w={key:0,class:"slide-number"},x={key:0,class:"slide-list-container"},T=["onClick"];function y(e,t,h,k,m,y){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:"lines",style:(0,i.j5)({width:`calc((100% - 35px) * ${e.overallStagesLength/10})`,backgroundSize:e.width/10+"px"})},null,4),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[-1!==e.slideId?((0,s.wg)(),(0,s.iD)("div",a)):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[0!==e.slideId?((0,s.wg)(),(0,s.iD)("img",{key:0,class:(0,i.C_)(["logo",{logo_final:e.currentSlide&&e.currentSlide.final}]),src:o,alt:"tages logo"},null,2)):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(n.W3,{name:"stack-title"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.stackList,((t,l)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:l},[t.title?((0,s.wg)(),(0,s.iD)("h4",u,(0,i.zw)(t.title),1)):(0,s.kq)("",!0),(0,s._)("div",{class:(0,i.C_)(["stack-task-list-container",{"stack-task-list-container_no-title":!t.title}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.tasks,((n,o)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["task-container",{"task-container_top":n.top,"task-container_bottom":n.bottom,"task-container_focus":`task-${l}-${o}`===e.focusId,"task-container_focus-hold":e.focusHoldId.includes(`task-${l}-${o}`),"task-container_blur":e.unBlurId.length&&!e.unBlurId.includes(`task-${l}-${o}`)}]),id:`task-${l}-${o}`,key:o,style:(0,i.j5)({"--background":t.color+"50","--border":t.color,marginLeft:10*n.pause+"%",flex:`0 0 ${10*n.length}%`}),onClick:t=>e.taskClickHandler(`task-${l}-${o}`)},[(0,s._)("p",r,(0,i.zw)(n.title),1)],14,c)))),128))],2)],64)))),128))])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.overallStages,(l=>((0,s.wg)(),(0,s.iD)("div",{key:l.title,class:"overall-stage-container",style:(0,i.j5)({width:10*l.length+"%"})},[(0,s._)("p",{class:"overall-stage",onDblclick:t[0]||(t[0]=(...t)=>e.toggleDevMode&&e.toggleDevMode(...t))},(0,i.zw)(l.title),33)],4)))),128)),d,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.overallStagesLength,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"step"},[(0,s._)("p",g,(0,i.zw)(e),1)])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.repeatAreas,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.start,style:(0,i.j5)({left:`calc((100% - 32px) / 100 * ${10*e.start} + 16px)`,width:`calc((100% - 32px) / 100 * ${10*e.length})`}),class:"repeat-area"},null,4)))),128)),(0,s._)("video",{muted:"",autoplay:"",class:"hidden-video",poster:l(9348),src:l(6963)},null,8,p),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[0===e.slideId?((0,s.wg)(),(0,s.iD)("div",f,v)):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[e.currentSlide?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,i.C_)(["slide-container",{"slide-container_final":e.currentSlide.final}])},[(0,s._)("h1",{innerHTML:e.currentSlide.title},null,8,b),(0,s._)("p",{class:(0,i.C_)(["slide-container__body",{"slide-container__body_fill":e.currentSlide.fill,"slide-container__body_center":e.currentSlide.center}]),innerHTML:e.currentSlide.text},null,10,_),e.currentSlide.final?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",w,(0,i.zw)(e.slideId+1),1))],2)):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[e.freeMode?((0,s.wg)(),(0,s.iD)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.slides,((t,l)=>((0,s.wg)(),(0,s.iD)("button",{class:"slide-item",key:l,onClick:t=>e.setSlideId(l)},(0,i.zw)(0===l?"S":l===e.slides.length-1?"F":l+1),9,T)))),128)),(0,s._)("button",{class:"slide-item",onClick:t[1]||(t[1]=t=>e.setSlideId(-1))},"X")])):(0,s.kq)("",!0)])),_:1})],64)}var B=l(4870),F=[{slide:0,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:10},{slide:1,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:22},{slide:2,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:38},{slide:3,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:49},{slide:4,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:21},{slide:5,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:20},{slide:6,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],count:33},{slide:-1,scroll:0,focusTask:"",holdFocus:!1,unBlur:[],instantNext:!0,count:12},{slide:-1,scroll:0,focusTask:"task-0-0",holdFocus:!1,unBlur:[],count:322},{slide:-1,scroll:2.5,focusTask:"",holdFocus:!1,unBlur:[],instantNext:!0,count:54},{slide:-1,scroll:2.5,focusTask:"task-3-2",holdFocus:!0,unBlur:[],count:23},{slide:7,scroll:2.5,focusTask:"",holdFocus:!1,unBlur:[],count:43},{slide:8,scroll:3,focusTask:"",holdFocus:!1,unBlur:[],count:12},{slide:9,scroll:3,focusTask:"",holdFocus:!1,unBlur:[],count:12},{slide:10,scroll:3,focusTask:"",holdFocus:!1,unBlur:[],count:12},{slide:11,scroll:3,focusTask:"",holdFocus:!1,unBlur:[],count:12},{slide:12,scroll:3,focusTask:"",holdFocus:!1,unBlur:[],count:12},{slide:-1,scroll:3,focusTask:"",holdFocus:!1,unBlur:[],instantNext:!0,count:99},{slide:-1,scroll:8,focusTask:"task-3-5",holdFocus:!0,unBlur:[],count:128},{slide:13,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:14,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:15,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:16,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:17,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:18,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:19,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:20,scroll:8,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:21,scroll:45,focusTask:"",holdFocus:!0,unBlur:[],count:128},{slide:22,scroll:45,focusTask:"",holdFocus:!0,unBlur:[],count:128}],$=[{title:"",text:""},{title:"Темы, затрагиваемые в докладе",text:"<ul>\n<li>Планирование релиза</li>\n<li>Оценка задач</li>\n<li>Управление ресурсами</li>\n<li>Окружения и ветки для разработки</li>\n<li>Виды тестирования</li>\n<li>Автотесты</li>\n<li>Расследование инцидентов</li>\n</ul>"},{title:"Практики для управления сроками",text:"<ul>\n<li>планирование релизов</li>\n<li>вычитка аналитики на новый функционал</li>\n<li>оценка задач</li>\n<li>вычисление объема релиза</li>\n</ul>",fill:!0},{title:"Структура релиза",text:`<img class="no-margin" src="${l(2627)}" alt="Задача в YouTrack"/>`,center:!0,fill:!0},{title:"Аналитика и вычитка",text:`<img class="separate" src="${l(3088)}" alt="Задача в YouTrack"/><img class="separate" src="${l(5752)}" alt="МР в GitLab"/>`,fill:!0},{title:"Оценка по трем точкам",text:`<img class="inner-shadow" style="height: unset" src="${l(2486)}" alt="Формула"/>\n<p>E - время в часах<br>\nО - оптимистичная оценка<br>\nR - реалистичная оценка<br>\nР - пессимистичная оценка<br>\n</p>`,center:!0},{title:"Оценка емкости релиза",text:'\n<p class="formula">0.5Y<sub>1</sub> + 0.5Y<sub>2</sub> + X + Z ≈ время на релиз</p>\n<p>где:</p>\n<ul>\n<li>0.5Y<sub>1</sub> - время на разработку, оцененные User Story</li>\n<li>0.5Y<sub>2</sub> - тестирование реализованных задач и написание тест-кейсов</li>\n<li>X - время на регресс, у каждого проекта есть минимальное значение</li>\n<li>Z - константа, время на передачу тегов</li>\n</li>\n</ul>\n<p class="formula">0.5×150 + 0.5×150 + <span class="accent">50 + 2</span></p>\n<p class="formula">202 часа</p>'},{title:"Окружения",text:`<img class="no-margin enlarged" src="${l(3888)}" alt="Git-flow"><p>Последовательная разработка</p>`,center:!0},{title:"Окружения",text:`<img class="no-margin enlarged" src="${l(9554)}" alt="Git-flow"><p>Параллельная разработка</p>`,center:!0},{title:"Окружения",text:`<img class="no-margin enlarged" src="${l(5855)}" alt="Git-flow"><p>Применение story-окружений</p>`,center:!0},{title:"Окружения",text:`<img class="no-margin enlarged" src="${l(3136)}" alt="Git-flow"><p>Автоматизация поддержки окружений</p>`,center:!0},{title:"Окружения",text:`<img class="no-margin enlarged" src="${l(6711)}" alt="Git-flow">`,center:!0},{title:"Окружения",text:"<ul>\n<li>Простои разработчиков → параллельная разработка</li>\n<li>Одно окружение разработки → story-окружения</li>\n<li>Ограниченный ресурс DevOps-инженеров → автоматизация поддержки окружений</li>\n</ul>",center:!0},{title:"Тест-кейс",text:`<img class="no-margin enlarged" src="${l(6804)}" alt="Тест-кейс">`,center:!0,fill:!0},{title:"Оценка емкости релиза",text:'\n<p class="formula">0.5Y<sub>1</sub> + 0.5Y<sub>2</sub> + X + Z ≈ время на релиз</p>\n<p>где:</p>\n<ul>\n<li>0.5Y<sub>1</sub> - время на разработку, оцененные User Story</li>\n<li>0.5Y<sub>2</sub> - тестирование реализованных задач и написание тест-кейсов</li>\n<li>X - время на регресс, у каждого проекта есть минимальное значение</li>\n<li>Z - константа, время на передачу тегов</li>\n</li>\n</ul>\n<p class="formula">0.5×150 + 0.5×150 + <span class="accent">50 + 2</span></p>\n<p class="formula">202 часа</p>'},{title:"",text:"<h2>Чем больше наша ИС и чем дольше она разрабатывается,<br>тем больше времени нам требуется на регрессионное тестирование.</h2>",fill:!0,center:!0},{title:"Видео прохождения end-to-end",text:`<img src="${l(9348)}" alt="Видео прохождения end-to-end">`,center:!0,fill:!0},{title:"Видео прохождения end-to-end",text:`<video muted autoplay class="no-margin full-screen" poster="${l(9348)}" src="${l(6963)}">`,center:!0,fill:!0},{title:"Отчет автотеста бэкенда",text:`<img class="no-margin enlarged" src="${l(4963)}" alt="Тест-кейс">`,center:!0,fill:!0},{title:"Отчет автотеста фронтенда",text:`<img class="no-margin enlarged" src="${l(3255)}" alt="Тест-кейс">`,center:!0,fill:!0},{title:"Инцидент",text:`<img class="no-margin enlarged" src="${l(5845)}" alt="Тест-кейс">`,center:!0,fill:!0},{title:"Выводы",text:"<ul>\n<li>Тестирование улучшает продукт</li>\n<li>Чем масштабнее ИС, тем больше времени уходит на регресс тестирование</li>\n<li>Автотесты необходимы для оптимизации времени на регресс тестирование</li>\n</ul>"},{title:"Спасибо!",text:"<p>Алёна Махальникова - alena.mahalnikova@tages.ru</p>\n<p>Александр Нилов - alexander.nilov@tages.ru</p>\n<p>Роберт Шарифуллин - robert.sharifullin@tages.ru</p>",final:!0}],D=(0,s.aZ)({name:"TimeLine",setup:()=>{const e=(0,B.iH)([{title:"Аналитик/Менеджер проекта",color:"#f65700",tasks:[{title:"Ведение вычитки аналитики",length:2,pause:0},{title:"Оценка емкости релиза",length:1,pause:0},{title:"Коммуникация с QA",length:2,pause:20},{title:"Сборка тегов",length:2,pause:18},{title:"Написание Release Note",length:2,pause:0},{title:"Передача тегов DevOps-инженерам TAGES",length:2,pause:0},{title:"Передача тегов DevOps-инженерам ТЕХНОНИКОЛЬ",length:2,pause:4}]},{title:"QA-инженер",color:"#2d2e83",tasks:[{title:"Запуск автотестов",length:4,pause:17},{title:"Обнаружение инцидентов",length:2,pause:0},{title:"Уточнение Аналитики",length:2,pause:0},{title:"Расследование инцидентов",length:2,pause:2},{title:"Актуализация автотестов",length:2,pause:6},{title:"Запуск автотестов",length:6,pause:0},{title:"Запуск автотестов",length:4,pause:6}]},{title:"",color:"#2d2e83",tasks:[{title:"Прослушивание вычитки аналитики",length:2,pause:0},{title:"Написание и актуализация тест-кейсов",length:6.5,pause:0},{title:"Написание и актуализация автотестов",length:6.5,pause:0},{title:"Составление тест-плана",length:2,pause:0},{title:"Подготовка тестовых данных",length:2,pause:0},{title:"Приёмочное тестирование",length:2,pause:0},{title:"Расследование инцидентов",length:2,pause:0},{title:"Коммуникация с разработкой",length:2,pause:0},{title:"Отдача инцидентов в разработку",length:2,pause:0},{title:"Побочный инцидент",length:2,pause:0},{title:"Получение правок и их ретест",length:2,pause:0},{title:"Запуск автотестов",length:2,pause:0},{title:"Расследование инцидентов",length:2,pause:0},{title:"Подготовка тестовых данных для регресса",length:2,pause:0},{title:"Ручное тестирование по тест-кейсам",length:2,pause:0},{title:"Расследование и заведение инцидентов",length:2,pause:0},{title:"Получение правок и ретест",length:2,pause:0},{title:"Smoke-тестирование на accept",length:2,pause:6},{title:"Расследование и заведение инцидентов",length:2,pause:0}]},{title:"Разработчики",color:"#662483",tasks:[{title:"Прослушивание вычитки аналитики",length:2,pause:0},{title:"Оценка задачи",length:1,pause:0},{title:"Подготовка рабочей среды",length:2,pause:0},{title:"Работа над задачей",length:6,pause:0},{title:"Публикация в story-окружение",length:2,pause:0},{title:"Передача в тестирование",length:2,pause:0},{title:"Уточнение области тестирования для QA",length:2,pause:0},{title:"Коммуникация с QA",length:2,pause:6},{title:"Исправление инцидентов",length:6,pause:0},{title:"Внесение изменений в master-ветку",length:2,pause:0},{title:"Исправление инцидентов",length:2,pause:0},{title:"Исправление инцидентов",length:4,pause:4},{title:"Исправление инцидентов",length:2,pause:8}]}]),t=(0,B.iH)(""),l=(0,B.iH)(""),n=(0,B.iH)([]),i=(0,B.iH)(!1),o=(0,B.iH)(!1),a=(0,B.iH)(-1),u=[{title:"Вычитка аналитики",length:3},{title:"Разработка",length:12},{title:"Acceptance-тестирование",length:16},{title:"Подготовка к регресс-тестированию",length:6},{title:"Regress-тестирование",length:6},{title:"Подготовка к отдаче тегов",length:6},{title:"Smoke-тестирование",length:4},{title:"Отдача тегов",length:2}],c=u.reduce(((e,t)=>e+t.length),0),r=[{start:25,length:6},{start:33,length:2},{start:39,length:4},{start:49,length:4}];let d=0;const g=F,p=document.getElementById("app"),f=p.clientWidth-32,h=$;(0,s.bv)((()=>{S(),_(),setTimeout((()=>{p.classList.add("animation")}),100),document.addEventListener("keyup",L),document.addEventListener("keydown",(e=>{["ArrowRight","ArrowLeft"].includes(e.key)&&e.preventDefault()}))}));const k=(0,s.Fl)((()=>a.value>0&&$[a.value]||null)),m=()=>{d<g.length-1&&(d++,_())},v=()=>{d>0&&(d--,_(!0))},b=e=>{const t=e.target;t&&t.scrollIntoView({behavior:"smooth",inline:"center"})},_=(e=!1)=>{const t=d,l=g[d];console.log(l),x(""),l?(l.focusTask&&(l.holdFocus?x(l.focusTask):w(l.focusTask)),l.unBlur&&T(l.unBlur),(l.scroll||0===l.scroll)&&y(l.scroll),l.instantNext&&!e&&setTimeout((()=>{t===d&&(d++,_())}),800),H(l.slide)):d--},w=e=>{t.value||(t.value=e,setTimeout((()=>{t.value=""}),1e3))},x=e=>{l.value&&l.value===e?l.value===e&&(l.value=""):l.value=e},T=e=>{n.value=e},y=e=>{"number"===typeof e?e*(f/10)!==p.scrollLeft&&p.scrollTo({left:e*(f/10),behavior:"smooth"}):document.getElementById(e)?.scrollIntoView({behavior:"smooth",inline:"center",block:"center"})},D=e=>{o.value?(x(e),y(e)):navigator.clipboard.writeText(e)},S=()=>{i.value=!!localStorage.getItem("tn-conf-presentation__dev-mode")},I=()=>{i.value?localStorage.removeItem("tn-conf-presentation__dev-mode"):localStorage.setItem("tn-conf-presentation__dev-mode","true"),i.value=!i.value},H=e=>{-1!==a.value&&a.value!==e?(a.value=99,setTimeout((()=>{a.value=e}),150)):a.value=e},L=e=>{console.log(e.key),["ArrowRight"," "].includes(e.key)?m():["ArrowLeft","Backspace"].includes(e.key)?v():"Enter"===e.key&&Y()},Y=()=>{o.value||(p.classList.add("free-mode"),o.value=!0,d=1e3,x(""),w(""),T([]),H(-1))};return{stackList:e,overallStages:u,repeatAreas:r,focusId:t,focusHoldId:l,unBlurId:n,devMode:i,overallStagesLength:c,width:f,slideId:a,currentSlide:k,freeMode:o,slides:h,setSlideId:H,toggleDevMode:I,taskClickHandler:D,unBlurItem:T,scrollTo:y,focusHoldItem:x,focusItem:w,scrollInto:b}}}),S=l(89);const I=(0,S.Z)(D,[["render",y]]);var H=I,L=l(65),Y=(0,L.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(H).use(Y).mount("#app")},3136:function(e,t,l){e.exports=l.p+"img/automatic.drawio.1ff02323.png"},4963:function(e,t,l){e.exports=l.p+"img/autotest-report.c29bc6c3.png"},9348:function(e,t,l){e.exports=l.p+"img/autotest.ac19def7.jpg"},6711:function(e,t,l){e.exports=l.p+"img/environment-technologies.850cda40.png"},5855:function(e,t,l){e.exports=l.p+"img/environmental.drawio.93f6a291.png"},2486:function(e,t,l){e.exports=l.p+"img/formula.e3787cc9.png"},3255:function(e,t,l){e.exports=l.p+"img/front-autotest-report.50755f73.png"},5752:function(e,t,l){e.exports=l.p+"img/git-lab.3edc9815.png"},5845:function(e,t,l){e.exports=l.p+"img/incident.943af387.png"},9554:function(e,t,l){e.exports=l.p+"img/parallel.drawio.b857a3a3.png"},2627:function(e,t,l){e.exports=l.p+"img/release-structure.fc8b60f9.png"},3888:function(e,t,l){e.exports=l.p+"img/sequental.drawio.e677648f.png"},6804:function(e,t,l){e.exports=l.p+"img/test-case.ec92858e.png"},3088:function(e,t,l){e.exports=l.p+"img/you-track.7dd62f22.png"},6963:function(e,t,l){e.exports=l.p+"media/autotest.edd1006e.mp4"}},t={};function l(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,n,s,i){if(!n){var o=1/0;for(r=0;r<e.length;r++){n=e[r][0],s=e[r][1],i=e[r][2];for(var a=!0,u=0;u<n.length;u++)(!1&i||o>=i)&&Object.keys(l.O).every((function(e){return l.O[e](n[u])}))?n.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(r--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[n,s,i]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.p="/tn-conf-presentation/"}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,o=n[0],a=n[1],u=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)l.o(a,s)&&(l.m[s]=a[s]);if(u)var r=u(l)}for(t&&t(n);c<o.length;c++)i=o[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(r)},n=self["webpackChunktn_conf_presentation"]=self["webpackChunktn_conf_presentation"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(1878)}));n=l.O(n)})();
//# sourceMappingURL=app.a444ca97.js.map
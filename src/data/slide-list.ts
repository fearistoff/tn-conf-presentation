export default [
  {
    title: "",
    text: "",
  },
  {
    title: "Темы, затрагиваемые в докладе",
    text: `<ul>
<li>Планирование релиза</li>
<li>Оценка задач</li>
<li>Управление ресурсами</li>
<li>Окружения и ветки для разработки</li>
<li>Виды тестирования</li>
<li>Автотесты</li>
<li>Расследование инцидентов</li>
</ul>`,
  },
  {
    title: "Практики для управления сроками",
    text: `<ul>
<li>планирование релизов</li>
<li>вычитка аналитики на новый функционал</li>
<li>оценка задач</li>
<li>вычисление объема релиза</li>
</ul>`,
    fill: true,
  },
  {
    title: "Структура релиза",
    text: `<img class="no-margin" src="${require("@/assets/images/release-structure.png")}" alt="Задача в YouTrack"/>`,
    center: true,
    fill: true,
  },
  {
    title: "Аналитика и вычитка",
    text: `<img class="separate" src="${require("@/assets/images/you-track.png")}" alt="Задача в YouTrack"/><img class="separate" src="${require("@/assets/images/git-lab.png")}" alt="МР в GitLab"/>`,
    fill: true,
  },
  {
    title: "Оценка по трем точкам",
    text: `<img class="inner-shadow" style="height: unset" src="${require("@/assets/images/formula.png")}" alt="Формула"/>
<p>E - время в часах<br>
О - оптимистичная оценка<br>
R - реалистичная оценка<br>
Р - пессимистичная оценка<br>
</p>`,
    center: true,
  },
  {
    title: "Оценка емкости релиза",
    text: `
<p class="formula">0.5Y<sub>1</sub> + 0.5Y<sub>2</sub> + X + Z ≈ время на релиз</p>
<p>где:</p>
<ul>
<li>0.5Y<sub>1</sub> - время на разработку, оцененные User Story</li>
<li>0.5Y<sub>2</sub> - тестирование реализованных задач и написание тест-кейсов</li>
<li>X - время на регресс, у каждого проекта есть минимальное значение</li>
<li>Z - константа, время на передачу тегов</li>
</li>
</ul>
<p class="formula">0.5×150 + 0.5×150 + <span class="accent">50 + 2</span></p>
<p class="formula">202 часа</p>`,
  },
  //   {
  //     title: "Управление ресурсами",
  //     text: `<img class="no-margin" src="${require("@/assets/images/balance.png")}" alt="Баланс"/>`,
  //     center: true,
  //   },
  //   {
  //     title: "Управление ресурсами",
  //     text: `<p>Оптимальный формат:</p>
  // <p class="small-margin">Analytic</p>
  // <p class="small-margin">Backend</p>
  // <p class="small-margin">Frontend</p>
  // <p class="small-margin">QA</p>
  // <p class="small-margin">Release manager</p>
  // </ul>`,
  //     center: true,
  //   },
  //   {
  //     title: "Как влияет на процесс?",
  //     text: `
  // <img class="inner-shadow" src="${require("@/assets/images/the-guy.png")}" alt="Парень">
  // <p>Маленькая задача</p>
  // </ul>`,
  //     center: true,
  //   },
  {
    title: "Окружения",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/sequental.drawio.png")}" alt="Git-flow"><p>Последовательная разработка</p>`,
    center: true,
  },
  {
    title: "Окружения",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/parallel.drawio.png")}" alt="Git-flow"><p>Параллельная разработка</p>`,
    center: true,
  },
  {
    title: "Окружения",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/environmental.drawio.png")}" alt="Git-flow"><p>Применение story-окружений</p>`,
    center: true,
  },
  {
    title: "Окружения",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/automatic.drawio.png")}" alt="Git-flow"><p>Автоматизация поддержки окружений</p>`,
    center: true,
  },
  {
    title: "Окружения",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/environment-technologies.png")}" alt="Git-flow">`,
    center: true,
  },
  {
    title: "Окружения",
    text: `<ul>
<li>Простои разработчиков → параллельная разработка</li>
<li>Одно окружение разработки → story-окружения</li>
<li>Ограниченный ресурс DevOps-инженеров → автоматизация поддержки окружений</li>
</ul>`,
    center: true,
  },
  {
    title: "Тест-кейс",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/test-case.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "Оценка емкости релиза",
    text: `
<p class="formula">0.5Y<sub>1</sub> + 0.5Y<sub>2</sub> + X + Z ≈ время на релиз</p>
<p>где:</p>
<ul>
<li>0.5Y<sub>1</sub> - время на разработку, оцененные User Story</li>
<li>0.5Y<sub>2</sub> - тестирование реализованных задач и написание тест-кейсов</li>
<li>X - время на регресс, у каждого проекта есть минимальное значение</li>
<li>Z - константа, время на передачу тегов</li>
</li>
</ul>
<p class="formula">0.5×150 + 0.5×150 + <span class="accent">50 + 2</span></p>
<p class="formula">202 часа</p>`,
  },
  {
    title: "",
    text: `<h2>Чем больше наша ИС и чем дольше она разрабатывается,<br>тем больше времени нам требуется на регрессионное тестирование.</h2>`,
    fill: true,
    center: true,
  },
  {
    title: "Видео прохождения end-to-end",
    text: `<img src="${require("@/assets/images/autotest.jpg")}" alt="Видео прохождения end-to-end">`,
    center: true,
    fill: true,
  },
  {
    title: "Видео прохождения end-to-end",
    text: `<video muted autoplay class="no-margin full-screen" poster="${require("@/assets/images/autotest.jpg")}" src="${require("@/assets/videos/autotest.mp4")}">`,
    center: true,
    fill: true,
  },
  {
    title: "Отчет автотеста бэкенда",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/autotest-report.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "Отчет автотеста фронтенда",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/front-autotest-report.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "Инцидент",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/incident.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "Выводы",
    text: `<ul>
<li>Тестирование улучшает продукт</li>
<li>Чем масштабнее ИС, тем больше времени уходит на регресс тестирование</li>
<li>Автотесты необходимы для оптимизации времени на регресс тестирование</li>
</ul>`,
  },
  {
    title: "Спасибо!",
    text: `<p>Алёна Махальникова - alena.mahalnikova@tages.ru</p>
<p>Александр Нилов - alexander.nilov@tages.ru</p>
<p>Роберт Шарифуллин - robert.sharifullin@tages.ru</p>`,
    final: true,
  },
] as ISlide[];

export interface ISlide {
  title: string;
  text: string;
  final?: true;
  fill?: true;
  center?: true;
}

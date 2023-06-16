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
    title: "User Story и аналитика",
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
    text: `<p>Из чего складывается релиз:</p>
<ul>
<li>Время разработки</li>
<li>Время тестирования</li>
<li>Время на подготовку передачи тегов</li>
</ul>
<p class="formula">0.5Y<sub>1</sub> + 0.5Y<sub>2</sub> + X + Z ≈ время на релиз</p>
<p>где:</p>
<ul>
<li>0.5Y<sub>1</sub> - время на разработку, оцененные User Story</li>
<li>0.5Y<sub>2</sub> - тестирование реализованных задач и написание тест-кейсов</li>
<li>X - время на регресс, у каждого проекта есть минимальное значение</li>
<li>Z - константа, время на передачу тегов</li>
</li>
</ul>`,
  },
  {
    title: "Оценка емкости релиза",
    text: `<p class="formula">0.5×150 + 0.5×150 + <span class="accent">50 + 2</span></p>
<p class="formula">202 человеко-часа</p>
</ul>`,
    fill: true,
    center: true,
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
    title: "",
    text: `<h2>Чем больше наша ИС и чем дольше она разрабатывается,<br>тем больше времени нам требуется на регрессионное тестирование</h2>`,
    fill: true,
    center: true,
  },
  {
    title: "Видео прохождения end-to-end",
    text: `<video muted autoplay class="no-margin enlarged" poster="${require("@/assets/images/autotest.jpg")}" src="${require("@/assets/videos/autotest.mp4")}">`,
    center: true,
    fill: true,
  },
  {
    title: "",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/autotest-report.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "",
    text: `<img class="no-margin enlarged" src="${require("@/assets/images/front-autotest-report.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "",
    text: `<img class="no-margin" src="${require("@/assets/images/smoke.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "",
    text: `<img class="no-margin" src="${require("@/assets/images/incident.png")}" alt="Тест-кейс">`,
    center: true,
    fill: true,
  },
  {
    title: "Выводы",
    text: `<ul>
<li>тестирование улучшает продукт</li>
<li>автотесты мастхэв</li>
<li>большая ИС = большой Регресс</li>
<li>автотесты помогают сократить время регресса</li>
</ul>`,
  },
  {
    title: "Спасибо!",
    text: "Вопросы?",
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

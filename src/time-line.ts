import { computed, defineComponent, onMounted, ref } from "vue";
import { CountUp } from "countUp";
import { Odometer } from "odometer_countup";

interface ITask {
  title: string;
  pause: number;
  length: number;
  top?: true;
  bottom?: true;
  hidden?: true;
}

interface IStack {
  title: string;
  color: string;
  tasks: ITask[];
}

interface IStep {
  scroll: number;
  focusTask: string;
  unBlur: string[];
  holdFocus: boolean;
  instantNext?: true;
  showHidden?: true;
  slide: number;
  count: number;
}

interface ISlide {
  title: string;
  text: string;
  final?: true;
  fill?: true;
  center?: true;
}

export default defineComponent({
  name: "TimeLine",
  setup: () => {
    const stackList = ref<IStack[]>([
      {
        title: "Аналитик/Менеджер проекта",
        color: "#f65700",
        tasks: [
          {
            title: "Ведение вычитки аналитики",
            length: 2,
            pause: 0,
          },
          {
            title: "Оценка емкости релиза",
            length: 1,
            pause: 0,
          },
          {
            title: "Сборка тегов",
            length: 2,
            hidden: true,
            pause: 12,
          },
          {
            title: "Написание Release Note",
            length: 2,
            hidden: true,
            pause: 0,
          },
          {
            title: "Передача тегов DevOps-инженерам TAGES",
            length: 2,
            hidden: true,
            pause: 0,
          },
          {
            title: "Ведение вычитки аналитики",
            length: 2,
            hidden: true,
            pause: 0,
          },
          {
            title: "Коммуникация с QA",
            length: 2,
            pause: 0,
          },
          {
            title: "Сборка тегов",
            length: 2,
            pause: 18,
          },
          {
            title: "Написание Release Note",
            length: 2,
            pause: 0,
          },
          {
            title: "Передача тегов DevOps-инженерам TAGES",
            length: 2,
            pause: 0,
          },
          {
            title: "Передача тегов DevOps-инженерам ТЕХНОНИКОЛЬ",
            length: 2,
            pause: 4,
          },
        ],
      },
      {
        title: "QA-инженер",
        color: "#2d2e83",
        tasks: [
          {
            title: "Запуск автотестов",
            length: 4,
            pause: 17,
          },
          {
            title: "Обнаружение инцидентов",
            length: 2,
            pause: 0,
          },
          {
            title: "Уточнение Аналитики",
            length: 2,
            pause: 0,
          },
          {
            title: "Расследование инцидентов",
            length: 2,
            pause: 2,
          },
          {
            title: "Актуализация автотестов",
            length: 2,
            pause: 6,
          },
          {
            title: "Запуск автотестов",
            length: 6,
            pause: 0,
          },
          {
            title: "Запуск автотестов",
            length: 4,
            pause: 6,
          },
        ],
      },
      {
        title: "",
        color: "#2d2e83",
        tasks: [
          {
            title: "Прослушивание вычитки аналитики",
            length: 2,
            pause: 0,
          },
          {
            title: "Написание и актуализация тест-кейсов",
            length: 6.5,
            pause: 0,
          },
          {
            title: "Написание и актуализация автотестов",
            length: 6.5,
            pause: 0,
          },
          {
            title: "Составление тест-плана",
            length: 2,
            pause: 0,
          },
          {
            title: "Подготовка тестовых данных",
            length: 2,
            pause: 0,
          },
          {
            title: "Приёмочное тестирование",
            length: 2,
            pause: 0,
          },
          {
            title: "Расследование инцидентов",
            length: 2,
            pause: 0,
          },
          {
            title: "Коммуникация с разработкой",
            length: 2,
            pause: 0,
          },
          {
            title: "Отдача инцидентов в разработку",
            length: 2,
            pause: 0,
          },
          {
            title: "Побочный инцидент",
            length: 2,
            pause: 0,
          },
          {
            title: "Получение правок и их ретест",
            length: 2,
            pause: 0,
          },
          {
            title: "Запуск автотестов",
            length: 2,
            pause: 0,
          },
          {
            title: "Расследование инцидентов",
            length: 2,
            pause: 0,
          },
          {
            title: "Подготовка тестовых данных для регресса",
            length: 2,
            pause: 0,
          },
          {
            title: "Ручное тестирование по тест-кейсам",
            length: 2,
            pause: 0,
          },
          {
            title: "Расследование и заведение инцидентов",
            length: 2,
            pause: 0,
          },
          {
            title: "Получение правок и ретест",
            length: 2,
            pause: 0,
          },
          {
            title: "Smoke-тестирование на accept",
            length: 2,
            pause: 6,
          },
          {
            title: "Расследование и заведение инцидентов",
            length: 2,
            pause: 0,
          },
        ],
      },
      {
        title: "Разработчики",
        color: "#662483",
        tasks: [
          {
            title: "Прослушивание вычитки аналитики",
            length: 2,
            pause: 0,
          },
          {
            title: "Оценка задачи",
            length: 1,
            pause: 0,
          },
          {
            title: "Подготовка рабочей среды",
            length: 2,
            pause: 0,
          },
          {
            title: "Подготовка контрактов",
            length: 1.5,
            pause: 0,
          },
          {
            title: "Работа над задачей",
            length: 4.5,
            pause: 0,
          },
          {
            title: "Публикация в story-окружение",
            length: 2,
            pause: 0,
          },
          {
            title: "Передача в тестирование",
            length: 2,
            pause: 0,
          },
          {
            title: "Уточнение области тестирования для QA",
            length: 2,
            pause: 0,
          },
          {
            title: "Подготовка контрактов",
            length: 1.5,
            hidden: true,
            pause: 0,
          },
          {
            title: "Работа над задачей",
            length: 4.5,
            hidden: true,
            pause: 0,
          },
          {
            title: "Коммуникация с QA",
            length: 2,
            pause: 0,
          },
          {
            title: "Исправление инцидентов",
            length: 6,
            pause: 0,
          },
          {
            title: "Внесение изменений в master-ветку",
            length: 2,
            pause: 0,
          },
          {
            title: "Исправление инцидентов",
            length: 2,
            pause: 0,
          },
          {
            title: "Исправление инцидентов",
            length: 4,
            pause: 4,
          },
          {
            title: "Исправление инцидентов",
            length: 2,
            pause: 8,
          },
        ],
      },
      {
        title: "",
        color: "#662483",
        tasks: [
          {
            title: "Коммуникация с другими стеками",
            length: 6,
            pause: 5,
          },
        ],
      },
    ]);
    const focusId = ref<string>("");
    const focusHoldId = ref<string>("");
    const unBlurId = ref<string[]>([]);
    const devMode = ref<boolean>(false);
    const freeMode = ref<boolean>(false);
    const showHiddenTasks = ref<boolean>(false);
    const slideId = ref<number>(-1);

    const overallStages = [
      {
        title: "Вычитка аналитики",
        length: 3,
      },
      {
        title: "Разработка",
        length: 12,
      },
      {
        title: "Acceptance-тестирование",
        length: 16,
      },
      {
        title: "Подготовка к регресс-тестированию",
        length: 6,
      },
      {
        title: "Regress-тестирование",
        length: 6,
      },
      {
        title: "Подготовка к отдаче тегов",
        length: 6,
      },
      {
        title: "Smoke-тестирование",
        length: 4,
      },
      {
        title: "Отдача тегов",
        length: 2,
      },
    ];
    const overallStagesLength = overallStages.reduce(
      (value, current) => value + current.length,
      0
    );
    const repeatAreas = [
      {
        start: 25,
        length: 6,
      },
      {
        start: 33,
        length: 2,
      },
      {
        start: 39,
        length: 4,
      },
      {
        start: 49,
        length: 4,
      },
    ];
    let currentStep = 0;
    const steps: IStep[] = [
      {
        slide: 0,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 10,
      },
      {
        slide: 1,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 22,
      },
      {
        slide: 2,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 38,
      },
      {
        slide: 3,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 49,
      },
      {
        slide: 4,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 21,
      },
      {
        slide: 5,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 20,
      },
      {
        slide: 6,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 33,
      },
      {
        slide: 7,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 40,
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 12,
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "task-0-0",
        holdFocus: false,
        unBlur: [],
        count: 322,
      },
      {
        slide: -1,
        scroll: 2.5,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 54,
      },
      {
        slide: -1,
        scroll: 2.5,
        focusTask: "task-3-2",
        holdFocus: true,
        unBlur: [],
        count: 23,
      },
      {
        slide: 9,
        scroll: 2.5,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 43,
      },
      {
        slide: 9,
        scroll: 3,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 12,
      },
      {
        slide: -1,
        scroll: 3,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 99,
      },
      {
        slide: -1,
        scroll: 3,
        focusTask: "",
        holdFocus: false,
        unBlur: ["task-3-3", "task-4-0"],
        count: 128,
      },
      {
        slide: -1,
        scroll: 3,
        focusTask: "task-3-3",
        holdFocus: true,
        unBlur: ["task-3-3", "task-4-0"],
        count: 362,
      },
      {
        slide: -1,
        scroll: 3,
        focusTask: "task-4-0",
        holdFocus: true,
        unBlur: ["task-3-3", "task-4-0"],
        count: 273,
      },
      {
        slide: -1,
        scroll: 3,
        focusTask: "",
        holdFocus: true,
        unBlur: [],
        instantNext: true,
        count: 122,
      },
      {
        slide: -1,
        scroll: 8,
        focusTask: "",
        holdFocus: true,
        unBlur: [],
        instantNext: true,
        count: 3,
      },
      {
        slide: -1,
        scroll: 8,
        focusTask: "",
        holdFocus: false,
        unBlur: ["task-3-6", "task-3-7"],
        count: 232,
      },
      {
        slide: -1,
        scroll: 8,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 212,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 321,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 333,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        unBlur: [
          "task-2-3",
          "task-2-4",
          "task-2-5",
          "task-2-6",
          "task-2-7",
          "task-1-0",
          "task-1-1",
          "task-1-2",
        ],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 1250,
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 1250,
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "task-2-1",
        holdFocus: true,
        unBlur: [],
        count: 1250,
      },
      {
        slide: 10,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: 11,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: 12,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: 13,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        instantNext: true,
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "task-2-5",
        holdFocus: true,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: true,
        unBlur: [],
        instantNext: true,
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: true,
        unBlur: ["task-0-6", "task-1-2", "task-2-7", "task-3-10"],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 15,
        focusTask: "",
        holdFocus: false,
        showHidden: true,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 23,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 31,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 37,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 43,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: -1,
        scroll: 50,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      {
        slide: 8,
        scroll: 50,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
      // { todo: слайд с бегущими цифрами
      //   slide: 8,
      //   scroll: 50,
      //   focusTask: "",
      //   holdFocus: false,
      //   unBlur: [],
      //   count: 1250,
      // },
      {
        slide: 15,
        scroll: 50,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
        count: 1250,
      },
    ];
    const app = document.getElementById("app")!;
    const width = app.clientWidth - 32;
    const slideList: ISlide[] = [
      {
        title: "",
        text: "",
      },
      {
        title: "Темы, затрагиваемые в докладе",
        text: `<ul>
<li>Оценка задач</li>
<li>Планирование релиза</li>
<li>Управление ресурсами</li>
<li>Окружения и ветки для разработки</li>
<li>Виды тестирования</li>
<li>Расследование инцидентов</li>
<li>Автотесты</li>
</ul>`,
      },
      {
        title: "Аналитика и вычитка",
        text: `<img class="separate" src="${require("@/assets/images/you-track.png")}" alt="Задача в YouTrack"/><img class="separate" src="${require("@/assets/images/git-lab.png")}" alt="МР в GitLab"/>`,
        fill: true,
      },
      {
        title: "User Story и аналитика",
        text: `<img src="${require("@/assets/images/formula.png")}" alt="Формула"/>`,
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
<p class="formula">0.5Y<sub>1</sub>+0.5Y<sub>2</sub>+X+Z=время на релиз</p>
<p>где:</p>
<ul>
<li>0.5Y<sub>1</sub> - время на разработку, оцененные User Story;</li>
<li>0.5Y<sub>2</sub> - тестирование реализованных задач и написание тест-кейса;</li>
<li>X - время на регресс, у каждого проекта есть минимальное значение;</li>
<li>Z - константа, время на передачу тегов.</li>
</li>
</ul>`,
      },
      {
        title: "Оценка емкости релиза",
        text: `<p class="formula">0.5*150+0.5*150+<span class="accent">50+2</span></p>
<p class="formula">202 человеко-часа</p>
</ul>`,
        fill: true,
        center: true,
      },
      {
        title: "Управление ресурсами",
        text: `<img src="${require("@/assets/images/balance.png")}" alt="Баланс"/>`,
        center: true,
      },
      {
        title: "Управление ресурсами",
        text: `<p>Оптимальный формат:</p>
<p class="small-margin">Analytic</p>
<p class="small-margin">Backend</p>
<p class="small-margin">Frontend</p>
<p class="small-margin">QA</p>
<p class="small-margin">Release manager</p>
</ul>`,
        center: true,
      },
      {
        title: "Как влияет на процесс?",
        text: `
<img class="inner-shadow" src="${require("@/assets/images/the-guy.png")}" alt="Парень">
<p>Маленькая задача</p>
</ul>`,
        center: true,
      },
      {
        title: "Git-flow",
        text: `<img src="${require("@/assets/images/git-flow.png")}" alt="Git-flow">`,
        center: true,
      },
      {
        title: "Тест-кейс",
        text: `<img class="fill-img" src="${require("@/assets/images/test-case.png")}" alt="Тест-кейс">`,
        center: true,
        fill: true,
      },
      {
        title: "Чек-лист",
        text: `<img class="fill-img" src="${require("@/assets/images/check-list.png")}" alt="Чек-лист">`,
        center: true,
        fill: true,
      },
      {
        title: "Автотесты",
        text: `<img class="fill-img" src="${require("@/assets/images/autotest-code.png")}" alt="Код Автотестов">`,
        center: true,
        fill: true,
      },
      {
        title: "Автотесты",
        text: `<img class="fill-width-img" src="${require("@/assets/images/autotest-report.png")}" alt="Отчет Автотестов">`,
        center: true,
        fill: true,
      },
      {
        title: "Спасибо!",
        text: "Вопросы?",
        final: true,
      },
    ];
    let counterElement: CountUp | null = null;

    onMounted(() => {
      getDevMode();
      processStep();
      setTimeout(() => {
        app.classList.add("animation");
      }, 100);
      document.addEventListener("keyup", keyUpEventHandler);
      counterElement = new CountUp("counter", 0, {
        plugin: new Odometer({ duration: 1, lastDigitDelay: 0 }),
        duration: 3.0,
        startVal: 0,
      });
      counterElement.start();
    });

    const currentSlide = computed<ISlide | null>(() =>
      slideId.value > 0 ? slideList[slideId.value] || null : null
    );

    const next = () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        processStep();
      }
    };

    const back = () => {
      if (currentStep > 0) {
        currentStep--;
        processStep(true);
      }
    };

    const scrollInto = (event: PointerEvent) => {
      const element = event.target as HTMLElement;
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    };

    const processStep = (back = false) => {
      const tempStep = currentStep;
      const step = steps[currentStep];
      console.log(step);
      focusHoldItem("");
      if (step) {
        if (step.focusTask) {
          if (step.holdFocus) {
            focusHoldItem(step.focusTask);
          } else {
            focusItem(step.focusTask);
          }
        }
        if (step.unBlur) {
          unBlurItem(step.unBlur);
        }
        if (step.scroll || step.scroll === 0) {
          scrollTo(step.scroll);
        }
        if (step.instantNext && !back) {
          setTimeout(() => {
            if (tempStep === currentStep) {
              currentStep++;
              processStep();
            }
          }, 800);
        }
        updateCounter(step.count);
        setSlideId(step.slide);
        showHiddenTasks.value = !!step.showHidden;
      } else {
        currentStep--;
      }
    };

    const focusItem = (id: string) => {
      if (!focusId.value) {
        focusId.value = id;
        setTimeout(() => {
          focusId.value = "";
        }, 1000);
      }
    };

    const focusHoldItem = (id: string) => {
      if (!focusHoldId.value || focusHoldId.value !== id) {
        focusHoldId.value = id;
      } else if (focusHoldId.value === id) {
        focusHoldId.value = "";
      }
    };

    const unBlurItem = (idList: string[]) => {
      unBlurId.value = idList;
    };

    const scrollTo = (position: number | string) => {
      if (typeof position === "number") {
        if (position * (width / 10) !== app.scrollLeft) {
          app.scrollTo({ left: position * (width / 10), behavior: "smooth" });
        }
      } else {
        document.getElementById(position)?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      }
    };

    const taskClickHandler = (id: string) => {
      if (!freeMode.value) {
        navigator.clipboard.writeText(id);
      } else {
        focusHoldItem(id);
        scrollTo(id);
      }
    };

    const getDevMode = () => {
      devMode.value = !!localStorage.getItem("tn-conf-presentation__dev-mode");
    };

    const toggleDevMode = () => {
      if (devMode.value) {
        localStorage.removeItem("tn-conf-presentation__dev-mode");
      } else {
        localStorage.setItem("tn-conf-presentation__dev-mode", "true");
      }

      devMode.value = !devMode.value;
    };

    const setSlideId = (id: number) => {
      if (slideId.value !== -1 && slideId.value !== id) {
        slideId.value = 99;
        setTimeout(() => {
          slideId.value = id;
        }, 150);
      } else {
        slideId.value = id;
      }
    };

    const keyUpEventHandler = (event: KeyboardEvent) => {
      console.log(event.key);
      if (["ArrowRight", " "].includes(event.key)) {
        next();
      } else if (["ArrowLeft", "Backspace"].includes(event.key)) {
        back();
      } else if (event.key === "Enter") {
        enableFreeMode();
      }
    };

    const updateCounter = (number: number) => {
      counterElement?.update(number);
    };

    const enableFreeMode = () => {
      if (!freeMode.value) {
        app.style.overflow = "auto";
        freeMode.value = true;
        currentStep = 1000;
        focusHoldItem("");
        focusItem("");
        unBlurItem([]);
        setSlideId(-1);
      }
    };

    return {
      stackList,
      overallStages,
      repeatAreas,
      focusId,
      focusHoldId,
      unBlurId,
      devMode,
      overallStagesLength,
      width,
      slideId,
      currentSlide,
      freeMode,
      slideList,
      showHiddenTasks,
      setSlideId,
      toggleDevMode,
      taskClickHandler,
      unBlurItem,
      scrollTo,
      focusHoldItem,
      focusItem,
      scrollInto,
    };
  },
});

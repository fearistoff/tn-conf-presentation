import { computed, defineComponent, onMounted, ref } from "vue";

interface ITask {
  title: string;
  pause: number;
  length: number;
  top?: true;
  bottom?: true;
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
  slide: number;
}

interface ISlide {
  title: string;
  text: string;
  final?: true;
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
            title: "Оценка ёмкости релиза",
            length: 1,
            pause: 0,
          },
          {
            title: "Коммуникация с QA",
            length: 2,
            pause: 20,
          },
          {
            title: "Сборка тегов",
            length: 2,
            pause: 18,
          },
          {
            title: "Написание release note",
            length: 2,
            pause: 0,
          },
          {
            title: "Передача тегов DevOps-инженерам Tages",
            length: 2,
            pause: 0,
          },
          {
            title: "Передача тегов DevOps-инженерам ТехноНиколь",
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
            title: "Коммуникация с QA",
            length: 2,
            pause: 6,
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
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: -1,
        scroll: 0,
        focusTask: "task-2-1",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: -1,
        scroll: 4,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: -1,
        scroll: 4,
        focusTask: "task-3-4",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: -1,
        scroll: 8,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: -1,
        scroll: 8,
        focusTask: "",
        holdFocus: false,
        unBlur: ["task-3-5", "task-3-6"],
      },
      {
        slide: -1,
        scroll: 12,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: 1,
        scroll: 12,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: -1,
        scroll: 57,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
      },
      {
        slide: 2,
        scroll: 57,
        focusTask: "",
        holdFocus: false,
        unBlur: [],
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
        title: "<span class='accent'>Какой-то</span> заголовок",
        text: "И какой-то текст, которого много я руками не напишу...",
      },
      {
        title: "Спасибо!",
        text: "Вопросы?",
        final: true,
      },
    ];

    onMounted(() => {
      getDevMode();
      processStep();
      setTimeout(() => {
        app.classList.add("animation");
      }, 100);
      document.addEventListener("keyup", keyUpEventHandler);
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
        processStep();
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

    const processStep = () => {
      const step = steps[currentStep];
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
      setSlideId(step.slide);
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
      if (devMode.value) {
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
      slideId.value = id;
    };

    const keyUpEventHandler = (event: KeyboardEvent) => {
      console.log(event.key);
      if (["ArrowRight", " "].includes(event.key)) {
        next();
      } else if (["ArrowLeft", "Backspace"].includes(event.key)) {
        back();
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

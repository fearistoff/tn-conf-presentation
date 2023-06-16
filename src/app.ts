import { computed, defineComponent, onMounted, ref } from "vue";
import { CountUp } from "countUp";
import { Odometer } from "odometer_countup";
import stepList, { IStep } from "./data/step-list";
import slideList, { ISlide } from "@/data/slide-list";

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
            title: "Работа над задачей",
            length: 6,
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
    ]);
    const focusId = ref<string>("");
    const focusHoldId = ref<string>("");
    const unBlurId = ref<string[]>([]);
    const devMode = ref<boolean>(false);
    const freeMode = ref<boolean>(false);
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
    const steps: IStep[] = stepList;
    const app = document.getElementById("app")!;
    const width = app.clientWidth - 32;
    const slides: ISlide[] = slideList;
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
        app.classList.add("free-mode");
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
      slides,
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

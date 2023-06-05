import { defineComponent, onMounted, ref } from "vue";

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
  scroll?: number;
  focusTask?: string;
  focusStack?: string;
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
    const scroll = ref<number>(0);
    const focusItem = ref<{ stack?: string; task?: string }>({});
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
        length: 4,
      },
    ];

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

    let currentStep = 1;

    const steps: IStep[] = [
      {
        scroll: 100,
      },
    ];

    const app = document.getElementById("app")!;
    const width = app.clientWidth - 32;

    onMounted(() => {
      document.getElementById("app")?.addEventListener("scroll", scrollHandler);
    });

    const next = () => {
      if (currentStep < steps.length) {
        currentStep++;
        processStep(steps[currentStep - 1]);
      }
    };

    const back = () => {
      if (currentStep > 1) {
        currentStep--;
      }
    };

    const makeScroll = (left: number) => {
      left = (left / 100) * width;
      app.scrollTo({ left, behavior: "smooth" });
    };

    const scrollHandler = () => {
      scroll.value = app.scrollLeft;
      app.style.backgroundPositionX = "-" + scroll.value + "px";
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

    const processStep = (step: IStep) => {
      if (step.focusTask) {
        focusItem.value.task = step.focusTask;
      }
      if (step.focusStack) {
        focusItem.value.stack = step.focusStack;
      }
      if (step.scroll) {
        makeScroll(step.scroll);
      }
    };

    const test = () => {
      if (stackList.value.length > 5) {
        stackList.value.splice(-1, 1);
      } else {
        stackList.value.push({
          title: "",
          color: "#662483",
          tasks: [
            {
              title: "Ответы на вопросы по следующим сторям Аналитика",
              length: 350,
              pause: 20,
            },
          ],
        });
      }
    };

    return {
      stackList,
      focusItem,
      overallStages,
      repeatAreas,
      test,
      scrollInto,
      back,
      next,
    };
  },
});

<template>
  <div
    class="lines"
    :style="{
      width: `calc((100% - 35px) * ${overallStagesLength / 10})`,
      backgroundSize: width / 10 + 'px',
    }"
  ></div>
  <img class="logo" src="./assets/images/tages-logo.svg" alt="tages logo" />
  <transition-group name="stack-title">
    <template v-for="(stack, stackIndex) in stackList" :key="stackIndex">
      <h4 v-if="stack.title" class="stack-title">{{ stack.title }}</h4>
      <div
        class="stack-task-list-container"
        :class="{ 'stack-task-list-container_no-title': !stack.title }"
      >
        <div
          class="task-container"
          v-for="(task, taskIndex) in stack.tasks"
          :id="`task-${stackIndex}-${taskIndex}`"
          :key="taskIndex"
          :style="{
            '--background': stack.color + '50',
            '--border': stack.color,
            marginLeft: task.pause * 10 + '%',
            flex: `0 0 ${task.length * 10}%`,
          }"
          :class="{
            'task-container_top': task.top,
            'task-container_bottom': task.bottom,
            'task-container_focus':
              `task-${stackIndex}-${taskIndex}` === focusId,
            'task-container_focus-hold': focusHoldId.includes(
              `task-${stackIndex}-${taskIndex}`
            ),
            'task-container_blur':
              unBlurId.length &&
              !unBlurId.includes(`task-${stackIndex}-${taskIndex}`),
          }"
          @click="taskClickHandler(`task-${stackIndex}-${taskIndex}`)"
        >
          <p class="task-title">{{ task.title }}</p>
        </div>
      </div>
    </template>
  </transition-group>
  <div
    v-for="os in overallStages"
    :key="os.title"
    class="overall-stage-container"
    :style="{
      width: os.length * 10 + '%',
    }"
  >
    <p class="overall-stage" @dblclick="toggleDevMode">
      {{ os.title }}
    </p>
  </div>
  <br />
  <div v-for="index in overallStagesLength" :key="index" class="step">
    <p class="overall-stage overall-stage_number">
      {{ index }}
    </p>
  </div>
  <div
    v-for="repeat in repeatAreas"
    :key="repeat.start"
    :style="{
      left: `calc((100% - 32px) / 100 * ${repeat.start * 10} + 16px)`,
      width: `calc((100% - 32px) / 100 * ${repeat.length * 10})`,
    }"
    class="repeat-area"
  ></div>
  <transition name="fade">
    <div v-if="slideId === 0" class="title-slide">
      <p class="title-slide__text title-slide__text_speakers">
        Спикеры:
        <span class="accent">Алёна Махальникова</span>,<br /><span
          class="accent"
          >Александр Нилов</span
        >,<br /><span class="accent">Роберт Шарифуллин</span>
      </p>
      <h1 class="title-slide__title">Процесс Delivery</h1>
      <p class="title-slide__text">
        Закулисье разработки или как готовятся релизы
      </p>
    </div>
  </transition>
  <transition name="fade">
    <div
      v-if="currentSlide"
      class="slide-container"
      :class="{ 'slide-container_final': currentSlide.final }"
    >
      <h1 v-html="currentSlide.title"></h1>
      <p v-html="currentSlide.text"></p>
    </div>
  </transition>
</template>

<script lang="ts" src="./time-line.ts"></script>

<style src="./app.css" lang="css"></style>

<style lang="css" src="./time-line.css"></style>

<style lang="css" src="./slides.css"></style>

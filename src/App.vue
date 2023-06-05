<template>
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
          }"
          @click="scrollInto"
        >
          <p class="task-title">{{ task.title }}</p>
        </div>
      </div>
    </template>
    <div
      v-for="os in overallStages"
      :key="os.title"
      class="overall-stage-container"
      :style="{
        width: os.length * 10 + '%',
      }"
    >
      <p class="overall-stage">
        {{ os.title }}
      </p>
    </div>
  </transition-group>
  <div
    v-for="repeat in repeatAreas"
    :key="repeat.start"
    :style="{
      left: `calc((100% - 32px) / 100 * ${repeat.start * 10} + 16px)`,
      width: `calc((100% - 32px) / 100 * ${repeat.length * 10})`,
    }"
    class="repeat-area"
  ></div>
  <div class="button-panel">
    <button @click="back">⬅️</button>
    <button @click="next">➡️</button>
    <button @click="test">test</button>
  </div>
</template>

<script lang="ts" src="./time-line.ts"></script>

<style src="./app.css" lang="css"></style>

<style lang="css" src="./time-line.css"></style>

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TimeLine from "@/views/timeline/time-line.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: TimeLine,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Services from "@/views/Services.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "about",
    component: About,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contact-us",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

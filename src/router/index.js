import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Services from "@/pages/Services.vue";
import News from "@/pages/News.vue";
//import Contact from "@/pages/Contact.vue";

const routes = [

  { path: "/", 
    name: "Home", 
    component: Home, 
    meta: { breadcrumb: "Home" }
  },


  { path: "/about", 
    name: "About", 
    component: About, 
    meta: { breadcrumb: "About us" }
  },

  
  { path: "/services", 
    name: "Services", 
    component: Services 
  },



  { path: "/news", 
    name: "News", 
    component: News 
  },

  //{ path: "/contact", 
  //  name: "Contact", 
  //  component: Contact 
  //},


];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

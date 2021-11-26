const routes = [
  {
    path: "/",
    component: () => import("pages/loading.vue")
  },
  {
    path: "/mapview",
    component: () => import("pages/mapview.vue")
  },
  {
    path: "/listview",
    component: () => import("pages/listview.vue")
  },
  {
    path: "/report",
    component: () => import("pages/report.vue")
  },
  {
    path: "/trend",
    component: () => import("pages/trend.vue")
  },
  {
    path: "/document",
    component: () => import("pages/document.vue")
  },
  {
    path: "/detail",
    component: () => import("pages/detail.vue")
  },
  {
    path: "/test",
    component: () => import("pages/test.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

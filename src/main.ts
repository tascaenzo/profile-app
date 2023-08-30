import { Router } from "@vaadin/router";
import "@/i18n";

import "./components/layout";
import "./pages/profile";

export function configureRoutes() {
  const outlet = document.getElementById("outlet");
  const router = new Router(outlet);
  router.setRoutes([
    {
      path: "/",
      component: "layout-component",
      children: [
        {
          path: "/",
          component: "profile-page",
        },
        {
          path: "/contact",
          component: "profile-page",
        },
      ],
    },
  ]);
}

configureRoutes();

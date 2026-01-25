import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createRouter,
  createHashHistory,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();

// the content is basically static, but we choose short cache times to see the mechanism in action
const router = createRouter({
  routeTree,
  history: hashHistory,
  defaultPreload: "intent",
  defaultStaleTime: 10 * 1000,
  defaultPreloadStaleTime: 30 * 1000,
  defaultGcTime: 60 * 1000,
  defaultPreloadGcTime: 60 * 1000,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

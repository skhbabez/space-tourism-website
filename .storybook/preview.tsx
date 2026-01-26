import type { Decorator, Preview } from "@storybook/react-vite";
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import "../src/index.css";

export const RouterDecorator: Decorator = (Story) => {
  const rootRoute = createRootRoute({
    component: () => <Story />,
  });

  const routeTree = rootRoute;

  const router = createRouter({
    routeTree,
  });

  return <RouterProvider router={router} />;
};

const frontendMentorViewports = {
  mobile: {
    name: "mobile",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  tablet: {
    name: "tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  desktop: {
    name: "desktop",
    styles: {
      width: "1440px",
      height: "1280px",
    },
  },
};
const preview: Preview = {
  decorators: [RouterDecorator],
  parameters: {
    viewport: {
      options: {
        ...frontendMentorViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default preview;

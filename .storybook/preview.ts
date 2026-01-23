import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
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

export default preview;

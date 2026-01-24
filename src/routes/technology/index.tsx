import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology/")({
  beforeLoad: () => {
    throw Route.redirect({
      to: "/technology/$technologyId",
      params: { technologyId: "vehicle" },
    });
  },
});

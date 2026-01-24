import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crew/")({
  beforeLoad: () => {
    throw Route.redirect({
      to: "/crew/$crewId",
      params: { crewId: "commander" },
    });
  },
});

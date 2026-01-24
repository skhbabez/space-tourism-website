import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destination/")({
  beforeLoad: () => {
    throw Route.redirect({
      to: "/destination/$destinationId",
      params: { destinationId: "moon" },
    });
  },
});

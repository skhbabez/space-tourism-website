import clsx from "clsx";
import { useId, type ComponentPropsWithRef } from "react";
import { Link, useLoaderData } from "@tanstack/react-router";

const CrewPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const crews = useLoaderData({ from: "/crew" });
  const crew = useLoaderData({ from: "/crew/$crewId" });
  const currentRouteId = crew.id;
  const tabId = useId();
  return <></>;
};

export default CrewPage;

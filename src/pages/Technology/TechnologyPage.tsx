import clsx from "clsx";
import { type ComponentPropsWithRef } from "react";
import { useLoaderData } from "@tanstack/react-router";

const TechnologyPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const technologies = useLoaderData({ from: "/technology" });
  const technology = useLoaderData({ from: "/technology/$technologyId" });
  const currentRouteId = technology.id;
  return (
    <>
      <div className={clsx("", className)} {...props}></div>
    </>
  );
};

export default TechnologyPage;

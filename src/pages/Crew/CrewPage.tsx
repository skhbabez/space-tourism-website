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
  return (
    <>
      <div className={clsx("p-6 md:p-10 xl:p-12 h-full", className)} {...props}>
        <h1 className="text-6-mobile md:text-5-tablet xl:text-5-desktop font-barlow-condensed uppercase text-white text-center md:text-start">
          <span className="font-bold text-white/25 pe-6">02</span>meet your crew
        </h1>
      </div>
    </>
  );
};

export default CrewPage;

import clsx from "clsx";
import { type ComponentPropsWithRef } from "react";
import { useLoaderData } from "@tanstack/react-router";
import {
  DotsPagination,
  DotsPaginatonLink,
} from "../../components/DotsPagination/DotsPagination";

const CrewPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const crews = useLoaderData({ from: "/crew" });
  const crew = useLoaderData({ from: "/crew/$crewId" });
  const currentRouteId = crew.id;
  return (
    <>
      <div className={clsx("", className)} {...props}>
        <div className="flex flex-col items-center xl:items-start gap-19.5">
          <div className="text-center xl:text-left">
            <hgroup>
              <p className="uppercase text-4-mobile md:text-4-tablet xl:text-4-desktop text-white opacity-50 font-bellefair">
                {crew.role}
              </p>
              <h1 className="uppercase text-3-mobile md:text-3-tablet xl:text-3-desktop text-white font-bellefair mt-2 md:mt-4">
                {crew.name}
              </h1>
            </hgroup>
            <p className="text-9-mobile md:text-9-tablet xl:text-9-desktop text-blue-300 font-barlow mt-6">
              {crew.bio}
            </p>
          </div>
          <DotsPagination>
            {crews.map((crew) => (
              <DotsPaginatonLink
                key={crew.id}
                selected={currentRouteId == crew.id}
                to="/crew/$crewId"
                params={{ crewId: crew.id }}
              />
            ))}
          </DotsPagination>
        </div>
      </div>
    </>
  );
};

export default CrewPage;

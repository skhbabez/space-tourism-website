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
        <div className="flex flex-col xl:flex-row max-xl:items-center gap-8">
          <div className="flex flex-col xl:flex-1  items-center xl:items-start justify-between max-xl:max-w-lg min-h-79.75 md:min-h-76.25 xl:h-183.5 md:max-xl:gap-6  pt-10 xl:pt-0">
            <div className="flex flex-col xl:flex-1  xl:justify-center gap-6  text-center xl:text-left">
              <hgroup>
                <p className="uppercase text-4-mobile md:text-4-tablet xl:text-4-desktop text-white opacity-50 font-bellefair">
                  {crew.role}
                </p>
                <h1 className="uppercase text-3-mobile md:text-3-tablet xl:text-3-desktop text-white font-bellefair mt-2 md:mt-4">
                  {crew.name}
                </h1>
              </hgroup>
              <p className="text-9-mobile md:text-9-tablet xl:text-9-desktop text-blue-300 font-barlow">
                {crew.bio}
              </p>
            </div>
            <DotsPagination className="xl:pb-12">
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
          <div className="xl:flex-1 px-7 xl:px-0 pt-1.25 md:pt-4 xl:pt-0 xl:flex xl:items-center">
            <img src={crew.images.webp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewPage;

import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import DisplayButton from "../components/DisplayButton/DisplayButton";

const Home = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  return (
    <section
      className={clsx("px-6 py-6 md:py-32 md:px-10", className)}
      {...props}
    >
      <div className="md:h-full md:flex md:items-end">
        <div className="flex flex-col items-center gap-29.75 w-full md:gap-16.5 xl:flex-row xl:justify-between xl:max-w-277.5 xl:mx-auto">
          <div className="flex flex-col gap-6 text-center max-w-lg xl:text-start">
            <hgroup className="contents">
              <p className="uppercase text-6-mobile md:text-5-desktop text-blue-300 font-barlow-condensed">
                so, you want to travel to
              </p>
              <h1 className="text-1-mobile md:text-1-desktop text-white font-bellefair uppercase">
                space
              </h1>
            </hgroup>
            <p className="text-9-mobile md:text-9-tablet xl:text-9-desktop text-blue-300 font-barlow">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <DisplayButton to="/destination">explore</DisplayButton>
        </div>
      </div>
    </section>
  );
};
export default Home;

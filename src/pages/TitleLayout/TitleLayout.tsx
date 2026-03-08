import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

interface TitleLayoutProps extends ComponentPropsWithRef<"div"> {
  count: string;
  title: string;
}
const TitleLayout = ({
  count,
  title,
  children,
  className,
  ...props
}: TitleLayoutProps) => {
  return (
    <div className={clsx("p-6 md:p-10 xl:p-12 h-full", className)} {...props}>
      <div className="max-w-277.5 mx-auto space-y-6 md:max-w-172 xl:max-w-277.5 h-full flex flex-col">
        <h1 className="text-6-mobile md:text-5-tablet xl:text-5-desktop font-barlow-condensed uppercase text-white text-center md:text-start">
          <span className="font-bold text-white/25 pe-6">{count}</span>
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
export default TitleLayout;

import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import { createLink } from "@tanstack/react-router";

const DisplayButton = createLink(
  ({ className, children, ...props }: ComponentPropsWithRef<"a">) => {
    return (
      <a
        className={clsx(
          "flex items-center justify-center bg-white rounded-full min-w-36 md:min-w-68 aspect-square font-bellefair uppercase text-4-mobile md:text-4-desktop",
          "outline-88 outline-white/0 hover:outline-white/10  focus-visible:outline-white/10 transition-colors duration-700 motion-reduce:transition-none",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

export default DisplayButton;

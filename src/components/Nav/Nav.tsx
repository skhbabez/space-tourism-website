import { Link, useMatchRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useId, type ComponentPropsWithRef } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

const links = [
  { to: "/", name: "home" },
  { to: "/destination", name: "destination" },
  { to: "/crew", name: "crew" },
  { to: "/technology", name: "technology" },
];

const Nav = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"nav">, "children">) => {
  const matchRoute = useMatchRoute();
  const popoverId = useId();
  return (
    <nav
      className={clsx(
        "p-6 md:p-0 flex justify-between items-center w-full font-barlow-condensed",
        className,
      )}
      {...props}
    >
      <img
        width={40}
        height={40}
        src={logo}
        alt=""
        className="aspect-square w-10 md:w-12 md:mx-10 xl:mx-16"
      />
      <ol
        start={0}
        className="nav-list-style hidden md:flex justify-end gap-12 pe-10 xl:pe-16 backdrop-blur-xs bg-white/5 max-w-184 w-full"
      >
        {links.map(({ to, name }) => (
          <li className="relative py-[2.40625rem]" key={name}>
            <Link
              className="ps-3 uppercase text-8 text-white tracking-[0.125rem] peer"
              to={to}
            >
              {name}
            </Link>
            <span
              className={clsx(
                "hidden absolute left-0 bottom-0 w-full h-0.75 bg-white",
                matchRoute({ to: to, fuzzy: true })
                  ? "inline"
                  : "peer-hover:inline peer-hover:opacity-50",
              )}
            ></span>
          </li>
        ))}
      </ol>
      <button
        className="md:hidden"
        popoverTarget={popoverId}
        popoverTargetAction="show"
      >
        <FaBars size={28} className="text-blue-300" />
      </button>
      <div
        popover="auto"
        id={popoverId}
        className={clsx(
          "md:hidden bg-blue-900/15 left-auto fixed right-0 mx-0 backdrop-blur-xs ps-8 h-screen min-w-63.5  space-y-12",
          "starting:[&:popover-open]:translate-x-full [&:popover-open]:translate-x-0 translate-x-full",
          "motion-reduce:transition-none transition-discrete transition-[display,translate] duration-300 ease-in-out",
        )}
      >
        <div>
          <div className="py-8 px-6 text-white text-end">
            <button
              type="button"
              popoverTarget={popoverId}
              popoverTargetAction="hide"
            >
              <FaX size={25} className="text-blue-300" />
            </button>
          </div>
          <ol start={0} className="nav-list-style space-y-8">
            {links.map(({ to, name }) => (
              <li className="relative" key={name}>
                <Link
                  className="ps-3 uppercase text-8 text-white tracking-[0.125rem] peer"
                  to={to}
                >
                  {name}
                </Link>
                <span
                  className={clsx(
                    "hidden absolute right-0 h-full w-0.75 bg-white",
                    matchRoute({ to: to, fuzzy: true })
                      ? "inline"
                      : "peer-hover:inline peer-hover:opacity-50",
                  )}
                ></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export { Nav };

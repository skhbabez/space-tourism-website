import { Link, useMatchRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useId, type ComponentPropsWithRef } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

//refactor this
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
          <li
            className="relative py-[2.40625rem] has-focus-visible:bg-white/10 transition-colors duration-300 ease-in-out motion-reduce:transition-none"
            key={name}
          >
            <Link
              className="outline-none ps-3 uppercase text-8 text-white tracking-[0.125rem] peer"
              to={to}
            >
              {name}
            </Link>
            <span
              className={clsx(
                "absolute left-0 bottom-0 w-full h-0.75 bg-white opacity-0 transition-opacity transition-discrete duration-300 ease-in-out motion-reduce:transition-none",
                matchRoute({ to: to, fuzzy: true })
                  ? "opacity-100"
                  : "peer-focus-visible:opacity-50 peer-hover:opacity-50",
              )}
            ></span>
          </li>
        ))}
      </ol>
      <div
        popover="auto"
        id={popoverId}
        className={clsx(
          "md:hidden bg-blue-900/15 left-auto fixed right-0 mx-0 backdrop-blur-xs ps-8 h-screen min-w-63.5 space-y-12 peer",
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
              <li
                className="relative has-focus-visible:bg-white/10 transition-colors duration-300 ease-in-out motion-reduce:transition-none"
                key={name}
              >
                <Link
                  className="outline-none ps-3 uppercase text-8 text-white tracking-[0.125rem] peer"
                  to={to}
                >
                  {name}
                </Link>
                <span
                  className={clsx(
                    "absolute right-0 h-full w-0.75 bg-white opacity-0 transition-opacity duration-300 ease-in-out motion-reduce:transition-none",
                    matchRoute({ to: to, fuzzy: true })
                      ? "opacity-100"
                      : "peer-focus-visible:opacity-50  peer-hover:opacity-50",
                  )}
                ></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <button
        className="md:hidden peer-[:popover-open]:hidden"
        popoverTarget={popoverId}
        popoverTargetAction="show"
      >
        <FaBars size={28} className="text-blue-300" />
      </button>
    </nav>
  );
};

export { Nav };

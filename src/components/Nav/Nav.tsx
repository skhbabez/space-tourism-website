// import { Link } from "@tanstack/react-router";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="bg-blue-900 backdrop-blur-xs ps-8 h-screen min-w-63.5 font-barlow-condensed space-y-12">
          <div className="py-8 px-6 text-white text-end">
            <button>close</button>
          </div>
          <ol start={0} className="nav-list-style space-y-8">
            <li>
              <a
                className="uppercase text-8 text-white ml-3 tracking-[2px]"
                href=""
              >
                destination
              </a>
            </li>
            <li>
              <a
                className="uppercase text-8 text-white ml-3 tracking-[2px]"
                href=""
              >
                destination
              </a>
            </li>
            <li>
              <a
                className="uppercase text-8 text-white ml-3 tracking-[2px]"
                href=""
              >
                destination
              </a>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export { Nav };

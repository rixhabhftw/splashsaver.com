import { FaGithub, FaDiscord } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SECTIONS } from "./sections";
import Link from "next/link";

export const Footer = () => {
  const iconClassNameStyles =
    "text-2xl duration-300 mr-3 transform hover:scale-110 text-gray-700 hover:text-slate-900";

  return (
    <footer className="flex h-full justify-center flex-col mt-36">
      <div className="grid grid-cols-2 gap-6 min-h-64 sm:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-2">
          <h2 className="font-bold text-xl text-slate-900">splashsaver.com</h2>
          <p className="text-sm mt-1 text-gray-400 max-w-[15rem]">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-gray-500">splashsaver.com</span>.
            All rights reserved. Need support?{" "}
            <Link
              className="duration-300 font-semibold hover:text-gray-500"
              href="mailto:hi@notnick.io"
            >
              hi@notnick.io
            </Link>
          </p>
          <div className="flex items-center mt-4">
            <Link
              className={`${iconClassNameStyles} outline-none focus:ring-4 ring-offset-2 ring-slate-300 rounded`}
              href="https://github.com/splashsaver/splashsaver.com"
              target="_blank"
            >
              <FaGithub />
            </Link>{" "}
            <Link
              className={`${iconClassNameStyles} outline-none focus:ring-4 ring-offset-2 ring-slate-300 rounded`}
              href="https://discord.gg/6SwY4Vp9KU"
              target="_blank"
            >
              <FaDiscord className="text-2xl" />
            </Link>
          </div>
        </div>
        {SECTIONS.map((section) => (
          <div key={section.id} className="flex flex-col col-span-1 space-y-2">
            <h3 className="font-bold text-gray-500 uppercase tracking-tight text-sm">
              {section.title}
            </h3>
            {section.links &&
              section.links.map((link) => (
                <Link
                  key={link.id}
                  className={`${
                    link.active
                      ? "text-gray-400 hover:text-slate-900 focus:ring-4 ring-offset-2 ring-slate-300 rounded"
                      : "text-gray-300 pointer-events-none select-none"
                  } text-sm duration-300 outline-none flex items-center`}
                  href={link.link}
                  target={link.external ? "_blank" : "_self"}
                >
                  {link.title}{" "}
                  {link.external && link.active ? (
                    <FiExternalLink className="ml-1 text-base" />
                  ) : null}
                </Link>
              ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

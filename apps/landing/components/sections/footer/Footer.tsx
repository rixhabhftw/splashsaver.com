import { FaGithub, FaDiscord } from "react-icons/fa";
import { SECTIONS } from "./sections";
import Link from "next/link";

export const Footer = () => {
  const iconClassNameStyles =
    "text-2xl duration-300 text-gray-700 mr-3 transform hover:scale-110 hover:text-slate-900";

  return (
    <footer className="flex h-full justify-center flex-col mt-36">
      <div className="grid grid-cols-2 gap-6 min-h-64 sm:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-2">
          <h2 className="font-bold text-xl text-slate-900">splashsaver.com</h2>
          <p className="text-sm mt-1 text-gray-400">
            Making managing your startup team easy.
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
              href=""
              target="_blank"
            >
              <FaDiscord className="text-2xl" />
            </Link>
          </div>
        </div>
        {SECTIONS.map((section) => (
          <div key={section.id} className="flex flex-col col-span-1 space-y-2">
            <h3 className="font-bold tracking-tight text-md">
              {section.title}
            </h3>
            {section.links &&
              section.links.map((link) => (
                <Link
                  key={link.id}
                  className={`${
                    link.active
                      ? "text-gray-400 hover:text-slate-900 focus:ring-4 ring-offset-2 ring-slate-300 rounded"
                      : "text-gray-300 pointer-events-none"
                  } text-sm duration-300 outline-none`}
                  href={link.link}
                  target={link.external ? "_blank" : "_self"}
                >
                  {link.title}
                </Link>
              ))}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} splashsaver.com.
        <br /> All rights reserved.
      </p>
    </footer>
  );
};

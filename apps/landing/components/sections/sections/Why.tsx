import { FiMaximize, FiGlobe, FiPaperclip } from "react-icons/fi";
import { SecondaryHeading } from "../../ui/SecondaryHeading";
import { Text } from "@splashsaver/ui";

export const Why = () => {
  const iconClassNameStyles = "text-5xl mb-4 text-slate-900";

  const REASONS = [
    {
      id: 1,
      title: "Easy to use",
      description:
        "Designed to be easy to use, so you can get started quickly managing your teams.",
      icon: <FiMaximize className={iconClassNameStyles} />,
    },
    {
      id: 2,
      title: "Open Source",
      description:
        "All our source code is available on GitHub for anyone to browse or contribute.",
      icon: <FiGlobe className={iconClassNameStyles} />,
    },
    {
      id: 3,
      title: "Great integration",
      description:
        "We integrate with most of the tools you already use to manage your teams.",
      icon: <FiPaperclip className={iconClassNameStyles} />,
    },
  ];

  return (
    <section
      className="flex items-center justify-center flex-col mt-36"
      id="why"
    >
      <SecondaryHeading href="#why">Why splashsaver.com?</SecondaryHeading>
      <div className="max-w-3xl text-center mt-4">
        <Text>
          Startups rely on multiple tools to manage their teams, tasks and
          meetings, managing all these different aspects can be
          counterproductive and time-consuming. Splashsaver aims to solve this
          problem by centralizing all these aspects into a single platform.
        </Text>
      </div>
      <div className="grid gap-8 sm:grid-cols-3  mt-16 items-center justify-between">
        {REASONS.map((reason) => (
          <div
            className="flex items-center justify-center flex-col w-full"
            key={reason.id}
          >
            {reason.icon}
            <h1 className="font-bold tracking-tight text-slate-900 sm:text-xl text-lg mb-2">
              {reason.title}
            </h1>
            <div className="sm:max-w-full max-w-[18rem] w-full">
              <Text style={{ textAlign: "center" }}>{reason.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

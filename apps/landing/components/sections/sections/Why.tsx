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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          facere at saepe, voluptate rerum impedit. Dolor ipsam magni minima
          dolores? Lorem ipsum dolor, sit amet consectetur.
        </Text>
      </div>
      <div className="grid gap-8 sm:grid-cols-3 w-full mt-16 items-center justify-between">
        {REASONS.map((reason) => (
          <div
            className="flex items-center justify-center flex-col"
            key={reason.id}
          >
            {reason.icon}
            <h1 className="font-bold text-slate-900 text-xl mb-2">
              {reason.title}
            </h1>
            <Text style={{ textAlign: "center" }}>{reason.description}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

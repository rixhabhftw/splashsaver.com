import { SecondaryHeading } from "../../ui/SecondaryHeading";
import { Button, Text, TooltipWrapped } from "@splashsaver/ui";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export const DeveloperTooling = () => {
  return (
    <section className="flex items-center justify-between mt-36" id="developer">
      <div className="flex flex-col h-full justify-center">
        <SecondaryHeading href="#developer">
          Great Developer Tools
        </SecondaryHeading>
        <div className="max-w-xl my-4">
          <Text>
            Splashsaver also offers a set of developer tools that allows
            developers to interact with the the public API and to integrate
            Splashsaver with already existing tools. Read our{" "}
            <Link
              className="font-bold text-gray-500 hover:underline"
              href="/docs"
            >
              docs
            </Link>{" "}
            to get started!
          </Text>
        </div>
        <div className="w-1/2">
          <TooltipWrapped
            title="This product is still in development, check back later."
            position={"top"}
            duration={350}
            theme="light"
          >
            <Button style={{ width: "100%" }}>
              Developer Console <FiExternalLink className="text-xl ml-2" />
            </Button>
          </TooltipWrapped>
        </div>
      </div>
      <picture>
        <img className="w-[30rem]" src="/assets/Saly-10.png" alt="Saly" />
      </picture>
    </section>
  );
};

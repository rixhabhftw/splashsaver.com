import { SecondaryHeading } from "../../ui/SecondaryHeading";
import { FiExternalLink } from "react-icons/fi";
import { Button, Text } from "@splashsaver/ui";

export const DeveloperTooling = () => {
  return (
    <section className="flex items-center justify-between mt-36" id="developer">
      <div className="flex flex-col h-full justify-center">
        <SecondaryHeading href="#developer">
          Great Developer Tools
        </SecondaryHeading>
        <div className="max-w-xl my-4">
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            labore maxime assumenda, illum odit nulla velit praesentium quaerat
            architecto, reiciendis voluptas mollitia repellendus optio ea
            consequatur soluta asperiores doloribus.
          </Text>
        </div>
        <div className="w-1/2">
          <Button style={{ width: "100%" }}>
            Developer Console <FiExternalLink className="text-xl ml-2" />
          </Button>
        </div>
      </div>
      <picture>
        <img className="w-[30rem]" src="/assets/Saly-10.png" alt="Saly" />
      </picture>
    </section>
  );
};

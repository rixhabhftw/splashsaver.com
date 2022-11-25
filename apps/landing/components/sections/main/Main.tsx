import { Heading } from "../../ui/Heading";
import { Button, Text } from "@splashsaver/ui";

export const Main = () => {
  return (
    <main className="flex items-center justify-between pt-52">
      <div className="max-w-lg">
        <Heading>Making managing your startup team easy.</Heading>
        <div className="my-6">
          <Text>
            Splashsaver is a platform to help startups and founders manage their
            teams in a more efficient way.
          </Text>
        </div>
        <Button style={{ width: "50%" }}>Get Started</Button>
      </div>
      <picture>
        <img className="w-[25rem]" src="/assets/Saly-22.png" alt="Saly" />
      </picture>
    </main>
  );
};

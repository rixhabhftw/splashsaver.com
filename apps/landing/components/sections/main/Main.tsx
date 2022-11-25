import { Heading } from "../../ui/Heading";
import { Button, Text } from "@splashsaver/ui";

export const Main = () => {
  return (
    <main className="flex items-center h-screen">
      <div className="max-w-lg">
        <Heading>Making managing your startup team easy.</Heading>
        <div className="my-6">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit
            voluptatum fugiat facilis reiciendis excepturi.
          </Text>
        </div>
        <Button style={{ width: "50%" }}>Get Started</Button>
      </div>
    </main>
  );
};

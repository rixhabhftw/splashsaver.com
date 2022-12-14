import { Button, Text } from "@splashsaver/ui";
import { WEB_PAGE } from "@splashsaver/lib";
import { Heading } from "../../ui/Heading";

// Next.js
import Link from "next/link";

export const Main = () => {
  return (
    <main className="flex items-center justify-between pt-52">
      <div className="max-w-lg">
        <Heading>
          Managing your startup team just got{" "}
          <span className="text-transparent inline-block bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            easier
          </span>
          .
        </Heading>
        <div className="my-6">
          <Text>
            Splashsaver is a platform to help startups and founders manage their
            teams in a more efficient way.
          </Text>
        </div>
        <Link href={`${WEB_PAGE}/auth/signup`} target="_blank">
          <Button style={{ width: "50%" }}>Get Started</Button>
        </Link>
      </div>
      <picture>
        <img
          className="w-[25rem] hidden lg:flex"
          src="/assets/Saly-22.png"
          alt="Saly"
        />
      </picture>
    </main>
  );
};

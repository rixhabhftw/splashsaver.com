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
          Making managing your startup team{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            easy
          </span>
          .
        </Heading>
        <div className="my-6">
          <Text>
            Splashsaver is a platform to help startups and founders manage their
            teams in a more efficient way.
          </Text>
        </div>
        <Link href={`${WEB_PAGE}/auth/login`} target="_blank">
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

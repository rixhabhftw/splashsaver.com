import { Heading } from "../Heading";
import { Seo } from "../seo/Seo";
import { Text } from "../Text";
import Link from "next/link";

export const AuthenticationRequired = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center animation-fade">
      <Seo title="Splashsaver / Authentication Required" description="" />
      <picture className="mb-16">
        <img className="w-[15rem]" src="/assets/Saly-26.png" alt="Saly" />
      </picture>
      <Heading>Authentication Required</Heading>
      <Text>
        Please{" "}
        <Link
          className="font-bold text-gray-500 hover:underline"
          href="/auth/signup"
        >
          sign up
        </Link>{" "}
        to continue.
      </Text>
      <p className="text-gray-400 text-sm mt-4">Access Denied</p>
    </div>
  );
};

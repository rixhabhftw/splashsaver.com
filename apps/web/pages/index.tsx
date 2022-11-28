import { AuthenticationRequired, Heading, Seo, Text } from "@splashsaver/ui";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { NextPage } from "next";
import { useEffect } from "react";

const Web: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  if (!session) {
    return <AuthenticationRequired />;
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Seo title="Splashsaver / Home" description="" />
      <picture>
        <img className="w-[25rem]" src="/assets/Saly-18.png" alt="Saly" />
      </picture>
      <Heading>We&apos;re not quite ready yet!</Heading>
      <Text>Check back again later.</Text>
      <p
        className="text-gray-500 text-sm font-bold hover:underline cursor-pointer mt-5"
        onClick={() => signOut()}
      >
        Delete session
      </p>
    </div>
  );
};

export default Web;

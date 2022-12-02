import { useSession } from "next-auth/react";
import { FiPlus } from "react-icons/fi";
import { useEffect } from "react";
import Image from "next/image";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-72 border-r p-6 border-gray-200 h-full">
      {children}
    </div>
  );
};

export const Sidebar = () => {
  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  if (!session) {
    return <Container>Loading...</Container>;
  }
  return (
    <Container>
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <p
          className="text-gray-400 flex text-sm items-center justify-center cursor-pointer bg-gray-100 rounded p-2 px-4
          duration-300 hover:bg-gray-200 hover:text-gray-500 border"
        >
          <FiPlus className="mr-1 text-base" />
          Create team
        </p>
        <Image
          className="border rounded-full"
          src={session.user?.image!}
          width={30}
          height={30}
          quality={99}
          title="Profile picture"
          alt="Profile Picture"
        />
      </div>
    </Container>
  );
};

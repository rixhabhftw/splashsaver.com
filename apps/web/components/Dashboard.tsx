import { Text } from "@splashsaver/ui";
import Link from "next/link";

type Props = {
  workspaces: string[];
};

export const Dashboard = ({ workspaces }: Props) => {
  return (
    <div className="flex flex-col flex-1 h-screen p-12">
      {workspaces.length === 0 ? (
        <div className="bg-slate-100 max-w-3xl rounded-lg px-10 h-32 justify-center flex flex-col text-left">
          <h1 className="text-xl text-black mb-1 font-bold">
            Welcome there! 👋{" "}
          </h1>
          <Text>
            Get started by{" "}
            <span className="font-bold duration-300 hover:text-gray-500 cursor-pointer">
              adding your workspace
            </span>{" "}
            on the left sidebar. If you have any issues then please contract the
            support team (
            <Link
              className="font-bold duration-300 hover:text-gray-500"
              href="mailto:support@splashsaver.com"
            >
              support@splashsaver.com
            </Link>
            ).
          </Text>
        </div>
      ) : null}
    </div>
  );
};

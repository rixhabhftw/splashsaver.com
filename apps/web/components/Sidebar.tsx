import { ReportBugModal } from "./modals/ReportBugModal";
import { useSession, signOut } from "next-auth/react";
import { DOCS_PAGE } from "@splashsaver/lib";
import { useEffect, useState } from "react";
import { Dropdown } from "@splashsaver/ui";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-72 border-r p-6 border-gray-200 h-full">
      {children}
    </div>
  );
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  if (!session) {
    return <Container>Loading...</Container>;
  }

  const DROPDOWN_MENU_SECTIONS = {
    parts: [
      {
        label: undefined,
        id: 1,
        items: [
          {
            id: 1,
            dangerousAction: false,
            link: undefined,
            type: "text",
            click: undefined,
            external: false,
            text: "View profile",
          },
          {
            id: 2,
            dangerousAction: false,
            link: undefined,
            type: "text",
            click: undefined,
            external: false,
            text: "Settings",
          },
        ],
      },
      {
        label: "Developers",
        id: 2,
        items: [
          {
            id: 1,
            dangerousAction: false,
            link: "",
            type: "link",
            click: undefined,
            external: true,
            text: "Developers console",
          },
          {
            id: 2,
            dangerousAction: false,
            link: DOCS_PAGE,
            type: "link",
            click: undefined,
            external: true,
            text: "Documentation",
          },
          {
            id: 3,
            dangerousAction: false,
            link: undefined,
            type: "text",
            external: false,
            text: "Report a bug",
            click: () => {
              setIsOpen(true);
            },
          },
        ],
      },
      {
        label: undefined,
        id: 3,
        items: [
          {
            id: 1,
            dangerousAction: true,
            link: undefined,
            type: "text",
            external: false,
            text: "Sign out",
            click: () => {
              signOut();
            },
          },
        ],
      },
    ],
  };

  return (
    <Container>
      <ReportBugModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <p
          className="text-gray-400 flex text-sm items-center justify-center cursor-pointer bg-gray-100 rounded p-2 px-4
          duration-300 hover:bg-gray-200 hover:text-gray-500 border"
        >
          <FiPlus className="mr-1 text-base" />
          Create team
        </p>

        <Dropdown
          sections={DROPDOWN_MENU_SECTIONS}
          sideOffset={10}
          style={{ marginLeft: "10rem" }}
        >
          <button className="flex items-center outline-none justify-center rounded-full">
            <Image
              className="border rounded-full"
              src={session.user?.image!}
              width={30}
              height={30}
              quality={99}
              title="Profile picture"
              alt="Profile Picture "
            />
          </button>
        </Dropdown>
      </div>
    </Container>
  );
};

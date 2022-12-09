import {
  CreateWorkspaceModal,
  ViewProfileModal,
  ReportBugModal,
} from "./modals";
import { FiPlus, FiMoreHorizontal } from "react-icons/fi";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { useSession, signOut } from "next-auth/react";
import { DOCS_PAGE } from "@splashsaver/lib";
import { useEffect, useState } from "react";
import { Dropdown } from "@splashsaver/ui";
import Image from "next/image";

const Container = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 flex flex-col w-72 border-r p-6 border-gray-200 h-full`}
    >
      {children}
    </div>
  );
};

export const Sidebar = () => {
  const [createTeamModalIsOpen, setCreateTeamModalIsOpen] = useState(false);
  const [viewProfileModalIsOpen, setViewProfileIsOpen] = useState(false);
  const [workspaceList, setWorkspaceList] = useState<string[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  interface Workspace {
    name: string;
  }

  const addWorkspace = (workspace: string) => {
    setWorkspaceList((prev) => [...prev, workspace]);
  };

  const { data: session } = useSession();

  const [open, setOpen] = useState(true);

  useEffect(() => {}, [session]);

  if (!session) {
    return <Container>Loading...</Container>;
  }

  const WORKSPACE_DROPDOWN_MENU_SECTION = {
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
            text: "Settings",
          },
        ],
      },
      {
        label: "Manage",
        id: 2,
        items: [
          {
            id: 1,
            dangerousAction: false,
            link: undefined,
            type: "text",
            click: undefined,
            external: false,
            text: "Members",
          },
          {
            id: 2,
            dangerousAction: false,
            link: undefined,
            type: "text",
            click: undefined,
            external: false,
            text: "Teams",
          },
        ],
      },
      {
        label: "Workspaces",
        id: 3,
        items: workspaceList.map((workspace) => {
          return {
            id: 2,
            dangerousAction: false,
            link: undefined,
            type: "text",
            click: undefined,
            external: false,
            text: workspace
              .trim()
              .split("", 19)
              .reduce(
                (o, c) => (o.length === 18 ? `${o}${c}...` : `${o}${c}`),
                ""
              ),
          };
        }),
      },
    ],
  };

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
            click: () => {
              setViewProfileIsOpen(true);
            },
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
  console.log(isOpen);
  return (
    <div
      className={`${
        open ? "w-72 p-6" : "w-20 p-3"
      } duration-300 items-center flex flex-col border-r border-gray-200 h-full`}
    >
      <ReportBugModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <CreateWorkspaceModal
        isOpen={createTeamModalIsOpen}
        addWorkspace={addWorkspace}
        setIsOpen={setCreateTeamModalIsOpen}
      />
      <ViewProfileModal
        isOpen={viewProfileModalIsOpen}
        setIsOpen={setViewProfileIsOpen}
      />

      <div
        className={`flex ${
          open ? "justify-between" : "justify-center"
        } border-b border-gray-200 pb-4 w-full p-2 items-center`}
      >
        <div
          className={`text-gray-400 flex text-sm items-center justify-center cursor-pointer bg-gray-100 rounded h-9  px-2
          duration-300 hover:bg-gray-200 hover:text-gray-500 border ${
            !open && "scale-0 hidden"
          }`}
          onClick={() => setCreateTeamModalIsOpen(true)}
        >
          <FiPlus className="mr-1 text-base" />
          Add workspace
        </div>

        <div className={`${!open && "hidden"}`}>
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

        <div
          className={`text-gray-500 flex text-sm items-center justify-center cursor-pointer bg-gray-100 rounded h-9 w-9 
          duration-300 hover:bg-gray-200 hover:text-gray-500 border ${
            !open && "rotate-180 "
          }`}
          onClick={() => setOpen(!open)}
        >
          <TbLayoutSidebarLeftCollapse />
        </div>
      </div>

      {workspaceList.length ? (
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center w-full bg-gray-100 rounded justify-between p-2 px-4 mt-4">
            <div className="flex items-center justify-center">
              <div
                className={`bg-slate-900 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs`}
              >
                {workspaceList[0][0]}
              </div>
              <p className={`text-gray-400 text-sm ml-2 mr-2 ${!open && "scale-0"} `}>
                {workspaceList[0]}
              </p>
            </div>{" "}
            <Dropdown
              sections={WORKSPACE_DROPDOWN_MENU_SECTION}
              sideOffset={10}
              style={{ marginLeft: "10rem" }}
            >
              <button className="outline-none">
                <FiMoreHorizontal
                  className={`text-gray-400 duration-300 hover:text-gray-500 cursor-pointer ${
                    !open && "scale-0"
                  }`}
                />
              </button>
            </Dropdown>
          </div>
        </div>
      ) : null}
    </div>
  );
};

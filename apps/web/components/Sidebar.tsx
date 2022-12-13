import {
  CreateWorkspaceModal,
  ManageMembersModal,
  ViewProfileModal,
  ManageTeamsModal,
  ReportBugModal,
} from "./modals";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { FiPlus, FiMoreHorizontal } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import { DOCS_PAGE } from "@splashsaver/lib";
import { Dropdown } from "@splashsaver/ui";
import { useState } from "react";
import Image from "next/image";

type Props = {
  addWorkspace(workspace: string): void;
  workspaces: string[];
};

export const Sidebar = ({ addWorkspace, workspaces }: Props) => {
  // Modals state
  const [viewManageMembersModalIsOpen, setManageMembersModalIsOpen] =
    useState(false);
  const [viewManageTeamsModalIsOpen, setManageTeamsModalIsOpen] =
    useState(false);
  const [createTeamModalIsOpen, setCreateTeamModalIsOpen] = useState(false);
  const [viewProfileModalIsOpen, setViewProfileIsOpen] = useState(false);

  // Normal state
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  const [open, setOpen] = useState(true);

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
            click: () => {
              setManageMembersModalIsOpen(true);
            },
            external: false,
            text: "Members",
          },
          {
            id: 2,
            dangerousAction: false,
            link: undefined,
            type: "text",
            click: () => {
              setManageTeamsModalIsOpen(true);
            },
            external: false,
            text: "Teams",
          },
        ],
      },
      {
        label: "Workspaces",
        id: 3,
        items: workspaces.map((workspace) => {
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

  if (!session) {
    return null;
  }

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
      <ManageMembersModal
        isOpen={viewManageMembersModalIsOpen}
        setIsOpen={setManageMembersModalIsOpen}
      />
      <ManageTeamsModal
        isOpen={viewManageTeamsModalIsOpen}
        setIsOpen={setManageTeamsModalIsOpen}
      />

      <div
        className={`flex ${
          open ? "justify-between" : "justify-center"
        } border-b border-gray-200 pb-4 w-full  items-center`}
      >
        <div
          className={`text-gray-400 flex text-sm items-center justify-center cursor-pointer bg-gray-100 rounded h-9 px-3
          duration-300 hover:bg-gray-200 hover:text-gray-500 border ${
            !open && "hidden"
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
          <TbLayoutSidebarLeftCollapse className="text-lg" />
        </div>
      </div>

      {workspaces.length ? (
        <div className="flex items-center justify-center border-b w-full border-gray-200 pb-4">
          <div
            className={`flex items-center border bg-gray-100 rounded mt-4 ${
              open
                ? " w-full justify-between h-9 px-4"
                : "justify-center h-9 w-9"
            }`}
          >
            <div className="flex items-center justify-center">
              <div
                className={`bg-slate-900 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs`}
              >
                {workspaces[0][0]}
              </div>
              <p
                className={`text-gray-400 text-sm ml-2 mr-2 ${
                  !open && "hidden"
                } `}
              >
                {workspaces[0]}
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
                    !open && "hidden"
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

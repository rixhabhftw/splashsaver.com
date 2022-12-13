  import { FiPlus, FiMoreHorizontal } from "react-icons/fi";
  import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
  import { useSession, signOut } from "next-auth/react";
  import { DOCS_PAGE } from "@splashsaver/lib";
  import { useEffect, useState } from "react";
  import { Dropdown, Button, Text } from "@splashsaver/ui";
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
  
  export const Dashboard = () => {
    const [workspaceList, setWorkspaceList] = useState<string[]>([]);
    const [selectedWorkspace, setSelectedWorkspace] = useState("");
    const [isOpen, setIsOpen] = useState(false);
  
    const addWorkspace = (workspace: string) => {
      setWorkspaceList((prev) => [...prev, workspace]);
    };
  
    const { data: session } = useSession();
  
    const [open, setOpen] = useState(true);
  
    useEffect(() => {}, [session]);
  
    if (!session) {
      return <Container>Loading...</Container>;
    }
  
    return (
        <div className="flex flex-col flex-1 h-screen items-center justify-center">
            <div className="bg-slate-100 rounded-lg px-2 p-10 pl-10 pr-10 text-center">
            <Text className="text-2xl text-gray-400">Welcome, {session.user?.name}</Text>
            <Text className="text-lg text-gray-400">To get started, please add a workspace.</Text>
            </div>
        </div>
    );
  };
  
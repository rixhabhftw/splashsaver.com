import { AuthenticationRequired, Seo } from "@splashsaver/ui";
import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const Web: NextPage = () => {
  const [createWorkspaceModalIsOpen, setCreateWorkspaceModalIsOpen] =
    useState(false);
  const [workspaces, setWorkspaces] = useState<string[]>([]);

  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  if (!session) {
    return <AuthenticationRequired />;
  }

  const addWorkspace = (workspace: string) => {
    setWorkspaces((prev) => [...prev, workspace]);
  };

  return (
    <div className="flex h-screen">
      <Seo title="Splashsaver - Dashboard" description="" />
      <Sidebar
        workspaces={workspaces}
        addWorkspace={addWorkspace}
        createWorkspaceModalIsOpen={createWorkspaceModalIsOpen}
        setCreateWorkspaceModalIsOpen={setCreateWorkspaceModalIsOpen}
      />
      <Dashboard
        workspaces={workspaces}
        setIsOpen={setCreateWorkspaceModalIsOpen}
      />
    </div>
  );
};

export default Web;

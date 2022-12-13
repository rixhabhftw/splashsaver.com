import { AuthenticationRequired, Heading, Seo, Text } from "@splashsaver/ui";
import { Sidebar } from "../components/Sidebar";
import { Dashboard } from "../components/Dashboard";
import { useSession } from "next-auth/react";
import { NextPage } from "next";

import { useEffect, useState } from "react";

const Web: NextPage = () => {
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
      <Sidebar workspaces={workspaces} addWorkspace={addWorkspace} />
      <Dashboard workspaces={workspaces} />
    </div>
  );
};

export default Web;

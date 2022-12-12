import { AuthenticationRequired, Heading, Seo, Text } from "@splashsaver/ui";
import { Sidebar } from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { NextPage } from "next";

import { useEffect, useState } from "react";

const Web: NextPage = () => {
  const [workspaceList, setWorkspaceList] = useState<string[]>([]);

  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  if (!session) {
    return <AuthenticationRequired />;
  }

  // Test

  return (
    <div className="flex h-screen">
      <Seo title="Splashsaver - Dashboard" description="" />
      <Sidebar />
    </div>
  );
};

export default Web;

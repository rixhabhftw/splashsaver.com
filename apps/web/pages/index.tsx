import { useSession } from "next-auth/react";

export default function Web() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>hi there!</h1>
      </div>
    );
  }

  return <div>Loading...</div>;
}

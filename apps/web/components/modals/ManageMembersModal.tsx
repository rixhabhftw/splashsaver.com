import {
  Button,
  Dialog,
  Loading,
  Success,
  Error,
  Text,
  Input,
} from "@splashsaver/ui";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const ManageMembersModal = ({ isOpen, setIsOpen }: Props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setLoading(true);
    setError("");

    setIsOpen(false);
  };

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Manage members">
      <form onSubmit={handleSubmit}>
        <Text>Add, remove, or edit members of your workspace.</Text>

        <div className="my-3">
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="sam@splashsaver.com"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <Button type="submit" style={{ marginLeft: "auto" }}>
          Invite
        </Button>

        <div className="mt-2 ">
          <Loading loading={loading} />
          {error ? <Error message={error} /> : null}
          {success ? <Success message={success} /> : null}
        </div>
      </form>
    </Dialog>
  );
};

import {
  Button,
  CharacterLimit,
  Dialog,
  Input,
  Loading,
  Success,
  Error,
  Text,
} from "@splashsaver/ui";
import { useState } from "react";
import Filter from "bad-words";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addWorkspace: (workspace: string) => void;
  isOpen: boolean;
};

export const CreateWorkspaceModal = ({
  isOpen,
  addWorkspace,
  setIsOpen,
}: Props) => {
  const [workspace, setWorkspace] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const filter = new Filter();

  const CHARACTER_LIMIT = 30;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (filter.isProfane(workspace)) {
      return setError("Please don't include profane words.");
    }

    if (workspace.trim().length > CHARACTER_LIMIT) {
      return setError(`The character limit is ${CHARACTER_LIMIT}.`);
    }

    // setLoading(true);
    setError("");

    addWorkspace(workspace);
    setWorkspace("");
    setIsOpen(false);
  };

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Create workspace">
      <form onSubmit={handleSubmit}>
        <Text>
          Get started now by creating a workspace. Workspaces are where you can organize your projects and teams.
        </Text>
        <div className="my-3">
          <Input
            id="workspace"
            name="workspace"
            type="text"
            value={workspace}
            style={{ width: "100%" }}
            required={true}
            onChange={(e) => setWorkspace(e.target.value)}
            placeholder="Enter a name for your workspace..."
          />
        </div>
        <div className="flex items-center justify-between">
          <CharacterLimit text={workspace} limit={CHARACTER_LIMIT} />
          <Button type="submit">Create</Button>
        </div>
        <div className="mt-2 ">
          <Loading loading={loading} />
          {error ? <Error message={error} /> : null}
          {success ? <Success message={success} /> : null}
        </div>
      </form>
    </Dialog>
  );
};

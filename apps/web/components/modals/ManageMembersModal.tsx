import {
    Button,
    Dialog,
    Loading,
    Success,
    Error,
    Text,
  } from "@splashsaver/ui";
  import { useState } from "react";
  
  type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  };
  
  export const ManageMembersModal = ({
    isOpen,
    setIsOpen,
  }: Props) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // setLoading(true);
      setError("");
  
      setIsOpen(false);
    };
  
    return (
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Manage Members">
        <form onSubmit={handleSubmit}>
          <Text>
            Add, remove, or edit members of your workspace.
          </Text>
          <div className="flex items-center justify-between pt-5">
            <Button type="submit">Save</Button>
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
  
import {
    Button,
    Dialog,
    Loading,
    Success,
    Error,
    Text,
  } from "@splashsaver/ui";
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import { useSession } from "next-auth/react";

  
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

    const { data: session } = useSession();
  
    useEffect(() => {}, [session]);
   
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
          <div className="my-3 m-auto flex items-center">
            <Image
            className="border rounded-full"
            src={session.user?.image!}
            width={35}
            height={35}
            quality={99}
            title="Profile picture"
            alt="Profile Picture "
            />
            <Text className="pl-2">
              {session.user?.name}
            </Text>
            <Button className="ml-2 text-red-500" type="submit">Remove</Button>
        </div>
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
  
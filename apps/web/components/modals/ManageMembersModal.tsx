import {
    Button,
    Dialog,
    Loading,
    Success,
    Error,
    Text,
    Input
  } from "@splashsaver/ui";
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import { useSession } from "next-auth/react";
  import { FiAtSign } from "react-icons/fi";
  
  type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  };
  
  export const ManageMembersModal = ({
    isOpen,
    setIsOpen,
  }: Props) => {
    const [username, setUsername] = useState("");
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
          <div className="my-3 flex items-center border border-gray-300 rounded">
          <div className="ml-4">
          <FiAtSign className="text-xl text-gray-500 cursor-pointer" />
          </div>
          <Input
                id="username"
                name="username"
                type="text"
                value={username}
                placeholder="keaton"
                required={true}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "100%", border: "none", paddingLeft: "7px" }}
              />
          <Button className="ml-2 mr-2" type="submit">Add</Button>
        </div>
          <div className="my-3 mt-5 m-auto flex items-center">
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
  
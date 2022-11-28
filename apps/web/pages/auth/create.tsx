import {
  AuthenticationRequired,
  Heading,
  Button,
  Label,
  Input,
  Form,
  Seo,
} from "@splashsaver/ui";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FiAtSign } from "react-icons/fi";
import { useRouter } from "next/router";
import Image from "next/image";

const Create = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { data: session } = useSession();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (username.trim().length <= 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    router.push("/");
  };

  useEffect(() => {
    setEmail(session?.user?.email || "");
    setName(session?.user?.name || "");
  }, [session]);

  if (!session) {
    return <AuthenticationRequired />;
  }

  return (
    <div className="flex min-h-screen">
      <Seo title="Splashsaver / Create your account" description="" />
      <div className="flex flex-col w-screen items-center justify-center">
        <Form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-4 w-full">
            <div>
              <Heading>Create your account</Heading>
              <p className="text-gray-500 text-sm duration-300">
                Almost there!
              </p>
            </div>
            <Image
              className="border rounded-full mb-4"
              src={session.user?.image!}
              width={60}
              height={60}
              quality={99}
              title="Profile picture"
              alt="Profile Picture"
            />
          </div>
          <div className="w-full mb-4">
            <div className="mb-2">
              <div className="mb-1">
                <Label title="Name" />
              </div>
              <Input
                id="name"
                name="name"
                type="text"
                value={name}
                placeholder="Nicholas Njoki"
                required={true}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <Label title="Username" />
              </div>
              <div className="flex items-center border border-gray-300 rounded focus:border-1 focus:border-slate-900 duration-300">
                <div className="ml-4">
                  <FiAtSign className="text-xl text-gray-500 cursor-pointer" />
                </div>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  placeholder="nick"
                  required={true}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ width: "100%", border: "none" }}
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <Label title="Email" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="hi@notnick.io"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                disabled={true}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <Button type="submit" style={{ width: "100%" }}>
            Create Account
          </Button>
          <p className="text-[12px] ml-auto text-red-500 mt-2">
            {error ? error : null}
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Create;

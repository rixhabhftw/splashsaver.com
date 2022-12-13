import {
  Button,
  Dialog,
  Input,
  Text,
  Loading,
  Success,
  Error,
} from "@splashsaver/ui";
import { useRouter } from "next/router";
import { useState } from "react";

interface Data {
  provider: string | string[] | undefined;
  avatar: string | null | undefined;
  name: string;
  username: string;
  email: string;
}

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  data: Data;
};

export const BetaCodeModal = ({ isOpen, setIsOpen, data }: Props) => {
  const [loading, setLoading] = useState(false);
  const [betaCode, setBetaCode] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provider: data.provider,
        avatar: data.avatar,
        name: data.name,
        code: betaCode.trim(),
        username: data.username,
        email: data.email,
      }),
    });

    interface Response {
      success: boolean;
      token: string;
      error: {
        message: string;
      };
    }

    const resData: Response = await response.json();

    if (!resData.success) {
      setLoading(false);
      setError(resData.error.message);
      return;
    } else {
      localStorage.setItem("token", resData.token);

      setSuccess("Success!");
      setLoading(false);
      router.push("/");
    }
  };

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Beta Code">
      <form onSubmit={handleSubmit}>
        <Text>
          Splashsaver is in private beta so you need a access code to proceed
          further and continue on the service.
        </Text>
        <div className="my-3">
          <Input
            id="code"
            name="code"
            type="text"
            value={betaCode}
            onChange={(e) => setBetaCode(e.target.value)}
            style={{ width: "100%" }}
            placeholder="Enter your beta code..."
          />
        </div>
        <Button type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
        <div className="mt-2">
          <Loading loading={loading} />
          {error ? <Error message={error} /> : null}
          {success ? <Success message={success} /> : null}
        </div>
      </form>
    </Dialog>
  );
};

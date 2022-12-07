import {
  Dialog,
  Text,
  Input,
  Button,
  Textarea,
  Loading,
  Error,
  Success,
  CharacterLimit,
} from "@splashsaver/ui";
import { useState } from "react";
import Filter from "bad-words";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const ReportBugModal = ({ isOpen, setIsOpen }: Props) => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const filter = new Filter();

  const CHARACTER_LIMIT = 500;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (filter.isProfane(description)) {
      return setError("Please don't include profane words.");
    }

    if (description.trim().length > 500) {
      return setError(`The character limit is ${CHARACTER_LIMIT}.`);
    }

    setLoading(true);
    setError("");

    const response = await fetch("/api/reports/bug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        description,
      }),
    });

    interface Response {
      success: boolean;
      error: {
        message: string;
      };
    }

    const data: Response = await response.json();

    if (data.success) {
      setEmail("");
      setDescription("");
      setError("");

      setLoading(false);
      setSuccess("Thanks for the bug report!");
      setTimeout(() => {
        setIsOpen(false);
        setSuccess("");
      }, 3000);
      return;
    }

    setSuccess("");
    setError(data.error.message);
    setLoading(false);
  };

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Report a bug">
      <form onSubmit={handleSubmit}>
        <Text>
          If you notice a bug or any weird behaviors please report the bug so we
          can investigate further.
        </Text>
        <div className="my-3">
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="hi@notnick.io"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
            required={true}
          />
          <div className="mt-3">
            <Textarea
              id="description"
              name="description"
              value={description}
              style={{ width: "100%" }}
              rows={6}
              placeholder="Describe the bug here..."
              onChange={(e) => setDescription(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <Button type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
        <div className="mt-2 flex items-center justify-between">
          {loading ? <Loading loading={loading} /> : null}
          {error ? <Error message={error} /> : null}
          {success ? <Success message={success} /> : null}
          <CharacterLimit text={description} limit={CHARACTER_LIMIT} />
        </div>
      </form>
    </Dialog>
  );
};

import {
  GoogleOAuthButton,
  GitHubOAuthButton,
  Heading,
  Button,
  Label,
  Input,
  Form,
  Seo,
} from "@splashsaver/ui";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LANDING_PAGE } from "@splashsaver/lib";
import React, { useState } from "react";

// Next.js
import Link from "next/link";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (password.trim().length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // TODO: Handle the API call to create a new user account.
    // ...
    alert("We're not quite ready yet!");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const iconClassNameStyles = "text-xl text-gray-500 cursor-pointer";

  return (
    <div className="flex min-h-screen">
      <Seo title="Splashsaver - Signup" description="" />
      <div className="flex flex-col w-screen items-center justify-center">
        <Form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <Heading>Create your account</Heading>
            <Link
              href="/auth/login"
              className="text-gray-500 hover:underline text-sm duration-300 outline-none focus:ring-4 ring-offset-2 ring-slate-300 rounded"
            >
              Already have an account?
            </Link>
          </div>
          <div className="w-full mb-4">
            <div className="mb-2">
              <div className="mb-1">
                <Label title="Email" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="hello@splashsaver.com"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <Label title="Password" />
              </div>
              <div className="flex items-center border border-gray-300 rounded focus:border-1 focus:border-slate-900 duration-300">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="********"
                  required={false}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%", border: "none" }}
                />
                <div className="mr-4" onClick={toggleShowPassword}>
                  {showPassword ? (
                    <FiEye className={iconClassNameStyles} />
                  ) : (
                    <FiEyeOff className={iconClassNameStyles} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" style={{ width: "100%" }}>
            Create Account
          </Button>
          <div className="flex items-center justify-between w-full my-4">
            <hr className="border border-gray-200 w-full"></hr>
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="border border-gray-200 w-full"></hr>
          </div>
          <div className="mb-4 w-full">
            <GitHubOAuthButton
              type="button"
              style={{ width: "100%" }}
              onClick={() => {
                alert("We're not quite ready yet!");
              }}
            />
          </div>
          <div className="w-full">
            <GoogleOAuthButton
              type="button"
              style={{ width: "100%" }}
              onClick={() => {
                alert("We're not quite ready yet!");
              }}
            />
          </div>
          <p className="text-[12px] ml-auto text-red-500 mt-2">
            {error ? error : null}
          </p>
          <p className="text-center text-sm mt-4 text-gray-400">
            By signing up with &quot;Google/GitHub/SAML&quot;, you agree to
            Splashsaver&apos;s{" "}
            <Link
              className="font-bold text-gray-500 hover:underline"
              href={`${LANDING_PAGE}/terms`}
              target="_blank"
            >
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link
              className="font-bold text-gray-500 hover:underline"
              href={`${LANDING_PAGE}/privacy`}
              target="_blank"
            >
              Privacy Policy.
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

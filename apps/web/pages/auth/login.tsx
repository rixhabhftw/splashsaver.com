import {
  GoogleOAuthButton,
  GitHubOAuthButton,
  Heading,
  Button,
  Label,
  Input,
  Form,
  Seo,
  Loading,
  Or,
} from "@splashsaver/ui";
import { EyeToggle } from "../../components/ui/EyeToggle";
import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    setLoading(true);
    alert("We're not quite ready yet!");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen">
      <Seo title="Splashsaver - Sign in" description="" />
      <div className="flex flex-col w-screen items-center justify-center">
        <Form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <Heading>Sign in to your account</Heading>
            <Link
              href="/auth/signup"
              className="text-gray-500 hover:underline text-sm duration-300 outline-none focus:ring-4 ring-offset-2 ring-slate-300 rounded"
            >
              Don&apos;t have an account?
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
                  <EyeToggle show={showPassword} />
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" style={{ width: "100%" }}>
            Login
          </Button>
          <Or />
          <div className="mb-4 w-full">
            <GoogleOAuthButton
              type="button"
              style={{ width: "100%" }}
              onClick={() => {
                alert("We're not quite ready yet!");
              }}
            />
          </div>
          <div className="w-full">
            <GitHubOAuthButton
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
          <Loading loading={loading} />
        </Form>
      </div>
    </div>
  );
};

export default Login;

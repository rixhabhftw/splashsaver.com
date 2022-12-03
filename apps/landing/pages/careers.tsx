import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Seo } from "../components/Seo";
import { NextPage } from "next";
import { Text } from "@splashsaver/ui";
import Link from "next/link";

const Careers: NextPage = () => {
  return (
    <Container>
      <Seo title="Splashsaver - Careers" description="" />
      <Header title="Careers" />
      <div className="max-w-2xl">
        <Text>
          At the moment we don&apos;t currently have any job openings as
          we&apos;re not funded yet but if you&apos;re interested in joining the{" "}
          <Link
            className="duration-300 font-semibold hover:text-gray-500"
            href="/team"
          >
            team
          </Link>{" "}
          voluntarily then be sure to shoot me an email (
          <Link
            className="duration-300 font-semibold hover:text-gray-500"
            href="mailto:hi@notnick.io"
          >
            hi@notnick.io
          </Link>
          ).{" "}
        </Text>
      </div>
    </Container>
  );
};

export default Careers;

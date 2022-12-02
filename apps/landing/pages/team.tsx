import { Container } from "../components/layout/Container";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Header } from "../components/layout/Header";
import { TEAM_MEMBERS } from "../lib/team";
import { Seo } from "../components/Seo";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Team: NextPage = () => {
  const iconClassNameStyles =
    "text-xl hover:scale-110 cursor-pointer duration-300 mt-3 text-gray-700 hover:text-slate-900";

  return (
    <Container>
      <Seo title="Splashsaver - Team" description="" />

      <Header title="Team" />
      <div className="grid items-center grid-cols-4 sm:grid:-cols-2 my-4 gap-x-5 gap-y-10 ">
        {TEAM_MEMBERS.map((teamMember) => (
          <div key={teamMember.id} className="flex flex-col">
            <Image
              className="border border-gray-100 rounded-full"
              src={teamMember.avatar}
              draggable={false}
              width={125}
              height={125}
              quality={99}
              alt={teamMember.name}
            />
            <h1 className="font-bold text-lg mt-4 text-slate-900">
              {teamMember.name}
            </h1>
            <p className="text-gray-400 text-sm max-w-[150px]">
              {teamMember.role}
            </p>
            <div className="flex mt-4">
              {teamMember.socials.map((social) => (
                <div className="flex">
                  <Link className="mr-2" href={social.github} target="_blank">
                    <FaGithub className={iconClassNameStyles} />
                  </Link>
                  <Link className="mr-2" href={social.twitter} target="_blank">
                    <FaTwitter className={iconClassNameStyles} />
                  </Link>
                  <Link href={social.linkedin} target="_blank">
                    <FaLinkedin className={iconClassNameStyles} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;

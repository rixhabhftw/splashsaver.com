import { DOCS_PAGE } from "@splashsaver/lib";

export const SECTIONS = [
  {
    id: 1,
    title: "About",
    links: [
      {
        id: 1,
        title: "Team",
        active: true,
        link: "/team",
        external: false,
      },
      {
        id: 2,
        title: "Careers",
        active: false,
        link: "/careers",
        external: false,
      },
      {
        id: 3,
        title: "Blog",
        active: true,
        link: "/blog",
        external: false,
      },
      {
        id: 4,
        title: "Pricing",
        active: true,
        link: "/#pricing",
        external: false,
      },
    ],
  },
  {
    id: 2,
    title: "Developers",
    links: [
      {
        id: 1,
        title: "Documentation",
        active: true,
        link: DOCS_PAGE,
        external: true,
      },
      {
        id: 2,
        title: "Contribute",
        active: true,
        link: "https://github.com/splashsaver/splashsaver.com",
        external: true,
      },
    ],
  },
  {
    id: 3,
    title: "Community",
    links: [
      {
        id: 1,
        title: "GitHub",
        active: true,
        link: "https://github.com/splashsaver/splashsaver.com",
        external: true,
      },
      {
        id: 2,
        title: "Discord",
        active: false,
        link: "",
        external: true,
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    links: [
      {
        id: 1,
        title: "Privacy Policy",
        active: true,
        link: "/privacy",
        external: false,
      },
      {
        id: 2,
        title: "Terms of Service",
        active: true,
        link: "/terms",
        external: false,
      },
      {
        id: 3,
        title: "License",
        active: true,
        link: "https://github.com/splashsaver/splashsaver.com/blob/main/LICENSE",
        external: true,
      },
    ],
  },
];

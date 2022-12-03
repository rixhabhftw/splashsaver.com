import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

type Props = {
  style?: React.CSSProperties | undefined;
  sideOffset?: number | undefined;
  children?: React.ReactNode;
  sections: Section;
};

interface Section {
  parts: Part[];
}

interface Part {
  label?: string | undefined;
  items: Item[];
  id: number;
}

interface Item {
  dangerousAction: boolean;
  link: string | undefined;
  type: string;
  click?: () => void | undefined;
  external: boolean;
  text: string;
  id: number;
}

export const Dropdown = ({ style, sideOffset, children, sections }: Props) => {
  const dropdownMenuItemStyles =
    "flex items-center justify-between text-sm text-gray-400 outline-none font-light p-2 duration-300 hover:bg-gray-50 rounded cursor-pointer";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rdx-side-top:animate-slide-up rdx-side-bottom:animate-slide-down
          border rounded p-2 w-48 bg-white"
          sideOffset={sideOffset}
          style={style}
        >
          {sections.parts.map((section, index) => (
            <div key={section.id}>
              {section.label ? (
                <DropdownMenu.Label className="text-[12px] pl-2 text-gray-300">
                  {section.label}
                </DropdownMenu.Label>
              ) : null}
              {section.items.map((item) => (
                <div key={item.id}>
                  {" "}
                  <DropdownMenu.Item
                    className={`${dropdownMenuItemStyles} ${
                      item.dangerousAction && "text-red-500 font-normal"
                    }`}
                    onClick={() => (item.click ? item.click() : null)}
                  >
                    {item.type === "text" ? (
                      item.text
                    ) : (
                      <>
                        {item.link || item.type === "link" ? (
                          <Link
                            href={item.link ? item.link : "#"}
                            target={item.external ? "_blank" : "_self"}
                          >
                            {item.text}
                          </Link>
                        ) : null}
                      </>
                    )}
                    {item.external ? (
                      <FiExternalLink className="text-base" />
                    ) : null}
                  </DropdownMenu.Item>
                </div>
              ))}
              {sections.parts[sections.parts.length - 1] !==
              sections.parts[index] ? (
                <DropdownMenu.Separator className="border-[0.2px] text-gray-100 my-1 w-full" />
              ) : null}
            </div>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

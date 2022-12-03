import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { FiPlus, FiExternalLink } from "react-icons/fi";
import { useEffect } from "react";
import Image from "next/image";
import cx from "classnames";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-72 border-r p-6 border-gray-200 h-full">
      {children}
    </div>
  );
};

export const Sidebar = () => {
  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  if (!session) {
    return <Container>Loading...</Container>;
  }

  const dropdownMenuItemStyles =
    "flex items-center justify-between text-sm text-gray-400 outline-none font-light p-2 duration-300 hover:bg-gray-50 rounded cursor-pointer";

  return (
    <Container>
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <p
          className="text-gray-400 flex text-sm items-center justify-center cursor-pointer bg-gray-100 rounded p-2 px-4
          duration-300 hover:bg-gray-200 hover:text-gray-500 border"
        >
          <FiPlus className="mr-1 text-base" />
          Create team
        </p>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center outline-none justify-center rounded-full">
              <Image
                className="border rounded-full"
                src={session.user?.image!}
                width={30}
                height={30}
                quality={99}
                title="Profile picture"
                alt="Profile Picture "
              />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className={cx(
                "rdx-side-top:animate-slide-up rdx-side-bottom:animate-slide-down border rounded p-2 w-48 bg-white"
              )}
              sideOffset={10}
              style={{ marginLeft: "10rem" }}
            >
              <DropdownMenu.Item className={dropdownMenuItemStyles}>
                View profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className={dropdownMenuItemStyles}>
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="border-[0.2px] text-gray-100 my-1 w-full" />
              <DropdownMenu.Label className="text-[12px] pl-2 text-gray-300">
                Developers
              </DropdownMenu.Label>
              <DropdownMenu.Item className={dropdownMenuItemStyles}>
                Developer Console <FiExternalLink className="text-base" />
              </DropdownMenu.Item>
              <DropdownMenu.Item className={dropdownMenuItemStyles}>
                Documentation <FiExternalLink className="text-base" />
              </DropdownMenu.Item>
              <DropdownMenu.Item className={dropdownMenuItemStyles}>
                Report a bug
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="border-[0.2px] text-gray-100 my-1 w-full" />
              <DropdownMenu.Item
                className={`${dropdownMenuItemStyles} text-red-500 font-normal`}
                onClick={() => signOut()}
              >
                Sign out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </Container>
  );
};

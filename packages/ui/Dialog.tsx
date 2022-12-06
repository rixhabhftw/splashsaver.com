import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  description?: string;
  isOpen: boolean;
  title: string;
};

export const Dialog = ({
  description,
  setIsOpen,
  children,
  isOpen,
  title,
}: Props) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild />
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className="fixed inset-0 z-20 bg-black/20"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            className="rounded fixed top-1/2 left-1/2 flex max-h-[40rem] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center
          bg-white z-50 sm:w-[35rem] w-[90%] p-8 border"
          >
            <DialogPrimitive.Title className="font-bold text-slate-900 text-2xl tracking-tight mb-1">
              {title}
            </DialogPrimitive.Title>
            {description ? (
              <DialogPrimitive.Description>
                {description}
              </DialogPrimitive.Description>
            ) : null}
            {children}
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  );
};

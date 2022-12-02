import { Tooltip, TooltipProps } from "react-tippy";
import React from "react";

interface TooltipWrappedProps extends React.PropsWithChildren<TooltipProps> {
  children?: React.ReactNode;
}

export const TooltipWrapped: React.FunctionComponent<TooltipWrappedProps> = (
  props
) => React.cloneElement(<Tooltip />, { ...props });

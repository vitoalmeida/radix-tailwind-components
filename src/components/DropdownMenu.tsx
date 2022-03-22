import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CaretRightIcon,
  CheckIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  GridIcon,
  Link2Icon,
  TransparencyGridIcon,
} from "@radix-ui/react-icons";
import cx from "classnames";
import React, { ReactNode, useState } from "react";
import Button from "./shared/Button";

interface DropdownMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface DropdownMenuProps {
  trigger: string,
  items: DropdownMenuItem[],
}

const DropdownMenu = ({ trigger, items}: DropdownMenuProps) => {

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <Button>{trigger}</Button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={5}
          className={cx(
            " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
            "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
            "bg-white dark:bg-gray-800"
          )}
        >
          {items.map(({ label, icon, shortcut }, i) => (
            <DropdownMenuPrimitive.Item
              key={`${label}-${i}`}
              className={cx(
                "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
              )}
            >
              {icon}
              <span className="flex-grow text-gray-700 dark:text-gray-300">
                {label}
              </span>
              {shortcut && <span className="text-xs">{shortcut}</span>}
            </DropdownMenuPrimitive.Item>
          ))}

          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default DropdownMenu;

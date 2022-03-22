import * as AvatarPrimitive from "@radix-ui/react-avatar";
import cx from "classnames";
import React, { Fragment } from "react";
import { getRandomInitials } from "./utils/random";

enum Variant {
  Circle,
  Rounded,
}

interface User {
  user: string
}

interface Props {
  variant: Variant,
  isOnline?: boolean,
  users: User[]
};

const Avatar = ({ users, variant, isOnline }: Props) => {
  const urls =Array.from({ length: users.length }, () => "");

  return (
    <Fragment>
      {urls.map((src, i) => (
        <AvatarPrimitive.Root
          key={`avatar-${i}-{src}`}
          className="relative inline-flex h-10 w-10"
        >
          <AvatarPrimitive.Image
            src={src as string}
            alt="Avatar"
            className={cx(
              "h-full w-full object-cover",
              {
                [Variant.Circle]: "rounded-full",
                [Variant.Rounded]: "rounded",
              }[variant]
            )}
          />
          {isOnline && (
            <div
              className={cx(
                "absolute bottom-0 right-0 h-2 w-2",
                {
                  [Variant.Circle]: "-translate-x-1/2 -translate-y-1/2",
                  [Variant.Rounded]: "",
                }[variant]
              )}
            >
              <span className="block h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
          )}
          <AvatarPrimitive.Fallback
            className={cx(
              "flex h-full w-full items-center justify-center bg-white dark:bg-gray-800",
              {
                [Variant.Circle]: "rounded-full",
                [Variant.Rounded]: "rounded",
              }[variant]
            )}
            delayMs={600}
          >
            <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
              {getRandomInitials()}
            </span>
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
      ))}
    </Fragment>
  );
};

Avatar.variant = Variant;
export default Avatar;

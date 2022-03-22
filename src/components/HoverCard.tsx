import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import cx from "classnames";
import React from "react";


interface HoverCardProps {
  logoSvgPath: string,
  colorFill: string,
  title: string,
  description: string
}

const HoverCard = ({ logoSvgPath, colorFill, title, description}: HoverCardProps) => {
  
  const Logo = () => (
    <svg
      className="h-7 w-7 shrink-0"
      viewBox="0 0 99 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={logoSvgPath}
        fill={colorFill}
      />
    </svg>
  );

  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <div
          className={cx(
            "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-2.5 dark:bg-gray-900"
          )}
        >
          <Logo />
        </div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align="center"
        sideOffset={4}
        className={cx(
          " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
          "max-w-md rounded-lg p-4 md:w-full",
          "bg-white dark:bg-gray-800",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <HoverCardPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />

        <div className="flex h-full w-full space-x-4">
          <div
            className={cx(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 p-2.5 dark:bg-gray-900"
            )}
          >
            <Logo />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              { title }
            </h3>

            <p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
              { description }
            </p>
          </div>
        </div>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};

export default HoverCard;

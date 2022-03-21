import cx from "classnames";
import React, { ReactNode } from "react";

enum Variant {
  Default,
  ItemsCenter,
  JustifyCenter,
}

type Props = {
  variant?: Variant;
  children: ReactNode;
  data: {
    title: string;
    link: string;
  };
};

const DemoCard = ({
  variant = Variant.Default,
  children,
  data: { title, link },
}: Props) => {
  const id = title.replace(" ", "_").toLowerCase();

  return (
    <section
      id={id}
      className="h-[550px] w-full scroll-mt-6 overflow-hidden rounded-xl shadow"
    >
      <div
        className={cx(
          "relative flex h-full w-full p-6",
          // "bg-gradient-to-br from-pink-300 via-fuchsia-300 to-purple-400 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800"
          // "bg-gradient-to-br from-pink-400 via-fuchsia-300 to-purple-400 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800",
          "bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800",
          {
            [Variant.Default]: "items-center justify-center",
            [Variant.ItemsCenter]: "items-center",
            [Variant.JustifyCenter]: "justify-center pt-24", // Height of title bar
          }[variant]
        )}
      >
        {children}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
          <a
            href={`#${id}`}
            className="dark:ext-gray-300 select-none text-sm font-medium text-white"
          >
            {title}
          </a>
          <a
            href={link}
            rel={"noreferrer"}
            target={"_blank"}
            className="select-none rounded bg-white/25 px-2 py-1.5 text-xs font-medium text-white hover:bg-white/30 dark:text-gray-100"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

DemoCard.variant = Variant;
export default DemoCard;

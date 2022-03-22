import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import cx from "classnames";
import React, { Fragment } from "react";

interface Props {
  text: string,
  imageSource: string
}

const AspectRatio = ({text, imageSource}: Props) => {
  return (
    <Fragment>
      <AspectRatioPrimitive.Root
        ratio={16 / 9}
        className="group relative h-full w-full overflow-hidden rounded-lg shadow-md"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h3 className="select-none bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
            {text}
          </h3>
        </div>
        <div
          className={cx(
            "absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
            "transition-colors duration-300 ease-in-out"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSource}
            alt="Vancouver by Matt Wang"
            className="h-full w-full mix-blend-overlay"
          />
        </div>
      </AspectRatioPrimitive.Root>
    </Fragment>
  );
};

export default AspectRatio;

import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import React, { useState } from "react";
import Button from "./shared/Button";

interface ToggleProps {
  text: string
}

const Toggle = ({ text }: ToggleProps) => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <TogglePrimitive.Root
      defaultPressed={toggleState}
      onPressedChange={setToggleState}
      asChild
    >
      <Button>
        {toggleState ? (
          <StarFilledIcon className="h-4 w-4 text-yellow-400" />
        ) : (
          { text }
        )}
        <span className="ml-2 leading-5">{toggleState ? "Starred" : "Star"}</span>
      </Button>
    </TogglePrimitive.Root>
  );
};

export default Toggle;

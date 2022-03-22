import { ToggleItem } from "@radix-ui/react-toolbar";
import { ReactElement } from "react";
interface ToggleItem {
    value: string;
    label: string;
    icon: ReactElement;
}
interface ToggleItems {
    items: ToggleItem[];
}
declare const ToggleGroup: ({ items }: ToggleItems) => JSX.Element;
export default ToggleGroup;

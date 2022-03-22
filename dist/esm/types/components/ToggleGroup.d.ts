import { ReactElement } from "react";
interface ToggleGroupToggleItem {
    value: string;
    label: string;
    icon: ReactElement;
}
interface ToggleGroupToggleItems {
    items: ToggleGroupToggleItem[];
}
declare const ToggleGroup: ({ items }: ToggleGroupToggleItems) => JSX.Element;
export default ToggleGroup;

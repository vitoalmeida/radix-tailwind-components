import { ReactNode } from "react";
interface MenuItem {
    label: string;
    shortcut?: string;
    icon?: ReactNode;
}
interface Props {
    trigger: string;
    items: MenuItem[];
}
declare const DropdownMenu: ({ trigger, items }: Props) => JSX.Element;
export default DropdownMenu;

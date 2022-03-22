import { ReactNode } from "react";
interface DropdownMenuItem {
    label: string;
    shortcut?: string;
    icon?: ReactNode;
}
interface DropdownMenuProps {
    trigger: string;
    items: DropdownMenuItem[];
}
declare const DropdownMenu: ({ trigger, items }: DropdownMenuProps) => JSX.Element;
export default DropdownMenu;

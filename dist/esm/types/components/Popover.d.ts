/// <reference types="react" />
interface PopoverItem {
    id?: string;
    label: string;
    defaultValue: string;
}
interface PopoverProps {
    items: PopoverItem[];
    trigger: string;
    title: string;
}
declare const Popover: ({ items, title, trigger }: PopoverProps) => JSX.Element;
export default Popover;

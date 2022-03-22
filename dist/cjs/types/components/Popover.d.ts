/// <reference types="react" />
interface Item {
    id?: string;
    label: string;
    defaultValue: string;
}
interface Props {
    items: Item[];
    trigger: string;
    title: string;
}
declare const Popover: ({ items, title, trigger }: Props) => JSX.Element;
export default Popover;

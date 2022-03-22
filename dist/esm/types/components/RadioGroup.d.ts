/// <reference types="react" />
interface Item {
    id: string;
    title: string;
}
interface Items {
    items: Item[];
}
declare const RadioGroup: ({ items }: Items) => JSX.Element;
export default RadioGroup;

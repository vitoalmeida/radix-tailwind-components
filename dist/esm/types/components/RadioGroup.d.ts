/// <reference types="react" />
interface RadioGroupItem {
    id: string;
    title: string;
}
interface RadioGroupItems {
    items: RadioGroupItem[];
}
declare const RadioGroup: ({ items }: RadioGroupItems) => JSX.Element;
export default RadioGroup;

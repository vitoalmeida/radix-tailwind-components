/// <reference types="react" />
interface AccordionItem {
    header: string;
    content: string;
}
interface Items {
    items: AccordionItem[];
}
declare const Accordion: ({ items }: Items) => JSX.Element;
export default Accordion;

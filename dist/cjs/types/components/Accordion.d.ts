/// <reference types="react" />
interface AccordionItem {
    header: string;
    content: string;
}
interface AccordionItems {
    items: AccordionItem[];
}
declare const Accordion: ({ items }: AccordionItems) => JSX.Element;
export default Accordion;

/// <reference types="react" />
interface Tab {
    title: string;
    value: string;
}
interface Tabs {
    tabs: Tab[];
}
declare const Tabs: ({ tabs }: Tabs) => JSX.Element;
export default Tabs;

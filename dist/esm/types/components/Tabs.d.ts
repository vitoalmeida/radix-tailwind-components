/// <reference types="react" />
interface TabsTab {
    title: string;
    value: string;
}
interface TabsTabs {
    tabs: TabsTab[];
}
declare const Tabs: ({ tabs }: TabsTabs) => JSX.Element;
export default Tabs;

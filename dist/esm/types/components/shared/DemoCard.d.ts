import { ReactNode } from "react";
declare enum Variant {
    Default = 0,
    ItemsCenter = 1,
    JustifyCenter = 2
}
declare type Props = {
    variant?: Variant;
    children: ReactNode;
    data: {
        title: string;
        link: string;
    };
};
declare const DemoCard: {
    ({ variant, children, data: { title, link }, }: Props): JSX.Element;
    variant: typeof Variant;
};
export default DemoCard;

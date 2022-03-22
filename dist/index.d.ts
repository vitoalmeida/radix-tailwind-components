/// <reference types="react" />
import { ReactNode, ReactElement } from 'react';

interface AccordionItem {
    header: string;
    content: string;
}
interface Items$1 {
    items: AccordionItem[];
}
declare const Accordion: ({ items }: Items$1) => JSX.Element;

interface Props$a {
    trigger: string;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
}
declare const AlertDialog: ({ trigger, title, description, cancelButtonText, confirmButtonText }: Props$a) => JSX.Element;

interface Props$9 {
    text: string;
    imageSource: string;
}
declare const AspectRatio: ({ text, imageSource }: Props$9) => JSX.Element;

declare enum Variant {
    Circle = 0,
    Rounded = 1
}
interface User {
    user: string;
}
interface Props$8 {
    variant: Variant;
    isOnline?: boolean;
    users: User[];
}
declare const Avatar: {
    ({ users, variant, isOnline }: Props$8): JSX.Element;
    variant: typeof Variant;
};

interface Props$7 {
    text: string;
}
declare const Checkbox: ({ text }: Props$7) => JSX.Element;

interface Props$6 {
    trigger: string;
}
declare const Collapsible: ({ trigger }: Props$6) => JSX.Element;

interface Props$5 {
    trigger: string;
    title: string;
    description: string;
    firstInputText: string;
    secondInputText: string;
    confirmButtonText: string;
}
declare const Dialog: ({ trigger, title, description, firstInputText, secondInputText, confirmButtonText }: Props$5) => JSX.Element;

interface MenuItem {
    label: string;
    shortcut?: string;
    icon?: ReactNode;
}
interface Props$4 {
    trigger: string;
    items: MenuItem[];
}
declare const DropdownMenu: ({ trigger, items }: Props$4) => JSX.Element;

interface Props$3 {
    logoSvgPath: string;
    colorFill: string;
    title: string;
    description: string;
}
declare const HoverCard: ({ logoSvgPath, colorFill, title, description }: Props$3) => JSX.Element;

interface Item$1 {
    id?: string;
    label: string;
    defaultValue: string;
}
interface Props$2 {
    items: Item$1[];
    trigger: string;
    title: string;
}
declare const Popover: ({ items, title, trigger }: Props$2) => JSX.Element;

interface Item {
    id: string;
    title: string;
}
interface Items {
    items: Item[];
}
declare const RadioGroup: ({ items }: Items) => JSX.Element;

declare const Slider: () => JSX.Element;

declare const Switch: () => JSX.Element;

interface Tab {
    title: string;
    value: string;
}
interface Tabs {
    tabs: Tab[];
}
declare const Tabs: ({ tabs }: Tabs) => JSX.Element;

interface Props$1 {
    text: string;
}
declare const Toggle: ({ text }: Props$1) => JSX.Element;

interface ToggleItem {
    value: string;
    label: string;
    icon: ReactElement;
}
interface ToggleItems {
    items: ToggleItem[];
}
declare const ToggleGroup: ({ items }: ToggleItems) => JSX.Element;

interface Props {
    trigger: string;
    description: string;
}
declare const Tooltip: ({ trigger, description }: Props) => JSX.Element;

export { Accordion, AlertDialog, AspectRatio, Avatar, Checkbox, Collapsible, Dialog, DropdownMenu, HoverCard, Popover, RadioGroup, Slider, Switch, Tabs, Toggle, ToggleGroup, Tooltip };

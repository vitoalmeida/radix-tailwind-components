/// <reference types="react" />
import { ReactNode, ReactElement } from 'react';

interface AccordionItem {
    header: string;
    content: string;
}
interface AccordionItems {
    items: AccordionItem[];
}
declare const Accordion: ({ items }: AccordionItems) => JSX.Element;

interface AlertDialogProps {
    trigger: string;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
}
declare const AlertDialog: ({ trigger, title, description, cancelButtonText, confirmButtonText }: AlertDialogProps) => JSX.Element;

interface AspectRatioProps {
    text: string;
    imageSource: string;
}
declare const AspectRatio: ({ text, imageSource }: AspectRatioProps) => JSX.Element;

declare enum Variant {
    Circle = 0,
    Rounded = 1
}
interface AvatarUser {
    user: string;
}
interface AvatarProps {
    variant: Variant;
    isOnline?: boolean;
    users: AvatarUser[];
}
declare const Avatar: {
    ({ users, variant, isOnline }: AvatarProps): JSX.Element;
    variant: typeof Variant;
};

interface CheckboxProps {
    text: string;
}
declare const Checkbox: ({ text }: CheckboxProps) => JSX.Element;

interface DialogProps {
    trigger: string;
    title: string;
    description: string;
    firstInputText: string;
    secondInputText: string;
    confirmButtonText: string;
}
declare const Dialog: ({ trigger, title, description, firstInputText, secondInputText, confirmButtonText }: DialogProps) => JSX.Element;

interface DropdownMenuItem {
    label: string;
    shortcut?: string;
    icon?: ReactNode;
}
interface DropdownMenuProps {
    trigger: string;
    items: DropdownMenuItem[];
}
declare const DropdownMenu: ({ trigger, items }: DropdownMenuProps) => JSX.Element;

interface HoverCardProps {
    logoSvgPath: string;
    colorFill: string;
    title: string;
    description: string;
}
declare const HoverCard: ({ logoSvgPath, colorFill, title, description }: HoverCardProps) => JSX.Element;

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

interface RadioGroupItem {
    id: string;
    title: string;
}
interface RadioGroupItems {
    items: RadioGroupItem[];
}
declare const RadioGroup: ({ items }: RadioGroupItems) => JSX.Element;

declare const Slider: () => JSX.Element;

declare const Switch: () => JSX.Element;

interface TabsTab {
    title: string;
    value: string;
}
interface TabsTabs {
    tabs: TabsTab[];
}
declare const Tabs: ({ tabs }: TabsTabs) => JSX.Element;

interface ToggleProps {
    text: string;
}
declare const Toggle: ({ text }: ToggleProps) => JSX.Element;

interface ToggleGroupToggleItem {
    value: string;
    label: string;
    icon: ReactElement;
}
interface ToggleGroupToggleItems {
    items: ToggleGroupToggleItem[];
}
declare const ToggleGroup: ({ items }: ToggleGroupToggleItems) => JSX.Element;

interface TooltipProps {
    trigger: string;
    description: string;
}
declare const Tooltip: ({ trigger, description }: TooltipProps) => JSX.Element;

export { Accordion, AlertDialog, AspectRatio, Avatar, Checkbox, Dialog, DropdownMenu, HoverCard, Popover, RadioGroup, Slider, Switch, Tabs, Toggle, ToggleGroup, Tooltip };

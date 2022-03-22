/// <reference types="react" />
interface DialogProps {
    trigger: string;
    title: string;
    description: string;
    firstInputText: string;
    secondInputText: string;
    confirmButtonText: string;
}
declare const Dialog: ({ trigger, title, description, firstInputText, secondInputText, confirmButtonText }: DialogProps) => JSX.Element;
export default Dialog;

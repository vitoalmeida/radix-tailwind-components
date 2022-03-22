/// <reference types="react" />
interface Props {
    trigger: string;
    title: string;
    description: string;
    firstInputText: string;
    secondInputText: string;
    confirmButtonText: string;
}
declare const Dialog: ({ trigger, title, description, firstInputText, secondInputText, confirmButtonText }: Props) => JSX.Element;
export default Dialog;

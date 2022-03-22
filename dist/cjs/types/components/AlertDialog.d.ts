/// <reference types="react" />
interface Props {
    trigger: string;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
}
declare const AlertDialog: ({ trigger, title, description, cancelButtonText, confirmButtonText }: Props) => JSX.Element;
export default AlertDialog;

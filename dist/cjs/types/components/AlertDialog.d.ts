/// <reference types="react" />
interface AlertDialogProps {
    trigger: string;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
}
declare const AlertDialog: ({ trigger, title, description, cancelButtonText, confirmButtonText }: AlertDialogProps) => JSX.Element;
export default AlertDialog;

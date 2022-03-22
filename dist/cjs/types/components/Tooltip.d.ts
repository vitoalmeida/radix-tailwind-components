/// <reference types="react" />
interface TooltipProps {
    trigger: string;
    description: string;
}
declare const Tooltip: ({ trigger, description }: TooltipProps) => JSX.Element;
export default Tooltip;

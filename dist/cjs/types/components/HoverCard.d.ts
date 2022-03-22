/// <reference types="react" />
interface HoverCardProps {
    logoSvgPath: string;
    colorFill: string;
    title: string;
    description: string;
}
declare const HoverCard: ({ logoSvgPath, colorFill, title, description }: HoverCardProps) => JSX.Element;
export default HoverCard;

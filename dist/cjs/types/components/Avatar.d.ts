/// <reference types="react" />
declare enum Variant {
    Circle = 0,
    Rounded = 1
}
interface User {
    user: string;
}
interface Props {
    variant: Variant;
    isOnline?: boolean;
    users: User[];
}
declare const Avatar: {
    ({ users, variant, isOnline }: Props): JSX.Element;
    variant: typeof Variant;
};
export default Avatar;

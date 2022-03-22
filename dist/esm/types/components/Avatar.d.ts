/// <reference types="react" />
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
export default Avatar;

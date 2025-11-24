import { VariantProps } from 'class-variance-authority';

declare const avatarsizeProps: {
    size: {
        tiny: string;
        small: string;
        medium: string;
        large: string;
        huge: string;
    };
};
declare const avatarVariants: (props?: ({
    shape?: "circle" | "square" | "rounded" | null | undefined;
    borderColor?: string | number | null | undefined;
    bgColor?: string | number | null | undefined;
    color?: string | number | null | undefined;
    theme?: "night" | "white" | "black" | "deep-space" | "earth" | "sun" | "mars" | "meteor" | "neptune" | "nova" | "mercury" | "aurora" | null | undefined;
    border?: boolean | null | undefined;
    size?: "tiny" | "small" | "medium" | "large" | "huge" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof avatarVariants> {
    children?: string;
    alt?: string;
    border?: boolean;
    src?: string;
    testId?: string;
}
export { avatarVariants, avatarsizeProps };

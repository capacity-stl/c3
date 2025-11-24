import { VariantProps } from 'class-variance-authority';
import { Icons } from '../Icon/Glyphs';

declare const badgeSizeProps: {
    size: {
        tiny: string;
        small: string;
        medium: string;
        large: string;
        huge: string;
    };
};
declare const badgeVariants: (props?: ({
    color?: "night" | "white" | "black" | "deep-space" | "earth" | "sun" | "mars" | "meteor" | "neptune" | "nova" | "mercury" | "aurora" | null | undefined;
    shape?: "circle" | "square" | "rounded" | null | undefined;
    size?: "tiny" | "small" | "medium" | "large" | "huge" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof badgeVariants> {
    children?: React.ReactNode;
    icon?: keyof typeof Icons;
    value?: string | number | boolean | object;
    dense?: boolean;
    onRemove?: (value: string | number | boolean | object) => void;
    testId?: string;
}
export { badgeVariants, badgeSizeProps };

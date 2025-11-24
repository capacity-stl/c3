import { VariantProps } from 'class-variance-authority';

type CVAProps = {
    open: boolean;
    boundingRect: null | DOMRect;
};
declare const rootVariants: (props?: ({
    isPinned?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: CVAProps) => {
    rootClassString: string;
};
export interface FlyoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof rootVariants> {
    open: boolean;
    pinTo?: React.RefObject<HTMLElement | null>;
}
export { rootVariants, componentVariants };

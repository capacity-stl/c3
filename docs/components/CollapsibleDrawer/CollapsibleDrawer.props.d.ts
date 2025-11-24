import { VariantProps } from 'class-variance-authority';
import { CollapsibleSheetProps } from './CollapsibleSheet.props';
import { Icons } from '../Icon/Glyphs';

export declare const DropToSideOptions: {
    [key: string]: "left" | "right";
};
declare const rootVariants: (props?: ({
    dropToSide?: string | number | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const contentColumnVariants: (props?: ({
    w?: "20" | "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "13" | "15" | null | undefined;
    wMin?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    wMax?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    borderColor?: string | number | null | undefined;
    dropToSide?: string | number | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const contentColumnHeaderVariants: (props?: ({
    borderColor?: string | number | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const contentColumnContainerVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const iconColumnVariants: (props?: ({
    borderColor?: string | number | null | undefined;
    bgColor?: string | number | null | undefined;
    dropToSide?: string | number | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const iconButtonVariants: (props?: ({
    isSelected?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    rootClassString: string;
    contentColumnClassString: string;
    contentColumnHeaderClassString: string;
    contentColumnContainerClassString: string;
    iconColumnClassString: string;
    iconButtonClassString: string;
};
export interface CollapsibleDrawerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon: keyof typeof Icons;
    isSelected?: boolean;
    testId?: string;
}
export interface CollapsibleDrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    headerComponent: React.FC | React.ReactNode;
}
export interface CollapsibleDrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof rootVariants> {
    children?: React.ReactElement<CollapsibleSheetProps> | Array<React.ReactElement<CollapsibleSheetProps>>;
    bgColor?: string;
    borderColor?: string;
    className?: string;
    dropToSide?: 'left' | 'right';
    hideSidebarWhenOpen?: boolean;
    openSectionId?: string | null;
    testId?: string;
    w?: string | number;
    onSectionChange?: (newItemId: string | null, newItem: CollapsibleSheetProps | null, oldItem: CollapsibleSheetProps | null) => void;
}
export { rootVariants, contentColumnVariants, contentColumnHeaderVariants, contentColumnContainerVariants, iconColumnVariants, iconButtonVariants, componentVariants, };

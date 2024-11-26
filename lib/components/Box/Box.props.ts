import { cva, type VariantProps } from "class-variance-authority";

import { marginProps } from "../../props/margin.props";
import { paddingProps } from "../../props/padding.props";
import { heightProps } from "../../props/height.props";
import { widthProps } from "../../props/width.props";
import { bgColorProps } from "../../props/color.props";
import { borderProps } from "../../props/border.props";

const boxPropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
};
const boxVariants = cva("flex", {
  variants: {
    ...boxPropsVariants,
  },
});

enum asTypes {
  div = "div",
  span = "span",
}

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  className?: string;
  children?: React.ReactNode;
  as?: asTypes | keyof JSX.IntrinsicElements;
  asChild?: boolean;
  testId?: string;
}

export { boxVariants, asTypes };

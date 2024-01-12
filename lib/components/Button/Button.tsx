import styles from "./Button.module.scss";
import "../../main.scss";

import { cva, type VariantProps } from "class-variance-authority";


// CSS modules import a style object that you can use to access the class names

const buttonVariants = cva(styles.base,
  {
    variants: {
      variant: {
        primary: styles.primary,
        secondary: styles.secondary,
        destructive: styles.destructive,
        success: styles.success,
        link: styles.link,
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({
  className,
  variant,
  children = "Button",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, className})} {...props}>
      {children}
    </button>
  );
}

export { Button };

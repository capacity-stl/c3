import styles from "./Button.module.scss";
import "../../main.scss";

// export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
//   const { className, children = "Button", ...restProps } = props;
//   return (
//     <button className={`${className} ${styles.button} `} {...restProps}>
//       {children}
//     </button>
//   );
// }


import { cva, type VariantProps } from "class-variance-authority";

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

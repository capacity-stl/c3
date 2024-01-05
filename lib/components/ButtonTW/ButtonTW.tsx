import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "text-white text-sm rounded-lg py-2 px-4 shadow-md border-transparent hover:cursor-pointer text-center tracking-wide",
  {
    variants: {
      variant: {
        primary: "bg-earth-300 hover:bg-earth-400 active:bg-night",
        secondary: "bg-white border text-earth-300 border-earth-300 hover:bg-earth-100 active:bg-earth-200 active:text-earth-400",
        destructive:
          "bg-mars-300 hover:bg-mars-400 active:text-mars-200",
        success: "bg-neptune-300 hover:bg-neptune-300/90",
        link: "bg-transparent shadow-none text-earth-300  hover:bg-earth-100",
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

function ButtonTW({
  className,
  variant,
  children = "Button",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}

export { ButtonTW };

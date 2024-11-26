import { cn } from "../../utils/cn";
import { BoxProps, boxVariants, asTypes } from "./Box.props";
import { Slot } from "../Slot/Slot";

const Box = ({
  className,
  asChild,
  as: Tag = asTypes.div,
  children,
  ...boxProps
}: BoxProps) => {
  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      className={cn(boxVariants({ ...boxProps }), className, asChild, Tag)}
      data-testid="box-component"
    >
      {children}
    </Comp>
  );
};

export { Box };

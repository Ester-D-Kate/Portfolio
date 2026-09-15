import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-clay px-6 py-3.5 text-white shadow-[0_12px_30px_rgba(111,69,52,.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(111,69,52,.24)]",
        secondary: "border border-line bg-transparent px-5 py-3 text-foreground hover:border-mocha hover:text-mocha",
        ghost: "px-3 py-2 text-muted hover:bg-espresso hover:text-paper-light",
        link: "rounded-none border-b border-line px-0 pb-1 text-foreground hover:gap-3 hover:border-clay hover:text-clay",
      },
      size: {
        default: "min-h-12",
        sm: "min-h-9",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };

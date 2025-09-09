import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-md hover:shadow-lg hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline: "border border-primary/20 bg-card/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-md hover:shadow-lg hover:scale-105",
        ghost: "hover:bg-muted hover:text-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-dark",
        hero: "bg-gradient-primary text-primary-foreground font-semibold shadow-colorful hover:shadow-glow hover:scale-105 animate-glow",
        accent: "bg-accent text-accent-foreground hover:bg-accent-light shadow-md hover:shadow-lg hover:scale-105",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-md hover:shadow-lg hover:scale-105",
        gradient: "bg-gradient-secondary text-primary-foreground font-medium shadow-md hover:shadow-colorful hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

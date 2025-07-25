import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-campus-primary text-campus-white hover:bg-campus-primary-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-campus-white text-campus-white bg-campus-primary/20 hover:bg-campus-white hover:text-campus-primary backdrop-blur-sm",
        secondary:
          "bg-campus-secondary text-campus-text hover:bg-campus-secondary/90 hover:shadow-md",
        ghost: "text-campus-primary hover:bg-campus-primary-light hover:text-campus-primary-dark",
        link: "text-campus-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-campus-primary to-campus-accent text-campus-white hover:shadow-lg transform hover:-translate-y-1 text-base font-semibold",
        cta: "bg-campus-primary text-campus-white hover:bg-campus-primary-dark shadow-md hover:shadow-lg transform hover:scale-105 font-medium",
        accent: "bg-campus-accent text-campus-white hover:bg-campus-accent/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

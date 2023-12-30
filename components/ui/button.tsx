import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwinf.config.tsinline-flex tailwinf.config.tsitems-center tailwinf.config.tsjustify-center tailwinf.config.tswhitespace-nowrap tailwinf.config.tsrounded-md tailwinf.config.tstext-sm tailwinf.config.tsfont-medium tailwinf.config.tsring-offset-background tailwinf.config.tstransition-colors focus-visible:tailwinf.config.tsoutline-none focus-visible:tailwinf.config.tsring-2 focus-visible:tailwinf.config.tsring-ring focus-visible:tailwinf.config.tsring-offset-2 disabled:tailwinf.config.tspointer-events-none disabled:tailwinf.config.tsopacity-50",
  {
    variants: {
      variant: {
        default: "tailwinf.config.tsbg-primary tailwinf.config.tstext-primary-foreground hover:tailwinf.config.tsbg-primary/90",
        destructive:
          "tailwinf.config.tsbg-destructive tailwinf.config.tstext-destructive-foreground hover:tailwinf.config.tsbg-destructive/90",
        outline:
          "tailwinf.config.tsborder tailwinf.config.tsborder-input tailwinf.config.tsbg-background hover:tailwinf.config.tsbg-accent hover:tailwinf.config.tstext-accent-foreground",
        secondary:
          "tailwinf.config.tsbg-secondary tailwinf.config.tstext-secondary-foreground hover:tailwinf.config.tsbg-secondary/80",
        ghost: "hover:tailwinf.config.tsbg-accent hover:tailwinf.config.tstext-accent-foreground",
        link: "tailwinf.config.tstext-primary tailwinf.config.tsunderline-offset-4 hover:tailwinf.config.tsunderline",
      },
      size: {
        default: "tailwinf.config.tsh-10 tailwinf.config.tspx-4 tailwinf.config.tspy-2",
        sm: "tailwinf.config.tsh-9 tailwinf.config.tsrounded-md tailwinf.config.tspx-3",
        lg: "tailwinf.config.tsh-11 tailwinf.config.tsrounded-md tailwinf.config.tspx-8",
        icon: "tailwinf.config.tsh-10 tailwinf.config.tsw-10",
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

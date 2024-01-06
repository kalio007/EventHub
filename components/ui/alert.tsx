import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "tailwinf.config.tsrelative tailwinf.config.tsw-full tailwinf.config.tsrounded-lg tailwinf.config.tsborder tailwinf.config.tsp-4 [&>svg~*]:tailwinf.config.tspl-7 [&>svg+div]:tailwinf.config.tstranslate-y-[-3px] [&>svg]:tailwinf.config.tsabsolute [&>svg]:tailwinf.config.tsleft-4 [&>svg]:tailwinf.config.tstop-4 [&>svg]:tailwinf.config.tstext-foreground",
  {
    variants: {
      variant: {
        default: "tailwinf.config.tsbg-background tailwinf.config.tstext-foreground",
        destructive:
          "tailwinf.config.tsborder-destructive/50 tailwinf.config.tstext-destructive dark:tailwinf.config.tsborder-destructive [&>svg]:tailwinf.config.tstext-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("tailwinf.config.tsmb-1 tailwinf.config.tsfont-medium tailwinf.config.tsleading-none tailwinf.config.tstracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("tailwinf.config.tstext-sm [&_p]:tailwinf.config.tsleading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

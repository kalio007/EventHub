"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "tailwinf.config.tspeer tailwinf.config.tsh-4 tailwinf.config.tsw-4 tailwinf.config.tsshrink-0 tailwinf.config.tsrounded-sm tailwinf.config.tsborder tailwinf.config.tsborder-primary tailwinf.config.tsring-offset-background focus-visible:tailwinf.config.tsoutline-none focus-visible:tailwinf.config.tsring-2 focus-visible:tailwinf.config.tsring-ring focus-visible:tailwinf.config.tsring-offset-2 disabled:tailwinf.config.tscursor-not-allowed disabled:tailwinf.config.tsopacity-50 data-[state=checked]:tailwinf.config.tsbg-primary data-[state=checked]:tailwinf.config.tstext-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("tailwinf.config.tsflex tailwinf.config.tsitems-center tailwinf.config.tsjustify-center tailwinf.config.tstext-current")}
    >
      <Check className="tailwinf.config.tsh-4 tailwinf.config.tsw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

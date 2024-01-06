import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tailwinf.config.tsflex tailwinf.config.tsh-10 tailwinf.config.tsw-full tailwinf.config.tsrounded-md tailwinf.config.tsborder tailwinf.config.tsborder-input tailwinf.config.tsbg-background tailwinf.config.tspx-3 tailwinf.config.tspy-2 tailwinf.config.tstext-sm tailwinf.config.tsring-offset-background file:tailwinf.config.tsborder-0 file:tailwinf.config.tsbg-transparent file:tailwinf.config.tstext-sm file:tailwinf.config.tsfont-medium placeholder:tailwinf.config.tstext-muted-foreground focus-visible:tailwinf.config.tsoutline-none focus-visible:tailwinf.config.tsring-2 focus-visible:tailwinf.config.tsring-ring focus-visible:tailwinf.config.tsring-offset-2 disabled:tailwinf.config.tscursor-not-allowed disabled:tailwinf.config.tsopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

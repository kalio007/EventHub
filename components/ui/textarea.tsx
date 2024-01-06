import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "tailwinf.config.tsflex tailwinf.config.tsmin-h-[80px] tailwinf.config.tsw-full tailwinf.config.tsrounded-md tailwinf.config.tsborder tailwinf.config.tsborder-input tailwinf.config.tsbg-background tailwinf.config.tspx-3 tailwinf.config.tspy-2 tailwinf.config.tstext-sm tailwinf.config.tsring-offset-background placeholder:tailwinf.config.tstext-muted-foreground focus-visible:tailwinf.config.tsoutline-none focus-visible:tailwinf.config.tsring-2 focus-visible:tailwinf.config.tsring-ring focus-visible:tailwinf.config.tsring-offset-2 disabled:tailwinf.config.tscursor-not-allowed disabled:tailwinf.config.tsopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "tailwinf.config.tsfixed tailwinf.config.tsinset-0 tailwinf.config.tsz-50 tailwinf.config.tsbg-black/80 tailwinf.config.ts data-[state=open]:tailwinf.config.tsanimate-in data-[state=closed]:tailwinf.config.tsanimate-out data-[state=closed]:tailwinf.config.tsfade-out-0 data-[state=open]:tailwinf.config.tsfade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "tailwinf.config.tsfixed tailwinf.config.tsz-50 tailwinf.config.tsgap-4 tailwinf.config.tsbg-background tailwinf.config.tsp-6 tailwinf.config.tsshadow-lg tailwinf.config.tstransition tailwinf.config.tsease-in-out data-[state=open]:tailwinf.config.tsanimate-in data-[state=closed]:tailwinf.config.tsanimate-out data-[state=closed]:tailwinf.config.tsduration-300 data-[state=open]:tailwinf.config.tsduration-500",
  {
    variants: {
      side: {
        top: "tailwinf.config.tsinset-x-0 tailwinf.config.tstop-0 tailwinf.config.tsborder-b data-[state=closed]:tailwinf.config.tsslide-out-to-top data-[state=open]:tailwinf.config.tsslide-in-from-top",
        bottom:
          "tailwinf.config.tsinset-x-0 tailwinf.config.tsbottom-0 tailwinf.config.tsborder-t data-[state=closed]:tailwinf.config.tsslide-out-to-bottom data-[state=open]:tailwinf.config.tsslide-in-from-bottom",
        left: "tailwinf.config.tsinset-y-0 tailwinf.config.tsleft-0 tailwinf.config.tsh-full tailwinf.config.tsw-3/4 tailwinf.config.tsborder-r data-[state=closed]:tailwinf.config.tsslide-out-to-left data-[state=open]:tailwinf.config.tsslide-in-from-left sm:tailwinf.config.tsmax-w-sm",
        right:
          "tailwinf.config.tsinset-y-0 tailwinf.config.tsright-0 tailwinf.config.tsh-full tailwinf.config.tsw-3/4 tailwinf.config.ts tailwinf.config.tsborder-l data-[state=closed]:tailwinf.config.tsslide-out-to-right data-[state=open]:tailwinf.config.tsslide-in-from-right sm:tailwinf.config.tsmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="tailwinf.config.tsabsolute tailwinf.config.tsright-4 tailwinf.config.tstop-4 tailwinf.config.tsrounded-sm tailwinf.config.tsopacity-70 tailwinf.config.tsring-offset-background tailwinf.config.tstransition-opacity hover:tailwinf.config.tsopacity-100 focus:tailwinf.config.tsoutline-none focus:tailwinf.config.tsring-2 focus:tailwinf.config.tsring-ring focus:tailwinf.config.tsring-offset-2 disabled:tailwinf.config.tspointer-events-none data-[state=open]:tailwinf.config.tsbg-secondary">
        <X className="tailwinf.config.tsh-4 tailwinf.config.tsw-4" />
        <span className="tailwinf.config.tssr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwinf.config.tsflex tailwinf.config.tsflex-col tailwinf.config.tsspace-y-2 tailwinf.config.tstext-center sm:tailwinf.config.tstext-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwinf.config.tsflex tailwinf.config.tsflex-col-reverse sm:tailwinf.config.tsflex-row sm:tailwinf.config.tsjustify-end sm:tailwinf.config.tsspace-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("tailwinf.config.tstext-lg tailwinf.config.tsfont-semibold tailwinf.config.tstext-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("tailwinf.config.tstext-sm tailwinf.config.tstext-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

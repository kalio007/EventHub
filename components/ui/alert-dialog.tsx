"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "tailwinf.config.tsfixed tailwinf.config.tsinset-0 tailwinf.config.tsz-50 tailwinf.config.tsbg-black/80 tailwinf.config.ts data-[state=open]:tailwinf.config.tsanimate-in data-[state=closed]:tailwinf.config.tsanimate-out data-[state=closed]:tailwinf.config.tsfade-out-0 data-[state=open]:tailwinf.config.tsfade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "tailwinf.config.tsfixed tailwinf.config.tsleft-[50%] tailwinf.config.tstop-[50%] tailwinf.config.tsz-50 tailwinf.config.tsgrid tailwinf.config.tsw-full tailwinf.config.tsmax-w-lg tailwinf.config.tstranslate-x-[-50%] tailwinf.config.tstranslate-y-[-50%] tailwinf.config.tsgap-4 tailwinf.config.tsborder tailwinf.config.tsbg-background tailwinf.config.tsp-6 tailwinf.config.tsshadow-lg tailwinf.config.tsduration-200 data-[state=open]:tailwinf.config.tsanimate-in data-[state=closed]:tailwinf.config.tsanimate-out data-[state=closed]:tailwinf.config.tsfade-out-0 data-[state=open]:tailwinf.config.tsfade-in-0 data-[state=closed]:tailwinf.config.tszoom-out-95 data-[state=open]:tailwinf.config.tszoom-in-95 data-[state=closed]:tailwinf.config.tsslide-out-to-left-1/2 data-[state=closed]:tailwinf.config.tsslide-out-to-top-[48%] data-[state=open]:tailwinf.config.tsslide-in-from-left-1/2 data-[state=open]:tailwinf.config.tsslide-in-from-top-[48%] sm:tailwinf.config.tsrounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
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
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
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
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("tailwinf.config.tstext-lg tailwinf.config.tsfont-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("tailwinf.config.tstext-sm tailwinf.config.tstext-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "tailwinf.config.tsmt-2 sm:tailwinf.config.tsmt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

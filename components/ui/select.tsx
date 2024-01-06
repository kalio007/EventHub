"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwinf.config.tsflex tailwinf.config.tsh-10 tailwinf.config.tsw-full tailwinf.config.tsitems-center tailwinf.config.tsjustify-between tailwinf.config.tsrounded-md tailwinf.config.tsborder tailwinf.config.tsborder-input tailwinf.config.tsbg-background tailwinf.config.tspx-3 tailwinf.config.tspy-2 tailwinf.config.tstext-sm tailwinf.config.tsring-offset-background placeholder:tailwinf.config.tstext-muted-foreground focus:tailwinf.config.tsoutline-none focus:tailwinf.config.tsring-2 focus:tailwinf.config.tsring-ring focus:tailwinf.config.tsring-offset-2 disabled:tailwinf.config.tscursor-not-allowed disabled:tailwinf.config.tsopacity-50 [&>span]:tailwinf.config.tsline-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="tailwinf.config.tsh-4 tailwinf.config.tsw-4 tailwinf.config.tsopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "tailwinf.config.tsflex tailwinf.config.tscursor-default tailwinf.config.tsitems-center tailwinf.config.tsjustify-center tailwinf.config.tspy-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="tailwinf.config.tsh-4 tailwinf.config.tsw-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "tailwinf.config.tsflex tailwinf.config.tscursor-default tailwinf.config.tsitems-center tailwinf.config.tsjustify-center tailwinf.config.tspy-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="tailwinf.config.tsh-4 tailwinf.config.tsw-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "tailwinf.config.tsrelative tailwinf.config.tsz-50 tailwinf.config.tsmax-h-96 tailwinf.config.tsmin-w-[8rem] tailwinf.config.tsoverflow-hidden tailwinf.config.tsrounded-md tailwinf.config.tsborder tailwinf.config.tsbg-popover tailwinf.config.tstext-popover-foreground tailwinf.config.tsshadow-md data-[state=open]:tailwinf.config.tsanimate-in data-[state=closed]:tailwinf.config.tsanimate-out data-[state=closed]:tailwinf.config.tsfade-out-0 data-[state=open]:tailwinf.config.tsfade-in-0 data-[state=closed]:tailwinf.config.tszoom-out-95 data-[state=open]:tailwinf.config.tszoom-in-95 data-[side=bottom]:tailwinf.config.tsslide-in-from-top-2 data-[side=left]:tailwinf.config.tsslide-in-from-right-2 data-[side=right]:tailwinf.config.tsslide-in-from-left-2 data-[side=top]:tailwinf.config.tsslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:tailwinf.config.tstranslate-y-1 data-[side=left]:tailwinf.config.ts-translate-x-1 data-[side=right]:tailwinf.config.tstranslate-x-1 data-[side=top]:tailwinf.config.ts-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "tailwinf.config.tsp-1",
          position === "popper" &&
            "tailwinf.config.tsh-[var(--radix-select-trigger-height)] tailwinf.config.tsw-full tailwinf.config.tsmin-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("tailwinf.config.tspy-1.5 tailwinf.config.tspl-8 tailwinf.config.tspr-2 tailwinf.config.tstext-sm tailwinf.config.tsfont-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "tailwinf.config.tsrelative tailwinf.config.tsflex tailwinf.config.tsw-full tailwinf.config.tscursor-default tailwinf.config.tsselect-none tailwinf.config.tsitems-center tailwinf.config.tsrounded-sm tailwinf.config.tspy-1.5 tailwinf.config.tspl-8 tailwinf.config.tspr-2 tailwinf.config.tstext-sm tailwinf.config.tsoutline-none focus:tailwinf.config.tsbg-accent focus:tailwinf.config.tstext-accent-foreground data-[disabled]:tailwinf.config.tspointer-events-none data-[disabled]:tailwinf.config.tsopacity-50",
      className
    )}
    {...props}
  >
    <span className="tailwinf.config.tsabsolute tailwinf.config.tsleft-2 tailwinf.config.tsflex tailwinf.config.tsh-3.5 tailwinf.config.tsw-3.5 tailwinf.config.tsitems-center tailwinf.config.tsjustify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="tailwinf.config.tsh-4 tailwinf.config.tsw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("tailwinf.config.ts-mx-1 tailwinf.config.tsmy-1 tailwinf.config.tsh-px tailwinf.config.tsbg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

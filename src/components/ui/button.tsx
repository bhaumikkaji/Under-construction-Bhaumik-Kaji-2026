
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-indigoPurple text-white hover:bg-indigoPurple/90 dark:bg-darkbg dark:text-cybertext dark:border dark:border-cybertext dark:hover:bg-cybertext/10",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive/20 dark:text-cybertext dark:border dark:border-cybertext/50",
        outline:
          "border border-indigoPurple bg-background text-indigoPurple hover:bg-stone/50 hover:text-indigoPurple dark:border-cybertext dark:text-cybertext dark:hover:bg-cybertext/10",
        secondary:
          "bg-stone text-indigoPurple hover:bg-stone/80 dark:bg-darkbg dark:text-cybertext dark:border dark:border-cybertext/50 dark:hover:bg-cybertext/10",
        ghost: "text-indigoPurple hover:bg-stone/50 hover:text-indigoPurple dark:text-cybertext dark:hover:bg-cybertext/10",
        link: "text-indigoPurple underline-offset-4 hover:underline dark:text-cybertext",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 p-0",
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

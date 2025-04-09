
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigoPurple text-white hover:bg-indigoPurple/80 dark:bg-darkbg dark:text-cybertext dark:border dark:border-cybertext dark:hover:bg-cyberborder/80",
        secondary:
          "border-transparent bg-stone text-indigoPurple hover:bg-stone/80 dark:bg-darkbg dark:border-cyberborder dark:text-cybertext dark:hover:opacity-80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 dark:border-transparent dark:bg-destructive/20 dark:text-cybertext dark:border dark:border-cybertext/30",
        outline: "text-indigoPurple border-indigoPurple dark:text-cybertext dark:border-cybertext",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

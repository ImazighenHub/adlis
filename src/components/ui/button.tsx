import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define shared styles for primary and default variants
const primaryStyles =
  'bg-primary text-primary-foreground shadow hover:bg-primary/90';

const buttonVariants = cva(
  'inline-flex h-13 items-center justify-center rounded-sm fill-neutral-100 px-5 font-bold text-neutral-100 transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: primaryStyles,
        primary: primaryStyles,
        destructive: 'bg-destructive shadow-sm hover:bg-destructive/90',
        outline: 'border border-neutral-100',
        secondary: 'shadow-sm hover:bg-secondary/80',
        ghost: 'bg-transparent hover:fill-neutral-300 hover:text-neutral-300',
        link: 'text-primary underline-offset-4 hover:underline',
        purple: 'text-neutral-100 hover:bg-purple-100/90',
      },
      size: {
        default: 'h-13 px-5',
        sm: 'h-8 text-xs [&_svg]:size-4',
        md: 'h-9 [&_svg]:size-6',
        medium: 'h-9 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

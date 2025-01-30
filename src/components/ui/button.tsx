import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define shared styles for primary and default variants
const primaryStyles =
  'bg-purple-100/80 text-neutral-100 shadow hover:bg-purple-100/60 active:bg-purple-100';

const buttonVariants = cva(
  'inline-flex h-12 items-center justify-center border-2 border-black fill-neutral-100 font-bold text-neutral-100 transition-colors hover:shadow-primary-100 active:shadow-primary-100 dark:border-0 dark:fill-white dark:text-white dark:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: primaryStyles,
        primary: primaryStyles,
        destructive: 'bg-destructive  hover:bg-destructive/90',
        outline: 'border border-neutral-100',
        secondary: 'shadow-sm hover:bg-secondary/80',
        ghost:
          'bg-transparent hover:bg-neutral-100 hover:fill-white hover:text-white dark:border-1 dark:border-white dark:hover:bg-white dark:hover:fill-neutral-100 dark:hover:text-neutral-100',
        link: 'text-primary underline-offset-4 hover:underline',
        purple: 'text-neutral-100 hover:bg-purple-100/90',
      },
      size: {
        default: 'h-13 px-5 [&_svg]:size-6',
        sm: 'h-8 px-2 text-sm [&_svg]:size-4',
        md: 'h-9 px-3 [&_svg]:size-6',
        icon: 'size-10 px-0',
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

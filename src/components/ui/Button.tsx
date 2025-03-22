import * as React from 'react';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define shared styles for primary and default variants
const primaryStyles =
  'bg-purple-100/80 text-neutral-100 enabled:hover:bg-purple-100/60 active:bg-purple-100 dark:border-0';

const buttonVariants = cva(
  'inline-flex h-12 select-none items-center justify-center border-2 border-black fill-neutral-100 font-bold text-neutral-100 shadow-primary-1 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none dark:fill-white dark:text-white dark:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: primaryStyles,
        primary: primaryStyles,
        destructive: 'bg-destructive enabled:hover:bg-destructive/90',
        outline: 'border border-neutral-100',
        secondary: 'shadow-sm enabled:hover:bg-secondary/80',
        ghost:
          'bg-transparent enabled:hover:bg-neutral-100 enabled:hover:fill-white enabled:hover:text-white dark:border-1 dark:border-white dark:enabled:hover:bg-white dark:enabled:hover:fill-neutral-100 dark:enabled:hover:text-neutral-100',
        link: 'text-primary underline-offset-4 enabled:hover:underline',
        purple: 'text-neutral-100 enabled:hover:bg-purple-100/90',
      },
      size: {
        default: 'h-13 px-5 [&_svg]:size-6',
        sm: 'h-8 px-2 text-sm [&_svg]:size-4',
        md: 'h-9 px-3 [&_svg]:size-6',
        icon: 'size-10 px-0 !shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

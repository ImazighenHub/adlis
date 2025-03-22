import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type {
  InputIconComponent,
  InputIconPropsWithBehavior,
  InputIconPropsWithoutBehavior,
} from '@/components';

/**
 * Variants for the base input component.
 */
export const inputVariants = cva(
  'flex w-full fill-neutral-100 px-3 py-1 text-base text-neutral-100 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:fill-white dark:text-white dark:shadow-none',
  {
    variants: {
      size: {
        sm: 'h-8 text-sm focus:shadow-primary-1 active:shadow-primary-1',
        md: 'h-12 focus:shadow-primary-2 active:shadow-primary-2',
        default: 'h-16 focus:shadow-primary-3 active:shadow-primary-3',
      },
      color: {
        default: 'border border-neutral-100 bg-white',
        success: 'border border-success  focus-visible:ring-green-500',
        destructive: 'border border-destructive focus-visible:ring-red-500',
        warning: 'border border-warning focus-visible:ring-yellow-500',
      },
    },
    defaultVariants: {
      size: 'default',
      color: 'default',
    },
  },
);

/**
 * Props for the base Input component.
 *
 * @template T - Optional icon component type.
 */
export interface InputBaseProps<
  T extends InputIconComponent = InputIconComponent,
> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Optional icon component to be rendered with the input.
   */
  icon?: T;
  /**
   * Props for the icon. For password inputs (handled separately) the behavior should not be provided.
   * For non-password inputs, you can specify a behavior of either 'append' or 'prepend'.
   */
  iconProps?: T extends InputIconComponent<infer P>
    ? InputHTMLAttributes<SVGElement> extends P
      ? InputIconPropsWithBehavior<P>
      : InputIconPropsWithoutBehavior<P>
    : never;
  /**
   * Additional classes for the container wrapping the input.
   */
  inputContainerClassName?: string;
  /**
   * Optional error state for the input.
   */
  error?: boolean;
}

/**
 * A server-rendered base input component.
 *
 * Renders a standard `<input>` element with optional icon support.
 *
 * @param props - Props for the input, including variant props and icon settings.
 * @returns A JSX element.
 */
export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      className,
      icon: Icon,
      iconProps: {
        behavior: iconBehavior = 'append',
        className: iconClassName,
        ...iconProps
      } = {},
      inputContainerClassName,
      size,
      color: inputColor,
      error,
      ...props
    },
    ref,
  ) => {
    // Compute extra padding if an icon is rendered.
    const extraPaddingClasses = cn(
      Icon && iconBehavior === 'prepend' && 'pl-10',
      Icon && iconBehavior === 'append' && 'pr-10',
    );

    const color = error ? 'destructive' : inputColor;

    return (
      <div className={cn('relative', inputContainerClassName)}>
        {Icon && iconBehavior === 'prepend' && (
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <Icon className={cn('h-full', iconClassName)} {...iconProps} />
          </div>
        )}
        <input
          className={cn(
            inputVariants({ size, color, className }),
            extraPaddingClasses,
          )}
          ref={ref}
          {...props}
        />
        {Icon && iconBehavior === 'append' && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <Icon className={cn('h-full', iconClassName)} {...iconProps} />
          </div>
        )}
      </div>
    );
  },
);

InputBase.displayName = 'InputBase';

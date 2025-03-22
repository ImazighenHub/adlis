import {
  ComponentPropsWithoutRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { InputBase } from './InputBase';
import { PasswordInput } from '@/components';

/**
 * Props for the unified Input component.
 *
 * Extends the props for the base input component.
 */
export interface InputProps extends ComponentPropsWithoutRef<typeof InputBase> {
  /**
   * The type of the input.
   *
   * When set to "password", the component renders with additional interactive behavior.
   */
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  error?: boolean;
}

/**
 * A unified Input component that renders on the server by default.
 *
 * - For `type="password"`, it delegates to a client component that supports interactive
 *   behaviors (password visibility toggle and Caps Lock detection).
 * - For other types, it renders the basic InputBase.
 *
 * @param props - Props for the input component.
 * @returns A JSX element.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref) => {
    if (type === 'custom') {
      console.error(
        'Custom input type detected. Please use the specialized component designed for your custom input type rather than the generic Input component.',
      );
    }
    if (type === 'password') {
      return <PasswordInput ref={ref} {...props} />;
    }
    return <InputBase ref={ref} type={type} {...props} />;
  },
);

Input.displayName = 'Input';

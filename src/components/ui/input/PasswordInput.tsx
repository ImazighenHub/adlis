'use client';

import {
  ComponentPropsWithoutRef,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import { InputBase } from './InputBase';
import { ArrowBigUpDashIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

/**
 * Props for the PasswordInput component.
 *
 * Extends the basic input props (minus the "type" prop) and the additional
 * properties needed for interactive password behavior.
 */
export interface PasswordInputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'type' | 'color' | 'size'
    >,
    Omit<ComponentPropsWithoutRef<typeof InputBase>, 'type'> {
  error?: boolean;
}

/**
 * A client-rendered password input component.
 *
 * Provides a toggle for showing/hiding the password and shows a tooltip
 * if the Caps Lock key is active.
 *
 * @param props - Props for the password input.
 * @returns A JSX element.
 */
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, inputContainerClassName, onKeyDown, ...props }, ref) => {
    // State to determine if the password is visible.
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
    // State to track if Caps Lock is active.
    const [capsLockActive, setCapsLockActive] = useState<boolean>(false);

    /**
     * Handles the key down event to check for Caps Lock.
     *
     * @param event - The keyboard event.
     */
    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      const capsLockOn = event.getModifierState('CapsLock');
      setCapsLockActive(capsLockOn);
      onKeyDown?.(event);
    };

    // Listen for global keydown and keyup events to update the Caps Lock status.
    useEffect(() => {
      const updateCapsLock = (event: KeyboardEvent) => {
        setCapsLockActive(event.getModifierState('CapsLock'));
      };

      window.addEventListener('keydown', updateCapsLock);
      window.addEventListener('keyup', updateCapsLock);

      return () => {
        window.removeEventListener('keydown', updateCapsLock);
        window.removeEventListener('keyup', updateCapsLock);
      };
    }, []);

    // Determine the input type based on the visibility toggle.
    const computedType = visiblePassword ? 'text' : 'password';

    return (
      <div className='relative'>
        {/* Render the base input with computed type and the custom keydown handler */}
        <InputBase
          {...props}
          ref={ref}
          type={computedType}
          className={className}
          inputContainerClassName={inputContainerClassName}
          onKeyDown={handleKeyDown}
        />
        {/* Render the password toggle and caps lock indicator */}
        <div className='absolute inset-y-0 right-0 flex items-center gap-x-1 pr-3'>
          {visiblePassword ? (
            <EyeOffIcon
              className='h-full cursor-pointer'
              onClick={() => setVisiblePassword(false)}
              size={20}
            />
          ) : (
            <EyeIcon
              className='h-full cursor-pointer'
              onClick={() => setVisiblePassword(true)}
              size={20}
            />
          )}
          {capsLockActive && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ArrowBigUpDashIcon className='h-full' size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Caps Lock is on!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

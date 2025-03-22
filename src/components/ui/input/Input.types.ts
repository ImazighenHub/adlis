import type { ComponentType, SVGProps } from 'react';
import type { LucideProps } from 'lucide-react';

/**
 * The union type for icon properties. This supports icons that come from Lucide or a generic SVG.
 */
export type InputIconProps =
  | LucideProps
  | (SVGProps<SVGSVGElement> & { children?: never });

/**
 * Icon props for components that support an explicit behavior (either appending or prepending).
 */
export type InputIconPropsWithBehavior<T extends InputIconProps> = T & {
  behavior: 'append' | 'prepend';
};

/**
 * Icon props for components that do not require a behavior flag.
 */
export type InputIconPropsWithoutBehavior<T extends InputIconProps> = T & {
  // FIXME: Ideally this would be `never`, but it causes issues with inference, so it needs to be fixed.
  behavior?: never;
};

/**
 * A generic type for an icon component used in the Input.
 */
export type InputIconComponent<T extends InputIconProps = InputIconProps> =
  ComponentType<T>;

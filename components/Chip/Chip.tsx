import { forwardRef, ReactNode } from 'react';
import { ChipVariant } from './types';

const variantStyles: Record<ChipVariant, string> = {
  default: 'bg-gray-100 text-gray-900',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  error: 'bg-error-100 text-error-700',
  important: 'bg-info-100 text-info-700',
};

export interface ChipProps {
  /**
   * Optional. Specifies the variant of the chip. Defaults to 'default'.
   */
  variant?: ChipVariant;
  /**
   * The label text displayed on the chip.
   */
  label: string;
  /**
   * Optional icon to display alongside the label.
   */
  icon?: ReactNode;
  /**
   *  Optional additional CSS class names to apply to the chip.
   */
  className?: string;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, icon, label, variant = 'default' }, ref) => {
    return (
      <div
        ref={ref}
        className={`inline-flex items-center gap-2 px-2 py-1 rounded-full font-medium text-[14px] leading-[16.8px] ${variantStyles[variant]} ${className}`}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    );
  },
);

Chip.displayName = 'Chip';

import { ChipVariant } from './types';

export interface ChipIconExampleProps {
  /**
   * Optional. Specifies the variant of the chip icon.
   */
  variant?: ChipVariant;
  /**
   * Optional. Specifies the color of the chip icon.
   */
  color?: string;
}

const variantClasses: Record<ChipVariant, string> = {
  default: 'text-gray-500',
  success: 'text-success-700',
  warning: 'text-warning-700',
  error: 'text-error-700',
  important: 'text-info-700',
};

export function ChipIconExample({
  variant = 'default',
  color,
}: ChipIconExampleProps) {
  return (
    <svg
      className={`fill-current ${variantClasses[variant]}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.55499 3.14062L6.91386 1.57629C7.60896 1.25256 8.40239 1.25256 9.09748 1.57629L12.443 3.13442C13.4214 3.59006 14.0635 4.61413 13.995 5.73371C13.7321 10.0281 12.5604 11.9695 9.39325 14.2217C8.55742 14.816 7.45484 14.8146 6.61839 14.2212C3.46094 11.9811 2.24581 10.0669 2.00411 5.71865C1.94229 4.60642 2.58343 3.59311 3.55499 3.14062ZM8 9.3335C8.73638 9.3335 9.33333 8.73654 9.33333 8.00016C9.33333 7.26378 8.73638 6.66683 8 6.66683C7.26362 6.66683 6.66667 7.26378 6.66667 8.00016C6.66667 8.73654 7.26362 9.3335 8 9.3335Z"
        fill={color}
      />
    </svg>
  );
}
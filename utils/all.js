

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cx = (...classNames) =>
  classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }) => {
  return src;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
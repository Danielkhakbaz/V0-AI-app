import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const merge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

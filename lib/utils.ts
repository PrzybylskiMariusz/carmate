import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isWeekend(date: Date) {
	const day = date.getDay();
	return day === 0 || day === 6;
}

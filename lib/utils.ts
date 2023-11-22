import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isWeekend(date: Date) {
	const day = date.getDay();
	return day === 0 || day === 6;
}

export function convertJsonDateToReadableFormat(jsonDate: string): string {
	const date = new Date(jsonDate);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const readableDate = date.toLocaleDateString("pl-PL", options);

	return readableDate;
}

"use client";
import { Calendar } from "@/components/ui/calendar";
import { isWeekend } from "@/lib/utils";
import { pl } from "date-fns/locale";
import { useState } from "react";
import CustomCaption from "./CustomCaption";

const RightSidebar = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const modifiers = {
		weekend: isWeekend,
	};
	return (
		<section className="custom-scrollbar background-light900_dark800 sticky right-0 top-0 mb-6 flex h-screen max-h-[632px] w-[311px] flex-col justify-between border-l border-light-700 px-4 dark:border-dark-700">
			<div>
				<h3 className="h3-bold text-dark900_light900">Do zrobienia</h3>
			</div>
			<div className="flex flex-col gap-6">
				<h3 className="h3-bold text-dark900_light900">Kalendarz</h3>

				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="caption-medium text-dark900_light900 rounded-md p-0"
					locale={pl}
					showOutsideDays
					modifiers={modifiers}
					modifiersClassNames={{
						weekend: "rdp--weekend",
						today: "calendar-today",
					}}
					components={{ Caption: CustomCaption }}
					disableNavigation
				/>
			</div>
		</section>
	);
};

export default RightSidebar;
// max-h-[632px]

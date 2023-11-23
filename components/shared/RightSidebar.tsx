"use client";
import { Calendar } from "@/components/ui/calendar";
import { convertJsonDateToReadableFormat, isWeekend } from "@/lib/utils";
import { pl } from "date-fns/locale";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import CustomCaption from "./CustomCaption";

const hotTasks = [
	{
		_id: 1,
		title: "Przedłużyć ubezpieczenie OC dla Mazdy",
		date: "2023-11-23T00:00:00Z",
		done: false,
	},
	{
		_id: 5,
		title: "Wymiana opon Fiat",
		date: "2023-11-24T00:00:00Z",
		done: false,
	},
];

const RightSidebar = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const modifiers = {
		weekend: isWeekend,
	};
	return (
		<section className="custom-scrollbar background-light900_dark800 sticky right-0 top-0 mb-6 flex h-[calc(100vh-169px)] w-[311px] flex-col justify-between overflow-y-auto border-l border-light-700 px-4 dark:border-dark-700 max-xl:hidden">
			<div className="flex flex-col gap-6">
				<h3 className="h3-bold text-dark900_light900">Do zrobienia</h3>
				<div className="flex flex-col gap-4">
					{hotTasks.map((task) => (
						<div className="flex flex-col gap-1" key={task._id}>
							<p className="paragraph-regular text-dark900_light900">
								{task.title}
							</p>
							<p className="caption-regular text-light-600">
								{convertJsonDateToReadableFormat(task.date)}
							</p>
						</div>
					))}
				</div>
				<Link href="/todos">
					<Button className="body-medium btn-secondary min-h-[56px] w-full px-8 py-4 text-primary-500">
						Pokaż więcej zadań
					</Button>
				</Link>
			</div>
			<div className="mt-8 flex flex-col gap-6">
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

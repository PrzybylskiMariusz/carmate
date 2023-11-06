"use client";
import { useTheme } from "@/context/ThemeProvider";

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import Image from "next/image";

const Theme = () => {
	const { mode, setMode } = useTheme();
	return (
		<Menubar className="relative border-none bg-transparent shadow-none">
			<MenubarMenu>
				<MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-800 dark:data-[state=open]:bg-dark-800">
					{mode === "light" ? (
						<Image
							src="/assets/icons/sun.svg"
							alt="sun"
							width={24}
							height={24}
							className="active-theme"
						/>
					) : (
						<Image
							src="/assets/icons/moon.svg"
							alt="moon"
							width={24}
							height={24}
							className="active-theme"
						/>
					)}
				</MenubarTrigger>
				<MenubarContent className="absolute right-[-3rem] mt-3 min-w-[140px] rounded border bg-light-900 py-2 dark:border-dark-800 dark:bg-dark-700">
					{themes.map((item) => (
						<MenubarItem
							key={item.value}
							className="flex items-center gap-4 px-2.5 py-2 focus:bg-light-900 dark:focus:bg-dark-800"
							onClick={() => {
								setMode(item.value);

								if (item.value !== "system") {
									localStorage.theme = item.value;
								} else {
									localStorage.removeItem("theme");
								}
							}}>
							<Image
								src={item.icon}
								alt={item.value}
								width={20}
								height={20}
								className={`${mode === item.value && "active-theme"}`}
							/>

							<p
								className={`body-medium text-dark-900 ${
									mode === item.value
										? "text-accent-500"
										: "text-dark900_light900"
								}`}>
								{item.label}
							</p>
						</MenubarItem>
					))}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};

export default Theme;

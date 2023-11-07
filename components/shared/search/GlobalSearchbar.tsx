"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

const GlobalSearchbar = () => {
	return (
		<div className="relative w-full max-w-[600px] max-lg:hidden">
			<div className="background-light700_dark700 relative flex min-h-[56px] grow items-center gap-1 rounded-lg px-4">
				<Image
					src="/assets/icons/search.svg"
					alt="search"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
				<Input
					type="text"
					placeholder="Search anything globally..."
					value=""
					onChange={() => {}}
					className="paragraph-regular no-focus border-none bg-transparent shadow-none outline-none placeholder:text-light-600"
				/>
			</div>
		</div>
	);
};

export default GlobalSearchbar;

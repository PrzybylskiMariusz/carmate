"use client";

import { sidebarLinks } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
	const pathname = usePathname();
	const { mode } = useTheme();
	return (
		<section className="custom-scrollbar background-light900_dark800 flex h-screen min-w-fit flex-col overflow-y-auto border-r border-light-700 p-6 dark:border-dark-700 max-sm:hidden lg:w-[281px]">
			{mode === "light" ? (
				<Link href="/" className="flex-center dark:hidden">
					<Image
						src="/assets/images/logo-light.svg"
						alt="App logo"
						width={140}
						height={44}
						className="max-lg:hidden"
					/>
					<Image
						src="/assets/images/logo-light-mobile.svg"
						alt="App logo"
						width={58}
						height={44}
						className="lg:hidden"
					/>
				</Link>
			) : (
				<Link href="/" className="flex-center light:hidden">
					<Image
						src="/assets/images/logo-dark.svg"
						alt="App logo"
						width={140}
						height={44}
						className="max-lg:hidden"
					/>
					<Image
						src="/assets/images/logo-dark-mobile.svg"
						alt="App logo"
						width={58}
						height={44}
						className="lg:hidden"
					/>
				</Link>
			)}

			<div className="mt-16 flex flex-col gap-4">
				{sidebarLinks.map((link) => {
					const isActive =
						(pathname.includes(link.route) && link.route.length > 1) ||
						pathname === link.route;

					return (
						<Link
							key={link.route}
							href={link.route}
							className={`${
								isActive
									? "rounded-lg bg-primary-500 text-light-900"
									: "text-dark900_light900"
							} flex items-center justify-start gap-3 p-4`}>
							<Image
								src={link.imgUrl}
								alt={link.label}
								width={24}
								height={24}
								className={`${isActive ? "" : "invert-colors"}`}
							/>
							<p
								className={`${
									isActive ? "body-bold" : "body-medium"
								} min-w-[161px] max-lg:hidden`}>
								{link.label}
							</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default LeftSidebar;

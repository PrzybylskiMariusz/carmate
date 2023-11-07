"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
	const pathname = usePathname();

	return (
		<section className="flex h-full flex-col gap-6 pt-16">
			{sidebarLinks.map((item) => {
				const isActive =
					(pathname.includes(item.route) && item.route.length > 1) ||
					pathname === item.route;
				return (
					<SheetClose asChild key={item.route}>
						<Link
							href={item.route}
							className={`${
								isActive
									? "rounded-lg bg-primary-500 text-light-900"
									: "text-dark900_light900"
							} flex items-center justify-start gap-3 p-4`}>
							<Image
								src={item.imgUrl}
								alt={item.label}
								width={24}
								height={24}
								className={`${isActive ? "" : "invert-colors"}`}
							/>
							<p className={`${isActive ? "body-bold" : "body-medium"}`}>
								{item.label}
							</p>
						</Link>
					</SheetClose>
				);
			})}
		</section>
	);
};

const MobileNav = () => {
	const { mode } = useTheme();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Image
					src="/assets/icons/bars.svg"
					width={36}
					height={36}
					alt="Menu"
					className="invert-colors sm:hidden"
				/>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="background-light900_dark800 text-dark900_light900 min-w-fit border-none">
				{mode === "light" ? (
					<Link href="/" className="flex dark:hidden">
						<Image
							src="/assets/images/logo-light.svg"
							alt="App logo"
							width={140}
							height={44}
						/>
					</Link>
				) : (
					<Link href="/" className="light:hidden flex">
						<Image
							src="/assets/images/logo-dark.svg"
							alt="App logo"
							width={140}
							height={44}
						/>
					</Link>
				)}
				<div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
					<SheetClose asChild>
						<NavContent />
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;

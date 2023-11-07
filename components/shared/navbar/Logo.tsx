"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	const { mode } = useTheme();
	return (
		<>
			{mode === "light" ? (
				<Link href="/" className="flex-center sm:hidden">
					<Image
						src="/assets/images/logo-light-mobile.svg"
						alt="App logo"
						width={58}
						height={44}
					/>
				</Link>
			) : (
				<Link href="/" className="flex-center sm:hidden">
					<Image
						src="/assets/images/logo-dark-mobile.svg"
						alt="App logo"
						width={58}
						height={44}
					/>
				</Link>
			)}
		</>
	);
};

export default Logo;

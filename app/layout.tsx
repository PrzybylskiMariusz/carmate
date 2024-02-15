import { ThemeProvider } from "@/context/ThemeProvider";
import { plPL } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Carmate - kieszonkowy garaż",
	description: "Zarządzaj wszystkimi swoimi pojazdami z jednego miejsca",
	icons: {
		icon: "/assets/images/site-logo.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={poppins.variable}>
				<ClerkProvider
					localization={plPL}
					appearance={{
						elements: {
							formButtonPrimary: "bg-primary-500",
							footerActionLink: "text-primary-500 hover:text-dark-600",
						},
					}}>
					<ThemeProvider>{children}</ThemeProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}

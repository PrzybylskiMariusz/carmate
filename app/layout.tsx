import { ThemeProvider } from "@/context/ThemeProvider";
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
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}

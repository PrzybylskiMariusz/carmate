import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="background-light900_dark800 relative flex">
			<LeftSidebar />
			<div className="relative mx-12 flex-1 max-sm:mx-0">
				<Navbar />
				<div className="relative mt-6 flex w-full">
					<section className="flex-1">{children}</section>
					<RightSidebar />
				</div>
			</div>
		</main>
	);
};

export default Layout;

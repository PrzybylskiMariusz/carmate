import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="background-light900_dark800 relative flex">
			<LeftSidebar />
			<div className="relative mx-12 w-full max-sm:mx-0">
				<Navbar />
				<div className="mt-6 flex">
					<section>{children}</section>
					RightSidebar
				</div>
			</div>
		</main>
	);
};

export default Layout;

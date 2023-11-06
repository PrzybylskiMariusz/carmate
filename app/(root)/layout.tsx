import LeftSidebar from "@/components/shared/LeftSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="background-light900_dark800 relative flex">
			<LeftSidebar />
			<div>
				NavBar
				<div className="flex">
					<section>{children}</section>
					RightSidebar
				</div>
			</div>
		</main>
	);
};

export default Layout;

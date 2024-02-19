import { SignedIn, UserButton } from "@clerk/nextjs";
import GlobalSearchbar from "../search/GlobalSearchbar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark800 light-border max-sm:flex-between sticky z-50 box-border w-full gap-5 border-b py-6 max-lg:justify-end max-sm:px-6">
			<Logo />
			<GlobalSearchbar />
			<div className="flex-between gap-5">
				<Theme />
				<div className="h-[40px] w-[1px] rounded-sm bg-light-700 dark:bg-dark-700"></div>
				<SignedIn>
					<UserButton
						appearance={{
							elements: {
								avatarBox: "h-10 w-10",
							},
							variables: {
								colorPrimary: "#305EFF",
							},
						}}
						afterSignOutUrl="/"
					/>
				</SignedIn>
				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;

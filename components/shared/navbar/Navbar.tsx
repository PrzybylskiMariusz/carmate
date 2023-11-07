import GlobalSearchbar from "../search/GlobalSearchbar";
import Theme from "./Theme";

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark800 light-border sticky z-50 box-border w-full gap-5 border-b py-6 max-sm:px-6">
			<GlobalSearchbar />
			<Theme />
		</nav>
	);
};

export default Navbar;

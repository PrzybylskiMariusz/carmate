import Theme from "./Theme";

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark800 sticky z-50 w-full gap-5 p-6 sm:px-12">
			<div>GlobalSearch</div>
			<Theme />
		</nav>
	);
};

export default Navbar;

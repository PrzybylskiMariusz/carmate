import { SidebarLinks } from "@/types";

export const themes = [
	{ value: "light", label: "Jasny", icon: "/assets/icons/sun.svg" },
	{ value: "dark", label: "Ciemny", icon: "/assets/icons/moon.svg" },
	{ value: "system", label: "System", icon: "/assets/icons/desktop.svg" },
];

export const sidebarLinks: SidebarLinks[] = [
	{
		imgUrl: "/assets/icons/estate.svg",
		route: "/",
		label: "Pulpit",
	},
	{
		imgUrl: "/assets/icons/history-alt.svg",
		route: "/reviews",
		label: "Historia przeglądów",
	},
	{
		imgUrl: "/assets/icons/wrench.svg",
		route: "/services",
		label: "Lista serwisów",
	},
	{
		imgUrl: "/assets/icons/clipboard-notes.svg",
		route: "/todos",
		label: "Do zrobienia",
	},
	{
		imgUrl: "/assets/icons/user.svg",
		route: "/profile",
		label: "Profil",
	},
	{
		imgUrl: "/assets/icons/plus-circle.svg",
		route: "/ad-vehicle",
		label: "Dodaj pojazd",
	},
];

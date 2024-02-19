import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex min-h-screen w-screen items-stretch justify-center p-4 max-lg:flex-col">
			<section className="relative flex basis-1/2 flex-col items-center px-4 pb-4 pt-24">
				<Image
					src="/assets/images/logo-light.svg"
					alt="App logo"
					width={142}
					height={44}
					className="absolute left-4 top-4"
				/>
				<div className="mb-12">
					<h1 className="h1-semibold mb-4">Zacznij już teraz</h1>
					<p className="paragraph-regular">
						Aby się zalogować użyj danych podanych podczas rejestracji
					</p>
				</div>
				{children}
			</section>
			<section className="flex-center basis-1/2 flex-col gap-8 rounded-[30px] bg-primary-500 px-20 py-24 max-md:p-12">
				<div className="h-full self-stretch bg-auth bg-contain bg-center bg-no-repeat max-lg:h-[390px] max-md:hidden"></div>
				<div>
					<p className="h1-semibold mb-4 text-light-900">
						Zarządzaj wszystkimi swoimi pojazdami wszędzie
					</p>
					<p className="paragraph-regular text-light-900">
						Możesz zarządzać wszystkimi swoimi pojazdami gdziekolwiek jesteś.
						Łatwo, szybko i bezpiecznie. Zacznij korzystać ze swojego darmowego
						konta już dzisiaj!
					</p>
				</div>
			</section>
		</main>
	);
};

export default Layout;

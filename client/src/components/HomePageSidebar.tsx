import { useState } from "react";
import { createPortal } from "react-dom";
import Filter from "../components/Filter";

function HomePageSidebar() {
	const [query, setQuery] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const sidebarContent = (
		<>
			<h1 className="text-xl font-semibold">Lateli</h1>
			<input
				type="text"
				className="w-xs border-b border-gray-400 text-(--sub-text) outline-none focus:border-gray-700"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search..."
			/>
			<Filter />
			<p className="mt-auto text-(--sub-text)">© 2026 - built with a bit of &lt;3</p>
		</>
	);

	return (
		<>
			<div className="mb-6 flex items-center justify-between lg:hidden">
				<h1 className="text-xl font-semibold">Lateli</h1>
				<button
					type="button"
					className="rounded-md p-2 text-2xl leading-none hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2"
					aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-sidebar"
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? "×" : "☰"}
				</button>
			</div>

			{isMenuOpen && createPortal(
				<div
					className="fixed inset-0 z-50 bg-black/40 lg:hidden"
					onClick={() => setIsMenuOpen(false)}>
					<aside
						id="mobile-sidebar"
						className="flex h-full w-[min(20rem,85vw)] flex-col gap-4 overflow-y-auto bg-white p-6 shadow-xl"
						onClick={(event) => event.stopPropagation()}>
						<div className="flex justify-end">
							<button
								type="button"
								className="rounded-md p-2 text-2xl leading-none hover:bg-black/5"
								aria-label="Close navigation menu"
								onClick={() => setIsMenuOpen(false)}>
								×
							</button>
						</div>
						{sidebarContent}
					</aside>
				</div>,
				document.body
			)}

			<aside className="hidden w-64 shrink-0 flex-col gap-4 py-6 lg:sticky lg:top-0 lg:flex lg:h-full xl:w-72">
				{sidebarContent}
			</aside>
		</>
	);
}

export default HomePageSidebar;
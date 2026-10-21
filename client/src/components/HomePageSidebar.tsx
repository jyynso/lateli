import { useState } from "react";
import Filter from "../components/Filter";

function HomePageSidebar() {
	const [query, setQuery] = useState("");

	return (
		<div>
			<div className='flex flex-col h-full gap-4 p-6 w-sm'>
				<h1 className='text-xl font-semibold'>Lateli</h1>
				<input
					type="text"
					className="border-b border-gray-400 outline-none w-50 text-(--sub-text) focus:border-gray-700"
					value={query}
					onChange={(e) => setQuery(e.target.value)} 
					placeholder="Search..."
				/>
				<Filter />
				<p className="mt-auto text-(--sub-text)">© 2026 - built with a bit of &lt;3</p>
			</div>
		</div>
	);
}

export default HomePageSidebar;
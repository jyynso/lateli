import Sidebar from "../components/HomePageSidebar";
import ArtworkContainer from "../components/ArtworkContainer";

function HomePage() {
  return (
    <div className="min-h-screen px-4 py-4 sm:px-6 lg:flex lg:h-screen lg:gap-10 lg:overflow-hidden lg:px-12 xl:px-20">
			<div className="fade-in lg:h-full">
				<Sidebar />
			</div>
			<main className="hide-scrollbar fade-in fade-in-delay-1 min-h-0 min-w-0 flex-1 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
				<ArtworkContainer />
			</main>
    </div>
  );
}

export default HomePage;
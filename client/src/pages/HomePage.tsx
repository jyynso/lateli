import Sidebar from "../components/HomePageSidebar";
import ArtworkContainer from "../components/ArtworkContainer";

function HomePage() {
  return (
    <div className='p-6 lg:px-20 min-h-screen'>
			<div className="flex flex-row">
				<div className="fade-in">
					<Sidebar />
				</div>
				<div className="fade-in fade-in-delay-1">
					<ArtworkContainer />
				</div>
			</div>
    </div>
  );
}

export default HomePage;
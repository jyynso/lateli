import Sidebar from "../components/HomePageSidebar";
import ArtworkContainer from "../components/ArtworkContainer";

function HomePage() {
  return (
    <div className='p-6 lg:px-20 min-h-screen'>
			<div className="flex flex-row">
				<Sidebar />
				<ArtworkContainer />
			</div>
    </div>
  );
}

export default HomePage;
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AccountDropdown({ onLogoutClick }: { onLogoutClick: () => void }) {
  const { user } = useAuth();

  return (
    <div className="w-18 transition-all duration-200 ease-out">
      <ul className="mt-2 space-y-2 px-2">
        <li>
          <p className="text-sm text-(--accent-orange) font-semibold hover:underline">{user?.name}</p>
        </li>
        <li>
          <Link to="/upload" className="text-sm cursor-pointer hover:underline"> Upload </Link>
        </li>
        <li className="text-sm cursor-pointer hover:underline">
          <button onClick={onLogoutClick}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default AccountDropdown;
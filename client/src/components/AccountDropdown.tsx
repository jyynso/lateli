import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AccountDropdown() {
  const { user, logout } = useAuth();

  return (
    <div className="w-32 transition-all duration-200 ease-out">
      <ul className="mt-2 space-y-2">
        <li>
          <p className="font-semibold text-lg">{user?.name}</p>
        </li>
        <li>
          <Link to="/upload" className="font-semibold text-lg cursor-pointer">
          Upload
          </Link>
        </li>
        <li className="font-semibold text-lg transparent cursor-pointer">
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default AccountDropdown;
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SignOutIcon, TrayArrowUpIcon, UserCircleIcon } from "@phosphor-icons/react/dist/ssr";

function AccountDropdown() {
  const { user, logout } = useAuth();

  return (
    <div className="w-32 rounded-md bg-white p-4  shadow-lg transition-all duration-200 ease-out">
      <span className="flex flex-row gap-2">
        <UserCircleIcon size={26} weight="fill"/>
        <p className="font-semibold">{user?.name}</p>
      </span>
      <ul className="mt-2 space-y-2 text-sm">
        <li>
          <Link to="/upload" className="flex flex-row gap-2 items-center font-semibold cursor-pointer">
          <TrayArrowUpIcon size={25} weight="fill" />
          Upload
          </Link>
        </li>
        <li className="flex flex-row gap-2 items-center font-semibold cursor-pointer">
          <SignOutIcon size={25} weight="fill"/> 
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default AccountDropdown;
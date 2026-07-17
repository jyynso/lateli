import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function SidebarCart() {
 const [isOpen, setIsOpen] = useState(false);

  return (
   <div>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 top-20 right-0 p-1 rounded-l-md cursor-pointer bg-(--bg-white)">
        {isOpen ? (
          <ShoppingBagOpenIcon size={30} />
        ) : (
          <ShoppingBagIcon size={30} />
        )}
      </button>

      {isOpen && (
        <div>
        </div>
      )}
    </div>
  );
}

export default SidebarCart;
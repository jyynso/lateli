import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function SidebarCart() {
 const [isOpen, setIsOpen] = useState(false);
  return (
   <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="sidebar-cart-panel"
        className="fixed z-50 top-20 right-0 p-1 rounded-l-md cursor-pointer bg-(--bg-white)">
        {isOpen ? (
          <ShoppingBagOpenIcon size={30} />
        ) : (
          <ShoppingBagIcon size={30} />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div
            id="sidebar-cart-panel"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="fixed top-20 right-0 z-50 w-60 max-w-full rounded-md bg-(--bg-white) p-4 shadow-lg">
            <div className="">
              <h1 className="text-lg font-semibold">Cart</h1>
              <p>mcChicken</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarCart;
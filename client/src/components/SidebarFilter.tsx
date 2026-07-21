import { SlidersIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function SidebarCart() {
  const [isOpen, setIsOpen] = useState(false);

  const openFilter = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={openFilter}
        aria-expanded={isOpen}
        aria-controls="sidebar-cart-panel"
        className={`fixed z-50 top-30 shadow-md ${isOpen ? "left-50" : "left-0"} p-1 rounded-r-md cursor-pointer bg-(--bg-white) transition-all duration-50`}>
         <SlidersIcon size={30} /> 
      </button>

      {isOpen && (
        <div
            id="sidebar-cart-panel"
            role="dialog"
            aria-modal="true"
            className="fixed top-20 left-0 z-50 w-50 h-110 p-4 max-w-full rounded-md shadow-md bg-(--bg-white)">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Filters</h1>
              <p>Medium</p>
              <p>Price</p>
            </div>
          </div>
      )}
    </div>
  );
}

export default SidebarCart;
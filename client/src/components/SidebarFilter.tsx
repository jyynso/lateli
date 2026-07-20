import { SlidersIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function SidebarCart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="sidebar-cart-panel"
        className={`fixed z-50 top-20 shadow-md ${isOpen ? "left-50" : "left-0"} p-1 rounded-r-md cursor-pointer bg-(--bg-white) transition-all duration-50`}>
        {isOpen ? (
          <SlidersIcon size={30} />
        ) : (
          <SlidersIcon size={30} />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
          <div
            id="sidebar-cart-panel"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="fixed top-20 left-0 z-50 w-50 p-4 max-w-full rounded-br-md shadow-md bg-(--bg-white)">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Filters</h1>
              <p>bababooey</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarCart;
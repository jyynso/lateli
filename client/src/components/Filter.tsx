import { SlidersHorizontalIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function Filter({className}: {className: string}) {
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
        className={`flex items-center gap-1 rounded-full font-semibold text-sm bg-white px-3 py-2 shadow-md transition-all duration-50 ${className ?? ""}`}>
         <SlidersHorizontalIcon size={18} weight="fill" /> 
         Filters
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/40" 
            onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-(--bg-white) p-4 shadow-xl">
            <h2 className="text-lg font-semibold">Filters</h2>
            <p>Medium</p>
            <p>Price</p>
            </div>
        </div>
)}
    </div>
  );
}

export default Filter;
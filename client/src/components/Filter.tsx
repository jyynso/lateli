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
        className={`flex items-center gap-1 rounded-full font-semibold text-sm bg-white px-3 py-2 drop-shadow transition-transform duration-200 hover:scale-103 hover:shadow-lg ${className ?? ""}`}>
         <SlidersHorizontalIcon size={18} weight="fill" /> 
         Filters
      </button>

      <div className={`fixed inset-0 z-40 transition-opacity duration-200 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)}/>
        <div className={`flex flex-col gap-2 absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-(--bg-white) p-8 shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <h2 className="text-4xl font-semibold">Filters</h2>
          <p>Medium</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
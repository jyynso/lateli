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
        className={`flex items-center gap-1 rounded-full font-semibold text-lg px-3 py-2 cursor-pointer hover:underline  ${className ?? ""}`}>
         Filters
      </button>

      <div className={`fixed inset-0 z-40 transition-opacity duration-200 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)}/>
        <div className={`flex flex-col gap-2 absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-(--bg-white) p-8 shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <h2 className="text-5xl lg:text-4xl font-semibold">Filters</h2>
          <p className="text-xl lg:text-md">Medium</p>
          <p className="text-xl lg:text-md">Price</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
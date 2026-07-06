import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function SidebarFilter() {
  const [isMenuOpen, setIsMenuOpen] = useState({
    medium: false,
    category: false,
    price: false
  });

  type Menu = keyof typeof isMenuOpen;

  const toggleDropdown = (name: Menu) => {
    setIsMenuOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="fixed flex flex-col mt-10 gap-3">
      <h1 className="font-semibold text-lg">Filters</h1>
      <span className="flex flex-row gap-10">
        <p className="mb-2">Medium</p>
        <CaretDownIcon 
          weight="bold" 
          onClick={() => toggleDropdown("medium")}
          className={`transition-transform ${
              isMenuOpen.medium ? "rotate-180" : ""
            }`}
          />
      </span>
      
      {isMenuOpen.medium && (
        <div className="ml-4 flex flex-col gap-1">
          <label className="flex flex-row gap-2">
            <input type="checkbox" className=""/>
            Oil
          </label>
          <label className="flex flex-row gap-2">
            <input 
              type="checkbox"
            />
            Watercolor
          </label>
          <label className="flex flex-row gap-2">
            <input 
              type="checkbox"
            />
            Digital
          </label>
        </div>
      )}

      <span className="flex flex-row gap-10">
        <p className="mb-2">Category</p>
        <CaretDownIcon 
          weight="bold" 
          onClick={() => toggleDropdown("category")}
          className={`transition-transform ${
              isMenuOpen.category ? "rotate-180" : ""
            }`}
          />
      </span>

      {isMenuOpen.category && (
        <div className="ml-4 flex flex-col gap-1">
          <label className="flex flex-row gap-2">
            <input 
              type="checkbox"
            />
            Landscape
          </label>
          <label className="flex flex-row gap-2">
            <input 
              type="checkbox"
            />
            Portrait
          </label>
          <label className="flex flex-row gap-2">
            <input 
              type="checkbox"
            />
            Abstract
          </label>
        </div>
      )}
    </div>
    
  );
}

export default SidebarFilter;
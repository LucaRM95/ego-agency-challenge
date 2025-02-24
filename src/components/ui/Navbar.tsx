import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import EgoLogo from "../../assets/logos/ego-logo.svg";
import {
  additionalLinks,
  contactLinks,
  mainLinks,
  serviceLinks,
} from "../../utils/MenuLinks";
import { useSelector } from "react-redux";
import { carDetailsSelector } from "../../redux/reducers/sliceCarDetails";
import { carsSelector } from "../../redux/reducers/sliceCars";
import { NavLink } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const { cars } = useSelector(carsSelector);
  const { carDetails } = useSelector(carDetailsSelector);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="w-full px-4">
          <div className="flex justify-between h-16">
            <NavLink to="/" className="flex items-center">
              <LazyLoadImage src={EgoLogo} alt="ego logo" />
            </NavLink>
            <div className="hidden md:flex items-center gap-12 w-full ms-10 text-[14px] font-semibold">
              <NavLink
                className="flex items-center pl-5 pr-5 hover:text-[#EB0A1E] border border-transparent hover:border-b-[2px] hover:border-b-[#EB0A1E] h-full"
                to="/"
              >
                <span>Modelos</span>
              </NavLink>

              <NavLink
                className="flex items-center pl-5 pr-5 hover:text-[#EB0A1E] border border-transparent hover:border-b-[2px] hover:border-b-[#EB0A1E] h-full"
                to={`/details/${carDetails.id ?? cars[0].id}`}
              >
                <span>Ficha de Modelo</span>
              </NavLink>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        onClick={handleOverlayClick}
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className="fixed right-0 top-0 h-full w-full md:w-[35%] xl:w-[25%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex justify-end items-center p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex gap-2 p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="text-[17px]">Cerrar</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-end text-end text-[20px] w-full h-full overflow-y-auto pt-4">
            <div className="space-y-4 w-full px-4 border-b border-gray-100 pb-4">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            <div className="space-y-4 w-full px-4 py-4 border-b border-gray-100">
              {serviceLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            <div className="space-y-4 w-full px-4 py-4 border-b border-gray-100">
              {contactLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            <div className="space-y-4 w-full h-full px-4 py-4 bg-gray-50">
              {additionalLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

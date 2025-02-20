import { useState } from "react";
import { Menu, X } from "lucide-react";
import EgoLogo from "../assets/logos/ego-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainLinks = [
    { title: "Modelos", href: "#" },
    { title: "Servicios y Accesorios", href: "#" },
    { title: "Financiación", href: "#" },
    { title: "Reviews y Comunidad", href: "#" },
  ];

  const serviceLinks = [
    { title: "Toyota Mobility Service", href: "#" },
    { title: "Toyota Gazoo Racing", href: "#" },
    { title: "Toyota Híbridos", href: "#" },
  ];

  const contactLinks = [
    { title: "Concesionarios", href: "#" },
    { title: "Test Drive", href: "#" },
    { title: "Contacto", href: "#" },
  ];

  const additionalLinks = [
    { title: "Actividades", href: "#" },
    { title: "Servicios al Cliente", href: "#" },
    { title: "Ventas Especiales", href: "#" },
    { title: "Innovación", href: "#" },
    { title: "Prensa", href: "#" },
    { title: "Acerca de...", href: "#" },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="w-full px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={EgoLogo} alt="ego logo" />
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
        className={`fixed inset-0 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="fixed inset-0 bg-white md:left-[65%]">
          <div className="flex justify-end items-center p-4">
            <span className="text-[17px]">Cerrar</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-end text-end text-[20px] w-full h-full overflow-y-auto pt-4">
            <div className="space-y-4 w-full px-4 border-b border-gray-100 pb-4">
              {mainLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            <div className="space-y-4 w-full px-4 py-4 border-b border-gray-100">
              {serviceLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            <div className="space-y-4 w-full px-4 py-4 border-b border-gray-100">
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            <div className="space-y-4 w-full h-full px-4 py-4 bg-gray-50">
              {additionalLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

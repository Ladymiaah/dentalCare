import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full bg-[#f4f5f7] px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[clamp(30px,4vw,40px)] h-[clamp(28px,4vw,36px)] rounded-xl p-1 object-contain"
          />
          <Link
            to="/"
            className="text-[clamp(0.85rem,1vw,1.1rem)] font-semibold no-underline hover:no-underline focus:no-underline"
          >
            Lume Dental
          </Link>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Nav Links - Desktop View */}
        <ul className="hidden sm:flex items-center gap-[clamp(0.5rem,1.5vw,2rem)] text-[clamp(0.7rem,1vw,1rem)] font-medium flex-shrink-0">
          <li>
            <Link
              to="/services"
              className="no-underline hover:no-underline focus:no-underline"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/Doctors"
              className="no-underline hover:no-underline focus:no-underline"
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link
              to="/Pricing"
              className="no-underline hover:no-underline focus:no-underline"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="no-underline hover:no-underline focus:no-underline"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Contacts"
              className="no-underline hover:no-underline focus:no-underline"
            >
              Contacts
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex-shrink-0 hidden sm:block">
          <button className="text-white bg-black rounded-3xl px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.4rem,1vw,0.6rem)] text-[clamp(0.7rem,1vw,0.9rem)]">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <ul
        className={`sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        } text-center space-y-4 mt-4`}
      >
        <li>
          <Link
            to="/services"
            className="block no-underline hover:no-underline focus:no-underline"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/Doctors"
            className="block no-underline hover:no-underline focus:no-underline"
          >
            Doctors
          </Link>
        </li>
        <li>
          <Link
            to="/Pricing"
            className="block no-underline hover:no-underline focus:no-underline"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/AboutUs"
            className="block no-underline hover:no-underline focus:no-underline"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/Contacts"
            className="block no-underline hover:no-underline focus:no-underline"
          >
            Contacts
          </Link>
        </li>
        {/* Mobile CTA Button */}
        <div className="text-center mt-4">
          <button className="text-white bg-black rounded-3xl px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.4rem,1vw,0.6rem)] text-[clamp(0.7rem,1vw,0.9rem)]">
            Book an Appointment
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-2 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 py-3 rounded-lg">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-9 rounded-xl p-1"
          />
          <Link to="/">Lume Dental</Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium flex-1">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/Doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
        </ul>
        <div className="flex-shrink-0">
          <button className="text-white bg-black rounded-3xl px-4 py-2 text-sm">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

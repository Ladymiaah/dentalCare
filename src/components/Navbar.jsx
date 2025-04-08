import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full md:max-w-6xl gap-8 h-[76px] mt-2 mb-10 mx-auto rounded-lg  flex flex-wrap md:flex-nowrap items-center justify-between px-4 sm:px-8 md:px-16 py-2">
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[40px] h-[36px] rounded-[12px] p-[6px_8px]"
        />
        <Link to="/">Lume Dental</Link>
      </div>
      <ul className="flex space-x-8 flex-1 justify center">
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
      <button className="text-white bg-black rounded-3xl p-3 ">
        Book an Appointment
      </button>
    </div>
  );
}
export default Navbar;

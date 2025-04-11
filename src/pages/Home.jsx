function HomePage() {
  return (
    <div className="h-screen flex flex-row w-full overflow-hidden bg-white">
      {/* Text Side */}
      <div className="w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-10 space-y-4 text-left">
        <h1 className="font-bold leading-tight text-[clamp(1.2rem, 3vw, 3rem)]">
          Your Perfect Smile Starts <br /> with Lume Dental
        </h1>
        <p className="text-[clamp(0.8rem, 1.2vw, 1rem)]">
          Advanced dental care with a gentle touch. <br /> Book your appointment
          today.
        </p>
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <div className="p-3 bg-[#f4f5f7] rounded-2xl text-[clamp(0.7rem, 1vw, 0.9rem)]">
              <h3 className="font-bold">Working Hours</h3>
              <p>Monday–Friday: 9am–9pm</p>
              <p>Saturday–Sunday: 10am–6pm</p>
            </div>
            <div className="p-3 bg-[#a9eaf7] rounded-2xl text-center font-semibold">
              Book an Appointment
            </div>
          </div>
          <button className="py-2 px-4 bg-white border border-gray-300 rounded-2xl text-[clamp(0.7rem, 1vw, 0.9rem)]">
            Today Tuesday 2:41pm
          </button>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-1/2 h-full">
        <img
          src="images/dentalcare1.png"
          alt="dentalcare"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default HomePage;

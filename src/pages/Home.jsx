function HomePage() {
  return (
    <div className=" flex items-center justify-between px-4 sm:px-6 md:px-16 bg-white overflow-hidden">
      {/* Text and Image Section */}
      <div className="flex items-center justify-between w-full space-x-4">
        {/* Text Section */}
        <div className="w-1/2 space-y-4 text-left">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your Perfect Smile Starts <br /> with Lume Dental
          </h1>
          <p className="text-xs sm:text-sm md:text-base">
            Advanced dental care with a gentle touch. <br /> Book your
            appointment today.
          </p>
          <div className="mt-4 space-y-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 p-3 bg-[#f4f5f7] rounded-2xl">
                <h3 className="font-bold">Working Hours</h3>
                <p>Monday–Friday: 9am–9pm</p>
                <p>Saturday–Sunday: 10am–6pm</p>
              </div>
              <div className="flex-1 p-3 bg-[#a9eaf7] rounded-2xl text-center font-semibold">
                Book an Appointment
              </div>
            </div>
            <div className="mt-4">
              <button className="py-2 px-4 bg-white rounded-2xl border border-gray-300 text-xs sm:text-sm">
                Today Tuesday 2:41pm
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img
            src="images/dentalcare1.png"
            alt="dentalcare"
            className="w-full h-auto max-w-[300px] sm:max-w-[360px] md:max-w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

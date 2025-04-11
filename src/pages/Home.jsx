function HomePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-16 bg-[#ffffff]">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-[3.5rem] leading-tight font-bold">
          Your Perfect Smile Starts <br className="hidden sm:block" /> with Lume
          Dental
        </h1>
        <p className="text-sm sm:text-base">
          Advanced dental care with a gentle touch, <br /> Book your appointment
          today
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <div className="flex-1 p-4 bg-[#f4f5f7] rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg">Working Hours</h3>
              <p className="text-sm">Monday-Friday 9am-9pm</p>
              <p className="text-sm">Saturday-Sunday 10am-6pm</p>
            </div>
            <div className="flex-1 p-4 bg-[#a9eaf7] rounded-2xl text-center font-semi-bold text-sm sm:text-base">
              Book an Appointment
            </div>
          </div>
          <div className="mt-2">
            <button className="py-2 px-4 bg-white rounded-2xl border border-gray-200 text-sm sm:text-base">
              Today Tuesday 2:41pm
            </button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full sm:w-1/2 mt-6 sm:mt-0 flex justify-center">
        <img
          src="images/dentalcare1.png"
          alt="dentalcare"
          className="w-4/5 sm:w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
}

export default HomePage;

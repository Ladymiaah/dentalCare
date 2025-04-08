function HomePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-16 bg-[#ffffff]">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-[3.5rem] leading-tight font-bold">
          Your Perfect Smile Starts <br /> with Lume Dental
        </h1>
        <p>
          Advanced dental care with a gentle touch, <br /> Book your appointment
          today
        </p>
        <div className="mt-4">
          <div className="flex space-x-2 ">
            <div className="flex-1 p-4 bg-[#f4f5f7] rounded-2xl">
              <h3 className="font-bold text-lg">Working Hours</h3>
              <p className="text-sm">Monday-Friday 9am-9pm</p>
              <p className="text-sm">Saturday-Sunday 10am-6pm</p>
            </div>
            <div className="flex-1 p-4 bg-[#a9eaf7] rounded-2xl text-center justify-center">
              Book an Appointment
            </div>
          </div>
          <div className="mt-2">
            <button className="py-2 px-4 bg-white rounded-2xl border border-gray-200 text-center">
              Today Tuesday 2:41pm
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="images/dentalcare1.png"
          alt="dentalcare"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
}

export default HomePage;

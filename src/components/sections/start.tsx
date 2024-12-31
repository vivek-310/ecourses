export default function Start() {
  return (
    <div className="flex flex-col items-center justify-center pb-10 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-6xl p-4">
        {/* Left Section - Image */}
        <img
          src="/images/image.png" // Replace with the actual image URL
          alt="Instructor"
          className="w-full md:w-[27vw] h-auto md:h-[60vh] object-cover"
        />

        {/* Right Section - Text */}
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Become an Instructor
          </h2>
          <p className="mt-2 text-gray-600 text-lg md:text-xl">
            Instructors from around the world teach millions of students on
            Client. <br /> We provide the tools and skills to teach what you love.
          </p>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-3 text-sm md:text-md bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none">
            Start Your Instructor Journey →
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl p-4">
        {/* Right Section - Text */}
        <div className="mt-6 md:mt-0 md:mr-8 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Become an Instructor
          </h2>
          <p className="mt-2 text-gray-600 text-lg md:text-xl">
            Learners around the world are launching new careers, advancing in <br />
            their fields, and enriching their lives.
          </p>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-3 text-sm md:text-md bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none">
            Check Out Courses →
          </button>
        </div>

        <img
          src="/images/Group 143.png" // Replace with the actual image URL
          alt="Instructor"
          className="w-full md:w-[36vw] h-auto md:h-[60vh] object-cover mt-6 md:mt-0"
        />
      </div>
    </div>
  );
}

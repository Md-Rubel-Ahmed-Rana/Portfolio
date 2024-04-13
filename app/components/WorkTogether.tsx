import React from "react";

const WorkTogether = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-16 px-10">
        <div className="flex justify-between gap-20 ">
          <div className="w-full bg-white p-10 rounded-2xl">
            <h4 className="text-3xl">
              <span className="text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
                Let’s work together!
              </span>
            </h4>
            <p className="text-md my-4">
              I engineer seamless solutions, merging design and code for
              immersive experiences. Passionate about Full Stack challenges, I
              turn ideas into robust applications. Let&apos;s elevate digital
              landscapes together!
            </p>
            <form>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    className="w-full rounded-md border focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full rounded-md border focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-md border focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-md border focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 border"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-l ml-3 from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="w-full">Contact info here</div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;

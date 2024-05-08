import React from "react";
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { getHomeData } from "../apis/getHomeData";
import WorkTogetherContactForm from "./WorkTogetherContactForm";

const WorkTogether = async () => {
  const data = await getHomeData();
  const { email, phoneNumber, address, addressMapLocation } = data || {};
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-20 lg:px-10 px-5">
        <div className="flex justify-between lg:flex-row flex-col gap-20 items-center">
          <div className="w-full bg-white lg:p-10 p-5 rounded-2xl">
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
            <WorkTogetherContactForm />
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <p
                title="Click to make a call"
                className="bg-transparent p-3 rounded-full text-white text-2xl bg-gradient-to-l to-[#9272d3] from-[#2a1454]"
              >
                <a
                  href={`tel:${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhoneAlt />
                </a>
              </p>
              <div>
                <p className="text-md">Phone</p>
                <p className="text-xl font-sans"> {phoneNumber} </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p
                title="Click to send email"
                className="bg-transparent p-3 rounded-full text-white text-2xl bg-gradient-to-l to-[#9272d3] from-[#2a1454]"
              >
                <a
                  href={`mailto:${email}?subject=Contact Mail&body=Start writing your message`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRegEnvelope />
                </a>
              </p>
              <div>
                <p className="lg:text-md text-sm">Email</p>
                <p className="lg:text-xl text-md font-sans">{email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p
                title="Click to open google map"
                className="bg-transparent p-3 rounded-full text-white text-2xl bg-gradient-to-l to-[#9272d3] from-[#2a1454]"
              >
                <a
                  href={addressMapLocation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt />
                </a>
              </p>
              <div>
                <p className="text-md">Address</p>
                <p className="text-xl font-sans">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;

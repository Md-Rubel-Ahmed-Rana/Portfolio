import Link from "next/link";
import { getFeedbackData } from "../apis/feedback.api";
import SliderCard from "./SliderCard";
import MyFeedbackModal from "./MyFeedbackModal";

const Feedback = async () => {
  const feedbacks = await getFeedbackData();
  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-20 lg:px-10 px-5">
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-10">
          <div className="lg:w-2/5 flex flex-col gap-4">
            <h3 className="font-semibold lg:text-4xl text-2xl text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
              Feedback Showcase
            </h3>
            <p className=" text-slate-500 lg:text-xl text-lg font-sans">
              Discover my latest creations and contribute your thoughts. Your
              feedback shapes my future endeavors and drives continuous
              improvement
            </p>
            <div className="flex items-center flex-col lg:flex-row gap-5">
              <Link href={"/post-feedback"}>
                <button
                  type="button"
                  className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full"
                >
                  Leave a feedback
                </button>
              </Link>
              <MyFeedbackModal />
            </div>
          </div>
          {feedbacks?.length <= 0 ? (
            <div className="lg:w-3/5 mt-10 ">
              <h2 className="text-4xl font-semibold text-gray-600">
                There is no feedback found!
              </h2>
            </div>
          ) : (
            <div className="lg:w-3/5 w-full lg:mt-10">
              <SliderCard cards={feedbacks} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;

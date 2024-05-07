import { getFeedbackData } from "../apis/getFeedbackData";
import { feedbacks } from "../constants/feedbacks";
import { IFeedback } from "../types/feedback.type";
import SliderCard from "./SliderCard";

const Feedback = async () => {
  // const feedbacks = ((await getFeedbackData()) as IFeedback[]) || [];
  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto lg:py-20 lg:px-10 px-5 py-10">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-20">
          <div className="lg:w-2/5">
            <h3 className="font-semibold lg:text-4xl text-xl text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
              Feedback Showcase
            </h3>
            <p className=" text-slate-500 lg:text-xl text-sm font-sans mt-5">
              Discover my latest creations and contribute your thoughts. Your
              feedback shapes my future endeavors and drives continuous
              improvement
            </p>
          </div>
          {feedbacks.length <= 0 ? (
            <div className="lg:w-3/5 mt-10 ">
              <h2 className="text-4xl font-semibold text-gray-600">
                There is no feedback found!
              </h2>
            </div>
          ) : (
            <div className="lg:w-3/5 w-full mt-10">
              <SliderCard cards={feedbacks} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;

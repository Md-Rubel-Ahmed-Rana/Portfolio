/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IFeedback } from "../types/feedback.type";

const SliderCard = ({ cards = [] }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards?.map((feedback: IFeedback) => (
        <div key={Math.random()}>
          <div className="lg:p-5 lg:m-5 m-2 p-2 border bg-white cursor-grab rounded-lg shadow-md flex flex-col lg:gap-5 gap-2 justify-center lg:h-80">
            <div>
              {feedback?.image ? (
                <img
                  src={feedback?.image}
                  alt={feedback.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">
                    {feedback.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold">{feedback.name}</h4>
            </div>
            <p className="text-gray-700 flex-grow text-sm">
              {feedback.feedback}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;

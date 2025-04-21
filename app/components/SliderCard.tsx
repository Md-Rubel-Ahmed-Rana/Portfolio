/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IFeedback } from "../types/feedback.type";

const SliderCard = ({ cards }: any) => {
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
      {cards.map((feedback: IFeedback) => (
        <div key={Math.random()}>
          <div className="lg:p-5 lg:m-5 m-2 p-2 border bg-white cursor-grab rounded-lg shadow-md flex flex-col lg:gap-5 gap-2 justify-center lg:h-80">
            <div>
              <img
                src={feedback?.image}
                alt={feedback.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{feedback.name}</h4>
              <p className="text-sm text-gray-600">
                {feedback.designation}, {feedback.company}
              </p>
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

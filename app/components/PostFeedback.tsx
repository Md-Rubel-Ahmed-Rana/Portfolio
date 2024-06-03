"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosWarning } from "react-icons/io";
import { postNewFeedback } from "../apis/getFeedbackData";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  image: string;
  designation: string;
  company: string;
  feedback: string;
};

const PostFeedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handlePostFeedback: SubmitHandler<Inputs> = async (data) => {
    const result: any = await postNewFeedback(data);
    if (result && result?.statusCode === 201) {
      toast.success("Your feedback posted successfully. Thanks!");
      reset();
    } else {
      toast.error("Failed to post feedback. Please try again!");
    }
  };

  return (
    <div className="lg:w-1/2 mx-auto lg:my-10 py-10 sm:px-10 xs:h-screen bg-white">
      <form
        className="shadow-md p-10 rounded-md"
        onSubmit={handleSubmit(handlePostFeedback)}
      >
        <div className="flex mb-4">
          <h4 className="lg:text-3xl text-lg font-semibold">
            Thanks for your valuable time
          </h4>
        </div>
        <div className="lg:flex mb-4">
          <div className="lg:w-1/2 lg:mr-2">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full rounded-md border mb-4 lg:mb-0 bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="lg:w-1/2 lg:ml-2">
            <input
              {...register("designation", {
                required: "Designation is required",
              })}
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter your designation"
              className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
            {errors.designation && (
              <p className="text-red-600">{errors.designation.message}</p>
            )}
          </div>
        </div>
        <div className="lg:flex mb-4">
          <div className="lg:w-1/2 lg:mr-2">
            <input
              {...register("company", { required: "Company name is required" })}
              type="text"
              id="company"
              name="company"
              placeholder="Enter your company name"
              className="w-full rounded-md border mb-4 lg:mb-0 bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
            {errors.company && (
              <p className="text-red-600">{errors.company.message}</p>
            )}
          </div>
          <div className="lg:w-1/2 lg:ml-2">
            <input
              {...register("image")}
              type="url"
              id="image"
              name="image"
              placeholder="Enter your profile image url"
              className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            {...register("feedback", {
              required: "Feedback is required",
              minLength: {
                value: 100,
                message: "Feedback must be at least 100 characters",
              },
              maxLength: {
                value: 200,
                message: "Feedback must be no more than 200 characters",
              },
            })}
            id="feedback"
            name="feedback"
            rows={6}
            placeholder="Write your respective feedback"
            className="w-full rounded-md border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 p-2 border"
          ></textarea>
          {errors.feedback && (
            <p className="text-red-600">{errors.feedback.message}</p>
          )}
        </div>
        <p className="mb-4 text-yellow-600 flex items-center gap-2">
          <IoIosWarning className="text-3xl" />
          <span>
            Approval required {"(Admin/Owner will review your feedback)"}
          </span>
        </p>
        <button
          type="submit"
          className="bg-gradient-to-l w-full from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500 text-white px-10 py-3 rounded-full"
        >
          Post feedback
        </button>
      </form>
    </div>
  );
};

export default PostFeedback;

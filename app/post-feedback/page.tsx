"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  image: string;
  designation: string;
  company: string;
  feedback: string;
};

const PostFeedback = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const handlePostFeedback: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-1/2 mx-auto py-20 px-10 h-screen">
      <form
        className="shadow-md p-10 rounded-md"
        onSubmit={handleSubmit(handlePostFeedback)}
      >
        <div className="flex mb-4">
          <h4 className="text-3xl font-semibold">
            Thanks for your valuable time
          </h4>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <input
              {...register("name")}
              required
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div className="w-1/2 ml-2">
            <input
              {...register("designation")}
              required
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter your designation"
              className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <input
              {...register("company")}
              required
              type="text"
              id="company"
              name="company"
              placeholder="Enter your company name"
              className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div className="w-1/2 ml-2">
            <input
              {...register("image")}
              required
              type="url"
              id="image"
              name="image"
              placeholder="Enter you profile image url"
              className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            required
            {...register("feedback")}
            id="feedback"
            name="feedback"
            rows={6}
            placeholder="Enter you respective feedback"
            className="w-full rounded-md border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 p-2 border"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-l ml-3 from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full"
        >
          Post feedback
        </button>
      </form>
    </div>
  );
};

export default PostFeedback;

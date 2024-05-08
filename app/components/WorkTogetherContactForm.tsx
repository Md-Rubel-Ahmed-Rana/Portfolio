"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const WorkTogetherContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const handleSendContact: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleSendContact)}>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <input
            {...register("firstName")}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="w-1/2 ml-2">
          <input
            {...register("lastName")}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="w-1/2 ml-2">
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          {...register("message")}
          id="message"
          name="message"
          rows={6}
          placeholder="Message"
          className="w-full rounded-md border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 p-2 border"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-l ml-3 from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full"
      >
        Send message
      </button>
    </form>
  );
};

export default WorkTogetherContactForm;

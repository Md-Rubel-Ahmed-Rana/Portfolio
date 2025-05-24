"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendMail } from "../apis/mail.api";
import { toast } from "react-toastify";
import { useState } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const WorkTogetherContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({});
  const [loading, setLoading] = useState(false);

  const handleSendContact: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const content = {
        sender: {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
        },
        title: "Let’s work together!",
        body: `<section>
            <p style="font-size: 16px; font-family: sans-serif; font-weight: 500; color: gray">${data.message}</p>
            <p style="font-size: 20px; color: blue">Email: ${data.email}</p>
            <p style="font-size: 20px; color: blue">Phone: ${data.phone}</p>
      </section>`,
      };
      const result = await sendMail(content);
      if (result && result?.statusCode === 200 && result?.data?.mailId) {
        toast.success(result?.message);
        reset();
        setLoading(false);
      } else {
        toast.error("Failed to send mail. Please try again!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed to send mail. Please try again!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSendContact)}>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <input
            {...register("firstName", { required: "First name required" })}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            className="w-full border border-blue-300 rounded focus:outline-none focus:ring-1
             focus:ring-blue-500 p-2"
          />
          {errors.firstName && (
            <p className="text-red-600 font-serif">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="w-1/2 ml-2">
          <input
            {...register("lastName", { required: "Last name required" })}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            className="w-full border border-blue-300 rounded focus:outline-none focus:ring-1
             focus:ring-blue-500 p-2"
          />
          {errors.lastName && (
            <p className="text-red-600 font-serif">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <input
            {...register("email", { required: "Email required" })}
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="w-full border border-blue-300 rounded focus:outline-none focus:ring-1
             focus:ring-blue-500 p-2"
          />
          {errors.email && (
            <p className="text-red-600 font-serif">{errors.email.message}</p>
          )}
        </div>
        <div className="w-1/2 ml-2">
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number"
            className="w-full border border-blue-300 rounded focus:outline-none focus:ring-1
             focus:ring-blue-500 p-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          {...register("message", { required: "Message required" })}
          id="message"
          name="message"
          rows={6}
          placeholder="Message"
          className="w-full border border-blue-300 rounded focus:outline-none focus:ring-1
             focus:ring-blue-500 p-2"
        ></textarea>
        {errors.message && (
          <p className="text-red-600 font-serif">{errors.message.message}</p>
        )}
      </div>
      <button
        disabled={loading}
        type="submit"
        className={` ${
          loading
            ? "bg-gray-500"
            : "bg-gradient-to-l  from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500"
        }   text-white px-10 py-3 rounded-full ml-3`}
      >
        {loading ? "Sending mail..." : "Send message"}
      </button>
    </form>
  );
};

export default WorkTogetherContactForm;

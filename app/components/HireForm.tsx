"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IHireMe } from "../types/hireMe.type";
import { sendHireMe } from "../apis/hireMe.api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const HiringForm = ({ position }: { position: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IHireMe>();

  const handleHireSubmit: SubmitHandler<IHireMe> = async (data) => {
    setLoading(true);
    try {
      const result = await sendHireMe({ ...data, position });
      if (result && result?.statusCode === 201) {
        toast.success(result?.message);
        reset();
        setLoading(false);
        router.push("/services");
      } else {
        toast.error("Failed to submit hire data. Please try again!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed to submit hire data. Please try again!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="lg:w-1/2 w-full lg:p-0 p-5"
      onSubmit={handleSubmit(handleHireSubmit)}
    >
      <div className="lg:flex mb-4 w-full">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 lg:mr-2">
          <input
            {...register("name", { required: "Name required" })}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
          {errors.name && (
            <p className="text-red-600 font-serif">{errors.name.message}</p>
          )}
        </div>
        <div className="lg:w-1/2 w-full lg:ml-2">
          <input
            {...register("email", { required: "Last name required" })}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
          {errors.email && (
            <p className="text-red-600 font-serif">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="lg:flex mb-4 w-full">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 lg:mr-2">
          <input
            {...register("jobType")}
            type="text"
            id="jobType"
            name="jobType"
            placeholder="Enter job type e.g: Remote/onsite/hybrid"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:ml-2">
          <input
            {...register("jobCategory")}
            type="text"
            id="jobCategory"
            name="jobCategory"
            placeholder="Job category e.g: Full Time/Part Time"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
      </div>
      <div className="lg:flex mb-4 w-full">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 lg:mr-2">
          <input
            {...register("companyName")}
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter company name"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:ml-2">
          <input
            {...register("officialEmail")}
            type="email"
            id="officialEmail"
            name="officialEmail"
            placeholder="Enter company email"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
      </div>
      <div className="lg:flex mb-4 w-full">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 lg:mr-2">
          <input
            {...register("salary")}
            type="text"
            id="salary"
            name="salary"
            placeholder="Enter salary range"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:ml-2">
          <input
            {...register("location")}
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            className="w-full rounded-md border bg-white focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          {...register("additional")}
          id="additional"
          name="additional"
          rows={3}
          placeholder="Additional message"
          className="w-full rounded-md border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 p-2 border"
        ></textarea>
      </div>
      <button
        disabled={loading}
        type="submit"
        className={` ${
          loading
            ? "bg-gray-500"
            : "bg-gradient-to-l  from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500"
        }   text-white px-10 py-3 rounded-full font-semibold w-full`}
      >
        {loading ? "Submitting" : "Submit"}
      </button>
    </form>
  );
};

export default HiringForm;

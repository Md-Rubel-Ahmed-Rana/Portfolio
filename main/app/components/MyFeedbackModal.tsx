"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CiMail } from "react-icons/ci";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendFeedbackEmail } from "../apis/feedback.api";

type Inputs = {
  email: string;
};

const MyFeedbackModal = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const handleSubmitEmail: SubmitHandler<Inputs> = async (data) => {
    const result: any = await sendFeedbackEmail(data);
    if (result?.statusCode === 200) {
      toast.success("A secure feedback link has been sent to your email.");
      setOpen(false);
    } else {
      toast.error(result?.message || "Failed to send feedback link.");
      setOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border dark:border-transparent rounded-full dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-slate-200 px-2 py-1 text-blue-500"
      >
        My Feedbacks
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-gray-700 bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center rounded-full bg-blue-100 p-2">
                <CiMail className="text-blue-600 text-2xl" />
              </div>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 dark:text-gray-200 text-gray-900"
              >
                Request Your Feedbacks
              </Dialog.Title>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Enter your email address and we&apos;ll send you a secure link to
              view your submitted feedbacks. This helps us ensure the feedbacks
              are shared only with the rightful owner.
            </p>

            <form
              onSubmit={handleSubmit(handleSubmitEmail)}
              className="space-y-4"
            >
              <input
                type="email"
                {...register("email", {
                  required: "Email is required. Please enter your email.",
                })}
                placeholder="Enter your email address..."
                className="w-full rounded-md outline-none border px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Link"}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MyFeedbackModal;

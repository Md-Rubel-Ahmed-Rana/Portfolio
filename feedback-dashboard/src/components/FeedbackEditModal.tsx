import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiEdit3 } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFeedback } from "@/types";
import axios from "axios";
import { baseUrl } from "@/api";

type Props = {
  feedback: IFeedback;
};

type Inputs = {
  feedback: string;
};

const FeedbackEditModal = ({ feedback }: Props) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: { feedback: feedback?.feedback },
  });

  const handleEditSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await axios.patch(
        `${baseUrl}/update/${feedback?.id}`,
        data
      );

      if (result?.data?.statusCode === 200) {
        toast.success(
          result?.data?.message || "Feedback updated successfully."
        );
        setOpen(false);
        window.location.reload();
      } else {
        toast.error(
          result?.data.error?.message || "Failed to update feedback."
        );
      }
    } catch {
      toast.error("An error occurred while updating feedback.");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
      >
        <FiEdit3 />
        Edit Feedback
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FiEdit3 className="text-blue-600 text-xl" />
              Edit Feedback
            </Dialog.Title>

            <p className="text-sm text-gray-600 mb-4">
              Update the feedback content below and click &quot;Save
              Changes&quot; to apply your updates.
            </p>

            <form
              onSubmit={handleSubmit(handleEditSubmit)}
              className="space-y-4"
            >
              <textarea
                {...register("feedback", {
                  required: "Feedback content is required.",
                })}
                rows={4}
                className="w-full rounded-md border outline-0 px-3 py-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.feedback && (
                <p className="text-red-600 text-sm">
                  {errors.feedback.message}
                </p>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md cursor-pointer bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default FeedbackEditModal;

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { IFeedback } from "@/types";
import axios from "axios";
import { baseUrl } from "@/api";

type Props = {
  feedback: IFeedback;
};

const FeedbackDeleteModal = ({ feedback }: Props) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDeleteFeedback = async () => {
    try {
      setIsSubmitting(true);
      const result = await axios.delete(`${baseUrl}/delete/${feedback?.id}`);

      if (result?.data?.statusCode === 200) {
        toast.success(
          result?.data?.message || "Feedback deleted successfully."
        );
        setOpen(false);
        window.location.reload();
      } else {
        toast.error(
          result?.data?.error?.message || "Failed to delete feedback."
        );
      }
    } catch {
      toast.error("An error occurred while deleting feedback.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
      >
        <FiTrash2 />
        Delete
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FiTrash2 className="text-red-600 text-xl" />
              Confirm Delete
            </Dialog.Title>

            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to permanently delete this feedback? This
              action cannot be undone.
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteFeedback}
                disabled={isSubmitting}
                className="rounded-md cursor-pointer bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
              >
                {isSubmitting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default FeedbackDeleteModal;

/* eslint-disable @next/next/no-img-element */
import { Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPostComment } from "../types/postComment.type";
import { postComment } from "../apis/postComment";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
  id: string;
};

const CommentModal = ({ isOpen, setIsOpen, id }: Props) => {
  // const [file, setFile] = useState<any>(null);
  const { register, handleSubmit } = useForm<IPostComment>();
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCommentSubmit: SubmitHandler<IPostComment> = async (data) => {
    const res = await postComment({ ...data, postId: id });
    if (res.statusCode === 201) {
      toast.success(res.message);
      setIsOpen(() => false);
      router.refresh();
    }
  };

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files[0];
  //   setFile(file);
  // };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex flex-col items-center justify-center">
          <div className="p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="lg:w-[400px] mx-auto transform rounded-xl bg-white p-4 text-left  shadow-xl transition-all relative">
                {/* modal content */}
                <div className="mt-3">
                  <div className="mb-3">
                    <h2 className="text-2xl text-gray-800 font-semibold">
                      Add your comment
                    </h2>
                    <p>Thank you so much for your time 😊</p>
                  </div>
                  <div className="max-w-lg mx-auto">
                    <form onSubmit={handleSubmit(handleCommentSubmit)}>
                      <div className="mb-4">
                        <input
                          {...register("name")}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* temporarily stopped uploading image */}
                      {/* <div className="relative mb-4">
                        <input
                          {...register("image")}
                          className="opacity-0 text-gray-700 w-full absolute pointer-events-none"
                          id="image"
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="image"
                          className="cursor-pointer block bg-white shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                        >
                          <span
                            className="w-full text-gray-700"
                            id="file-label"
                          >
                            {file?.name ? file.name : "Upload your image"}
                          </span>
                        </label>
                      </div> */}

                      <div className="mb-6">
                        <textarea
                          {...register("comment")}
                          className="shadow bg-white  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="comment"
                          rows={4}
                          placeholder="Enter your comment"
                        ></textarea>
                      </div>
                      <div className="flex items-center gap-5 justify-between">
                        <button
                          onClick={closeModal}
                          className="w-full bg-yellow-700 hover:bg-yellow-600   text-white  px-5 py-2 rounded-full"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-gradient-to-l w-full from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-5 py-2 rounded-full"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CommentModal;

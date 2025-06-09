/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseUrl } from "@/api";
import { IFeedback } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FeedbackContainer from "./FeedbackContainer";

const MyFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (!token || typeof token !== "string") return;

    const fetchFeedbacks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${baseUrl}/me`, {
          params: { token },
        });
        setFeedbacks(response?.data?.data || []);
      } catch (err: any) {
        console.error("Failed to fetch feedbacks:", err);
        setError("Failed to load feedbacks.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, [token]);

  return (
    <div className="p-2 lg:p-4">
      <h1 className="text-lg lg:text-2xl font-bold text-gray-600 text-center">
        Welcome to Feedback Dashboard
      </h1>

      {(isLoading || error) && (
        <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
          {isLoading && (
            <p className="text-gray-500 text-lg font-bold lg:text-2xl mt-2">
              Loading feedbacks...
            </p>
          )}
          {!isLoading && error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      {!isLoading && <FeedbackContainer feedbacks={feedbacks} />}
    </div>
  );
};

export default MyFeedbacks;

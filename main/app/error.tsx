"use client";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div className="flex justify-center">
      <div>
        <h2>Something went wrong!</h2>
        <p>Name: {error.name}</p>
        <p>Message: {error.message}</p>
        <p>Digest: {error.digest}</p>
        <p>Stack: {error.stack}</p>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}

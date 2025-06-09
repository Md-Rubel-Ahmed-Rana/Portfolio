import Head from "next/head";

export default function ServerSideError() {
  return (
    <>
      <Head>
        <title>Internal Server Error - Md Rubel Ahmed Rana</title>
      </Head>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-yellow-600 mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Internal Server Error
          </h2>
          <p className="text-gray-600 mb-6">
            Oops! Something went wrong on our end. We&apos;re working to fix it
            as soon as possible.
          </p>
          <p className="text-gray-700">
            Please try again later or contact support if the issue persists.
          </p>
        </div>
      </div>
    </>
  );
}

import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found - Md Rubel Ahmed Rana</title>
      </Head>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
          <p className="text-gray-700">
            To access your submitted feedback, please check your email and
            follow the link provided in the message.
          </p>
        </div>
      </div>
    </>
  );
}

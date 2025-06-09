import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home : Feedbacks - Md Rubel Ahmed Rana</title>
      </Head>
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="text-lg lg:text-2xl font-semibold text-gray-800">
          Welcome to Feedback Dashboard
        </h1>
        <p className="text-gray-700 text-center">
          Welcome to the Feedback Dashboard. To access your submitted feedbacks,
          <br />
          please check your email and follow the link provided in the message.
        </p>
      </div>
    </>
  );
}

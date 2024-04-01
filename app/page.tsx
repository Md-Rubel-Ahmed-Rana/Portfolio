import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="w-[1440px] mx-auto p-5">
        <Banner />
      </section>
    </main>
  );
}

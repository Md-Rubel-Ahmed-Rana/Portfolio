import Banner from "./components/Banner";
import Projects from "./projects/page";
import Services from "./services/page";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1440px] w-full mx-auto p-5">
        <Banner />
        <Services />
        <Projects />
      </section>
    </main>
  );
}

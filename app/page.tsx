import Banner from "./components/Banner";
import Projects from "./projects/page";
import Services from "./services/page";
import "animate.css";

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
        <Services />
        <Projects />
      </section>
    </main>
  );
}

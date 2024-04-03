import Banner from "./components/Banner";
import ExperienceAndCourse from "./components/ExperienceAndCourse";
import Projects from "./projects/page";
import Services from "./services/page";
import "animate.css";
import Skills from "./skills/page";

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
        <Services />
        <Projects />
        <ExperienceAndCourse />
        <Skills />
      </section>
    </main>
  );
}

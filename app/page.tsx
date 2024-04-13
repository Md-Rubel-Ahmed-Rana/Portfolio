import Banner from "./components/Banner";
import ExperienceAndCourse from "./components/ExperienceAndCourse";
import Projects from "./components/Projects";
import Services from "./components/Services";
import "animate.css";
import Skills from "./components/Skills";

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

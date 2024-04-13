import Banner from "./components/Banner";
import ExperienceAndCourse from "./components/ExperienceAndCourse";
import Projects from "./components/Projects";
import Services from "./components/Services";
import "animate.css";
import Skills from "./components/Skills";
import WorkTogether from "./components/WorkTogether";

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
        <Services />
        <Projects />
        <ExperienceAndCourse />
        <Skills />
        <WorkTogether />
      </section>
    </main>
  );
}

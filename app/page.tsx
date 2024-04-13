import Banner from "./components/Banner";
import ExperienceAndCourse from "./components/ExperienceAndCourse";
import Projects from "./components/Projects";
import Services from "./components/Services";
import "animate.css";
import Skills from "./components/Skills";
import WorkTogether from "./components/WorkTogether";
import Blogs from "./components/Blogs";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Projects />
      <ExperienceAndCourse />
      <Skills />
      <Feedback />
      <Blogs />
      <WorkTogether />
    </main>
  );
}

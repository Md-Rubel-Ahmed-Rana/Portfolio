import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Services from "./components/Services";
import "animate.css";
import Skills from "./components/Skills";
import WorkTogether from "./components/WorkTogether";
import Blogs from "./components/Blogs";
import Feedback from "./components/Feedback";
import Experiences from "./experiences";
import Courses from "./courses";

export default function Home() {
  return (
    <main className="dark:bg-gray-800">
      <Banner />
      <Experiences />
      <Projects />
      <Courses />
      <Skills />
      <Services />
      <Feedback />
      <Blogs />
      <WorkTogether />
    </main>
  );
}

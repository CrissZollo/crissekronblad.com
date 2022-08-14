import Navbar from "./navbar";
import ProjectsCard from "./projectsCard";
import Welcome from "./welcome";
import Intro from "./intro";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Intro />
      <Welcome />
      <ProjectsCard />
    </div>
  );
}

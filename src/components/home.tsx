import Navbar from "./navbar";
import ProjectsCard from "./projectsCard";
import Welcome from "./welcome";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Welcome />
      <ProjectsCard />
    </div>
  );
}

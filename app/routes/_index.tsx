import { Experience } from "~/components/experience";
import { Navigation } from "~/components/navigation";
import { Profile } from "~/components/profile";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills";
import { Element } from "react-scroll";
export default function Index() {
  return (
    <div>
      <Navigation />

      <Profile />

      <Skills />

    
        <Projects />
    
    
        <Experience />
    
    </div>
  );
}

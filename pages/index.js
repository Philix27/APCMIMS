import { Landing } from "../comps/globalComps/Landing";
import Objectives from "../comps/globalComps/objectives";
import Projects from "../comps/projects/projects";

export default function Home() {
  return (
    <>
      <Landing
        title="APC Members"
        imgUrl="images/apclogo.jpg"
        subtitle="APC Membership Manager"
      />
      <Objectives />
      <Projects />
    </>
  );
}

import { Landing } from "../comps/global/Landing";
import Objectives from "../comps/global/objectives";
import Projects from "../comps/projects/projects";

export default function Home() {
  return (
    <>
      <Landing
        title="APC Members"
        imgUrl="images/bg.jpg"
        subtitle="APC Membership Manager"
        opacity={0.45}
      />
      <Objectives />
      <Projects />
    </>
  );
}

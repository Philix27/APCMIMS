import { Landing } from "../comps/global/Landing";
import Objectives from "../comps/global/objectives";

export default function Home() {
  return (
    <>
      <Landing
        title="APC Members"
        imgUrl="images/apclogo.jpg"
        subtitle="APC Membership Manager"
      />
      <Objectives />
    </>
  );
}

import { Landing } from "../comps/global/Landing";

export default function Home() {
  return (
    <>
      <Landing
        title="Congratulations on your successful registration!!"
        imgUrl="images/happy.jpg"
        subtitle="You are now an official member of APC"
        opacity={0.1}
      />
    </>
  );
}

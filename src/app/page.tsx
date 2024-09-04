import Logo from "@/component/logo/Logo";
import Hero from "@/component/hero";
import MySkills from "@/component/MySkills/MySkills";
import MyProjects from "@/component/Projects/MyProjects";

export default function Home() {
  return (
      <main>
        <Hero/>
        <MySkills/>
        <MyProjects/>
    </main>
  );
}

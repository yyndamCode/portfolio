"use client"
import Hero from "@/component/hero";
import MySkills from "@/component/MySkills/MySkills";
import MyProjects from "@/component/Projects/MyProjects";
import GoToBtn from "@/component/ui/goToButton/goToButton";


export default function Home() {
  return (
      <main>
        <Hero/>
        <MySkills/>
        <MyProjects/>
          <GoToBtn/>
    </main>
  );
}

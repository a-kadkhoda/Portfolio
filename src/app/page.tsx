import AboutMe from "@/features/aboutMe/components/AboutMe";
import HeroSection from "@/features/heroSection/components/HeroSection";
import LatestBlogs from "@/features/blogs/components/LatestBlogs";
import LatestProject from "@/features/projects/components/LatestProject";
import Talents from "@/features/talents/components/Talents";

export default function Home() {
  return (
    <div className="size-full flex flex-col gap-40 pb-[180px]">
      <HeroSection />

      <div className="size-full flex">
        <div className="w-[calc(50%-4px)] pt-8 pb-16 px-4">
          <Talents />
        </div>
        <div className="w-2 min-h-full bg-main-blue rounded-lg"></div>
        <div className="w-[calc(50%-4px)] pt-8 pb-16 px-4">
          <AboutMe />
        </div>
      </div>
      <div className="size-full">
        <LatestProject />
      </div>
      <div className="size-full">
        <LatestBlogs />
      </div>
    </div>
  );
}

import ExperienceSection from "../components/experience";
import MainSection from "../components/main";
import ProjectsSection from "../components/projects";
import SocialSection from "../components/socials";
import TechSection from "../components/technology";

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
                    <MainSection />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <SocialSection />
                </div>
                <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
                    <TechSection />
                </div>
                <div className="md:col-span-2 lg:col-span-2">
                    <ExperienceSection />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <ProjectsSection />
                </div>
            </div>
        </div>
    );
};

export default Home;

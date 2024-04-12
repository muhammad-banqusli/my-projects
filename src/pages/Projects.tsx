import ProjectCard from "../components/ProjectCard";
import { projectList } from "./projectsData";

const Projects = () => {
    
    return (
        <section className="section-min-height text-center flex flex-col items-center gap-5 pt-10 scroll-m-8 mb-20">
            <h2 className="text-xl font-titles">Projects</h2>
            <div className="container grid grid-cols-1 md:grid-cols-2 px-2 md:px-10 gap-8">
                {projectList.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </section>
    );
};
export default Projects;

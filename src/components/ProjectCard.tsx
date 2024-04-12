type PropTypes = {
    project: Project;
};

const ProjectCard = ({ project }: PropTypes) => {
    return (
        <div className=" border-2 rounded-lg max-h-96 overflow-hidden">
            <div className="grid grid-cols-2 border-b-2 divide-x-2">
                <h3 className="text-start p-2">Project Name:</h3>
                <h3 className="px-2 text-start self-center p-2">{project.title}</h3>
            </div>
            <div className="grid grid-cols-2 border-b-2 divide-x-2">
                <h3 className="text-start p-2">Links:</h3>
                <div className="grid grid-cols-2 p-2">
                    <a
                        className="self-center justify-self-start"
                        href={project.demo}
                        target="_blank"
                    >
                        Demo
                    </a>
                    {project.github && (
                        <a
                            className="self-center justify-self-start"
                            href={project.github}
                            target="_blank"
                        >
                            Github
                        </a>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 border-b-2 divide-x-2">
                <h3 className="p-2 text-start">Technologies: </h3>
                <div className="grid grid-cols-4 place-content-center py-2 p-2 justify-items-center">{project.technologies.map(tech => <img key={tech.id} src={tech.src} alt={tech.title} title={tech.title} className="h-12 w-12 rounded-sm object-contain" />)}</div>
            </div>
            <div className="grid grid-cols-2 h-full divide-x-2">
                <p className="text-start p-2 h-full">Description: </p>
                <p className="p-2 text-start h-full">{project.description}</p>
            </div>
        </div>
    );
};
export default ProjectCard;

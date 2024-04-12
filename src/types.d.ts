type Project = {
    title: string;
    description: string;
    demo: string;
    github: string;
    technologies: Tech[];
};

interface Tech {
    id: Id;
    title: string;
    src: string;
    columnId: Id;
}
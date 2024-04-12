import image from "../assets/image.jpeg";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section-min-height flex items-center justify-center flex-col p-4 scroll-m-10"
        >
            <h1 className="font-titles hello-world text-nowrap p-4">
                Hello World!
            </h1>
            <div className="flex flex-col md:flex-row-reverse md:justify-around items-center p-4 gap-6">
                <div className="lg:w-1/4">
                    <img
                        src={image}
                        alt="Mohammad Nour"
                        className="rounded-full h-52 w-52 image-border"
                    />
                </div>
                <div className="flex flex-col md:w-1/2 gap-6">
                    <h2 className="flex-1 text-2xl text-center md:text-left">
                        Hello and Welcome
                    </h2>

                    <p className="text-2xl text-center md:text-left">
                        I&apos;m Mohammad Nour and this website is allocated to showcase my projects.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};
export default Hero;

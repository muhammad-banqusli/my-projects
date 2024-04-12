import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import { Header, SlideUpBtn } from "./components"

function App() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            
            <main className="w-full max-w-[1400px] shadow-2xl">
              <Hero/>
              <Projects />
            </main>
            <SlideUpBtn />
        </div>
    );
}

export default App;

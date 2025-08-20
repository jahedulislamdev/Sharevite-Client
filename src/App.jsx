import About from "./Components/About";
import AvailableProjects from "./Components/AvailableProjects";
import Banner from "./Components/Banner";
import BlogSection from "./Components/Blog";
import Gallery from "./Components/Gallery";
import JoinUsSection from "./Components/JoinUs";
import Services from "./Components/Services";
const App = () => {
  return (
    <div>
      <Banner />
      <div className="md:w-11/12 mx-auto p-4">
        <Services />
        <AvailableProjects />
        <About />
        <BlogSection />
        <JoinUsSection />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
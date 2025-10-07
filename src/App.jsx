import About from "./Components/About";
import AvailableProjects from "./pages/Projects/AvailableProjects";
import Banner from "./Components/Banner";
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
        <JoinUsSection />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
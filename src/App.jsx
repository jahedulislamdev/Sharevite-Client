import AvailableProjects from "./pages/Projects/AvailableProjects";
import JoinUsCover from "./pages/JoinUs/JoinUsCover";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Banner from "./Components/Banner";
import About from "./Components/About";
const App = () => {
  return (
    <div>
      <Banner />
      <div className="md:w-11/12 mx-auto p-4">
        <Services />
        <AvailableProjects />
        <About />
        <JoinUsCover />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
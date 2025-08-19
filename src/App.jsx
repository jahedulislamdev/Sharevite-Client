import Banner from "./Components/Banner";
import Services from "./Components/Services";

const App = () => {
  return (
    <div>
      <Banner />
      <div className="md:w-11/12 mx-auto p-4">
        <Services />
      </div>
    </div>
  );
};

export default App;
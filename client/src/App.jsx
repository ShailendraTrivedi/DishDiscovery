import { useState } from "react";
import Footer from "./components/pages/Footer";
import NavBar from "./components/pages/NavBar";
import Routers from "./routers/Routers";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routers isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  );
};

export default App;

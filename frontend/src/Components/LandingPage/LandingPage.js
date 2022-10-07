import "./LandingPage.css";
import NavBar from "../Navbar";
import Home from "../Home";
import Recipes from "../Recipes";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Recipes />
    </div>
  );
}

export default LandingPage;

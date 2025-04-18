import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

//LIFTING STATE UP: creating state vars in parent component and passing them as props to children
//PROP DRILLING: passing the variable from one component to its child and repeating the process for its children.

// CONTEXT API: is a separate (global) space to keep all the state variables and the logic related to them.
// We create a context using createContext()
// We use that context using useContext()

function First() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default First;

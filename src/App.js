import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeadeComponent from "./Components/HeaderComponent";
import SideNavComponent from "./Components/SideNavComponent";

function App() {
  return (
    <div className="Head-container">
      <div>
        <HeadeComponent />
      </div>
      <BrowserRouter>
        <SideNavComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;

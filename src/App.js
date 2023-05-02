import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeadeComponent from "./Components/HeaderComponent";
import SideNavComponent from "./Components/SideNavComponent";
import { createContext, useState } from "react";

export const AddressContext = createContext();
function App() {
  const [adressData, setAdressData] = useState({});
  const [inputData, setInputData] = useState({});
  return (
    <div className="Head-container">
      <div>
        <HeadeComponent />
      </div>
      <BrowserRouter>
        <AddressContext.Provider
          value={{ adressData, setAdressData, inputData, setInputData }}
        >
          <SideNavComponent />
        </AddressContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

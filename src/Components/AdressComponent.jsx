import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { CardContent } from "@material-ui/core";
import "./Header.css";
import { useContext } from "react";
import { AddressContext } from "../App";

function AdressComponent(props) {
  const [flatNo, setFlatNo] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandMark] = useState("");
  const [town, setTown] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState("");
  const { adressData, setAdressData } = useContext(AddressContext);

  const handleSubmit = () => {
    const temp = {
      flatNo: flatNo,
      area: area,
      landmark: landmark,
      town: town,
      city: city,
      pincode: pincode,
    };
    setAdressData({ ...temp });
    console.log(":::::::>", temp);
  };
  useEffect(() => {
    // console.log("....", adressData);
    if (Object.keys(adressData).length) {
      setFlatNo(adressData?.flatNo);
      setArea(adressData?.area);
      setLandMark(adressData?.landmark);
      setTown(adressData?.town);
      setCity(adressData?.city);
      setPinCode(adressData?.pincode);
    }
  }, [adressData]);

  return (
    <div>
      {["right"].map((anchor, index) => (
        <Drawer
          key={index}
          className="drawer-content"
          anchor={anchor}
          open={props.open}
          onClose={() => props.onClose()}
        >
          <div className="dash_header1">
            <div className="dash_header1">
              <CardContent>
                <div>Adress</div>
                <div className="adress_content">
                  <div>
                    <input
                      placeholder="FloorNo/BlockNo"
                      value={flatNo}
                      onChange={(e) => setFlatNo(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Area Locality"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      value={landmark}
                      placeholder="Nearest LandMark"
                      onChange={(e) => setLandMark(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      value={town}
                      placeholder="Town City"
                      onChange={(e) => setTown(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      value={city}
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      value={pincode}
                      placeholder="Pincode"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                  <div>
                    <button onClick={handleSubmit}>Save</button>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Drawer>
      ))}
    </div>
  );
}
export default AdressComponent;

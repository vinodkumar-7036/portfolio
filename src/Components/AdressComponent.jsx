import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { CardContent } from "@material-ui/core";
import "./Header.css";

function AdressComponent(props) {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div>
      {["right"].map((anchor) => (
        <Drawer
          className="drawer-content"
          anchor={anchor}
          open={props.open}
          onClose={() => props.onClose()}
        >
          <div className="dash_header1">
            <div className="dash_header1">
              <CardContent>
                <div>Adress</div>
                <div></div>

                <div>
                  <StyledInputBase
                    placeholder="FloorNo/BlockNo"
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div>
                  <StyledInputBase
                    placeholder="Area Locality"
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div>
                  <StyledInputBase
                    placeholder="Nearest LandMark"
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div>
                  <StyledInputBase
                    placeholder="Town City"
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div>
                  <StyledInputBase
                    placeholder="City"
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <StyledInputBase
                  placeholder="Pincode"
                  inputProps={{ "aria-label": "search" }}
                />
              </CardContent>
            </div>
          </div>
        </Drawer>
      ))}
    </div>
  );
}
export default AdressComponent;

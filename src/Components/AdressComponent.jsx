import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import { Card, CardContent } from "@material-ui/core";
import "./Header.css";

function AdressComponent(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      {/* <List className="content_list" > */}
      {/* <Card varient="outlined" className="dash_header1"> */}

      {/* </Card> */}
      <Divider />
      {/* </List> */}
    </>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            className="drawer-content"
            anchor={anchor}
            open={props.open}
            onClose={() => props.onClose()}
          >
            {list(anchor)}
            <div className="dash_header1">
              <React.Fragment>
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
              </React.Fragment>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default AdressComponent;

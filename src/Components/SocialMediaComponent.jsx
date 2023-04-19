import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CardContent } from "@material-ui/core";
import "./Header.css";

function SocialMediaComponent(props) {
  const [state, setState] = React.useState({
    right: false,
  });

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
                    <h2>
                      {" "}
                      <ArrowBackIcon /> Social Media & Links{" "}
                    </h2>
                    <p>
                      Please provide the links to social media accounts and
                      website of the company
                    </p>
                    <div>Instagram</div>
                    <div>
                      <StyledInputBase
                        placeholder="www.instagram.com.companyname"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </div>
                    <div> Facebook</div>

                    <div>
                      <StyledInputBase
                        placeholder="www.facebook.com.companyname"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </div>
                    <div>Telegram</div>

                    <div>
                      <StyledInputBase
                        placeholder="www.telegram.com.companyname"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </div>
                    <div>Website</div>

                    <div>
                      <StyledInputBase
                        placeholder="www.companyname.com."
                        inputProps={{ "aria-label": "search" }}
                      />
                    </div>
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
export default SocialMediaComponent;

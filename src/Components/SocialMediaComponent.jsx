import React from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CardContent } from "@material-ui/core";
import "./Header.css";

function SocialMediaComponent(props) {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
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
          s
          anchor={anchor}
          open={props.open}
          onClose={() => props.onClose()}
        >
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
      ))}
    </div>
  );
}
export default SocialMediaComponent;

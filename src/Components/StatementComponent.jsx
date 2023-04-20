import * as React from "react";
import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CardContent } from "@material-ui/core";
import "./Header.css";

function StatementComponent(props) {
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            className="drawer-content"
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
export default StatementComponent;

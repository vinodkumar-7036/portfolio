import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import "./Header.css";

function PrivacyComponent(props) {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="content_edit">
      <h2 contentEditable={edit}>
        Your Privacy Matters
        <EditIcon onClick={() => setEdit(!edit)} style={{ color: "brown" }} />
      </h2>
      <span>1.Introduction</span>
      <Typography>
        Morbi magna nibh, mattis varius orci vel, convallis fringilla tellus.
        Nullam ac massa placerat, tristique quam at, finibus velit. Pellentesque
        sit amet enim eu massa dictum rhoncus. Praesent lobortis erat felis, nec
        facilisis quam lacinia ut. Suspendisse sit amet lacus sit amet augue
        condimentum iaculis. Quisque tristique hendrerit justo, semper malesuada
        ipsum dapibus nec. Praesent tincidunt lectus nisl, id tempus elit
        maximus quis. Morbi posuere tristique neque, sed ullamcorper est iaculis
        vel. Nulla facilisi. In id lectus sem. Praesent egestas quam mattis
        augue ullamcorper, in porttitor mauris rutrum.
      </Typography>
      <div className="table_content">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={props.open}
              onClose={() => props.onClose()}
            ></Drawer>
          </React.Fragment>
        ))}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography>Table Content:</Typography>

            <div>Introduction</div>
            <div>Data Collect</div>
            <div>How we us your data</div>
            <div>How we share the information</div>
            <div>Your Choices and obligation</div>
            <div>Other important information</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PrivacyComponent;

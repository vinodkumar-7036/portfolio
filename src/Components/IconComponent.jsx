import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AdressComponent from "./AdressComponent";

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor, array1, array2, array3) => (
    <>
      <List className="list_content">
        {[array1, array2, array3].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Card variant="outlined" className="dash_header">
                <React.Fragment>
                  <CardContent>
                    <div className="header_row">
                      <div>
                        <Typography
                          sx={{ mb: 1.5 }}
                          color="text.secondary"
                          className="header_card_count"
                        >
                          Sales Team
                          <DeleteIcon style={{ color: "brown" }} />
                          <EditIcon
                            onClick={handleOpen}
                            style={{ color: "brown", left: "20px" }}
                          />
                          <AdressComponent open={open} onClose={handleClose} />
                        </Typography>

                        <div className="display_flex">
                          <Typography
                            variant="body2"
                            className="lastmonth_value"
                          >
                            <EmailIcon /> salesteam@br.in/ salesteam2@br.in
                          </Typography>
                          <Typography
                            variant="body2"
                            // className="lastmonth_text"
                          >
                            <PhoneIcon /> +91 8569473214 / 9632547155
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </React.Fragment>
              </Card>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <button className="button-container"> Save</button>
      </List>
    </>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={props.open}
            onClose={() => props.onClose()}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

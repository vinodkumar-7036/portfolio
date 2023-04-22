import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { AddressContext } from "../App";

export default function TemporaryDrawer(props) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState({});
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [updated, setUpdated] = useState("");
  const { inputData, setInputData } = useContext(AddressContext);

  const handleClicked = () => {
    setUpdated(!updated);
  };
  const handleSave = () => {
    let obj = {
      email: email,
      phoneNo: phoneNo,
    };
    setInputData({ ...obj });
    console.log(":::::>", obj);
  };
  useEffect(() => {
    console.log("======", inputData);
    if (Object.keys(inputData).length) {
      setEmail(inputData?.email);
      setPhoneNo(inputData?.phoneNo);
    }
  }, [inputData]);
  const list = (anchor, array1, array2, array3) => (
    <>
      <div>
        <Typography id="spring-modal-title" variant="h6" component="h2">
          <ArrowBackIcon /> Contacts
        </Typography>
        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
          Please Provide the Company's email & Contacts
        </Typography>
      </div>
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
                            onClick={handleClicked}
                            style={{ color: "brown", left: "20px" }}
                          />
                          {updated && (
                            <div className="Contact_edit">
                              <div>
                                <EmailIcon />
                                <input
                                  value={email}
                                  placeholder="Email"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              <div>
                                <PhoneIcon />
                                <input
                                  value={phoneNo}
                                  placeholder="Phone No"
                                  onChange={(e) => setPhoneNo(e.target.value)}
                                />
                              </div>
                            </div>
                          )}
                        </Typography>

                        <div className="display_flex">
                          <Typography
                            variant="body2"
                            className="lastmonth_value"
                          >
                            <div>
                              <EmailIcon />
                              sourabh@gmail.com
                            </div>
                            {/* <input
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>  */}
                          </Typography>
                          <Typography variant="body2">
                            <PhoneIcon />
                            +91 8569473214
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
        <button onClick={handleSave} className="button-container">
          Save
        </button>
      </List>
    </>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
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

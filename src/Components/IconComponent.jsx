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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function TemporaryDrawer(props) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState({});
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [updated, setUpdated] = useState("");
  const { inputData, setInputData } = useContext(AddressContext);
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  console.log(":::::count", count);
  // const count2 = useSelector((state) => {
  //   return state.count;
  // });

  const handleClicked = () => {
    setUpdated(!updated);
  };
  const handleSave = () => {
    let obj = {
      email: email,
      phoneNo: phoneNo,
    };

    dispatch({ type: "UPDATEDATA", payload: obj });
    // setInputData({ ...obj });
    // console.log(":::::>", obj);
  };
  // useEffect(() => {
  //   console.log("======", inputData);
  //   if (Object.keys(inputData).length) {
  //     setEmail(inputData?.email);
  //     setPhoneNo(inputData?.phoneNo);
  //   }
  // }, [inputData]);
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
        {[array1, array2, array3].map((text) => (
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
                              <Typography>
                                <EmailIcon />
                                {/* vinodg2295@gmail.com */}
                                {/* {count.map((val, index) => {
                                  return (
                                    <div key={index}>{count[val.email]}</div>
                                  );
                                })} */}
                              </Typography>

                              {/* count[0].email */}
                            </div>
                            {/* <input
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>  */}
                          </Typography>
                          <Typography variant="body2">
                            <PhoneIcon />
                            {/* {count2} */}
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

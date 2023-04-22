import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PlaceIcon from "@mui/icons-material/Place";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

import TemporaryDrawer from "./IconComponent";
import AdressComponent from "./AdressComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import StatementComponent from "./StatementComponent";
import { useContext } from "react";
import { AddressContext } from "../App";

function CardComponent() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);
  const [data1, setData1] = useState(false);
  const [data2, setData2] = useState(false);
  const { adressData } = useContext(AddressContext);
  const { inputData } = useContext(AddressContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = () => {
    setData(!data);
  };
  const handleClose1 = () => {
    setData(false);
  };

  const handleOpen2 = () => {
    setData1(!data1);
  };

  const handleClose2 = () => {
    setData1(false);
  };

  const handleOpen3 = () => {
    console.log("???");
    setData2(!data2);
  };
  const handleClose3 = () => {
    setData2(false);
  };

  return (
    <div className="card_header">
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
                  <ContactPageIcon />
                  Contact
                  <EditIcon
                    onClick={() => handleOpen()}
                    style={{ color: "brown", left: "20px" }}
                  />
                  <TemporaryDrawer open={open} onClose={handleClose} />
                </Typography>

                <div className="display_flex">
                  <Typography variant="body2" className="lastmonth_value">
                    {/* <EmailIcon /> */}
                    {Object.keys(inputData).map((key, index) => {
                      return <div key={index}>{inputData[key]}</div>;
                    })}
                  </Typography>
                  {/* <Typography variant="body2">
                    <PhoneIcon /> +91 8569473214
                  </Typography> */}
                </div>
              </div>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
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
                  <PlaceIcon /> Adress
                  <EditIcon
                    onClick={() => handleOpen1()}
                    style={{ color: "brown", left: "20px" }}
                  />
                  <AdressComponent open={data} onClose={handleClose1} />
                </Typography>
                <div className="display_flex">
                  <Typography variant="body2" className="lastmonth_value">
                    {Object.keys(adressData).map((key, index) => {
                      return <div key={index}>{adressData[key]}</div>;
                    })}
                  </Typography>
                  <Typography variant="body2"></Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
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
                  <AccountTreeIcon /> Hours Of Operations
                  <EditIcon style={{ color: "brown", left: "20px" }} />
                </Typography>
                <div className="display_flex">
                  <Typography variant="body2" className="lastmonth_value">
                    Monday To Friday 9Am to 6Pm
                  </Typography>
                  <Typography variant="body2"></Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
      <br />
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
                  <LinkRoundedIcon /> Social Media & Links
                  <EditIcon
                    onClick={() => handleOpen2()}
                    style={{ color: "brown", left: "20px" }}
                  />
                  <SocialMediaComponent open={data1} onClose={handleClose2} />
                </Typography>
                <div className="display_flex">
                  <Typography variant="body2" className="Icons">
                    <LanguageIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                  </Typography>
                  <Typography variant="body2"></Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
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
                  <FormatQuoteRoundedIcon />
                  Statement
                  <EditIcon
                    onClick={() => handleOpen3()}
                    style={{ color: "brown", left: "20px" }}
                  />
                  <StatementComponent isOpen={data2} onClose={handleClose3} />
                </Typography>
                <div className="display_flex">
                  <Typography variant="body2" className="lastmonth_value">
                    {" "}
                  </Typography>
                  <Typography variant="body2">
                    You think it we ink it
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
    </div>
  );
}
export default CardComponent;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Header.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import { SideNavItems } from "./SideNavItems";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const drawerWidth = 240;

export default function SideNavComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar-tabs">
      <List className="sidebar-items-list">
        {SideNavItems.map((link, index) => (
          <NavLink
            className="linked"
            style={{ textDecoration: "none" }}
            key={index}
            to={link.path}
            activeclassname="active"
          >
            <ListItem className="Nav_Container" key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon className="icon">
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText className="Link-text" primary={link.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
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
                  <ContactSupportRoundedIcon />
                </Typography>
                <div className="display_flex">
                  <Typography variant="body2" className="lastmonth_value">
                    Get Help ?
                  </Typography>
                  <Typography variant="body2">
                    {" "}
                    Our Support Team is
                    <br />
                    at your disposal
                  </Typography>
                  <Typography>
                    <button
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Need Help
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          className="app-header-container"
          position=""
          sx={{ width: "0", color: "grey" }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography variant="h1">About Us </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            fontSize: "0px",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            className="app-sidebar-container"
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                top: "50px",
                overflow: "hidden",
              },
            }}
            open
          >
            <List>{drawer}</List>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ marginTop: "50px" }}
        >
          <NavBar />
        </Box>
      </Box>
    </>
  );
}

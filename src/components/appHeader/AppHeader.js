import React, {useState} from "react";
import {
  // Switch,
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../../styles/styles";
import clsx from "clsx";

export const AppHeader = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Codeforces Concept UI
        </Typography>
        {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar alt="Uddeshya Singh" src="../static/image/profilePicture.jpg" />
      </Toolbar>
    </AppBar>
  );
};

import React, { useState } from "react";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "../../styles/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "../listItems";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
    </Drawer>
  );
};

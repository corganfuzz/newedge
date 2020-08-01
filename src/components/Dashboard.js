import React from "react";
import { Box, Container } from "@material-ui/core";
import { useStyles } from "../styles/styles";

// For Switch Theming
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { NavBar } from "../components/navBar/NavBar";
import { AppHeader } from "./appHeader/AppHeader";

export default function Dashboard() {


  const classes = useStyles();

  return (
      <div className={classes.root}>
        {/* <CssBaseline /> */}

        <AppHeader />

        <NavBar />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Box pt={4}></Box>
          </Container>
        </main>
      </div>
  );
}

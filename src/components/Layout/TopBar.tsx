import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container, Theme } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../store";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = {
  userName: string | null | undefined;
};

function TopBar(props: Props) {
  const classes = useStyles();

  const { pathname } = useLocation();

  const { userName } = props;

  const navLinks: Array<{
    name: string;
    link: string;
    variant: "text" | "contained" | "outlined" | undefined;
    color: "inherit" | "primary" | "secondary" | "default" | undefined;
  }> = [
    { name: "write", link: "/write", variant: "contained", color: "secondary" },
    {
      name: "your articles",
      link: "/your-articles",
      variant: "outlined",
      color: "secondary",
    },
    { name: "Logout", link: "#", variant: "text", color: "secondary" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <b>FATMUG</b> | Greetings! {userName}
              </Link>
            </Typography>
            {pathname === "/write" && (
              <Button
                style={{
                  marginLeft: "1.875rem",
                  color: "white",
                  borderColor: "white",
                }}
                variant="contained"
                color="secondary"
              >
                Publish
              </Button>
            )}
            {navLinks.map((item, i) => (
              <Link to={item.link} key={i}>
                <Button
                  style={{
                    marginLeft: "1.875rem",
                    color: "white",
                    borderColor: "white",
                  }}
                  variant={item.variant}
                  color={item.color}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    userName: state.auth.userName,
  };
};

export default connect(mapStateToProps)(TopBar);

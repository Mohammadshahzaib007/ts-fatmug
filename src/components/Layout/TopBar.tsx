import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CircularProgress, Container, Theme } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { AppActionTypes } from "../../store/types/action";
import { authLogOut } from "../../store/actions/auth";

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
  isLoading: boolean;
  onLogout: Function;
};

function TopBar(props: Props) {
  const classes = useStyles();

  const { pathname } = useLocation();

  const { userName, isLoading, onLogout } = props;

  const logOutHandler = () => {
    onLogout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <b>FATMUG</b> {userName && `| Greetings!  ${userName}`}
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
            {userName && (
              <>
                {" "}
                <Link to="/write">
                  <Button
                    style={{
                      marginLeft: "1.875rem",
                      color: "white",
                      borderColor: "white",
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    Write
                  </Button>
                </Link>
                <Link to="/your-articles">
                  <Button
                    style={{
                      marginLeft: "1.875rem",
                      color: "white",
                      borderColor: "white",
                    }}
                    variant="outlined"
                    color="secondary"
                  >
                    Your Articles
                  </Button>
                </Link>
                <Link to="#">
                  {isLoading ? (
                    <CircularProgress size={20} style={{ color: "white" }} />
                  ) : (
                    <Button
                      onClick={logOutHandler}
                      style={{
                        marginLeft: "1.875rem",
                        color: "white",
                        borderColor: "white",
                      }}
                      variant="text"
                      color="secondary"
                    >
                      Logout
                    </Button>
                  )}
                </Link>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    userName: state.auth.userName,
    isLoading: state.auth.isLoading,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
) => {
  return {
    onLogout: () => dispatch(authLogOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

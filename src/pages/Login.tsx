import React, { useState } from "react";
import {
  Container,
  FormControl,
  Grid,
  makeStyles,
  Typography,
  InputAdornment,
  TextField,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppActionTypes } from "../store/types/action";
import { openSnackbar } from "../store/actions/snackbar";
import { SnackbarState } from "../store/types/types";
import { ThunkDispatch } from "redux-thunk";
import { onAuth } from "../store/actions/auth";

const useStyles = makeStyles({
  formContainer: {
    width: "25rem",
    minHeight: "31.25rem",
    background: "white",
    borderRadius: "8px",
    boxShadow:
      "0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  openSnackbar: (payload: SnackbarState) => void;
  onAuth: (email: string, password: string) => void;
};

function Login(props: Props) {
  const classes = useStyles();

  const { openSnackbar, onAuth } = props;

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    // validation or other validation will be done by firebase
    if (state.email === "" || state.password === "") {
      openSnackbar({
        color: "error",
        open: true,
        msg: "Please enter valid information",
      });
      return;
    }

    // FROM REDUX
    onAuth(state.email, state.password);
  };

  return (
    <section style={{ width: "100%", height: "80vh" }}>
      <Container style={{ width: "100%", height: "100%" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ width: "100%", height: "100%" }}
        >
          <Grid className={classes.formContainer}>
            <div
              style={{
                width: "80%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link
                to="/signup"
                style={{
                  alignSelf: "flex-start",
                  marginBottom: "50px",
                  color: "rgba(0, 0, 0, .5)",
                }}
              >
                create a new account
              </Link>
              <FormControl fullWidth>
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", marginBottom: "40px" }}
                >
                  Log In
                </Typography>
                <TextField
                  name="email"
                  style={{ marginBottom: "35px" }}
                  variant="outlined"
                  placeholder="example@gmail.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={inputChangeHandler}
                />
                <TextField
                  name="password"
                  variant="outlined"
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={inputChangeHandler}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                  }}
                >
                  <Link to="#" style={{ color: "rgba(0, 0, 0, .5)" }}>
                    Forgot Password?
                  </Link>
                  <Link to="/signup" style={{ color: "rgba(0, 0, 0, .5)" }}>
                    Not a Member yet?
                  </Link>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={onSubmitHandler}
                >
                  SIGN IN
                </Button>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActionTypes>) => {
  return {
    openSnackbar: (payload: SnackbarState) => dispatch(openSnackbar(payload)),
    onAuth: (email: string, password: string) =>
    dispatch(onAuth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

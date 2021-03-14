import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { AppState } from "../store";
import { SnackbarState } from "../store/types/types";
import { closeSnackbar } from "../store/actions/snackbar";
import { AppActionTypes } from "../store/types/action";
import { ThunkDispatch } from "redux-thunk";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

// PROPS TYPE

function GlobalSnackbar(props: any) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  const { open, color, msg, onCloseSnackbar } = props;

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    onCloseSnackbar();
    // setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity={color}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActionTypes>) => ({
  onCloseSnackbar: () => dispatch(closeSnackbar()),
});

const mapStateToProps = (state: AppState): SnackbarState => ({
  open: state.snackbar.open,
  color: state.snackbar.color,
  msg: state.snackbar.msg,
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSnackbar);

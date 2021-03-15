import {
  Container,
  Grid,
  TextField,
  makeStyles,
  Button,
  FormControl,
} from "@material-ui/core";
import { Color } from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import placeholder from "../assets/placeholder.png";
import { onAddPost } from "../store/actions/post";
import { openSnackbar } from "../store/actions/snackbar";
import { AppActionTypes } from "../store/types/action";
import { SnackbarState } from "../store/types/types";

const useStyles = makeStyles({
  label: {
    fontSize: "1.5625rem",
    color: "black",
    letterSpacing: "5px",
    textTransform: "uppercase",
    display: "inline-block",
    fontWeight: 700,
    marginBottom: "0.9375rem",
  },
});

type Props = {
  onAddPost: (
    heading: string,
    description: string,
    image: null | Blob,
    imageName: string
  ) => void;
  openSnackbar: (payload: SnackbarState) => void;
};

function WriteArticle(props: Props) {
  const classes = useStyles();

  const { onAddPost, openSnackbar } = props;

  const [{ alt, src, name, file }, setImg] = useState<{
    alt: string;
    src: string;
    name: string;
    file: Blob | null;
  }>({
    src: placeholder,
    alt: "Upload an Image",
    name: "",
    file: null,
  });

  const [post, setPost] = useState({
    title: "",
    description: "",
    img: file,
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files![0];

    if (file) {
      setImg({
        src: URL.createObjectURL(file),
        alt: file.name,
        name: file.name,
        file: file,
      });
    }
  };

  const pusblishBtn = document.getElementById("publish-button")!;

  const postAddHandler = () => {
    if (post.title === "" || post.description === "" || post.img === null) {
      openSnackbar({
        color: "error",
        open: true,
        msg: "Please enter valid data with image",
      });
      return;
    }
    onAddPost(post.title, post.description, file, name);
    setPost({
      ...post,
      title: "",
      description: "",
      img: null,
    });
  };

  return (
    <section>
      <Button
        // onClick={postAddHandler}
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
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <label htmlFor="title" className={classes.label}>
                Title
              </label>
              <TextField
                name="title"
                id="title"
                style={{ marginBottom: "6.25rem" }}
                inputProps={{ style: { fontSize: "1.5625rem" } }} // font size of input text
                fullWidth
                variant="filled"
                onChange={inputChangeHandler}
                value={post.title}
              />

              <label htmlFor="description" className={classes.label}>
                Description
              </label>
              <TextField
                name="description"
                rows="20"
                id="description"
                inputProps={{
                  style: { fontSize: "1.5625rem", lineHeight: "1.3" },
                }} // font size of input text
                fullWidth
                variant="filled"
                multiline
                onChange={inputChangeHandler}
                value={post.description}
              />

              <div style={{ marginTop: "100px" }}>
                <input
                  onChange={handleImg}
                  accept="image/*"
                  style={{ display: "none" }}
                  multiple
                  type="file"
                  id="contained-button-file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload Image
                  </Button>
                  {name}
                </label>
              </div>
              {/* <img alt="" /> */}
              <div
                style={{
                  width: "100%",
                  height: "31.25rem",
                  marginTop: "5rem 0",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
) => {
  return {
    onAddPost: (
      heading: string,
      description: string,
      image: Blob | null,
      imageName: string
    ) => dispatch(onAddPost(heading, description, image, imageName)),
    openSnackbar: (payload: SnackbarState) => dispatch(openSnackbar(payload)),
  };
};

export default connect(null, mapDispatchToProps)(WriteArticle);

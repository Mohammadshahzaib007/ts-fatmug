import {
  Container,
  Grid,
  TextField,
  makeStyles,
  Button,
  FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import placeholder from "../assets/placeholder.png";

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

function WriteArticle() {
  const classes = useStyles();
  const [{ alt, src, name, file }, setImg] = useState<{alt: string, src: string, name: string, file: File | null}>({
    src: placeholder,
    alt: "Upload an Image",
    name: '',
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

  return (
    <section>
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
                inputProps={{ style: { fontSize: "1.5625rem" } }} // font size of input text
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

export default WriteArticle;

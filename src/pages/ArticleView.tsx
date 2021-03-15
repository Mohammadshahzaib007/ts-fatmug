import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Blog } from "../store/types/types";
import { useParams } from "react-router";

type Props = {
  blogs: Array<Blog>;
};

function ArticleView(props: Props) {
  const { blogs } = props;

  // @ts-ignore
  const { blogId } = useParams();

  let author = "";
  let desc = "";
  let heading = "";
  let imageUrl = "";
  let createdAt = "";

  for (const blog of blogs) {
    // blogId is a user id too
    // using user id as a blog id
    if (blog.userId === blogId) {
      author = blog.author;
      desc = blog.description;
      heading = blog.heading;
      imageUrl = blog.imageUrl;
      createdAt = blog.createdAt;
    }
  }
  // useEffect(() => {
  //   setBlog(myBlog);
  // }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ width: "100%", height: "50vh" }}>
            <img src={imageUrl} style={{width: '100%', height: '100%', objectFit: 'contain'}} alt={heading} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "40px 0",
              borderBottom: "2px solid black",
            }}
          >
            <Typography variant="h4" component="h5">
              {heading}
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography color="primary" style={{ color: "black" }}>
                {createdAt}
              </Typography>
              <Typography
                color="primary"
                style={{ color: "black", fontWeight: 700, margin: "0 15px" }}
              >
                6 min read
              </Typography>
              <IconButton>
                <StarBorderIcon />
              </IconButton>
            </div>
          </div>
          <Typography style={{ margin: "50px 0", lineHeight: "2" }}>
            {desc}
          </Typography>

          <div style={{ display: "flex", marginBottom: "100px" }}>
            <AccountCircleOutlinedIcon />
            <Typography style={{ marginLeft: "10px" }}>
              by
              <span style={{ fontWeight: 700, textTransform: "capitalize" }}>
                {' ' + author}
              </span>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    blogs: state.post.blogs,
  };
};

export default connect(mapStateToProps, null)(ArticleView);

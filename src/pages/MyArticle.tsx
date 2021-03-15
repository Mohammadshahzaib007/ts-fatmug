import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import YourArticleCard from "../components/YourArticleCard";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Blog } from "../store/types/types";

type Props = {
  blogs: Array<Blog>;
  userId: string;
};

function MyArticle(props: Props) {
  const { blogs, userId } = props;

  const [myBlogs, setMyBlogs] = useState<Array<Blog>>([]);

  const fileterMyBlogs = () => {
    const myBlogs = blogs.filter((item) => item.userId === userId);
    setMyBlogs(myBlogs);
  };

  useEffect(() => {
    fileterMyBlogs();
  }, []);

  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                padding: "20px 0",
                marginBottom: "50px",
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "5px",
                }}
              >
                your SUBMITTED articles
              </Typography>
            </div>
            {myBlogs.length === 0 && (
              <Typography
                variant="h5"
                color="secondary"
                component="h1"
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "5px",
                }}
              >
                you haven't written anything yet!
              </Typography>
            )}
            {myBlogs.map((item) => (
              <YourArticleCard
                blogId={item.userId}
                key={item.key}
                heading={item.heading}
                desc={item.description}
                imgSrc={item.imageUrl}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    blogs: state.post.blogs,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, null)(MyArticle);

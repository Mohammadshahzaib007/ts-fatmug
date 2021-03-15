import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import HomePageBlogCard from "../components/HomePageBlogCard";
import TopArticleCard from "../components/TopArticleCard";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActionTypes } from "../store/types/action";
import { onFetchBlogs } from "../store/actions/post";
import { AppState } from "../store";
import { Blog } from "../store/types/types";

type Props = {
  onFetchBlogs: Function;
  blogs: Array<Blog>;
};

function Home(props: Props) {
  const { onFetchBlogs, blogs } = props;

  useEffect(() => {
    onFetchBlogs();
  }, []);

  console.log(blogs);


  return (
    <section>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12}>
            <HomePageBlogCard
            id="dksaf;lksadl"
              imageLink="https://picsum.photos/seed/picsum/500/300"
              heading="Lizard"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica"
              author="shahzaib"
              organization="Croudit"
            />
            {blogs.map((item) => (
              <HomePageBlogCard
              key={item.key}
                imageLink={item.imageUrl}
                heading={item.heading}
                description={item.description}
                author={item.author}
                organization="fatmug"
                id={item.userId}
              />
            ))}
          </Grid>
          {/* TOP ARTICLES PART */}
          <Grid item md={6} sm={12}>
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "10px 0",
                marginBottom: "50px",
              }}
            >
              <Typography
                variant="h4"
                component="h5"
                style={{ textTransform: "uppercase" }}
              >
                Top 10 articles
              </Typography>
            </div>

            <div
              style={{ borderRight: "1px solid black", paddingRight: "20px" }}
            >
              <TopArticleCard
                author="Shahzaib"
                heading="10 React Interview Questions for 2020"
                organization="unknown"
                imageLink="https://picsum.photos/200/300"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    blogs: state.post.blogs,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
) => {
  return {
    onFetchBlogs: () => dispatch(onFetchBlogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

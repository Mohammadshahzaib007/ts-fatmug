import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import HomePageBlogCard from "../components/HomePageBlogCard";
import TopArticleCard from "../components/TopArticleCard";

function Home() {
  return (
    <section>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12}>
            <HomePageBlogCard
              imageLink="https://picsum.photos/seed/picsum/500/300"
              heading="Lizard"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica"
              author="shahzaib"
              organization="Croudit"
            />
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

export default Home;

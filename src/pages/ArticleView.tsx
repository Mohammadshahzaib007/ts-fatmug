import React, { useState } from "react";
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
  const {blogId} = useParams();

  const [blog, setBlog] = useState<Array<Blog>>([]);

  // for (const item of blogs) {
  //     if() {

  //     }
  // }

  console.log(blogId);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ width: "100%", height: "50vh", background: "yellow" }}>
            Image container
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
              10 React Interview Questions for 2020
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography color="primary" style={{ color: "black" }}>
                Jun 10
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
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Why do we use it? It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using &apos;Content here, content here&apos;, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for &apos;lorem ipsum&apos; will uncover many web sites still
            in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
            &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
            Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first
            line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
            Malorum&quot; by Cicero are also reproduced in their exact original
            form, accompanied by English versions from the 1914 translation by
            H. Rackham.
          </Typography>

          <div style={{ display: "flex", marginBottom: "100px" }}>
            <AccountCircleOutlinedIcon />
            <Typography style={{ marginLeft: "10px" }}>
              by
              <span style={{ fontWeight: 700, textTransform: "capitalize" }}>
                Eric Sangerma
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

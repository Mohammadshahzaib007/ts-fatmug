import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import YourArticleCard from '../components/YourArticleCard';

function MyArticle () {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div
              style={{
                width: '100%',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                padding: '20px 0',
                marginBottom: '50px'
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                style={{ textTransform: 'uppercase', fontWeight: 700, letterSpacing: '5px' }}
              >
                your SUBMITTED articles
              </Typography>
            </div>
            <YourArticleCard
              heading="10 React Interview Questions for 2020"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s ...."
              imgSrc="link"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default MyArticle;

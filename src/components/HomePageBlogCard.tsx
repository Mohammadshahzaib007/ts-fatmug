import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '20px 0'
  }
});


interface Props {
    heading: string,
    description: string,
    imageLink: string,
    author: string,
    organization: string,
    id: string
  }

export default function HomePageBlogCard (props: Props) {
  const classes = useStyles();

const  { heading, description, imageLink, author, organization, id } = props

  return (
    <Link to={"/article/" + id}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={imageLink}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <InfoOutlinedIcon />{' '}
            <Typography style={{ textTransform: 'capitalize', marginLeft: '10px' }}>
              {' '}
              <b>{author}</b> in <b>{organization}</b>{' '}
            </Typography>{' '}
          </div>

          <Typography gutterBottom variant="h4" component="h1" style={{ fontWeight: 700,textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'black',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <Button size="small" color="primary" style={{ color: 'black' }}>
          Read More
        </Button>
        <Typography color="primary" style={{ color: 'black' }}>
          7 min read
        </Typography>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Link>
    
  );
}


// HomePageBlogCard.propTypes = {
//   heading: propTypes.string,
//   description: propTypes.string,
//   imageLink: propTypes.string,
//   author: propTypes.string,
//   organization: propTypes.string
// };

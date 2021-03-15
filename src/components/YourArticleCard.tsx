import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0'
  },
  iconsContainer: {
    marginLeft: 'auto'
  },
  imgContainer: {
    width: '200px',
    height: '200px',
  },
  headingContainer: {
    width: '65%',
    marginLeft: '1.875rem'
  }
});

interface Props  {
    heading: string,
    desc: string,
    imgSrc: string
  }
  ;

function YourArticleCard (props: Props) {
  const classes = useStyles();

  const { heading, desc, imgSrc } = props;
    
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}><img src={imgSrc} style={{width: '100%', height: '100%', objectFit: 'contain'}} alt={heading} /></div>
      <div className={classes.headingContainer}>
        <h1>{heading}</h1>
        <p style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
          {desc}
        </p>
      </div>
      <div className={classes.iconsContainer}>
      <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default YourArticleCard;



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    // maxwidth: 340,
    // width:"90%",
    minWidth:"auto"
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid>
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.src}
          title={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
            {props.item.title!=="Home Loan"?<><br/><br/><hr/></>:null}
            <br/><br/>
            <b>How to get {props.item.title}?</b>
            <p> Call to our Representative for immediate Assistance. +91 {process.env.REACT_APP_MOBILENUMBER}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" href="#about" color="primary">
         Contact
        </Button>
       {props.item.title!="Business Loan"? <Button size="small" color="primary" onClick={()=>{
         props.setForm(false);
         props.setOpen(true)
        }}>
        Check Eligibility
        </Button>:<span></span>}
      </CardActions>
    </Card>
    </Grid>
  );
}

import React from "react";
import { Link } from "react-router-dom";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CountryCard = (props) => {
  const classes = useStyles();

  const { name, capital, flag } = props.country;
  const key = props.country.alpha3Code;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={flag} title='Contemplative Reptile' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/details/" + key}>
          <Button size='small' color='primary'>
            Show Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CountryCard;

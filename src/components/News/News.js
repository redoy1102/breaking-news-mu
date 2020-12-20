import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const News = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([])
    useEffect(() => {
      fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-20&sortBy=publishedAt&apiKey=d3900ba57fb541ddb735538e12d7f238')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
    })
    return (
<div>
            {
              articles.map(article => {
                return(
                  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a style={{textDecoration: 'none'}} href={article.url}>Learn More</a>
        </Button>
      </CardActions>
    </Card>)})}
</div>
    );
};

export default News;
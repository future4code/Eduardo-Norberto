import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from "../../imagem/futurex.png";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    item: {
      maxWidth: "550px",
      margin: "0 auto",
      marginTop: "30px",
      marginBottom: "30px",
    },
  
});

function MediaCard() {
  const classes = useStyles();
    return (
      <Card className={classes.item}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500px"
            width="500px"
            image={logo}
            title="Logo FutureX"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FutureX
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Nossa empresa atua com excêlencia no serviço de agenciamento de viagens ao espaço. Seja para négocios ou lazer, agregando valor para os nossos clientes.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
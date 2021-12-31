

import React from "react";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import SecurityIcon from '@material-ui/icons/Security';
import StarsIcon from '@material-ui/icons/Stars';
import { Button, Grid, Box, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card'
import Pagination from "./Pagination";


const useStyles = makeStyles(theme=>({
  mainContainer: {
    marginTop: 10,
  },
  loadingContainer: {
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: theme.palette.background.light,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  },
  
})); 



const List = ({ items, loadMore, paginationAvailable, loading, showImage }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        {loading && (
          <Box className={classes.loadingContainer}>
            <CircularProgress />
          </Box>
        )}
        {items.map((item, index) => {
          const showStats = (item.atk && item.def && item.level) || false;
          const imageUrlSmall =  item.card_images[0] && item.card_images[0].image_url_small || 'https://storage.googleapis.com/ygoprodeck.com/pics_small/34541863.jpg';
          const imageUrlBig =  item.card_images[0] && item.card_images[0].image_url || 'https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg'
          return (
            <Card
              key={index}
              race={item.race}
              type={item.type}
              name={item.name}
              showStats={showStats}
              atk={item.atk}
              def={item.def}
              level={item.level}
              showImage={showImage}
              imageUrlBig={imageUrlBig}
              imageUrlSmall={imageUrlSmall}
            />
          );
        })}
      </Grid>
    <Pagination paginationAvailable={paginationAvailable} loadMore={loadMore}  />
    </>
  );
};

export default List;

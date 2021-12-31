

import React from "react";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import SecurityIcon from '@material-ui/icons/Security';
import StarsIcon from '@material-ui/icons/Stars';
import { Button, Grid, Box, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>({
  mainContainer: {
    marginTop: 10,
  },
  singleAdvisorProfile: {
    position: "relative",
    marginBottom: "50px",
    WebkitTransitionDuration: "500ms",
    transitionDuration: "500ms",
    zIndex: "1",
    borderRadius: "15px",
    maxWidth: "80%",
    WebkitBoxShadow: "0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125)",
    boxShadow: "0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125)",
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer',
   
  },
  advisorTumb: {
    position: "relative",
    zIndex: "1",
    borderRadius: "15px 15px 0 0",
    margin: "0 auto",
    padding: "30px 30px 0 30px",
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor:theme.palette.background.secondary,
    overflow: "hidden",
    "&::after": {
      WebkitTransitionDuration: "500ms",
      transitionDuration: "500ms",
      position: "absolute",
      width: "150%",
      height: "80px",
      bottom: "-45px",
      left: "-25%",
      content: '""',
      backgroundColor: theme.palette.background.default,
      WebkitTransform: "rotate(-15deg)",
      transform: "rotate(-15deg)",
      [theme.breakpoints.down('xs')]: {
        height: '140px',
        bottom: '-90px',
      }
    },  
  },
  singleAdvisorDetailsInfo:{
    position:"relative",
    zIndex:"1",
    padding:"30px",
    paddingBottom:0,
    textAlign:"right",
    WebkitTransitionDuration:"500ms",
    transitionDuration:"500ms",
    borderRadius:"0 0 15px 15px",
    backgroundColor:theme.palette.background.default,
    minHeight:"210px",
    "&::after": {
      WebkitTransitionDuration:"500ms",
      transitionDuration:"500ms",
      position:"absolute",
      zIndex:"1",width:"50px",
      height:"1px",
      backgroundColor:theme.palette.text.primary,
      content:"\"\"",
      top:"12px",
      right:"30px"
    }
  },
  loadingContainer: {
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: theme.palette.text.light,
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
      <Grid container justifyItems="center" className={classes.mainContainer}>
        {loading && (
          <Box className={classes.loadingContainer}>
            <CircularProgress />
          </Box>
        )}
        {items.map((item) => {
          const showStats = (item.atk && item.def && item.level) || false;
          const imageUrlSmall =  item.card_images[0] && item.card_images[0].image_url_small || 'https://storage.googleapis.com/ygoprodeck.com/pics_small/34541863.jpg';
          const imageUrlBig =  item.card_images[0] && item.card_images[0].image_url || 'https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg'
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={2}
              mt={3}
              justifyItems="center"
            >
              <div className={classes.singleAdvisorProfile } onClick={() => showImage(imageUrlBig)}>
                <div className={classes.advisorTumb}>
                  <img
                    src={imageUrlSmall}
                    alt="A monster card posible haha"
                    width="120"
                 
                  />
                </div>

                <div className={classes.singleAdvisorDetailsInfo}>
                  <Typography variant="body2">
                    {item.race}
                  </Typography>
                  <Typography variant="h6">
                  {item.name}
                  </Typography>
                  <Typography variant="body2">
                  {item.type}
                  </Typography>
                {/*   <p>{item.race}</p>
                  <h6>{item.name}</h6>
                  <p>{item.type}</p> */}
                  {showStats && (
                    <div
                      style={{
                        position:'absolute',
                        bottom:20,
                        width: '100%',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex",
                        alignItems: "center",
                        width:'70%',
                        justifyContent: "space-between"}}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <OfflineBoltIcon color="secondary"  />
                          <Typography style={{ paddingLeft:2}}>{item.atk}</Typography>
                          
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <SecurityIcon color="secondary" />
                          <Typography style={{ paddingLeft:2}}>{item.def}</Typography>
                      
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                        v
                      >
                        <StarsIcon color="secondary"  />
                        <Typography style={{ paddingLeft:2}}>  {item.level}</Typography>
                      
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      {paginationAvailable && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 10,
          }}
        >
          <Button variant="contained" color="primary" onClick={loadMore}>
            Ver mas
          </Button>
        </Box>
      )}
    </>
  );
};

export default List;

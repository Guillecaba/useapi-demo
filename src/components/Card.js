import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Grid, Box, Typography } from "@material-ui/core";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import SecurityIcon from '@material-ui/icons/Security';
import StarsIcon from '@material-ui/icons/Stars';

const useStyles = makeStyles((theme) => ({
  statsItem: {
    display: "flex",
    alignItems: "center",
  },
  statsText: {
    paddingLeft: 2,
  },
  statsContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsInnerContainer: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    justifyContent: "space-between",
  },
  card: {
    position: "relative",
    marginBottom: "50px",
    WebkitTransitionDuration: "500ms",
    transitionDuration: "500ms",
    zIndex: "1",
    borderRadius: "15px",
    maxWidth: "80%",
    WebkitBoxShadow: "0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125)",
    boxShadow: "0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125)",
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
    minWidth: "80%",
  },
  tumb: {
    position: "relative",
    zIndex: "1",
    borderRadius: "15px 15px 0 0",
    margin: "0 auto",
    padding: "30px 30px 0 30px",

    backgroundColor: theme.palette.background.secondary,
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
      [theme.breakpoints.down("xs")]: {
        height: "140px",
        bottom: "-90px",
      },
    },
  },
  detailsInfo: {
    position: "relative",
    zIndex: "1",
    padding: "30px",
    paddingBottom: 0,
    textAlign: "right",
    WebkitTransitionDuration: "500ms",
    transitionDuration: "500ms",
    borderRadius: "0 0 15px 15px",
    backgroundColor: theme.palette.background.default,
    minHeight: "210px",
    "&::after": {
      WebkitTransitionDuration: "500ms",
      transitionDuration: "500ms",
      position: "absolute",
      zIndex: "1",
      width: "50px",
      height: "1px",
      backgroundColor: theme.palette.text.primary,
      content: '""',
      top: "12px",
      right: "30px",
    },
  },
}));

const Card = ({ race, type, name, showStats, atk, def, level, showImage,imageUrlBig,imageUrlSmall }) => {
    const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      md={3}
      lg={2}
      mt={3}
      justifyContent="center"
      
    >
      <Box
        className={classes.card}
        onClick={() => showImage(imageUrlBig)}
      >
        <Box className={classes.tumb}>
          <img
            src={imageUrlSmall}
            alt="A monster card posible haha"
            width="120"
          />
        </Box>

        <Box className={classes.detailsInfo}>
          <Typography variant="body2">{race}</Typography>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{type}</Typography>

          {showStats && (
            <Box
              className={classes.statsContainer}
            >
              <Box
                className={classes.statsInnerContainer}
              >
                <Box>
                  <Box
                     className={classes.statsItem}
                  >
                    <OfflineBoltIcon color="secondary" />
                    <Typography className={classes.statsText} >{atk}</Typography>
                  </Box>
                  <Box
                   className={classes.statsItem}
                  >
                    <SecurityIcon color="secondary" />
                    <Typography  className={classes.statsText} >{def}</Typography>
                  </Box>
                </Box>

                <Box
                 className={classes.statsItem}
                >
                  <StarsIcon color="secondary" />
                  <Typography  className={classes.statsText} >{level}</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default Card;
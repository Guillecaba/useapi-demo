import React from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: 10,
    },
  },
  label: {
    marginBottom: 5,
    marginRight: 10,
    fontSize: 14,
  },
  filterInput: {
    paddingTop: "12.0px!important",
    paddingBottom: "12.0px!important",
    paddingRight: "14px!important",
    paddingLeft: "14px!important",
    fontFamily: "Nunito",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    border: "none",
  },
  innerLabel: {
    color: theme.palette.grey.middle,
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 13,
  },
  textField: {
    backgroundColor: theme.palette.background.default,
    marginTop: "0px!important",
    marginBottom: "0px!important",
    border: "none",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  },
}));

const Search = ({inputNameHandler}) => {
    const classes = useStyles();
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        className={classes.searchContainer}
      >
        <Typography className={classes.label} variant="subtitle1">
          Buscar
        </Typography>
        <TextField
          onKeyDown={(e) => {
            inputNameHandler(e);
          }}
          InputProps={{
            classes: {
              input: classes.filterInput,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.innerLabel,
            },
          }}
          label={"by name"}
          variant="outlined"
          margin="dense"
          fullWidth
          className={classes.textField}
        />
      </Box>
    );
}

export default Search
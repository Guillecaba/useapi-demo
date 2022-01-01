import React from 'react';
import { Box, makeStyles, Typography } from "@material-ui/core";
import Select from 'react-select';
import { typeOptions,  customStyles } from '../utils';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: 5,
    marginRight: 10,
    fontSize: 14,
  },
}));

const Selector = ({filter, inputSelectHandler}) => {
    const classes = useStyles();
    const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography className={classes.label} variant="subtitle1">
      {t('general.type')}
      </Typography>
      <Box zIndex={10} width={"100%"}>
        <Select
          onChange={(option) => inputSelectHandler(option)}
          isClearable={true}
          value={filter}
          options={typeOptions}
          styles={customStyles}
          placeholder= {t('general.byType')}
        />
      </Box>
    </Box>
  );
};


export default Selector;
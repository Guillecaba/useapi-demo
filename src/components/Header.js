
import { AppBar, Typography, Toolbar, Button, makeStyles } from "@material-ui/core";
import React, {useEffect, useState } from 'react';
import i18n from '../i18n';

const useStyles = makeStyles(()=>({
  title:{
    flexGrow:1
  }
}))

const Header = () => {
  const classes = useStyles();
  const [menuLanguage, setMenuLanguage] = useState();

  const changeLang = event => {
    localStorage.setItem('language', event);
    console.log(event)
    i18n.changeLanguage(event);
    setMenuLanguage(event);
  };

  useEffect(()=> {
    const language = localStorage.getItem('language') || 'es';
    setMenuLanguage(language);
  },[])
  return  (<AppBar position="static">
  <Toolbar>
    <Typography className={classes.title} variant="h3" >
      Yu-Gi-Oh - Portal
    </Typography>
    <Button edge="end"  color="inherit" onClick={() =>changeLang(menuLanguage === 'en' ? 'es': 'en' )}>{menuLanguage ==='en' ? 'Español': 'English' }</Button>
  </Toolbar>
  </AppBar>)
}

export default Header;
import React, { useEffect, useState, useRef } from "react";
import List from "./List";
import axios from "axios";
import * as _ from "lodash";
import { Box, Container, TextField, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import ImagePreview from './ImagePreview';
import { theme } from "../theme";
import Filters from "./Filters";
import { getCards, baseUrl } from '../api';



const useStyles = makeStyles(theme =>({
  background:{
    //backgroundColor:theme.palette.background.default
  },
    searchContainer:{
      [theme.breakpoints.down('md')]: {
        marginBottom:10
      }
    },
    filterContainer:{
      marginTop:10,
      paddingLeft:30,
      paddingRight:30
    },
    label: {
      marginBottom: 5,
    marginRight: 10,
    fontSize: 14
    },
    projectFilterInput:{
      paddingTop: '12.0px!important',
      paddingBottom: '12.0px!important',
      paddingRight: '14px!important',
      paddingLeft: '14px!important',
      fontFamily: 'Nunito',
      fontSize: '12px' , 
      display:'flex',
      alignItems: 'center',
      border:'none'
    },
   projectsLabel:{
    color: theme.palette.grey.middle,
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 13
   },
    projectsFilterLabelInput: {
      transform: 'translate(14px, -6px) scale(0.75) !important'
    },
    textField:{
      backgroundColor: theme.palette.background.default,
     marginTop: '0px!important',
     marginBottom: '0px!important',
     border: 'none',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      },
      '&:hover fieldset': {
        border: 'none'
      },
      '&.Mui-focused fieldset': {
        border: 'none'
      }
    } 
    }
}))

const Content = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const isFirstRun = useRef(true);
  const [items, setItems] = useState([]);
  const[name, setName]=useState('');
  const[filter,setFilter] = useState('');
  const [offset, setOffset] = useState(0);
  const[next,setNext] = useState('');
  const [loading,setLoading] = useState(false);
  const [imagePreview,setImagePreview] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  //&type=Effect Monster&offset=${offset}`;
  const loadMore = () => {
    setLoading(true);
    getCards(next).then(response => {
      const yugiCards = _.get(response, "data.data");
      const newItems = items.concat(yugiCards);
      const nextUrl =  _.get(response,"data.meta.next_page") || "";
      setItems(newItems);
      setNext(nextUrl);
    }).catch(e => {
      console.log(e);
      setItems([]);
      setNext('');
    }) .finally(()=> {
      setLoading(false);
    })
  };
useEffect(()=>{
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    let separator = '?';
    let url = baseUrl
    let filters = {num:12,offset:0};
    if (name !== '') {
      filters = { ...filters, fname:name };
    }
    if (!!filter && filter.value !== '') {
      filters = { ...filters, type: filter.value };
    } 
    // eslint-disable-next-line no-restricted-syntax
    for (const k in filters) {
      if (filters[k] == null) {
        // eslint-disable-next-line no-continue
        continue;
      }
      url = `${url + separator + k}=${filters[k]}`;
      separator = '&';
    }
    setLoading(true)
    getCards(url)
      .then((response) => {
        const cartas = response.data.data;
        const nextUrl = response.data.meta.next_page;

        setItems(cartas);
        setNext(nextUrl);
      }).catch(e => {
        setItems([]);
        setNext('');
      }) 
      .finally(() => {
        setLoading(false);
      });
    
  },[name, filter]);
  useEffect(() => {
    setLoading(false);
    const url = baseUrl + '?&num=12&offset=0';
    getCards(url).then(response => {
      const yugiCards = _.get(response, "data.data") || [];
      const nextUrl = _.get(response,"data.meta.next_page") || "";
      setLoading(false);
      setNext(nextUrl);
      setItems(yugiCards);
    }).catch(e => {
      setItems([]);
      setNext('');
    }) 
    .finally(() => {
      setLoading(false);
    }) 
  }, []);

  const inputNameHandler = (e) => {
    if (e.key === 'Enter') {
      setName(e.target.value);
    }
  }

  const inputSelectHandler = (option) => {
    setFilter(option)
  }

  const openPreviewHandler = (url) => {
    setImagePreview(true);
    setImageUrl(url);
  }



  const paginationAvailable = !!next;

  return (
    <Container maxWidth="xl" className={classes.background}>
      <ImagePreview
        open={imagePreview}
        togglePreview={setImagePreview}
        imageUrl={imageUrl}
      />
      <Grid
        container
        className={classes.filterContainer}
        justifyContent="space-between"
        alignItems="center"
      >
        <Filters
          filter={filter}
          inputNameHandler={inputNameHandler}
          inputSelectHandler={inputSelectHandler}
        />
      </Grid>

      <List
        name={name}
        items={items}
        loadMore={loadMore}
        paginationAvailable={paginationAvailable}
        loading={loading}
        showImage={openPreviewHandler}
      />
    </Container>
  );
};

export default Content;

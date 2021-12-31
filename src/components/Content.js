import React, { useEffect, useState, useRef } from "react";
import List from "./List";
import axios from "axios";
import * as _ from "lodash";
import { Box, Container, TextField, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Select from 'react-select';
import { typeOptions } from '../utils';
import ImagePreview from './ImagePreview';
import { theme } from "../theme";


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
  const [imageUrl,setImageUrl] = useState('')
  const baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=12&offset=0`;
  //&type=Effect Monster&offset=${offset}`;
  const loadMore = () => {
    setLoading(true);
    axios.get(next).then(response => {
      const cards = items
      const yugiCards = _.get(response, "data.data");
      const newItems = items.concat(yugiCards);
      const nextUrl = response.data.meta.next_page;
      setItems(newItems);
      setNext(nextUrl);
    }).finally(()=> {
      setLoading(false);
    })
  };
  useEffect(()=>{
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    let separator = '?';
    let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
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
    axios.get(url)
        .then((response) => {
          const cartas = response.data.data;
          const nextUrl = response.data.meta.next_page;
          
         setItems(cartas)
         setNext(nextUrl);
        }).finally(()=> {
          setLoading(false);
        })
    
  },[name, filter])
  useEffect(() => {
    setLoading(true)
    axios.get(baseUrl).then((response) => {
      const yugiCards = _.get(response, "data.data");
      const nextUrl = response.data.meta.next_page;
      setNext(nextUrl);
      setItems(yugiCards);
    }).finally(()=> {
      setLoading(false);
    });
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

  const customStyles = {
   
    control: (styles, { isFocused, isDisabled }) => ({
      ...styles,
      backgroundColor:  theme.palette.background.default,
      border: 'none',
      '&:hover': { borderColor: 'none' },
      '&:active': { borderColor: 'none' },
      border: 0,
    // This line disable the blue border
      boxShadow: 'none'
      
      
    }),
    placeholder: styles => ({
      ...styles,
      fontSize: 16,
      color: theme.palette.text.primary,
      //paddingBottom: 25,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 13
    }),
    singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: theme.palette.text.primary,
      fontSize: 12
    }),
    option: (styles, { isFocused,isSelected }) => ({
      ...styles,
      backgroundColor: isFocused ? 'rgba(0, 0, 0, 0.08);': isSelected ? 'rgba(0, 0, 0, 0.08);' :'transparent',

      color: isSelected ? theme.palette.grey.main : theme.palette.text.primary ,
      fontSize: isSelected ? 12 :12,
      fontFamily: theme.typography.fontFamily,
      fontWeight: isSelected ? '800': theme.typography.fontWeightMedium,
    }),
    
  }

  const paginationAvailable = !!next;

  return (
    <Container maxWidth="xl" className={classes.background}>
      <Grid
        container
        className={classes.filterContainer}
        justifyContent="space-between"
        alignItems="center"
      >
        <ImagePreview
          open={imagePreview}
          togglePreview={setImagePreview}
          imageUrl={imageUrl}
        />
        <Grid item item xs={12} md={4} sm={4} lg={4}>
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
                  input: classes.projectFilterInput,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.projectsLabel,
                  // shrink: classes.projectsFilterLabelInput
                },
              }}
              label={"by name"}
              variant="outlined"
              margin="dense"
              fullWidth
              className={classes.textField}
            />
          </Box>
        </Grid>
        <Grid item item xs={12} md={4} sm={4} lg={4}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography className={classes.label} variant="subtitle1">
              {"Type"}
            </Typography>
            <Box style={{ width: "100%", zIndex: 10 }}>
              <Select
                onChange={(option) => inputSelectHandler(option)}
                isClearable={true}
                value={filter}
                options={typeOptions}
                styles={customStyles}
                placeholder={"select a type"}
              />
            </Box>
          </Box>
        </Grid>
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

import React, { useEffect, useState, useRef } from "react";
import List from "../components/List";

import * as _ from "lodash";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import ImagePreview from '../components/ImagePreview';
import Filters from "../components/Filters";
import { getCards, baseUrl } from '../api';



const useStyles = makeStyles((theme) => ({
  background: {
    //backgroundColor:theme.palette.background.default
  },
  filtersContainer: {
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleContainer: {
    padding: 30,
  },
}));

const Content = () => {
  const classes = useStyles();
  const isFirstRun = useRef(true);
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("");
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const loadMore = () => {
    setLoading(true);
    getCards(next)
      .then((response) => {
        const yugiCards = _.get(response, "data.data");
        const newItems = items.concat(yugiCards);
        const nextUrl = _.get(response, "data.meta.next_page") || "";
        setItems(newItems);
        setNext(nextUrl);
      })
      .catch((e) => {
        console.log(e);
        setItems([]);
        setNext("");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    let separator = "?";
    let url = baseUrl;
    let filters = { num: 12, offset: 0 };
    if (name !== "") {
      filters = { ...filters, fname: name };
    }
    if (!!filter && filter.value !== "") {
      filters = { ...filters, type: filter.value };
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const k in filters) {
      if (filters[k] == null) {
        // eslint-disable-next-line no-continue
        continue;
      }
      url = `${url + separator + k}=${filters[k]}`;
      separator = "&";
    }
    setLoading(true);
    getCards(url)
      .then((response) => {
        const cartas = response.data.data;
        const nextUrl = response.data.meta.next_page;

        setItems(cartas);
        setNext(nextUrl);
      })
      .catch((e) => {
        setItems([]);
        setNext("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name, filter]);
  useEffect(() => {
    setLoading(false);
    const url = baseUrl + "?&num=12&offset=0";
   /*  getCards(url)
      .then((response) => {
        const yugiCards = _.get(response, "data.data") || [];
        const nextUrl = _.get(response, "data.meta.next_page") || "";
        setLoading(false);
        setNext(nextUrl);
        setItems(yugiCards);
      })
      .catch((e) => {
        setItems([]);
        setNext("");
      })
      .finally(() => {
        setLoading(false);
      }); */
  }, []);

  const inputNameHandler = (e) => {
    if (e.key === "Enter") {
      setName(e.target.value);
    }
  };

  const inputSelectHandler = (option) => {
    setFilter(option);
  };

  const openPreviewHandler = (url) => {
    setImagePreview(true);
    setImageUrl(url);
  };

  const paginationAvailable = !!next;

  return (
    <Container maxWidth="xl" className={classes.background}>
      <ImagePreview
        open={imagePreview}
        togglePreview={setImagePreview}
        imageUrl={imageUrl}
      />
      <Grid className={classes.titleContainer} container justifyContent="center">
        <Typography variant="h1" color="secondary">
          Encuentra la carta que buscas
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.filtersContainer}
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

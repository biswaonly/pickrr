import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import axios from "axios";

import "./App.css";
import Layout from "./components/layout/Layout";
import SearchBar from "./components/layout/SearchBar";
import Home from "./components/home/Home";
import BeerCard from "./components/layout/BeerCard";

const App = () => {
  const [pageCount, setPageCount] = useState(1);
  const [columnCount, setColumnCount] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  const [febRoute, setFebRoute] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [searchData, setSearchData] = useState(false);

  useEffect(() => {
    setCardHeight(240);
  }, []);

  // Scroll Event Handle
  useEffect(() => {
    if (cardHeight) {
      window.addEventListener("scroll", () =>
        setScrollHeight(window.pageYOffset)
      );
      return () => {
        window.removeEventListener("scroll", () =>
          setScrollHeight(window.pageYOffset)
        );
      };
    }
    // Get width of Window
    if (window.innerWidth >= 1200) {
      setColumnCount(4);
    } else if (window.innerWidth >= 768) {
      setColumnCount(3);
    } else if (window.innerWidth >= 576) {
      setColumnCount(2);
    } else {
      setColumnCount(1);
    }
  }, [cardHeight]);

  // Set page count and call api
  useEffect(() => {
    if (
      cardHeight * Math.round(10 / columnCount) * pageCount - 2000 <=
      scrollHeight
    ) {
      setPageCount(pageCount + 1);
      fetchApiData();
    }
  }, [scrollHeight]);

  // Fetch Data from API
  const fetchApiData = async () => {
    let res = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${pageCount}&per_page=10`
    );
    setFetchData([...fetchData, ...res.data]);
  };

  return (
    <div className="App">
      <Layout febRoute={febRoute} setFebRoute={setFebRoute} />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                data={fetchData}
                setSearchData={setSearchData}
                setFetchData={setFetchData}
                febRoute={febRoute}
                columnCount={columnCount}
                searchData={searchData}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/favorite"
            render={props => (
              <Home
                data={fetchData}
                setSearchData={setSearchData}
                setFetchData={setFetchData}
                febRoute={febRoute}
                columnCount={columnCount}
                searchData={searchData}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/beer"
            render={props => (
              <BeerCard
                data={fetchData}
                setFetchData={setFetchData}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Input } from "antd";

import { SearchContainer } from "./style";

const { Search } = Input;

const SearchBar = ({ data, setSearchData }) => {
  const onSearch = value => {
    if (!value.length) {
      setSearchData(false);
    } else {
      let newData = data.filter(
        e => e.name.toLowerCase().indexOf(value) >= 0 && e
      );
      setSearchData([...newData]);
    }
  };

  return (
    <SearchContainer>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => onSearch(value.toLowerCase())}
      />
    </SearchContainer>
  );
};

export default SearchBar;

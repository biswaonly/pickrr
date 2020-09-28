import React, { Fragment } from "react";
import { Col } from "antd";

import CardComponent from "./Card";

const SearchData = ({ searchData, setFetchData, febRoute }) => {
  return (
    <Fragment>
      {searchData &&
        searchData.map(e => {
          if (febRoute) {
            if (e.isFavorite) {
              return (
                <Col xs={24} sm={12} md={12} lg={8} xl={6} key={e.id}>
                  <CardComponent
                    item={e}
                    data={searchData}
                    setFetchData={setFetchData}
                  />
                </Col>
              );
            }
          } else {
            return (
              <Col xs={24} sm={12} md={12} lg={8} xl={6} key={e.id}>
                <CardComponent
                  item={e}
                  data={searchData}
                  setFetchData={setFetchData}
                />
              </Col>
            );
          }
        })}
    </Fragment>
  );
};

export default SearchData;

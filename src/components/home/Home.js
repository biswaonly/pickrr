import React from "react";
import { Row, Col, Skeleton, Card } from "antd";

import CardComponent from "./Card";
import SearchData from "./SearchData";

const { Meta } = Card;

const Home = ({ data, setFetchData, febRoute, columnCount, searchData }) => {

  return (
    <Row>
      {!searchData &&
        data.map(e => {
          if (febRoute) {
            if (e.isFavorite) {
              return (
                <Col xs={24} sm={12} md={12} lg={8} xl={6} key={e.id}>
                  <CardComponent
                    item={e}
                    data={data}
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
                  data={data}
                  setFetchData={setFetchData}
                />
              </Col>
            );
          }
          return null;
        })}

      {searchData && (
        <SearchData
          searchData={searchData}
          febRoute={febRoute}
          setFetchData={setFetchData}
        />
      )}

      {!searchData &&
        !febRoute &&
        Array.from(Array(columnCount), (v, i) => i + 1).map(e => {
          return (
            <Col xs={24} sm={12} md={12} lg={8} xl={6} key={e}>
              <Card className="card">
                <Skeleton loading={true} avatar active>
                  <Meta avatar={""} title="" description="" />
                </Skeleton>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default Home;

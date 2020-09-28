import React from "react";
import { Card } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const { Meta } = Card;

const CardComponent = ({ item, data, setFetchData }) => {
  const handleFavorite = () => {
    let index = data.findIndex(e => {
      return e.id === item.id;
    });
    if (!item.isFavorite) {
      let newItem = { ...item, isFavorite: true };
      setFetchData([
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ]);
    } else {
      let newItem = { ...item, isFavorite: false };
      setFetchData([
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ]);
    }
  };

  return (
    <Card className="card" hoverable>
      <div style={{ float: "right" }} onClick={handleFavorite}>
        {item.isFavorite ? <HeartFilled /> : <HeartOutlined />}
      </div>
      <Meta
        avatar={<img src={item.image_url} height={125} alt={item.name} />}
        title={item.name}
        description={item.description.substr(0, 120)}
      />
    </Card>
  );
};

export default CardComponent;

import React from "react";
import { Card } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

const CardComponent = ({ history, item, data, setFetchData }) => {
  // Click for favorite Beer
  const handleFavorite = e => {
    e.stopPropagation();
    let index = data.findIndex(ele => {
      return ele.id === item.id;
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

  const handleClick = () => {
    history.push("/beer", { ...item });
  };

  return (
    <Card className="card" hoverable onClick={handleClick}>
      <div style={{ float: "right" }} onClick={e => handleFavorite(e)}>
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

export default withRouter(CardComponent);

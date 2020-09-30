import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import { DisplayFlex, Space, Button, ButtonDelete } from "./style";

const BeerCard = ({ history, data, setFetchData }) => {
  console.log(history.location);

  const item = { ...history.location.state };

  const handleDelete = () => {
    let index = data.findIndex(ele => ele.id === item.id);

    setFetchData([...data.slice(0, index), ...data.slice(index + 1)]);
    history.push("/");
  };

  return (
    <Fragment>
      <DisplayFlex>
        <h1>{item.name}</h1>
        <Space />
        <Button>EDIT</Button>
        <ButtonDelete onClick={handleDelete}>DELETE</ButtonDelete>
      </DisplayFlex>
      <DisplayFlex>
        <img src={item.image_url} height={420} alt={item.name} />
        <div>{item.description}</div>
      </DisplayFlex>
    </Fragment>
  );
};

export default withRouter(BeerCard);

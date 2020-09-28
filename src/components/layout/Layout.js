import React from "react";
import { withRouter } from "react-router-dom";

import { Header, Logo, HeaderRoutes, Space } from "./style";

const routeName = ["Home", "Favorite"];

const Layout = ({ history, febRoute, setFebRoute }) => {
  const changeRoute = val => {
    if (val === "Home") {
      setFebRoute(false);
      history.push("/");
    } else {
      setFebRoute(true);
      history.push("/favorite");
    }
  };
  return (
    <Header>
      <Logo>Beans Love Beers</Logo>
      <Space />
      {routeName.map(ele => (
        <HeaderRoutes
          key={ele}
          onClick={() => changeRoute(ele)}
          febRoute={febRoute}
          element={ele}
        >
          {ele}
        </HeaderRoutes>
      ))}
    </Header>
  );
};

export default withRouter(Layout);

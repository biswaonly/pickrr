import styled from "styled-components";

export const Header = styled.header`
  background-color: #31d1b2;
  height: 50px;
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  color: white;
`;

export const Logo = styled.h2`
  line-height: 50px;
  margin: 0 10px;
  color: white;
  font-weight: 700;
`;

export const HeaderRoutes = styled.p`
  font-weight: ${props =>
    (props.febRoute && props.element === "Favorite" && 700) ||
    (!props.febRoute && props.element === "Home" && 700)};
  line-height: 50px;
  margin: 0 10px;
  cursor: pointer;
`;

export const Space = styled.div`
  flex: 1;
`;

export const SearchContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

import React from "react";
import styled from "styled-components/native";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../router/routes";
import { SearchFieldContainer } from '../../components/container/SearchFieldContainer';


const routeToName = (route: string): string => {
  switch (route) {
    case routes.home:
      return "Upcoming Rocket Launches";
    case routes.previous:
      return "Previous Rocket Launches";
    case routes.search:
      return "";
    case routes.settings:
      return "Settings";
    default:
      return "Space Viewer";
  }
};

export const Header = () => {
  const { t } = useTranslation();

  const { location } = useHistory();
  const { pathname } = location;

  if (routes.search === pathname) {
    return (
      <Wrapper style={{ height: 75 }}>
        <SearchFieldContainer />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>{t(routeToName(pathname))}</Title>
    </Wrapper>
  );
};

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Wrapper = styled.View`
  height: ${props => props.theme.sizes.headerHeight};
  background-color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

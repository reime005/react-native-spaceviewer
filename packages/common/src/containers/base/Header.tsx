import React from 'react';
import styled from 'styled-components/native';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../../router/routes';
import { SearchFieldContainer } from '../../components/container/SearchFieldContainer';
import { TouchableOpacity, Platform, View } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

let FontAwesomeIcon: any;

if (Platform.OS === 'web') {
  FontAwesomeIcon = require('@fortawesome/react-fontawesome').FontAwesomeIcon;
} else {
  FontAwesomeIcon = require('@fortawesome/react-native-fontawesome')
    .FontAwesomeIcon;
}

const routeToName = (route: string): string => {
  switch (route) {
    case routes.home:
      return 'Upcoming Rocket Launches';
    case routes.previous:
      return 'Previous Rocket Launches';
    case routes.search:
      return '';
    case routes.settings:
      return 'Settings';
    default:
      return 'Space Viewer';
  }
};

const BackButton = ({ pathname }: { pathname: string }) => {
  const { goBack } = useHistory();

  if (![routes.details].includes(pathname)) {
    return null;
  }

  return (
    <TouchableOpacity
      onPressIn={() => {
        goBack();
      }}>
      <FontAwesomeIcon
        size={18}
        color="white"
        icon={faArrowLeft}
        style={{ marginLeft: 16, marginRight: 16 }}
      />
    </TouchableOpacity>
  );
};

export const Header = () => {
  const { t } = useTranslation();

  const { location }: any = useHistory();
  const { pathname } = location;

  const isDetailsScreen = routes.details === pathname;

  if (routes.search === pathname) {
    return (
      <Wrapper style={{ height: 75 }}>
        <SearchFieldContainer />
      </Wrapper>
    );
  }

  return (
    <Wrapper
      style={{ justifyContent: isDetailsScreen ? 'flex-start' : 'center' }}>
      <BackButton pathname={pathname} />
      <Title>
        {(location.state && location.state.name) || t(routeToName(pathname))}
      </Title>
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
  flex-direction: row;
`;

import React from 'react';
import { Accordion, View, Content } from 'native-base';
import { RandomUrlBadge } from '../../pure/SocialIcons/RandomUrlBadge';

export const renderInfoURLs = (infoURLs = [], wrap = true) => {
  if (infoURLs.length < 1) {
    return null;
  }

  const content = () =>
    Array.from(infoURLs, infoURL => <RandomUrlBadge url={infoURL} />);

  if (wrap) {
    return (
      <Content padder>
        <Accordion
          style={{
            flex: 1,
            backgroundColor: '#EAF2FF',
            borderRadius: 5,
            flexDirection: 'row',
          }}
          renderContent={item => content()}
          headerStyle={{ backgroundColor: '#E0ECFE' }}
          contentStyle={{ flex: 1, width: '100%', height: '100%' }}
          dataArray={[{ title: 'Information', content: '' }]}
          icon="add"
          expandedIcon="remove"
        />
      </Content>
    );
  }

  return content();
};

import React from 'react';
import { View } from 'react-native';
import { StreamBadge } from '../../pure/SocialIcons/StreamBadge';
import { CardItem, Text } from 'native-base';

export const renderPayloads = (payloads = []) => {
  if (payloads.length < 1) {
    return null;
  }

  const multiple = payloads.length > 1;

  return (
    <View>
      <CardItem header>
        {multiple && <Text>Payloads: </Text>}
        {!multiple && <Text>Payload: </Text>}
      </CardItem>
      <View>
        {Array.from(payloads, payload => (
          <CardItem>
            <Text>{payload.name}</Text>
          </CardItem>
        ))}
      </View>
    </View>
  );
};

import { Linking, Platform, Alert, Share } from 'react-native';
import { Moment } from 'moment';

export function openFirstMapLocation(action) {
  const { pads } = action;

  if (!pads || !pads.length) {
    return;
  }

  const lat = pads[0].latitude;
  const lng = pads[0].longitude;

  const latLng = `${lat},${lng}`;
  const label = 'Rocket location';
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
}

export function openURL(action) {
  const { url } = action;

  Alert.alert(
    'Open URL',
    `Open '${url}' ?`,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Open', onPress: () => Linking.openURL(url) },
    ],
    { cancelable: true },
  );
}

export function shareData(action) {
  const { data } = action;

  const { name, net, lsp, vidURLs, locationName } = data;

  // check if current time is behind shared one
  const inPast = Moment().isAfter(net);
  const hasStream = typeof vidURLs[0] === 'string' && vidURLs[0].length > 5;

  const message = `'${name}' from '${lsp.name}' ${
    inPast ? 'launched' : 'launches'
  } at ${net}. Location: ${locationName}. ${
    hasStream ? 'Here is the stream: ' + vidURLs[0] + '.' : ''
  } #spaceviewer`;

  Share.share(
    {
      message,
      url: hasStream ? vidURLs[0] : lsp.wikiURL,
      title: name,
    },
    {
      // Android only
      dialogTitle: name,
    },
  );
}

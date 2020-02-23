import { placeholderImage } from '../constants/placeholderImage';

export function changeImageUrlWithCached(launches) {
  launches = JSON.parse(JSON.stringify(launches), (key, value) => {
    if (key === 'imageURL') {
      const isValid = value.startsWith('http');
      if (!isValid) {
        return [placeholderImage, placeholderImage];
      }
      try {
        const prePostUrl = value.split('_');
        const resEnding = prePostUrl[1].split('.');

        const lowRes = launches[0].rocket.imageSizes[0] || 320;
        const highRes = launches[0].rocket.imageSizes[4] || 768;

        const str0 = '' + `${prePostUrl[0]}_${lowRes}.${resEnding[1]}`;
        const str1 = '' + `${prePostUrl[0]}_${highRes}.${resEnding[1]}`;

        return [str0, str1];
      } catch (error) {
        console.log(error);
        return value;
      }
    } else {
      return value;
    }
  });

  return launches;
}

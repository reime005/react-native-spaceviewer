export const getIconNameFromUrl = url => {
  if (/tube/.test(url)) {
    return 'video';
  } else if (/spacex/.test(url)) {
    return 'rocket';
  } else if (/twitter/.test(url)) {
    return 'twitter';
  } else if (/facebook/.test(url)) {
    return 'facebook';
  } else if (/instagram/.test(url)) {
    return 'instagram';
  } else if (/ariane/.test(url)) {
    return 'rocket';
  } else if (/google/.test(url)) {
    return 'google';
  } else if (/nasa/.test(url)) {
    return 'rocket';
  } else if (/linkedin/.test(url)) {
    return 'linkedin-box';
  } else if (/wiki/.test(url)) {
    return 'wikipedia';
  } else if (/rocket/.test(url)) {
    return 'rocket';
  } else if (/launch/.test(url)) {
    return 'rocket';
  } else if (/amazon/.test(url)) {
    return 'amazon';
  } else {
    return 'information';
  }
};

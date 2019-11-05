import React, { Component } from 'react';

import { AppWithNavigationState } from './src/containers/app/App';

// In case any props is passed from expo configs to App.js
export default props => <AppWithNavigationState {...props} />;

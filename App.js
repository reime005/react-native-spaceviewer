import React, { Component } from 'react';

import { App } from './src/containers/app';

// In case any props is passed from expo configs to App.js
export default (props) => <App {...props} />
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import { assetImages } from '../../../assets/images';
import { loadAppResources } from '../../actions';
import { resetToMainRoute } from '../../actions/app/nav';
import { AppLoadingError } from '../../components';
import { colors } from '../../constants/theme';
import mainStyle from '../../styles/mainStyle';
import { HOME_SCREEN } from '../../constants/routes';

const IMAGES_TO_LOAD = _.toArray(assetImages);

class _AppLoadingScreen extends Component  {
    static propTypes = {
        // functions
        loadResources: PropTypes.func.isRequired,
        resetRoute: PropTypes.func.isRequired,      
        // booleans
        loading: PropTypes.bool.isRequired,
        isAppReady: PropTypes.bool.isRequired,
    }

    componentWillMount() {
        this.props.loadResources();
    }

    componentWillReceiveProps(nextProps) {
        this._handleNewProps({ ...nextProps });
    }

    render() {
        const { loadingError, loading, loadResources, } = this.props;

        if( loadingError && ! loading ) {
            return (
                <AppLoadingError 
                    onReload={loadResources}
                    disabled={loading}
                    message={loadingError}
                />
            );
        }

        return (
          <View style={{flex: 1, backgroundColor: colors.PRIMARY, justifyContent: 'center'}}>
            <FastImage
              style={mainStyle.splashImage}
              source={require('../../../assets/images/splash.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          
          </View>
        );
    }

    _handleNewProps = props => {
        if( props.isAppReady ) {
            this._handleFinishLoading(props);
        } else if( props.loadingError ) {
            this._handleLoadingError(props.loadingError);
        }
    }

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn('Loading ERROR: ', error);
    };

    _handleFinishLoading = (props) => {
        console.log('All Pre-loading complete!');
        props.navigation.navigate(HOME_SCREEN);
    };
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.ui.appLoading.loading,
    isAppReady: state.ui.appLoading.ready,
    loadingError: state.ui.appLoading.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadResources: () => dispatch(loadAppResources(IMAGES_TO_LOAD, [])),
    /**
     * Reset route to auth route or main route when all resources is ready.
     * At this point, the flag whether an auth token is stored in the app should be determined.
     */
    resetRoute: () => {
        dispatch(resetToMainRoute());
    }
});

export const AppLoadingScreen = connect(mapStateToProps, mapDispatchToProps)(_AppLoadingScreen);

export default AppLoadingScreen;
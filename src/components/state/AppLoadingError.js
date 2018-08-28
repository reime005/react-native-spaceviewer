import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';

import { fontFix, width, height, size } from '../../lib/dimension';

export const AppLoadingError = (props = {}) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Text style={[styles.text, props.textStyle]}>{ props.title }</Text>
            <Text style={[styles.message, props.messageStyle]}>{ `Error message: ${props.message}` }</Text>
            <Button 
                title={props.buttonTitle}
                onPress={props.onReload}
                disabled={props.disabled}
                { ... _getStyleProps().button }
                { ... props.buttonProps }
            />
        </View>
    );
};

AppLoadingError.defaultProps = {
    title: 'Oops! There is an error. Please try reloading.',
    message: '',
    buttonTitle: 'RELOAD',
    disabled: false,
};
AppLoadingError.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string,

    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    messageStyle: PropTypes.object,
    buttonProps: PropTypes.object,

    disabled: PropTypes.bool,

    onReload: PropTypes.func.isRequired,
};

const _getStyleProps = () => ({
    button: {
        backgroundColor: 'transparent',
        buttonStyle: { 
            borderWidth: 1,
            borderColor: '#999',
        },
        borderRadius: 5,
        color: '#444',
        containerViewStyle: {
            padding: 20,
        },
        underlayColor: '#DEDEDE',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#333',
        margin: 10,
        fontSize: size(2.7),
        textAlign: 'center',
    },
    message: {
        color: '#999',
        margin: 10,
    },
}); 

export default AppLoadingError;
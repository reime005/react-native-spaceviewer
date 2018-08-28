import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const FONT_SCALE = Dimensions.get('window').fontScale;

/**
 * Fix the font size without affected by system font scale
 * @param {Number} size 
 */
export const fontFix = (size) => size / FONT_SCALE;

/**
 * Get the width scaled by a number
 * @param {Number} percent 
 */
export const width = (percent) => SCREEN_WIDTH * percent/100;

/**
 * Get the height scaled by a number
 * @param {Number} percent 
 */
export const height = (percent) => SCREEN_HEIGHT * percent/100;

/**
 * Get the total screen size scaled by a number
 * @param {Number} percent 
 */
export const size = (percent) => 
    Math.sqrt((SCREEN_HEIGHT * SCREEN_HEIGHT) + (SCREEN_WIDTH * SCREEN_WIDTH)) * percent/100;

/**
 * @returns(number)
 */
export const getPixelRatio = () => PixelRatio.get();

export const getKeyExtensionByPixelRatio = (pixelRatio) => {
    const px = pixelRatio || getPixelRatio();

    if(px <= 1) {
        return '';
    }else if(px <= 2){
        return '_2x';
    }else{
        return '_3x';
    }
}

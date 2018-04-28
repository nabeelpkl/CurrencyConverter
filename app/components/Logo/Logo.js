import React, { Component } from "react";
import { View, ImageBackground, Image, Text, Keyboard, Animated, Platform } from "react-native";
import styles from "./styles";
const ANIMATION_DURATION = 250;
class Logo extends Component {
    constructor(props) {
        super(props);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);

    }
    componentDidMount() {
        let showListener = 'keyboardWillShow';
        let hideListener = 'keyboardWillHide';
        if (Platform.OS == 'android') {
            showListener = 'keyboardDidShow';
            hideListener = 'keyboardDidHide';
        }
        this.keyboardShowListener =
            Keyboard.addListener(showListener, this.keyboardShow);
        this.keyboardHideListener =
            Keyboard.addListener(hideListener, this.keyboardHide);

    }
    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();

    }
    keyboardShow = () => {
        Animated.timing(this.imageWidth, {
            toValue: styles.$smallImageSize,
            duration: ANIMATION_DURATION,
        }).start();
    };

    keyboardHide = () => {
        Animated.timing(this.imageWidth, {
            toValue: styles.$largeImageSize,
            duration: ANIMATION_DURATION,
        }).start();
    };

    render() {
        const imageStyle = [
            styles.logo,
            { width: this.imageWidth },
            this.props.tintColor ? { tintColor: this.props.tintColor } : null]
        return (
            <View style={styles.container}>
                <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')}>
                    <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
                </ImageBackground>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;

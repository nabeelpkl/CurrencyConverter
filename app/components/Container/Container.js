import React from "react";
import PropTypes from "prop-types";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const Container = ({ children, backgroundColor }) => {
    const containerStyles = [styles.container];
    if (backgroundColor) {
        containerStyles.push({ backgroundColor });
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}


Container.propTypes = {
    children: PropTypes.element,
    backgroundColor: PropTypes.string
};
export default Container;
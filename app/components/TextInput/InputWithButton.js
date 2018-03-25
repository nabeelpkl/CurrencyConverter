import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types"

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;
    const containerStyles = [styles.container];
    if (!editable) {
        containerStyles.push(styles.containerDisabled)
    }
    return (
        <View style={containerStyles}>
            <TouchableHighlight
                style={styles.buttonContainer}
                onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                {...props} />
        </View>
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}
export default InputWithButton;
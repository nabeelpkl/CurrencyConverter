import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image
                source={require('./image/gear.png')}
                style={styles.icon}
                resizeMode="contain"
            />
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func
};

export default Header;
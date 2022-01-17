import {Image, View } from "react-native"
import StyleSheet from '../styles/styles'

export default Header = () => {
    return (
        <View style={StyleSheet.header}>
            <Image source={require('../assets/logo.png')} style={{width:60, height:60}}/>
        </View>
    );
}
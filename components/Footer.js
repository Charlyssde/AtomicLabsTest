import { Image, Text, View } from "react-native"
import StyleSheet from '../styles/styles'

export default Footer = () => {

    return (
        <View style={StyleSheet.footer}>
            <Text style={StyleSheet.white_text}> 2020 AtomicLabs. Todos los derechos reservados </Text>
            <View style={StyleSheet.view, {marginBottom:10, marginTop:40}}>
            <Text style={StyleSheet.white_text}> Aviso de privacidad </Text>
            </View>

            <View style={StyleSheet.view, {flexDirection:'row', marginTop:40}}>
                <Image style={{marginHorizontal:10, marginVertical:10, width:20, height:20}} source={require('../assets/linkedin.png')}/>
                <Image style={{marginHorizontal:10, marginVertical:10, width:20, height:20}} source={require('../assets/twitter.png')}/>
            </View>
            
        </View>
    );
}
import { Text, View, TouchableHighlight, ImageBackground, Image, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { Colors } from '../Global';
import StyleSheet from '../styles/styles'
export default FinalScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, width:'100%'}}>
            <ScrollView scrollEnabled={true} style={{ width: '100%', height: '100%' }} >
                <ImageBackground source={require('../assets/MaskGroup1.png')} style={{width: '100%', height: '100%' }}>
                    <Header />
                    <View style={StyleSheet.view, {width:'60%', justifyContent:'center', alignSelf:'center'}}>
                        <Text style={StyleSheet.title}> Tus datos han sido <Text style={{color:Colors.Orange}}>enviados con éxito</Text> </Text>
                    </View>
                    <View style={StyleSheet.view}>
                        <Text style={StyleSheet.white_text}>
                            En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs
                            {'\n'}
                            {'\n'}
                            Recuerda revisar tu bandeja de SPAM {"\n"} ¡Esperamos verte pronto!
                        </Text>
                    </View>
                    <View style={StyleSheet.view}>
                    <Image source={require('../assets/Group4039.png')} resizeMode='contain'/>
                    </View>
                    <Footer/>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );

}
import { Text, View, TouchableHighlight, ImageBackground, Image, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import StyleSheet from '../styles/styles';
import Header from './Header';
import { ProgressBar } from 'react-native-paper';
import { Colors } from '../Global'
import { useEffect } from 'react';
import Footer from './Footer';
import axios from 'axios';

export default SecondScreen = ({ navigation }) => {

    const [progress, setProgress] = useState(0.5)
    const [step, setStep] = useState(1)
    const [warning, setWarning] = useState(false)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [disabledForm, setDisabledForm] = useState(true)
    const [disabledPhone, setDisabledPhone] = useState(true)
    const [trys, setTrys] = useState(1)

    useEffect(() => {
        if (trys === 3) {
            navigation.navigate("Final");
        } else {
            GoNext()
        }
    }, [trys])

    const GoNext = () => {
        axios.post('https://morning-hamlet-18619.herokuapp.com/api/v1/form/', { name: name, last_name: lastName, phone: phone })
            .then(response => {
                console.log("response ->", response)
                navigation.navigate("Final")
            })
            .catch(error => {
                console.log("Some error happened->", error)
                setTrys(trys + 1)
            })

    }

    useEffect(() => {

        setWarning(name.length < 5)

    }, [name])

    useEffect(() => {

        setDisabledForm(!(name.length >= 5 && lastName.length !== 0))

    }, [name, lastName])

    useEffect(() => {
        setDisabledPhone(phone.length <= 0)
    }, [phone])

    const sendForm = () => {
        setStep(2)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView scrollEnabled={true} style={{ width: '100%', height: '100%' }} >
                <ImageBackground source={require('../assets/MaskGroup1.png')} style={{ width: '100%', height: '100%' }}>
                    <Header />

                    <View style={StyleSheet.view, { padding: 10, marginLeft: 20, marginRight: 10 }}>

                        <View style={StyleSheet.view, { flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ width: '50%', alignItems: 'center' }}>
                                <Image source={step === 1 ? require('../assets/Group4014.png') : require('../assets/Group4016.png')} style={{ width: 25, height: 25 }} />
                            </View>
                            <View style={{ width: '50%', alignItems: 'center' }}>
                                <Image source={step === 1 ? require('../assets/Group4019.png') : require('../assets/Group4020.png')} style={{ width: 25, height: 25 }} />
                            </View>

                        </View>

                        <ProgressBar style={StyleSheet.progress_bar} progress={progress} color={Colors.Orange} />
                    </View>
                    <View style={StyleSheet.view, { flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                        <Image source={step === 1 ? require('../assets/Group40142x.png') : require('../assets/Group40232x.png')} style={{ width: 50, height: 50 }} />
                        {step === 1 ? <Text style={StyleSheet.title}>Te queremos <Text style={{ color: Colors.Orange }}>conocer </Text> </Text> :
                            <Text style={StyleSheet.title}>Valida tu <Text style={{ color: Colors.Orange }}>celular </Text> </Text>
                        }
                    </View>
                    {step === 1 ?
                        <View>
                            <View style={StyleSheet.view, { alignItems: 'flex-start', marginLeft: 20, marginRight: 20 }}>
                                <Text style={StyleSheet.white_text}>Queremos saber que eres tú, por favor ingresa los siguientes datos:</Text>
                                <View style={{ marginTop: 30, width: '100%' }}>
                                    <Text style={StyleSheet.white_text}>Nombre(s)</Text>
                                    <View style={StyleSheet.input_container}>
                                        <View style={StyleSheet.input_container}>
                                            <TextInput value={name} onChangeText={(value) => { setName(value) }} style={StyleSheet.textInput} />
                                            <Image style={{ width: 20, height: 20, tintColor: Colors.Gray }} source={require('../assets/ic_lock_24px.png')} />
                                        </View>
                                    </View>
                                    {warning && name.length !== 0 ? <Text style={StyleSheet.warning_text}>El nombre deberá tener mínimo 5 caracteres</Text> : null}
                                </View>
                                <View style={{ marginTop: 30, width: '100%' }}>
                                    <Text style={StyleSheet.white_text}>Apellidos</Text>
                                    <View style={StyleSheet.input_container}>
                                        <TextInput style={StyleSheet.textInput}
                                            value={lastName}
                                            onChangeText={(value) => { setLastName(value) }} />
                                        <Image style={{ width: 20, height: 20, tintColor: Colors.Gray }} source={require('../assets/ic_lock_24px.png')} />
                                    </View>

                                </View>
                            </View>

                            <View style={StyleSheet.view, { marginTop: 50, alignItems: 'center' }}>
                                <Pressable disabled={disabledForm} onPress={sendForm} style={disabledForm ? StyleSheet.button_orange_disabled : StyleSheet.button_orange}>
                                    <Text style={{ color: Colors.White, fontSize: 18 }}>
                                        Enviar
                                    </Text>
                                </Pressable>
                            </View>

                            <View style={StyleSheet.view}>
                                <Image source={require('../assets/Group4033.png')} />
                            </View>
                        </View> :
                        <View style={StyleSheet.view, { marginRight: 20, marginLeft: 20 }}>
                            <Text style={StyleSheet.white_text}>Necesitamos validar tu número para continuar</Text>
                            <Text style={StyleSheet.white_text}>Ingresa tu numero a 10 dígitos y te enviaremos un código SMS</Text>
                            <View style={{ marginTop: 20, width: '100%' }}>
                                <Text style={StyleSheet.white_text}>Número de celular</Text>
                                <View style={StyleSheet.input_container}>
                                    <View style={StyleSheet.input_container, { borderColor: warning ? Colors.Red : Colors.White, alignItems: 'center', flexDirection: 'row' }}>
                                        <TextInput value={phone} onChangeText={(value) => { setPhone(value) }} style={StyleSheet.textInput} keyboardType='number-pad' />
                                        <Image style={{ width: 20, height: 20, tintColor: Colors.Gray }} source={require('../assets/ic_lock_24px.png')} />
                                    </View>
                                </View>
                            </View>

                            <View style={StyleSheet.view, { marginTop: 50, alignItems: 'center' }}>
                                <Pressable disabled={disabledPhone} onPress={GoNext} style={disabledPhone ? StyleSheet.button_orange_disabled : StyleSheet.button_orange}>
                                    <Text style={{ color: Colors.White, fontSize: 18 }}>
                                        Continuar
                                    </Text>
                                </Pressable>
                            </View>

                            <View style={StyleSheet.view}>
                                <Image source={require('../assets/Group4034.png')} resizeMode='contain' />
                            </View>
                        </View>
                    }
                    <Footer />
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>

    );
}
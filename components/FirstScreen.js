import axios from 'axios';
import React from 'react';
import { Dimensions, ImageBackground, Text, TouchableHighlight, View, Image, Button, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import { Colors } from '../Global';
import StyleSheet from '../styles/styles';
import CardRoll from './CardRoll';
import Footer from './Footer';
import Header from './Header';
import ProfileCard from './ProfileCard';

export default FirstScreen = ({ navigation }) => {

    const [arrayProfiles, setArrayProfiles] = useState([])

    const arrayCards = [
        { img: "first", title: "IMAGINA", items: ["Estrategia digital", "Big Data & Analysis", "Consultoría tecnológicas", "Reducci+on de costos TI"] },
        { img: "second", title: "EXPLORA", items: ["Innovación y creación tecnológica", "UI / UX", "Innovación"] },
        { img: "third", title: "CONQUISTA", items: ["Desarrollo tecnológico y creación tecnológica", "Ciberseguridad", "Servicios en la Nube"] }
    ]

    const arrayProfilesAux = [
        {name:'Ramón Gómez', title:'Front-End developer'},
        {name:'Ximena Mejía', title:'UX Designer'},
        {name:'Jaime Domínguez', title:'Back-End developer'}
    ]

    const { width, height } = Dimensions.get("window")

    const GoNext = () => {
        navigation.navigate("Second");
    }

    useEffect(() => {
        axios.get()
        .then(response => {
            if(response.length > 0){

            }
        })
        .catch(error => {
            console.log("There's some error", error)
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView scrollEnabled={true} style={{ width: '100%', height: '100%' }} >
                <ImageBackground source={require('../assets/MaskGroup1.png')} style={{ width: '100%', height: '100%' }}>
                    <Header />
                    <View style={StyleSheet.view}>
                        <Text style={StyleSheet.title}>
                            Desarrolla todo <Text style={{ color: Colors.Orange }}>tu potencial </Text>dentro del equipo <Text style={{ color: Colors.Orange }}>atomic
                            </Text>
                            LABS
                        </Text>
                    </View>

                    <View style={StyleSheet.view}>
                        <TouchableHighlight onPress={() => { }} style={StyleSheet.button}>
                            <View style={StyleSheet.view}>
                                <Image source={require('../assets/Group4013.png')} style={{ width: 35, height: 35 }} />
                                <Text style={StyleSheet.white_text}> Quiero saber más </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={StyleSheet.view, { marginTop: 20 }}>
                        <Image source={require('../assets/Group4032.png')} resizeMode='contain' style={{ maxWidth: width, margin: 5 }} />
                    </View>

                    <View style={StyleSheet.view, { marginTop: 50, alignItems: 'center' }}>
                        <Pressable onPress={GoNext} style={StyleSheet.button_white} title='some'>
                            <Text style={StyleSheet.blue_text}>
                                ¡Quiero ser parte!
                            </Text>
                        </Pressable>
                    </View>

                    <View style={StyleSheet.view, { width: '80%', alignSelf: 'center' }}>
                        <Text style={StyleSheet.title}>
                            Somos el brazo derecho
                            <Text style={{ color: Colors.Orange }}> de la tecnología</Text>
                        </Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={true} >
                        {arrayCards.map((element) => {
                            return <CardRoll img={element.img} data={element.items} title={element.title} />
                        })}
                    </ScrollView>

                    <View style={StyleSheet.view, { width: '80%', alignSelf: 'center' }}>
                        <Text style={StyleSheet.title}>te encantará <Text style={{ color: Colors.Orange }}> trabajar con nosotros</Text></Text>
                    </View>
                    <Image source={require('../assets/Group4040.png')} resizeMode='contain' style={{ maxWidth: width }} />
                    <View style={StyleSheet.view, { flexDirection: 'row' }}>
                        <Text style={StyleSheet.white_text, {width:'25%'}}>Contratación remota</Text>
                        <Text style={StyleSheet.white_text, {width:'25%'}}>Entrevista con el área de RH</Text>
                        <Text style={StyleSheet.white_text, {width:'25%'}}>Prueba práctica</Text>
                        <Text style={StyleSheet.white_text, {width:'25%'}}>Entrevista técnica</Text>
                    </View>
                    <View style={StyleSheet.view, { marginTop: 10, alignItems: 'center' }}>
                        <Pressable onPress={GoNext} style={StyleSheet.button_white} title='some'>
                            <Text style={StyleSheet.blue_text}>
                                ¡Quiero ser parte!
                            </Text>
                        </Pressable>
                    </View>

                    <View style={StyleSheet.view, { marginTop: 10, alignItems: 'center' }}>
                        {arrayProfiles.length === 0 ? arrayProfilesAux.map(element => {
                            return <ProfileCard name={element.name} title={element.title}/>
                        }) : arrayProfiles.map(element => {
                            return <ProfileCard name={element.name} title={element.title}/>
                        })}
                    </View>

                    <Footer />
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
import { Image, Text, View } from "react-native"
import { useEffect } from "react/cjs/react.development"
import { getImage } from "../Global"
import styles from "../styles/styles"


export default CardRoll = (props) => {

    return (
        <View style={styles.card}>
            <View style={{ marginTop: 10 }}>
                <Image source={getImage(props.img)} style={{ width: 150, height: 150 }} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {props.data.map(element => {
                return (
                    <View style={styles.view, {marginBottom:20, alignItems:'flex-start'}}>
                        <Text style={styles.white_text}>◉ {element}</Text>
                    </View>
                )
            })}
        </View>
    )
}
import { Image, Text, View } from "react-native"
import { Colors } from "../Global"
import styles from "../styles/styles"


export default ProfileCard = (props) => {

    return (
        <View style={styles.profileCard}>
            <View style={{ marginTop: 10, borderRadius: 360 }}>
                <Image source={require('../assets/logo.png')} style={{ width: 150, height: 150, borderRadius:360, tintColor:Colors.Orange }} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.view, { marginBottom: 20}}>
                <Text style={styles.white_text}>◉ {props.title}</Text>
            </View>
        </View>
    )
}
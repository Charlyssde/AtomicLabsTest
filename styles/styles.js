import { StyleSheet } from 'react-native';
import { Colors } from '../Global'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  view: {
    width: '100%',
    marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 35,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  footer: {
    backgroundColor: Colors.Black,
    alignItems:'center',
    width: '100%',
    height:250,
    marginTop:20
  },
  underlined: {
  },
  title: {
    marginTop: 10,
    padding: 10,
    width: '100%',
    color: Colors.White,
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  white_text: {
    marginTop:20,
    color: Colors.White,
    fontSize: 18
  },
  warning_text : {
    color:Colors.Red,
    fontSize:14
  },
  blue_text: {
    color: Colors.Blue,
    fontSize: 20
  },
  button_white: {
    width: '50%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 18
  },
  button_orange : {
    width: '50%',
    paddingVertical:10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.Orange,
    borderRadius: 30
  },
  button_orange_disabled : {
    width: '50%',
    paddingVertical:10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.Orange,
    opacity:0.5,
    borderRadius: 30
  },
  progress_bar: {
    height: 10,
    width: '100%',
    borderColor:Colors.Orange,
    borderWidth: 2,
    borderRadius: 5
  },
  textInput:{
    width:'80%',
    height: 40,
    margin: 12,
    padding: 10,
  },
  input_container:{
    width:'100%',
    flexDirection:'row',
    backgroundColor:Colors.White,
    alignItems:'center',
    height:50,
    borderRadius:5,
    borderWidth:2,
    borderColor:Colors.White,
  },
  card: {
    width:350,
    backgroundColor:Colors.OrangeLight,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    borderRadius:5,
    padding:10
  },
  profileCard:{
    width:'100%',
    backgroundColor:Colors.Blue,
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    borderRadius:5,
    padding:10
  }
});
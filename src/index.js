import React,{useState} from 'react'
import {StatusBar,StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';


export default function App(){

    const [dorkMode,setDackMode] = useState(false)

    const styles = StyleSheet.create({
        conteiner:{
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        results:{
            backgroundColor: dorkMode ? '#282f3b' : '#f5f5f5',
            minWidth:280,
            width:'100%',
            height:'59%',
            alignItems:'flex-end',
            justifyContent:'flex-end',
           
           
        },
        themaButton:{
            alignSelf:'flex-start',
            bottom:130,
            margin:15,
            backgroundColor: dorkMode ? '#7b8084' : "#e5e5e5",
            alignItems: 'center',
            justifyContent:'center',
            width:50,
            height:50,
            borderRadius:25
        },
        buttons:{
            
        },
        resultText:{
            margin:10,
            fontSize:25
        }
    })


    return(
        <View >

            <View style={styles.results}>
                <TouchableOpacity style={styles.themaButton}>
                <Icon name={dorkMode ? "sun" : "moon"} size={18} color={dorkMode ? "white" : "black"}  onPress={() => dorkMode ? setDackMode(false) : setDackMode(true)}/>
                </TouchableOpacity>
                <Text style={styles.resultText}>2 + 2 = 10</Text>
            </View>

            <View style={styles.buttons}>

            </View>
        </View>
    )
}

import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    buttons:{
        
        flexDirection:'row',
        flexWrap:'wrap'
    },

    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        alignItems:'flex-end'
    },
    displayValue:{
        fontSize:60,
        color:'#fff'
    },
    button:{
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        textAlign: 'center',
      
  

    },
    OperationButtun:{
        color:'#fff',
        backgroundColor:'#fa8231'
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default styles;
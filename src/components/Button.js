import React from 'react'
import{StyleSheet,Text,Dimensions,TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign: 'center',
        borderWidth:1,
        borderColor:'#888'

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

export default props => {
    const styleButton = [styles.button]
    if(props.double) styleButton.push(styles.buttonDouble)
    if(props.triple) styleButton.push(styles.OperationButtun)
    if(props.operation) styleButton.push(styles.triple)

    return(
        <TouchableHighlight onPress={props.onPress}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>

    )
}


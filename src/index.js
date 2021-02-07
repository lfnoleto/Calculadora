import React,{useState}from 'react'
import {Text,View,ScrollView,SafeAreaView,StyleSheet} from 'react-native'
import Button from './components/Button'
import Display from './components/Desplay'

const App =()=>{

    const [useDiplay,SetDisplay] = useState('0')
    const [useClear,SetClear] = useState(0)
    const setValue =(valor)=>{
        SetDisplay(valor)
    }
    const setClean =_=> SetClear(0)


    const setOperation = ()=>{

    }
    return (
       <View style={styles.buttons}>
           <View style={styles.display}>
               <Text style={styles.displayValue}>
                    {useDiplay}
               </Text>
           </View>
           <View  style={styles.buttons}>
               <Button triple label='AC' onClick={() => SetDisplay(0)}/>
               <Button label='/'onClick={() => SetDisplay(8)}/>
               <Button label='7' onClick={() => SetDisplay(7)}/>
               <Button label='8' onClick={() => SetDisplay(8)}/>
               <Button label='9'onClick={() => SetDisplay(9)}/>
               <Button label='*'onClick={() => SetDisplay('X')}/>
               <Button label='4'onClick={() => SetDisplay(4)}/>
               <Button label='5'onClick={() => SetDisplay(5)}/>
               <Button label='6'onClick={() => SetDisplay(6)}/>
               <Button label='-'onClick={() => SetDisplay('-')}/>
               <Button label='1'onClick={() => SetDisplay(1)}/>
               <Button label='2'onClick={() => SetDisplay(2)}/>
               <Button label='3'onClick={() => SetDisplay(3)}/>
               <Button label='+'onClick={() => SetDisplay('+')}/>
               <Button label='0'onClick={() => SetDisplay(0)}/>
               <Button label='.'onClick={() => SetDisplay('.')}/>
               <Button label='='onClick={() => SetDisplay('=')}/>
           </View>
       </View>
    )
}



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
    }
})






export default App;
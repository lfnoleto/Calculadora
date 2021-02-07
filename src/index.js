import React,{useState}from 'react'
import {Text,View,ScrollView,SafeAreaView,StyleSheet} from 'react-native'
import Button from './components/Button'
import Display from './components/Desplay'

const App =()=>{

    const {useDiplay,SetDisplay} = useState(0)
    const {useClear,SetClear} = useState(0)
    const setValue =(valor)=>{
        SetDisplay(valor)
    }
    const setClean =()=>{
        setClean('0')
    }  

    const setOperation = ()=>{

    }
    return (
       <View style={styles.buttons}>
           <Display value={useDiplay}/>
           <View style={styles.buttons}>
               <Button label='AC' triple onClick={() => clearMemory()}/>
               <Button label='/'/>
               <Button label='7'/>
               <Button label='8' />
               <Button label='9'/>
               <Button label='*'/>
               <Button label='4'/>
               <Button label='5'/>
               <Button label='6'/>
               <Button label='-'/>
               <Button label='1'/>
               <Button label='2'/>
               <Button label='3'/>
               <Button label='+'/>
               <Button label='0'/>
               <Button label='.'/>
               <Button label='='/>
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
})






export default App;
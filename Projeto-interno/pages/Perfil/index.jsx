import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';



const Perfil =  ({navigation}) => {

  
        return(  
            <View>
                <Menu/>
                        <View>
                                <TextInput
                            
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                />
                        </View>
                         <Rodape/>
            </View>
         
        )
    }
    

const styles = StyleSheet.create({

   container:{
       flex:1,
       justifyContent:'center',
       alignItems: 'center',
     
       borderRadius : 4,
       height : 200
       
   },
   input:{
       marginTop : 10,
       padding : 10,
       width : 270,
       backgroundColor : 'white',
       fontSize : 16,
       fontWeight : 'bold',
       borderRadius : 6
   },
   botao:{
       width : 200,
       height : 42,
       borderRadius : 6,
       marginTop : 20,
       backgroundColor : '#012D54',
       alignItems : 'center',
       justifyContent : 'center',
       marginLeft:60,
       marginBottom:40,
    
   },
   fundo:{
    backgroundColor: '#79B4EC',
    borderRadius: 6,
    height:300,
    width:320,

   }
   
   
})
export default Perfil;
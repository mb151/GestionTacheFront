import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,StatusBar} from 'react-native'
import Logo from './Logo'

import config from './config'
const axios = require('axios');



class SignUp extends Component {
     state = {
         email : null,
         name : null,
         password :null,
      }


      addUser(){
        axios.post(config.apiURL+'register', 
        { 
           email: this.state.email, 
           name:this.state.name,
           password:this.state.password
         })
       .then(response=()=>this.props.navigation.navigate('Login')
     )
       .catch(error=> {
          if(response != null){
             alert('User Create Successful');
          }else{
             alert('Something went wrong' + error);
          }
         
       })
       
       }
   
   
   render() {
      const {navigate} = this.props.navigation;
      return (
         <View style = {styles.container}>
            <StatusBar backgroundColor="#1976D2"/>
            <Logo/>
            <Text style={styles.text}>Inscrivez-Vous !</Text>
            <View style={styles.container2}>
               <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Nom'
                    placeholderTextColor='#212121'
                    textContentType='name'
                    maxLength={40}
                    onChangeText={(name) => this.setState({name})}
               />

               <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Adresse Email'
                    placeholderTextColor='#212121'
                    textContentType='emailAddress'
                    onChangeText={(email) => this.setState({email})}
                    autoCapitalize="none"
               />

               <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#212121'
                    maxLength={40}
                    onChangeText={(password) => this.setState({password})}
               />
            <TouchableOpacity style={styles.buton} onPress={() => this.addUser()}>
                    <Text style={styles.butonText}>Inscrivez-Vous </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.signupTextCont}>
               <Text style={styles.signInText}>Vous avez déjà un compte ?</Text>
               <TouchableOpacity onPress={() => navigate('Login')}>
                  <Text style={styles.signInButton}> Connectez-Vous !</Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}
export default SignUp

const styles = StyleSheet.create({
   container: {
      flexGrow:1,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'center',
   },
   signupTextCont:{
      flexGrow:1,
      alignItems:'flex-end',
      justifyContent:'center',
      paddingVertical:16,
      flexDirection: 'row',
   },
   signInText:{
      color: 'black',
      fontSize: 16,
      marginBottom: 80
   },
   signInButton:{
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 80
   },
   container2:{
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center',
  },
  inputBox:{
      width:300,
      borderRadius: 20,
      backgroundColor: '#e0f7fa',
      paddingHorizontal:16,
      fontSize: 18,
      color: '#212121',
      marginVertical:10,
   },
   buton:{
      width: 300,
      backgroundColor: '#1976D2',
      borderRadius: 20,
      marginVertical: 10,
      paddingVertical: 13,
   },
   butonText:{
      fontSize:20,
      fontWeight: '500',
      color: '#fff',
      textAlign:'center',
   },

   text:{
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 15,
  },
})
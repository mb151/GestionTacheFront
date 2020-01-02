import React from 'react'
import {Image,StyleSheet,View,Text} from 'react-native'
import {  } from 'native-base'

export default class Logo extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../images/vinci-800x377.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop: 5,
        marginBottom: -50,
    },
    imageStyle:{
        width:210,
        height:150,
    },
})
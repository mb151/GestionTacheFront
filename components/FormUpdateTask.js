import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import config from './config';
import DatePicker from 'react-native-datepicker';
const axios = require('axios');

class FormUpdateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateTask: null,
            nameTask: null,
            detailTask: null,
        }
    }


    updateTask() {
        const id = this.props.navigation.state.params.id
        axios.post(config.apiURL + 'task/' + id + '/update',
            {
                dateTask: this.state.dateTask,
                nameTask: this.state.nameTask,
                detailTask: this.state.detailTask
            })
            .catch(error => {
                if (response != null) {
                    alert('Update Successful');
                } else {
                    alert('Something went wrong' + error);
                }

            })

    }
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
            >
                <StatusBar backgroundColor="#1976D2" />
                <Text style={styles.text}>Modifier La Tache</Text>
                <View style={styles.container2}>

                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Nom de la Tâche'
                        placeholderTextColor='#212121'
                        textContentType='name'
                        maxLength={40}
                        onChangeText={(nameTask) => this.setState({ nameTask })}

                    />
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Description de la Tâche'
                        placeholderTextColor='#212121'
                        multiline={true}
                        autoCapitalize="none"
                        onChangeText={(detailTask) => this.setState({ detailTask })}
                    />
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.dateTask}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2019-01-01"
                        maxDate="2030-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        is24Hour={true}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: -50
                            },
                            dateInput: {
                                marginLeft: 36,
                                left: 50,
                                borderRadius: 10,
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(dateTask) => { this.setState({ dateTask: dateTask }) }}
                    />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.buton}
                        onPress={() => this.updateTask()}>
                        <Text style={styles.butonText}>Enregistrer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buton}
                        onPress={() => this.props.navigation.navigate('Accueil')}>
                        <Text style={styles.butonText}>Annuler</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
export default FormUpdateTask

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    signupButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    container2: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -250,
    },
    inputBox: {
        width: 300,
        borderRadius: 10,
        backgroundColor: '#e0f7fa',
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#212121',
        marginVertical: 10,
    },
    buton: {
        width: 120,
        backgroundColor: '#1976D2',
        borderRadius: 20,
        marginVertical: 5,
        paddingVertical: 5,
        marginLeft: 30,
        marginRight: 30,
    },
    butonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
    },

    text: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 15,
        marginBottom: -100
    },
})
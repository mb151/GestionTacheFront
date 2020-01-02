import React, { Component } from "react";
import { TouchableOpacity, StatusBar, Keyboard, FlatList, SafeAreaView } from 'react-native';
import {
  Container,
  View,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Title, Item, Input, Right, Icon, Button, Subtitle
} from "native-base";
import { } from "react-navigation";
const axios = require('axios');
import config from './config'

export default class TaskCompleted extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameTask: null,
      tasks: [],
      c_tasks: [],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getAlertWeb(), 1000);
  }

  async getAlertWeb() {
    return fetch(config.apiURL + "tasks")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          tasks: responseJson.tasks,
          c_tasks: responseJson.c_tasks,
        }, function () {
          //comment
        });
      })
      .catch(error => {
        null;
      });

  }


  deleteTask = (id) => {
    fetch(config.apiURL + 'task/'+ id + '/delete')
      .done();
  };


  render() {
    return (

      <Container>
        <Header androidStatusBarColor="#1362af" style={{ backgroundColor: '#1976D2' }}>
          <Body style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title>TACHE COMPLETE</Title>
          </Body>
        </Header>

        <List
          dataArray={this.state.c_tasks}
          renderRow={item => (
            <ListItem style={{ marginTop: 5 }}>
              <Left>
                <View>
                  <Title style={{ fontSize: 20, color: 'blue', }}>{item.nameTask}</Title>
                  <Subtitle style={{ color: 'blue' }}>{item.dateTask}</Subtitle>
                </View>
              </Left>
              <Right>
                <TouchableOpacity onPress={() => { this.deleteTask(item.id) }} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                  <Icon name="ios-close" style={{ fontSize: 40, color: '#e01414' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </Container>
    );
  }
}

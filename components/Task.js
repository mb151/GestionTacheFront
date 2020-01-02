import React, { Component } from "react";
import { TouchableOpacity, StatusBar, Keyboard } from 'react-native';
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
  Title, Item, Input, Right, Icon, Button
} from "native-base";
const axios = require('axios');
import config from './config'

export default class Task extends Component {

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

  addTask = () => {
    fetch(config.apiURL + 'task', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nameTask: this.state.nameTask,
      })
    })
      .then((response) => response.json())
      .done()
    this.input._root.clear();
    Keyboard.dismiss()
  };

  completeTask = (id) => {
    fetch(config.apiURL + 'task/' + id + '/complete')
      .done();
  };


  deleteTask = (id) => {
    fetch(config.apiURL + 'task/' + id + '/delete')
      .done();
  };




  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#1362af" style={{ backgroundColor: '#1976D2' }}>
          <Body style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title>TODO LISTE</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => { this.completeTask(item.id) }} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
              <Icon name="md-search" style={{ fontSize: 30, color: 'black', left: 50, right: 50 }} />
            </TouchableOpacity>
          </Right>
          <Right>
            <TouchableOpacity onPress={() => { this.completeTask(item.id) }} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
              <Icon name="md-add" style={{ fontSize: 30, color: 'black' }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content style={{ marginLeft: 10, marginRight: 10 }}>
          <Item style={{ marginLeft: 30, marginRight: 30, marginTop: 50, width: 150 }}>
            <Input placeholder="Nouvelle tâche"
              onChangeText={input => this.setState({ nameTask: input })}
              ref={(ref) => { this.input = ref }}
            />
          </Item>
          <TouchableOpacity onPress={() => this.addTask()}
            style={{ backgroundColor: '#1976D2', left: 200, height: 40, width: 120, marginTop: -40 }}>
            <Text style={{ textAlign: 'center', marginTop: 6, fontSize: 20, color: 'white', }}>Ajouter</Text>
          </TouchableOpacity>

          <List
            dataArray={this.state.tasks}
            renderRow={item => (
              <ListItem style={{ marginTop: 15, marginBottom: 10 }}>
                <Left>
                  <TouchableOpacity onPress={() => /*this.login()*/ this.props.navigation.navigate('FormUpdateTask',{id:item.id})}>
                    <Text style={{ fontSize: 20, color: '#5b5757', }}>{item.nameTask}</Text>
                  </TouchableOpacity>
                </Left>
                <Right>
                  <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                    <Icon name="notifications" style={{ fontSize: 30, color: 'yellow' }} />
                  </TouchableOpacity>
                </Right>
                <Right>
                  <TouchableOpacity onPress={() => { this.completeTask(item.id) }} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                    <Icon name="md-checkmark-circle" style={{ fontSize: 30, color: '#41f444' }} />
                  </TouchableOpacity>
                </Right>
                <Right>
                  <TouchableOpacity onPress={() => { this.deleteTask(item.id) }} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                    <Icon name="ios-close" style={{ fontSize: 40, color: '#e01414' }} />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            )}

            keyExtractor={(item, index) => String(index)}
          />
        </Content>
      </Container>
    );
  }
}

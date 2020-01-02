import React from 'react';
import {StyleSheet,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Task from './components/Task';
import TaskCompleted from './components/TaskCompleted';
import Profile from './components/Profile';
import FormUpdateTask from './components/FormUpdateTask';
import Login from './components/Login';
import SignUp from './components/SignUp';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
          </View>
        ),
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: {backgroundColor: '#4ba3c7'},
      }
    },

    Accueil: {
      screen: Task,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#002171',
        barStyle: {backgroundColor: '#1976D2'},
      }
    },
    
    TaskCompleted: {
      screen: TaskCompleted,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'md-checkmark-circle'}/>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: {backgroundColor: '#2c6d6a'},
      }
    },

  },{
    initialRouteName: 'Accueil',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: {backgroundColor: '#694fad'},
  }
)

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },

    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      }
    },

    FormUpdateTask: {
      screen: FormUpdateTask,
      navigationOptions: {
        header: null,
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#002171',
        barStyle: {backgroundColor: '#1976D2'},
      }
    },
    
    TabNavigator:{
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      }
    }

  },{
    initialRouteName: 'Login',
  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default createAppContainer(StackNavigator);
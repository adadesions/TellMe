import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Router from 'react-native-simple-router';
import FirstPage from './components/FirstPage';

const firstRoute = {
  name: 'Welcome',
  component: FirstPage,
};

class backButton extends Component {
  render() {
    return (
      <Icon name='ios-arrow-back' style={{fontSize: 50, color: '#FFF', left: 10}} />
    );
  }
}

export default class tellMe extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={backButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
  },
});

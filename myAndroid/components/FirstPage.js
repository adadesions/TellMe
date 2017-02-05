import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { Container, Header, Button, Icon, Title, Content, Card, CardItem} from 'native-base';

// import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

export default class FirstPage extends Component {
  constructor(props){
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.homePage = this.homePage.bind(this);
  }

  homePage(page){
    this.props.toRoute({
      name: "Welcome!",
      component: FirstPage
    });
  }

  nextPage(page){
    this.props.toRoute({
      name: "Wow! New Page",
      component: SecondPage
    });
  }
  render() {
    return (
      <Container >
        <Header>
          <Title>TellMe</Title>
          <Button transparent onPress={this.homePage}>
              <Icon name='ios-menu' />
          </Button>
        </Header>
        <Content>
          <Card>
            <CardItem button onPress={this.nextPage}>
              <Icon name='logo-javascript' />
              <Text> First Page</Text>
            </CardItem>
            <CardItem button onPress={this.nextPage}>
              <Icon name='logo-nodejs' />
              <Text> Second Page</Text>
            </CardItem>
            <CardItem button onPress={this.nextPage}>
              <Icon name='logo-tux' />
              <Text> Third Page</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cented: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

FirstPage.propTypes =propTypes;

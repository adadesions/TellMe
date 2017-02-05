import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Container, Header, Button, Icon, Title, Content, Card, CardItem} from 'native-base';

export default class SecondPage extends Component{
  render() {
    return (
      <Container>
      <Content>
      <Card>
        <CardItem button onPress={this.nextPage}>
          <Icon name='logo-javascript' />
          <Text>
          Card: This component adds a box-shadow by default. Also provides default spacing and alignment between cards.
          CardItem: This is the child component of Card. Works very similar to the list items of list. Card takes any number of CardItem.
          CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon. read more
          Replacing Component for Card: React Native
          </Text>
        </CardItem>
      </Card>
      </Content>
      </Container>
    );
  }
}

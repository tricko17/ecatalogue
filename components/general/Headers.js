import React,{Component} from 'react';
import {
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import {
  StyleSheet,
} from 'react-native';

class Headers extends Component {

  render(){
    let { main, title } = this.props;
    return(
      <Header style={styles.headers}>
        {
          (!main) ? 
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left> : null
        }       
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headers: { 
    paddingTop: 15, 
    height: 70 
  },
});

export default Headers;
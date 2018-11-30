import React,{Component} from 'react';

import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  Container,
  Content,
  Icon,
  Card,
  CardItem,
  Text,
  Left,
  Right,
} from "native-base";
import Headers from '../components/general/Headers';
import Data from '../constants/Data';

export default class Catalog extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      datax: Data.data
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { datax } = this.state;
    return (
      <Container style={styles.container}>
        
        <Headers 
          main={true}
          title={"Katalog UT"}
          navigation={this.props.navigation}
        />
        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text>Katalog</Text>
            </CardItem>
            { 
              datax.map((value,idx) => 
                <TouchableOpacity key={idx} onPress={() => this.props.navigation.navigate('DetailCatalog',value)}>
                  <CardItem >
                    <Left>
                      <Text >{value.title}</Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </CardItem>
                </TouchableOpacity>
              )
            }
          </Card>
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  headers: { 
    paddingTop: 15, 
    height: 70 
  },
  container: {
    backgroundColor: "#FFF",
    flex: 1
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});

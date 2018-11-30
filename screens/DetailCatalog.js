import React,{Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Button,
  Text,
  Content, 
  Card, 
  CardItem, 
  Body,
  List, 
  ListItem
} from "native-base";
import Headers from '../components/general/Headers';
import { WebBrowser } from 'expo';

export default class DetailCatalog extends Component {

    constructor(props){
      super(props);
    }

    static navigationOptions = {
        header: null,
    };

    downloading(url){
      WebBrowser.openBrowserAsync(url);
    }

    render() {
      const { title, description, image, link } = this.props.navigation.state.params
      return (
          <Container style={styles.container}>
              <Headers 
                  main={false}
                  title={"Katalog UT"}
                  navigation={this.props.navigation}
              />
              <Content padder>
                <Card>
                  <CardItem header bordered>
                    <Text>{title}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text style={{ color: 'black' }}>
                        {description}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
                <List>
                  <ListItem itemHeader first>
                    <Text>Downloads</Text>
                  </ListItem>
                  {
                    link.map((val, idx) => 
                        <ListItem key={idx}>
                          <TouchableOpacity onPress={() => this.downloading(val.source)}>
                          <Text>{`${val.title}-${val.type} (${val.size})`}</Text>
                          
                          </TouchableOpacity>
                        </ListItem>
                    )
                  }
                </List>
              </Content>
          </Container>
      );
    }

}

const styles = StyleSheet.create({
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

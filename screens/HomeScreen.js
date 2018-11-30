import React, { Component } from "react";
import { StyleSheet } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row
} from "native-base";
import Headers from '../components/general/Headers';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Headers 
          main={true}
          title={"Home"}
          navigation={this.props.navigation}
        />
        <Content padder>
        <Grid>
          <Row style={styles.row}>
            <Col style={styles.col}>
              <Icon name="logo-apple" style={{ color: "#999" }} />
              <Text numberOfLines={1} style={styles.iconText}>
                logo-apple
              </Text>
            </Col>
          </Row>
        </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#FFF"
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: 15
  },
  iconText: {
    fontSize: 12
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center"
  },
  col: {
    alignItems: "center",
    paddingHorizontal: 3
  },
  row: {
    paddingBottom: 20
  }

})

export default HomeScreen;
import * as React from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  LeftContent,
  Avatar,
  Badge,
} from "react-native-paper";
import Dot from "./Dot";

import Carousel from "react-native-snap-carousel";

export default class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "StayHome",
          text:
            "Listen for instructions from the gouvernement about staying at home",
          imageLink: require("./../assets/images/home.png"),
        },
        {
          title: "Wear The Mask",
          text:
            "Wearing face masks when your are out saves your life and the other life and also stops corona's spreading,...",
          imageLink: require("./../assets/images/mask.png"),
        },
        {
          title: "Regular Hand Washing",
          text:
            "Wash your hand regularly especially after blowing your nose,coughing or sneezing ...",
          imageLink: require("./../assets/images/wash_hand.png"),
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View>
        <Card elevation={0} style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              style={{ width: 250, height: 250 }}
              source={item.imageLink}
            />
          </View>
          <Card.Content
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Title>{item.title}</Title>
            <Paragraph>{item.text}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
          {this.state.activeIndex === 2 && (
            <Button
              onPress={() => this.props.navigation.navigate("login")}
              mode="contained"
              style={[styles.buttonContainer]}
            >
              Get Started
            </Button>
          )}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            <Dot opacity={this.state.activeIndex == 0 ? 1 : 0.5} />
            <Dot opacity={this.state.activeIndex == 1 ? 1 : 0.5} />
            <Dot opacity={this.state.activeIndex == 2 ? 1 : 0.5} />
          </View>
          {/* <View>
            <Button
            style={{position:"absolute",bottom:5,right:2}}
              onPress={() => console.log("Pressed")}
              mode="text"
            >
              Skip
            </Button>
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  dot: {
    margin: 10,
  },
});

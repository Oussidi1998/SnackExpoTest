import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", icon: "home" ,color:"white"},
      { key: "test", icon: "account-badge-horizontal-outline" ,color:"white"},
      { key: "map", icon: "map-marker-outline" ,color:"white"},
      { key: "history", icon: "history" ,color:"white"},
      { key: "account", icon: "account-circle-outline",color:"white" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    test: AlbumsRoute,
    map: RecentsRoute,
    history: RecentsRoute,
    account: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        activeColor="black"
        inactiveColor="gray"
        barStyle={{fontSize:30,height:65,alignContent:"center",justifyContent:"center"}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

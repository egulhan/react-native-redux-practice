import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from "react-native";
import {ListItem, Icon} from "react-native-elements";

class FoodListScreen extends Component {
    render() {
        return (
            <FlatList style={styles.listContainer}
                      data={this.props.route.params.foodList}
                      keyExtractor={(item, index) => item.key.toString()}
                      renderItem={(data) =>
                          <ListItem>
                              <ListItem.Content>
                                  <ListItem.Title>{data.item.name}</ListItem.Title>
                              </ListItem.Content>
                          </ListItem>
                      }
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#dce2ff',
        padding: 16
    },
    listText: {
        fontSize: 30
    },
});


export default FoodListScreen;

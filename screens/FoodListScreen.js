import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from "react-native";
import {ListItem, Icon} from "react-native-elements";
import {connect} from 'react-redux';
import {deleteFood} from "../actions/food";

class FoodListScreen extends Component {
    render() {
        return (
            <FlatList style={styles.listContainer}
                      data={this.props.foodList}
                      keyExtractor={(item, index) => item.key.toString()}
                      renderItem={(data) =>
                          <ListItem>
                              <ListItem.Content>
                                  <ListItem.Title>{data.item.name}</ListItem.Title>
                              </ListItem.Content>
                              <ListItem.Chevron iconProps={
                                  {
                                      name:'delete',
                                      color:'#517fa4',
                                      onPress: () => this.props.delete(data.item.key)
                                  }
                              }/>
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

const mapStateToPros = (state) => {
    return {
        foodList: state.foodReducer.foodList,
    };
}

const mapDispatchToPros = (dispatch) => {
    return {
        delete: (key) => dispatch(deleteFood(key)),
    }
}

export default connect(mapStateToPros, mapDispatchToPros)(FoodListScreen);

import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import {addFood} from "../actions/food";

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home!!!',
    };

    state = {
        food: null,
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                    value={this.state.food}
                    placeholder='Name'
                    style={styles.foodInput}
                    onChangeText={(food) => this.setState({food})}
                />
                <TouchableOpacity onPress={() => this.props.add(this.state.food)} style={{marginBottom: 15}}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <Button onPress={() => this.props.navigation.navigate('FoodList')} title="Go to Food List"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 64,
        marginBottom: 48
    },
    foodInput: {
        fontSize: 32,
        marginBottom: 32,
        borderWidth: 1,
        padding: 8,
        width: '80%',
        borderRadius: 10,
    }
});

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (food) => dispatch(addFood(food)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

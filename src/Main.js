import React, { Component } from 'react';
import { 
    View, 
    Text, 
    BackHandler,
    AsyncStorage,
    StyleSheet, 
} from 'react-native';
import IntroContainer from './screens/Intro/IntroContainer';
import WellcomeContainer from './screens/Wellcome/WellcomeContainer';
import HallFameContainer from '../src/screens/HallFame/HallFameContainer';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            token: null,
        };

        console.log(props)
    }

    async componentDidMount() {
        try {
            const result = JSON.parse(await AsyncStorage.getItem("loginToken"));
            this.setState({
                token: result,
            });
        } catch (error) {
          alert(error.message)
        }
        this.setLoginToken();
    }

    async setLoginToken () {
        try {
            const result = await AsyncStorage.setItem("loginToken", "123456");
            console.log("Success");
        } catch (error) {
            alert(error.message);
        }
    }

    async getLoginToken () {
        console.log("in login")
        try {
            const result = await AsyncStorage.getItem("loginToken");
            this.setState({
                token: result,
            });
        } catch(error) {
            console.log(error);
        }
    }

    getLoginToken() {

    }

    render() {
        return(
            <View style={styles.container}>
                {this.state.token ? <WellcomeContainer navigation={this.props.navigation} /> : <IntroContainer navigation={this.props.navigation}/>}
            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1d0847',
        flex: 1,
    }
})
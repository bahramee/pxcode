import React, { Component, useState } from 'react';
import { Animated, BackHandler } from 'react-native';
import Wellcome from './Wellcome'
import shuffleSeed from 'shuffle-seed';

export default class WellcomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1),
            scaleAnim: new Animated.Value(1),
            animationArray: [],
            textValue: 1,
        }
    }

    handleAndroidBackButton = callback => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            console.log('=============')
            return true;
        });
    };

    componentDidMount() {
        this.handleAndroidBackButton();
        this.setState({
            animationArray: [
                Animated.timing(this.state.scaleAnim, {
                    toValue: 1.5,
                    duration: 1000,
                }),
                Animated.timing(this.state.scaleAnim, {
                    toValue: 1.3,
                    duration: 1000,
                }),
                Animated.timing(this.state.fadeAnim, {
                    toValue: 0.8,
                    duration: 1000,
                }),
                Animated.timing(this.state.fadeAnim, {
                    toValue: 0.2,
                    duration: 1000,
                }),
                Animated.timing(this.state.scaleAnim, {
                    toValue: 1.6,
                    duration: 1000,
                }),
                Animated.timing(this.state.fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                }),
            ]
        })
        // this.runAnimation(this.state.animationArray);
    }

    saveShuffleOnPress = () => {
        let shuffleArray = this.state.animationArray;
        if(this.state.textValue > 0 && this.state.textValue < this.state.animationArray.length - 1)
        {
            // this.runAnimation(animationArray, 'stop')
            shuffleArray = shuffleSeed.shuffle(shuffleArray, Math.random() * 100);
            const space = shuffleArray.splice(this.state.textValue - 1, 1);
            shuffleArray.unshift(...space);
        }
        else {
            shuffleArray = shuffleSeed.shuffle(shuffleArray, Math.random() * 100);
        }

        setTimeout(() => {
            this.runAnimation(shuffleArray, 'start');
        }, 2000);
    }

    runAnimation = (animationArray, status) => {
        Animated.loop(
            Animated.sequence(animationArray),
            {
                iterations: -1,
            }
        )[status]();
    }

    onTextChange = (text) => {
        this.setState({
            textValue: text,
        });
    }

    render() {
        return(
            <Wellcome 
                fadeAnim={this.state.fadeAnim} 
                scaleAnim={this.state.scaleAnim}
                saveShuffleOnPress={this.saveShuffleOnPress}
                onTextChange={this.onTextChange}
                navigation={this.props.navigation}
            />
        )
    }
}
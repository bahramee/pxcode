import React, { Component } from 'react';
import Intro from './Intro'

export default class IntroContainer extends Component {

    onPressWellcome = () => {
        // navigation
    }

    render() {
        return(
            <Intro onPressWellcome={this.onPressWellcome}/>
        )
    }
}
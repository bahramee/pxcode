import React, { Component } from 'react';
import TouchableBtn from './TouchableBtn'

class TouchableBtnContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableBtn {...this.props}/>
        )
    }
}

export default TouchableBtnContainer;
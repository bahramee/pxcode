import React, { Component } from 'react';
import CustomInput from './CustomInput'

class CustomInputContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <CustomInput {...this.props}/>
        )
    }
}

export default CustomInputContainer;
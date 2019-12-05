import React, { Component } from 'react';
import HallFame from './HallFame';
import axios from 'axios';

export default class HallFameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log('=======')
        axios.get('https://halloffame-server.herokuapp.com/fames?guest=true').then((result) => {
            this.setState({
                data: result.data.data.list
            })
        })
    }

    render() {
        return(
            <HallFame list={this.state.data}/>
        )
    }
}
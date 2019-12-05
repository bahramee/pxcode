import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const TouchableBtn = (props) => {
    return(

        <TouchableHighlight 
            style={styles.container}
            {...props}
            // onPress={() => props.onPress}
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    )
}

export default TouchableBtn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e734f',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    }
})
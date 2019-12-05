import React from 'react';
import { 
    View, 
    TextInput,
    StyleSheet,
} from 'react-native';

const CustomInput = (props) => {
    return(
        <View>
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 10,
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        margin: 15,
        borderRadius: 5,
        fontSize: 18,
        color: '#1d0847'
    }
})
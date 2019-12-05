import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image
} from 'react-native';

const HallFame = (props) => {
    console.log('lol', props.item)
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{ width: 50, height: 50 }}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{props.item.name}</Text>
                <Text style={styles.id}>{props.item.id}</Text>
                <Text>{props.item.dob}</Text>
            </View>
        </View>
    )
}

export default HallFame;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        marginVertical: 5,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
    imageContainer: {
        backgroundColor: '#000',
        marginRight: 15,
    }
})
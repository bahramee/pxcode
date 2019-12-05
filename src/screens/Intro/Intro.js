import React from 'react';
import { 
    View, 
    Text, 
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const Intro = (props) => {
    return(
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}
                style={styles.sliderContainer}
                horizontal
                decelerationRate={0}
            >
                <View onPress={props.onPressWellcome} style={[styles.sildeItem, { flex: 1 }]}>
                    <Text style={styles.slideText}>Wellcome</Text>
                </View>
                <View style={styles.sildeItem}>
                    <Text style={styles.slideText}>Hall Fame</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Intro;

const styles = StyleSheet.create({
    container: {

    },
    sliderContainer: {
        width: '100%',
        backgroundColor: '#fff',

    },
    sildeItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#000',
    },
    slideText: {
        fontSize: 44,
        color: '#FFF',
    }
})
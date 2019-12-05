import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    Animated,
} from 'react-native';
import { TouchableBtn, CustomInput } from '../../components/';

const Wellcome = (props) => {
    const {navigate} = props.navigation;
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <CustomInput 
                    onChangeText={text => props.onTextChange(text)}
                    keyboardType="numeric"
                    defaultValue="1"
                />
                <View style={styles.stage}>
                    <Animated.View style={[styles.animateBox, { opacity: props.fadeAnim, transform:[{scale: props.scaleAnim}] }]}>
                        
                    </Animated.View>
                </View>
            </View>
            <View>
                <TouchableBtn onPress={() => navigate('HallFame')} text="Hall of fame"/>
                <TouchableBtn onPress={() => props.saveShuffleOnPress()} text="save"/>
            </View>
        </View>
    )
}

export default Wellcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    stage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    },
    btnContainer: {
        backgroundColor: '#0e734f',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    animateBox: {
        width: 100,
        height: 100,
        backgroundColor: '#ff3355'
    }
});
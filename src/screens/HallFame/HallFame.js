import React from 'react';
import { 
    View, 
    Text,
    ScrollView,
} from 'react-native';
import Fame from './Fame';

const HallFame = (props) => {
    console.log('heeeeey', props.list)
    return(
        <View>
            <ScrollView>
                {
                   props.list.map((item) => {
                        return(<Fame item={item}/>)
                    })

                }
            </ScrollView>
        </View>
    )
}

export default HallFame;
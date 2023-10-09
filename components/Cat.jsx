import React, { useState } from 'react';
import {Text, Button} from 'react-native';

const Cat = ({name, isHungry}) => {

    let [status, setStatus] = useState(isHungry ? 'hungry' : 'full')

    return (
        <>
            <Text>Hello, I'm {name} and I'm {status}</Text>
            <Button onPress={() => setStatus('full')} title='Feed cat!'/>
        </>
    )
};

export default Cat

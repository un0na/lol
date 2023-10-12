import React, { useState } from 'react';
import {Text, Button} from 'react-native';


const Hamster = ({name,color,isHungry}) => {

    let [status, setStatus] = useState(isHungry ? 'hungry' : 'full')
    let [isDisabled, setIsDisabled] = useState(false);
    
    const feed = () => { 
        setStatus('full');
        setIsDisabled(true);
      }

    return (
        <>
           <Text>Hello, I'm {name} and I'm {status}. My color is {color}</Text>
           <Button onPress={feed} disabled={isDisabled} title='Feed hamster!'/>
        </>
    )

};

export default Hamster
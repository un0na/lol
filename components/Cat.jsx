import React from 'react';
import {Text} from 'react-native';

const Cat = ({name,thirst,hunger}) => {

    let hugeryStatus = ""
    if (hunger >= 0.5) {
        if (thirst >= 0.5) {
            hugeryStatus = "full!"
        } else {
            hugeryStatus = "hungry!"
        }
    } else {
        hugeryStatus = "hungry!"
    }
    return <Text>Hello, I'm <Text style={{color:"blue"}}>{name}</Text> and I'm {hugeryStatus}</Text>
};

export default Cat

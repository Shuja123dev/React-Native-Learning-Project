import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ColorChangers from '../Components/ColorChangers'
import ColorSquare from '../Components/ColorSquare';

const ColorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(red);

    return (
        <View>
            <ColorChangers color='Red'
                increseColor={() => setRed(red + 1)}
                decreaseColor={() => setRed(red - 1)}
            />
            <ColorChangers color='Green'
                increseColor={() => setGreen(green + 1)}
                decreaseColor={() => setGreen(green - 1)}
            />
            <ColorChangers color='Blue'
                increseColor={() => setBlue(blue + 1)}
                decreaseColor={() => setBlue(blue - 1)}
            />
            <ColorSquare />
        </View>
    )
}

export default ColorScreen
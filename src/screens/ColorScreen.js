import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ColorChangers from '../Components/ColorChangers'
import ColorSquare from '../Components/ColorSquare';

const ColorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const color = `rgb(${red}, ${green}, ${blue})`;

    return (
        <View>
            <ColorChangers color='Red'
                increseColor={() => setRed(red + 10)}
                decreaseColor={() => setRed(red - 10)}
            />
            <ColorChangers color='Green'
                increseColor={() => setGreen(green + 10)}
                decreaseColor={() => setGreen(green - 10)}
            />
            <ColorChangers color='Blue'
                increseColor={() => setBlue(blue + 10)}
                decreaseColor={() => setBlue(blue - 10)}
            />
            <ColorSquare bgColor={color} />
        </View>
    )
}

export default ColorScreen
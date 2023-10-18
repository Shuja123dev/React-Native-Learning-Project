import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ColorChangers from '../Components/ColorChangers'
import ColorSquare from '../Components/ColorSquare';

const ColorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const color = `rgb(${red}, ${green}, ${blue})`;

    const setColor = (color, setter) => {
        if (color < 0 || color > 255) {
            return;
        }
        setter(color);
    }

    return (
        <View>
            <ColorChangers color='Red'
                increseColor={() => setColor(red + 1, setRed)}
                decreaseColor={() => setColor(red - 1, setRed)}
            />
            <ColorChangers color='Green'
                increseColor={() => setColor(green + 1, setGreen)}
                decreaseColor={() => setColor(green - 1, setGreen)}
            />
            <ColorChangers color='Blue'
                increseColor={() => setColor(blue + 1, setBlue)}
                decreaseColor={() => setColor(blue - 1, setBlue)}
            />
            <ColorSquare bgColor={color} />
        </View>
    )
}

export default ColorScreen
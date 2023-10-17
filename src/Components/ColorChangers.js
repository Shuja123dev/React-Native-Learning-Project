import React from 'react'
import { Button, Text, View } from 'react-native'

const ColorChangers = ({ color, increseColor, decreaseColor }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={increseColor} />
            <Button title={`Decrease ${color}`} onPress={decreaseColor} />
        </View>
    )
}

export default ColorChangers
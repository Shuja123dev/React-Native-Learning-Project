import React from 'react'
import { Button, View } from 'react-native'

const Component2 = () => {
    return (
        <View>
            <Button onPress={() => console.log("Button CLicked")} title='Click me !' />
        </View>
    )
}

export default Component2
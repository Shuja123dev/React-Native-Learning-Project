import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return (
        <View>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10
    }
})

export default TextScreen
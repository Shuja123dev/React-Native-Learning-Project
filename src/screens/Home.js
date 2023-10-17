import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text style={textStyle.style1}>This is my app</Text>
            <TouchableOpacity onPress={() => navigation.navigate("userList")}>
                <Text>Go to Users!</Text>
            </TouchableOpacity>
        </View>
    )
}

const textStyle = StyleSheet.create({
    style1: {
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default Home
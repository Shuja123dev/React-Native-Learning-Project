import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ColorSquare = ({ bgColor }) => {

    const styles = StyleSheet.create({
        colorBox: {
            height: 100,
            width: 100,
            margin: 10,
            backgroundColor: bgColor
        }
    })

    return (
        <>
            <View style={styles.colorBox}>
            </View>
            <Text>{bgColor}</Text>
        </>
    )

}


export default ColorSquare
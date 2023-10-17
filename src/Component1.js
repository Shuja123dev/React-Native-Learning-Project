import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const Component1 = () => {

    const dataArr = [
        { name: 'User 1' },
        { name: 'User 2' },
        { name: 'User 3' },
        { name: 'User 4' },
        { name: 'User 5' },
        { name: 'User 6' },
        { name: 'User 7' },
        { name: 'User 8' },
        { name: 'User 9' },
    ]

    return (
        <>
            <FlatList
                keyExtractor={(user) => user.name}
                data={dataArr}
                renderItem={({ item }) => {
                    return <Text style={styles.listStyles}>{item.name}</Text>
                }} />
        </>
    )
}

const styles = StyleSheet.create({
    listStyles: {
        marginVertical: 40,
        marginHorizontal: 10
    }
})

export default Component1
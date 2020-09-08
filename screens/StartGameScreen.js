import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StartGameScreen = () => {
    return (
        <View style={styles.gameScreen}>
            <Text>The Game Screen</Text>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    gameScreen: {
        flex:1,
        paddingTop: 20,
        alignItems:'center',
        justifyContent:'center'
       
    }
})

import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const StartGameScreen = () => {
    return (
        <View style={styles.gameScreen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput  />
            </View>
            <View style={styles.btnContainer}>
                <Button title="Reset" />
                <Button title="Confirm" />
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    gameScreen: {
        flex:1,
        paddingTop: 20,
        alignItems:'center',
    },
    title: {
        fontSize:20,
        marginVertical:10
    },
    inputContainer: {
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    btnContainer: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        

    }

})

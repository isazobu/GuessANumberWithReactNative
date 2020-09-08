import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card : {
        shadowColor:'black',
        shadowOffset:{ width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 2,
        elevation: 20,
        backgroundColor: '#ffc93c',
        margin:20,
        padding:20,
        borderRadius:10
        
    },
})
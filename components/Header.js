import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors';
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 36,
        height: 80,
        backgroundColor: Colors.primary,
        alignItems:'center',
        justifyContent: 'center'
        
    },
    headerTitle: {
        color: 'black',
        fontSize: 20
    }
})

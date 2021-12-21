import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { theme } from '../../../core/theme';

export const Heading2 = ({ heading }) => {
    return (
        <View style={styles.heading}>
            <Title style={styles.text}>{heading}</Title>
            <View style={styles.border}></View>
        </View>
    );
};


const styles = StyleSheet.create({
    heading: {
        height: 'auto',
        marginBottom: 5
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 13
    },
    border: {
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 0.5,
        marginLeft: '30%',
        marginRight: '30%' 
    },

});

export default memo(Heading2);
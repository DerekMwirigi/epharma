import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { theme } from '../../core/theme'

export const NoRecords = ({ message }) => {

    return (
        <View style={styles.holder}>
            <Title style={styles.message}>{message}</Title>
        </View>
    );
};


const styles = StyleSheet.create({
    holder: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        alignContent: 'center',
    },
    message: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        alignContent: 'center'
    }
});

export default memo(NoRecords);



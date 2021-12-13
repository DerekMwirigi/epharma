import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, TouchableRipple } from 'react-native-paper';
import { theme } from '../../../core/theme';
const CardBalance = ({ balance, onPressHandler }) => (
    <TouchableRipple
        onPress={() => { onPressHandler(balance) }}
        rippleColor="#dedede"
        style={{ backgroundColor: '#fff', margin: 0, borderRadius: 5 }}>
        <View style={styles.card}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', alignContent: 'flex-start', alignSelf: 'flex-start' }}>
                {/* <View style={{ alignSelf: 'center', height: 35, width: 35, backgroundColor: '#EDEDED', borderRadius: 15, }}>
                    <Title style={{
                        fontSize: 15, alignContent: 'center', alignSelf: 'center', textAlign: 'center', textTransform: 'uppercase', alignItems: 'center', fontWeight: 'bold', justifyContent: 'center',
                        backgroundColor: '#F9A800', borderRadius: 15, color: '#FFF', height: 30, width: 30,
                    }}>{balance.label.charAt(0)}</Title>
                </View> */}
                <Title style={styles.label}>{balance.label}</Title>
                <Title style={styles.text}>{balance.value}/=</Title>
            </View>
        </View>
    </TouchableRipple>
);

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        padding: 2,
        margin: 1,
        borderRadius: 5,
        shadowColor: '#EDEDED',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 0.3
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: theme.fonts.font15,
        margin: 5,
        color: 'black',
        textTransform: 'uppercase',
        flex: 1,
    },
    text: {
        textAlign: 'left',
        fontSize: theme.fonts.font15,
        margin: 5,
        color: theme.colors.primary,
        fontWeight: 'bold',
        alignItems: 'flex-end',
        textTransform: 'capitalize',
    },
    icon: {
        alignSelf: 'center',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
});

export default memo(CardBalance);
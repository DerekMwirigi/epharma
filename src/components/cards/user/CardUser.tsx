import React, { memo } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Card, Title, TouchableRipple } from 'react-native-paper';
import { USER_ROLES } from '../../../const/User';
import { theme } from '../../../core/theme';
const CardUser = ({ user, onPressHandler }) => (
    <TouchableRipple
        onPress={() => { onPressHandler(user) }}
        rippleColor="#dedede"
        style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff', margin: 10, borderRadius: 5 }}>
        <View style={styles.card}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', alignContent: 'flex-start', alignSelf: 'flex-start' }}>
                <View style={{ alignSelf: 'center', height: 35, width: 35, backgroundColor: '#EDEDED', borderRadius: 15, }}>
                    <Title style={{
                        fontSize: 15, alignContent: 'center', alignSelf: 'center', textAlign: 'center', textTransform: 'uppercase', alignItems: 'center', fontWeight: 'bold', justifyContent: 'center',
                        backgroundColor: '#F9A800', borderRadius: 15, color: '#FFF', height: 30, width: 30,
                    }}>{user.name.split(', ')[0].charAt(0)}{(user.name.split(' ').length > 1) ? user.name.split(' ')[1].charAt(0) : ''}</Title>
                </View>
                <Title style={{ fontSize: 15, alignSelf: 'center', paddingLeft: 10, textAlign: 'left', fontWeight: 'bold' }}>{user.name}</Title>
            </View>
            <View style={styles.info}>
                <View style={styles.names}>
                    <Title style={styles.label}>Phone No.</Title>
                    <Title style={styles.text}>{user.phone}</Title>
                </View>
                <View style={styles.names}>
                    <Title style={styles.label}>Role</Title>
                    <Title style={styles.text}>{USER_ROLES[user.role]["label"]}</Title>
                </View>
                <View style={styles.names}>
                    <Title style={styles.label}>Status</Title>
                    <Title style={styles.text}>{ }</Title>
                </View>
            </View>
        </View>
    </TouchableRipple>
);

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#EDEDED',
        alignItems: 'center'
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        borderTopColor: '#EDEDED',
        borderTopWidth: 0.5,
        width: '100%'
    },
    names: {
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: 0.5,
        borderRightColor: '#EDEDED',
        margin: 5
    },
    label: {
        textAlign: 'center',
        fontSize: theme.fonts.font11,
        color: 'grey',
        marginTop: -10
    },
    text: {
        textAlign: 'center',
        fontSize: theme.fonts.font13,
        fontWeight: 'bold',
        marginTop: -10
    },
    icon: {
        alignSelf: 'center',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default memo(CardUser);
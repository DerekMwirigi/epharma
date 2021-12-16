import React, { memo } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Card, Title, TouchableRipple } from 'react-native-paper';
import { theme } from '../../../core/theme';

const getIcon = (icon) => {
    switch (icon) {
        case 'favicon.png':
            return require('../../../../assets/actions/favicon.png');
        case 'profile.png':
            return require('../../../../assets/actions/profile.png');
    }
}
const ActionBtns1 = ({ action, onPressHandler }) => (
    <TouchableRipple
        onPress={() => onPressHandler(action)}
        rippleColor="#dedede" style={styles.card}>
        <View >
            <View style={styles.icon_place}>
                <Image style={styles.icon} source={getIcon(action.icon)} />
            </View>
            <Title style={styles.label}>{action.label}</Title>
        </View>
    </TouchableRipple>
);

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        padding: 4,
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        borderColor: '#EDEDED',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: theme.colors.white,

    },
    label: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: theme.fonts.font13,
    },
    icon_place: {
        width: 34,
        height: 34,
        backgroundColor: theme.colors.white,
        alignSelf: 'center',
        justifyContent:"center",
        borderRadius: 15,
        elevation: 2,
    },
    icon: {
        alignSelf: 'center',
        width: 24,
        height: 24,
    }
});

export default memo(ActionBtns1);
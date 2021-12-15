import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { theme } from '../../../core/theme';
import moment from "moment";

const CardPharmacy = ({ pharmacy }) => (
    <View style={styles.card}>
        <Image source={require("../../../../assets/core/favicon.png")} style={styles.logo} />
        <View style={styles.details}>
            <Title style={styles.name}>{pharmacy.name}</Title>
            <Title style={styles.tag}>{pharmacy.tag}</Title>
            <Title style={styles.tag}>{pharmacy.phone} | {pharmacy.website}</Title>
        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        flex: 2,
        flexDirection: 'row',
        margin: 2,
        padding: 15,
        backgroundColor: theme.colors.white,
        bpharmacyRadius: 8
    },
    logo: { height: 100, width: 100, alignSelf: 'center'},
    details: {
        flex: 1,
        flexDirection: 'column',
        padding: 3 
    },
    name: {
        fontSize: theme.fonts.font12,
        textTransform: 'uppercase',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    tag: {
        fontSize: theme.fonts.font10,
        textAlign: 'left',
        fontWeight: 'normal'
    },
    website: {
        fontSize: theme.fonts.font10,
        textAlign: 'left',
        fontWeight: 'normal'
    }
   
});

export default memo(CardPharmacy);

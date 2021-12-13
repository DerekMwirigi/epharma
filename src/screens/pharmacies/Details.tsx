import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, ActivityIndicator, FlatList, Linking, Text, TextInput, View } from 'react-native';
import { Title, TouchableRipple } from 'react-native-paper';
import { platform_styles } from '../../core/styles';
import { Navigation } from '../../types';
import { Pharmacy } from '../../models/Pharmacy'
import { ViewMap } from '../../components/views/map/GoogleMapView';
import { Heading2 } from '../../components/views/heading/Headings2';
import { AppUtils } from '../../utils/AppUtils';
import CardPharmacy from '../../components/cards/pharmacy/CardPharmacy';

type Props = {
    navigation: Navigation
};
export const PharmacyDetails = ({ navigation }: Props) => {

    const [pharmacy, setPharmacy] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);

    useEffect(() => {
        setPharmacy(navigation['state']['params']['pharmacy']);
        setLoading(false);
        if (Platform.OS === 'web') {
            setPlatFormTheme(platform_styles.web);
        } else {
            setPlatFormTheme(platform_styles.android);
        }
    }, []);

    return (
        <View style={platformTheme}>
            {isLoading ? <ActivityIndicator size="small"
                color="#F9A800"
                style={platform_styles.activityIndicator} /> : (
                <View style={styles.content}>
                    <View style={styles.top}>
                        <CardPharmacy pharmacy={pharmacy} />
                    </View>
                    <View style={styles.map}>
                        <Heading2 heading={'Location'} />
                        <ViewMap />
                    </View>
                    <View style={styles.stock}>
                        <Heading2 heading={'Meds'} />
                        <FlatList
                            data={[]}
                            numColumns={1}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <TouchableRipple
                                    onPress={() => console.log(item)}
                                    rippleColor="rgba(0, 0, 0, .32)">
                                    {/* <CardOrderIssue issue={item} /> */}
                                </TouchableRipple>
                            )}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
       height: '100%'
    },
    top: {
        height: 145,

    },
    map: {
        backgroundColor: '#f0f0f0',
        height: 250
    },
    stock: {
        
    }
});
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, ActivityIndicator, FlatList, View, SafeAreaView, StatusBar, ToastAndroid } from 'react-native';
import { platform_styles } from '../../core/styles';
import { Navigation } from '../../types';
import { Session, User } from '../../models/Users';
import { AppStorage } from '../../core/utils';
import { theme } from '../../core/theme';
import { TouchableRipple } from 'react-native-paper';
import CardPharmacy from '../../components/cards/pharmacy/CardPharmacy';
import NoRecords from '../../components/views/NoRecords';
import { Pharmacy } from '../../models/Pharmacy';
import { PharmacyTasks } from '../../tasks/PharmacyTasks';
import { AppUtils } from '../../utils/AppUtils';

type Props = {
    navigation: Navigation;
};
export const PharmacyList = ({ navigation }: Props) => {
    const [isLoading, setLoading] = useState(true);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);
    const [user, setUser] = useState(null);
    const [pharmacies, setPharmacies] = useState([
            {name: 'Pharmacy 1', tag: 'Tred', phone: '020000', email: '', website: 'www.dsd.com', active: true, created_on: ''}, 
            {name: 'Pharmacy 2', tag: 'Tred', phone: '020000', email: '', website: 'www.dsd.com', active: true, created_on: ''}, 
            {name: 'Pharmacy 3', tag: 'Tred', phone: '020000', email: '', website: 'www.dsd.com', active: true, created_on: ''}, 
        ]);

    useEffect(() => {
        setLoading(false);

        AppStorage.getObjectData('session')
            .then((session: Session) => {
                session.user.role = 10;
                setUser(session.user);
                setLoading(false);
                fetchPharmacies('', '', '', '');
            })
            .catch((error) => {
                console.error(error)
            });

        if (Platform.OS === 'web') {
            setPlatFormTheme(platform_styles.web);
        } else {
            setPlatFormTheme(platform_styles.android);
        }
    }, []);

    const pharmacyClickHandler = (pharmacy: Pharmacy) => {
        navigation.navigate('PharmacyDetails', {
            'pharmacy': pharmacy
        });
    }

    const fetchPharmacies = (longitude: string, latitude: string, distance: string, query: string) => {
        if (user != null) {
            setLoading(true);
            PharmacyTasks.list(longitude, latitude, distance, query)
                .then((res) => {
                    AppUtils.printLog(res);
                    setPharmacies(res.data.results);
                    setLoading(false);
                })
                .catch((er) => {
                    console.error('Error here', er);
                    ToastAndroid.show(er, ToastAndroid.LONG);
                    setLoading(false);
                });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle={'default'}
                hidden={false} />
            <View style={styles.content}>
                    {(pharmacies.length > 0) ? <FlatList
                        data={pharmacies}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <TouchableRipple
                                onPress={() => pharmacyClickHandler(item)}
                                rippleColor="rgba(0, 0, 0, .32)">
                                <CardPharmacy pharmacy={item} />
                            </TouchableRipple>
                        )}
                    /> : (
                        <NoRecords message={'Sorry no records found'} />
                    )}
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        margin: -10
    },
    top: {
        backgroundColor: theme.colors.primary,
        height: '20%',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    middle: {
        height: '77.8%',
        flex: 1,
        flexDirection: 'column',
        marginTop: 0
    },
    balances: {
        height: '70%',
        alignItems: 'stretch',

    },
    action_btns: {
        height: '20%',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    bottom: {
        backgroundColor: '#F9A800',
        height: '0.2%'
    }
});
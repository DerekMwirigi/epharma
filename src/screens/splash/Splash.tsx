import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, ActivityIndicator, View, PermissionsAndroid } from 'react-native';
import { Title } from 'react-native-paper';
import { platform_styles } from '../../core/styles';
import { AppStorage } from '../../core/utils';
import { Session } from '../../models/Users';
import { Navigation } from '../../types';

type Props = {
    navigation: Navigation;
};
export const Splash = ({ navigation }: Props) => {
    const [isLoading, setLoading] = useState(false);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.LOCATION,
                {
                    title: "Location Permission",
                    message:
                        'We need access to your location ' +
                        'so you can get live quality updates.',
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
            } else {
                console.log("Location permission denied");
            }

            const backgroundgranted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
                {
                    title: 'Background Location Permission',
                    message:
                        'We need access to your location ' +
                        'so you can get live quality updates.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (backgroundgranted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
            }
        } catch (err) {
            console.warn(err);
        }
    };



    useEffect(() => {


        // const watchID = navigator.geolocation.watchPosition(
        //     position => {
        //         // const { coordinate, routeCoordinates, distanceTravelled } = state;
        //         const { latitude, longitude } = position.coords;

        //         const newCoordinate = {
        //             latitude,
        //             longitude
        //         };
        //         if (Platform.OS === "android") {
        //            console.log(newCoordinate);
                   
        //         } else {
        //             // coordinate.timing(newCoordinate).start();
        //         }
        //         console.log(newCoordinate);
        //     },
        //     error => console.log(error),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );

        AppStorage.getObjectData('session', { status: false })
            .then((res: Session) => {
                navigation.navigate(res.status ? 'App' : 'Auth', {});
            })
            .catch((error) => console.error(error))
            .finally(() => console.log('Done'));
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

                    </View>
                    <View style={styles.middle}>
                        <Title>epharma</Title>
                    </View>
                    <View style={styles.bottom}>

                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        margin: 0
    },
    top: {
        backgroundColor: '#F9A800',
        height: '0.1%',
        borderRadius: 10
    },
    middle: {
        height: '800%',
        flex: 1,
        flexDirection: 'column',
        marginTop: -80
    },
    bottom: {
        backgroundColor: '#F9A800',
        height: '0.2%'
    }
});
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Image, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { platform_styles } from '../../core/styles';
import { Navigation } from '../../types';
import * as UserConstants from '../../const/User';
import { AppStorage } from '../../core/utils';
import { theme } from '../../core/theme';
import { StatusBar } from 'react-native';
import Button from '../../components/core/Button';

type Props = {
    navigation: Navigation;
};
export const UserProfile = ({ navigation }: Props) => {
    const [isLoading, setLoading] = useState(true);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLoading(false);
        setUser(UserConstants.SESION.user)

        if (Platform.OS === 'web') {
            setPlatFormTheme(platform_styles.web);
        } else {
            setPlatFormTheme(platform_styles.android);
        }
    }, []);

    const onLogoutPressed = () => {
        AppStorage.storeObjectData('session', { status: false, user: null })
            .then(() => {
                navigation.navigate('Starpup', {});
            }).catch((error) => {

            })
    }

    return (
        <View style={styles.content}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle={'default'}
                hidden={false} />
            {isLoading ? <ActivityIndicator size="small"
                color={theme.colors.primary}
                style={platform_styles.activityIndicator} /> : (
                <View style={{ flex: 1, flexDirection: 'column', height: 'auto' }}>
                    <View style={styles.header}>
                    </View>
                    <View style={styles.logo}>
                        <Image source={require("../../../assets/core/favicon.png")} style={{ height: 70, width: 70 }} />
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button style={{}} mode="contained" onPress={onLogoutPressed}>
                            Logout
                        </Button>
                    </View>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        height: '100%',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: theme.colors.primary,
        height: '15%',
        alignItems: 'flex-start'
    },
    logo: {
        marginTop: -50,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii.raduis40,
        height: 100,
        width: 100,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 2,

    },
    showPassword: {
        width: '100%',
        alignItems: 'flex-end',
        fontSize: theme.fonts.font13,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: theme.fonts.font13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

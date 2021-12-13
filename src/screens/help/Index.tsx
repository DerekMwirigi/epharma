import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, ActivityIndicator, View } from 'react-native';
import { base_url, help } from '../../const/URLEndpoints';
import { platform_styles } from '../../core/styles';
import { Navigation } from '../../types';

type Props = {
    navigation: Navigation;
};
export const HelpIndex = ({ navigation }: Props) => {
    const [isLoading, setLoading] = useState(true);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);

    useEffect(() => {
        fetch(base_url() + help.index)
            .then((response) => response.json())
            .then((json) => {

            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

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
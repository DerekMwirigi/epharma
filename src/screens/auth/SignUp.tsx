import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Image, ActivityIndicator, View, TouchableOpacity, ScrollView, ToastAndroid, } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import Button from '../../components/core/Button'
import TextInput from '../../components/core/TextInput'
import Background from '../../components/core/Background'
import { platform_styles } from '../../core/styles';
import { Navigation } from '../../types';
import { Title } from 'react-native-paper';
import { theme } from '../../core/theme'
import { nameValidator } from '../../helpers/nameValidator'
import { usernameValidator } from '../../helpers/usernameValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { StatusBar } from 'react-native';
import { db } from '../../../firebase';

type Props = {
    navigation: Navigation;
};
export const SignUp = ({ navigation }: Props) => {
    const [networkConnection, setNetworkConnectionState] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);

    const [first_name, setFirstname] = useState({ value: '', error: '' })
    const [last_name, setLastname] = useState({ value: '', error: '' })
    const [phone, setUserphone] = useState({ value: '', error: '' })
    const [username, setUsername] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {

        NetInfo.addEventListener(state => {
            setNetworkConnectionState(state.isConnected);
        });
        if (Platform.OS === 'web') {
            setPlatFormTheme(platform_styles.web);
        } else {
            setPlatFormTheme(platform_styles.android);
        }
    }, []);

    const onLoginPressed = () => {
        const firstnameError = nameValidator(first_name.value)
        const lastnameError = nameValidator(last_name.value)
        const phoneError = nameValidator(phone.value)
        const usernameError = usernameValidator(username.value)
        const passwordError = passwordValidator(password.value)
        if (usernameError || passwordError) {
            setFirstname({ ...first_name, error: firstnameError })
            setLastname({ ...last_name, error: lastnameError })
            setUserphone({ ...phone, error: phoneError })
            setUsername({ ...username, error: usernameError })
            setPassword({ ...password, error: passwordError })
            return
        }
        setLoading(true);
        db.collection("users").add({
            'uname': username.value,
            'pword': password.value
        }).then((res)=>{            
            ToastAndroid.show('Account created', ToastAndroid.LONG);
        }).catch(()=>{
            ToastAndroid.show('An error occured', ToastAndroid.LONG);
        });
    }

    return (
        <View style={styles.content}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle={'default'}
                hidden={true} />

            <Background source={require('../../../assets/core/bg.jpg')}>
                {isLoading ? <ActivityIndicator size="large"
                    color={theme.colors.white}
                    style={platform_styles.activityIndicator} /> : (
                    <View style={{ height: 'auto', backgroundColor: theme.colors.white, justifyContent: 'center', borderRadius: 10, elevation: 2 }}>
                        <View style={styles.logo}>
                            <Image source={require("../../../assets/core/favicon.png")} style={{ height: 70, width: 70 }} />
                        </View>
                        <View style={{ margin: 10 }}>
                            <TextInput
                                label="First name"
                                returnKeyType="next"
                                value={first_name.value}
                                onChangeText={(text: string) => setFirstname({ value: text, error: '' })}
                                error={!!first_name.error}
                                errorText={first_name.error}
                                autoCapitalize="none"
                                description="First name"
                            />
                            <TextInput
                                label="Last name"
                                returnKeyType="next"
                                value={last_name.value}
                                onChangeText={(text: string) => setLastname({ value: text, error: '' })}
                                error={!!last_name.error}
                                errorText={last_name.error}
                                autoCapitalize="none"
                                description="Last name"
                            />
                            <TextInput
                                label="Email"
                                returnKeyType="next"
                                value={username.value}
                                onChangeText={(text: string) => setUsername({ value: text, error: '' })}
                                error={!!username.error}
                                errorText={username.error}
                                autoCapitalize="none"
                                description="Email"
                            />
                            <TextInput
                                label="Phone"
                                returnKeyType="next"
                                value={phone.value}
                                onChangeText={(text: string) => setUserphone({ value: text, error: '' })}
                                error={!!phone.error}
                                errorText={phone.error}
                                autoCapitalize="none"
                                description="Email"
                            />
                            <TextInput
                                label="Password"
                                returnKeyType="done"
                                value={password.value}
                                onChangeText={(text: string) => setPassword({ value: text, error: '' })}
                                error={!!password.error}
                                errorText={password.error}
                                secureTextEntry
                                description="Password"
                            />

                            {/* <Checkbox.Item
                            label="Show password"
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            style={styles.showPassword}
                        /> */}

                            <Button style={{ marginTop: 10, fontWeight: 'bold' }} mode="contained" onPress={onLoginPressed}>
                                Sign up
                            </Button>

                            <View style={styles.forgotPassword}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('SignIn', {})}
                                >
                                    <Title style={styles.forgot}>Have a account? Sign in</Title>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )}
            </Background>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        height: '100%',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: theme.colors.primary,
        height: '30%',
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

import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { platform_styles } from '../../core/styles';
import { Navigation } from '../../types';
import CardUser from '../../components/cards/user/CardUser';
import { theme } from '../../core/theme';
import { Session, User } from '../../models/Users';
import { AppStorage } from '../../core/utils';
import { USER_ACTION_OPTIONS } from '../../const/User';
import ActionBtns1 from '../../components/cards/landing/ActionBtns1';

type Props = {
    navigation: Navigation;
};
export const Landing = ({ navigation }: Props) => {
    const [isLoading, setLoading] = useState(true);
    const [platformTheme, setPlatFormTheme] = useState(platform_styles.web);
    const [action_btns_1, setActionBtns1] = useState([]);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setLoading(true);
        AppStorage.getObjectData('session')
            .then((session: Session) => {                
                setUser(session.user);
                loadActionOptions(session.user);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error)
            });
    }, []);

   
    const actionBtns1ClickHandler = (action: { screen: string; }) => {
        navigation.navigate(action.screen, action);
    }

    const userProfileClickHandler = (user: User) => {
        navigation.navigate('UserProfile', user);
    }

    const loadActionOptions = (user: User) => {
        setActionBtns1(USER_ACTION_OPTIONS['USERS']);
    }
       

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle={'default'}
                hidden={false} />
            <View style={platformTheme}>
                {isLoading ? <ActivityIndicator size="small"
                    color={theme.colors.primary}
                    style={platform_styles.activityIndicator} /> : (
                    <View style={styles.content}>
                        <View style={styles.top}>
                            <CardUser user={user} onPressHandler={userProfileClickHandler} />
                        </View>
                        <View style={styles.middle}>
                            <FlatList
                                data={action_btns_1}
                                numColumns={3}
                                renderItem={({ item }) => (
                                    <ActionBtns1 action={item} onPressHandler={actionBtns1ClickHandler} />
                                )}
                            />
                        </View>
                        <View style={styles.bottom}>
                            
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        margin: -10,
        marginLeft: -50,
        marginRight: -50,
        justifyContent: 'center',
        alignSelf: "stretch",
        alignItems: 'stretch'
    },
    top: {
        backgroundColor: theme.colors.primary,
        height: '20%',
        margin: 0
    },
    middle: {
        height: '77.8%',
        flex: 1,
        flexDirection: 'column',
        marginTop: 0,
    },
    action_btns: {
        height: '20%',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    bottom: {
        backgroundColor: theme.colors.primary,
        height: '0.2%'
    }
});
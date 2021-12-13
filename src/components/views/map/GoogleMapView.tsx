import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Card, Title, TouchableRipple } from 'react-native-paper';

export const ViewMap = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <View style={styles.content}>
            {isLoading ? <ActivityIndicator /> : (
                <TouchableRipple
                    onPress={() => console.log('')}
                    rippleColor="#dedede"
                    style={{ height: '100%' }}>
                    <View style={styles.card}>
                        <Card style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 2
                        }}>
                            <Card.Content>

                            </Card.Content>
                        </Card>
                    </View>
                </TouchableRipple>

            )}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        margin: 0,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        margin: 2,
        padding: 5,
        borderRadius: 0
    },
});


import React from 'react';
import { View, Text , TouchableOpacity, StyleSheet , TextInput, StatusBar} from 'react-native';
import { Icon } from '@rneui/themed';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({  } : Props) =>
{
    return (
        <View>
            <StatusBar barStyle="light-content" />
            <TextInput
                style={styles.input}
                placeholder="Search"
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
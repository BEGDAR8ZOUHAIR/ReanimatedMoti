
import React from 'react';
import { View, Text,ScrollView, StyleSheet, TextInput, StatusBar } from 'react-native';
import { Icon} from '@rneui/themed';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { themeColors } from '../theme';
import Categories from '../components/Categories';

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({ }: Props) => {
    return (
        <View>
            <View style={styles.inputContainer}>
            <View style={styles.input}>
                <View style={styles.map}>
                    <Icon name="search" color="gray" size={30} />
                    <TextInput
                        placeholder="Search"
                    />
                </View>
                <View style={styles.map}>
                    <View style={styles.pipe} />
                        <Icon name="map" color="gray" size={20} />
                    <Text >
                        Casablanca, Mr
                    </Text>
                </View>
            </View>
            <View style={styles.tune}>
                <Icon name="tune" size={30} />
            </View>
           
            </View>
            {/* main  */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}
            >
                <Categories />
            </ScrollView>
        </View>
        
        
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    input: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        textAlign: 'center',
        width: '95%',
        },
    map: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    pipe: {
        height: "70%",
        width: 1,
        backgroundColor: 'gray',
        margin: 5
    },
    tune: {
        backgroundColor: themeColors.bgColor(1),
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },


})
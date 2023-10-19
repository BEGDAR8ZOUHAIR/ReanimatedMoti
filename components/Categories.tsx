import react ,{ useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { categories } from "../constants";
import { themeColors } from '../theme';



const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <View>
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}
            >
                {categories.map((item) => (
                    <View key={item.id} style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    text: {
        marginTop: 10,
        // color: themeColors.bgColor(1),
        color: "#334155",
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    imageContainer: {
        borderRadius: 50,
        backgroundColor: 'white',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


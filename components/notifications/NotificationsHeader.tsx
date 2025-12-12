import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainHeader() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>NOTIFICATIONS (3)</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="close-outline" size={SpacingScale.spaceL} color={Colors.white}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: SpacingScale.spaceXXL,
    padding: SpacingScale.spaceBase,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: FontSizes.fontsizeh4,
    color: Colors.white,
    fontWeight: 'bold'
  }
});

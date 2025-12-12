import { Colors, SpacingScale } from '@/constants/styles';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TransactionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.cameraButton} onPress={() => router.navigate('/camera-modal/camera-modal')}>
        <Text>Scan Check</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cameraButton: {
    backgroundColor: Colors.white,
    borderRadius: SpacingScale.spaceBase,
    flex: 1,
    padding: SpacingScale.spaceBase
  }
});

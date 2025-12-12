import { ScrollView, StyleSheet } from 'react-native';

export default function DocsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
